import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Glory Be – Doxology Prayer",
  description: "Read the full text of the Glory Be prayer and learn its meaning in Catholic tradition. Discover this ancient doxology that honors the Holy Trinity.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/glory-be",
  },
  openGraph: {
    title: "Glory Be – Doxology Prayer",
    description: "Read the full text of the Glory Be prayer and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/glory-be",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glory Be – Doxology Prayer",
    description: "Read the full text of the Glory Be prayer and learn its meaning in Catholic tradition.",
  },
};

export default function GloryBePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Glory Be
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✨ Glory Be – Doxology Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Glory Be, also known as the Gloria Patri or the Lesser Doxology, is one of the most ancient and 
        beautiful prayers in the Christian tradition. This short but powerful prayer honors the Holy Trinity 
        and is used to conclude many other prayers, including the Rosary. It serves as a perfect expression 
        of praise to God the Father, Son, and Holy Spirit.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Glory be to the Father, and to the Son, and to the Holy Spirit.
          </p>
          <p className="mb-4">
            As it was in the beginning, is now, and ever shall be,
          </p>
          <p className="mb-4">
            world without end.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Glory Be prayer has its roots in the early Church and was developed as a response to the Arian heresy, 
          which denied the divinity of Jesus Christ. The prayer affirms the equality and co-eternity of the three 
          Persons of the Holy Trinity: Father, Son, and Holy Spirit.
        </p>
        
        <p className="text-gray-700 mb-4">
          This doxology has been used in Christian worship since at least the 4th century and is found in 
          various forms across different Christian traditions. The Catholic version emphasizes the eternal 
          nature of God's glory, which has no beginning and no end.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Glory Be is a prayer of pure praise and adoration. When we pray it, we acknowledge the majesty 
          and greatness of God in all three Persons. This prayer teaches us to give glory to God not just 
          for what He does, but for who He is—the eternal, unchanging, and all-powerful God.
        </p>
        
        <p className="text-gray-700 mb-4">
          The phrase "As it was in the beginning, is now, and ever shall be, world without end" reminds us 
          that God's glory is eternal and unchanging. Unlike the created world, which has a beginning and 
          will have an end, God's glory transcends time and space. This gives us comfort and hope, knowing 
          that the same God who created the universe is with us now and will be with us forever.
        </p>
        
        <p className="text-gray-700 mb-6">
          This prayer also helps us to focus on the Trinity, the central mystery of our Christian faith. 
          By praying to Father, Son, and Holy Spirit together, we acknowledge the unity and diversity 
          within the Godhead, and we participate in the eternal praise that the three Persons give to each other.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Glory Be</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>The Rosary:</strong> After each decade of Hail Marys</li>
          <li>• <strong>Divine Mercy Chaplet:</strong> As part of the chaplet structure</li>
          <li>• <strong>Liturgy of the Hours:</strong> At the end of psalms and canticles</li>
          <li>• <strong>Personal Prayer:</strong> To conclude other prayers</li>
          <li>• <strong>Times of Praise:</strong> When you want to give glory to God</li>
          <li>• <strong>Before Important Events:</strong> To acknowledge God's presence</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Theological Significance</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Trinitarian Prayer</h3>
        <p className="text-gray-700 mb-3">
          The Glory Be is a perfect Trinitarian prayer that honors all three Persons of the Holy Trinity equally. 
          It helps us to understand and appreciate the mystery of the Trinity in our daily prayer life.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Eternal Perspective</h3>
        <p className="text-gray-700 mb-3">
          By acknowledging God's eternal nature, this prayer helps us to see our lives in the context of eternity 
          and to trust in God's unchanging love and power.
        </p>
        
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Universal Prayer</h3>
        <p className="text-gray-700">
          The Glory Be is prayed by Christians around the world, uniting us in a common expression of praise 
          to the Triune God.
        </p>
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
                  The beloved prayer to the Blessed Virgin Mary.
                </p>
              </div>
            </div>
          </Link>

          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete guide to praying the Rosary with all its mysteries.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to All Prayers
        </Link>
      </div>
    </main>
  );
} 