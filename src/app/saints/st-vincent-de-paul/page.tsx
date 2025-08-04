import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Vincent de Paul - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Vincent de Paul, the Apostle of Charity and Father of the Poor who founded the Vincentians and Daughters of Charity.',
  keywords: [
    'st vincent de paul',
    'saint vincent de paul',
    'st vincent de paul biography',
    'st vincent de paul feast day',
    'st vincent de paul patron saint',
    'catholic saints',
    'september 27 feast day',
    'apostle of charity',
    'vincentians'
  ],
  openGraph: {
    title: 'St. Vincent de Paul - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vincent de Paul, the Apostle of Charity and Father of the Poor who founded the Vincentians and Daughters of Charity.',
    url: 'https://catholicbibleonline.com/saints/st-vincent-de-paul',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Vincent de Paul - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vincent de Paul, the Apostle of Charity and Father of the Poor who founded the Vincentians and Daughters of Charity.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-vincent-de-paul',
  },
}

export default function StVincentDePaulPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">❤️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Vincent de Paul
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Charity, Father of the Poor
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Vincent de Paul</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 27</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Charity</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Vincent de Paul</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Vincent de Paul (1581–1660) was born into a poor peasant family in the French village of Pouy. His first formal education was provided by the Franciscans. He did so well that he was hired to tutor the children of a nearby wealthy family, using the money he earned to continue his theological studies at the University of Toulouse.
              </p>
              <p className="mb-6">
                He was ordained in 1600 and remained in Toulouse for a time. In 1605, during a sea voyage from Marseille to Narbonne, he was captured, taken to Tunis, and sold as a slave. Two years later, he and his master managed to escape and both returned to France.
              </p>
              <p>
                From that point on, St. Vincent dedicated his life to preaching missions and providing relief to the poor, even establishing hospitals for them. He founded the Ladies of Charity and the Congregation of the Mission (Vincentians), and co-founded the Daughters of Charity with St. Louise de Marillac.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Vincent de Paul: Apostle of Charity</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Vincent de Paul left a legacy of tireless charity, clerical reform, and dedication to the poor. His life demonstrates that love of neighbor is the most direct path to God, and that charity must be practical and organized.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Organized Charity</h3>
              <p className="mb-6">
                As the "Apostle of Charity," Vincent revolutionized the way the Church serves the poor, creating systematic charitable organizations that continue to this day. His example inspires all to see Christ in the needy.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Reformer of the Clergy</h3>
              <p>
                St. Vincent helped reform the French clergy and developed a precursor to modern seminaries. His work in priestly and spiritual formation continues through the Vincentians, who today have nearly 4,000 members in 86 countries.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 27</div>
              <p className="text-gray-600">Feast of St. Vincent de Paul</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Vincent de Paul is celebrated on September 27, the date of his death. It is a time to pray for the poor, for organized charity, and to be inspired by his example of service to those in need.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote acts of charity, food and clothing drives, and visits to the poor in his memory, highlighting the importance of organized service to those in need.
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
                  <li>• <strong>Charitable Societies:</strong> Patron of all charitable organizations</li>
                  <li>• <strong>Volunteers:</strong> Patron of volunteers and social workers</li>
                  <li>• <strong>Hospitals:</strong> Patron of hospitals and healthcare workers</li>
                  <li>• <strong>Prisoners:</strong> Patron of prisoners and convicts</li>
                  <li>• <strong>Vincentians:</strong> Patron of the Congregation of the Mission</li>
                  <li>• <strong>Daughters of Charity:</strong> Patron of the Sisters of Charity</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Poverty Relief:</strong> Patron of those serving the poor</li>
                  <li>• <strong>Clergy Formation:</strong> Patron of seminarians and priests</li>
                  <li>• <strong>Social Justice:</strong> Patron of social reform</li>
                  <li>• <strong>Organized Charity:</strong> Patron of charitable organizations</li>
                  <li>• <strong>Mission Work:</strong> Patron of missionary activities</li>
                  <li>• <strong>Spiritual Direction:</strong> Patron of spiritual directors</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Vincent de Paul</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Vincent de Paul, you were called to serve the poor and to reform the clergy. Inspire us to see Christ in the needy and to serve with organized charity and love."
                  </p>
                  <p>
                    St. Vincent de Paul, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Vincent de Paul, patron of charitable societies, pray for us!"
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
            <Link href="/saints/st-louise-de-marillac" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Louise de Marillac
                </h3>
                <p className="text-gray-700 text-sm">
                  Cofounder of the Daughters of Charity with St. Vincent de Paul, patron of social workers.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, lover of poverty and patron of ecology and peace.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-teresa-calcutta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Calcutta
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother Teresa, founder of the Missionaries of Charity, known for serving the poorest of the poor.
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