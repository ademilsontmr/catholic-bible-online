import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Morning Offering – Catholic Morning Prayer | Catholic Bible Online",
  description: "Learn the Morning Offering prayer to consecrate your day to God. Discover different versions and the spiritual benefits of offering your day to Jesus.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/morning-offering",
  },
  openGraph: {
    title: "Morning Offering – Catholic Morning Prayer",
    description: "Learn the Morning Offering prayer to consecrate your day to God.",
    url: "https://www.catholicbibleonline.com/prayers/morning-offering",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Morning Offering – Catholic Morning Prayer",
    description: "Learn the Morning Offering prayer to consecrate your day to God.",
  },
};

export default function MorningOfferingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Morning Offering
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌅 Morning Offering – Catholic Morning Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Morning Offering is a beautiful prayer that consecrates your entire day to God. By offering your prayers, 
        works, joys, and sufferings to Jesus through the Immaculate Heart of Mary, you transform every moment of 
        your day into an act of love and reparation. This prayer helps you begin each day with the right intention 
        and keeps you focused on God throughout your daily activities.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Traditional Morning Offering</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day in union with the Holy Sacrifice of the Mass throughout the world.</p>
          
          <p className="mb-4">I offer them for all the intentions of Your Sacred Heart: the salvation of souls, reparation for sin, and the reunion of all Christians.</p>
          
          <p className="mb-4">I offer them for the intentions of our bishops and of all Apostles of Prayer, and in particular for those recommended by our Holy Father this month.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Version (Shorter)</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Dear Jesus, I offer You this day, all that I think and do and say, united to what was done on earth by You.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Purpose</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Morning Offering is more than just a prayer - it's a way of life. When you make this offering, you are:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Consecrating your day</strong> to God before it begins</li>
          <li>• <strong>Uniting your actions</strong> with the sacrifice of the Mass</li>
          <li>• <strong>Offering everything</strong> - not just the good things, but also your sufferings and difficulties</li>
          <li>• <strong>Participating in the Church's mission</strong> for the salvation of souls</li>
          <li>• <strong>Making reparation</strong> for sin and working for the unity of Christians</li>
          <li>• <strong>Supporting the Pope's intentions</strong> for each month</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer transforms your entire day into a continuous act of worship and love. Every action, every 
          thought, every moment becomes an offering to God, making your daily life a participation in Christ's 
          redemptive work.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Morning Offering</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>First thing in the morning</strong> - Before starting your daily activities</li>
          <li>• <strong>After waking up</strong> - While still in bed or during your morning routine</li>
          <li>• <strong>Before breakfast</strong> - To consecrate your day before eating</li>
          <li>• <strong>During morning prayer time</strong> - As part of your daily prayer routine</li>
          <li>• <strong>When you remember</strong> - Even if you forget in the morning, pray it when you think of it</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Perspective</h3>
          <p className="text-gray-700 text-sm">
            Helps you see your day from God's perspective and recognize His presence in all things.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grace and Strength</h3>
          <p className="text-gray-700 text-sm">
            Opens you to receive God's grace and strength to face the challenges of the day.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Redemptive Value</h3>
          <p className="text-gray-700 text-sm">
            Gives redemptive value to your sufferings and difficulties, uniting them to Christ's cross.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mission Minded</h3>
          <p className="text-gray-700 text-sm">
            Reminds you that your daily life is part of God's plan for the salvation of the world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Live the Morning Offering</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Morning Offering is not just a prayer to be said once and forgotten. It's an intention that should 
          guide your entire day. Here's how to live it:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Begin with the prayer</strong> - Say the Morning Offering when you wake up</li>
          <li>• <strong>Renew your intention</strong> - Throughout the day, remind yourself that everything is offered to God</li>
          <li>• <strong>Accept difficulties</strong> - When things go wrong, offer them as part of your morning offering</li>
          <li>• <strong>Give thanks</strong> - Recognize and thank God for the joys and blessings of the day</li>
          <li>• <strong>Stay connected</strong> - Use short prayers throughout the day to stay connected to your offering</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that the Morning Offering is not about being perfect, but about having the right intention. 
          Even if you fail or forget during the day, the offering you made in the morning still has value.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Morning Offering is rooted in several biblical principles:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Romans 12:1</strong> - "Offer your bodies as a living sacrifice, holy and pleasing to God"</li>
          <li>• <strong>1 Corinthians 10:31</strong> - "Whatever you do, do everything for the glory of God"</li>
          <li>• <strong>Colossians 3:17</strong> - "Whatever you do, in word or in deed, do everything in the name of the Lord Jesus"</li>
          <li>• <strong>Psalm 5:3</strong> - "In the morning, Lord, you hear my voice; in the morning I lay my requests before you"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Morning Offering helps us live out these biblical teachings by consciously offering our entire day 
          to God and seeking to glorify Him in all our thoughts, words, and actions.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Remembering</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Place a reminder</strong> - Put a note on your bedside table or bathroom mirror</li>
          <li>• <strong>Set an alarm</strong> - Use your phone to remind you to pray the Morning Offering</li>
          <li>• <strong>Make it a habit</strong> - Pray it at the same time every day until it becomes automatic</li>
          <li>• <strong>Use a prayer card</strong> - Keep a card with the prayer text handy</li>
          <li>• <strong>Pray with others</strong> - If you have a family, pray it together</li>
          <li>• <strong>Don't give up</strong> - If you forget, pray it when you remember, even if it's later in the day</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/evening-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Evening Prayer
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to end your day with gratitude and reflection on God's blessings.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/act-of-contrition" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Act of Contrition
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer expressing sorrow for sins and asking for God's forgiveness.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/basic"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Basic Prayers
        </Link>
      </div>
    </main>
  );
} 