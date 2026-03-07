import { useState, useEffect, useCallback } from "react";
import { DocumentScanner, ResponseType } from "capacitor-document-scanner";
import { Camera } from "@capacitor/camera";
import { listScans, saveScan, deleteMultiple, blobToThumbnail, genId, ScanMeta } from "../lib/storage";
import { processQueue, enqueueScans, isQueueRunning } from "../lib/upload";
import { getRestaurantLabel, RESTAURANTS } from "../constants";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { user, logout } = useAuth();
  const [scans, setScans] = useState<ScanMeta[]>([]);
  const [restaurant, setRestaurant] = useState(
    () => localStorage.getItem("restaurant") || ""
  );
  const [showPicker, setShowPicker] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [galleryPages, setGalleryPages] = useState<Blob[]>([]);
  const [showCombine, setShowCombine] = useState(false);

  const reload = useCallback(() => listScans().then(setScans), []);
  useEffect(() => { reload(); }, [reload]);

  const pick = (id: string) => {
    setRestaurant(id);
    localStorage.setItem("restaurant", id);
    setShowPicker(false);
  };

  const handleScan = async () => {
    if (!restaurant) { setShowPicker(true); return; }
    setScanning(true);
    try {
      const result = await DocumentScanner.scanDocument({
        maxNumDocuments: 10,
        letUserAdjustCrop: true,
        responseType: ResponseType.Base64,
      });
      if (result.status === "cancel") return;
      const pages: Blob[] = [];
      for (const b64 of result.scannedImages ?? []) {
        const bin = atob(b64);
        const bytes = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
        pages.push(new Blob([bytes], { type: "image/jpeg" }));
      }
      if (pages.length === 0) return;
      const thumb = await blobToThumbnail(pages[0]);
      const meta: ScanMeta = {
        id: genId(),
        restaurant,
        thumbnail: thumb,
        pageCount: pages.length,
        createdAt: Date.now(),
        status: "local",
      };
      await saveScan(meta, pages);
      await reload();
    } catch (e) {
      console.error("Scan failed:", e);
    } finally {
      setScanning(false);
    }
  };

  const handleGallery = async () => {
    if (!restaurant) { setShowPicker(true); return; }
    try {
      const result = await Camera.pickImages({ quality: 90 });
      if (!result.photos || result.photos.length === 0) return;
      const pages: Blob[] = [];
      for (const photo of result.photos) {
        const resp = await fetch(photo.webPath);
        pages.push(await resp.blob());
      }
      if (pages.length > 1) {
        setGalleryPages(pages);
        setShowCombine(true);
      } else {
        await saveGalleryPages(pages, false);
      }
    } catch (e) {
      console.error("Gallery pick failed:", e);
    }
  };

  const saveGalleryPages = async (pages: Blob[], combine: boolean) => {
    if (combine) {
      const thumb = await blobToThumbnail(pages[0]);
      const meta: ScanMeta = {
        id: genId(),
        restaurant,
        thumbnail: thumb,
        pageCount: pages.length,
        createdAt: Date.now(),
        status: "local",
      };
      await saveScan(meta, pages);
    } else {
      for (const page of pages) {
        const thumb = await blobToThumbnail(page);
        const meta: ScanMeta = {
          id: genId(),
          restaurant,
          thumbnail: thumb,
          pageCount: 1,
          createdAt: Date.now(),
          status: "local",
        };
        await saveScan(meta, [page]);
      }
    }
    await reload();
  };

  const handleCombineChoice = async (combine: boolean) => {
    setShowCombine(false);
    await saveGalleryPages(galleryPages, combine);
    setGalleryPages([]);
  };

  const pendingScans = scans.filter(
    (s) => s.status === "local" || s.status === "pending" || s.status === "failed"
  );

  const handleUploadAll = async () => {
    if (pendingScans.length === 0) return;
    setUploading(true);
    const ids = pendingScans.map((s) => s.id);
    await enqueueScans(ids);
    await processQueue((done, total) => {
      setProgress({ done, total });
      reload();
    });
    setUploading(false);
    await reload();
  };

  const clearSent = async () => {
    const sentIds = scans.filter((s) => s.status === "sent").map((s) => s.id);
    if (sentIds.length === 0) return;
    await deleteMultiple(sentIds);
    await reload();
    setShowMenu(false);
  };

  const statusIcon = (s: ScanMeta["status"]) => {
    switch (s) {
      case "sent": return "✅";
      case "failed": return "❌";
      case "pending": case "uploading": return "⏳";
      default: return "";
    }
  };

  const statusText = (s: ScanMeta["status"]) => {
    switch (s) {
      case "sent": return "נשלח";
      case "failed": return "נכשל";
      case "pending": return "ממתין";
      case "uploading": return "שולח";
      default: return "מקומי";
    }
  };

  const fmtDate = (ts: number) => {
    const d = new Date(ts);
    return `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")} ${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}`;
  };

  return (
    <div className="page home-page">
      {/* Header */}
      <header className="hdr">
        <button className="icn-btn" onClick={() => setShowMenu(true)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </button>
        <h1 className="hdr-title">סורק חשבוניות</h1>
        <button className="rest-chip" onClick={() => setShowPicker(true)}>
          {restaurant ? getRestaurantLabel(restaurant) : "בחר מסעדה"}
        </button>
      </header>

      {/* Upload progress */}
      {uploading && (
        <div className="progress-bar">
          שולח {progress.done}/{progress.total}...
        </div>
      )}

      {/* Scan + Gallery buttons */}
      <div className="scan-trigger">
        <div className="scan-row">
          <button className="btn pri scan-btn" onClick={handleScan} disabled={scanning || uploading}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/><circle cx="12" cy="13" r="4"/></svg>
            <span style={{ marginRight: 8 }}>{scanning ? "סורק..." : "צלם חשבונית"}</span>
          </button>
          <button className="btn sec gallery-btn" onClick={handleGallery} disabled={scanning || uploading}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
            <span style={{ marginRight: 6 }}>גלריה</span>
          </button>
        </div>

        {pendingScans.length > 0 && !uploading && (
          <button className="btn pri mt8 scan-btn" onClick={handleUploadAll} disabled={isQueueRunning()}>
            שלח הכל ({pendingScans.length})
          </button>
        )}
      </div>

      {/* Scan list */}
      <div className="home-body">
        {scans.length === 0 ? (
          <div className="empty">
            <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8M8 14h4"/></svg>
            <p>אין סריקות</p>
            <p className="dim small">לחץ ״צלם חשבונית״ כדי להתחיל</p>
          </div>
        ) : (
          <div className="folder-list">
            {scans.map((s) => (
              <div key={s.id} className="folder-row">
                <div className="folder-thumb" style={{ backgroundImage: `url(${s.thumbnail})` }} />
                <div className="folder-info">
                  <span className="folder-name">{getRestaurantLabel(s.restaurant)}</span>
                  <span className="folder-sub">{fmtDate(s.createdAt)} &middot; {s.pageCount} עמ׳</span>
                </div>
                <div className="folder-status">
                  <span className="status-emoji">{statusIcon(s.status)}</span>
                  <span className="status-text">{statusText(s.status)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Menu sheet */}
      {showMenu && (
        <div className="overlay" onClick={() => setShowMenu(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <h3>תפריט</h3>
            <div className="sheet-item" style={{ color: "var(--dim)", fontSize: 13, cursor: "default" }}>
              {user?.email}
            </div>
            <button className="sheet-item" onClick={clearSent}>
              נקה סריקות שנשלחו
            </button>
            <button className="sheet-item" style={{ color: "var(--err)" }} onClick={() => { logout(); setShowMenu(false); }}>
              התנתק
            </button>
          </div>
        </div>
      )}

      {/* Restaurant picker */}
      {showPicker && (
        <div className="overlay" onClick={() => setShowPicker(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <h3>בחר מסעדה</h3>
            {RESTAURANTS.map((r) => (
              <button key={r.id} className={`sheet-item ${restaurant === r.id ? "on" : ""}`} onClick={() => pick(r.id)}>
                {r.label}
                {restaurant === r.id && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Combine prompt */}
      {showCombine && (
        <div className="overlay" onClick={() => { setShowCombine(false); setGalleryPages([]); }}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <h3>נבחרו {galleryPages.length} תמונות</h3>
            <p style={{ textAlign: "center", color: "var(--dim)", fontSize: 14, marginBottom: 14 }}>
              האם אלה עמודים של אותה חשבונית?
            </p>
            <button className="btn pri full mt8" onClick={() => handleCombineChoice(true)}>
              כן — חשבונית אחת ({galleryPages.length} עמודים)
            </button>
            <button className="btn sec full mt8" onClick={() => handleCombineChoice(false)}>
              לא — כל תמונה בנפרד
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
