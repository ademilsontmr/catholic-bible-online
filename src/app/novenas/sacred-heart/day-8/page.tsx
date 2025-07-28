import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 8: Gratitude and Thanksgiving',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 8 focusing on Gratitude and Thanksgiving. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 8',
    'sacred heart novena gratitude thanksgiving',
    'day 8 sacred heart prayer',
    'gratitude and thanksgiving prayer',
    'catholic novena sacred heart',
    'sacred heart gratitude devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 8: Gratitude and Thanksgiving',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 8 focusing on Gratitude and Thanksgiving. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-8',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 8: Gratitude and Thanksgiving',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 8 focusing on Gratitude and Thanksgiving. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 8: Gratitude and Thanksgiving
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we express gratitude and thanksgiving for God's love and all the blessings we have received from the Sacred Heart.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude and Thanksgiving</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of our novena, we focus on gratitude and thanksgiving. The Sacred Heart of Jesus has given us so much - 
            His love, His mercy, His guidance, and His presence in our lives. Today we take time to thank Him for all His blessings 
            and to express our gratitude for His infinite love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>
          
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
                <strong>Prayer of Gratitude and Thanksgiving:</strong><br/>
                O Sacred Heart of Jesus, I thank You with all my heart for Your infinite love and mercy. 
                Thank You for creating me, for redeeming me, and for calling me to be Your child. 
                Thank You for all the blessings You have poured into my life.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, I thank You for Your constant presence in my life, for Your guidance and protection, 
                for Your forgiveness and mercy, and for Your love that never fails. Thank You for the gift of faith, 
                for the sacraments, and for the Church that You established.
              </p>
              
              <p className="mb-6">
                I thank You for my family and friends, for the opportunities You have given me, 
                for the challenges that have helped me grow, and for the grace to persevere in difficult times. 
                Thank You for Your Sacred Heart, which is always open to receive me and to give me refuge.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, I thank You for everything. Help me to always be grateful for Your love and mercy. 
                May my life be a constant act of thanksgiving to You. Amen.
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
                Gratitude is a fundamental attitude of the Christian life. When we recognize all that God has given us, 
                our hearts are filled with thanksgiving and joy. The Sacred Heart of Jesus has blessed us abundantly, 
                and we should never take these blessings for granted.
              </p>
              
              <p className="mb-4">
                Even in difficult times, we can find reasons to be grateful. We can thank God for His presence with us, 
                for the strength He gives us to endure trials, and for the lessons we learn through suffering. 
                Gratitude helps us to see God's hand in everything and to trust in His providence.
              </p>
              
              <p>
                Today, take time to count your blessings and to thank the Sacred Heart of Jesus for each one. 
                Express your gratitude not just in words, but in your actions. Show your thankfulness by living 
                a life that honors Him and by sharing His love with others.
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
            May the Sacred Heart of Jesus fill you with gratitude and thanksgiving for all His blessings. 
            May you always remember to thank Him for His love and mercy, and may your life be a constant act of thanksgiving. 
            Trust that He will continue to bless you abundantly.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Sacred Heart of Jesus Novena - Day 8: Grace"
          text="Join me in praying the Sacred Heart of Jesus Novena - Day 8 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Intercession
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-9"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 9: Complete Consecration →
          </Link>
        </div>
      </div>
    </div>
  )
} 