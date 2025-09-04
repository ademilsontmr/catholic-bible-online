import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 1: Preparation',
  description: 'Day 1 of the Novena for First Communion focusing on preparation. Pray for children and adults preparing for their First Holy Communion.',
  keywords: [
    'novena for first communion day 1',
    'first communion preparation',
    'first communion prayer day 1',
    'holy eucharist novena day 1',
    'first communion preparation prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 1: Preparation',
    description: 'Day 1 of the Novena for First Communion focusing on preparation for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-1',
  },
  twitter: {
    title: 'Novena for First Communion - Day 1: Preparation',
    description: 'Day 1 of the Novena for First Communion focusing on preparation for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 1: Preparation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for the preparation of children and adults for their First Holy Communion with God's grace and guidance.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Preparation</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for First Communion, we pray for the preparation of children and adults 
            for their First Holy Communion. We ask God to bless all those who are preparing to receive His Body and Blood 
            for the first time, and to provide them with His grace and guidance throughout their preparation.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the most precious gift of the Holy Eucharist. 
                We ask You to bless all those who are preparing to receive Your Body and Blood for the first time.
              </p>
              <p className="mb-6">
                <strong>Prayer of Preparation:</strong><br/>
                You have provided for us richly through the gift of Your Body and Blood in the Eucharist. 
                Receiving the Holy Eucharist is a tremendous blessing, and we ask You to help even young children 
                to prepare well before receiving You.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for the preparation of children and adults for their First Holy Communion. 
                We ask God to bless and assist all children who are preparing for their First Holy Communion, 
                and to provide them with His grace and guidance throughout their preparation.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "I am the living bread that came down from heaven. Whoever eats of this bread will live forever; 
                and the bread that I will give for the life of the world is my flesh." (John 6:51)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today 
                that You bless and assist all children who are preparing for their First Holy Communion! 
                Help us to grow in love for You each day of our lives. Help us to always appreciate the great gifts 
                You have given us for our salvation. And I especially ask in this novena (mention your intentions here). 
                Lord, hear our prayers!
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
              <p className="mb-4">
                Today we pray for the preparation of children and adults for their First Holy Communion. 
                Preparation is essential for receiving this most precious sacrament worthily.
              </p>
              <p className="mb-4">
                Jesus' words in John 6:51 remind us of the incredible gift He gives us in the Eucharist. 
                He is truly present - Body, Blood, Soul, and Divinity - under the appearances of bread and wine. 
                This is not a symbol, but the Real Presence of Christ Himself.
              </p>
              <p className="mb-4">
                As we begin this novena, let us reflect on the importance of proper preparation. 
                Children need to understand that they are receiving Jesus Himself, not just bread and wine. 
                Adults who are converting to the faith need to appreciate the profound mystery they are about to experience.
              </p>
              <p className="mb-4">
                Preparation involves both knowledge and disposition. We must understand what we are receiving, 
                and we must approach the Eucharist with reverence, love, and a heart open to God's grace.
              </p>
              <p>
                Let us pray that all who are preparing for their First Communion will be blessed with understanding, 
                reverence, and a deep love for Jesus in the Eucharist.
              </p>
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
            title="Novena for First Communion - Day 1: Preparation" 
            url="/novenas/first-communion/day-1"
            excerpt="Join me in praying the Novena for First Communion - Day 1 focusing on preparation for receiving the Holy Eucharist." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/first-communion/day-2"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 2: Adult Preparation →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="First Communion" />
    </div>
  )
} 