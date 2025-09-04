import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 4: Parish',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 4 focusing on Parish. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 4',
    'good counsel novena day 4',
    'mary novena day 4',
    'our lady novena day 4',
    'good counsel prayer parish',
    'day 4 good counsel novena',
    'parish mary prayer',
    'good counsel novena parish',
    'mary novena parish'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 4: Parish',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 4 focusing on Parish. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-4',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 4: Parish',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 4 focusing on Parish. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 4: Parish
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Parish</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Our Lady of Good Counsel Novena, we pray for guidance for our home parish 
            and counsel for those who have abandoned prayer. We ask Mary to teach us to trust in God's plan.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, at the Cross,</strong> your Son gave you to St. John and to all of us, saying: "Behold your mother." From that moment, you became the Mother of the Church, always ready to guide us to Jesus.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> teach us to trust in God's plan and to seek your intercession in every need.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for our home parish, pray for us.</strong><br/>
                <strong>For counsel for those who have abandoned prayer, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary, Star of the Sea,</strong> steer our souls through the challenges of life until we behold the eternal light of Christ.
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
                Today we pray for guidance for our home parish and counsel for those who have abandoned prayer. 
                We ask Mary to teach us to trust in God's plan.
              </p>

              <p className="mb-4">
                At the Cross, Jesus gave Mary to St. John and to all of us, saying: "Behold your mother." 
                From that moment, she became the Mother of the Church, always ready to guide us to Jesus. 
                She is our constant companion and guide.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel teaches us to trust in God's plan and to seek her intercession in every need. 
                She shows us that prayer is essential for our spiritual growth and that we should never abandon it.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide our home parish with wisdom and to provide counsel 
                for those who have abandoned prayer. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary, Star of the Sea, steers our souls through the challenges of life until we behold 
                the eternal light of Christ. Through her guidance, may our parishes be places of prayer and holiness.
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
            Our Lady of Good Counsel, guide our home parish with wisdom and provide counsel for those who have abandoned prayer. 
            Teach us to trust in God's plan and to seek your intercession in every need. 
            Steer our souls through the challenges of life until we behold the eternal light of Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Good Counsel Novena - Day 4: Prayer" 
            url="/novenas/our-lady-of-good-counsel/day-4"
            excerpt="Join me in praying the Our Lady of Good Counsel Novena - Day 4 focusing on Prayer." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: City Leaders
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Friends →
          </Link>
        </div>
      </div>
    </div>
  )
} 