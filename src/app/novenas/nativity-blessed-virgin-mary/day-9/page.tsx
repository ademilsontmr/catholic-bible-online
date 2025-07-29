import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Nativity of the Blessed Virgin Mary Novena - Day 9: Devotion to Holy Family',
  description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 9 focusing on devotion to holy family. Join in praying for family holiness and stronger marriages.',
  keywords: [
    'nativity blessed virgin mary novena day 9',
    'nativity mary novena day 9',
    'day 9 nativity blessed virgin mary novena',
    'devotion to holy family mary nativity'
  ],
  openGraph: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Day 9: Devotion to Holy Family',
    description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 9 focusing on Devotion to Holy Family.',
    url: 'https://catholicbibleonline.com/novenas/nativity-blessed-virgin-mary/day-9',
  },
  twitter: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Day 9: Devotion to Holy Family',
    description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 9 focusing on Devotion to Holy Family.',
  }
}

export default function NativityBlessedVirginMaryNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Nativity of the Blessed Virgin Mary Novena – Day 9: Devotion to Holy Family
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for increased devotion to the Holy Family.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/nativity-blessed-virgin-mary" className="hover:text-gray-700">Nativity of the Blessed Virgin Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Devotion to Holy Family</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for increased devotion to the Holy Family.
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

              <p className="mb-4">
                Jesus, I trust in You. Please grant through Your mother's intercession that I may always bring Your hope into my family.
              </p>

              <p className="mb-4">
                Jesus, I trust in You. Please grant through Your mother's intercession that I may always bring Your love into my family.
              </p>

              <p className="mb-4">
                Jesus, I trust in You. Please grant through Your mother's intercession that I may always bring Your mercy into my family.
              </p>

              <p className="mb-6">
                Our Lady, on this feast of your birth, please pray for stronger and holier marriages. Amen.
              </p>

              <p className="mb-6">
                Mother Mary, you pray for me as your child. Thank you for welcoming me into the Holy Family. Pray for me today that the feast of your birth may give great joy to my soul that I may increase my devotion to the Holy Family.
              </p>

              <p className="mb-6">
                <strong>Dearest Mother, please pray for me and for these my intentions…</strong>
              </p>

              <p className="mb-6">
                <strong>(State your intentions)</strong>
              </p>

              <p className="mb-6">
                <strong>Hail Mary, full of Grace, the Lord is with thee. Blessed art thou among women and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners now and at the hour of our death. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we focus on devotion to holy family. This aspect of honoring the Nativity of the Blessed Virgin Mary helps us to grow in family holiness 
                and to become more like Christ in our daily lives as we seek to bring hope, love, and mercy into our families.
              </p>
              <p className="mb-4">
                As we continue our Nativity of the Blessed Virgin Mary Novena, let us remember that Mary's birth was a moment of great joy for the angels 
                and the world, as it signaled the coming of Jesus Christ, our Savior.
              </p>
              <p>
                Let us ask Mary to help us be instruments of her love and grace in our families, imitating her perfect example of holiness and devotion to God.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Jesus and Mary's powerful intercession for your family.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to the Holy Family and honor Mary's birth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Charitable</h3>
              <p className="text-gray-700 text-sm">
                Show greater charity to your parents and grandparents.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be exceedingly patient with your family and loved ones.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with family holiness and help you bring hope, love, and mercy into your family. May you always remember 
            Mary's birth and find strength in her powerful intercession throughout your spiritual journey.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Nativity of the Blessed Virgin Mary Novena! As you continue to honor Mary's birth and grow in family holiness, 
            may your heart be filled with grace and divine guidance. May God continue to 
            bless you and provide all the strength you need to bring hope, love, and mercy into your family.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Nativity of the Blessed Virgin Mary Novena - Day 9: Devotion to Holy Family"
          text="Join me in praying the Nativity of the Blessed Virgin Mary Novena - Day 9 focusing on devotion to holy family."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/nativity-blessed-virgin-mary/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Joy to the World
          </Link>
          
          
          
          <Link 
            href="/novenas/nativity-blessed-virgin-mary"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Nativity of the Blessed Virgin Mary Novena" />
      
    </div>
  )
}