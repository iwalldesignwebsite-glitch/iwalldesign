// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [68, 70, 75],
    deviceSizes: [320, 480, 600, 640, 768, 1024, 1280],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: { optimizePackageImports: ["motion", "lucide-react"] },
};

export default nextConfig;
