import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 1: Faith',
  description: 'Pray Day 1 of the Novena to Our Lady of Lourdes focusing on Faith. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 1',
    'lourdes novena day 1',
    'our lady of lourdes day 1',
    'faith lourdes novena',
    'mary novena day 1',
    'lourdes prayer faith',
    'day 1 lourdes novena',
    'faith mary prayer',
    'lourdes novena faith',
    'mary novena faith'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 1: Faith',
    description: 'Pray Day 1 of the Novena to Our Lady of Lourdes focusing on Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-1',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 1: Faith',
    description: 'Pray Day 1 of the Novena to Our Lady of Lourdes focusing on Faith. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 1: Faith
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena to Our Lady of Lourdes, we pray for faith - faith in Mary's apparitions at Lourdes, 
            faith in her miraculous intercession, and faith in God's healing power. We ask Mary to strengthen our faith 
            and help us trust completely in her maternal care.
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

              <p className="mb-6">
                <strong>O Immaculate Virgin Mary, Mother of God and our Mother,</strong> 
                you appeared to St. Bernadette at the grotto of Lourdes and revealed yourself as the Immaculate Conception. 
                You asked for prayer and penance for the conversion of sinners.
              </p>

              <p className="mb-6">
                <strong>On this first day of our novena, we pray for the gift of faith.</strong> 
                Help us to believe with all our hearts in your apparitions at Lourdes and in your miraculous intercession. 
                Strengthen our faith in God's power to heal and to work wonders through your prayers.
              </p>

              <p className="mb-6">
                <strong>O Mary, conceived without sin,</strong> you are the perfect example of faith. 
                You believed the angel's message and became the Mother of God. Help us to have the same faith 
                that you had, trusting completely in God's promises and His plan for our lives.
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
                Today we begin our novena to Our Lady of Lourdes by focusing on faith. Faith is the foundation 
                of our relationship with God and with Mary. Without faith, we cannot receive the graces that God 
                wants to give us through Mary's intercession.
              </p>
              
              <p className="mb-4">
                St. Bernadette's faith was simple and pure. When Mary appeared to her, she believed immediately, 
                even though she was just a poor, uneducated girl. She trusted in Mary's words and followed her 
                instructions without question, even when others doubted and mocked her.
              </p>
              
              <p className="mb-4">
                Mary's first words to St. Bernadette were: "I cannot promise you happiness in this world, only in the next." 
                These words remind us that our faith should not be based on material blessings or worldly success, 
                but on the promise of eternal life with God.
              </p>
              
              <p className="mb-4">
                As we pray today, let us ask Mary to increase our faith. Let us ask her to help us believe 
                in her apparitions at Lourdes and in her power to intercede for us. Let us trust that she 
                will bring our prayers to her Son, Jesus Christ.
              </p>
              
              <p>
                Remember that faith is a gift from God, but it is also something we must cultivate through prayer 
                and practice. The more we pray and trust in Mary, the stronger our faith will become.
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
            O Immaculate Virgin Mary, Mother of God and our Mother, increase our faith in your apparitions at Lourdes 
            and in your miraculous intercession. Help us to trust completely in your maternal care and to believe 
            that you will always help us in our needs. May our faith in you lead us closer to your Son, Jesus Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Lourdes Novena - Day 1: Faith" 
            url="/novenas/our-lady-of-lourdes/day-1"
            excerpt="Join me in praying the Our Lady of Lourdes Novena - Day 1 focusing on Faith." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/our-lady-of-lourdes"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 