import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Family Prayer – Catholic Family Prayer | Catholic Bible Online",
  description: "A beautiful Catholic family prayer to unite families in faith, love, and devotion to God. Perfect for daily family prayer time.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/family-prayer",
  },
  openGraph: {
    title: "Family Prayer – Catholic Family Prayer",
    description: "A beautiful Catholic family prayer to unite families in faith, love, and devotion to God.",
    url: "https://www.catholicbibleonline.com/prayers/family/family-prayer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Prayer – Catholic Family Prayer",
    description: "A beautiful Catholic family prayer to unite families in faith, love, and devotion to God.",
  },
};

export default function FamilyPrayerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Family Prayer
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👨‍👩‍👧‍👦 Family Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Family Prayer is a beautiful Catholic prayer that unites families in faith, love, and devotion to God. 
        This prayer helps families grow together in holiness and strengthens the bonds of love between family members. 
        It is perfect for daily family prayer time, meal prayers, or any moment when the family gathers together.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Family Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Family Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God of goodness and mercy,</p>
            <p className="mb-2">we thank You for the gift of our family.</p>
            <p className="mb-2">Bless us and keep us in Your love.</p>
            <p className="mb-2">Help us to grow together in faith,</p>
            <p className="mb-2">hope, and charity.</p>
            <p className="mb-2">Grant us the grace to love one another</p>
            <p className="mb-2">as You have loved us.</p>
            <p className="mb-2">May our home be a place of peace,</p>
            <p className="mb-2">joy, and holiness.</p>
            <p className="mb-2">Protect us from all harm</p>
            <p className="mb-2">and guide us in Your ways.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Family Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless our family.</p>
            <p className="mb-2">Help us to love one another</p>
            <p className="mb-2">and to grow in Your love.</p>
            <p className="mb-2">Keep us safe and guide us</p>
            <p className="mb-2">in all we do.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Family Meals</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Bless us, O Lord,</p>
            <p className="mb-2">and these Thy gifts</p>
            <p className="mb-2">which we are about to receive</p>
            <p className="mb-2">from Thy bounty,</p>
            <p className="mb-2">through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Family Prayer</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily family prayer time</strong> - When the family gathers for prayer</li>
          <li>• <strong>Before meals</strong> - To give thanks for food and family</li>
          <li>• <strong>At bedtime</strong> - To end the day in prayer together</li>
          <li>• <strong>On special occasions</strong> - Birthdays, anniversaries, holidays</li>
          <li>• <strong>During difficult times</strong> - When the family needs strength and unity</li>
          <li>• <strong>Before family activities</strong> - To ask for God's blessing</li>
          <li>• <strong>On Sundays</strong> - To prepare for Mass together</li>
          <li>• <strong>When welcoming guests</strong> - To include them in family prayer</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Family Prayer is a powerful way to unite families in faith and love. This Catholic prayer acknowledges that the family is a gift from God and asks for His blessing and protection. When families pray together, they strengthen their bonds and grow in holiness as a unit.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that the family is the domestic church, where children first learn about God and His love. By praying together, families create a sacred space where God's presence is felt and His grace is received. The prayer reminds us that our home should be a place of peace, joy, and holiness.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Family Prayer also helps families to grow in the theological virtues of faith, hope, and charity. It teaches children to trust in God's providence and to love one another as God loves us. When families make prayer a regular part of their daily routine, they create a strong foundation for a life of faith.
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
        </div>
      

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Family Prayer" 
            url="/prayers/family-prayer"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 