import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude Novena - Day 6: Knowing God\'s Will',
  description: "Pray St. Jude Novena - Day 6 focusing on Knowing God's Will. Join in praying the traditional novena for impossible causes.",
  keywords: [
    'st jude novena day 6',
    'saint jude novena day 6',
    'st jude day 6',
    'day 6 st jude novena',
    'knowing god\'s will prayer',
    'st jude novena knowing god\'s will',
    'saint jude knowing god\'s will',
    'impossible causes prayer day 6'
  ],
  openGraph: {
    title: 'St. Jude Novena - Day 6: Knowing God\'s Will',
    description: 'Pray St. Jude Novena - Day 6 focusing on Knowing God\'s Will. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-jude/day-6',
  },
  twitter: {
    title: 'St. Jude Novena - Day 6: Knowing God\'s Will',
    description: 'Pray St. Jude Novena - Day 6 focusing on Knowing God\'s Will. Join in praying the traditional novena.',
  }
}

export default function StJudeNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude Novena – Day 6: Knowing God's Will
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Knowing God's Will</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying to know God's will in our life. We ask St. Jude to help us discern what God wants for us.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

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
              St. Jude knew God's will for his life and followed it faithfully. He can help us understand and accept God's plan for our own lives.
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
            O St. Jude, help us to know God's will. May we always discern and follow what God wants for our lives. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton
          title="St. Jude Novena - Day 6: Knowing God's Will"
          text="Join me in praying St. Jude Novena - Day 6 focusing on Knowing God's Will."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-jude/day-5"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 5: Sacrifice for the Kingdom
          </Link>
          
          
          <Link
            href="/novenas/st-jude/day-7"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 7: Trust in God →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
