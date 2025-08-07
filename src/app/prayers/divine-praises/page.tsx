import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Divine Praises – Blessed be God | Mass Prayers | Catholic Bible Online",
  description: "Learn the Divine Praises prayer: 'Blessed be God.' This prayer of praise is traditionally said after Benediction and Eucharistic Adoration. Complete text with meaning.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/divine-praises",
  },
  openGraph: {
    title: "Divine Praises – Blessed be God",
    description: "Learn the Divine Praises prayer traditionally said after Benediction.",
    url: "https://www.catholicbibleonline.com/prayers/divine-praises",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divine Praises – Blessed be God",
    description: "Learn the Divine Praises prayer traditionally said after Benediction.",
  },
};

export default function DivinePraisesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Divine Praises
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙌 Divine Praises – Blessed be God</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Divine Praises is a beautiful prayer of praise and adoration that is traditionally said 
        after Benediction of the Blessed Sacrament and Eucharistic Adoration. This prayer, which 
        begins with "Blessed be God," helps us give proper honor and glory to God, the Blessed 
        Virgin Mary, and all the saints. It is a powerful way to express our love and gratitude 
        for all that God has done for us.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Divine Praises Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Blessed be God.</p>
            <p className="mb-2">Blessed be His Holy Name.</p>
            <p className="mb-2">Blessed be Jesus Christ, true God and true Man.</p>
            <p className="mb-2">Blessed be the Name of Jesus.</p>
            <p className="mb-2">Blessed be His Most Sacred Heart.</p>
            <p className="mb-2">Blessed be His Most Precious Blood.</p>
            <p className="mb-2">Blessed be Jesus in the Most Holy Sacrament of the Altar.</p>
            <p className="mb-2">Blessed be the Holy Spirit, the Paraclete.</p>
            <p className="mb-2">Blessed be the great Mother of God, Mary most Holy.</p>
            <p className="mb-2">Blessed be her Holy and Immaculate Conception.</p>
            <p className="mb-2">Blessed be her Glorious Assumption.</p>
            <p className="mb-2">Blessed be the name of Mary, Virgin and Mother.</p>
            <p className="mb-2">Blessed be St. Joseph, her most chaste spouse.</p>
            <p className="mb-2">Blessed be God in His Angels and in His Saints.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Divine Praises</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>After Benediction</strong> - Traditionally prayed after Benediction of the Blessed Sacrament</li>
          <li>• <strong>After Eucharistic Adoration</strong> - To give thanks and praise after spending time with Jesus</li>
          <li>• <strong>Personal Prayer</strong> - As a daily devotion to praise and honor God</li>
          <li>• <strong>After Mass</strong> - To continue praising God after the celebration of the Eucharist</li>
          <li>• <strong>During Prayer Time</strong> - As part of your daily prayer routine</li>
          <li>• <strong>In Times of Joy</strong> - To express gratitude and praise for God's blessings</li>
          <li>• <strong>As Reparation</strong> - To make reparation for blasphemy and irreverence</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Praise and Adoration</h3>
          <p className="text-gray-700 text-sm">
            The Divine Praises help us give proper praise and adoration to God and all that is holy.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reparation</h3>
          <p className="text-gray-700 text-sm">
            It serves as an act of reparation for blasphemy and irreverence against God and holy things.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Gratitude</h3>
          <p className="text-gray-700 text-sm">
            It expresses our gratitude for all the gifts and blessings God has given us.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Devotion</h3>
          <p className="text-gray-700 text-sm">
            It helps us grow in devotion to God, Mary, and the saints.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Divine Praises has an interesting historical origin:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>18th Century Origin</strong> - The prayer was composed in the 18th century</li>
          <li>• <strong>Reparation for Blasphemy</strong> - It was created as an act of reparation for blasphemy</li>
          <li>• <strong>Papal Approval</strong> - It received papal approval and became widely used</li>
          <li>• <strong>Liturgical Use</strong> - It became a standard part of Benediction services</li>
          <li>• <strong>Popular Devotion</strong> - It has been embraced by the faithful as a beautiful prayer of praise</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Divine Praises was originally created to make reparation for blasphemy and has since 
          become a beloved prayer of praise and adoration.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Divine Praises is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>Psalm 113:2</strong> - "Blessed be the name of the Lord from this time forth and for evermore"</li>
            <li>• <strong>Luke 1:42</strong> - "Blessed are you among women, and blessed is the fruit of your womb"</li>
            <li>• <strong>Psalm 145:21</strong> - "My mouth will speak the praise of the Lord"</li>
            <li>• <strong>Revelation 5:12</strong> - "Worthy is the Lamb who was slain to receive power and wealth and wisdom"</li>
            <li>• <strong>Psalm 150:6</strong> - "Let everything that breathes praise the Lord"</li>
          </ul>
          
          <p className="mb-4">
            The Divine Praises follows the biblical pattern of giving praise and blessing to God 
            and all that is holy and good.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Praise and Worship</h3>
          <p className="text-gray-700 text-sm">
            The Divine Praises helps us give proper praise and worship to God and all that is holy.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Reparation</h3>
          <p className="text-gray-700 text-sm">
            It serves as an act of reparation for sins against God and holy things.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Gratitude</h3>
          <p className="text-gray-700 text-sm">
            It helps us express gratitude for all of God's gifts and blessings.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Devotion</h3>
          <p className="text-gray-700 text-sm">
            It strengthens our devotion to God, Mary, and the saints.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Divine Praises</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With reverence</strong> - Pray this prayer with deep reverence and respect for God</li>
          <li>• <strong>With gratitude</strong> - Express your gratitude for all of God's gifts and blessings</li>
          <li>• <strong>With love</strong> - Pray with love for God, Mary, and the saints</li>
          <li>• <strong>With devotion</strong> - Make this prayer an expression of your devotion and faith</li>
          <li>• <strong>With reparation</strong> - Offer it as an act of reparation for sins against God</li>
          <li>• <strong>With joy</strong> - Pray with joy and enthusiasm for the opportunity to praise God</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/prayer-holy-spirit" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer to the Holy Spirit
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Come, Holy Spirit - invocation.
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