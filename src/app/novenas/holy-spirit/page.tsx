import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Holy Spirit Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Holy Spirit Novena with daily prayers, reflections, and guidance. Pray the traditional novena to prepare for Pentecost.',
  keywords: [
    'holy spirit novena',
    'holy spirit prayer',
    'pentecost novena',
    'holy spirit nine day prayer',
    'holy spirit devotion',
    'seven gifts holy spirit',
    'holy spirit novena prayer',
    'catholic holy spirit',
    'pentecost prayer'
  ],
  openGraph: {
    title: 'Holy Spirit Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Holy Spirit Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit',
  },
  twitter: {
    title: 'Holy Spirit Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Holy Spirit Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Wisdom',
    description: 'Pray for the gift of Wisdom to see things from God\'s perspective and understand divine things.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Understanding',
    description: 'Pray for the gift of Understanding to comprehend the truths of our faith more deeply.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Counsel',
    description: 'Pray for the gift of Counsel to make right decisions and give good advice to others.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Fortitude',
    description: 'Pray for the gift of Fortitude to have courage and strength in times of difficulty.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Knowledge',
    description: 'Pray for the gift of Knowledge to know God and His will for our lives.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Piety',
    description: 'Pray for the gift of Piety to have a deep love and reverence for God and holy things.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Fear of the Lord',
    description: 'Pray for the gift of Fear of the Lord to have a holy reverence and awe of God.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Fruits of the Spirit',
    description: 'Pray for the fruits of the Holy Spirit: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Consecration',
    description: 'Complete your consecration to the Holy Spirit and receive His final blessing.',
    slug: 'day-9'
  }
]

export default function HolySpiritNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Holy Spirit Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to prepare for Pentecost and receive the gifts of the Holy Spirit. 
            This traditional novena helps us grow in the seven gifts and fruits of the Holy Spirit.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌟</div>
              <div className="text-sm text-gray-600">Holy Spirit</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">7</div>
              <div className="text-sm text-gray-600">Gifts</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Holy Spirit Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Holy Spirit Novena is traditionally prayed during the nine days between the Ascension of Jesus and Pentecost, 
              just as the Apostles and Mary prayed in the Upper Room for the coming of the Holy Spirit.
            </p>
            
            <p className="mb-4">
              This novena helps us to prepare for the coming of the Holy Spirit and to receive His seven gifts: 
              Wisdom, Understanding, Counsel, Fortitude, Knowledge, Piety, and Fear of the Lord.
            </p>
            
            <p>
              Through this novena, we consecrate ourselves to the Holy Spirit and ask Him to transform us 
              more and more into the image of Jesus Christ, bearing the fruits of the Spirit in our lives.
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
                href={`/novenas/holy-spirit/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Openness</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with an open heart and mind. Be ready to receive the gifts 
                that the Holy Spirit wants to give you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Consecrate Yourself</h3>
              <p className="text-gray-700 text-sm">
                Each day, consecrate your understanding, heart, and will to the Holy Spirit. 
                Ask Him to guide you in all things.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek God's Perspective</h3>
              <p className="text-gray-700 text-sm">
                Ask the Holy Spirit to help you see things from God's perspective. 
                Pray for wisdom to understand His will for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Imitate Christ</h3>
              <p className="text-gray-700 text-sm">
                Ask the Holy Spirit to help you imitate the life and virtues of Jesus Christ. 
                Let Him transform you more and more into the image of Christ.
              </p>
            </div>
          </div>
        </section>

        {/* The Seven Gifts of the Holy Spirit */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Seven Gifts of the Holy Spirit
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Wisdom</h3>
              <p className="text-gray-700 text-sm">
                The ability to see things from God's perspective and understand divine things.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold text-black mb-2">Understanding</h3>
              <p className="text-gray-700 text-sm">
                The ability to comprehend the truths of our faith more deeply.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold text-black mb-2">Counsel</h3>
              <p className="text-gray-700 text-sm">
                The ability to make right decisions and give good advice to others.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-lg font-semibold text-black mb-2">Fortitude</h3>
              <p className="text-gray-700 text-sm">
                The courage and strength to face difficulties and challenges.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-lg font-semibold text-black mb-2">Knowledge</h3>
              <p className="text-gray-700 text-sm">
                The ability to know God and understand His will for our lives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2">Piety</h3>
              <p className="text-gray-700 text-sm">
                A deep love and reverence for God and all holy things.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">😨</div>
              <h3 className="text-lg font-semibold text-black mb-2">Fear of the Lord</h3>
              <p className="text-gray-700 text-sm">
                A holy reverence and awe of God, not fear of punishment.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Holy Spirit Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Holy Spirit devotion focuses on the third Person of the Holy Trinity, who is our Advocate, 
            Comforter, and Guide in our spiritual journey.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Holy Spirit Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Seven Gifts</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🍎</span>
                <span>Fruits</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔥</span>
                <span>Fire</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Dove</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Pentecost</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Consecration</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Receive the seven gifts of the Holy Spirit</li>
              <li>• Bear the fruits of the Spirit in our lives</li>
              <li>• Be guided by the Holy Spirit in all things</li>
              <li>• Grow in holiness and virtue</li>
              <li>• Be transformed more and more into the image of Christ</li>
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