import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 7: Patience',
  description: 'Day 7 of the Novena for Doctors focusing on patience. Pray for doctors to grow in patience as they care for patients with various needs.',
  keywords: [
    'novena for doctors day 7',
    'doctors patience prayer',
    'doctors prayer day 7',
    'medical professionals novena day 7',
    'doctors patience and understanding prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 7: Patience',
    description: 'Day 7 of the Novena for Doctors focusing on patience for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-7',
  },
  twitter: {
    title: 'Novena for Doctors - Day 7: Patience',
    description: 'Day 7 of the Novena for Doctors focusing on patience for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 7: Patience
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors to grow in patience as they care for patients with various needs.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Patience</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors to grow in patience as they care for patients with various needs.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the many ways You have blessed us through the work of doctors in our world. We ask You to pour out Your grace and assistance on all doctors.
              </p>
              <p className="mb-6">
                <strong>Prayer for Patience:</strong><br/>
                As doctors carry out their work, there are many reasons they might face difficulties. Doctors are in great need of many virtues, especially patience, as they strive to carry out their work well and care for the medical needs of their brothers and sisters in Christ.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors to grow in patience.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Love is patient and kind; love does not envy or boast; it is not arrogant or rude." (1 Corinthians 13:4)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to perform every work in our lives out of love for You and for Your glory. Give us the grace to grow in friendship with You each day of our lives. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors to grow in patience as they care for patients with various needs. 1 Corinthians 13:4 tells us that love is patient and kind. Doctors who truly love their patients must cultivate patience in their practice. Medical care often requires waiting - waiting for test results, waiting for patients to recover, waiting for insurance approvals, waiting for patients to follow treatment plans. Doctors also need patience when dealing with difficult patients, anxious families, or complex medical situations. They need patience when treatments don't work as expected or when patients don't improve as quickly as hoped. They need patience with the limitations of medicine and with their own human limitations. Patience allows doctors to provide better care, to listen more carefully to their patients, and to make better decisions. It helps them to maintain their compassion even in stressful situations. Let us pray that these doctors will grow in patience and that this virtue will enhance their ability to serve their patients with love.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Compassionate</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with compassion for doctors and their challenges. 
                Remember the difficult situations they face daily.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Pray for specific doctors you know or specific medical situations. 
                Include your personal intentions in the prayers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Commit to praying all nine days without interruption. 
                Trust that God hears and answers your prayers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of doctors and medical care. 
                Express gratitude for the healing work they do.
              </p>
            </div>
          </div>
        </section>

        {/* Closing Prayer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Closing Blessing</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                <strong>May God bless you and keep you in His love as you continue this novena for doctors.</strong>
              </p>
              <p className="mb-4">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Share Button */}
        <div className="text-center mb-8">
          <ShareButton 
            title="Novena for Doctors - Day 7: Patience"
            text="Join me in praying the Novena for Doctors - Day 7 focusing on patience for God's blessing."
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/novenas/doctors/day-6" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Day 6
          </Link>
          <Link 
            href="/novenas/doctors" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Overview
          </Link>
          <Link 
            href="/novenas/doctors/day-8" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Day 8 →
          </Link>
        </div>
      </div>
    </div>
  )
}