import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer of Thanksgiving – Catholic Thanksgiving Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer of thanksgiving, expressing gratitude to God for His countless blessings, mercy, and love in our lives.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/thanksgiving/prayer-thanksgiving",
  },
  openGraph: {
    title: "Prayer of Thanksgiving – Catholic Thanksgiving Prayer",
    description: "A beautiful Catholic prayer of thanksgiving, expressing gratitude to God for His countless blessings, mercy, and love in our lives.",
    url: "https://www.catholicbibleonline.com/prayers/thanksgiving/prayer-thanksgiving",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer of Thanksgiving – Catholic Thanksgiving Prayer",
    description: "A beautiful Catholic prayer of thanksgiving, expressing gratitude to God for His countless blessings, mercy, and love in our lives.",
  },
};

export default function PrayerOfThanksgivingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/thanksgiving" className="hover:underline">Thanksgiving Prayers</Link> &gt; 
        Prayer of Thanksgiving
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙌 Prayer of Thanksgiving</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer of Thanksgiving is a beautiful Catholic prayer that expresses gratitude to God for His countless blessings, mercy, and love in our lives. 
        This prayer helps us to cultivate a heart of gratitude and to acknowledge God's goodness and providence in everything we receive. 
        It is perfect for anyone seeking to develop a deeper sense of gratitude and appreciation for God's gifts.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer of Thanksgiving</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer of Thanksgiving</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Almighty God,</p>
            <p className="mb-2">I thank You from the depths of my heart</p>
            <p className="mb-2">for all the blessings You have given me.</p>
            <p className="mb-2">Thank You for the gift of life,</p>
            <p className="mb-2">for my family and friends,</p>
            <p className="mb-2">for health and strength,</p>
            <p className="mb-2">for food and shelter,</p>
            <p className="mb-2">and for all Your countless gifts.</p>
            <p className="mb-2">Above all, I thank You for Your love</p>
            <p className="mb-2">and for the salvation You offer us</p>
            <p className="mb-2">through Your Son, Jesus Christ.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer of Thanksgiving</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Thank You, Lord,</p>
            <p className="mb-2">for all Your blessings.</p>
            <p className="mb-2">Thank You for Your love</p>
            <p className="mb-2">and for Your mercy.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Prayer of Gratitude</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">as I begin this day,</p>
            <p className="mb-2">I thank You for the gift of another day.</p>
            <p className="mb-2">Help me to see Your blessings</p>
            <p className="mb-2">in everything around me.</p>
            <p className="mb-2">May my heart be filled with gratitude.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Prayer of Thanksgiving</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When waking up</strong> - To thank God for the gift of a new day</li>
          <li>• <strong>Before meals</strong> - To thank God for food and nourishment</li>
          <li>• <strong>When receiving good news</strong> - To thank God for His blessings</li>
          <li>• <strong>When feeling blessed</strong> - To acknowledge God's goodness</li>
          <li>• <strong>When experiencing God's love</strong> - To express gratitude for His care</li>
          <li>• <strong>When reflecting on life</strong> - To count God's blessings</li>
          <li>• <strong>Before sleep</strong> - To thank God for the day's blessings</li>
          <li>• <strong>Daily prayer time</strong> - To maintain a grateful heart</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer of Thanksgiving acknowledges that everything we have comes from God and that we should be grateful for His countless blessings. This Catholic prayer recognizes that gratitude is not just a feeling but a spiritual discipline that helps us to see God's goodness in every aspect of our lives. When we pray this prayer, we are cultivating a heart of gratitude and learning to appreciate the many ways God shows His love for us.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that thanksgiving is essential for our spiritual growth and well-being. When we regularly express gratitude to God, we become more aware of His presence in our lives and more appreciative of His gifts. The prayer reminds us that even in difficult times, we can find reasons to be grateful and that gratitude can transform our perspective and bring us peace.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer of Thanksgiving also helps us to grow in humility and trust. When we thank God for His blessings, we are acknowledging that we are dependent on His goodness and that everything we have is a gift from Him. The prayer teaches us that true happiness comes from recognizing and appreciating God's love and generosity in our lives.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-gods-blessings" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Thanksgiving Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-yellow-600 transition-colors">
                  Prayer for God's Blessings
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer thanking God for His many blessings and asking for continued grace.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-daily-gifts" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Thanksgiving Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Prayer for Daily Gifts
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer of gratitude for daily gifts and graces God gives us each day.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-gods-love" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-red-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Thanksgiving Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-red-600 transition-colors">
                  Prayer for God's Love
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer thanking God for His infinite love and unconditional care for us.
                </p>
              </div>
            </div>
          </Link>
        </div>
      

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Prayer Thanksgiving" 
            url="/prayers/prayer-thanksgiving"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 