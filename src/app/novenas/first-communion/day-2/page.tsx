import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 2: Adult Preparation',
  description: 'Day 2 of the Novena for First Communion focusing on adult preparation. Pray for adults who are preparing to make their First Holy Communion for the first time.',
  keywords: [
    'novena for first communion day 2',
    'first communion adult preparation',
    'first communion prayer day 2',
    'holy eucharist novena day 2',
    'first communion adult preparation prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 2: Adult Preparation',
    description: 'Day 2 of the Novena for First Communion focusing on adult preparation for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-2',
  },
  twitter: {
    title: 'Novena for First Communion - Day 2: Adult Preparation',
    description: 'Day 2 of the Novena for First Communion focusing on adult preparation for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 2: Adult Preparation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for adults who are preparing to make their First Holy Communion for the first time.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Adult Preparation</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for adults who are preparing to make their First Holy Communion for the first time. We ask God to bless and assist all adult converts who are preparing for their First Holy Communion, and to help them grow in intimacy with Him.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>
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
                <strong>Prayer of Adult Preparation:</strong><br/>
                Many people go through years of their lives without knowing You or experiencing the joy of unity with You in their lives. But all who choose to convert to Your Church as adults are able to experience great intimacy with You through reception of Your Body and Blood in the Eucharist.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for adults who are preparing to make their First Holy Communion for the first time. We ask God to bless and assist all adult converts who are preparing for their First Holy Communion, and to help them grow in intimacy with Him.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Jesus said to them, 'I am the bread of life. Whoever comes to me will never be hungry, and whoever believes in me will never be thirsty.'" (John 6:35)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You bless and assist all adult converts who are preparing for their First Holy Communion! Help us to make our relationship with You our first priority in life. Help us to grow to a deeper intimacy with You each day of our lives. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for adults who are preparing to make their First Holy Communion. Adult converts often have a unique journey to the Eucharist, having lived many years without this precious gift. Their preparation is often marked by a deep appreciation for what they are about to receive, having experienced life without it. Jesus' words in John 6:35 remind us that He is the bread of life, the one who truly satisfies our deepest hunger and thirst. For adults preparing for their First Communion, this promise takes on special meaning. They have experienced the hunger and thirst of life without Christ in the Eucharist, and now they are about to receive the fulfillment of this promise. Let us pray that their preparation will be marked by deep gratitude, understanding, and love for Jesus in the Eucharist.</p>
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
          title="Novena for First Communion - Day 2: Adult Preparation"
          text="Join me in praying the Novena for First Communion - Day 2 focusing on adult preparation for receiving the Holy Eucharist."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Preparation
          </Link>
          
          <Link
            href="/novenas/first-communion/day-3"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 3: Love for Eucharist →
          </Link>
        </div>
      </div>
      
    </div>
  )
}