// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  eslint: {
    ignoreDuringBuilds: true,
  },

  // (opcjonalnie – zwykle NIE trzeba)
  // typescript: {
  //   ignoreBuildErrors: true,
  // },
};

export default nextConfig;
