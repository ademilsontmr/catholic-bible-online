import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 2: Trust and Confidence',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 2 focusing on Trust and Confidence. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 2',
    'sacred heart novena trust confidence',
    'day 2 sacred heart prayer',
    'trust and confidence prayer',
    'catholic novena sacred heart',
    'sacred heart trust devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 2: Trust and Confidence',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 2 focusing on Trust and Confidence. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-2',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 2: Trust and Confidence',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 2 focusing on Trust and Confidence. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 2: Trust and Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for trust and confidence in the Sacred Heart of Jesus, knowing that He will never abandon us.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust and Confidence</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of our novena, we focus on trust and confidence in the Sacred Heart of Jesus. 
            The Sacred Heart is a refuge for all who trust in Him. When we place our confidence in Jesus, 
            we find peace, strength, and the assurance that He will never abandon us.
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
                O most holy Heart of Jesus, fountain of every blessing, I adore You, I love You, and with a lively sorrow for my sins, 
                I offer You this poor heart of mine. Make me humble, patient, pure, and wholly obedient to Your will. 
                Grant, good Jesus, that I may live in You and for You. Protect me in the midst of danger; comfort me in my afflictions; 
                give me health of body, assistance in my temporal needs, Your blessing on all that I do, and the grace of a holy death.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Trust and Confidence:</strong><br/>
                O Sacred Heart of Jesus, I place all my trust in You. You have said, "Come to Me, all you who are weary and burdened, 
                and I will give you rest." I come to You with all my cares, my worries, and my fears. 
                I trust in Your infinite love and mercy.
              </p>
              
              <p className="mb-6">
                Help me to have complete confidence in Your Sacred Heart. When I am afraid, remind me that You are with me. 
                When I am worried, help me to trust in Your providence. When I am in doubt, give me the confidence to follow Your will.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, I trust in You. I trust in Your love, Your mercy, and Your guidance. 
                I trust that You will never abandon me, that You will always be with me, and that You will lead me to eternal life. 
                Help me to trust You more and more each day.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, I place all my trust in You. Help me to have complete confidence in Your love and mercy. 
                May I always trust in Your guidance and know that You will never abandon me. Amen.
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
                Trust is the foundation of any relationship, and our relationship with Jesus is no different. 
                The Sacred Heart of Jesus invites us to trust Him completely, to place all our cares and worries 
                in His loving Heart, and to have confidence that He will never abandon us.
              </p>
              
              <p className="mb-4">
                When we trust in the Sacred Heart, we find peace even in the midst of difficulties. 
                We know that Jesus is with us, that He understands our struggles, and that He will help us 
                through every trial. This trust gives us the strength to face whatever challenges come our way.
              </p>
              
              <p>
                Today, ask Jesus to help you trust Him more deeply. Pray that you may have complete confidence 
                in His love and mercy, and that you may always turn to Him in times of need. 
                Remember that the Sacred Heart is a refuge for all who trust in Him.
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
            May the Sacred Heart of Jesus fill you with trust and confidence today and always. 
            May you always turn to Him in times of need and know that He will never abandon you. 
            Trust in His Sacred Heart and find peace in His love.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Sacred Heart of Jesus Novena - Day 2: Hope" 
            url="/novenas/sacred-heart/day-2"
            excerpt="Join me in praying the Sacred Heart of Jesus Novena - Day 2 focusing on Hope." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Love
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-3"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 3: Reparation →
          </Link>
        </div>
      </div>
    </div>
  )
} 