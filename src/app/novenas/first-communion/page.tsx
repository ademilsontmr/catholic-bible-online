import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for First Communion with daily prayers, reflections, and guidance. Pray for preparation to receive the Holy Eucharist for the first time.',
  keywords: [
    'novena for first communion',
    'first communion novena',
    'holy eucharist novena',
    'first communion preparation novena',
    'first communion prayer',
    'holy eucharist prayer',
    'first communion nine day prayer',
    'holy eucharist nine day prayer',
    'first communion devotion',
    'holy eucharist devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for First Communion - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for First Communion with daily prayers, reflections, and guidance for spiritual preparation.',
    url: 'https://catholicbibleonline.com/novenas/first-communion',
  },
  twitter: {
    title: 'Novena for First Communion - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for First Communion with daily prayers, reflections, and guidance for spiritual preparation.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Preparation',
    description: 'Pray for preparation of children and adults for their First Holy Communion with God\'s grace and guidance.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Adult Preparation',
    description: 'Pray for adults who are preparing to make their First Holy Communion for the first time.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love for Eucharist',
    description: 'Pray for growing in love for the Holy Eucharist and appreciation of this precious gift.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Religious Education',
    description: 'Pray for those who work in sacramental preparation and religious education.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Vocations',
    description: 'Pray for inspiring First Communicants to consider priesthood and religious life.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Intimacy with God',
    description: 'Pray for growing in deeper intimacy with God through the Holy Eucharist.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Reverence',
    description: 'Pray for growing in reverence and proper worship at every Mass.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Worthy Reception',
    description: 'Pray for always receiving the Eucharist worthily and in a state of grace.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Church Building',
    description: 'Pray for strengthening the Church through worthy reception of the Eucharist.',
    slug: 'day-9'
  }
]

export default function NovenaForFirstCommunionPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to prepare for receiving the Holy Eucharist for the first time.
            This traditional novena helps us prepare spiritually and emotionally for this most precious sacrament.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🍷</div>
              <div className="text-sm text-gray-600">Eucharist</div>
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
            About the Novena for First Communion
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for First Communion is a traditional nine-day prayer designed to prepare children and adults 
              for receiving the Holy Eucharist for the first time. The Eucharist is the most precious gift from God, 
              where we receive the Body and Blood of Jesus Christ, truly present under the appearances of bread and wine.
            </p>
            
            <p className="mb-4">
              The title "First Communion" reminds us that this sacrament is a significant milestone in our spiritual 
              journey. It is the beginning of a lifelong relationship with Jesus through the reception of His Body and Blood, 
              which nourishes our souls and unites us more closely to Him.
            </p>
            
            <p>
              This novena helps us to prepare spiritually and emotionally for this most precious sacrament, 
              addressing the importance of proper preparation, reverence, and love for the Eucharist.
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
                href={`/novenas/first-communion/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Prepare your heart and mind for receiving the Holy Eucharist. 
                Reflect on the great gift of Jesus' Body and Blood.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and love. 
                Remember that you are receiving the Body and Blood of Christ.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who prepare for His sacraments.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the Holy Eucharist. 
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
                Believe in the Real Presence of Jesus in the Eucharist. 
                Trust that you are truly receiving the Body and Blood of Christ.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the promise of eternal life through the Eucharist. 
                Look forward to the spiritual nourishment and grace it provides.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Jesus with all your heart and receive Him with love. 
                Show your love through reverence and devotion to the Eucharist.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the First Communion Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The First Communion devotion is a way of preparing spiritually and emotionally for receiving 
            the Holy Eucharist for the first time, seeking God's grace and guidance.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of First Communion Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🍷</span>
                <span>Eucharist</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⛪</span>
                <span>Church</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Blessing</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Prepare spiritually for receiving the Holy Eucharist</li>
              <li>• Grow in love and reverence for the Eucharist</li>
              <li>• Develop proper understanding of the Real Presence</li>
              <li>• Strengthen our relationship with Jesus Christ</li>
              <li>• Experience the grace and blessing of First Communion</li>
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