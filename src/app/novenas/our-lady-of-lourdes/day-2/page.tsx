import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 2: Hope',
  description: 'Pray Day 2 of the Novena to Our Lady of Lourdes focusing on Hope. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 2',
    'lourdes novena day 2',
    'our lady of lourdes day 2',
    'hope lourdes novena',
    'mary novena day 2',
    'lourdes prayer hope',
    'day 2 lourdes novena',
    'hope mary prayer',
    'lourdes novena hope',
    'mary novena hope'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 2: Hope',
    description: 'Pray Day 2 of the Novena to Our Lady of Lourdes focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-2',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 2: Hope',
    description: 'Pray Day 2 of the Novena to Our Lady of Lourdes focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 2: Hope
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena to Our Lady of Lourdes, we pray for hope - hope in divine healing, 
            hope in God's mercy, and hope in Mary's powerful intercession. We ask Mary to fill our hearts with 
            hope and to help us trust in God's plan for our lives.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Blessed Virgin Mary, Mother of God and our Mother,</strong> 
                you appeared at Lourdes and brought hope to a world in need of healing. 
                You showed us that God's mercy and healing grace are always available to those who trust in you.
              </p>

              <p className="mb-6">
                <strong>On this second day of our novena, we pray for the gift of hope.</strong> 
                Help us to hope in God's power to heal our bodies and souls. Fill our hearts with confidence 
                that through your intercession, miracles are possible and God's grace can transform our lives.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are our hope,</strong> the star that guides us through the darkness of this world. 
                You remind us that this life is temporary and that our true home is in heaven. 
                Help us to hope in the promise of eternal life and to trust in God's plan for our salvation.
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
                Today we focus on hope, the second theological virtue. Hope is the confident expectation 
                of God's help and the promise of eternal life. It is what sustains us in difficult times 
                and gives us the strength to persevere in prayer.
              </p>
              
              <p className="mb-4">
                At Lourdes, Mary brought hope to countless people who were suffering from illness, 
                pain, and despair. The miraculous spring that appeared at her request continues to be 
                a symbol of God's healing power and a source of hope for millions of pilgrims.
              </p>
              
              <p className="mb-4">
                St. Bernadette's hope was tested when she faced ridicule and persecution for believing 
                in Mary's apparitions. But she never lost hope, and her faith was rewarded with the 
                miraculous spring and countless conversions.
              </p>
              
              <p className="mb-4">
                Mary's message at Lourdes reminds us that our hope should not be placed in the things 
                of this world, but in God's promises. She told St. Bernadette: "I cannot promise you 
                happiness in this world, only in the next." This teaches us to hope in eternal life 
                and to trust that God will provide for our needs in this life.
              </p>
              
              <p>
                As we pray today, let us ask Mary to increase our hope. Let us ask her to help us trust 
                in God's mercy and to believe that through her intercession, all things are possible. 
                Let us hope in the promise of healing, both physical and spiritual, that comes from 
                trusting in Mary's maternal care.
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
            O Blessed Virgin Mary, Mother of God and our Mother, increase our hope in your intercession 
            and in God's healing power. Help us to trust in your maternal care and to believe that through 
            your prayers, miracles are possible. May our hope in you lead us to eternal life with your Son, Jesus Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 2: Hope"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Faith
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Love →
          </Link>
        </div>
      </div>
    </div>
  )
} 