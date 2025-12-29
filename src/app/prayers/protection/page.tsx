import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Protection Prayers – Catholic Protection Prayer Collection | Catholic Bible Online",
  description: "Complete collection of protection prayers: prayers for protection from evil, travel safety, home protection, work protection, and emergency situations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/protection",
  },
  openGraph: {
    title: "Protection Prayers – Catholic Protection Prayer Collection",
    description: "Complete collection of protection prayers for all situations.",
    url: "https://www.catholicbibleonline.com/prayers/protection",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Protection Prayers – Catholic Protection Prayer Collection",
    description: "Complete collection of protection prayers for all situations.",
  },
};

const protectionPrayers = [
  {
    slug: 'prayer-st-michael-protection',
    name: 'Prayer to St. Michael for Protection',
    description: 'Powerful prayer for protection against evil',
    icon: '⚔️',
    status: 'available'
  },
  {
    slug: 'prayer-protection-evil',
    name: 'Prayer for Protection from Evil',
    description: 'Prayer for protection from evil and spiritual attacks',
    icon: '🛡️',
    status: 'available'
  },
  {
    slug: 'prayer-travel-protection',
    name: 'Prayer for Travel Protection',
    description: 'Prayer for safety during travel and journeys',
    icon: '✈️',
    status: 'available'
  },
  {
    slug: 'prayer-home-protection',
    name: 'Prayer for Home Protection',
    description: 'Prayer to protect and bless the home',
    icon: '🏠',
    status: 'available'
  },
  {
    slug: 'prayer-work-protection',
    name: 'Prayer for Work Protection',
    description: 'Prayer for protection and blessing at work',
    icon: '💼',
    status: 'available'
  },
  {
    slug: 'prayer-school-protection',
    name: 'Prayer for School Protection',
    description: 'Prayer for students and school safety',
    icon: '🎓',
    status: 'available'
  },
  {
    slug: 'prayer-military-protection',
    name: 'Prayer for Military Protection',
    description: 'Prayer for those serving in the military',
    icon: '🎖️',
    status: 'available'
  },
  {
    slug: 'prayer-emergency-protection',
    name: 'Prayer for Emergency Protection',
    description: 'Prayer for protection in emergency situations',
    icon: '🚨',
    status: 'available'
  }
];

export default function ProtectionPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Protection Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🛡️</div>
        <h1 className="text-4xl font-bold text-black mb-4">Protection Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers for protection in all situations. These prayers seek God's protection 
          and the intercession of powerful saints like St. Michael the Archangel for safety and deliverance.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{protectionPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Divine</div>
            <div className="text-sm text-gray-600">Shield</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {protectionPrayers.map((prayer) => (
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

      {/* Protection Saints Section */}
      <section className="bg-orange-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Powerful Protection Saints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">⚔️</div>
              <h3 className="text-lg font-semibold text-black mb-2">St. Michael</h3>
              <p className="text-sm text-gray-600">Prince of the Heavenly Host</p>
            </div>
            <p className="text-sm text-gray-600">The great defender against evil and spiritual warfare.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🔨</div>
              <h3 className="text-lg font-semibold text-black mb-2">St. Joseph</h3>
              <p className="text-sm text-gray-600">Terror of Demons</p>
            </div>
            <p className="text-sm text-gray-600">Protector of the Holy Family and all families.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2">Our Lady</h3>
              <p className="text-sm text-gray-600">Mother of God</p>
            </div>
            <p className="text-sm text-gray-600">Powerful intercessor and protector under many titles.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">👼</div>
              <h3 className="text-lg font-semibold text-black mb-2">Guardian Angels</h3>
              <p className="text-sm text-gray-600">Personal Protectors</p>
            </div>
            <p className="text-sm text-gray-600">Each person has a guardian angel for protection.</p>
          </div>
        </div>
      </section>

      {/* Why Protection Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Protection Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-black mb-2">Divine Shield</h3>
            <p className="text-gray-600 text-sm">
              These prayers invoke God's protection and create a spiritual shield around us.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="font-semibold text-black mb-2">Spiritual Warfare</h3>
            <p className="text-gray-600 text-sm">
              Protection prayers are essential weapons in the battle against evil and temptation.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🕊️</div>
            <h3 className="font-semibold text-black mb-2">Peace & Security</h3>
            <p className="text-gray-600 text-sm">
              These prayers bring peace of mind and confidence in God's loving care.
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
          
          <Link href="/prayers/marian" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Marian Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/family" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Family Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers for families and children</p>
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