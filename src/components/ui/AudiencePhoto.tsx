"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import type { AudiencePhoto as AudiencePhotoContent } from "@/types/media-kit";
import { MediaImage } from "@/components/ui/MediaImage";

const INTERVAL_MS = 4500;

type AudiencePhotoProps = {
  photo: AudiencePhotoContent;
  className?: string;
  sizes: string;
};

export function AudiencePhoto({ photo, className = "", sizes }: AudiencePhotoProps) {
  const slides = photo.images;
  const multiple = slides.length > 1;
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (!multiple || paused || reduceMotion) return;
    const timer = window.setInterval(() => goTo(index + 1), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [goTo, index, multiple, paused, reduceMotion]);

  const current = slides[index];

  return (
    <figure>
      <div
        className={`relative ${className}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onPointerDown={(event) => {
          if (!multiple) return;
          pointerX.current = event.clientX;
        }}
        onPointerUp={(event) => {
          if (!multiple || pointerX.current === null) return;
          const delta = event.clientX - pointerX.current;
          pointerX.current = null;
          if (Math.abs(delta) < 28) return;
          goTo(index + (delta < 0 ? 1 : -1));
        }}
      >
        {multiple ? (
          <div className="relative aspect-[3/4] overflow-hidden rounded-[inherit]">
            {slides.map((slide, slideIndex) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-500 ease-out ${
                  slideIndex === index ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={slideIndex === index ? undefined : true}
              >
                <MediaImage
                  {...slide}
                  unconstrained
                  className="h-full w-full"
                  sizes={sizes}
                />
              </div>
            ))}
          </div>
        ) : (
          <MediaImage {...current} className="rounded-[inherit]" sizes={sizes} />
        )}

        {multiple ? (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-wine/45 px-2 py-1.5 backdrop-blur-sm">
            {slides.map((slide, slideIndex) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`${photo.caption}, foto ${slideIndex + 1} de ${slides.length}`}
                aria-current={slideIndex === index ? "true" : undefined}
                onClick={() => goTo(slideIndex)}
                className={`size-1.5 rounded-full transition ${
                  slideIndex === index ? "bg-cream" : "bg-cream/45 hover:bg-cream/70"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
      <figcaption className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] opacity-60">
        {photo.caption}
      </figcaption>
    </figure>
  );
}
