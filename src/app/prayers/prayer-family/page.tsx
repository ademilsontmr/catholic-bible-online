import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for the Family – Catholic Family Unity Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for the family, asking God to bless and unite families in love, faith, and harmony.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/prayer-family",
  },
  openGraph: {
    title: "Prayer for the Family – Catholic Family Unity Prayer",
    description: "A beautiful Catholic prayer for the family, asking God to bless and unite families in love, faith, and harmony.",
    url: "https://www.catholicbibleonline.com/prayers/family/prayer-family",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for the Family – Catholic Family Unity Prayer",
    description: "A beautiful Catholic prayer for the family, asking God to bless and unite families in love, faith, and harmony.",
  },
};

export default function PrayerForTheFamilyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Prayer for the Family
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏠 Prayer for the Family</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for the Family is a beautiful Catholic prayer that asks God to bless and unite families in love, faith, and harmony. 
        This prayer helps families to grow together in holiness and to become a domestic church where God's love is experienced daily. 
        It is perfect for daily family prayer time, special occasions, or any moment when families want to ask for God's blessing.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Family</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for the Family</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God,</p>
            <p className="mb-2">You have created us to live in families.</p>
            <p className="mb-2">Bless our family with Your love and grace.</p>
            <p className="mb-2">Help us to grow together in faith,</p>
            <p className="mb-2">hope, and charity.</p>
            <p className="mb-2">May our home be a place of peace,</p>
            <p className="mb-2">joy, and holiness.</p>
            <p className="mb-2">Help us to love one another</p>
            <p className="mb-2">as You have loved us.</p>
            <p className="mb-2">May we be a witness of Your love</p>
            <p className="mb-2">to all who enter our home.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for the Family</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless our family.</p>
            <p className="mb-2">Help us to love one another</p>
            <p className="mb-2">and to grow in Your love.</p>
            <p className="mb-2">Make our home a place of peace.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Family Harmony</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">help us to live in harmony with one another.</p>
            <p className="mb-2">Give us the grace to forgive</p>
            <p className="mb-2">and to be patient with each other.</p>
            <p className="mb-2">May our family be united in love</p>
            <p className="mb-2">and centered on You.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for the Family</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily family prayer time</strong> - When the family gathers for prayer</li>
          <li>• <strong>Before meals</strong> - To give thanks and ask for blessings</li>
          <li>• <strong>At bedtime</strong> - To end the day in prayer together</li>
          <li>• <strong>On special occasions</strong> - Birthdays, anniversaries, holidays</li>
          <li>• <strong>During family conflicts</strong> - To seek peace and reconciliation</li>
          <li>• <strong>When welcoming guests</strong> - To include them in family prayer</li>
          <li>• <strong>On Sundays</strong> - To prepare for Mass together</li>
          <li>• <strong>Before family activities</strong> - To ask for God's blessing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for the Family acknowledges that the family is the domestic church, where children first learn about God and His love. This Catholic prayer recognizes that families are called to be witnesses of God's love in the world and asks for His grace to help them fulfill this mission. When families pray together, they strengthen their bonds and grow in holiness as a unit.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that the family is not just a social institution, but a divine gift that reflects the love of the Holy Trinity. By praying together, families create a sacred space where God's presence is felt and His grace is received. The prayer reminds us that our home should be a place where God is honored and where His love is shared with all who enter.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for the Family also helps families to grow in the theological virtues of faith, hope, and charity. It teaches family members to trust in God's providence and to love one another as God loves us. When families make prayer a regular part of their daily routine, they create a strong foundation for a life of faith and become a beacon of God's love in the world.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/prayer-family-unity" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Prayer for Family Unity
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for harmony and unity in the family, asking God to help families grow together in love.
                </p>
              </div>
            </div>
          </Link>
          
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
        </div>
      

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Prayer Family" 
            url="/prayers/prayer-family"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 