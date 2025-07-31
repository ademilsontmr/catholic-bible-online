import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for God\'s Blessings - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for God\'s Blessings with daily prayers, reflections, and guidance. Pray for God\'s abundant blessings and divine favor in all aspects of life.',
  keywords: [
    'novena for god\'s blessings',
    'god\'s blessings novena',
    'divine blessings prayer',
    'blessings novena',
    'god\'s favor prayer',
    'divine favor novena',
    'blessings prayer',
    'god\'s grace novena',
    'catholic blessings prayer',
    'divine blessings novena'
  ],
  openGraph: {
    title: 'Novena for God\'s Blessings - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for God\'s Blessings with daily prayers, reflections, and guidance for divine favor.',
    url: 'https://catholicbibleonline.com/novenas/gods-blessings',
  },
  twitter: {
    title: 'Novena for God\'s Blessings - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for God\'s Blessings with daily prayers, reflections, and guidance for divine favor.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Material Assistance',
    description: 'Pray for God\'s material assistance and provision of all our needs.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Contentment',
    description: 'Pray for contentment and happiness in our earthly lives.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Holy Friendships',
    description: 'Pray for the gift of holy friendships and meaningful relationships.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Friendship with God',
    description: 'Pray for deeper friendship and intimacy with God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and asking for God\'s blessings.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Humility',
    description: 'Pray for humility and recognition of our dependence on God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Love of God',
    description: 'Pray for deeper love and worship of God our Creator.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Gratitude',
    description: 'Pray for gratitude and appreciation of God\'s many blessings.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Trust',
    description: 'Pray for deep trust in God\'s care and provision.',
    slug: 'day-9'
  }
]

export default function NovenaForGodsBlessingsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for God's Blessings
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's abundant blessings and divine favor.
            This traditional novena helps us grow closer to God and experience His generous love and care.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Blessings</div>
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
            About the Novena for God's Blessings
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for God's Blessings is a traditional nine-day prayer that helps us grow closer to God 
              and experience His abundant love and care. God is our loving Father who wants to bless us with 
              everything we need for our spiritual and material well-being.
            </p>
            
            <p className="mb-4">
              The title "God's Blessings" reminds us that every good thing comes from God. He is the source 
              of all blessings, and He wants to pour out His grace and favor upon us in abundance.
            </p>
            
            <p>
              This novena helps us to trust in God's generosity and to turn to Him with confidence in every need, 
              knowing that He will provide all that is necessary for our salvation and happiness.
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
                href={`/novenas/gods-blessings/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's generosity and His ability to bless you.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to bless those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to bless you with the particular graces you need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His blessings and generosity.
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
                Believe in God's generosity and His ability to bless us.
                Trust that He will provide all that we need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's abundant blessings and His care for us.
                He is always ready to pour out His grace upon us.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for us.
                Show our love through gratitude and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the God's Blessings Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The God's Blessings devotion is a way of honoring and seeking God's abundant grace and favor, 
            who is our source of all blessings and advocate for our needs.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of God's Blessings Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Favor</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎁</span>
                <span>Gifts</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Blessings</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's generosity and abundant blessings</li>
              <li>• Grow closer to God as our loving Father</li>
              <li>• Experience God's care and provision</li>
              <li>• Bring our needs and desires to God in prayer</li>
              <li>• Develop gratitude for all God's gifts</li>
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