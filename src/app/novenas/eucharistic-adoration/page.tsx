import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Adoration of the Eucharist - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Adoration of the Eucharist with daily prayers, reflections, and guidance. Pray for deeper devotion to the Real Presence of Jesus in the Eucharist.',
  keywords: [
    'novena for adoration of the eucharist',
    'eucharistic adoration novena',
    'real presence novena',
    'blessed sacrament novena',
    'eucharist devotion novena',
    'adoration prayer novena',
    'eucharistic worship novena',
    'blessed sacrament adoration',
    'eucharist faith novena',
    'divine presence novena',
    'catholic eucharist adoration'
  ],
  openGraph: {
    title: 'Novena for Adoration of the Eucharist - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Adoration of the Eucharist with daily prayers, reflections, and guidance for deeper devotion to the Real Presence.',
    url: 'https://catholicbibleonline.com/novenas/eucharistic-adoration',
  },
  twitter: {
    title: 'Novena for Adoration of the Eucharist - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Adoration of the Eucharist with daily prayers, reflections, and guidance for deeper devotion to the Real Presence.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Growing in Faith in the Real Presence',
    description: 'Pray for the grace to grow in true, deep faith in the Real Presence of Jesus in the Eucharist.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Growing in Intimacy with Jesus',
    description: 'Pray to grow in true intimacy with Jesus through Eucharistic Adoration.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Growing in Reverence for the Eucharist',
    description: 'Pray for the grace to grow in reverence for the Body and Blood of Jesus.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Growing in Gratitude for the Eucharist',
    description: 'Pray to grow in gratitude for the precious gift of the Eucharist.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Supporting Eucharistic Adoration in Parishes',
    description: 'Pray for all parishes working to provide Eucharistic Adoration for their parishioners.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Growing in Perseverance in Prayer',
    description: 'Pray for the grace to grow in perseverance in prayer, especially Eucharistic Adoration.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Growing in Faith and Trust',
    description: 'Pray to grow in faith and trust in Jesus and His teachings.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Conversion of Those Who Disrespect the Eucharist',
    description: 'Pray for the conversion of all who treat the Body and Blood of Jesus with disrespect.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Blessing and Assistance for the Church',
    description: 'Pray for God\'s blessing and assistance for His Church and all its members.',
    slug: 'day-9'
  }
]

export default function NovenaForEucharisticAdorationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Adoration of the Eucharist
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to deepen our devotion to the Real Presence of Jesus in the Eucharist.
            This traditional novena helps us grow in faith, reverence, and love for the Blessed Sacrament.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
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
            About the Novena for Adoration of the Eucharist
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Adoration of the Eucharist is a profound spiritual practice designed to help you 
              deepen your devotion to the Real Presence of Jesus in the Blessed Sacrament. This novena invites 
              you to grow in faith, reverence, and love for the Eucharist, the greatest gift that Jesus has 
              given to His Church.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to appreciate more deeply the mystery of 
              the Eucharist, grow in faith in the Real Presence, and develop a greater desire to spend time 
              in adoration before the Blessed Sacrament. This novena helps you to understand that in the 
              Eucharist, Jesus is truly present - Body, Blood, Soul, and Divinity.
            </p>
            
            <p>
              Whether you are new to Eucharistic Adoration or have been practicing it for years, this novena 
              will help you to grow in your relationship with Jesus in the Eucharist and to appreciate more 
              fully this precious gift of His love for us.
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
                href={`/novenas/eucharistic-adoration/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and respect, recognizing the Real Presence of Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Believe completely in the Real Presence and trust in Jesus\' power to transform your heart.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to bless those who adore Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Express gratitude for the gift of the Eucharist and for the opportunity to adore Jesus.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in the Real Presence of Jesus in the Eucharist. Trust that He is truly present - Body, Blood, Soul, and Divinity.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the power of Eucharistic Adoration to transform your heart and draw you closer to Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love Jesus in the Eucharist with all your heart and desire to spend time in His presence.
              </p>
            </div>
          </div>
        </section>

        {/* What is Eucharistic Adoration? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Eucharistic Adoration?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Eucharistic Adoration is the practice of spending time in prayer before the Blessed Sacrament, 
              where Jesus is truly present under the appearance of bread and wine. It is a time to adore, 
              worship, and love Jesus in the Eucharist, recognizing that He is truly present - Body, Blood, 
              Soul, and Divinity.
            </p>
            <p className="mb-4">
              The Catholic Church teaches that in the Eucharist, Jesus is truly present in a unique and 
              substantial way. When we adore the Eucharist, we are not adoring bread and wine, but Jesus 
              Himself, who has given us this precious gift as a sign of His love and as spiritual nourishment 
              for our souls.
            </p>
            <p>
              Eucharistic Adoration helps us to grow in faith, deepen our relationship with Jesus, and 
              develop a greater appreciation for the gift of the Eucharist. It is a powerful way to draw 
              closer to God and to receive His grace and blessings.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Eucharistic Adoration</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to begin your journey toward deeper devotion to the Eucharist, start with Day 1 
            of this novena. Remember that Jesus is truly present in the Eucharist and longs for you to spend 
            time with Him in adoration. Trust in His love and allow His grace to work in your life.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/eucharistic-adoration/day-1"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Start Day 1: Growing in Faith in the Real Presence →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 