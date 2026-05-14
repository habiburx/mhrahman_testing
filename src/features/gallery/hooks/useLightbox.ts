"use client";

import { useCallback, useEffect, useState } from "react";
import type { GalleryImage, UseLightboxReturn } from "../types/gallery.types";

/**
 * Manages lightbox open/close/navigation state.
 * Handles keyboard events (ArrowLeft, ArrowRight, Escape) and body scroll lock.
 */
export function useLightbox(images: GalleryImage[]): UseLightboxReturn {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open  = (i: number) => setLightboxIndex(i);
  const close = useCallback(() => setLightboxIndex(null), []);

  const prev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + images.length) % images.length
    );
  }, [images.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % images.length
    );
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, prev, next, close]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightboxIndex]);

  const current = lightboxIndex !== null ? images[lightboxIndex] : null;

  return { lightboxIndex, current, open, close, prev, next };
}
