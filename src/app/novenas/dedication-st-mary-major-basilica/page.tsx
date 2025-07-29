import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dedication of St. Mary Major Basilica Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Dedication of St. Mary Major Basilica Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession and honor the dedication of her basilica.',
  keywords: [
    'dedication st mary major basilica novena',
    'st mary major basilica novena',
    'mary major basilica novena',
    'basilica dedication novena',
    'st mary major prayer',
    'basilica dedication prayer',
    'mary major nine day prayer',
    'basilica novena',
    'mary major devotion',
    'catholic novena',
    'basilica dedication devotion'
  ],
  openGraph: {
    title: 'Dedication of St. Mary Major Basilica Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Dedication of St. Mary Major Basilica Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/dedication-st-mary-major-basilica',
  },
  twitter: {
    title: 'Dedication of St. Mary Major Basilica Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Dedication of St. Mary Major Basilica Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Pilgrims and Devotion',
    description: 'Pray for all pilgrims visiting the basilica and for growth in devotion to Mary.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Devotion to Mary',
    description: 'Pray that all people may grow in devotion to Mary as our mother.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Intimacy with Jesus',
    description: 'Pray that all people may grow in intimacy with Jesus through Mary.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Piety and Holiness',
    description: 'Pray that all people may grow in piety and holiness through devotion.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Charity and Service',
    description: 'Pray that all people may grow in charity and service to others.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Holy Poverty',
    description: 'Pray that all people may grow in holy poverty and detachment.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Faith and Generosity',
    description: 'Pray that all people may grow in faith and generosity.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Holy Father and Church',
    description: 'Pray for our Holy Father and for the Church\'s leadership.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'The Church',
    description: 'Pray for Mary\'s Son\'s Church and all its members.',
    slug: 'day-9'
  }
]

export default function DedicationStMaryMajorBasilicaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Dedication of St. Mary Major Basilica Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to honor the dedication of St. Mary Major Basilica and seek Mary's intercession.
            This traditional novena helps us grow closer to God and experience His mercy and love through devotion to Mary.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Basilica</div>
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
            About the Dedication of St. Mary Major Basilica Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Dedication of St. Mary Major Basilica Novena is a traditional nine-day prayer that helps us grow closer to God 
              and experience His mercy and love through devotion to Mary. The basilica was dedicated in honor of Mary, and this novena 
              helps us honor her and grow closer to her Son.
            </p>
            
            <p className="mb-4">
              The title "Dedication of St. Mary Major Basilica Novena" reminds us that Mary is our mother and intercessor.
              She is always ready to help us grow in holiness and bring our prayers to Jesus, just as the basilica was dedicated to her honor.
            </p>
            
            <p>
              This novena helps us to honor Mary, grow in devotion to her, and through her intercession, grow closer to Jesus. 
              We pray for pilgrims, devotion, intimacy with Jesus, piety, charity, poverty, faith, generosity, and the Church.
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
                href={`/novenas/dedication-st-mary-major-basilica/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's ability to help you grow closer to Jesus.
                Turn to her with confidence in every situation that requires her intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Spiritual growth is a process that takes time.
                Be patient with yourself and trust in Mary's timing.
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
                Believe in Mary's intercession and her ability to help us grow closer to Jesus.
                Trust that she will bring our prayers to her Son.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise to help us grow in holiness.
                She is always ready to assist us in our spiritual growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary and Jesus as Mary loves us, showing our love through devotion and prayer.
                Show our love through honoring Mary and growing closer to Jesus.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Dedication of St. Mary Major Basilica Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Dedication of St. Mary Major Basilica devotion is a way of honoring Mary and growing in devotion to her, 
            following the example of the Church which dedicated this great basilica to her honor.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Basilica Dedication Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⛪</span>
                <span>Basilica</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Devotion</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Honor</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Intercession</span>
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
              <li>• Trust in Mary's intercession and her ability to help us grow closer to Jesus</li>
              <li>• Grow closer to God through devotion to Mary</li>
              <li>• Experience God's love and mercy through Mary's maternal care</li>
              <li>• Honor Mary as our mother and intercessor</li>
              <li>• Follow the Church's example in dedicating places of worship to Mary</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas/marian"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            ← Back to Marian Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 