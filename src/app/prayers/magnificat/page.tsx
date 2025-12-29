import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Magnificat – Mary's Song of Praise | Catholic Bible Online",
  description: "Learn the Magnificat, Mary's beautiful song of praise from the Gospel of Luke. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/magnificat",
  },
  openGraph: {
    title: "Magnificat – Mary's Song of Praise",
    description: "Learn the Magnificat, Mary's beautiful song of praise from the Gospel of Luke.",
    url: "https://www.catholicbibleonline.com/prayers/magnificat",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnificat – Mary's Song of Praise",
    description: "Learn the Magnificat, Mary's beautiful song of praise from the Gospel of Luke.",
  },
};

export default function MagnificatPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Magnificat
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🎵 Magnificat – Mary's Song of Praise</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Magnificat is Mary's beautiful song of praise and thanksgiving, found in the Gospel of Luke. 
        This prayer, also known as the Canticle of Mary, was spoken by the Blessed Virgin when she visited 
        her cousin Elizabeth. It is one of the most beautiful expressions of praise and humility in Scripture.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Magnificat Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Magnificat anima mea Dominum,</p>
            <p className="mb-2">et exsultavit spiritus meus in Deo salutari meo,</p>
            <p className="mb-2">quia respexit humilitatem ancillae suae.</p>
            <p className="mb-2">Ecce enim ex hoc beatam me dicent omnes generationes,</p>
            <p className="mb-2">quia fecit mihi magna qui potens est,</p>
            <p className="mb-2">et sanctum nomen eius,</p>
            <p className="mb-2">et misericordia eius a progenie in progenies</p>
            <p className="mb-2">timentibus eum.</p>
            <p className="mb-2">Fecit potentiam in brachio suo,</p>
            <p className="mb-2">dispersit superbos mente cordis sui.</p>
            <p className="mb-2">Deposuit potentes de sede,</p>
            <p className="mb-2">et exaltavit humiles.</p>
            <p className="mb-2">Esurientes implevit bonis,</p>
            <p className="mb-2">et divites dimisit inanes.</p>
            <p className="mb-2">Suscepit Israel puerum suum,</p>
            <p className="mb-2">recordatus misericordiae suae,</p>
            <p className="mb-2">sicut locutus est ad patres nostros,</p>
            <p className="font-semibold">Abraham et semini eius in saecula.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">My soul magnifies the Lord,</p>
            <p className="mb-2">and my spirit rejoices in God my Savior,</p>
            <p className="mb-2">for he has looked with favor on the lowliness of his servant.</p>
            <p className="mb-2">Surely, from now on all generations will call me blessed;</p>
            <p className="mb-2">for the Mighty One has done great things for me,</p>
            <p className="mb-2">and holy is his name.</p>
            <p className="mb-2">His mercy is for those who fear him</p>
            <p className="mb-2">from generation to generation.</p>
            <p className="mb-2">He has shown strength with his arm;</p>
            <p className="mb-2">he has scattered the proud in the thoughts of their hearts.</p>
            <p className="mb-2">He has brought down the powerful from their thrones,</p>
            <p className="mb-2">and lifted up the lowly;</p>
            <p className="mb-2">he has filled the hungry with good things,</p>
            <p className="mb-2">and sent the rich away empty.</p>
            <p className="mb-2">He has helped his servant Israel,</p>
            <p className="mb-2">in remembrance of his mercy,</p>
            <p className="mb-2">according to the promise he made to our ancestors,</p>
            <p className="font-semibold">to Abraham and to his descendants forever.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Magnificat</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During Vespers</strong> - Traditional evening prayer of the Church</li>
          <li>• <strong>On Marian feasts</strong> - Especially the Visitation and Assumption</li>
          <li>• <strong>Personal devotion</strong> - As a beautiful prayer of praise and thanksgiving</li>
          <li>• <strong>In times of joy</strong> - When giving thanks to God for His blessings</li>
          <li>• <strong>During Advent</strong> - To prepare for the coming of Christ</li>
          <li>• <strong>Family prayer</strong> - As a beautiful family devotion</li>
          <li>• <strong>Before important events</strong> - To seek God's blessing and guidance</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical Origin</h3>
          <p className="text-gray-700 text-sm">
            The Magnificat is found in Luke 1:46-55 and was spoken by Mary during her visit to Elizabeth. 
            It is Mary's response to Elizabeth's greeting and the recognition of the child in her womb.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Song of Praise</h3>
          <p className="text-gray-700 text-sm">
            This prayer is a beautiful song of praise and thanksgiving, expressing Mary's joy 
            and gratitude for God's mercy and the great things He has done for her.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility and Exaltation</h3>
          <p className="text-gray-700 text-sm">
            The Magnificat teaches us about God's preference for the humble and His power 
            to exalt the lowly and bring down the proud.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Use</h3>
          <p className="text-gray-700 text-sm">
            The Magnificat is sung daily during Vespers in the Liturgy of the Hours, 
            making it one of the most frequently used prayers in the Church.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Magnificat</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Structure of the Prayer</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">1. Praise and Rejoicing</h4>
            <p className="text-gray-700 text-sm">
              "My soul magnifies the Lord, and my spirit rejoices in God my Savior" - We begin with praise and joy.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">2. Recognition of God's Favor</h4>
            <p className="text-gray-700 text-sm">
              We acknowledge God's mercy and the great things He has done for us.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">3. God's Justice</h4>
            <p className="text-gray-700 text-sm">
              We recognize God's power to exalt the humble and bring down the proud.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">4. Fulfillment of Promises</h4>
            <p className="text-gray-700 text-sm">
              We acknowledge God's faithfulness to His promises throughout history.
            </p>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-white rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Tips for Praying</h4>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>• Pray with gratitude and joy in your heart</li>
            <li>• Meditate on God's mercy and the great things He has done</li>
            <li>• Reflect on your own humility and need for God's grace</li>
            <li>• Sing the Magnificat if you know the traditional melody</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <p className="text-gray-700 mb-4">
          The Magnificat is directly from Scripture and has deep biblical roots:
        </p>
        
        <div className="space-y-3">
          <div>
            <h4 className="font-semibold text-gray-900">Luke 1:46-55</h4>
            <p className="text-gray-700 text-sm">
              The complete text of the Magnificat as spoken by Mary during the Visitation.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">1 Samuel 2:1-10</h4>
            <p className="text-gray-700 text-sm">
              Hannah's song of thanksgiving, which has many parallels to the Magnificat.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900">Psalm 103:17</h4>
            <p className="text-gray-700 text-sm">
              "But the steadfast love of the Lord is from everlasting to everlasting on those who fear him" - 
              Echoing the theme of God's mercy.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Gratitude and Praise</h3>
          <p className="text-gray-700 text-sm">
            The Magnificat teaches us to give thanks and praise to God for His many blessings.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility</h3>
          <p className="text-gray-700 text-sm">
            This prayer reminds us of the importance of humility and our dependence on God.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in God</h3>
          <p className="text-gray-700 text-sm">
            The Magnificat strengthens our trust in God's mercy and His power to help us.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Liturgical Connection</h3>
          <p className="text-gray-700 text-sm">
            Praying this canticle connects us to the daily prayer of the Church and its rich tradition.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Theological Themes</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Themes in the Magnificat</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">God's Mercy</h4>
            <p className="text-gray-700 text-sm">
              The prayer emphasizes God's mercy and His faithfulness to those who fear Him.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Reversal of Fortunes</h4>
            <p className="text-gray-700 text-sm">
              God exalts the humble and brings down the proud, showing His preference for the lowly.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Fulfillment of Promises</h4>
            <p className="text-gray-700 text-sm">
              The Magnificat shows how God fulfills His promises to Abraham and his descendants.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Mary's Role</h4>
            <p className="text-gray-700 text-sm">
              Mary recognizes her blessedness and her role in God's plan of salvation.
            </p>
          </div>
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
          
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🕰️</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">The Angelus</h3>
              <p className="text-gray-600 text-sm">Traditional prayer recited three times daily</p>
            </div>
          </Link>
          
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
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