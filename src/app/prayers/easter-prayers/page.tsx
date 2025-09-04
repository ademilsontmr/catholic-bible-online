import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Easter Prayers – Celebrating the Resurrection | Catholic Bible Online",
  description: "Joyful Easter prayers to celebrate the Resurrection of Jesus Christ. Discover traditional and contemporary prayers for the Easter season and the triumph of life over death.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/easter-prayers",
  },
  openGraph: {
    title: "Easter Prayers – Celebrating the Resurrection",
    description: "Joyful Easter prayers to celebrate the Resurrection of Jesus Christ.",
    url: "https://www.catholicbibleonline.com/prayers/easter-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easter Prayers – Celebrating the Resurrection",
    description: "Joyful Easter prayers to celebrate the Resurrection of Jesus Christ.",
  },
};

export default function EasterPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        Easter Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🐰 Easter Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Easter is the greatest celebration of the Christian faith—the triumph of life over death, 
        light over darkness, and love over sin. These prayers help us to rejoice in the Resurrection 
        of Jesus Christ and to embrace the new life He offers us.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Easter Prayer of Joy</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Alleluia! Christ is risen! The Lord is risen indeed! Alleluia!
          </p>
          <p className="mb-4">
            Lord Jesus, we rejoice in Your glorious Resurrection and the victory You have won for us.
          </p>
          <p className="mb-4">
            Thank You for conquering sin and death and for giving us the promise of eternal life.
          </p>
          <p className="mb-4">
            Help us to live as Easter people, filled with Your joy and spreading Your love to all we meet.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Easter Morning Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, on this Easter morning, we celebrate Your Resurrection with hearts full of joy.
          </p>
          <p className="mb-4">
            You have risen from the dead, just as You promised, and have opened the gates of heaven for us.
          </p>
          <p className="mb-4">
            Help us to live this day and every day in the light of Your Resurrection,
          </p>
          <p className="mb-4">
            knowing that nothing can separate us from Your love.
          </p>
          <p className="font-semibold">
            Alleluia! Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer of Thanksgiving for New Life</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Heavenly Father, we thank You for the gift of Your Son, Jesus Christ,
          </p>
          <p className="mb-4">
            who died for our sins and rose again to give us new life.
          </p>
          <p className="mb-4">
            Thank You for the hope and joy that His Resurrection brings to our lives.
          </p>
          <p className="mb-4">
            Help us to be witnesses of Your love and to share the good news of salvation with others.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for the Easter Season</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-yellow-900 mb-3">Prayer for Hope</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, Your Resurrection fills us with hope that no matter how dark our circumstances may be, 
            new life and light are always possible. Help us to trust in Your promises and to believe 
            that You are always working for our good.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for Renewal</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, just as You rose to new life, help us to rise from our old ways and habits. 
            Grant us the grace to leave behind sin and to embrace the new life You offer us. 
            Transform our hearts and make us more like You.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for Mission</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as You appeared to Your disciples after Your Resurrection, 
            help us to recognize Your presence in our lives and to be Your witnesses in the world. 
            Give us the courage to share the good news of Your love and salvation.
          </p>
        </div>

        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Prayer for Peace</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, Your first words to Your disciples after Your Resurrection were "Peace be with you." 
            Grant us Your peace that surpasses all understanding. Help us to be instruments of Your peace 
            in our families, communities, and the world.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Easter Blessing Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            May the joy of the Risen Christ fill your hearts with peace and love.
          </p>
          <p className="mb-4">
            May His light shine in your lives and guide you on your journey of faith.
          </p>
          <p className="mb-4">
            May you experience the power of His Resurrection and the hope of eternal life.
          </p>
          <p className="mb-4">
            And may the blessing of Almighty God, Father, Son, and Holy Spirit,
          </p>
          <p className="mb-4">
            descend upon you and remain with you always.
          </p>
          <p className="font-semibold">
            Alleluia! Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Easter is the foundation of our Christian faith—the event that gives meaning to everything else. 
          Without the Resurrection, our faith would be in vain, but because Christ has risen, we have hope 
          for eternal life and the power to live as His disciples.
        </p>
        
        <p className="text-gray-700 mb-4">
          The Resurrection of Jesus is not just a historical event but a present reality that transforms our lives. 
          It gives us the courage to face our own crosses, knowing that suffering and death are not the end. 
          It fills us with joy and hope, even in the midst of difficulties.
        </p>
        
        <p className="text-gray-700 mb-6">
          These Easter prayers help us to celebrate the Resurrection with joy and gratitude. They remind us 
          that we are Easter people, called to live in the light of Christ's victory over death. Through these prayers, 
          we can experience the power of the Resurrection in our own lives and be transformed by God's love.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/pentecost-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Pentecost Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Celebrate the descent of the Holy Spirit with these powerful Pentecost prayers.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/holy-week-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Holy Week Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Walk with Christ through His passion and death with these Holy Week prayers.
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
            title="Easter Prayers" 
            url="/prayers/easter-prayers"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 