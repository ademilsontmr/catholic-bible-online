import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 8: Ourselves',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 8 focusing on Ourselves. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 8',
    'good counsel novena day 8',
    'mary novena day 8',
    'our lady novena day 8',
    'good counsel prayer ourselves',
    'day 8 good counsel novena',
    'ourselves mary prayer',
    'good counsel novena ourselves',
    'mary novena ourselves'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 8: Ourselves',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 8 focusing on Ourselves. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-8',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 8: Ourselves',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 8 focusing on Ourselves. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 8: Ourselves
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Ourselves</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Our Lady of Good Counsel Novena, we pray for guidance for ourselves 
            and counsel to love those who are difficult to love. We ask Mary to guard us against despair and teach us to seek God's will.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, at Fatima,</strong> you promised that your Immaculate Heart would be our refuge and the way that leads us to God. We cling to that promise with hope.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> guard us against despair and teach us to seek God's will in all things.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for ourselves, pray for us.</strong><br/>
                <strong>For counsel to love those who are difficult to love, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary,</strong> never let us stray from the path that leads to your Son. Hold us close to your Heart, our refuge and strength.
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
                Today we pray for guidance for ourselves and counsel to love those who are difficult to love. 
                We ask Mary to guard us against despair and teach us to seek God's will.
              </p>

              <p className="mb-4">
                At Fatima, Mary promised that her Immaculate Heart would be our refuge and the way that leads us to God. 
                We cling to that promise with hope, knowing that she will never abandon us in our difficulties.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel guards us against despair and teaches us to seek God's will in all things. 
                She shows us that loving those who are difficult to love is possible through God's grace.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide us with wisdom and to provide counsel 
                to love those who are difficult to love. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary never lets us stray from the path that leads to her Son. She holds us close to her Heart, 
                our refuge and strength. Through her guidance, may we grow in love for all people.
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
            Our Lady of Good Counsel, guide us with wisdom and provide counsel to love those who are difficult to love. 
            Guard us against despair and teach us to seek God's will in all things. 
            Never let us stray from the path that leads to your Son. Hold us close to your Heart, our refuge and strength. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Good Counsel Novena - Day 8: Grace" 
            url="/novenas/our-lady-of-good-counsel/day-8"
            excerpt="Join me in praying the Our Lady of Good Counsel Novena - Day 8 focusing on Grace." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Families
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: All Who Prayed →
          </Link>
        </div>
      </div>
    </div>
  )
} 