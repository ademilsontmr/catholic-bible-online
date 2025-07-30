import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for College Graduation - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for College Graduation with daily prayers, reflections, and guidance. Pray for God\'s grace to help all college students on their journey to graduation.',
  keywords: [
    'novena for college graduation',
    'college graduation novena',
    'college graduation prayer',
    'novena for college graduation prayer',
    'college graduation nine day prayer',
    'college graduation devotion',
    'college graduation catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for College Graduation - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for College Graduation with daily prayers, reflections, and guidance for academic success.',
    url: 'https://catholicbibleonline.com/novenas/college-graduation',
  },
  twitter: {
    title: 'Novena for College Graduation - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for College Graduation with daily prayers, reflections, and guidance for academic success.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Academic Struggles',
    description: 'Pray for all college students who are struggling academically as they work toward graduation.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Preparation for Graduation',
    description: 'Pray for all college students who are preparing for an upcoming graduation.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Overcoming Discouragement',
    description: 'Pray for all college students who are discouraged as they work toward graduating college.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Dealing with Exhaustion',
    description: 'Pray for all college students who feel exhausted as they work toward graduation.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Growing in Perseverance',
    description: 'Pray for all college students to grow in the perseverance they need as they work toward graduation.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Submission to God\'s Will',
    description: 'Pray for all college students to grow in submission to God\'s will as they work toward graduation.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'True Humility',
    description: 'Pray for all college students to grow in true humility as they work toward graduation.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Offering Everything to God',
    description: 'Pray for all college students to grow in the ability to offer up to God all that they do.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Making Holy Use of Suffering',
    description: 'Pray for all college students to grow in the ability to make holy use of their sufferings.',
    slug: 'day-9'
  }
]

export default function CollegeGraduationNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for College Graduation
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to help all college students on their journey to graduation.
            This traditional novena helps us seek God's grace for academic success and spiritual growth.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎓</div>
              <div className="text-sm text-gray-600">Graduation</div>
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
            About the Novena for College Graduation
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for College Graduation is a traditional nine-day prayer that helps us seek God's grace 
              for all college students who are on their journey to graduation. This novena recognizes the challenges 
              and difficulties that students face in their academic pursuits.
            </p>
            
            <p className="mb-4">
              College education is a gift from God that requires dedication, perseverance, and faith. Students often 
              face academic struggles, exhaustion, discouragement, and uncertainty about the future. This novena helps 
              us to pray for God's assistance in overcoming these challenges and growing in virtue throughout the journey.
            </p>
            
            <p>
              This novena helps us to trust in God's grace and to seek His assistance for all college students, 
              knowing that He wants to help them succeed not only academically but also spiritually, growing in 
              holiness as they work toward their graduation.
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
                href={`/novenas/college-graduation/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
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
                Believe in God's power to help college students succeed.
                Trust that He will guide them in their academic journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to help them overcome challenges.
                He is always ready to assist them in their studies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for college students.
                Show your love through prayer and support.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for College Graduation Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for College Graduation devotion is a way of seeking God's grace and assistance for all college students 
            who are working toward graduation and growing in their academic and spiritual journey.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of College Graduation Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎓</span>
                <span>Graduation</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📚</span>
                <span>Education</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Perseverance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>9 Days</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's grace to help college students succeed academically</li>
              <li>• Pray for their perseverance through academic challenges</li>
              <li>• Support them in overcoming discouragement and exhaustion</li>
              <li>• Ask for God's guidance in their educational journey</li>
              <li>• Grow in gratitude for the gift of education</li>
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