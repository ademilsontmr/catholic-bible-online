import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'St. Matthew - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Matthew, the tax collector who became one of the Twelve Apostles and wrote the first Gospel.',
  keywords: [
    'st matthew',
    'saint matthew',
    'st matthew biography',
    'st matthew feast day',
    'st matthew patron saint',
    'catholic saints',
    'september 21 feast day',
    'apostle matthew',
    'gospel of matthew'
  ],
  openGraph: {
    title: 'St. Matthew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthew, the tax collector who became one of the Twelve Apostles and wrote the first Gospel.',
    url: 'https://catholicbibleonline.com/saints/st-matthew',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Matthew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthew, the tax collector who became one of the Twelve Apostles and wrote the first Gospel.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-matthew',
  },
}

export default function StMatthewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Matthew
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle, Evangelist, Patron of Bankers
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Matthew</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📖</div>
              <div className="text-sm text-gray-600">Evangelist</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Matthew</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Matthew was one of the Twelve Apostles of Jesus Christ and the author of the first Gospel. Little is known about his life, except that he was the son of Alpheus and was probably born in Galilee. He worked as a tax collector, a profession that was hated during the time of Christ.
              </p>
              <p className="mb-6">
                According to the Gospel, Matthew was working at a tax collection booth in Capernaum when Christ came to him and said: "Follow me." With this simple call, Matthew became a disciple of Christ and abandoned his previous life to follow the Master.
              </p>
              <p>
                Many years after Christ's death, between 41 and 50 AD, Matthew wrote his Gospel in Aramaic, hoping to convince his countrymen that Jesus was the Messiah and that His kingdom had been fulfilled in a spiritual way. It is the first of the four Gospels in the New Testament.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Matthew: Apostle and Evangelist</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Matthew left a legacy of conversion, evangelization, and witness. His life demonstrates that no one is beyond God's grace - even a hated tax collector can become a holy apostle and evangelist.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion</h3>
              <p className="mb-6">
                As a former tax collector, Matthew represents the radical transformation that Christ can work in any person. His example inspires everyone to respond to Christ's call, regardless of their past.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Evangelist and Teacher</h3>
              <p>
                Through his Gospel, Matthew continues to teach millions of people about Jesus Christ. His account is the first of the four Gospels and establishes Jesus as the promised Messiah and the founder of the New Covenant.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 21</div>
              <p className="text-gray-600">Feast of St. Matthew</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Matthew is celebrated on September 21, a date established by the Church. It is a time to pray for the conversion of sinners, for evangelization, and to be inspired by his example of responding to Christ's call.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote readings from Matthew's Gospel, prayers for conversion, and acts of charity in his memory, highlighting the importance of evangelization and Christian witness.
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
                  <li>• <strong>Bankers:</strong> Patron of bankers and financial workers</li>
                  <li>• <strong>Accountants:</strong> Patron of accountants and bookkeepers</li>
                  <li>• <strong>Tax Collectors:</strong> Patron of tax collectors and revenue agents</li>
                  <li>• <strong>Evangelists:</strong> Patron of evangelization and missionary work</li>
                  <li>• <strong>Writers:</strong> Patron of Christian writers and authors</li>
                  <li>• <strong>Salerno:</strong> Patron saint of Salerno, Italy</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Patron of sinners seeking conversion</li>
                  <li>• <strong>Financial Matters:</strong> Helper in financial difficulties</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading the Gospel</li>
                  <li>• <strong>Writing:</strong> Patron of Christian writing and publishing</li>
                  <li>• <strong>Repentance:</strong> Patron of those seeking forgiveness</li>
                  <li>• <strong>New Beginnings:</strong> Helper in starting new chapters in life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Matthew</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Glorious St. Matthew, in your Gospel you portray Jesus as the longed-for Messiah who fulfilled the Prophets of the Old Covenant and as the new Lawgiver who founded a Church of the New Covenant."
                  </p>
                  <p className="mb-4">
                    "Obtain for us the grace to see Jesus living in his Church and to follow his teachings in our lives on earth so that we may live forever with him in heaven."
                  </p>
                  <p>
                    St. Matthew, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Matthew, patron of bankers and evangelists, pray for us!"
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
            <Link href="/saints/st-mark" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Evangelists
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mark
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and author of the second Gospel, companion of St. Peter and patron of Venice.
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
                  Evangelist and author of the third Gospel and Acts of the Apostles, patron of physicians and artists.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Evangelists
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Evangelist and author of the fourth Gospel, the Beloved Disciple and patron of theologians.
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