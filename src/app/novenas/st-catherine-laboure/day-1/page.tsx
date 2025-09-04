import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 1: Early Life',
  description: 'Pray the St. Catherine Laboure Novena - Day 1 focusing on Early Life. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 1',
    'catherine laboure novena day 1',
    'saint novena day 1',
    'miraculous medal novena day 1',
    'catherine laboure prayer early life',
    'day 1 catherine laboure novena',
    'early life saint prayer',
    'catherine laboure novena early life',
    'saint novena early life'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 1: Early Life',
    description: 'Pray the St. Catherine Laboure Novena - Day 1 focusing on Early Life. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-1',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 1: Early Life',
    description: 'Pray the St. Catherine Laboure Novena - Day 1 focusing on Early Life. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 1: Early Life
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Early Life</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the St. Catherine Laboure Novena, we reflect on Catherine's early life and how she turned her sorrow into faith 
            by choosing Mary as her mother. We learn from her example of trust in God during difficult times.
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
                <strong>Opening Meditation</strong><br/>
                Today we begin our novena reflecting on the early life of St. Catherine Laboure, a child who endured deep sorrow yet turned her pain into faith. At the age of nine, Catherine lost her earthly mother—a moment that could have filled her heart with despair. Instead, she ran to Mary, the Mother of God, and chose her as her own mother.
              </p>

              <p className="mb-6">
                This act of trust became the foundation of her sanctity. From that day forward, Mary became her refuge, her guide, and her strength.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                Dear Lord, we thank You for the gift of St. Catherine Laboure, a model of courage and faith in the midst of suffering. Help me to imitate her example and to turn to You and Your Blessed Mother when trials arise.
              </p>

              <p className="mb-6">
                St. Catherine, you transformed grief into holiness. You sought no comfort in worldly things but in God alone. Teach me to offer my sorrows to Jesus with patience and confidence.
              </p>

              <p className="mb-6">
                Please present my petitions before God's throne. Assist me in all my needs and obtain for me the grace to love Him above all things.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray for me, that I may never allow pain or loss to lead me away from God.<br/>
                Pray that I may seek Mary's intercession daily and remain faithful to Christ.
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong><br/>
                (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>St. Catherine Laboure, pray for us!</strong>
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
                Today we reflect on Catherine's early life and how she turned her sorrow into faith by choosing Mary as her mother. 
                We learn from her example of trust in God during difficult times.
              </p>

              <p className="mb-4">
                At the age of nine, Catherine lost her earthly mother—a moment that could have filled her heart with despair. 
                Instead, she ran to Mary, the Mother of God, and chose her as her own mother. This act of trust became the foundation of her sanctity.
              </p>

              <p className="mb-4">
                From that day forward, Mary became her refuge, her guide, and her strength. Catherine transformed grief into holiness, 
                seeking no comfort in worldly things but in God alone. She teaches us to offer our sorrows to Jesus with patience and confidence.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us never allow pain or loss to lead us away from God. 
                Let us also ask her to help us seek Mary's intercession daily and remain faithful to Christ.
              </p>

              <p>
                St. Catherine's example shows us that even in our darkest moments, we can turn to Mary and find comfort, 
                guidance, and strength. Through her intercession, may we learn to trust in God's providence in all circumstances.
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
            St. Catherine Laboure, help us to never allow pain or loss to lead us away from God. Teach us to seek Mary's intercession daily 
            and remain faithful to Christ. Transform our grief into holiness and help us to offer our sorrows to Jesus with patience and confidence. 
            Present our petitions before God's throne and obtain for us the grace to love Him above all things. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Catherine Laboure Novena - Day 1: Faith" 
            url="/novenas/st-catherine-laboure/day-1"
            excerpt="Join me in praying the St. Catherine Laboure Novena - Day 1 focusing on Faith." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Marian Devotion →
          </Link>
        </div>
      </div>
    </div>
  )
} 