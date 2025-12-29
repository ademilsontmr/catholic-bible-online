import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer for Healing – Catholic Healing Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for healing, asking God for physical and spiritual healing, restoration, and renewal of body, mind, and soul.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/healing/prayer-healing",
  },
  openGraph: {
    title: "Prayer for Healing – Catholic Healing Prayer",
    description: "A beautiful Catholic prayer for healing, asking God for physical and spiritual healing, restoration, and renewal of body, mind, and soul.",
    url: "https://www.catholicbibleonline.com/prayers/healing/prayer-healing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Healing – Catholic Healing Prayer",
    description: "A beautiful Catholic prayer for healing, asking God for physical and spiritual healing, restoration, and renewal of body, mind, and soul.",
  },
};

export default function PrayerForHealingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/healing" className="hover:underline">Healing Prayers</Link> &gt; 
        Prayer for Healing
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💚 Prayer for Healing</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Healing is a beautiful Catholic prayer that asks God for physical and spiritual healing, restoration, and renewal of body, mind, and soul. 
        This prayer helps us to trust in God's power to heal and to surrender our wounds and brokenness to His loving care. 
        It is perfect for anyone seeking healing from illness, emotional wounds, spiritual brokenness, or any form of suffering.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Healing</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Healing</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Lord Jesus Christ,</p>
            <p className="mb-2">You are the Divine Physician of our souls and bodies.</p>
            <p className="mb-2">Look with compassion upon me in my need</p>
            <p className="mb-2">and grant me Your healing grace.</p>
            <p className="mb-2">Heal my wounds, both physical and spiritual,</p>
            <p className="mb-2">and restore me to wholeness.</p>
            <p className="mb-2">Give me strength to bear my suffering</p>
            <p className="mb-2">and trust in Your loving care.</p>
            <p className="mb-2">May Your healing touch bring me peace</p>
            <p className="mb-2">and renew my spirit.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Healing</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">heal me and make me whole.</p>
            <p className="mb-2">Restore my body, mind, and spirit.</p>
            <p className="mb-2">Give me Your peace and strength.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Complete Healing</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God of healing and mercy,</p>
            <p className="mb-2">I come before You broken and in need.</p>
            <p className="mb-2">Touch every part of my being</p>
            <p className="mb-2">with Your healing love.</p>
            <p className="mb-2">Restore what is broken,</p>
            <p className="mb-2">heal what is wounded,</p>
            <p className="mb-2">and renew what is tired.</p>
            <p className="mb-2">Make me whole in Your love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Healing</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When you are ill or injured</strong> - To ask for physical healing</li>
          <li>• <strong>When you are emotionally wounded</strong> - To ask for emotional healing</li>
          <li>• <strong>When you are spiritually broken</strong> - To ask for spiritual restoration</li>
          <li>• <strong>When you are in pain</strong> - To ask for relief and comfort</li>
          <li>• <strong>When you feel lost or confused</strong> - To ask for guidance and clarity</li>
          <li>• <strong>When you are recovering</strong> - To give thanks and ask for continued healing</li>
          <li>• <strong>When you need strength</strong> - To ask for God's power and grace</li>
          <li>• <strong>Daily prayer time</strong> - To maintain spiritual health and well-being</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Healing acknowledges that we are all broken in some way and in need of God's healing touch. This Catholic prayer recognizes that healing is not just about physical recovery, but about the restoration of our whole being—body, mind, and spirit. When we pray for healing, we are surrendering our brokenness to God and trusting in His power to make us whole.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that God's healing can take many forms. Sometimes it means physical recovery, sometimes it means the grace to bear our suffering with patience, and sometimes it means finding peace and meaning in our pain. The prayer reminds us that God is always present in our suffering and that He desires to bring us healing and wholeness.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Healing also helps us to grow in trust and surrender. When we pray for healing, we are acknowledging that we cannot heal ourselves and that we need God's grace. The prayer teaches us that true healing comes from our relationship with God and that we can find peace even in the midst of suffering when we trust in His love and care.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-sick" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-red-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-red-600 transition-colors">
                  Prayer for the Sick
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for those who are ill or suffering, asking God for healing, comfort, and strength.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-spiritual-healing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  Prayer for Spiritual Healing
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for spiritual wounds and restoration, asking God to heal our souls and renew our faith.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-emotional-healing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-pink-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-pink-600 transition-colors">
                  Prayer for Emotional Healing
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for healing from emotional wounds and trauma, asking God to restore our hearts.
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
            title="Prayer Healing" 
            url="/prayers/prayer-healing"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 