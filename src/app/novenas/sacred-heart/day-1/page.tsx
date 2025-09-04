import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sacred Heart Novena - Day 1: Love',
  description: 'Pray the Sacred Heart Novena - Day 1 focusing on Love. Join in praying the traditional Sacred Heart Novena to grow closer to Jesus.',
  keywords: [
    'sacred heart novena day 1',
    'sacred heart prayer',
    'day 1 sacred heart',
    'sacred heart novena love',
    'sacred heart prayer love',
    'sacred heart novena prayer',
    'sacred heart nine day prayer',
    'jesus sacred heart'
  ],
  openGraph: {
    title: 'Sacred Heart Novena - Day 1: Love',
    description: 'Pray the Sacred Heart Novena - Day 1 focusing on Love. Join in praying the traditional Sacred Heart Novena.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-1',
  },
  twitter: {
    title: 'Sacred Heart Novena - Day 1: Love',
    description: 'Pray the Sacred Heart Novena - Day 1 focusing on Love. Join in praying the traditional Sacred Heart Novena.',
  }
}

export default function SacredHeartNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Sacred Heart Novena – Day 1: Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Sacred Heart Novena to grow closer to the Heart of Jesus.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Love</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Sacred Heart Novena, we meditate on the infinite love of Jesus Christ. 
            His Sacred Heart is a furnace of divine love, burning with love for each one of us.
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
                <strong>O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, 
                I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. 
                Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; 
                give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Within Your Heart I place my every care. In every need let me come to You with humble trust saying, 
                Heart of Jesus help me.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we meditate on the infinite love of Jesus Christ. We ask Him to help us understand and respond to His love, 
                and to love Him in return with all our hearts.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>O Sacred Heart of Jesus, have mercy on us!</strong>
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
                Today we begin the Sacred Heart Novena by meditating on the infinite love of Jesus Christ. 
                The Sacred Heart of Jesus is a symbol of His divine love for humanity - a love that is infinite, 
                unconditional, and everlasting.
              </p>
              
              <p className="mb-4">
                Jesus' Heart was pierced on the cross, and from it flowed blood and water - symbols of the sacraments 
                of Baptism and the Eucharist, through which He continues to pour out His love upon us.
              </p>
              
              <p className="mb-4">
                The devotion to the Sacred Heart reminds us that Jesus loves each one of us personally and individually. 
                His Heart burns with love for us, and He desires nothing more than to be loved in return.
              </p>
              
              <p>
                As we pray today, let us open our hearts to receive His love and ask Him to help us love Him more deeply. 
                Let us remember that His Heart is always open to us, ready to receive our love and to pour out His mercy upon us.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with love in your heart. Remember that you are praying to the Heart of Jesus, 
                which is burning with love for you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Meditate on His Heart</h3>
              <p className="text-gray-700 text-sm">
                Take time to meditate on the Sacred Heart of Jesus. Imagine His Heart burning with love for you 
                and for all humanity.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Heart</h3>
              <p className="text-gray-700 text-sm">
                Offer your own heart to Jesus, asking Him to make it more like His. 
                Ask Him to help you love Him and others more perfectly.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Mercy</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the mercy of the Sacred Heart. Remember that His Heart is always open 
                to receive you and to forgive you.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O most holy Heart of Jesus, fountain of every blessing, we adore You and love You. Help us to understand 
            the depth of Your love for us and to respond to that love with all our hearts. Make our hearts more like Yours, 
            burning with love for God and for our neighbor. Sacred Heart of Jesus, have mercy on us! Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Sacred Heart of Jesus Novena - Day 1: Faith" 
            url="/novenas/sacred-heart/day-1"
            excerpt="Join me in praying the Sacred Heart of Jesus Novena - Day 1 focusing on Faith." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-2"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 2: Trust →
          </Link>
        </div>
      </div>
    </div>
  )
} 