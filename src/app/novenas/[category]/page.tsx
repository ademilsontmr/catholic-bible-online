import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  const categoryData = novenaCategories.find(cat => cat.slug === category)
  
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested novena category could not be found.'
    }
  }

  return {
    title: `${categoryData.name} - Novena Category`,
    description: categoryData.description,
    keywords: [
      categoryData.name.toLowerCase(),
      'novenas',
      'catholic prayers',
      'nine day prayers'
    ],
    openGraph: {
      title: `${categoryData.name} - Novena Category`,
      description: categoryData.description,
      url: `https://catholicbibleonline.com/novenas/${category}`,
    },
    twitter: {
      title: `${categoryData.name} - Novena Category`,
      description: categoryData.description,
    }
  }
}

const novenaCategories = [
  {
    slug: 'marian',
    name: 'Marian Novenas',
    description: 'Nine-day prayers to the Blessed Virgin Mary',
    icon: '🌹',
    count: 20, // Updated from 19
    novenas: [
      { name: 'Novena to Our Lady of Perpetual Help', slug: 'our-lady-of-perpetual-help', available: true },
      { name: 'Novena to Our Lady of Fatima', slug: 'our-lady-of-fatima', available: true },
      { name: 'Novena to Our Lady of Guadalupe', slug: 'our-lady-of-guadalupe', available: true },
      { name: 'Novena to Our Lady of Lourdes', slug: 'our-lady-of-lourdes', available: true },
      { name: 'Novena to Our Lady of Pompei', slug: 'our-lady-of-pompei', available: true },
      { name: 'Novena to Our Lady of Mount Carmel', slug: 'our-lady-of-mount-carmel', available: true },
      { name: 'Novena to Our Lady of Sorrows', slug: 'our-lady-of-sorrows', available: true },
      { name: 'Immaculate Conception Novena', slug: 'immaculate-conception', available: true },
      { name: 'Nativity of the Blessed Virgin Mary Novena', slug: 'nativity-blessed-virgin-mary', available: true },
      { name: 'The Presentation of Mary Novena', slug: 'presentation-of-mary', available: true },
      { name: 'Novena to Mary Star of the Sea', slug: 'mary-star-of-the-sea', available: true },
      { name: 'Novena to Our Lady of Good Counsel', slug: 'our-lady-of-good-counsel', available: true },
      { name: 'Novena to Our Lady of Good Remedy', slug: 'our-lady-of-good-remedy', available: true },
      { name: 'Novena to Our Lady of Hope', slug: 'our-lady-of-hope', available: true },
      { name: 'Novena to Our Lady of Knock', slug: 'our-lady-of-knock', available: true },
      { name: 'Novena to Our Lady of the Holy Rosary', slug: 'our-lady-of-the-holy-rosary', available: true },
      { name: 'Novena to Our Lady of the Miraculous Medal', slug: 'our-lady-of-the-miraculous-medal', available: true },
      { name: 'Novena to Our Lady of the Rosary', slug: 'our-lady-of-the-rosary', available: true },
      { name: 'Dedication of St. Mary Major Basilica Novena', slug: 'dedication-st-mary-major-basilica', available: true },
      { name: 'Mary Queen of All Hearts Novena', slug: 'mary-queen-of-all-hearts', available: true }
    ]
  },
  {
    slug: 'devotions',
    name: 'Devotions',
    description: 'Nine-day prayers to Jesus and the Holy Spirit',
    icon: '❤️',
    count: 11, // Updated from 10
    novenas: [
      { name: 'Novena to the Sacred Heart of Jesus', slug: 'sacred-heart', available: true },
      { name: 'Novena to the Holy Spirit', slug: 'holy-spirit', available: true },
      { name: 'Novena to the Divine Mercy', slug: 'divine-mercy', available: true },
      { name: 'Novena for Adoration of the Eucharist', slug: 'eucharistic-adoration', available: true },
      { name: 'Guardian Angel Novena', slug: 'guardian-angel', available: true },
      { name: 'Novena to the Holy Ghost', slug: 'holy-ghost', available: true },
      { name: 'Novena to the Divine Infant Jesus', slug: 'divine-infant-jesus', available: true },
      { name: 'Novena of Confidence to the Sacred Heart', slug: 'sacred-heart-confidence', available: true },
      { name: 'Novena for Courage', slug: 'courage', available: true },
      { name: 'Novena for Difficult Times', slug: 'difficult-times', available: true },
      { name: 'Novena for God\'s Blessings', slug: 'gods-blessings', available: true }
    ]
  },
  {
    slug: 'saints',
    name: 'Saint Novenas',
    description: 'Nine-day prayers to various saints',
    icon: '🙏',
    count: 22, // Updated from 21
    novenas: [
      { name: 'Novena to St. Jude', slug: 'st-jude', available: true },
      { name: 'Novena to St. Anthony', slug: 'st-anthony', available: true },
      { name: 'Novena to St. Joseph', slug: 'st-joseph', available: true },
      { name: 'Novena to St. Anne', slug: 'st-anne', available: true },
      { name: 'Novena to St. Gerard', slug: 'st-gerard', available: true },
      { name: 'Novena to St. John Vianney', slug: 'st-john-vianney', available: true },
      { name: 'Novena to St. Maximilian Kolbe', slug: 'st-maximilian-kolbe', available: true },
      { name: 'Novena to St. Rita of Cascia', slug: 'st-rita-cascia', available: true },
      { name: 'Novena to St. Philomena', slug: 'st-philomena', available: true },
      { name: 'Novena to St. John Bosco', slug: 'st-john-bosco', available: true },
      { name: 'Novena to St. Peregrine', slug: 'st-peregrine', available: true },
      { name: 'Novena to St. Benedict', slug: 'st-benedict', available: true },
      { name: 'St. Augustine Novena', slug: 'st-augustine', available: true },
      { name: 'Saints Joachim and Anne Novena', slug: 'saints-joachim-anne', available: true },
      { name: 'Mother Angelica Novena', slug: 'mother-angelica', available: true },
      { name: 'St. Michael the Archangel Novena', slug: 'st-michael-archangel', available: true },
      { name: 'St. Joan of Arc Novena', slug: 'st-joan-of-arc', available: true },
      { name: 'St. John Paul II Novena', slug: 'st-john-paul-ii', available: true },
      { name: 'Novena to St. Catherine Labouré', slug: 'st-catherine-laboure', available: true },
      { name: 'Novena to St. Thérèse of Lisieux', slug: 'st-therese-lisieux', available: true },
      { name: 'Novena to Carlo Acutis', slug: 'carlo-acutis', available: true },
      { name: 'North American Martyrs Novena', slug: 'north-american-martyrs', available: true }
    ]
  },
  {
    slug: 'healing',
    name: 'Healing Novenas',
    description: 'Nine-day prayers for physical and spiritual healing',
    icon: '🏥',
    count: 14, // Updated from 11
    novenas: [
      { name: 'Novena for Physical Healing', slug: 'physical-healing', available: true },
      { name: 'Novena for the Sick', slug: 'sick', available: true },
      { name: 'Novena for Emotional Healing', slug: 'emotional-healing', available: true },
      { name: 'Novena for Spiritual Healing', slug: 'spiritual-healing', available: true },
      { name: 'Novena for Healing from Anxiety and Fear', slug: 'anxiety-fear', available: true },
      { name: 'Novena for Healing After Loss', slug: 'healing-after-loss', available: true },
      { name: 'Novena for Healing and Strength', slug: 'healing-strength', available: true },
      { name: 'Novena for Addiction Recovery', slug: 'addiction-recovery', available: true },
      { name: 'Healing from Childhood Trauma Novena', slug: 'healing-from-childhood-trauma', available: true },
      { name: 'Novena for Cancer', slug: 'cancer', available: true },
      { name: 'Novena for Chronic Illness', slug: 'chronic-illness', available: true },
      { name: 'Novena for Diabetes', slug: 'diabetes', available: true },
      { name: 'Novena for Heart Disease', slug: 'heart-disease', available: true },
      { name: 'Novena for Mental Health', slug: 'mental-health', available: true }
    ]
  },
  {
    slug: 'family',
    name: 'Family Novenas',
    description: 'Nine-day prayers for family intentions',
    icon: '👨‍👩‍👧‍👦',
    count: 5, // Updated from 4
    novenas: [
      { name: 'Novena for Families', slug: 'families', available: true },
      { name: 'Novena for Children', slug: 'children', available: true },
      { name: 'Novenas For Marriage', slug: 'marriage', available: true },
      { name: 'Novena for a Difficult Pregnancy', slug: 'difficult-pregnancy', available: true },
      { name: 'Homeschool Novena', slug: 'homeschool', available: true }
    ]
  },
  {
    slug: 'seasonal',
    name: 'Seasonal Novenas',
    description: 'Nine-day prayers for specific liturgical seasons or times of year',
    icon: '🌸',
    count: 9, // Updated from 8
    novenas: [
      { name: 'Christmas Novena', slug: 'christmas', available: true },
      { name: 'Lent Novena', slug: 'lent', available: true },
      { name: 'Easter Novena', slug: 'easter', available: true },
      { name: 'Advent Novena', slug: 'advent', available: true },
      { name: 'New Year Novena', slug: 'new-year', available: true },
      { name: 'Ascension Novena', slug: 'ascension', available: true },
      { name: 'Assumption Novena', slug: 'assumption', available: true },
      { name: 'Pentecost Novena', slug: 'pentecost', available: true },
      { name: 'Novena for Good Friday', slug: 'good-friday', available: true }
    ]
  },
  {
    slug: 'special',
    name: 'Special Intentions',
    description: 'Nine-day prayers for various special intentions',
    icon: '✨',
    count: 29, // Updated from 28
    novenas: [
      { name: 'Novena for a Job', slug: 'job', available: true },
      { name: 'Novena for Financial Help', slug: 'financial-help', available: true },
      { name: 'Novena for a New Home', slug: 'new-home', available: true },
      { name: 'Novena for a Good Husband', slug: 'good-husband', available: true },
      { name: 'Novena for a Good Wife', slug: 'good-wife', available: true },
      { name: 'Novena for a Good Confession', slug: 'good-confession', available: true },
      { name: 'Novena for Grace', slug: 'grace', available: true },
      { name: 'Novena Against Fear', slug: 'against-fear', available: true },
      { name: 'Novena Against Evil', slug: 'against-evil', available: true },
      { name: 'Novena for Grace', slug: 'novena-for-grace', available: true },
      { name: 'Novena for Peace to Our Lady of Sorrows', slug: 'novena-for-peace-to-our-lady-of-sorrows', available: true },
      { name: 'Three Hail Marys Novena', slug: 'three-hail-marys', available: true },
      { name: 'Forgiveness Novena', slug: 'forgiveness', available: true },
      { name: 'Novena for Difficult Times', slug: 'difficult-times', available: true },
      { name: 'March for Life Novena', slug: 'march-for-life', available: true },
      { name: 'Novena for the Supreme Court', slug: 'supreme-court', available: true },
      { name: 'Novena for Clarity', slug: 'clarity', available: true },
      { name: 'Novena for Chastity', slug: 'chastity', available: true },
      { name: 'Novena for Business Success', slug: 'business-success', available: true },
      { name: 'Novena for Baptism', slug: 'baptism', available: true },
      { name: 'Novena for College Graduation', slug: 'college-graduation', available: true },
      { name: 'Novena for First Confession', slug: 'first-confession', available: true },
      { name: 'Novena for First Communion', slug: 'first-communion', available: true },
      { name: 'Novena for Firefighters', slug: 'firefighters', available: true },
      { name: 'Novena for Fertility', slug: 'fertility', available: true },
      { name: 'Novena for Family Difficulties', slug: 'family-difficulties', available: true },
      { name: 'Novena for Eyesight', slug: 'eyesight', available: true },
      { name: 'Novena for Exams', slug: 'exams', available: true },
      { name: 'Novena for Evangelization', slug: 'evangelization', available: true },
      { name: 'Novena for Grandchildren', slug: 'grandchildren', available: true }
    ]
  },
  {
    slug: 'christological',
    name: 'Christological Novenas',
    description: 'Nine-day prayers focused on Christ and His mysteries',
    icon: '✝️',
    count: 3, // New category
    novenas: [
      { name: 'Novena to Christ the King', slug: 'christ-the-king', available: true },
      { name: 'Novena to the Holy Cross', slug: 'holy-cross', available: true },
      { name: 'Novena to the Holy Family', slug: 'holy-family', available: true }
    ]
  },
  {
    slug: 'papal',
    name: 'Papal Novenas',
    description: 'Nine-day prayers for the Pope and Church leadership',
    icon: '👑',
    count: 2, // Updated count
    novenas: [
      { name: 'Novena for the Pope', slug: 'pope', available: true },
      { name: 'Novena for Pope Francis', slug: 'pope-francis', available: true }
    ]
  }
]

