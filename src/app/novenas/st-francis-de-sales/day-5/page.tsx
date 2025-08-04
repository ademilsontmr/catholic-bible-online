import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Day 5: Patience',
  description: 'Pray the St. Francis de Sales Novena - Day 5 focusing on Patience. Join in praying the traditional novena to seek his intercession.',
  keywords: [
    'st francis de sales novena day 5',
    'francis de sales novena day 5',
    'saint francis de sales novena day 5',
    'patience prayer',
    'day 5 francis de sales novena',
    'patience in difficulties',
    'catholic patience',
    'francis de sales novena patience'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Day 5: Patience',
    description: 'Pray the St. Francis de Sales Novena - Day 5 focusing on Patience. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales/day-5',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Day 5: Patience',
    description: 'Pray the St. Francis de Sales Novena - Day 5 focusing on Patience. Join in praying the traditional novena.',
  }
}

export default function StFrancisDeSalesNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena – Day 5: Patience
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Patience</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the St. Francis de Sales Novena, we pray for patience in difficulties and challenges.
            We ask St. Francis de Sales to help us develop the virtue of patience in all our trials.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, model of patience,</strong> you who faced countless difficulties
                and rejections with unwavering patience, you are always ready to help us develop this essential virtue
                in our own lives.
              </p>

              <p className="mb-6">
                <strong>Your patience in the face of rejection and persecution was truly remarkable.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, help us grow in patience!</strong> Teach us to face difficulties
                and challenges with the same patience and gentleness that you showed. May we learn to trust in God's
                timing and to persevere in our trials, knowing that God is working through our difficulties.
              </p>

              <p className="mb-4">
                St. Francis de Sales demonstrated extraordinary patience during his missionary work among the Calvinists.
                For three years, he faced rejection, doors slammed in his face, and even rocks thrown at him.
                Yet he never lost his patience or his gentle spirit.
              </p>

              <p className="mb-4">
                He understood that patience is not about passive waiting, but about active trust in God's providence.
                He believed that God works through our difficulties and that patience is essential for spiritual growth.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask St. Francis de Sales to help us develop patience in our own lives.
                Let us ask him to teach us to trust in God's timing and to persevere in our trials.
              </p>

              <p>
                Remember that patience is a fruit of the Holy Spirit. St. Francis de Sales shows us how to cultivate
                this virtue through prayer, trust, and gentle perseverance.
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
            O St. Francis de Sales, model of patience, help us to develop this essential virtue in our lives.
            May we learn to trust in God's timing and to persevere in our trials with gentleness and faith.
            Teach us to face difficulties with the same patience that you showed. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="St. Francis de Sales Novena - Day 5: Patience"
          text="Join me in praying the St. Francis de Sales Novena - Day 5 focusing on Patience."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-francis-de-sales/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Universal Call to Holiness
          </Link>
          <Link
            href="/novenas/st-francis-de-sales/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Love of God →
          </Link>
        </div>
      </div>
    </div>
  )
} 