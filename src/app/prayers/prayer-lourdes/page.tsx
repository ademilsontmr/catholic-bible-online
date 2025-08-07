import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Lourdes | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Lourdes, honoring the miraculous apparitions to St. Bernadette. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-lourdes",
  },
  openGraph: {
    title: "Prayer to Our Lady of Lourdes",
    description: "Learn the prayer to Our Lady of Lourdes, honoring the miraculous apparitions to St. Bernadette.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-lourdes",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Lourdes",
    description: "Learn the prayer to Our Lady of Lourdes, honoring the miraculous apparitions to St. Bernadette.",
  },
};

export default function PrayerLourdesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Lourdes
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💧 Prayer to Our Lady of Lourdes</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Lourdes honors the miraculous apparitions of Mary to St. Bernadette Soubirous 
        in 1858. At Lourdes, Mary identified herself as the Immaculate Conception and called for prayer and penance. 
        The healing waters of Lourdes continue to be a source of grace and miracles for millions of pilgrims.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Lourdes</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Immaculate Virgin Mary,</p>
            <p className="mb-2">Mother of God and our Mother,</p>
            <p className="mb-2">in this place where you appeared,</p>
            <p className="mb-2">we come in pilgrimage.</p>
            <p className="mb-2">You chose Bernadette in her lowliness,</p>
            <p className="mb-2">you chose her in her poverty.</p>
            <p className="mb-2">You gave her the privilege of beholding you</p>
            <p className="mb-2">and of speaking with you.</p>
            <p className="mb-2">You, who are the Immaculate Conception,</p>
            <p className="mb-2">grant that we may follow your example,</p>
            <p className="mb-2">and that we may be pure and holy.</p>
            <p className="mb-2">O Mary, conceived without sin,</p>
            <p className="mb-2">pray for us who have recourse to you.</p>
            <p className="mb-2">Grant that we may be healed in body and soul,</p>
            <p className="mb-2">and that we may grow in faith, hope, and love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Mary, conceived without sin,</p>
            <p className="mb-2">pray for us who have recourse to you.</p>
            <p className="mb-2">Grant us healing and grace,</p>
            <p className="mb-2">and help us to grow in holiness.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Lourdes</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On February 11th</strong> - Feast day of Our Lady of Lourdes</li>
          <li>• <strong>For healing</strong> - Physical, emotional, or spiritual healing</li>
          <li>• <strong>For purity</strong> - When seeking to grow in holiness and purity</li>
          <li>• <strong>For conversion</strong> - When praying for conversion of hearts</li>
          <li>• <strong>During illness</strong> - When seeking Mary's intercession for healing</li>
          <li>• <strong>For penance</strong> - When seeking to grow in prayer and penance</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miraculous Apparitions</h3>
          <p className="text-gray-700 text-sm">
            Our Lady appeared to St. Bernadette Soubirous 18 times between February and July 1858, 
            calling for prayer and penance.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Immaculate Conception</h3>
          <p className="text-gray-700 text-sm">
            Mary identified herself as the Immaculate Conception, confirming the dogma proclaimed 
            by Pope Pius IX in 1854.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Healing Waters</h3>
          <p className="text-gray-700 text-sm">
            The miraculous spring at Lourdes continues to be a source of healing and grace 
            for millions of pilgrims.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Appeal</h3>
          <p className="text-gray-700 text-sm">
            Lourdes has become one of the most important Marian shrines in the world, 
            attracting millions of pilgrims annually.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Mary</h3>
              <p className="text-gray-600 text-sm">Fundamental prayer to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-perpetual-help" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🖼️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to Our Lady of Perpetual Help</h3>
              <p className="text-gray-600 text-sm">Prayer to the miraculous icon of Mary</p>
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