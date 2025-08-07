import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for Priests – Catholic Prayer for Priests | Catholic Bible Online",
  description: "A beautiful Catholic prayer for priests, asking God to bless, protect, and strengthen them in their sacred ministry and priestly vocation.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/intercession/prayer-priests",
  },
  openGraph: {
    title: "Prayer for Priests – Catholic Prayer for Priests",
    description: "A beautiful Catholic prayer for priests, asking God to bless, protect, and strengthen them in their sacred ministry and priestly vocation.",
    url: "https://www.catholicbibleonline.com/prayers/intercession/prayer-priests",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Priests – Catholic Prayer for Priests",
    description: "A beautiful Catholic prayer for priests, asking God to bless, protect, and strengthen them in their sacred ministry and priestly vocation.",
  },
};

export default function PrayerForPriests() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/intercession" className="hover:underline">Intercessory Prayers</Link> &gt; 
        Prayer for Priests
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👨‍💼 Prayer for Priests</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Priests is a beautiful Catholic prayer that asks God to bless, protect, and strengthen priests in their sacred ministry and priestly vocation. 
        This prayer helps us to support our priests through prayer and to ask for God's grace to help them serve the Church faithfully. 
        It is perfect for anyone seeking to pray for the spiritual fathers who serve our communities.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Priests</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Priests</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Jesus, our great High Priest,</p>
            <p className="mb-2">hear our humble prayers on behalf of Your priests.</p>
            <p className="mb-2">Give them a deep faith, a bright and firm hope,</p>
            <p className="mb-2">and a burning love which will ever increase</p>
            <p className="mb-2">in the course of their priestly life.</p>
            <p className="mb-2">In their loneliness, comfort them.</p>
            <p className="mb-2">In their sorrows, strengthen them.</p>
            <p className="mb-2">In their frustrations, point out to them</p>
            <p className="mb-2">that it is through suffering</p>
            <p className="mb-2">that the soul is purified,</p>
            <p className="mb-2">and it is in their abandonment</p>
            <p className="mb-2">that they are drawn closer to You.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Priests</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless our priests and keep them holy.</p>
            <p className="mb-2">Give them strength and wisdom</p>
            <p className="mb-2">to serve Your people faithfully.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Priestly Vocations</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">we pray for more young men</p>
            <p className="mb-2">to answer Your call to the priesthood.</p>
            <p className="mb-2">Give them generous hearts</p>
            <p className="mb-2">and the courage to say yes</p>
            <p className="mb-2">to Your invitation to serve.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Priests</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During daily prayer</strong> - To regularly support priests in prayer</li>
          <li>• <strong>Before Mass</strong> - To pray for the celebrant</li>
          <li>• <strong>When priests face challenges</strong> - To ask for God's strength</li>
          <li>• <strong>On Holy Thursday</strong> - The feast of the priesthood</li>
          <li>• <strong>When priests are ill or suffering</strong> - To ask for healing</li>
          <li>• <strong>During ordinations</strong> - To pray for new priests</li>
          <li>• <strong>When praying for vocations</strong> - To ask for more priests</li>
          <li>• <strong>During times of scandal</strong> - To pray for purification and healing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Priests acknowledges that priests hold a sacred and challenging vocation, serving as spiritual fathers and shepherds of God's people. This Catholic prayer recognizes that priests need our prayers and support to fulfill their ministry effectively and to remain faithful to their calling. When we pray for priests, we are supporting those who have dedicated their lives to serving God and His people.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that the priesthood is a gift to the Church and that we should be grateful for those who have answered God's call to serve. Priests face many challenges in their ministry—loneliness, spiritual battles, criticism, and the weight of caring for souls. Our prayers can provide spiritual support and ask for God's grace to help them persevere in their vocation.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Priests also helps us to grow in our appreciation for the sacraments and the role of priests in our spiritual lives. When we pray for priests, we are reminded of our dependence on their ministry for the Mass, confession, and other sacraments. This prayer encourages us to support our priests not only through prayer but also through our respect, gratitude, and cooperation with their ministry.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/intercession/prayer-pope" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-yellow-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                  Intercessory Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-yellow-600 transition-colors">
                  Prayer for the Pope
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for the Holy Father and his ministry as leader of the Church.
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
        </div>
      </section>
    </main>
  );
} 