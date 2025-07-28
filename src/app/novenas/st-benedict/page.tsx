import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Benedict - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to St. Benedict with daily prayers, reflections, and guidance. Pray for St. Benedict\'s intercession and protection.',
  keywords: [
    'novena to st benedict',
    'st benedict novena',
    'benedict novena',
    'st benedict prayer',
    'benedict prayer',
    'st benedict nine day prayer',
    'benedict nine day prayer',
    'st benedict devotion',
    'benedict devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena to St. Benedict - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Benedict with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-benedict',
  },
  twitter: {
    title: 'Novena to St. Benedict - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to St. Benedict with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Faith and Trust',
    description: 'Begin the novena with faith and trust in St. Benedict\'s powerful intercession.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Protection and Guidance',
    description: 'Seek St. Benedict\'s protection against daily dangers and temptations.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Selflessness and Charity',
    description: 'Pray for deliverance from selfishness and indifference to God and neighbor.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Imitation of Virtues',
    description: 'Ask for the grace to imitate St. Benedict in all things.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Service to Christ',
    description: 'Pray to see and serve Christ in others and work for His kingdom.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Divine Favor',
    description: 'Seek God\'s favors and graces for trials, miseries and afflictions.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Compassion and Mercy',
    description: 'Reflect on St. Benedict\'s love, compassion and mercy toward the afflicted.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Powerful Intercession',
    description: 'Confidently invoke St. Benedict\'s powerful intercession for your needs.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Happiness',
    description: 'Pray to live and die as a faithful child of God and attain heaven.',
    slug: 'day-9'
  }
]

export default function StBenedictNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Benedict
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of St. Benedict, patron of Europe and founder of Western monasticism.
            This traditional novena helps us grow closer to God through St. Benedict's powerful intercession.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">St. Benedict</div>
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
            About the Novena to St. Benedict
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to St. Benedict is a traditional nine-day prayer that helps us grow closer to God 
              through the intercession of St. Benedict, the patron saint of Europe and founder of Western monasticism. 
              St. Benedict is known for his powerful protection against evil and his guidance in spiritual matters.
            </p>
            
            <p className="mb-4">
              St. Benedict's heart was always full of love, compassion, and mercy toward those who were afflicted or troubled. 
              He never dismissed without consolation and assistance anyone who had recourse to him.
            </p>
            
            <p>
              This novena helps us to trust in St. Benedict's intercession and to turn to him with confidence in every need, 
              knowing that he will always help us and bring our prayers to God.
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
                href={`/novenas/st-benedict/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Benedict</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Benedict's powerful intercession and his ability to help you.
                Turn to him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Benedict will not fail to help those who turn to him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Benedict.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Benedict for his intercession and for the graces you receive.
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power and St. Benedict's intercession. Trust that your prayers are heard and will be answered 
                according to God's perfect will.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Have confidence in God's promises and mercy. Hope for the grace to live virtuously and attain eternal happiness 
                through St. Benedict's guidance.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God above all things and your neighbor as yourself. Let St. Benedict's example inspire you to serve others 
                with compassion and mercy.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Benedict?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Benedict</strong> - Born in Nursia, Italy around 480 AD, St. Benedict is considered the father of Western monasticism. 
              His Rule for monks has guided religious communities for over 1500 years.
            </p>
            <p className="mb-4">
              <strong>Monastic Life</strong> - St. Benedict founded the famous monastery of Monte Cassino and established the Benedictine Order, 
              which continues to thrive today with communities worldwide.
            </p>
            <p className="mb-4">
              <strong>Intercession</strong> - St. Benedict is known for his powerful intercession, especially for protection against evil, 
              guidance in spiritual matters, and help in times of trial and affliction.
            </p>
            <p className="mb-4">
              <strong>Patronage</strong> - He is the patron saint of Europe, students, farmers, and those suffering from various afflictions. 
              His feast day is celebrated on July 11th.
            </p>
            <p>
              <strong>Spiritual Legacy</strong> - St. Benedict's motto "Ora et Labora" (Pray and Work) continues to inspire Christians 
              to balance prayer and work in their daily lives, seeking God in all things.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 