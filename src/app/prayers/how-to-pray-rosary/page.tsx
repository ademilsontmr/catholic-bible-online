import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "How to Pray the Rosary – Complete Step-by-Step Guide | Catholic Bible Online",
  description: "Learn how to pray the Rosary with our complete step-by-step guide. Discover the structure, prayers, and mysteries of this powerful Catholic devotion.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/how-to-pray-rosary",
  },
  openGraph: {
    title: "How to Pray the Rosary – Complete Step-by-Step Guide",
    description: "Learn how to pray the Rosary with our complete step-by-step guide.",
    url: "https://www.catholicbibleonline.com/prayers/how-to-pray-rosary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Pray the Rosary – Complete Step-by-Step Guide",
    description: "Learn how to pray the Rosary with our complete step-by-step guide.",
  },
};

export default function HowToPrayRosaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        How to Pray the Rosary
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">📿 How to Pray the Rosary – Complete Step-by-Step Guide</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Rosary is one of the most powerful and beloved Catholic devotions, combining vocal prayer with 
        meditation on the life of Christ. This step-by-step guide will help you learn how to pray the Rosary 
        properly, understand its structure, and experience the spiritual benefits of this beautiful devotion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You Need</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>A Rosary</strong> - A string of beads with a crucifix and medal</li>
          <li>• <strong>Quiet time</strong> - 15-20 minutes of uninterrupted prayer time</li>
          <li>• <strong>Your heart</strong> - Openness to God's presence and Mary's intercession</li>
          <li>• <strong>Intention</strong> - A specific prayer intention or petition</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Structure of the Rosary</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Rosary consists of:</p>
          <ul className="mb-4 space-y-2">
            <li>• <strong>Opening prayers</strong> - Sign of the Cross, Apostles' Creed, Our Father, 3 Hail Marys, Glory Be</li>
            <li>• <strong>5 Decades</strong> - Each decade contains 1 Our Father, 10 Hail Marys, and 1 Glory Be</li>
            <li>• <strong>5 Mysteries</strong> - Events from the life of Christ and Mary to meditate on</li>
            <li>• <strong>Closing prayers</strong> - Hail Holy Queen and optional prayers</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Step-by-Step Instructions</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Opening Prayers</h3>
          <div className="text-gray-700 space-y-2">
            <p>• <strong>Make the Sign of the Cross</strong></p>
            <p>• <strong>Pray the Apostles' Creed</strong> (holding the crucifix)</p>
            <p>• <strong>Pray 1 Our Father</strong> (on the first large bead)</p>
            <p>• <strong>Pray 3 Hail Marys</strong> (on the next 3 small beads) - for faith, hope, and charity</p>
            <p>• <strong>Pray 1 Glory Be</strong></p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Announce the First Mystery</h3>
          <div className="text-gray-700">
            <p>• Announce the first mystery of the day</p>
            <p>• Take a moment to reflect on this event in the life of Christ or Mary</p>
            <p>• Pray 1 Our Father (on the large bead)</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Pray the First Decade</h3>
          <div className="text-gray-700 space-y-2">
            <p>• Pray 10 Hail Marys (one on each small bead)</p>
            <p>• Continue meditating on the mystery</p>
            <p>• Pray 1 Glory Be</p>
            <p>• Pray the Fatima Prayer (optional): "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy."</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Continue with Remaining Decades</h3>
          <div className="text-gray-700">
            <p>• Repeat steps 2-3 for each of the remaining 4 mysteries</p>
            <p>• Announce each mystery before praying the decade</p>
            <p>• Continue meditating on each mystery as you pray</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Closing Prayers</h3>
          <div className="text-gray-700 space-y-2">
            <p>• Pray the Hail Holy Queen</p>
            <p>• Pray the Rosary Prayer (optional)</p>
            <p>• Make the Sign of the Cross</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Four Sets of Mysteries</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Joyful Mysteries (Monday & Saturday)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1. The Annunciation</li>
            <li>2. The Visitation</li>
            <li>3. The Nativity</li>
            <li>4. The Presentation</li>
            <li>5. The Finding in the Temple</li>
          </ul>
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sorrowful Mysteries (Tuesday & Friday)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1. The Agony in the Garden</li>
            <li>2. The Scourging at the Pillar</li>
            <li>3. The Crowning with Thorns</li>
            <li>4. The Carrying of the Cross</li>
            <li>5. The Crucifixion</li>
          </ul>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Glorious Mysteries (Wednesday & Sunday)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1. The Resurrection</li>
            <li>2. The Ascension</li>
            <li>3. The Descent of the Holy Spirit</li>
            <li>4. The Assumption</li>
            <li>5. The Coronation</li>
          </ul>
        </div>
        
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Luminous Mysteries (Thursday)</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>1. The Baptism of Jesus</li>
            <li>2. The Wedding at Cana</li>
            <li>3. The Proclamation of the Kingdom</li>
            <li>4. The Transfiguration</li>
            <li>5. The Institution of the Eucharist</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Praying the Rosary</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Start small</strong> - Begin with one decade if the full Rosary seems overwhelming</li>
          <li>• <strong>Find a quiet place</strong> - Minimize distractions to focus on prayer</li>
          <li>• <strong>Use visual aids</strong> - Pictures or icons can help you meditate on the mysteries</li>
          <li>• <strong>Pray with others</strong> - Family Rosary or group prayer can be very powerful</li>
          <li>• <strong>Be patient</strong> - Don't worry if your mind wanders; gently bring it back to the mystery</li>
          <li>• <strong>Offer intentions</strong> - Pray for specific people or needs</li>
          <li>• <strong>Make it a habit</strong> - Try to pray the Rosary daily, even if just one decade</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Rushing through prayers</strong> - Take your time and pray with devotion</li>
          <li>• <strong>Focusing only on the words</strong> - Remember to meditate on the mysteries</li>
          <li>• <strong>Getting discouraged by distractions</strong> - This is normal; keep trying</li>
          <li>• <strong>Thinking it's too complicated</strong> - Start simple and build up</li>
          <li>• <strong>Praying without intention</strong> - Always offer your Rosary for someone or something</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Deepens Relationship with Mary</h3>
          <p className="text-gray-700 text-sm">
            The Rosary helps you grow closer to the Blessed Virgin Mary and seek her intercession.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Meditation on Christ's Life</h3>
          <p className="text-gray-700 text-sm">
            You contemplate the key events in the life of Jesus and Mary, deepening your understanding.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Peace and Calm</h3>
          <p className="text-gray-700 text-sm">
            The repetitive nature of the Rosary brings peace and helps calm the mind and heart.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Powerful Intercession</h3>
          <p className="text-gray-700 text-sm">
            Mary's intercession through the Rosary is one of the most powerful forms of prayer.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Rosary is deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Luke 1:28</strong> - "Hail, full of grace, the Lord is with you" (Angel Gabriel's greeting)</li>
          <li>• <strong>Luke 1:42</strong> - "Blessed are you among women, and blessed is the fruit of your womb" (Elizabeth's greeting)</li>
          <li>• <strong>Matthew 6:9-13</strong> - The Our Father, taught by Jesus Himself</li>
          <li>• <strong>Luke 2:19</strong> - "Mary kept all these things, pondering them in her heart"</li>
          <li>• <strong>John 19:27</strong> - Jesus entrusting Mary to John, and us to Mary</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Rosary helps us to "ponder these things in our hearts" just as Mary did, and to grow in our 
          relationship with both Jesus and His Mother.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/joyful-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Joyful Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Joyful Mysteries of the Rosary, prayed on Monday and Saturday.
                </p>
              </div>
            </div>
          </Link>
          
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