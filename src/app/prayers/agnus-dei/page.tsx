import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Agnus Dei – Lamb of God | Mass Prayers | Catholic Bible Online",
  description: "Learn the Agnus Dei prayer: 'Lamb of God, who takes away the sins of the world.' This prayer is sung during Mass before Communion. Complete text in Latin and English.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/agnus-dei",
  },
  openGraph: {
    title: "Agnus Dei – Lamb of God",
    description: "Learn the Agnus Dei prayer sung during Mass before Communion.",
    url: "https://www.catholicbibleonline.com/prayers/agnus-dei",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agnus Dei – Lamb of God",
    description: "Learn the Agnus Dei prayer sung during Mass before Communion.",
  },
};

export default function AgnusDeiPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Agnus Dei
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🐑 Agnus Dei – Lamb of God</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Agnus Dei is a beautiful and profound prayer that is sung during Mass just before the 
        distribution of Holy Communion. This prayer addresses Jesus as the "Lamb of God" who takes 
        away the sins of the world, recalling both the Passover lamb of the Old Testament and the 
        sacrificial love of Christ on the Cross. It is a moment of preparation and supplication as 
        we prepare to receive the Eucharist.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Agnus Dei Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Agnus Dei, qui tollis peccata mundi,</p>
            <p className="mb-2">miserere nobis.</p>
            <p className="mb-2">Agnus Dei, qui tollis peccata mundi,</p>
            <p className="mb-2">miserere nobis.</p>
            <p className="mb-2">Agnus Dei, qui tollis peccata mundi,</p>
            <p className="mb-2">dona nobis pacem.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Lamb of God, who takes away the sins of the world,</p>
            <p className="mb-2">have mercy on us.</p>
            <p className="mb-2">Lamb of God, who takes away the sins of the world,</p>
            <p className="mb-2">have mercy on us.</p>
            <p className="mb-2">Lamb of God, who takes away the sins of the world,</p>
            <p className="mb-2">grant us peace.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Agnus Dei is Sung</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - Just before the distribution of Holy Communion</li>
          <li>• <strong>Every Mass</strong> - The Agnus Dei is sung at every Mass</li>
          <li>• <strong>After the Sign of Peace</strong> - It follows the exchange of peace</li>
            <li>• <strong>Before Communion</strong> - It prepares us to receive the Eucharist</li>
          <li>• <strong>Liturgy of the Hours</strong> - In the Divine Office and other liturgical celebrations</li>
          <li>• <strong>Personal Prayer</strong> - As a prayer for mercy and peace</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Agnus Dei is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>John 1:29</strong> - "Behold, the Lamb of God, who takes away the sin of the world!"</li>
            <li>• <strong>John 1:36</strong> - "Behold, the Lamb of God!"</li>
            <li>• <strong>Revelation 5:6</strong> - "And I saw a Lamb standing, as though it had been slain"</li>
            <li>• <strong>Isaiah 53:7</strong> - "Like a lamb that is led to the slaughter"</li>
            <li>• <strong>1 Peter 1:19</strong> - "With the precious blood of Christ, like that of a lamb without blemish or spot"</li>
            <li>• <strong>Exodus 12:3-13</strong> - The Passover lamb that saved the Israelites</li>
          </ul>
          
          <p className="mb-4">
            The Agnus Dei connects the Old Testament Passover lamb with Christ, the true Lamb of God 
            who offers Himself for the salvation of the world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Sacrificial Love</h3>
          <p className="text-gray-700 text-sm">
            The Agnus Dei reminds us of Christ's sacrificial love and His willingness to die for our sins.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Mercy</h3>
          <p className="text-gray-700 text-sm">
            It expresses our need for God's mercy and our trust in Christ's power to forgive sins.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation</h3>
          <p className="text-gray-700 text-sm">
            It helps us prepare our hearts to receive the Eucharist worthily and with proper reverence.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Peace</h3>
          <p className="text-gray-700 text-sm">
            The final petition asks for peace, which is the fruit of Christ's sacrifice and our reconciliation with God.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Agnus Dei has a rich liturgical history:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Early Church</strong> - The prayer was used in the early Church as a preparation for Communion</li>
          <li>• <strong>Pope Sergius I</strong> - It was introduced into the Mass by Pope Sergius I in the 7th century</li>
          <li>• <strong>Liturgical Development</strong> - It became a standard part of the Mass during the Middle Ages</li>
          <li>• <strong>Musical Tradition</strong> - The Agnus Dei has inspired countless musical settings</li>
          <li>• <strong>Ecumenical Prayer</strong> - It is used by many Christian denominations</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Agnus Dei is one of the most musically rich parts of the Mass, with composers from 
          Palestrina to Mozart creating beautiful settings of this prayer.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation for Communion</h3>
          <p className="text-gray-700 text-sm">
            The Agnus Dei helps us prepare our hearts and minds to receive the Eucharist worthily.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Recognition of Sin</h3>
          <p className="text-gray-700 text-sm">
            It reminds us of our need for forgiveness and Christ's power to take away our sins.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in Mercy</h3>
          <p className="text-gray-700 text-sm">
            It strengthens our trust in God's mercy and Christ's willingness to forgive us.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Peace</h3>
          <p className="text-gray-700 text-sm">
            It helps us receive the peace that comes from being reconciled with God through Christ.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Agnus Dei</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With humility</strong> - Approach this prayer with humility, recognizing your need for mercy</li>
          <li>• <strong>With faith</strong> - Believe in Christ's power to take away your sins</li>
          <li>• <strong>With preparation</strong> - Use this prayer to prepare your heart for Communion</li>
          <li>• <strong>With gratitude</strong> - Thank Christ for His sacrificial love and mercy</li>
          <li>• <strong>With hope</strong> - Trust in Christ's promise to grant you peace</li>
          <li>• <strong>With reverence</strong> - Approach this moment with reverence for the Eucharist</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/spiritual-communion" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Spiritual Communion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer when unable to receive Communion.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/anima-christi" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Anima Christi
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Soul of Christ - prayer after Communion.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/sanctus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Sanctus
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Holy, Holy, Holy - acclamation before consecration.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/mass"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Mass Prayers
        </Link>
      </div>
    </main>
  );
} 