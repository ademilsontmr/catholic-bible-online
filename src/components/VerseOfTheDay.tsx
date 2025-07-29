'use client'

import Link from 'next/link'
import CopyButton from './CopyButton'

// Lista de versos populares para rotação
const popularVerses = [
  {
    bookName: 'John',
    bookSlug: 'john',
    chapterNumber: 3,
    verseNumber: 16,
    verseText: 'For God so loved the world, as to give his only begotten Son; that whosoever believeth in him, may not perish, but may have life everlasting.'
  },
  {
    bookName: 'Psalm',
    bookSlug: 'psalms',
    chapterNumber: 23,
    verseNumber: 1,
    verseText: 'The Lord ruleth me: and I shall want nothing.'
  },
  {
    bookName: 'Jeremiah',
    bookSlug: 'jeremiah',
    chapterNumber: 29,
    verseNumber: 11,
    verseText: 'For I know the thoughts that I think towards you, saith the Lord, thoughts of peace, and not of affliction, to give you an end that you may hope.'
  },
  {
    bookName: 'Philippians',
    bookSlug: 'philippians',
    chapterNumber: 4,
    verseNumber: 13,
    verseText: 'I can do all things in him who strengtheneth me.'
  },
  {
    bookName: 'Romans',
    bookSlug: 'romans',
    chapterNumber: 8,
    verseNumber: 28,
    verseText: 'And we know that to them that love God, all things work together unto good, to such as, according to his purpose, are called to be saints.'
  },
  {
    bookName: 'Matthew',
    bookSlug: 'matthew',
    chapterNumber: 11,
    verseNumber: 28,
    verseText: 'Come to me, all you that labour, and are burdened, and I will refresh you.'
  },
  {
    bookName: 'Isaiah',
    bookSlug: 'isaiah',
    chapterNumber: 40,
    verseNumber: 31,
    verseText: 'But they that hope in the Lord shall renew their strength, they shall take wings as eagles, they shall run and not be weary, they shall walk and not faint.'
  },
  {
    bookName: 'Proverbs',
    bookSlug: 'proverbs',
    chapterNumber: 3,
    verseNumber: 5,
    verseText: 'Have confidence in the Lord with all thy heart, and lean not upon thy own prudence.'
  },
  {
    bookName: '1 Corinthians',
    bookSlug: '1-corinthians',
    chapterNumber: 13,
    verseNumber: 4,
    verseText: 'Charity is patient, is kind: charity envieth not, dealeth not perversely; is not puffed up.'
  },
  {
    bookName: 'Joshua',
    bookSlug: 'joshua',
    chapterNumber: 1,
    verseNumber: 9,
    verseText: 'Behold I command thee, take courage, and be strong. Fear not, and be not dismayed: because the Lord thy God is with thee in all things whatsoever thou shalt go to.'
  }
]

export default function VerseOfTheDay() {
  // Get current date and use it to select a verse
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
  
  // Use day of year to select verse (rotates through the list)
  const verseIndex = dayOfYear % popularVerses.length
  const verse = popularVerses[verseIndex]

  // Create the text to be copied (verse + reference)
  const shareText = `"${verse.verseText}" - ${verse.bookName} ${verse.chapterNumber}:${verse.verseNumber}`
  const shareUrl = `https://catholicbibleonline.com/verse-of-the-day`

  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 text-center">
          <div className="text-2xl font-bold text-black mb-2">Verse of the Day</div>
          <div className="text-lg text-gray-700 mb-4 italic">
            "{verse.verseText}"
          </div>
          <div className="text-gray-600 mb-4">
            <span className="font-semibold">{verse.bookName}</span> {verse.chapterNumber}:{verse.verseNumber}
          </div>
          <div className="flex flex-col sm:flex-row gap-2 justify-center mb-6">
            <Link 
              href={`/bible/${verse.bookSlug}/${verse.chapterNumber}`} 
              className="inline-block px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
            >
              Read full chapter
            </Link>
            <CopyButton 
              text={shareText}
              className="inline-block px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Copy verse
            </CopyButton>
          </div>
          
          {/* Share Section */}
          <div className="border-t border-gray-200 pt-6">
            <div className="text-sm text-gray-600 mb-4">Share this inspiration:</div>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700 transition-colors"
              >
                Facebook
              </a>
              
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-black text-white rounded text-xs hover:bg-gray-800 transition-colors"
              >
                X
              </a>
              
              <a
                href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 transition-colors"
              >
                WhatsApp
              </a>
              
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600 transition-colors"
              >
                Telegram
              </a>
              
              <a
                href={`mailto:?subject=Verse of the Day&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`}
                className="inline-flex items-center px-3 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 