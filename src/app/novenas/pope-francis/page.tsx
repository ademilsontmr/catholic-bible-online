import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Pope Francis - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Pope Francis with daily prayers, reflections, and guidance. Pray for Pope Francis and the Church.',
  keywords: [
    'novena for pope francis',
    'pope francis novena',
    'pope novena',
    'francis novena',
    'pope francis prayer',
    'pope prayer',
    'francis prayer',
    'pope francis nine day prayer',
    'pope nine day prayer',
    'francis nine day prayer',
    'pope francis devotion',
    'pope devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Pope Francis - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Pope Francis with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/pope-francis',
  },
  twitter: {
    title: 'Novena for Pope Francis - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Pope Francis with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Soul and Purification',
    description: 'Pray for Pope Francis\' soul and his purification in the presence of God.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Forgiveness',
    description: 'Pray for forgiveness of Pope Francis\' sins and human failings.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Thanksgiving',
    description: 'Pray in thanksgiving for Pope Francis\' good works and pastoral fruits.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'The Church',
    description: 'Pray for the Church Pope Francis leaves behind.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Successor',
    description: 'Pray for Pope Francis\' successor, the next Pope.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Unity',
    description: 'Pray for the unity of the faithful after Pope Francis\' death.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Cardinal Electors',
    description: 'Pray for the Cardinal electors who will choose Pope Francis\' successor.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Holy Spirit',
    description: 'Pray for the Holy Spirit to descend upon the Church, to watch over us and guide us.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Thanksgiving for Life',
    description: 'Pray in thanksgiving for Pope Francis\' life and legacy.',
    slug: 'day-9'
  }
]

export default function PopeFrancisNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Pope Francis
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to honor and pray for Pope Francis.
            This traditional novena helps us pray for the Holy Father and the Church during this important time.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Pope</div>
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
            About the Novena for Pope Francis
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Pope Francis is a traditional nine-day prayer that helps us honor and pray for the Holy Father.
              Pope Francis has been a shepherd of the Church, guiding us with his pastoral care and spiritual leadership.
            </p>
            
            <p className="mb-4">
              This novena helps us to pray for Pope Francis' soul, for the Church he leaves behind, and for his successor.
              It is a time to reflect on his ministry and to ask for God's mercy and guidance for the Church.
            </p>
            
            <p>
              Through this novena, we pray for the unity of the faithful, for the Cardinal electors, and for the Holy Spirit
              to guide the Church during this important transition period.
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
                href={`/novenas/pope-francis/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Reverence</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with reverence and respect for the Holy Father.
                Honor his memory and his service to the Church.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will hear our prayers for Pope Francis and the Church.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the Church and the next Pope.
                Pray for the particular needs of the Church during this time.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for Pope Francis' life and ministry.
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
                Believe in God's plan for the Church and trust in His guidance.
                Have faith that the Holy Spirit will guide the Church.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and His care for Pope Francis' soul.
                Trust in the future of the Church under God's guidance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Pope Francis as our spiritual father and pray for him with love.
                Show love for the Church and all its members.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Pope Francis Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Pope Francis devotion is a way of honoring and praying for the Holy Father,
            who has been our spiritual shepherd and guide in the Catholic Church.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Pope Francis Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👑</span>
                <span>Pope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>Nine Days</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Holy Spirit</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⛪</span>
                <span>Church</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Transition</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Honor and pray for Pope Francis' soul</li>
              <li>• Pray for the Church during this transition</li>
              <li>• Ask for God's guidance for the next Pope</li>
              <li>• Pray for unity among the faithful</li>
              <li>• Trust in the Holy Spirit's guidance</li>
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