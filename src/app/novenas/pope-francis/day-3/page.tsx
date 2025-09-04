import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Day 3: Thanksgiving',
  description: 'Pray the Novena for Pope Francis - Day 3 focusing on Thanksgiving. Join in praying the traditional novena to honor Pope Francis.',
  keywords: [
    'novena for pope francis day 3',
    'pope francis novena day 3',
    'pope novena day 3',
    'francis novena day 3',
    'pope francis prayer thanksgiving',
    'day 3 pope francis novena',
    'thanksgiving prayer',
    'pope francis novena thanksgiving',
    'pope novena thanksgiving'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Day 3: Thanksgiving',
    description: 'Pray the Novena for Pope Francis - Day 3 focusing on Thanksgiving. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis/day-3',
  },
  twitter: {
    title: 'Novena for Pope Francis - Day 3: Thanksgiving',
    description: 'Pray the Novena for Pope Francis - Day 3 focusing on Thanksgiving. Join in praying the traditional novena.',
  }
}

export default function PopeFrancisNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis – Day 3: Thanksgiving
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Thanksgiving</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Novena for Pope Francis, we pray in thanksgiving for Pope Francis' good works
            and pastoral fruits. We give thanks for his ministry and service to the Church.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

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
                <strong>We pray today in thanksgiving for Pope Francis' good works and pastoral fruits.</strong>
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
                Today we pray in thanksgiving for Pope Francis' good works and pastoral fruits.
                Throughout his pontificate, Pope Francis has been a shepherd who cared deeply for his flock.
              </p>

              <p className="mb-4">
                Pope Francis has shown us the importance of mercy, compassion, and reaching out to the marginalized.
                His emphasis on the joy of the Gospel and care for creation has inspired millions around the world.
              </p>

              <p className="mb-4">
                His pastoral approach has brought many people closer to Christ and the Church.
                We give thanks for his leadership, his teachings, and his example of Christian love.
              </p>

              <p className="mb-4">
                As we continue this novena, let us give thanks for all the good that Pope Francis has accomplished.
                Let us pray that his good works will continue to bear fruit in the Church and in the world.
              </p>

              <p>
                Remember that thanksgiving is not just about saying "thank you" but about recognizing God's work
                through His servants and being grateful for the blessings we have received.
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
            O Lord, we give thanks for Pope Francis' good works and pastoral fruits. Thank You for his ministry
            and for all the good he has accomplished. May his example continue to inspire us to serve You
            and our neighbor with love and compassion. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Pope Francis - Day 3: Thanksgiving" 
            url="/novenas/pope-francis/day-3"
            excerpt="Join me in praying the Novena for Pope Francis - Day 3 focusing on Thanksgiving." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pope-francis/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Forgiveness
          </Link>
          
          <Link 
            href="/novenas/pope-francis/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: The Church →
          </Link>
        </div>
      </div>
    </div>
  )
} 