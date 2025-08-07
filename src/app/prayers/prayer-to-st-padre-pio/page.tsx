import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to St. Padre Pio | Catholic Bible Online",
  description: "Learn the prayer to St. Padre Pio, the stigmatist saint and modern miracle worker. Discover his powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-padre-pio",
  },
  openGraph: {
    title: "Prayer to St. Padre Pio",
    description: "Learn the prayer to St. Padre Pio, the stigmatist saint and modern miracle worker.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-padre-pio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Padre Pio",
    description: "Learn the prayer to St. Padre Pio, the stigmatist saint and modern miracle worker.",
  },
};

export default function PrayerToStPadrePioPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Padre Pio
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✝️ Prayer to St. Padre Pio</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Padre Pio honors the beloved Capuchin friar who bore the stigmata and performed countless miracles. 
        St. Padre Pio of Pietrelcina was a modern saint known for his powerful intercession, gift of healing, 
        and ability to read souls. This prayer seeks his help for healing, conversion, and spiritual guidance.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Padre Pio</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O God,</p>
            <p className="mb-2">You gave St. Pio of Pietrelcina,</p>
            <p className="mb-2">Capuchin priest,</p>
            <p className="mb-2">the great privilege of participating in a unique way</p>
            <p className="mb-2">in the Passion of Your Son.</p>
            <p className="mb-2">May I, through his intercession,</p>
            <p className="mb-2">accept the sufferings of this life</p>
            <p className="mb-2">and be united to the sufferings of Christ</p>
            <p className="mb-2">for the salvation of my soul.</p>
            <p className="mb-2">Grant me the grace to follow</p>
            <p className="mb-2">the example of St. Pio in prayer and charity</p>
            <p className="mb-2">so that I may come to the joy of eternal life</p>
            <p className="mb-2">with You in heaven.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Padre Pio,</p>
            <p className="mb-2">pray for me and help me</p>
            <p className="mb-2">to accept my sufferings</p>
            <p className="mb-2">and unite them to Christ's Passion.</p>
            <p className="mb-2">Intercede for me in my needs.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Healing</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Dear St. Padre Pio,</p>
            <p className="mb-2">you were blessed with the gift of healing.</p>
            <p className="mb-2">Please intercede for me</p>
            <p className="mb-2">and ask God to heal my body, mind, and soul.</p>
            <p className="mb-2">Help me to trust in God's will</p>
            <p className="mb-2">and to accept whatever He allows.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Padre Pio</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On September 23rd</strong> - Feast day of St. Padre Pio</li>
          <li>• <strong>On Fridays</strong> - Traditional day to honor St. Padre Pio</li>
          <li>• <strong>For healing</strong> - When praying for physical or spiritual healing</li>
          <li>• <strong>For conversion</strong> - When praying for the conversion of sinners</li>
          <li>• <strong>For confession</strong> - When preparing for or after confession</li>
          <li>• <strong>For suffering</strong> - When offering up pain and difficulties</li>
          <li>• <strong>For priests</strong> - When praying for priests and vocations</li>
          <li>• <strong>For miracles</strong> - When seeking miraculous intercession</li>
          <li>• <strong>For spiritual guidance</strong> - When seeking direction in life</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Padre Pio</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stigmata</h3>
          <p className="text-gray-700 text-sm">
            St. Padre Pio received the stigmata - the wounds of Christ - and bore them for 50 years, 
            making him one of the most famous stigmatists in history.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miracles</h3>
          <p className="text-gray-700 text-sm">
            St. Padre Pio performed countless miracles during his lifetime, including healings, 
            bilocation, and reading of souls.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Confessor</h3>
          <p className="text-gray-700 text-sm">
            St. Padre Pio spent hours each day hearing confessions and was known for his ability 
            to read souls and give spiritual guidance.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Prayer Warrior</h3>
          <p className="text-gray-700 text-sm">
            St. Padre Pio was a man of intense prayer, spending many hours each day in prayer 
            and encouraging others to pray constantly.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Padre Pio's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of Healing</strong> - Helper for physical and spiritual healing</li>
          <li>• <strong>Patron of Confession</strong> - Helper for the sacrament of reconciliation</li>
          <li>• <strong>Patron of Suffering</strong> - Helper for those who suffer</li>
          <li>• <strong>Patron of Priests</strong> - Protector of priests and religious</li>
          <li>• <strong>Patron of Capuchins</strong> - Protector of the Capuchin Order</li>
          <li>• <strong>Stigmatist</strong> - One who bore the wounds of Christ</li>
          <li>• <strong>Miracle Worker</strong> - Performer of countless miracles</li>
          <li>• <strong>Modern Saint</strong> - One of the most recent saints canonized</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-jude" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕯️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Jude</h3>
              <p className="text-gray-600 text-sm">Prayer to the patron of hopeless cases</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-anthony" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Anthony</h3>
              <p className="text-gray-600 text-sm">Prayer to the finder of lost things</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-therese" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Therese</h3>
              <p className="text-gray-600 text-sm">Prayer to the Little Flower of Jesus</p>
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