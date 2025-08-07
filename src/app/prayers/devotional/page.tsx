import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Devotional Prayers – Special Catholic Devotions | Catholic Bible Online",
  description: "Complete collection of devotional prayers: Divine Mercy Chaplet, Stations of the Cross, Litanies, and other special spiritual practices.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/devotional",
  },
  openGraph: {
    title: "Devotional Prayers – Special Catholic Devotions",
    description: "Complete collection of devotional prayers and spiritual practices.",
    url: "https://www.catholicbibleonline.com/prayers/devotional",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devotional Prayers – Special Catholic Devotions",
    description: "Complete collection of devotional prayers and spiritual practices.",
  },
};

const devotionalPrayers = [
  {
    slug: 'divine-mercy-chaplet',
    name: 'Divine Mercy Chaplet',
    description: 'Powerful devotion to the Divine Mercy of Jesus',
    icon: '❤️',
    status: 'available'
  },
  {
    slug: 'stations-cross',
    name: 'Stations of the Cross',
    description: 'Meditation on Christ\'s passion and death',
    icon: '✝️',
    status: 'available'
  },
  {
    slug: 'way-cross',
    name: 'Way of the Cross',
    description: 'Traditional devotion following Jesus\' final journey',
    icon: '🛤️',
    status: 'available'
  },
  {
    slug: 'litany-sacred-heart',
    name: 'Litany of the Sacred Heart',
    description: 'Prayer honoring the Sacred Heart of Jesus',
    icon: '💝',
    status: 'available'
  },
  {
    slug: 'litany-blessed-virgin',
    name: 'Litany of the Blessed Virgin Mary',
    description: 'Litany honoring Mary under many titles',
    icon: '👸',
    status: 'available'
  },
  {
    slug: 'litany-st-joseph',
    name: 'Litany of St. Joseph',
    description: 'Litany honoring the foster father of Jesus',
    icon: '🔨',
    status: 'available'
  },
  {
    slug: 'litany-saints',
    name: 'Litany of the Saints',
    description: 'Invocation of the saints for intercession',
    icon: '👼',
    status: 'available'
  },
  {
    slug: 'prayer-holy-spirit',
    name: 'Prayer to the Holy Spirit',
    description: 'Invocation of the third Person of the Trinity',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'prayer-dead',
    name: 'Prayer for the Dead',
    description: 'Prayers for the souls in purgatory',
    icon: '🕯️',
    status: 'available'
  },
  {
    slug: 'prayer-sick',
    name: 'Prayer for the Sick',
    description: 'Prayers for physical and spiritual healing',
    icon: '🏥',
    status: 'available'
  },
  {
    slug: 'prayer-peace',
    name: 'Prayer for Peace',
    description: 'Prayers for peace in the world and hearts',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'prayer-vocations',
    name: 'Prayer for Vocations',
    description: 'Prayers for priestly and religious vocations',
    icon: '⛪',
    status: 'available'
  }
];

export default function DevotionalPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Devotional Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🕯️</div>
        <h1 className="text-4xl font-bold text-black mb-4">Devotional Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of special devotional prayers and spiritual practices. These devotions help us 
          grow deeper in our relationship with God and draw closer to His love and mercy.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{devotionalPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Special</div>
            <div className="text-sm text-gray-600">Devotions</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {devotionalPrayers.map((prayer) => (
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

      {/* Featured Devotion Section */}
      <section className="bg-purple-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Most Popular Devotion</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-2xl font-bold text-black mb-2">Divine Mercy Chaplet</h3>
              <p className="text-gray-600">Powerful devotion to the Divine Mercy of Jesus Christ</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">The Divine Mercy Chaplet is a powerful prayer given to St. Faustina by Jesus Himself.</p>
                <p className="mb-4">It is prayed on ordinary rosary beads and takes about 10 minutes to complete.</p>
                <p className="mb-4">Jesus promised: "When they say this Chaplet in the presence of the dying, I will stand between My Father and the dying person, not as the just Judge but as the merciful Savior."</p>
                <p className="font-semibold">- Diary of St. Faustina, 1541</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/divine-mercy-chaplet"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                Learn How to Pray the Divine Mercy Chaplet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Devotion Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Types of Devotions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="font-semibold text-black mb-2">Mercy Devotions</h3>
            <p className="text-sm text-gray-600">Divine Mercy Chaplet, Sacred Heart</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">✝️</div>
            <h3 className="font-semibold text-black mb-2">Passion Devotions</h3>
            <p className="text-sm text-gray-600">Stations of the Cross, Way of the Cross</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">👼</div>
            <h3 className="font-semibold text-black mb-2">Litany Devotions</h3>
            <p className="text-sm text-gray-600">Litanies to saints and holy figures</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🕊️</div>
            <h3 className="font-semibold text-black mb-2">Intercessory</h3>
            <p className="text-sm text-gray-600">Prayers for others and special intentions</p>
          </div>
        </div>
      </section>

      {/* Why Devotional Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Devotional Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Deepen Relationship</h3>
            <p className="text-gray-600 text-sm">
              These devotions help us grow closer to God and develop a deeper spiritual life.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-black mb-2">Focus & Discipline</h3>
            <p className="text-gray-600 text-sm">
              Regular devotional practices help us stay focused on our spiritual goals.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-black mb-2">Special Graces</h3>
            <p className="text-gray-600 text-sm">
              Many devotions come with special promises and graces from God.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayer Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📿</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Rosary Prayers</h3>
              <p className="text-gray-600 text-sm">Complete rosary prayers and all mysteries</p>
            </div>
          </Link>
          
          <Link href="/prayers/marian" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Marian Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/saints" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👼</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Saints Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to various saints and holy figures</p>
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