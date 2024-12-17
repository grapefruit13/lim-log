import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        protocol: 'https', // 모든 HTTPS 프로토콜
        hostname: '**', // 모든 도메인 허용
      },
      {
        protocol: 'http', // HTTP 프로토콜도 허용
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
