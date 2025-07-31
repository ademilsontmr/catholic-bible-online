import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 1: Caring for Dying Patients',
  description: 'Day 1 of the Novena for Doctors focusing on caring for dying patients. Pray for doctors caring for dying patients and facing difficult end-of-life situations.',
  keywords: [
    'novena for doctors day 1',
    'doctors caring for dying patients prayer',
    'doctors prayer day 1',
    'medical professionals novena day 1',
    'doctors end of life care prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 1: Caring for Dying Patients',
    description: 'Day 1 of the Novena for Doctors focusing on caring for dying patients for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-1',
  },
  twitter: {
    title: 'Novena for Doctors - Day 1: Caring for Dying Patients',
    description: 'Day 1 of the Novena for Doctors focusing on caring for dying patients for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 1: Caring for Dying Patients
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors caring for dying patients and facing difficult end-of-life situations.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Caring for Dying Patients</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for doctors caring for dying patients and facing difficult end-of-life situations. We ask God to help all doctors who are caring for dying patients.
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
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the many ways You have blessed us through the work of doctors in our world. We ask You to pour out Your grace and assistance on all doctors.
              </p>
              <p className="mb-6">
                <strong>Prayer for Dying Patients:</strong><br/>
                The work that doctors perform can be difficult in many ways. Doctors face many kinds of suffering, especially as they work to care for patients whom they are not able to save. You can help all doctors as they perform the difficult and important work of caring for dying patients.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors who are caring for dying patients.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Come to me, all you who are weary and burdened, and I will give you rest." (Matthew 11:28)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to rely on You for all that we need in our lives. Give us the grace to offer to You every hardship we face. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors caring for dying patients and facing difficult end-of-life situations. Caring for dying patients is one of the most challenging aspects of medical practice. Doctors who work in palliative care, hospice, or emergency medicine often face the heart-wrenching reality of patients they cannot save. This work requires not only medical skill but also deep compassion, emotional strength, and spiritual fortitude. Matthew 11:28 reminds us that Jesus invites all who are weary and burdened to come to Him for rest. Doctors caring for dying patients carry heavy burdens - the weight of medical decisions, the emotional toll of witnessing suffering, and the responsibility of supporting families through their grief. These doctors need God's grace to find strength and peace in their difficult work. They need wisdom to provide comfort and dignity to patients in their final days, and they need compassion to support families who are saying goodbye to their loved ones. Let us pray that these doctors will find rest in God and that they will be instruments of His peace and comfort to those who are suffering.</p>
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
          title="Novena for Doctors - Day 1: Caring for Dying Patients"
          text="Join me in praying the Novena for Doctors - Day 1 focusing on Caring for Dying Patients."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/doctors"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/doctors/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Young Patients →
          </Link>
        </div>
      </div>
    </div>
  )
} 