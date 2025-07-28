import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    }
  },
  images: {
    domains: ['catholicbibleonline.com'],
    unoptimized: false,
    formats: ['image/webp', 'image/avif']
  },
  // Force cache clearing
  generateEtags: false,
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  // SEO optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  }
}

export default nextConfig
