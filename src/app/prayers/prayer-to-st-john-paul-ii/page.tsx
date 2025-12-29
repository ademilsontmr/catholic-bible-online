import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. John Paul II | Catholic Bible Online",
  description: "Learn the prayer to St. John Paul II, the Great Pope and modern saint. Discover his powerful intercession and love for youth in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-john-paul-ii",
  },
  openGraph: {
    title: "Prayer to St. John Paul II",
    description: "Learn the prayer to St. John Paul II, the Great Pope and modern saint.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-john-paul-ii",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. John Paul II",
    description: "Learn the prayer to St. John Paul II, the Great Pope and modern saint.",
  },
};

export default function PrayerToStJohnPaulIIPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. John Paul II
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⛪ Prayer to St. John Paul II</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. John Paul II honors the beloved pope who served the Church for 27 years and was canonized as a saint. 
        Pope St. John Paul II was known for his love for youth, his defense of human dignity, and his powerful witness to the Gospel. 
        This prayer seeks his intercession for the Church, youth, and all who invoke his help.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. John Paul II</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O St. John Paul II,</p>
            <p className="mb-2">from the window of heaven,</p>
            <p className="mb-2">grant us your blessing!</p>
            <p className="mb-2">Bless the Church that you loved and served</p>
            <p className="mb-2">and guided as Supreme Pontiff,</p>
            <p className="mb-2">bless the young,</p>
            <p className="mb-2">who were your great passion.</p>
            <p className="mb-2">Help them dream again,</p>
            <p className="mb-2">help them look up to the heights again</p>
            <p className="mb-2">to find the light that illuminates</p>
            <p className="mb-2">the paths of life here on earth.</p>
            <p className="mb-2">May you bless families,</p>
            <p className="mb-2">each and every family in the world!</p>
            <p className="mb-2">May you bless the family.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. John Paul II,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to be not afraid</p>
            <p className="mb-2">and to open wide the doors to Christ.</p>
            <p className="mb-2">Intercede for the Church and youth.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Youth</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">St. John Paul II,</p>
            <p className="mb-2">friend of youth,</p>
            <p className="mb-2">help young people to discover</p>
            <p className="mb-2">the beauty of their vocation</p>
            <p className="mb-2">and to follow Christ with courage.</p>
            <p className="mb-2">Guide them to holiness and truth.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. John Paul II</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On October 22nd</strong> - Feast day of St. John Paul II</li>
          <li>• <strong>On Mondays</strong> - Traditional day to honor St. John Paul II</li>
          <li>• <strong>For youth</strong> - When praying for young people</li>
          <li>• <strong>For families</strong> - When praying for family unity</li>
          <li>• <strong>For the Church</strong> - When praying for the Catholic Church</li>
          <li>• <strong>For courage</strong> - When seeking courage to follow Christ</li>
          <li>• <strong>For vocations</strong> - When praying for religious vocations</li>
          <li>• <strong>For human dignity</strong> - When defending human life and dignity</li>
          <li>• <strong>For evangelization</strong> - When spreading the Gospel</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. John Paul II</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">The Great Pope</h3>
          <p className="text-gray-700 text-sm">
            St. John Paul II served as Pope for 27 years, making him one of the longest-serving popes 
            and one of the most influential leaders of the 20th century.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Friend of Youth</h3>
          <p className="text-gray-700 text-sm">
            St. John Paul II had a special love for young people and established World Youth Day, 
            which continues to inspire millions of youth worldwide.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Defender of Life</h3>
          <p className="text-gray-700 text-sm">
            St. John Paul II was a powerful defender of human life and dignity, 
            teaching extensively on the sanctity of life from conception to natural death.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Modern Saint</h3>
          <p className="text-gray-700 text-sm">
            St. John Paul II was canonized in 2014, making him one of the most recent saints 
            and the first pope to be canonized in modern times.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. John Paul II's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of Youth</strong> - Protector and friend of young people</li>
          <li>• <strong>Patron of Families</strong> - Protector of family life</li>
          <li>• <strong>Patron of World Youth Day</strong> - Founder and patron of WYD</li>
          <li>• <strong>Patron of Human Dignity</strong> - Defender of human life and rights</li>
          <li>• <strong>The Great Pope</strong> - One of the most influential popes in history</li>
          <li>• <strong>Pope of the Family</strong> - Advocate for family values</li>
          <li>• <strong>Pope of Mercy</strong> - Proclaimer of God's mercy</li>
          <li>• <strong>Modern Saint</strong> - Recently canonized saint</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-padre-pio" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">✝️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Padre Pio</h3>
              <p className="text-gray-600 text-sm">Prayer to the stigmatist saint</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-therese" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Therese</h3>
              <p className="text-gray-600 text-sm">Prayer to the Little Flower of Jesus</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-joseph" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🔨</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Joseph</h3>
              <p className="text-gray-600 text-sm">Prayer to the foster father of Jesus</p>
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