import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 2: Young Patients',
  description: 'Day 2 of the Novena for Doctors focusing on young patients. Pray for doctors treating children and young patients with special care and sensitivity.',
  keywords: [
    'novena for doctors day 2',
    'doctors young patients prayer',
    'doctors prayer day 2',
    'medical professionals novena day 2',
    'doctors pediatric care and healing prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 2: Young Patients',
    description: 'Day 2 of the Novena for Doctors focusing on young patients for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-2',
  },
  twitter: {
    title: 'Novena for Doctors - Day 2: Young Patients',
    description: 'Day 2 of the Novena for Doctors focusing on young patients for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 2: Young Patients
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors treating children and young patients with special care and sensitivity.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Young Patients</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors treating children and young patients with special care and sensitivity.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>
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
                <strong>Prayer for Young Patients:</strong><br/>
                The work of treating sick and injured people is not easy. When doctors must treat young patients, there are often even more difficulties. Doctors who carry out the difficult but important work of caring for sick and injured children are in great need of Your help.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors who are caring for young patients.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Let the children come to me, and do not hinder them; for to such belongs the kingdom of God." (Luke 18:16)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to always strive to do all things for Your glory. Give us the grace to grow closer to You each day of our lives, in all circumstances. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors treating children and young patients with special care and sensitivity. Pediatric care requires a unique combination of medical expertise and emotional sensitivity. Doctors who treat children must not only address their physical ailments but also understand their emotional needs and fears. Luke 18:16 shows us Jesus' love for children and His desire to welcome them. Similarly, doctors who care for young patients are called to show this same love and care. Pediatric doctors face unique challenges - they must communicate with children at their level, comfort frightened parents, and make difficult medical decisions that affect young lives. These doctors need God's grace to be patient, gentle, and wise in their care of children. They need compassion to understand the fears and anxieties of both children and their families. Let us pray that these doctors will be instruments of God's healing love for the youngest and most vulnerable among us.</p>
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
            Dear Lord, help us to rely on You for all that we need in our lives. Give us the grace to offer to You every hardship we face. 
            May we always trust in Your guidance and assistance for all doctors and medical professionals. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Doctors - Day 2: Young Patients"
          text="Join me in praying the Novena for Doctors - Day 2 focusing on Young Patients."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/doctors/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Caring for Dying Patients
          </Link>
          
          <Link 
            href="/novenas/doctors/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Diagnosis Struggles →
          </Link>
        </div>
      </div>
    </div>
  )
}