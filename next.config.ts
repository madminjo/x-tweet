import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Вместо images.domains: ['example.com', 'cdn.example.com']
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        port: '',
        pathname: '/**', // разрешаем любые пути
      },
      {
        protocol: 'https',
        hostname: 'cdn.example.com',
        port: '',
        pathname: '/**',
      },
      // можно добавить другие записи по необходимости
    ],
  },
};

export default nextConfig;
