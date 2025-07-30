import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 4: Charity',
  description: 'Pray the Novena for Chastity - Day 4 focusing on Charity. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 4',
    'chastity novena day 4',
    'chastity prayer day 4',
    'novena for chastity prayer charity',
    'day 4 chastity novena',
    'charity chastity prayer',
    'chastity novena charity',
    'chastity prayer charity'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 4: Charity',
    description: 'Pray the Novena for Chastity - Day 4 focusing on Charity. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-4',
  },
  twitter: {
    title: 'Novena for Chastity - Day 4: Charity',
    description: 'Pray the Novena for Chastity - Day 4 focusing on Charity. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 4: Charity
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Charity</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow in charity and direct all efforts in chastity to love of God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit. <br/>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.</p>
              <p className="mb-6">You call us to do all things in our lives out of love for You. As we strive to practice chastity in our lives, we can offer all of our efforts to You. But we should also strive to grow in charity so that our efforts can originate out of love for You.</p>
              <p className="mb-6">Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us to grow in the charity we need to direct all our efforts in chastity to love of You.</p>
              <p className="mb-6">Help us to grow in devotion to You at every opportunity. Give us the grace to serve You wholeheartedly each day of our lives.</p>
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
              <p className="mb-4">Today we pray to grow in charity and to direct all our efforts in chastity to love of God. Charity is the greatest of all virtues, and it should be the foundation of everything we do.</p>
              <p className="mb-4">When we practice chastity out of love for God, it becomes much more meaningful and powerful. Our efforts are not just about avoiding sin, but about expressing our love for God and our desire to please Him.</p>
              <p className="mb-4">God calls us to do all things in our lives out of love for Him. This includes our efforts to practice chastity. When we offer our struggles and efforts to God out of love, they become acts of worship and devotion.</p>
              <p className="mb-4">Charity helps us to see our practice of chastity not as a burden or restriction, but as a way of loving God and growing closer to Him. It transforms our motivation from fear of sin to love of God.</p>
              <p className="mb-4">Let us ask God today to help us grow in charity. Let us ask Him to help us direct all our efforts in chastity to love of Him, so that our practice of this virtue becomes an expression of our love and devotion to God.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of charity 
            and to continue striving for chastity in all areas of our lives. Give us the grace to trust in Your help 
            and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chastity - Day 4: Charity"
          text="Join me in praying the Novena for Chastity - Day 4 focusing on Charity."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Perseverance
          </Link>
          
          
          <Link 
            href="/novenas/chastity/day-5"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 5: Patience →
          </Link>
          
        </div>
      </div>
    </div>
  )
}