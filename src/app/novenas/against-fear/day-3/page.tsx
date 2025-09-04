import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena Against Fear - Day 3: Trust in God',
  description: 'Pray the Novena Against Fear - Day 3 focusing on trust in god. Join in praying for courage and freedom from fear.',
  keywords: [
    'novena against fear day 3',
    'fear prayer day 3',
    'day 3 fear novena',
    'trust in god fear courage'
  ],
  openGraph: {
    title: 'Novena Against Fear - Day 3: Trust in God',
    description: 'Pray the Novena Against Fear - Day 3 focusing on Trust in God.',
    url: 'https://catholicbibleonline.com/novenas/against-fear/day-3',
  },
  twitter: {
    title: 'Novena Against Fear - Day 3: Trust in God',
    description: 'Pray the Novena Against Fear - Day 3 focusing on Trust in God.',
  }
}

export default function NovenaAgainstFearDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena Against Fear – Day 3: Trust in God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying the Novena Against Fear to seek courage and freedom from fear.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/against-fear" className="hover:text-gray-700">Novena Against Fear</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust in God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we pray for growth in trust in God to overcome fear.
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

              <p className="mb-4">Dear Lord, we thank You and praise You for the many ways You provide for us. We ask You today to help us overcome our fear.</p>

              <p className="mb-4">You call each of us to place our trust fully in You, each day of our lives. And we know that You lovingly provide all that we need. But we sometimes still struggle with fear. You can help us to grow in the trust in You we need to truly overcome our fear.</p>

              <p className="mb-4">We pray for Your help against our fear, and we particularly ask today that You help us and all who struggle with fear to grow in trust in God.</p>

              <p className="mb-4">Help us to surrender all parts of our lives fully to You each day. Give us the grace to submit to Your will in every circumstance we face.</p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
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
                Today we focus on trust in god. This aspect of overcoming fear helps us to grow in faith 
                and to become more like Christ in our daily lives as we seek courage and freedom from fear.
              </p>
              <p className="mb-4">
                As we continue our Novena Against Fear, let us remember that God is all good and cares for 
                each of our needs. With His help, we can develop true courage in the face of any fear.
              </p>
              <p>
                Let us ask God to help us be instruments of His courage and love in our daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's power to help you overcome any fear and find true courage.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for overcoming fear.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's care and provision for all your needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Practice courage daily and rely on God's strength in every situation.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for overcoming fear. Help us to carry 
            Your courage and love into our daily lives and to trust completely in Your care for us. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena Against Fear - Day 3: Trust in God" 
            url="/novenas/against-fear/day-3"
            excerpt="Join me in praying the Novena Against Fear - Day 3 focusing on trust in god." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/against-fear/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: True Wisdom
          </Link>
          
          
          
          <Link 
            href="/novenas/against-fear/day-4"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            Day 4: Perseverance →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}