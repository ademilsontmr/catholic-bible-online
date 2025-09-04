import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 5: Vocations',
  description: 'Day 5 of the Novena for First Communion focusing on vocations. Pray for inspiring First Communicants to consider priesthood and religious life.',
  keywords: [
    'novena for first communion day 5',
    'first communion vocations',
    'first communion prayer day 5',
    'holy eucharist novena day 5',
    'first communion vocations prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 5: Vocations',
    description: 'Day 5 of the Novena for First Communion focusing on vocations for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-5',
  },
  twitter: {
    title: 'Novena for First Communion - Day 5: Vocations',
    description: 'Day 5 of the Novena for First Communion focusing on vocations for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 5: Vocations
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for inspiring First Communicants to consider priesthood and religious life.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Vocations</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for inspiring First Communicants to consider priesthood and religious life. We ask God to inspire the hearts of many First Communicants to devote their lives to Him in the priesthood and religious life.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>
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
                <strong>Prayer of Vocations:</strong><br/>
                You wish all people to be united to You. You have given us the precious gift of Your Body and Blood to help us grow to an intimate union with You. We ask You to inspire more people to devote their lives to You in the priesthood and religious life through this intimate union.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for inspiring First Communicants to consider priesthood and religious life. We ask God to inspire the hearts of many First Communicants to devote their lives to Him in the priesthood and religious life.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Then he took a loaf of bread, and when he had given thanks, he broke it and gave it to them, saying, 'This is my body, which is given for you. Do this in remembrance of me.'" (Luke 22:19)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You inspire the hearts of many First Communicants to devote their lives to You in the priesthood and religious life! Help us to make our relationship with You our top priority in life. Help us to grow in all the virtues necessary for our holiness. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for vocations to the priesthood and religious life. The Eucharist is intimately connected to the priesthood, for it is through the priest that the bread and wine become the Body and Blood of Christ. Jesus' words in Luke 22:19, "Do this in remembrance of me," are addressed to the apostles and their successors - the priests of the Church. Without priests, there would be no Eucharist. Many saints have said that their vocation to the priesthood or religious life was first kindled during their First Communion. The experience of receiving Jesus in the Eucharist for the first time can plant the seed of a vocation in a young heart. Let us pray that many First Communicants will be inspired to consider giving their lives completely to God through the priesthood or religious life.</p>
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
            title="Novena for First Communion - Day 5: Vocations" 
            url="/novenas/first-communion/day-5"
            excerpt="Join me in praying the Novena for First Communion - Day 5 focusing on vocations for receiving the Holy Eucharist." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Religious Education
          </Link>
          
          <Link
            href="/novenas/first-communion/day-6"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 6: Intimacy with God →
          </Link>
        </div>
      </div>
      
    </div>
  )
}