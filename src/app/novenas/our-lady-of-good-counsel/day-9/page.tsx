import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 9: All Who Prayed',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 9 focusing on All Who Prayed. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 9',
    'good counsel novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'good counsel prayer all who prayed',
    'day 9 good counsel novena',
    'all who prayed mary prayer',
    'good counsel novena all who prayed',
    'mary novena all who prayed'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 9: All Who Prayed',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 9 focusing on All Who Prayed. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-9',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 9: All Who Prayed',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 9 focusing on All Who Prayed. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 9: All Who Prayed
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: All Who Prayed</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Good Counsel Novena, we pray for guidance for all who prayed this novena 
            and counsel to seek Jesus daily and follow His commands. We ask Mary to help us live with confidence in God's love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Mary, in Belgium</strong> you spoke gently: "Believe in me and I will believe in you." Your words call us to unwavering faith and surrender to God's will.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> as we conclude this novena, help us to live with confidence in God's love and in your constant intercession.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for all who prayed this novena, pray for us.</strong><br/>
                <strong>For counsel to seek your Son daily and follow His commands, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary, Star of the Sea,</strong> keep our gaze fixed on Christ until we dwell with Him forever in glory.
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
                Today we pray for guidance for all who prayed this novena and counsel to seek Jesus daily and follow His commands. 
                We ask Mary to help us live with confidence in God's love.
              </p>

              <p className="mb-4">
                In Belgium, Mary spoke gently: "Believe in me and I will believe in you." Her words call us to unwavering faith 
                and surrender to God's will. This simple yet profound message reminds us of the importance of trust and faith.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel, as we conclude this novena, helps us to live with confidence in God's love 
                and in her constant intercession. She shows us that our journey doesn't end here but continues with renewed faith.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide all who prayed this novena with wisdom and to provide counsel 
                to seek Jesus daily and follow His commands. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart.
              </p>

              <p>
                Blessed Mary, Star of the Sea, keeps our gaze fixed on Christ until we dwell with Him forever in glory. 
                Through her guidance, may we continue to grow in faith and love for Jesus.
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
            Our Lady of Good Counsel, guide all who prayed this novena with wisdom and provide counsel to seek Jesus daily and follow His commands. 
            Help us to live with confidence in God's love and in your constant intercession. 
            Keep our gaze fixed on Christ until we dwell with Him forever in glory. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Good Counsel Novena! As you continue your spiritual journey, 
            may your heart be filled with guidance for world leaders, country leaders, city leaders, parish, friends, families, 
            and wisdom for yourself. May Our Lady of Good Counsel continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Good Counsel Novena - Day 9: Counsel" 
            url="/novenas/our-lady-of-good-counsel/day-9"
            excerpt="Join me in praying the Our Lady of Good Counsel Novena - Day 9 focusing on Counsel." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Wisdom
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Good Counsel Novena" />
    </div>
  )
} 