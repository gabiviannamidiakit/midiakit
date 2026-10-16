import type { AspectRatio } from "@/types/media-kit";

export const ASPECT_CLASS: Record<AspectRatio, string> = {
  square: "aspect-square",
  story: "aspect-[9/16]",
  portrait: "aspect-[3/4]",
  landscape: "aspect-video",
  wide: "aspect-[21/9]",
  poster: "aspect-[2/3]",
  cover: "aspect-[4/5]",
};

/** Tamanho ideal (px) para gerar cada imagem. Usado nos slots pendentes. */
export const ASPECT_PIXELS: Record<AspectRatio, { width: number; height: number }> = {
  square: { width: 1200, height: 1200 },
  story: { width: 1080, height: 1920 },
  portrait: { width: 1200, height: 1600 },
  landscape: { width: 1920, height: 1080 },
  wide: { width: 2100, height: 900 },
  poster: { width: 1600, height: 2400 },
  cover: { width: 1600, height: 2000 },
};
