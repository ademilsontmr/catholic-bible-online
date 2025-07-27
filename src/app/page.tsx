import Link from 'next/link'
import type { Metadata } from 'next'
import bibleData from '@/data/bible.json'
import type { BibleData } from '@/types/bible'
import SearchBox from '@/components/SearchBox'

export const metadata: Metadata = {
  title: 'Catholic Bible Online',
  description: 'Read the complete Catholic Bible online with the Douay-Rheims translation. All 73 books with easy navigation and Catholic reflections.',
  keywords: [
    'catholic bible online',
    'douay-rheims bible',
    'holy bible',
    'catholic scripture',
    'bible study',
    'catholic faith'
  ],
  openGraph: {
    title: 'Catholic Bible Online',
    description: 'Read the complete Catholic Bible online with the Douay-Rheims translation.',
    url: 'https://catholicbibleonline.com',
  },
  twitter: {
    title: 'Catholic Bible Online',
    description: 'Read the complete Catholic Bible online with the Douay-Rheims translation.',
  }
}

function getRandomVerse() {
  const data = bibleData as BibleData
  const books = Object.keys(data)
  const bookKey = books[Math.floor(Math.random() * books.length)]
  const book = data[bookKey]
  const chapterIndex = Math.floor(Math.random() * book.chapters.length)
  const chapter = book.chapters[chapterIndex]
  const verseIndex = Math.floor(Math.random() * chapter.length)
  const verseText = chapter[verseIndex]
  return {
    bookName: book.name,
    bookSlug: bookKey,
    chapterNumber: chapterIndex + 1,
    verseNumber: verseIndex + 1,
    verseText
  }
}

export default function HomePage() {
  const verse = getRandomVerse()
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="hero-title">
              Catholic Bible Online
            </h1>
            <p className="hero-description">
              Read the complete Catholic Bible online. Douay-Rheims translation with easy navigation by book and chapter.
            </p>
            
            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <SearchBox />
            </div>
            
            <Link
              href="/bible"
              className="inline-flex items-center px-8 py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors text-lg"
            >
              Read the Bible
            </Link>
          </div>
        </div>
      </section>



      {/* Quick Links Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Popular Books
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <Link href="/bible/genesis" className="book-card">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">📖</div>
                <h3 className="font-semibold text-black">Genesis</h3>
                <p className="text-sm text-black">Creation</p>
              </div>
            </Link>
            <Link href="/bible/psalms" className="book-card">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🙏</div>
                <h3 className="font-semibold text-black">Psalms</h3>
                <p className="text-sm text-black">Prayers</p>
              </div>
            </Link>
            <Link href="/bible/matthew" className="book-card">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">✝️</div>
                <h3 className="font-semibold text-black">Matthew</h3>
                <p className="text-sm text-black">Gospel</p>
              </div>
            </Link>
            <Link href="/bible/john" className="book-card">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🌟</div>
                <h3 className="font-semibold text-black">John</h3>
                <p className="text-sm text-black">Gospel</p>
              </div>
            </Link>
            <Link href="/bible/revelation" className="book-card">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-3">🕊</div>
                <h3 className="font-semibold text-black">Revelation</h3>
                <p className="text-sm text-black">Apocalypse</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Why Choose Catholic Bible Online?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold text-black mb-4">Complete Douay-Rheims</h3>
              <p className="text-black">
                Access the complete Catholic Bible in the traditional Douay-Rheims translation, 
                the most widely used English Catholic Bible.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-black mb-4">Easy Navigation</h3>
              <p className="text-black">
                Navigate easily through all 73 books and over 1,300 chapters with our 
                intuitive interface and search functionality.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-xl font-semibold text-black mb-4">Catholic Reflections</h3>
              <p className="text-black">
                Each chapter includes thoughtful Catholic reflections to help you 
                understand and apply God&apos;s Word to your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-6">
            Start Your Bible Journey Today
          </h2>
          <p className="text-lg text-black mb-8">
            Discover the richness of Catholic Scripture with our complete online Bible. 
            Begin reading, reflecting, and growing in your faith.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/bible" 
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              Browse All Books
            </Link>
            <Link 
              href="/prayers" 
              className="inline-flex items-center px-6 py-3 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors"
            >
              Catholic Prayers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
