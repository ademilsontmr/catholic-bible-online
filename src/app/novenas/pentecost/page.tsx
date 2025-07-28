import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pentecost Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Pentecost Novena with daily prayers, reflections, and guidance. Seek the gifts and fruits of the Holy Spirit with this traditional nine-day prayer.',
  keywords: [
    'pentecost novena',
    'holy spirit novena',
    'pentecost prayer',
    'holy spirit prayer',
    'catholic pentecost',
    'spirit of god',
    'pentecost season',
    'holy ghost novena',
    'pentecost nine day prayer',
    'holy spirit devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Pentecost Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Pentecost Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/pentecost',
  },
  twitter: {
    title: 'Pentecost Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Pentecost Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Wisdom',
    description: 'Seeking the gift of divine wisdom to understand God\'s ways and His will for our lives.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Understanding',
    description: 'Asking for deeper understanding of God\'s truth and the mysteries of our faith.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Counsel',
    description: 'Requesting guidance in making good decisions and discerning God\'s will.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Fortitude',
    description: 'Seeking strength to overcome difficulties and persevere in doing what is right.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Knowledge',
    description: 'Asking for knowledge of God and His ways, and how to apply them in our lives.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Piety',
    description: 'Seeking reverence and devotion to God, and a deep love for prayer and worship.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Fear of the Lord',
    description: 'Asking for holy fear and awe of God, and a deep respect for His commandments.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Fruits of the Spirit',
    description: 'Praying for love, joy, peace, patience, kindness, and other fruits of the Spirit.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Transformation',
    description: 'Allowing the Holy Spirit to completely transform our lives and make us more like Christ.',
    slug: 'day-9'
  }
]

export default function PentecostNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Pentecost Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to the Holy Spirit, seeking His gifts and fruits to transform our lives.
            This traditional novena helps us prepare our hearts to receive the Holy Spirit more fully.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Holy Spirit</div>
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
            About the Pentecost Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Pentecost Novena is a powerful nine-day prayer to the Holy Spirit, traditionally prayed from 
              Ascension Thursday to Pentecost Sunday. This novena helps us to prepare our hearts to receive 
              the gifts and fruits of the Holy Spirit, just as the Apostles did in the Upper Room.
            </p>
            
            <p className="mb-4">
              During these nine days, we focus on the seven gifts of the Holy Spirit: Wisdom, Understanding, 
              Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord. We also pray for the fruits of the Spirit: 
              love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.
            </p>
            
            <p>
              This novena is particularly powerful because it connects us to the original Pentecost experience 
              and helps us to open our hearts to the transforming power of the Holy Spirit in our lives.
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
                href={`/novenas/pentecost/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Open Your Heart</h3>
              <p className="text-gray-700 text-sm">
                Begin each day by opening your heart to the Holy Spirit. Be willing to receive 
                whatever gifts He wants to give you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Expectation</h3>
              <p className="text-gray-700 text-sm">
                Pray with the expectation that the Holy Spirit will work in your life. 
                Trust that He will answer your prayers in His perfect timing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Receptive</h3>
              <p className="text-gray-700 text-sm">
                Be receptive to the promptings of the Holy Spirit throughout the day. 
                Listen for His voice in your heart and conscience.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Act on His Gifts</h3>
              <p className="text-gray-700 text-sm">
                When you receive the gifts of the Holy Spirit, put them into action. 
                Use them to serve God and others in your daily life.
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
                Believe in the power of the Holy Spirit and trust that He will guide you 
                and give you the gifts you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the promise that the Holy Spirit will transform your life and 
                make you more like Christ.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and allow the Holy Spirit to fill you with 
                His love for others.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Pentecost Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Pentecost devotion is a way of honoring and seeking the Holy Spirit, 
            who is our Advocate, Comforter, and Guide in our spiritual journey.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Pentecost Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔥</span>
                <span>Holy Spirit</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎁</span>
                <span>Gifts</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🍎</span>
                <span>Fruits</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Dove</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💨</span>
                <span>Wind</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Pentecost</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Receive the gifts and fruits of the Holy Spirit</li>
              <li>• Be guided by the Holy Spirit in our daily lives</li>
              <li>• Experience the transforming power of the Holy Spirit</li>
              <li>• Grow in holiness and become more like Christ</li>
              <li>• Be witnesses of the Holy Spirit's work in the world</li>
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