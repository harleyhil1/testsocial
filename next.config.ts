import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";
const basePath = process.env.NEXT_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: isExport ? "export" : undefined,
  basePath: basePath || undefined,
  assetPrefix: basePath || undefined,
  images: {
    // Static export requires unoptimized images
    unoptimized: isExport ? true : false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Proxy /api/* calls to the Python FastAPI backend (dev/prod only)
  ...(isExport
    ? {}
    : {
        async rewrites() {
          return [
            {
              source: "/api/:path*",
              destination: `${process.env.BACKEND_URL ?? "http://localhost:8000"}/:path*`,
            },
          ];
        },
      }),
};

export default nextConfig;
