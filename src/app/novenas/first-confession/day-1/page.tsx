import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Confession - Day 1: Preparation',
  description: 'Pray the Novena for First Confession - Day 1 focusing on Preparation. Join in praying for children and adults preparing for their First Confession.',
  keywords: [
    'novena for first confession day 1',
    'first confession prayer day 1',
    'preparation first confession prayer',
    'first confession novena day 1',
    'catholic first confession prayer day 1',
    'first confession preparation novena day 1',
    'prayer for first confession day 1',
    'first confession novena prayer day 1',
    'catholic novena first confession day 1',
    'first confession preparation prayer day 1'
  ],
  openGraph: {
    title: 'Novena for First Confession - Day 1: Preparation',
    description: 'Pray the Novena for First Confession - Day 1 focusing on Preparation. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/first-confession/day-1',
  },
  twitter: {
    title: 'Novena for First Confession - Day 1: Preparation',
    description: 'Pray the Novena for First Confession - Day 1 focusing on Preparation. Complete prayer text and reflection.',
  }
}

export default function NovenaForFirstConfessionDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Confession – Day 1: Preparation
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Preparation</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for First Confession, we pray for children and adults preparing 
            for their First Confession. We ask God to bless and prepare all who will soon make their First Confession 
            with His grace and guidance.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for giving us the sacrament of confession. 
                We ask You to bless and prepare all who will soon make their First Confession.
              </p>
              
              <p className="mb-6">
                <strong>Prayer of Preparation:</strong><br/>
                Preparation to receive the sacrament of confession for the first time can be a very significant 
                time in one's life. As children prepare to make their First Confession, they are in great need 
                of Your grace to be able to begin a lifelong habit of frequent confession and of returning to 
                You at each instance of sin.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please help all people who are preparing to make their First Confession, and we particularly 
                ask today that You bless all children who will soon make this sacrament for the first time.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Come to me, all you who are weary and burdened, and I will give you rest." (Matthew 11:28)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to grow in union with You each day of our lives. Give us the grace to seek deeper 
                holiness at every opportunity. And we especially ask in this novena for (mention your intentions here). 
                Lord, hear our prayers!
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
                Today we pray for preparation for the sacrament of confession. Preparation is essential 
                for receiving any sacrament worthily and with the proper disposition.
              </p>
              
              <p className="mb-4">
                Jesus invites us to come to Him when we are weary and burdened, promising to give us rest. 
                The sacrament of confession is one of the ways He fulfills this promise, offering us 
                forgiveness and peace for our souls.
              </p>
              
              <p className="mb-4">
                As we begin this novena, let us ask God to help us prepare well for our First Confession. 
                Let us ask Him to give us the grace to understand the importance of this sacrament and 
                to approach it with the right disposition of heart.
              </p>
              
              <p className="mb-4">
                Preparation involves both spiritual and practical aspects. We need to examine our conscience, 
                reflect on our sins, and ask God for the grace of true repentance. We also need to understand 
                what the sacrament is and how to receive it properly.
              </p>
              
              <p>
                Remember that God is always ready to help us prepare. He wants us to receive His forgiveness 
                and mercy, and He will guide us through the preparation process if we ask for His help.
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
            Dear Lord, help us to prepare well for our First Confession. Give us the grace to understand 
            the importance of this sacrament and to approach it with humility and trust. May we always 
            remember Your mercy and love as we prepare to receive Your forgiveness. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for First Confession - Day 1: Preparation" 
            url="/novenas/first-confession/day-1"
            excerpt="Join me in praying the Novena for First Confession - Day 1 focusing on Preparation." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/first-confession"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/first-confession/day-2"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 2: Adult Preparation →
          </Link>
        </div>
      </div>
    </div>
  )
} 