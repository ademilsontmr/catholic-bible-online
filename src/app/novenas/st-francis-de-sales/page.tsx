import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Francis de Sales Novena with daily prayers, reflections, and guidance. Pray for writers, journalists, and spiritual direction.',
  keywords: [
    'st francis de sales novena',
    'francis de sales novena',
    'saint francis de sales novena',
    'writers patron saint novena',
    'journalists patron saint novena',
    'spiritual direction novena',
    'devout life novena',
    'catholic writers novena',
    'gentle saint novena',
    'francis de sales nine day prayer',
    'writers saint novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'St. Francis de Sales Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Francis de Sales Novena with daily prayers, reflections, and guidance for writers and spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-francis-de-sales',
  },
  twitter: {
    title: 'St. Francis de Sales Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Francis de Sales Novena with daily prayers, reflections, and guidance for writers and spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Gentleness',
    description: 'Pray for the virtue of gentleness in all our interactions and communications.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Writing',
    description: 'Pray for Catholic writers and journalists to use their gifts for God\'s glory.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Spiritual Direction',
    description: 'Pray for spiritual directors and guidance in our spiritual journey.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Universal Call to Holiness',
    description: 'Pray for holiness in daily life, following St. Francis de Sales\' teaching.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Patience',
    description: 'Pray for patience in difficulties and challenges we face.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Love of God',
    description: 'Pray for deeper love of God and to grow in our relationship with Him.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Prayer',
    description: 'Pray for growth in prayer life and to develop a deeper prayer relationship.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humility',
    description: 'Pray for the virtue of humility, following St. Francis de Sales\' example.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Devout Life',
    description: 'Pray for living a devout life in the world, as taught by St. Francis de Sales.',
    slug: 'day-9'
  }
]

export default function StFrancisDeSalesNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of St. Francis de Sales, patron saint of writers, journalists, and spiritual direction.
            This traditional novena helps us grow in gentleness, patience, and the universal call to holiness.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✍️</div>
              <div className="text-sm text-gray-600">Writing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Gentleness</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the St. Francis de Sales Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Francis de Sales Novena is a traditional nine-day prayer that helps us grow closer to this gentle saint
              and experience his intercession for writers, journalists, and all who seek spiritual direction. St. Francis de Sales
              is our patron and guide, showing us how to live holiness in everyday life.
            </p>
            
            <p className="mb-4">
              The title "Gentle Saint" reminds us that holiness is not about harshness or rigidity, but about gentleness,
              patience, and love. St. Francis de Sales teaches us that everyone is called to holiness, regardless of their
              state in life.
            </p>
            
            <p>
              This novena helps us to trust in St. Francis de Sales' intercession and to turn to him with confidence
              in every need, especially for those who work with words and those seeking spiritual growth.
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
                href={`/novenas/st-francis-de-sales/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Francis de Sales</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Francis de Sales' intercession and his ability to help you.
                Turn to him with confidence in every need, especially for writers and spiritual guidance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Francis de Sales will not fail to help those who turn to him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Francis de Sales.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Francis de Sales for his intercession and for the graces you receive.
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
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