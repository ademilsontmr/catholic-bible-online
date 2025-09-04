import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Day 4: Those Who Do Not Believe in God',
  description: 'Pray the Divine Mercy Novena - Day 4 focusing on Those Who Do Not Believe in God. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'divine mercy novena day 4',
    'divine mercy prayer unbelievers',
    'day 4 divine mercy prayer',
    'those who do not believe in god prayer',
    'catholic novena divine mercy',
    'divine mercy unbelievers'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Day 4: Those Who Do Not Believe in God',
    description: 'Pray the Divine Mercy Novena - Day 4 focusing on Those Who Do Not Believe in God. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy/day-4',
  },
  twitter: {
    title: 'Divine Mercy Novena - Day 4: Those Who Do Not Believe in God',
    description: 'Pray the Divine Mercy Novena - Day 4 focusing on Those Who Do Not Believe in God. Complete prayer text and reflection.',
  }
}

export default function DivineMercyNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena – Day 4: Those Who Do Not Believe in God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for those who do not believe in God, asking Jesus to touch their hearts and lead them to faith.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/divine-mercy" className="hover:text-gray-700">Divine Mercy Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Those Who Do Not Believe in God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Divine Mercy Novena, we pray for those who do not believe in God. 
            These are souls who have not yet come to know God's love and mercy, who may be searching for meaning and truth. 
            We ask Jesus to touch their hearts and to lead them to faith in Him.
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
                Most Compassionate Jesus, You are the Light of the whole world. Receive into the abode of Your Most Compassionate Heart 
                the souls of those who do not believe in God and of those who as yet do not know You. 
                Let the rays of Your grace enlighten them that they, too, together with us, may extol Your wonderful mercy; 
                and do not let them escape from the abode which is Your Most Compassionate Heart.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Unbelievers:</strong><br/>
                Eternal Father, turn Your merciful gaze upon the souls of those who do not believe in You, 
                and of those who as yet do not know You, but who are enclosed in the Most Compassionate Heart of Jesus. 
                Draw them to the light of the Gospel. These souls do not know what great happiness it is to love You. 
                Grant that they, too, may extol the generosity of Your mercy for endless ages. Amen.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Divine Mercy:</strong><br/>
                Jesus, I trust in You. Help me to pray for those who do not believe in God, that they may come to know Your love and mercy. 
                May I be an instrument of Your mercy in leading others to You. Amen.
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
                There are many people in the world who do not believe in God or who have not yet come to know Him. 
                Some may be searching for meaning and truth, while others may have been hurt or disillusioned by religion. 
                Whatever their situation, Jesus loves them and wants them to come to know His mercy and love.
              </p>
              
              <p className="mb-4">
                When we pray for unbelievers, we are asking God to touch their hearts and to lead them to faith. 
                We are asking Him to remove the obstacles that prevent them from believing and to give them the grace 
                to recognize His presence in their lives. We are also asking Him to help us be witnesses of His love to them.
              </p>
              
              <p>
                Today, let us pray for all those who do not believe in God - our friends, family members, colleagues, 
                and all those we encounter in our daily lives. Let us ask Jesus to touch their hearts and to help us 
                be instruments of His mercy in leading them to Him.
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
                What do you hope to receive from the Divine Mercy? What areas of your life need His guidance?
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
                End each day's prayer with thanksgiving. Thank Jesus for His mercy and for the opportunity 
                to grow closer to Him through this novena.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Divine Mercy of Jesus touch the hearts of all those who do not believe in God. 
            May they come to know His love and mercy, and may we be instruments of His mercy in leading them to Him. 
            Let us pray with confidence, knowing that nothing is impossible for God.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Divine Mercy Novena - Day 4: Prayer" 
            url="/novenas/divine-mercy/day-4"
            excerpt="Join me in praying the Divine Mercy Novena - Day 4 focusing on Prayer." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/divine-mercy/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: All Devout and Faithful Souls
          </Link>
          
          <Link 
            href="/novenas/divine-mercy/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Those Who Have Separated from the Church →
          </Link>
        </div>
      </div>
    </div>
  )
} 