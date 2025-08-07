import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sanctus – Holy, Holy, Holy | Mass Prayers | Catholic Bible Online",
  description: "Learn the Sanctus prayer: 'Holy, Holy, Holy.' This acclamation is sung during Mass before the consecration. Complete text in Latin and English with biblical foundation.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/sanctus",
  },
  openGraph: {
    title: "Sanctus – Holy, Holy, Holy",
    description: "Learn the Sanctus prayer sung during Mass before the consecration.",
    url: "https://www.catholicbibleonline.com/prayers/sanctus",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanctus – Holy, Holy, Holy",
    description: "Learn the Sanctus prayer sung during Mass before the consecration.",
  },
};

export default function SanctusPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Sanctus
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">👑 Sanctus – Holy, Holy, Holy</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Sanctus is one of the most sacred and beautiful prayers of the Mass. This acclamation, 
        meaning "Holy, Holy, Holy," is sung during the Eucharistic Prayer, just before the consecration. 
        It combines the angelic praise from Isaiah's vision with the crowd's welcome of Jesus at His 
        triumphal entry into Jerusalem, creating a powerful moment of worship.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Sanctus Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Sanctus, Sanctus, Sanctus</p>
            <p className="mb-2">Dominus Deus Sabaoth.</p>
            <p className="mb-2">Pleni sunt caeli et terra gloria tua.</p>
            <p className="mb-2">Hosanna in excelsis.</p>
            <p className="mb-2">Benedictus qui venit in nomine Domini.</p>
            <p className="mb-2">Hosanna in excelsis.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Holy, Holy, Holy</p>
            <p className="mb-2">Lord God of hosts.</p>
            <p className="mb-2">Heaven and earth are full of your glory.</p>
            <p className="mb-2">Hosanna in the highest.</p>
            <p className="mb-2">Blessed is he who comes in the name of the Lord.</p>
            <p className="mb-2">Hosanna in the highest.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Sanctus is Sung</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - In the Eucharistic Prayer, just before the consecration</li>
          <li>• <strong>Every Mass</strong> - The Sanctus is sung at every Mass, regardless of the day</li>
          <li>• <strong>Liturgy of the Hours</strong> - In the Divine Office and other liturgical celebrations</li>
          <li>• <strong>Adoration</strong> - During Eucharistic Adoration services</li>
          <li>• <strong>Personal Prayer</strong> - As a prayer of praise and adoration</li>
          <li>• <strong>Before Communion</strong> - To prepare our hearts for receiving Christ</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Sanctus is directly taken from Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>Isaiah 6:3</strong> - "Holy, holy, holy is the Lord of hosts; the whole earth is full of his glory"</li>
            <li>• <strong>Matthew 21:9</strong> - "Hosanna to the Son of David! Blessed is he who comes in the name of the Lord! Hosanna in the highest!"</li>
            <li>• <strong>Mark 11:9-10</strong> - "Hosanna! Blessed is he who comes in the name of the Lord!"</li>
            <li>• <strong>Psalm 118:26</strong> - "Blessed is he who comes in the name of the Lord!"</li>
            <li>• <strong>Revelation 4:8</strong> - "Holy, holy, holy, is the Lord God Almighty"</li>
          </ul>
          
          <p className="mb-4">
            The Sanctus combines the angelic praise from Isaiah's vision with the crowd's welcome of Jesus 
            at His triumphal entry, creating a bridge between the Old and New Testaments.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trinity</h3>
          <p className="text-gray-700 text-sm">
            The threefold "Holy" is often interpreted as a reference to the Trinity - Father, Son, and Holy Spirit.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Majesty</h3>
          <p className="text-gray-700 text-sm">
            "Lord God of hosts" acknowledges God's power and authority over all creation.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Praise</h3>
          <p className="text-gray-700 text-sm">
            "Heaven and earth are full of your glory" recognizes that all creation praises God.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Messianic Welcome</h3>
          <p className="text-gray-700 text-sm">
            "Blessed is he who comes" welcomes Christ's presence in the Eucharist.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Sanctus has a rich liturgical history:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Early Church</strong> - The Sanctus was used in the early Church as part of the Eucharistic Prayer</li>
          <li>• <strong>Jewish Roots</strong> - The prayer has roots in Jewish liturgical tradition</li>
          <li>• <strong>Liturgical Development</strong> - It became a standard part of all Eucharistic Prayers</li>
          <li>• <strong>Musical Tradition</strong> - The Sanctus has inspired countless musical settings</li>
          <li>• <strong>Ecumenical Prayer</strong> - It is used by many Christian denominations</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Sanctus is one of the most ancient prayers in the Christian liturgy, connecting us with 
          the worship of the early Church and the heavenly liturgy described in Revelation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Adoration</h3>
          <p className="text-gray-700 text-sm">
            The Sanctus helps us adore God with the same words used by the angels in heaven.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation</h3>
          <p className="text-gray-700 text-sm">
            It prepares our hearts for the consecration and the coming of Christ in the Eucharist.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Unity</h3>
          <p className="text-gray-700 text-sm">
            We join our voices with the angels and saints in praising God.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reverence</h3>
          <p className="text-gray-700 text-sm">
            The Sanctus helps us approach the Eucharist with proper reverence and awe.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Sanctus</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With reverence</strong> - Approach this prayer with deep reverence for God's holiness</li>
          <li>• <strong>With joy</strong> - Sing or pray with joy, as the angels do in heaven</li>
          <li>• <strong>With understanding</strong> - Reflect on the meaning of each phrase</li>
          <li>• <strong>With unity</strong> - Join your voice with the entire Church and the angels</li>
          <li>• <strong>With preparation</strong> - Use this prayer to prepare for receiving Christ</li>
          <li>• <strong>With awe</strong> - Be filled with awe at God's majesty and glory</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/memorial-acclamation" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Memorial Acclamation
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Christ has died, Christ is risen, Christ will come again.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/gloria-in-excelsis" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Gloria in Excelsis
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Glory to God in the highest - hymn of praise.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/agnus-dei" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Agnus Dei
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lamb of God - prayer before Communion.
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