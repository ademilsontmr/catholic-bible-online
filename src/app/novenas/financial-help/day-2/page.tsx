import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Help Novena - Day 2: Faith',
  description: 'Pray the Financial Help Novena - Day 2 focusing on Faith. Join in praying the traditional novena to seek God\'s financial assistance.',
  keywords: [
    'financial help novena day 2',
    'financial novena day 2',
    'money prayer novena day 2',
    'financial assistance prayer day 2',
    'faith financial prayer',
    'day 2 financial help novena',
    'financial prayer faith',
    'financial novena faith',
    'money prayer faith'
  ],
  openGraph: {
    title: 'Financial Help Novena - Day 2: Faith',
    description: 'Pray the Financial Help Novena - Day 2 focusing on Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/financial-help/day-2',
  },
  twitter: {
    title: 'Financial Help Novena - Day 2: Faith',
    description: 'Pray the Financial Help Novena - Day 2 focusing on Faith. Join in praying the traditional novena.',
  }
}

export default function FinancialHelpNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Financial Help Novena – Day 2: Faith
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Financial Help Novena, we pray for faith in God's promises and His ability to help us in all our needs.
            We ask God to strengthen our faith and help us believe in His power to provide and guide us in financial matters.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father,</strong> you are the source of all faith and the giver of all good gifts.
                You have promised that if we have faith the size of a mustard seed, we can move mountains.
                We come to you today asking for an increase in our faith.
              </p>

              <p className="mb-6">
                <strong>Your promises are true and your word never fails.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, increase our faith!</strong> Help us to believe completely
                in your promises and your ability to help us in all our financial needs.
                Teach us to have faith that moves mountains and trusts in your divine plan.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your financial intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, strengthen our faith!</strong>
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
                Today we pray for faith in God's promises and His ability to help us in all our needs.
                Faith is the foundation of our relationship with God and our approach to all challenges, including financial ones.
              </p>

              <p className="mb-4">
                Jesus tells us in Matthew 17:20 that if we have faith the size of a mustard seed, we can move mountains.
                This reminds us that even a small amount of faith in God can accomplish great things.
                Our faith in God's ability to help us in financial matters can move the mountains of debt, lack, and financial worry.
              </p>

              <p className="mb-4">
                The title "Financial Help" reminds us that God is our ultimate helper and provider
                in all financial matters. He is always ready to guide us, provide for us, and help us
                make wise financial decisions when we have faith in Him.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our faith in Him.
                Let us ask Him to help us believe in His promises and His ability to help us
                in every financial situation, no matter how difficult it may seem.
              </p>

              <p>
                Remember that faith is not just believing that God can help us, but trusting that He will help us
                according to His perfect timing and plan. Our faith should be active and expectant.
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
            Heavenly Father, increase our faith in you. Help us to believe completely in your promises
            and your ability to help us in all our financial needs. May we always have faith that moves mountains
            and trusts in your divine plan for our lives. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Financial Help Novena - Day 2: Faith"
          text="Join me in praying the Financial Help Novena - Day 2 focusing on Faith."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/financial-help/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Trust
          </Link>
          
          <Link 
            href="/novenas/financial-help/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 