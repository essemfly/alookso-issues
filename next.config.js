/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: 'app/utils/imageLoader.ts',
    domains: [
      'picsum.photos',
      'https://melancholy-issues.vercel.app',
      'sseomit-engine.s3.ap-northeast-2.amazonaws.com',
      'i.namu.wiki',
    ],
  },
};

module.exports = nextConfig
