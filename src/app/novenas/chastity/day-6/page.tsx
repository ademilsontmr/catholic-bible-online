import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 6: Friendship with God',
  description: 'Pray the Novena for Chastity - Day 6 focusing on Friendship with God. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 6',
    'chastity novena day 6',
    'chastity prayer day 6',
    'novena for chastity prayer friendship with god',
    'day 6 chastity novena',
    'friendship with god chastity prayer',
    'chastity novena friendship with god',
    'chastity prayer friendship with god'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 6: Friendship with God',
    description: 'Pray the Novena for Chastity - Day 6 focusing on Friendship with God. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-6',
  },
  twitter: {
    title: 'Novena for Chastity - Day 6: Friendship with God',
    description: 'Pray the Novena for Chastity - Day 6 focusing on Friendship with God. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 6: Friendship with God
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Friendship with God</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow in deeper friendship with God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">You call us to do all things out of love for You. It is not always easy to follow Your laws faithfully. But as we grow in our friendship with You, even the most difficult demands of chastity can become easier for us.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us to grow to a deeper friendship with You.</p>
              <p className="mb-6">Help us to always make our relationship with You our top priority in life. Give us the grace to serve You faithfully in every circumstance we face.</p>
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
              <p className="mb-4">Today we pray to grow in deeper friendship with God. As we develop a closer relationship with Him, even the most difficult demands of chastity can become easier for us.</p>
              <p className="mb-4">When we have a deep friendship with God, we want to please Him and to live in accordance with His will. Our motivation for practicing chastity becomes not fear of punishment, but love for our friend and desire to please Him.</p>
              <p className="mb-4">Friendship with God is built through prayer, reading Scripture, receiving the sacraments, and spending time in His presence. As we grow in this friendship, we come to know Him better and to love Him more deeply.</p>
              <p className="mb-4">The more we know and love God, the more we want to follow His laws and to live in accordance with His plan for our lives. Chastity becomes not a burden, but a natural expression of our love for Him.</p>
              <p className="mb-4">Let us ask God today to help us grow in deeper friendship with Him. Let us ask Him to help us know Him better and to love Him more deeply, so that our practice of chastity becomes a natural expression of our friendship with Him.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of friendship with god 
            and to continue striving for chastity in all areas of our lives. Give us the grace to trust in Your help 
            and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chastity - Day 6: Friendship with God" 
            url="/novenas/chastity/day-6"
            excerpt="Join me in praying the Novena for Chastity - Day 6 focusing on Friendship with God." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Charity
          </Link>
          
          
          <Link 
            href="/novenas/chastity/day-7"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 7: Love for God's Laws →
          </Link>
          
        </div>
      </div>
    </div>
  )
}