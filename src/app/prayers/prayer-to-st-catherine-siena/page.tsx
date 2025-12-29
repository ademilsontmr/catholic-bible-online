import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. Catherine of Siena | Catholic Bible Online",
  description: "Learn the prayer to St. Catherine of Siena, the Doctor of the Church and great mystic. Discover her powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-catherine-siena",
  },
  openGraph: {
    title: "Prayer to St. Catherine of Siena",
    description: "Learn the prayer to St. Catherine of Siena, the Doctor of the Church and great mystic.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-catherine-siena",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Catherine of Siena",
    description: "Learn the prayer to St. Catherine of Siena, the Doctor of the Church and great mystic.",
  },
};

export default function PrayerToStCatherineSienaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Catherine of Siena
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕊️ Prayer to St. Catherine of Siena</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Catherine of Siena honors the great mystic, reformer, and Doctor of the Church. 
        St. Catherine was a 14th-century Italian Dominican tertiary who played a crucial role in Church reform and diplomacy. 
        Known for her mystical experiences, political influence, and spiritual writings, she is one of the most important female saints in Church history.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Catherine of Siena</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Catherine of Siena,</p>
            <p className="mb-2">virgin and doctor of the Church,</p>
            <p className="mb-2">who, by the power of your prayer</p>
            <p className="mb-2">and the depth of your mystical union with God,</p>
            <p className="mb-2">obtained the grace to reform the Church</p>
            <p className="mb-2">and to bring the Pope back to Rome,</p>
            <p className="mb-2">obtain for us from the Lord</p>
            <p className="mb-2">the grace to love God with all our hearts</p>
            <p className="mb-2">and to serve Him with all our strength.</p>
            <p className="mb-2">Help us to be faithful to our baptismal promises</p>
            <p className="mb-2">and to live as true children of God.</p>
            <p className="mb-2">Teach us to pray with love and perseverance</p>
            <p className="mb-2">and to seek union with God</p>
            <p className="mb-2">through contemplation and good works.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Catherine of Siena,</p>
            <p className="mb-2">Doctor of the Church,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to love God with all our hearts.</p>
            <p className="mb-2">Teach us to serve others</p>
            <p className="mb-2">with love and humility.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Church Unity</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O St. Catherine,</p>
            <p className="mb-2">who worked tirelessly for Church unity,</p>
            <p className="mb-2">pray for us that we may be instruments</p>
            <p className="mb-2">of peace and reconciliation.</p>
            <p className="mb-2">Help us to love the Church</p>
            <p className="mb-2">as you loved her,</p>
            <p className="mb-2">and to work for her renewal</p>
            <p className="mb-2">with courage and faith.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Catherine of Siena</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On April 29th</strong> - Feast day of St. Catherine of Siena</li>
          <li>• <strong>For Church unity</strong> - When praying for Church renewal</li>
          <li>• <strong>For Italy</strong> - When praying for the country of Italy</li>
          <li>• <strong>For mystics</strong> - When seeking mystical experiences</li>
          <li>• <strong>For diplomats</strong> - When seeking wisdom in negotiations</li>
          <li>• <strong>For nurses</strong> - When praying for healthcare workers</li>
            <li>• <strong>For fire prevention</strong> - When praying for protection from fire</li>
          <li>• <strong>For Europe</strong> - When praying for the continent of Europe</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Early Life</h3>
          <p className="text-gray-700 text-sm">
            St. Catherine was born in 1347 in Siena, Italy. At age 16, she joined the Dominican Third Order 
            and lived a life of prayer and penance while remaining in her family home.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mystical Experiences</h3>
          <p className="text-gray-700 text-sm">
            Catherine experienced mystical visions and received the stigmata. She had a profound mystical marriage 
            with Christ and was known for her deep prayer life and spiritual wisdom.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Church Reform</h3>
          <p className="text-gray-700 text-sm">
            Catherine played a crucial role in bringing the Pope back from Avignon to Rome. She corresponded with 
            popes, kings, and other leaders, advocating for Church reform and peace.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Legacy</h3>
          <p className="text-gray-700 text-sm">
            St. Catherine was declared a Doctor of the Church for her profound spiritual writings, including 
            "The Dialogue" and numerous letters. She is one of the patron saints of Italy and Europe.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Famous Quotes</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="space-y-4">
          <blockquote className="text-gray-700 italic">
            "Be who God meant you to be and you will set the world on fire."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "Nothing great is ever achieved without much enduring."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "Start being brave about everything. Drive out darkness and spread light."
          </blockquote>
          <blockquote className="text-gray-700 italic">
            "If you are what you should be, you will set the whole world ablaze!"
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
                  Explore the prayer to the Doctor of Prayer and great mystic of the Church.
                </p>
              </div>
            </div>
          </Link>
          
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
                  Discover the prayer to the Doctor of Mystical Theology and Carmelite mystic.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-dominic" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Dominic
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Learn the prayer to the founder of the Dominican Order and preacher of truth.
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