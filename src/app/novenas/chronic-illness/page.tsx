import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chronic Illness - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Chronic Illness with daily prayers, reflections, and guidance. Pray for God\'s grace and assistance for those suffering from chronic illness.',
  keywords: [
    'novena for chronic illness',
    'chronic illness novena',
    'chronic illness prayer',
    'novena for chronic illness prayer',
    'chronic illness nine day prayer',
    'chronic illness devotion',
    'chronic illness catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Chronic Illness - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Chronic Illness with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/chronic-illness',
  },
  twitter: {
    title: 'Novena for Chronic Illness - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Chronic Illness with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Diagnosis',
    description: 'Pray for acceptance and beginning of treatment for those recently diagnosed.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Long-term Suffering',
    description: 'Pray for those who have been suffering from chronic illness for a long time.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Medical Professionals',
    description: 'Pray for medical professionals who treat those with chronic illness.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Discouragement',
    description: 'Pray for those who are becoming discouraged about their condition.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Emotional Support',
    description: 'Pray for emotional and mental support for those with chronic illness.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Poverty',
    description: 'Pray for the poor who suffer from chronic illness.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Union with Christ',
    description: 'Pray to grow closer to Christ through sufferings.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'End of Life',
    description: 'Pray for those who are dying from chronic illness.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Perseverance',
    description: 'Pray for perseverance and trust for those with chronic illness.',
    slug: 'day-9'
  }
]

export default function ChronicIllnessNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chronic Illness
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for those suffering from chronic illness and their caregivers.
            This traditional novena helps us seek God's grace and assistance for all who endure the challenges of chronic illness.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
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
            About the Novena for Chronic Illness
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Chronic Illness is a traditional nine-day prayer that helps us seek God's grace and assistance 
              for all those who suffer from chronic illness. This novena acknowledges the physical, emotional, and spiritual 
              challenges that come with chronic illness and invites us to unite our sufferings with Christ.
            </p>
            
            <p className="mb-4">
              Chronic illness can be a very difficult burden to bear, affecting not only the person who is ill but also 
              their families, caregivers, and medical professionals. This novena helps us to turn to God for strength, 
              comfort, and healing in these challenging circumstances.
            </p>
            
            <p>
              This novena helps us to trust in God's providence and to seek His grace for all who are affected by chronic illness, 
              knowing that He hears our prayers and provides for our needs in His perfect timing.
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
                href={`/novenas/chronic-illness/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-teal-50 rounded-lg p-8 mb-12">
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
                Believe in God's power to heal and His ability to help us.
                Trust that He hears our prayers and provides for our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to bring good from suffering.
                He is always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for us.
                Show our love through prayer and trust in His will.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-teal-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Chronic Illness Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Chronic Illness devotion is a way of seeking God's grace and assistance for all those 
            who suffer from chronic illness and their caregivers.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Chronic Illness Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏥</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>Perseverance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🆘</span>
                <span>Support</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
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
              <li>• Trust in God's grace and assistance for those with chronic illness</li>
              <li>• Grow closer to God through prayer and trust</li>
              <li>• Experience God's comfort and strength in difficult times</li>
              <li>• Bring our prayers and needs to God with confidence</li>
              <li>• Unite our sufferings with Christ's sufferings</li>
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