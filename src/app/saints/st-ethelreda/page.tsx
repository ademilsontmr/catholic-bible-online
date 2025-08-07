import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ethelreda (Audrey) - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ethelreda (Audrey), English princess who founded the great abbey of Ely and lived a life of virginity and devotion.',
  keywords: [
    'st ethelreda',
    'saint ethelreda',
    'st audrey',
    'saint audrey',
    'st ethelreda biography',
    'st ethelreda feast day',
    'st ethelreda patron saint',
    'catholic saints',
    'june 23 feast day',
    'virgin saints',
    'ely abbey'
  ],
  openGraph: {
    title: 'St. Ethelreda (Audrey) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ethelreda (Audrey), English princess who founded the great abbey of Ely.',
    url: 'https://catholicbibleonline.com/saints/st-ethelreda',
  },
  twitter: {
    title: 'St. Ethelreda (Audrey) - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ethelreda (Audrey), English princess who founded the great abbey of Ely.',
  }
}

export default function StEthelredaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ethelreda (Audrey)
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            English Princess, Virgin, Founder of Ely Abbey, Model of Chastity and Devotion
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ethelreda (Audrey)</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ethelreda (Audrey)</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Around the year 640, there was an English princess named Ethelreda, but she was known 
                as Audrey. Born into royalty, she was the daughter of King Anna of East Anglia and 
                grew up in a time when Christianity was spreading throughout England.
              </p>
              
              <p className="mb-6">
                From an early age, Ethelreda felt called to dedicate her life to God through a vow 
                of perpetual virginity. However, as a princess, she was expected to marry for 
                political reasons. Her first marriage was arranged, but it was said that the marriage 
                was never consummated, as Ethelreda remained faithful to her vow of virginity.
              </p>
              
              <p className="mb-6">
                After three years, her first husband died, leaving her a widow. This should have 
                freed her to pursue her religious vocation, but political circumstances required 
                her to marry again, this time for reasons of state. Her second husband was much 
                younger and soon grew tired of living as brother and sister.
              </p>
              
              <p className="mb-6">
                When her young husband began to make advances on her, Ethelreda continually refused, 
                maintaining her commitment to her vow of virginity. Frustrated by her steadfastness, 
                he eventually attempted to bribe the local bishop, Saint Wilfrid of York, to release 
                Audrey from her vows.
              </p>
              
              <p className="mb-6">
                Saint Wilfrid, recognizing the sacredness of Ethelreda's vow, refused to help her 
                husband and instead helped Audrey escape from this difficult situation. She fled 
                south, with her husband following in pursuit.
              </p>
              
              <p className="mb-6">
                They reached a promontory known as Colbert's Head, where a heaven-sent seven-day 
                high tide miraculously separated the two, preventing her husband from reaching her. 
                This divine intervention allowed Ethelreda to escape safely.
              </p>
              
              <p className="mb-6">
                Eventually, Ethelreda's husband left and married someone more willing, while Audrey 
                was finally free to pursue her religious vocation. She took the veil and founded 
                the great abbey of Ely, where she lived an austere life of prayer, penance, and 
                service to God.
              </p>
              
              <p>
                Ethelreda eventually died of an enormous and unsightly tumor on her neck, which she 
                gratefully accepted as Divine retribution for all the necklaces she had worn in her 
                early years as a princess. Throughout the Middle Ages, a festival known as "St. 
                Audrey's Fair" was held at Ely on her feast day, and the exceptional shoddiness of 
                the merchandise, especially the neckerchiefs, contributed to the English language 
                the word "tawdry," a corruption of "Saint Audrey."
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ethelreda (Audrey): Virgin and Abbey Founder</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virginity and Chastity</h3>
              <p className="mb-6">
                St. Ethelreda's unwavering commitment to her vow of virginity, even in the face of 
                political pressure and marital expectations, serves as a powerful example of what 
                it means to remain faithful to one's religious calling. Her story demonstrates that 
                God's call takes precedence over worldly obligations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Ely Abbey</h3>
              <p className="mb-6">
                Ethelreda's foundation of the great abbey of Ely was a significant contribution to 
                the religious and cultural life of medieval England. The abbey became a center of 
                learning, prayer, and Christian witness, continuing her legacy of devotion to God 
                and service to the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Providence and Protection</h3>
              <p className="mb-6">
                The miraculous seven-day high tide that separated Ethelreda from her pursuing husband 
                demonstrates God's providential care for those who remain faithful to their vows. 
                This divine intervention shows that God will provide a way for those who seek to 
                follow His will.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Impact</h3>
              <p>
                The "St. Audrey's Fair" that was held in her honor throughout the Middle Ages, 
                and the subsequent corruption of her name into the English word "tawdry," shows 
                the lasting cultural impact of her story. Even in this linguistic legacy, we see 
                how her life continues to influence English culture and language.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 23</div>
              <p className="text-gray-600">Memorial of St. Ethelreda (Audrey), Virgin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ethelreda (Audrey) is celebrated on June 23rd. This memorial 
                honors her virginity, her founding of Ely Abbey, and her courageous witness to 
                the value of religious vows.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                St. Ethelreda's story is particularly significant in the context of early English 
                Christianity, when the Church was still establishing itself in the British Isles. 
                Her example of royal piety and religious dedication helped to establish the 
                importance of monastic life in medieval England.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those seeking 
                to remain faithful to their religious vows, for those facing pressure to compromise 
                their values, and for the protection of religious freedom and monastic life.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Virginity and Chastity:</strong> Patroness of those preserving virginity</li>
                  <li>• <strong>Religious Vows:</strong> Protector of those who have taken vows</li>
                  <li>• <strong>Ely:</strong> Patroness of the city and diocese of Ely, England</li>
                  <li>• <strong>English Royalty:</strong> Patroness of English princesses and queens</li>
                  <li>• <strong>Monastic Life:</strong> Patroness of nuns and religious communities</li>
                  <li>• <strong>Widows:</strong> Helper for those who have lost their spouses</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection from Temptation:</strong> Helper against moral dangers</li>
                  <li>• <strong>Divine Providence:</strong> Patroness of those seeking God's guidance</li>
                  <li>• <strong>Religious Freedom:</strong> Protector of those pursuing religious vocations</li>
                  <li>• <strong>Strength in Trials:</strong> Helper for those facing difficult circumstances</li>
                  <li>• <strong>Consecrated Virginity:</strong> Patroness of those called to virginity</li>
                  <li>• <strong>English Heritage:</strong> Protector of English Christian traditions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Prayers Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🙏 Prayers</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="space-y-8">
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ethelreda (Audrey)</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ethelreda (Audrey), English princess and virgin, who courageously 
                    maintained your vow of virginity even in the face of political pressure and 
                    marital expectations, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to remain faithful to our religious commitments and to trust in God's 
                    providence when we face difficult circumstances. Teach us to put God's will 
                    above worldly obligations and to seek His guidance in all our decisions.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to remain 
                    faithful to our vows and commitments to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vows</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ethelreda (Audrey), who so faithfully kept your vow of virginity despite 
                    all obstacles, intercede for all those who have taken religious vows or are 
                    considering religious life. Help them to remain steadfast in their commitments 
                    and to find strength in God's grace.
                  </p>
                  <p>
                    May they, like you, find joy and fulfillment in serving God with their whole 
                    hearts. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Divine Providence</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ethelreda (Audrey), who experienced God's miraculous protection through 
                    the seven-day high tide, help us to trust in God's providence in our own lives. 
                    Teach us to believe that God will provide a way for those who seek to follow His will.
                  </p>
                  <p>
                    May we, like you, find comfort in knowing that God watches over those who 
                    remain faithful to Him. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who refused marriage to remain faithful to Christ, patroness of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and one of the Fourteen Holy Helpers, patroness of childbirth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 