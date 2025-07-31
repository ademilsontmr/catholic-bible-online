import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Doctors - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Doctors with daily prayers, reflections, and guidance. Pray for doctors and medical professionals seeking God\'s help in their work.',
  keywords: [
    'novena for doctors',
    'doctors novena',
    'medical prayer',
    'doctor prayer novena',
    'healthcare prayer',
    'medical professionals novena',
    'doctors nine day prayer',
    'medical work prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Doctors - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Doctors with daily prayers, reflections, and guidance for medical professionals.',
    url: 'https://catholicbibleonline.com/novenas/doctors',
  },
  twitter: {
    title: 'Novena for Doctors - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Doctors with daily prayers, reflections, and guidance for medical professionals.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Caring for Dying Patients',
    description: 'Pray for doctors caring for dying patients and facing difficult end-of-life situations.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Young Patients',
    description: 'Pray for doctors treating children and young patients with special care and sensitivity.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Diagnosis Struggles',
    description: 'Pray for doctors struggling to diagnose patients and seeking medical wisdom.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Moral Dilemmas',
    description: 'Pray for doctors facing moral dilemmas and ethical challenges in medical practice.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Discouragement',
    description: 'Pray for doctors dealing with feelings of discouragement when unable to save patients.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Charity in Care',
    description: 'Pray for doctors to grow in charity and love while caring for their patients.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Patience',
    description: 'Pray for doctors to grow in patience as they care for patients with various needs.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Submission to God\'s Will',
    description: 'Pray for doctors to grow in submission to God\'s will when facing death and loss.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Work to God',
    description: 'Pray for doctors to offer all their work to God\'s glory and grow in holiness.',
    slug: 'day-9'
  }
]

export default function NovenaForDoctorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Doctors
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer specifically designed for medical professionals. 
            This novena seeks God's grace and assistance for doctors in all aspects of their medical practice.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍⚕️</div>
              <div className="text-sm text-gray-600">Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Doctors
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Doctors is a powerful nine-day prayer specifically designed for medical professionals. 
              Doctors face unique challenges in their work - from caring for dying patients to making difficult diagnoses, 
              from treating young children to facing moral dilemmas in modern medicine.
            </p>
            
            <p className="mb-4">
              This novena seeks God's grace and assistance for doctors in all aspects of their medical practice, 
              helping them to grow in virtue while serving their patients with compassion and skill.
            </p>
            
            <p>
              Through daily prayers and reflections, we ask God to bless and strengthen all doctors, 
              giving them the wisdom, patience, and charity they need to fulfill their sacred calling of healing.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Daily Prayers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/doctors/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
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

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's plan for doctors and patients. Believe in the power of prayer to guide medical decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope for healing, wisdom, and strength for doctors. Trust in God's mercy and assistance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love for doctors and their patients. Pray with genuine care for their well-being and success.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Doctors Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Doctors devotion is a special way of praying for medical professionals, 
            recognizing the sacred nature of their work and seeking God's blessing on their healing ministry.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Doctors Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍⚕️</span>
                <span>Medical Care</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💙</span>
                <span>Compassion</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚕️</span>
                <span>Medicine</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Grace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for doctors and their important work of healing</li>
              <li>• Recognize the sacred nature of medical practice</li>
              <li>• Support doctors in their challenges and difficulties</li>
              <li>• Ask God's blessing on medical professionals</li>
              <li>• Grow in appreciation for the gift of medical care</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 