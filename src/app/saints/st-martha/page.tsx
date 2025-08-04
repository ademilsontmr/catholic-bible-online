import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Martha - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Martha, the sister of Mary and Lazarus, known for her hospitality and service to Jesus.',
  keywords: [
    'st martha',
    'saint martha',
    'st martha biography',
    'st martha feast day',
    'st martha patron saint',
    'catholic saints',
    'july 29 feast day',
    'martha and mary',
    'biblical saints'
  ],
  openGraph: {
    title: 'St. Martha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martha, the sister of Mary and Lazarus, known for her hospitality and service to Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-martha',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Martha - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Martha, the sister of Mary and Lazarus, known for her hospitality and service to Jesus.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-martha',
  },
}

export default function StMarthaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Martha
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Sister of Mary and Lazarus, Patron of Servants
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Martha</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🍽️</div>
              <div className="text-sm text-gray-600">Hospitality</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Martha</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Martha was the sister of Mary and Lazarus, and Jesus had a special relationship with this family from Bethany, a small village two miles from Jerusalem. The Gospel of John tells us that "Jesus loved Martha, Mary, and Lazarus," indicating an intimate and special friendship.
              </p>
              <p className="mb-6">
                Martha was known for her hospitality and service. When Jesus visited her home, she immediately dedicated herself to serving Him and His disciples. Her concern with household tasks and service to guests led her to ask Jesus to intervene when her sister Mary preferred to sit and listen to the Master's teachings.
              </p>
              <p>
                After Lazarus' death, Martha demonstrated great faith by going out to meet Jesus, declaring her belief in Christ's power and the resurrection. Her confession of faith - "I believe that you are the Christ, the Son of God" - is one of the most beautiful professions of faith in the New Testament.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Martha: Model of Service and Faith</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Martha left a legacy of hospitality, dedicated service, and growing faith. Her life demonstrates how practical service and spiritual contemplation can coexist, and how Jesus loves and values both paths of discipleship.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Hospitality</h3>
              <p className="mb-6">
                As an exemplary hostess, Martha teaches the importance of hospitality and service to others. Her dedication to serving Jesus and His disciples shows how domestic work and practical service can be forms of worship and love for God.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Growth in Faith</h3>
              <p>
                Martha's spiritual journey - from concern with tasks to confession of faith in Christ as Son of God - demonstrates how Jesus guides us gradually toward deeper faith and clearer understanding of His identity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 29</div>
              <p className="text-gray-600">Feast of St. Martha</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Martha is celebrated on July 29, a date established by the Church. It is a time to pray for the spirit of service, hospitality, and to be inspired by her example of dedication to Christ through work.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote acts of hospitality, community meals, and prayers for the spirit of service in her memory, highlighting the importance of serving others as a way of serving Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Servants:</strong> Patron of domestic servants and household workers</li>
                  <li>• <strong>Cooks:</strong> Patron of cooks and culinary workers</li>
                  <li>• <strong>Housekeepers:</strong> Patron of housekeepers and domestic workers</li>
                  <li>• <strong>Hospitality:</strong> Patron of hospitality workers and hosts</li>
                  <li>• <strong>Waiters:</strong> Patron of waiters and restaurant workers</li>
                  <li>• <strong>Domestic Workers:</strong> Patron of all domestic service workers</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Service:</strong> Patron of those who serve others</li>
                  <li>• <strong>Hospitality:</strong> Helper in welcoming guests and strangers</li>
                  <li>• <strong>Work-Life Balance:</strong> Patron of balancing work and prayer</li>
                  <li>• <strong>Faith Growth:</strong> Helper in growing in faith and understanding</li>
                  <li>• <strong>Domestic Peace:</strong> Patron of peace in the home</li>
                  <li>• <strong>Practical Service:</strong> Helper in serving God through daily tasks</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prayers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🙏 Prayers</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Martha</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Martha, pray for us that we might serve Jesus better. Help us to overcome our distractions and worries to listen to his words and be present to him this day."
                  </p>
                  <p>
                    St. Martha, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Martha, patron of servants and hospitality, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/saints/st-mary-magdalene" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Magdalene
                </h3>
                <p className="text-gray-700 text-sm">
                  First witness to the Resurrection and model of God's mercy and love.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-lazarus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lazarus
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of Martha and Mary, raised from the dead by Jesus in Bethany.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-elizabeth-mother-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of John the Baptist and cousin of the Virgin Mary, model of hospitality.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 