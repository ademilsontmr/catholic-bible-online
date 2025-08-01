import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Someone in a Coma - Day 8: Faith',
  description: 'Pray the Novena for Someone in a Coma - Day 8 focusing on Medically Induced Coma. Join in praying the traditional novena to seek healing for those in comas.',
  keywords: [
    'novena for someone in a coma day 8',
    'coma novena day 8',
    'coma prayer medically induced',
    'healing novena day 8',
    'coma recovery prayer day 8',
    'day 8 coma novena',
    'medically induced coma prayer',
    'coma healing novena medical'
  ],
  openGraph: {
    title: 'Novena for Someone in a Coma - Day 8: Faith',
    description: 'Pray the Novena for Someone in a Coma - Day 8 focusing on Medically Induced Coma. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/someone-in-coma/day-7',
  },
  twitter: {
    title: 'Novena for Someone in a Coma - Day 8: Faith',
    description: 'Pray the Novena for Someone in a Coma - Day 8 focusing on Medically Induced Coma. Join in praying the traditional novena.',
  }
}

export default function SomeoneInComaNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
                      <h1 className="text-4xl font-bold text-black mb-4">
              Novena for Someone in a Coma – Day 8: Faith
            </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Someone in a Coma to seek healing and recovery for those who are unconscious.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/someone-in-coma" className="hover:text-gray-700">Novena for Someone in a Coma</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Novena for Someone in a Coma, we pray for those who are in medically induced comas for treatment.
            We ask God to bring peace and healing to those who are unconscious due to medical procedures.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Dear Lord,</strong> we thank You and praise You for the gift of health. We humbly ask You today to restore to health all who are in comas, if it be Your will.
              </p>

              <p className="mb-6">
                It is not always easy to understand Your will for our lives or to truly believe that You can do all things. In the midst of difficulties and sufferings—even such difficult sufferings as dealing with a loved one in a coma—we should submit our lives to You in faith.
              </p>

              <p className="mb-6">
                Please help all people who are in comas, and we particularly ask today that You help us to grow in the virtue of faith.
              </p>

              <p className="mb-6">
                Help us to always trust in You, even when we do not understand Your plan. Give us the grace to surrender to You more fully at every opportunity.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong>
              </p>

              <p className="mb-6">
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
                Today we pray for growth in the virtue of faith. When someone we love is in a coma, it can be very difficult 
                to understand God's plan or to believe that He can do all things. We may question why this is happening 
                and struggle to trust in God's goodness.
              </p>

              <p className="mb-4">
                Faith is not the absence of doubt, but the choice to trust God even when we don't understand. It is the 
                decision to believe that God is good, that He loves us, and that He has a plan for our lives, even when 
                that plan involves suffering.
              </p>

              <p className="mb-4">
                In these situations, we must remember that God's ways are not our ways. He sees the bigger picture and 
                knows what is best for us. We must choose to trust Him, even when we cannot see the reason for our suffering.
              </p>

              <p className="mb-4">
                As we pray today, let us ask God to increase our faith. Let us ask Him to help us trust in His plan, 
                even when we don't understand it. Let us surrender our lives to Him more fully.
              </p>

              <p>
                Remember that God never abandons us, even in the most difficult circumstances. He is always present, 
                always loving, and always working for our good.
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
                Trust completely in God's healing power and His loving plan.
                Remember that God can do all things, even the impossible.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Healing often requires persistent prayer and trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the person in a coma.
                God wants to help with the particular situation you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His mercy and for the gift of life.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, help us to always trust in You, even when we do not understand Your plan. Give us the grace to surrender 
            to You more fully at every opportunity. May we always remember that Your ways are not our ways and that You see 
            the bigger picture. Help us to grow in faith and trust in Your loving care. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Someone in a Coma - Day 8: Faith"
          text="Join me in praying the Novena for Someone in a Coma - Day 8 focusing on Medically Induced Coma."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/someone-in-coma/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Family Support
          </Link>
          
          <Link 
            href="/novenas/someone-in-coma/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Submission →
          </Link>
        </div>
      </div>
    </div>
  )
} 