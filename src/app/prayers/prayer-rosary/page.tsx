import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of the Rosary | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of the Rosary, honoring Mary as Queen of the Rosary. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-rosary",
  },
  openGraph: {
    title: "Prayer to Our Lady of the Rosary",
    description: "Learn the prayer to Our Lady of the Rosary, honoring Mary as Queen of the Rosary.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-rosary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of the Rosary",
    description: "Learn the prayer to Our Lady of the Rosary, honoring Mary as Queen of the Rosary.",
  },
};

export default function PrayerRosaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of the Rosary
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">📿 Prayer to Our Lady of the Rosary</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of the Rosary honors Mary as the Queen of the Rosary. 
        This devotion celebrates Mary's role in the mysteries of salvation and her powerful intercession 
        through the prayer of the Rosary. The Rosary is one of the most beloved and effective prayers 
        in the Catholic tradition.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of the Rosary</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Queen of the most holy Rosary,</p>
            <p className="mb-2">O Virgin Mary of Mount Carmel,</p>
            <p className="mb-2">O Mother of God, Queen of Heaven and Earth!</p>
            <p className="mb-2">In your hands I place my eternal salvation,</p>
            <p className="mb-2">and to you I entrust my soul.</p>
            <p className="mb-2">Count me among your most devoted servants;</p>
            <p className="mb-2">take me under your protection,</p>
            <p className="mb-2">help me in my needs,</p>
            <p className="mb-2">and console me in my sorrows.</p>
            <p className="mb-2">O Mother of God,</p>
            <p className="mb-2">I place my confidence in you;</p>
            <p className="mb-2">grant me the grace of loving your Son Jesus,</p>
            <p className="mb-2">and of saying the Rosary devoutly every day.</p>
            <p className="mb-2">O Queen of the Rosary,</p>
            <p className="mb-2">pray for me,</p>
            <p className="mb-2">that the Rosary may be to me</p>
            <p className="mb-2">a bond of union with you in life,</p>
            <p className="mb-2">comfort in death,</p>
            <p className="mb-2">and a pledge of everlasting happiness.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Queen of the Rosary,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to love and honor your Son Jesus</p>
            <p className="mb-2">through the prayer of the Rosary.</p>
            <p className="mb-2">Grant us the grace to pray it devoutly</p>
            <p className="mb-2">and to meditate on its mysteries.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of the Rosary</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On October 7th</strong> - Feast day of Our Lady of the Rosary</li>
          <li>• <strong>When praying the Rosary</strong> - As a devotion before or after the Rosary</li>
          <li>• <strong>For peace</strong> - When praying for world peace and conversion</li>
          <li>• <strong>For family</strong> - When praying for family unity and protection</li>
          <li>• <strong>For conversion</strong> - When praying for the conversion of sinners</li>
          <li>• <strong>For protection</strong> - When seeking Mary's protection and guidance</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Battle of Lepanto</h3>
          <p className="text-gray-700 text-sm">
            The feast of Our Lady of the Rosary was established after the victory at the Battle of Lepanto 
            in 1571, attributed to the intercession of Mary through the Rosary.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Queen of the Rosary</h3>
            <p className="text-gray-700 text-sm">
            Mary is honored as Queen of the Rosary because she is the one who leads us to Jesus 
            through the mysteries of the Rosary.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Powerful Intercession</h3>
          <p className="text-gray-700 text-sm">
            The Rosary is one of the most powerful prayers for obtaining Mary's intercession 
            and growing closer to Jesus.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Devotion</h3>
          <p className="text-gray-700 text-sm">
            The devotion to Our Lady of the Rosary is practiced by millions of Catholics worldwide 
            and has been recommended by many popes.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/fatima-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Fatima Prayer</h3>
              <p className="text-gray-600 text-sm">Prayer taught by Our Lady at Fatima</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Mary</h3>
              <p className="text-gray-600 text-sm">Fundamental prayer to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/marian"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Marian Prayers
        </Link>
      </div>
    </main>
  );
} 