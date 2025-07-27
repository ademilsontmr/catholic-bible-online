import Link from 'next/link'
import bibleData from '@/data/bible.json'
import type { Metadata } from 'next'

interface BibleData {
  [key: string]: {
    name: string
    testament: 'old' | 'new'
    chapters: string[][]
  }
}

export const metadata: Metadata = {
  title: 'Bible',
  description: 'Complete Catholic Bible with all 73 books in biblical order. Douay-Rheims translation with easy navigation.',
  keywords: [
    'catholic bible',
    'douay-rheims',
    'bible books',
    'old testament',
    'new testament',
    'catholic scripture',
    'bible study'
  ],
  openGraph: {
    title: 'Bible',
    description: 'Complete Catholic Bible with all 73 books in biblical order.',
    url: 'https://catholicbibleonline.com/bible',
  },
  twitter: {
    title: 'Bible',
    description: 'Complete Catholic Bible with all 73 books in biblical order.',
  }
}

// Book order for proper sorting
const bookOrder = [
  'genesis', 'exodus', 'leviticus', 'numbers', 'deuteronomy', 'joshua', 'judges', 'ruth', '1-samuel', '2-samuel',
  '1-kings', '2-kings', '1-chronicles', '2-chronicles', 'ezra', 'nehemiah', 'tobit', 'judith', 'esther', 'job',
  'psalms', 'proverbs', 'ecclesiastes', 'song-of-solomon', 'wisdom', 'sirach', 'isaiah', 'jeremiah', 'lamentations',
  'baruch', 'ezekiel', 'daniel', 'hosea', 'joel', 'amos', 'obadiah', 'jonah', 'micah', 'nahum', 'habakkuk',
  'zephaniah', 'haggai', 'zechariah', 'malachi', '1-maccabees', '2-maccabees', 'matthew', 'mark', 'luke', 'john', 'acts', 'romans',
  '1-corinthians', '2-corinthians', 'galatians', 'ephesians', 'philippians', 'colossians', '1-thessalonians',
  '2-thessalonians', '1-timothy', '2-timothy', 'titus', 'philemon', 'hebrews', 'james', '1-peter', '2-peter',
  '1-john', '2-john', '3-john', 'jude', 'revelation'
]

export default function BibleIndexPage() {
  const data = bibleData as BibleData
  
  // Sort books according to the correct biblical order
  const sortedBooks = bookOrder
    .map(slug => ({ slug, book: data[slug] }))
    .filter(item => item.book); // Remove any books that don't exist in data

  const oldTestamentBooks = sortedBooks.filter(item => item.book.testament === 'old')
  const newTestamentBooks = sortedBooks.filter(item => item.book.testament === 'new')

  const totalBooks = oldTestamentBooks.length + newTestamentBooks.length

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Bible - Douay-Rheims Version
          </h1>
          <p className="text-lg text-black">
            Complete Catholic Bible with all 73 books in biblical order
          </p>
        </div>

        {/* Bible Statistics */}
        <div className="bg-gray-50 rounded-lg p-6 mb-12 text-center">
          <h2 className="text-2xl font-bold text-black mb-4">
            Bible Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">{totalBooks}</div>
              <div className="text-black">Total Books</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">{oldTestamentBooks.length}</div>
              <div className="text-black">Old Testament</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-600">{newTestamentBooks.length}</div>
              <div className="text-black">New Testament</div>
            </div>
          </div>
        </div>

        {/* Old Testament */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Old Testament ({oldTestamentBooks.length} Books)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {oldTestamentBooks.map(({ slug, book }) => (
              <Link 
                key={slug} 
                href={`/bible/${slug}`}
                className="book-card"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all text-center">
                  <h3 className="font-semibold text-black mb-1">{book.name}</h3>
                  <p className="text-sm text-black">{book.chapters.length} chapters</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* New Testament */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            New Testament ({newTestamentBooks.length} Books)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {newTestamentBooks.map(({ slug, book }) => (
              <Link 
                key={slug} 
                href={`/bible/${slug}`}
                className="book-card"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all text-center">
                  <h3 className="font-semibold text-black mb-1">{book.name}</h3>
                  <p className="text-sm text-black">{book.chapters.length} chapters</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-black mb-4">
            Start Reading Today
          </h3>
          <p className="text-black mb-6">
            Choose a book to begin your journey through the Catholic Bible
          </p>
          <Link 
            href="/bible/genesis" 
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            Start with Genesis
          </Link>
        </div>
      </div>
    </div>
  )
} 