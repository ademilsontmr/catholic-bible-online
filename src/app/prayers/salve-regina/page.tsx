import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Salve Regina – Hail, Holy Queen | Catholic Bible Online",
  description: "Learn the Salve Regina prayer, one of the most beautiful Marian antiphons. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/salve-regina",
  },
  openGraph: {
    title: "Salve Regina – Hail, Holy Queen",
    description: "Learn the Salve Regina prayer, one of the most beautiful Marian antiphons.",
    url: "https://www.catholicbibleonline.com/prayers/salve-regina",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Salve Regina – Hail, Holy Queen",
    description: "Learn the Salve Regina prayer, one of the most beautiful Marian antiphons.",
  },
};

export default function SalveReginaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Salve Regina
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👑 Salve Regina – Hail, Holy Queen</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Salve Regina is one of the most beautiful and beloved Marian antiphons in the Catholic tradition. 
        This prayer, dating from the 11th century, honors Mary as our Queen and Mother of Mercy. 
        It is traditionally sung at the end of Compline and is one of the four Marian antiphons of the Church.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Salve Regina Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Salve Regina, Mater misericordiae,</p>
            <p className="mb-2">Vita, dulcedo, et spes nostra, salve.</p>
            <p className="mb-2">Ad te clamamus, exsules filii Evae.</p>
            <p className="mb-2">Ad te suspiramus, gementes et flentes</p>
            <p className="mb-2">in hac lacrimarum valle.</p>
            <p className="mb-4">Eia ergo, advocata nostra,</p>
            <p className="mb-2">illos tuos misericordes oculos</p>
            <p className="mb-2">ad nos converte.</p>
            <p className="mb-4">Et Iesum, benedictum fructum ventris tui,</p>
            <p className="mb-2">nobis, post hoc exsilium, ostende.</p>
            <p className="mb-4">O clemens, O pia, O dulcis Virgo Maria.</p>
            <p className="mb-4">Ora pro nobis, sancta Dei Genitrix,</p>
            <p className="font-semibold">ut digni efficiamur promissionibus Christi.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Hail, Holy Queen, Mother of Mercy,</p>
            <p className="mb-2">our life, our sweetness, and our hope.</p>
            <p className="mb-2">To thee do we cry, poor banished children of Eve.</p>
            <p className="mb-2">To thee do we send up our sighs,</p>
            <p className="mb-2">mourning and weeping in this valley of tears.</p>
            <p className="mb-4">Turn then, most gracious advocate,</p>
            <p className="mb-2">thine eyes of mercy toward us.</p>
            <p className="mb-4">And after this our exile,</p>
            <p className="mb-2">show unto us the blessed fruit of thy womb, Jesus.</p>
            <p className="mb-4">O clement, O loving, O sweet Virgin Mary.</p>
            <p className="mb-4">Pray for us, O holy Mother of God,</p>
            <p className="font-semibold">that we may be made worthy of the promises of Christ.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray Salve Regina</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>At the end of Compline</strong> - Traditional evening prayer of the Church</li>
          <li>• <strong>During Marian feasts</strong> - Especially on Marian solemnities</li>
          <li>• <strong>Personal devotion</strong> - As a beautiful prayer to Mary</li>
          <li>• <strong>In times of sorrow</strong> - When seeking Mary's comfort and mercy</li>
          <li>• <strong>Before sleep</strong> - As a peaceful way to end the day</li>
          <li>• <strong>During pilgrimages</strong> - Especially Marian pilgrimages</li>
          <li>• <strong>Family prayer</strong> - As a beautiful family devotion</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Medieval Origins</h3>
          <p className="text-gray-700 text-sm">
            The Salve Regina dates from the 11th century and is attributed to Hermann of Reichenau. 
            It became a popular prayer in medieval monasteries and churches.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mother of Mercy</h3>
          <p className="text-gray-700 text-sm">
            This prayer emphasizes Mary's role as Mother of Mercy, highlighting her compassion 
            and intercessory power for us sinners.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Valley of Tears</h3>
          <p className="text-gray-700 text-sm">
            The prayer acknowledges our earthly exile and suffering, calling this world 
            a "valley of tears" and seeking Mary's comfort.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Use</h3>
          <p className="text-gray-700 text-sm">
            The Salve Regina is one of the four Marian antiphons and is traditionally sung 
            at the end of Compline during certain liturgical seasons.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray Salve Regina</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Structure of the Prayer</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Invocation</h4>
            <p className="text-gray-700 text-sm">
              "Hail, Holy Queen, Mother of Mercy" - We address Mary with her most beautiful titles.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Recognition of Our State</h4>
            <p className="text-gray-700 text-sm">
              We acknowledge our exile and suffering in this "valley of tears."
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Petition</h4>
            <p className="text-gray-700 text-sm">
              We ask Mary to turn her merciful eyes toward us and show us Jesus.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4. Final Appeal</h4>
            <p className="text-gray-700 text-sm">
              We call on Mary's mercy and ask for her intercession.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Tips for Praying</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Pray slowly, meditating on each phrase</li>
            <li>• Reflect on Mary's mercy and compassion</li>
            <li>• Consider your own need for God's mercy</li>
            <li>• Sing the prayer if you know the traditional melody</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          The Salve Regina is deeply rooted in Scripture and tradition:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Hail, full of grace, the Lord is with you" - The greeting that Mary received from the angel.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:42</h4>
            <p className="text-gray-700 text-sm">
              "Blessed are you among women, and blessed is the fruit of your womb" - Elizabeth's greeting to Mary.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">John 19:26-27</h4>
            <p className="text-gray-700 text-sm">
              "Woman, behold your son... Behold your mother" - Jesus giving Mary to us as our mother.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Comfort in Suffering</h3>
          <p className="text-gray-700 text-sm">
            The Salve Regina brings comfort and hope in times of difficulty and suffering.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Marian Devotion</h3>
          <p className="text-gray-700 text-sm">
            This prayer deepens our devotion to Mary and helps us see her as our merciful mother.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Connection</h3>
          <p className="text-gray-700 text-sm">
            Praying this antiphon connects us to the rich liturgical tradition of the Church.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hope for Heaven</h3>
          <p className="text-gray-700 text-sm">
            The prayer reminds us of our heavenly home and Mary's role in leading us there.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/hail-holy-queen" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Holy Queen</h3>
              <p className="text-gray-600 text-sm">Traditional Marian prayer</p>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/regina-caeli" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">👑</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Regina Caeli</h3>
              <p className="text-gray-600 text-sm">Easter prayer to the Queen of Heaven</p>
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