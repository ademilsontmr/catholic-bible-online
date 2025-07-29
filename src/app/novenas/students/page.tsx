import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Students - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Students with daily prayers, reflections, and guidance. Pray for academic success, wisdom, and spiritual growth in your studies.',
  keywords: [
    'novena for students',
    'student prayer',
    'academic prayer',
    'study prayer',
    'student novena',
    'education prayer',
    'school prayer',
    'university prayer',
    'student success prayer',
    'academic success novena',
    'student wisdom prayer',
    'education devotion'
  ],
  openGraph: {
    title: 'Novena for Students - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Students with daily prayers, reflections, and guidance for academic success and spiritual growth.',
    url: 'https://catholic-bible-online.com/novenas/students',
  },
  twitter: {
    title: 'Novena for Students - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Students with daily prayers, reflections, and guidance for academic success and spiritual growth.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Gratitude for Learning',
    description: 'Pray for gratitude for the gift of learning and growth in knowledge.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Teenage Students',
    description: 'Pray for teenagers facing difficulties and temptations in their studies.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'University Students',
    description: 'Pray for university students and their academic and spiritual growth.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Adult Students',
    description: 'Pray for adults returning to school and pursuing further education.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Gratitude for Education',
    description: 'Pray for gratitude for the blessing of education and learning.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Perseverance in Studies',
    description: 'Pray for perseverance through difficulties and trials in education.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Trust in God',
    description: 'Pray for trust in God\'s providence during academic challenges.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Desire for Holy Knowledge',
    description: 'Pray for desire to know God better through learning and study.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Studies to God',
    description: 'Pray for the ability to offer all academic efforts to God.',
    slug: 'day-9'
  }
]

export default function NovenaForStudentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Students
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for students, seeking God's guidance, wisdom, and grace 
            for academic success and spiritual growth. Pray for all students at every level of education.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Education</div>
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
            About the Novena for Students
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Students is a powerful nine-day prayer that focuses specifically on seeking God's 
              guidance, wisdom, and grace for all students at every level of education. This novena addresses 
              the unique challenges and opportunities that come with being a student.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of student life, from young children beginning 
              their educational journey to adults returning to school. Whether you're a student yourself or praying 
              for students in your life, this novena will guide you through prayers of gratitude, perseverance, 
              and trust in God's plan for education.
            </p>
            
            <p>
              God is the source of all wisdom and knowledge, and through this novena, we can entrust our academic 
              pursuits to His loving care, confident that He desires our growth in both knowledge and holiness.
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
                href={`/novenas/students/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God's power to guide and bless your academic journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific academic needs and challenges to God. Be clear about what you're studying and why.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves you and will answer your prayers for academic success according to His perfect will.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of education and for the opportunities to learn and grow in knowledge.
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
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to guide your studies and provide wisdom for your academic journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises for your education and His ability to help you succeed in your studies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you as you pursue knowledge and wisdom.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Student Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Student prayer is a powerful devotion that recognizes God as the source of all wisdom and knowledge, 
            placing our complete trust in His guidance for our academic pursuits and educational journey.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Student Prayer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📚</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎓</span>
                <span>Education</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Success</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💙</span>
                <span>Guidance</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Place our complete trust in God's guidance for our academic journey</li>
              <li>• Pray with faith and hope for success in our studies and educational pursuits</li>
              <li>• Seek God's wisdom and understanding for all learning and knowledge</li>
              <li>• Believe in God's ability to help us grow in both knowledge and holiness</li>
              <li>• Thank God for the gift of education and the opportunities to learn</li>
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