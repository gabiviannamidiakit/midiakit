export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");

export const mediaKitPath = "/midiakit";
export const mediaKitUrl = `${siteUrl}${mediaKitPath}`;

export const siteName = "Gabí Vianna";

export const siteImage = {
  /** Imagem de compartilhamento (WhatsApp, Instagram, etc.). 1200x630. */
  share: "/media/share.jpg",
};
