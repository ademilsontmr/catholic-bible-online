import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Someone in a Coma - Day 1: Injury',
  description: 'Pray the Novena for Someone in a Coma - Day 1 focusing on Injury. Join in praying the traditional novena to seek healing for those in comas.',
  keywords: [
    'novena for someone in a coma day 1',
    'coma novena day 1',
    'coma prayer injury',
    'healing novena day 1',
    'coma recovery prayer day 1',
    'day 1 coma novena',
    'injury coma prayer',
    'coma healing novena injury'
  ],
  openGraph: {
    title: 'Novena for Someone in a Coma - Day 1: Injury',
    description: 'Pray the Novena for Someone in a Coma - Day 1 focusing on Injury. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/someone-in-coma/day-1',
  },
  twitter: {
    title: 'Novena for Someone in a Coma - Day 1: Injury',
    description: 'Pray the Novena for Someone in a Coma - Day 1 focusing on Injury. Join in praying the traditional novena.',
  }
}

export default function SomeoneInComaNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Someone in a Coma – Day 1: Injury
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Injury</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Someone in a Coma, we pray for those who are in comas due to injuries and accidents.
            We ask God to restore health to all who have been seriously injured and are now unconscious.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

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
                There are many ways we might suffer physically in our fallen world. Some severe injuries can put people into comas, and a lot of medical care becomes necessary for them. You are able to restore to health even those who have been injured so seriously as to be in a coma.
              </p>

              <p className="mb-6">
                Please help all people who are in comas, and we particularly ask today that You restore to health all people who are in a coma because of an injury.
              </p>

              <p className="mb-6">
                Help us to always rely on You for all that we need in our lives. Give us the grace to submit ourselves to You even in times of great difficulty.
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
                Today we pray for those who are in comas due to injuries and accidents. Injuries can happen suddenly and unexpectedly, 
                changing lives in an instant. When someone we love is injured and falls into a coma, it can be devastating for families and friends.
              </p>

              <p className="mb-4">
                The human body is fragile, and serious injuries can cause the brain to shut down as a protective mechanism. 
                This is what we call a coma - a state of unconsciousness where the person is alive but not responsive to their environment.
              </p>

              <p className="mb-4">
                In these difficult situations, we must remember that God is the ultimate healer. He created our bodies and knows every cell, 
                every function. He can restore health even when medical science seems to have reached its limits.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to help us trust in His healing power. Let us pray not only for the physical healing 
                of those in comas, but also for the spiritual strength of their families and caregivers.
              </p>

              <p>
                Remember that God never abandons us, even in our darkest moments. He is always present, always listening, 
                and always ready to help us in our time of need.
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
            Dear Lord, help us to trust in Your healing power and to pray with faith for those who are in comas due to injuries. 
            Give us the grace to rely on You in all circumstances and to never lose hope in Your mercy and love. 
            May we always remember that You are the ultimate healer and that nothing is impossible for You. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Someone in a Coma - Day 1: Injury" 
            url="/novenas/someone-in-coma/day-1"
            excerpt="Join me in praying the Novena for Someone in a Coma - Day 1 focusing on Injury." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/someone-in-coma"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/someone-in-coma/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Illness →
          </Link>
        </div>
      </div>
    </div>
  )
} 