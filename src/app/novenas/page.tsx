import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catholic Novenas',
  description: 'Complete collection of Catholic novenas and nine-day prayers. Traditional novenas for various intentions, saints, and special devotions organized by category.',
  keywords: [
    'catholic novenas',
    'nine-day prayers',
    'traditional novenas',
    'catholic devotionals',
    'catholic faith',
    'novena prayers',
    'saint novenas',
    'marian novenas',
    'healing novenas',
    'family novenas',
    'seasonal novenas',
    'catholic nine-day prayers'
  ],
  openGraph: {
    title: 'Catholic Novenas | Catholic Bible Online',
    description: 'Complete collection of Catholic novenas and nine-day prayers organized by category.',
    url: 'https://catholicbibleonline.com/novenas',
  },
  twitter: {
    title: 'Catholic Novenas | Catholic Bible Online',
    description: 'Complete collection of Catholic novenas and nine-day prayers organized by category.',
  }
}

// Novena categories with counts for SEO and organization
const novenaCategories = [
  {
    slug: 'marian',
    name: 'Marian Novenas',
    description: 'Nine-day prayers to the Blessed Virgin Mary',
    icon: '👸',
    count: 8,
    novenas: [
      'Novenas to Our Lady of Perpetual Help',
      'Novenas to Our Lady of Guadalupe',
      'Novenas to Our Lady of Lourdes',
      'Novenas to Our Lady of Fatima',
      'Novenas to Our Lady of the Rosary',
      'Novenas to Our Lady of Mount Carmel',
      'Novenas to Our Lady of Sorrows',
      'Novenas to the Immaculate Conception'
    ]
  },
  {
    slug: 'saints',
    name: 'Saint Novenas',
    description: 'Nine-day prayers to various saints',
    icon: '🙏',
    count: 12,
    novenas: [
      'Novenas to St. Joseph',
      'Novenas to St. Anthony',
      'Novenas to St. Jude',
      'Novenas to St. Therese',
      'Novenas to St. Francis',
      'Novenas to St. Padre Pio',
      'Novenas to St. Faustina',
      'Novenas to St. Michael',
      'Novenas to St. Raphael',
      'Novenas to St. Gabriel',
      'Novenas to St. Patrick',
      'Novenas to St. Nicholas'
    ]
  },
  {
    slug: 'healing',
    name: 'Healing Novenas',
    description: 'Nine-day prayers for physical and spiritual healing',
    icon: '💝',
    count: 6,
    novenas: [
      'Novenas for Physical Healing',
      'Novenas for Emotional Healing',
      'Novenas for Spiritual Healing',
      'Novenas for Family Healing',
      'Novenas for Addiction Recovery',
      'Novenas for Mental Health'
    ]
  },
  {
    slug: 'family',
    name: 'Family Novenas',
    description: 'Nine-day prayers for family intentions',
    icon: '👨‍👩‍👧‍👦',
    count: 5,
    novenas: [
      'Novenas for Marriage',
      'Novenas for Children',
      'Novenas for Family Unity',
      'Novenas for Pregnancy',
      'Novenas for Family Protection'
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Novenas',
    description: 'Nine-day prayers for liturgical seasons',
    icon: '🌟',
    count: 4,
    novenas: [
      'Christmas Novenas',
      'Easter Novenas',
      'Pentecost Novenas',
      'Advent Novenas'
    ]
  },
  {
    slug: 'special',
    name: 'Special Intentions',
    description: 'Nine-day prayers for specific needs',
    icon: '✨',
    count: 7,
    novenas: [
      'Novenas for Employment',
      'Novenas for Financial Help',
      'Novenas for Conversion',
      'Novenas for Peace',
      'Novenas for the Souls in Purgatory',
      'Novenas for the Church',
      'Novenas for the World'
    ]
  }
];

export default function NovenasPage() {
  const totalNovenas = novenaCategories.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Novenas Collection
          </h1>
          <p className="text-xl text-black mb-6 max-w-3xl mx-auto">
            Comprehensive collection of {totalNovenas}+ traditional Catholic novenas and nine-day prayers 
            organized by category for powerful spiritual devotion and intercession.
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search novenas..."
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 text-black"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="prayer-stats mb-8">
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">{totalNovenas}+</div>
              <div className="prayer-stat-label">Total Novenas</div>
            </div>
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">{novenaCategories.length}</div>
              <div className="prayer-stat-label">Categories</div>
            </div>
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">9 Days</div>
              <div className="prayer-stat-label">Each Novena</div>
            </div>
          </div>
        </div>

        {/* Novena Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {novenaCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/novenas/${category.slug}`}
              className="group block"
            >
              <div className="prayer-category-card">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="prayer-category-count">
                    {category.count}
                  </div>
                </div>
                
                <h2 className="prayer-category-title group-hover:text-gray-700">
                  {category.name}
                </h2>
                
                <p className="prayer-category-description">
                  {category.description}
                </p>
                
                {/* Preview of novenas */}
                <div className="prayer-preview-list">
                  {category.novenas.slice(0, 3).map((novena, index) => (
                    <div key={index} className="prayer-preview-item">
                      <span className="prayer-preview-dot"></span>
                      {novena}
                    </div>
                  ))}
                  {category.novenas.length > 3 && (
                    <div className="prayer-preview-item">
                      <span className="prayer-preview-dot"></span>
                      +{category.novenas.length - 3} more novenas
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center text-gray-600 text-sm font-medium">
                  <span>View Collection</span>
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access to Popular Novenas */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Most Popular Novenas
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Novena to the Holy Spirit', slug: 'holy-spirit' },
              { name: 'Novena to the Sacred Heart of Jesus', slug: 'sacred-heart' },
              { name: 'Divine Mercy Novena', slug: 'divine-mercy' },
              { name: 'Christmas Novena (Advent Novena)', slug: 'christmas-advent' },
              { name: 'Novena to Our Lady of Perpetual Help', slug: 'our-lady-of-perpetual-help' },
              { name: 'Novena to St. Joseph', slug: 'st-joseph' },
              { name: 'Novena to St. Jude Thaddeus (Patron of Hopeless Cases)', slug: 'st-jude-thaddeus' },
              { name: 'Novena to St. Rita of Cascia (Patroness of Impossible Causes)', slug: 'st-rita-cascia' },
              { name: 'Novena to St. Anthony of Padua', slug: 'st-anthony-padua' },
              { name: 'Novena to St. Thérèse of the Child Jesus (The Little Flower)', slug: 'st-therese-little-flower' },
              { name: 'Novena to St. Michael the Archangel', slug: 'st-michael-archangel' },
              { name: 'Novena to Our Lady of the Miraculous Medal', slug: 'our-lady-miraculous-medal' }
            ].map((novena) => (
              <Link
                key={novena.slug}
                href={`/novenas/${novena.slug}`}
                className="prayer-popular-item group"
              >
                <h3 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                  {novena.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Novena Collection Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-semibold text-black mb-2">Traditional Texts</h3>
              <p className="text-gray-600 text-sm">
                Authentic Catholic novenas from official Church sources and centuries of tradition
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="font-semibold text-black mb-2">Easy Navigation</h3>
              <p className="text-gray-600 text-sm">
                Organized by category with search functionality to find exactly what you need
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold text-black mb-2">Mobile Friendly</h3>
              <p className="text-gray-600 text-sm">
                Optimized for praying novenas on any device, anywhere, anytime
              </p>
            </div>
          </div>
        </section>

        {/* What is a Novena Section */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is a Novena?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A novena is a nine-day period of prayer, often dedicated to a particular intention or saint. 
              The word "novena" comes from the Latin "novem," meaning nine. This tradition has deep roots 
              in Catholic spirituality and is based on the nine days the Apostles and Mary spent in prayer 
              between the Ascension and Pentecost.
            </p>
            
            <p className="mb-4">
              Novenas are powerful spiritual tools that help us:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Deepen our relationship with God and the saints</li>
              <li>Focus our prayers on specific intentions</li>
              <li>Develop consistency in our spiritual life</li>
              <li>Experience the power of persistent prayer</li>
              <li>Join with others in communal devotion</li>
            </ul>
            
            <p>
              Each novena typically includes daily prayers, reflections, and specific intentions, 
              making it a structured way to grow in faith and seek divine intercession.
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
} 