import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 3: Diagnosis Struggles',
  description: 'Day 3 of the Novena for Doctors focusing on diagnosis struggles. Pray for doctors struggling to diagnose patients and seeking medical wisdom.',
  keywords: [
    'novena for doctors day 3',
    'doctors diagnosis struggles prayer',
    'doctors prayer day 3',
    'medical professionals novena day 3',
    'doctors medical wisdom and discernment prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 3: Diagnosis Struggles',
    description: 'Day 3 of the Novena for Doctors focusing on diagnosis struggles for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-3',
  },
  twitter: {
    title: 'Novena for Doctors - Day 3: Diagnosis Struggles',
    description: 'Day 3 of the Novena for Doctors focusing on diagnosis struggles for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 3: Diagnosis Struggles
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors struggling to diagnose patients and seeking medical wisdom.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Diagnosis Struggles</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors struggling to diagnose patients and seeking medical wisdom.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>
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
                <strong>Prayer for Diagnosis Struggles:</strong><br/>
                The work of doctors can be difficult in many ways. Though doctors study and work for years in order to be skilled in their work, they still struggle at times to understand what is wrong with patients. You can help all doctors who are struggling to diagnose a patient.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors who are struggling to accurately diagnose a patient.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him." (James 1:5)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to always seek Your assistance when we are struggling in our lives. Give us the grace to grow in intimacy with You each day of our lives. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors struggling to diagnose patients and seeking medical wisdom. Medical diagnosis is both an art and a science, requiring years of training, experience, and often divine guidance. James 1:5 reminds us that God gives wisdom generously to those who ask. Doctors facing diagnostic challenges need this wisdom desperately. They must piece together symptoms, test results, and patient history to form a complete picture of what ails their patients. This process can be frustrating and time-consuming, especially when patients are suffering and families are anxious for answers. Doctors need God's guidance to see what others might miss, to ask the right questions, and to interpret results correctly. They need patience when answers don't come quickly and humility to seek second opinions when necessary. Let us pray that these doctors will receive God's wisdom and that they will be guided to the correct diagnoses that lead to proper treatment and healing.</p>
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
            title="Novena for Doctors - Day 3: Diagnosis Struggles"
            text="Join me in praying the Novena for Doctors - Day 3 focusing on diagnosis struggles for God's blessing."
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/novenas/doctors/day-2" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Day 2
          </Link>
          <Link 
            href="/novenas/doctors" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Overview
          </Link>
          <Link 
            href="/novenas/doctors/day-4" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Day 4 →
          </Link>
        </div>
      </div>
    </div>
  )
}