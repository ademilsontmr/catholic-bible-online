import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 3: Love',
  description: 'Pray the Our Lady of Fatima Novena - Day 3 focusing on Love. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 3',
    'fatima novena day 3',
    'mary novena day 3',
    'our lady novena day 3',
    'fatima prayer love',
    'day 3 fatima novena',
    'love mary prayer',
    'fatima novena love',
    'mary novena love'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 3: Love',
    description: 'Pray the Our Lady of Fatima Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-3',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 3: Love',
    description: 'Pray the Our Lady of Fatima Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 3: Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Fatima Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-fatima" className="hover:text-gray-700">Our Lady of Fatima Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of Fatima Novena, we pray for love for Mary's Immaculate Heart
            and to imitate her love for Jesus. We ask Mary to help us grow in love for her and for her Son.
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
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima with your Immaculate Heart exposed, 
                showing us the depth of your love for Jesus and for all humanity. Your heart burns with love for us and for your Son.
              </p>

              <p className="mb-6">
                <strong>On this third day of our novena, we pray for the gift of love.</strong> Help us to love your Immaculate Heart 
                and to imitate your perfect love for Jesus. Teach us to love as you love, with a pure and selfless heart.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of love,</strong> for you loved Jesus with all your heart, soul, and strength. 
                You loved Him even to the foot of the cross, where you shared in His suffering. Help us to love Jesus as you loved Him, 
                and to love our neighbor as ourselves.
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
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
                Today we pray for love for Mary's Immaculate Heart and to imitate her love for Jesus.
                Love is the greatest of all virtues and the foundation of our relationship with God and with Mary.
              </p>

              <p className="mb-4">
                At Fatima, Mary showed us her Immaculate Heart, surrounded by thorns, pierced by a sword. 
                This image reminds us of the depth of Mary's love for Jesus and for us. She suffered with Jesus 
                on the cross and continues to suffer for the sins of the world.
              </p>

              <p className="mb-4">
                Mary's love is pure, selfless, and unconditional. She loves us not because we deserve it, 
                but because she is our mother and because she loves Jesus. Her love for us is a reflection 
                of her perfect love for her Son.
              </p>

              <p className="mb-4">
                The three children at Fatima responded to Mary's love with their own love. They loved her so much 
                that they were willing to suffer persecution and ridicule for her sake. They showed their love 
                by faithfully carrying out her requests for prayer and penance.
              </p>

              <p>
                As we pray today, let us ask Mary to increase our love for her and for Jesus. Let us ask her 
                to help us love as she loves, with a pure and selfless heart. Let us strive to imitate her love 
                for Jesus and for all humanity.
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
            O Most Holy Virgin Mary, Queen of the Rosary, increase our love for your Immaculate Heart and for your Son, Jesus. 
            Help us to love as you love, with a pure and selfless heart. May our love for you lead us closer 
            to Jesus and help us to love our neighbor as ourselves. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Fatima Novena - Day 3: Love" 
            url="/novenas/our-lady-of-fatima/day-3"
            excerpt="Join me in praying the Our Lady of Fatima Novena - Day 3 focusing on Love." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Hope
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Reparation →
          </Link>
        </div>
      </div>
    </div>
  )
} 