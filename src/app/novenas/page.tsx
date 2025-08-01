'use client'

import Link from 'next/link'
import { useState } from 'react'

// Novena categories with counts for SEO and organization
const novenaCategories = [
  {
    slug: 'marian',
    name: 'Marian Novenas',
    description: 'Nine-day prayers to the Blessed Virgin Mary',
    icon: '🌹',
    count: 20,
    novenas: [
      'Novenas to Our Lady of Perpetual Help',
      'Novenas to Our Lady of Guadalupe',
      'Novenas to Our Lady of Lourdes',
      'Novenas to Our Lady of Fatima',
      'Novenas to Our Lady of the Rosary',
      'Novenas to Our Lady of Mount Carmel',
      'Novenas to Our Lady of Sorrows',
      'Novenas to the Immaculate Conception',
      'Novenas to Our Lady of Good Counsel',
      'Novenas to Our Lady of Good Remedy',
      'Novenas to Our Lady of Hope',
      'Novenas to Our Lady of Knock',
      'Novenas to Our Lady of the Holy Rosary',
      'Novenas to Our Lady of the Miraculous Medal',
      'Novenas to Mary Star of the Sea',
      'Novenas to the Nativity of the Blessed Virgin Mary',
      'Novenas to the Presentation of Mary',
      'Novenas for Peace to Our Lady of Sorrows',
      'Dedication of St. Mary Major Basilica Novena',
      'Mary Queen of All Hearts Novena'
    ]
  },
  {
    slug: 'saints',
    name: 'Saint Novenas',
    description: 'Nine-day prayers to various saints',
    icon: '🙏',
    count: 22,
    novenas: [
      'Novenas to St. Joseph',
      'Novenas to St. Anthony',
      'Novenas to St. Jude',
      'Novenas to St. Therese of Lisieux',
      'Novenas to St. Francis',
      'Novenas to St. Padre Pio',
      'Novenas to St. Faustina',
      'Novenas to St. Michael the Archangel',
      'Novenas to St. Raphael',
      'Novenas to St. Gabriel',
      'Novenas to St. Patrick',
      'Novenas to St. Nicholas',
      'Novenas to St. Augustine',
      'Novenas to St. Benedict',
      'Novenas to St. Gerard',
      'Novenas to St. John Vianney',
      'Novenas to St. Maximilian Kolbe',
      'Novenas to St. Rita of Cascia',
      'Novenas to St. Philomena',
      'Novenas to St. John Bosco',
      'Novenas to St. Peregrine',
      'Novenas to St. Catherine Labouré',
      'Novenas to Carlo Acutis',
      'Novenas to St. Joan of Arc',
      'Novenas to St. John Paul II',
      'Novenas to Mother Angelica',
      'Novenas to Saints Joachim and Anne',
      'North American Martyrs Novena'
    ]
  },
  {
    slug: 'devotions',
    name: 'Devotions',
    description: 'Nine-day prayers to Jesus and the Holy Spirit',
    icon: '❤️',
    count: 8,
    novenas: [
      'Novena to the Sacred Heart of Jesus',
      'Novena to the Holy Spirit',
      'Novena to the Divine Mercy',
      'Novena for Adoration of the Eucharist',
      'Novena to the Holy Ghost',
      'Novena to the Divine Infant Jesus',
      'Novena of Confidence to the Sacred Heart',
      'Guardian Angel Novena'
    ]
  },
  {
    slug: 'healing',
    name: 'Healing Novenas',
    description: 'Nine-day prayers for physical and spiritual healing',
    icon: '🏥',
    count: 15, // Updated: added Novena for Someone in a Coma
    novenas: [
      'Novena for Physical Healing',
      'Novena for the Sick',
      'Novena for Emotional Healing',
      'Novena for Spiritual Healing',
      'Novena for Healing from Anxiety and Fear',
      'Novena for Healing After Loss',
      'Novena for Healing and Strength',
      'Novena for Addiction Recovery',
      'Healing from Childhood Trauma Novena',
      'Novena for Cancer',
      'Novena for Chronic Illness',
      'Novena for Diabetes',
      'Novena for Heart Disease',
      'Novena for Mental Health',
      'Novena for Eyesight',
      'Novena for Someone in a Coma'
    ]
  },
  {
    slug: 'family',
    name: 'Family Novenas',
    description: 'Nine-day prayers for family intentions',
    icon: '👨‍👩‍👧‍👦',
    count: 7, // Updated: added Fertility, Family Difficulties
    novenas: [
      'Novenas for Marriage',
      'Novenas for Children',
      'Novenas for Families',
      'Novenas for Difficult Pregnancy',
      'Homeschool Novena',
      'Novena for Fertility',
      'Novena for Family Difficulties'
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Novenas',
    description: 'Nine-day prayers for liturgical seasons',
    icon: '🌸',
    count: 9, // Updated: added Good Friday
    novenas: [
      'Advent Novenas',
      'Christmas Novenas',
      'Lent Novenas',
      'Easter Novenas',
      'Ascension Novenas',
      'Assumption Novenas',
      'Pentecost Novenas',
      'New Year Novenas',
      'Novena for Good Friday'
    ]
  },
  {
    slug: 'special',
    name: 'Special Intentions',
    description: 'Nine-day prayers for specific intentions',
    icon: '✨',
    count: 33, // Updated: added Spiritual Warfare Novena
    novenas: [
      'Novenas for Employment',
      'Novena for Financial Help',
      'Novenas for Exams',
      'Novenas for Travel',
      'Novenas for Protection',
      'Novenas for Conversion',
      'Novenas for Peace',
      'Novenas Against Fear',
      'Novenas Against Evil',
      'Novenas for Grace',
      'Novenas for a New Home',
      'Three Hail Marys Novena',
      'March for Life Novena',
      'Novena for the Supreme Court',
      'Novena for Clarity',
      'Novena for Chastity',
      'Novena for Business Success',
      'Novena for Baptism',
      'Novena for College Graduation',
      'Novena for Grandchildren',
      'Novena for God\'s Blessings',
      'Novena for First Confession',
      'Novena for First Communion',
      'Novena for Firefighters',
      'Novena for Exams',
      'Novena for Evangelization',
      'Spiritual Warfare Novena'
    ]
  },
  {
    slug: 'christological',
    name: 'Christological Novenas',
    description: 'Nine-day prayers focused on Christ and His mysteries',
    icon: '✝️',
    count: 3,
    novenas: [
      'Novena to Christ the King',
      'Novena to the Holy Cross',
      'Novena to the Holy Family'
    ]
  },
  {
    slug: 'papal',
    name: 'Papal Novenas',
    description: 'Nine-day prayers for the Pope and Church leadership',
    icon: '👑',
    count: 2,
    novenas: [
      'Novena for the Pope',
      'Novena for Pope Francis'
    ]
  }
];

export default function NovenasPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const totalNovenas = novenaCategories.reduce((sum, category) => sum + category.count, 0)

  // Filter categories and novenas based on search term
  const filteredCategories = novenaCategories.filter(category => {
    const searchLower = searchTerm.toLowerCase()
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      category.novenas.some(novena => 
        novena.toLowerCase().includes(searchLower)
      )
    )
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Novenas Collection
          </h1>
          <p className="text-xl text-black mb-6 max-w-3xl mx-auto">
            Complete collection of {totalNovenas}+ traditional Catholic novenas and nine-day prayers 
            organized by category for easy navigation and daily spiritual practice.
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search novenas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{totalNovenas}+</div>
              <div className="text-black font-medium">Total Novenas</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">{novenaCategories.length}</div>
              <div className="text-black font-medium">Categories</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-gray-600">Daily</div>
              <div className="text-black font-medium">Updates</div>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredCategories.length > 0 
                ? `Found ${filteredCategories.length} category${filteredCategories.length !== 1 ? 'ies' : 'y'} matching "${searchTerm}"`
                : `No categories found matching "${searchTerm}"`
              }
            </p>
          </div>
        )}

        {/* Novena Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/novenas/${category.slug}`}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </div>
                </div>
                
                <h2 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700">
                  {category.name}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                
                {/* Preview of novenas */}
                <div className="space-y-1 mb-4">
                  {category.novenas.slice(0, 3).map((novena, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-500">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      {novena}
                    </div>
                  ))}
                  {category.novenas.length > 3 && (
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
                      +{category.novenas.length - 3} more novenas
                    </div>
                  )}
                </div>

                <div className="flex items-center text-gray-600 text-sm font-medium">
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
              { name: 'Novena to St. Jude Thaddeus (Patron of Hopeless Cases)', slug: 'st-jude' },
              { name: 'Novena to St. Rita of Cascia (Patroness of Impossible Causes)', slug: 'st-rita-cascia' },
              { name: 'Novena to St. Anthony of Padua', slug: 'st-anthony' },
              { name: 'Novena to St. Thérèse of Lisieux (The Little Flower)', slug: 'st-therese-lisieux' },
              { name: 'Novena to Our Lady of Lourdes', slug: 'our-lady-of-lourdes' },
              { name: 'Novena to Our Lady of the Miraculous Medal', slug: 'our-lady-of-the-miraculous-medal' },
              { name: 'Novena for Clarity', slug: 'clarity' },
              { name: 'Novena for Chronic Illness', slug: 'chronic-illness' },
              { name: 'Novena for Chastity', slug: 'chastity' },
              { name: 'Novena for Business Success', slug: 'business-success' },
              { name: 'Novena for Baptism', slug: 'baptism' },
              { name: 'Novena for College Graduation', slug: 'college-graduation' }
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