import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Catherine of Bologna - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine of Bologna, Italian nun, artist, and patron of artists who founded the Poor Clare monastery.',
  keywords: [
    'st catherine of bologna',
    'saint catherine of bologna',
    'st catherine of bologna biography',
    'st catherine of bologna feast day',
    'st catherine of bologna patron saint',
    'catholic saints',
    'march 9 feast day',
    'patron of artists',
    'poor clares'
  ],
  openGraph: {
    title: 'St. Catherine of Bologna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Bologna, Italian nun, artist, and patron of artists who founded the Poor Clare monastery.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-of-bologna',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Catherine of Bologna - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Bologna, Italian nun, artist, and patron of artists who founded the Poor Clare monastery.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-catherine-of-bologna',
  },
}

export default function StCatherineOfBolognaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎨</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine of Bologna
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Italian Nun, Artist, Patron of Artists
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine of Bologna</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎨</div>
              <div className="text-sm text-gray-600">Artist</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine of Bologna</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Catherine of Bologna (1413–1463) was an Italian nun and artist born as Catherine de' Vigri in Bologna, Italy. She was a member of an aristocratic family and the daughter of a diplomat of the Marquis of Ferrara. Catherine received a wonderful education in reading, writing, singing, and drawing while being raised at the court of the Duke of Ferrara.
              </p>
              <p className="mb-6">
                In 1426, at the age of 13, she entered the Corpus Domini convent in Ferrara and became a Franciscan Tertiary. In 1432, Catherine and other young women from Ferrara founded a monastery of the Poor Clares, an order founded by St. Francis and St. Clare of Assisi.
              </p>
              <p>
                Catherine continued to paint and write beautiful spiritual guides and poetry. She wrote the "Treatise on the 7 Spiritual Weapons Necessary for Spiritual Warfare." Her painting of St. Ursula remains on display in a gallery in Venice. Her incorrupt body can be seen in the chapel of the Poor Clares in Bologna.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine of Bologna: Artist and Mystic</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Catherine of Bologna left a legacy of holiness, sacred art, and mysticism. Her life demonstrates how artistic gifts can be used to glorify God and how humility and spiritual perfection can coexist with extraordinary talents.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Artistic Holiness</h3>
              <p className="mb-6">
                As an artist and nun, Catherine showed that creativity and religious life can perfectly complement each other. Her paintings and spiritual writings continue to inspire artists and religious people to this day, demonstrating that art can be a path to God.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Mystic and Visionary</h3>
              <p>
                St. Catherine experienced visions of Jesus Christ and Satan, which she documented in her treatise. Her mystical experiences and spiritual struggle, especially against disbelief and sensuality, make her a very modern and relevant saint for our times.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 9</div>
              <p className="text-gray-600">Feast of St. Catherine of Bologna</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine of Bologna is celebrated on March 9, the date of her death. It is a time to pray for artists, for spiritual perfection, and to be inspired by her example of humility and dedication to sacred art.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote special celebrations for artists, sacred art exhibitions, and prayers for spiritual perfection in her memory, highlighting the importance of art as an expression of faith.
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
                  <li>• <strong>Artists:</strong> Patron of all artists and creative workers</li>
                  <li>• <strong>Liberal Arts:</strong> Patron of the liberal arts and education</li>
                  <li>• <strong>Bologna:</strong> Patron saint of Bologna, Italy</li>
                  <li>• <strong>Poor Clares:</strong> Patron of the Order of Poor Clares</li>
                  <li>• <strong>Painters:</strong> Patron of painters and visual artists</li>
                  <li>• <strong>Writers:</strong> Patron of spiritual writers and poets</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Against Temptations:</strong> Patron of those struggling with temptations</li>
                  <li>• <strong>Spiritual Warfare:</strong> Helper in spiritual battles</li>
                  <li>• <strong>Artistic Inspiration:</strong> Patron of creative inspiration</li>
                  <li>• <strong>Religious Life:</strong> Patron of those discerning religious vocation</li>
                  <li>• <strong>Perfection:</strong> Helper in seeking spiritual perfection</li>
                  <li>• <strong>Darkness of Faith:</strong> Patron of those experiencing spiritual darkness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine of Bologna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine of Bologna, you used your artistic gifts to glorify God and inspire others. Help us to use our talents to serve the Lord and to find spiritual perfection through humility and dedication."
                  </p>
                  <p>
                    St. Catherine of Bologna, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Catherine of Bologna, patron of artists and against temptations, pray for us!"
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
            <Link href="/saints/st-clare" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Clare of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Poor Clares order with St. Francis, patron of television and eye diseases.
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
            <Link href="/saints/st-luke" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Evangelists
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Luke
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and author of the third Gospel, patron of physicians and artists.
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