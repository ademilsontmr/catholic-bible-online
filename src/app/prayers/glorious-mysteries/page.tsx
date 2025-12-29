import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Glorious Mysteries – Rosary Prayers | Catholic Bible Online",
  description: "Pray the Glorious Mysteries of the Rosary: The Resurrection, Ascension, Descent of the Holy Spirit, Assumption, and Coronation. Complete guide with meditations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/glorious-mysteries",
  },
  openGraph: {
    title: "Glorious Mysteries – Rosary Prayers",
    description: "Pray the Glorious Mysteries of the Rosary with complete meditations and biblical references.",
    url: "https://www.catholicbibleonline.com/prayers/glorious-mysteries",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glorious Mysteries – Rosary Prayers",
    description: "Pray the Glorious Mysteries of the Rosary with complete meditations and biblical references.",
  },
};

export default function GloriousMysteriesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Glorious Mysteries
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">✨ Glorious Mysteries – Rosary Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Glorious Mysteries of the Rosary focus on the triumph of Jesus Christ and the Blessed Virgin Mary. 
        These mysteries celebrate the victory of life over death, the fulfillment of God's promises, and the 
        hope of eternal glory. They are prayed on Wednesdays and Sundays, filling us with joy and hope.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Glorious Mysteries</h2>
      
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Wednesdays</strong> - Traditional day for the Glorious Mysteries</li>
          <li>• <strong>Sundays</strong> - Also dedicated to the Glorious Mysteries (day of the Resurrection)</li>
          <li>• <strong>During Easter Season</strong> - To celebrate Christ's victory over death</li>
          <li>• <strong>On Marian feast days</strong> - To honor Mary's Assumption and Coronation</li>
          <li>• <strong>When seeking hope</strong> - During times of difficulty or despair</li>
          <li>• <strong>For the dead</strong> - To pray for the souls in purgatory</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Five Glorious Mysteries</h2>
      
      <div className="space-y-8 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. The Resurrection</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 28:1-10, Mark 16:1-8, Luke 24:1-12, John 20:1-18</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus rises from the dead on the third day, conquering sin and death. The tomb is empty, 
                and He appears to Mary Magdalene and the disciples. This is the foundation of our faith 
                and the promise of our own resurrection.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Faith</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to believe in the Resurrection and to live with hope in eternal life.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. The Ascension</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Mark 16:19-20, Luke 24:50-53, Acts 1:6-11</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus ascends into heaven forty days after His Resurrection. He promises to send the Holy Spirit 
                and commissions His disciples to go forth and make disciples of all nations. He will come again 
                in glory.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Hope</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to spread the Gospel and to look forward to Christ's return in glory.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. The Descent of the Holy Spirit</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Acts 2:1-13</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                The Holy Spirit descends upon the Apostles and Mary on Pentecost. They are filled with courage 
                and begin to preach the Gospel. The Church is born, and thousands are converted. The Spirit 
                continues to guide the Church today.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Love of God</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to be open to the Holy Spirit's guidance and to witness to Christ with courage.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. The Assumption</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Revelation 12:1-6 (symbolic), Luke 1:28, 42</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Mary is taken up body and soul into heaven at the end of her earthly life. This is a sign of 
                God's promise to all who follow Christ faithfully. Mary, as the first disciple, shows us the 
                way to eternal life.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Union with Mary</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to follow Mary's example of faithfulness and to trust in God's promises.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. The Coronation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Revelation 12:1, Psalm 45:9, Luke 1:32</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Mary is crowned Queen of Heaven and Earth by her Son, Jesus. She reigns as Queen of Angels 
                and Saints, interceding for us before the throne of God. She is our mother and queen, 
                always ready to help her children.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Trust in Mary's Intercession</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to trust in Mary's powerful intercession and to honor her as our Queen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Glorious Mysteries</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4">Begin with the opening prayers of the Rosary:</p>
          <ul className="mb-4 space-y-2">
            <li>• Sign of the Cross</li>
            <li>• Apostles' Creed</li>
            <li>• Our Father</li>
            <li>• 3 Hail Marys (for faith, hope, and charity)</li>
            <li>• Glory Be</li>
          </ul>
          <p className="mb-4">Then pray each mystery:</p>
          <ul className="space-y-2">
            <li>• Announce the mystery</li>
            <li>• Pray 1 Our Father</li>
            <li>• Pray 10 Hail Marys (meditating on the mystery)</li>
            <li>• Pray 1 Glory Be</li>
            <li>• Pray the Fatima Prayer (optional)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Hope and Joy</h3>
          <p className="text-gray-700 text-sm">
            The Glorious Mysteries fill us with hope and joy, reminding us of our ultimate destiny in heaven.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Faith in the Resurrection</h3>
          <p className="text-gray-700 text-sm">
            We strengthen our faith in the Resurrection and the promise of eternal life.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Trust in Mary</h3>
          <p className="text-gray-700 text-sm">
            We grow in trust in Mary's intercession and her role as our spiritual mother and queen.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Missionary Zeal</h3>
          <p className="text-gray-700 text-sm">
            We are inspired to share the Gospel and bring others to Christ, following the Apostles' example.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Meditation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Focus on joy</strong> - Let these mysteries fill you with the joy of the Resurrection</li>
          <li>• <strong>Imagine the glory</strong> - Picture the splendor of heaven and the triumph of Christ</li>
          <li>• <strong>Give thanks</strong> - Thank God for the gift of salvation and eternal life</li>
          <li>• <strong>Pray for the dead</strong> - Offer these mysteries for the souls in purgatory</li>
          <li>• <strong>Ask for Mary's help</strong> - Seek her intercession for your needs</li>
          <li>• <strong>Rejoice in hope</strong> - Let these mysteries strengthen your hope in God's promises</li>
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
          
          <Link href="/prayers/luminous-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Luminous Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Luminous Mysteries of the Rosary, prayed on Thursday.
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