import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Intercessory Prayers – Catholic Intercession Prayer Collection | Catholic Bible Online",
  description: "Complete collection of intercessory prayers: prayers for the Pope, priests, religious, the Church, the world, peace, the poor, and missionaries.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/intercession",
  },
  openGraph: {
    title: "Intercessory Prayers – Catholic Intercession Prayer Collection",
    description: "Complete collection of intercessory prayers for others and the world.",
    url: "https://www.catholicbibleonline.com/prayers/intercession",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intercessory Prayers – Catholic Intercession Prayer Collection",
    description: "Complete collection of intercessory prayers for others and the world.",
  },
};

const intercessoryPrayers = [
  {
    slug: 'prayer-pope',
    name: 'Prayer for the Pope',
    description: 'Prayer for the Holy Father and his ministry',
    icon: '⛪',
    status: 'available'
  },
  {
    slug: 'prayer-priests',
    name: 'Prayer for Priests',
    description: 'Prayer for priests and their sacred ministry',
    icon: '👨‍💼',
    status: 'available'
  },
  {
    slug: 'prayer-religious',
    name: 'Prayer for Religious',
    description: 'Prayer for religious sisters, brothers, and monks',
    icon: '👩‍💼',
    status: 'available'
  },
  {
    slug: 'prayer-church',
    name: 'Prayer for the Church',
    description: 'Prayer for the universal Church and its mission',
    icon: '⛪',
    status: 'available'
  },
  {
    slug: 'prayer-world',
    name: 'Prayer for the World',
    description: 'Prayer for all people and nations',
    icon: '🌍',
    status: 'available'
  },
  {
    slug: 'prayer-peace',
    name: 'Prayer for Peace',
    description: 'Prayer for peace in the world and hearts',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'prayer-poor',
    name: 'Prayer for the Poor',
    description: 'Prayer for the poor, suffering, and marginalized',
    icon: '🤝',
    status: 'available'
  },
  {
    slug: 'prayer-suffering',
    name: 'Prayer for the Suffering',
    description: 'Prayer for those who are suffering and in pain',
    icon: '💔',
    status: 'available'
  },
  {
    slug: 'prayer-missionaries',
    name: 'Prayer for Missionaries',
    description: 'Prayer for missionaries and evangelization',
    icon: '🌍',
    status: 'available'
  },
  {
    slug: 'prayer-evangelization',
    name: 'Prayer for Evangelization',
    description: 'Prayer for the spread of the Gospel',
    icon: '📖',
    status: 'available'
  }
];

export default function IntercessoryPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Intercessory Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🤝</div>
        <h1 className="text-4xl font-bold text-black mb-4">Intercessory Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of intercessory prayers for others and the world. These prayers help us fulfill 
          our Christian duty to pray for others, following the example of Jesus who intercedes for us.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{intercessoryPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">For Others</div>
            <div className="text-sm text-gray-600">Focused</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {intercessoryPrayers.map((prayer) => (
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
                href={`/prayers/intercession/${prayer.slug}`}
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

      {/* Intercession Examples Section */}
      <section className="bg-indigo-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Biblical Examples of Intercession</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👑</div>
              <h3 className="text-lg font-semibold text-black mb-2">Abraham</h3>
              <p className="text-sm text-gray-600">Genesis 18:16-33</p>
            </div>
            <p className="text-sm text-gray-600">Interceded for Sodom and Gomorrah, asking God to spare the cities for the sake of the righteous.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2">Moses</h3>
              <p className="text-sm text-gray-600">Exodus 32:11-14</p>
            </div>
            <p className="text-sm text-gray-600">Interceded for the Israelites after they worshiped the golden calf, asking God to spare them.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">✝️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Jesus</h3>
              <p className="text-sm text-gray-600">John 17</p>
            </div>
            <p className="text-sm text-gray-600">The High Priestly Prayer - Jesus intercedes for His disciples and all believers.</p>
          </div>
        </div>
      </section>

      {/* Why Intercessory Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Intercessory Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-black mb-2">Christian Duty</h3>
            <p className="text-gray-600 text-sm">
              We are called to pray for others as part of our Christian vocation and love of neighbor.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🌍</div>
            <h3 className="font-semibold text-black mb-2">Universal Church</h3>
            <p className="text-gray-600 text-sm">
              These prayers unite us with the entire Church and expand our prayer beyond ourselves.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🕊️</div>
            <h3 className="font-semibold text-black mb-2">Divine Mercy</h3>
            <p className="text-gray-600 text-sm">
              Intercessory prayer is an act of mercy and charity toward our brothers and sisters.
            </p>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayer Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/healing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🏥</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Healing Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers for physical and spiritual healing</p>
            </div>
          </Link>
          
          <Link href="/prayers/thanksgiving" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙌</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Thanksgiving Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers of gratitude and thanksgiving</p>
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