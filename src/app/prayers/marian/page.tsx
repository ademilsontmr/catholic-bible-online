import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Marian Prayers – Prayers to the Blessed Virgin Mary | Catholic Bible Online",
  description: "Complete collection of Marian prayers: Memorare, Angelus, Regina Caeli, Salve Regina, and prayers to Our Lady under various titles.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/marian",
  },
  openGraph: {
    title: "Marian Prayers – Prayers to the Blessed Virgin Mary",
    description: "Complete collection of Marian prayers and devotions.",
    url: "https://www.catholicbibleonline.com/prayers/marian",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marian Prayers – Prayers to the Blessed Virgin Mary",
    description: "Complete collection of Marian prayers and devotions.",
  },
};

const marianPrayers = [
  {
    slug: 'memorare',
    name: 'Memorare',
    description: 'Powerful prayer of intercession to the Blessed Virgin Mary',
    icon: '🙏',
    status: 'available'
  },
  {
    slug: 'angelus',
    name: 'The Angelus',
    description: 'Traditional prayer recited three times daily',
    icon: '🕰️',
    status: 'available'
  },
  {
    slug: 'hail-mary',
    name: 'Hail Mary',
    description: 'Fundamental prayer to the Blessed Virgin Mary',
    icon: '🌹',
    status: 'available'
  },
  {
    slug: 'hail-holy-queen',
    name: 'Hail Holy Queen',
    description: 'Hail Holy Queen - traditional Marian prayer',
    icon: '👑',
    status: 'available'
  },
  {
    slug: 'fatima-prayer',
    name: 'Fatima Prayer',
    description: 'Prayer taught by Our Lady at Fatima',
    icon: '🌹',
    status: 'available'
  },
  {
    slug: 'regina-caeli',
    name: 'Regina Caeli',
    description: 'Easter prayer to the Queen of Heaven',
    icon: '👑',
    status: 'available'
  },
  {
    slug: 'sub-tuum-praesidium',
    name: 'Sub Tuum Praesidium',
    description: 'Ancient prayer seeking Mary\'s protection',
    icon: '🛡️',
    status: 'available'
  },
  {
    slug: 'ave-maris-stella',
    name: 'Ave Maris Stella',
    description: 'Hail, Star of the Sea - medieval Marian hymn',
    icon: '⭐',
    status: 'available'
  },
  {
    slug: 'salve-regina',
    name: 'Salve Regina',
    description: 'Hail, Holy Queen - traditional Marian prayer',
    icon: '👑',
    status: 'available'
  },
  {
    slug: 'magnificat',
    name: 'Magnificat',
    description: 'Mary\'s song of praise from the Gospel of Luke',
    icon: '🎵',
    status: 'available'
  },
  {
    slug: 'prayer-perpetual-help',
    name: 'Prayer to Our Lady of Perpetual Help',
    description: 'Prayer to the miraculous icon of Mary',
    icon: '🖼️',
    status: 'available'
  },
  {
    slug: 'prayer-guadalupe',
    name: 'Prayer to Our Lady of Guadalupe',
    description: 'Prayer to the Patroness of the Americas',
    icon: '🌺',
    status: 'available'
  },
  {
    slug: 'prayer-lourdes',
    name: 'Prayer to Our Lady of Lourdes',
    description: 'Prayer to Our Lady of the Immaculate Conception of Lourdes',
    icon: '💧',
    status: 'available'
  },
  {
    slug: 'prayer-fatima',
    name: 'Prayer to Our Lady of Fatima',
    description: 'Prayer to Our Lady of the Rosary of Fatima',
    icon: '🌹',
    status: 'available'
  },
  {
    slug: 'prayer-mount-carmel',
    name: 'Prayer to Our Lady of Mount Carmel',
    description: 'Prayer to the Queen and Beauty of Carmel',
    icon: '🏔️',
    status: 'available'
  },
  {
    slug: 'prayer-rosary',
    name: 'Prayer to Our Lady of the Rosary',
    description: 'Prayer honoring Mary as Queen of the Rosary',
    icon: '📿',
    status: 'available'
  },
  {
    slug: 'prayer-sorrows',
    name: 'Prayer to Our Lady of Sorrows',
    description: 'Prayer to Mary, the Sorrowful Mother',
    icon: '💔',
    status: 'available'
  }
];

export default function MarianPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Marian Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👸</div>
        <h1 className="text-4xl font-bold text-black mb-4">Marian Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers to the Blessed Virgin Mary. These prayers honor our spiritual mother 
          and seek her powerful intercession. Through Mary, we draw closer to her Son, Jesus Christ.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{marianPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">18</div>
            <div className="text-sm text-gray-600">Marian Titles</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {marianPrayers.map((prayer) => (
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
      <section className="bg-pink-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Most Popular Marian Prayer</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-black mb-2">Memorare</h3>
              <p className="text-gray-600">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">Remember, O most gracious Virgin Mary,</p>
                <p className="mb-4">that never was it known that anyone who fled to thy protection,</p>
                <p className="mb-4">implored thy help, or sought thine intercession was left unaided.</p>
                <p className="mb-4">Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother;</p>
                <p className="mb-4">to thee do I come, before thee I stand, sinful and sorrowful.</p>
                <p className="mb-4">O Mother of the Word Incarnate, despise not my petitions,</p>
                <p className="mb-4">but in thy mercy hear and answer me.</p>
                <p className="font-semibold">Amen.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/memorare"
                className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
              >
                Read Full Prayer with Explanation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Marian Titles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Popular Marian Titles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">👸</div>
            <h3 className="font-semibold text-black mb-2">Queen of Heaven</h3>
            <p className="text-sm text-gray-600">Regina Caeli</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-black mb-2">Mother of God</h3>
            <p className="text-sm text-gray-600">Theotokos</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🌹</div>
            <h3 className="font-semibold text-black mb-2">Mystical Rose</h3>
            <p className="text-sm text-gray-600">Rosa Mystica</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">⭐</div>
            <h3 className="font-semibold text-black mb-2">Star of the Sea</h3>
            <p className="text-sm text-gray-600">Stella Maris</p>
          </div>
        </div>
      </section>

      {/* Why Marian Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Marian Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-black mb-2">Powerful Intercession</h3>
            <p className="text-gray-600 text-sm">
              Mary, as the Mother of God, has a special place in heaven and can intercede powerfully for us.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👶</div>
            <h3 className="font-semibold text-black mb-2">Spiritual Mother</h3>
            <p className="text-gray-600 text-sm">
              Jesus gave Mary to us as our spiritual mother from the cross, making her our advocate and guide.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-black mb-2">Protection & Grace</h3>
            <p className="text-gray-600 text-sm">
              Marian prayers bring us protection from evil and special graces for our spiritual growth.
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
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📿</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Rosary Prayers</h3>
              <p className="text-gray-600 text-sm">Complete rosary prayers and all mysteries</p>
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