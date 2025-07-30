import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homeschool Novena - Day 2: Hope',
  description: 'Pray the Homeschool Novena - Day 2 focusing on Hope. Join in praying the traditional novena to seek God\'s guidance for homeschooling.',
  keywords: [
    'homeschool novena day 2',
    'homeschooling hope prayer',
    'family education hope prayer',
    'homeschool novena hope',
    'day 2 homeschool novena',
    'hope homeschooling prayer',
    'homeschool novena hope',
    'family education novena hope'
  ],
  openGraph: {
    title: 'Homeschool Novena - Day 2: Hope',
    description: 'Pray the Homeschool Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/homeschool/day-2',
  },
  twitter: {
    title: 'Homeschool Novena - Day 2: Hope',
    description: 'Pray the Homeschool Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function HomeschoolNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Homeschool Novena – Day 2: Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Homeschool Novena to seek God's guidance and grace for homeschooling families.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/homeschool" className="hover:text-gray-700">Homeschool Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Homeschool Novena, we pray for hope in God's plan
            for our family and His ability to provide wisdom for educating our children. We ask God to help us hope
            in His divine providence and His ability to guide us in our homeschooling journey.
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
                <strong>O Heavenly Father,</strong> you are the source of all hope and wisdom.
                You are always ready to provide for our homeschooling needs and to guide us in educating our children.
                We come to you today with hope in your divine plan.
              </p>

              <p className="mb-6">
                <strong>Your love for us is endless and your plan is perfect.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Heavenly Father, increase our hope in you!</strong> Help us to hope completely
                in your divine plan and your ability to provide for all our homeschooling needs. Teach us to turn to you
                with confidence in every educational challenge.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Heavenly Father, guide us in our homeschooling journey!</strong>
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
                Today we pray for hope in God's plan for our family and His ability to provide wisdom for educating our children.
                Hope is the virtue that sustains us through the challenges of homeschooling.
              </p>

              <p className="mb-4">
                God is our Father, and He has a perfect plan for our family's education.
                As our Father, He loves us with a perfect paternal love and is always ready to provide for us.
              </p>

              <p className="mb-4">
                The title "Homeschool" reminds us that education is a gift from God and that we can hope
                in His plan for this important mission. He is always available to us, always ready to provide wisdom,
                and always ready to help us make the right decisions for our children.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our hope in Him.
                Let us ask Him to help us turn to Him with confidence in every homeschooling challenge,
                knowing that He will always provide for us and guide us in this mission.
              </p>

              <p>
                Remember that God's plan is not limited by time or circumstance.
                He is perpetually ready to provide for us, and we can hope completely in His divine wisdom.
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
                Trust completely in God's guidance for your homeschooling journey.
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
                Present your specific homeschooling needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His guidance and grace in your homeschooling mission.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Heavenly Father, increase our hope in you. Help us to turn to you with confidence
            in every homeschooling challenge, knowing that you will always provide for us and guide us in this mission.
            May we always hope in your divine plan and your perfect help. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Homeschool Novena - Day 2: Hope"
          text="Join me in praying the Homeschool Novena - Day 2 focusing on Hope."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/homeschool"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/homeschool/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Love →
          </Link>
        </div>
      </div>
    </div>
  )
} 