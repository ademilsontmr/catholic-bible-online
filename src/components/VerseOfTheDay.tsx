'use client'

import Link from 'next/link'
import CopyButton from './CopyButton'
import { useState, useEffect } from 'react'

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
    verseText: 'For I know the thoughts that I think towards you, saith the Lord, thoughts of peace, and not of affliction, to give you an end and patience.'
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
    verseText: 'Charity is patient, it is kind: charity envieth not, dealeth not perversely, is not puffed up,'
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
  const [todaysVerse, setTodaysVerse] = useState(popularVerses[0])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Calculate today's verse on the client side only
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24))
    const verseIndex = dayOfYear % popularVerses.length
    setTodaysVerse(popularVerses[verseIndex])
  }, [])

  const shareText = `"${todaysVerse.verseText}" - ${todaysVerse.bookName} ${todaysVerse.chapterNumber}:${todaysVerse.verseNumber}`
  const siteUrl = 'https://catholicbibleonline.com'

  return (
    <section className="py-10">
      <div className="max-w-2xl mx-auto px-4">
        <div className="bg-gray-50 border border-gray-200 rounded-xl shadow-lg p-8 text-center">
          <div className="text-2xl font-bold text-black mb-2">Verse of the Day</div>
          <div className={`text-lg text-gray-700 mb-4 italic ${!isClient ? 'animate-pulse' : ''}`}>
            {isClient ? (
              `"${todaysVerse.verseText}"`
            ) : (
              <span className="text-gray-400">Loading verse...</span>
            )}
          </div>
          <div className="text-gray-600 mb-4">
            {isClient ? (
              <>
                <span className="font-semibold">{todaysVerse.bookName}</span> {todaysVerse.chapterNumber}:{todaysVerse.verseNumber}
              </>
            ) : (
              <span className="text-gray-400">Loading reference...</span>
            )}
          </div>
          <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
            <Link
              href={isClient ? `/bible/${todaysVerse.bookSlug}/${todaysVerse.chapterNumber}` : '#'}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ pointerEvents: isClient ? 'auto' : 'none' }}
            >
              Read full chapter
            </Link>
            <CopyButton 
              text={shareText} 
              className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md transition-colors duration-200 shadow-sm bg-white text-blue-600 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isClient}
            >
              Copy verse
            </CopyButton>
          </div>
          
          {/* Social Sharing Section */}
          {isClient && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-600 mb-3">Share this inspiration</div>
              <div className="flex flex-wrap justify-center gap-2">
                {/* Facebook */}
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}&quote=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                
                {/* Twitter/X */}
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(siteUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  aria-label="Share on Twitter/X"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + siteUrl)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </a>
                
                {/* Telegram */}
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  aria-label="Share on Telegram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                
                {/* Email */}
                <a
                  href={`mailto:?subject=${encodeURIComponent('Verse of the Day')}&body=${encodeURIComponent(shareText + '\n\n' + siteUrl)}`}
                  className="inline-flex items-center justify-center w-10 h-10 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                  aria-label="Share via Email"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 