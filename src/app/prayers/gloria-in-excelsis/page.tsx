import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gloria in Excelsis – Glory to God in the Highest | Mass Prayers | Catholic Bible Online",
  description: "Learn the Gloria in Excelsis prayer: 'Glory to God in the highest.' This ancient hymn of praise is sung during Mass on Sundays and feast days. Complete text in Latin and English.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/gloria-in-excelsis",
  },
  openGraph: {
    title: "Gloria in Excelsis – Glory to God in the Highest",
    description: "Learn the Gloria in Excelsis prayer sung during Mass on Sundays and feast days.",
    url: "https://www.catholicbibleonline.com/prayers/gloria-in-excelsis",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gloria in Excelsis – Glory to God in the Highest",
    description: "Learn the Gloria in Excelsis prayer sung during Mass on Sundays and feast days.",
  },
};

export default function GloriaInExcelsisPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Gloria in Excelsis
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✨ Gloria in Excelsis – Glory to God in the Highest</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Gloria in Excelsis, also known as the "Greater Doxology," is one of the most beautiful and 
        ancient hymns of the Christian Church. This magnificent prayer of praise is sung during Mass 
        on Sundays (outside of Advent and Lent) and on feast days. It begins with the words of the 
        angels at the birth of Christ and continues with a profound hymn of praise to the Trinity.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Gloria in Excelsis Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Gloria in excelsis Deo</p>
            <p className="mb-2">et in terra pax hominibus bonae voluntatis.</p>
            <p className="mb-2">Laudamus te,</p>
            <p className="mb-2">benedicimus te,</p>
            <p className="mb-2">adoramus te,</p>
            <p className="mb-2">glorificamus te,</p>
            <p className="mb-2">gratias agimus tibi propter magnam gloriam tuam,</p>
            <p className="mb-2">Domine Deus, Rex caelestis,</p>
            <p className="mb-2">Deus Pater omnipotens.</p>
            <p className="mb-2">Domine Fili unigenite, Iesu Christe,</p>
            <p className="mb-2">Domine Deus, Agnus Dei, Filius Patris,</p>
            <p className="mb-2">qui tollis peccata mundi, miserere nobis;</p>
            <p className="mb-2">qui tollis peccata mundi, suscipe deprecationem nostram.</p>
            <p className="mb-2">Qui sedes ad dexteram Patris, miserere nobis.</p>
            <p className="mb-2">Quoniam tu solus Sanctus,</p>
            <p className="mb-2">tu solus Dominus,</p>
            <p className="mb-2">tu solus Altissimus, Iesu Christe,</p>
            <p className="mb-2">cum Sancto Spiritu in gloria Dei Patris.</p>
            <p className="mb-2">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Glory to God in the highest,</p>
            <p className="mb-2">and on earth peace to people of good will.</p>
            <p className="mb-2">We praise you,</p>
            <p className="mb-2">we bless you,</p>
            <p className="mb-2">we adore you,</p>
            <p className="mb-2">we glorify you,</p>
            <p className="mb-2">we give you thanks for your great glory,</p>
            <p className="mb-2">Lord God, heavenly King,</p>
            <p className="mb-2">O God, almighty Father.</p>
            <p className="mb-2">Lord Jesus Christ, Only Begotten Son,</p>
            <p className="mb-2">Lord God, Lamb of God, Son of the Father,</p>
            <p className="mb-2">you take away the sins of the world, have mercy on us;</p>
            <p className="mb-2">you take away the sins of the world, receive our prayer;</p>
            <p className="mb-2">you are seated at the right hand of the Father, have mercy on us.</p>
            <p className="mb-2">For you alone are the Holy One,</p>
            <p className="mb-2">you alone are the Lord,</p>
            <p className="mb-2">you alone are the Most High, Jesus Christ,</p>
            <p className="mb-2">with the Holy Spirit, in the glory of God the Father.</p>
            <p className="mb-2">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Gloria is Sung</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Sundays</strong> - Outside of Advent and Lent (seasons of penance)</li>
          <li>• <strong>Feast Days</strong> - On solemnities and feasts of the Lord</li>
          <li>• <strong>Easter Season</strong> - Throughout the Easter season</li>
          <li>• <strong>Christmas Season</strong> - During the Christmas season</li>
          <li>• <strong>Weddings</strong> - During wedding Masses</li>
          <li>• <strong>Ordinations</strong> - During ordination Masses</li>
          <li>• <strong>Dedications</strong> - During church dedication Masses</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Structure and Meaning</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Opening (Luke 2:14)</h3>
          <p className="text-gray-700">
            "Glory to God in the highest, and on earth peace to people of good will" - These are the words 
            of the angels announcing the birth of Christ to the shepherds.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Praise to the Father</h3>
          <p className="text-gray-700">
            "We praise you, we bless you, we adore you, we glorify you" - This section gives glory to God 
            the Father, acknowledging His greatness and majesty.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Praise to Christ</h3>
          <p className="text-gray-700">
            "Lord Jesus Christ, Only Begotten Son" - This section focuses on Christ, recognizing Him as 
            the Lamb of God who takes away the sins of the world.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trinitarian Conclusion</h3>
          <p className="text-gray-700">
            "For you alone are the Holy One" - The prayer concludes with a doxology to the Trinity, 
            giving glory to Father, Son, and Holy Spirit.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Gloria in Excelsis has a rich history in the Christian tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Biblical Origin</strong> - The opening words come directly from Luke 2:14, the angelic announcement at Bethlehem</li>
          <li>• <strong>Early Church</strong> - The Gloria was used in the early Church as a morning hymn</li>
          <li>• <strong>Eastern Tradition</strong> - It was first used in the Eastern Church and later adopted by the West</li>
          <li>• <strong>Liturgical Development</strong> - It became a standard part of the Mass, originally sung only by bishops</li>
          <li>• <strong>Musical Tradition</strong> - The Gloria has inspired countless musical settings throughout history</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Gloria is one of the most musically rich parts of the Mass, with composers from Palestrina 
          to Mozart creating beautiful settings of this ancient hymn.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Gloria in Excelsis is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>Luke 2:14</strong> - "Glory to God in the highest, and on earth peace among men with whom he is pleased!"</li>
            <li>• <strong>Psalm 148:1</strong> - "Praise the Lord! Praise the Lord from the heavens, praise him in the heights!"</li>
            <li>• <strong>Revelation 4:8</strong> - "Holy, holy, holy, is the Lord God Almighty"</li>
            <li>• <strong>John 1:29</strong> - "Behold, the Lamb of God, who takes away the sin of the world!"</li>
            <li>• <strong>Philippians 2:9-11</strong> - "Therefore God has highly exalted him and bestowed on him the name which is above every name"</li>
          </ul>
          
          <p className="mb-4">
            The Gloria combines the angelic praise from the Nativity with the Church's ongoing hymn of 
            praise to the Trinity, creating a bridge between heaven and earth.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Praise and Worship</h3>
          <p className="text-gray-700 text-sm">
            The Gloria helps us give proper praise and worship to God, acknowledging His greatness and majesty.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trinitarian Faith</h3>
          <p className="text-gray-700 text-sm">
            It strengthens our understanding and appreciation of the Trinity - Father, Son, and Holy Spirit.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Joy and Celebration</h3>
          <p className="text-gray-700 text-sm">
            The Gloria fills us with joy and reminds us of the celebration of Christ's birth and resurrection.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Unity with Angels</h3>
          <p className="text-gray-700 text-sm">
            We join our voices with the angels in praising God, creating a connection between heaven and earth.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Gloria</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With joy</strong> - Sing or pray the Gloria with joy and enthusiasm</li>
          <li>• <strong>With reverence</strong> - Approach this prayer with reverence for God's majesty</li>
          <li>• <strong>With understanding</strong> - Reflect on the meaning of each phrase as you pray</li>
          <li>• <strong>With gratitude</strong> - Give thanks for God's great glory and mercy</li>
          <li>• <strong>With unity</strong> - Join your voice with the entire Church in praising God</li>
          <li>• <strong>With devotion</strong> - Make this prayer a true expression of your love for God</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/kyrie-eleison" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Kyrie Eleison
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lord, have mercy - penitential prayer.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/divine-praises" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Divine Praises
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Blessed be God - prayers of praise.
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