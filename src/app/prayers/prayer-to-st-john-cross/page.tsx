import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. John of the Cross | Catholic Bible Online",
  description: "Learn the prayer to St. John of the Cross, the Doctor of Mystical Theology and great Carmelite mystic. Discover his powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-john-cross",
  },
  openGraph: {
    title: "Prayer to St. John of the Cross",
    description: "Learn the prayer to St. John of the Cross, the Doctor of Mystical Theology and great Carmelite mystic.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-john-cross",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. John of the Cross",
    description: "Learn the prayer to St. John of the Cross, the Doctor of Mystical Theology and great Carmelite mystic.",
  },
};

export default function PrayerToStJohnCrossPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. John of the Cross
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌙 Prayer to St. John of the Cross</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. John of the Cross honors the great mystic, poet, and Doctor of the Church. 
        St. John was a 16th-century Spanish Carmelite friar who, along with St. Teresa of Avila, reformed the Carmelite Order. 
        Known as the "Doctor of Mystical Theology," his writings on the dark night of the soul and spiritual ascent continue to guide souls in their mystical journey.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. John of the Cross</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. John of the Cross,</p>
            <p className="mb-2">mystical doctor and poet of divine love,</p>
            <p className="mb-2">who, through the dark night of the soul,</p>
            <p className="mb-2">ascended to the heights of mystical union with God,</p>
            <p className="mb-2">obtain for us from the Lord</p>
            <p className="mb-2">the grace to embrace the cross</p>
            <p className="mb-2">and to persevere through the trials of life.</p>
            <p className="mb-2">Help us to understand that</p>
            <p className="mb-2">through suffering and purification</p>
            <p className="mb-2">we come to know God more deeply.</p>
            <p className="mb-2">Teach us to love God above all things</p>
            <p className="mb-2">and to seek union with Him</p>
            <p className="mb-2">through prayer and contemplation.</p>
            <p className="mb-2">Guide us through the dark nights</p>
            <p className="mb-2">to the dawn of divine light.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. John of the Cross,</p>
            <p className="mb-2">Doctor of Mystical Theology,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to embrace the cross in our lives.</p>
            <p className="mb-2">Guide us through the dark night</p>
            <p className="mb-2">to union with God.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for the Dark Night</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O St. John of the Cross,</p>
            <p className="mb-2">who experienced the dark night of the soul,</p>
            <p className="mb-2">help us to understand that</p>
            <p className="mb-2">this darkness is a path to light.</p>
            <p className="mb-2">Teach us to trust in God</p>
            <p className="mb-2">even when we cannot feel His presence.</p>
            <p className="mb-2">Help us to persevere in faith</p>
            <p className="mb-2">knowing that purification leads to union.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. John of the Cross</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On December 14th</strong> - Feast day of St. John of the Cross</li>
          <li>• <strong>For spiritual trials</strong> - When experiencing the dark night of the soul</li>
          <li>• <strong>For mystics</strong> - When seeking mystical experiences</li>
          <li>• <strong>For poets and writers</strong> - When seeking inspiration</li>
          <li>• <strong>For Carmelites</strong> - When praying for the Carmelite Order</li>
          <li>• <strong>For Spain</strong> - When praying for the country of Spain</li>
          <li>• <strong>For purification</strong> - When seeking spiritual purification</li>
          <li>• <strong>For contemplation</strong> - When seeking contemplative prayer</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Life</h3>
          <p className="text-gray-700 text-sm">
            St. John was born in 1542 in Fontiveros, Spain. He joined the Carmelite Order and was ordained a priest. 
            He met St. Teresa of Avila and helped her reform the Carmelite Order.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Imprisonment</h3>
          <p className="text-gray-700 text-sm">
            St. John was imprisoned by his own Carmelite brothers who opposed the reform. During his imprisonment, 
            he wrote some of his most beautiful poetry and spiritual works.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Writings</h3>
          <p className="text-gray-700 text-sm">
            His major works include "The Dark Night of the Soul," "The Ascent of Mount Carmel," "The Spiritual Canticle," 
            and "The Living Flame of Love." These works describe the soul's journey to union with God.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Legacy</h3>
          <p className="text-gray-700 text-sm">
            St. John was declared a Doctor of the Church for his profound insights into mystical theology. 
            His teachings on the dark night and spiritual ascent continue to guide contemplatives today.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Famous Quotes</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          <blockquote className="text-gray-700 italic">
            "In the evening of life, we will be judged on love alone."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "Where there is no love, put love and you will find love."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "The soul that is attached to anything, however much good there may be in it, will not arrive at the liberty of divine union."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "The dark night of the soul is a journey to God, not away from Him."
          </blockquote>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-teresa-avila" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Teresa of Avila
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Learn the prayer to the Doctor of Prayer and great mystic of the Church.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-catherine-siena" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Catherine of Siena
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Discover the prayer to the great mystic and reformer of the Church.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/evening-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Evening Prayer
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  End your day with this peaceful prayer of thanksgiving and reflection.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/saints"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Saints Prayers
        </Link>
      </div>
    </main>
  );
} 