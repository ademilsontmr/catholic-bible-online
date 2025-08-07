import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Anima Christi – Soul of Christ | Mass Prayers | Catholic Bible Online",
  description: "Learn the Anima Christi prayer: 'Soul of Christ, sanctify me.' This beautiful prayer is traditionally said after receiving Communion. Complete text in Latin and English.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/anima-christi",
  },
  openGraph: {
    title: "Anima Christi – Soul of Christ",
    description: "Learn the Anima Christi prayer traditionally said after receiving Communion.",
    url: "https://www.catholicbibleonline.com/prayers/anima-christi",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anima Christi – Soul of Christ",
    description: "Learn the Anima Christi prayer traditionally said after receiving Communion.",
  },
};

export default function AnimaChristiPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Anima Christi
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🍷 Anima Christi – Soul of Christ</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Anima Christi is a beautiful and profound prayer that is traditionally said after receiving 
        Holy Communion. This prayer, which begins with "Soul of Christ, sanctify me," invites us to 
        unite ourselves completely with Christ and to ask for His grace and protection. It is a powerful 
        expression of our desire to be transformed by Christ and to live in union with Him.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Anima Christi Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Latin</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">Anima Christi, sanctifica me.</p>
            <p className="mb-2">Corpus Christi, salva me.</p>
            <p className="mb-2">Sanguis Christi, inebria me.</p>
            <p className="mb-2">Aqua lateris Christi, lava me.</p>
            <p className="mb-2">Passio Christi, conforta me.</p>
            <p className="mb-2">O bone Iesu, exaudi me.</p>
            <p className="mb-2">Intra tua vulnera absconde me.</p>
            <p className="mb-2">Ne permittas me separari a te.</p>
            <p className="mb-2">Ab hoste maligno defende me.</p>
            <p className="mb-2">In hora mortis meae voca me.</p>
            <p className="mb-2">Et iube me venire ad te,</p>
            <p className="mb-2">ut cum Sanctis tuis laudem te</p>
            <p className="mb-2">in saecula saeculorum.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">English</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Soul of Christ, sanctify me.</p>
            <p className="mb-2">Body of Christ, save me.</p>
            <p className="mb-2">Blood of Christ, inebriate me.</p>
            <p className="mb-2">Water from the side of Christ, wash me.</p>
            <p className="mb-2">Passion of Christ, strengthen me.</p>
            <p className="mb-2">O good Jesus, hear me.</p>
            <p className="mb-2">Within Thy wounds hide me.</p>
            <p className="mb-2">Suffer me not to be separated from Thee.</p>
            <p className="mb-2">From the malignant enemy defend me.</p>
            <p className="mb-2">In the hour of my death call me.</p>
            <p className="mb-2">And bid me come unto Thee,</p>
            <p className="mb-2">that with Thy saints I may praise Thee</p>
            <p className="mb-2">for ever and ever.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Anima Christi</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>After Communion</strong> - Traditionally prayed after receiving the Eucharist</li>
          <li>• <strong>During Eucharistic Adoration</strong> - To unite yourself with Christ present in the Blessed Sacrament</li>
          <li>• <strong>Personal Prayer</strong> - As a daily devotion to grow closer to Christ</li>
          <li>• <strong>Before Sleep</strong> - To entrust yourself to Christ's protection during the night</li>
          <li>• <strong>In Times of Temptation</strong> - To ask for Christ's help and protection</li>
          <li>• <strong>During Spiritual Communion</strong> - When you cannot receive Communion sacramentally</li>
          <li>• <strong>Before Death</strong> - To prepare for the final journey to Christ</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Union with Christ</h3>
          <p className="text-gray-700 text-sm">
            The Anima Christi expresses our desire to be completely united with Christ in every aspect of His being.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Protection</h3>
          <p className="text-gray-700 text-sm">
            It asks for Christ's protection from evil and for His guidance throughout our lives.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Transformation</h3>
          <p className="text-gray-700 text-sm">
            It seeks to be transformed by Christ's grace and to grow in holiness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Eternal Life</h3>
          <p className="text-gray-700 text-sm">
            It expresses our hope to be with Christ forever in heaven with all the saints.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Anima Christi has a rich spiritual history:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Medieval Origin</strong> - The prayer dates back to the 14th century</li>
          <li>• <strong>St. Ignatius of Loyola</strong> - He popularized this prayer and included it in his Spiritual Exercises</li>
          <li>• <strong>Jesuit Tradition</strong> - It became a favorite prayer of the Jesuits and their spiritual practices</li>
          <li>• <strong>Popular Devotion</strong> - It has been widely used by the faithful for centuries</li>
          <li>• <strong>Liturgical Use</strong> - It is often used during Eucharistic Adoration and after Communion</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Anima Christi is one of the most beloved prayers in the Catholic tradition, expressing 
          the deep desire of the soul to be united with Christ.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">The Anima Christi is deeply rooted in Scripture:</p>
          
          <ul className="space-y-2 mb-4">
            <li>• <strong>John 19:34</strong> - "But one of the soldiers pierced his side with a spear, and at once there came out blood and water"</li>
            <li>• <strong>1 Corinthians 11:24</strong> - "This is my body which is for you"</li>
            <li>• <strong>John 6:54</strong> - "Whoever eats my flesh and drinks my blood has eternal life"</li>
            <li>• <strong>Romans 8:35</strong> - "Who shall separate us from the love of Christ?"</li>
            <li>• <strong>Psalm 27:1</strong> - "The Lord is my light and my salvation; whom shall I fear?"</li>
            <li>• <strong>Revelation 7:9</strong> - "A great multitude... standing before the throne and before the Lamb"</li>
          </ul>
          
          <p className="mb-4">
            The Anima Christi draws on biblical images of Christ's Passion, the Eucharist, and our 
            hope for eternal life with Him.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Deep Union</h3>
          <p className="text-gray-700 text-sm">
            The Anima Christi helps us achieve a deeper union with Christ in prayer and devotion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Protection</h3>
          <p className="text-gray-700 text-sm">
            It provides spiritual protection and strength in times of temptation and difficulty.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Transformation</h3>
          <p className="text-gray-700 text-sm">
            It helps us be transformed by Christ's grace and grow in holiness.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Eternal Perspective</h3>
          <p className="text-gray-700 text-sm">
            It reminds us of our ultimate goal: to be with Christ forever in heaven.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Anima Christi</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>With devotion</strong> - Pray this prayer with deep devotion and love for Christ</li>
          <li>• <strong>With meditation</strong> - Reflect on each phrase and its meaning</li>
          <li>• <strong>With trust</strong> - Trust in Christ's power to sanctify and protect you</li>
          <li>• <strong>With gratitude</strong> - Thank Christ for His sacrifice and love</li>
          <li>• <strong>With hope</strong> - Express your hope to be with Christ forever</li>
          <li>• <strong>With surrender</strong> - Surrender yourself completely to Christ's will</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
          
          <Link href="/prayers/prayer-after-communion" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer After Communion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer to thank God for the gift of the Eucharist.
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