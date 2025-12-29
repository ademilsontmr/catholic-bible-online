import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Kyrie Eleison – Lord, Have Mercy | Mass Prayers | Catholic Bible Online",
  description: "Learn the Kyrie Eleison prayer: 'Lord, have mercy.' This penitential prayer is used during Mass and other liturgical celebrations. Complete text in Greek, Latin, and English.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/kyrie-eleison",
  },
  openGraph: {
    title: "Kyrie Eleison – Lord, Have Mercy",
    description: "Learn the Kyrie Eleison prayer used during Mass and liturgical celebrations.",
    url: "https://www.catholicbibleonline.com/prayers/kyrie-eleison",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyrie Eleison – Lord, Have Mercy",
    description: "Learn the Kyrie Eleison prayer used during Mass and liturgical celebrations.",
  },
};

export default function KyrieEleisonPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Kyrie Eleison
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙏 Kyrie Eleison – Lord, Have Mercy</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Kyrie Eleison is one of the oldest and most beautiful prayers in the Christian tradition. 
        This simple yet profound prayer, meaning "Lord, have mercy" in Greek, is used during Mass and 
        other liturgical celebrations as a penitential act. It expresses our need for God's mercy and 
        our recognition of our sinfulness.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Kyrie Eleison Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Greek (Original)</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Κύριε ἐλέησον</p>
            <p className="mb-2">Χριστὲ ἐλέησον</p>
            <p className="mb-2">Κύριε ἐλέησον</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Kyrie, eleison</p>
            <p className="mb-2">Christe, eleison</p>
            <p className="mb-2">Kyrie, eleison</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Lord, have mercy</p>
            <p className="mb-2">Christ, have mercy</p>
            <p className="mb-2">Lord, have mercy</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Kyrie is Used</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - As part of the Penitential Act at the beginning of Mass</li>
          <li>• <strong>Liturgy of the Hours</strong> - In the Divine Office and other liturgical prayers</li>
          <li>• <strong>Penitential Services</strong> - During confession and reconciliation services</li>
          <li>• <strong>Funeral Masses</strong> - To pray for the mercy of God for the deceased</li>
          <li>• <strong>Personal Prayer</strong> - As a simple prayer for God's mercy</li>
          <li>• <strong>Times of Need</strong> - When seeking God's mercy and forgiveness</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Recognition of Sin</h3>
          <p className="text-gray-700 text-sm">
            The Kyrie expresses our acknowledgment of our sinfulness and our need for God's mercy and forgiveness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in God's Mercy</h3>
          <p className="text-gray-700 text-sm">
            It shows our confidence that God is merciful and will forgive us when we turn to Him with contrite hearts.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation for Mass</h3>
          <p className="text-gray-700 text-sm">
            The Kyrie helps us prepare our hearts to participate worthily in the Eucharist by acknowledging our need for purification.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Prayer</h3>
          <p className="text-gray-700 text-sm">
            This prayer transcends language barriers and unites Christians around the world in a common plea for mercy.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Kyrie Eleison has ancient roots in both Jewish and Christian tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Biblical Origins</strong> - The phrase appears in the Psalms and the Gospels, particularly in the story of the blind man who cried out "Jesus, Son of David, have mercy on me" (Mark 10:47)</li>
          <li>• <strong>Early Church</strong> - The Kyrie was used in the early Church as a response to litanies and prayers</li>
          <li>• <strong>Greek Tradition</strong> - The prayer was originally in Greek, the common language of the early Church</li>
          <li>• <strong>Liturgical Development</strong> - It became a standard part of the Mass and other liturgical celebrations</li>
          <li>• <strong>Ecumenical Prayer</strong> - The Kyrie is used by many Christian denominations, making it a truly universal prayer</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Kyrie Eleison is one of the few prayers that has remained in its original Greek form throughout the centuries, 
          showing its importance and universality in Christian worship.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Kyrie Eleison is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>Psalm 51:1</strong> - "Have mercy on me, O God, according to your steadfast love"</li>
            <li>• <strong>Mark 10:47</strong> - "Jesus, Son of David, have mercy on me!"</li>
            <li>• <strong>Luke 18:13</strong> - "God, be merciful to me, a sinner!"</li>
            <li>• <strong>Matthew 9:27</strong> - "Have mercy on us, Son of David!"</li>
            <li>• <strong>Psalm 123:3</strong> - "Have mercy upon us, O Lord, have mercy upon us"</li>
          </ul>
          
          <p className="mb-4">
            These biblical passages show that calling upon God's mercy is a fundamental aspect of prayer 
            and a recognition of our need for God's grace and forgiveness.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Kyrie</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With humility</strong> - Approach God with a humble and contrite heart</li>
          <li>• <strong>With faith</strong> - Believe that God will hear and answer your plea for mercy</li>
          <li>• <strong>With sincerity</strong> - Mean what you say when you ask for mercy</li>
          <li>• <strong>With gratitude</strong> - Thank God for His mercy and forgiveness</li>
          <li>• <strong>With repentance</strong> - Be willing to turn away from sin and follow God's ways</li>
          <li>• <strong>With confidence</strong> - Trust in God's promise to be merciful to those who call upon Him</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility</h3>
          <p className="text-gray-700 text-sm">
            The Kyrie helps us cultivate humility by acknowledging our need for God's mercy.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Repentance</h3>
          <p className="text-gray-700 text-sm">
            It encourages us to examine our conscience and turn away from sin.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in God</h3>
          <p className="text-gray-700 text-sm">
            The prayer strengthens our trust in God's mercy and love for us.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation</h3>
          <p className="text-gray-700 text-sm">
            It helps us prepare our hearts to receive God's grace and participate in the Mass worthily.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/confiteor" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Confiteor
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  I confess - penitential act used during Mass.
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