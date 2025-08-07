import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to St. Michael the Archangel",
  description: "Read the powerful Prayer to St. Michael the Archangel and learn its meaning in Catholic tradition. Discover how this prayer protects us from evil.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-michael",
  },
  openGraph: {
    title: "Prayer to St. Michael the Archangel",
    description: "Read the powerful Prayer to St. Michael the Archangel and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-michael",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Michael the Archangel",
    description: "Read the powerful Prayer to St. Michael the Archangel and learn its meaning in Catholic tradition.",
  },
};

export default function PrayerToStMichaelPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Prayer to St. Michael
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⚔️ Prayer to St. Michael the Archangel</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer to St. Michael the Archangel is a powerful Catholic prayer for protection against evil and spiritual warfare. 
        St. Michael, whose name means "Who is like God?", is the great defender of God's people and the leader of the heavenly armies. 
        This prayer reminds us that we are not alone in our spiritual battles and that God provides powerful protection through His angels.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            St. Michael the Archangel, defend us in battle.
          </p>
          <p className="mb-4">
            Be our protection against the wickedness and snares of the devil.
          </p>
          <p className="mb-4">
            May God rebuke him, we humbly pray,
          </p>
          <p className="mb-4">
            and do thou, O Prince of the heavenly hosts,
          </p>
          <p className="mb-4">
            by the power of God, cast into hell Satan,
          </p>
          <p className="mb-4">
            and all the evil spirits,
          </p>
          <p className="mb-4">
            who prowl about the world seeking the ruin of souls.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer to St. Michael is a bold declaration of our faith in God's power and our recognition of the spiritual battle that surrounds us. 
          This Catholic prayer acknowledges that evil exists and that we need divine protection to resist temptation and remain faithful to God. 
          St. Michael's role as the defender of God's people gives us confidence that we are not fighting alone.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer's imagery of spiritual warfare reminds us that our struggle is not against flesh and blood, but against the spiritual forces of evil. 
          When we pray this prayer, we align ourselves with God's army and invoke the protection of one of His mightiest warriors. 
          The reference to Satan being cast into hell recalls the great victory of the angels over the fallen ones.
        </p>
        
        <p className="text-gray-700 mb-6">
          This prayer teaches us to be vigilant and to recognize the reality of evil in our world. 
          It also reminds us of our responsibility to pray for the protection of others, especially those who may be vulnerable to spiritual attack. 
          Through this prayer, we express our trust in God's providence and our commitment to stand firm in faith, knowing that with God's help, we can overcome any spiritual challenge.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  The Lord's Prayer, the perfect model for all Christian prayer taught by Jesus Himself.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Devotions
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  The powerful Catholic devotion combining vocal prayer with meditation on the mysteries of our salvation.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/guardian-angel-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-orange-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-orange-600 transition-colors">
                  Guardian Angel Prayer
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Acknowledge God's loving care through the ministry of angels with this beloved prayer for protection.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 