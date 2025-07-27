import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import bibleData from '@/data/bible.json'
import type { BibleData } from '@/types/bible'

interface BookPageProps {
  params: Promise<{
    book: string
  }>
}

export async function generateStaticParams() {
  const data = bibleData as BibleData
  return Object.keys(data).map((bookSlug) => ({
    book: bookSlug,
  }))
}

export async function generateMetadata({ params }: BookPageProps): Promise<Metadata> {
  const { book: bookSlug } = await params
  const data = bibleData as any
  const book = data[bookSlug]

  if (!book) {
    return {
      title: 'Book Not Found | Catholic Bible Online'
    }
  }

  return {
    title: `${book.name}`,
    description: `Read ${book.name} from the Douay-Rheims Catholic Bible. ${book.chapters.length} chapters with easy navigation and Catholic reflections.`,
    keywords: [
      `${book.name}`,
      'catholic bible',
      'douay-rheims',
      'bible book',
      'catholic scripture',
      'bible study',
      'catholic faith'
    ],
    openGraph: {
      title: `${book.name}`,
      description: `Read ${book.name} from the Douay-Rheims Catholic Bible with ${book.chapters.length} chapters.`,
      url: `https://catholicbibleonline.com/bible/${bookSlug}`,
    },
    twitter: {
      title: `${book.name}`,
      description: `Read ${book.name} from the Douay-Rheims Catholic Bible.`,
    }
  }
}

export default async function BookPage({ params }: BookPageProps) {
  const { book: bookSlug } = await params
  const data = bibleData as BibleData
  const book = data[bookSlug]

  if (!book) {
    notFound()
  }

  const testament = book.testament === 'old' ? 'Old Testament' : 'New Testament'

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8 text-center">
          <ol className="flex items-center justify-center space-x-2 text-sm">
            <li><Link href="/" className="breadcrumb-link">Home</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li><Link href="/bible" className="breadcrumb-link">Bible</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li className="text-black font-medium">{book.name}</li>
          </ol>
        </nav>

        {/* Book Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            {book.name}
          </h1>
          <p className="text-lg text-black">
            {testament} • {book.chapters.length} Chapter{book.chapters.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Chapters
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {book.chapters.map((chapter, index) => (
              <Link
                key={index + 1}
                href={`/bible/${bookSlug}/${index + 1}`}
                className="chapter-link"
              >
                <div className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all text-center">
                  <div className="text-lg font-semibold text-black">
                    Chapter {index + 1}
                  </div>
                  <div className="text-sm text-black">
                    {chapter.length} verse{chapter.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4">
          <Link
            href="/bible"
            className="nav-button"
          >
            ← Back to Bible Index
          </Link>
          {book.chapters.length > 0 && (
            <Link
              href={`/bible/${bookSlug}/1`}
              className="nav-button"
            >
              Read Chapter 1 →
            </Link>
          )}
        </div>
      </div>
    </div>
  )
} 