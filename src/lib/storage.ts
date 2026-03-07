import { get, set, del, entries } from "idb-keyval";

// ── Types ──
export type ScanStatus = "local" | "pending" | "uploading" | "sent" | "failed";

export interface ScanMeta {
  id: string;
  restaurant: string;
  thumbnail: string; // data-url
  pageCount: number;
  createdAt: number;
  status: ScanStatus;
  hash?: string; // md5 for dedup
  filename?: string; // generated on upload
}

// ── CRUD ──

export async function saveScan(meta: ScanMeta, pages: Blob[]): Promise<void> {
  await set(`sm_${meta.id}`, meta);
  await set(`sp_${meta.id}`, pages);
}

export async function listScans(): Promise<ScanMeta[]> {
  const all = await entries<string, ScanMeta>();
  return all
    .filter(([k]) => k.startsWith("sm_"))
    .map(([, v]) => v)
    .sort((a, b) => b.createdAt - a.createdAt);
}

export async function getScan(id: string): Promise<ScanMeta | undefined> {
  return get(`sm_${id}`);
}

export async function getScanPages(id: string): Promise<Blob[]> {
  return (await get(`sp_${id}`)) || [];
}

export async function updateScanStatus(
  id: string,
  status: ScanStatus,
  extra?: Partial<ScanMeta>
): Promise<void> {
  const m = await getScan(id);
  if (!m) return;
  await set(`sm_${id}`, { ...m, status, ...extra });
}

export async function deleteScan(id: string): Promise<void> {
  await del(`sm_${id}`);
  await del(`sp_${id}`);
}

export async function deleteMultiple(ids: string[]): Promise<void> {
  for (const id of ids) await deleteScan(id);
}

// ── Helpers ──

export async function blobToThumbnail(blob: Blob, max = 150): Promise<string> {
  const bmp = await createImageBitmap(blob);
  const s = max / Math.max(bmp.width, bmp.height);
  const c = document.createElement("canvas");
  c.width = Math.round(bmp.width * s);
  c.height = Math.round(bmp.height * s);
  c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
  bmp.close();
  return c.toDataURL("image/jpeg", 0.6);
}

export function genId(): string {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
