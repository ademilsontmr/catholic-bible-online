import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Healing from Childhood Trauma Novena - Day 1: Healing from Abuse',
  description: 'Pray the Healing from Childhood Trauma Novena - Day 1 focusing on healing from abuse. Join in praying for strength and restoration from childhood wounds.',
  keywords: [
    'healing from childhood trauma novena day 1',
    'childhood trauma healing prayer day 1',
    'day 1 childhood trauma novena',
    'healing from abuse prayer',
    'childhood abuse healing novena'
  ],
  openGraph: {
    title: 'Healing from Childhood Trauma Novena - Day 1: Healing from Abuse',
    description: 'Pray the Healing from Childhood Trauma Novena - Day 1 focusing on healing from abuse.',
    url: 'https://catholicbibleonline.com/novenas/healing-from-childhood-trauma/day-1',
  },
  twitter: {
    title: 'Healing from Childhood Trauma Novena - Day 1: Healing from Abuse',
    description: 'Pray the Healing from Childhood Trauma Novena - Day 1 focusing on healing from abuse.',
  }
}

export default function HealingFromChildhoodTraumaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Healing from Childhood Trauma Novena – Day 1: Healing from Abuse
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Healing from Childhood Trauma Novena to seek God's mercy and healing grace for those suffering from childhood wounds.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/healing-from-childhood-trauma" className="hover:text-gray-700">Healing from Childhood Trauma</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Healing from Abuse</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Healing from Childhood Trauma Novena, we pray for those who have experienced abuse during their childhood. 
            Abuse can leave deep emotional and spiritual wounds that affect every aspect of life. Today we ask God to pour out His healing grace 
            on all who have suffered from abuse and to help them find peace and restoration.
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

              <p className="mb-4">
                Dear Lord, we thank You and praise You for Your infinite mercy and love that never fails us. 
                We come before You today with humble hearts, asking for Your divine assistance for all who are 
                struggling with the deep wounds of childhood trauma.
              </p>

              <p className="mb-4">
                In our fallen world, there are many ways we experience trauma, but the wounds inflicted during 
                childhood can be especially devastating. These wounds often continue to affect us for many years, 
                shaping our thoughts, emotions, and relationships. Yet we know that You, O Lord, are the Divine 
                Physician who can heal all wounds and restore all things.
              </p>

              <p className="mb-4">
                Today we particularly lift up to You all who have experienced trauma from abuse. Lord, You know 
                the pain they carry, the fear that lingers, and the trust that has been broken. We ask You to 
                pour out Your healing grace upon them, to touch their wounded hearts with Your gentle love, 
                and to begin the work of restoration in their lives.
              </p>

              <p className="mb-4">
                Help us to always rely on You for all that we need in our lives. Give us the grace to surrender 
                all things to You, even in the midst of our deepest suffering. Teach us to trust in Your perfect 
                timing and Your infinite wisdom.
              </p>

              <p className="mb-6">
                <strong>I especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers and bring healing to all who suffer from childhood trauma!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we focus on healing from abuse, one of the most painful forms of childhood trauma. 
                Abuse can take many forms - physical, emotional, sexual, or spiritual - and each type leaves 
                its own unique scars on the soul.
              </p>
              <p className="mb-4">
                As we pray today, let us remember that God never intended for any child to suffer abuse. 
                He weeps with those who weep and longs to bring healing to every wounded heart. The journey 
                of healing from abuse is often long and difficult, but with God's grace, it is possible.
              </p>
              <p className="mb-4">
                Consider today how God might be calling you to be an instrument of His healing love. 
                Perhaps you can offer a kind word, a listening ear, or simply your prayers for someone 
                who is struggling with the effects of childhood abuse.
              </p>
              <p className="mb-4">
                Remember that healing is a process, and God works in His own time. Trust that He is 
                working even when you cannot see the results. His love is more powerful than any wound 
                we have suffered.
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
                Trust completely in God's healing power and His ability to restore you.
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
                Thank God for His help and healing grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for Your infinite mercy and love that never fails us. Help us to always rely on You 
            for all that we need in our lives. Give us the grace to surrender all things to You, even in the midst of 
            our deepest suffering. May we always trust in Your healing power and Your perfect timing. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Healing from Childhood Trauma Novena - Day 1: Healing from Abuse" 
            url="/novenas/healing-from-childhood-trauma/day-1"
            excerpt="Join me in praying the Healing from Childhood Trauma Novena - Day 1 focusing on healing from abuse." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/healing-from-childhood-trauma"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/healing-from-childhood-trauma/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Healing from Accidents →
          </Link>
        </div>
      </div>
    </div>
  )
} 