import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New Year Novena - Complete 9-Day Prayer Guide',
  description: 'Complete New Year Novena with daily prayers, reflections, and guidance. Pray for blessings, grace, and a holy new year.',
  keywords: [
    'new year novena',
    'new year prayer novena',
    'blessed new year novena',
    'new year grace novena',
    'new year spiritual novena',
    'new year material novena',
    'new year happiness novena',
    'new year trust novena',
    'new year holiness novena',
    'catholic new year prayer'
  ],
  openGraph: {
    title: 'New Year Novena - Complete 9-Day Prayer Guide',
    description: 'Complete New Year Novena with daily prayers, reflections, and guidance for blessings and a holy new year.',
    url: 'https://catholicbibleonline.com/novenas/new-year',
  },
  twitter: {
    title: 'New Year Novena - Complete 9-Day Prayer Guide',
    description: 'Complete New Year Novena with daily prayers, reflections, and guidance for blessings and a holy new year.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Spiritual Blessings',
    description: 'Pray for spiritual blessings needed in the new year.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Material Assistance',
    description: 'Pray for material assistance needed in the new year.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Blessing of Happiness',
    description: 'Pray for the blessing of happiness in the new year.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Unknown Assistance',
    description: 'Pray for assistance we do not know we need.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Help for Struggles',
    description: 'Pray for help for those who struggled in the past year.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Deeper Trust',
    description: 'Pray for growth in deeper trust in God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Openness to God\'s Will',
    description: 'Pray for growth in openness to God\'s will.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Deeper Friendship',
    description: 'Pray for growth in deeper friendship with God.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Commitment to Holiness',
    description: 'Pray for renewal of commitment to living saintly lives.',
    slug: 'day-9'
  }
]

export default function NewYearNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            New Year Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's blessings and grace for a holy and blessed new year.
            This traditional novena helps you begin the year with spiritual strength and divine guidance.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎆</div>
              <div className="text-sm text-gray-600">New Year</div>
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
            About the New Year Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The New Year Novena is a beautiful spiritual practice designed to help you begin the new year 
              with God's blessings and grace. This novena recognizes that we depend on God for all things 
              in our lives, and His loving providence keeps our lives in existence. As we begin a new year, 
              we acknowledge His power over our lives and seek His help in all that we need.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Jesus for spiritual blessings, 
              material assistance, happiness, and all the graces needed for a holy new year. This novena 
              helps you to understand that God knows what is best for us even better than we do ourselves, 
              and He can provide all that we need to carry out our lives faithfully.
            </p>
            
            <p>
              Whether you are seeking spiritual growth, material assistance, happiness, or simply want to 
              begin the new year with God's guidance, this novena will help you to find the blessings and 
              grace you need through Jesus' loving care and providence.
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
                href={`/novenas/new-year/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's loving providence and His power to bless your new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's knowledge of what is best for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to God's will and His plan for your new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Committed</h3>
              <p className="text-gray-700 text-sm">
                Commit to growing in holiness and serving God faithfully.
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
                Believe in God's power to bless and guide your new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to provide all you need in the new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His care for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is a New Year? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is a New Year?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A new year represents a fresh beginning, a time of renewal and new opportunities. In the Catholic 
              understanding, a new year is a gift from God that allows us to grow closer to Him, to renew our 
              commitment to holiness, and to seek His guidance for the journey ahead.
            </p>
            <p className="mb-4">
              As we begin a new year, we acknowledge that we depend on God for all things in our lives. His 
              loving providence keeps our lives in existence, and He knows what is best for us even better 
              than we do ourselves. A new year is an opportunity to place our trust in God and seek His 
              blessings for spiritual growth, material assistance, and happiness.
            </p>
            <p>
              This novena helps you to begin the new year with God's grace and guidance, knowing that He 
              can provide all that you need to live a holy and blessed life throughout the year ahead.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Blessed New Year</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your new year with God's blessings and grace, start with Day 1 
            of this novena. Remember that God's loving providence keeps your life in existence, and 
            He knows what is best for you even better than you do yourself.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/new-year/day-1"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Day 1: Spiritual Blessings →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 