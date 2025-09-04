import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for the Home – Catholic Home Blessing Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for the home, asking God to bless and protect the family home and make it a place of peace, love, and holiness.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/family/prayer-home",
  },
  openGraph: {
    title: "Prayer for the Home – Catholic Home Blessing Prayer",
    description: "A beautiful Catholic prayer for the home, asking God to bless and protect the family home and make it a place of peace, love, and holiness.",
    url: "https://www.catholicbibleonline.com/prayers/family/prayer-home",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for the Home – Catholic Home Blessing Prayer",
    description: "A beautiful Catholic prayer for the home, asking God to bless and protect the family home and make it a place of peace, love, and holiness.",
  },
};

export default function PrayerForTheHomePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/family" className="hover:underline">Family Prayers</Link> &gt; 
        Prayer for the Home
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏡 Prayer for the Home</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for the Home is a beautiful Catholic prayer that asks God to bless and protect the family home and make it a place of peace, love, and holiness. 
        This prayer helps families to consecrate their home to God and to create a sacred space where His presence is felt daily. 
        It is perfect for blessing a new home, daily family prayer, or any moment when we want to ask for God's blessing on our dwelling place.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Home</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for the Home</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God,</p>
            <p className="mb-2">bless our home and all who dwell within it.</p>
            <p className="mb-2">May it be a place of peace, love, and holiness.</p>
            <p className="mb-2">Protect us from all harm</p>
            <p className="mb-2">and keep us safe in Your care.</p>
            <p className="mb-2">May our home be a place where</p>
            <p className="mb-2">Your love is shared and Your name is honored.</p>
            <p className="mb-2">Help us to welcome all who enter</p>
            <p className="mb-2">with the love of Christ.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for the Home</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">bless our home.</p>
            <p className="mb-2">Make it a place of peace and love.</p>
            <p className="mb-2">Protect all who live here.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Home Protection</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">protect our home and all within it.</p>
            <p className="mb-2">Keep us safe from all danger</p>
            <p className="mb-2">and guide us in Your ways.</p>
            <p className="mb-2">May our home be a sanctuary</p>
            <p className="mb-2">of Your love and peace.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for the Home</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When moving to a new home</strong> - To bless and consecrate the new dwelling</li>
          <li>• <strong>Daily family prayer time</strong> - When asking for God's blessing on the home</li>
          <li>• <strong>Before welcoming guests</strong> - To ask for God's blessing on hospitality</li>
          <li>• <strong>When feeling unsafe</strong> - To ask for protection and peace</li>
          <li>• <strong>On special occasions</strong> - To give thanks and ask for continued blessings</li>
          <li>• <strong>During family conflicts</strong> - To ask for peace and harmony in the home</li>
          <li>• <strong>When children are away</strong> - To ask for protection and safe return</li>
          <li>• <strong>Before family activities</strong> - To ask for God's blessing on family time</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for the Home acknowledges that our home is more than just a physical dwelling—it is a sacred space where families grow in love and faith. This Catholic prayer recognizes that the home is the domestic church, where children first learn about God and where families gather to pray and worship together. The prayer asks for God's blessing and protection on this holy space.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that our home should be a reflection of God's love and a place where His presence is felt. By praying for our home, we are consecrating it to God and asking Him to make it a sanctuary of peace, love, and holiness. The prayer reminds us that our home should be a place where God is honored and where His love is shared with all who enter.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for the Home also helps families to grow in gratitude for the gift of shelter and to recognize their responsibility to make their home a place of welcome and hospitality. When we pray for our home, we are asking God to help us create an environment where family members can grow in faith and where guests can experience God's love through our hospitality.
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
          
          <Link href="/prayers/prayer-family" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for the Family
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for family unity and love, asking God to bless and unite families in faith and harmony.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-family-protection" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-red-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Family Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-red-600 transition-colors">
                  Prayer for Family Protection
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for God's protection over the family, asking Him to keep all family members safe and secure.
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
            title="Prayer Home" 
            url="/prayers/prayer-home"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 