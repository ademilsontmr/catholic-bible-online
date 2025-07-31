import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 7: Reverence',
  description: 'Day 7 of the Novena for First Communion focusing on reverence. Pray for growing in reverence and proper worship at every Mass.',
  keywords: [
    'novena for first communion day 7',
    'first communion reverence',
    'first communion prayer day 7',
    'holy eucharist novena day 7',
    'first communion reverence prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 7: Reverence',
    description: 'Day 7 of the Novena for First Communion focusing on reverence for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-7',
  },
  twitter: {
    title: 'Novena for First Communion - Day 7: Reverence',
    description: 'Day 7 of the Novena for First Communion focusing on reverence for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 7: Reverence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for growing in reverence and proper worship at every Mass.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Reverence</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for growing in reverence and proper worship at every Mass. We ask God to help us and all who are preparing for their First Holy Communion to grow in reverence at every Mass.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the most precious gift of the Holy Eucharist. We ask You to bless all those who are preparing to receive Your Body and Blood for the first time.
              </p>
              <p className="mb-6">
                <strong>Prayer of Reverence:</strong><br/>
                We cannot fully comprehend the holy mystery contained in the Sacrifice of the Mass, but we know that each Mass is a miracle. You give Yourself to us in the Eucharist at each Mass, but we often do a poor job of worshipping You as we ought.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for growing in reverence and proper worship at every Mass. We ask God to help us and all who are preparing for their First Holy Communion to grow in reverence at every Mass.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Worship the Lord in holy splendor; tremble before him, all the earth." (Psalm 96:9)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You help us and all who are preparing for their First Holy Communion to grow in reverence at every Mass! Help us to appreciate more deeply all You have done for us in our lives. Help us to grow in love for You each day. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for growing in reverence and proper worship at every Mass. Reverence is the proper response to the presence of God. When we recognize that we are in the presence of Jesus Christ, truly present in the Eucharist, we should respond with awe, wonder, and deep reverence. Psalm 96:9 calls us to worship the Lord in holy splendor and to tremble before Him. This trembling is not fear, but the awe and reverence we feel in the presence of the divine. At Mass, we are truly in the presence of God, and our behavior should reflect this reality. We should dress appropriately, arrive on time, participate fully, and maintain a prayerful attitude throughout the Mass. Let us pray that all who are preparing for their First Communion will learn to approach the Mass with the reverence and awe it deserves.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Prepare your heart and mind for receiving the Holy Eucharist. 
                Reflect on the great gift of Jesus' Body and Blood.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and love. 
                Remember that you are receiving the Body and Blood of Christ.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who prepare for His sacraments.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the Holy Eucharist. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of the Holy Eucharist and for calling us to receive You. 
            Help us to prepare well for this most precious sacrament and to approach You with reverence and love. 
            May this novena help us grow closer to You and appreciate more deeply the gift of Your Body and Blood. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for First Communion - Day 7: Reverence"
          text="Join me in praying the Novena for First Communion - Day 7 focusing on reverence for receiving the Holy Eucharist."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Intimacy with God
          </Link>
          
          <Link
            href="/novenas/first-communion/day-8"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 8: Worthy Reception →
          </Link>
        </div>
      </div>
      
    </div>
  )
}