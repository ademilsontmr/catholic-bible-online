import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Perpetual Help Novena - Day 3: Love',
  description: 'Pray the Our Lady of Perpetual Help Novena - Day 3 focusing on Love. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of perpetual help novena day 3',
    'perpetual help novena day 3',
    'mary novena day 3',
    'our lady novena day 3',
    'perpetual help prayer love',
    'day 3 perpetual help novena',
    'love mary prayer',
    'perpetual help novena love',
    'mary novena love'
  ],
  openGraph: {
    title: 'Our Lady of Perpetual Help Novena - Day 3: Love',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-perpetual-help/day-3',
  },
  twitter: {
    title: 'Our Lady of Perpetual Help Novena - Day 3: Love',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfPerpetualHelpNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Perpetual Help Novena – Day 3: Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Perpetual Help Novena to seek Mary's intercession and perpetual help.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-perpetual-help" className="hover:text-gray-700">Our Lady of Perpetual Help Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of Perpetual Help Novena, we pray for love for Mary and to imitate her love for Jesus and all people. 
            We ask Mary to help us grow in love for God and for our neighbor.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Join in praying the Our Lady of Perpetual Help Novena</strong>
              </p>
              
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>O Mother of Perpetual Help,</strong> you are the most loving mother. Your love for Jesus and for all people 
                is perfect and selfless. Help us to grow in love for God and for our neighbor, following your example of perfect love.
              </p>
              
              <p className="mb-6">
                <strong>Your love for us is endless and your care is perpetual.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>O Mother of Perpetual Help, increase our love for you and for Jesus!</strong> Help us to love God above all things 
                and our neighbor as ourselves. Teach us to imitate your perfect love and to serve others with selfless love.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>O Mother of Perpetual Help, pray for us!</strong>
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
                Today we pray for love for Mary and to imitate her love for Jesus and all people. 
                Love is the greatest of the theological virtues and the foundation of all Christian life.
              </p>
              
              <p className="mb-4">
                Mary's love for Jesus was perfect and selfless. She loved Him with all her heart, soul, and strength. 
                She was willing to suffer with Him and for Him, even to the point of standing at the foot of the cross.
              </p>
              
              <p className="mb-4">
                Mary also loves all of us with a perfect maternal love. She sees us as her children and wants what is best for us. 
                Her love for us is not limited by our faults or weaknesses, but is constant and unconditional.
              </p>
              
              <p className="mb-4">
                As we continue this novena, let us ask Mary to help us grow in love for God and for our neighbor. 
                Let us ask her to teach us to love as she loves - with selflessness, patience, and compassion.
              </p>
              
              <p>
                Remember that love is not just a feeling, but a choice and an action. 
                We show our love for God by keeping His commandments and serving others. 
                We show our love for Mary by imitating her virtues and turning to her for help.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Love Mary</h3>
              <p className="text-gray-700 text-sm">
                Develop a deep love for Mary. She is your mother and loves you perfectly. 
                Return her love by praying to her and imitating her virtues.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Love Others</h3>
              <p className="text-gray-700 text-sm">
                Show your love for others through acts of kindness and service. 
                Mary's love for us should inspire us to love others.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Love God</h3>
              <p className="text-gray-700 text-sm">
                Grow in love for God through prayer, sacraments, and obedience to His will. 
                Mary's love for God was perfect and should be our model.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Selfless</h3>
              <p className="text-gray-700 text-sm">
                Practice selfless love like Mary. Put the needs of others before your own 
                and serve them with love and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Mother of Perpetual Help, increase our love for you and for Jesus. Help us to love God above all things 
            and our neighbor as ourselves. Teach us to imitate your perfect love and to serve others with selfless love. 
            May we always remember your perpetual help and your motherly care. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Perpetual Help Novena - Day 3: Love"
          text="Join me in praying the Our Lady of Perpetual Help Novena - Day 3 focusing on Love."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-perpetual-help/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Hope
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-perpetual-help/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Faith →
          </Link>
        </div>
      </div>
    </div>
  )
} 