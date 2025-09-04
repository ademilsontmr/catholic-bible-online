import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Benjamin - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Benjamin, Persian martyr who died for preaching Christ despite being released from prison.',
  keywords: [
    'st benjamin',
    'saint benjamin',
    'persian martyr',
    'st benjamin biography',
    'st benjamin feast day',
    'st benjamin patron saint',
    'persian persecution',
    'early christian martyrs',
    'catholic saints',
    'march 31 feast day'
  ],
  openGraph: {
    title: 'St. Benjamin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Benjamin, Persian martyr who died for preaching Christ despite being released from prison.',
    url: 'https://catholicbibleonline.com/saints/st-benjamin',
  },
  twitter: {
    title: 'St. Benjamin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Benjamin, Persian martyr who died for preaching Christ despite being released from prison.',
  }
}

export default function StBenjaminPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Benjamin
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Persian Martyr, Deacon Who Could Not Be Silenced
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Benjamin</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 31</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Benjamin</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The Christians in Persia had enjoyed twelve years of peace during the reign of Isdegerd, son of Sapor III, 
                when in 420 it was disturbed by the indiscreet zeal of Abdas, a Christian Bishop who burned the Temple of Fire, 
                the great sanctuary of the Persians.
              </p>
              
              <p className="mb-6">
                King Isdegerd threatened to destroy all the churches of the Christians unless the Bishop would rebuild it. 
                As Abdas refused to comply, the threat was executed; the churches were demolished, Abdas himself was put to death, 
                and a general persecution began which lasted forty years.
              </p>
              
              <p className="mb-6">
                Isdegerd died in 421, but his son and successor, Varanes, carried on the persecution with great fury. 
                The Christians were submitted to the most cruel tortures. Among those who suffered was St. Benjamin, a Deacon, 
                who had been imprisoned a year for his Faith.
              </p>
              
              <p className="mb-6">
                At the end of this period, an ambassador of the Emperor of Constantinople obtained his release on condition 
                that he would never speak to any of the courtiers about religion. St. Benjamin, however, declared it was his duty 
                to preach Christ and that he could not be silent.
              </p>
              
              <p className="mb-6">
                Although he had been liberated on the agreement made with the ambassador and the Persian authorities, 
                he would not acquiesce in it, and neglected no opportunity of preaching. He was again apprehended and brought before the king.
              </p>
              
              <p>
                The tyrant ordered that reeds should be thrust in between his nails and his flesh and into all the tenderest parts 
                of his body and then withdrawn. After this torture had been repeated several times, a knotted stake was inserted 
                into his bowels to rend and tear him. The martyr expired in the most terrible agony about the year 424.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Benjamin: Witness to Unwavering Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courageous Witness</h3>
              <p className="mb-6">
                St. Benjamin's legacy is one of extraordinary courage and unwavering commitment to proclaiming the Gospel. 
                Even after being released from prison on the condition that he remain silent about his faith, he refused to be silenced. 
                His declaration that it was his duty to preach Christ shows his deep understanding of the Christian mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Persecution in Persia</h3>
              <p className="mb-6">
                St. Benjamin's martyrdom occurred during one of the most brutal periods of persecution against Christians in Persia. 
                The forty-year persecution that began in 420 was marked by extreme cruelty, and St. Benjamin's suffering represents 
                the courage of all those who refused to renounce their faith during this dark period.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Diaconal Ministry</h3>
              <p className="mb-6">
                As a deacon, St. Benjamin exemplified the diaconal ministry of service and proclamation. His refusal to be silent 
                about Christ, even at the cost of his life, shows the depth of his commitment to his vocation as a minister of the Gospel. 
                He serves as a model for all deacons and ministers of the Word.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Faith</h3>
              <p>
                St. Benjamin's martyrdom, though horrific, stands as a testament to the power of faith to overcome even the most 
                extreme suffering. His willingness to endure such terrible torture rather than deny Christ shows the depth of his love 
                for God and his commitment to the truth of the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 31</div>
              <p className="text-gray-600">Feast of St. Benjamin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Benjamin is celebrated on March 31st. This feast day honors his courageous witness to Christ and his refusal 
                to be silenced, even when offered freedom at the cost of his silence.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for the courage to witness to their faith, for those suffering persecution, 
                for deacons and ministers of the Word, and for the Church in the Middle East. It's also a day to reflect on 
                the cost of discipleship and the power of faithful witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the courage to proclaim Christ, for those facing persecution, 
                for deacons and ministers, and to ask for St. Benjamin's intercession in remaining faithful to the Gospel.
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
                  <li>• <strong>Deacons:</strong> Patron of deacons and diaconal ministry</li>
                  <li>• <strong>Persecuted Christians:</strong> Patron of those suffering for their faith</li>
                  <li>• <strong>Preachers:</strong> Patron of those who proclaim the Gospel</li>
                  <li>• <strong>Persian Christians:</strong> Patron of Christians in Persia/Iran</li>
                  <li>• <strong>Courageous Witness:</strong> Patron of bold faith witness</li>
                  <li>• <strong>Silence Breakers:</strong> Patron of those who refuse to be silenced</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faith Under Pressure:</strong> Helper for those facing opposition</li>
                  <li>• <strong>Ministry of the Word:</strong> Patron of proclaiming the Gospel</li>
                  <li>• <strong>Persecution Victims:</strong> Helper for those suffering torture</li>
                  <li>• <strong>Middle East Church:</strong> Patron of Christians in the region</li>
                  <li>• <strong>Diaconal Service:</strong> Helper for deacons and ministers</li>
                  <li>• <strong>Unwavering Faith:</strong> Patron of steadfast belief</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Benjamin</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Benjamin, you who refused to be silenced even when offered freedom, help me to have the courage 
                    to proclaim Christ in all circumstances.
                  </p>
                  <p>
                    You who endured terrible torture rather than deny your faith, give me the strength to remain faithful 
                    to the Gospel even when it is difficult. Help me to be a bold witness to Christ in my daily life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Benjamin, patron of persecuted Christians, pray for all those who suffer for their faith today.
                  </p>
                  <p>
                    Intercede for those who face torture, imprisonment, or death because they proclaim Christ. 
                    Give them the same courage and strength you showed, and help us to remember and support them in prayer. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Benjamin, pray for us!"
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
            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First Christian martyr, deacon who was stoned for preaching Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lawrence" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lawrence
                </h3>
                <p className="text-gray-700 text-sm">
                  Deacon martyr of Rome, roasted on a gridiron for his faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-polycarp" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Polycarp
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr, bishop of Smyrna, burned at the stake.
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