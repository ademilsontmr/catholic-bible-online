import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Day 6: Charity in Care',
  description: 'Day 6 of the Novena for Doctors focusing on charity in care. Pray for doctors to grow in charity and love while caring for their patients.',
  keywords: [
    'novena for doctors day 6',
    'doctors charity in care prayer',
    'doctors prayer day 6',
    'medical professionals novena day 6',
    'doctors charity and compassion prayer'
  ],
  openGraph: {
    title: 'Novena for Doctors - Day 6: Charity in Care',
    description: 'Day 6 of the Novena for Doctors focusing on charity in care for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/doctors/day-6',
  },
  twitter: {
    title: 'Novena for Doctors - Day 6: Charity in Care',
    description: 'Day 6 of the Novena for Doctors focusing on charity in care for God\'s blessing.',
  }
}

export default function NovenaForDoctorsDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors – Day 6: Charity in Care
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for doctors to grow in charity and love while caring for their patients.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/doctors" className="hover:text-gray-700">Doctors</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Charity in Care</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for doctors to grow in charity and love while caring for their patients.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>
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
                <strong>Prayer for Charity in Care:</strong><br/>
                You have commanded us to care for the needs of others out of love for You, and You have told us that we minister to You whenever we do so. Doctors have a special opportunity to serve You in this way, whenever they care for their patients out of love for You.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Please give doctors all the help they need in their work, and we particularly ask today that You help all doctors to grow in charity.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                ""Truly, I say to you, as you did it to one of the least of these my brethren, you did it to me." (Matthew 25:40)"
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Help us to grow in every virtue we need for holiness. Give us the grace to grow more closely united to You at every opportunity. And we especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for doctors to grow in charity and love while caring for their patients. Matthew 25:40 reminds us that when we serve others, we are serving Christ Himself. Doctors have a unique opportunity to live out this teaching in their daily work. Every patient they treat, every diagnosis they make, every surgery they perform can be an act of love for God. However, the demands of modern medicine - long hours, administrative burdens, and the pressure to see many patients quickly - can sometimes overshadow the charitable aspect of medical care. Doctors need God's grace to maintain their focus on serving their patients with love and compassion. They need to remember that each patient is a child of God deserving of their full attention and care. They need to cultivate the virtue of charity in all their interactions, treating each person with dignity and respect. Let us pray that these doctors will grow in charity and that their medical practice will be a true ministry of love.</p>
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
            title="Novena for Doctors - Day 6: Charity in Care"
            text="Join me in praying the Novena for Doctors - Day 6 focusing on charity in care for God's blessing."
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href="/novenas/doctors/day-5" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Day 5
          </Link>
          <Link 
            href="/novenas/doctors" 
            className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Overview
          </Link>
          <Link 
            href="/novenas/doctors/day-7" 
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Day 7 →
          </Link>
        </div>
      </div>
    </div>
  )
}