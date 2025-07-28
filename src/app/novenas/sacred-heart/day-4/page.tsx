import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 4: Mercy and Compassion',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 4 focusing on Mercy and Compassion. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 4',
    'sacred heart novena mercy compassion',
    'day 4 sacred heart prayer',
    'mercy and compassion prayer',
    'catholic novena sacred heart',
    'sacred heart mercy devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 4: Mercy and Compassion',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 4 focusing on Mercy and Compassion. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-4',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 4: Mercy and Compassion',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 4 focusing on Mercy and Compassion. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 4: Mercy and Compassion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for mercy and compassion from the Sacred Heart of Jesus, the source of infinite mercy.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Mercy and Compassion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of our novena, we focus on the mercy and compassion of the Sacred Heart of Jesus. 
            The Sacred Heart is an ocean of mercy, always ready to forgive and to show compassion to those who turn to Him. 
            Today we ask for His mercy and learn to show compassion to others.
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
                O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, 
                I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. 
                Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; 
                give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Mercy and Compassion:</strong><br/>
                O Sacred Heart of Jesus, fountain of mercy and compassion, I come to You seeking Your infinite mercy. 
                You have said, "Come to Me, all you who are weary and burdened, and I will give you rest." 
                I come to You with all my sins and weaknesses, trusting in Your mercy.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, have mercy on me. Have mercy on all sinners and on the whole world. 
                Help me to understand the depth of Your mercy and to show compassion to others as You have shown to me. 
                Teach me to be merciful as You are merciful.
              </p>
              
              <p className="mb-6">
                Grant me the grace to forgive others as You have forgiven me. Help me to show compassion to those who are suffering, 
                to those who are in need, and to those who have wronged me. May my heart be filled with Your mercy and compassion.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, have mercy on me and on the whole world. Help me to show Your mercy and compassion to others. 
                May I be an instrument of Your love and mercy in the world. Amen.
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
                The mercy of the Sacred Heart of Jesus is infinite and unconditional. No matter how many times we fall, 
                no matter how great our sins, Jesus is always ready to forgive us and to show us His compassion. 
                His Heart is a refuge for all who seek mercy.
              </p>
              
              <p className="mb-4">
                As we receive God's mercy, we are called to show mercy to others. This means forgiving those who have hurt us, 
                showing compassion to those who are suffering, and being patient with those who are difficult to love. 
                Through our acts of mercy, we become instruments of God's love in the world.
              </p>
              
              <p>
                Today, ask Jesus to help you understand His mercy more deeply and to show mercy to others. 
                Pray for the grace to forgive as you have been forgiven and to show compassion to all those you encounter. 
                Remember that mercy is not just a feeling, but an action that flows from love.
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
            May the Sacred Heart of Jesus fill you with His mercy and compassion today and always. 
            May you be an instrument of His mercy in the world, showing compassion to all those you encounter. 
            Trust in His infinite mercy and know that He will never abandon you.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Sacred Heart of Jesus Novena - Day 4: Prayer"
          text="Join me in praying the Sacred Heart of Jesus Novena - Day 4 focusing on Prayer."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Reparation
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-5"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 5: Trust →
          </Link>
        </div>
      </div>
    </div>
  )
} 