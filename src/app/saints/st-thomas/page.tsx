import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Thomas - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Thomas, the Apostle known as "Doubting Thomas" who became a great missionary to India.',
  keywords: [
    'st thomas',
    'saint thomas',
    'st thomas biography',
    'st thomas feast day',
    'st thomas patron saint',
    'catholic saints',
    'july 3 feast day',
    'apostle thomas',
    'doubting thomas'
  ],
  openGraph: {
    title: 'St. Thomas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas, the Apostle known as "Doubting Thomas" who became a great missionary to India.',
    url: 'https://catholicbibleonline.com/saints/st-thomas',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Thomas - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thomas, the Apostle known as "Doubting Thomas" who became a great missionary to India.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-thomas',
  },
}

export default function StThomasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏗️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thomas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle, Missionary, Patron of Architects
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Thomas</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏗️</div>
              <div className="text-sm text-gray-600">Architect</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Thomas</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Thomas was one of the Twelve Apostles of Jesus Christ, born a Jew and called to follow the Master. His birth and death dates are unknown, but his feast is celebrated on July 3. He lived before the formal establishment of the Catholic Church but is recognized as the patron of architects.
              </p>
              <p className="mb-6">
                St. Thomas was a devoted but impetuous follower of Christ. When Jesus said He was returning to Judea to visit His sick friend Lazarus, Thomas immediately urged the other Apostles to accompany Him on the journey, which involved certain danger and possible death due to the growing hostility of the authorities.
              </p>
              <p>
                St. Thomas is best known for his role in verifying the Resurrection of his Master. His reluctance to believe that the other Apostles had seen the risen Lord on the first Easter Sunday earned him the title "Doubting Thomas." After seeing Christ's wounds, he exclaimed, "My Lord and my God!"
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Thomas: Apostle and Missionary</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Thomas left a legacy of authentic faith, missionary courage, and dedication to truth. His journey from doubt to confession of faith shows that sincere seeking for truth always leads to Christ.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Missionary Work</h3>
              <p className="mb-6">
                As a missionary, Thomas brought the Gospel to India, establishing one of the oldest Christian communities in the world. His missionary work lives on in the community of the "St. Thomas Christians" on the Malabar Coast.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Resurrection</h3>
              <p>
                St. Thomas is the only apostle who touched the wounds of the risen Christ, becoming a unique witness to the physical reality of the Resurrection. His confession "My Lord and my God" is one of the most beautiful professions of faith in the New Testament.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 3</div>
              <p className="text-gray-600">Feast of St. Thomas</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Thomas is celebrated on July 3, a date established by the Church. It is a time to pray for authentic faith, for evangelization, and to be inspired by his example of sincere seeking for truth.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote special celebrations, prayers for evangelization, and acts of charity in his memory, highlighting the importance of authentic faith and missionary witness.
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
                  <li>• <strong>Architects:</strong> Patron of architects and builders</li>
                  <li>• <strong>Builders:</strong> Patron of construction workers</li>
                  <li>• <strong>Carpenters:</strong> Patron of carpenters and woodworkers</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionary work</li>
                  <li>• <strong>India:</strong> Patron of India and Indian Christians</li>
                  <li>• <strong>Doubters:</strong> Patron of those seeking faith</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faith Struggles:</strong> Patron of those struggling with doubt</li>
                  <li>• <strong>Construction:</strong> Helper in building projects</li>
                  <li>• <strong>Mission Work:</strong> Patron of evangelization</li>
                  <li>• <strong>Truth Seeking:</strong> Patron of those seeking truth</li>
                  <li>• <strong>Resurrection Faith:</strong> Helper in believing the Resurrection</li>
                  <li>• <strong>Christian Unity:</strong> Patron of ecumenical efforts</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Thomas</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Dear Saint Thomas, you were once slow in believing that Christ had gloriously risen; but later, because you had seen him, you exclaimed: 'My Lord and my God!'"
                  </p>
                  <p className="mb-4">
                    "According to an ancient story, you rendered most powerful assistance for constructing a church in a place where pagan priests opposed it. Please bless architects, builders and carpenters that through them the Lord may be honored."
                  </p>
                  <p>
                    St. Thomas, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Thomas, patron of architects and missionaries, pray for us!"
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
            <Link href="/saints/st-matthew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostles
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Matthew
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle and Evangelist, former tax collector who wrote the first Gospel.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-jude" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostles
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jude Thaddeus
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Jesus and patron of desperate situations and hopeless cases.
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