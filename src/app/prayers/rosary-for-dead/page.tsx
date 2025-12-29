import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Rosary for the Dead – Special Rosary for Souls in Purgatory | Catholic Bible Online",
  description: "Learn how to pray the Rosary for the Dead. This special devotion helps the souls in purgatory and brings comfort to the living. Complete guide with intentions and prayers.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/rosary-for-dead",
  },
  openGraph: {
    title: "Rosary for the Dead – Special Rosary for Souls in Purgatory",
    description: "Learn how to pray the Rosary for the Dead to help the souls in purgatory.",
    url: "https://www.catholicbibleonline.com/prayers/rosary-for-dead",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosary for the Dead – Special Rosary for Souls in Purgatory",
    description: "Learn how to pray the Rosary for the Dead to help the souls in purgatory.",
  },
};

export default function RosaryForDeadPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Rosary for the Dead
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕯️ Rosary for the Dead – Special Rosary for Souls in Purgatory</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Rosary for the Dead is a special devotion that helps the souls in purgatory and brings comfort 
        to the living. This powerful prayer combines the traditional Rosary with specific intentions for 
        the deceased, offering our prayers and sacrifices for their purification and entrance into heaven.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Prayer for the Dead</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">O God, the Creator and Redeemer of all the faithful,</p>
          <p className="mb-4">grant to the souls of Thy servants and handmaids</p>
          <p className="mb-4">the remission of all their sins,</p>
          <p className="mb-4">that they may obtain by our loving prayers</p>
          <p className="mb-4">that forgiveness which they have always desired.</p>
          <p className="mb-4">Who livest and reignest with God the Father</p>
          <p className="mb-4">in the unity of the Holy Spirit,</p>
          <p className="mb-4">one God, world without end.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Rosary for the Dead</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Begin with the Opening Prayer</h3>
          <div className="text-gray-700">
            <p>Pray the opening prayer for the dead, offering your Rosary for the souls in purgatory.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Choose Your Mysteries</h3>
          <div className="text-gray-700">
            <p>You can pray any set of mysteries, but the Sorrowful Mysteries are particularly appropriate as they remind us of Christ's sacrifice for our salvation.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Add Special Intentions</h3>
          <div className="text-gray-700">
            <p>Before each decade, add a specific intention for the dead, such as: "For the soul of [name], and for all the souls in purgatory."</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Pray the Fatima Prayer</h3>
          <div className="text-gray-700">
            <p>After each Glory Be, pray the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy."</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Conclude with Special Prayers</h3>
          <div className="text-gray-700">
            <p>End with prayers for the dead, such as the Eternal Rest prayer and the Prayer for the Faithful Departed.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Special Intentions for Each Decade</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>First Decade</strong> - For the soul of [name] and for all who have died recently</li>
          <li>• <strong>Second Decade</strong> - For the souls of our family members and friends who have died</li>
          <li>• <strong>Third Decade</strong> - For the souls of priests and religious who have died</li>
          <li>• <strong>Fourth Decade</strong> - For the souls of those who have no one to pray for them</li>
          <li>• <strong>Fifth Decade</strong> - For the souls of those who died in war, accidents, or violence</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Closing Prayers for the Dead</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4"><strong>Eternal Rest Prayer:</strong></p>
          <p className="mb-4">Eternal rest grant unto them, O Lord,</p>
          <p className="mb-4">and let perpetual light shine upon them.</p>
          <p className="mb-4">May they rest in peace.</p>
          
          <p className="font-semibold">Amen.</p>
          
          <p className="mt-6 mb-4"><strong>Prayer for the Faithful Departed:</strong></p>
          <p className="mb-4">O Lord, we beseech Thee,</p>
          <p className="mb-4">grant to the souls of Thy servants and handmaids</p>
          <p className="mb-4">the remission of all their sins,</p>
          <p className="mb-4">that they may obtain by our loving prayers</p>
          <p className="mb-4">that forgiveness which they have always desired.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Rosary for the Dead</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On All Souls' Day</strong> - November 2nd, dedicated to praying for the dead</li>
          <li>• <strong>On the anniversary of a death</strong> - To remember and pray for loved ones</li>
          <li>• <strong>During the month of November</strong> - Traditional month for praying for the dead</li>
          <li>• <strong>At wakes and funerals</strong> - To offer comfort and prayers</li>
          <li>• <strong>On the 3rd, 7th, and 30th day after death</strong> - Traditional times for special prayers</li>
          <li>• <strong>On the anniversary of death</strong> - Yearly remembrance and prayer</li>
          <li>• <strong>When you feel called</strong> - Any time you want to help the souls in purgatory</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Helps the Souls in Purgatory</h3>
          <p className="text-gray-700 text-sm">
            Our prayers and sacrifices help the souls in purgatory to be purified and reach heaven sooner.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Comfort for the Living</h3>
          <p className="text-gray-700 text-sm">
            Praying for the dead brings comfort and peace to those who are grieving.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Strengthens Faith</h3>
          <p className="text-gray-700 text-sm">
            This devotion strengthens our faith in the Communion of Saints and the power of prayer.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Prepares Us for Death</h3>
          <p className="text-gray-700 text-sm">
            Praying for the dead reminds us of our own mortality and the importance of living a holy life.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The practice of praying for the dead is deeply rooted in Scripture and Catholic tradition:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>2 Maccabees 12:44-45</strong> - "For if he were not expecting that those who had fallen would rise again, it would have been superfluous and foolish to pray for the dead."</li>
          <li>• <strong>1 Corinthians 15:29</strong> - "Otherwise, what do people mean by being baptized on behalf of the dead?"</li>
          <li>• <strong>2 Timothy 1:18</strong> - "May the Lord grant him to find mercy from the Lord on that day."</li>
          <li>• <strong>Revelation 21:27</strong> - "Nothing unclean shall enter" heaven, indicating the need for purification</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Church teaches that the souls in purgatory can be helped by our prayers, alms, and sacrifices, 
          especially the Holy Sacrifice of the Mass.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Prayer</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Pray with love</strong> - Offer your Rosary with great love and compassion for the souls</li>
          <li>• <strong>Be specific</strong> - Mention specific names of deceased loved ones</li>
          <li>• <strong>Offer sacrifices</strong> - Combine your prayers with small sacrifices or penances</li>
          <li>• <strong>Pray regularly</strong> - Make it a habit to pray for the dead</li>
          <li>• <strong>Involve family</strong> - Pray the Rosary for the dead as a family</li>
          <li>• <strong>Attend Mass</strong> - Have Masses offered for the dead</li>
          <li>• <strong>Visit cemeteries</strong> - Pray at the graves of loved ones</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/sorrowful-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Sorrowful Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Sorrowful Mysteries of the Rosary, prayed on Tuesday and Friday.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/divine-mercy-chaplet" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Divine Mercy Chaplet
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Chaplet of Divine Mercy devotion, powerful for the souls in purgatory.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/fatima-prayer" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Fatima Prayer
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Prayer taught by Our Lady of Fatima to the three shepherd children.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/rosary"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Rosary Prayers
        </Link>
      </div>
    </main>
  );
} 