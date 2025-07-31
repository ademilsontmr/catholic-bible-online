import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 4: Religious Education',
  description: 'Day 4 of the Novena for First Communion focusing on religious education. Pray for those who work in sacramental preparation and religious education.',
  keywords: [
    'novena for first communion day 4',
    'first communion religious education',
    'first communion prayer day 4',
    'holy eucharist novena day 4',
    'first communion religious education prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 4: Religious Education',
    description: 'Day 4 of the Novena for First Communion focusing on religious education for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-4',
  },
  twitter: {
    title: 'Novena for First Communion - Day 4: Religious Education',
    description: 'Day 4 of the Novena for First Communion focusing on religious education for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 4: Religious Education
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for those who work in sacramental preparation and religious education.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Religious Education</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for those who work in sacramental preparation and religious education. We ask God to help all who work in sacramental preparation to do their work well and to guide those preparing for First Communion with wisdom and love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>
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
                <strong>Prayer of Religious Education:</strong><br/>
                The work of religious education is very important, especially for those who are learning about You while preparing to make their First Holy Communion. You wish all who receive You in the Eucharist to know and believe that they are truly consuming Your Body and Blood.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those who work in sacramental preparation and religious education. We ask God to help all who work in sacramental preparation to do their work well and to guide those preparing for First Communion with wisdom and love.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything that I have commanded you." (Matthew 28:19-20)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You help all who work in sacramental preparation to do their work well! Help us to grow in love for You each day of our lives. Help us to strive to serve You devotedly at all times. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for those who work in religious education and sacramental preparation. The work of teaching others about the Eucharist is a sacred responsibility. Religious educators, catechists, and parents all play a vital role in preparing children and adults for their First Communion. Jesus' command in Matthew 28:19-20 reminds us of the importance of teaching others about the faith. Those who work in religious education are fulfilling this command by helping others understand the great mystery of the Eucharist. They must teach not only the facts about the Eucharist, but also the love and reverence that should accompany our reception of it. Let us pray that all religious educators will be blessed with wisdom, patience, and love as they guide others toward their First Communion.</p>
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
          title="Novena for First Communion - Day 4: Religious Education"
          text="Join me in praying the Novena for First Communion - Day 4 focusing on religious education for receiving the Holy Eucharist."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Love for Eucharist
          </Link>
          
          <Link
            href="/novenas/first-communion/day-5"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 5: Vocations →
          </Link>
        </div>
      </div>
      
    </div>
  )
}