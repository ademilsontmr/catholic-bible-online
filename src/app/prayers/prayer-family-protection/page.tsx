import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Family Protection – Catholic Family Safety Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for family protection, asking God to keep all family members safe from harm and to watch over them in all circumstances.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/prayer-family-protection",
  },
  openGraph: {
    title: "Prayer for Family Protection – Catholic Family Safety Prayer",
    description: "A beautiful Catholic prayer for family protection, asking God to keep all family members safe from harm and to watch over them in all circumstances.",
    url: "https://www.catholicbibleonline.com/prayers/family/prayer-family-protection",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Family Protection – Catholic Family Safety Prayer",
    description: "A beautiful Catholic prayer for family protection, asking God to keep all family members safe from harm and to watch over them in all circumstances.",
  },
};

export default function PrayerForFamilyProtectionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Prayer for Family Protection
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🛡️ Prayer for Family Protection</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Family Protection is a beautiful Catholic prayer that asks God to keep all family members safe from harm and to watch over them in all circumstances. 
        This prayer helps families to entrust their safety and well-being to God's loving care and to find peace in His protection. 
        It is perfect for daily prayer, when family members are traveling, or any moment when we want to ask for God's protection over our loved ones.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Family Protection</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Family Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O loving God,</p>
            <p className="mb-2">protect our family from all harm and danger.</p>
            <p className="mb-2">Keep us safe in Your loving care</p>
            <p className="mb-2">and watch over us day and night.</p>
            <p className="mb-2">Guard us from physical and spiritual harm</p>
            <p className="mb-2">and keep us close to You.</p>
            <p className="mb-2">May Your angels watch over us</p>
            <p className="mb-2">and keep us safe in all our ways.</p>
            <p className="mb-2">Help us to trust in Your protection</p>
            <p className="mb-2">and to find peace in Your love.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Family Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">protect our family.</p>
            <p className="mb-2">Keep us safe from all harm.</p>
            <p className="mb-2">Watch over us always.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Traveling Family Members</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">protect our family members who are traveling.</p>
            <p className="mb-2">Keep them safe on their journey</p>
            <p className="mb-2">and bring them safely home to us.</p>
            <p className="mb-2">May Your angels guide their way</p>
            <p className="mb-2">and keep them in Your care.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Family Protection</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily family prayer time</strong> - When asking for God's protection over the family</li>
          <li>• <strong>When family members are traveling</strong> - To ask for safe journeys and return</li>
          <li>• <strong>When feeling unsafe or threatened</strong> - To ask for protection and peace</li>
          <li>• <strong>Before family activities</strong> - To ask for God's blessing and protection</li>
          <li>• <strong>When children are away from home</strong> - To ask for their safety and protection</li>
          <li>• <strong>During difficult times</strong> - To ask for God's protection and guidance</li>
          <li>• <strong>When family members are sick</strong> - To ask for healing and protection</li>
          <li>• <strong>Before bedtime</strong> - To ask for protection during the night</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Family Protection acknowledges our dependence on God's loving care and protection. This Catholic prayer recognizes that we cannot protect ourselves or our loved ones from all the dangers and challenges of life, and so we turn to God, who is our ultimate protector and guardian. The prayer asks for both physical and spiritual protection, recognizing that our well-being involves both body and soul.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us to trust in God's providence and to find peace in His protection. When we pray for family protection, we are acknowledging that our family's safety is ultimately in God's hands, and we are asking Him to watch over us with His loving care. The prayer reminds us that God's protection is not just about keeping us safe from physical harm, but also about protecting us from spiritual dangers and keeping us close to Him.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Family Protection also helps families to grow in faith and trust. When we entrust our safety to God, we are learning to rely on His love and care rather than on our own strength. The prayer teaches us that true security comes from our relationship with God and that we can find peace even in difficult circumstances when we trust in His protection.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-home" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for the Home
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer to bless and protect the family home, asking God to make it a place of peace and holiness.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-children" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Prayer for Children
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for the protection and growth of children, asking God to bless and guide them in their journey.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/family-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  Family Prayer
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A beautiful Catholic family prayer to unite families in faith, love, and devotion to God.
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
            title="Prayer Family Protection" 
            url="/prayers/prayer-family-protection"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 