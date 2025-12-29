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
    default: 'Catholic Bible Online - Douay-Rheims Version | Read Complete Catholic Bible',
    template: '%s | Catholic Bible Online'
  },
  description: 'Read the complete Catholic Bible online with the Douay-Rheims translation. All 73 books, 1,334 chapters with easy navigation, Catholic reflections, and devotional content. Free online Bible study.',
  keywords: [
    'catholic bible online',
    'douay-rheims bible',
    'holy bible',
    'catholic scripture',
    'bible study',
    'catholic bible reading',
    'douay-rheims translation',
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
    'bible navigation',
    'catholic bible app'
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
    title: 'Catholic Bible Online - Douay-Rheims Version | Complete Catholic Bible',
    description: 'Read the complete Catholic Bible online with the Douay-Rheims translation. All 73 books, 1,334 chapters with easy navigation and Catholic reflections.',
    siteName: 'Catholic Bible Online',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Catholic Bible Online - Douay-Rheims Version',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Catholic Bible Online - Douay-Rheims Version',
    description: 'Read the complete Catholic Bible online with the Douay-Rheims translation. All 73 books with easy navigation.',
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
                  <Link href="/blog" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Blog
                  </Link>
                  <Link href="/verse-of-the-day" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-md hover:bg-red-50 flex items-center h-full leading-none">
                    Verse of the Day
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
        
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-black mb-4">Catholic Bible Online</h3>
                <p className="text-black">
                  Complete Douay-Rheims Catholic Bible with easy navigation, reflections, and devotional content.
                </p>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.pinterest.com/catholicbibleonline/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800 transition-colors">
                    <span className="sr-only">Pinterest</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-black">
                  © {new Date().getFullYear()} Catholic Bible Online. All rights reserved.
                </p>
                <div className="mt-4 md:mt-0 flex space-x-6">
                  <Link href="/contact" className="text-black hover:text-gray-600 transition-colors">Contact Us</Link>
                  <Link href="/about" className="text-black hover:text-gray-600 transition-colors">About</Link>
                  <Link href="/privacy" className="text-black hover:text-gray-600 transition-colors">Privacy</Link>
                  <Link href="/terms" className="text-black hover:text-gray-600 transition-colors">Terms</Link>
                  <Link href="/legal" className="text-black hover:text-gray-600 transition-colors">Legal</Link>
                  <Link href="/blog" className="text-black hover:text-gray-600 transition-colors">Blog</Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
