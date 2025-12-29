import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Final Blessing – May Almighty God Bless You | Mass Prayers | Catholic Bible Online",
  description: "Learn about the Final Blessing: 'May almighty God bless you.' This blessing concludes the Mass and sends the faithful forth. Complete guide with different blessing formulas.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/final-blessing",
  },
  openGraph: {
    title: "Final Blessing – May Almighty God Bless You",
    description: "Learn about the Final Blessing that concludes the Mass and sends the faithful forth.",
    url: "https://www.catholicbibleonline.com/prayers/final-blessing",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Final Blessing – May Almighty God Bless You",
    description: "Learn about the Final Blessing that concludes the Mass and sends the faithful forth.",
  },
};

export default function FinalBlessingPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Final Blessing
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✝️ Final Blessing – May Almighty God Bless You</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Final Blessing is the concluding prayer of the Mass that sends the faithful forth with 
        God's blessing and grace. This blessing, which begins with "May almighty God bless you," 
        is a powerful moment when the priest, acting in the person of Christ, imparts God's blessing 
        upon the congregation. It prepares us to go forth and live the Gospel in our daily lives.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Final Blessing</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Simple Form</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">May almighty God bless you,</p>
            <p className="mb-2">the Father, and the Son, and the Holy Spirit.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Solemn Blessing</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">May almighty God bless you</p>
            <p className="mb-2">and keep you from all harm</p>
            <p className="mb-2">and bring you to everlasting life.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Trinitarian Blessing</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">May the blessing of almighty God,</p>
            <p className="mb-2">the Father, and the Son, and the Holy Spirit,</p>
            <p className="mb-2">come down on you and remain with you for ever.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Dismissal</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">After the blessing, the priest or deacon dismisses the people with one of these formulas:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>"Go forth, the Mass is ended."</strong> (Ite, missa est.)</li>
            <li>• <strong>"Go and announce the Gospel of the Lord."</strong></li>
            <li>• <strong>"Go in peace, glorifying the Lord by your life."</strong></li>
            <li>• <strong>"Go in peace."</strong></li>
          </ul>
          
          <p className="mb-4">The people respond: <strong>"Thanks be to God."</strong></p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Protection</h3>
          <p className="text-gray-700 text-sm">
            The blessing asks for God's protection and guidance as we go forth from Mass.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mission</h3>
          <p className="text-gray-700 text-sm">
            The dismissal sends us forth to live the Gospel and be witnesses to Christ in the world.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grace</h3>
          <p className="text-gray-700 text-sm">
            The blessing imparts God's grace to help us live as faithful disciples of Christ.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Unity</h3>
          <p className="text-gray-700 text-sm">
            It unites us as a community blessed by God and sent forth together in mission.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Final Blessing is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>Numbers 6:24-26</strong> - "The Lord bless you and keep you; the Lord make his face to shine upon you"</li>
            <li>• <strong>Matthew 28:19-20</strong> - "Go therefore and make disciples of all nations"</li>
            <li>• <strong>2 Corinthians 13:14</strong> - "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all"</li>
            <li>• <strong>Luke 24:50-51</strong> - "Then he led them out as far as Bethany, and lifting up his hands he blessed them"</li>
            <li>• <strong>Mark 6:7</strong> - "And he called to him the twelve, and began to send them out"</li>
          </ul>
          
          <p className="mb-4">
            The Final Blessing follows the biblical pattern of blessing and sending forth, 
            connecting us with the mission of Christ and the apostles.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Divine Protection</h3>
          <p className="text-gray-700 text-sm">
            The blessing provides us with God's protection and guidance in our daily lives.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Mission Awareness</h3>
          <p className="text-gray-700 text-sm">
            It reminds us of our mission to be witnesses to Christ in the world.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grace and Strength</h3>
          <p className="text-gray-700 text-sm">
            It gives us the grace and strength to live as faithful disciples of Christ.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Unity</h3>
          <p className="text-gray-700 text-sm">
            It unites us as a community blessed by God and sent forth together.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Receive the Final Blessing</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With reverence</strong> - Receive the blessing with reverence and respect</li>
          <li>• <strong>With openness</strong> - Open your heart to receive God's grace and protection</li>
          <li>• <strong>With gratitude</strong> - Thank God for the gift of the Mass and His blessing</li>
          <li>• <strong>With mission</strong> - Be aware of your mission to live the Gospel</li>
          <li>• <strong>With faith</strong> - Trust that God will guide and protect you</li>
          <li>• <strong>With action</strong> - Be ready to go forth and live as a witness to Christ</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/prayer-faithful" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer of the Faithful
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Universal prayer for the Church and world.
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