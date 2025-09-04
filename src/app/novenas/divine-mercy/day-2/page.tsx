import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Day 2: The Souls of Priests and Religious',
  description: 'Pray the Divine Mercy Novena - Day 2 focusing on The Souls of Priests and Religious. Includes complete prayer text, reflection, and tips for a powerful novena.',
  keywords: [
    'divine mercy novena day 2',
    'divine mercy prayer priests religious',
    'day 2 divine mercy prayer',
    'priests and religious prayer',
    'catholic novena divine mercy',
    'divine mercy priests religious'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Day 2: The Souls of Priests and Religious',
    description: 'Pray the Divine Mercy Novena - Day 2 focusing on The Souls of Priests and Religious. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy/day-2',
  },
  twitter: {
    title: 'Divine Mercy Novena - Day 2: The Souls of Priests and Religious',
    description: 'Pray the Divine Mercy Novena - Day 2 focusing on The Souls of Priests and Religious. Complete prayer text and reflection.',
  }
}

export default function DivineMercyNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena – Day 2: The Souls of Priests and Religious
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for the souls of priests and religious, asking Jesus to strengthen them in their vocation and ministry.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/divine-mercy" className="hover:text-gray-700">Divine Mercy Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: The Souls of Priests and Religious</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Divine Mercy Novena, we pray for the souls of priests and religious. 
            These are the shepherds of the Church, the ones who have dedicated their lives to serving God and His people. 
            We ask Jesus to strengthen them in their vocation and to help them be faithful to their calling.
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
                Most Merciful Jesus, from whom comes all that is good, increase Your grace in men and women consecrated to Your service, 
                that they may perform worthy works of mercy; and that all who see them may glorify the Father of Mercy who is in heaven.
              </p>
              
              <p className="mb-6">
                <strong>Prayer for Priests and Religious:</strong><br/>
                Eternal Father, turn Your merciful gaze upon the company of chosen ones in Your vineyard - upon the souls of priests and religious; 
                and endow them with the strength of Your blessing. For the love of the Heart of Your Son in which they are enfolded, 
                impart to them Your power and light, that they may be able to guide others in the way of salvation and with one voice sing praise to Your boundless mercy for ages without end. Amen.
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Prayer to the Divine Mercy:</strong><br/>
                Jesus, I trust in You. Help me to pray for priests and religious, that they may be faithful to their vocation 
                and be instruments of Your mercy in the world. Amen.
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
                Priests and religious have a special role in the Church. They are called to be shepherds, 
                to guide the flock, to administer the sacraments, and to be witnesses of God's love and mercy. 
                Their vocation is both beautiful and challenging, and they need our prayers and support.
              </p>
              
              <p className="mb-4">
                When we pray for priests and religious, we are asking God to strengthen them in their vocation, 
                to help them be faithful to their calling, and to give them the grace they need to serve others. 
                We are also asking Him to protect them from the temptations and challenges they face in their ministry.
              </p>
              
              <p>
                Today, let us pray especially for the priests and religious in our lives - our parish priests, 
                the religious sisters and brothers we know, and all those who have dedicated their lives to serving God. 
                Let us ask Jesus to bless them abundantly and to help them be faithful instruments of His mercy.
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
            May the Divine Mercy of Jesus strengthen all priests and religious in their vocation. 
            May they be faithful instruments of His mercy and love, guiding others to Him. 
            Let us continue to pray for them and support them in their ministry.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Divine Mercy Novena - Day 2: Hope" 
            url="/novenas/divine-mercy/day-2"
            excerpt="Join me in praying the Divine Mercy Novena - Day 2 focusing on Hope." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/divine-mercy/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: All Mankind
          </Link>
          
          <Link 
            href="/novenas/divine-mercy/day-3"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 3: All Devout and Faithful Souls →
          </Link>
        </div>
      </div>
    </div>
  )
} 