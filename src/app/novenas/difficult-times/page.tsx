import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Difficult Times - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Difficult Times with daily prayers, reflections, and guidance. Pray for strength, hope, and divine assistance during challenging periods.',
  keywords: [
    'novena for difficult times',
    'difficult times novena',
    'prayer for hard times',
    'catholic prayer for difficulties',
    'novena for challenges',
    'prayer for strength',
    'catholic novena for struggles',
    'prayer for hope in difficult times',
    'novena for divine help',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Difficult Times - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Difficult Times with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/difficult-times',
  },
  twitter: {
    title: 'Novena for Difficult Times - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Difficult Times with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s plan and His ability to help you through difficult times.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s promise to never abandon you during challenging periods.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for God and to trust in His love for you, even during difficult times.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility to accept God\'s will and to seek His guidance in all things.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Purity',
    description: 'Pray for purity of heart and mind to see God\'s hand at work in your difficulties.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will and to follow His guidance through difficult times.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and in trusting God during challenging periods.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Intercession',
    description: 'Pray for the intercession of saints who understand suffering and can help you.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for God\'s presence and help during difficult times.',
    slug: 'day-9'
  }
]

export default function NovenaForDifficultTimesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Difficult Times
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's strength, hope, and divine assistance during challenging periods.
            This traditional novena helps us grow closer to God and experience His loving presence in difficult times.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛡️</div>
              <div className="text-sm text-gray-600">Strength</div>
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
            About the Novena for Difficult Times
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Difficult Times is a traditional nine-day prayer that helps us find strength, hope, and divine assistance 
              during challenging periods in our lives. This novena draws on the powerful intercession of various saints who understand 
              different types of suffering and can help us navigate through our own difficulties.
            </p>
            
            <p className="mb-4">
              Each day focuses on a different aspect of difficulty - from financial struggles to health problems, from employment 
              challenges to mental health issues. Through the intercession of saints who have experienced similar trials, we seek 
              God's guidance and strength to overcome our own challenges.
            </p>
            
            <p>
              This novena reminds us that we are not alone in our suffering and that God, through His saints, provides us with 
              the support and intercession we need to persevere through difficult times.
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
                href={`/novenas/difficult-times/${day.slug}`}
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
                Trust completely in God's plan for your life, even during difficult times. Believe that He is working for your good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific difficulties and intentions to God. He wants to help you with the particular challenges you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His strength and the intercession of the saints. Gratitude opens our hearts to receive more graces.
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
                Believe in God's power to help you through difficult times. Trust that He is always with you.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to never abandon you. He is always ready to help you find strength and peace.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you, even during the most difficult times.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Difficult Times Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Difficult Times devotion is a way of seeking God's strength and the intercession of saints 
            to help us navigate through challenging periods in our lives.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Difficult Times Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Saints</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Hope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Perseverance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily Practice</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's plan during difficult times</li>
              <li>• Seek the intercession of saints who understand our struggles</li>
              <li>• Find strength and hope when we feel overwhelmed</li>
              <li>• Experience God's loving presence in challenging situations</li>
              <li>• Grow in faith, hope, and love through adversity</li>
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