import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. Teresa of Avila | Catholic Bible Online",
  description: "Learn the prayer to St. Teresa of Avila, the Doctor of Prayer and great mystic of the Church. Discover her powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-teresa-avila",
  },
  openGraph: {
    title: "Prayer to St. Teresa of Avila",
    description: "Learn the prayer to St. Teresa of Avila, the Doctor of Prayer and great mystic of the Church.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-teresa-avila",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Teresa of Avila",
    description: "Learn the prayer to St. Teresa of Avila, the Doctor of Prayer and great mystic of the Church.",
  },
};

export default function PrayerToStTeresaAvilaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Teresa of Avila
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏰 Prayer to St. Teresa of Avila</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Teresa of Avila honors the great mystic, reformer, and Doctor of the Church. 
        St. Teresa was a 16th-century Spanish Carmelite nun who reformed the Carmelite Order and wrote extensively on prayer and spirituality. 
        Known as the "Doctor of Prayer," her writings on the interior life continue to guide souls in their spiritual journey.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Teresa of Avila</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Teresa,</p>
            <p className="mb-2">whom the Almighty has raised up</p>
            <p className="mb-2">to be a guide and light</p>
            <p className="mb-2">to His Church in these days,</p>
            <p className="mb-2">we implore you to look down from heaven</p>
            <p className="mb-2">and see the children of the Church</p>
            <p className="mb-2">whom Jesus has purchased with His blood,</p>
            <p className="mb-2">and to pray for us.</p>
            <p className="mb-2">O beloved spouse of Jesus,</p>
            <p className="mb-2">help us to love Him as you loved Him.</p>
            <p className="mb-2">O mother of the spiritual life,</p>
            <p className="mb-2">teach us to pray as you prayed.</p>
            <p className="mb-2">O reformer of the Carmelite Order,</p>
            <p className="mb-2">help us to reform our lives</p>
            <p className="mb-2">and to be faithful to our vocation.</p>
            <p className="mb-2">O Doctor of the Church,</p>
            <p className="mb-2">enlighten our minds</p>
            <p className="mb-2">with the knowledge of divine things.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Teresa of Avila,</p>
            <p className="mb-2">Doctor of Prayer,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to grow in our prayer life.</p>
            <p className="mb-2">Teach us to love Jesus</p>
            <p className="mb-2">with all our hearts and souls.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Interior Life</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O St. Teresa,</p>
            <p className="mb-2">who knew the depths of prayer</p>
            <p className="mb-2">and the heights of mystical union,</p>
            <p className="mb-2">help us to enter into</p>
            <p className="mb-2">the interior castle of our souls.</p>
            <p className="mb-2">Guide us through the mansions</p>
            <p className="mb-2">until we reach the center</p>
            <p className="mb-2">where Jesus dwells.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Teresa of Avila</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On October 15th</strong> - Feast day of St. Teresa of Avila</li>
          <li>• <strong>For prayer life</strong> - When seeking to grow in prayer</li>
          <li>• <strong>For spiritual growth</strong> - When seeking deeper spirituality</li>
          <li>• <strong>For nuns and religious</strong> - When praying for religious life</li>
          <li>• <strong>For Spain</strong> - When praying for the country of Spain</li>
          <li>• <strong>For writers</strong> - When seeking inspiration in writing</li>
          <li>• <strong>For reformers</strong> - When working for Church renewal</li>
          <li>• <strong>For mystics</strong> - When seeking mystical experiences</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Life</h3>
          <p className="text-gray-700 text-sm">
            St. Teresa was born in 1515 in Avila, Spain. She entered the Carmelite convent at age 20, 
            but struggled with her prayer life for many years before experiencing a profound conversion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reform</h3>
          <p className="text-gray-700 text-sm">
            Teresa founded the Discalced Carmelites, a reformed branch of the Carmelite Order that emphasized 
            poverty, prayer, and strict observance of the original Carmelite rule.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Writings</h3>
          <p className="text-gray-700 text-sm">
            Her major works include "The Interior Castle," "The Way of Perfection," and "The Book of Her Life." 
            These writings provide profound insights into prayer and the spiritual life.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Legacy</h3>
          <p className="text-gray-700 text-sm">
            St. Teresa was the first woman to be named a Doctor of the Church. Her teachings on prayer 
            and spirituality continue to guide Christians in their journey toward union with God.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Famous Quotes</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          <blockquote className="text-gray-700 italic">
            "Let nothing disturb you, let nothing frighten you, all things are passing away: God never changes."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "Prayer is nothing else than being on terms of friendship with God."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "God alone is enough."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "The important thing is not to think much but to love much."
          </blockquote>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-john-cross" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. John of the Cross
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Explore the prayer to the Doctor of Mystical Theology and great Carmelite mystic.
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
                  Discover the prayer to the great mystic and Doctor of the Church.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/morning-offering" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-green-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-green-600 transition-colors">
                  Morning Offering
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Start your day with this beautiful prayer to offer all your works to God.
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