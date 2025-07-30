import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 1: Temperance',
  description: 'Pray the Novena for Chastity - Day 1 focusing on Temperance. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 1',
    'chastity novena day 1',
    'chastity prayer day 1',
    'novena for chastity prayer temperance',
    'day 1 chastity novena',
    'temperance chastity prayer',
    'chastity novena temperance',
    'chastity prayer temperance'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 1: Temperance',
    description: 'Pray the Novena for Chastity - Day 1 focusing on Temperance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-1',
  },
  twitter: {
    title: 'Novena for Chastity - Day 1: Temperance',
    description: 'Pray the Novena for Chastity - Day 1 focusing on Temperance. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 1: Temperance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Chastity to seek God's grace and assistance to live truly chaste lives.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/chastity" className="hover:text-gray-700">Novena for Chastity</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Temperance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Chastity, we pray for growth in chastity through the practice of temperance 
            in all areas of our lives. We ask God to help us develop self-control and moderation in all things.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.
              </p>

              <p className="mb-6">
                You know the many trials and temptations we face daily. You know how difficult it can be to practice virtue. As we strive to grow in the virtue of chastity, You can help us to grow in this virtue through the practice of temperance in all areas of our lives.
              </p>

              <p className="mb-6">
                Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us grow in chastity through the practice of temperance in all things.
              </p>

              <p className="mb-6">
                Help us to grow in every virtue we need for holiness. Give us the grace to do all things out of love for You.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
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
                Today we pray for growth in chastity through the practice of temperance. Temperance is the virtue that helps us 
                to moderate our desires and to exercise self-control in all areas of our lives.
              </p>

              <p className="mb-4">
                In our modern world, we are constantly bombarded with messages that encourage excess and indulgence. 
                The practice of temperance helps us to resist these temptations and to live balanced, virtuous lives.
              </p>

              <p className="mb-4">
                Temperance is not about denying ourselves good things, but about using them in moderation and for the right purposes. 
                It helps us to develop self-control and to make wise decisions about how we use our time, energy, and resources.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to help us develop the virtue of temperance. Let us ask Him to give us 
                the grace to exercise self-control in all areas of our lives, so that we can grow in chastity and holiness.
              </p>

              <p>
                Remember that temperance is a gift from God, and He wants to help us develop this virtue. 
                With His grace, we can learn to moderate our desires and to live balanced, virtuous lives.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of temperance 
            and to develop self-control in all areas of our lives. Give us the grace to moderate our desires 
            and to live balanced, virtuous lives. May we grow in chastity and holiness through the practice of temperance. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chastity - Day 1: Temperance"
          text="Join me in praying the Novena for Chastity - Day 1 focusing on Temperance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/chastity/day-2"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 2: Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
} 