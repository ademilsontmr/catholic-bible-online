import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saints',
  description: 'Catholic saints and their lives. Biographies, feast days, and spiritual teachings of the saints.',
  keywords: [
    'catholic saints',
    'saints biographies',
    'feast days',
    'catholic devotionals',
    'catholic faith'
  ],
  openGraph: {
    title: 'Saints',
    description: 'Catholic saints and their lives.',
    url: 'https://catholicbibleonline.com/saints',
  },
  twitter: {
    title: 'Saints',
    description: 'Catholic saints and their lives.',
  }
}

export default function SaintsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Saints
          </h1>
          <p className="text-lg text-black">
            Lives and teachings of Catholic saints and holy men and women
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
          <div className="text-6xl mb-6">🕊️</div>
          <h2 className="text-2xl font-bold text-black mb-4">
            Coming Soon
          </h2>
          <p className="text-black">
            We are working on bringing you inspiring stories of Catholic saints. 
            Check back soon for a comprehensive collection of saint biographies and teachings.
          </p>
        </div>
      </div>
    </div>
  )
} 