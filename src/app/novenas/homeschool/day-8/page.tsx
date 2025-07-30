import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homeschool Novena - Day 8: Wisdom',
  description: 'Pray the Homeschool Novena - Day 8 focusing on Wisdom. Join in praying the traditional novena to seek God\'s guidance for homeschooling.',
  keywords: [
    'homeschool novena day 8',
    'homeschooling wisdom prayer',
    'family education wisdom prayer',
    'homeschool novena wisdom',
    'day 8 homeschool novena',
    'wisdom homeschooling prayer',
    'homeschool novena wisdom',
    'family education novena wisdom'
  ],
  openGraph: {
    title: 'Homeschool Novena - Day 8: Wisdom',
    description: 'Pray the Homeschool Novena - Day 8 focusing on Wisdom. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/homeschool/day-8',
  },
  twitter: {
    title: 'Homeschool Novena - Day 8: Wisdom',
    description: 'Pray the Homeschool Novena - Day 8 focusing on Wisdom. Join in praying the traditional novena.',
  }
}

export default function HomeschoolNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Homeschool Novena – Day 8: Wisdom
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Wisdom</h2>
          <p className="text-gray-700 leading-relaxed">
            On this 8th day of the Homeschool Novena, we pray for wisdom
            in our homeschooling journey. We ask God to help us grow in wisdom
            and to guide us in this virtue as we educate our children.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Heavenly Father,</strong> you are the source of all wisdom and virtue.
                You are always ready to help us grow in wisdom and to guide us in this virtue.
                We come to you today seeking to grow in wisdom.
              </p>

              <p className="mb-6">
                <strong>Your love for us is endless and your guidance is perfect.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Heavenly Father, increase our wisdom!</strong> Help us to grow in wisdom
                and to show this virtue in our homeschooling approach. Teach us to practice wisdom
                in all our interactions with our children.
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
                Today we pray for wisdom in our homeschooling journey.
                Wisdom is a virtue that helps us grow closer to God and serve our families better.
              </p>

              <p className="mb-4">
                God is our Father, and He shows us how to practice wisdom in our daily lives.
                As our Father, He guides us in growing in this virtue and using it to serve our families.
              </p>

              <p className="mb-4">
                The title "Homeschool" reminds us that education is a gift from God and that we can practice wisdom
                through our teaching. He is always available to us, always ready to help us grow in virtue,
                and always ready to guide us in showing wisdom through our homeschooling.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our wisdom.
                Let us ask Him to help us practice this virtue in our homeschooling journey,
                knowing that He will always guide us and help us grow in holiness.
              </p>

              <p>
                Remember that God's grace is not limited by time or circumstance.
                He is perpetually ready to help us grow in virtue, and we can practice wisdom completely with His help.
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
            O Heavenly Father, increase our wisdom. Help us to practice this virtue
            in our homeschooling journey, knowing that you will always guide us and help us grow in holiness.
            May we always practice wisdom with your help and guidance. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Homeschool Novena - Day 8: Wisdom"
          text="Join me in praying the Homeschool Novena - Day 8 focusing on Wisdom."
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
            href="/novenas/homeschool/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Gratitude →
          </Link>
        </div>
      </div>
    </div>
  )
}