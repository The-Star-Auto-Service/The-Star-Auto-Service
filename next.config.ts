import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async rewrites() {
    return [
      { source: "/", destination: "/index.html" }, // serve static HTML at /
    ];
  },
  // If you temporarily added these earlier, keep/remove as you like:
  // eslint: { ignoreDuringBuilds: true },
  // typescript: { ignoreBuildErrors: true },
};

export default nextConfig;
