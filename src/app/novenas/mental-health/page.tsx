import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Mental Health - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Mental Health with daily prayers, reflections, and guidance. Pray for healing, strength, and God\'s guidance in managing mental health.',
  keywords: [
    'mental health novena',
    'mental health prayer',
    'healing mental health',
    'mental health management prayer',
    'catholic mental health prayer',
    'mental health healing novena',
    'prayer for mental health',
    'mental health novena prayer',
    'catholic novena mental health',
    'mental health wellness prayer',
    'mental health treatment prayer',
    'mental health recovery novena'
  ],
  openGraph: {
    title: 'Novena for Mental Health - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Mental Health with daily prayers, reflections, and guidance for healing and strength.',
    url: 'https://catholicbibleonline.com/novenas/mental-health',
  },
  twitter: {
    title: 'Novena for Mental Health - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Mental Health with daily prayers, reflections, and guidance for healing and strength.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s healing power and guidance in managing mental health.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s care and His ability to help us with mental health.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for God and to imitate His love for us in managing mental health.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility, following Jesus\' example of perfect humility before God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Purity',
    description: 'Pray for purity of heart and mind, like the pure Virgin Mary, Mother of God.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will and His plan for our mental health journey.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and in managing mental health with faith.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Intercession',
    description: 'Pray for God\'s powerful intercession and His ability to help us with mental health.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for God\'s help and care in managing mental health.',
    slug: 'day-9'
  }
]

export default function NovenaforMentalHealthPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Mental Health
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer for healing, strength, and God's guidance in managing mental health.
            This traditional novena helps us grow closer to God and experience His healing power and care.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🧠</div>
              <div className="text-sm text-gray-600">Health</div>
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
            About the Novena for Mental Health</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Mental Health is a traditional nine-day prayer that helps us grow closer to God 
              and experience His healing power and care in managing mental health. God is our healer and our strength, 
              and He wants to help us in every aspect of our health journey.</p>
            
            <p className="mb-4">
              This novena helps us to trust in God's healing power and to turn to Him with confidence in every need, 
              knowing that He will always help us and guide us in managing our mental health with wisdom and grace.
            </p>
            
            <p>
              Through this novena, we pray for physical healing, strength to manage mental health daily, 
              wisdom in making health decisions, and peace in accepting God\'s plan for our lives.</p>
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
                href={`/novenas/mental-health/${day.slug}`}
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
                Trust completely in God's healing power and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific mental health needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and healing power.
                Gratitude opens our hearts to receive more graces.</p>
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
                Believe in God's healing power and His ability to help us.
                Trust that He will guide us in managing our mental health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's healing power and His care for our mental health.
                He is always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for us.
                Show our love through prayer and healthy living.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Mental Health Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Mental Health devotion is a way of honoring and seeking God\'s healing power, 
            who is our healer and advocate for our health.</p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Mental Health Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🧠</span>
                <span>Mind</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💭</span>
                <span>Thoughts</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>😌</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌈</span>
                <span>Hope</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's healing power and guidance</li>
              <li>• Grow closer to God as our healer</li>
              <li>• Experience God's care and protection for our mental health</li>
              <li>• Bring our emotional concerns and needs to God in prayer</li>
              <li>• Develop healthy habits and self-care practices</li>
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