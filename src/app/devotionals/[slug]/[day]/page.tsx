import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { devotionals, getDevotionalBySlug } from '@/data/devotionals'
import ShareButton from '@/components/ShareButton'

interface ReadingPageProps {
  params: Promise<{ slug: string; day: string }>
}

export async function generateStaticParams() {
  const params: { slug: string; day: string }[] = []
  
  devotionals.forEach((devotional) => {
    devotional.readings.forEach((reading) => {
      params.push({
        slug: devotional.slug,
        day: reading.day.toString(),
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: ReadingPageProps): Promise<Metadata> {
  const { slug, day } = await params
  const devotional = getDevotionalBySlug(slug)
  const dayNum = parseInt(day)
  const reading = devotional?.readings.find(r => r.day === dayNum)

  if (!devotional || !reading) {
    return { title: 'Reading Not Found | Catholic Bible Online' }
  }

  return {
    title: `${reading.title} - ${devotional.title}`,
    description: `Day ${dayNum} of ${devotional.title} by ${devotional.author}. ${devotional.description}`,
    openGraph: {
      title: `${reading.title} | ${devotional.title}`,
      description: `Day ${dayNum} reading from ${devotional.title}`,
      type: 'article',
    },
  }
}

export default async function ReadingPage({ params }: ReadingPageProps) {
  const { slug, day } = await params
  const devotional = getDevotionalBySlug(slug)
  const dayNum = parseInt(day)
  
  if (!devotional) {
    notFound()
  }

  const reading = devotional.readings.find(r => r.day === dayNum)
  
  if (!reading) {
    notFound()
  }

  const prevReading = devotional.readings.find(r => r.day === dayNum - 1)
  const nextReading = devotional.readings.find(r => r.day === dayNum + 1)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm flex-wrap">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/devotionals" className="text-gray-600 hover:text-gray-800">Devotionals</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href={`/devotionals/${slug}`} className="text-gray-600 hover:text-gray-800">{devotional.title}</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">Day {dayNum}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-6 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{devotional.icon}</span>
            <div>
              <Link href={`/devotionals/${slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                {devotional.title}
              </Link>
              <p className="text-sm text-gray-600">by {devotional.author}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              Day {dayNum} of {devotional.readings.length}
            </span>
          </div>
        </header>

        {/* Reading Content */}
        <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{reading.title}</h1>
          
          <div 
            className="prose prose-lg max-w-none mb-8 text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: reading.content }}
          />

          {reading.scripture && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-5 mb-8 rounded-r-lg">
              <p className="text-sm text-blue-800 font-bold mb-2">📖 Scripture</p>
              <p className="text-blue-900 italic text-lg">{reading.scripture}</p>
            </div>
          )}

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
              🙏 Prayer
            </h2>
            <p className="text-purple-900 italic leading-relaxed text-lg">{reading.prayer}</p>
          </div>
        </article>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          {prevReading ? (
            <Link
              href={`/devotionals/${slug}/${prevReading.day}`}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="hidden sm:inline">Day {prevReading.day}</span>
            </Link>
          ) : (
            <div></div>
          )}
          
          <Link
            href={`/devotionals/${slug}`}
            className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            All Readings
          </Link>
          
          {nextReading ? (
            <Link
              href={`/devotionals/${slug}/${nextReading.day}`}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors"
            >
              <span className="hidden sm:inline">Day {nextReading.day}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ) : (
            <Link
              href={`/devotionals/${slug}`}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg hover:from-green-700 hover:to-emerald-700 transition-colors"
            >
              Complete ✓
            </Link>
          )}
        </div>

        {/* Share */}
        <section className="border-t border-gray-200 pt-8 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Share This Reading</h2>
            <ShareButton 
              title={`${reading.title} - ${devotional.title}`}
              url={`/devotionals/${slug}/${dayNum}`}
              excerpt={`Day ${dayNum} of ${devotional.title} by ${devotional.author}`}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100 text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            Continue Your Spiritual Journey
          </h2>
          <p className="text-gray-700 mb-6">
            Explore more devotionals and deepen your faith with daily reflections from the saints and Catholic tradition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devotionals"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              All Devotionals
            </Link>
            <Link
              href="/prayers"
              className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              Catholic Prayers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
