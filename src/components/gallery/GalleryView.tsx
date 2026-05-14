"use client";

import Image from "next/image";
import { Column, MasonryGrid, Text } from "@once-ui-system/core";
import { gallery } from "@/resources";
import { useLightbox } from "@/features/gallery/hooks/useLightbox";

/** Gallery masonry grid with keyboard-navigable lightbox. */
export default function GalleryView() {
  const images = gallery.images;
  const { lightboxIndex, current, open, close, prev, next } = useLightbox(images);

  return (
    <>
      {/* ── Masonry grid ── */}
      <MasonryGrid columns={2} s={{ columns: 1 }}>
        {images.map((image, i) => (
          <Column
            key={image.src}
            gap="0"
            radius="m"
            overflow="hidden"
            border="neutral-alpha-weak"
            className="gallery-card"
            onClick={() => open(i)}
            onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") open(i); }}
            tabIndex={0}
            role="button"
            aria-label={image.caption ?? image.alt}
          >
            <div style={{ position: "relative", aspectRatio: image.orientation === "horizontal" ? "16/9" : "3/4" }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 560px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority={i < 2}
              />
            </div>
            {(image.caption || image.location) && (
              <Column className="gallery-caption" gap="2">
                {image.caption  && <Text variant="body-strong-s">{image.caption}</Text>}
                {image.location && <Text variant="body-default-xs" onBackground="neutral-weak">{image.location}</Text>}
              </Column>
            )}
          </Column>
        ))}
      </MasonryGrid>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && current && (
        <div
          className="lb-backdrop"
          onClick={close}
          onKeyDown={(e) => { if (e.key === "Escape") close(); }}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          tabIndex={-1}
        >
          <div className="lb-counter">{lightboxIndex + 1} / {images.length}</div>

          <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close">✕</button>

          <button type="button" className="lb-btn lb-arrow lb-arrow-left" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">‹</button>

          <div className="lb-content" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()} role="presentation">
            <img key={current.src} src={current.src} alt={current.alt} className="lb-img" />
            {(current.caption || current.location) && (
              <div className="lb-caption-box">
                {current.caption  && <p className="lb-caption-title">{current.caption}</p>}
                {current.location && <p className="lb-caption-loc">{current.location}</p>}
              </div>
            )}
          </div>

          <button type="button" className="lb-btn lb-arrow lb-arrow-right" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">›</button>
        </div>
      )}
    </>
  );
}
