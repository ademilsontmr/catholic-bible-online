import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 5: Emotional Support',
  description: 'Pray the Novena for Chronic Illness - Day 5 focusing on Emotional Support. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 5',
    'chronic illness novena day 5',
    'chronic illness prayer day 5',
    'novena for chronic illness prayer emotional support',
    'day 5 chronic illness novena',
    'emotional support chronic illness prayer',
    'chronic illness novena emotional support',
    'chronic illness prayer emotional support'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 5: Emotional Support',
    description: 'Pray the Novena for Chronic Illness - Day 5 focusing on Emotional Support. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-5',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 5: Emotional Support',
    description: 'Pray the Novena for Chronic Illness - Day 5 focusing on Emotional Support. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 5: Emotional Support
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Emotional Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for emotional and mental support for those with chronic illness.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.</p>
              <p className="mb-6">Those who have a chronic illness suffer a lot of physical pain. But often, they suffer emotionally and mentally as well. Those with a chronic illness often need a lot of support and assistance from loved ones.</p>
              <p className="mb-6">Please bless and assist all people who suffer from chronic illness, and we especially ask You today that all who suffer from chronic illness may receive the emotional support they need!</p>
              <p className="mb-6">Help us to grow closer to You each day, even in the midst of sufferings. Help us to take every opportunity to grow in holiness and imitation of You.</p>
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
              <p className="mb-4">Today we pray for emotional and mental support for those with chronic illness. While physical symptoms are often the most obvious aspect of chronic illness, the emotional and mental toll can be equally challenging.</p>
              <p className="mb-4">Those with chronic illness often experience a range of difficult emotions: fear about the future, frustration with limitations, sadness over lost abilities, anxiety about treatments, and loneliness from feeling misunderstood. They may also struggle with depression, anxiety, or other mental health challenges.</p>
              <p className="mb-4">These individuals need emotional support from family, friends, and caregivers. They need understanding, patience, and compassion from those around them. They need people who will listen without judgment, offer comfort without trying to fix everything, and provide practical help when needed.</p>
              <p className="mb-4">As we pray for them today, let us remember that emotional support is a crucial part of healing and coping with chronic illness. God wants to provide this support through the people in their lives, and He wants to give them the grace they need to receive and accept this support.</p>
              <p className="mb-4">Let us ask God to help all those with chronic illness to receive the emotional support they need, and to help their caregivers provide this support with love and compassion.</p>
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
          title="Novena for Chronic Illness - Day 5: Emotional Support"
          text="Join me in praying the Novena for Chronic Illness - Day 5 focusing on Emotional Support."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Discouragement
          </Link>
          
          
          <Link 
            href="/novenas/chronic-illness/day-6"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 6: Emotional Support →
          </Link>
          
        </div>
      </div>
    </div>
  )
}