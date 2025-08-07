import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign of the Cross – Catholic Prayer and Gesture | Catholic Bible Online",
  description: "Learn how to make the Sign of the Cross, the most basic Catholic prayer and gesture of faith. Discover its meaning and importance in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/sign-of-the-cross",
  },
  openGraph: {
    title: "Sign of the Cross – Catholic Prayer and Gesture",
    description: "Learn how to make the Sign of the Cross, the most basic Catholic prayer and gesture of faith.",
    url: "https://www.catholicbibleonline.com/prayers/sign-of-the-cross",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign of the Cross – Catholic Prayer and Gesture",
    description: "Learn how to make the Sign of the Cross, the most basic Catholic prayer and gesture of faith.",
  },
};

export default function SignOfTheCrossPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Sign of the Cross
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✝️ Sign of the Cross – Catholic Prayer and Gesture</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Sign of the Cross is the most fundamental Catholic prayer and gesture of faith. It is both a prayer 
        and a physical gesture that marks us as Christians and invokes the protection of the Holy Trinity. 
        This simple yet profound act is the foundation of all Catholic prayer and devotion.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Make the Sign of the Cross</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Using your right hand, touch your forehead, then your chest, then your left shoulder, and finally your right shoulder, saying:</p>
          <p className="mb-4 font-semibold">"In the name of the Father, and of the Son, and of the Holy Spirit. Amen."</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Symbolism</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Sign of the Cross is a powerful symbol that represents the central mystery of our faith: the Holy Trinity 
          and the sacrifice of Jesus Christ on the cross. When we make this sign, we are:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Professing our faith</strong> in the Holy Trinity (Father, Son, and Holy Spirit)</li>
          <li>• <strong>Remembering Christ's sacrifice</strong> on the cross for our salvation</li>
          <li>• <strong>Invoking God's protection</strong> and blessing upon ourselves</li>
          <li>• <strong>Marking ourselves</strong> as followers of Christ</li>
          <li>• <strong>Beginning and ending</strong> our prayers in the name of the Trinity</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The gesture itself has deep meaning: touching the forehead (mind), chest (heart), and shoulders (strength) 
          symbolizes dedicating our entire being to God - our thoughts, our love, and our actions.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Make the Sign of the Cross</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>At the beginning and end of prayers</strong> - To sanctify our prayer time</li>
          <li>• <strong>Before and after meals</strong> - To bless our food and give thanks</li>
          <li>• <strong>When entering and leaving church</strong> - To show reverence for the sacred space</li>
          <li>• <strong>At the beginning of Mass</strong> - To prepare our hearts for worship</li>
          <li>• <strong>When passing by a church</strong> - To honor the presence of the Blessed Sacrament</li>
          <li>• <strong>In times of temptation or fear</strong> - To invoke God's protection</li>
          <li>• <strong>Before important decisions</strong> - To seek God's guidance</li>
          <li>• <strong>When blessing others</strong> - To impart God's blessing</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Sign of the Cross is rooted in Scripture and early Christian tradition. Jesus commanded His disciples 
          to baptize "in the name of the Father, and of the Son, and of the Holy Spirit" (Matthew 28:19). 
          The early Christians used this gesture as a way to identify themselves and invoke God's protection.
        </p>
        
        <p className="text-gray-700 mb-4">
          The cross itself represents the ultimate act of love - Jesus' sacrifice for our salvation. 
          When we make the Sign of the Cross, we are participating in this mystery and proclaiming our faith 
          in the power of Christ's death and resurrection.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Protection</h3>
          <p className="text-gray-700 text-sm">
            The Sign of the Cross invokes God's protection against evil and spiritual harm. It is a powerful 
            weapon in spiritual warfare.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Blessing</h3>
          <p className="text-gray-700 text-sm">
            Making the Sign of the Cross brings God's blessing upon us and sanctifies our actions and intentions.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Focus</h3>
          <p className="text-gray-700 text-sm">
            This gesture helps us focus our minds and hearts on God, preparing us for prayer and worship.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Identity</h3>
          <p className="text-gray-700 text-sm">
            The Sign of the Cross marks us as Christians and reminds us of our baptismal identity in Christ.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, taught by Jesus Himself to His disciples.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/glory-be" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Glory Be
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Doxology to the Holy Trinity, praising God the Father, Son, and Holy Spirit.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/basic"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Basic Prayers
        </Link>
      </div>
    </main>
  );
} 