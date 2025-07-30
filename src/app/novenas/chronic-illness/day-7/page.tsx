import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 7: Union with Christ',
  description: 'Pray the Novena for Chronic Illness - Day 7 focusing on Union with Christ. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 7',
    'chronic illness novena day 7',
    'chronic illness prayer day 7',
    'novena for chronic illness prayer union with christ',
    'day 7 chronic illness novena',
    'union with christ chronic illness prayer',
    'chronic illness novena union with christ',
    'chronic illness prayer union with christ'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 7: Union with Christ',
    description: 'Pray the Novena for Chronic Illness - Day 7 focusing on Union with Christ. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-7',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 7: Union with Christ',
    description: 'Pray the Novena for Chronic Illness - Day 7 focusing on Union with Christ. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 7: Union with Christ
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Union with Christ</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow closer to Christ through sufferings.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.</p>
              <p className="mb-6">Chronic illness can bring a lot of physical and emotional suffering to people. Though such sufferings are often seen as a terrible burden to be avoided whenever possible, these sufferings can also help one to grow in holiness and to grow closer to Jesus.</p>
              <p className="mb-6">Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those who suffer from chronic illness to grow closer to Christ through their sufferings!</p>
              <p className="mb-6">Help us to rely on Your strength through all of the trials of our lives. Help us to seek to grow closer to You each day.</p>
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
              <p className="mb-4">Today we pray for those who suffer from chronic illness to grow closer to Christ through their sufferings. While suffering is never easy, it can be a powerful means of spiritual growth and union with Christ.</p>
              <p className="mb-4">When we suffer, we can unite our sufferings with Christ's sufferings on the cross. We can offer our pain, frustration, and limitations as a prayer for others and as a way of participating in Christ's redemptive work. This can give our suffering meaning and purpose.</p>
              <p className="mb-4">Those who suffer from chronic illness have a unique opportunity to grow in holiness through their daily struggles. They can develop patience, perseverance, trust, and other virtues that are difficult to cultivate in easier circumstances.</p>
              <p className="mb-4">As we pray for them today, let us remember that God can bring good out of even the most difficult situations. He wants to help those who suffer to find meaning and purpose in their suffering and to grow closer to Him through it.</p>
              <p className="mb-4">Let us ask God to help all those who suffer from chronic illness to see their suffering as an opportunity to grow closer to Christ and to participate in His redemptive work.</p>
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
        <ShareButton 
          title="Novena for Chronic Illness - Day 7: Union with Christ"
          text="Join me in praying the Novena for Chronic Illness - Day 7 focusing on Union with Christ."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Poverty
          </Link>
          
          
          <Link 
            href="/novenas/chronic-illness/day-8"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 8: Union with Christ →
          </Link>
          
        </div>
      </div>
    </div>
  )
}