import type { NextConfig } from 'next';
import mdx from '@next/mdx';

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: async () => {
    const rehypePrism = (await import('rehype-prism-plus')).default;
    return {
      rehypePlugins: [rehypePrism],
    };
  },
});

const nextConfig: NextConfig = withMDX({
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
      { protocol: 'https', hostname: 'cdn.simpleicons.org' },
    ],
    dangerouslyAllowSVG: true,
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
});

export default nextConfig;
