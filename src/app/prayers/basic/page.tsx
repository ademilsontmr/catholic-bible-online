import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Basic Prayers – Essential Catholic Prayers | Catholic Bible Online",
  description: "Essential Catholic prayers every Catholic should know: Our Father, Hail Mary, Glory Be, Apostles' Creed, Act of Contrition, and more.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/basic",
  },
  openGraph: {
    title: "Basic Prayers – Essential Catholic Prayers",
    description: "Essential Catholic prayers every Catholic should know.",
    url: "https://www.catholicbibleonline.com/prayers/basic",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Basic Prayers – Essential Catholic Prayers",
    description: "Essential Catholic prayers every Catholic should know.",
  },
};

const basicPrayers = [
  {
    slug: 'sign-of-the-cross',
    name: 'Sign of the Cross',
    description: 'The most basic Catholic prayer and gesture of faith',
    icon: '✝️',
    status: 'available'
  },
  {
    slug: 'our-father',
    name: 'Our Father',
    description: 'The Lord\'s Prayer taught by Jesus Himself',
    icon: '🙏',
    status: 'available'
  },
  {
    slug: 'hail-mary',
    name: 'Hail Mary',
    description: 'Prayer to the Blessed Virgin Mary',
    icon: '👸',
    status: 'available'
  },
  {
    slug: 'glory-be',
    name: 'Glory Be',
    description: 'Doxology to the Holy Trinity',
    icon: '✨',
    status: 'available'
  },
  {
    slug: 'apostles-creed',
    name: 'Apostles\' Creed',
    description: 'Statement of Catholic faith',
    icon: '📜',
    status: 'available'
  },
  {
    slug: 'nicene-creed',
    name: 'Nicene Creed',
    description: 'Profession of faith used at Mass',
    icon: '📖',
    status: 'available'
  },
  {
    slug: 'act-of-contrition',
    name: 'Act of Contrition',
    description: 'Prayer of repentance and sorrow for sin',
    icon: '💔',
    status: 'available'
  },
  {
    slug: 'guardian-angel-prayer',
    name: 'Guardian Angel Prayer',
    description: 'Prayer to your guardian angel',
    icon: '👼',
    status: 'available'
  },
  {
    slug: 'grace-before-meals',
    name: 'Grace Before Meals',
    description: 'Prayer of thanksgiving before eating',
    icon: '🍽️',
    status: 'available'
  },
  {
    slug: 'grace-after-meals',
    name: 'Grace After Meals',
    description: 'Prayer of thanksgiving after eating',
    icon: '🙏',
    status: 'available'
  },
  {
    slug: 'morning-offering',
    name: 'Morning Offering',
    description: 'Dedication of the day to God',
    icon: '🌅',
    status: 'available'
  },
  {
    slug: 'evening-prayer',
    name: 'Evening Prayer',
    description: 'Prayer for the end of the day',
    icon: '🌙',
    status: 'available'
  },
  {
    slug: 'acts-of-faith-hope-love',
    name: 'Acts of Faith, Hope, and Love',
    description: 'Three fundamental theological virtues',
    icon: '❤️',
    status: 'available'
  },
  {
    slug: 'prayer-before-communion',
    name: 'Prayer Before Communion',
    description: 'Preparation for receiving the Eucharist',
    icon: '🍷',
    status: 'available'
  },
  {
    slug: 'prayer-after-communion',
    name: 'Prayer After Communion',
    description: 'Thanksgiving after receiving the Eucharist',
    icon: '🙏',
    status: 'available'
  }
];

export default function BasicPrayersPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        Basic Prayers
      </nav>
      
      <div className="text-center mb-12">
        <div className="text-6xl mb-4">🙏</div>
        <h1 className="text-4xl font-bold text-black mb-4">Basic Prayers</h1>
        <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
          Essential Catholic prayers every Catholic should know. These foundational prayers 
          form the basis of our spiritual life and are used in daily devotions, the Rosary, 
          and other Catholic practices.
        </p>
        
        <div className="flex justify-center space-x-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{basicPrayers.length}</div>
            <div className="text-sm text-gray-600">Total Prayers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">Essential</div>
            <div className="text-sm text-gray-600">Category</div>
          </div>
        </div>
      </div>

      {/* Prayer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {basicPrayers.map((prayer) => (
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
      <section className="bg-blue-50 rounded-lg p-8 mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Most Important Basic Prayer</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="text-center mb-6">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-black mb-2">Our Father</h3>
              <p className="text-gray-600">The Lord's Prayer - The perfect model for all Christian prayer</p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="text-lg text-gray-800 leading-relaxed">
                <p className="mb-4">Our Father, who art in heaven, hallowed be thy name;</p>
                <p className="mb-4">Thy kingdom come; Thy will be done on earth as it is in heaven.</p>
                <p className="mb-4">Give us this day our daily bread;</p>
                <p className="mb-4">and forgive us our trespasses as we forgive those who trespass against us;</p>
                <p className="mb-4">and lead us not into temptation, but deliver us from evil.</p>
                <p className="font-semibold">Amen.</p>
              </div>
            </div>
            
            <div className="text-center">
              <Link
                href="/prayers/our-father"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Read Full Prayer with Explanation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why These Prayers Matter */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Why These Prayers Matter</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl mb-3">📚</div>
            <h3 className="font-semibold text-black mb-2">Foundation of Faith</h3>
            <p className="text-gray-600 text-sm">
              These prayers contain the essential teachings of our Catholic faith and help us grow in our relationship with God.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-semibold text-black mb-2">Daily Practice</h3>
            <p className="text-gray-600 text-sm">
              Used in daily devotions, the Rosary, and other Catholic practices to build a consistent prayer life.
            </p>
          </div>
          
          <div className="text-center">
            <div className="text-3xl mb-3">👥</div>
            <h3 className="font-semibold text-black mb-2">Universal Language</h3>
            <p className="text-gray-600 text-sm">
              These prayers unite Catholics around the world in a common language of faith and devotion.
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
          
          <Link href="/prayers/mass" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">✞</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Mass Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers used during the celebration of Mass</p>
            </div>
          </Link>
          
          <Link href="/prayers/marian" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👸</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Marian Prayers</h3>
              <p className="text-gray-600 text-sm">Prayers to the Blessed Virgin Mary</p>
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