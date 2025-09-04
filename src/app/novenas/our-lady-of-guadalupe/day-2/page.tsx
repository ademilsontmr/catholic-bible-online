import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Guadalupe Novena - Day 2: Hope',
  description: 'Pray the Our Lady of Guadalupe Novena - Day 2 focusing on Hope. Join in praying the traditional novena to seek Mary\'s miraculous intercession.',
  keywords: [
    'our lady of guadalupe novena day 2',
    'guadalupe novena day 2',
    'mary guadalupe novena day 2',
    'our lady guadalupe novena day 2',
    'guadalupe prayer hope',
    'day 2 guadalupe novena',
    'hope mary prayer',
    'guadalupe novena hope',
    'mary guadalupe novena hope'
  ],
  openGraph: {
    title: 'Our Lady of Guadalupe Novena - Day 2: Hope',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/day-2',
  },
  twitter: {
    title: 'Our Lady of Guadalupe Novena - Day 2: Hope',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGuadalupeNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Guadalupe Novena – Day 2: Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Guadalupe Novena to seek Mary's miraculous intercession and protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-guadalupe" className="hover:text-gray-700">Our Lady of Guadalupe Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of Guadalupe Novena, we pray for hope in Mary's maternal care
            and her ability to work miracles in our lives. We ask Mary to help us hope in her miraculous power
            and her ability to bring our prayers to Jesus.
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
                <strong>O Mother of Guadalupe,</strong> you are the source of our hope and the light in our darkness.
                You appeared to St. Juan Diego to bring hope to the Americas and to show us that miracles
                are possible through your intercession.
              </p>

              <p className="mb-6">
                <strong>Your miraculous image continues to inspire hope in millions of hearts.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Guadalupe, increase our hope in you!</strong> Help us to hope completely
                in your maternal care and your ability to work miracles in our lives. Teach us to turn to you
                with confidence in every difficulty.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Guadalupe, pray for us!</strong>
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
                Today we pray for hope in Mary's maternal care and her ability to work miracles in our lives.
                Hope is the virtue that sustains us in difficult times and helps us to trust in God's promises.
              </p>

              <p className="mb-4">
                Mary appeared to St. Juan Diego at a time when the indigenous people of Mexico were in great need
                of hope and consolation. Her miraculous apparition brought hope to millions and continues to inspire
                faith and devotion today.
              </p>

              <p className="mb-4">
                The miraculous image of Our Lady of Guadalupe is a sign of hope for all the Americas.
                It reminds us that Mary is always ready to help us and to work miracles in our lives.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask Mary to increase our hope in her.
                Let us ask her to help us trust in her miraculous power and to hope
                in her ability to help us in all our needs.
              </p>

              <p>
                Remember that Mary's miraculous help is available to all who turn to her with hope.
                She is the Patroness of the Americas and a powerful intercessor for all our needs.
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
                Trust completely in Mary's maternal care and her ability to work miracles for you.
                Turn to her with confidence in every need.
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
            O Mother of Guadalupe, increase our hope in you. Help us to hope in your miraculous power
            and to trust in your intercession with unwavering hope. May we always turn to you with confidence,
            knowing that you will work miracles in our lives. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Guadalupe Novena - Day 2: Hope" 
            url="/novenas/our-lady-of-guadalupe/day-2"
            excerpt="Join me in praying the Our Lady of Guadalupe Novena - Day 2 focusing on Hope." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Faith
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Love →
          </Link>
        </div>
      </div>
    </div>
  )
} 