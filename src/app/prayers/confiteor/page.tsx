import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Confiteor – I Confess | Mass Prayers | Catholic Bible Online",
  description: "Learn the Confiteor prayer: 'I confess to almighty God.' This penitential act is used during Mass and confession. Complete text in Latin and English with meaning.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/confiteor",
  },
  openGraph: {
    title: "Confiteor – I Confess",
    description: "Learn the Confiteor prayer used during Mass and confession.",
    url: "https://www.catholicbibleonline.com/prayers/confiteor",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Confiteor – I Confess",
    description: "Learn the Confiteor prayer used during Mass and confession.",
  },
};

export default function ConfiteorPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Confiteor
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💔 Confiteor – I Confess</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Confiteor is a powerful prayer of confession and repentance that is used during Mass and 
        in the Sacrament of Reconciliation. This prayer, which begins with "I confess to almighty God," 
        helps us acknowledge our sins and ask for forgiveness from God, the Blessed Virgin Mary, the 
        angels, the saints, and our brothers and sisters. It is a beautiful expression of humility and 
        contrition.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Confiteor Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Confiteor Deo omnipotenti,</p>
            <p className="mb-2">beatae Mariae semper Virgini,</p>
            <p className="mb-2">beato Michaeli Archangelo,</p>
            <p className="mb-2">beato Ioanni Baptistae,</p>
            <p className="mb-2">sanctis Apostolis Petro et Paulo,</p>
            <p className="mb-2">omnibus Sanctis,</p>
            <p className="mb-2">et vobis, fratres,</p>
            <p className="mb-2">quia peccavi nimis</p>
            <p className="mb-2">cogitatione, verbo, opere et omissione,</p>
            <p className="mb-2">mea culpa, mea culpa, mea maxima culpa.</p>
            <p className="mb-2">Ideo precor beatam Mariam semper Virginem,</p>
            <p className="mb-2">beatum Michaelem Archangelum,</p>
            <p className="mb-2">beatum Ioannem Baptistam,</p>
            <p className="mb-2">sanctos Apostolos Petrum et Paulum,</p>
            <p className="mb-2">omnes Sanctos,</p>
            <p className="mb-2">et vos, fratres,</p>
            <p className="mb-2">orare pro me ad Dominum Deum nostrum.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">I confess to almighty God</p>
            <p className="mb-2">and to you, my brothers and sisters,</p>
            <p className="mb-2">that I have greatly sinned</p>
            <p className="mb-2">in my thoughts and in my words,</p>
            <p className="mb-2">in what I have done</p>
            <p className="mb-2">and in what I have failed to do,</p>
            <p className="mb-2">through my fault, through my fault,</p>
            <p className="mb-2">through my most grievous fault;</p>
            <p className="mb-2">therefore I ask blessed Mary ever-Virgin,</p>
            <p className="mb-2">all the Angels and Saints,</p>
            <p className="mb-2">and you, my brothers and sisters,</p>
            <p className="mb-2">to pray for me to the Lord our God.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Confiteor is Used</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - As part of the Penitential Act at the beginning of Mass</li>
          <li>• <strong>Sacrament of Reconciliation</strong> - During confession to express contrition</li>
          <li>• <strong>Liturgy of the Hours</strong> - In the Divine Office and other liturgical celebrations</li>
          <li>• <strong>Personal Prayer</strong> - As a daily examination of conscience</li>
          <li>• <strong>Before Communion</strong> - To prepare for receiving the Eucharist</li>
          <li>• <strong>Penitential Services</strong> - During communal reconciliation services</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Acknowledgment of Sin</h3>
          <p className="text-gray-700 text-sm">
            The Confiteor helps us honestly acknowledge our sins and take responsibility for them.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility</h3>
          <p className="text-gray-700 text-sm">
            It cultivates humility by recognizing our need for God's mercy and forgiveness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Communal Aspect</h3>
          <p className="text-gray-700 text-sm">
            It acknowledges that our sins affect the entire community and asks for their prayers.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Intercession</h3>
          <p className="text-gray-700 text-sm">
            It asks for the intercession of Mary, the angels, saints, and our brothers and sisters.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Confiteor is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>1 John 1:9</strong> - "If we confess our sins, he is faithful and just to forgive us our sins"</li>
            <li>• <strong>Psalm 51:3</strong> - "For I know my transgressions, and my sin is ever before me"</li>
            <li>• <strong>James 5:16</strong> - "Confess your sins to one another and pray for one another"</li>
            <li>• <strong>Luke 18:13</strong> - "God, be merciful to me, a sinner!"</li>
            <li>• <strong>Proverbs 28:13</strong> - "Whoever conceals his transgressions will not prosper, but he who confesses and forsakes them will obtain mercy"</li>
          </ul>
          
          <p className="mb-4">
            The Confiteor follows the biblical pattern of acknowledging sin, expressing contrition, 
            and seeking forgiveness through prayer and intercession.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Confiteor has a rich liturgical history:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Early Church</strong> - The practice of confessing sins publicly dates to the early Church</li>
          <li>• <strong>Monastic Tradition</strong> - It was used in monastic communities for daily examination of conscience</li>
          <li>• <strong>Liturgical Development</strong> - It became a standard part of the Mass during the Middle Ages</li>
          <li>• <strong>Vatican II</strong> - The prayer was simplified and translated into vernacular languages</li>
          <li>• <strong>Ecumenical Prayer</strong> - Similar prayers exist in other Christian traditions</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Confiteor has evolved over time but maintains its essential purpose of helping us 
          acknowledge our sins and seek forgiveness.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Self-Examination</h3>
          <p className="text-gray-700 text-sm">
            The Confiteor helps us examine our conscience and recognize our sins.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility</h3>
          <p className="text-gray-700 text-sm">
            It cultivates humility by acknowledging our need for God's mercy.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation</h3>
          <p className="text-gray-700 text-sm">
            It prepares our hearts to participate worthily in the Mass and receive Communion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Communal Unity</h3>
          <p className="text-gray-700 text-sm">
            It unites us with the community in acknowledging our shared need for forgiveness.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Confiteor</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With sincerity</strong> - Mean what you say when you confess your sins</li>
          <li>• <strong>With humility</strong> - Approach this prayer with a humble and contrite heart</li>
          <li>• <strong>With examination</strong> - Take time to examine your conscience before praying</li>
          <li>• <strong>With trust</strong> - Trust in God's mercy and willingness to forgive</li>
          <li>• <strong>With gratitude</strong> - Thank God for the gift of forgiveness and reconciliation</li>
          <li>• <strong>With resolution</strong> - Resolve to avoid sin and grow in holiness</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/acts-of-faith-hope-love" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Acts of Faith, Hope, and Love
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Traditional acts expressing the theological virtues.
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