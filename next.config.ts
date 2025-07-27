import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  images: {
    domains: ['catholicbibleonline.com'],
    unoptimized: false
  },
  // Force cache clearing
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true
}

export default nextConfig
