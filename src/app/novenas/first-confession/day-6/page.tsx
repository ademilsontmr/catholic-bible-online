import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Confession - Day 6: True Repentance',
  description: 'Pray the Novena for First Confession - Day 6 focusing on True Repentance. Join in praying for those preparing for their First Confession.',
  keywords: [
    'novena for first confession day 6',
    'first confession prayer day 6',
    'true repentance first confession prayer',
    'first confession novena day 6',
    'catholic first confession prayer day 6',
    'first confession true repentance novena day 6',
    'prayer for first confession day 6',
    'first confession novena prayer day 6',
    'catholic novena first confession day 6',
    'first confession true repentance prayer day 6'
  ],
  openGraph: {
    title: 'Novena for First Confession - Day 6: True Repentance',
    description: 'Pray the Novena for First Confession - Day 6 focusing on True Repentance. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/first-confession/day-6',
  },
  twitter: {
    title: 'Novena for First Confession - Day 6: True Repentance',
    description: 'Pray the Novena for First Confession - Day 6 focusing on True Repentance. Complete prayer text and reflection.',
  }
}

export default function NovenaForFirstConfessionDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Confession – Day 6: True Repentance
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: True Repentance</h2>
          <p className="text-gray-700 leading-relaxed">
            Developing true repentance and sorrow for sins committed against God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>
          
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
                <strong>Prayer of True Repentance:</strong><br/>
                We all commit sins, even when we try very hard to cease offending You. You know our weakness and inability, but You are always ready to forgive us when we come to You in true repentance.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please help all people who are preparing to make their First Confession, and we particularly ask today that You help all preparing to make their First Confession to be truly repentant of their sins.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""The sacrifice acceptable to God is a broken spirit; a broken and contrite heart, O God, you will not despise." (Psalm 51:17)"
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to grow to a deeper devotion to You each day of our lives. Give us the grace to make our relationship with You our top priority in life. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for true repentance. Repentance is not just feeling sorry for getting caught, but genuine sorrow for having offended God. True repentance involves a firm purpose of amendment and a desire to avoid sin in the future.
              </p>
              
              <p className="mb-4">
                As we continue this novena, let us ask God to help us grow in true repentance. 
                Let us ask Him to give us the grace we need to prepare well for our First Confession 
                and to approach this sacrament with the right disposition of heart.
              </p>
              
              <p className="mb-4">
                True Repentance is essential for a good confession. We must be willing to admit our faults 
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
            Dear Lord, help us to grow in true repentance. Give us the grace to understand 
            the importance of this virtue and to approach the sacrament of confession with humility and trust. 
            May we always remember Your mercy and love as we prepare to receive Your forgiveness. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for First Confession - Day 6: True Repentance"
          text="Join me in praying the Novena for First Confession - Day 6 focusing on True Repentance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/first-confession/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Clear Recollection
          </Link>
          <Link
            href="/novenas/first-confession/day-7"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 7: Humility →
          </Link>
        </div>
      </div>
    </div>
  )
}