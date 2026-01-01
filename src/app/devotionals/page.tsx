'use client'

import Link from 'next/link'
import { useState } from 'react'

// Devotional categories inspired by BibleGateway but focused on Catholic content
const devotionalCategories = [
  {
    id: 'classic',
    name: 'Classic Catholic Devotionals',
    description: 'Timeless spiritual writings from beloved Catholic saints and authors',
    icon: '📚',
    color: 'from-amber-500 to-orange-600',
    devotionals: [
      {
        slug: 'imitation-of-christ',
        title: 'The Imitation of Christ',
        author: 'Thomas à Kempis',
        description: 'Daily meditations from the most widely read Christian devotional book after the Bible.',
        frequency: 'Daily'
      },
      {
        slug: 'introduction-devout-life',
        title: 'Introduction to the Devout Life',
        author: 'St. Francis de Sales',
        description: 'Practical guidance for living a holy life in the midst of everyday activities.',
        frequency: 'Daily'
      },
      {
        slug: 'story-of-a-soul',
        title: 'Story of a Soul',
        author: 'St. Thérèse of Lisieux',
        description: 'The autobiography of the Little Flower, teaching the "Little Way" of spiritual childhood.',
        frequency: 'Daily'
      },
      {
        slug: 'confessions-augustine',
        title: 'Confessions of St. Augustine',
        author: 'St. Augustine',
        description: 'Profound reflections on conversion, grace, and the human search for God.',
        frequency: 'Daily'
      },
      {
        slug: 'dark-night-soul',
        title: 'Dark Night of the Soul',
        author: 'St. John of the Cross',
        description: 'Mystical poetry and commentary on the soul\'s journey to union with God.',
        frequency: 'Weekly'
      },
      {
        slug: 'interior-castle',
        title: 'The Interior Castle',
        author: 'St. Teresa of Ávila',
        description: 'A guide to the seven mansions of the soul in its journey toward God.',
        frequency: 'Weekly'
      }
    ]
  },
  {
    id: 'saints',
    name: 'Saints for Today',
    description: 'Daily inspiration from the lives and writings of Catholic saints',
    icon: '👼',
    color: 'from-purple-500 to-indigo-600',
    devotionals: [
      {
        slug: 'saint-of-the-day',
        title: 'Saint of the Day',
        author: 'Catholic Bible Online',
        description: 'Learn about the saint celebrated each day with biography and spiritual lessons.',
        frequency: 'Daily'
      },
      {
        slug: 'padre-pio-daily',
        title: 'Words of Padre Pio',
        author: 'St. Padre Pio',
        description: 'Daily wisdom from the beloved stigmatist and confessor of San Giovanni Rotondo.',
        frequency: 'Daily'
      },
      {
        slug: 'mother-teresa-daily',
        title: 'Mother Teresa\'s Meditations',
        author: 'St. Mother Teresa',
        description: 'Reflections on love, service, and finding Christ in the poorest of the poor.',
        frequency: 'Daily'
      },
      {
        slug: 'john-paul-ii-daily',
        title: 'St. John Paul II Daily',
        author: 'St. John Paul II',
        description: 'Teachings from the beloved Pope on faith, family, and the dignity of the human person.',
        frequency: 'Daily'
      },
      {
        slug: 'fulton-sheen-daily',
        title: 'Venerable Fulton Sheen',
        author: 'Archbishop Fulton Sheen',
        description: 'Timeless wisdom from America\'s most famous Catholic broadcaster.',
        frequency: 'Daily'
      }
    ]
  },
  {
    id: 'prayer',
    name: 'Prayer & Meditation',
    description: 'Guided prayer experiences and contemplative practices',
    icon: '🙏',
    color: 'from-blue-500 to-cyan-600',
    devotionals: [
      {
        slug: 'daily-examen',
        title: 'Daily Examen',
        author: 'Ignatian Spirituality',
        description: 'St. Ignatius\'s powerful prayer for reviewing your day with God.',
        frequency: 'Daily'
      },
      {
        slug: 'lectio-divina',
        title: 'Lectio Divina',
        author: 'Benedictine Tradition',
        description: 'Ancient practice of prayerful Scripture reading in four movements.',
        frequency: 'Daily'
      },
      {
        slug: 'divine-office-reflections',
        title: 'Liturgy of the Hours',
        author: 'Catholic Church',
        description: 'Reflections based on the Church\'s official daily prayer.',
        frequency: 'Daily'
      },
      {
        slug: 'rosary-meditations',
        title: 'Rosary Meditations',
        author: 'Catholic Bible Online',
        description: 'Deep reflections on each mystery of the Holy Rosary.',
        frequency: 'Daily'
      },
      {
        slug: 'divine-mercy-reflections',
        title: 'Divine Mercy Reflections',
        author: 'St. Faustina',
        description: 'Meditations from the Diary of St. Faustina on God\'s infinite mercy.',
        frequency: 'Daily'
      }
    ]
  },
  {
    id: 'scripture',
    name: 'Scripture & Faith',
    description: 'Bible-based devotionals with Catholic interpretation',
    icon: '📖',
    color: 'from-emerald-500 to-teal-600',
    devotionals: [
      {
        slug: 'gospel-of-the-day',
        title: 'Gospel of the Day',
        author: 'Catholic Bible Online',
        description: 'Daily Gospel reading with Catholic reflection and application.',
        frequency: 'Daily'
      },
      {
        slug: 'psalms-daily',
        title: 'Psalms for Today',
        author: 'Catholic Bible Online',
        description: 'A daily Psalm with meditation rooted in Catholic tradition.',
        frequency: 'Daily'
      },
      {
        slug: 'catechism-daily',
        title: 'Catechism in a Year',
        author: 'Catholic Church',
        description: 'Journey through the Catechism with daily readings and reflections.',
        frequency: 'Daily'
      },
      {
        slug: 'church-fathers-daily',
        title: 'Church Fathers Daily',
        author: 'Early Church Fathers',
        description: 'Wisdom from the first centuries of Christianity.',
        frequency: 'Daily'
      },
      {
        slug: 'papal-teachings',
        title: 'Papal Teachings',
        author: 'Various Popes',
        description: 'Excerpts from encyclicals and apostolic letters with reflection.',
        frequency: 'Weekly'
      }
    ]
  },
  {
    id: 'family',
    name: 'Family & Marriage',
    description: 'Devotionals for strengthening Catholic family life',
    icon: '👨‍👩‍👧‍👦',
    color: 'from-rose-500 to-pink-600',
    devotionals: [
      {
        slug: 'family-rosary',
        title: 'Family Rosary Devotional',
        author: 'Catholic Bible Online',
        description: 'Daily reflections to enrich your family\'s Rosary practice.',
        frequency: 'Daily'
      },
      {
        slug: 'marriage-moments',
        title: 'Marriage Moments',
        author: 'Catholic Bible Online',
        description: 'Brief daily reflections for Catholic couples.',
        frequency: 'Daily'
      },
      {
        slug: 'parenting-saints',
        title: 'Parenting with the Saints',
        author: 'Catholic Bible Online',
        description: 'Wisdom from holy parents throughout Church history.',
        frequency: 'Daily'
      },
      {
        slug: 'theology-of-body',
        title: 'Theology of the Body',
        author: 'St. John Paul II',
        description: 'Weekly reflections on the meaning of human love and sexuality.',
        frequency: 'Weekly'
      }
    ]
  },
  {
    id: 'seasonal',
    name: 'Liturgical Seasons',
    description: 'Devotionals aligned with the Church calendar',
    icon: '🕯️',
    color: 'from-violet-500 to-purple-600',
    devotionals: [
      {
        slug: 'advent-daily',
        title: 'Advent Journey',
        author: 'Catholic Bible Online',
        description: 'Prepare your heart for Christmas with daily Advent reflections.',
        frequency: 'Seasonal'
      },
      {
        slug: 'lenten-daily',
        title: 'Lenten Pilgrimage',
        author: 'Catholic Bible Online',
        description: '40 days of prayer, fasting, and almsgiving reflections.',
        frequency: 'Seasonal'
      },
      {
        slug: 'easter-daily',
        title: 'Easter Season Joy',
        author: 'Catholic Bible Online',
        description: '50 days celebrating the Resurrection of Our Lord.',
        frequency: 'Seasonal'
      },
      {
        slug: 'marian-months',
        title: 'Marian Devotions',
        author: 'Catholic Bible Online',
        description: 'Special devotions for May and October, months of Mary.',
        frequency: 'Seasonal'
      }
    ]
  },
  {
    id: 'vocations',
    name: 'Vocations & Ministry',
    description: 'For those discerning or living a specific calling',
    icon: '⛪',
    color: 'from-slate-500 to-gray-600',
    devotionals: [
      {
        slug: 'priests-daily',
        title: 'For Priests',
        author: 'Catholic Bible Online',
        description: 'Daily encouragement and spiritual nourishment for priests.',
        frequency: 'Daily'
      },
      {
        slug: 'religious-life',
        title: 'Religious Life Today',
        author: 'Catholic Bible Online',
        description: 'Reflections for those in consecrated life.',
        frequency: 'Daily'
      },
      {
        slug: 'discernment-journey',
        title: 'Discernment Journey',
        author: 'Catholic Bible Online',
        description: 'For those discerning their vocation in life.',
        frequency: 'Daily'
      }
    ]
  },
  {
    id: 'healing',
    name: 'Healing & Hope',
    description: 'Comfort and strength during difficult times',
    icon: '💚',
    color: 'from-green-500 to-emerald-600',
    devotionals: [
      {
        slug: 'grief-comfort',
        title: 'Comfort in Grief',
        author: 'Catholic Bible Online',
        description: 'Daily consolation for those mourning the loss of loved ones.',
        frequency: 'Daily'
      },
      {
        slug: 'anxiety-peace',
        title: 'From Anxiety to Peace',
        author: 'Catholic Bible Online',
        description: 'Scripture and saints\' wisdom for overcoming anxiety.',
        frequency: 'Daily'
      },
      {
        slug: 'suffering-meaning',
        title: 'Finding Meaning in Suffering',
        author: 'Catholic Bible Online',
        description: 'Catholic perspective on redemptive suffering.',
        frequency: 'Daily'
      },
      {
        slug: 'addiction-recovery',
        title: 'Recovery & Redemption',
        author: 'Catholic Bible Online',
        description: 'Faith-based support for those in recovery.',
        frequency: 'Daily'
      }
    ]
  }
]

