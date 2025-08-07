import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rosary Prayers – Complete Rosary Guide | Catholic Bible Online",
  description: "Complete guide to praying the Rosary: Joyful, Sorrowful, Glorious, and Luminous Mysteries. Learn how to pray the Rosary with step-by-step instructions.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/rosary",
  },
  openGraph: {
    title: "Rosary Prayers – Complete Rosary Guide",
    description: "Complete guide to praying the Rosary with all mysteries.",
    url: "https://www.catholicbibleonline.com/prayers/rosary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosary Prayers – Complete Rosary Guide",
    description: "Complete guide to praying the Rosary with all mysteries.",
  },
};

const rosaryPrayers = [
  {
    slug: 'how-to-pray-rosary',
    name: 'How to Pray the Rosary',
    description: 'Step-by-step guide to praying the Rosary',
    icon: '📿',
    status: 'available'
  },
  {
    slug: 'joyful-mysteries',
    name: 'Joyful Mysteries',
    description: 'The five Joyful Mysteries of the Rosary',
    icon: '😊',
    status: 'available'
  },
  {
    slug: 'sorrowful-mysteries',
    name: 'Sorrowful Mysteries',
    description: 'The five Sorrowful Mysteries of the Rosary',
    icon: '💔',
    status: 'available'
  },
  {
    slug: 'glorious-mysteries',
    name: 'Glorious Mysteries',
    description: 'The five Glorious Mysteries of the Rosary',
    icon: '✨',
    status: 'available'
  },
  {
    slug: 'luminous-mysteries',
    name: 'Luminous Mysteries',
    description: 'The five Luminous Mysteries of the Rosary',
    icon: '🌟',
    status: 'available'
  },
  {
    slug: 'hail-holy-queen',
    name: 'Hail Holy Queen',
    description: 'Salve Regina - Prayer to the Blessed Virgin Mary',
    icon: '👸',
    status: 'available'
  },
  {
    slug: 'fatima-prayer',
    name: 'Fatima Prayer',
    description: 'Prayer taught by Our Lady of Fatima',
    icon: '🙏',
    status: 'available'
  },
  {
    slug: 'rosary-for-dead',
    name: 'Rosary for the Dead',
    description: 'Special Rosary for the souls in purgatory',
    icon: '🕯️',
    status: 'available'
  },
  {
    slug: 'rosary-for-peace',
    name: 'Rosary for Peace',
    description: 'Rosary devotion for world peace',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'rosary-for-family',
    name: 'Rosary for the Family',
    description: 'Family Rosary prayers and intentions',
    icon: '👨‍👩‍👧‍👦',
    status: 'available'
  },
  {
    slug: 'rosary-for-priests',
    name: 'Rosary for Priests',
    description: 'Special Rosary for priests and vocations',
    icon: '⛪',
    status: 'available'
  },
  {
    slug: 'divine-mercy-chaplet',
    name: 'Divine Mercy Chaplet',
    description: 'Chaplet of Divine Mercy devotion',
    icon: '❤️',
    status: 'available'
  }
];

export default function RosaryPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Rosary Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">📿</div>
        <h1 className="text-4xl font-bold text-black mb-4">Rosary Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete guide to praying the Rosary with all four sets of mysteries. The Rosary is one of the most 
          powerful and beloved Catholic devotions, combining vocal prayer with meditation on the life of Christ.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{rosaryPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">4 Sets</div>
            <div className="text-sm text-gray-600">of Mysteries</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {rosaryPrayers.map((prayer) => (
          <div key={prayer.slug} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="text-3xl">{prayer.icon}</div>
              {prayer.status === 'available' ? (
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                  Available
                </span>
              ) : (
                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                  Coming Soon
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-semibold text-black mb-2">{prayer.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{prayer.description}</p>
            
            {prayer.status === 'available' ? (
              <Link
                href={`/prayers/${prayer.slug}`}
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
              >
                Read Prayer
                <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <button
                disabled
                className="inline-flex items-center px-4 py-2 bg-gray-300 text-gray-500 rounded-md cursor-not-allowed text-sm"
              >
                Coming Soon
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Featured Prayer Section */}
      <section className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">The Four Sets of Mysteries</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">😊</div>
              <h3 className="text-lg font-semibold text-black mb-2">Joyful Mysteries</h3>
              <p className="text-sm text-gray-600">Monday & Saturday</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The Annunciation</li>
              <li>• The Visitation</li>
              <li>• The Nativity</li>
              <li>• The Presentation</li>
              <li>• The Finding in the Temple</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">💔</div>
              <h3 className="text-lg font-semibold text-black mb-2">Sorrowful Mysteries</h3>
              <p className="text-sm text-gray-600">Tuesday & Friday</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The Agony in the Garden</li>
              <li>• The Scourging</li>
              <li>• The Crowning with Thorns</li>
              <li>• The Carrying of the Cross</li>
              <li>• The Crucifixion</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-lg font-semibold text-black mb-2">Glorious Mysteries</h3>
              <p className="text-sm text-gray-600">Wednesday & Sunday</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The Resurrection</li>
              <li>• The Ascension</li>
              <li>• The Descent of the Holy Spirit</li>
              <li>• The Assumption</li>
              <li>• The Coronation</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Luminous Mysteries</h3>
              <p className="text-sm text-gray-600">Thursday</p>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• The Baptism of Jesus</li>
              <li>• The Wedding at Cana</li>
              <li>• The Proclamation of the Kingdom</li>
              <li>• The Transfiguration</li>
              <li>• The Institution of the Eucharist</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why the Rosary Matters */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why the Rosary Matters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Meditation & Prayer</h3>
            <p className="text-gray-600 text-sm">
              Combines vocal prayer with meditation on the mysteries of our salvation, helping us grow in faith.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👸</div>
            <h3 className="font-semibold text-black mb-2">Marian Devotion</h3>
            <p className="text-gray-600 text-sm">
              Honors the Blessed Virgin Mary and seeks her powerful intercession for our needs and intentions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-black mb-2">Spiritual Weapon</h3>
            <p className="text-gray-600 text-sm">
              A powerful weapon against evil and a source of grace for ourselves and the whole world.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayer Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/basic" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Basic Prayers</h3>
              <p className="text-gray-600 text-sm">Essential Catholic prayers every Catholic should know</p>
            </div>
          </Link>
          
          <Link href="/prayers/marian" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Marian Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/devotional" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕯️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Devotional Prayers</h3>
              <p className="text-gray-600 text-sm">Special devotions and spiritual practices</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to All Prayers
        </Link>
      </div>
    </main>
  );
} 