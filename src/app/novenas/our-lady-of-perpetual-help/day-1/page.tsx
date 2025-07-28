import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Perpetual Help Novena - Day 1: Trust',
  description: 'Pray the Our Lady of Perpetual Help Novena - Day 1 focusing on Trust. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of perpetual help novena day 1',
    'perpetual help novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'perpetual help prayer trust',
    'day 1 perpetual help novena',
    'trust mary prayer',
    'perpetual help novena trust',
    'mary novena trust'
  ],
  openGraph: {
    title: 'Our Lady of Perpetual Help Novena - Day 1: Trust',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 1 focusing on Trust. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-perpetual-help/day-1',
  },
  twitter: {
    title: 'Our Lady of Perpetual Help Novena - Day 1: Trust',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 1 focusing on Trust. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfPerpetualHelpNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Perpetual Help Novena – Day 1: Trust
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Perpetual Help Novena to seek Mary's intercession and perpetual help.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-perpetual-help" className="hover:text-gray-700">Our Lady of Perpetual Help Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Perpetual Help Novena, we pray for trust in Mary's intercession
            and her perpetual help in all our needs. We ask Mary to help us trust in her maternal care and her ability
            to bring our prayers to Jesus.
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
                <strong>O Mother of Perpetual Help,</strong> you are the most loving and caring mother.
                You are always ready to help us in our needs and to bring our prayers to your Son, Jesus.
                We come to you today with trust in your intercession.
              </p>

              <p className="mb-6">
                <strong>Your love for us is endless and your help is perpetual.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Perpetual Help, increase our trust in you!</strong> Help us to trust completely
                in your maternal care and your ability to help us in all our needs. Teach us to turn to you
                with confidence in every difficulty.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Perpetual Help, pray for us!</strong>
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
                Today we pray for trust in Mary's intercession and her perpetual help.
                Trust is the foundation of our relationship with Mary and with God.
              </p>

              <p className="mb-4">
                Mary is our mother, given to us by Jesus from the cross when He said to John, "Behold your mother" (John 19:27).
                As our mother, she loves us with a perfect maternal love and is always ready to help us.
              </p>

              <p className="mb-4">
                The title "Perpetual Help" reminds us that Mary's help is constant and never-ending.
                She is always available to us, always ready to intercede for us, and always ready to bring our prayers to Jesus.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask Mary to increase our trust in her.
                Let us ask her to help us turn to her with confidence in every need,
                knowing that she will always help us and bring our prayers to her Son.
              </p>

              <p>
                Remember that Mary's help is not limited by time or circumstance.
                She is perpetually ready to help us, and we can trust completely in her maternal care.
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
                Trust completely in Mary's maternal care and her ability to help you.
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
            O Mother of Perpetual Help, increase our trust in you. Help us to turn to you with confidence
            in every need, knowing that you will always help us and bring our prayers to your Son, Jesus.
            May we always trust in your maternal care and your perpetual help. Amen.
          </p>
        </section>

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Perpetual Help Novena - Day 1: Trust"
          text="Join me in praying the Our Lady of Perpetual Help Novena - Day 1 focusing on Trust."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-perpetual-help"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-perpetual-help/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 