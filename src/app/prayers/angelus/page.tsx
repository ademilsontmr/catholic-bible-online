import type { Metadata } from "next";
import Link from "next/link";
import ShareButton from "@/components/ShareButton";

export const metadata: Metadata = {
  title: "Angelus – Catholic Prayer to the Blessed Virgin Mary | Catholic Bible Online",
  description: "Learn the Angelus prayer, a traditional Catholic devotion to the Blessed Virgin Mary. Discover its history, meaning, and when to pray it.",
  alternates: {
    canonical: "https://www.catholicbibleonline.com/prayers/angelus",
  },
  openGraph: {
    title: "Angelus – Catholic Prayer to the Blessed Virgin Mary",
    description: "Learn the Angelus prayer, a traditional Catholic devotion to the Blessed Virgin Mary.",
    url: "https://www.catholicbibleonline.com/prayers/angelus",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Angelus – Catholic Prayer to the Blessed Virgin Mary",
    description: "Learn the Angelus prayer, a traditional Catholic devotion to the Blessed Virgin Mary.",
  },
};

export default function AngelusPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:underline">Home</Link> &gt; 
        <Link href="/prayers" className="hover:underline">Prayers</Link> &gt; 
        <Link href="/prayers/basic" className="hover:underline">Basic Prayers</Link> &gt; 
        Angelus
      </nav>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🔔 Angelus – Catholic Prayer to the Blessed Virgin Mary</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The Angelus is a traditional Catholic devotion that commemorates the Incarnation of Jesus Christ. 
        This beautiful prayer is recited three times daily - at 6:00 AM, 12:00 PM, and 6:00 PM - and consists 
        of three Hail Marys with verses recalling the Annunciation. The Angelus helps us pause throughout the 
        day to remember the great mystery of God becoming man.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Full Text of the Angelus</h2>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <div className="text-lg text-gray-800 leading-relaxed">
          <p className="mb-4"><strong>V.</strong> The Angel of the Lord declared unto Mary.</p>
          <p className="mb-4"><strong>R.</strong> And she conceived of the Holy Spirit.</p>
          <p className="mb-4"><em>Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</em></p>
          
          <p className="mb-4"><strong>V.</strong> Behold the handmaid of the Lord.</p>
          <p className="mb-4"><strong>R.</strong> Be it done unto me according to thy word.</p>
          <p className="mb-4"><em>Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</em></p>
          
          <p className="mb-4"><strong>V.</strong> And the Word was made flesh.</p>
          <p className="mb-4"><strong>R.</strong> And dwelt among us.</p>
          <p className="mb-4"><em>Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</em></p>
          
          <p className="mb-4"><strong>V.</strong> Pray for us, O holy Mother of God.</p>
          <p className="mb-4"><strong>R.</strong> That we may be made worthy of the promises of Christ.</p>
          
          <p className="mb-4">Let us pray:</p>
          <p className="mb-4">Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, that we to whom the Incarnation of Christ, Thy Son, was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord.</p>
          
          <p className="font-semibold">Amen.</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">When to Pray the Angelus</h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>6:00 AM</strong> - Morning prayer to begin the day</li>
          <li>• <strong>12:00 PM</strong> - Noon prayer to pause in the middle of the day</li>
          <li>• <strong>6:00 PM</strong> - Evening prayer to end the day</li>
          <li>• <strong>When you hear church bells</strong> - Many churches ring bells for the Angelus</li>
          <li>• <strong>As a family</strong> - Pray together as a family devotion</li>
          <li>• <strong>During Advent and Christmas</strong> - Especially appropriate during these seasons</li>
        </ul>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Historical Background</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Angelus has its roots in the medieval practice of praying three Hail Marys at the sound of the 
          evening bell. The name "Angelus" comes from the opening words "Angelus Domini nuntiavit Mariae" 
          (The Angel of the Lord declared unto Mary).
        </p>
        
        <p className="text-gray-700 mb-4">
          The devotion was popularized by Pope John XXII in the 14th century, who granted indulgences to 
          those who prayed it. The current form of the prayer was standardized in the 17th century. 
          The practice of ringing church bells for the Angelus became widespread in the 18th century.
        </p>
        
        <p className="text-gray-700 mb-6">
          Today, the Angelus remains one of the most beloved Catholic devotions, helping the faithful 
          pause throughout the day to remember the Incarnation and seek Mary's intercession.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Meaning and Symbolism</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Angelus prayer commemorates three key moments in the mystery of the Incarnation:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>The Annunciation</strong> - When the Angel Gabriel announced to Mary that she would conceive Jesus</li>
          <li>• <strong>Mary's Fiat</strong> - When Mary said "Yes" to God's plan</li>
          <li>• <strong>The Incarnation</strong> - When the Word became flesh and dwelt among us</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Each part of the prayer helps us meditate on these profound mysteries and invites us to follow 
          Mary's example of faith and obedience to God's will.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Spiritual Benefits</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Daily Pause</h3>
          <p className="text-gray-700 text-sm">
            Helps you pause three times daily to remember God's presence and love.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Marian Devotion</h3>
          <p className="text-gray-700 text-sm">
            Deepens your relationship with the Blessed Virgin Mary and seeks her intercession.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Incarnation Focus</h3>
          <p className="text-gray-700 text-sm">
            Keeps you mindful of the great mystery of God becoming man for our salvation.
          </p>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Faith Example</h3>
          <p className="text-gray-700 text-sm">
            Teaches you to follow Mary's example of faith and obedience to God's will.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Pray the Angelus</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          To pray the Angelus effectively:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Find a quiet moment</strong> - Take a few minutes to pause and pray</li>
          <li>• <strong>Make the Sign of the Cross</strong> - Begin with the traditional Catholic gesture</li>
          <li>• <strong>Pray slowly and thoughtfully</strong> - Don't rush through the words</li>
          <li>• <strong>Meditate on the mysteries</strong> - Think about what each part means</li>
          <li>• <strong>Pray with others</strong> - When possible, pray with family or friends</li>
          <li>• <strong>Set reminders</strong> - Use your phone or watch to remind you of the times</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          Remember that the Angelus is not about being perfect, but about taking time to remember God's 
          love and Mary's example throughout your day.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Biblical Foundation</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          The Angelus is deeply rooted in Scripture:
        </p>
        
        <ul className="text-gray-700 mb-6 space-y-2">
          <li>• <strong>Luke 1:26-38</strong> - The Annunciation, when the Angel Gabriel appeared to Mary</li>
          <li>• <strong>Luke 1:38</strong> - Mary's response: "Behold, I am the handmaid of the Lord"</li>
          <li>• <strong>John 1:14</strong> - "And the Word became flesh and dwelt among us"</li>
          <li>• <strong>Luke 1:28</strong> - "Hail, full of grace, the Lord is with you"</li>
        </ul>
        
        <p className="text-gray-700 mb-6">
          The prayer helps us meditate on these biblical events and their significance for our salvation.
        </p>
      </div>

      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Remembering</h2>
      
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
        <ul className="text-gray-700 space-y-2">
          <li>• <strong>Set alarms</strong> - Use your phone to remind you at 6 AM, 12 PM, and 6 PM</li>
          <li>• <strong>Listen for church bells</strong> - Many churches still ring bells for the Angelus</li>
          <li>• <strong>Pray with family</strong> - Make it a family devotion</li>
          <li>• <strong>Keep a prayer card</strong> - Have the text handy until you memorize it</li>
          <li>• <strong>Start with one time</strong> - Begin with just one time per day and build up</li>
          <li>• <strong>Use an app</strong> - There are apps that remind you to pray the Angelus</li>
          <li>• <strong>Don't give up</strong> - Even if you miss some times, keep trying</li>
        </ul>
      </div>

      {/* Related Prayers */}
      <section className="border-t border-gray-200 pt-8 mt-8">
        <h2 className="text-2xl font-bold text-black mb-6">Related Prayers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  Prayer to the Blessed Virgin Mary, combining the words of the Angel Gabriel and Saint Elizabeth.
                </p>
              </div>
            </div>
          </Link>
          
          <Link href="/prayers/marian" className="group block">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="p-4">
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800">
                  Marian Prayers
                </span>
                <h3 className="text-lg font-semibold text-black mt-2 group-hover:text-gray-700 transition-colors">
                  Marian Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete collection of prayers to the Blessed Virgin Mary.
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
                  Rosary Prayers
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  Complete rosary prayers and all mysteries of the Rosary.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Navigation */}
      <div className="text-center mt-12">
        <Link
          href="/prayers/basic"
          className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          ← Back to Basic Prayers
        </Link>
      </div>
    </main>
  );
} 