import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Military Protection – Catholic Military Protection Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for military protection, asking God for safety, courage, and protection for those serving in the military and their families.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/protection/prayer-military-protection",
  },
  openGraph: {
    title: "Prayer for Military Protection – Catholic Military Protection Prayer",
    description: "A beautiful Catholic prayer for military protection, asking God for safety, courage, and protection for those serving in the military and their families.",
    url: "https://www.catholicbibleonline.com/prayers/protection/prayer-military-protection",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Military Protection – Catholic Military Protection Prayer",
    description: "A beautiful Catholic prayer for military protection, asking God for safety, courage, and protection for those serving in the military and their families.",
  },
};

export default function PrayerForMilitaryProtectionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/protection" className="hover:underline">Protection Prayers</Link> &gt; 
        Prayer for Military Protection
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🎖️ Prayer for Military Protection</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Military Protection is a beautiful Catholic prayer that asks God for safety, courage, and protection for those serving in the military and their families. 
        This prayer helps us to entrust our service members to God's care and to seek His protection and guidance for those who protect our freedom. 
        It is perfect for military personnel, their families, and anyone who wants to pray for those serving in the armed forces.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Military Protection</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Military Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God, our heavenly Father,</p>
            <p className="mb-2">protect all who serve in the military.</p>
            <p className="mb-2">Keep them safe from all dangers</p>
            <p className="mb-2">and give them courage in times of trial.</p>
            <p className="mb-2">Guide them in their duties</p>
            <p className="mb-2">and help them to serve with honor and integrity.</p>
            <p className="mb-2">Protect their families at home</p>
            <p className="mb-2">and bring them safely back to their loved ones.</p>
            <p className="mb-2">May Your peace go with them</p>
            <p className="mb-2">and Your love protect them always.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Military Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">protect our military personnel.</p>
            <p className="mb-2">Keep them safe and give them courage.</p>
            <p className="mb-2">Bring them home safely.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Military Families</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">bless and protect military families.</p>
            <p className="mb-2">Give them strength and peace</p>
            <p className="mb-2">while their loved ones serve.</p>
            <p className="mb-2">Help them to trust in Your care</p>
            <p className="mb-2">and to find comfort in Your love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Military Protection</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When loved ones are deployed</strong> - To ask for protection during service</li>
          <li>• <strong>When military personnel are in danger</strong> - To ask for immediate protection</li>
          <li>• <strong>When families are separated</strong> - To ask for strength and comfort</li>
          <li>• <strong>When facing difficult missions</strong> - To ask for courage and guidance</li>
          <li>• <strong>When returning from deployment</strong> - To give thanks for safe return</li>
          <li>• <strong>When dealing with military challenges</strong> - To ask for wisdom and strength</li>
          <li>• <strong>Daily prayer time</strong> - To maintain protection for all service members</li>
          <li>• <strong>On military holidays</strong> - To honor and pray for all who serve</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Military Protection acknowledges that military service is a noble calling that requires great sacrifice and courage, and that we should seek God's protection and blessing for those who serve. This Catholic prayer recognizes that military personnel face unique dangers and challenges, and that we should pray for their safety and well-being. When we pray for military protection, we are acknowledging the importance of their service and our gratitude for their sacrifice.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that military service should be done with honor, integrity, and a desire to protect others, and that we should seek God's guidance and protection for those who serve. When we pray for military protection, we are acknowledging that we cannot guarantee the safety of our service members and that we need God's grace and protection. The prayer reminds us that God cares about those who serve and that He desires to protect and bless them in their important work.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Military Protection also helps us to grow in gratitude and respect. When we pray for protection for our military personnel, we are reminded to be grateful for their service and sacrifice and to respect the important work they do. The prayer teaches us that true protection comes from our relationship with God and that we can support our service members best when we trust in His care and guidance.
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
          
          <Link href="/prayers/prayer-travel-protection" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for Travel Protection
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for safety during travel and journeys, asking God for protection on the road.
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
            title="Prayer Military Protection" 
            url="/prayers/prayer-military-protection"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 