import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 7: Overcoming Despair',
  description: 'Pray the Novena for Chastity - Day 7 focusing on Overcoming Despair. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 7',
    'chastity novena day 7',
    'chastity prayer day 7',
    'novena for chastity prayer overcoming despair',
    'day 7 chastity novena',
    'overcoming despair chastity prayer',
    'chastity novena overcoming despair',
    'chastity prayer overcoming despair'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 7: Overcoming Despair',
    description: 'Pray the Novena for Chastity - Day 7 focusing on Overcoming Despair. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-7',
  },
  twitter: {
    title: 'Novena for Chastity - Day 7: Overcoming Despair',
    description: 'Pray the Novena for Chastity - Day 7 focusing on Overcoming Despair. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 7: Overcoming Despair
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Overcoming Despair</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for all who despair of living chaste lives.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">Our fallen nature can make it very difficult for us to live truly chaste lives at times. You see all of our shortcomings and our temptations. You know that some of us are even tempted to despair of ever being chaste. But You can help us overcome all obstacles on the path to holiness.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help all who despair of living chaste lives.</p>
              <p className="mb-6">Help us to always rely on You in trust for all that we need. Give us the grace to surrender even our greatest difficulties to You.</p>
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
              <p className="mb-4">Today we pray for all who despair of living chaste lives. Our fallen nature can make it very difficult for us to live truly chaste lives, and some people may be tempted to give up hope.</p>
              <p className="mb-4">God sees all of our shortcomings and our temptations. He knows the struggles we face and the difficulties we encounter. But He also knows that He can help us overcome all obstacles on the path to holiness.</p>
              <p className="mb-4">Despair is one of the greatest enemies of spiritual growth. When we despair, we give up hope and stop trying. But God never gives up on us, and He wants to help us overcome all our difficulties.</p>
              <p className="mb-4">The key to overcoming despair is to trust in God's power and His desire to help us. He can give us the grace we need to overcome any obstacle and to grow in virtue.</p>
              <p className="mb-4">Let us ask God today to help all who despair of living chaste lives. Let us ask Him to give them hope and to help them trust in His power to transform their lives. Let us also ask Him to help us never to despair, but always to trust in His help.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of overcoming despair 
            and to continue striving for chastity in all areas of our lives. Give us the grace to trust in Your help 
            and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chastity - Day 7: Overcoming Despair"
          text="Join me in praying the Novena for Chastity - Day 7 focusing on Overcoming Despair."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Love for God's Laws
          </Link>
          
          
          <Link 
            href="/novenas/chastity/day-8"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 8: Friendship with God →
          </Link>
          
        </div>
      </div>
    </div>
  )
}