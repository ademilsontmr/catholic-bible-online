import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Rosary for Peace – Rosary Devotion for World Peace | Catholic Bible Online",
  description: "Learn how to pray the Rosary for Peace. This special devotion seeks peace in the world through Mary's intercession. Complete guide with intentions and prayers.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/rosary-for-peace",
  },
  openGraph: {
    title: "Rosary for Peace – Rosary Devotion for World Peace",
    description: "Learn how to pray the Rosary for Peace to bring peace to the world.",
    url: "https://www.catholicbibleonline.com/prayers/rosary-for-peace",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rosary for Peace – Rosary Devotion for World Peace",
    description: "Learn how to pray the Rosary for Peace to bring peace to the world.",
  },
};

export default function RosaryForPeacePage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Rosary for Peace
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🕊️ Rosary for Peace – Rosary Devotion for World Peace</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Rosary for Peace is a powerful devotion that seeks peace in the world through Mary's intercession. 
        This special prayer combines the traditional Rosary with specific intentions for peace in families, 
        communities, nations, and the world. It is a beautiful way to participate in God's work of bringing 
        peace to a troubled world.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Opening Prayer for Peace</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Queen of Peace, pray for us!</p>
          <p className="mb-4">O Mary, Mother of God and our Mother,</p>
          <p className="mb-4">Queen of Peace,</p>
          <p className="mb-4">we turn to you in confidence and trust.</p>
          <p className="mb-4">Help us to be instruments of peace in our families,</p>
          <p className="mb-4">in our communities, and in the world.</p>
          <p className="mb-4">Through your intercession,</p>
          <p className="mb-4">may the Prince of Peace reign in our hearts</p>
          <p className="mb-4">and bring peace to all nations.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Rosary for Peace</h2>
      
      <div className="space-y-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Begin with the Opening Prayer</h3>
          <div className="text-gray-700">
            <p>Pray the opening prayer for peace, asking Mary's intercession for peace in the world.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Choose Your Mysteries</h3>
          <div className="text-gray-700">
            <p>You can pray any set of mysteries, but the Joyful Mysteries are particularly appropriate as they remind us of the peace that Christ brings.</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Add Peace Intentions</h3>
          <div className="text-gray-700">
            <p>Before each decade, add a specific intention for peace, such as: "For peace in our families and homes."</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Pray the Fatima Prayer</h3>
          <div className="text-gray-700">
            <p>After each Glory Be, pray the Fatima Prayer: "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to heaven, especially those in most need of Thy mercy."</p>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Conclude with Peace Prayers</h3>
          <div className="text-gray-700">
            <p>End with prayers for peace, such as the Prayer of Saint Francis and the Regina Coeli.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Peace Intentions for Each Decade</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>First Decade</strong> - For peace in our families and homes</li>
          <li>• <strong>Second Decade</strong> - For peace in our communities and neighborhoods</li>
          <li>• <strong>Third Decade</strong> - For peace in our nation and government</li>
          <li>• <strong>Fourth Decade</strong> - For peace in the world and among all nations</li>
          <li>• <strong>Fifth Decade</strong> - For peace in the Church and among all Christians</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Closing Prayers for Peace</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4"><strong>Prayer of Saint Francis:</strong></p>
          <p className="mb-4">Lord, make me an instrument of Your peace.</p>
          <p className="mb-4">Where there is hatred, let me sow love;</p>
          <p className="mb-4">where there is injury, pardon;</p>
          <p className="mb-4">where there is doubt, faith;</p>
          <p className="mb-4">where there is despair, hope;</p>
          <p className="mb-4">where there is darkness, light;</p>
          <p className="mb-4">where there is sadness, joy.</p>
          <p className="mb-4">O Divine Master, grant that I may not so much seek</p>
          <p className="mb-4">to be consoled as to console,</p>
          <p className="mb-4">to be understood as to understand,</p>
          <p className="mb-4">to be loved as to love.</p>
          <p className="mb-4">For it is in giving that we receive,</p>
          <p className="mb-4">it is in pardoning that we are pardoned,</p>
          <p className="mb-4">and it is in dying that we are born to eternal life.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Rosary for Peace</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>During times of conflict</strong> - When there is war, violence, or unrest</li>
          <li>• <strong>On the first Saturday of each month</strong> - In honor of Our Lady of Fatima</li>
          <li>• <strong>On Marian feast days</strong> - Especially the Queenship of Mary</li>
          <li>• <strong>Before important meetings</strong> - To bring peace to discussions</li>
          <li>• <strong>For family conflicts</strong> - To restore peace in the home</li>
          <li>• <strong>For troubled areas</strong> - For specific regions experiencing violence</li>
          <li>• <strong>As a daily devotion</strong> - To continuously pray for peace</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">World Peace</h3>
          <p className="text-gray-700 text-sm">
            Our prayers contribute to peace in the world through Mary's powerful intercession.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Peace</h3>
          <p className="text-gray-700 text-sm">
            Praying for peace brings inner peace and calm to our own hearts and minds.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Family Harmony</h3>
          <p className="text-gray-700 text-sm">
            This devotion helps restore peace and harmony in families and relationships.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Becoming Peacemakers</h3>
          <p className="text-gray-700 text-sm">
            We become instruments of peace, bringing Christ's peace to others.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Rosary for Peace is deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Matthew 5:9</strong> - "Blessed are the peacemakers, for they shall be called children of God"</li>
          <li>• <strong>John 14:27</strong> - "Peace I leave with you; my peace I give to you"</li>
          <li>• <strong>Philippians 4:7</strong> - "The peace of God, which surpasses all understanding, will guard your hearts"</li>
          <li>• <strong>Isaiah 9:6</strong> - "For to us a child is born... and his name shall be called... Prince of Peace"</li>
          <li>• <strong>Luke 2:14</strong> - "Glory to God in the highest, and on earth peace among men"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The Bible teaches us that peace is a gift from God and that we are called to be peacemakers in the world.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Prayer</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Pray with faith</strong> - Believe in the power of prayer to bring peace</li>
          <li>• <strong>Be specific</strong> - Pray for peace in specific situations or areas</li>
          <li>• <strong>Pray with others</strong> - Join with family or friends in praying for peace</li>
          <li>• <strong>Make it a habit</strong> - Pray the Rosary for Peace regularly</li>
          <li>• <strong>Live peacefully</strong> - Let your life be a witness to peace</li>
          <li>• <strong>Forgive others</strong> - Practice forgiveness as a path to peace</li>
          <li>• <strong>Trust in Mary</strong> - Have confidence in Mary's intercession for peace</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/prayers/joyful-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Joyful Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Joyful Mysteries of the Rosary, prayed on Monday and Saturday.
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
          
          <Link href="/prayers/hail-holy-queen" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Hail Holy Queen
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Salve Regina - Prayer to the Blessed Virgin Mary.
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