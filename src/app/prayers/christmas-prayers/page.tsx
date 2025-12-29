import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Christmas Prayers – Celebrating the Birth of Christ | Catholic Bible Online",
  description: "Beautiful Christmas prayers to celebrate the birth of Jesus Christ. Discover traditional and contemporary prayers for the Christmas season.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/christmas-prayers",
  },
  openGraph: {
    title: "Christmas Prayers – Celebrating the Birth of Christ",
    description: "Beautiful Christmas prayers to celebrate the birth of Jesus Christ.",
    url: "https://www.catholicbibleonline.com/prayers/christmas-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christmas Prayers – Celebrating the Birth of Christ",
    description: "Beautiful Christmas prayers to celebrate the birth of Jesus Christ.",
  },
};

export default function ChristmasPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        Christmas Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🎄 Christmas Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Christmas is a time of joy and celebration as we commemorate the birth of our Savior, Jesus Christ. 
        These prayers help us reflect on the mystery of the Incarnation and express our gratitude for God's 
        greatest gift to humanity.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Christmas Prayer of Thanksgiving</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O God, who wonderfully created us and even more wonderfully restored our human nature,
          </p>
          <p className="mb-4">
            grant that we may share in the divinity of Christ, who humbled Himself to share in our humanity.
          </p>
          <p className="mb-4">
            We thank You for the gift of Your Son, born of the Virgin Mary,
          </p>
          <p className="mb-4">
            who came to save us and bring us eternal life.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to the Infant Jesus</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Dear Infant Jesus, lying in the manger, we adore You with all our hearts.
          </p>
          <p className="mb-4">
            You have come to us as a little child to show us the way of love and humility.
          </p>
          <p className="mb-4">
            Help us to welcome You into our hearts and to share Your love with others.
          </p>
          <p className="mb-4">
            May Your birth bring peace and joy to our families and to the whole world.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Christmas Blessing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            May the peace of the Christ Child be with you and your family this Christmas.
          </p>
          <p className="mb-4">
            May His love fill your hearts with joy and His light guide your path.
          </p>
          <p className="mb-4">
            May you experience the wonder of His birth and the hope of His promises.
          </p>
          <p className="mb-4">
            And may the blessing of Almighty God, Father, Son, and Holy Spirit,
          </p>
          <p className="mb-4">
            descend upon you and remain with you always.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for Christmas Day</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Morning Prayer</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, on this Christmas morning, we rejoice in Your birth. 
            Thank You for coming into our world to bring us salvation and hope. 
            Help us to celebrate this day with grateful hearts and to share Your love with everyone we meet.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Family Prayer</h3>
          <p className="text-gray-800 leading-relaxed">
            Heavenly Father, we thank You for the gift of family and for this time together. 
            As we celebrate the birth of Your Son, help us to grow in love for one another 
            and to be a witness of Your love to the world.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Evening Prayer</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as this Christmas day comes to an end, we thank You for the joy and peace 
            You have brought into our lives. Help us to carry the light of Your love into tomorrow 
            and every day of our lives.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Christmas celebrates the mystery of the Incarnation—God becoming human in the person of Jesus Christ. 
          This extraordinary event reveals God's infinite love for humanity and His desire to be close to us.
        </p>
        
        <p className="text-gray-700 mb-4">
          The birth of Jesus in a humble stable teaches us about humility, simplicity, and the value of every human life. 
          It reminds us that God often works through the most ordinary and unexpected circumstances to accomplish His divine plan.
        </p>
        
        <p className="text-gray-700 mb-6">
          These Christmas prayers help us to enter more deeply into the mystery of Christ's birth and to respond 
          with gratitude, joy, and love. They remind us that Christmas is not just a historical event but a present reality— 
          Christ continues to be born in our hearts when we welcome Him with faith and love.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/advent-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Advent Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prepare your heart for Christmas with these beautiful Advent prayers and devotions.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Honor the Blessed Virgin Mary, the Mother of God, with this beloved prayer.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/glory-be" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Glory Be
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Give glory to the Holy Trinity with this traditional Catholic prayer.
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
            title="Christmas Prayers" 
            url="/prayers/christmas-prayers"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 