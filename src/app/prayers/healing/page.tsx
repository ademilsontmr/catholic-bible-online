import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Healing Prayers – Catholic Healing Prayer Collection | Catholic Bible Online",
  description: "Complete collection of healing prayers: prayers for physical, emotional, mental, and spiritual healing, addiction recovery, and inner peace.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/healing",
  },
  openGraph: {
    title: "Healing Prayers – Catholic Healing Prayer Collection",
    description: "Complete collection of healing prayers for all types of healing.",
    url: "https://www.catholicbibleonline.com/prayers/healing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Healing Prayers – Catholic Healing Prayer Collection",
    description: "Complete collection of healing prayers for all types of healing.",
  },
};

const healingPrayers = [
  {
    slug: 'prayer-sick',
    name: 'Prayer for the Sick',
    description: 'Prayer for those who are ill or suffering',
    icon: '🏥',
    status: 'available'
  },
  {
    slug: 'prayer-healing',
    name: 'Prayer for Healing',
    description: 'General prayer for physical and spiritual healing',
    icon: '💚',
    status: 'available'
  },
  {
    slug: 'prayer-mental-health',
    name: 'Prayer for Mental Health',
    description: 'Prayer for mental health and emotional well-being',
    icon: '🧠',
    status: 'available'
  },
  {
    slug: 'prayer-emotional-healing',
    name: 'Prayer for Emotional Healing',
    description: 'Prayer for healing from emotional wounds and trauma',
    icon: '💔',
    status: 'available'
  },
  {
    slug: 'prayer-physical-healing',
    name: 'Prayer for Physical Healing',
    description: 'Prayer for physical ailments and bodily healing',
    icon: '🏃‍♂️',
    status: 'available'
  },
  {
    slug: 'prayer-spiritual-healing',
    name: 'Prayer for Spiritual Healing',
    description: 'Prayer for spiritual wounds and restoration',
    icon: '✨',
    status: 'available'
  },
  {
    slug: 'prayer-addiction-recovery',
    name: 'Prayer for Addiction Recovery',
    description: 'Prayer for those struggling with addictions',
    icon: '🔄',
    status: 'available'
  },
  {
    slug: 'prayer-inner-peace',
    name: 'Prayer for Inner Peace',
    description: 'Prayer for peace of mind and heart',
    icon: '🕊️',
    status: 'available'
  }
];

export default function HealingPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Healing Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🏥</div>
        <h1 className="text-4xl font-bold text-black mb-4">Healing Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers for healing in all its forms. These prayers seek God's healing touch 
          for physical, emotional, mental, and spiritual wounds, trusting in His mercy and love.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{healingPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">4 Types</div>
            <div className="text-sm text-gray-600">of Healing</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {healingPrayers.map((prayer) => (
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

      {/* Types of Healing Section */}
      <section className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Types of Healing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🏃‍♂️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Physical Healing</h3>
              <p className="text-sm text-gray-600">Bodily ailments and injuries</p>
            </div>
            <p className="text-sm text-gray-600">Prayers for physical health, recovery from illness, and bodily restoration.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">💔</div>
              <h3 className="text-lg font-semibold text-black mb-2">Emotional Healing</h3>
              <p className="text-sm text-gray-600">Heart and emotional wounds</p>
            </div>
            <p className="text-sm text-gray-600">Prayers for emotional trauma, grief, anxiety, and emotional restoration.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-semibold text-black mb-2">Mental Healing</h3>
              <p className="text-sm text-gray-600">Mind and mental health</p>
            </div>
            <p className="text-sm text-gray-600">Prayers for mental health, clarity of mind, and psychological well-being.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">✨</div>
              <h3 className="text-lg font-semibold text-black mb-2">Spiritual Healing</h3>
              <p className="text-sm text-gray-600">Soul and spiritual wounds</p>
            </div>
            <p className="text-sm text-gray-600">Prayers for spiritual wounds, sin, and restoration of relationship with God.</p>
          </div>
        </div>
      </section>

      {/* Why Healing Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Healing Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-black mb-2">Divine Intervention</h3>
            <p className="text-gray-600 text-sm">
              These prayers invite God's healing power into our lives and the lives of others.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">💚</div>
            <h3 className="font-semibold text-black mb-2">Holistic Healing</h3>
            <p className="text-gray-600 text-sm">
              Address all aspects of human suffering: physical, emotional, mental, and spiritual.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🕊️</div>
            <h3 className="font-semibold text-black mb-2">Peace & Comfort</h3>
            <p className="text-gray-600 text-sm">
              Bring peace and comfort to those who are suffering and their loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayer Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/saints" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👼</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Saints Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to various saints and holy figures</p>
            </div>
          </Link>
          
          <Link href="/prayers/devotional" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕯️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Devotional Prayers</h3>
              <p className="text-gray-600 text-sm">Special devotions and spiritual practices</p>
            </div>
          </Link>
          
          <Link href="/prayers/intercession" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Intercessory Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers for others and the world</p>
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