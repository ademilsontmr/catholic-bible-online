import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Someone in a Coma - Day 2: Illness',
  description: 'Pray the Novena for Someone in a Coma - Day 2 focusing on Illness. Join in praying the traditional novena to seek healing for those in comas.',
  keywords: [
    'novena for someone in a coma day 2',
    'coma novena day 2',
    'coma prayer illness',
    'healing novena day 2',
    'coma recovery prayer day 2',
    'day 2 coma novena',
    'illness coma prayer',
    'coma healing novena illness'
  ],
  openGraph: {
    title: 'Novena for Someone in a Coma - Day 2: Illness',
    description: 'Pray the Novena for Someone in a Coma - Day 2 focusing on Illness. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/someone-in-coma/day-2',
  },
  twitter: {
    title: 'Novena for Someone in a Coma - Day 2: Illness',
    description: 'Pray the Novena for Someone in a Coma - Day 2 focusing on Illness. Join in praying the traditional novena.',
  }
}

export default function SomeoneInComaNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Someone in a Coma – Day 2: Illness
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Illness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Someone in a Coma, we pray for those who are in comas due to illness and disease.
            We ask God to restore health to all who have fallen unconscious due to medical conditions.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

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
                Comas can happen for many reasons. Some illnesses and physical ailments can put people into comas. Our health is a great gift from You, and we can suffer a lot when our health is not strong. You can restore the health of all who are in comas because of an illness.
              </p>

              <p className="mb-6">
                Please help all people who are in comas, and we particularly ask today that You restore to health all people who are in a coma because of an illness.
              </p>

              <p className="mb-6">
                Help us to strive to accept all suffering in our lives out of love for You. Give us the grace to grow in holiness in all circumstances.
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
                Today we pray for those who are in comas due to illness and disease. Illness can be a mysterious and frightening experience, 
                especially when it leads to unconsciousness. Many diseases can cause comas - from infections to metabolic disorders, 
                from neurological conditions to organ failure.
              </p>

              <p className="mb-4">
                When someone falls into a coma due to illness, it often means that their body is fighting a serious battle. 
                The coma can be the body's way of protecting itself, allowing it to focus all its energy on healing.
              </p>

              <p className="mb-4">
                In these situations, we must remember that God is the Divine Physician. He knows every illness, every symptom, 
                every treatment. He can heal what seems incurable and restore what seems lost.
              </p>

              <p className="mb-4">
                As we pray today, let us also remember that illness can be a means of sanctification. Through suffering, 
                we can grow closer to God and learn to trust in His loving care. Let us pray not only for physical healing, 
                but also for spiritual growth through the trial of illness.
              </p>

              <p>
                Remember that God's ways are not our ways. Sometimes what seems like a tragedy can be a blessing in disguise, 
                leading us or our loved ones closer to Him.
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
            Dear Lord, help us to accept all suffering in our lives out of love for You. Give us the grace to grow in holiness 
            even when we or our loved ones are ill. May we always remember that You are the Divine Physician and that You can 
            heal all illnesses according to Your will. Help us to trust in Your loving care. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Someone in a Coma - Day 2: Illness" 
            url="/novenas/someone-in-coma/day-2"
            excerpt="Join me in praying the Novena for Someone in a Coma - Day 2 focusing on Illness." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/someone-in-coma/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Injury
          </Link>
          
          <Link 
            href="/novenas/someone-in-coma/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Long-term Coma →
          </Link>
        </div>
      </div>
    </div>
  )
} 