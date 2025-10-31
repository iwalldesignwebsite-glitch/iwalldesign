// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 960, 1080, 1200, 1440], 
    imageSizes: [16, 24, 32, 48, 64, 96, 128, 256,320,360,372,384,409,512,640],
    minimumCacheTTL: 60 * 60 * 24 * 30, 
  },
};

export default nextConfig;
