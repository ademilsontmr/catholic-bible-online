import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 5: Consolation and Comfort',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 5 focusing on Consolation and Comfort. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 5',
    'sacred heart novena consolation comfort',
    'day 5 sacred heart prayer',
    'consolation and comfort prayer',
    'catholic novena sacred heart',
    'sacred heart consolation devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 5: Consolation and Comfort',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 5 focusing on Consolation and Comfort. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-5',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 5: Consolation and Comfort',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 5 focusing on Consolation and Comfort. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 5: Consolation and Comfort
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we seek consolation and comfort in the Sacred Heart of Jesus during times of suffering and difficulty.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Consolation and Comfort</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of our novena, we focus on finding consolation and comfort in the Sacred Heart of Jesus. 
            The Sacred Heart is a refuge for all who are suffering, a source of comfort for those who are in pain, 
            and a place of consolation for those who are grieving or troubled.
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
                O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, 
                I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. 
                Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; 
                give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Consolation and Comfort:</strong><br/>
                O Sacred Heart of Jesus, source of all consolation and comfort, I come to You in my time of need. 
                You have said, "Come to Me, all you who are weary and burdened, and I will give you rest." 
                I come to You with all my sorrows, my pains, and my troubles.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, console me in my sufferings. Comfort me in my afflictions. 
                Help me to find peace in Your loving Heart. When I am sad, remind me of Your love. 
                When I am afraid, give me courage. When I am lonely, assure me of Your presence.
              </p>
              
              <p className="mb-6">
                Help me to understand that my sufferings can be united with Yours for the salvation of souls. 
                Teach me to offer my pains and difficulties to You, knowing that You understand my struggles 
                and that You will give me the strength to bear them.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, console me and comfort me in all my sufferings. Help me to find peace and rest in Your Heart. 
                May I always turn to You in times of need and find the consolation I seek. Amen.
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
                The Sacred Heart of Jesus is a source of consolation and comfort for all who are suffering. 
                Jesus Himself experienced suffering and pain, and He understands our struggles. 
                When we turn to His Sacred Heart, we find a refuge where we can rest and find peace.
              </p>
              
              <p className="mb-4">
                Suffering is a part of human life, but it doesn't have to be meaningless. When we offer our sufferings 
                to the Sacred Heart of Jesus, they become a means of grace and can help us grow closer to Him. 
                Jesus can use our sufferings to bring good out of evil and to help others.
              </p>
              
              <p>
                Today, bring all your sorrows and troubles to the Sacred Heart of Jesus. Ask Him to console you 
                and to give you the strength to bear your difficulties. Trust that He will never abandon you 
                and that He will always provide the comfort you need.
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
            May the Sacred Heart of Jesus console you and comfort you in all your sufferings. 
            May you find peace and rest in His loving Heart, and may you always turn to Him in times of need. 
            Trust that He will never abandon you and that He will always provide the comfort you seek.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Sacred Heart of Jesus Novena - Day 5: Devotion" 
            url="/novenas/sacred-heart/day-5"
            excerpt="Join me in praying the Sacred Heart of Jesus Novena - Day 5 focusing on Devotion." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Consecration
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-6"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 6: Gratitude →
          </Link>
        </div>
      </div>
    </div>
  )
} 