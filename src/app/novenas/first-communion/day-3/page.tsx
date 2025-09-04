import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 3: Love for Eucharist',
  description: 'Day 3 of the Novena for First Communion focusing on love for eucharist. Pray for growing in love for the Holy Eucharist and appreciation of this precious gift.',
  keywords: [
    'novena for first communion day 3',
    'first communion love for eucharist',
    'first communion prayer day 3',
    'holy eucharist novena day 3',
    'first communion love for eucharist prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 3: Love for Eucharist',
    description: 'Day 3 of the Novena for First Communion focusing on love for eucharist for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-3',
  },
  twitter: {
    title: 'Novena for First Communion - Day 3: Love for Eucharist',
    description: 'Day 3 of the Novena for First Communion focusing on love for eucharist for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 3: Love for Eucharist
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for growing in love for the Holy Eucharist and appreciation of this precious gift.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love for Eucharist</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for growing in love for the Holy Eucharist and appreciation of this precious gift. We ask God to help all people grow in love for the Eucharist and to never take for granted this incredible gift.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>
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
                <strong>Prayer of Love for Eucharist:</strong><br/>
                We can never fully understand the depths of Your love for us, from which You chose to sacrifice Yourself for us and give us Your Body and Blood. We should strive to grow in love for Your Precious Body and Blood every day of our lives.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for growing in love for the Holy Eucharist and appreciation of this precious gift. We ask God to help all people grow in love for the Eucharist and to never take for granted this incredible gift.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Those who eat my flesh and drink my blood abide in me, and I in them." (John 6:56)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You help all people grow in love for the Eucharist! Help us to always strive for deeper intimacy with You. Help us to never take for granted the gift of the Holy Eucharist in our lives. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for growing in love for the Holy Eucharist. Love for the Eucharist is not something that happens automatically - it must be cultivated through prayer, reflection, and frequent reception. Jesus' words in John 6:56 speak of the intimate union that takes place when we receive Him in the Eucharist. We abide in Him, and He abides in us. This is the most intimate relationship possible - a union of love that transforms us from within. When we truly love the Eucharist, we approach it with reverence, gratitude, and a heart full of love. We recognize that we are receiving not just bread and wine, but Jesus Himself - the one who loves us more than we can imagine. Let us pray that our love for the Eucharist will grow deeper each day, and that we will always approach this sacrament with the love and reverence it deserves.</p>
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
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for First Communion - Day 3: Love for Eucharist" 
            url="/novenas/first-communion/day-3"
            excerpt="Join me in praying the Novena for First Communion - Day 3 focusing on love for eucharist for receiving the Holy Eucharist." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Adult Preparation
          </Link>
          
          <Link
            href="/novenas/first-communion/day-4"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 4: Religious Education →
          </Link>
        </div>
      </div>
      
    </div>
  )
}