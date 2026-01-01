import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MobileMenu from '@/components/MobileMenu'
import ConditionalVerseOfTheDay from '@/components/ConditionalVerseOfTheDay'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: {
    default: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
    template: '%s | Catholic Bible Online'
  },
  description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, saints, devotionals, and daily reflections to strengthen your faith.',
  keywords: [
    'catholic bible online',
    'catholic bible',
    'holy bible',
    'catholic scripture',
    'bible study',
    'catholic bible reading',
    'catholic bible verses',
    'bible chapters',
    'catholic devotionals',
    'bible reflections',
    'catholic faith',
    'holy scripture',
    'bible online free',
    'catholic bible study',
    'old testament',
    'new testament',
    'catholic prayers',
    'novenas',
    'catholic saints'
  ],
  authors: [{ name: 'Catholic Bible Online', url: 'https://catholicbibleonline.com' }],
  creator: 'Catholic Bible Online',
  publisher: 'Catholic Bible Online',
  category: 'Religion',
  classification: 'Catholic Bible Study',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  metadataBase: new URL('https://catholicbibleonline.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://catholicbibleonline.com',
    title: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
    description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, saints, and daily reflections.',
    siteName: 'Catholic Bible Online',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catholic Bible Online - Complete Catholic Bible',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catholic Bible Online - Read the Complete Catholic Bible Free',
    description: 'Read the complete Catholic Bible online for free. All 73 books with prayers, novenas, and daily reflections.',
    images: ['/og-image.jpg'],
    creator: '@catholicbibleonline',
    site: '@catholicbibleonline',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  other: {
    'msapplication-TileColor': '#6b7280',
    'theme-color': '#6b7280',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Catholic Bible Online',
    'application-name': 'Catholic Bible Online',
    'mobile-web-app-capable': 'yes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Skip to main content link for screen readers */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        
        <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center h-full">
                <Link href="/" className="flex items-center space-x-2 h-full" aria-label="Catholic Bible Online - Home">
                  <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Bible book cover with gradient */}
                    <defs>
                      <linearGradient id="bibleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
                      </linearGradient>
                      <linearGradient id="crossGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#fbbf24', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#f59e0b', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                    
                    {/* Book shadow */}
                    <rect x="10" y="9" width="28" height="32" rx="2" fill="#1e3a8a" opacity="0.3" />
                    
                    {/* Book cover */}
                    <rect x="8" y="7" width="28" height="32" rx="2" fill="url(#bibleGradient)" stroke="#1e40af" strokeWidth="1" />
                    
                    {/* Book spine highlight */}
                    <rect x="8" y="7" width="4" height="32" rx="1" fill="#1e3a8a" opacity="0.4" />
                    
                    {/* Pages */}
                    <rect x="11" y="9" width="22" height="28" rx="1" fill="#f8fafc" />
                    
                    {/* Cross on cover */}
                    <rect x="20" y="14" width="2.5" height="12" rx="0.5" fill="url(#crossGradient)" />
                    <rect x="15" y="18.75" width="12" height="2.5" rx="0.5" fill="url(#crossGradient)" />
                    
                    {/* Page lines */}
                    <line x1="14" y1="15" x2="30" y2="15" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="14" y1="18" x2="30" y2="18" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="14" y1="28" x2="30" y2="28" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="14" y1="31" x2="28" y2="31" stroke="#cbd5e1" strokeWidth="0.5" />
                    <line x1="14" y1="34" x2="30" y2="34" stroke="#cbd5e1" strokeWidth="0.5" />
                    
                    {/* Bookmark ribbon */}
                    <path d="M 24 7 L 24 20 L 26 18 L 28 20 L 28 7 Z" fill="#dc2626" opacity="0.8" />
                  </svg>
                  <span className="text-2xl font-bold text-gray-900 flex items-center h-full leading-none">
                    Catholic Bible Online
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-6 h-full">
                  <Link href="/" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Home
                  </Link>
                  <Link href="/bible" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Bible
                  </Link>
                  <Link href="/prayers" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Prayers
                  </Link>
                  <Link href="/novenas" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Novenas
                  </Link>
                  <Link href="/saints" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Saints
                  </Link>
                  <Link href="/devotionals" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Devotionals
                  </Link>
                  <Link href="/blog" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Blog
                  </Link>
                </div>
              </div>
              <MobileMenu />
            </div>
          </nav>
        </header>
        
        <main id="main-content" role="main">
          {children}
        </main>
        
        <ConditionalVerseOfTheDay />
        
        <footer className="bg-white border-t border-gray-200 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Footer Links - Grid no mobile */}
            <div>
              <nav className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-6 sm:gap-y-2 mb-6">
                <Link href="/" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Home</Link>
                <Link href="/bible" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Bible</Link>
                <Link href="/prayers" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Prayers</Link>
                <Link href="/novenas" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Novenas</Link>
                <Link href="/saints" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Saints</Link>
                <Link href="/devotionals" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Devotionals</Link>
                <Link href="/blog" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Blog</Link>
                <Link href="/contact" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Contact</Link>
                <Link href="/about" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">About</Link>
                <Link href="/privacy" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Privacy</Link>
                <Link href="/terms" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Terms</Link>
                <Link href="/legal" className="text-black hover:text-gray-600 transition-colors text-sm text-center py-1">Legal</Link>
              </nav>
              
              {/* Copyright */}
              <p className="text-black text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Catholic Bible Online. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
