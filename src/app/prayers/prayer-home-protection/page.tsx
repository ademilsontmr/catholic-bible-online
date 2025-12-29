import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Home Protection – Catholic Home Protection Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for home protection, asking God to protect and bless the home, family, and all who dwell within its walls.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/protection/prayer-home-protection",
  },
  openGraph: {
    title: "Prayer for Home Protection – Catholic Home Protection Prayer",
    description: "A beautiful Catholic prayer for home protection, asking God to protect and bless the home, family, and all who dwell within its walls.",
    url: "https://www.catholicbibleonline.com/prayers/protection/prayer-home-protection",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Home Protection – Catholic Home Protection Prayer",
    description: "A beautiful Catholic prayer for home protection, asking God to protect and bless the home, family, and all who dwell within its walls.",
  },
};

export default function PrayerForHomeProtectionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/protection" className="hover:underline">Protection Prayers</Link> &gt; 
        Prayer for Home Protection
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏠 Prayer for Home Protection</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Home Protection is a beautiful Catholic prayer that asks God to protect and bless the home, family, and all who dwell within its walls. 
        This prayer helps us to consecrate our homes to God's care and to trust in His protection over our families. 
        It is perfect for anyone seeking to protect their home and family from harm and to invite God's blessing into their dwelling.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Home Protection</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Home Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God, our heavenly Father,</p>
            <p className="mb-2">bless and protect this home.</p>
            <p className="mb-2">Keep all who dwell here safe</p>
            <p className="mb-2">from all harm and danger.</p>
            <p className="mb-2">May Your peace fill these walls</p>
            <p className="mb-2">and Your love dwell in every room.</p>
            <p className="mb-2">Protect us from fire, flood, and theft,</p>
            <p className="mb-2">and keep us safe from all evil.</p>
            <p className="mb-2">May this home be a place of love,</p>
            <p className="mb-2">peace, and joy for all who enter.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Home Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">protect our home and family.</p>
            <p className="mb-2">Keep us safe and bless us.</p>
            <p className="mb-2">May Your peace dwell here.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Family Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">protect our family in this home.</p>
            <p className="mb-2">Keep us safe from all dangers</p>
            <p className="mb-2">and bless us with Your love.</p>
            <p className="mb-2">May our home be a sanctuary</p>
            <p className="mb-2">of peace and love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Home Protection</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When moving into a new home</strong> - To consecrate the home to God</li>
          <li>• <strong>When feeling unsafe at home</strong> - To ask for protection and peace</li>
          <li>• <strong>When leaving home for travel</strong> - To ask for protection while away</li>
          <li>• <strong>When welcoming guests</strong> - To ask for blessing on all who enter</li>
          <li>• <strong>When experiencing problems at home</strong> - To ask for God's help and protection</li>
          <li>• <strong>When protecting family members</strong> - To ask for safety for loved ones</li>
          <li>• <strong>Daily prayer time</strong> - To maintain God's protection over the home</li>
          <li>• <strong>Before sleep</strong> - To ask for protection during the night</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Home Protection acknowledges that our homes are sacred spaces where we live, love, and grow as families. This Catholic prayer recognizes that we should consecrate our homes to God's care and trust in His protection over our families. When we pray for home protection, we are acknowledging that our homes are gifts from God and that we should invite His blessing and protection into our dwelling places.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that our homes should be places of peace, love, and safety, and that we should actively seek God's protection to maintain these qualities. When we pray for home protection, we are acknowledging that we cannot guarantee the safety of our homes and families on our own and that we need God's grace and protection. The prayer reminds us that God cares about our homes and families and that He desires to bless and protect them.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Home Protection also helps us to grow in gratitude and stewardship. When we pray for protection over our homes, we are reminded to be grateful for the gift of shelter and to be good stewards of our homes. The prayer teaches us that true protection comes from our relationship with God and that we can create safe and loving homes when we trust in His care and guidance.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-st-michael-protection" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  Prayer to St. Michael for Protection
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A powerful prayer to St. Michael the Archangel for protection against evil and spiritual attacks.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-protection-evil" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-red-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-red-600 transition-colors">
                  Prayer for Protection from Evil
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for protection from evil and spiritual attacks, asking God for His divine protection.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-emergency-protection" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-red-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-red-600 transition-colors">
                  Prayer for Emergency Protection
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for protection in emergency situations, asking God for immediate help and safety.
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
            title="Prayer Home Protection" 
            url="/prayers/prayer-home-protection"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 