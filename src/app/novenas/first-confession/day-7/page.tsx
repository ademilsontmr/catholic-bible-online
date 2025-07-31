import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Confession - Day 7: Humility',
  description: 'Pray the Novena for First Confession - Day 7 focusing on Humility. Join in praying for those preparing for their First Confession.',
  keywords: [
    'novena for first confession day 7',
    'first confession prayer day 7',
    'humility first confession prayer',
    'first confession novena day 7',
    'catholic first confession prayer day 7',
    'first confession humility novena day 7',
    'prayer for first confession day 7',
    'first confession novena prayer day 7',
    'catholic novena first confession day 7',
    'first confession humility prayer day 7'
  ],
  openGraph: {
    title: 'Novena for First Confession - Day 7: Humility',
    description: 'Pray the Novena for First Confession - Day 7 focusing on Humility. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/first-confession/day-7',
  },
  twitter: {
    title: 'Novena for First Confession - Day 7: Humility',
    description: 'Pray the Novena for First Confession - Day 7 focusing on Humility. Complete prayer text and reflection.',
  }
}

export default function NovenaForFirstConfessionDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Confession – Day 7: Humility
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Humility</h2>
          <p className="text-gray-700 leading-relaxed">
            Growing in humility needed to make a good and honest confession.
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
                Dear Lord, we thank You and praise You for giving us the sacrament of confession. We ask You to bless and prepare all who will soon make their First Confession.
              </p>
              
              <p className="mb-6">
                <strong>Prayer of Humility:</strong><br/>
                It is not always easy to confess our sins aloud in front of a priest as You call us to do in the sacrament of confession. Doing so can require great humility. You can help us to grow in the humility we need to make a good confession.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please help all people who are preparing to make their First Confession, and we particularly ask today that You help all preparing to make their First Confession to grow in humility.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Humble yourselves before the Lord, and he will exalt you." (James 4:10)"
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to grow in all the virtues we need for our holiness. Give us the grace to dedicate ourselves more fully to You each day of our lives. And we especially ask in this novena for (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for humility. Humility is essential for a good confession. We must be willing to admit our faults honestly and without excuses. Humility allows us to receive God's grace and forgiveness with open hearts.
              </p>
              
              <p className="mb-4">
                As we continue this novena, let us ask God to help us grow in humility. 
                Let us ask Him to give us the grace we need to prepare well for our First Confession 
                and to approach this sacrament with the right disposition of heart.
              </p>
              
              <p className="mb-4">
                Humility is essential for a good confession. We must be willing to admit our faults 
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
            Dear Lord, help us to grow in humility. Give us the grace to understand 
            the importance of this virtue and to approach the sacrament of confession with humility and trust. 
            May we always remember Your mercy and love as we prepare to receive Your forgiveness. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for First Confession - Day 7: Humility"
          text="Join me in praying the Novena for First Confession - Day 7 focusing on Humility."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link
            href="/novenas/first-confession/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: True Repentance
          </Link>
          <Link
            href="/novenas/first-confession/day-8"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 8: Submission to God →
          </Link>
        </div>
      </div>
    </div>
  )
}