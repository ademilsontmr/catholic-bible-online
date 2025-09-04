import { Metadata } from 'next'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'

export const metadata: Metadata = {
  title: 'Sts. Perpetua and Felicity - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Sts. Perpetua and Felicity, early Christian martyrs whose courage and faith inspired the Church.',
  keywords: [
    'sts perpetua and felicity',
    'saints perpetua and felicity',
    'st perpetua and felicity biography',
    'st perpetua and felicity feast day',
    'st perpetua and felicity patron saint',
    'catholic saints',
    'march 7 feast day',
    'early christian martyrs',
    'carthage martyrs'
  ],
  openGraph: {
    title: 'Sts. Perpetua and Felicity - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Perpetua and Felicity, early Christian martyrs whose courage and faith inspired the Church.',
    url: 'https://catholicbibleonline.com/saints/sts-perpetua-and-felicity',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'Sts. Perpetua and Felicity - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Perpetua and Felicity, early Christian martyrs whose courage and faith inspired the Church.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/sts-perpetua-and-felicity',
  },
}

export default function StsPerpetuaAndFelicityPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Sts. Perpetua and Felicity
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyrs, Patrons of Mothers
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Sts. Perpetua and Felicity</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 7</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Martyrs</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of Sts. Perpetua and Felicity</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Sts. Perpetua and Felicity were Christian martyrs who lived during the early persecutions of the Church in Africa by Emperor Severus. We are fortunate to have the actual record of Perpetua and Felicity's courage from Perpetua's own hand, her teacher Saturus, and others who knew them.
              </p>
              <p className="mb-6">
                In 203, Vivia Perpetua, a well-educated noblewoman, made the decision to follow her mother's path and become a Christian, even though she knew this could mean her death during the persecutions ordered by Emperor Severus. Felicity was a young pregnant slave, eight months along, who was also imprisoned for her Christian faith.
              </p>
              <p>
                Perpetua was imprisoned with four other catechumens, including Felicity and Revocatus (slaves), and Saturninus and Secundulus. Her instructor in the faith, Saturus, chose to share their punishment and was also imprisoned. They were martyred in the arena of Carthage, facing wild beasts and gladiators with unshakeable courage.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Sts. Perpetua and Felicity: Courageous Martyrs</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                Sts. Perpetua and Felicity left a legacy of unshakeable faith, courage in the face of death, and love for Christian truth. Their story demonstrates that faith in Christ can overcome any suffering and that Christian identity is more precious than life itself.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Identity</h3>
              <p className="mb-6">
                Perpetua's response to her father - "I cannot call myself by any other name than what I am - a Christian" - became a timeless example of how Christian identity should be the most important thing in our lives. Her testimony continues to inspire Christians to this day.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Faith</h3>
              <p>
                The account of their visions, especially Perpetua's golden ladder, shows how God strengthens martyrs with special graces. Their story was so popular in the early centuries that it was read during liturgies, inspiring generations of Christians.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 7</div>
              <p className="text-gray-600">Feast of Sts. Perpetua and Felicity</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of Sts. Perpetua and Felicity is celebrated on March 7, the date of their martyrdom. It is a time to pray for courage in faith, for mothers and separated children, and to be inspired by their example of fidelity to Christ.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote special prayers for mothers, for victims of religious persecution, and acts of charity in their memory, highlighting the importance of Christian identity and courage in faith.
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
                  <li>• <strong>Mothers:</strong> Patron of all mothers and expectant mothers</li>
                  <li>• <strong>Pregnant Women:</strong> Patron of women during pregnancy</li>
                  <li>• <strong>Ranchers:</strong> Patron of ranchers and cattle farmers</li>
                  <li>• <strong>Butchers:</strong> Patron of butchers and meat workers</li>
                  <li>• <strong>Martyrs:</strong> Patron of those facing persecution</li>
                  <li>• <strong>Separated Families:</strong> Patron of families separated by war or persecution</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Christian Identity:</strong> Patron of those struggling with their faith</li>
                  <li>• <strong>Courage:</strong> Helper in facing persecution or trials</li>
                  <li>• <strong>Maternal Love:</strong> Patron of mother-child relationships</li>
                  <li>• <strong>Prisoners:</strong> Patron of those imprisoned for their faith</li>
                  <li>• <strong>Persecuted Christians:</strong> Patron of religious persecution victims</li>
                  <li>• <strong>Faithful Witness:</strong> Helper in bearing witness to Christ</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Sts. Perpetua and Felicity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saints Perpetua and Felicity, watch over all mothers and children who are separated from each other because of war or persecution. Show a special care to mothers who are imprisoned and guide them to follow your example of faith and courage."
                  </p>
                  <p>
                    Sts. Perpetua and Felicity, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Sts. Perpetua and Felicity, patrons of mothers and martyrs, pray for us!"
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and virgin, patron of young girls and chastity.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-catherine-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and patron of students, philosophers, and young women.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and virgin, patron of the blind and those with eye problems.
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