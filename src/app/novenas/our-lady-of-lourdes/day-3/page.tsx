import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 3: Love',
  description: 'Pray Day 3 of the Novena to Our Lady of Lourdes focusing on Love. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 3',
    'lourdes novena day 3',
    'our lady of lourdes day 3',
    'love lourdes novena',
    'mary novena day 3',
    'lourdes prayer love',
    'day 3 lourdes novena',
    'love mary prayer',
    'lourdes novena love',
    'mary novena love'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 3: Love',
    description: 'Pray Day 3 of the Novena to Our Lady of Lourdes focusing on Love. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-3',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 3: Love',
    description: 'Pray Day 3 of the Novena to Our Lady of Lourdes focusing on Love. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 3: Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to Our Lady of Lourdes to seek Mary's miraculous intercession and healing grace.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-lourdes" className="hover:text-gray-700">Our Lady of Lourdes Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Novena to Our Lady of Lourdes, we pray for love - love for God, 
            love for Mary, and love for our neighbor. We ask Mary to help us grow in charity and to 
            imitate her perfect love for Jesus and for all humanity.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Most Loving Virgin Mary, Mother of God and our Mother,</strong> 
                you appeared at Lourdes out of love for us, to bring us closer to your Son, Jesus Christ. 
                Your love for humanity moved you to work miracles and to show us the way to heaven.
              </p>

              <p className="mb-6">
                <strong>On this third day of our novena, we pray for the gift of love.</strong> 
                Help us to love God with all our hearts, souls, and minds. Teach us to love our neighbors 
                as ourselves and to show this love through acts of charity and kindness.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of love,</strong> for you loved God completely 
                and accepted His will with perfect obedience. You loved Jesus with a mother's tender love 
                and you love each of us as your own children. Help us to imitate your love and to grow 
                in charity every day.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary, conceived without sin, pray for us who have recourse to thee!</strong>
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
                Today we focus on love, the greatest of the theological virtues. Love is what motivated 
                Mary to appear at Lourdes and to work countless miracles for those who turn to her. 
                It is love that drives all of Mary's actions and intercessions.
              </p>
              
              <p className="mb-4">
                At Lourdes, Mary showed her love for humanity by appearing to St. Bernadette and asking 
                for prayer and penance for the conversion of sinners. She did not appear for her own glory, 
                but out of love for us and concern for our salvation.
              </p>
              
              <p className="mb-4">
                Mary's love is maternal and unconditional. She loves each of us as her own children, 
                regardless of our sins or weaknesses. She wants us to love God and to love one another 
                as she loves us.
              </p>
              
              <p className="mb-4">
                The miraculous spring at Lourdes is a symbol of Mary's love flowing to all who seek her help. 
                Just as water gives life to the earth, Mary's love gives life to our souls and helps us 
                to grow in holiness.
              </p>
              
              <p>
                As we pray today, let us ask Mary to increase our love for God and for our neighbor. 
                Let us ask her to help us show this love through our actions and to be instruments 
                of her love in the world. Let us strive to love as Mary loves - with patience, 
                kindness, and selflessness.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Begin with Faith</h3>
              <p className="text-gray-700 text-sm">
                Start each day with complete trust in Mary's intercession. Believe that she will help you 
                and bring your prayers to her Son, Jesus Christ.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray the novena for nine consecutive days without interruption. Consistency shows your 
                commitment and trust in Mary's help.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Intentions</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary. Be honest about your struggles 
                and trust that she understands your situation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice Penance</h3>
              <p className="text-gray-700 text-sm">
                As Mary requested at Lourdes, offer small sacrifices and penances during the novena. 
                This can include fasting, acts of charity, or giving up something you enjoy.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Most Loving Virgin Mary, Mother of God and our Mother, increase our love for God and for our neighbor. 
            Help us to imitate your perfect love and to show this love through our actions. May our love for you 
            lead us closer to your Son, Jesus Christ, and help us to become instruments of your love in the world. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 3: Healing"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 3 focusing on Healing."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Hope
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Humility →
          </Link>
        </div>
      </div>
    </div>
  )
} 