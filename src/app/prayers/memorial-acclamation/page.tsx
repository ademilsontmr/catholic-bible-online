import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Memorial Acclamation – Christ Has Died, Christ Is Risen | Mass Prayers | Catholic Bible Online",
  description: "Learn the Memorial Acclamation prayer: 'Christ has died, Christ is risen, Christ will come again.' This acclamation is proclaimed during Mass after the consecration.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/memorial-acclamation",
  },
  openGraph: {
    title: "Memorial Acclamation – Christ Has Died, Christ Is Risen",
    description: "Learn the Memorial Acclamation prayer proclaimed during Mass after the consecration.",
    url: "https://www.catholicbibleonline.com/prayers/memorial-acclamation",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Memorial Acclamation – Christ Has Died, Christ Is Risen",
    description: "Learn the Memorial Acclamation prayer proclaimed during Mass after the consecration.",
  },
};

export default function MemorialAcclamationPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Memorial Acclamation
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✝️ Memorial Acclamation – Christ Has Died, Christ Is Risen</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Memorial Acclamation is a powerful proclamation of faith that is recited during the Eucharistic 
        Prayer, just after the consecration. This acclamation affirms the central mystery of our faith: 
        the death, resurrection, and second coming of Christ. It is a moment when the entire congregation 
        joins together to proclaim their belief in the Paschal Mystery.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Memorial Acclamation</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Option A</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">We proclaim your Death, O Lord,</p>
            <p className="mb-2">and profess your Resurrection</p>
            <p className="mb-2">until you come again.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Option B</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">When we eat this Bread and drink this Cup,</p>
            <p className="mb-2">we proclaim your Death, O Lord,</p>
            <p className="mb-2">until you come again.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Option C</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Save us, Savior of the world,</p>
            <p className="mb-2">for by your Cross and Resurrection</p>
            <p className="mb-2">you have set us free.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Option D</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Christ has died,</p>
            <p className="mb-2">Christ is risen,</p>
            <p className="mb-2">Christ will come again.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When the Memorial Acclamation is Proclaimed</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Mass</strong> - In the Eucharistic Prayer, after the consecration</li>
          <li>• <strong>Every Mass</strong> - The Memorial Acclamation is proclaimed at every Mass</li>
          <li>• <strong>After Consecration</strong> - It follows the words of institution and consecration</li>
          <li>• <strong>Before Doxology</strong> - It comes before the final doxology of the Eucharistic Prayer</li>
          <li>• <strong>Congregational Response</strong> - The entire assembly joins in this proclamation</li>
          <li>• <strong>Priest's Invitation</strong> - The priest invites the people to proclaim the mystery of faith</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Paschal Mystery</h3>
          <p className="text-gray-700 text-sm">
            The acclamation proclaims the central mystery of our faith: Christ's death, resurrection, and second coming.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Participation</h3>
          <p className="text-gray-700 text-sm">
            It allows the congregation to actively participate in the Eucharistic Prayer and proclaim their faith.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Memorial</h3>
          <p className="text-gray-700 text-sm">
            It recalls and makes present the saving events of Christ's life, death, and resurrection.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Eschatological Hope</h3>
          <p className="text-gray-700 text-sm">
            It expresses our hope in Christ's second coming and the fulfillment of God's kingdom.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Memorial Acclamation is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>1 Corinthians 11:26</strong> - "For as often as you eat this bread and drink the cup, you proclaim the Lord's death until he comes"</li>
            <li>• <strong>1 Corinthians 15:3-4</strong> - "Christ died for our sins... he was raised on the third day"</li>
            <li>• <strong>Acts 1:11</strong> - "This Jesus, who was taken up from you into heaven, will come in the same way"</li>
            <li>• <strong>John 6:54</strong> - "Whoever eats my flesh and drinks my blood has eternal life, and I will raise him up at the last day"</li>
            <li>• <strong>Revelation 22:20</strong> - "Surely I am coming soon"</li>
          </ul>
          
          <p className="mb-4">
            The Memorial Acclamation brings together the key elements of the Gospel: Christ's saving death, 
            His glorious resurrection, and His promised return.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Memorial Acclamation has evolved in the liturgical tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Early Church</strong> - The early Church had various acclamations during the Eucharistic Prayer</li>
          <li>• <strong>Liturgical Reform</strong> - The current options were developed after the Second Vatican Council</li>
          <li>• <strong>Active Participation</strong> - It was designed to increase the congregation's participation in the Mass</li>
          <li>• <strong>Biblical Foundation</strong> - Each option is based on biblical texts and traditional formulas</li>
          <li>• <strong>Pastoral Purpose</strong> - It helps the faithful understand and proclaim the mystery of the Eucharist</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Memorial Acclamation is a relatively recent addition to the Mass, but it draws on ancient 
          Christian traditions of proclaiming the mystery of faith.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Faith Proclamation</h3>
          <p className="text-gray-700 text-sm">
            The acclamation helps us publicly proclaim our faith in the central mysteries of Christianity.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Active Participation</h3>
          <p className="text-gray-700 text-sm">
            It engages us actively in the Mass, making us participants rather than spectators.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Memory and Hope</h3>
          <p className="text-gray-700 text-sm">
            It connects us with Christ's saving work and gives us hope for His return.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Unity</h3>
          <p className="text-gray-700 text-sm">
            It unites the entire congregation in proclaiming the same faith and hope.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Proclaim the Memorial Acclamation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With conviction</strong> - Proclaim the acclamation with firm belief and conviction</li>
          <li>• <strong>With understanding</strong> - Reflect on the meaning of each phrase as you say it</li>
          <li>• <strong>With unity</strong> - Join your voice with the entire congregation</li>
          <li>• <strong>With reverence</strong> - Approach this moment with reverence for the mystery being proclaimed</li>
          <li>• <strong>With hope</strong> - Express your hope in Christ's promises</li>
          <li>• <strong>With gratitude</strong> - Give thanks for Christ's saving work</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/agnus-dei" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Agnus Dei
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Lamb of God - prayer before Communion.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/spiritual-communion" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Spiritual Communion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer when unable to receive Communion.
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