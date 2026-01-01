import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBook, getBibleIndex } from '@/lib/bibleLoader'
import { getReflection } from '@/lib/reflections'
import { getRelatedArticles } from '@/lib/relatedArticles'

interface ChapterPageProps {
  params: Promise<{
    book: string
    chapter: string
  }>
}

export async function generateStaticParams() {
  const params: Array<{ book: string; chapter: string }> = []
  const bibleIndex = getBibleIndex()
  
  Object.keys(bibleIndex).forEach((bookSlug) => {
    const bookInfo = bibleIndex[bookSlug]
    for (let chapterIndex = 1; chapterIndex <= bookInfo.chapters; chapterIndex++) {
      params.push({
        book: bookSlug,
        chapter: chapterIndex.toString(),
      })
    }
  })
  
  return params
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { book: bookSlug, chapter: chapterSlug } = await params
  const book = getBook(bookSlug)
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
  const book = getBook(bookSlug)
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

  // Get related blog articles
  const relatedArticles = getRelatedArticles(bookSlug, book.testament, 3)

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

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <section className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-gray-100" aria-labelledby="related-articles-title">
              <h2 id="related-articles-title" className="text-2xl font-bold text-center mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                📚 Continue Your Faith Journey
              </h2>
              <p className="text-center text-gray-600 mb-6 text-sm">
                Deepen your understanding with these related articles
              </p>
              <div className="space-y-4">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className="block bg-white rounded-xl p-4 md:p-5 shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100 hover:border-blue-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-3">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap self-start ${
                        article.category === 'How to Pray'
                          ? 'bg-blue-100 text-blue-700'
                          : article.category === 'Catholic Living'
                          ? 'bg-emerald-100 text-emerald-700'
                          : article.category === 'Saints & Feast Days'
                          ? 'bg-purple-100 text-purple-700'
                          : article.category === 'Bible & Faith'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}>
                        {article.category}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors text-base leading-snug">
                          {article.title}
                        </h3>
                        <div className="flex items-center mt-2 text-xs text-gray-500">
                          <svg className="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.readTime}
                          <span className="ml-auto text-blue-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                            Read article
                            <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-sm rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg"
                >
                  Explore All Articles
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  )
} 