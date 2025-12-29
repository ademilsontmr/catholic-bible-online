import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['@next/font']
  },
  images: {
    domains: ['catholicbibleonline.com'],
    unoptimized: true,
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
  },
  // Note: headers() and redirects() are not supported with output: 'export'
  // Use _headers and _redirects files in public/ directory for Cloudflare Pages
}

export default nextConfig
