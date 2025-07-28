import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Day 1: World Leaders',
  description: 'Pray the Our Lady of Good Counsel Novena - Day 1 focusing on World Leaders. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of good counsel novena day 1',
    'good counsel novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'good counsel prayer world leaders',
    'day 1 good counsel novena',
    'world leaders mary prayer',
    'good counsel novena world leaders',
    'mary novena world leaders'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Day 1: World Leaders',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 1 focusing on World Leaders. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel/day-1',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Day 1: World Leaders',
    description: 'Pray the Our Lady of Good Counsel Novena - Day 1 focusing on World Leaders. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGoodCounselNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena – Day 1: World Leaders
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: World Leaders</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Good Counsel Novena, we pray for guidance for world leaders 
            and counsel for those who suffer persecution and grave injustice. We ask Mary to intercede for a world in turmoil.
          </p>
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
                <strong>Mary, our Mother,</strong> from the moment of your "yes" to the Angel Gabriel, you became the Mediatrix of grace between Heaven and Earth. You have always cared for the needs of the world and each soul throughout history. Through your intercession, countless hearts have found direction and consolation.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Good Counsel,</strong> today I come to you humbly, asking for your maternal guidance for a world in turmoil and for light in my own decisions. Be my counsel when I am uncertain and my refuge when I am afraid.
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>For guidance for world leaders, pray for us.</strong><br/>
                <strong>For counsel for those who suffer persecution and grave injustice, pray for us.</strong><br/>
                <strong>For an increase in love, trust, and devotion to your Immaculate Heart that leads us to Jesus, pray for us.</strong>
              </p>

              <p className="mb-6">
                <strong>Blessed Mary, Star of the Sea,</strong> guide us as you guided pilgrims through storms and darkness. Be our constant beacon, shining in this night of uncertainty, and lead us safely to dwell forever with your Son in His eternal kingdom.
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we pray for guidance for world leaders and counsel for those who suffer persecution and grave injustice. 
                We ask Mary to intercede for a world in turmoil.
              </p>

              <p className="mb-4">
                From the moment of her "yes" to the Angel Gabriel, Mary became the Mediatrix of grace between Heaven and Earth. 
                She has always cared for the needs of the world and each soul throughout history. Through her intercession, 
                countless hearts have found direction and consolation.
              </p>

              <p className="mb-4">
                Our Lady of Good Counsel comes to us humbly, asking for her maternal guidance for a world in turmoil 
                and for light in our own decisions. She is our counsel when we are uncertain and our refuge when we are afraid.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to guide world leaders with wisdom and to provide counsel for those 
                who suffer persecution and grave injustice. Let us also ask for an increase in love, trust, and devotion 
                to her Immaculate Heart that leads us to Jesus.
              </p>

              <p>
                Blessed Mary, Star of the Sea, guides us as she guided pilgrims through storms and darkness. 
                She is our constant beacon, shining in this night of uncertainty, and leads us safely to dwell forever 
                with her Son in His eternal kingdom.
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
            Our Lady of Good Counsel, guide world leaders with wisdom and provide counsel for those who suffer persecution 
            and grave injustice. Help us to increase our love, trust, and devotion to your Immaculate Heart that leads us to Jesus. 
            Be our constant beacon, shining in this night of uncertainty, and lead us safely to dwell forever with your Son. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Good Counsel Novena - Day 1: Faith"
          text="Join me in praying the Our Lady of Good Counsel Novena - Day 1 focusing on Faith."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-good-counsel"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-good-counsel/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Country Leaders →
          </Link>
        </div>
      </div>
    </div>
  )
} 