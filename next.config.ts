import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [90, 100],
    formats: ["image/webp"],
    // Em desenvolvimento não mantém imagens antigas em cache ao trocar arquivos em public/.
    ...(process.env.NODE_ENV === "development" ? { minimumCacheTTL: 1 } : {}),
  },
};

export default nextConfig;
