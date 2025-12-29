import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Thanksgiving Prayers – Catholic Gratitude Prayer Collection | Catholic Bible Online",
  description: "Complete collection of thanksgiving prayers: prayers of gratitude, prayers for God's blessings, daily gifts, answered prayers, and God's mercy and love.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/thanksgiving",
  },
  openGraph: {
    title: "Thanksgiving Prayers – Catholic Gratitude Prayer Collection",
    description: "Complete collection of thanksgiving prayers and prayers of gratitude.",
    url: "https://www.catholicbibleonline.com/prayers/thanksgiving",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thanksgiving Prayers – Catholic Gratitude Prayer Collection",
    description: "Complete collection of thanksgiving prayers and prayers of gratitude.",
  },
};

const thanksgivingPrayers = [
  {
    slug: 'prayer-thanksgiving',
    name: 'Prayer of Thanksgiving',
    description: 'General prayer of gratitude to God',
    icon: '🙌',
    status: 'available'
  },
  {
    slug: 'prayer-gods-blessings',
    name: 'Prayer for God\'s Blessings',
    description: 'Prayer thanking God for His many blessings',
    icon: '✨',
    status: 'available'
  },
  {
    slug: 'prayer-daily-gifts',
    name: 'Prayer for Daily Gifts',
    description: 'Prayer of gratitude for daily gifts and graces',
    icon: '🎁',
    status: 'available'
  },
  {
    slug: 'prayer-answered-prayers',
    name: 'Prayer for Answered Prayers',
    description: 'Prayer thanking God for answered prayers',
    icon: '✅',
    status: 'available'
  },
  {
    slug: 'prayer-gods-mercy',
    name: 'Prayer for God\'s Mercy',
    description: 'Prayer of gratitude for God\'s mercy and forgiveness',
    icon: '💝',
    status: 'available'
  },
  {
    slug: 'prayer-gods-love',
    name: 'Prayer for God\'s Love',
    description: 'Prayer thanking God for His infinite love',
    icon: '❤️',
    status: 'available'
  }
];

export default function ThanksgivingPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Thanksgiving Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🙌</div>
        <h1 className="text-4xl font-bold text-black mb-4">Thanksgiving Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers of gratitude and thanksgiving. These prayers help us express our 
          gratitude to God for His countless blessings, mercy, and love in our lives.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{thanksgivingPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Gratitude</div>
            <div className="text-sm text-gray-600">Focused</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {thanksgivingPrayers.map((prayer) => (
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

      {/* Gratitude Practice Section */}
      <section className="bg-yellow-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">The Practice of Gratitude</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-black mb-2">Give Thanks in All Circumstances</h3>
              <p className="text-gray-600">1 Thessalonians 5:18</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">Gratitude is a fundamental Christian virtue that opens our hearts to God's love and grace.</p>
                <p className="mb-4">Consider giving thanks for:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Life and health</li>
                  <li>Family and friends</li>
                  <li>Daily bread and necessities</li>
                  <li>Answered prayers</li>
                  <li>God's mercy and forgiveness</li>
                  <li>Trials that strengthen us</li>
                  <li>God's constant presence</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/basic"
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              >
                Start with Basic Thanksgiving Prayers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Gratitude Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Types of Gratitude</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">🎁</div>
            <h3 className="font-semibold text-black mb-2">Daily Blessings</h3>
            <p className="text-sm text-gray-600">Gratitude for the simple gifts of each day</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">✅</div>
            <h3 className="font-semibold text-black mb-2">Answered Prayers</h3>
            <p className="text-sm text-gray-600">Thanking God for His responses to our petitions</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💝</div>
            <h3 className="font-semibold text-black mb-2">God's Mercy</h3>
            <p className="text-sm text-gray-600">Gratitude for forgiveness and divine mercy</p>
          </div>
        </div>
      </section>

      {/* Why Thanksgiving Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Thanksgiving Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">❤️</div>
            <h3 className="font-semibold text-black mb-2">Heart of Worship</h3>
            <p className="text-gray-600 text-sm">
              Gratitude is at the heart of true worship and draws us closer to God.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Positive Attitude</h3>
            <p className="text-gray-600 text-sm">
              Thanksgiving prayers help us develop a positive and grateful attitude toward life.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🕊️</div>
            <h3 className="font-semibold text-black mb-2">Peace & Joy</h3>
            <p className="text-gray-600 text-sm">
              Gratitude brings peace and joy, even in difficult circumstances.
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
          
          <Link href="/prayers/family" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Family Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers for families and children</p>
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