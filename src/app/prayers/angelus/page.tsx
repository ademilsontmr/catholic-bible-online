import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Angelus – Catholic Prayer to the Blessed Virgin",
  description: "Learn how to pray the Angelus, a traditional Catholic prayer honoring the Incarnation. Discover the meaning and history of this beautiful devotion.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/angelus",
  },
  openGraph: {
    title: "The Angelus – Catholic Prayer to the Blessed Virgin",
    description: "Learn how to pray the Angelus, a traditional Catholic prayer honoring the Incarnation.",
    url: "https://www.catholicbibleonline.com/prayers/angelus",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Angelus – Catholic Prayer to the Blessed Virgin",
    description: "Learn how to pray the Angelus, a traditional Catholic prayer honoring the Incarnation.",
  },
};

export default function AngelusPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; The Angelus
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">The Angelus – Catholic Prayer to the Blessed Virgin</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Angelus is a traditional Catholic prayer that commemorates the Incarnation of Jesus Christ and honors the Blessed Virgin Mary. 
        This devotion is traditionally prayed three times daily—at 6:00 AM, 12:00 PM, and 6:00 PM—marking the beginning, middle, and end of the working day. 
        The Angelus helps us pause and reflect on the mystery of God becoming man for our salvation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4 font-semibold">V. The Angel of the Lord declared unto Mary.</p>
          <p className="mb-4">R. And she conceived of the Holy Spirit.</p>
          <p className="mb-4 font-semibold">Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.</p>
          <p className="mb-4">Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
          
          <p className="mb-4 font-semibold">V. Behold the handmaid of the Lord.</p>
          <p className="mb-4">R. Be it done unto me according to thy word.</p>
          <p className="mb-4 font-semibold">Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.</p>
          <p className="mb-4">Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
          
          <p className="mb-4 font-semibold">V. And the Word was made flesh.</p>
          <p className="mb-4">R. And dwelt among us.</p>
          <p className="mb-4 font-semibold">Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus.</p>
          <p className="mb-4">Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</p>
          
          <p className="mb-4 font-semibold">V. Pray for us, O holy Mother of God.</p>
          <p className="mb-4">R. That we may be made worthy of the promises of Christ.</p>
          
          <p className="mb-4 font-semibold">Let us pray:</p>
          <p className="mb-4">Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Angelus prayer is a beautiful meditation on the Annunciation and the Incarnation, the moment when God became man in the womb of the Virgin Mary. 
          This Catholic prayer helps us pause throughout the day to remember the central mystery of our faith: that God so loved the world that He sent His only Son to save us.
        </p>
        
        <p className="text-gray-700 mb-4">
          The three verses of the Angelus correspond to the three key moments of the Annunciation: the angel's greeting, Mary's response of faith, and the Incarnation itself. 
          Each verse is followed by a Hail Mary, emphasizing Mary's role in salvation history and our need for her intercession. 
          The prayer concludes with a collect that asks for the grace to follow Christ's path from Incarnation to Resurrection.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Angelus teaches us to sanctify time by marking the hours with prayer, just as the Church bells traditionally called the faithful to prayer. 
          This devotion reminds us that our daily work and activities are meant to be offered to God and that we are called to live in constant awareness of His presence. 
          Through this prayer, we learn to see our lives as part of God's plan of salvation and to respond to His call with the same faith and humility as Mary.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The beloved prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
          
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
                  The prayer that Jesus taught us, the perfect model for all Christian prayer.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Marian Devotions
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A powerful devotion combining prayer and meditation on the mysteries of Christ's life.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 