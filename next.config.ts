// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'pbs.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'abs.twimg.com', pathname: '/**' },
      // добавьте другие хосты, откуда вы грузите изображения
    ],
  },
};

export default nextConfig;
