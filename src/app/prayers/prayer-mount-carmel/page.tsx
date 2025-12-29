import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Mount Carmel | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Mount Carmel, Queen and Beauty of Carmel. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-mount-carmel",
  },
  openGraph: {
    title: "Prayer to Our Lady of Mount Carmel",
    description: "Learn the prayer to Our Lady of Mount Carmel, Queen and Beauty of Carmel.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-mount-carmel",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Mount Carmel",
    description: "Learn the prayer to Our Lady of Mount Carmel, Queen and Beauty of Carmel.",
  },
};

export default function PrayerMountCarmelPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Mount Carmel
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏔️ Prayer to Our Lady of Mount Carmel</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Mount Carmel honors Mary as the Queen and Beauty of Carmel. 
        This devotion is closely associated with the Carmelite Order and the Brown Scapular. 
        Our Lady of Mount Carmel is a powerful intercessor for those who seek her protection and guidance.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Mount Carmel</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O most beautiful Flower of Mount Carmel,</p>
            <p className="mb-2">Fruitful Vine, Splendor of Heaven,</p>
            <p className="mb-2">Blessed Mother of the Son of God,</p>
            <p className="mb-2">Immaculate Virgin, assist me in my necessity.</p>
            <p className="mb-2">O Star of the Sea, help me and show me</p>
            <p className="mb-2">herein you are my Mother.</p>
            <p className="mb-2">O Holy Mary, Mother of God,</p>
            <p className="mb-2">Queen of Heaven and Earth,</p>
            <p className="mb-2">I humbly beseech you from the bottom of my heart,</p>
            <p className="mb-2">to succor me in my necessity.</p>
            <p className="mb-2">There are none that can withstand your power.</p>
            <p className="mb-2">O show me herein you are my Mother.</p>
            <p className="mb-2">O Mary, conceived without sin,</p>
            <p className="mb-2">pray for us who have recourse to thee.</p>
            <p className="mb-2">Sweet Mother, I place this cause in your hands.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Queen and Beauty of Carmel,</p>
            <p className="mb-2">pray for us and help us in our needs.</p>
            <p className="mb-2">Protect us with your mantle</p>
            <p className="mb-2">and guide us to your Son, Jesus.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Mount Carmel</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On July 16th</strong> - Feast day of Our Lady of Mount Carmel</li>
          <li>• <strong>For protection</strong> - When seeking Mary's protection and guidance</li>
          <li>• <strong>For Carmelite devotion</strong> - When praying with the Carmelite spirituality</li>
          <li>• <strong>For the Brown Scapular</strong> - When wearing or praying with the scapular</li>
          <li>• <strong>For purity</strong> - When seeking to grow in holiness and purity</li>
          <li>• <strong>For conversion</strong> - When praying for conversion of hearts</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Carmelite Tradition</h3>
          <p className="text-gray-700 text-sm">
            The devotion to Our Lady of Mount Carmel is deeply rooted in the Carmelite Order, 
            which traces its origins to the hermits on Mount Carmel in the Holy Land.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Brown Scapular</h3>
          <p className="text-gray-700 text-sm">
            The Brown Scapular is a sign of devotion to Our Lady of Mount Carmel and a promise 
            of her protection for those who wear it faithfully.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Queen of Carmel</h3>
          <p className="text-gray-700 text-sm">
            Mary is honored as the Queen and Beauty of Carmel, the patroness of the Carmelite Order 
            and all who seek her intercession.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Protection</h3>
          <p className="text-gray-700 text-sm">
            Our Lady of Mount Carmel is known for her powerful protection and intercession 
            for those who have recourse to her.
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
          
          <Link href="/prayers/ave-maris-stella" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Ave Maris Stella</h3>
              <p className="text-gray-600 text-sm">Hail, Star of the Sea - medieval Marian hymn</p>
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