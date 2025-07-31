import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for God\'s Blessings - Day 3: Holy Friendships',
  description: 'Pray the Novena for God\'s Blessings - Day 3 focusing on Holy Friendships. Join in praying for God\'s abundant blessings and divine favor.',
  keywords: [
    'novena for god\'s blessings day 3',
    'god\'s blessings prayer day 3',
    'holy friendships god\'s blessings prayer',
    'god\'s blessings novena day 3',
    'catholic god\'s blessings prayer day 3',
    'god\'s blessings holy friendships novena day 3',
    'prayer for god\'s blessings day 3',
    'god\'s blessings novena prayer day 3',
    'catholic novena god\'s blessings day 3',
    'god\'s blessings holy friendships prayer day 3'
  ],
  openGraph: {
    title: 'Novena for God\'s Blessings - Day 3: Holy Friendships',
    description: 'Pray the Novena for God\'s Blessings - Day 3 focusing on Holy Friendships. Join in praying for God\'s abundant blessings and divine favor.',
    url: 'https://catholicbibleonline.com/novenas/gods-blessings/day-3',
  },
  twitter: {
    title: 'Novena for God\'s Blessings - Day 3: Holy Friendships',
    description: 'Pray the Novena for God\'s Blessings - Day 3 focusing on Holy Friendships. Join in praying for God\'s abundant blessings and divine favor.',
  }
}

export default function NovenaForGodsBlessingsDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for God's Blessings – Day 3: Holy Friendships
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for God's Blessings to seek God's abundant blessings and divine favor.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/gods-blessings" className="hover:text-gray-700">Novena for God's Blessings</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Holy Friendships</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for the gift of holy friendships and meaningful relationships.
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
                <strong>Dear Lord,</strong> we thank You and praise You for the many gifts You have given us in our lives.
                We humbly ask You to bless us and all people with everything that we need.
              </p>

              <p className="mb-6">
                <strong>Every good thing in our world is a blessing from You.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Dear Lord, increase our trust in You!</strong> Help us to trust completely
                in Your generosity and Your ability to provide all that we need. Teach us to turn to You
                with confidence in every difficulty.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>Dear Lord, hear our prayers!</strong>
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
                Today we pray for the gift of holy friendships and meaningful relationships.
Friendship is a precious gift from God that helps us grow in love and virtue.
God wants us to have friends who help us grow closer to Him and become better people.
The title "God's Blessings" reminds us that every good relationship is a blessing from God.
As we continue this novena, let us ask God to bless our friendships and relationships.
Remember that holy friendships help us grow in love for God and for one another.
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
                Trust completely in God's generosity and His ability to bless you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to bless those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to bless you with the particular graces you need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His blessings and generosity.
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, increase our trust in You. Help us to turn to You with confidence
            in every need, knowing that You will always provide for us and bless us abundantly.
            May we always trust in Your generous care and Your abundant blessings. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for God's Blessings - Day 3: Holy Friendships"
          text="Join me in praying the Novena for God's Blessings - Day 3 focusing on Holy Friendships."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/gods-blessings"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/gods-blessings/day-4"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 4: Next Theme →
          </Link>
        </div>
      </div>
    </div>
  )
}