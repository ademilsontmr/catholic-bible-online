import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Joyful Mysteries – Rosary Prayers | Catholic Bible Online",
  description: "Pray the Joyful Mysteries of the Rosary: The Annunciation, Visitation, Nativity, Presentation, and Finding in the Temple. Complete guide with meditations.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/joyful-mysteries",
  },
  openGraph: {
    title: "Joyful Mysteries – Rosary Prayers",
    description: "Pray the Joyful Mysteries of the Rosary with complete meditations and biblical references.",
    url: "https://www.catholicbibleonline.com/prayers/joyful-mysteries",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joyful Mysteries – Rosary Prayers",
    description: "Pray the Joyful Mysteries of the Rosary with complete meditations and biblical references.",
  },
};

export default function JoyfulMysteriesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/rosary" className="hover:underline">Rosary Prayers</Link> &gt; 
        Joyful Mysteries
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">😊 Joyful Mysteries – Rosary Prayers</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Joyful Mysteries of the Rosary focus on the joyful events in the early life of Jesus and Mary. 
        These mysteries are prayed on Mondays and Saturdays, and they help us meditate on the Incarnation 
        and the early years of Jesus' life. Each mystery invites us to share in the joy of God's plan of salvation.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Joyful Mysteries</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Mondays</strong> - Traditional day for the Joyful Mysteries</li>
          <li>• <strong>Saturdays</strong> - Also dedicated to the Joyful Mysteries</li>
          <li>• <strong>During Advent</strong> - Especially appropriate during the season of preparation for Christmas</li>
          <li>• <strong>On Marian feast days</strong> - When celebrating events in Mary's life</li>
          <li>• <strong>When seeking joy</strong> - During times of sadness or difficulty</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">The Five Joyful Mysteries</h2>
      
      <div className="space-y-8 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">1. The Annunciation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Luke 1:26-38</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                The Angel Gabriel appears to Mary and announces that she will conceive and bear the Son of God. 
                Mary's "Yes" to God's plan shows her perfect obedience and trust in God's will.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Humility</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to say "Yes" to God's will in your life, following Mary's example of humility and trust.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">2. The Visitation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Luke 1:39-56</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Mary visits her cousin Elizabeth, who is pregnant with John the Baptist. Elizabeth recognizes 
                that Mary is carrying the Lord, and Mary responds with her beautiful Magnificat.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Charity</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to serve others with love and to recognize Christ in those around you.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">3. The Nativity</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Luke 2:1-20</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus is born in a humble stable in Bethlehem. The angels announce His birth to the shepherds, 
                who come to adore the newborn King. God becomes man to save us.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Poverty</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to embrace simplicity and to recognize the true meaning of Christmas.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">4. The Presentation</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Luke 2:22-40</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Mary and Joseph present Jesus in the Temple, where Simeon and Anna recognize Him as the Messiah. 
                Simeon prophesies that a sword will pierce Mary's heart.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Obedience</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to be obedient to God's will and to offer your life to Him.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">5. The Finding in the Temple</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Biblical Reference</h4>
              <p className="text-gray-700 text-sm mb-4">Luke 2:41-52</p>
              <h4 className="font-semibold text-gray-800 mb-2">Meditation</h4>
              <p className="text-gray-700 text-sm">
                Jesus, at age 12, is found in the Temple discussing with the teachers. He tells Mary and Joseph 
                that He must be about His Father's business. Jesus grows in wisdom and grace.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fruit of the Mystery</h4>
              <p className="text-gray-700 text-sm mb-4"><strong>Piety</strong></p>
              <h4 className="font-semibold text-gray-800 mb-2">Prayer Intention</h4>
              <p className="text-gray-700 text-sm">
                Pray for the grace to grow in wisdom and to always seek God's will in your life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Joyful Mysteries</h2>
      
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
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Joy and Hope</h3>
          <p className="text-gray-700 text-sm">
            The Joyful Mysteries remind us of the joy of God's love and give us hope in His promises.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Humility and Trust</h3>
          <p className="text-gray-700 text-sm">
            We learn from Mary's example of humility and trust in God's plan for our lives.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Service to Others</h3>
          <p className="text-gray-700 text-sm">
            The Visitation teaches us to serve others with love and recognize Christ in them.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth in Wisdom</h3>
          <p className="text-gray-700 text-sm">
            We are inspired to grow in wisdom and grace, following Jesus' example.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Meditation</h2>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Use your imagination</strong> - Picture yourself present at each event</li>
          <li>• <strong>Reflect on the emotions</strong> - Consider the joy, wonder, and love in each mystery</li>
          <li>• <strong>Apply to your life</strong> - Think about how each mystery relates to your own journey</li>
          <li>• <strong>Pray for specific graces</strong> - Ask for the fruit of each mystery</li>
          <li>• <strong>Be patient</strong> - Don't worry if your mind wanders; gently return to the mystery</li>
          <li>• <strong>Use visual aids</strong> - Icons or pictures can help you focus</li>
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