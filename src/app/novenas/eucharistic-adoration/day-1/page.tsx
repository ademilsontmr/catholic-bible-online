import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena for Adoration of the Eucharist - Day 1: Growing in Faith in the Real Presence',
  description: 'Pray the Novena for Adoration of the Eucharist - Day 1 focusing on growing in faith in the real presence. Join in praying for deeper devotion to the Eucharist.',
  keywords: [
    'novena for adoration of the eucharist day 1',
    'eucharistic adoration prayer day 1',
    'day 1 eucharist novena',
    'growing in faith in the real presence eucharist adoration'
  ],
  openGraph: {
    title: 'Novena for Adoration of the Eucharist - Day 1: Growing in Faith in the Real Presence',
    description: 'Pray the Novena for Adoration of the Eucharist - Day 1 focusing on Growing in Faith in the Real Presence.',
    url: 'https://catholicbibleonline.com/novenas/eucharistic-adoration/day-1',
  },
  twitter: {
    title: 'Novena for Adoration of the Eucharist - Day 1: Growing in Faith in the Real Presence',
    description: 'Pray the Novena for Adoration of the Eucharist - Day 1 focusing on Growing in Faith in the Real Presence.',
  }
}

export default function NovenaForEucharisticAdorationDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Adoration of the Eucharist – Day 1: Growing in Faith in the Real Presence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Adoration of the Eucharist to deepen devotion to the Real Presence of Jesus in the Eucharist.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eucharistic-adoration" className="hover:text-gray-700">Novena for Adoration of the Eucharist</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Growing in Faith in the Real Presence</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Adoration of the Eucharist, we pray for the grace to grow in true, deep faith in the Real Presence of Jesus in the Eucharist.
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

              <p className="mb-4">Dear Lord, we thank You and praise You for the truly amazing gift You have given us in the Eucharist. May You always be adored properly in the Eucharist!</p>

              <p className="mb-4">Even though You have blessed us so richly by giving us Yourself in the Eucharist, many people do not believe that You are truly present under the appearance of bread and wine. You can help all people to grow to a true, deep faith in Your Real Presence.</p>

              <p className="mb-4">Please pour Your grace on the whole world so that all people may adore You in the Eucharist, and we particularly ask today that You help all people to believe in the Real Presence!</p>

              <p className="mb-4">Help us to grow in faith at every opportunity in our lives. Help us to submit ourselves fully to You and to the teachings of Your Church.</p>

              <p className="mb-6">
                <strong>And I especially ask in this novena (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
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
                Today we focus on growing in faith in the real presence. This aspect of Eucharistic Adoration helps us to grow in faith 
                and to become more like Christ in our daily lives as we deepen our devotion to the Eucharist.
              </p>
              <p className="mb-4">
                As we continue our Novena for Adoration of the Eucharist, let us remember that Jesus is truly present 
                in the Eucharist and longs for us to spend time with Him in adoration.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love in the Eucharist.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and respect, recognizing the Real Presence of Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Believe completely in the Real Presence and trust in Jesus' power to transform your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to bless those who adore Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Express gratitude for the gift of the Eucharist and for the opportunity to adore Jesus.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for Eucharistic Adoration. Help us to carry 
            Your love for the Eucharist into our daily lives and to trust completely in Your Real Presence. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Adoration of the Eucharist - Day 1: Growing in Faith in the Real Presence"
          text="Join me in praying the Novena for Adoration of the Eucharist - Day 1 focusing on growing in faith in the real presence."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/eucharistic-adoration"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/eucharistic-adoration/day-2"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 2: Growing in Intimacy with Jesus →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}