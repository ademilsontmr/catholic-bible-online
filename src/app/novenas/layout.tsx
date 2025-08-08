import type { Metadata } from 'next'

// Removed metadata from layout to allow individual pages to use their own metadata
// and inherit the title template from the root layout

export default function NovenasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 