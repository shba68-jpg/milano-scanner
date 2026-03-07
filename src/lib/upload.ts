import { PDFDocument } from "pdf-lib";
import SparkMD5 from "spark-md5";
import { ref, uploadBytes } from "firebase/storage";
import {
  listScans,
  getScanPages,
  updateScanStatus,
  ScanMeta,
} from "./storage";
import { auth, storage } from "../firebase";

// ── Build PDF ──

export async function buildPdf(pages: Blob[]): Promise<Uint8Array> {
  const doc = await PDFDocument.create();
  for (const blob of pages) {
    const buf = new Uint8Array(await blob.arrayBuffer());
    const isPng = buf[0] === 0x89 && buf[1] === 0x50;
    const img = isPng ? await doc.embedPng(buf) : await doc.embedJpg(buf);
    const { width, height } = img.scale(1);
    const page = doc.addPage([width, height]);
    page.drawImage(img, { x: 0, y: 0, width, height });
  }
  return doc.save();
}

// ── MD5 Hash ──

export function hashBytes(data: Uint8Array): string {
  const spark = new SparkMD5.ArrayBuffer();
  spark.append(data.buffer);
  return spark.end();
}

// ── Upload one PDF to GCS via Firebase Storage ──

async function uploadOne(
  filename: string,
  pdfBytes: Uint8Array
): Promise<boolean> {
  const fileRef = ref(storage, filename);
  await uploadBytes(fileRef, pdfBytes, { contentType: "application/pdf" });
  return true;
}

// ── Generate filename ──

export function makeFilename(restaurant: string): string {
  const now = new Date();
  const d = now.toISOString().slice(0, 10);
  const t = now.toTimeString().slice(0, 8).replace(/:/g, "");
  return `${restaurant}_${d}_${t}.pdf`;
}

// ── Queue processor ──

type ProgressCb = (done: number, total: number, current: string) => void;

let running = false;

export async function processQueue(onProgress?: ProgressCb): Promise<void> {
  if (running) return;
  running = true;

  try {
    if (!auth.currentUser) return;

    const scans = await listScans();
    const pending = scans.filter(
      (s) => s.status === "pending" || s.status === "failed"
    );
    if (pending.length === 0) return;

    // Dedup: collect hashes of already-sent items
    const sentHashes = new Set(
      scans.filter((s) => s.status === "sent" && s.hash).map((s) => s.hash!)
    );

    let done = 0;
    for (const scan of pending) {
      onProgress?.(done, pending.length, scan.id);

      // Check dedup
      if (scan.hash && sentHashes.has(scan.hash)) {
        await updateScanStatus(scan.id, "sent", { filename: "כבר נשלח" });
        done++;
        continue;
      }

      await updateScanStatus(scan.id, "uploading");
      try {
        const pages = await getScanPages(scan.id);
        const pdfBytes = await buildPdf(pages);
        const filename = makeFilename(scan.restaurant);
        const hash = hashBytes(pdfBytes);

        // Check dedup on content
        if (sentHashes.has(hash)) {
          await updateScanStatus(scan.id, "sent", {
            filename: "כבר נשלח",
            hash,
          });
          done++;
          continue;
        }

        const ok = await uploadOne(filename, pdfBytes);
        if (ok) {
          sentHashes.add(hash);
          await updateScanStatus(scan.id, "sent", { filename, hash });
        } else {
          await updateScanStatus(scan.id, "failed");
        }
      } catch {
        await updateScanStatus(scan.id, "failed");
      }

      done++;
      onProgress?.(done, pending.length, scan.id);

      // Throttle: 2s between uploads
      if (done < pending.length) {
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  } finally {
    running = false;
  }
}

export function isQueueRunning(): boolean {
  return running;
}

// ── Enqueue scans for upload ──

export async function enqueueScans(ids: string[]): Promise<void> {
  for (const id of ids) {
    await updateScanStatus(id, "pending");
  }
}

// ── Combine multiple scans into one PDF scan ──

export async function combineScans(
  ids: string[],
  restaurant: string
): Promise<ScanMeta> {
  const { saveScan, blobToThumbnail, genId } = await import("./storage");
  const allPages: Blob[] = [];
  for (const id of ids) {
    const pages = await getScanPages(id);
    allPages.push(...pages);
  }
  const thumb = await blobToThumbnail(allPages[0]);
  const meta: ScanMeta = {
    id: genId(),
    restaurant,
    thumbnail: thumb,
    pageCount: allPages.length,
    createdAt: Date.now(),
    status: "local",
  };
  await saveScan(meta, allPages);
  return meta;
}

// Auto-flush on reconnect
import { Network } from "@capacitor/network";
Network.addListener("networkStatusChange", (status) => {
  if (status.connected) processQueue();
});
