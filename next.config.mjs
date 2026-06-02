// Bypass SSL cert verification for Google Fonts in non-Vercel environments
// (corporate networks / dev machines with SSL inspection can't verify Google's cert)
if (!process.env.VERCEL) {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
}

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
