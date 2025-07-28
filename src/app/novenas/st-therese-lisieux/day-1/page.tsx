import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: `St. Thérèse of Lisieux Novena - Day 1: Trust in God`,
  description: `Pray the St. Thérèse of Lisieux Novena - Day 1 focusing on Trust in God. Join in praying the traditional novena to seek St. Thérèse's intercession.`,
  keywords: [
    'st therese of lisieux novena day 1',
    'little flower novena day 1',
    'st therese novena day 1',
    'therese of lisieux prayer trust in god',
    'day 1 st therese novena',
    'trust in god st therese prayer',
    'little flower novena trust in god',
    'st therese of lisieux trust in god',
    'therese novena trust in god'
  ],
  openGraph: {
    title: `St. Thérèse of Lisieux Novena - Day 1: Trust in God`,
    description: `Pray the St. Thérèse of Lisieux Novena - Day 1 focusing on Trust in God. Join in praying the traditional novena.`,
    url: `https://catholicbible-online.com/novenas/st-therese-lisieux/day-1`,
  },
  twitter: {
    title: `St. Thérèse of Lisieux Novena - Day 1: Trust in God`,
    description: `Pray the St. Thérèse of Lisieux Novena - Day 1 focusing on Trust in God. Join in praying the traditional novena.`,
  }
}

export default function StThereseLisieuxNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thérèse of Lisieux Novena – Day 1: Trust in God
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust in God</h2>
          <p className="text-gray-700 leading-relaxed">
            Learning to trust completely in God's love and mercy
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</p>
              <p className="mb-6">O glorious St. Thérèse, whom Almighty God has raised up to aid and inspire the human family, I implore your miraculous intercession. You are so powerful in obtaining every need of body and spirit from the Heart of Jesus. Holy Mother Church proclaims you a "Prodigy of Miracles... the Greatest Saint of Modern Times."</p>
              <p className="mb-6">Now I fervently beseech you to answer my petition (mention your request) and to carry out your promises of spending heaven doing good upon earth... of letting fall from heaven a shower of roses.</p>
              <p className="mb-6">Little Flower, give me your childlike faith, to see the Face of God in the people and experiences of my life, and to love God with full confidence. St. Thérèse, my Carmelite Sister, I will fulfill your plea "to be made known everywhere" and I will continue to lead others to Jesus through you. Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for trust in god. St. Thérèse teaches us that holiness is found not in great deeds, 
                but in the small, everyday acts of love and trust. As we pray today, let us ask for the grace to 
                embrace this spiritual approach in our own lives.
              </p>

              <p className="mb-4">
                Consider how you can apply the "Little Way" in your daily routine. Look for opportunities to 
                offer small sacrifices with love, to trust in God's mercy, and to approach Him with the 
                confidence of a child.
              </p>

              <p className="mb-4">
                Remember St. Thérèse's promise: "I will spend my heaven doing good upon earth. I will let fall 
                a shower of roses." Trust in her intercession and in God's infinite love for you.
              </p>

              <p>
                Trust in God is essential to following St. Thérèse's "Little Way." Let us ask her to help us grow 
                in this virtue and to trust completely in God's love and mercy.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Thérèse</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Thérèse's intercession and her promise to send a shower of roses.
                Turn to her with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice the Little Way</h3>
              <p className="text-gray-700 text-sm">
                Look for opportunities to do small things with great love.
                Find holiness in ordinary, everyday acts.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Childlike</h3>
              <p className="text-gray-700 text-sm">
                Approach God with the trust and simplicity of a child.
                Believe in His infinite love and mercy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Thérèse for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            St. Thérèse, Little Flower of Jesus, help me to trust in God's love as you did. 
            Teach me to find holiness in the ordinary moments of my life and to do everything with love.
            May I follow your "Little Way" and grow in spiritual childhood, always trusting in 
            God's mercy and love. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title={`St. Thérèse of Lisieux Novena - Day 1: Trust in God`}
          text={`Join me in praying the St. Thérèse of Lisieux Novena - Day 1 focusing on Trust in God.`}
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/st-therese-lisieux"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href={`/novenas/st-therese-lisieux/day-2`}
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 2 →
          </Link>
          
        </div>
      </div>
    </div>
  )
}