import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer of the Faithful – Universal Prayer | Mass Prayers | Catholic Bible Online",
  description: "Learn about the Prayer of the Faithful: the universal prayer for the Church and world. This prayer is offered during Mass for various intentions. Complete guide with examples.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-faithful",
  },
  openGraph: {
    title: "Prayer of the Faithful – Universal Prayer",
    description: "Learn about the Prayer of the Faithful offered during Mass for various intentions.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-faithful",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer of the Faithful – Universal Prayer",
    description: "Learn about the Prayer of the Faithful offered during Mass for various intentions.",
  },
};

export default function PrayerFaithfulPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Prayer of the Faithful
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🤝 Prayer of the Faithful – Universal Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer of the Faithful, also known as the Universal Prayer or General Intercessions, 
        is a beautiful part of the Mass where the entire congregation joins together to pray for 
        the needs of the Church and the world. This prayer allows us to bring our concerns, 
        hopes, and intentions before God as a community of believers.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Structure of the Prayer of the Faithful</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Prayer of the Faithful typically follows this structure:</p>
          
          <ol className="space-y-2 mb-4">
            <li><strong>1. For the Church</strong> - Prayers for the Pope, bishops, priests, and the entire Church</li>
            <li><strong>2. For the World</strong> - Prayers for world peace, justice, and the common good</li>
            <li><strong>3. For Those in Need</strong> - Prayers for the sick, poor, suffering, and those in difficulty</li>
            <li><strong>4. For the Local Community</strong> - Prayers for the parish, families, and local needs</li>
            <li><strong>5. For the Dead</strong> - Prayers for the faithful departed</li>
          </ol>
          
          <p className="mb-4">Each intention is announced by the priest or deacon, and the people respond: <strong>"Lord, hear our prayer"</strong> or <strong>"We pray to the Lord"</strong>.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example Prayers of the Faithful</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">For the Church</h3>
          <div className="text-gray-700">
            <p className="mb-2">"For our Holy Father, Pope Francis, and all bishops, priests, and religious, that they may be faithful witnesses to Christ's love and truth."</p>
            <p className="text-sm text-gray-500">Response: "Lord, hear our prayer"</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">For the World</h3>
          <div className="text-gray-700">
            <p className="mb-2">"For peace in our world, especially in areas of conflict, that all people may live in harmony and justice."</p>
            <p className="text-sm text-gray-500">Response: "Lord, hear our prayer"</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">For Those in Need</h3>
          <div className="text-gray-700">
            <p className="mb-2">"For all who are sick, suffering, or in need, that they may experience God's healing love and the care of the Christian community."</p>
            <p className="text-sm text-gray-500">Response: "Lord, hear our prayer"</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">For the Local Community</h3>
          <div className="text-gray-700">
            <p className="mb-2">"For our parish family, that we may grow in faith, hope, and love, and be a light to our community."</p>
            <p className="text-sm text-gray-500">Response: "Lord, hear our prayer"</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">For the Dead</h3>
          <div className="text-gray-700">
            <p className="mb-2">"For all the faithful departed, especially our loved ones, that they may rest in the peace of Christ."</p>
            <p className="text-sm text-gray-500">Response: "Lord, hear our prayer"</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Prayer of the Faithful is Offered</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - After the Creed and before the Offertory</li>
          <li>• <strong>Every Mass</strong> - The Prayer of the Faithful is offered at every Mass</li>
          <li>• <strong>Special Intentions</strong> - For specific needs, feast days, or special occasions</li>
          <li>• <strong>Personal Intentions</strong> - When individuals have specific prayer requests</li>
          <li>• <strong>Community Needs</strong> - For local, national, or global concerns</li>
          <li>• <strong>Seasonal Intentions</strong> - Adapted for different liturgical seasons</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Prayer of the Faithful is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>1 Timothy 2:1-2</strong> - "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all men"</li>
            <li>• <strong>James 5:16</strong> - "Pray for one another, that you may be healed"</li>
            <li>• <strong>Matthew 18:20</strong> - "For where two or three are gathered in my name, there am I in the midst of them"</li>
            <li>• <strong>Philippians 4:6</strong> - "Have no anxiety about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God"</li>
            <li>• <strong>1 Peter 5:7</strong> - "Cast all your anxieties on him, for he cares about you"</li>
          </ul>
          
          <p className="mb-4">
            The Prayer of the Faithful follows the biblical pattern of communal prayer and 
            intercession for the needs of others.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Communal Prayer</h3>
          <p className="text-gray-700 text-sm">
            It unites the entire congregation in prayer for common concerns and needs.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Intercession</h3>
          <p className="text-gray-700 text-sm">
            It allows us to pray for others and to be instruments of God's grace in the world.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Awareness</h3>
          <p className="text-gray-700 text-sm">
            It helps us become aware of the needs of the Church and the world around us.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Participation</h3>
          <p className="text-gray-700 text-sm">
            It engages us actively in the Mass and helps us participate more fully in the liturgy.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Participate in the Prayer of the Faithful</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Listen attentively</strong> - Pay attention to each intention as it is announced</li>
          <li>• <strong>Respond with faith</strong> - Say the response with conviction and faith</li>
          <li>• <strong>Make it personal</strong> - Add your own personal intentions silently</li>
          <li>• <strong>Be present</strong> - Be fully present and engaged in the prayer</li>
          <li>• <strong>Trust in God</strong> - Trust that God hears and answers our prayers</li>
          <li>• <strong>Be grateful</strong> - Thank God for the opportunity to pray together</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/final-blessing" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Final Blessing
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  May almighty God bless you - dismissal.
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