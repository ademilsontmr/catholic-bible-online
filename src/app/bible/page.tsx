import Link from 'next/link'
import { getBibleIndex } from '@/lib/bibleLoader'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catholic Bible - Complete Douay-Rheims Version Online',
  description: 'Complete Catholic Bible with all 73 books in biblical order. Douay-Rheims translation with easy navigation, chapter-by-chapter reading, and Catholic reflections.',
  keywords: [
    'catholic bible online',
    'douay-rheims bible',
    'complete bible',
    'bible books',
    'old testament',
    'new testament',
    'catholic scripture',
    'bible study',
    'bible reading',
    'catholic bible app',
    'online bible',
    'bible chapters'
  ],
  openGraph: {
    title: 'Catholic Bible - Complete Douay-Rheims Version Online',
    description: 'Complete Catholic Bible with all 73 books in biblical order. Douay-Rheims translation with easy navigation.',
    url: 'https://catholicbibleonline.com/bible',
  },
  twitter: {
    title: 'Catholic Bible - Complete Douay-Rheims Version Online',
    description: 'Complete Catholic Bible with all 73 books in biblical order. Douay-Rheims translation with easy navigation.',
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
  const bibleIndex = getBibleIndex()
  
  // Sort books according to the correct biblical order
  const sortedBooks = bookOrder
    .map(slug => ({ slug, bookInfo: bibleIndex[slug] }))
    .filter(item => item.bookInfo); // Remove any books that don't exist in data

  const oldTestamentBooks = sortedBooks.filter(item => item.bookInfo.testament === 'old')
  const newTestamentBooks = sortedBooks.filter(item => item.bookInfo.testament === 'new')

  const totalBooks = oldTestamentBooks.length + newTestamentBooks.length
  const totalChapters = Object.values(bibleIndex).reduce((sum, bookInfo) => sum + bookInfo.chapters, 0)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Bible Collection
          </h1>
          <p className="text-xl text-black mb-6 max-w-3xl mx-auto">
            Complete collection of {totalBooks} books with {totalChapters}+ chapters from the Douay-Rheims Catholic Bible, 
            organized by testament for easy navigation and daily spiritual reading.
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{totalBooks}</div>
              <div className="text-black font-medium">Total Books</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{totalChapters}+</div>
              <div className="text-black font-medium">Chapters</div>
            </div>
          </div>
        </div>

        {/* Old Testament */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Old Testament ({oldTestamentBooks.length} Books)
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {oldTestamentBooks.map(({ slug, bookInfo }) => (
              <Link 
                key={slug} 
                href={`/bible/${slug}`}
                className="book-card"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all text-center">
                  <h3 className="font-semibold text-black mb-1">{bookInfo.name}</h3>
                  <p className="text-sm text-black">{bookInfo.chapters} chapters</p>
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
            {newTestamentBooks.map(({ slug, bookInfo }) => (
              <Link 
                key={slug} 
                href={`/bible/${slug}`}
                className="book-card"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-md transition-all text-center">
                  <h3 className="font-semibold text-black mb-1">{bookInfo.name}</h3>
                  <p className="text-sm text-black">{bookInfo.chapters} chapters</p>
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