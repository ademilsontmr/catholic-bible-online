import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Spiritual Communion – Prayer When Unable to Receive Communion | Mass Prayers | Catholic Bible Online",
  description: "Learn the Spiritual Communion prayer for when you cannot receive the Eucharist. This prayer allows you to unite yourself spiritually with Christ. Complete guide with prayers and benefits.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/spiritual-communion",
  },
  openGraph: {
    title: "Spiritual Communion – Prayer When Unable to Receive Communion",
    description: "Learn the Spiritual Communion prayer for when you cannot receive the Eucharist.",
    url: "https://www.catholicbibleonline.com/prayers/spiritual-communion",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spiritual Communion – Prayer When Unable to Receive Communion",
    description: "Learn the Spiritual Communion prayer for when you cannot receive the Eucharist.",
  },
};

export default function SpiritualCommunionPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/mass" className="hover:underline">Mass Prayers</Link> &gt; 
        Spiritual Communion
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">❤️ Spiritual Communion – Prayer When Unable to Receive Communion</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        Spiritual Communion is a beautiful practice that allows us to unite ourselves spiritually with 
        Christ when we are unable to receive the Eucharist sacramentally. This prayer expresses our 
        desire for union with Jesus and our love for Him, even when physical reception is not possible. 
        It is a powerful way to maintain our connection with Christ and grow in our spiritual life.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Spiritual Communion Prayer</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">My Jesus, I believe that You are present in the Most Holy Sacrament.</p>
            <p className="mb-2">I love You above all things, and I desire to receive You into my soul.</p>
            <p className="mb-2">Since I cannot at this moment receive You sacramentally,</p>
            <p className="mb-2">come at least spiritually into my heart.</p>
            <p className="mb-2">I embrace You as if You were already there</p>
            <p className="mb-2">and unite myself wholly to You.</p>
            <p className="mb-2">Never permit me to be separated from You.</p>
            
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Alternative Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">Lord Jesus Christ,</p>
            <p className="mb-2">I long to receive You in Holy Communion.</p>
            <p className="mb-2">Since I cannot receive You sacramentally now,</p>
            <p className="mb-2">I invite You to come spiritually into my heart.</p>
            <p className="mb-2">I believe in You, I hope in You, I love You.</p>
            <p className="mb-2">Make me one with You in spirit.</p>
            <p className="mb-2">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Make a Spiritual Communion</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>When you cannot attend Mass</strong> - Due to illness, travel, or other circumstances</li>
          <li>• <strong>When you are not in a state of grace</strong> - Before going to confession</li>
          <li>• <strong>During Eucharistic Adoration</strong> - To unite yourself with the exposed Blessed Sacrament</li>
          <li>• <strong>When watching Mass online</strong> - To participate spiritually in the celebration</li>
          <li>• <strong>During times of persecution</strong> - When the Eucharist is not available</li>
          <li>• <strong>As a daily devotion</strong> - To grow in love for the Eucharist</li>
          <li>• <strong>Before receiving Communion</strong> - To prepare your heart</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Make a Spiritual Communion</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Prepare Your Heart</h3>
          <div className="text-gray-700">
            <p>Find a quiet place and take a moment to calm your mind and focus on Jesus.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Express Your Desire</h3>
          <div className="text-gray-700">
            <p>Tell Jesus that you desire to receive Him and that you love Him above all things.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Invite Jesus In</h3>
          <div className="text-gray-700">
            <p>Ask Jesus to come spiritually into your heart and soul.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Unite Yourself to Him</h3>
          <div className="text-gray-700">
            <p>Imagine embracing Jesus and uniting yourself completely to Him.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Give Thanks</h3>
          <div className="text-gray-700">
            <p>Thank Jesus for coming to you spiritually and ask Him to never let you be separated from Him.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Benefits of Spiritual Communion</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Growth</h3>
          <p className="text-gray-700 text-sm">
            Spiritual Communion helps us grow in our love for Jesus and our desire for the Eucharist.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Grace and Blessings</h3>
          <p className="text-gray-700 text-sm">
            It brings us many graces and blessings, similar to sacramental Communion.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Preparation</h3>
          <p className="text-gray-700 text-sm">
            It prepares us to receive the Eucharist worthily when we are able to do so.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Union with Christ</h3>
          <p className="text-gray-700 text-sm">
            It helps us maintain our union with Christ even when we cannot receive Him sacramentally.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          Spiritual Communion has been practiced throughout Church history:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Early Church</strong> - The practice dates back to the early Church when Christians could not always receive Communion</li>
          <li>• <strong>Desert Fathers</strong> - The early monks and hermits practiced spiritual communion</li>
            <li>• <strong>St. Thomas Aquinas</strong> - He wrote about the benefits of spiritual communion</li>
          <li>• <strong>St. Alphonsus Liguori</strong> - He promoted this practice and wrote about its benefits</li>
          <li>• <strong>Church Teaching</strong> - The Church has always encouraged this practice as a means of grace</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Spiritual Communion is a traditional and approved practice that has brought countless graces 
          to the faithful throughout the centuries.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Making a Good Spiritual Communion</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Be sincere</strong> - Make the prayer with a sincere heart and true desire for Jesus</li>
          <li>• <strong>Use your imagination</strong> - Picture Jesus coming into your heart</li>
          <li>• <strong>Be consistent</strong> - Make spiritual communion regularly, especially when you cannot attend Mass</li>
          <li>• <strong>Combine with other prayers</strong> - You can combine it with the Rosary or other devotions</li>
          <li>• <strong>Give thanks</strong> - Always thank Jesus for His presence and love</li>
          <li>• <strong>Ask for help</strong> - Ask Jesus to help you grow in love for Him and the Eucharist</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/anima-christi" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800">
                  Mass Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Anima Christi
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Soul of Christ - prayer after Communion.
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