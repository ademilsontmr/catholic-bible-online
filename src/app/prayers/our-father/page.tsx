import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Father – The Lord's Prayer",
  description: "Read the full text of the Our Father (Lord's Prayer) and learn its meaning in Catholic tradition. Discover how this prayer guides our relationship with God.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/our-father",
  },
  openGraph: {
    title: "Our Father – The Lord's Prayer",
    description: "Read the full text of the Our Father (Lord's Prayer) and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/our-father",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Father – The Lord's Prayer",
    description: "Read the full text of the Our Father (Lord's Prayer) and learn its meaning in Catholic tradition.",
  },
};

export default function OurFatherPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Our Father
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🙏 Our Father – The Lord's Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Our Father, also known as the Lord's Prayer, is the prayer that Jesus Himself taught to His disciples. 
        It serves as the perfect model for all Christian prayer, encompassing praise, petition, and surrender to God's will. 
        This Catholic prayer remains the foundation of our spiritual life and daily communication with our Heavenly Father.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Our Father, who art in heaven, hallowed be thy name;
          </p>
          <p className="mb-4">
            Thy kingdom come; Thy will be done on earth as it is in heaven.
          </p>
          <p className="mb-4">
            Give us this day our daily bread;
          </p>
          <p className="mb-4">
            and forgive us our trespasses as we forgive those who trespass against us;
          </p>
          <p className="mb-4">
            and lead us not into temptation, but deliver us from evil.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Our Father is more than just words to recite—it's a blueprint for living in relationship with God. 
          When we call God "Our Father," we acknowledge our identity as His beloved children and our connection to all humanity as brothers and sisters in Christ.
        </p>
        
        <p className="text-gray-700 mb-4">
          The first part of this Catholic prayer focuses on God's glory and kingdom, teaching us to prioritize His will above our own desires. 
          "Give us this day our daily bread" reminds us to trust in God's providence and to be content with what we need rather than what we want.
        </p>
        
        <p className="text-gray-700 mb-6">
          The prayer's emphasis on forgiveness is particularly powerful—we ask God to forgive us as we forgive others, 
          recognizing that our capacity to receive mercy is directly linked to our willingness to extend it. 
          This prayer guides us to live with humility, trust, and love, transforming our hearts to reflect the heart of Christ.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Mary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The beloved prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/rosary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Devotions
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  The Rosary
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The powerful Catholic devotion combining vocal prayer with meditation on the mysteries of our salvation.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/prayer-before-communion" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Prayer Before Communion
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prepare your heart to receive Jesus Christ in the Holy Eucharist with this beautiful prayer.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 