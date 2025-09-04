import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 4: Discouragement',
  description: 'Pray the Novena for Chronic Illness - Day 4 focusing on Discouragement. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 4',
    'chronic illness novena day 4',
    'chronic illness prayer day 4',
    'novena for chronic illness prayer discouragement',
    'day 4 chronic illness novena',
    'discouragement chronic illness prayer',
    'chronic illness novena discouragement',
    'chronic illness prayer discouragement'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 4: Discouragement',
    description: 'Pray the Novena for Chronic Illness - Day 4 focusing on Discouragement. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-4',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 4: Discouragement',
    description: 'Pray the Novena for Chronic Illness - Day 4 focusing on Discouragement. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 4: Discouragement
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Chronic Illness to seek God's grace and assistance for those suffering from chronic illness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/chronic-illness" className="hover:text-gray-700">Novena for Chronic Illness</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Discouragement</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for those who are becoming discouraged about their condition.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.</p>
              <p className="mb-6">Chronic illness can be a very difficult burden to bear. Those who suffer greatly from chronic illness and who have little expectation of relief can become very discouraged about their condition.</p>
              <p className="mb-6">Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those suffering from chronic illness who are becoming discouraged about their condition!</p>
              <p className="mb-6">Help us to rely on You for strength in all the trials we face in our lives. Help us to unite ourselves more fully to You each day.</p>
              <p className="mb-6">And I especially ask in this novena (mention your intentions here).</p>
              <p className="mb-6">Lord, hear our prayers!</p>
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray for those who are becoming discouraged about their condition. Discouragement is a common and understandable response to chronic illness, especially when progress is slow or non-existent.</p>
              <p className="mb-4">Those who are discouraged may feel hopeless about their future, frustrated with their lack of progress, or overwhelmed by the daily challenges they face. They may question whether their suffering has any meaning or purpose, and they may struggle to find hope in their situation.</p>
              <p className="mb-4">These individuals need God's grace to overcome their discouragement and to find hope and meaning in their suffering. They need strength to continue fighting, wisdom to make good decisions, and comfort to know that they are not alone.</p>
              <p className="mb-4">As we pray for them today, let us remember that God understands the pain of discouragement. He knows how difficult it can be to maintain hope when the suffering seems endless. He wants to help them find meaning and purpose in their suffering and to give them the strength they need to persevere.</p>
              <p className="mb-4">Let us ask God to help all those who are discouraged about their chronic illness to find hope in His love, comfort in His presence, and strength in His promises.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all those who suffer from chronic illness 
            to find the grace and strength they need. Give them hope, comfort, and peace in their difficult journey. 
            May they find meaning and purpose in their suffering and grow closer to You each day. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chronic Illness - Day 4: Discouragement" 
            url="/novenas/chronic-illness/day-4"
            excerpt="Join me in praying the Novena for Chronic Illness - Day 4 focusing on Discouragement." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Medical Professionals
          </Link>
          
          
          <Link 
            href="/novenas/chronic-illness/day-5"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 5: Discouragement →
          </Link>
          
        </div>
      </div>
    </div>
  )
}