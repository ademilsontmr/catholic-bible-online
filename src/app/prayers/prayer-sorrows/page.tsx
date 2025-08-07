import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prayer to Our Lady of Sorrows | Catholic Bible Online",
  description: "Learn the prayer to Our Lady of Sorrows, honoring Mary as the Sorrowful Mother. Discover its history and meaning in Catholic tradition.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/prayer-sorrows",
  },
  openGraph: {
    title: "Prayer to Our Lady of Sorrows",
    description: "Learn the prayer to Our Lady of Sorrows, honoring Mary as the Sorrowful Mother.",
    url: "https://www.catholicbibleonline.com/prayers/prayer-sorrows",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prayer to Our Lady of Sorrows",
    description: "Learn the prayer to Our Lady of Sorrows, honoring Mary as the Sorrowful Mother.",
  },
};

export default function PrayerSorrowsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/marian" className="hover:underline">Marian Prayers</Link> &gt; 
        Prayer to Our Lady of Sorrows
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💔 Prayer to Our Lady of Sorrows</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The prayer to Our Lady of Sorrows honors Mary as the Sorrowful Mother who shared in the sufferings 
        of her Son, Jesus Christ. This devotion recognizes the seven sorrows of Mary and her compassion 
        for all who suffer. Through this prayer, we unite our sufferings with hers and find comfort 
        in her motherly care.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Prayer to Our Lady of Sorrows</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Traditional Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed mb-6">
            <p className="mb-2">O most holy and afflicted Virgin,</p>
            <p className="mb-2">Queen of Martyrs,</p>
            <p className="mb-2">you stood beneath the cross,</p>
            <p className="mb-2">witnessing the agony of your dying Son.</p>
            <p className="mb-2">Look with a mother's tenderness and pity on me,</p>
            <p className="mb-2">who kneel before you.</p>
            <p className="mb-2">I venerate your sorrows and I place my requests</p>
            <p className="mb-2">with filial confidence in the sanctuary of your wounded heart.</p>
            <p className="mb-2">Present them, I beseech you, on my behalf to Jesus Christ,</p>
            <p className="mb-2">through the merits of His own most sacred Passion and Death,</p>
            <p className="mb-2">together with your sufferings at the foot of the cross;</p>
            <p className="mb-2">and through the united efficacy of both,</p>
            <p className="mb-2">obtain the grant of my present petition.</p>
            <p className="mb-2">To whom shall I resort in my wants and miseries</p>
            <p className="mb-2">if not to you, O Mother of Mercy,</p>
            <p className="mb-2">who, having so deeply drunk of the chalice of your Son,</p>
            <p className="mb-2">can compassionate the sorrows of those who still sigh</p>
            <p className="mb-2">in the land of exile?</p>
            <p className="font-semibold">Amen.</p>
          </div>
          
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Short Prayer</h3>
          <div className="text-lg text-gray-800 leading-relaxed">
            <p className="mb-2">O Sorrowful Mother,</p>
            <p className="mb-2">pray for us and help us</p>
            <p className="mb-2">to bear our crosses with patience and love.</p>
            <p className="mb-2">Unite our sufferings with yours</p>
            <p className="mb-2">and help us to grow closer to your Son, Jesus.</p>
            <p className="font-semibold">Amen.</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Seven Sorrows of Mary</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ol className="text-gray-700 space-y-3">
          <li><strong>1. The Prophecy of Simeon</strong> - "A sword will pierce your own soul too" (Luke 2:35)</li>
          <li><strong>2. The Flight into Egypt</strong> - Mary and Joseph flee with the infant Jesus (Matthew 2:13-15)</li>
          <li><strong>3. The Loss of Jesus in the Temple</strong> - Three days of searching for the 12-year-old Jesus (Luke 2:41-50)</li>
          <li><strong>4. Mary Meets Jesus Carrying the Cross</strong> - The Fourth Station of the Cross</li>
          <li><strong>5. The Crucifixion and Death of Jesus</strong> - Mary stands at the foot of the cross (John 19:25-27)</li>
          <li><strong>6. The Taking Down of Jesus from the Cross</strong> - Mary receives the body of her Son</li>
          <li><strong>7. The Burial of Jesus</strong> - Mary witnesses the burial of her beloved Son</li>
        </ol>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray to Our Lady of Sorrows</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>On September 15th</strong> - Feast day of Our Lady of Sorrows</li>
          <li>• <strong>On Fridays</strong> - Traditional day to honor the Passion of Christ</li>
          <li>• <strong>During Lent</strong> - Especially during Holy Week</li>
          <li>• <strong>In times of suffering</strong> - When facing difficulties or pain</li>
          <li>• <strong>For consolation</strong> - When seeking comfort in sorrow</li>
          <li>• <strong>For patience</strong> - When learning to bear crosses with love</li>
          <li>• <strong>Daily devotion</strong> - As a regular prayer to Mary</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">History and Significance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Biblical Foundation</h3>
          <p className="text-gray-700 text-sm">
            The devotion is based on the prophecy of Simeon and Mary's presence at the foot of the cross, 
            as recorded in the Gospels.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Seven Sorrows</h3>
          <p className="text-gray-700 text-sm">
            The seven sorrows represent key moments in Mary's life where she shared in the sufferings 
            of her Son, Jesus Christ.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Compassion</h3>
          <p className="text-gray-700 text-sm">
            Mary's sorrows teach us compassion and how to unite our sufferings with Christ's 
            for the salvation of souls.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Spiritual Growth</h3>
          <p className="text-gray-700 text-sm">
            This devotion helps us grow in patience, love, and understanding of the redemptive value 
            of suffering.
          </p>
        </div>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-black mb-6 text-center">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/prayers/memorare" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Memorare</h3>
              <p className="text-gray-600 text-sm">Powerful prayer of intercession to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/hail-mary" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Hail Mary</h3>
              <p className="text-gray-600 text-sm">Fundamental prayer to the Blessed Virgin Mary</p>
            </div>
          </Link>
          
          <Link href="/prayers/magnificat" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-300 hover:shadow-lg transition-all">
              <div className="text-3xl mb-3">🎵</div>
              <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600">Magnificat</h3>
              <p className="text-gray-600 text-sm">Mary's song of praise from the Gospel of Luke</p>
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