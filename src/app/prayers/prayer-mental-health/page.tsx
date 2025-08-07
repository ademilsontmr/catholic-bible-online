import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer for Mental Health – Catholic Mental Health Prayer | Catholic Bible Online",
  description: "A beautiful Catholic prayer for mental health and emotional well-being, asking God for peace, clarity, and strength for those struggling with mental health challenges.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/healing/prayer-mental-health",
  },
  openGraph: {
    title: "Prayer for Mental Health – Catholic Mental Health Prayer",
    description: "A beautiful Catholic prayer for mental health and emotional well-being, asking God for peace, clarity, and strength for those struggling with mental health challenges.",
    url: "https://www.catholicbibleonline.com/prayers/healing/prayer-mental-health",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer for Mental Health – Catholic Mental Health Prayer",
    description: "A beautiful Catholic prayer for mental health and emotional well-being, asking God for peace, clarity, and strength for those struggling with mental health challenges.",
  },
};

export default function PrayerForMentalHealthPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/healing" className="hover:underline">Healing Prayers</Link> &gt; 
        Prayer for Mental Health
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🧠 Prayer for Mental Health</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer for Mental Health is a beautiful Catholic prayer that asks God for peace, clarity, and strength for those struggling with mental health challenges. 
        This prayer helps us to entrust our mental and emotional well-being to God's loving care and to find hope and healing in His presence. 
        It is perfect for anyone dealing with anxiety, depression, stress, or other mental health challenges.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Mental Health</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer for Mental Health</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God of peace and comfort,</p>
            <p className="mb-2">You know the depths of my mind and heart.</p>
            <p className="mb-2">Grant me peace in my thoughts</p>
            <p className="mb-2">and calm in my emotions.</p>
            <p className="mb-2">Help me to find clarity</p>
            <p className="mb-2">amidst confusion and doubt.</p>
            <p className="mb-2">Give me strength to face my challenges</p>
            <p className="mb-2">and courage to seek help when needed.</p>
            <p className="mb-2">May Your love surround me</p>
            <p className="mb-2">and bring healing to my mind and spirit.</p>
            <p className="mb-2">We ask this through Christ our Lord.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Mental Health</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Lord Jesus,</p>
            <p className="mb-2">give me peace of mind.</p>
            <p className="mb-2">Calm my thoughts and emotions.</p>
            <p className="mb-2">Help me to trust in Your love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Anxiety and Depression</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">when anxiety and depression overwhelm me,</p>
            <p className="mb-2">help me to remember that You are with me.</p>
            <p className="mb-2">Give me the strength to face each day</p>
            <p className="mb-2">and the hope to believe in better times.</p>
            <p className="mb-2">May Your light shine in my darkness.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray for Mental Health</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When feeling anxious or stressed</strong> - To ask for peace and calm</li>
          <li>• <strong>When struggling with depression</strong> - To ask for hope and light</li>
          <li>• <strong>When feeling overwhelmed</strong> - To ask for strength and clarity</li>
          <li>• <strong>When dealing with negative thoughts</strong> - To ask for positive perspective</li>
          <li>• <strong>When feeling isolated or alone</strong> - To ask for God's presence and comfort</li>
          <li>• <strong>When making important decisions</strong> - To ask for wisdom and clarity</li>
          <li>• <strong>When seeking professional help</strong> - To ask for courage and guidance</li>
          <li>• <strong>Daily prayer time</strong> - To maintain mental and emotional well-being</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer for Mental Health acknowledges that mental health challenges are real and that God cares deeply about our mental and emotional well-being. This Catholic prayer recognizes that our minds and emotions are part of our whole being and that God desires to bring healing and peace to every aspect of our lives. When we pray for mental health, we are acknowledging our need for God's help and trusting in His power to bring us peace and clarity.
        </p>
        
        <p className="text-gray-700 mb-4">
          This prayer teaches us that it's okay to struggle with mental health challenges and that we don't have to face them alone. God is always present with us, even in our darkest moments, and He desires to bring us comfort and healing. The prayer reminds us that seeking help for mental health challenges is not a sign of weakness, but a sign of wisdom and courage.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Prayer for Mental Health also helps us to grow in compassion for others who are struggling with mental health challenges. When we pray for our own mental health, we become more aware of the struggles that others face, and we are better able to offer them support and understanding. The prayer teaches us that we are all called to be instruments of God's healing love, reaching out to those who are suffering with compassion and care.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        </div>
      </section>
    </main>
  );
} 