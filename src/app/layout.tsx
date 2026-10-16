import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import { mediaKit } from "@/data/media-kit";
import { siteImage, siteName, siteUrl } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
});

const bodoni = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const title = siteName;
const description =
  "Gabí Vianna, Fashion & Beauty Creator. Estilo que inspira, beleza que conecta e conteúdo que transforma. Mídia kit e contato.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: mediaKit.site.keywords,
  applicationName: siteName,
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: siteUrl,
    siteName,
    title,
    description,
    images: [
      {
        url: siteImage.share,
        alt: "Gabí Vianna, Fashion & Beauty Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [siteImage.share],
  },
};

export const viewport: Viewport = {
  themeColor: "#4A1226",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${jost.variable} ${bodoni.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-cream font-sans text-coffee">
        {children}
      </body>
    </html>
  );
}
