import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 2: Long-term Suffering',
  description: 'Pray the Novena for Chronic Illness - Day 2 focusing on Long-term Suffering. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 2',
    'chronic illness novena day 2',
    'chronic illness prayer day 2',
    'novena for chronic illness prayer long term suffering',
    'day 2 chronic illness novena',
    'long term suffering chronic illness prayer',
    'chronic illness novena long term suffering',
    'chronic illness prayer long term suffering'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 2: Long-term Suffering',
    description: 'Pray the Novena for Chronic Illness - Day 2 focusing on Long-term Suffering. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-2',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 2: Long-term Suffering',
    description: 'Pray the Novena for Chronic Illness - Day 2 focusing on Long-term Suffering. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 2: Long-term Suffering
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Long-term Suffering</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Chronic Illness, we pray for those who have been suffering 
            from chronic illness for a long time. We ask God to give them the grace and strength they need 
            to continue enduring their symptoms with patience and trust.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.
              </p>

              <p className="mb-6">
                Long periods of suffering can be very difficult to endure. Those who have suffered from chronic illness for a long time are in great need of grace and strength as they continue to endure the symptoms of their illness.
              </p>

              <p className="mb-6">
                Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those who have been suffering from a chronic illness for a long time!
              </p>

              <p className="mb-6">
                Help us to rely on You more fully in our lives. Help us to grow closer to You each day, at every opportunity.
              </p>

              <p className="mb-6">
                <strong>And I especially ask in this novena (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
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
                Today we pray for those who have been suffering from chronic illness for a long time. 
                Long-term suffering can be incredibly challenging and can test one's faith and endurance.
              </p>

              <p className="mb-4">
                Those who have been dealing with chronic illness for months or years often face unique challenges. 
                They may have tried many treatments, seen numerous doctors, and experienced both hope and disappointment. 
                The initial shock of diagnosis has passed, but the daily reality of living with illness continues.
              </p>

              <p className="mb-4">
                These individuals need God's grace to continue enduring their symptoms with patience and trust. 
                They need strength to face each day, wisdom to make good decisions about their health, 
                and hope to keep going even when progress seems slow or non-existent.
              </p>

              <p className="mb-4">
                As we pray for them today, let us remember that God understands the weariness that comes with long-term suffering. 
                He knows how difficult it can be to maintain hope and trust when the suffering seems endless. 
                He wants to give them the grace they need to persevere and to find meaning and purpose in their suffering.
              </p>

              <p>
                Let us ask God to help all those who have been suffering from chronic illness for a long time 
                to find strength in His love, comfort in His presence, and hope in His promises.
              </p>
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
            Dear Lord, we thank You for hearing our prayers today. Help all those who have been suffering 
            from chronic illness for a long time to find the grace and strength they need to continue enduring. 
            Give them patience, wisdom, and hope as they face each day. May they find comfort in knowing 
            that You are with them in their suffering and that You will give them the strength they need to persevere. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chronic Illness - Day 2: Long-term Suffering" 
            url="/novenas/chronic-illness/day-2"
            excerpt="Join me in praying the Novena for Chronic Illness - Day 2 focusing on Long-term Suffering." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Diagnosis
          </Link>
          
          <Link 
            href="/novenas/chronic-illness/day-3"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 3: Medical Professionals →
          </Link>
        </div>
      </div>
    </div>
  )
} 