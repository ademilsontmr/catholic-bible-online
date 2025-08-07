import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ave Maris Stella – Hail, Star of the Sea | Catholic Bible Online",
  description: "Learn the Ave Maris Stella prayer, a beautiful medieval Marian hymn honoring Mary as the Star of the Sea. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/ave-maris-stella",
  },
  openGraph: {
    title: "Ave Maris Stella – Hail, Star of the Sea",
    description: "Learn the Ave Maris Stella prayer, a beautiful medieval Marian hymn honoring Mary as the Star of the Sea.",
    url: "https://www.catholicbibleonline.com/prayers/ave-maris-stella",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ave Maris Stella – Hail, Star of the Sea",
    description: "Learn the Ave Maris Stella prayer, a beautiful medieval Marian hymn honoring Mary as the Star of the Sea.",
  },
};

export default function AveMarisStellaPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Ave Maris Stella
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">⭐ Ave Maris Stella – Hail, Star of the Sea</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Ave Maris Stella is a beautiful medieval Marian hymn that honors Mary as the Star of the Sea. 
        This ancient prayer, dating from the 8th century, celebrates Mary as our guiding light and protector 
        in the journey of life. It is one of the most beloved Marian hymns in the Catholic tradition.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ave Maris Stella Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Ave maris stella,</p>
            <p className="mb-2">Dei Mater alma,</p>
            <p className="mb-2">atque semper Virgo,</p>
            <p className="mb-2">felix caeli porta.</p>
            <p className="mb-4">Sumens illud Ave</p>
            <p className="mb-2">Gabrielis ore,</p>
            <p className="mb-2">funda nos in pace,</p>
            <p className="mb-2">mutans Hevae nomen.</p>
            <p className="mb-4">Solve vincla reis,</p>
            <p className="mb-2">profer lumen caecis,</p>
            <p className="mb-2">mala nostra pelle,</p>
            <p className="mb-2">bona cuncta posce.</p>
            <p className="mb-4">Monstra te esse matrem,</p>
            <p className="mb-2">sumat per te precem</p>
            <p className="mb-2">qui pro nobis natus</p>
            <p className="mb-2">tulit esse tuus.</p>
            <p className="mb-4">Virgo singularis,</p>
            <p className="mb-2">inter omnes mitis,</p>
            <p className="mb-2">nos culpis solutos</p>
            <p className="mb-2">mites fac et castos.</p>
            <p className="mb-4">Vitam praesta puram,</p>
            <p className="mb-2">iter para tutum,</p>
            <p className="mb-2">ut videntes Jesum</p>
            <p className="mb-2">semper collaetemur.</p>
            <p className="mb-4">Sit laus Deo Patri,</p>
            <p className="mb-2">summo Christo decus,</p>
            <p className="mb-2">Spiritui Sancto</p>
            <p className="font-semibold">tribus honor unus. Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Hail, star of the sea,</p>
            <p className="mb-2">Nurturing Mother of God,</p>
            <p className="mb-2">And ever Virgin,</p>
            <p className="mb-2">Happy gate of heaven.</p>
            <p className="mb-4">Receiving that "Ave"</p>
            <p className="mb-2">From the mouth of Gabriel,</p>
            <p className="mb-2">Establish us in peace,</p>
            <p className="mb-2">Transforming the name of Eve.</p>
            <p className="mb-4">Loosen the chains of the guilty,</p>
            <p className="mb-2">Bring forth light for the blind,</p>
            <p className="mb-2">Drive away our evils,</p>
            <p className="mb-2">Request all good things.</p>
            <p className="mb-4">Show yourself to be a mother,</p>
            <p className="mb-2">May he receive prayer through you</p>
            <p className="mb-2">Who was born for us</p>
            <p className="mb-2">And deigned to be yours.</p>
            <p className="mb-4">O unique Virgin,</p>
            <p className="mb-2">Gentle among all others,</p>
            <p className="mb-2">Make us, freed from our faults,</p>
            <p className="mb-2">Gentle and chaste.</p>
            <p className="mb-4">Grant a pure life,</p>
            <p className="mb-2">Prepare a safe journey,</p>
            <p className="mb-2">That seeing Jesus,</p>
            <p className="mb-2">We may always rejoice.</p>
            <p className="mb-4">Praise be to God the Father,</p>
            <p className="mb-2">Glory to Christ the Most High,</p>
            <p className="mb-2">To the Holy Spirit</p>
            <p className="font-semibold">One honor to the Three. Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray Ave Maris Stella</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Marian feasts</strong> - Especially on Marian solemnities and feast days</li>
          <li>• <strong>Evening prayer</strong> - As part of the Liturgy of the Hours</li>
          <li>• <strong>Personal devotion</strong> - As a beautiful Marian hymn for meditation</li>
          <li>• <strong>In times of darkness</strong> - When seeking Mary's guidance as our star</li>
          <li>• <strong>Before important decisions</strong> - To ask for Mary's intercession</li>
          <li>• <strong>During pilgrimages</strong> - Especially Marian pilgrimages</li>
          <li>• <strong>Family prayer</strong> - As a beautiful family devotion</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Medieval Origins</h3>
          <p className="text-gray-700 text-sm">
            The Ave Maris Stella dates from the 8th century and is attributed to various authors, 
            including St. Venantius Fortunatus. It became a popular hymn in medieval monasteries.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Star of the Sea</h3>
          <p className="text-gray-700 text-sm">
            The title "Star of the Sea" (Stella Maris) has been used for Mary since early Christian times, 
            symbolizing her role as our guide through the storms of life.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Use</h3>
          <p className="text-gray-700 text-sm">
            This hymn is traditionally sung during Vespers on Marian feasts and is part of the 
            official Liturgy of the Hours of the Catholic Church.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Poetic Beauty</h3>
          <p className="text-gray-700 text-sm">
            The hymn is written in elegant Latin verse and has inspired countless musical settings 
            throughout the centuries.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray Ave Maris Stella</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Structure of the Prayer</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Invocation</h4>
            <p className="text-gray-700 text-sm">
              "Hail, star of the sea" - We address Mary as our guiding star and protector.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Petitions</h4>
            <p className="text-gray-700 text-sm">
              The hymn contains multiple petitions asking for Mary's intercession and protection.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. Doxology</h4>
            <p className="text-gray-700 text-sm">
              The prayer concludes with praise to the Holy Trinity, giving glory to God.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Tips for Praying</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Pray slowly, meditating on each verse</li>
            <li>• Consider Mary as your guiding star in life's journey</li>
            <li>• Ask for her intercession in your specific needs</li>
            <li>• Sing the hymn if you know the melody</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          The Ave Maris Stella is deeply rooted in Scripture and tradition:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Revelation 12:1</h4>
            <p className="text-gray-700 text-sm">
              "A great sign appeared in heaven: a woman clothed with the sun, with the moon under her feet" - 
              Mary as the woman crowned with stars.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:28</h4>
            <p className="text-gray-700 text-sm">
              "Hail, full of grace, the Lord is with you" - The greeting that Mary received from the angel.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Genesis 3:15</h4>
            <p className="text-gray-700 text-sm">
              "I will put enmity between you and the woman" - The protoevangelium, the first promise of redemption.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Guidance in Darkness</h3>
          <p className="text-gray-700 text-sm">
            The Ave Maris Stella reminds us that Mary is our guiding star in times of darkness and confusion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Marian Devotion</h3>
          <p className="text-gray-700 text-sm">
            This hymn deepens our devotion to Mary and helps us see her as our mother and protector.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Connection</h3>
          <p className="text-gray-700 text-sm">
            Praying this hymn connects us to the rich liturgical tradition of the Church.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Poetic Prayer</h3>
          <p className="text-gray-700 text-sm">
            The beautiful poetry of this hymn elevates our prayer and helps us express our love for Mary.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Mary</h3>
              <p className="text-gray-600 text-sm">Fundamental prayer to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕰️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">The Angelus</h3>
              <p className="text-gray-600 text-sm">Traditional prayer recited three times daily</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/marian"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Marian Prayers
        </Link>
      </div>
    </main>
  );
} 