export default function DevotionalsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const totalDevotionals = devotionalCategories.reduce(
    (sum, cat) => sum + cat.devotionals.length, 0
  )

  // Filter devotionals based on search
  const filteredCategories = devotionalCategories.filter(category => {
    if (selectedCategory && category.id !== selectedCategory) return false
    
    const searchLower = searchTerm.toLowerCase()
    if (!searchTerm) return true
    
    return (
      category.name.toLowerCase().includes(searchLower) ||
      category.description.toLowerCase().includes(searchLower) ||
      category.devotionals.some(d => 
        d.title.toLowerCase().includes(searchLower) ||
        d.author.toLowerCase().includes(searchLower) ||
        d.description.toLowerCase().includes(searchLower)
      )
    )
  })

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12 bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-6">
            Catholic Devotionals
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            Nourish your soul with {totalDevotionals}+ daily and weekly devotionals from Catholic saints, 
            spiritual masters, and the rich tradition of the Church.
          </p>

          {/* Search Box */}
          <div className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input
                type="search"
                placeholder="Search devotionals..."
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 gradient-text">{totalDevotionals}+</div>
              <div className="text-sm text-gray-700">Devotionals</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-emerald-600 gradient-text">{devotionalCategories.length}</div>
              <div className="text-sm text-gray-700">Categories</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 gradient-text">Daily</div>
              <div className="text-sm text-gray-700">Updates</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-emerald-600 gradient-text">Free</div>
              <div className="text-sm text-gray-700">Access</div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === null
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Categories
            </button>
            {devotionalCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Devotional */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold">⭐ Featured</span>
              <span className="text-amber-700 text-sm">Most Popular</span>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">The Imitation of Christ</h2>
                <p className="text-gray-700 mb-4">
                  Written by Thomas à Kempis in the 15th century, this masterpiece has guided countless souls 
                  toward holiness. Its timeless wisdom on humility, devotion, and the interior life continues 
                  to transform hearts today.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-sm text-gray-600">✍️ Thomas à Kempis</span>
                  <span className="text-sm text-gray-600">📅 Daily</span>
                </div>
                <Link 
                  href="/devotionals/imitation-of-christ"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg hover:from-amber-600 hover:to-orange-700 transition-all"
                >
                  Start Reading
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="text-center">
                <div className="text-8xl mb-4">📚</div>
                <blockquote className="italic text-gray-600 border-l-4 border-amber-400 pl-4">
                  "He who follows Me, walks not in darkness, says the Lord."
                  <footer className="text-sm mt-2 text-gray-500">— Opening words</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Devotional Categories */}
        {filteredCategories.map(category => (
          <section key={category.id} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.devotionals.map(devotional => (
                <Link
                  key={devotional.slug}
                  href={`/devotionals/${devotional.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {devotional.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.color} text-white`}>
                      {devotional.frequency}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">by {devotional.author}</p>
                  <p className="text-gray-700 text-sm mb-4">{devotional.description}</p>
                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    Read Now
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* Today's Readings CTA */}
        <section className="bg-gradient-to-r from-blue-50 via-purple-50 to-emerald-50 rounded-2xl p-8 border border-gray-100 text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 gradient-text mb-4">
            Start Your Spiritual Journey Today
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Choose a devotional that speaks to your heart and commit to daily spiritual reading. 
            The saints remind us that consistent prayer and meditation transform our souls.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devotionals/gospel-of-the-day"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              📖 Today's Gospel
            </Link>
            <Link
              href="/devotionals/saint-of-the-day"
              className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-all"
            >
              👼 Saint of the Day
            </Link>
            <Link
              href="/prayers"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-lg hover:bg-purple-600 hover:text-white transition-all"
            >
              🙏 Catholic Prayers
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
