import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. James the Greater - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. James the Greater, one of the first disciples of Jesus and patron of pilgrims and Spain.',
  keywords: [
    'st james the greater',
    'saint james the greater',
    'st james the greater biography',
    'st james the greater feast day',
    'st james the greater patron saint',
    'catholic saints',
    'july 25 feast day',
    'apostle james',
    'santiago de compostela'
  ],
  openGraph: {
    title: 'St. James the Greater - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. James the Greater, one of the first disciples of Jesus and patron of pilgrims and Spain.',
    url: 'https://catholicbibleonline.com/saints/st-james-the-greater',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. James the Greater - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. James the Greater, one of the first disciples of Jesus and patron of pilgrims and Spain.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-james-the-greater',
  },
}

export default function StJamesTheGreaterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. James the Greater
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle, Pilgrim, Patron of Spain
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. James the Greater</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. James the Greater</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. James the Greater was one of the first disciples of Jesus, son of Zebedee and Salome, and brother of the Apostle John. The title "the Greater" was added to his name to distinguish him from the Apostle James "the Less," who is believed to have been shorter than James "the Greater."
              </p>
              <p className="mb-6">
                James was a fisherman on the Sea of Galilee when Jesus called him along with his brother John. He was one of the three apostles chosen to witness the Transfiguration of Jesus on Mount Tabor. After Christ's Ascension, James spread the Gospel throughout Israel and the Roman Empire, traveling and preaching for nearly forty years in Spain.
              </p>
              <p>
                James returned to Jerusalem where he was martyred for his faith by King Herod, being beheaded. He is known as the first apostle to die. His remains were taken to Compostela, Spain, where they can be found today in the Cathedral of Santiago, one of the most important pilgrimage sites in the Christian world.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. James the Greater: Apostle and Pilgrim</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. James the Greater left a legacy of apostolic courage, tireless evangelization, and faithful martyrdom. His life demonstrates how Christ's call can transform simple fishermen into courageous witnesses of the Gospel, willing to give their lives for the faith.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Apostolic Mission</h3>
              <p className="mb-6">
                As one of the first disciples and privileged witness of the Transfiguration, James represents the ideal of the apostolic missionary. His evangelizing work in Spain and his martyrdom in Jerusalem show total dedication to the service of Christ.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Pilgrims</h3>
              <p>
                Through the Way of St. James of Compostela, St. James continues to inspire millions of pilgrims in their spiritual journey. His sanctuary in Compostela is one of the three most important pilgrimage sites in Christianity, along with Rome and Jerusalem.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 25</div>
              <p className="text-gray-600">Feast of St. James the Greater</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. James the Greater is celebrated on July 25, the date of his martyrdom. It is a time to pray for pilgrims, evangelization, and to be inspired by his example of apostolic courage and total dedication to Christ.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote special celebrations for pilgrims, prayers for evangelization, and acts of charity in his memory, highlighting the importance of apostolic mission and courage in faith.
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
                  <li>• <strong>Pilgrims:</strong> Patron of all pilgrims and travelers</li>
                  <li>• <strong>Spain:</strong> Patron saint of Spain and Spanish people</li>
                  <li>• <strong>Fishers:</strong> Patron of fishermen and fishing industry</li>
                  <li>• <strong>Veterinarians:</strong> Patron of veterinarians and animal health</li>
                  <li>• <strong>Soldiers:</strong> Patron of soldiers and military personnel</li>
                  <li>• <strong>Pharmacists:</strong> Patron of pharmacists and apothecaries</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Missionary Work:</strong> Patron of evangelization and missionary activities</li>
                  <li>• <strong>Spiritual Warfare:</strong> Helper in spiritual battles and temptations</li>
                  <li>• <strong>Travel Safety:</strong> Patron of safe travel and journeys</li>
                  <li>• <strong>Apostolic Courage:</strong> Helper in bearing witness to Christ</li>
                  <li>• <strong>Martyrdom:</strong> Patron of those facing persecution for their faith</li>
                  <li>• <strong>Victory:</strong> Helper in overcoming life's challenges</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. James the Greater</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious Apostle, St. James, who by reason of thy fervent and generous heart wast chosen by Jesus to be a witness of His glory on Mount Tabor, and of His agony in Gethsemane;"
                  </p>
                  <p className="mb-4">
                    "thou, whose very name is a symbol of warfare and victory: obtain for us strength and consolation in the unending warfare of this life, that, having constantly and generously followed Jesus, we may be victors in the strife and deserve to receive the victor's crown in heaven."
                  </p>
                  <p>
                    St. James the Greater, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. James the Greater, patron of pilgrims and Spain, pray for us!"
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
            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostles
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of James the Greater, the Beloved Disciple and author of the fourth Gospel.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostles
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope and Prince of the Apostles, the Rock upon which Christ built His Church.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostles
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles, great missionary and author of many New Testament letters.
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