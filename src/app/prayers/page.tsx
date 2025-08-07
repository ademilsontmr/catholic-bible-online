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
    count: 15,
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
      'Evening Prayer',
      'Acts of Faith, Hope, and Love',
      'Prayer Before Communion',
      'Prayer After Communion'
    ]
  },
  {
    slug: 'rosary',
    name: 'Rosary Prayers',
    description: 'Complete rosary prayers and all mysteries',
    icon: '📿',
    count: 12,
    prayers: [
      'How to Pray the Rosary',
      'Joyful Mysteries',
      'Sorrowful Mysteries',
      'Glorious Mysteries',
      'Luminous Mysteries',
      'Hail Holy Queen',
      'Fatima Prayer',
      'Rosary for the Dead',
      'Rosary for Peace',
      'Rosary for the Family',
      'Rosary for Priests',
      'Divine Mercy Chaplet'
    ]
  },
  {
    slug: 'mass',
    name: 'Mass Prayers',
    description: 'Prayers used during the celebration of Mass',
    icon: '✞',
    count: 12,
    prayers: [
      'Kyrie Eleison',
      'Gloria in Excelsis',
      'Sanctus',
      'Memorial Acclamation',
      'Agnus Dei',
      'Spiritual Communion',
      'Confiteor',
      'Anima Christi',
      'Divine Praises',
      'Prayer to the Holy Spirit',
      'Prayer of the Faithful',
      'Final Blessing'
    ]
  },
  {
    slug: 'marian',
    name: 'Marian Prayers',
    description: 'Prayers to the Blessed Virgin Mary',
    icon: '👸',
    count: 15,
    prayers: [
      'Memorare',
      'The Angelus',
      'Regina Caeli',
      'Prayer to Our Lady of the Immaculate Conception',
      'Sub Tuum Praesidium',
      'Ave Maris Stella',
      'Salve Regina',
      'Magnificat',
      'Prayer to Our Lady of Perpetual Help',
      'Prayer to Our Lady of Guadalupe',
      'Prayer to Our Lady of Lourdes',
      'Prayer to Our Lady of Fatima',
      'Prayer to Our Lady of Mount Carmel',
      'Prayer to Our Lady of the Rosary',
      'Prayer to Our Lady of Sorrows'
    ]
  },
  {
    slug: 'saints',
    name: 'Saints Prayers',
    description: 'Prayers to various saints and holy figures',
    icon: '👼',
    count: 20,
    prayers: [
      'Prayer to St. Michael the Archangel',
      'Prayer to St. Joseph',
      'Prayer to St. Anthony',
      'Prayer to St. Jude',
      'Prayer to St. Therese',
      'Prayer to St. Francis',
      'Prayer to St. Patrick',
      'Prayer to St. Padre Pio',
      'Prayer to St. Benedict',
      'Prayer to St. Dominic',
      'Prayer to St. Ignatius',
      'Prayer to St. Thomas Aquinas',
      'Prayer to St. Augustine',
      'Prayer to St. Teresa of Avila',
      'Prayer to St. John of the Cross',
      'Prayer to St. Catherine of Siena',
      'Prayer to St. Faustina',
      'Prayer to St. Maximilian Kolbe',
      'Prayer to St. John Paul II',
      'Prayer to St. Mother Teresa'
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Prayers',
    description: 'Prayers for different liturgical seasons',
    icon: '🌿',
    count: 8,
    prayers: [
      'Advent Prayers',
      'Christmas Prayers',
      'Lent Prayers',
      'Easter Prayers',
      'Pentecost Prayers',
      'Ordinary Time Prayers',
      'All Saints Day Prayers',
      'All Souls Day Prayers'
    ]
  },
  {
    slug: 'devotional',
    name: 'Devotional Prayers',
    description: 'Special devotions and spiritual practices',
    icon: '🕯️',
    count: 12,
    prayers: [
      'Divine Mercy Chaplet',
      'Stations of the Cross',
      'Way of the Cross',
      'Litany of the Sacred Heart',
      'Litany of the Blessed Virgin Mary',
      'Litany of St. Joseph',
      'Litany of the Saints',
      'Prayer to the Holy Spirit',
      'Prayer for the Dead',
      'Prayer for the Sick',
      'Prayer for Peace',
      'Prayer for Vocations'
    ]
  },
  {
    slug: 'family',
    name: 'Family Prayers',
    description: 'Prayers for families and children',
    icon: '👨‍👩‍👧‍👦',
    count: 10,
    prayers: [
      'Family Prayer',
      'Prayer for Parents',
      'Prayer for Children',
      'Prayer for Married Couples',
      'Prayer for the Family',
      'Prayer for Grandparents',
      'Prayer for Siblings',
      'Prayer for the Home',
      'Prayer for Family Unity',
      'Prayer for Family Protection'
    ]
  },
  {
    slug: 'healing',
    name: 'Healing Prayers',
    description: 'Prayers for physical and spiritual healing',
    icon: '🏥',
    count: 8,
    prayers: [
      'Prayer for the Sick',
      'Prayer for Healing',
      'Prayer for Mental Health',
      'Prayer for Emotional Healing',
      'Prayer for Physical Healing',
      'Prayer for Spiritual Healing',
      'Prayer for Addiction Recovery',
      'Prayer for Inner Peace'
    ]
  },
  {
    slug: 'protection',
    name: 'Protection Prayers',
    description: 'Prayers for protection and deliverance',
    icon: '🛡️',
    count: 8,
    prayers: [
      'Prayer to St. Michael for Protection',
      'Prayer for Protection from Evil',
      'Prayer for Travel Protection',
      'Prayer for Home Protection',
      'Prayer for Work Protection',
      'Prayer for School Protection',
      'Prayer for Military Protection',
      'Prayer for Emergency Protection'
    ]
  },
  {
    slug: 'thanksgiving',
    name: 'Thanksgiving Prayers',
    description: 'Prayers of gratitude and thanksgiving',
    icon: '🙌',
    count: 6,
    prayers: [
      'Prayer of Thanksgiving',
      'Prayer for God\'s Blessings',
      'Prayer for Daily Gifts',
      'Prayer for Answered Prayers',
      'Prayer for God\'s Mercy',
      'Prayer for God\'s Love'
    ]
  },
  {
    slug: 'intercession',
    name: 'Intercessory Prayers',
    description: 'Prayers for others and the world',
    icon: '🤝',
    count: 10,
    prayers: [
      'Prayer for the Pope',
      'Prayer for Priests',
      'Prayer for Religious',
      'Prayer for the Church',
      'Prayer for the World',
      'Prayer for Peace',
      'Prayer for the Poor',
      'Prayer for the Suffering',
      'Prayer for Missionaries',
      'Prayer for Evangelization'
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-6">
            Catholic Prayers Collection
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Comprehensive collection of {totalPrayers}+ traditional Catholic prayers, devotions, and spiritual practices 
            organized by category for easy navigation and daily spiritual growth.
          </p>
          
          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search prayers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{totalPrayers}+</div>
              <div className="text-sm text-gray-600">Total Prayers</div>
            </div>
            <div className="bg-green-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-600 mb-2">{prayerCategories.length}</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-600 mb-2">Daily</div>
              <div className="text-sm text-gray-600">Updates</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">Free</div>
              <div className="text-sm text-gray-600">Access</div>
            </div>
          </div>
        </div>

        {/* Search Results Info */}
        {searchTerm && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredCategories.length > 0 
                ? `Found ${filteredCategories.length} categor${filteredCategories.length !== 1 ? 'ies' : 'y'} matching "${searchTerm}"`
                : `No categories found matching "${searchTerm}"`
              }
            </p>
          </div>
        )}

        {/* Prayer Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredCategories.map((category) => (
            <Link 
              key={category.slug}
              href={`/prayers/${category.slug}`}
              className="group block"
            >
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {category.count}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                
                <div className="space-y-1">
                  {category.prayers.slice(0, 3).map((prayer, index) => (
                    <div key={index} className="text-xs text-gray-500 truncate">
                      • {prayer}
                    </div>
                  ))}
                  {category.prayers.length > 3 && (
                    <div className="text-xs text-blue-600 font-medium">
                      +{category.prayers.length - 3} more prayers
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Prayers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Featured Prayers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/prayers/our-father" className="group block">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">🙏</div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Our Father</h3>
                <p className="text-sm text-gray-600">The Lord's Prayer taught by Jesus</p>
              </div>
            </Link>
            
            <Link href="/prayers/hail-mary" className="group block">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">👸</div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-pink-600">Hail Mary</h3>
                <p className="text-sm text-gray-600">Prayer to the Blessed Virgin Mary</p>
              </div>
            </Link>
            
            <Link href="/prayers/glory-be" className="group block">
              <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-green-600">Glory Be</h3>
                <p className="text-sm text-gray-600">Doxology to the Holy Trinity</p>
              </div>
            </Link>
            
            <Link href="/prayers/apostles-creed" className="group block">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-6 hover:shadow-lg transition-all">
                <div className="text-3xl mb-3">📜</div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-purple-600">Apostles' Creed</h3>
                <p className="text-sm text-gray-600">Statement of Catholic faith</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Quick Navigation */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Quick Navigation</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <Link href="/prayers/basic" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">🙏</div>
              <div className="text-sm font-medium text-gray-700">Basic</div>
            </Link>
            <Link href="/prayers/rosary" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">📿</div>
              <div className="text-sm font-medium text-gray-700">Rosary</div>
            </Link>
            <Link href="/prayers/mass" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">✞</div>
              <div className="text-sm font-medium text-gray-700">Mass</div>
            </Link>
            <Link href="/prayers/marian" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">👸</div>
              <div className="text-sm font-medium text-gray-700">Marian</div>
            </Link>
            <Link href="/prayers/saints" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">👼</div>
              <div className="text-sm font-medium text-gray-700">Saints</div>
            </Link>
            <Link href="/prayers/devotional" className="text-center p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors">
              <div className="text-2xl mb-2">🕯️</div>
              <div className="text-sm font-medium text-gray-700">Devotional</div>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-gray-600">
          <p className="mb-4">
            Discover the rich tradition of Catholic prayer and deepen your spiritual life with these timeless devotions.
          </p>
          <p className="text-sm">
            All prayers are free to use and share. May they bring you closer to God and His love.
          </p>
        </div>
      </div>
    </div>
  )
} 