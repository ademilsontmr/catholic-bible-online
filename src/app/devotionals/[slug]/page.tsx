import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { devotionals, getDevotionalBySlug, getTodaysReading } from '@/data/devotionals'
import ShareButton from '@/components/ShareButton'

interface DevotionalPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return devotionals.map((devotional) => ({
    slug: devotional.slug,
  }))
}

export async function generateMetadata({ params }: DevotionalPageProps): Promise<Metadata> {
  const { slug } = await params
  const devotional = getDevotionalBySlug(slug)

  if (!devotional) {
    return { title: 'Devotional Not Found | Catholic Bible Online' }
  }

  return {
    title: `${devotional.title} - Daily Catholic Devotional`,
    description: devotional.longDescription,
    openGraph: {
      title: `${devotional.title} | Catholic Bible Online`,
      description: devotional.description,
      type: 'article',
    },
  }
}

export default async function DevotionalPage({ params }: DevotionalPageProps) {
  const { slug } = await params
  const devotional = getDevotionalBySlug(slug)

  if (!devotional) {
    notFound()
  }

  const todaysReading = getTodaysReading(devotional)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li><Link href="/" className="text-gray-600 hover:text-gray-800">Home</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/devotionals" className="text-gray-600 hover:text-gray-800">Devotionals</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-800 font-medium">{devotional.title}</li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-8 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">{devotional.icon}</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold">
              {devotional.frequency}
            </span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            {devotional.title}
          </h1>
          <p className="text-gray-600 mb-2">by {devotional.author}</p>
          <p className="text-gray-700 text-lg">{devotional.longDescription}</p>
        </header>

        {/* Today's Reading */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">📖 Today's Reading</span>
            <span className="text-gray-600 text-sm">Day {todaysReading.day} of {devotional.readings.length}</span>
          </div>

          <article className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{todaysReading.title}</h2>
            
            <div 
              className="prose prose-lg max-w-none mb-8 text-gray-700"
              dangerouslySetInnerHTML={{ __html: todaysReading.content }}
            />

            {todaysReading.scripture && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
                <p className="text-sm text-blue-800 font-medium mb-1">Scripture</p>
                <p className="text-blue-900 italic">{todaysReading.scripture}</p>
              </div>
            )}

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-purple-800 mb-3 flex items-center gap-2">
                🙏 Prayer
              </h3>
              <p className="text-purple-900 italic leading-relaxed">{todaysReading.prayer}</p>
            </div>
          </article>
        </section>

        {/* All Readings */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Readings</h2>
          <div className="grid gap-4">
            {devotional.readings.map((reading, index) => (
              <Link
                key={index}
                href={`/devotionals/${slug}/${reading.day}`}
                className={`block p-4 rounded-xl border transition-all hover:shadow-md ${
                  reading.day === todaysReading.day
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300'
                    : 'bg-white border-gray-200 hover:border-blue-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      reading.day === todaysReading.day
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {reading.day}
                    </span>
                    <span className={`font-medium ${
                      reading.day === todaysReading.day ? 'text-blue-800' : 'text-gray-800'
                    }`}>
                      {reading.title}
                    </span>
                  </div>
                  {reading.day === todaysReading.day && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded-full">Today</span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Share */}
        <section className="border-t border-gray-200 pt-8 mb-8">
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Share This Devotional</h2>
            <ShareButton 
              title={devotional.title}
              url={`/devotionals/${slug}`}
              excerpt={devotional.description}
            />
          </div>
        </section>

        {/* More Devotionals */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">
            Explore More Devotionals
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {devotionals
              .filter(d => d.slug !== slug)
              .slice(0, 3)
              .map(d => (
                <Link
                  key={d.slug}
                  href={`/devotionals/${d.slug}`}
                  className="block bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all"
                >
                  <span className="text-2xl mb-2 block">{d.icon}</span>
                  <h3 className="font-bold text-gray-900 mb-1">{d.title}</h3>
                  <p className="text-sm text-gray-600">{d.author}</p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-6">
            <Link
              href="/devotionals"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              View All Devotionals
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
