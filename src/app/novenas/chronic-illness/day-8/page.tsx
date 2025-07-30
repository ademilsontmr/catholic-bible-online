import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 8: End of Life',
  description: 'Pray the Novena for Chronic Illness - Day 8 focusing on End of Life. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 8',
    'chronic illness novena day 8',
    'chronic illness prayer day 8',
    'novena for chronic illness prayer end of life',
    'day 8 chronic illness novena',
    'end of life chronic illness prayer',
    'chronic illness novena end of life',
    'chronic illness prayer end of life'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 8: End of Life',
    description: 'Pray the Novena for Chronic Illness - Day 8 focusing on End of Life. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-8',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 8: End of Life',
    description: 'Pray the Novena for Chronic Illness - Day 8 focusing on End of Life. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 8: End of Life
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: End of Life</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for those who are dying from chronic illness.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.<br/>Amen.</p>
              <p className="mb-6">Dear Lord, we thank You and praise You for the many ways You have assisted us throughout the trials and sufferings of our lives. We humbly ask You to pour out Your grace and assistance on all those who suffer from a chronic illness.</p>
              <p className="mb-6">Each of us will eventually come to the end of our lives on earth. Many people who have endured suffering from chronic illness will meet their deaths as a result of that illness. Those who are dying from chronic illness are in need of a lot of grace and strength.</p>
              <p className="mb-6">Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those who are dying from chronic illness!</p>
              <p className="mb-6">Help us to prepare each day to meet You at the end of our lives. Help us to live our lives virtuously out of love for You.</p>
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
              <p className="mb-4">Today we pray for those who are dying from chronic illness. This is perhaps the most difficult aspect of chronic illness - when it leads to the end of life.</p>
              <p className="mb-4">Those who are dying from chronic illness face unique challenges. They may be dealing with pain, fear, and uncertainty about what comes next. They may be concerned about their loved ones and how they will cope after their death. They may be struggling to find meaning and purpose in their final days.</p>
              <p className="mb-4">These individuals need God's grace to face death with peace, courage, and trust. They need strength to endure their final sufferings, wisdom to make important decisions about their care, and comfort to know that they are not alone.</p>
              <p className="mb-4">As we pray for them today, let us remember that death is a natural part of life, and that God is with us even in our final moments. He wants to help those who are dying to find peace and comfort, and to prepare them for their eternal home.</p>
              <p className="mb-4">Let us ask God to help all those who are dying from chronic illness to face death with faith, hope, and love. May they find comfort in knowing that they are going to their eternal home.</p>
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
          title="Novena for Chronic Illness - Day 8: End of Life"
          text="Join me in praying the Novena for Chronic Illness - Day 8 focusing on End of Life."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Union with Christ
          </Link>
          
          
          <Link 
            href="/novenas/chronic-illness/day-9"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 9: End of Life →
          </Link>
          
        </div>
      </div>
    </div>
  )
}