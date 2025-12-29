import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. Francis | Catholic Bible Online",
  description: "Learn the prayer to St. Francis of Assisi, the patron of animals and ecology. Discover his love for creation and peace in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-francis",
  },
  openGraph: {
    title: "Prayer to St. Francis",
    description: "Learn the prayer to St. Francis of Assisi, the patron of animals and ecology.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-francis",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Francis",
    description: "Learn the prayer to St. Francis of Assisi, the patron of animals and ecology.",
  },
};

export default function PrayerToStFrancisPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Francis
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🐦 Prayer to St. Francis</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Francis honors the beloved saint known for his love of poverty, peace, and all of God's creation. 
        St. Francis of Assisi was a medieval Italian friar who founded the Franciscan Order and is remembered for his 
        deep love for animals, nature, and the poor. This prayer seeks his intercession for peace and care for creation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Francis</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Francis,</p>
            <p className="mb-2">who during your whole life here on earth</p>
            <p className="mb-2">was inflamed with the love of God and of your neighbor,</p>
            <p className="mb-2">I humbly pray you to obtain for me</p>
            <p className="mb-2">the same graces and virtues.</p>
            <p className="mb-2">Help me to love God with all my heart</p>
            <p className="mb-2">and to love my neighbor as myself.</p>
            <p className="mb-2">Obtain for me, I beseech you,</p>
            <p className="mb-2">the grace to be patient in suffering,</p>
            <p className="mb-2">humble in prosperity,</p>
            <p className="mb-2">and to have a perfect resignation to the will of God.</p>
            <p className="mb-2">Pray for me, St. Francis,</p>
            <p className="mb-2">that I may be worthy of the promises of Christ.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Francis,</p>
            <p className="mb-2">help me to love God and all His creation</p>
            <p className="mb-2">as you did.</p>
            <p className="mb-2">Teach me to be poor in spirit</p>
            <p className="mb-2">and to bring peace wherever I go.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Animals</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O God,</p>
            <p className="mb-2">who made all living creatures,</p>
            <p className="mb-2">you called St. Francis to serve you</p>
            <p className="mb-2">with a love that embraced all creation.</p>
            <p className="mb-2">Grant that, following his example,</p>
            <p className="mb-2">we may treat all animals with kindness</p>
            <p className="mb-2">and respect for your glory.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Francis</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On October 4th</strong> - Feast day of St. Francis</li>
          <li>• <strong>On Wednesdays</strong> - Traditional day to honor St. Francis</li>
          <li>• <strong>For animals</strong> - When praying for pets or animal welfare</li>
          <li>• <strong>For peace</strong> - When seeking peace in relationships or world</li>
          <li>• <strong>For the environment</strong> - When praying for care of creation</li>
          <li>• <strong>For the poor</strong> - When praying for the poor and needy</li>
          <li>• <strong>For simplicity</strong> - When seeking a simpler way of life</li>
          <li>• <strong>For healing</strong> - When praying for physical or spiritual healing</li>
          <li>• <strong>For ecology</strong> - When praying for environmental protection</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Francis</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Founder of Franciscans</h3>
          <p className="text-gray-700 text-sm">
            St. Francis founded the Franciscan Order, which continues to serve the poor and preach 
            the Gospel throughout the world today.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Patron of Animals</h3>
          <p className="text-gray-700 text-sm">
            St. Francis is known for his love of animals and is often depicted preaching to birds 
            and taming the wolf of Gubbio.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Stigmata</h3>
          <p className="text-gray-700 text-sm">
            St. Francis received the stigmata - the wounds of Christ - making him the first recorded 
            person to receive this mystical gift.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Peace Prayer</h3>
          <p className="text-gray-700 text-sm">
            St. Francis is credited with the famous "Prayer of St. Francis" which begins 
            "Lord, make me an instrument of your peace."
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Francis's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of Animals</strong> - Protector of all animals and pets</li>
          <li>• <strong>Patron of Ecology</strong> - Protector of the environment</li>
          <li>• <strong>Patron of Italy</strong> - One of the patron saints of Italy</li>
          <li>• <strong>Patron of Merchants</strong> - Helper of those in business</li>
          <li>• <strong>Patron of the Poor</strong> - Protector of the poor and needy</li>
          <li>• <strong>Patron of Peace</strong> - Advocate for peace and reconciliation</li>
          <li>• <strong>Founder of Franciscans</strong> - Founder of the Franciscan Order</li>
          <li>• <strong>Seraphic Saint</strong> - Known for his angelic purity</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Prayer of St. Francis</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Lord, Make Me an Instrument of Your Peace</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Lord, make me an instrument of your peace.</p>
            <p className="mb-2">Where there is hatred, let me sow love;</p>
            <p className="mb-2">where there is injury, pardon;</p>
            <p className="mb-2">where there is doubt, faith;</p>
            <p className="mb-2">where there is despair, hope;</p>
            <p className="mb-2">where there is darkness, light;</p>
            <p className="mb-2">where there is sadness, joy.</p>
            <p className="mb-2">O Divine Master,</p>
            <p className="mb-2">grant that I may not so much seek</p>
            <p className="mb-2">to be consoled as to console;</p>
            <p className="mb-2">to be understood as to understand;</p>
            <p className="mb-2">to be loved as to love.</p>
            <p className="mb-2">For it is in giving that we receive;</p>
            <p className="mb-2">it is in pardoning that we are pardoned;</p>
            <p className="mb-2">and it is in dying that we are born to eternal life.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-therese" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Therese</h3>
              <p className="text-gray-600 text-sm">Prayer to the Little Flower of Jesus</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-anthony" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Anthony</h3>
              <p className="text-gray-600 text-sm">Prayer to the finder of lost things</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-patrick" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">☘️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Patrick</h3>
              <p className="text-gray-600 text-sm">Prayer to the patron saint of Ireland</p>
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