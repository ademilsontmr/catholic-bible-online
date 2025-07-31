import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 5: Discouragement',
  description: 'Day 5 of the Novena for Doctors focusing on discouragement. Pray for doctors dealing with feelings of discouragement when unable to save patients.',
  keywords: [
    'novena for doctors day 5',
    'doctors discouragement prayer',
    'doctors prayer day 5',
    'medical professionals novena day 5',
    'doctors hope and perseverance prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 5: Discouragement',
    description: 'Day 5 of the Novena for Doctors focusing on discouragement for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-5',
  },
  twitter: {
    title: 'Novena for Doctors - Day 5: Discouragement',
    description: 'Day 5 of the Novena for Doctors focusing on discouragement for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 5: Discouragement
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors dealing with feelings of discouragement when unable to save patients.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Discouragement</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors dealing with feelings of discouragement when unable to save patients.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>
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
                <strong>Prayer for Discouragement:</strong><br/>
                The work that doctors do can be difficult and emotionally taxing. Sometimes doctors are unable to save their patients' lives despite a great amount of effort, and doctors might face terrible feelings of discouragement in their work.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors who are struggling with feelings of discouragement.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Come to me, all you who are weary and burdened, and I will give you rest." (Matthew 11:28)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to always rely on You whenever we face difficulties in our lives. Give us the grace to do all we can to carry out Your will in our lives each day. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors dealing with feelings of discouragement when unable to save patients. Despite their best efforts and years of training, doctors sometimes cannot save every patient. This reality can lead to deep feelings of discouragement, failure, and even depression. Matthew 11:28 offers comfort to all who are weary and burdened. Doctors who have lost patients carry heavy emotional burdens - they may question their skills, their decisions, or their calling. They may feel responsible for outcomes that were beyond their control. These doctors need God's comfort and reassurance. They need to remember that they are instruments of God's healing, not the source of it. They need support from colleagues, family, and faith communities. They need to find healthy ways to process their grief and to maintain hope in their calling. Let us pray that these doctors will find rest in God and that they will be renewed in their commitment to their healing ministry.</p>
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
            title="Novena for Doctors - Day 5: Discouragement"
            text="Join me in praying the Novena for Doctors - Day 5 focusing on discouragement for God's blessing."
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/novenas/doctors/day-4" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Day 4
          </Link>
          <Link 
            href="/novenas/doctors" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Overview
          </Link>
          <Link 
            href="/novenas/doctors/day-6" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Day 6 →
          </Link>
        </div>
      </div>
    </div>
  )
}