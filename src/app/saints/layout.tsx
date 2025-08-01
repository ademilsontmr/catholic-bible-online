import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Saints - Catholic Bible Online',
  description: 'Lives, Legacy & Feast Days of Catholic saints and holy men and women. Biographies, teachings, and spiritual guidance.',
  keywords: [
    'catholic saints',
    'saints biographies',
    'feast days',
    'catholic devotionals',
    'catholic faith',
    'saint of the day',
    'catholic saints list'
  ],
  openGraph: {
    title: 'Saints - Catholic Bible Online',
    description: 'Lives, Legacy & Feast Days of Catholic saints and holy men and women.',
    url: 'https://catholicbibleonline.com/saints',
  },
  twitter: {
    title: 'Saints - Catholic Bible Online',
    description: 'Lives, Legacy & Feast Days of Catholic saints and holy men and women.',
  }
}

export default function SaintsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 