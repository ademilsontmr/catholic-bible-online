import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Day 8: Holy Spirit',
  description: 'Pray the Novena for Pope Francis - Day 8 focusing on Holy Spirit. Join in praying the traditional novena to honor Pope Francis.',
  keywords: [
    'novena for pope francis day 8',
    'pope francis novena day 8',
    'pope novena day 8',
    'francis novena day 8',
    'pope francis prayer holy spirit',
    'day 8 pope francis novena',
    'holy spirit prayer',
    'pope francis novena holy spirit',
    'pope novena holy spirit'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Day 8: Holy Spirit',
    description: 'Pray the Novena for Pope Francis - Day 8 focusing on Holy Spirit. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis/day-8',
  },
  twitter: {
    title: 'Novena for Pope Francis - Day 8: Holy Spirit',
    description: 'Pray the Novena for Pope Francis - Day 8 focusing on Holy Spirit. Join in praying the traditional novena.',
  }
}

export default function PopeFrancisNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis – Day 8: Holy Spirit
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Pope Francis to honor and pray for the Holy Father.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/pope-francis" className="hover:text-gray-700">Novena for Pope Francis</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Holy Spirit</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Novena for Pope Francis, we pray for the Holy Spirit to descend upon the Church, 
            to watch over us and guide us during this time of transition.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit, Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Crucified Lord,</strong> we mourn today the death of the Holy Father. 
                May Your suffering and his bring about repentance and a return to You.
              </p>

              <p className="mb-6">
                <strong>O Risen Lord,</strong> we pray that the Holy Father will come face to face with you 
                and that his prayers for the Church will bring about renewal of faith in You.
              </p>

              <p className="mb-6">
                <strong>We pray today for the Holy Spirit to descend upon the Church, to watch over us and guide us.</strong>
              </p>

              <p className="mb-6">
                <strong>We pray also for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>For Pope Francis, we pray:</strong>
              </p>

              <p className="mb-6">
                <strong>Eternal rest, grant unto him, O Lord. And let perpetual light shine upon him.</strong>
              </p>

              <p className="mb-6">
                <strong>May the souls of all the faithful departed, through the mercy of God, rest in peace.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit, Amen.</strong>
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
                Today we pray for the Holy Spirit to descend upon the Church, to watch over us and guide us.
                The Holy Spirit is the soul of the Church and our guide in all things.
              </p>

              <p className="mb-4">
                In times of uncertainty and transition, we need the Holy Spirit more than ever.
                He is our Comforter, our Advocate, and our Guide.
              </p>

              <p className="mb-4">
                The Holy Spirit will lead us to all truth and help us to understand God's will.
                We pray that He will guide the Church through this important transition.
              </p>

              <p className="mb-4">
                As we continue this novena, let us open our hearts to the Holy Spirit.
                Let us ask Him to fill us with His gifts and fruits.
              </p>

              <p>
                Remember that the Holy Spirit is always with us, even in the darkest times.
                He will never abandon us and will always guide us to the truth.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Reverence</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with reverence and respect for the Holy Father.
                Honor his memory and his service to the Church.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will hear our prayers for Pope Francis and the Church.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the Church and the next Pope.
                Pray for the particular needs of the Church during this time.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for Pope Francis' life and ministry.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Lord, we pray for the Holy Spirit to descend upon the Church, to watch over us and guide us.
            May He lead us through this time of transition and help us to remain faithful to Your truth.
            Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Pope Francis - Day 8: Holy Spirit"
          text="Join me in praying the Novena for Pope Francis - Day 8 focusing on Holy Spirit."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pope-francis/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Cardinal Electors
          </Link>
          
          <Link 
            href="/novenas/pope-francis/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Thanksgiving for Life →
          </Link>
        </div>
      </div>
    </div>
  )
} 