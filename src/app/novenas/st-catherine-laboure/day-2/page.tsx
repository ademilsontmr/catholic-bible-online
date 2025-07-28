import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 2: Marian Devotion',
  description: 'Pray the St. Catherine Laboure Novena - Day 2 focusing on Marian Devotion. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 2',
    'catherine laboure novena day 2',
    'saint novena day 2',
    'miraculous medal novena day 2',
    'catherine laboure prayer marian devotion',
    'day 2 catherine laboure novena',
    'marian devotion saint prayer',
    'catherine laboure novena marian devotion',
    'saint novena marian devotion'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 2: Marian Devotion',
    description: 'Pray the St. Catherine Laboure Novena - Day 2 focusing on Marian Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-2',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 2: Marian Devotion',
    description: 'Pray the St. Catherine Laboure Novena - Day 2 focusing on Marian Devotion. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 2: Marian Devotion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Catherine Laboure Novena to seek her intercession and learn about the Miraculous Medal.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-catherine-laboure" className="hover:text-gray-700">St. Catherine Laboure Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Marian Devotion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the St. Catherine Laboure Novena, we honor Catherine's profound devotion to the Blessed Virgin Mary 
            and her love for the Immaculate Heart. We learn about the mission of the Miraculous Medal.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                Today we reflect on Catherine's profound devotion to the Blessed Virgin Mary. From childhood until her final breath, her love for Mary never wavered. Mary was her counselor, protector, and inspiration.
              </p>

              <p className="mb-6">
                This devotion prepared her for the great mission Heaven would entrust to her: to spread the Miraculous Medal throughout the world as a sign of grace and trust in Mary's maternal care.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                Lord, thank You for giving us Your Mother as our refuge and intercessor. Through St. Catherine, You remind us of the power of Marian devotion to lead souls to Jesus.
              </p>

              <p className="mb-6">
                St. Catherine, help me to love Mary as you did. Teach me to seek her guidance in every difficulty and to trust her motherly heart without fear.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may understand the beauty of devotion to the Immaculate Heart of Mary.<br/>
                Pray that I may never grow indifferent to this precious gift God has given us in His Mother.
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong><br/>
                (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>St. Catherine Laboure, pray for us!</strong>
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
                Today we honor Catherine's profound devotion to the Blessed Virgin Mary and her love for the Immaculate Heart. 
                We learn about the mission of the Miraculous Medal.
              </p>

              <p className="mb-4">
                From childhood until her final breath, Catherine's love for Mary never wavered. Mary was her counselor, protector, and inspiration. 
                This devotion prepared her for the great mission Heaven would entrust to her: to spread the Miraculous Medal throughout the world.
              </p>

              <p className="mb-4">
                The Miraculous Medal became a sign of grace and trust in Mary's maternal care. Through Catherine's devotion, 
                countless souls have been led to Jesus through Mary's intercession.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us understand the beauty of devotion to the Immaculate Heart of Mary. 
                Let us also ask her to help us never grow indifferent to this precious gift God has given us in His Mother.
              </p>

              <p>
                St. Catherine's example shows us that true devotion to Mary leads us closer to Jesus. Through her intercession, 
                may we learn to love Mary as Catherine did and trust her motherly heart without fear.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Catherine</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Catherine's intercession and her ability to help you.
                Turn to her with confidence in every need, especially for devotion to Mary.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Catherine will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Catherine.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Catherine for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            St. Catherine Laboure, help us to understand the beauty of devotion to the Immaculate Heart of Mary. 
            Teach us to love Mary as you did and to seek her guidance in every difficulty. 
            Help us never to grow indifferent to this precious gift God has given us in His Mother. 
            Through your intercession, may we trust Mary's motherly heart without fear. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Catherine Laboure Novena - Day 2: Hope"
          text="Join me in praying the St. Catherine Laboure Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Early Life
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Religious Life →
          </Link>
        </div>
      </div>
    </div>
  )
} 