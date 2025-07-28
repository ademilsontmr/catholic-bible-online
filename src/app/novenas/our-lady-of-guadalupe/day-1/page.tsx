import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Guadalupe Novena - Day 1: Faith',
  description: 'Pray the Our Lady of Guadalupe Novena - Day 1 focusing on Faith. Join in praying the traditional novena to seek Mary\'s miraculous intercession.',
  keywords: [
    'our lady of guadalupe novena day 1',
    'guadalupe novena day 1',
    'mary guadalupe novena day 1',
    'our lady guadalupe novena day 1',
    'guadalupe prayer faith',
    'day 1 guadalupe novena',
    'faith mary prayer',
    'guadalupe novena faith',
    'mary guadalupe novena faith'
  ],
  openGraph: {
    title: 'Our Lady of Guadalupe Novena - Day 1: Faith',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 1 focusing on Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/day-1',
  },
  twitter: {
    title: 'Our Lady of Guadalupe Novena - Day 1: Faith',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 1 focusing on Faith. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGuadalupeNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Guadalupe Novena – Day 1: Faith
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Guadalupe Novena, we pray for faith in Mary's apparition at Guadalupe
            and her miraculous intercession. We ask Mary to help us believe in her miraculous power and her ability
            to work wonders in our lives.
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
                <strong>O Mother of Guadalupe,</strong> you appeared miraculously to St. Juan Diego at Tepeyac Hill
                and left your sacred image imprinted on his tilma. You are the Patroness of the Americas
                and a powerful intercessor for all who turn to you with faith.
              </p>

              <p className="mb-6">
                <strong>Your apparition brought about the conversion of millions and continues to inspire faith today.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Guadalupe, increase our faith in you!</strong> Help us to believe completely
                in your miraculous power and your ability to work wonders in our lives. Teach us to trust
                in your intercession with unwavering faith.
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
                Today we pray for faith in Mary's apparition at Guadalupe and her miraculous intercession.
                Faith is the foundation of our relationship with Mary and with God.
              </p>

              <p className="mb-4">
                Mary appeared to St. Juan Diego in 1531 at Tepeyac Hill in Mexico, leaving her image miraculously
                imprinted on his tilma. This miraculous event brought about the conversion of millions of indigenous
                people and continues to inspire faith and devotion today.
              </p>

              <p className="mb-4">
                The title "Our Lady of Guadalupe" represents Mary's special love for the Americas and her role as
                the Patroness of the Americas. Her apparition shows us that Mary is always ready to help us
                and to work miracles in our lives.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask Mary to increase our faith in her.
                Let us ask her to help us believe in her miraculous power and to trust
                in her intercession with unwavering faith.
              </p>

              <p>
                Remember that Mary's miraculous help is available to all who turn to her with faith.
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
            O Mother of Guadalupe, increase our faith in you. Help us to believe in your miraculous power
            and to trust in your intercession with unwavering faith. May we always turn to you with confidence,
            knowing that you will work miracles in our lives. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Guadalupe Novena - Day 1: Faith"
          text="Join me in praying the Our Lady of Guadalupe Novena - Day 1 focusing on Faith."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-guadalupe"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 