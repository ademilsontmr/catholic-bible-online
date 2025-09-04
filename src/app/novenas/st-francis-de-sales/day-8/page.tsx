import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Day 8: Humility',
  description: 'Pray the St. Francis de Sales Novena - Day 8 focusing on Humility. Join in praying the traditional novena to seek his intercession.',
  keywords: [
    'st francis de sales novena day 8',
    'francis de sales novena day 8',
    'saint francis de sales novena day 8',
    'humility prayer',
    'day 8 francis de sales novena',
    'virtue of humility',
    'catholic humility',
    'francis de sales novena humility'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Day 8: Humility',
    description: 'Pray the St. Francis de Sales Novena - Day 8 focusing on Humility. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales/day-8',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Day 8: Humility',
    description: 'Pray the St. Francis de Sales Novena - Day 8 focusing on Humility. Join in praying the traditional novena.',
  }
}

export default function StFrancisDeSalesNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena – Day 8: Humility
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Francis de Sales Novena to seek his intercession for writers, journalists, and spiritual direction.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-francis-de-sales" className="hover:text-gray-700">St. Francis de Sales Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Humility</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the St. Francis de Sales Novena, we pray for the virtue of humility,
            following St. Francis de Sales' example. We ask him to help us develop true humility in our hearts.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, model of humility,</strong> you who taught that true humility is the foundation
                of all virtues, you are always ready to help us develop this essential virtue in our lives.
              </p>

              <p className="mb-6">
                <strong>Your humility was evident in your gentle approach to all people and situations.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, help us grow in humility!</strong> Teach us to recognize our own limitations
                and to depend on God's grace. May we learn to serve others with gentleness and to accept both praise
                and criticism with equal humility.
              </p>

              <p className="mb-4">
                St. Francis de Sales taught that humility is not about thinking less of ourselves, but about thinking
                of ourselves less. True humility allows us to see ourselves as we truly are - beloved children of God
                who are completely dependent on His grace.
              </p>

              <p className="mb-4">
                He believed that humility is the foundation of all other virtues and that without it, our other virtues
                become distorted. Humility allows us to serve others with love and to accept God's will in all circumstances.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask St. Francis de Sales to help us develop true humility.
                Let us ask him to teach us to serve others with gentleness and to accept God's will with trust.
              </p>

              <p>
                Remember that humility is not weakness, but strength. St. Francis de Sales shows us how humility
                enables us to love and serve others with true charity.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Francis de Sales</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Francis de Sales' intercession and his ability to help you.
                Turn to him with confidence in every need, especially for writers and spiritual guidance.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Francis de Sales will not fail to help those who turn to him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Francis de Sales.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Francis de Sales for his intercession and for the graces you receive.
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Francis de Sales, model of humility, help us to develop true humility in our hearts.
            May we learn to serve others with gentleness and to accept God's will with trust.
            Teach us to see ourselves as beloved children of God, completely dependent on His grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Francis de Sales Novena - Day 8: Humility" 
            url="/novenas/st-francis-de-sales/day-8"
            excerpt="Join me in praying the St. Francis de Sales Novena - Day 8 focusing on Humility." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-francis-de-sales/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Prayer
          </Link>
          <Link
            href="/novenas/st-francis-de-sales/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Devout Life →
          </Link>
        </div>
      </div>
    </div>
  )
} 