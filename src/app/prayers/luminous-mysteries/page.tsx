import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luminous Mysteries – Rosary Prayers | Catholic Bible Online",
  description: "Pray the Luminous Mysteries of the Rosary: The Baptism of Jesus, Wedding at Cana, Proclamation of the Kingdom, Transfiguration, and Institution of the Eucharist. Complete guide with meditations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/luminous-mysteries",
  },
  openGraph: {
    title: "Luminous Mysteries – Rosary Prayers",
    description: "Pray the Luminous Mysteries of the Rosary with complete meditations and biblical references.",
    url: "https://www.catholicbibleonline.com/prayers/luminous-mysteries",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminous Mysteries – Rosary Prayers",
    description: "Pray the Luminous Mysteries of the Rosary with complete meditations and biblical references.",
  },
};

export default function LuminousMysteriesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Luminous Mysteries
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🌟 Luminous Mysteries – Rosary Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Luminous Mysteries of the Rosary, also known as the Mysteries of Light, were introduced by Pope 
        John Paul II in 2002. These mysteries focus on the public ministry of Jesus Christ, revealing His 
        divine nature and mission. They are prayed on Thursdays and help us contemplate the light of Christ 
        in the world.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Luminous Mysteries</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Thursdays</strong> - Traditional day for the Luminous Mysteries</li>
          <li>• <strong>During Ordinary Time</strong> - To reflect on Christ's public ministry</li>
          <li>• <strong>On feast days of Christ</strong> - Such as the Baptism of the Lord</li>
          <li>• <strong>When seeking enlightenment</strong> - To understand God's will better</li>
          <li>• <strong>For evangelization</strong> - To grow in missionary zeal</li>
          <li>• <strong>Before the Eucharist</strong> - To prepare for receiving Christ</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Five Luminous Mysteries</h2>
      
      <div className="space-y-8 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. The Baptism of Jesus</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 3:13-17, Mark 1:9-11, Luke 3:21-22</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is baptized by John the Baptist in the Jordan River. The heavens open, the Holy Spirit 
                descends like a dove, and the Father's voice proclaims: "This is my beloved Son, with whom I am well pleased."
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Openness to the Holy Spirit</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to be open to the Holy Spirit's guidance and to recognize your identity as a child of God.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. The Wedding at Cana</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">John 2:1-12</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus performs His first miracle at the wedding feast in Cana, turning water into wine at His 
                mother's request. This reveals His divine power and Mary's role as intercessor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Trust in Mary's Intercession</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to trust in Mary's intercession and to bring your needs to Jesus through her.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. The Proclamation of the Kingdom</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Mark 1:14-15, Matthew 4:17, Luke 4:43</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus proclaims the Kingdom of God and calls people to repentance and faith. He teaches through 
                parables and performs miracles, showing that the Kingdom is at hand.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Repentance and Conversion</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to repent of your sins and to help others come to know the Kingdom of God.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. The Transfiguration</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 17:1-8, Mark 9:2-8, Luke 9:28-36</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is transfigured on Mount Tabor, His face shining like the sun and His clothes becoming 
                dazzling white. Moses and Elijah appear, and the Father's voice is heard: "This is my beloved Son; listen to Him."
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Desire for Holiness</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to be transformed by Christ's light and to grow in holiness.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. The Institution of the Eucharist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Matthew 26:26-29, Mark 14:22-25, Luke 22:19-20, 1 Corinthians 11:23-26</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                At the Last Supper, Jesus institutes the Eucharist, giving His disciples His Body and Blood 
                under the appearances of bread and wine. He commands them to "do this in memory of me."
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Adoration</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to adore Jesus in the Eucharist and to receive Him worthily in Holy Communion.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Luminous Mysteries</h2>
      
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
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding of Christ's Mission</h3>
          <p className="text-gray-700 text-sm">
            The Luminous Mysteries help us understand Jesus' public ministry and His mission to save souls.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Love for the Eucharist</h3>
          <p className="text-gray-700 text-sm">
            We grow in love and appreciation for the Eucharist, the source and summit of our faith.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Missionary Zeal</h3>
          <p className="text-gray-700 text-sm">
            We are inspired to share the Gospel and bring others to Christ, following Jesus' example.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Transformation in Christ</h3>
          <p className="text-gray-700 text-sm">
            We are called to be transformed by Christ's light and to become more like Him.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Meditation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Focus on the light</strong> - Let these mysteries illuminate your understanding of Christ</li>
          <li>• <strong>Reflect on the mission</strong> - Consider how you can participate in Christ's mission</li>
          <li>• <strong>Apply to your life</strong> - Think about how each mystery relates to your daily life</li>
          <li>• <strong>Pray for specific graces</strong> - Ask for the fruit of each mystery</li>
          <li>• <strong>Be open to transformation</strong> - Allow Christ's light to change you</li>
          <li>• <strong>Use visual aids</strong> - Icons or images can help you focus on the light of Christ</li>
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
          
          <Link href="/prayers/glorious-mysteries" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                  Rosary Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Glorious Mysteries
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  The five Glorious Mysteries of the Rosary, prayed on Wednesday and Sunday.
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