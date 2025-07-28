import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Our Lady of Guadalupe Novena - Day 9: Gratitude',
  description: 'Pray the Our Lady of Guadalupe Novena - Day 9 focusing on Gratitude. Complete the traditional novena with thanksgiving for Mary\'s miraculous intercession.',
  keywords: [
    'our lady of guadalupe novena day 9',
    'guadalupe novena day 9',
    'mary guadalupe novena day 9',
    'our lady guadalupe novena day 9',
    'guadalupe prayer gratitude',
    'day 9 guadalupe novena',
    'gratitude mary prayer',
    'guadalupe novena gratitude',
    'mary guadalupe novena gratitude'
  ],
  openGraph: {
    title: 'Our Lady of Guadalupe Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 9 focusing on Gratitude. Complete the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/day-9',
  },
  twitter: {
    title: 'Our Lady of Guadalupe Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 9 focusing on Gratitude. Complete the traditional novena.',
  }
}

export default function OurLadyOfGuadalupeNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Guadalupe Novena – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Complete the Our Lady of Guadalupe Novena with gratitude for Mary's miraculous intercession and protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-guadalupe" className="hover:text-gray-700">Our Lady of Guadalupe Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Guadalupe Novena, we pray with gratitude for Mary's miraculous help
            and her maternal care for us. We thank her for her intercession and for being our Patroness of the Americas.
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
                <strong>O Mother of Guadalupe,</strong> we thank you for your miraculous apparition at Tepeyac Hill
                and for your sacred image that continues to inspire faith and devotion. We are grateful for your
                intercession and your maternal care for all the Americas.
              </p>

              <p className="mb-6">
                <strong>Thank you for being our Patroness and for always being ready to help us in our needs.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Guadalupe, we thank you for your miraculous help!</strong> We are grateful for your
                intercession and for the many graces you have obtained for us. Help us to always remember your love
                and to continue to turn to you with confidence.
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
                Today we complete our novena with gratitude for Mary's miraculous help and her maternal care.
                Gratitude is the proper response to all the blessings we have received through Mary's intercession.
              </p>

              <p className="mb-4">
                Mary appeared to St. Juan Diego in 1531 and left her miraculous image on his tilma as a sign
                of her love and care for all the Americas. This miraculous event brought about the conversion
                of millions and continues to inspire faith and devotion today.
              </p>

              <p className="mb-4">
                As we complete this novena, let us thank Mary for her intercession and her miraculous help.
                Let us thank her for being our Patroness of the Americas and for always being ready to help us.
              </p>

              <p className="mb-4">
                Gratitude helps us to recognize the many blessings we receive and to appreciate the love and care
                that Mary shows us. When we are grateful, we become more aware of God's presence in our lives
                and more open to receiving His graces.
              </p>

              <p>
                Remember that gratitude is not just about saying "thank you" but about living with a grateful heart.
                Let us ask Mary to help us cultivate this virtue and to always be thankful for her miraculous help.
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
                Cultivate an attitude of gratitude. Thank Mary for her help and intercession. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in Mary's miraculous help. She will always be there for you 
                and will never fail to help those who turn to her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Gratitude</h3>
              <p className="text-gray-700 text-sm">
                Share your gratitude with others. Let them know about Mary's help 
                and encourage them to turn to her in their needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to Mary regularly. Develop a daily devotion to her 
                and let her be your miraculous help in all things.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of Our Lady of Guadalupe. 
            May you always remember her motherly care and her miraculous help in all your needs. 
            May you continue to grow in love for her and through her, for Jesus Christ.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Guadalupe Novena! As you continue your spiritual journey, 
            may your heart be filled with faith, hope, love, humility, purity, obedience, perseverance, intercession, and gratitude. 
            May Our Lady of Guadalupe continue to watch over you and work miracles in your life.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Guadalupe Novena - Day 9: Grace"
          text="Join me in praying the Our Lady of Guadalupe Novena - Day 9 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Intercession
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-guadalupe"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Guadalupe" />
    </div>
  )
} 