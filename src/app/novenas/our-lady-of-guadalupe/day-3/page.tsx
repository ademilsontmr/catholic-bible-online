import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Guadalupe Novena - Day 3: Love',
  description: 'Pray the Our Lady of Guadalupe Novena - Day 3 focusing on Love. Join in praying the traditional novena to seek Mary\'s miraculous intercession.',
  keywords: [
    'our lady of guadalupe novena day 3',
    'guadalupe novena day 3',
    'mary guadalupe novena day 3',
    'our lady guadalupe novena day 3',
    'guadalupe prayer love',
    'day 3 guadalupe novena',
    'love mary prayer',
    'guadalupe novena love',
    'mary guadalupe novena love'
  ],
  openGraph: {
    title: 'Our Lady of Guadalupe Novena - Day 3: Love',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-guadalupe/day-3',
  },
  twitter: {
    title: 'Our Lady of Guadalupe Novena - Day 3: Love',
    description: 'Pray the Our Lady of Guadalupe Novena - Day 3 focusing on Love. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfGuadalupeNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Guadalupe Novena – Day 3: Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Guadalupe Novena to seek Mary's miraculous intercession and protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-guadalupe" className="hover:text-gray-700">Our Lady of Guadalupe Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of Guadalupe Novena, we pray for love for Mary and to imitate her love
            for Jesus and for all humanity. We ask Mary to help us grow in love for her and through her, for Jesus.
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
                <strong>O Mother of Guadalupe,</strong> you are the most loving and caring mother. Your love for us
                is endless and your care for all the Americas shows your great love for humanity.
                Help us to love you more and to imitate your love for Jesus.
              </p>

              <p className="mb-6">
                <strong>Your miraculous apparition was an act of pure love for all your children.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Mother of Guadalupe, increase our love for you!</strong> Help us to love you more deeply
                and to imitate your love for Jesus and for all humanity. Teach us to show our love
                through devotion and prayer.
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
                Today we pray for love for Mary and to imitate her love for Jesus and for all humanity.
                Love is the greatest virtue and the foundation of our relationship with God and with others.
              </p>

              <p className="mb-4">
                Mary's apparition at Guadalupe was an act of pure love for all her children in the Americas.
                She appeared to St. Juan Diego not just for him, but for all the indigenous people and for
                all future generations who would turn to her in need.
              </p>

              <p className="mb-4">
                Mary's love for us is endless and unconditional. She loves us as her own children and is always
                ready to help us, to comfort us, and to bring our prayers to Jesus.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask Mary to increase our love for her.
                Let us ask her to help us love her more deeply and to imitate her love
                for Jesus and for all humanity.
              </p>

              <p>
                Remember that love is not just a feeling but a choice and an action.
                Let us show our love for Mary through our devotion, our prayers, and our imitation of her virtues.
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
                Trust completely in Mary's maternal care and her ability to work miracles for you.
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
            O Mother of Guadalupe, increase our love for you. Help us to love you more deeply and to imitate
            your love for Jesus and for all humanity. May we always show our love through devotion and prayer.
            Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Guadalupe Novena - Day 3: Love"
          text="Join me in praying the Our Lady of Guadalupe Novena - Day 3 focusing on Love."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Hope
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-guadalupe/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Humility →
          </Link>
        </div>
      </div>
    </div>
  )
} 