import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Confession - Day 3: Overcoming Fear',
  description: 'Pray the Novena for First Confession - Day 3 focusing on Overcoming Fear. Join in praying for those preparing for their First Confession.',
  keywords: [
    'novena for first confession day 3',
    'first confession prayer day 3',
    'overcoming fear first confession prayer',
    'first confession novena day 3',
    'catholic first confession prayer day 3',
    'first confession overcoming fear novena day 3',
    'prayer for first confession day 3',
    'first confession novena prayer day 3',
    'catholic novena first confession day 3',
    'first confession overcoming fear prayer day 3'
  ],
  openGraph: {
    title: 'Novena for First Confession - Day 3: Overcoming Fear',
    description: 'Pray the Novena for First Confession - Day 3 focusing on Overcoming Fear. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/first-confession/day-3',
  },
  twitter: {
    title: 'Novena for First Confession - Day 3: Overcoming Fear',
    description: 'Pray the Novena for First Confession - Day 3 focusing on Overcoming Fear. Complete prayer text and reflection.',
  }
}

export default function NovenaForFirstConfessionDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Confession – Day 3: Overcoming Fear
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for First Confession to prepare for receiving the sacrament of confession for the first time.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-confession" className="hover:text-gray-700">Novena for First Confession</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Overcoming Fear</h2>
          <p className="text-gray-700 leading-relaxed">
            Helping those struggling with fear or anxiety about their upcoming First Confession.
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
                Dear Lord, we thank You and praise You for giving us the sacrament of confession. We ask You to bless and prepare all who will soon make their First Confession.
              </p>
              
              <p className="mb-6">
                <strong>Prayer of Overcoming Fear:</strong><br/>
                It can seem very difficult to say our sins out loud in front of a priest. Many people struggle with fear at the thought of going to confession. But we know that this sacrament is a great gift from You and that You bring forgiveness through it.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please help all people who are preparing to make their First Confession, and we particularly ask today that You assist all who are struggling with fear or anxiety over their upcoming First Confession.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Fear not, for I am with you; be not dismayed, for I am your God." (Isaiah 41:10)"
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to always turn to You in moments of difficulty. Give us the grace to submit ourselves to You even when we are afraid or anxious. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for those who are afraid of going to confession. Fear is a natural human emotion, but God tells us not to be afraid. The sacrament of confession is a gift of mercy, not a source of judgment. God is always ready to forgive and welcome us back.
              </p>
              
              <p className="mb-4">
                As we continue this novena, let us ask God to help us grow in overcoming fear. 
                Let us ask Him to give us the grace we need to prepare well for our First Confession 
                and to approach this sacrament with the right disposition of heart.
              </p>
              
              <p className="mb-4">
                Overcoming Fear is essential for a good confession. We must be willing to admit our faults 
                honestly and without excuses. This virtue allows us to receive God's grace and forgiveness 
                with open hearts.
              </p>
              
              <p>
                Remember that God is always ready to help us grow in virtue. He wants us to receive His 
                forgiveness and mercy, and He will guide us through the preparation process if we ask for His help.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Prepare your heart and mind for the sacrament of confession. 
                Reflect on your sins and ask God for the grace of true repentance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach the sacrament with humility and honesty. 
                Remember that God is merciful and ready to forgive.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who prepare for His sacraments.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the sacrament of confession. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, help us to grow in overcoming fear. Give us the grace to understand 
            the importance of this virtue and to approach the sacrament of confession with humility and trust. 
            May we always remember Your mercy and love as we prepare to receive Your forgiveness. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for First Confession - Day 3: Overcoming Fear" 
            url="/novenas/first-confession/day-3"
            excerpt="Join me in praying the Novena for First Confession - Day 3 focusing on Overcoming Fear." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/first-confession/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Adult Preparation
          </Link>
          <Link
            href="/novenas/first-confession/day-4"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 4: Frequent Confession →
          </Link>
        </div>
      </div>
    </div>
  )
}