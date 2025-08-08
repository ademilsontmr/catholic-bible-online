import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mary Queen of All Hearts Novena - Day 9: Evangelization',
  description: 'Pray the Mary Queen of All Hearts Novena - Day 9 focusing on Evangelization. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'mary queen of all hearts novena day 9',
    'queen of all hearts novena day 9',
    'mary novena day 9',
    'queen of all hearts novena day 9',
    'queen of all hearts prayer evangelization',
    'day 9 queen of all hearts novena',
    'evangelization mary prayer',
    'queen of all hearts novena evangelization',
    'mary novena evangelization'
  ],
  openGraph: {
    title: 'Mary Queen of All Hearts Novena - Day 9: Evangelization',
    description: 'Pray the Mary Queen of All Hearts Novena - Day 9 focusing on Evangelization. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/mary-queen-of-all-hearts/day-9',
  },
  twitter: {
    title: 'Mary Queen of All Hearts Novena - Day 9: Evangelization',
    description: 'Pray the Mary Queen of All Hearts Novena - Day 9 focusing on Evangelization. Join in praying the traditional novena.',
  }
}

export default function MaryQueenOfAllHeartsNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mary Queen of All Hearts Novena – Day 9: Evangelization
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Evangelization</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Mary Queen of All Hearts Novena, we pray for the propagation of all Church teachings in the world.
            We ask Mary to help us spread the Gospel and bring more souls to her Son, Jesus.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

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
                <strong>O Mary Queen of All Hearts, help us spread the Gospel!</strong> Pray for the propagation of all Church teachings in the world.
                Help us to spread the Gospel and bring more souls to your Son, Jesus.
                May we be faithful witnesses of Christ and help others come to know and love Him.
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
                Today we pray for the propagation of all Church teachings in the world.
                Evangelization is the mission of every Christian and the foundation of our relationship with God.
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
                As we conclude this novena, let us ask Mary to help us spread the Gospel.
                Let us ask her to help us be faithful witnesses of Christ and to bring more souls to her Son,
                so that all people may come to know and love Jesus.
              </p>

              <p>
                Remember that evangelization is not just about words, but about living our faith authentically.
                When we live our faith with love and joy, we become powerful witnesses of Christ to others.
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
            O Mary Queen of All Hearts, help us spread the Gospel. Help us be faithful witnesses of Christ and bring more souls to your Son,
            knowing that you will always help us and bring our prayers to your Son, Jesus.
            May we always trust in your maternal care and your queenship over all hearts. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Mary Queen of All Hearts Novena! As you continue your spiritual journey, 
            may your heart be filled with devotion, love, conversion, respect, religious life, virtues, intimacy, gratitude, and evangelization. 
            May Mary Queen of All Hearts continue to watch over you and help you in all your needs.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Mary Queen of All Hearts Novena - Day 9: Evangelization"
          text="Join me in praying the Mary Queen of All Hearts Novena - Day 9 focusing on Evangelization."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/mary-queen-of-all-hearts/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Queenship
          </Link>
          
          <Link 
            href="/novenas/mary-queen-of-all-hearts"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Mary Queen of All Hearts Novena" />
    </div>
  )
} 