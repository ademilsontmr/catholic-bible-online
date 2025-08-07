import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hail Holy Queen – Salve Regina Prayer | Catholic Bible Online",
  description: "Learn the Hail Holy Queen (Salve Regina) prayer. This beautiful prayer to the Blessed Virgin Mary is traditionally prayed at the end of the Rosary.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/hail-holy-queen",
  },
  openGraph: {
    title: "Hail Holy Queen – Salve Regina Prayer",
    description: "Learn the Hail Holy Queen (Salve Regina) prayer to the Blessed Virgin Mary.",
    url: "https://www.catholicbibleonline.com/prayers/hail-holy-queen",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail Holy Queen – Salve Regina Prayer",
    description: "Learn the Hail Holy Queen (Salve Regina) prayer to the Blessed Virgin Mary.",
  },
};

export default function HailHolyQueenPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Hail Holy Queen
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👸 Hail Holy Queen – Salve Regina Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Hail Holy Queen (Salve Regina) is one of the most beautiful and beloved prayers to the Blessed Virgin Mary. 
        This prayer is traditionally recited at the end of the Rosary and is a powerful expression of our trust in 
        Mary's intercession and her role as our spiritual mother and queen.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hail Holy Queen Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Hail, Holy Queen, Mother of Mercy,</p>
          <p className="mb-4">Our life, our sweetness, and our hope.</p>
          <p className="mb-4">To thee do we cry, poor banished children of Eve.</p>
          <p className="mb-4">To thee do we send up our sighs, mourning and weeping in this valley of tears.</p>
          <p className="mb-4">Turn then, most gracious Advocate, thine eyes of mercy toward us.</p>
          <p className="mb-4">And after this our exile, show unto us the blessed fruit of thy womb, Jesus.</p>
          <p className="mb-4">O clement, O loving, O sweet Virgin Mary.</p>
          
          <p className="font-semibold">Pray for us, O Holy Mother of God.</p>
          <p className="font-semibold">That we may be made worthy of the promises of Christ.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latin Version (Salve Regina)</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Salve Regina, Mater misericordiae,</p>
          <p className="mb-4">Vita, dulcedo, et spes nostra, salve.</p>
          <p className="mb-4">Ad te clamamus, exsules filii Evae.</p>
          <p className="mb-4">Ad te suspiramus, gementes et flentes in hac lacrimarum valle.</p>
          <p className="mb-4">Eia ergo, Advocata nostra, illos tuos misericordes oculos ad nos converte.</p>
          <p className="mb-4">Et Iesum, benedictum fructum ventris tui, nobis post hoc exsilium ostende.</p>
          <p className="mb-4">O clemens, O pia, O dulcis Virgo Maria.</p>
          
          <p className="font-semibold">Ora pro nobis, sancta Dei Genitrix.</p>
          <p className="font-semibold">Ut digni efficiamur promissionibus Christi.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Hail Holy Queen is a powerful prayer that expresses several key aspects of our relationship with Mary:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Mary as Queen</strong> - We acknowledge Mary as the Queen of Heaven and Earth</li>
          <li>• <strong>Mary as Mother of Mercy</strong> - We recognize her role as the dispenser of God's mercy</li>
          <li>• <strong>Our spiritual mother</strong> - We turn to her as our mother in the order of grace</li>
          <li>• <strong>Our advocate</strong> - We ask for her intercession before God</li>
          <li>• <strong>Our hope</strong> - We place our trust in her maternal care</li>
          <li>• <strong>Our guide to Jesus</strong> - We ask her to show us her Son</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer beautifully captures the Catholic understanding of Mary's role in salvation history 
          and her ongoing intercession for the Church.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Hail Holy Queen</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>At the end of the Rosary</strong> - Traditional conclusion to the Rosary</li>
          <li>• <strong>During Marian devotions</strong> - As part of other prayers to Mary</li>
          <li>• <strong>In times of need</strong> - When seeking Mary's intercession</li>
          <li>• <strong>Before important decisions</strong> - Asking for Mary's guidance</li>
          <li>• <strong>During the Liturgy of the Hours</strong> - In the Office of Compline</li>
          <li>• <strong>On Marian feast days</strong> - To honor the Blessed Virgin</li>
          <li>• <strong>As a family prayer</strong> - Teaching children devotion to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mary's Intercession</h3>
          <p className="text-gray-700 text-sm">
            This prayer invokes Mary's powerful intercession before her Son, Jesus Christ.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Comfort in Suffering</h3>
          <p className="text-gray-700 text-sm">
            The prayer acknowledges our suffering and asks for Mary's comfort and mercy.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hope for Heaven</h3>
          <p className="text-gray-700 text-sm">
            We express our hope to see Jesus through Mary's intercession after this earthly exile.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Deepens Devotion</h3>
          <p className="text-gray-700 text-sm">
            Regular recitation deepens our love and devotion to the Blessed Virgin Mary.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Hail Holy Queen is deeply rooted in Scripture and Catholic tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Luke 1:28</strong> - "Hail, full of grace" (Angel Gabriel's greeting)</li>
          <li>• <strong>Luke 1:42</strong> - "Blessed are you among women" (Elizabeth's greeting)</li>
          <li>• <strong>John 19:27</strong> - Jesus entrusting Mary to John, and us to Mary</li>
          <li>• <strong>Revelation 12:1</strong> - "A woman clothed with the sun" (Mary as Queen)</li>
          <li>• <strong>Genesis 3:15</strong> - The protoevangelium, Mary as the new Eve</li>
          <li>• <strong>Psalm 45:9</strong> - "The queen stands at your right hand"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          This prayer reflects the Church's understanding of Mary's role in salvation history 
          and her ongoing maternal care for all believers.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Hail Holy Queen was composed in the 11th century, traditionally attributed to Hermann of Reichenau 
          (1013-1054), a Benedictine monk. It became one of the four Marian antiphons sung at the end of the 
          Liturgy of the Hours, particularly at Compline (Night Prayer).
        </p>
        
        <p className="text-gray-700 mb-6">
          The prayer has been beloved by Catholics for centuries and is often set to beautiful Gregorian chant. 
          It expresses the Church's deep devotion to Mary and her role as our spiritual mother and queen.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Prayer</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Pray with devotion</strong> - Say the words slowly and reflect on their meaning</li>
          <li>• <strong>Use both languages</strong> - Try praying in both English and Latin</li>
          <li>• <strong>Learn the chant</strong> - The Gregorian chant version is especially beautiful</li>
          <li>• <strong>Pray as a family</strong> - Teach children this beautiful prayer</li>
          <li>• <strong>Make it a habit</strong> - Include it in your daily prayer routine</li>
          <li>• <strong>Reflect on the imagery</strong> - Consider the "valley of tears" and "exile"</li>
          <li>• <strong>Ask for specific intentions</strong> - Present your needs to Mary through this prayer</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/how-to-pray-rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  How to Pray the Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete step-by-step guide to praying the Rosary with all mysteries.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/magnificat" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Magnificat
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Mary's song of praise, also known as the Canticle of Mary.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/rosary"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Rosary Prayers
        </Link>
      </div>
    </main>
  );
} 