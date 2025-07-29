import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'North American Martyrs Novena - Complete 9-Day Prayer Guide',
  description: 'Complete North American Martyrs Novena with daily prayers, reflections, and guidance. Pray for the intercession of the North American Martyrs.',
  keywords: [
    'north american martyrs novena',
    'martyrs novena',
    'saints novena',
    'north american saints',
    'martyrs prayer',
    'saints prayer',
    'north american martyrs nine day prayer',
    'martyrs nine day prayer',
    'martyrs devotion',
    'saints devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'North American Martyrs Novena - Complete 9-Day Prayer Guide',
    description: 'Complete North American Martyrs Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/north-american-martyrs',
  },
  twitter: {
    title: 'North American Martyrs Novena - Complete 9-Day Prayer Guide',
    description: 'Complete North American Martyrs Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Jesuit Vocation',
    description: 'Pray for the grace to imitate the love of God shown by the North American Martyrs in choosing to serve as Jesuits.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Missionary Zeal',
    description: 'Pray for the devotion to God shown by the North American Martyrs in their tireless missionary work.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Will',
    description: 'Pray for the openness to God\'s will shown by the North American Martyrs in answering His call.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Perseverance',
    description: 'Pray for the virtue of perseverance shown by the North American Martyrs despite great dangers.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Evangelization',
    description: 'Pray for the love of God shown by the North American Martyrs in bringing souls to the Faith.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Faith Under Persecution',
    description: 'Pray for the virtue of faith shown by the North American Martyrs despite great persecution.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Ministry to the Dying',
    description: 'Pray for the love of God shown by the North American Martyrs in ministering to the dying.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Courageous Faith',
    description: 'Pray for the courage shown by the North American Martyrs in holding fast to their Faith.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Martyrdom',
    description: 'Pray for the devotion to God shown by the North American Martyrs in giving their lives for the Church.',
    slug: 'day-9'
  }
]

export default function NorthAmericanMartyrsNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            North American Martyrs Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of the North American Martyrs.
            This traditional novena helps us grow closer to these holy martyrs and experience their powerful intercession.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🩸</div>
              <div className="text-sm text-gray-600">Martyrs</div>
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
            About the North American Martyrs Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The North American Martyrs Novena is a traditional nine-day prayer that helps us grow closer to these holy martyrs 
              and experience their powerful intercession. The North American Martyrs were eight Jesuit missionaries who gave their 
              lives for the Faith while working among the Native American peoples in the 17th century.
            </p>
            
            <p className="mb-4">
              These holy martyrs - St. Isaac Jogues, St. Jean de Brébeuf, St. Gabriel Lalemant, St. Antoine Daniel, 
              St. Charles Garnier, St. Noël Chabanel, St. René Goupil, and St. Jean de Lalande - showed extraordinary 
              courage and devotion in their missionary work.
            </p>
            
            <p>
              This novena helps us to imitate their virtues and to seek their powerful intercession in our own spiritual 
              journey, especially when we face difficulties or persecution for our Faith.
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
                href={`/novenas/north-american-martyrs/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Martyrs</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the intercession of the North American Martyrs.
                Turn to them with confidence in every need, especially in times of persecution.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                The martyrs will not fail to help those who turn to them with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to the martyrs.
                They want to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the martyrs for their help and intercession.
                Gratitude opens our hearts to receive more graces.
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
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in the intercession of the North American Martyrs and their ability to help us.
                Trust that they will bring our prayers to God.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the powerful intercession of the martyrs and their care for us.
                They are always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love the martyrs and imitate their love for God and neighbor.
                Show our love through devotion and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the North American Martyrs Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The North American Martyrs devotion is a way of honoring and seeking the intercession of these holy martyrs 
            who gave their lives for the Faith and the conversion of souls.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of North American Martyrs Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🩸</span>
                <span>Martyrdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌍</span>
                <span>Missionary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚔️</span>
                <span>Courage</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✝️</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Feast Day</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in the powerful intercession of the martyrs</li>
              <li>• Grow closer to these holy witnesses of the Faith</li>
              <li>• Experience their protection and guidance</li>
              <li>• Bring our prayers and needs to God through their intercession</li>
              <li>• Imitate their courage and devotion to God</li>
            </ul>
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