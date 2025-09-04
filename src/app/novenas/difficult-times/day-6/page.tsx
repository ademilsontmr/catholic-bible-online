import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Difficult Times - Day 6: Obedience',
  description: 'Pray the Novena for Difficult Times - Day 6 focusing on Obedience. Join in praying the traditional novena to seek God\'s strength during challenging periods.',
  keywords: [
    'novena for difficult times day 6',
    'difficult times novena day 6',
    'obedience prayer difficult times',
    'catholic prayer for obedience',
    'novena for difficult times prayer',
    'day 6 difficult times novena',
    'obedience god difficult times',
    'catholic novena prayer'
  ],
  openGraph: {
    title: 'Novena for Difficult Times - Day 6: Obedience',
    description: 'Pray the Novena for Difficult Times - Day 6 focusing on Obedience. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/difficult-times/day-6',
  },
  twitter: {
    title: 'Novena for Difficult Times - Day 6: Obedience',
    description: 'Pray the Novena for Difficult Times - Day 6 focusing on Obedience. Join in praying the traditional novena.',
  }
}

export default function NovenaForDifficultTimesDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Difficult Times – Day 6: Obedience
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Difficult Times to seek God's strength and divine assistance during challenging periods.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/difficult-times" className="hover:text-gray-700">Novena for Difficult Times</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Obedience</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Novena for Difficult Times, we pray for obedience in God's plan and His ability
            to help us through challenging periods. We ask God to help us grow in obedience and to trust in His divine wisdom
            and His promise to never abandon us, even in our darkest moments.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father,</strong> you are the source of all obedience and the foundation of our faith.
                You know exactly what we need to get through our difficult times.
                We come to you today with obedience in your divine plan for our lives.
              </p>

              <p className="mb-6">
                <strong>Your love for us is endless and your help is perpetual.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O God of all obedience, increase our obedience in you!</strong> Help us to obedience completely
                in your divine plan and your ability to help us in all our needs. Teach us to turn to you
                with confidence in every difficulty.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O God of all obedience, hear our prayer!</strong>
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
                Today we pray for obedience in God's plan and His ability to help us through difficult times.
                Obedience is the foundation of our relationship with God and the key to finding peace in challenging circumstances.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to help us.
                As our Father, He knows exactly what we need and when we need it.
              </p>

              <p className="mb-4">
                The title "God of all obedience" reminds us that God's obedience is constant and never-ending.
                He is always available to us, always ready to give us obedience, and always ready to guide us through our difficulties.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our obedience in Him.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always help us and provide us with the strength we need.
              </p>

              <p>
                Remember that God's obedience is not limited by time or circumstance.
                He is perpetually ready to help us, and we can obedience completely in His divine care.
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
                Trust completely in God's plan for your life, even during difficult times. Believe that He is working for your good.
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
                Present your specific difficulties and intentions to God. He wants to help you with the particular challenges you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His strength and the intercession of the saints. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O God of all obedience, increase our obedience in you. Help us to turn to you with confidence
            in every need, knowing that you will always help us and provide us with the strength we need.
            May we always obedience in your divine care and your perpetual help. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Difficult Times - Day 6: Obedience" 
            url="/novenas/difficult-times/day-6"
            excerpt="Join me in praying the Novena for Difficult Times - Day 6 focusing on Obedience." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/difficult-times/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Purity
          </Link>
          
          <Link 
            href="/novenas/difficult-times/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
}