import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to St. Anthony | Catholic Bible Online",
  description: "Learn the prayer to St. Anthony, the finder of lost things and patron of the poor. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-to-st-anthony",
  },
  openGraph: {
    title: "Prayer to St. Anthony",
    description: "Learn the prayer to St. Anthony, the finder of lost things and patron of the poor.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-to-st-anthony",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to St. Anthony",
    description: "Learn the prayer to St. Anthony, the finder of lost things and patron of the poor.",
  },
};

export default function PrayerToStAnthonyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/saints" className="hover:underline">Saints Prayers</Link> &gt; 
        Prayer to St. Anthony
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🔍 Prayer to St. Anthony</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to St. Anthony honors the beloved saint known as the "finder of lost things" and patron of the poor. 
        St. Anthony of Padua was a Franciscan friar known for his powerful preaching, miracles, and compassion for the poor. 
        This prayer seeks his intercession for finding lost items and for help in times of need.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to St. Anthony</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O glorious St. Anthony,</p>
            <p className="mb-2">gentle and powerful in your help,</p>
            <p className="mb-2">your love for God and charity for His creatures</p>
            <p className="mb-2">made you worthy, when on earth,</p>
            <p className="mb-2">to possess miraculous powers.</p>
            <p className="mb-2">Miracles waited on your word,</p>
            <p className="mb-2">which you were ever ready to speak</p>
            <p className="mb-2">for those in trouble or anxiety.</p>
            <p className="mb-2">Encouraged by this thought,</p>
            <p className="mb-2">I implore you to obtain for me</p>
            <p className="mb-2">[mention your request here].</p>
            <p className="mb-2">The answer to my prayer may require a miracle.</p>
            <p className="mb-2">Even so, you are the saint of miracles.</p>
            <p className="mb-2">O gentle and loving St. Anthony,</p>
            <p className="mb-2">whose heart was ever full of human sympathy,</p>
            <p className="mb-2">whisper my petition into the ears of the sweet Infant Jesus,</p>
            <p className="mb-2">who loved to be folded in your arms,</p>
            <p className="mb-2">and the gratitude of my heart will ever be yours.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer for Lost Things</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Dear St. Anthony,</p>
            <p className="mb-2">please come around,</p>
            <p className="mb-2">something is lost</p>
            <p className="mb-2">and cannot be found.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Novena Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O holy St. Anthony,</p>
            <p className="mb-2">gentlest of saints,</p>
            <p className="mb-2">your love for God and charity for His creatures</p>
            <p className="mb-2">made you worthy, when on earth,</p>
            <p className="mb-2">to possess miraculous powers.</p>
            <p className="mb-2">Encouraged by this thought,</p>
            <p className="mb-2">I implore you to obtain for me</p>
            <p className="mb-2">the favor I seek in this novena.</p>
            <p className="mb-2">The answer to my prayer may require a miracle.</p>
            <p className="mb-2">Even so, you are the saint of miracles.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to St. Anthony</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On June 13th</strong> - Feast day of St. Anthony</li>
          <li>• <strong>On Tuesdays</strong> - Traditional day to honor St. Anthony</li>
          <li>• <strong>For lost items</strong> - When something is lost or misplaced</li>
          <li>• <strong>For the poor</strong> - When praying for the poor and needy</li>
          <li>• <strong>For travelers</strong> - When traveling or for safe journeys</li>
          <li>• <strong>For fishermen</strong> - When praying for good catches</li>
          <li>• <strong>For pregnant women</strong> - When praying for safe childbirth</li>
          <li>• <strong>For the sick</strong> - When praying for healing</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to St. Anthony</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Finder of Lost Things</h3>
          <p className="text-gray-700 text-sm">
            St. Anthony is known as the "finder of lost things" due to a story where he helped a novice 
            find a lost psalter, and later helped find a lost child.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Doctor of the Church</h3>
          <p className="text-gray-700 text-sm">
            St. Anthony was declared a Doctor of the Church for his profound knowledge of Scripture 
            and his powerful preaching abilities.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miracles</h3>
          <p className="text-gray-700 text-sm">
            St. Anthony performed many miracles during his lifetime, including healing the sick, 
            raising the dead, and finding lost items.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Patron of the Poor</h3>
          <p className="text-gray-700 text-sm">
            St. Anthony is the patron of the poor and is often invoked for help with financial difficulties 
            and charitable works.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">St. Anthony's Titles and Patronages</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Finder of Lost Things</strong> - Helper for finding lost items</li>
          <li>• <strong>Patron of the Poor</strong> - Protector and helper of the poor</li>
          <li>• <strong>Patron of Travelers</strong> - Protector of those who travel</li>
          <li>• <strong>Patron of Fishermen</strong> - Helper for good fishing</li>
          <li>• <strong>Patron of Pregnant Women</strong> - Protector during pregnancy</li>
          <li>• <strong>Patron of the Sick</strong> - Helper for healing</li>
          <li>• <strong>Doctor of the Church</strong> - Teacher of the faith</li>
          <li>• <strong>Evangelical Doctor</strong> - Preacher of the Gospel</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-to-st-joseph" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Joseph
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Learn the prayer to the foster father of Jesus and patron of the universal Church.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-jude" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Jude
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Discover the prayer to the patron of hopeless cases and impossible situations.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-to-st-therese" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg hover:border-blue-300 transition-all duration-300">
              <div className="p-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                  Saints Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-3 group-hover:text-indigo-600 transition-colors">
                  Prayer to St. Therese
                </h3>
                <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                  Explore the prayer to the Little Flower of Jesus and Doctor of the Church.
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