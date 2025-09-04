import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 2: Country Leaders',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 2 focusing on Country Leaders. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 2',
    'good counsel novena day 2',
    'mary novena day 2',
    'our lady novena day 2',
    'good counsel prayer country leaders',
    'day 2 good counsel novena',
    'country leaders mary prayer',
    'good counsel novena country leaders',
    'mary novena country leaders'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 2: Country Leaders',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 2 focusing on Country Leaders. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-2',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 2: Country Leaders',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 2 focusing on Country Leaders. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 2: Country Leaders
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Good Counsel Novena to seek Mary's intercession and experience her wise counsel.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-good-counsel" className="hover:text-gray-700">Our Lady of Good Counsel Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Country Leaders</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of Good Counsel Novena, we pray for guidance for our country's leaders 
            and counsel for those exiled from their homelands. We ask Mary to bring peace and hope to all nations.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, our Mother,</strong> you have always been attentive to the world's needs and to every soul entrusted to you. From your visit to Elizabeth to your apparitions through the centuries, your loving presence brings peace and hope.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> you who comforted and guided those in distress, visit us again with your wisdom. Inspire our hearts to choose what pleases God and strengthens His kingdom on earth.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for our country's leaders, pray for us.</strong><br/>
                <strong>For counsel for those exiled from their homelands, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary, Star of the Sea,</strong> direct our steps in the path of holiness. Be the light that disperses fear, and bring us closer to Christ, our Savior.
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
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
                Today we pray for guidance for our country's leaders and counsel for those exiled from their homelands. 
                We ask Mary to bring peace and hope to all nations.
              </p>

              <p className="mb-4">
                Mary has always been attentive to the world's needs and to every soul entrusted to her. From her visit to Elizabeth 
                to her apparitions through the centuries, her loving presence brings peace and hope to all who turn to her.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel, who comforted and guided those in distress, visits us again with her wisdom. 
                She inspires our hearts to choose what pleases God and strengthens His kingdom on earth.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide our country's leaders with wisdom and to provide counsel 
                for those exiled from their homelands. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary, Star of the Sea, directs our steps in the path of holiness. She is the light that disperses fear, 
                and brings us closer to Christ, our Savior. Through her intercession, may all nations find peace and hope.
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
                Trust completely in Mary's maternal care and her ability to guide you.
                Turn to her with confidence in every need, especially when seeking counsel.
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
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Lady of Good Counsel, guide our country's leaders with wisdom and provide counsel for those exiled from their homelands. 
            Help us to increase our love, trust, and devotion to your Immaculate Heart. Direct our steps in the path of holiness 
            and be the light that disperses fear, bringing us closer to Christ, our Savior. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Good Counsel Novena - Day 2: Hope" 
            url="/novenas/our-lady-of-good-counsel/day-2"
            excerpt="Join me in praying the Our Lady of Good Counsel Novena - Day 2 focusing on Hope." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: World Leaders
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: City Leaders →
          </Link>
        </div>
      </div>
    </div>
  )
} 