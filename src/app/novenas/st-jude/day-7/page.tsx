import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude Novena - Day 7: Trust in God',
  description: "Pray St. Jude Novena - Day 7 focusing on Trust in God. Join in praying the traditional novena for impossible causes.",
  keywords: [
    'st jude novena day 7',
    'saint jude novena day 7',
    'st jude day 7',
    'day 7 st jude novena',
    'trust in god prayer',
    'st jude novena trust in god',
    'saint jude trust in god',
    'impossible causes prayer day 7'
  ],
  openGraph: {
    title: 'St. Jude Novena - Day 7: Trust in God',
    description: 'Pray St. Jude Novena - Day 7 focusing on Trust in God. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-jude/day-7',
  },
  twitter: {
    title: 'St. Jude Novena - Day 7: Trust in God',
    description: 'Pray St. Jude Novena - Day 7 focusing on Trust in God. Join in praying the traditional novena.',
  }
}

export default function StJudeNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude Novena – Day 7: Trust in God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying St. Jude Novena with devotion and trust.
          </p>

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-jude" className="hover:text-gray-700">St. Jude Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust in God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day, we focus on learning to trust that God knows our needs better than we do. We ask St. Jude to help us put our complete trust in God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">St. Jude Novena Prayer</h3>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Opening Prayer</h4>
                <p className="mb-4">
                  In the name of the Father, and of the Son, and of the Holy Spirit.<br />
                  <strong>Amen.</strong>
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Main Prayer</h4>
                <p className="mb-4">
                  Most holy St. Jude – apostle, martyr and friend of Jesus, today I ask that you pray for me and my intentions!
                </p>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="italic">
                    <em>(State your intentions here)</em>
                  </p>
                </div>
                <p className="mb-4">
                  You are the patron of the impossible. Pray for me and my intentions! O St. Jude, pray that God's grace and mercy will cover my intentions. Pray for the impossible if it is God's will.
                </p>
                <p className="mb-4">
                  Pray that I may have the grace to accept God's holy will even if it is painful and difficult for me.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Prayer to St. Jude</h4>
                <p className="mb-4">
                  St. Jude, you loved our Lord, help me to love Him more.
                </p>
                <p className="mb-4">
                  O St. Jude, pray for me that I may grow in faith, hope and love and in the grace of Jesus Christ. Pray for these intentions, but most of all pray that I may join you in heaven with God for all eternity.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">Closing Prayer</h4>
                <p className="mb-4">
                  <strong>Amen.</strong><br />
                  In the name of the Father, and of the Son, and of the Holy Spirit.<br />
                  <strong>Amen.</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Jude trusted completely in God's providence. He teaches us that God knows our needs even better than we do and provides for us in His perfect timing.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Jude devotion, let us ask ourselves how we can
              better honor him and trust in his power to help with impossible causes and lost causes.
            </p>
            <p>
              May St. Jude continue to bless us with his powerful intercession and help us grow in our
              devotion to him and to our Lord Jesus Christ.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach St. Jude with confidence, knowing he is the patron
                of impossible causes and lost causes.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust that St. Jude will pray for your intentions and bring
                them before God with his powerful intercession.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Accept God's Will</h3>
              <p className="text-gray-700 text-sm">
                Pray for the grace to accept God's holy will even if it is
                painful and difficult for you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Never Lose Hope</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Jude to help you never lose hope and to grow in
                faith, hope, and love.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Jude, help us to trust in God completely. May we always believe that God knows our needs better than we do. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Jude Novena - Day 7: Trust in God" 
            url="/novenas/st-jude/day-7"
            excerpt="Join me in praying St. Jude Novena - Day 7 focusing on Trust in God." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-jude/day-6"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 6: Knowing God's Will
          </Link>
          
          
          <Link
            href="/novenas/st-jude/day-8"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 8: Never Lose Hope →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
