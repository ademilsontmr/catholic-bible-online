'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

// Novena categories data
const novenaCategories = [
  {
    slug: 'marian',
    name: 'Marian Novenas',
    description: 'Nine-day prayers to the Blessed Virgin Mary',
    icon: '🌹',
    count: 17,
                    novenas: [
                  { name: 'Novena to Our Lady of Perpetual Help', slug: 'our-lady-of-perpetual-help', available: true },
      { name: 'Novena to Our Lady of Fatima', slug: 'our-lady-of-fatima', available: true },
      { name: 'Novena to Our Lady of Mount Carmel', slug: 'our-lady-of-mount-carmel', available: true },
      { name: 'Novena to Our Lady of Sorrows', slug: 'our-lady-of-sorrows', available: true },
      { name: 'Novena to Our Lady of Good Counsel', slug: 'our-lady-of-good-counsel', available: true },
      { name: 'Novena to Our Lady of the Miraculous Medal', slug: 'our-lady-of-the-miraculous-medal', available: true },
                  { name: 'Novena to Our Lady of Guadalupe', slug: 'our-lady-of-guadalupe', available: true },
                  { name: 'Novena to Our Lady of Lourdes', slug: 'our-lady-of-lourdes', available: true },
      { name: 'Novena to the Holy Family', slug: 'holy-family', available: true },
      { name: 'The Assumption Novena', slug: 'assumption', available: true },
      { name: 'Our Lady of Pompei Novena', slug: 'our-lady-of-pompei', available: true },
      { name: 'Novena for Peace to Our Lady of Sorrows', slug: 'novena-for-peace-to-our-lady-of-sorrows', available: true },
      { name: 'Novena to Our Lady of Hope', slug: 'our-lady-of-hope', available: true },
      { name: 'Our Lady of the Holy Rosary Novena', slug: 'our-lady-of-the-holy-rosary', available: true },
      { name: 'The Three Hail Marys Novena', slug: 'three-hail-marys', available: true },
      { name: 'Our Lady of Good Remedy Novena', slug: 'our-lady-of-good-remedy', available: true },
      { name: 'Novena to Our Lady of Knock', slug: 'our-lady-of-knock', available: true }
                ]
  },
  {
    slug: 'saints',
    name: 'Saints Novenas',
    description: 'Nine-day prayers to various saints',
    icon: '🙏',
    count: 13,
    novenas: [
      { name: 'Novena to St. Rita of Cascia', slug: 'st-rita-cascia', available: true },
      { name: 'Novena to St. Catherine Labouré', slug: 'st-catherine-laboure', available: true },
      { name: 'Novena to St. Benedict', slug: 'st-benedict', available: true },
      { name: 'Novena to St. Peregrine', slug: 'st-peregrine', available: true },
      { name: 'Novena to St. John Bosco', slug: 'st-john-bosco', available: true },
      { name: 'St. Anthony Novena', slug: 'st-anthony', available: true },
      { name: 'Novena to St. Philomena', slug: 'st-philomena', available: true },
      { name: 'Novena to St. Joseph', slug: 'st-joseph', available: true },
      { name: 'St. Jude Novena', slug: 'st-jude', available: true },
      { name: 'Novena to St. Anne', slug: 'st-anne', available: true },
      { name: 'Novena to Carlo Acutis', slug: 'carlo-acutis', available: true },
      { name: 'Novena to St. Thérèse of Lisieux', slug: 'st-therese-lisieux', available: true }
    ]
  },
  {
    slug: 'devotions',
    name: 'Devotions',
    description: 'Nine-day prayers to Jesus and the Holy Spirit',
    icon: '❤️',
    count: 3,
    novenas: [
      { name: 'Novena to the Sacred Heart of Jesus', slug: 'sacred-heart', available: true },
      { name: 'Novena to the Holy Spirit', slug: 'holy-spirit', available: true },
      { name: 'Novena to the Divine Mercy', slug: 'divine-mercy', available: true }
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Novenas',
    description: 'Nine-day prayers for specific seasons',
    icon: '🎄',
    count: 3,
    novenas: [
      { name: 'Christmas Advent Novena', slug: 'christmas-advent', available: true },
      { name: 'Easter Novena', slug: 'easter', available: true },
      { name: 'Pentecost Novena', slug: 'pentecost', available: true }
    ]
  },
  {
    slug: 'healing',
    name: 'Healing Novenas',
    description: 'Nine-day prayers for physical and spiritual healing',
    icon: '🏥',
    count: 2,
    novenas: [
      { name: 'Novena for Physical Healing', slug: 'physical-healing', available: true },
      { name: 'Novena for the Sick', slug: 'sick', available: true }
    ]
  },
  {
    slug: 'family',
    name: 'Family Novenas',
    description: 'Nine-day prayers for family intentions',
    icon: '👨‍👩‍👧‍👦',
    count: 3,
    novenas: [
      { name: 'Novena for Families', slug: 'families', available: true },
      { name: 'Novena for Children', slug: 'children', available: true },
      { name: 'Novenas For Marriage', slug: 'marriage', available: true }
    ]
  },
  {
    slug: 'special',
    name: 'Special Novenas',
    description: 'Nine-day prayers for special intentions and occasions',
    icon: '🌟',
    count: 11,
    novenas: [
      { name: 'Divine Mercy Novena', slug: 'divine-mercy', available: true },
      { name: 'Christmas Advent Novena', slug: 'christmas-advent', available: true },
      { name: 'Novena of the Holy Spirit', slug: 'holy-spirit', available: true },
      { name: 'Holy Cross Novena', slug: 'holy-cross', available: true },
      { name: 'The Ascension Novena', slug: 'ascension', available: true },
      { name: 'Corpus Christi Novena', slug: 'corpus-christi', available: true },
      { name: 'Novena to Christ the King', slug: 'christ-the-king', available: true },
      { name: 'Novena to the Holy Ghost', slug: 'holy-ghost', available: true },
      { name: 'Novena for the Pope', slug: 'pope', available: true },
      { name: 'Novena of Trust to the Divine Infant Jesus', slug: 'divine-infant-jesus', available: true },
      { name: 'Novena of Confidence to the Sacred Heart', slug: 'sacred-heart-confidence', available: true }
    ]
  }
]

const availableNovenas = [
  'our-lady-of-perpetual-help',
  'our-lady-of-guadalupe',
  'our-lady-of-lourdes',
  'our-lady-of-fatima',
          'our-lady-of-mount-carmel',
        'our-lady-of-the-rosary',
        'our-lady-of-sorrows',
        'our-lady-of-good-counsel',
        'our-lady-of-the-miraculous-medal',
  'sacred-heart',
  'holy-spirit',
  'divine-mercy',
  'christmas-advent',
  'easter',
  'pentecost',
  'st-rita-cascia',
  'st-catherine-laboure',
  'st-benedict',
  'st-peregrine',
  'st-john-bosco',
  'st-anthony',
  'st-philomena',
  'st-joseph',
  'st-jude',
  'st-anne',
  'carlo-acutis',
  'st-therese-lisieux',
  'holy-spirit',
  'st-maximilian-kolbe',
  'st-gerard',
  'st-john-vianney',
  'novena-for-grace',
  'holy-cross',
  'holy-family',
  'assumption',
  'ascension',
  'corpus-christi',
  'christ-the-king',
  'holy-ghost',
  'pope',
  'divine-infant-jesus',
  'sacred-heart-confidence',
  'our-lady-of-pompei',
  'novena-for-peace-to-our-lady-of-sorrows',
  'our-lady-of-hope',
  'our-lady-of-the-holy-rosary',
  'three-hail-marys',
  'our-lady-of-good-remedy',
  'our-lady-of-knock',
  'families',
  'children',
  'marriage',
  'physical-healing',
  'sick'
]

interface PageProps {
  params: Promise<{
    category: string
  }>
}

export default function NovenaCategoryPage({ params }: PageProps) {
  const { category } = use(params)
  const categoryData = novenaCategories.find(cat => cat.slug === category)

  if (!categoryData) {
    notFound()
  }

  const novenasWithAvailability = categoryData.novenas.map(novena => ({
    ...novena,
    available: availableNovenas.includes(novena.slug)
  }))

  const availableCount = novenasWithAvailability.filter(n => n.available).length

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            {categoryData.description}
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">{categoryData.name}</span>
          </nav>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{categoryData.count}</div>
            <div className="text-gray-700">Total Novenas</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">{availableCount}</div>
            <div className="text-gray-700">Available Now</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{categoryData.icon}</div>
            <div className="text-gray-700">Category</div>
          </div>
        </div>

        {/* Novenas Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Novenas in this Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenasWithAvailability.map((novena) => (
              <div key={novena.slug} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    novena.available ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {novena.available ? 'Available' : 'Coming Soon'}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-black mb-3">
                  {novena.name}
                </h3>
                
                {novena.available ? (
                  <Link 
                    href={`/novenas/${novena.slug}`}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Start Novena →
                  </Link>
                ) : (
                  <div className="text-gray-500 text-sm">
                    This novena will be available soon. Check back later!
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Category Description */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">About {categoryData.name}</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                {categoryData.description} These powerful nine-day prayer devotions help us grow closer to God 
                and seek His grace and intercession for our needs and intentions.
              </p>
              
              <p className="mb-6">
                Each novena in this category focuses on a specific aspect of our faith and provides a structured 
                way to pray for nine consecutive days, building our relationship with God and the saints.
              </p>
              
              <p>
                Whether you're seeking healing, guidance, or spiritual growth, these novenas offer a powerful 
                way to deepen your faith and experience God's love and mercy in your life.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link 
            href="/novenas"
            className="inline-flex items-center px-8 py-4 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 