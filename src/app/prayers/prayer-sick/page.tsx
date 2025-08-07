import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for the Sick – Catholic Prayer for Illness | Catholic Bible Online",
  description: "A beautiful Catholic prayer for the sick, asking God for healing, comfort, and strength for those who are ill or suffering.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/healing/prayer-sick",
  },
  openGraph: {
    title: "Prayer for the Sick – Catholic Prayer for Illness",
    description: "A beautiful Catholic prayer for the sick, asking God for healing, comfort, and strength for those who are ill or suffering.",
    url: "https://www.catholicbibleonline.com/prayers/healing/prayer-sick",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for the Sick – Catholic Prayer for Illness",
    description: "A beautiful Catholic prayer for the sick, asking God for healing, comfort, and strength for those who are ill or suffering.",
  },
};

export default function PrayerForTheSickPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/healing" className="hover:underline">Healing Prayers</Link> &gt; 
        Prayer for the Sick
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏥 Prayer for the Sick</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for the Sick is a beautiful Catholic prayer that asks God for healing, comfort, and strength for those who are ill or suffering. 
        This prayer helps us to entrust the sick to God's loving care and to ask for His healing touch. 
        It is perfect for praying for loved ones who are ill, for those in hospitals, or for anyone who needs God's healing grace.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for the Sick</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for the Sick</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O merciful God,</p>
            <p className="mb-2">look with compassion on Your servant who is sick.</p>
            <p className="mb-2">Grant them healing and strength</p>
            <p className="mb-2">in body, mind, and spirit.</p>
            <p className="mb-2">Ease their pain and suffering</p>
            <p className="mb-2">and restore them to health.</p>
            <p className="mb-2">Give them patience in their illness</p>
            <p className="mb-2">and trust in Your loving care.</p>
            <p className="mb-2">May they feel Your presence</p>
            <p className="mb-2">and find comfort in Your love.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for the Sick</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">heal Your servant who is sick.</p>
            <p className="mb-2">Give them strength and comfort.</p>
            <p className="mb-2">Restore them to health.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for a Sick Loved One</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">I lift up [name] to You in prayer.</p>
            <p className="mb-2">You know their suffering and pain.</p>
            <p className="mb-2">Please heal them and restore their health.</p>
            <p className="mb-2">Give them Your peace and comfort.</p>
            <p className="mb-2">Help them to trust in Your love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for the Sick</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When someone is ill</strong> - To ask for God's healing touch</li>
          <li>• <strong>Before medical procedures</strong> - To ask for God's guidance and protection</li>
          <li>• <strong>During hospital visits</strong> - To pray with and for the sick</li>
          <li>• <strong>When someone is in pain</strong> - To ask for relief and comfort</li>
          <li>• <strong>For chronic illness</strong> - To ask for strength and patience</li>
          <li>• <strong>When someone is recovering</strong> - To give thanks and ask for continued healing</li>
          <li>• <strong>For terminal illness</strong> - To ask for peace and comfort</li>
          <li>• <strong>During family prayer time</strong> - To include the sick in family prayers</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for the Sick acknowledges that illness and suffering are part of the human condition, but that God is present in our suffering and desires to bring us healing and comfort. This Catholic prayer recognizes that God's healing can take many forms—physical healing, emotional comfort, spiritual strength, or the grace to bear our suffering with patience and trust.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us to trust in God's providence and to believe in His power to heal. When we pray for the sick, we are not just asking for physical healing, but also for the grace to accept God's will and to find meaning in our suffering. The prayer reminds us that God is close to those who are suffering and that He hears our cries for help.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for the Sick also helps us to grow in compassion and empathy for those who are suffering. When we pray for others, we are reminded of our own vulnerability and our need for God's mercy. The prayer teaches us that we are all called to be instruments of God's healing love, visiting the sick and offering them comfort and support.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-healing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Prayer for Healing
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A general prayer for physical and spiritual healing, asking God for His healing touch.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-physical-healing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-blue-600 transition-colors">
                  Prayer for Physical Healing
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for physical ailments and bodily healing, asking God to restore health and strength.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-inner-peace" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-purple-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Healing Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-purple-600 transition-colors">
                  Prayer for Inner Peace
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  A prayer for peace of mind and heart, asking God to calm our fears and bring us tranquility.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 