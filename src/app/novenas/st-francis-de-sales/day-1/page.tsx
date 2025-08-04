import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Day 1: Gentleness',
  description: 'Pray the St. Francis de Sales Novena - Day 1 focusing on Gentleness. Join in praying the traditional novena to seek his intercession.',
  keywords: [
    'st francis de sales novena day 1',
    'francis de sales novena day 1',
    'saint francis de sales novena day 1',
    'gentleness prayer',
    'day 1 francis de sales novena',
    'gentle saint novena',
    'writers saint novena day 1',
    'francis de sales novena gentleness'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Day 1: Gentleness',
    description: 'Pray the St. Francis de Sales Novena - Day 1 focusing on Gentleness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales/day-1',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Day 1: Gentleness',
    description: 'Pray the St. Francis de Sales Novena - Day 1 focusing on Gentleness. Join in praying the traditional novena.',
  }
}

export default function StFrancisDeSalesNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena – Day 1: Gentleness
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gentleness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the St. Francis de Sales Novena, we pray for the virtue of gentleness in all our interactions
            and communications. We ask St. Francis de Sales to help us imitate his gentle approach to sharing the faith
            and dealing with others.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O gentle St. Francis de Sales,</strong> you who were known for your patience and kindness,
                you are always ready to help us grow in virtue and to guide us in our spiritual journey.
                We come to you today with trust in your intercession.
              </p>

              <p className="mb-6">
                <strong>Your gentleness was your strength and your love for God was your guide.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O gentle St. Francis de Sales, increase our gentleness!</strong> Help us to be gentle in all our words and actions,
                especially when sharing our faith with others. Teach us to respond with love and patience,
                even when we face rejection or misunderstanding.
              </p>

              <p className="mb-4">
                St. Francis de Sales was known as the "Gentle Saint" for his remarkable patience and kindness.
                He believed that gentleness was essential in all our interactions, especially when sharing the faith.
              </p>

              <p className="mb-4">
                During his mission to convert Calvinists, Francis faced rejection, doors slammed in his face,
                and even rocks thrown at him. Yet he never lost his gentle spirit. Instead of responding with anger,
                he found creative ways to reach people, such as writing pamphlets and sliding them under doors.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask St. Francis de Sales to help us grow in gentleness.
                Let us ask him to teach us to respond with love and patience, even when we face rejection or misunderstanding.
              </p>

              <p>
                Remember that gentleness is not weakness, but a great strength that comes from God.
                St. Francis de Sales shows us how to be gentle and strong at the same time.
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
            O gentle St. Francis de Sales, increase our gentleness. Help us to be gentle in all our words and actions,
            especially when sharing our faith with others. Teach us to respond with love and patience,
            even when we face rejection or misunderstanding. May our gentleness be a reflection of God's love for all people. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="St. Francis de Sales Novena - Day 1: Gentleness"
          text="Join me in praying the St. Francis de Sales Novena - Day 1 focusing on Gentleness."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-francis-de-sales"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to St. Francis de Sales Novena
          </Link>
          
          <Link 
            href="/novenas/st-francis-de-sales/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Writing →
          </Link>
        </div>
      </div>
    </div>
  )
} 