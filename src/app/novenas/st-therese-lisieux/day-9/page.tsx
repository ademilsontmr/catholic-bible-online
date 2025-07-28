import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Thérèse of Lisieux Novena - Day 9: Eternal Love',
  description: 'Pray the St. Thérèse of Lisieux Novena - Day 9 focusing on Eternal Love. Join in praying the traditional novena to seek St. Thérèse\'s intercession.',
  keywords: [
    'st therese of lisieux novena day 9',
    'little flower novena day 9',
    'st therese novena day 9',
    'therese of lisieux prayer eternal love',
    'day 9 st therese novena',
    'eternal love st therese prayer',
    'little flower novena eternal love',
    'st therese of lisieux eternal love',
    'therese novena eternal love'
  ],
  openGraph: {
    title: 'St. Thérèse of Lisieux Novena - Day 9: Eternal Love',
    description: 'Pray the St. Thérèse of Lisieux Novena - Day 9 focusing on Eternal Love. Join in praying the traditional novena.',
    url: 'https://catholicbible-online.com/novenas/st-therese-lisieux/day-9',
  },
  twitter: {
    title: 'St. Thérèse of Lisieux Novena - Day 9: Eternal Love',
    description: 'Pray the St. Thérèse of Lisieux Novena - Day 9 focusing on Eternal Love. Join in praying the traditional novena.',
  }
}

export default function StThereseLisieuxNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thérèse of Lisieux Novena – Day 9: Eternal Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Thérèse of Lisieux Novena to seek the Little Flower's intercession and follow her "Little Way."
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-therese-lisieux" className="hover:text-gray-700">St. Thérèse of Lisieux Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Love</h2>
          <p className="text-gray-700 leading-relaxed">
            Completing our novena with gratitude and hope, we reflect on the eternal love that St. Thérèse teaches us to embrace.
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
                <strong>O glorious St. Thérèse,</strong> whom Almighty God has raised up to aid and inspire the human family, I implore your miraculous intercession. You are so powerful in obtaining every need of body and spirit from the Heart of Jesus. Holy Mother Church proclaims you a "Prodigy of Miracles... the Greatest Saint of Modern Times."
              </p>

              <p className="mb-6">
                <strong>Now I fervently beseech you to answer my petition</strong> (mention your request) and to carry out your promises of spending heaven doing good upon earth... of letting fall from heaven a shower of roses.
              </p>

              <p className="mb-6">
                <strong>Little Flower, give me your childlike faith,</strong> to see the Face of God in the people and experiences of my life, and to love God with full confidence. St. Thérèse, my Carmelite Sister, I will fulfill your plea "to be made known everywhere" and I will continue to lead others to Jesus through you.
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
                Today we complete our novena to St. Thérèse of Lisieux, reflecting on eternal love. 
                St. Thérèse teaches us that love is the foundation of everything we do and the goal of our spiritual journey.
              </p>

              <p className="mb-4">
                Eternal love is not just a future promise but a present reality that we can experience 
                through our relationship with God. St. Thérèse shows us that this love is accessible 
                to everyone through the "Little Way" of doing small things with great love.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us ask St. Thérèse to help us grow in love for God 
                and for others. Let us ask her to teach us to see every moment as an opportunity 
                to express this eternal love through our actions and prayers.
              </p>

              <p>
                Remember that St. Thérèse's promise of a "shower of roses" is a sign of God's eternal love. 
                Trust in her intercession and in God's infinite love for you.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Cultivate an attitude of gratitude. Thank St. Thérèse for her help and intercession. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in St. Thérèse's intercession. She will always be there for you 
                and will never fail to help those who turn to her.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice the Little Way</h3>
              <p className="text-gray-700 text-sm">
                Continue to practice the "Little Way" in your daily life. Look for opportunities 
                to do small things with great love.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to St. Thérèse regularly. Develop a daily devotion to her 
                and let her be your guide in following the "Little Way."
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of St. Thérèse of Lisieux. 
            May you always remember her "Little Way" and her promise to send a shower of roses. 
            May you continue to grow in love for God and for others, following her example of spiritual childhood.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the St. Thérèse of Lisieux Novena! As you continue your spiritual journey, 
            may your heart be filled with trust in God, childlike confidence, spiritual childhood, love and sacrifice, 
            hidden life, confidence in prayer, belief in the shower of roses, and eternal love. 
            May St. Thérèse continue to watch over you and help you follow her "Little Way" in all your needs.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="St. Thérèse of Lisieux Novena - Day 9: Eternal Love"
          text="Join me in praying the St. Thérèse of Lisieux Novena - Day 9 focusing on Eternal Love."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/st-therese-lisieux/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Rose Petals
          </Link>
          
          <Link 
            href="/novenas/st-therese-lisieux"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
    </div>
  )
}