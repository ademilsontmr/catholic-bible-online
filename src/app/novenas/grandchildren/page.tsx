import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance. Reze por seus netos, bênçãos e vocações.',
  keywords: [
    'novena for grandchildren',
    'prayer for grandchildren',
    'catholic grandchildren novena',
    'blessing grandchildren',
    'grandchildren vocation prayer',
    'grandchildren healing prayer',
    'grandchildren faith',
    'grandchildren hope',
    'grandchildren love',
    'grandchildren family prayer'
  ],
  openGraph: {
    title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance for blessings and vocations.',
    url: 'https://catholicbibleonline.com/novenas/grandchildren',
  },
  twitter: {
    title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance for blessings and vocations.',
  }
}

const novenaDays = [
  { day: 1, theme: 'Healing', description: 'Pray for strength and healing for your grandchildren.', slug: 'day-1' },
  { day: 2, theme: 'Submission to God', description: 'Pray for your grandchildren to submit to God’s will.', slug: 'day-2' },
  { day: 3, theme: 'Faith', description: 'Pray for your grandchildren to grow in faith.', slug: 'day-3' },
  { day: 4, theme: 'Hope', description: 'Pray for your grandchildren to grow in hope.', slug: 'day-4' },
  { day: 5, theme: 'Charity', description: 'Pray for your grandchildren to grow in charity.', slug: 'day-5' },
  { day: 6, theme: 'Piety', description: 'Pray for your grandchildren to grow in piety.', slug: 'day-6' },
  { day: 7, theme: 'Humility', description: 'Pray for your grandchildren to grow in humility.', slug: 'day-7' },
  { day: 8, theme: 'Intimacy with God', description: 'Pray for your grandchildren to grow in intimacy with God.', slug: 'day-8' },
  { day: 9, theme: 'Vocation', description: 'Pray for your grandchildren to discern and live their vocation.', slug: 'day-9' },
]

export default function NovenaForGrandchildrenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grandchildren
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer for blessings, healing, and vocation for your grandchildren. This novena helps you entrust your grandchildren to God’s loving care.
          </p>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👧🧒</div>
              <div className="text-sm text-gray-600">Grandchildren</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Grandchildren
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Grandchildren is a traditional nine-day prayer to entrust your grandchildren to God’s loving care. Through this novena, you pray for their health, faith, hope, love, and vocation.
            </p>
            <p className="mb-4">
              Each day focuses on a specific grace or virtue for your grandchildren, helping you to intercede for them and to grow in your own faith and trust in God’s providence.
            </p>
            <p>
              Through this novena, you ask God to bless, protect, and guide your grandchildren in every circumstance of their lives.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Daily Prayers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/grandchildren/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God’s loving care for your grandchildren. Turn to Him with confidence in every need.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for your grandchildren to God. He wants to help you with the particular difficulties you and your grandchildren face.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and blessings. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray for your grandchildren to grow in faith and trust in God’s promises.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Pray for your grandchildren to have hope in God’s loving plan for their lives.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray for your grandchildren to love God and others with generous hearts.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Grandchildren Devotion?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Grandchildren devotion is a way of entrusting your grandchildren to God’s loving care, praying for their health, faith, hope, love, and vocation.
          </p>
          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Grandchildren Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👧</span>
                <span>Granddaughter</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🧒</span>
                <span>Grandson</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌱</span>
                <span>Growth</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Faith</span>
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps you to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Entrust your grandchildren to God’s loving care</li>
              <li>• Pray for their health, faith, hope, love, and vocation</li>
              <li>• Grow in your own faith and trust in God’s providence</li>
              <li>• Be a model of faith, hope, and charity for your grandchildren</li>
              <li>• Support your grandchildren in their journey to holiness</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 