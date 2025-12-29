import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Perpetual Help | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Perpetual Help, honoring the miraculous icon of Mary. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-perpetual-help",
  },
  openGraph: {
    title: "Prayer to Our Lady of Perpetual Help",
    description: "Learn the prayer to Our Lady of Perpetual Help, honoring the miraculous icon of Mary.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-perpetual-help",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Perpetual Help",
    description: "Learn the prayer to Our Lady of Perpetual Help, honoring the miraculous icon of Mary.",
  },
};

export default function PrayerPerpetualHelpPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Perpetual Help
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🖼️ Prayer to Our Lady of Perpetual Help</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Perpetual Help honors the miraculous icon of Mary that has been 
        venerated for centuries. This beautiful devotion recognizes Mary as our perpetual helper 
        and source of comfort in all our needs. The icon shows Mary holding the Child Jesus, 
        who is comforted by her loving presence.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Perpetual Help</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O Mother of Perpetual Help,</p>
            <p className="mb-2">grant that I may ever invoke thy most powerful name,</p>
            <p className="mb-2">which is the safeguard of the living and the salvation of the dying.</p>
            <p className="mb-2">O purest Mary, O sweetest Mary,</p>
            <p className="mb-2">let thy name henceforth be ever on my lips.</p>
            <p className="mb-2">Delay not, O Blessed Lady,</p>
            <p className="mb-2">to help me whenever I call on thee,</p>
            <p className="mb-2">for, in all my needs, in all my temptations,</p>
            <p className="mb-2">I shall never cease to call on thee,</p>
            <p className="mb-2">ever repeating thy sacred name,</p>
            <p className="mb-2">Mary, Mary.</p>
            <p className="mb-4">O what consolation, what sweetness, what confidence,</p>
            <p className="mb-2">what emotion fill my soul when I pronounce thy sacred name,</p>
            <p className="mb-2">or even only think of thee!</p>
            <p className="mb-2">I thank God for having given thee,</p>
            <p className="mb-2">for my good, so sweet, so powerful, so lovely a name.</p>
            <p className="mb-2">But I will not be content with merely pronouncing thy name:</p>
            <p className="mb-2">let my love for thee prompt me ever to hail thee,</p>
            <p className="mb-2">Mother of Perpetual Help.</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Mother of Perpetual Help,</p>
            <p className="mb-2">pray for me and help me in all my needs.</p>
            <p className="mb-2">Intercede for me with thy Son,</p>
            <p className="mb-2">that I may obtain the grace to love Him</p>
            <p className="mb-2">and serve Him faithfully in this life,</p>
            <p className="mb-2">and be happy with Him forever in the next.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Perpetual Help</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>In times of need</strong> - When seeking Mary's help and intercession</li>
          <li>• <strong>During difficulties</strong> - When facing challenges or problems</li>
          <li>• <strong>In temptations</strong> - When seeking strength to resist sin</li>
          <li>• <strong>For healing</strong> - Physical, emotional, or spiritual healing</li>
          <li>• <strong>For family</strong> - Praying for family members and their needs</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
          <li>• <strong>Before important decisions</strong> - Seeking Mary's guidance</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Ancient Icon</h3>
          <p className="text-gray-700 text-sm">
            The icon of Our Lady of Perpetual Help dates from the 13th-15th century and is believed 
            to have been painted in Crete. It has been venerated for centuries.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Redemptorist Devotion</h3>
          <p className="text-gray-700 text-sm">
            The Redemptorist Fathers have been entrusted with the care of this icon since 1866, 
            and have spread devotion to Our Lady of Perpetual Help worldwide.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Miraculous Image</h3>
          <p className="text-gray-700 text-sm">
            The icon shows Mary holding the Child Jesus, who is comforted by her presence. 
            It symbolizes Mary's perpetual help and protection.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Appeal</h3>
          <p className="text-gray-700 text-sm">
            This devotion has spread throughout the world and is particularly popular 
            in times of need and difficulty.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray to Our Lady of Perpetual Help</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Structure of the Prayer</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Invocation</h4>
            <p className="text-gray-700 text-sm">
              "O Mother of Perpetual Help" - We address Mary with this beautiful title.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Petition</h4>
            <p className="text-gray-700 text-sm">
              We ask for Mary's help and intercession in our specific needs.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Trust and Confidence</h4>
            <p className="text-gray-700 text-sm">
              We express our trust in Mary's perpetual help and protection.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4. Love and Devotion</h4>
            <p className="text-gray-700 text-sm">
              We express our love for Mary and our desire to serve her Son.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Tips for Praying</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Pray with confidence in Mary's perpetual help</li>
            <li>• Be specific about your needs and intentions</li>
            <li>• Trust in Mary's intercession with her Son</li>
            <li>• Pray regularly to develop a relationship with Our Lady</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          The devotion to Our Lady of Perpetual Help is rooted in Scripture and tradition:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">John 19:26-27</h4>
            <p className="text-gray-700 text-sm">
              "Woman, behold your son... Behold your mother" - Jesus giving Mary to us as our mother.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Hail, full of grace, the Lord is with you" - Mary's special grace and favor with God.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Psalm 46:1</h4>
            <p className="text-gray-700 text-sm">
              "God is our refuge and strength, a very present help in trouble" - God's perpetual help.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Perpetual Help</h3>
          <p className="text-gray-700 text-sm">
            This devotion reminds us that Mary is always ready to help us in our needs.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Confidence in Mary</h3>
          <p className="text-gray-700 text-sm">
            Praying to Our Lady of Perpetual Help strengthens our trust in Mary's intercession.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Comfort in Difficulties</h3>
          <p className="text-gray-700 text-sm">
            This devotion brings comfort and peace in times of trouble and uncertainty.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Closer to Jesus</h3>
          <p className="text-gray-700 text-sm">
            Through Mary's intercession, we draw closer to her Son, Jesus Christ.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Novena to Our Lady of Perpetual Help</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Nine-Day Prayer</h3>
        
        <div className="text-gray-700 mb-6">
          <p className="mb-2">O Mother of Perpetual Help,</p>
          <p className="mb-2">with the greatest confidence I have recourse to thee</p>
          <p className="mb-2">in the dangers that daily surround me.</p>
          <p className="mb-2">Shield me from my enemies and from the punishment</p>
          <p className="mb-2">which my sins deserve.</p>
          <p className="mb-2">Obtain for me the pardon of my sins,</p>
          <p className="mb-2">love for Jesus, final perseverance,</p>
          <p className="mb-2">and the grace ever to have recourse to thee,</p>
          <p className="font-semibold">O Mother of Perpetual Help.</p>
        </div>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-4">When to Pray the Novena</h3>
        <div className="text-gray-700">
          <p className="mb-2">• For nine consecutive days</p>
          <p className="mb-2">• In times of special need or difficulty</p>
          <p className="mb-2">• Before important decisions or events</p>
          <p className="mb-2">• For healing or conversion of loved ones</p>
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
          
          <Link href="/prayers/sub-tuum-praesidium" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🛡️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Sub Tuum Praesidium</h3>
              <p className="text-gray-600 text-sm">Ancient prayer seeking Mary's protection</p>
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