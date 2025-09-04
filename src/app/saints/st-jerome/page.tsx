import { Metadata } from 'next'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'

export const metadata: Metadata = {
  title: 'St. Jerome - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Jerome, Doctor of the Church and translator of the Vulgate Bible.',
  keywords: [
    'st jerome',
    'saint jerome',
    'st jerome biography',
    'st jerome feast day',
    'st jerome patron saint',
    'catholic saints',
    'september 30 feast day',
    'doctor of the church',
    'vulgate bible'
  ],
  openGraph: {
    title: 'St. Jerome - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jerome, Doctor of the Church and translator of the Vulgate Bible.',
    url: 'https://catholicbibleonline.com/saints/st-jerome',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Jerome - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jerome, Doctor of the Church and translator of the Vulgate Bible.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-jerome',
  },
}

export default function StJeromePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jerome
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Translator of the Bible
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Jerome</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 30</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Scholar</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Jerome</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Jerome (342–420) was born Eusebius Sophronius Hieronymus in Stridon, Dalmatia (present-day Croatia or Slovenia). Educated by the famous Roman grammarian Aelius Donatus, he learned Latin and Greek. At age 12, he traveled to Rome to study grammar, philosophy, and rhetoric, but quickly abandoned his moral values.
              </p>
              <p className="mb-6">
                In 366, Jerome decided to become a Christian and was baptized by Pope Liberius. After his conversion, he dedicated himself to theological studies, traveling to Trier and then to a monastery in Aquileia. In 374, he reached Antioch, where he began writing and had religious visions during an illness.
              </p>
              <p>
                Jerome lived as a hermit in the desert for four years, was ordained a priest, and served as secretary to Pope Damasus in Rome. In 386, he settled in Bethlehem, where he founded a monastery and dedicated his life to translating the Bible from Hebrew and Old Latin into Latin, creating the Vulgate.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Jerome: Doctor of the Church</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Jerome left a legacy of biblical scholarship, sacred translation, and defense of the faith. His life demonstrates how conversion can transform a person of questionable behavior into one of the greatest scholars and saints of the Church.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Biblical Scholarship</h3>
              <p className="mb-6">
                As translator of the Vulgate, Jerome made the Bible accessible to the Western world for over a thousand years. His work of translation and biblical commentaries established the standards for the study of Sacred Scripture in the Catholic Church.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Orthodoxy</h3>
              <p>
                Jerome was an tireless defender of the virginity of Mary and combatant of heresies. His correspondence with St. Augustine and other theologians of the time helped shape Christian doctrine and establish the orthodoxy of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 30</div>
              <p className="text-gray-600">Feast of St. Jerome</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Jerome is celebrated on September 30, the date of his death. It is a time to pray for scholars, translators, and librarians, and to be inspired by his example of dedication to the study of Scripture.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote biblical studies, prayers for scholars, and acts of charity in his memory, highlighting the importance of Scripture study and Christian scholarship.
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
                  <li>• <strong>Archaeologists:</strong> Patron of archaeologists and excavations</li>
                  <li>• <strong>Biblical Scholars:</strong> Patron of biblical scholars and theologians</li>
                  <li>• <strong>Librarians:</strong> Patron of librarians and library workers</li>
                  <li>• <strong>Students:</strong> Patron of students and scholars</li>
                  <li>• <strong>Translators:</strong> Patron of translators and interpreters</li>
                  <li>• <strong>Scripture Study:</strong> Patron of biblical studies and research</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Academic Success:</strong> Patron of academic achievement</li>
                  <li>• <strong>Language Learning:</strong> Helper in learning languages</li>
                  <li>• <strong>Research:</strong> Patron of research and scholarly work</li>
                  <li>• <strong>Conversion:</strong> Helper in personal conversion and repentance</li>
                  <li>• <strong>Hermit Life:</strong> Patron of those seeking solitude and prayer</li>
                  <li>• <strong>Biblical Translation:</strong> Helper in translating sacred texts</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Jerome</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Jerome, you dedicated your life to translating and studying the Holy Scriptures. Inspire us to love and study the Word of God with the same dedication and zeal that you demonstrated."
                  </p>
                  <p>
                    St. Jerome, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Jerome, patron of scholars and translators, pray for us!"
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
            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine of Hippo
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and great theologian, friend and correspondent of St. Jerome.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and Bishop of Milan, contemporary of St. Jerome.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-gregory-nazianzen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory Nazianzen
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and great theologian, teacher of St. Jerome in Constantinople.
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