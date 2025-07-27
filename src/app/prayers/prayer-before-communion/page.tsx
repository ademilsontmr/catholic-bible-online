import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer Before Communion – Catholic Eucharistic Prayer",
  description: "Read the Prayer Before Communion and learn its meaning in Catholic tradition. Prepare your heart to receive Jesus in the Holy Eucharist.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-before-communion",
  },
  openGraph: {
    title: "Prayer Before Communion – Catholic Eucharistic Prayer",
    description: "Read the Prayer Before Communion and learn its meaning in Catholic tradition.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-before-communion",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer Before Communion – Catholic Eucharistic Prayer",
    description: "Read the Prayer Before Communion and learn its meaning in Catholic tradition.",
  },
};

export default function PrayerBeforeCommunionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; Prayer Before Communion
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Prayer Before Communion – Catholic Eucharistic Prayer</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Prayer Before Communion is a beautiful Catholic prayer that helps us prepare our hearts to receive Jesus Christ in the Holy Eucharist. 
        This prayer expresses our humility, gratitude, and love as we approach the most sacred moment of the Mass. 
        It reminds us of the incredible gift we are about to receive—the real presence of Jesus in the Blessed Sacrament.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Lord, I am not worthy that you should enter under my roof,
          </p>
          <p className="mb-4">
            but only say the word and my soul shall be healed.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Alternative Prayer Before Communion</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">
            Jesus, my Lord and my God, I believe that you are truly present in the Most Holy Sacrament of the Altar.
          </p>
          <p className="mb-4">
            I love you above all things, and I desire to receive you into my soul.
          </p>
          <p className="mb-4">
            Since I cannot at this moment receive you sacramentally, come at least spiritually into my heart.
          </p>
          <p className="mb-4">
            I embrace you as if you were already there and unite myself wholly to you.
          </p>
          <p className="mb-4">
            Never permit me to be separated from you.
          </p>
          <p className="font-semibold">
            Amen.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Reflection</h2>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 mb-4">
          The Prayer Before Communion is a powerful expression of humility and faith, echoing the words of the centurion in the Gospel who said, "Lord, I am not worthy that you should enter under my roof." 
          This Catholic prayer reminds us that we are sinners in need of God's mercy and healing, yet we trust in His power to make us worthy through His grace.
        </p>
        
        <p className="text-gray-700 mb-4">
          The prayer's simplicity belies its profound meaning—we acknowledge our unworthiness while expressing our faith in Jesus' power to heal and transform us. 
          Just as the centurion's servant was healed by Jesus' word, we believe that our souls will be healed and strengthened through receiving the Eucharist. 
          This prayer teaches us the proper disposition for approaching the altar: humility, faith, and trust in God's mercy.
        </p>
        
        <p className="text-gray-700 mb-6">
          The alternative prayer, often used for spiritual communion, expresses our deep love for Jesus and our desire to be united with Him. 
          It reminds us that even when we cannot receive the Eucharist sacramentally, we can still invite Jesus into our hearts spiritually. 
          This prayer helps us maintain our connection with Christ and prepares us for the day when we can receive Him in the Blessed Sacrament again.
        </p>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/our-father" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Basic Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Our Father
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The Lord's Prayer, the perfect model for all Christian prayer taught by Jesus Himself.
                </p>
              </div>
            </div>
          </Link>
          
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
          
          <Link href="/prayers/angelus" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Angelus
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  A traditional Catholic prayer that commemorates the Incarnation of Jesus Christ and honors the Blessed Virgin Mary.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
} 