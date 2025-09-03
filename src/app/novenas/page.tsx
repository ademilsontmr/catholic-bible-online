import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Catholic Novenas Collection',
  description: 'Complete collection of 101+ traditional Catholic novenas and nine-day prayers organized by category for easy navigation and daily spiritual practice.',
  keywords: [
    'catholic novenas',
    'nine day prayers',
    'marian novenas',
    'saint novenas',
    'healing novenas',
    'catholic prayers',
    'novena prayers',
    'catholic devotionals',
    'religious prayers',
    'spiritual novenas'
  ],
  openGraph: {
    title: 'Catholic Novenas Collection',
    description: 'Complete collection of 101+ traditional Catholic novenas and nine-day prayers organized by category for easy navigation and daily spiritual practice.',
    url: 'https://catholicbibleonline.com/novenas',
  },
  twitter: {
    title: 'Catholic Novenas Collection',
    description: 'Complete collection of 101+ traditional Catholic novenas and nine-day prayers organized by category for easy navigation and daily spiritual practice.',
  }
}

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
    count: 15,
    novenas: [
      'Novena for Physical Healing',
      'Novena for the Sick',
      'Novena for Emotional Healing',
      'Novena for Spiritual Healing',
      'Novena for Healing After Loss',
      'Novena for Healing from Childhood Trauma',
      'Novena for Healing and Strength',
      'Novena for Someone in a Coma',
      'Novena for Heart Disease',
      'Novena for Diabetes',
      'Novena for Cancer',
      'Novena for Chronic Illness',
      'Novena for Eyesight',
      'Novena for Difficult Pregnancy',
      'Novena for Doctors'
    ]
  },
  {
    slug: 'family',
    name: 'Family Novenas',
    description: 'Nine-day prayers for family life and relationships',
    icon: '👨‍👩‍👧‍👦',
    count: 12,
    novenas: [
      'Novena for Families',
      'Novena for Family Difficulties',
      'Novena for Marriage',
      'Novena for Children',
      'Novena for Grandchildren',
      'Novena for Fertility',
      'Novena for First Communion',
      'Novena for First Confession',
      'Novena for Homeschool',
      'Novena for College Graduation',
      'Novena for Students',
      'Novena for Exams'
    ]
  },
  {
    slug: 'life-situations',
    name: 'Life Situations',
    description: 'Nine-day prayers for various life circumstances',
    icon: '🌟',
    count: 14,
    novenas: [
      'Novena for Courage',
      'Novena for Difficult Times',
      'Novena for Clarity',
      'Novena for Financial Help',
      'Novena for Business Success',
      'Novena for Career Discernment',
      'Novena for New Year',
      'Novena for Easter',
      'Novena for Christmas and Advent',
      'Novena for Good Friday',
      'Novena for Corpus Christi',
      'Novena for Pentecost',
      'Novena for Ascension',
      'Novena for Assumption'
    ]
  },
  {
    slug: 'special-intentions',
    name: 'Special Intentions',
    description: 'Nine-day prayers for specific needs and intentions',
    icon: '🎯',
    count: 8,
    novenas: [
      'Novena for God\'s Blessings',
      'Novena for Grace',
      'Novena for Forgiveness',
      'Novena for Evangelization',
      'Novena for Spiritual Warfare',
      'Novena for Three Hail Marys',
      'Novena for March for Life',
      'Novena for Supreme Court'
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
  const totalNovenas = novenaCategories.reduce((sum, category) => sum + category.count, 0)

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
            Catholic Novenas Collection
          </h1>
          <p className="text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
            Complete collection of {totalNovenas}+ traditional Catholic novenas and nine-day prayers 
            organized by category for easy navigation and daily spiritual practice.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 gradient-text">{totalNovenas}+</div>
              <div className="text-gray-700 font-medium">Total Novenas</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 gradient-text">{novenaCategories.length}</div>
              <div className="text-gray-700 font-medium">Categories</div>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-md border border-gray-100">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 gradient-text">Daily</div>
              <div className="text-gray-700 font-medium">Updates</div>
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
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-2 py-1 rounded-full text-sm font-medium">
                    {category.count}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <div className="text-sm text-gray-500">
                  {category.novenas.slice(0, 3).join(', ')}
                  {category.novenas.length > 3 && '...'}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
            Start Your Novena Journey Today
          </h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Choose a novena that speaks to your heart and begin a nine-day journey of prayer and spiritual growth. 
            Each novena includes daily prayers, reflections, and guidance to help you deepen your relationship with God.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/prayers"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Explore Catholic Prayers
            </Link>
            <Link
              href="/saints"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Discover Saints
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}