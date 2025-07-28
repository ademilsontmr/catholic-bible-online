import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 6: Families',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 6 focusing on Families. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 6',
    'good counsel novena day 6',
    'mary novena day 6',
    'our lady novena day 6',
    'good counsel prayer families',
    'day 6 good counsel novena',
    'families mary prayer',
    'good counsel novena families',
    'mary novena families'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 6: Families',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 6 focusing on Families. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-6',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 6: Families',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 6 focusing on Families. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 6: Families
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Families</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Our Lady of Good Counsel Novena, we pray for guidance for our extended families 
            and counsel for estranged families to be reconciled. We ask Mary to help us treasure the signs of her love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, in 1830,</strong> you gave counsel to St. Catherine Labouré and instructed her on the Miraculous Medal, promising great graces for those who wear it with faith.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> help us to treasure the signs of your love and respond with renewed devotion.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for our extended families, pray for us.</strong><br/>
                <strong>For counsel for estranged families to be reconciled, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary,</strong> grant us your maternal assistance so that we may wear the armor of faith and walk in grace.
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
                Today we pray for guidance for our extended families and counsel for estranged families to be reconciled. 
                We ask Mary to help us treasure the signs of her love.
              </p>

              <p className="mb-4">
                In 1830, Mary gave counsel to St. Catherine Labouré and instructed her on the Miraculous Medal, 
                promising great graces for those who wear it with faith. This shows us that Mary is always ready 
                to guide us and provide us with signs of her love.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel helps us to treasure the signs of her love and respond with renewed devotion. 
                She shows us that family reconciliation is possible through prayer and faith.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide our extended families with wisdom and to provide counsel 
                for estranged families to be reconciled. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary grants us her maternal assistance so that we may wear the armor of faith and walk in grace. 
                Through her guidance, may all families find unity and peace.
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
            Our Lady of Good Counsel, guide our extended families with wisdom and provide counsel for estranged families to be reconciled. 
            Help us to treasure the signs of your love and respond with renewed devotion. 
            Grant us your maternal assistance so that we may wear the armor of faith and walk in grace. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Good Counsel Novena - Day 6: Guidance"
          text="Join me in praying the Our Lady of Good Counsel Novena - Day 6 focusing on Guidance."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Friends
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Families →
          </Link>
        </div>
      </div>
    </div>
  )
} 