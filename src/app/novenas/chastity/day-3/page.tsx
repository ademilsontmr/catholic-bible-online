import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 3: Patience',
  description: 'Pray the Novena for Chastity - Day 3 focusing on Patience. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 3',
    'chastity novena day 3',
    'chastity prayer day 3',
    'novena for chastity prayer patience',
    'day 3 chastity novena',
    'patience chastity prayer',
    'chastity novena patience',
    'chastity prayer patience'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 3: Patience',
    description: 'Pray the Novena for Chastity - Day 3 focusing on Patience. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-3',
  },
  twitter: {
    title: 'Novena for Chastity - Day 3: Patience',
    description: 'Pray the Novena for Chastity - Day 3 focusing on Patience. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 3: Patience
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Patience</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for patience in growing in the virtue of chastity.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">You know each of our imperfections better than we do ourselves. You know the many difficulties we face as we try to grow in virtue. The practice of chastity can be very difficult, and we often require a lot of patience in order to truly grow in this virtue.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us practice the patience we need to grow in chastity.</p>
              <p className="mb-6">Help us to always rely on You for all that we need in our lives. Give us the grace to make growth in holiness our top priority in life.</p>
              <p className="mb-6"><strong>And we especially ask in this novena for (mention your intentions here).</strong></p>
              <p className="mb-6"><strong>Lord, hear our prayers!</strong></p>
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray for patience in growing in the virtue of chastity. Patience is the virtue that helps us to endure difficulties and to wait for God's timing in our spiritual growth.</p>
              <p className="mb-4">Growing in chastity is not something that happens overnight. It requires time, effort, and patience. We may experience setbacks and failures along the way, but we must not become discouraged.</p>
              <p className="mb-4">God knows each of our imperfections better than we do ourselves. He understands the difficulties we face and the challenges we encounter as we try to grow in virtue. He wants to help us develop the patience we need to truly grow in chastity.</p>
              <p className="mb-4">Patience is not about passive waiting, but about active trust in God's plan for our lives. It's about continuing to strive for virtue even when progress seems slow or when we experience setbacks.</p>
              <p className="mb-4">Let us ask God today to give us the grace of patience. Let us ask Him to help us trust in His timing and to continue striving for chastity even when it is difficult, knowing that He is working in us and through us.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of patience 
            and to continue striving for chastity in all areas of our lives. Give us the grace to trust in Your help 
            and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chastity - Day 3: Patience" 
            url="/novenas/chastity/day-3"
            excerpt="Join me in praying the Novena for Chastity - Day 3 focusing on Patience." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Temperance
          </Link>
          
          
          <Link 
            href="/novenas/chastity/day-4"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 4: Perseverance →
          </Link>
          
        </div>
      </div>
    </div>
  )
}