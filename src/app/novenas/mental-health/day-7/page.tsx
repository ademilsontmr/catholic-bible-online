import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Mental Health - Day 7: Perseverance',
  description: 'Pray the Novena for Mental Health - Day 7 focusing on Perseverance. Join in praying for healing and strength.',
}

export default function Day7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Novena for Mental Health – Day 7: Perseverance</h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Mental Health to seek God's intercession and guidance in managing mental health.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mental-health" className="hover:text-gray-700">Novena for Mental Health</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Novena for Mental Health, we pray for perseverance in prayer and in managing mental health with faith. We ask God to help us persevere in our spiritual journey.</p>
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
                <strong>O Lord Jesus Christ,</strong> you are the source of all healing and strength.
You are always ready to help us in our needs and to guide us in our journey.
We come to you today with trust in your healing power. you are the most loving and caring mother.
You are always ready to help us in our needs and to bring our prayers to your Son, Jesus.
We come to you today with trust in your intercession.
              </p>
              <p className="mb-6">
                <strong>Your peace is perfect and your serenity is unshakeable.</strong>
              </p>
              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>
              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ, give us peace and serenity! Help us to find peace in your presence
and serenity in trusting your care for us.
Teach us to rest in your peace.</strong>
              </p>
              <p className="mb-6">
                <strong>We also pray for these intentions… (State your intentions here)</strong>
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ, be our peace and our serenity!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for peace and serenity in managing mental health.
                Peace and Serenity are gifts from God that help us face life's challenges.
              </p>

              <p className="mb-4">
                The Bible tells us that "I can do all things through Christ who strengthens me" (Philippians 4:13).
                This powerful verse reminds us that our strength comes from God, not from ourselves.
                When we feel weak or overwhelmed, we can turn to Him for the help we need.
              </p>

              <p className="mb-4">
                God is our creator and our healer. He knows every aspect of our mental health and every challenge we face.
                As our loving Father, He wants what is best for us and is always ready to help us.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to give us the peace and serenity we need
                to manage our mental health well and to face each day with hope and confidence.
              </p>

              <p>
                Remember that God's help is available to us every day, and His love
                can help us overcome any obstacle we face in our mental health journey.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's intercession and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific health needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Lord Jesus Christ, give us peace and serenity. Help us to find peace in your presence
and serenity in trusting your care for us.
May we always rest in your peace. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Mental Health - Day 7: Peace and Serenity" 
            url="/novenas/mental-health/day-7"
            excerpt="Join me in praying the Novena for Mental Health - Day 7 focusing on Peace and Serenity." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/mental-health/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Gratitude and Acceptance
          </Link>
          
          <Link 
            href="/novenas/mental-health/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Love and Self-Care →
          </Link>
        </div>
      </div>
    </div>
  )
}