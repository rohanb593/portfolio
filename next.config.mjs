/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: false,
    },
    typescript: {
        ignoreBuildErrors: false,
    },
    images: {
        unoptimized: true,
    },
    // Optimize resource loading to reduce preload warnings
    experimental: {
        optimizePackageImports: ['framer-motion'],
    },
    // Reduce unnecessary preloading
    poweredByHeader: false,
}