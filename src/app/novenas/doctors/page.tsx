import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
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
    title: 'Caring for Dying Patients',
    description: 'Pray for doctors caring for dying patients and facing difficult end-of-life situations.',
    focus: 'End-of-life care and compassion'
  },
  {
    day: 2,
    title: 'Young Patients',
    description: 'Pray for doctors treating children and young patients with special care and sensitivity.',
    focus: 'Pediatric care and healing'
  },
  {
    day: 3,
    title: 'Diagnosis Struggles',
    description: 'Pray for doctors struggling to diagnose patients and seeking medical wisdom.',
    focus: 'Medical wisdom and discernment'
  },
  {
    day: 4,
    title: 'Moral Dilemmas',
    description: 'Pray for doctors facing moral dilemmas and ethical challenges in medical practice.',
    focus: 'Ethical decision-making'
  },
  {
    day: 5,
    title: 'Discouragement',
    description: 'Pray for doctors dealing with feelings of discouragement when unable to save patients.',
    focus: 'Hope and perseverance'
  },
  {
    day: 6,
    title: 'Charity in Care',
    description: 'Pray for doctors to grow in charity and love while caring for their patients.',
    focus: 'Charity and compassion'
  },
  {
    day: 7,
    title: 'Patience',
    description: 'Pray for doctors to grow in patience as they care for patients with various needs.',
    focus: 'Patience and understanding'
  },
  {
    day: 8,
    title: 'Submission to God\'s Will',
    description: 'Pray for doctors to grow in submission to God\'s will when facing death and loss.',
    focus: 'Surrender and trust'
  },
  {
    day: 9,
    title: 'Offering Work to God',
    description: 'Pray for doctors to offer all their work to God\'s glory and grow in holiness.',
    focus: 'Holiness and dedication'
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
          <p className="text-xl text-gray-600 mb-6">
            A nine-day prayer for doctors and medical professionals, seeking God's guidance and strength in their important work of healing and caring for patients.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Doctors</span>
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">9 Days</div>
            <div className="text-gray-700">Complete Novena</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">👨‍⚕️ Doctors</div>
            <div className="text-gray-700">Medical Professionals</div>
          </div>
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">3 Virtues</div>
            <div className="text-gray-700">Faith, Hope, Charity</div>
          </div>
        </div>

        {/* About the Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">About the Novena for Doctors</h2>
          <div className="bg-gray-50 rounded-lg p-8">
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
          </div>
        </section>

        {/* Daily Prayers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Daily Prayers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/doctors/day-${day.day}`}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                <h3 className="font-semibold text-black mb-2">{day.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{day.description}</p>
                <div className="text-xs text-blue-500 font-medium">{day.focus}</div>
              </Link>
            ))}
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

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">The Three Theological Virtues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-2xl mb-2">🙏</div>
              <h3 className="font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's plan for doctors and patients. Believe in the power of prayer to guide medical decisions.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope for healing, wisdom, and strength for doctors. Trust in God's mercy and assistance.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="text-2xl mb-2">❤️</div>
              <h3 className="font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love for doctors and their patients. Pray with genuine care for their well-being and success.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">What is the Devotion</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                The Novena for Doctors is a special devotion that recognizes the sacred nature of medical work. 
                Doctors are called to be instruments of God's healing, caring for the sick and suffering with 
                compassion and skill.
              </p>
              <p className="mb-6">
                This novena helps us to pray for doctors in their various challenges - from making difficult 
                diagnoses to caring for dying patients, from treating children to facing moral dilemmas in 
                modern medicine.
              </p>
              
              <h3 className="text-lg font-semibold text-black mb-4">Devotion Elements:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">👨‍⚕️</span>
                  <span className="text-sm">Medical Care</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🙏</span>
                  <span className="text-sm">Prayer</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">💙</span>
                  <span className="text-sm">Compassion</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">🕊️</span>
                  <span className="text-sm">Healing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">⚕️</span>
                  <span className="text-sm">Medicine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-600">✨</span>
                  <span className="text-sm">Grace</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center pt-8 border-t border-gray-200">
          <Link 
            href="/novenas/doctors/day-1" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Novena - Day 1
          </Link>
        </div>
      </div>
    </div>
  )
} 