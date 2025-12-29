import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Saints Prayers – Prayers to Catholic Saints | Catholic Bible Online",
  description: "Complete collection of prayers to Catholic saints: St. Michael, St. Joseph, St. Anthony, St. Jude, St. Therese, and many more holy intercessors.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/saints",
  },
  openGraph: {
    title: "Saints Prayers – Prayers to Catholic Saints",
    description: "Complete collection of prayers to Catholic saints and holy intercessors.",
    url: "https://www.catholicbibleonline.com/prayers/saints",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saints Prayers – Prayers to Catholic Saints",
    description: "Complete collection of prayers to Catholic saints and holy intercessors.",
  },
};

const saintsPrayers = [
  {
    slug: 'prayer-to-st-michael',
    name: 'Prayer to St. Michael',
    description: 'Powerful prayer for protection against evil',
    icon: '⚔️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-joseph',
    name: 'Prayer to St. Joseph',
    description: 'Prayer to the foster father of Jesus',
    icon: '🔨',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-anthony',
    name: 'Prayer to St. Anthony',
    description: 'Prayer to the finder of lost things',
    icon: '🔍',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-jude',
    name: 'Prayer to St. Jude',
    description: 'Prayer to the patron of hopeless cases',
    icon: '🕯️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-therese',
    name: 'Prayer to St. Therese',
    description: 'Prayer to the Little Flower of Jesus',
    icon: '🌹',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-francis',
    name: 'Prayer to St. Francis',
    description: 'Prayer to St. Francis of Assisi',
    icon: '🐦',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-patrick',
    name: 'Prayer to St. Patrick',
    description: 'Prayer to the patron saint of Ireland',
    icon: '☘️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-padre-pio',
    name: 'Prayer to St. Padre Pio',
    description: 'Prayer to the stigmatist saint',
    icon: '✝️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-benedict',
    name: 'Prayer to St. Benedict',
    description: 'Prayer to the father of Western monasticism',
    icon: '📖',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-dominic',
    name: 'Prayer to St. Dominic',
    description: 'Prayer to the founder of the Dominicans',
    icon: '🐕',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-ignatius',
    name: 'Prayer to St. Ignatius',
    description: 'Prayer to the founder of the Jesuits',
    icon: '⚜️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-thomas-aquinas',
    name: 'Prayer to St. Thomas Aquinas',
    description: 'Prayer to the Angelic Doctor',
    icon: '📚',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-augustine',
    name: 'Prayer to St. Augustine',
    description: 'Prayer to the Doctor of Grace',
    icon: '💡',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-teresa-avila',
    name: 'Prayer to St. Teresa of Avila',
    description: 'Prayer to the Doctor of Prayer',
    icon: '🏰',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-john-cross',
    name: 'Prayer to St. John of the Cross',
    description: 'Prayer to the Doctor of Mystical Theology',
    icon: '🌙',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-catherine-siena',
    name: 'Prayer to St. Catherine of Siena',
    description: 'Prayer to the Doctor of the Church',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-faustina',
    name: 'Prayer to St. Faustina',
    description: 'Prayer to the Apostle of Divine Mercy',
    icon: '❤️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-maximilian-kolbe',
    name: 'Prayer to St. Maximilian Kolbe',
    description: 'Prayer to the martyr of charity',
    icon: '🕯️',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-john-paul-ii',
    name: 'Prayer to St. John Paul II',
    description: 'Prayer to the Great Pope',
    icon: '⛪',
    status: 'available'
  },
  {
    slug: 'prayer-to-st-mother-teresa',
    name: 'Prayer to St. Mother Teresa',
    description: 'Prayer to the saint of the gutters',
    icon: '🤝',
    status: 'available'
  }
];

export default function SaintsPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Saints Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👼</div>
        <h1 className="text-4xl font-bold text-black mb-4">Saints Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers to Catholic saints and holy intercessors. These prayers honor the saints 
          and seek their powerful intercession before God. The saints are our friends in heaven who help us on our journey to holiness.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{saintsPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">20</div>
            <div className="text-sm text-gray-600">Holy Saints</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {saintsPrayers.map((prayer) => (
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
      <section className="bg-orange-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Most Powerful Saint Prayer</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-2xl font-bold text-black mb-2">Prayer to St. Michael</h3>
              <p className="text-gray-600">Powerful prayer for protection against evil and spiritual warfare</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">St. Michael the Archangel, defend us in battle.</p>
                <p className="mb-4">Be our protection against the wickedness and snares of the devil.</p>
                <p className="mb-4">May God rebuke him, we humbly pray;</p>
                <p className="mb-4">and do Thou, O Prince of the Heavenly Host -</p>
                <p className="mb-4">by the Divine Power of God -</p>
                <p className="mb-4">cast into hell, satan and all the evil spirits,</p>
                <p className="mb-4">who roam throughout the world seeking the ruin of souls.</p>
                <p className="font-semibold">Amen.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/prayer-to-st-michael"
                className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Read Full Prayer with Explanation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Saint Categories Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Popular Saint Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="font-semibold text-black mb-2">Protection Saints</h3>
            <p className="text-sm text-gray-600">St. Michael, St. Joseph, St. Benedict</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🔍</div>
            <h3 className="font-semibold text-black mb-2">Helper Saints</h3>
            <p className="text-sm text-gray-600">St. Anthony, St. Jude, St. Therese</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-black mb-2">Doctor Saints</h3>
            <p className="text-sm text-gray-600">St. Thomas Aquinas, St. Augustine</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="font-semibold text-black mb-2">Modern Saints</h3>
            <p className="text-sm text-gray-600">St. John Paul II, St. Mother Teresa</p>
          </div>
        </div>
      </section>

      {/* Why Saint Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Saint Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-black mb-2">Powerful Intercession</h3>
            <p className="text-gray-600 text-sm">
              Saints are close to God and can intercede powerfully for our needs and intentions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold text-black mb-2">Communion of Saints</h3>
            <p className="text-gray-600 text-sm">
              We are part of a great family that includes the saints in heaven who pray for us.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🌟</div>
            <h3 className="font-semibold text-black mb-2">Role Models</h3>
            <p className="text-gray-600 text-sm">
              Saints show us how to live holy lives and inspire us to grow in virtue and faith.
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
          
          <Link href="/prayers/protection" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Protection Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers for protection and deliverance</p>
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