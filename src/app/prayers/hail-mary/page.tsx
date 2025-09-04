import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from '@/components/ShareButton';

export const metadata: Metadata = {
  title: "Hail Mary – Prayer to the Blessed Virgin Mary",
  description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition. Discover how this prayer honors the Mother of God.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/hail-mary",
  },
  openGraph: {
    title: "Hail Mary – Prayer to the Blessed Virgin Mary",
    description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/hail-mary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Mary – Prayer to the Blessed Virgin Mary",
    description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition.",
  },
};

export default function HailMaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Hail Mary
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👸 Hail Mary – Prayer to the Blessed Virgin Mary</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Hail Mary is one of the most beloved prayers in the Catholic tradition, combining the words of the Angel Gabriel 
        and Saint Elizabeth from the Gospel of Luke. This prayer honors the Blessed Virgin Mary and asks for her intercession, 
        recognizing her unique role as the Mother of God and our spiritual mother.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Hail Mary, full of grace, the Lord is with thee;
          </p>
          <p className="mb-4">
            blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.
          </p>
          <p className="mb-4">
            Holy Mary, Mother of God, pray for us sinners,
          </p>
          <p className="mb-4">
            now and at the hour of our death.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Hail Mary prayer is deeply rooted in Scripture. The first part comes from the Annunciation, 
          when the Angel Gabriel greeted Mary: "Hail, full of grace, the Lord is with you" (Luke 1:28). 
          The second part comes from Elizabeth's greeting to Mary: "Blessed are you among women, and blessed is the fruit of your womb" (Luke 1:42).
        </p>
        
        <p className="text-gray-700 mb-4">
          The third part, "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death," 
          was added by the Church to ask for Mary's intercession. This reflects the Catholic belief that Mary, 
          as the Mother of God, has a special role in praying for us and bringing our petitions to her Son.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          When we pray the Hail Mary, we join our voices with countless generations of Christians who have honored 
          the Blessed Virgin Mary. This prayer teaches us to recognize Mary's unique role in salvation history 
          and to seek her maternal intercession in our spiritual journey.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer begins by acknowledging Mary's special grace and her close relationship with God. 
          We then honor her as the mother of Jesus, recognizing that through her "yes" to God, 
          salvation came into the world. Finally, we ask for her prayers, both in our daily struggles 
          and at the moment of our death.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Hail Mary is a prayer of humility and trust. It reminds us that we are sinners in need of God's mercy, 
          and that Mary, as our spiritual mother, is always ready to intercede for us. This prayer helps us 
          grow in devotion to Mary and, through her, to Jesus Christ.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Hail Mary</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Daily Devotion:</strong> As part of your morning or evening prayers</li>
          <li>• <strong>The Rosary:</strong> As the central prayer of the Rosary devotion</li>
          <li>• <strong>Angelus:</strong> Three times daily (6 AM, 12 PM, 6 PM)</li>
          <li>• <strong>In Times of Need:</strong> When seeking Mary's intercession</li>
          <li>• <strong>Before Important Decisions:</strong> To ask for Mary's guidance</li>
          <li>• <strong>In Times of Temptation:</strong> To seek Mary's protection</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete guide to praying the Rosary with all its mysteries.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Angelus
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Traditional prayer recited three times daily in honor of the Incarnation.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Hail Mary" 
            url="/prayers/hail-mary"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to All Prayers
        </Link>
      </div>
    </main>
  );
} 