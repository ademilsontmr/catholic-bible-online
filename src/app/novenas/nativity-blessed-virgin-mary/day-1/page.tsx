import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Nativity of the Blessed Virgin Mary Novena - Day 1: Family Holiness',
  description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 1 focusing on family holiness. Join in praying for family holiness and stronger marriages.',
  keywords: [
    'nativity blessed virgin mary novena day 1',
    'nativity mary novena day 1',
    'day 1 nativity blessed virgin mary novena',
    'family holiness mary nativity'
  ],
  openGraph: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Day 1: Family Holiness',
    description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 1 focusing on Family Holiness.',
    url: 'https://catholicbibleonline.com/novenas/nativity-blessed-virgin-mary/day-1',
  },
  twitter: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Day 1: Family Holiness',
    description: 'Pray the Nativity of the Blessed Virgin Mary Novena - Day 1 focusing on Family Holiness.',
  }
}

export default function NativityBlessedVirginMaryNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Nativity of the Blessed Virgin Mary Novena – Day 1: Family Holiness
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Nativity of the Blessed Virgin Mary Novena to honor Mary's birth and grow in family holiness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/nativity-blessed-virgin-mary" className="hover:text-gray-700">Nativity of the Blessed Virgin Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Holiness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Nativity of the Blessed Virgin Mary Novena, we pray for hope, love, and mercy in our families.
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
                Most lovable Mother Mary, our Father in Heaven created you with delight. You are His creature whom He made worthy to become the holy Mother of His Son. You were born into a family of Saints. Pray for me today that my joy in your Son will increase and that my family may become more holy.
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
                Today we focus on family holiness. This aspect of honoring the Nativity of the Blessed Virgin Mary helps us to grow in family holiness 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary, most holy daughter of Saints Joachim and Anne, we thank You for this day of prayer and reflection. Help us to carry 
            Your grace and love into our families and to trust completely in Your powerful intercession. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Nativity of the Blessed Virgin Mary Novena - Day 1: Family Holiness" 
            url="/novenas/nativity-blessed-virgin-mary/day-1"
            excerpt="Join me in praying the Nativity of the Blessed Virgin Mary Novena - Day 1 focusing on family holiness." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/nativity-blessed-virgin-mary"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/nativity-blessed-virgin-mary/day-2"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 2: Daughter of Adam →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}