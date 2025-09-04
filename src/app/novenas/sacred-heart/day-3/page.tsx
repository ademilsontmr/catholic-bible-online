import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 3: Reparation and Contrition',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 3 focusing on Reparation and Contrition. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 3',
    'sacred heart novena reparation contrition',
    'day 3 sacred heart prayer',
    'reparation and contrition prayer',
    'catholic novena sacred heart',
    'sacred heart reparation devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 3: Reparation and Contrition',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 3 focusing on Reparation and Contrition. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-3',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 3: Reparation and Contrition',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 3 focusing on Reparation and Contrition. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 3: Reparation and Contrition
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for the grace of reparation and contrition for our sins, offering consolation to the wounded Heart of Jesus.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Reparation and Contrition</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of our novena, we focus on reparation and contrition for our sins. 
            The Sacred Heart of Jesus was wounded by our sins, and today we offer Him consolation 
            through our sincere repentance and desire to make reparation for the offenses against His Heart.
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
                O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, 
                I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. 
                Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; 
                give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Reparation and Contrition:</strong><br/>
                O Sacred Heart of Jesus, I am truly sorry for all my sins. I acknowledge that my sins have wounded Your Sacred Heart 
                and caused You great sorrow. I repent with all my heart for the times I have offended You and turned away from Your love.
              </p>
              
              <p className="mb-6">
                Help me to make reparation for my sins and for the sins of the world. Grant me the grace of true contrition 
                and a sincere desire to avoid sin in the future. May my prayers, sacrifices, and good works console Your wounded Heart.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, I offer You my sorrow for my sins, my desire to make reparation, and my commitment to live a holy life. 
                Help me to console Your Heart by living according to Your will and by bringing others closer to You. 
                May my life be a source of joy to Your Sacred Heart.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, I am sorry for my sins. Help me to make reparation for the offenses against Your Heart 
                and to console You through my love and devotion. Amen.
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
                Reparation is an important aspect of our devotion to the Sacred Heart. When we sin, we wound the Heart of Jesus, 
                and He calls us to make reparation for these offenses. This is not about guilt, but about love - 
                love that moves us to console the Heart of Jesus and to make amends for our failures.
              </p>
              
              <p className="mb-4">
                True contrition comes from recognizing that our sins have hurt the One who loves us most. 
                It moves us to change our lives and to live in a way that brings joy to the Sacred Heart. 
                Through reparation, we not only ask for forgiveness but also offer consolation to Jesus.
              </p>
              
              <p>
                Today, examine your conscience and ask Jesus for the grace of true contrition. 
                Offer Him your sorrow for your sins and your desire to make reparation. 
                Promise to live a life that brings joy to His Sacred Heart.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Consistency</h3>
              <p className="text-gray-700 text-sm">
                Pray at the same time each day. Whether it's morning, evening, or during your lunch break, 
                establish a routine that works for you and stick to it throughout the nine days.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Set Your Intentions</h3>
              <p className="text-gray-700 text-sm">
                Before beginning each day's prayer, take a moment to set your specific intentions. 
                What do you hope to receive from the Sacred Heart? What areas of your life need His guidance?
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Embrace Silence</h3>
              <p className="text-gray-700 text-sm">
                After praying, spend a few minutes in silence, allowing Jesus to speak to your heart. 
                Listen for His gentle voice and be open to His guidance and inspiration.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Give Thanks</h3>
              <p className="text-gray-700 text-sm">
                End each day's prayer with thanksgiving. Thank Jesus for His love and for the opportunity 
                to grow closer to His Sacred Heart through this novena.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Sacred Heart of Jesus grant you the grace of true contrition and help you to make reparation for your sins. 
            May your life be a source of consolation to His wounded Heart, and may you always strive to live in a way that brings Him joy.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Sacred Heart of Jesus Novena - Day 3: Love" 
            url="/novenas/sacred-heart/day-3"
            excerpt="Join me in praying the Sacred Heart of Jesus Novena - Day 3 focusing on Love." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Trust
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-4"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 4: Consecration →
          </Link>
        </div>
      </div>
    </div>
  )
} 