const availableNovenas = [
  'our-lady-of-perpetual-help',
  'our-lady-of-fatima',
  'our-lady-of-guadalupe',
  'our-lady-of-lourdes',
  'our-lady-of-pompei',
  'our-lady-of-mount-carmel',
  'our-lady-of-sorrows',
  'sacred-heart',
  'holy-spirit',
  'divine-mercy',
  'st-jude',
  'st-anthony',
  'st-joseph',
  'st-anne',
  'st-gerard',
  'st-john-vianney',
  'st-maximilian-kolbe',
  'st-rita-cascia',
  'st-philomena',
  'st-john-bosco',
  'st-peregrine',
  'st-benedict',
  'families',
  'children',
  'marriage',
  'christmas',
  'lent',
  'easter',
  'advent',
  'job',
  'financial-help',
  'new-home',
  'good-husband',
  'good-wife',
  'good-confession',
  'grace',
  'physical-healing',
  'sick',
  'emotional-healing',
  'spiritual-healing',
  'anxiety-fear',
  'healing-after-loss',
  'healing-strength',
  'eucharistic-adoration',
  'difficult-pregnancy',
  'addiction-recovery',
  'st-augustine',
  'saints-joachim-anne',
  'against-fear',
  'against-evil',
  'new-year',
  'immaculate-conception',
  'nativity-blessed-virgin-mary',
  'presentation-of-mary',
  'mary-star-of-the-sea',
  'guardian-angel',
  'mother-angelica',
  'st-michael-archangel',
  'st-joan-of-arc',
  'st-john-paul-ii',
  'students',
  // Adding the 25 orphaned novenas
  'ascension',
  'assumption',
  'carlo-acutis',
  'christ-the-king',
  'christmas-advent',
  'corpus-christi',
  'divine-infant-jesus',
  'holy-cross',
  'holy-family',
  'holy-ghost',
  'novena-for-grace',
  'novena-for-peace-to-our-lady-of-sorrows',
  'our-lady-of-good-counsel',
  'diabetes',
  'heart-disease',
  'mental-health',
  'our-lady-of-good-remedy',
  'our-lady-of-hope',
  'our-lady-of-knock',
  'our-lady-of-the-holy-rosary',
  'our-lady-of-the-miraculous-medal',
  'our-lady-of-the-rosary',
  'pentecost',
  'pope',
  'sacred-heart-confidence',
  'st-catherine-laboure',
  'st-therese-lisieux',
  'three-hail-marys',
  'dedication-st-mary-major-basilica',
  'healing-from-childhood-trauma',
  'pope-francis',
  'north-american-martyrs',
  'mary-queen-of-all-hearts',
  'forgiveness',
  'difficult-times',
  'courage',
  'cancer',
  'march-for-life',
  'supreme-court',
  'homeschool',
  'clarity',
  'chronic-illness',
  'chastity',
  'business-success',
  'baptism',
  'college-graduation',
  'first-confession',
  'first-communion',
  'firefighters',
  'fertility',
  'family-difficulties',
  'eyesight',
  'exams',
  'evangelization',
  'grandchildren',
  'good-friday',
  'gods-blessings',
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
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Start Novena →
                  </Link>
                ) : (
                  <span className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-600 rounded-md cursor-not-allowed">
                    Coming Soon
                  </span>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Back to Categories */}
        <section className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Categories
          </Link>
        </section>
      </div>
    </div>
  )
}