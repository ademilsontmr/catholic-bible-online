import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hail Mary – Catholic Prayer to the Blessed Virgin",
  description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition. Discover how this prayer honors the Blessed Virgin Mary.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/hail-mary",
  },
  openGraph: {
    title: "Hail Mary – Catholic Prayer to the Blessed Virgin",
    description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/hail-mary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Mary – Catholic Prayer to the Blessed Virgin",
    description: "Read the full text of the Hail Mary prayer and learn its meaning in Catholic tradition.",
  },
};

export default function HailMaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Hail Mary
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Hail Mary – Catholic Prayer to the Blessed Virgin</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Hail Mary is one of the most beloved Catholic prayers, combining the words of the Angel Gabriel and Saint Elizabeth from the Gospel of Luke. 
        This prayer honors the Blessed Virgin Mary and asks for her intercession, recognizing her unique role in salvation history as the Mother of God. 
        It is a cornerstone of Catholic devotion and a central part of the Rosary.
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

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Hail Mary prayer is deeply rooted in Scripture, beginning with the Angel Gabriel's greeting to Mary at the Annunciation: "Hail, full of grace, the Lord is with you." 
          The second part comes from Elizabeth's inspired words when Mary visited her: "Blessed are you among women, and blessed is the fruit of your womb."
        </p>
        
        <p className="text-gray-700 mb-4">
          This Catholic prayer teaches us to honor Mary not for her own sake, but because of her unique relationship with Jesus Christ. 
          When we call her "Mother of God," we affirm the central truth of our faith: that Jesus is both fully human and fully divine. 
          Mary's "yes" to God's plan made our salvation possible.
        </p>
        
        <p className="text-gray-700 mb-6">
          The prayer's conclusion—"pray for us sinners, now and at the hour of our death"—reminds us that we need God's mercy throughout our lives and especially at the moment of death. 
          We ask Mary to intercede for us, confident that as the Mother of Jesus, she has a special place in His heart and can bring our needs before Him with maternal love and concern.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, the perfect model for all Christian prayer taught by Jesus Himself.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Devotions
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The powerful Catholic devotion combining vocal prayer with meditation on the mysteries of our salvation.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Memorare
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A beautiful prayer of intercession to the Blessed Virgin Mary expressing confidence in her maternal care.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 