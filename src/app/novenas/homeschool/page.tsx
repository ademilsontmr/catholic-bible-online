import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Homeschool Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Homeschool Novena with daily prayers, reflections, and guidance. Pray for God\'s guidance and grace for homeschooling families.',
  keywords: [
    'homeschool novena',
    'homeschooling prayer',
    'family education prayer',
    'homeschool family novena',
    'education prayer',
    'family prayer',
    'homeschooling grace',
    'homeschooling guidance',
    'family education novena',
    'catholic homeschool prayer'
  ],
  openGraph: {
    title: 'Homeschool Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Homeschool Novena with daily prayers, reflections, and guidance for homeschooling families.',
    url: 'https://catholicbibleonline.com/novenas/homeschool',
  },
  twitter: {
    title: 'Homeschool Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Homeschool Novena with daily prayers, reflections, and guidance for homeschooling families.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s guidance for your homeschooling journey and His provision for all your needs.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s plan for your family and His ability to provide wisdom for educating your children.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for your children and to imitate God\'s love in your homeschooling approach.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility, following Jesus\' example of perfect humility in serving your family.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Patience',
    description: 'Pray for patience of heart and mind, like the patient love of God for His children.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will, following His guidance for your family\'s education.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and in following God\'s plan for your homeschooling journey.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Wisdom',
    description: 'Pray for God\'s wisdom in making educational decisions and guiding your children\'s formation.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for God\'s guidance and His grace in your homeschooling mission.',
    slug: 'day-9'
  }
]

export default function HomeschoolNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Homeschool Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's guidance and grace for homeschooling families.
            This traditional novena helps families grow closer to God while navigating the challenges and blessings of homeschooling.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏠</div>
              <div className="text-sm text-gray-600">Homeschool</div>
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
            About the Homeschool Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Homeschool Novena is a traditional nine-day prayer that helps families seek God's guidance 
              and grace for their homeschooling journey. Homeschooling is a beautiful vocation that allows 
              parents to form their children in faith, knowledge, and virtue within the domestic church.
            </p>
            
            <p className="mb-4">
              The title "Homeschool" reminds us that education is a gift from God and that parents have 
              the primary responsibility for their children's formation. This journey requires patience, 
              perseverance, and trust in God's providence.
            </p>
            
            <p>
              This novena helps families to trust in God's guidance for their educational choices and to turn 
              to Him with confidence in every challenge, knowing that He will always provide the grace needed 
              for this important mission.
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
                href={`/novenas/homeschool/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's guidance for your homeschooling journey.
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
                Present your specific homeschooling challenges and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His guidance and grace in your homeschooling mission.
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
                Believe in God's guidance for your homeschooling journey.
                Trust that He will help you make the right decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace to sustain you through homeschooling challenges.
                He is always ready to assist you in your needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love your children and spouse through the homeschooling journey.
                Show your love through patience, sacrifice, and dedication.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Homeschool Novena Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Homeschool Novena devotion is a way of seeking God's guidance and grace for the 
            important mission of educating children at home.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Homeschool Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏠</span>
                <span>Home</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📚</span>
                <span>Education</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Family</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Guidance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Grace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's guidance for our homeschooling decisions</li>
              <li>• Grow closer to God as we educate our children at home</li>
              <li>• Experience God's grace and protection in our educational mission</li>
              <li>• Bring our prayers and needs to God with confidence</li>
              <li>• Imitate God's virtues and love in our homeschooling approach</li>
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