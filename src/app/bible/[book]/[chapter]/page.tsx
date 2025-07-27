import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import bibleData from '@/data/bible.json'
import { getReflection } from '@/lib/reflections'
import type { BibleData } from '@/types/bible'

interface ChapterPageProps {
  params: Promise<{
    book: string
    chapter: string
  }>
}

export async function generateStaticParams() {
  const params: Array<{ book: string; chapter: string }> = []
  const data = bibleData as BibleData
  
  Object.keys(data).forEach((bookSlug) => {
    const book = data[bookSlug]
    book.chapters.forEach((_: string[], chapterIndex: number) => {
      params.push({
        book: bookSlug,
        chapter: (chapterIndex + 1).toString(),
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { book: bookSlug, chapter: chapterSlug } = await params
  const data = bibleData as any
  const book = data[bookSlug]
  const chapterNumber = parseInt(chapterSlug)

  if (!book || !chapterNumber || chapterNumber > book.chapters.length) {
    return {
      title: 'Chapter Not Found | Catholic Bible Online'
    }
  }

  return {
    title: `${book.name} – Chapter ${chapterNumber}`,
    description: `Read ${book.name} Chapter ${chapterNumber} from the Douay-Rheims Catholic Bible. ${chapterNumber} verses with Catholic reflection and commentary.`,
    keywords: [
      `${book.name} chapter ${chapterNumber}`,
      'catholic bible',
      'douay-rheims',
      'bible verses',
      'catholic scripture',
      'bible study',
      'catholic faith'
    ],
    openGraph: {
      title: `${book.name} – Chapter ${chapterNumber}`,
      description: `Read ${book.name} Chapter ${chapterNumber} from the Douay-Rheims Catholic Bible with ${chapterNumber} verses.`,
      url: `https://catholicbibleonline.com/bible/${bookSlug}/${chapterNumber}`,
    },
    twitter: {
      title: `${book.name} – Chapter ${chapterNumber}`,
      description: `Read ${book.name} Chapter ${chapterNumber} from the Douay-Rheims Catholic Bible.`,
    }
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { book: bookSlug, chapter: chapterSlug } = await params
  const data = bibleData as BibleData
  const book = data[bookSlug]
  const chapterNumber = parseInt(chapterSlug)

  if (!book || !chapterNumber || chapterNumber > book.chapters.length) {
    notFound()
  }

  const chapter = book.chapters[chapterNumber - 1]
  const testament = book.testament === 'old' ? 'Old Testament' : 'New Testament'
  const hasPreviousChapter = chapterNumber > 1
  const hasNextChapter = chapterNumber < book.chapters.length

  // Generate reflection for this chapter
  const reflection = getReflection(book.name, chapterNumber)

  // Generate comprehensive JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Chapter',
    name: `${book.name} Chapter ${chapterNumber}`,
    description: `Chapter ${chapterNumber} of ${book.name} from the Douay-Rheims Catholic Bible with ${chapter.length} verses and Catholic reflection.`,
    inLanguage: 'en',
    url: `https://catholicbibleonline.com/bible/${bookSlug}/${chapterNumber}`,
    numberOfItems: chapter.length,
    position: chapterNumber,
    partOfBook: {
      '@type': 'Book',
      name: book.name,
      inLanguage: 'en',
      url: `https://catholicbibleonline.com/bible/${bookSlug}`,
      isPartOf: {
        '@type': 'CreativeWorkSeries',
        name: 'Catholic Bible',
        description: 'Complete Catholic Bible with Douay-Rheims translation',
        inLanguage: 'en',
        url: 'https://catholicbibleonline.com/bible'
      }
    },
    mainEntity: {
      '@type': 'CreativeWork',
      name: 'Douay-Rheims Catholic Bible',
      description: 'Complete Catholic Bible translation',
      inLanguage: 'en',
      url: 'https://catholicbibleonline.com'
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://catholicbibleonline.com'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Bible',
          item: 'https://catholicbibleonline.com/bible'
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: book.name,
          item: `https://catholicbibleonline.com/bible/${bookSlug}`
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: `Chapter ${chapterNumber}`,
          item: `https://catholicbibleonline.com/bible/${bookSlug}/${chapterNumber}`
        }
      ]
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: `https://catholicbibleonline.com/bible/${bookSlug}/${chapterNumber}`,
      expectsAcceptanceOf: {
        '@type': 'Offer',
        category: 'Catholic Bible Study'
      }
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-center" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-sm">
              <li><Link href="/" className="breadcrumb-link">Home</Link></li>
              <li className="breadcrumb-separator">/</li>
              <li><Link href="/bible" className="breadcrumb-link">Bible</Link></li>
              <li className="breadcrumb-separator">/</li>
              <li><Link href={`/bible/${bookSlug}`} className="breadcrumb-link">{book.name}</Link></li>
              <li className="breadcrumb-separator">/</li>
              <li className="text-black font-medium">Chapter {chapterNumber}</li>
            </ol>
          </nav>

          {/* Chapter Header */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">
              {book.name} – Chapter {chapterNumber}
            </h1>
            <p className="text-lg text-black">
              {testament} • {chapter.length} Verse{chapter.length !== 1 ? 's' : ''}
            </p>
          </header>

          {/* Bible Text */}
          <main className="prose prose-lg max-w-none mb-8">
            <article className="bible-text">
              {chapter.map((verse, index) => (
                <p key={index + 1} className="mb-6 leading-relaxed text-black">
                  <span className="verse-number">{index + 1}</span>
                  {verse}
                </p>
              ))}
            </article>
          </main>

          {/* Chapter Navigation */}
          <nav className="chapter-navigation mb-12 text-center" aria-label="Chapter navigation">
            <div className="flex items-center justify-center space-x-4">
              {hasPreviousChapter ? (
                <Link href={`/bible/${bookSlug}/${chapterNumber - 1}`} className="nav-button">
                  ← Previous Chapter
                </Link>
              ) : (
                <div className="nav-button opacity-50 cursor-not-allowed">
                  ← Previous Chapter
                </div>
              )}
              <Link href={`/bible/${bookSlug}`} className="nav-button">
                Book Index
              </Link>
              {hasNextChapter ? (
                <Link href={`/bible/${bookSlug}/${chapterNumber + 1}`} className="nav-button">
                  Next Chapter →
                </Link>
              ) : (
                <div className="nav-button opacity-50 cursor-not-allowed">
                  Next Chapter →
                </div>
              )}
            </div>
          </nav>

          {/* Reflection Section */}
          <section className="reflection-section" aria-labelledby="reflection-title">
            <h2 id="reflection-title" className="reflection-title">
              Reflection for Today
            </h2>
            <div className="reflection-text">
              {reflection.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-medium flex items-center justify-center">
                <span className="mr-2">💡</span>
                Catholic Reflection • Church Teachings
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  )
} 