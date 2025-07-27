import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Rosary – Catholic Prayer and Devotion",
  description: "Learn how to pray the Rosary, a powerful Catholic devotion combining prayer and meditation on the life of Jesus and Mary. Complete guide with mysteries and prayers.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/rosary",
  },
  openGraph: {
    title: "The Rosary – Catholic Prayer and Devotion",
    description: "Learn how to pray the Rosary, a powerful Catholic devotion combining prayer and meditation on the life of Jesus and Mary.",
    url: "https://www.catholicbibleonline.com/prayers/rosary",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Rosary – Catholic Prayer and Devotion",
    description: "Learn how to pray the Rosary, a powerful Catholic devotion combining prayer and meditation on the life of Jesus and Mary.",
  },
};

export default function RosaryPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; The Rosary
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">The Rosary – Catholic Prayer and Devotion</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Rosary is one of the most powerful and beloved Catholic prayers, combining vocal prayer with meditation on the mysteries of our salvation. 
        This devotion helps us contemplate the life, death, and resurrection of Jesus Christ through the eyes of His Mother, Mary. 
        The Rosary is a spiritual weapon that brings peace, strength, and grace to those who pray it faithfully.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Rosary</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <h3 className="text-xl font-semibold mb-4">Basic Structure:</h3>
          <ol className="list-decimal list-inside space-y-2 mb-6">
            <li>Begin with the Sign of the Cross</li>
            <li>Pray the Apostles' Creed</li>
            <li>Pray one Our Father</li>
            <li>Pray three Hail Marys (for faith, hope, and charity)</li>
            <li>Pray one Glory Be</li>
            <li>Announce the first mystery and pray one Our Father</li>
            <li>Pray ten Hail Marys while meditating on the mystery</li>
            <li>Pray one Glory Be and the Fatima Prayer</li>
            <li>Repeat steps 6-8 for each of the five mysteries</li>
            <li>End with the Hail, Holy Queen and Sign of the Cross</li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Four Sets of Mysteries</h2>
      
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">Joyful Mysteries (Monday & Saturday)</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>The Annunciation</li>
            <li>The Visitation</li>
            <li>The Nativity</li>
            <li>The Presentation</li>
            <li>The Finding in the Temple</li>
          </ol>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-purple-900 mb-3">Sorrowful Mysteries (Tuesday & Friday)</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>The Agony in the Garden</li>
            <li>The Scourging at the Pillar</li>
            <li>The Crowning with Thorns</li>
            <li>The Carrying of the Cross</li>
            <li>The Crucifixion</li>
          </ol>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-green-900 mb-3">Glorious Mysteries (Wednesday & Sunday)</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>The Resurrection</li>
            <li>The Ascension</li>
            <li>The Descent of the Holy Spirit</li>
            <li>The Assumption</li>
            <li>The Coronation</li>
          </ol>
        </div>
        
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-orange-900 mb-3">Luminous Mysteries (Thursday)</h3>
          <ol className="list-decimal list-inside text-sm space-y-1">
            <li>The Baptism of Jesus</li>
            <li>The Wedding at Cana</li>
            <li>The Proclamation of the Kingdom</li>
            <li>The Transfiguration</li>
            <li>The Institution of the Eucharist</li>
          </ol>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Rosary is more than a series of prayers—it's a way of life that draws us deeper into the mystery of Christ's love. 
          As we pray this Catholic devotion, we walk with Mary through the key moments of Jesus' life, allowing His story to become our story. 
          The repetitive nature of the prayers creates a rhythm that helps us enter into contemplative prayer.
        </p>
        
        <p className="text-gray-700 mb-4">
          Each mystery of the Rosary reveals a different aspect of God's love and invites us to respond with faith, hope, and love. 
          The Joyful Mysteries teach us about God's plan of salvation and Mary's perfect cooperation with His will. 
          The Sorrowful Mysteries help us understand the depth of Christ's love and the cost of our redemption.
        </p>
        
        <p className="text-gray-700 mb-6">
          The Glorious and Luminous Mysteries show us the victory of Christ and the promise of eternal life. 
          Through this prayer, we learn to see our own joys, sorrows, and daily experiences through the lens of faith, 
          finding meaning and purpose in every moment of our lives as we journey toward heaven.
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
          
          <Link href="/prayers/prayer-to-st-michael" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                  Protection Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to St. Michael
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A powerful prayer for protection against evil and spiritual warfare with the great defender of God's people.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 