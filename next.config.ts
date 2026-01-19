import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  eslint: {
    // Disable ESLint during builds to avoid deployment issues
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Optional: also ignore TypeScript errors during build if needed
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
