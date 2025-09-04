import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dedication of St. Mary Major Basilica Novena - Day 3: Intimacy with Jesus',
  description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 3 focusing on Intimacy with Jesus. Join in praying the traditional novena to grow closer to Jesus through Mary.',
  keywords: [
    'dedication st mary major basilica novena day 3',
    'intimacy with jesus prayer',
    'st mary major basilica day 3',
    'basilica dedication prayer day 3',
    'mary major novena day 3',
    'day 3 basilica dedication novena',
    'intimacy jesus prayer',
    'basilica dedication novena day 3',
    'catholic novena'
  ],
  openGraph: {
    title: 'Dedication of St. Mary Major Basilica Novena - Day 3: Intimacy with Jesus',
    description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 3 focusing on Intimacy with Jesus. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/dedication-st-mary-major-basilica/day-3',
  },
  twitter: {
    title: 'Dedication of St. Mary Major Basilica Novena - Day 3: Intimacy with Jesus',
    description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 3 focusing on Intimacy with Jesus. Join in praying the traditional novena.',
  }
}

export default function DedicationStMaryMajorBasilicaNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Dedication of St. Mary Major Basilica Novena – Day 3: Intimacy with Jesus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Dedication of St. Mary Major Basilica Novena to honor Mary and seek her intercession.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/dedication-st-mary-major-basilica" className="hover:text-gray-700">Dedication of St. Mary Major Basilica Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Intimacy with Jesus</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Dedication of St. Mary Major Basilica Novena, we pray that all people may grow in intimacy with Jesus through Mary.
            We ask Mary to help us grow in holiness through her motherly care and to come to love Jesus as she does.
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
                <strong>Lord God, we thank You for the many devotional practices You give us as we journey toward heaven with You.</strong> 
                Guide us in making use of all the help You give us!
              </p>

              <p className="mb-6">
                <strong>Dearest Mother, you can help us grow in holiness through your motherly care.</strong> In honoring you and bringing our needs to you, 
                we are able to grow closer to Your Son. Jesus has given you to us as a mother so that we may come to love Him as you do.
              </p>

              <p className="mb-6">
                <strong>Please bring all of our petitions before the throne of your Son.</strong> And we particularly ask today that you pray that all people may grow in intimacy with Jesus!
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may make our relationship with God our top priority in life.</strong> 
                Pray that we may do whatever is necessary to advance in holiness.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Blessed Mother Mary, pray for us!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we pray that all people may grow in intimacy with Jesus through Mary. Mary can help us grow in holiness through her motherly care, 
                and in honoring her and bringing our needs to her, we are able to grow closer to Jesus.
              </p>

              <p className="mb-4">
                Jesus has given Mary to us as a mother so that we may come to love Him as she does. This shows us the beautiful relationship 
                between devotion to Mary and growing in intimacy with Jesus. When we turn to Mary, she always leads us to her Son.
              </p>

              <p className="mb-4">
                The title "Dedication of St. Mary Major Basilica Novena" reminds us that Mary is our mother and intercessor.
                She is always ready to help us grow in holiness and bring our prayers to Jesus, just as the basilica was dedicated to her honor.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask Mary to help us make our relationship with God our top priority in life.
                Let us ask her to pray that all people may grow in intimacy with Jesus and do whatever is necessary to advance in holiness.
              </p>

              <p>
                Remember that growing in intimacy with Jesus is not just about external acts, but about making our relationship with God 
                our top priority and doing whatever is necessary to advance in holiness. Mary wants to help us love Jesus as she does.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's ability to help you grow closer to Jesus.
                Turn to her with confidence in every situation that requires her intercession.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Spiritual growth is a process that takes time.
                Be patient with yourself and trust in Mary's timing.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Blessed Mother Mary, help us to grow in intimacy with Jesus through your motherly care. 
            Pray that all people may grow in intimacy with Jesus and make their relationship with God their top priority in life. 
            Help us to do whatever is necessary to advance in holiness. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Dedication of St. Mary Major Basilica Novena - Day 3: Intimacy with Jesus" 
            url="/novenas/dedication-st-mary-major-basilica/day-3"
            excerpt="Join me in praying the Dedication of St. Mary Major Basilica Novena - Day 3 focusing on Intimacy with Jesus." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/dedication-st-mary-major-basilica/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Devotion to Mary
          </Link>
          
          <Link 
            href="/novenas/dedication-st-mary-major-basilica/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Piety and Holiness →
          </Link>
        </div>
      </div>
    </div>
  )
} 