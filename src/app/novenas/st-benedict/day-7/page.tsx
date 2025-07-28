import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Benedict - Day 7: Compassion and Mercy',
  description: 'Pray the Novena to St. Benedict - Day 7 focusing on Compassion and Mercy. Join in praying the traditional novena to seek St. Benedict\'s intercession.',
  keywords: [
    'novena to st benedict day 7',
    'st benedict novena day 7',
    'benedict novena day 7',
    'st benedict prayer day 7',
    'day 7 st benedict novena',
    'compassion and mercy prayer',
    'st benedict novena compassion and mercy',
    'benedict novena compassion and mercy'
  ],
  openGraph: {
    title: 'Novena to St. Benedict - Day 7: Compassion and Mercy',
    description: 'Pray the Novena to St. Benedict - Day 7 focusing on Compassion and Mercy. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-benedict/day-7',
  },
  twitter: {
    title: 'Novena to St. Benedict - Day 7: Compassion and Mercy',
    description: 'Pray the Novena to St. Benedict - Day 7 focusing on Compassion and Mercy. Join in praying the traditional novena.',
  }
}

export default function StBenedictNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Benedict – Day 7: Compassion and Mercy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Benedict to seek his intercession and powerful protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-benedict" className="hover:text-gray-700">Novena to St. Benedict</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Compassion and Mercy</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day, we focus on St. Benedict\'s compassion and mercy. His heart was always open to those who were suffering or in need.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Glorious Saint Benedict,</strong> sublime model of virtue, pure vessel of God's grace! 
                Behold me humbly kneeling at your feet. I implore you in your loving kindness to pray for me 
                before the throne of God.
              </p>

              <p className="mb-6">
                <strong>To you I have recourse in the dangers that daily surround me.</strong> Shield me against my selfishness 
                and my indifference to God and to my neighbor. Inspire me to imitate you in all things.
              </p>

              <p className="mb-6">
                <strong>May your blessing be with me always,</strong> so that I may see and serve Christ in others and work for His kingdom.
              </p>

              <p className="mb-6">
                <strong>Graciously obtain for me from God</strong> those favors and graces which I need so much in the trials, 
                miseries and afflictions of life.
              </p>

              <p className="mb-6">
                <strong>Your heart was always full of love, compassion and mercy</strong> toward those who were afflicted or troubled 
                in any way. You never dismissed without consolation and assistance anyone who had recourse to you.
              </p>

              <p className="mb-6">
                <strong>I therefore invoke your powerful intercession,</strong> confident in the hope that you will hear my prayers 
                and obtain for me the special grace and favor I earnestly implore.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Help me, great Saint Benedict,</strong> to live and die as a faithful child of God, to run in the sweetness 
                of His loving will, and to attain the eternal happiness of heaven.
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Benedict\'s compassion extended to all who came to him for help. He never turned anyone away and always offered comfort and assistance to those in need.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Benedict\'s life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Benedict\'s intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Benedict</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Benedict\'s powerful intercession and his ability to help you.
                Turn to him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Benedict will not fail to help those who turn to him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Benedict.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Benedict for his intercession and for the graces you receive.
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. Benedict, help me to show compassion and mercy to all who are suffering or in need. May your example of loving care for the afflicted inspire me to be a source of comfort to others. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Benedict - Day 7: Compassion and Mercy"
          text="Join me in praying the Novena to St. Benedict - Day 7 focusing on Compassion and Mercy."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link
            href="/novenas/st-benedict/day-6"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 6: Divine Favor
          </Link>
          
          
          <Link
            href="/novenas/st-benedict/day-8"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 8: Powerful Intercession →
          </Link>
          
        </div>
      </div>
    </div>
  )
}