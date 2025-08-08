import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Benedict - Day 9: Eternal Happiness',
  description: 'Pray the Novena to St. Benedict - Day 9 focusing on Eternal Happiness. Join in praying the traditional novena to seek St. Benedict\'s intercession.',
  keywords: [
    'novena to st benedict day 9',
    'st benedict novena day 9',
    'benedict novena day 9',
    'st benedict prayer day 9',
    'day 9 st benedict novena',
    'eternal happiness prayer',
    'st benedict novena eternal happiness',
    'benedict novena eternal happiness'
  ],
  openGraph: {
    title: 'Novena to St. Benedict - Day 9: Eternal Happiness',
    description: 'Pray the Novena to St. Benedict - Day 9 focusing on Eternal Happiness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-benedict/day-9',
  },
  twitter: {
    title: 'Novena to St. Benedict - Day 9: Eternal Happiness',
    description: 'Pray the Novena to St. Benedict - Day 9 focusing on Eternal Happiness. Join in praying the traditional novena.',
  }
}

export default function StBenedictNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Benedict – Day 9: Eternal Happiness
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Happiness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on eternal happiness. St. Benedict\'s ultimate goal was to help souls reach heaven and enjoy eternal life with God.
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
              St. Benedict\'s life was a journey toward heaven. His Rule and his example continue to guide countless souls on their own journey to eternal happiness with God.
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
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of St. Benedict. 
            May you always remember his powerful protection and his guidance in all your needs. 
            May you continue to grow in holiness and virtue through his intercession.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena to St. Benedict! As you continue your spiritual journey, 
            may your heart be filled with faith, trust, protection, guidance, charity, virtue, service, divine favor, compassion, and eternal happiness. 
            May St. Benedict continue to watch over you and protect you with his powerful intercession.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Benedict - Day 9: Eternal Happiness"
          text="Join me in praying the Novena to St. Benedict - Day 9 focusing on Eternal Happiness."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-benedict/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Protection
          </Link>
          
          <Link 
            href="/novenas/st-benedict"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to St. Benedict" />
    </div>
  )
}