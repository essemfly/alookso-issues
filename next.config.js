/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    loader: 'custom',
    loaderFile: 'app/utils/imageLoader.ts',
    domains: [
      'picsum.photos',
      'alook.so',
      'staging.alookso.com',
      'design.alookso.com',
      'alookso-issues.s3.ap-northeast-2.amazonaws.com',
      'i.namu.wiki',
    ],
  },
};

module.exports = nextConfig
