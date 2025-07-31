import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Exams - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Exams with daily prayers, reflections, and guidance. Pray for those preparing for exams and seeking God\'s help in their studies.',
  keywords: [
    'novena for exams',
    'exams novena',
    'study prayer',
    'exam preparation prayer',
    'academic success novena',
    'test anxiety prayer',
    'exams nine day prayer',
    'education prayer novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Exams - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Exams with daily prayers, reflections, and guidance for those seeking academic success.',
    url: 'https://catholicbibleonline.com/novenas/exams',
  },
  twitter: {
    title: 'Novena for Exams - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Exams with daily prayers, reflections, and guidance for those seeking academic success.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Young Children',
    description: 'Pray for young children who are preparing to take exams for school.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'College Students',
    description: 'Pray for college students who are preparing to take exams as part of their higher education.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Professional Exams',
    description: 'Pray for those preparing to take exams in their professional lives.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Anxiety Relief',
    description: 'Pray for those who are suffering from anxiety about an upcoming exam.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Retaking Exams',
    description: 'Pray for those who are preparing to retake an exam that they did poorly on in the past.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Teachers',
    description: 'Pray for teachers to prepare their students well for exams.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for all preparing for exams to persevere in their studies.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Submission to God\'s Will',
    description: 'Pray for all preparing for exams to grow in submission to God\'s will.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray for all preparing for exams to grow in gratitude for the gift of education.',
    slug: 'day-9'
  }
]

export default function NovenaForExamsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Exams
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's help for those preparing for exams and academic challenges.
            This traditional novena helps us pray for academic success and grow in gratitude for the gift of education.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Exams</div>
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
            About the Novena for Exams
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Exams is a traditional nine-day prayer designed to help those who are preparing 
              for academic examinations and professional tests. This novena acknowledges the stress and anxiety 
              that often accompany exam preparation while helping us grow in gratitude for the gift of education.
            </p>
            
            <p className="mb-4">
              The title "Exams" reminds us of the important role that testing plays in our educational journey. 
              Whether we are students in school, college, or professionals taking certification exams, the pressure 
              to perform well can be overwhelming. This novena helps us to turn to God for strength, wisdom, and peace.
            </p>
            
            <p>
              This novena helps us to pray for various aspects of exam preparation - from reducing anxiety 
              to improving focus, while always maintaining hope in God's guidance and support.
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
                href={`/novenas/exams/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Study diligently and prepare well for your exams. God helps those who help themselves 
                by putting in the necessary effort.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Calm</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's guidance and remain calm during exam preparation. 
                Anxiety can interfere with your ability to learn and perform well.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Continue studying even when it's difficult. Perseverance is key to 
                academic success and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of education and the opportunity to learn. 
                Gratitude opens our hearts to receive more blessings.
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
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to help you in your studies and exams. 
                Trust that He will guide you to the knowledge you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to help those who trust in Him. 
                Look forward to the success and wisdom He will bring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. 
                Show love for others by helping them in their studies.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Exams Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Exams devotion is a way of praying for and supporting those preparing for academic examinations, 
            seeking God's guidance and wisdom for successful learning and test-taking.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Exams Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📚</span>
                <span>Study</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🧠</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Success</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Knowledge</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for those preparing for exams and tests</li>
              <li>• Seek God's wisdom and guidance in studies</li>
              <li>• Reduce anxiety and stress about exams</li>
              <li>• Support students and professionals in their academic journey</li>
              <li>• Maintain hope and faith in God's help with education</li>
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