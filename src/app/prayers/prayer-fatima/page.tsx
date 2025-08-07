import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Fatima | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Fatima, honoring the miraculous apparitions to the three shepherd children. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-fatima",
  },
  openGraph: {
    title: "Prayer to Our Lady of Fatima",
    description: "Learn the prayer to Our Lady of Fatima, honoring the miraculous apparitions to the three shepherd children.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-fatima",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Fatima",
    description: "Learn the prayer to Our Lady of Fatima, honoring the miraculous apparitions to the three shepherd children.",
  },
};

export default function PrayerFatimaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Fatima
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌹 Prayer to Our Lady of Fatima</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Fatima honors the miraculous apparitions of Mary to three shepherd children 
        in 1917. At Fatima, Mary called for prayer, penance, and devotion to her Immaculate Heart. 
        Her message of peace and conversion continues to inspire millions of Catholics worldwide.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Fatima</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Most Holy Virgin Mary,</p>
            <p className="mb-2">Queen of the most holy Rosary,</p>
            <p className="mb-2">you were pleased to appear to the children of Fatima</p>
            <p className="mb-2">and reveal a glorious message.</p>
            <p className="mb-2">We implore you, inspire in our hearts</p>
            <p className="mb-2">a fervent love for the recitation of the Rosary.</p>
            <p className="mb-2">By meditating on the mysteries of the redemption</p>
            <p className="mb-2">that are recalled therein,</p>
            <p className="mb-2">may we obtain the graces and virtues</p>
            <p className="mb-2">that we ask,</p>
            <p className="mb-2">through the merits of Jesus Christ,</p>
            <p className="mb-2">our Lord and Redeemer.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Fatima Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O my Jesus, forgive us our sins,</p>
            <p className="mb-2">save us from the fires of hell,</p>
            <p className="mb-2">lead all souls to heaven,</p>
            <p className="mb-2">especially those who are in most need of thy mercy.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Fatima</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On May 13th and October 13th</strong> - Feast days of Our Lady of Fatima</li>
          <li>• <strong>When praying the Rosary</strong> - Add the Fatima prayer after each decade</li>
          <li>• <strong>For peace</strong> - When praying for world peace and conversion</li>
          <li>• <strong>For penance</strong> - When seeking to grow in prayer and sacrifice</li>
          <li>• <strong>For conversion</strong> - When praying for the conversion of sinners</li>
          <li>• <strong>For the Immaculate Heart</strong> - When seeking Mary's intercession</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miraculous Apparitions</h3>
          <p className="text-gray-700 text-sm">
            Our Lady appeared to three shepherd children (Lucia, Francisco, and Jacinta) six times 
            between May and October 1917.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Message of Peace</h3>
          <p className="text-gray-700 text-sm">
            Mary's message at Fatima emphasized prayer, penance, and devotion to her Immaculate Heart 
            for world peace.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Three Secrets</h3>
          <p className="text-gray-700 text-sm">
            Mary revealed three secrets to the children, including a vision of hell and a call 
            for prayer and penance.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Appeal</h3>
          <p className="text-gray-700 text-sm">
            Fatima has become one of the most important Marian shrines, attracting millions 
            of pilgrims annually.
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