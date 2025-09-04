import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Memorare – Prayer to the Blessed Virgin Mary",
  description: "Read the Memorare prayer and learn its meaning in Catholic tradition. Discover this powerful prayer of intercession to the Blessed Virgin Mary.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/memorare",
  },
  openGraph: {
    title: "Memorare – Prayer to the Blessed Virgin Mary",
    description: "Read the Memorare prayer and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/memorare",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorare – Prayer to the Blessed Virgin Mary",
    description: "Read the Memorare prayer and learn its meaning in Catholic tradition.",
  },
};

export default function MemorarePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Memorare
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙏 Memorare – Prayer to the Blessed Virgin Mary</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Memorare is a beautiful and powerful Catholic prayer of intercession to the Blessed Virgin Mary. 
        This prayer expresses our confidence in Mary's maternal care and her ability to bring our needs before her Son, Jesus Christ. 
        The Memorare reminds us that we can always turn to Mary for help, knowing that she has never been known to leave anyone unaided.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Remember, O most gracious Virgin Mary,
          </p>
          <p className="mb-4">
            that never was it known that anyone who fled to thy protection,
          </p>
          <p className="mb-4">
            implored thy help, or sought thine intercession was left unaided.
          </p>
          <p className="mb-4">
            Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother;
          </p>
          <p className="mb-4">
            to thee do I come, before thee I stand, sinful and sorrowful.
          </p>
          <p className="mb-4">
            O Mother of the Word Incarnate, despise not my petitions,
          </p>
          <p className="mb-4">
            but in thy mercy hear and answer me.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Memorare is a prayer of profound trust and confidence in Mary's maternal love and intercessory power. 
          This Catholic prayer begins with the word "Remember," calling to mind Mary's faithfulness and her track record of helping those who turn to her. 
          The prayer acknowledges that throughout history, Mary has never abandoned anyone who has sought her help.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer's language is deeply personal and intimate, addressing Mary as "my mother" and expressing our vulnerability as "sinful and sorrowful." 
          This reflects the authentic relationship we can have with Mary—one of childlike trust and dependence. 
          We recognize our need for help and our confidence that Mary will not turn us away.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Memorare teaches us about the power of intercessory prayer and the special role that Mary plays in our spiritual lives. 
          As the Mother of God, she has a unique relationship with Jesus and can bring our needs before Him with maternal love and concern. 
          This prayer encourages us to develop a personal devotion to Mary and to trust in her ability to help us grow closer to her Son.
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
          
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Angelus
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A traditional Catholic prayer that commemorates the Incarnation of Jesus Christ and honors the Blessed Virgin Mary.
                </p>
              </div>
            </div>
          </Link>
        </div>
      

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Memorare" 
            url="/prayers/memorare"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 