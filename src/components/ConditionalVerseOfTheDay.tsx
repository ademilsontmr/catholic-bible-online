'use client'

import { usePathname } from 'next/navigation'
import VerseOfTheDay from './VerseOfTheDay'

export default function ConditionalVerseOfTheDay() {
  const pathname = usePathname()
  
  // Don't show VerseOfTheDay on the verse-of-the-day page
  if (pathname === '/verse-of-the-day') {
    return null
  }
  
  return <VerseOfTheDay />
} 