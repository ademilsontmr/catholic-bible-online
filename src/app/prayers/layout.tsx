import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catholic Prayers - Complete Prayer Collection',
  description: 'Complete collection of Catholic prayers including basic prayers, rosary prayers, mass prayers, Marian prayers, and seasonal prayers for daily spiritual practice.',
  keywords: [
    'catholic prayers',
    'basic prayers',
    'rosary prayers',
    'mass prayers',
    'marian prayers',
    'saint prayers',
    'catholic devotionals',
    'religious prayers',
    'spiritual prayers',
    'prayer collection'
  ],
  openGraph: {
    title: 'Catholic Prayers - Complete Prayer Collection',
    description: 'Complete collection of Catholic prayers including basic prayers, rosary prayers, mass prayers, Marian prayers, and seasonal prayers for daily spiritual practice.',
    url: 'https://catholicbibleonline.com/prayers',
  },
  twitter: {
    title: 'Catholic Prayers - Complete Prayer Collection',
    description: 'Complete collection of Catholic prayers including basic prayers, rosary prayers, mass prayers, Marian prayers, and seasonal prayers for daily spiritual practice.',
  }
}

export default function PrayersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 