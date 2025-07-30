import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Clarity - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Clarity with daily prayers, reflections, and guidance. Pray for God\'s clarity and wisdom in decision-making.',
  keywords: [
    'novena for clarity',
    'clarity prayer',
    'decision making prayer',
    'divine guidance prayer',
    'clarity novena',
    'wisdom prayer',
    'discernment prayer',
    'clarity nine day prayer',
    'divine guidance novena',
    'catholic clarity prayer'
  ],
  openGraph: {
    title: 'Novena for Clarity - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Clarity with daily prayers, reflections, and guidance for spiritual discernment.',
    url: 'https://catholicbibleonline.com/novenas/clarity',
  },
  twitter: {
    title: 'Novena for Clarity - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Clarity with daily prayers, reflections, and guidance for spiritual discernment.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Vocation',
    description: 'Pray for clarity in discerning your vocation and God\'s call for your life.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Career',
    description: 'Pray for clarity in making career decisions and understanding God\'s will for your work.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Location',
    description: 'Pray for clarity in deciding where to live and where God is calling you to be.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Marriage',
    description: 'Pray for clarity in discerning your future spouse and God\'s plan for your relationships.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Perseverance',
    description: 'Pray for perseverance when seeking clarity and strength to continue discerning.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Healing',
    description: 'Pray for healing from wounds that may interfere with understanding God\'s will.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Trust',
    description: 'Pray for deeper trust in God and His love as you seek clarity in your decisions.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humility',
    description: 'Pray for humility to acknowledge that God knows best for your life.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Submission',
    description: 'Pray for the grace to submit to God\'s will and abandon your own desires.',
    slug: 'day-9'
  }
]

export default function ClarityNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Clarity
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's clarity and wisdom in decision-making.
            This traditional novena helps us grow closer to God while seeking His guidance for important life decisions.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔍</div>
              <div className="text-sm text-gray-600">Clarity</div>
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
            About the Novena for Clarity
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Clarity is a traditional nine-day prayer that helps us seek God's guidance 
              and wisdom when making important life decisions. Life is full of choices that can have 
              significant impact on our future and the lives of our loved ones.
            </p>
            
            <p className="mb-4">
              The title "Clarity" reminds us that God wants us to understand His will for our lives 
              and that He is always ready to provide the wisdom and guidance we need. When we seek 
              His clarity with trust and humility, He will show us the path He has prepared for us.
            </p>
            
            <p>
              This novena helps us to trust in God's guidance for our decisions and to turn 
              to Him with confidence in every choice, knowing that He will always provide the clarity 
              needed for this important journey of discernment.
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
                href={`/novenas/clarity/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's guidance and His ability to provide clarity.
                Turn to Him with confidence in every decision.
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
                Present your specific decisions and intentions to God.
                He wants to help you with the particular choices you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach God with humility, acknowledging that He knows best.
                Humility opens our hearts to receive His clarity.
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
                Believe in God's guidance and His ability to provide clarity.
                Trust that He will show you the right path.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's wisdom and His perfect plan for your life.
                He is always ready to guide you in your decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for you.
                Show your love through obedience to His will.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Clarity Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Clarity devotion is a way of seeking God's wisdom and guidance 
            for important life decisions and spiritual discernment.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Clarity Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔍</span>
                <span>Clarity</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎯</span>
                <span>Discernment</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💡</span>
                <span>Guidance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's guidance for our important decisions</li>
              <li>• Grow closer to God as we seek His wisdom</li>
              <li>• Experience God's clarity and peace in our discernment</li>
              <li>• Bring our decisions and choices to God with confidence</li>
              <li>• Submit to God's will and trust in His perfect plan</li>
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