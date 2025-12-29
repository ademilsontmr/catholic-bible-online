import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Family Prayers – Catholic Family Prayer Collection | Catholic Bible Online",
  description: "Complete collection of family prayers: prayers for parents, children, married couples, grandparents, and family unity and protection.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family",
  },
  openGraph: {
    title: "Family Prayers – Catholic Family Prayer Collection",
    description: "Complete collection of family prayers for Catholic families.",
    url: "https://www.catholicbibleonline.com/prayers/family",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Prayers – Catholic Family Prayer Collection",
    description: "Complete collection of family prayers for Catholic families.",
  },
};

const familyPrayers = [
  {
    slug: 'family-prayer',
    name: 'Family Prayer',
    description: 'General prayer for the whole family',
    icon: '👨‍👩‍👧‍👦',
    status: 'available'
  },
  {
    slug: 'prayer-parents',
    name: 'Prayer for Parents',
    description: 'Prayer for wisdom and guidance in parenting',
    icon: '👨‍👩‍👧‍👦',
    status: 'available'
  },
  {
    slug: 'prayer-children',
    name: 'Prayer for Children',
    description: 'Prayer for the protection and growth of children',
    icon: '👶',
    status: 'available'
  },
  {
    slug: 'prayer-married-couples',
    name: 'Prayer for Married Couples',
    description: 'Prayer for married couples and their relationship',
    icon: '💑',
    status: 'available'
  },
  {
    slug: 'prayer-family',
    name: 'Prayer for the Family',
    description: 'Prayer for family unity and love',
    icon: '🏠',
    status: 'available'
  },
  {
    slug: 'prayer-grandparents',
    name: 'Prayer for Grandparents',
    description: 'Prayer honoring and blessing grandparents',
    icon: '👴👵',
    status: 'available'
  },
  {
    slug: 'prayer-siblings',
    name: 'Prayer for Siblings',
    description: 'Prayer for sibling relationships and harmony',
    icon: '👥',
    status: 'available'
  },
  {
    slug: 'prayer-home',
    name: 'Prayer for the Home',
    description: 'Prayer to bless and protect the family home',
    icon: '🏡',
    status: 'available'
  },
  {
    slug: 'prayer-family-unity',
    name: 'Prayer for Family Unity',
    description: 'Prayer for harmony and unity in the family',
    icon: '🤝',
    status: 'available'
  },
  {
    slug: 'prayer-family-protection',
    name: 'Prayer for Family Protection',
    description: 'Prayer for God\'s protection over the family',
    icon: '🛡️',
    status: 'available'
  }
];

export default function FamilyPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Family Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
        <h1 className="text-4xl font-bold text-black mb-4">Family Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Complete collection of prayers for Catholic families. These prayers help families grow together in faith, 
          strengthen relationships, and seek God's blessing and protection for the domestic church.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{familyPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Family</div>
            <div className="text-sm text-gray-600">Focused</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {familyPrayers.map((prayer) => (
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

      {/* Family Prayer Time Section */}
      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Family Prayer Time</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-black mb-2">The Family That Prays Together</h3>
              <p className="text-gray-600">Stays together - St. John Paul II</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">Family prayer is a powerful way to strengthen bonds and grow in faith together.</p>
                <p className="mb-4">Consider praying together:</p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Before meals (Grace)</li>
                  <li>In the morning (Morning Offering)</li>
                  <li>In the evening (Evening Prayer)</li>
                  <li>Before bedtime (Family Rosary)</li>
                  <li>On special occasions (Birthdays, anniversaries)</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/basic"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Start with Basic Family Prayers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Family Roles Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Prayers for Different Family Roles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">👨‍👩‍👧‍👦</div>
            <h3 className="font-semibold text-black mb-2">Parents</h3>
            <p className="text-sm text-gray-600">Prayers for wisdom, patience, and guidance in raising children</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">👶</div>
            <h3 className="font-semibold text-black mb-2">Children</h3>
            <p className="text-sm text-gray-600">Prayers for protection, growth, and learning to love God</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">💑</div>
            <h3 className="font-semibold text-black mb-2">Couples</h3>
            <p className="text-sm text-gray-600">Prayers for love, unity, and strength in marriage</p>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl mb-3">👴👵</div>
            <h3 className="font-semibold text-black mb-2">Grandparents</h3>
            <p className="text-sm text-gray-600">Prayers honoring their wisdom and blessing their role</p>
          </div>
        </div>
      </section>

      {/* Why Family Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why Family Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="font-semibold text-black mb-2">Domestic Church</h3>
            <p className="text-gray-600 text-sm">
              The family is the first school of faith and the domestic church where children learn to pray.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold text-black mb-2">Strengthen Bonds</h3>
            <p className="text-gray-600 text-sm">
              Praying together strengthens family bonds and creates lasting spiritual memories.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold text-black mb-2">Divine Protection</h3>
            <p className="text-gray-600 text-sm">
              Family prayers invite God's protection and blessing over the entire family.
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
          
          <Link href="/prayers/thanksgiving" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙌</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Thanksgiving Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers of gratitude and thanksgiving</p>
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