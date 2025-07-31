import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 4: Moral Dilemmas',
  description: 'Day 4 of the Novena for Doctors focusing on moral dilemmas. Pray for doctors facing moral dilemmas and ethical challenges in medical practice.',
  keywords: [
    'novena for doctors day 4',
    'doctors moral dilemmas prayer',
    'doctors prayer day 4',
    'medical professionals novena day 4',
    'doctors ethical decision-making prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 4: Moral Dilemmas',
    description: 'Day 4 of the Novena for Doctors focusing on moral dilemmas for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-4',
  },
  twitter: {
    title: 'Novena for Doctors - Day 4: Moral Dilemmas',
    description: 'Day 4 of the Novena for Doctors focusing on moral dilemmas for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 4: Moral Dilemmas
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors facing moral dilemmas and ethical challenges in medical practice.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Moral Dilemmas</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors facing moral dilemmas and ethical challenges in medical practice.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>
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
                <strong>Prayer for Moral Dilemmas:</strong><br/>
                Medical care should never be an occasion of transgression against Your laws, but there are many medical practices in our modern world that are not in accord with Your will. Holy doctors who wish to follow Your laws must sometimes fight for what is right in their work. You can help all doctors who face such moral dilemmas.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors who are struggling with moral dilemmas.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Blessed are those who hunger and thirst for righteousness, for they shall be satisfied." (Matthew 5:6)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to do all we can to serve You faithfully in our lives. Give us the grace to resist evil in every form each day. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors facing moral dilemmas and ethical challenges in medical practice. Modern medicine presents complex ethical questions that can challenge even the most faithful doctors. Matthew 5:6 reminds us that those who hunger and thirst for righteousness will be satisfied. Doctors who strive to practice medicine according to God's laws often face difficult decisions. They may be pressured to participate in procedures that violate their conscience, or they may work in environments where ethical standards are compromised. These doctors need God's strength to stand firm in their convictions and to advocate for what is right. They need wisdom to navigate complex situations and courage to speak up when necessary. They need support from their colleagues and institutions to practice medicine in accordance with their faith. Let us pray that these doctors will be guided by God's truth and that they will find the strength to remain faithful to their principles even when it is difficult.</p>
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

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, help us to truly surrender to You in all aspects of our lives. Give us the grace to trust You even in the midst of difficulties. 
            May we always trust in Your guidance and assistance for all doctors and medical professionals. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Doctors - Day 4: Moral Dilemmas"
          text="Join me in praying the Novena for Doctors - Day 4 focusing on Moral Dilemmas."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/doctors/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Diagnosis Struggles
          </Link>
          
          <Link 
            href="/novenas/doctors/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Discouragement →
          </Link>
        </div>
      </div>
    </div>
  )
}