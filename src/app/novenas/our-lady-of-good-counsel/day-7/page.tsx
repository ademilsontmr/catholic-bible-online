import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 7: Families',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 7 focusing on Families. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 7',
    'good counsel novena day 7',
    'mary novena day 7',
    'our lady novena day 7',
    'good counsel prayer families',
    'day 7 good counsel novena',
    'families mary prayer',
    'good counsel novena families',
    'mary novena families'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 7: Families',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 7 focusing on Families. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-7',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 7: Families',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 7 focusing on Families. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 7: Families
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Families</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Our Lady of Good Counsel Novena, we pray for guidance for our families 
            and counsel for divided households. We ask Mary to inspire us to obey God promptly and generously.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, in Lourdes,</strong> you counseled Bernadette to dig for a spring that became a source of healing for countless souls. Through your obedience to God, miracles flowed to the suffering.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> inspire us to obey God promptly and generously, even in what seems small or hidden.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for our families, pray for us.</strong><br/>
                <strong>For counsel for divided households, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary,</strong> open the springs of grace in our hearts so that healing and peace may abound.
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
                Today we pray for guidance for our families and counsel for divided households. 
                We ask Mary to inspire us to obey God promptly and generously.
              </p>

              <p className="mb-4">
                In Lourdes, Mary counseled Bernadette to dig for a spring that became a source of healing for countless souls. 
                Through her obedience to God, miracles flowed to the suffering. This shows us that even small acts of obedience 
                can lead to great blessings.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel inspires us to obey God promptly and generously, even in what seems small or hidden. 
                She shows us that family unity comes through obedience to God's will.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide our families with wisdom and to provide counsel 
                for divided households. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary opens the springs of grace in our hearts so that healing and peace may abound. 
                Through her guidance, may all families find unity and harmony through obedience to God.
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
            Our Lady of Good Counsel, guide our families with wisdom and provide counsel for divided households. 
            Inspire us to obey God promptly and generously, even in what seems small or hidden. 
            Open the springs of grace in our hearts so that healing and peace may abound. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Good Counsel Novena - Day 7: Intercession"
          text="Join me in praying the Our Lady of Good Counsel Novena - Day 7 focusing on Intercession."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Families
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Ourselves →
          </Link>
        </div>
      </div>
    </div>
  )
} 