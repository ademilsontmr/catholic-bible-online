import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Help Novena - Day 3: Hope',
  description: 'Pray the Financial Help Novena - Day 3 focusing on Hope. Join in praying the traditional novena to seek God\'s financial assistance.',
  keywords: [
    'financial help novena day 3',
    'financial novena day 3',
    'money prayer novena day 3',
    'financial assistance prayer day 3',
    'hope financial prayer',
    'day 3 financial help novena',
    'financial prayer hope',
    'financial novena hope',
    'money prayer hope'
  ],
  openGraph: {
    title: 'Financial Help Novena - Day 3: Hope',
    description: 'Pray the Financial Help Novena - Day 3 focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/financial-help/day-3',
  },
  twitter: {
    title: 'Financial Help Novena - Day 3: Hope',
    description: 'Pray the Financial Help Novena - Day 3 focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function FinancialHelpNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Financial Help Novena – Day 3: Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Financial Help Novena to seek God's assistance and guidance in financial matters.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/financial-help" className="hover:text-gray-700">Financial Help Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Financial Help Novena, we pray for hope in God's promises and His ability to bring good out of any situation.
            We ask God to fill us with hope and help us trust that He will work all things for our good.
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
                <strong>Heavenly Father,</strong> you are the source of all hope and the giver of every good gift.
                You have promised that all things work together for good for those who love you.
                We come to you today asking for an increase in our hope.
              </p>

              <p className="mb-6">
                <strong>Your plans for us are plans of hope and a future.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, increase our hope!</strong> Help us to hope completely
                in your promises and your ability to bring good out of any financial situation.
                Teach us to trust that you will work all things for our good.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your financial intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, fill us with hope!</strong>
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
                Today we pray for hope in God's promises and His ability to bring good out of any situation.
                Hope is the anchor of our soul and the foundation of our trust in God's plan for our lives.
              </p>

              <p className="mb-4">
                St. Paul tells us in Romans 8:28 that "all things work together for good for those who love God."
                This promise gives us hope that even in difficult financial situations, God is working for our good.
                Our hope in God's plan can sustain us through any financial challenge.
              </p>

              <p className="mb-4">
                The title "Financial Help" reminds us that God is our ultimate helper and provider
                in all financial matters. He is always ready to guide us, provide for us, and help us
                make wise financial decisions when we have hope in Him.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our hope in Him.
                Let us ask Him to help us trust that He will work all things for our good
                and that He has a plan for our financial well-being.
              </p>

              <p>
                Remember that hope is not wishful thinking, but confident expectation based on God's promises.
                Our hope should be grounded in God's character and His faithfulness to His word.
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
                Trust completely in God's ability to provide for your needs.
                Turn to Him with confidence in every financial situation.
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
                Present your specific financial needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His provision and financial blessings.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Heavenly Father, increase our hope in you. Help us to hope completely in your promises
            and your ability to bring good out of any financial situation. May we always trust that you will work
            all things for our good according to your perfect plan. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Financial Help Novena - Day 3: Hope"
          text="Join me in praying the Financial Help Novena - Day 3 focusing on Hope."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/financial-help/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Faith
          </Link>
          
          <Link 
            href="/novenas/financial-help/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Generosity →
          </Link>
        </div>
      </div>
    </div>
  )
} 