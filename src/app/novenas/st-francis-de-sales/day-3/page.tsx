import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Day 3: Spiritual Direction',
  description: 'Pray the St. Francis de Sales Novena - Day 3 focusing on Spiritual Direction. Join in praying the traditional novena to seek his intercession.',
  keywords: [
    'st francis de sales novena day 3',
    'francis de sales novena day 3',
    'saint francis de sales novena day 3',
    'spiritual direction prayer',
    'day 3 francis de sales novena',
    'spiritual guidance novena',
    'catholic spiritual direction',
    'francis de sales novena spiritual direction'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Day 3: Spiritual Direction',
    description: 'Pray the St. Francis de Sales Novena - Day 3 focusing on Spiritual Direction. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales/day-3',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Day 3: Spiritual Direction',
    description: 'Pray the St. Francis de Sales Novena - Day 3 focusing on Spiritual Direction. Join in praying the traditional novena.',
  }
}

export default function StFrancisDeSalesNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena – Day 3: Spiritual Direction
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Spiritual Direction</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the St. Francis de Sales Novena, we pray for spiritual directors and guidance
            in our spiritual journey. We ask St. Francis de Sales to help us find good spiritual direction
            and to grow in our relationship with God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, patron of spiritual direction,</strong> you who guided so many souls
                to holiness, including St. Jane de Chantal, you are always ready to help us find the right path
                in our spiritual journey.
              </p>

              <p className="mb-6">
                <strong>Your wisdom and gentleness guided countless souls to God.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, help us find good spiritual direction!</strong> Guide us to wise
                and holy spiritual directors who can help us grow in our relationship with God. May we be open
                to receiving spiritual guidance and may we follow the path that leads us closer to Christ.
              </p>

              <p className="mb-4">
                St. Francis de Sales was a master of spiritual direction, guiding many souls to holiness
                through his gentle and wise counsel. His relationship with St. Jane de Chantal is a perfect
                example of how spiritual direction can lead to extraordinary holiness.
              </p>

              <p className="mb-4">
                He believed that spiritual direction should be gentle, practical, and adapted to each person's
                state in life. He taught that holiness is possible for everyone, not just religious, and that
                spiritual direction should help people live their faith in their daily circumstances.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask St. Francis de Sales to help us find good spiritual direction.
                Let us ask him to guide us to wise counselors who can help us grow in holiness.
              </p>

              <p>
                Remember that spiritual direction is a gift from God. St. Francis de Sales shows us how important
                it is to have guidance in our spiritual journey.
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
            O St. Francis de Sales, patron of spiritual direction, help us find good spiritual guidance.
            May we be open to receiving direction and may we follow the path that leads us closer to Christ.
            Guide us to wise counselors who can help us grow in holiness. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="St. Francis de Sales Novena - Day 3: Spiritual Direction"
          text="Join me in praying the St. Francis de Sales Novena - Day 3 focusing on Spiritual Direction."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-francis-de-sales/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Writing
          </Link>
          <Link
            href="/novenas/st-francis-de-sales/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Universal Call to Holiness →
          </Link>
        </div>
      </div>
    </div>
  )
} 