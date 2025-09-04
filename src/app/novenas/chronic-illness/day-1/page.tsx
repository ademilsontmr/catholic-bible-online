import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Day 1: Diagnosis',
  description: 'Pray the Novena for Chronic Illness - Day 1 focusing on Diagnosis. Join in praying the traditional novena to seek God\'s grace for those with chronic illness.',
  keywords: [
    'novena for chronic illness day 1',
    'chronic illness novena day 1',
    'chronic illness prayer day 1',
    'novena for chronic illness prayer diagnosis',
    'day 1 chronic illness novena',
    'diagnosis chronic illness prayer',
    'chronic illness novena diagnosis',
    'chronic illness prayer diagnosis'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Day 1: Diagnosis',
    description: 'Pray the Novena for Chronic Illness - Day 1 focusing on Diagnosis. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness/day-1',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Day 1: Diagnosis',
    description: 'Pray the Novena for Chronic Illness - Day 1 focusing on Diagnosis. Join in praying the traditional novena.',
  }
}

export default function ChronicIllnessNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness – Day 1: Diagnosis
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-teal-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Diagnosis</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Chronic Illness, we pray for those who have recently been diagnosed 
            with a chronic illness. We ask God to help them accept their condition and begin their treatment journey 
            with grace and strength.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

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
                Being diagnosed with a chronic illness can mean the beginning of treatment and the start of relief from the symptoms of chronic illness. But it can also be very difficult and stressful to be diagnosed with a chronic illness. Those who have recently been diagnosed with chronic illness need Your grace to accept their lengthy sufferings.
              </p>

              <p className="mb-6">
                Please bless and assist all people who suffer from chronic illness, and we especially ask You today to help all those who have recently been diagnosed with a chronic illness!
              </p>

              <p className="mb-6">
                Help us to turn to You for help in all of our sufferings. Help us to grow in holiness as we unite our sufferings to You.
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
                Today we pray for those who have recently been diagnosed with a chronic illness. 
                A diagnosis can be both a relief and a source of great anxiety and stress.
              </p>

              <p className="mb-4">
                For many, receiving a diagnosis means finally understanding what has been causing their symptoms 
                and the beginning of a treatment plan. However, it can also bring fear about the future, 
                concerns about treatment, and questions about how this will affect their lives and the lives of their loved ones.
              </p>

              <p className="mb-4">
                Those who have recently been diagnosed need God's grace to accept their condition and to begin 
                their journey with hope and trust. They need strength to face the challenges ahead and wisdom 
                to make the best decisions for their health and well-being.
              </p>

              <p className="mb-4">
                As we pray for them today, let us also remember that God is with them in this difficult time. 
                He understands their fears and concerns, and He wants to help them through this journey. 
                He will give them the grace they need to accept their condition and to find hope and meaning in their suffering.
              </p>

              <p>
                Let us ask God to help all those who have recently been diagnosed with a chronic illness 
                to trust in His love and care, and to find comfort and strength in His presence.
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
            Dear Lord, we thank You for hearing our prayers today. Help all those who have recently been diagnosed 
            with a chronic illness to accept their condition with grace and to trust in Your love and care. 
            Give them the strength they need to begin their treatment journey and the hope to face the challenges ahead. 
            May they find comfort in knowing that You are with them every step of the way. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Chronic Illness - Day 1: Diagnosis" 
            url="/novenas/chronic-illness/day-1"
            excerpt="Join me in praying the Novena for Chronic Illness - Day 1 focusing on Diagnosis." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chronic-illness"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/chronic-illness/day-2"
            className="inline-flex items-center px-6 py-3 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
          >
            Day 2: Long-term Suffering →
          </Link>
        </div>
      </div>
    </div>
  )
} 