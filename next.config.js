/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'picsum.photos',
      'alook.so',
      'staging.alookso.com',
      'design.alookso.com',
      'alookso-issues.s3.ap-northeast-2.amazonaws.com',
    ],
  },
};

module.exports = nextConfig
