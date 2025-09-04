import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mary Queen of All Hearts Novena - Day 6: Virtues',
  description: 'Pray the Mary Queen of All Hearts Novena - Day 6 focusing on Virtues. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'mary queen of all hearts novena day 6',
    'queen of all hearts novena day 6',
    'mary novena day 6',
    'queen of all hearts novena day 6',
    'queen of all hearts prayer virtues',
    'day 6 queen of all hearts novena',
    'virtues mary prayer',
    'queen of all hearts novena virtues',
    'mary novena virtues'
  ],
  openGraph: {
    title: 'Mary Queen of All Hearts Novena - Day 6: Virtues',
    description: 'Pray the Mary Queen of All Hearts Novena - Day 6 focusing on Virtues. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/mary-queen-of-all-hearts/day-6',
  },
  twitter: {
    title: 'Mary Queen of All Hearts Novena - Day 6: Virtues',
    description: 'Pray the Mary Queen of All Hearts Novena - Day 6 focusing on Virtues. Join in praying the traditional novena.',
  }
}

export default function MaryQueenOfAllHeartsNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mary Queen of All Hearts Novena – Day 6: Virtues
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Mary Queen of All Hearts Novena to seek Mary's intercession as Queen of All Hearts.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mary-queen-of-all-hearts" className="hover:text-gray-700">Mary Queen of All Hearts Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Virtues</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Mary Queen of All Hearts Novena, we pray to imitate all of Mary's virtues in our lives.
            We ask Mary to help us grow in holiness and to practice the virtues that she so perfectly exemplified.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary Queen of All Hearts,</strong> you love each one of us with a motherly love that is beyond our comprehension.
                You care for us in a special way through your intercession, and it pleases your Divine Son greatly when we serve you with devotion.
              </p>

              <p className="mb-6">
                <strong>We ask you to bring all of our prayers before the throne of your Son.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary Queen of All Hearts, help us imitate your virtues!</strong> Pray that we may imitate all of your virtues in our lives.
                Help us to grow in holiness and to practice the virtues that you so perfectly exemplified.
                May we become more like you and more like your Son through our imitation of your virtues.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary Queen of All Hearts, pray for us!</strong>
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
                Today we pray to imitate all of Mary's virtues in our lives.
                Virtues are the foundation of our relationship with Mary and with God.
              </p>

              <p className="mb-4">
                Mary is our mother, given to us by Jesus from the cross when He said to John, "Behold your mother" (John 19:27).
                As our mother, she loves us with a perfect maternal love and is always ready to help us.
              </p>

              <p className="mb-4">
                The title "Queen of All Hearts" reminds us that Mary reigns over all hearts with her motherly love.
                She is always available to us, always ready to intercede for us, and always ready to bring our prayers to Jesus.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask Mary to help us imitate her virtues.
                Let us ask her to help us grow in holiness and to practice the virtues that she so perfectly exemplified,
                so that we may become more like her and more like her Son.
              </p>

              <p>
                Remember that Mary is the perfect model of all virtues.
                When we imitate her virtues, we become more like her and more like Jesus.
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
            O Mary Queen of All Hearts, help us imitate your virtues. Help us to grow in holiness and to practice the virtues that you so perfectly exemplified,
            knowing that you will always help us and bring our prayers to your Son, Jesus.
            May we always trust in your maternal care and your queenship over all hearts. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Mary Queen of All Hearts Novena - Day 6: Virtues" 
            url="/novenas/mary-queen-of-all-hearts/day-6"
            excerpt="Join me in praying the Mary Queen of All Hearts Novena - Day 6 focusing on Virtues." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/mary-queen-of-all-hearts/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Religious Life
          </Link>
          
          <Link 
            href="/novenas/mary-queen-of-all-hearts/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Intimacy →
          </Link>
        </div>
      </div>
    </div>
  )
} 