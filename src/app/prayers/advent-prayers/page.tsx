import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from '@/components/ShareButton';

export const metadata: Metadata = {
  title: "Advent Prayers – Preparation for Christmas | Catholic Bible Online",
  description: "Beautiful Advent prayers to prepare your heart for the coming of Christ. Discover traditional and contemporary prayers for the season of waiting and hope.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/advent-prayers",
  },
  openGraph: {
    title: "Advent Prayers – Preparation for Christmas",
    description: "Beautiful Advent prayers to prepare your heart for the coming of Christ.",
    url: "https://www.catholicbibleonline.com/prayers/advent-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advent Prayers – Preparation for Christmas",
    description: "Beautiful Advent prayers to prepare your heart for the coming of Christ.",
  },
};

export default function AdventPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        Advent Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕯️ Advent Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Advent is a season of joyful anticipation and spiritual preparation for the coming of Christ. 
        These prayers help us cultivate the virtues of hope, patience, and watchfulness as we await 
        the celebration of Jesus' birth and prepare for His second coming.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advent Prayer of Preparation</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as we begin this Advent season, prepare our hearts to receive You with joy and love.
          </p>
          <p className="mb-4">
            Help us to wait with patience and hope, remembering Your promise to come again.
          </p>
          <p className="mb-4">
            Open our eyes to see Your presence in our daily lives and in those around us.
          </p>
          <p className="mb-4">
            Fill us with Your peace and prepare us to welcome You with open hearts and minds.
          </p>
          <p className="font-semibold">
            Come, Lord Jesus, come. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Advent Wreath Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            O God, by whose word all things are sanctified, pour forth Your blessing upon this wreath,
          </p>
          <p className="mb-4">
            and grant that we who use it may prepare our hearts for the coming of Christ
          </p>
          <p className="mb-4">
            and may receive from You abundant graces.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Each Week of Advent</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">First Week of Advent - Hope</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord, as we light this first candle of Advent, we pray for the gift of hope. 
            Help us to trust in Your promises and to look forward with confidence to Your coming. 
            May this season remind us that You are always with us, even in our darkest moments.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Second Week of Advent - Peace</h3>
          <p className="text-gray-800 leading-relaxed">
            Prince of Peace, as we light this second candle, we pray for the gift of peace. 
            Bring peace to our hearts, our families, and our world. Help us to be instruments of Your peace 
            in all that we do and say.
          </p>
        </div>

        <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-pink-900 mb-3">Third Week of Advent - Joy</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord of Joy, as we light this third candle, we pray for the gift of joy. 
            Fill our hearts with the joy that comes from knowing You and from sharing Your love with others. 
            May our joy be a witness to Your presence in our lives.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-red-900 mb-3">Fourth Week of Advent - Love</h3>
          <p className="text-gray-800 leading-relaxed">
            God of Love, as we light this fourth candle, we pray for the gift of love. 
            Help us to love as You love, with patience, kindness, and selflessness. 
            May our love for You and for others grow stronger each day.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Advent is a time of spiritual preparation that calls us to reflect on the three comings of Christ: 
          His historical birth in Bethlehem, His coming into our hearts through grace, and His future coming in glory.
        </p>
        
        <p className="text-gray-700 mb-4">
          The Advent season teaches us the virtue of waiting—not passive waiting, but active preparation. 
          Just as John the Baptist prepared the way for Jesus, we are called to prepare our hearts and lives 
          to receive Christ more fully.
        </p>
        
        <p className="text-gray-700 mb-6">
          These prayers help us cultivate the spiritual dispositions that make us ready to welcome Jesus: 
          hope that sustains us in difficult times, peace that calms our anxieties, joy that lifts our spirits, 
          and love that transforms our relationships. Through prayer, we open ourselves to God's grace 
          and become more receptive to His presence in our lives.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/christmas-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Christmas Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Celebrate the birth of Jesus Christ with these beautiful Christmas prayers and devotions.
                </p>
              </div>
            </div>
          </Link>
          
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
                  The prayer that Jesus taught us, perfect for daily prayer during Advent preparation.
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
                  Join with Mary in preparing for the coming of her Son with this beloved prayer.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Share Section */}
      <section className="mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this prayer</h2>
          <ShareButton 
            title="Advent Prayers" 
            url="/prayers/advent-prayers"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section>
    </main>
  );
} 