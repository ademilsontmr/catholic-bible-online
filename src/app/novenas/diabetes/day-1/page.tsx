import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Diabetes - Day 1: Trust',
  description: 'Pray the Novena for Diabetes - Day 1 focusing on Trust. Join in praying for healing and strength.',
  keywords: [
    'diabetes novena day 1',
    'diabetes prayer day 1',
    'healing diabetes day 1',
    'diabetes management prayer day 1',
    'catholic diabetes prayer day 1',
    'diabetes healing novena day 1',
    'prayer for diabetes day 1',
    'diabetes novena prayer day 1',
    'catholic novena diabetes day 1',
    'diabetes health prayer day 1'
  ],
  openGraph: {
    title: 'Novena for Diabetes - Day 1: Trust',
    description: 'Pray the Novena for Diabetes - Day 1 focusing on Trust. Join in praying for healing and strength.',
    url: 'https://catholicbibleonline.com/novenas/diabetes/day-1',
  },
  twitter: {
    title: 'Novena for Diabetes - Day 1: Trust',
    description: 'Pray the Novena for Diabetes - Day 1 focusing on Trust. Join in praying for healing and strength.',
  }
}

export default function Day1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Novena for Diabetes – Day 1: Trust</h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Diabetes to seek God's intercession and guidance in managing diabetes.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/diabetes" className="hover:text-gray-700">Novena for Diabetes</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Diabetes, we pray for trust in God\'s healing power and guidance in managing diabetes. We ask God to help us trust in His care and His ability to guide us.</p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ,</strong> you are the source of all healing and strength.
                You are always ready to help us in our needs and to guide us in managing our diabetes.
                We come to you today with trust in your healing power.
              </p>
              <p className="mb-6">
                <strong>Your love for us is endless and your healing power is constant.</strong>
              </p>
              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>
              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ, increase our faith and trust!</strong> Help us to trust completely
                in your healing power and your ability to help us in managing diabetes. Teach us to turn to you
                with confidence in every difficulty.
              </p>
              <p className="mb-6">
                <strong>We also pray for these intentions… (State your intentions here)</strong>
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>O Lord Jesus Christ, heal us and guide us in managing diabetes!</strong>
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
                Today we pray for faith and trust in managing health.
                Faith and Trust are gifts from God that help us face life's challenges.
              </p>

              <p className="mb-4">
                The Bible tells us that "I can do all things through Christ who strengthens me" (Philippians 4:13).
                This powerful verse reminds us that our strength comes from God, not from ourselves.
                When we feel weak or overwhelmed, we can turn to Him for the help we need.
              </p>

              <p className="mb-4">
                God is our creator and our healer. He knows every aspect of our health and every challenge we face.
                As our loving Father, He wants what is best for us and is always ready to help us.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to give us the faith and trust we need
                to manage our health well and to face each day with hope and confidence.
              </p>

              <p>
                Remember that God's help is available to us every day, and His love
                can help us overcome any obstacle we face in our health journey.
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
                Trust completely in God's healing power and His ability to help you.
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
            O Lord Jesus Christ, increase our faith and trust in you. Help us to turn to you with confidence
            in every need, knowing that you will always help us and guide us in managing our diabetes.
            May we always trust in your healing power and your care for us. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Diabetes - Day 1: Faith and Trust"
          text="Join me in praying the Novena for Diabetes - Day 1 focusing on Faith and Trust."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/diabetes"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/diabetes/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Strength and Courage →
          </Link>
        </div>
      </div>
    </div>
  )
}