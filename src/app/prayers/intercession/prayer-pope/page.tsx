import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for the Pope – Catholic Prayer for the Holy Father | Catholic Bible Online",
  description: "A beautiful Catholic prayer for the Pope, asking God to bless, protect, and guide the Holy Father in his sacred ministry and leadership of the Church.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/intercession/prayer-pope",
  },
  openGraph: {
    title: "Prayer for the Pope – Catholic Prayer for the Holy Father",
    description: "A beautiful Catholic prayer for the Pope, asking God to bless, protect, and guide the Holy Father in his sacred ministry and leadership of the Church.",
    url: "https://www.catholicbibleonline.com/prayers/intercession/prayer-pope",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for the Pope – Catholic Prayer for the Holy Father",
    description: "A beautiful Catholic prayer for the Pope, asking God to bless, protect, and guide the Holy Father in his sacred ministry and leadership of the Church.",
  },
};

export default function PrayerForThePope() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/intercession" className="hover:underline">Intercessory Prayers</Link> &gt; 
        Prayer for the Pope
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⛪ Prayer for the Pope</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for the Pope is a beautiful Catholic prayer that asks God to bless, protect, and guide the Holy Father in his sacred ministry and leadership of the Church. 
        This prayer helps us to support our Pope through prayer and to ask for God's wisdom and strength for his difficult responsibilities. 
        It is perfect for anyone seeking to pray for the spiritual leader of the Catholic Church.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Pope</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for the Pope</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God, the Pastor and Ruler of all the faithful,</p>
            <p className="mb-2">look down mercifully upon Your servant,</p>
            <p className="mb-2">our Holy Father the Pope,</p>
            <p className="mb-2">whom You have chosen as chief shepherd</p>
            <p className="mb-2">to guide Your Church.</p>
            <p className="mb-2">Grant him wisdom and strength</p>
            <p className="mb-2">to lead Your people in truth and holiness.</p>
            <p className="mb-2">Protect him from all harm</p>
            <p className="mb-2">and give him courage in times of trial.</p>
            <p className="mb-2">May he be a faithful servant</p>
            <p className="mb-2">and a living sign of Your love for the world.</p>
            <p className="mb-2">Through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for the Pope</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless and protect our Holy Father.</p>
            <p className="mb-2">Give him wisdom and strength</p>
            <p className="mb-2">to shepherd Your Church.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for the Pope's Ministry</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">bless our Pope in his sacred ministry.</p>
            <p className="mb-2">Grant him health and long life</p>
            <p className="mb-2">to serve Your Church.</p>
            <p className="mb-2">May his words bring comfort to the suffering</p>
            <p className="mb-2">and guidance to the faithful.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for the Pope</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During daily prayer</strong> - To regularly support the Holy Father</li>
          <li>• <strong>When the Pope faces challenges</strong> - To ask for God's strength and wisdom</li>
          <li>• <strong>During papal visits or events</strong> - To pray for safety and success</li>
          <li>• <strong>When the Pope is ill</strong> - To ask for healing and comfort</li>
          <li>• <strong>During important Church decisions</strong> - To pray for guidance</li>
          <li>• <strong>On feast days and special occasions</strong> - To honor the papal office</li>
          <li>• <strong>When praying for Church unity</strong> - To support the Pope's leadership</li>
          <li>• <strong>During times of crisis</strong> - To ask for divine assistance</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for the Pope acknowledges that the Holy Father holds a unique and challenging position as the spiritual leader of over one billion Catholics worldwide. This Catholic prayer recognizes that the Pope needs our prayers and support to fulfill his sacred ministry effectively. When we pray for the Pope, we are participating in the unity of the Church and supporting the successor of St. Peter in his mission to shepherd God's people.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that leadership in the Church requires divine guidance and that we should actively support our spiritual leaders through prayer. The Pope faces enormous responsibilities and challenges in guiding the universal Church, making important decisions, and representing Christ to the world. Our prayers can provide spiritual support and ask for God's blessing on his ministry.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for the Pope also helps us to grow in our understanding of Church unity and our responsibility as Catholics to support our spiritual leaders. When we pray for the Pope, we are reminded that we are part of a universal Church and that we have a role to play in supporting the mission of the Church through our prayers and faithful living.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/intercession/prayer-priests" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Intercessory Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  Prayer for Priests
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for priests and their sacred ministry, asking God to bless and strengthen them.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/intercession/prayer-church" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Intercessory Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for the Church
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for the universal Church and its mission of evangelization and service.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/intercession/prayer-religious" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Intercessory Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Prayer for Religious
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for religious sisters, brothers, and monks in their consecrated life.
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
            title="Intercession" 
            url="/prayers/intercession"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 