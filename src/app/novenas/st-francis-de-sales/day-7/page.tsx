import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Day 7: Prayer',
  description: 'Pray the St. Francis de Sales Novena - Day 7 focusing on Prayer. Join in praying the traditional novena to seek his intercession.',
  keywords: [
    'st francis de sales novena day 7',
    'francis de sales novena day 7',
    'saint francis de sales novena day 7',
    'prayer life',
    'day 7 francis de sales novena',
    'growth in prayer',
    'catholic prayer',
    'francis de sales novena prayer'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Day 7: Prayer',
    description: 'Pray the St. Francis de Sales Novena - Day 7 focusing on Prayer. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales/day-7',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Day 7: Prayer',
    description: 'Pray the St. Francis de Sales Novena - Day 7 focusing on Prayer. Join in praying the traditional novena.',
  }
}

export default function StFrancisDeSalesNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena – Day 7: Prayer
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the St. Francis de Sales Novena, we pray for growth in prayer life and to develop a deeper prayer relationship.
            We ask St. Francis de Sales to help us cultivate a rich and meaningful prayer life.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, master of prayer,</strong> you who taught that prayer is the key to loving God,
                you are always ready to help us develop a deeper and more meaningful prayer life.
              </p>

              <p className="mb-6">
                <strong>Your prayer life was the foundation of all your spiritual wisdom and guidance.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O St. Francis de Sales, help us grow in prayer!</strong> Teach us to turn our eyes to God in meditation
                so that our whole soul will be filled with Him. May we learn to pray with simplicity and trust,
                and may our prayer life become a source of strength and guidance in our daily lives.
              </p>

              <p className="mb-4">
                St. Francis de Sales taught that prayer should be simple and accessible to everyone. He advised busy people
                to "retire at various times into the solitude of your own heart, even while outwardly engaged in discussions
                or transactions with others and talk to God."
              </p>

              <p className="mb-4">
                He believed that the test of prayer was a person's actions, saying "To be an angel in prayer and a beast
                in one's relations with people is to go lame on both legs." True prayer should transform our lives and relationships.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask St. Francis de Sales to help us develop a deeper prayer life.
                Let us ask him to teach us how to pray with simplicity, trust, and love.
              </p>

              <p>
                Remember that prayer is not about saying the right words, but about opening our hearts to God.
                St. Francis de Sales shows us how to make prayer a natural part of our daily lives.
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
            O St. Francis de Sales, master of prayer, help us to develop a deeper and more meaningful prayer life.
            May we learn to turn our eyes to God in meditation and may our prayer transform our lives and relationships.
            Teach us to pray with simplicity, trust, and love. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="St. Francis de Sales Novena - Day 7: Prayer"
          text="Join me in praying the St. Francis de Sales Novena - Day 7 focusing on Prayer."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/st-francis-de-sales/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Love of God
          </Link>
          <Link
            href="/novenas/st-francis-de-sales/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Humility →
          </Link>
        </div>
      </div>
    </div>
  )
} 