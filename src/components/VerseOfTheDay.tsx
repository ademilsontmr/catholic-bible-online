'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Verse {
  bookName: string
  bookSlug: string
  chapterNumber: number
  verseNumber: number
  verseText: string
}

export default function VerseOfTheDay() {
  const [verse, setVerse] = useState<Verse | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('VerseOfTheDay component mounted')
    
    // Use a simple verse for now
    const todaysVerse: Verse = {
      bookName: 'John',
      bookSlug: 'john',
      chapterNumber: 3,
      verseNumber: 16,
      verseText: 'For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting.'
    }
    
    console.log('Setting today\'s verse:', todaysVerse)
    setVerse(todaysVerse)
    setIsLoading(false)
  }, [])

  if (isLoading) {
    return (
      <section className="py-10">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 text-center">
            <div className="text-2xl font-bold text-black mb-2">Verse of the Day</div>
            <div className="animate-pulse">
              <div className="h-6 bg-gray-200 rounded mb-4"></div>
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!verse) {
    console.log('No verse available')
    return null
  }

  console.log('Rendering verse:', verse)

  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 text-center">
          <div className="text-2xl font-bold text-black mb-2">Verse of the Day</div>
          <div className="text-lg text-gray-700 mb-4 italic">"{verse.verseText}"</div>
          <div className="text-gray-600 mb-4">
            <span className="font-semibold">{verse.bookName}</span> {verse.chapterNumber}:{verse.verseNumber}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link 
              href={`/bible/${verse.bookSlug}/${verse.chapterNumber}`} 
              className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Read full chapter
            </Link>
            <Link 
              href="/verse-of-the-day" 
              className="inline-block px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Share verse
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 