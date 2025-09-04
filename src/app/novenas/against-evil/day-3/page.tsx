import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena Against Evil - Day 3: Protection from Devil',
  description: 'Pray the Novena Against Evil - Day 3 focusing on protection from devil. Join in praying for protection and triumph over evil.',
  keywords: [
    'novena against evil day 3',
    'evil prayer day 3',
    'day 3 evil novena',
    'protection from devil evil protection'
  ],
  openGraph: {
    title: 'Novena Against Evil - Day 3: Protection from Devil',
    description: 'Pray the Novena Against Evil - Day 3 focusing on Protection from Devil.',
    url: 'https://catholicbibleonline.com/novenas/against-evil/day-3',
  },
  twitter: {
    title: 'Novena Against Evil - Day 3: Protection from Devil',
    description: 'Pray the Novena Against Evil - Day 3 focusing on Protection from Devil.',
  }
}

export default function NovenaAgainstEvilDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena Against Evil – Day 3: Protection from Devil
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying the Novena Against Evil to seek protection and triumph over evil.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/against-evil" className="hover:text-gray-700">Novena Against Evil</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Protection from Devil</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we pray for protection from direct attacks of the devil.
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

              <p className="mb-4">Dear Lord, we thank You for Your many blessings and the protections you offer us. We humbly ask You today to bring about the ultimate defeat of evil in the world.</p>

              <p className="mb-4">There are many ways that evil can affect us. Some people might even suffer from the direct attacks of the devil against them. Even when it seems as if the forces of evil are very strong and powerful, we know that You hold ultimate power over all things.</p>

              <p className="mb-4">Please bring about the triumph of Your goodness over all evil. And we particularly ask today that You give protection to all who are being directly attacked by the devil.</p>

              <p className="mb-4">Help us to truly believe that You are all powerful. Give us the grace to trust in You more fully at every opportunity in our lives.</p>

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
                Today we focus on protection from devil. This aspect of spiritual warfare helps us to grow in faith 
                and to become more like Christ in our daily lives as we seek protection and victory over evil.
              </p>
              <p className="mb-4">
                As we continue our Novena Against Evil, let us remember that God is infinitely more powerful 
                than the devil and can help us overcome any temptation or attack from the forces of darkness.
              </p>
              <p>
                Let us ask God to help us be instruments of His protection and love in our daily lives.
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
                Trust in God's infinite power to defeat evil and protect you from all harm.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Remember that the devil particularly loathes humble souls.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Persevere in prayer even when the forces of evil seem strong.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's plan and His ultimate victory over evil.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for protection against evil. Help us to carry 
            Your protection and love into our daily lives and to trust completely in Your infinite power. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena Against Evil - Day 3: Protection from Devil" 
            url="/novenas/against-evil/day-3"
            excerpt="Join me in praying the Novena Against Evil - Day 3 focusing on protection from devil." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/against-evil/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Grace of Repentance
          </Link>
          
          
          
          <Link 
            href="/novenas/against-evil/day-4"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 4: Blessing Exorcists →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}