/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tripknot.in',
      },
    ],
  },
}

export default nextConfig
