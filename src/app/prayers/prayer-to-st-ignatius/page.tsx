import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to St. Ignatius | Catholic Bible Online",
  description: "Learn the prayer to St. Ignatius of Loyola, the founder of the Jesuits. Discover his Spiritual Exercises and powerful intercession in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-ignatius",
  },
  openGraph: {
    title: "Prayer to St. Ignatius",
    description: "Learn the prayer to St. Ignatius of Loyola, the founder of the Jesuits.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-ignatius",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Ignatius",
    description: "Learn the prayer to St. Ignatius of Loyola, the founder of the Jesuits.",
  },
};

export default function PrayerToStIgnatiusPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Ignatius
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⚜️ Prayer to St. Ignatius</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Ignatius honors the founder of the Society of Jesus (Jesuits) and the author of the Spiritual Exercises. 
        St. Ignatius of Loyola was a Spanish priest who founded the Jesuit Order and developed a method of spiritual discernment 
        that has guided countless souls to holiness. This prayer seeks his intercession for discernment and spiritual guidance.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Ignatius</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Ignatius,</p>
            <p className="mb-2">founder of the Society of Jesus,</p>
            <p className="mb-2">who, after having been a soldier of the world,</p>
            <p className="mb-2">became a valiant soldier of Christ,</p>
            <p className="mb-2">and who, for the greater glory of God,</p>
            <p className="mb-2">founded the most illustrious Company of Jesus,</p>
            <p className="mb-2">obtain for me from the Divine Majesty</p>
            <p className="mb-2">the grace to conquer myself</p>
            <p className="mb-2">and the world,</p>
            <p className="mb-2">and to labor with all my strength</p>
            <p className="mb-2">for the greater glory of God</p>
            <p className="mb-2">and the salvation of my soul.</p>
            <p className="mb-2">Help me to discern God's will</p>
            <p className="mb-2">and to follow it with courage and love.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">St. Ignatius,</p>
            <p className="mb-2">founder of the Jesuits,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to discern God's will</p>
            <p className="mb-2">and to work for the greater glory of God.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Prayer for Discernment</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O St. Ignatius,</p>
            <p className="mb-2">master of spiritual discernment,</p>
            <p className="mb-2">help me to recognize</p>
            <p className="mb-2">the movements of the Holy Spirit</p>
            <p className="mb-2">and to choose what leads to God.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Ignatius</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On July 31st</strong> - Feast day of St. Ignatius</li>
          <li>• <strong>On Thursdays</strong> - Traditional day to honor St. Ignatius</li>
          <li>• <strong>For discernment</strong> - When making important decisions</li>
          <li>• <strong>For Jesuits</strong> - When praying for the Society of Jesus</li>
          <li>• <strong>For spiritual direction</strong> - When seeking guidance</li>
          <li>• <strong>For conversion</strong> - When seeking spiritual transformation</li>
          <li>• <strong>For education</strong> - When praying for schools and universities</li>
          <li>• <strong>For missions</strong> - When praying for missionary work</li>
          <li>• <strong>For soldiers</strong> - When praying for military personnel</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Ignatius</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Founder of Jesuits</h3>
          <p className="text-gray-700 text-sm">
            St. Ignatius founded the Society of Jesus (Jesuits) in 1540, 
            establishing a religious order dedicated to education and missionary work.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Exercises</h3>
          <p className="text-gray-700 text-sm">
            St. Ignatius wrote the "Spiritual Exercises," a method of prayer and discernment 
            that has guided millions of people in their spiritual journey.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Discernment</h3>
          <p className="text-gray-700 text-sm">
            St. Ignatius developed a method of spiritual discernment to help people 
            recognize God's will in their lives.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Education</h3>
            <p className="text-gray-700 text-sm">
            St. Ignatius emphasized education and founded many schools and universities 
            throughout the world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Ignatius's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Patron of the Jesuits</strong> - Founder and protector of the Society of Jesus</li>
          <li>• <strong>Patron of Spiritual Direction</strong> - Helper of spiritual directors</li>
          <li>• <strong>Patron of Education</strong> - Protector of schools and universities</li>
          <li>• <strong>Patron of Soldiers</strong> - Helper of military personnel</li>
          <li>• <strong>Patron of Retreats</strong> - Protector of spiritual retreats</li>
          <li>• <strong>Founder of Jesuits</strong> - Founder of the Society of Jesus</li>
          <li>• <strong>Master of Discernment</strong> - Expert in spiritual discernment</li>
          <li>• <strong>Author of Spiritual Exercises</strong> - Creator of the Spiritual Exercises</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-dominic" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🐕</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Dominic</h3>
              <p className="text-gray-600 text-sm">Prayer to the founder of the Dominicans</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-benedict" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Benedict</h3>
              <p className="text-gray-600 text-sm">Prayer to the father of Western monasticism</p>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-thomas-aquinas" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Prayer to St. Thomas Aquinas</h3>
              <p className="text-gray-600 text-sm">Prayer to the Angelic Doctor</p>
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