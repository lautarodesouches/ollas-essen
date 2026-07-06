import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isProd ? "/ollas-essen" : "");

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [70, 75, 80],
    minimumCacheTTL: 2592000, // 30 días
    unoptimized: true, // Required for static export in Next.js
  },
  output: "export", // Output static HTML/CSS/JS
  basePath: basePath,
};

export default nextConfig;

