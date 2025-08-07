import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guardian Angel Prayer – Catholic Prayer to Your Guardian Angel",
  description: "Learn how to pray to your Guardian Angel, a beautiful Catholic prayer for protection and guidance. Discover the meaning and importance of this devotion.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/guardian-angel-prayer",
  },
  openGraph: {
    title: "Guardian Angel Prayer – Catholic Prayer to Your Guardian Angel",
    description: "Learn how to pray to your Guardian Angel, a beautiful Catholic prayer for protection and guidance.",
    url: "https://www.catholicbibleonline.com/prayers/guardian-angel-prayer",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guardian Angel Prayer – Catholic Prayer to Your Guardian Angel",
    description: "Learn how to pray to your Guardian Angel, a beautiful Catholic prayer for protection and guidance.",
  },
};

export default function GuardianAngelPrayerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Guardian Angel Prayer
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👼 Guardian Angel Prayer – Catholic Prayer to Your Guardian Angel</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Guardian Angel Prayer is a beautiful Catholic devotion that recognizes and honors the angel that God has assigned to protect and guide each one of us. 
        This prayer helps us develop a relationship with our Guardian Angel and ask for their intercession and protection in our daily lives.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4 font-semibold">Angel of God, my guardian dear,</p>
          <p className="mb-4">To whom God's love commits me here,</p>
          <p className="mb-4">Ever this day, be at my side,</p>
          <p className="mb-4">To light and guard, to rule and guide.</p>
          <p className="mb-4 font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Guardian Angel Prayer is a simple yet profound prayer that acknowledges the presence and role of our Guardian Angel in our lives. 
          This Catholic prayer teaches us that we are never alone, that God has assigned each of us a heavenly protector who watches over us 
          and intercedes for us before the throne of God.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer begins by addressing our Guardian Angel as "my guardian dear," expressing the personal relationship we can have with this heavenly being. 
          We acknowledge that our angel is assigned to us by God's love, showing that this protection is a gift of divine mercy. 
          The prayer then asks for the angel's presence throughout the day and for their guidance in all aspects of our lives.
        </p>
        
        <p className="text-gray-700 mb-6">
          This devotion reminds us that we are called to cooperate with our Guardian Angel, to listen to their guidance, and to be open to their protection. 
          The Guardian Angel Prayer helps us develop a sense of spiritual awareness and reminds us that we are part of a larger spiritual reality 
          that includes both the visible and invisible worlds.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-michael" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Angel Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to St. Michael
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A powerful prayer to the Archangel Michael for protection against evil and spiritual warfare.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The prayer that Jesus taught us, the perfect model for all Christian prayer.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The beloved prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 