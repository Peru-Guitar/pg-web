"use client";

import { useEffect } from "react";

// Registra el service worker (public/sw.js): soporte PWA y siempre la última versión publicada.
export default function ServiceWorker() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production" || !("serviceWorker" in navigator)) return;
    navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);

  return null;
}
