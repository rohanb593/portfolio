import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    // Optional: also ignore TypeScript errors during build if needed
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
