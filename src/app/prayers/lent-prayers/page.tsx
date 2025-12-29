import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Lent Prayers – Season of Penance and Preparation | Catholic Bible Online",
  description: "Powerful Lent prayers for the season of penance, prayer, and preparation for Easter. Discover traditional and contemporary prayers for spiritual renewal.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/lent-prayers",
  },
  openGraph: {
    title: "Lent Prayers – Season of Penance and Preparation",
    description: "Powerful Lent prayers for the season of penance, prayer, and preparation for Easter.",
    url: "https://www.catholicbibleonline.com/prayers/lent-prayers",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lent Prayers – Season of Penance and Preparation",
    description: "Powerful Lent prayers for the season of penance, prayer, and preparation for Easter.",
  },
};

export default function LentPrayersPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/seasonal" className="hover:underline">Seasonal</Link> &gt; 
        Lent Prayers
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🟣 Lent Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Lent is a sacred season of forty days dedicated to prayer, fasting, and almsgiving. 
        These prayers help us to repent of our sins, grow closer to God, and prepare our hearts 
        for the celebration of Easter and the Resurrection of Jesus Christ.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lent Prayer of Repentance</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, during this holy season of Lent, we come before You with repentant hearts.
          </p>
          <p className="mb-4">
            We acknowledge our sins and ask for Your mercy and forgiveness.
          </p>
          <p className="mb-4">
            Help us to turn away from sin and to turn toward You with renewed faith and love.
          </p>
          <p className="mb-4">
            Grant us the grace to live as Your faithful disciples, following Your example of self-sacrifice and love.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer for Ash Wednesday</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Almighty and everlasting God, You despise nothing You have made and forgive the sins of all who are penitent.
          </p>
          <p className="mb-4">
            Create and make in us new and contrite hearts, that we, worthily lamenting our sins
          </p>
          <p className="mb-4">
            and acknowledging our wretchedness, may obtain of You, the God of all mercy,
          </p>
          <p className="mb-4">
            perfect remission and forgiveness.
          </p>
          <p className="font-semibold">
            Through Christ our Lord. Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Daily Lent Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as I begin this day of Lent, I offer You my heart and my life.
          </p>
          <p className="mb-4">
            Help me to remember that I am dust and to dust I shall return.
          </p>
          <p className="mb-4">
            Grant me the strength to resist temptation and to grow in holiness.
          </p>
          <p className="mb-4">
            May my fasting, prayer, and acts of charity draw me closer to You.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayers for the Three Pillars of Lent</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-3">Prayer for Fasting</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, as I fast during this Lenten season, help me to hunger for You more than for food. 
            May my physical hunger remind me of my spiritual hunger for Your presence and Your love. 
            Help me to offer my sacrifices in union with Your suffering on the cross.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-900 mb-3">Prayer for Prayer</h3>
          <p className="text-gray-800 leading-relaxed">
            Heavenly Father, during this season of Lent, draw me closer to You through prayer. 
            Help me to set aside time each day to be in Your presence, to listen to Your voice, 
            and to grow in my relationship with You. May my prayer life deepen and flourish.
          </p>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-green-900 mb-3">Prayer for Almsgiving</h3>
          <p className="text-gray-800 leading-relaxed">
            Lord Jesus, teach me to be generous with my time, talents, and treasure. 
            Help me to see the needs of others and to respond with love and compassion. 
            May my acts of charity be a reflection of Your love for all people.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Stations of the Cross Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord Jesus, as I walk with You through the Stations of the Cross,
          </p>
          <p className="mb-4">
            help me to understand the depth of Your love for me.
          </p>
          <p className="mb-4">
            May Your suffering and death inspire me to carry my own crosses with courage and faith.
          </p>
          <p className="mb-4">
            Help me to remember that through Your Resurrection, You have conquered sin and death.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          Lent is a time of spiritual renewal and conversion, modeled after Jesus' forty days in the desert. 
          It calls us to examine our lives, repent of our sins, and grow closer to God through prayer, fasting, and almsgiving.
        </p>
        
        <p className="text-gray-700 mb-4">
          The three pillars of Lent—prayer, fasting, and almsgiving—help us to turn away from sin and turn toward God. 
          Prayer deepens our relationship with God, fasting helps us to master our desires and grow in self-discipline, 
          and almsgiving opens our hearts to the needs of others and reflects God's love.
        </p>
        
        <p className="text-gray-700 mb-6">
          These Lenten prayers guide us through this sacred season, helping us to prepare our hearts for Easter. 
          They remind us that Lent is not just about giving up something, but about growing in holiness and becoming 
          more like Christ. Through these prayers, we can experience true conversion and renewal of our spiritual lives.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/holy-week-prayers" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Seasonal
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Holy Week Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayers for the most sacred week of the year, leading to Easter.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/act-of-contrition" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Act of Contrition
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Express sorrow for your sins and resolve to avoid them in the future.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The prayer that Jesus taught us, perfect for daily prayer during Lent.
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
            title="Lent Prayers" 
            url="/prayers/lent-prayers"
            excerpt="Discover and pray this beautiful Catholic prayer for spiritual growth and devotion." 
          />
        </div>
      </section></section>
    </main>
  );
} 