import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Seasonal Prayers – Liturgical Season Prayers | Catholic Bible Online",
  description: "Complete collection of seasonal prayers: Advent, Christmas, Lent, Easter, Pentecost, and prayers for All Saints and All Souls Day.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/seasonal",
  },
  openGraph: {
    title: "Seasonal Prayers – Liturgical Season Prayers",
    description: "Complete collection of seasonal prayers for different liturgical seasons.",
    url: "https://www.catholicbibleonline.com/prayers/seasonal",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Seasonal Prayers – Liturgical Season Prayers",
    description: "Complete collection of seasonal prayers for different liturgical seasons.",
  },
};

const seasonalPrayers = [
  {
    slug: 'advent-prayers',
    name: 'Advent Prayers',
    description: 'Prayers for the season of preparation for Christmas',
    icon: '🕯️',
    status: 'available'
  },
  {
    slug: 'christmas-prayers',
    name: 'Christmas Prayers',
    description: 'Prayers celebrating the birth of Jesus Christ',
    icon: '🎄',
    status: 'available'
  },
  {
    slug: 'lent-prayers',
    name: 'Lent Prayers',
    description: 'Prayers for the season of penance and preparation',
    icon: '🟣',
    status: 'available'
  },
  {
    slug: 'holy-week-prayers',
    name: 'Holy Week Prayers',
    description: 'Prayers for the most sacred week of the year',
    icon: '✝️',
    status: 'available'
  },
  {
    slug: 'easter-prayers',
    name: 'Easter Prayers',
    description: 'Prayers celebrating the Resurrection of Jesus',
    icon: '🐰',
    status: 'available'
  },
  {
    slug: 'pentecost-prayers',
    name: 'Pentecost Prayers',
    description: 'Prayers for the descent of the Holy Spirit',
    icon: '🕊️',
    status: 'available'
  },
  {
    slug: 'all-saints-prayers',
    name: 'All Saints Day Prayers',
    description: 'Prayers honoring all the saints in heaven',
    icon: '👼',
    status: 'available'
  },
  {
    slug: 'all-souls-prayers',
    name: 'All Souls Day Prayers',
    description: 'Prayers for the faithful departed',
    icon: '🕯️',
    status: 'available'
  }
];

export default function SeasonalPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Seasonal Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🌿</div>
        <h1 className="text-4xl font-bold text-black mb-4">Seasonal Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers for different liturgical seasons. These prayers help us celebrate 
          the mysteries of our faith throughout the Church year and grow in our spiritual journey.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{seasonalPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">8</div>
            <div className="text-sm text-gray-600">Liturgical Seasons</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {seasonalPrayers.map((prayer) => (
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

      {/* Liturgical Calendar Section */}
      <section className="bg-green-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Liturgical Calendar</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🕯️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Advent</h3>
              <p className="text-sm text-gray-600">4 weeks before Christmas</p>
            </div>
            <p className="text-sm text-gray-600">Season of preparation and waiting for the coming of Christ.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🎄</div>
              <h3 className="text-lg font-semibold text-black mb-2">Christmas</h3>
              <p className="text-sm text-gray-600">December 25 - January 6</p>
            </div>
            <p className="text-sm text-gray-600">Celebration of the birth of Jesus Christ, our Savior.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🟣</div>
              <h3 className="text-lg font-semibold text-black mb-2">Lent</h3>
              <p className="text-sm text-gray-600">40 days before Easter</p>
            </div>
            <p className="text-sm text-gray-600">Season of penance, prayer, and preparation for Easter.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">🐰</div>
              <h3 className="text-lg font-semibold text-black mb-2">Easter</h3>
              <p className="text-sm text-gray-600">50 days after Easter Sunday</p>
            </div>
            <p className="text-sm text-gray-600">Celebration of Christ's Resurrection and victory over death.</p>
          </div>
        </div>
      </section>

      {/* Why Seasonal Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Seasonal Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Liturgical Rhythm</h3>
            <p className="text-gray-600 text-sm">
              These prayers help us follow the Church's liturgical calendar and live the mysteries of our faith.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="font-semibold text-black mb-2">Spiritual Growth</h3>
            <p className="text-gray-600 text-sm">
              Each season has its own spiritual focus, helping us grow in different aspects of our faith.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold text-black mb-2">Communal Prayer</h3>
            <p className="text-gray-600 text-sm">
              These prayers unite us with the entire Church as we celebrate the same mysteries together.
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
          
          <Link href="/prayers/mass" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">✞</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Mass Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers used during the celebration of Mass</p>
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