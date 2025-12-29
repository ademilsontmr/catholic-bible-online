import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Children – Catholic Children's Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for children, asking God for protection, guidance, and blessings for the little ones in our lives.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/prayer-children",
  },
  openGraph: {
    title: "Prayer for Children – Catholic Children's Prayer",
    description: "A beautiful Catholic prayer for children, asking God for protection, guidance, and blessings for the little ones in our lives.",
    url: "https://www.catholicbibleonline.com/prayers/family/prayer-children",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Children – Catholic Children's Prayer",
    description: "A beautiful Catholic prayer for children, asking God for protection, guidance, and blessings for the little ones in our lives.",
  },
};

export default function PrayerForChildrenPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Prayer for Children
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👶 Prayer for Children</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Children is a beautiful Catholic prayer that asks God for protection, guidance, and blessings for the little ones in our lives. 
        This prayer helps parents, grandparents, and all who care for children to entrust them to God's loving care. 
        It is perfect for daily prayer, bedtime prayers, or any moment when we want to ask for God's blessing on children.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Children</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Children</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O loving God,</p>
            <p className="mb-2">bless and protect our children.</p>
            <p className="mb-2">Keep them safe from all harm</p>
            <p className="mb-2">and guide them in Your ways.</p>
            <p className="mb-2">Help them to grow in faith,</p>
            <p className="mb-2">hope, and love.</p>
            <p className="mb-2">Grant them the grace to know You,</p>
            <p className="mb-2">to love You, and to serve You.</p>
            <p className="mb-2">May they always walk in Your light</p>
            <p className="mb-2">and find joy in Your presence.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Children</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless our children.</p>
            <p className="mb-2">Keep them safe and healthy.</p>
            <p className="mb-2">Help them to grow in Your love.</p>
            <p className="mb-2">Guide them always.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Bedtime Prayer for Children</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Now I lay me down to sleep,</p>
            <p className="mb-2">I pray the Lord my soul to keep.</p>
            <p className="mb-2">If I should die before I wake,</p>
            <p className="mb-2">I pray the Lord my soul to take.</p>
            <p className="mb-2">God bless Mommy and Daddy,</p>
            <p className="mb-2">and all my family.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Children</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily prayer time</strong> - When asking for God's blessing on children</li>
          <li>• <strong>At bedtime</strong> - To pray for children's safety and rest</li>
          <li>• <strong>When children are sick</strong> - To ask for healing and comfort</li>
          <li>• <strong>Before school or activities</strong> - To ask for protection and guidance</li>
          <li>• <strong>On children's birthdays</strong> - To give thanks and ask for blessings</li>
          <li>• <strong>When children are struggling</strong> - To ask for help and strength</li>
          <li>• <strong>During family prayer time</strong> - To include children in family devotion</li>
          <li>• <strong>When children are away from home</strong> - To ask for protection</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Children is a powerful way to entrust our little ones to God's loving care. This Catholic prayer acknowledges that children are precious gifts from God and asks for His protection and guidance in their lives. When we pray for children, we are recognizing that they belong to God first, and we are asking Him to watch over them.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that children are not just our responsibility, but also God's beloved children. By praying for them, we are asking God to help us in our role as caregivers and to provide the grace and strength that children need to grow in faith and holiness. The prayer reminds us that our children's spiritual well-being is just as important as their physical well-being.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Children also helps us to grow in trust and faith. When we entrust our children to God's care, we are learning to let go of our worries and to trust in God's providence. The prayer teaches us that God loves our children even more than we do, and He will always watch over them and guide them in His ways.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-parents" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for Parents
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for wisdom and guidance in parenting, asking God to help parents raise their children in faith.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-grandparents" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-orange-600 transition-colors">
                  Prayer for Grandparents
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer honoring and blessing grandparents, asking God to give them wisdom and joy in their role.
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
            title="Prayer Children" 
            url="/prayers/prayer-children"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 