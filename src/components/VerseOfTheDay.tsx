'use client'

import Link from 'next/link'

export default function VerseOfTheDay() {
  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 text-center">
          <div className="text-2xl font-bold text-black mb-2">Verse of the Day</div>
          <div className="text-lg text-gray-700 mb-4 italic">
            "For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting."
          </div>
          <div className="text-gray-600 mb-4">
            <span className="font-semibold">John</span> 3:16
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Link 
              href="/bible/john/3" 
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