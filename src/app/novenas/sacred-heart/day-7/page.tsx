import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Sacred Heart of Jesus - Day 7: Peace and Reconciliation',
  description: 'Pray the Novena to the Sacred Heart of Jesus - Day 7 focusing on Peace and Reconciliation. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'novena to the sacred heart day 7',
    'sacred heart novena peace reconciliation',
    'day 7 sacred heart prayer',
    'peace and reconciliation prayer',
    'catholic novena sacred heart',
    'sacred heart peace devotion'
  ],
  openGraph: {
    title: 'Novena to the Sacred Heart of Jesus - Day 7: Peace and Reconciliation',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 7 focusing on Peace and Reconciliation. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart/day-7',
  },
  twitter: {
    title: 'Novena to the Sacred Heart of Jesus - Day 7: Peace and Reconciliation',
    description: 'Pray the Novena to the Sacred Heart of Jesus - Day 7 focusing on Peace and Reconciliation. Complete prayer text and reflection.',
  }
}

export default function SacredHeartNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Sacred Heart of Jesus – Day 7: Peace and Reconciliation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for peace and reconciliation in the world and in our own hearts through the Sacred Heart of Jesus.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sacred-heart" className="hover:text-gray-700">Sacred Heart Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Peace and Reconciliation</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of our novena, we focus on peace and reconciliation. The Sacred Heart of Jesus is the Prince of Peace, 
            and He calls us to be peacemakers in the world. Today we pray for peace in our hearts, in our families, 
            and in the world, and we ask for the grace to be instruments of reconciliation.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
          
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
                <strong>Prayer for Peace and Reconciliation:</strong><br/>
                O Sacred Heart of Jesus, Prince of Peace, I pray for peace in my heart and in the world. 
                You have said, "Peace I leave with you; my peace I give you." Grant me Your peace that surpasses all understanding.
              </p>
              
              <p className="mb-6">
                Sacred Heart of Jesus, help me to be a peacemaker. Give me the grace to forgive those who have hurt me 
                and to seek reconciliation with those from whom I am estranged. Help me to bring peace to my family, 
                my community, and the world around me.
              </p>
              
              <p className="mb-6">
                I pray for peace in the world - for an end to war, violence, and hatred. Sacred Heart of Jesus, 
                touch the hearts of all people and help them to work for peace and justice. May Your peace reign in every heart 
                and may reconciliation bring healing to broken relationships.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Sacred Heart:</strong><br/>
                Sacred Heart of Jesus, grant me Your peace and help me to be an instrument of reconciliation. 
                May Your peace reign in my heart and in the world. Amen.
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
                Peace begins in our own hearts. When we have peace with God and peace within ourselves, 
                we can become instruments of peace for others. The Sacred Heart of Jesus offers us His peace, 
                a peace that is not of this world, but a peace that comes from knowing and loving Him.
              </p>
              
              <p className="mb-4">
                Reconciliation is closely linked to peace. To be at peace, we need to be reconciled with God and with others. 
                This means forgiving those who have hurt us, asking for forgiveness when we have hurt others, 
                and working to heal broken relationships. The Sacred Heart calls us to be peacemakers.
              </p>
              
              <p>
                Today, examine your heart for any areas where you need peace or reconciliation. 
                Ask Jesus to help you forgive those who have hurt you and to seek forgiveness where needed. 
                Pray for peace in the world and commit yourself to being an instrument of peace.
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
            May the Sacred Heart of Jesus grant you His peace and help you to be an instrument of reconciliation. 
            May His peace reign in your heart and may you bring peace to all those you encounter. 
            Trust in His promise to give you peace that surpasses all understanding.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Sacred Heart of Jesus Novena - Day 7: Intercession" 
            url="/novenas/sacred-heart/day-7"
            excerpt="Join me in praying the Sacred Heart of Jesus Novena - Day 7 focusing on Intercession." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sacred-heart/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Gratitude
          </Link>
          
          <Link 
            href="/novenas/sacred-heart/day-8"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 8: Transformation →
          </Link>
        </div>
      </div>
    </div>
  )
} 