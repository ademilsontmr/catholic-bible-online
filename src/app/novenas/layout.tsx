import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novenas - Complete 9-Day Catholic Prayer Guide',
  description: 'Complete collection of 101 Catholic novenas organized by category. Nine-day prayers for healing, saints, Marian devotions, and special intentions.',
  keywords: [
    'catholic novenas',
    'nine day prayers',
    'marian novenas',
    'saint novenas',
    'healing novenas',
    'catholic prayers',
    'novena prayers',
    'catholic devotionals',
    'religious prayers',
    'spiritual novenas'
  ],
  openGraph: {
    title: 'Novenas - Complete 9-Day Catholic Prayer Guide',
    description: 'Complete collection of 101 Catholic novenas organized by category. Nine-day prayers for healing, saints, Marian devotions, and special intentions.',
    url: 'https://catholicbibleonline.com/novenas',
  },
  twitter: {
    title: 'Novenas - Complete 9-Day Catholic Prayer Guide',
    description: 'Complete collection of 101 Catholic novenas organized by category. Nine-day prayers for healing, saints, Marian devotions, and special intentions.',
  }
}

export default function NovenasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 