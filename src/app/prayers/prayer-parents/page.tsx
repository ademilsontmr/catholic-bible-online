import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Parents – Catholic Parenting Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for parents, asking God for wisdom, patience, and guidance in raising children in faith and love.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/prayer-parents",
  },
  openGraph: {
    title: "Prayer for Parents – Catholic Parenting Prayer",
    description: "A beautiful Catholic prayer for parents, asking God for wisdom, patience, and guidance in raising children in faith and love.",
    url: "https://www.catholicbibleonline.com/prayers/family/prayer-parents",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Parents – Catholic Parenting Prayer",
    description: "A beautiful Catholic prayer for parents, asking God for wisdom, patience, and guidance in raising children in faith and love.",
  },
};

export default function PrayerForParentsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Prayer for Parents
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👨‍👩‍👧‍👦 Prayer for Parents</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Parents is a beautiful Catholic prayer that asks God for wisdom, patience, and guidance in the sacred vocation of parenting. 
        This prayer helps parents to fulfill their role as the first teachers of faith to their children and to raise them in love and holiness. 
        It is perfect for daily prayer, during difficult parenting moments, or when seeking God's help in raising children.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Parents</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Parents</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O loving Father,</p>
            <p className="mb-2">You have entrusted us with the care of Your children.</p>
            <p className="mb-2">Grant us the wisdom to guide them in Your ways,</p>
            <p className="mb-2">the patience to teach them with love,</p>
            <p className="mb-2">and the strength to be good examples for them.</p>
            <p className="mb-2">Help us to raise them in faith,</p>
            <p className="mb-2">hope, and charity.</p>
            <p className="mb-2">Give us the grace to love them unconditionally</p>
            <p className="mb-2">as You love us.</p>
            <p className="mb-2">May our home be a place where they learn</p>
            <p className="mb-2">to know, love, and serve You.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Parents</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">help us to be good parents.</p>
            <p className="mb-2">Give us wisdom and patience</p>
            <p className="mb-2">to raise our children in Your love.</p>
            <p className="mb-2">Guide us in all we do.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Patience</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">when I am tired and impatient,</p>
            <p className="mb-2">help me to remember</p>
            <p className="mb-2">that my children are Your gifts to me.</p>
            <p className="mb-2">Give me the strength to love them</p>
            <p className="mb-2">as You love me.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Parents</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily prayer time</strong> - When seeking God's guidance in parenting</li>
          <li>• <strong>During difficult moments</strong> - When children are challenging or disobedient</li>
          <li>• <strong>Before important decisions</strong> - When making choices about children's education or activities</li>
          <li>• <strong>When children are sick</strong> - To ask for healing and strength</li>
          <li>• <strong>During family conflicts</strong> - To seek peace and understanding</li>
          <li>• <strong>On children's birthdays</strong> - To give thanks and ask for blessings</li>
          <li>• <strong>When children are struggling</strong> - To ask for help and guidance</li>
          <li>• <strong>Before family activities</strong> - To ask for God's blessing on family time</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Parents acknowledges the sacred responsibility that God has entrusted to parents. This Catholic prayer recognizes that children are gifts from God and that parents have the privilege and duty to raise them in faith and love. The prayer asks for the virtues that are essential for good parenting: wisdom, patience, and strength.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that parenting is a vocation, a calling from God. Parents are the first teachers of faith to their children, and they have the responsibility to create a home where children can learn to know, love, and serve God. The prayer reminds us that our children belong to God first, and we are merely stewards of these precious gifts.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Parents also helps parents to grow in holiness themselves. By praying for the grace to be good parents, parents are also asking God to help them become better Christians. The prayer teaches us that the love we show our children should reflect the unconditional love that God has for us.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/prayer-married-couples" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-pink-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-pink-600 transition-colors">
                  Prayer for Married Couples
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for married couples and their relationship, asking God to strengthen their love and commitment.
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
            title="Prayer Parents" 
            url="/prayers/prayer-parents"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 