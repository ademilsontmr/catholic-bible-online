'use client'

import Link from 'next/link'
import { useState } from 'react'

// Prayer categories with counts for SEO and organization
const prayerCategories = [
  {
    slug: 'basic',
    name: 'Basic Prayers',
    description: 'Essential Catholic prayers every Catholic should know',
    icon: '🙏',
    count: 12,
    prayers: [
      'Sign of the Cross',
      'Our Father',
      'Hail Mary',
      'Glory Be',
      'Apostles\' Creed',
      'Nicene Creed',
      'Act of Contrition',
      'Guardian Angel Prayer',
      'Grace Before Meals',
      'Grace After Meals',
      'Morning Offering',
      'Acts of Faith, Hope, and Love'
    ]
  },
  {
    slug: 'rosary',
    name: 'Rosary Prayers',
    description: 'Complete rosary prayers and mysteries',
    icon: '📿',
    count: 7,
    prayers: [
      'How to Pray the Rosary',
      'Joyful Mysteries',
      'Sorrowful Mysteries',
      'Glorious Mysteries',
      'Luminous Mysteries',
      'Hail Holy Queen',
      'Fatima Prayer'
    ]
  },
  {
    slug: 'mass',
    name: 'Mass Prayers',
    description: 'Prayers used during the celebration of Mass',
    icon: '✞',
    count: 9,
    prayers: [
      'Kyrie Eleison',
      'Gloria in Excelsis',
      'Sanctus',
      'Memorial Acclamation',
      'Agnus Dei',
      'Spiritual Communion',
      'Confiteor',
      'Anima Christi',
      'Divine Praises'
    ]
  },
  {
    slug: 'marian',
    name: 'Marian Prayers',
    description: 'Prayers to the Blessed Virgin Mary',
    icon: '👸',
    count: 7,
    prayers: [
      'Memorare',
      'The Angelus',
      'Regina Caeli',
      'Prayer to Our Lady of the Immaculate Conception',
      'Sub Tuum Praesidium',
      'Ave Maris Stella',
      'Salve Regina'
    ]
  },
  {
    slug: 'saints',
    name: 'Saints Prayers',
    description: 'Prayers to various saints and holy figures',
    icon: '👼',
    count: 8,
    prayers: [
      'Prayer to St. Michael the Archangel',
      'Prayer to St. Joseph',
      'Prayer to St. Anthony',
      'Prayer to St. Jude',
      'Prayer to St. Therese',
      'Prayer to St. Francis',
      'Prayer to St. Patrick',
      'Prayer to St. Padre Pio'
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Prayers',
    description: 'Prayers for different liturgical seasons',
    icon: '🌿',
    count: 6,
    prayers: [
      'Advent Prayers',
      'Christmas Prayers',
      'Lent Prayers',
      'Easter Prayers',
      'Pentecost Prayers',
      'Ordinary Time Prayers'
    ]
  }
];

export default function PrayersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const totalPrayers = prayerCategories.reduce((sum, category) => sum + category.count, 0)

  // Filter categories and prayers based on search term
  const filteredCategories = prayerCategories.filter(category => {
    const searchLower = searchTerm.toLowerCase()
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      category.prayers.some(prayer => 
        prayer.toLowerCase().includes(searchLower)
      )
    )
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Catholic Prayers Collection
          </h1>
          <p className="text-xl text-black mb-6 max-w-3xl mx-auto">
            Comprehensive collection of {totalPrayers}+ traditional Catholic prayers, devotions, and novenas 
            organized by category for easy navigation and daily spiritual practice.
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search prayers..."
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
          <div className="prayer-stats mb-8">
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">{totalPrayers}+</div>
              <div className="prayer-stat-label">Total Prayers</div>
            </div>
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">{prayerCategories.length}</div>
              <div className="prayer-stat-label">Categories</div>
            </div>
            <div className="prayer-stat-card">
              <div className="prayer-stat-number">Daily</div>
              <div className="prayer-stat-label">Updates</div>
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

        {/* Prayer Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/prayers/${category.slug}`}
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
                
                {/* Preview of prayers */}
                <div className="prayer-preview-list">
                  {category.prayers.slice(0, 3).map((prayer, index) => (
                    <div key={index} className="prayer-preview-item">
                      <span className="prayer-preview-dot"></span>
                      {prayer}
                    </div>
                  ))}
                  {category.prayers.length > 3 && (
                    <div className="prayer-preview-item">
                      <span className="prayer-preview-dot"></span>
                      +{category.prayers.length - 3} more prayers
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

        {/* Quick Access to Popular Prayers */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            Most Popular Prayers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: 'Our Father', slug: 'our-father' },
              { name: 'Hail Mary', slug: 'hail-mary' },
              { name: 'The Rosary', slug: 'rosary' },
              { name: 'Prayer to St. Michael', slug: 'prayer-to-st-michael' },
              { name: 'Memorare', slug: 'memorare' },
              { name: 'Angelus', slug: 'angelus' },
              { name: 'Prayer Before Communion', slug: 'prayer-before-communion' },
              { name: 'Guardian Angel Prayer', slug: 'guardian-angel-prayer' }
            ].map((prayer) => (
              <Link
                key={prayer.slug}
                href={`/prayers/${prayer.slug}`}
                className="prayer-popular-item group"
              >
                <h3 className="font-semibold text-black group-hover:text-gray-700 transition-colors">
                  {prayer.name}
                </h3>
              </Link>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Prayer Collection Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-semibold text-black mb-2">Traditional Texts</h3>
              <p className="text-gray-600 text-sm">
                Authentic Catholic prayers from official Church sources and centuries of tradition
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
                Optimized for reading and praying on any device, anywhere, anytime
              </p>
            </div>
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