import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis of Paola - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Francis of Paola, founder of the Minim Friars and miracle worker who served kings and the poor.',
  keywords: [
    'st francis of paola',
    'saint francis of paola',
    'st francis of paola biography',
    'st francis of paola feast day',
    'st francis of paola patron saint',
    'catholic saints',
    'april 2 feast day',
    'minim friars',
    'hermit saints'
  ],
  openGraph: {
    title: 'St. Francis of Paola - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis of Paola, founder of the Minim Friars.',
    url: 'https://catholicbibleonline.com/saints/st-francis-paola',
  },
  twitter: {
    title: 'St. Francis of Paola - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis of Paola, founder of the Minim Friars.',
  }
}

export default function StFrancisPaolaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis of Paola
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Minim Friars, Hermit, Miracle Worker, and Confessor to Kings
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Francis of Paola</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 2</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Hermit</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Francis of Paola</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Francis of Paola was born at Paola, Italy, and was educated at the Franciscan friary of San Marco there. 
                From an early age, he showed a deep inclination toward prayer and solitude, demonstrating a precocious 
                spirituality that would mark his entire life.
              </p>
              
              <p className="mb-6">
                At the age of fifteen, Francis became a hermit near Paola, choosing a life of solitude and prayer 
                over the comforts of the world. This early decision to embrace the eremitical life demonstrated his 
                extraordinary commitment to God and his desire to live a life of radical simplicity and penance.
              </p>
              
              <p className="mb-6">
                In 1436, Francis and two companions began a community that is considered the foundation of the Minim Friars. 
                This small beginning would grow into a significant religious order that would spread throughout Europe 
                and influence countless souls.
              </p>
              
              <p className="mb-6">
                Some fifteen years later, Francis built a monastery where he had led his eremitical life and set a Rule 
                for his followers emphasizing penance, charity, and humility. To the three traditional monastic vows 
                of poverty, chastity, and obedience, he added a fourth vow of fasting and abstinence from meat, 
                reflecting his commitment to extreme asceticism.
              </p>
              
              <p className="mb-6">
                Francis also wrote a rule for tertiaries and nuns, showing his concern for all who wished to follow 
                his way of life, whether in the monastery or in the world. His spiritual guidance extended beyond 
                the walls of his monastery to embrace all who sought his counsel.
              </p>
              
              <p className="mb-6">
                Francis was credited with many miracles and had the gifts of prophecy and insight into men's hearts. 
                These supernatural gifts, combined with his reputation for holiness, made him a sought-after spiritual 
                advisor and miracle worker.
              </p>
              
              <p className="mb-6">
                The Order was approved by Pope Sixtus IV in 1474 with the name Hermits of St. Francis of Assisi, 
                which was later changed to Minim Friars in 1492. This papal approval marked the official recognition 
                of Francis's spiritual vision and the beginning of the order's expansion.
              </p>
              
              <p className="mb-6">
                Francis established foundations in southern Italy and Sicily, and his fame was such that at the 
                request of the dying King Louis XI of France, Pope Sixtus II ordered him to France, as the King 
                felt he could be cured by Francis. Though the king was not physically cured, he was so comforted 
                by Francis's presence that Louis's son Charles VIII became Francis's friend and endowed several 
                monasteries for the Minims.
              </p>
              
              <p>
                Francis spent the rest of his life at the monastery of Plessis, France, which Charles built for him. 
                He died there on April 2nd and was canonized in 1519. His feast day is April 2.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Francis of Paola: Hermit and Miracle Worker</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Minim Friars</h3>
              <p className="mb-6">
                St. Francis of Paola's most enduring legacy is the foundation of the Minim Friars, a religious order 
                that continues to serve the Church today. The order's emphasis on penance, charity, and humility, 
                along with its unique fourth vow of fasting and abstinence from meat, reflects Francis's vision 
                of radical Christian discipleship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Eremitical Life</h3>
              <p className="mb-6">
                Francis's choice to become a hermit at the age of fifteen demonstrates the power of early spiritual 
                calling and the possibility of living a life of deep prayer and solitude in the modern world. 
                His eremitical life serves as a model for those seeking deeper intimacy with God through silence 
                and contemplation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miracle Worker and Prophet</h3>
              <p className="mb-6">
                Francis's reputation as a miracle worker and his gifts of prophecy and insight into men's hearts 
                show the extraordinary graces that God bestows on those who dedicate themselves completely to His 
                service. These supernatural gifts were not for his own glory but for the benefit of others and 
                the glory of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Confessor to Kings</h3>
              <p>
                Francis's ministry to King Louis XI of France demonstrates that holiness transcends social barriers. 
                His ability to comfort and counsel even the most powerful men of his time shows that true spiritual 
                authority comes from God and can touch hearts at every level of society.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 2</div>
              <p className="text-gray-600">Memorial of St. Francis of Paola, Hermit</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Francis of Paola is celebrated on April 2nd, the date of his death in 1507. 
                This memorial honors his eremitical life, his miracles, and his founding of the Minim Friars.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Significance</h3>
              <p className="mb-6">
                St. Francis's feast day serves as a reminder of the importance of prayer, penance, and humility 
                in the Christian life. His example encourages us to seek God in silence and to live lives of 
                radical simplicity and charity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those seeking spiritual 
                guidance, for the gift of prophecy and insight, for those living eremitical or contemplative 
                lives, and for the success of religious orders.
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
                  <li>• <strong>Hermits and Recluses:</strong> Patron of those living solitary lives</li>
                  <li>• <strong>Minim Friars:</strong> Founder and patron of the order</li>
                  <li>• <strong>Miracle Workers:</strong> Patron of those seeking miraculous intercession</li>
                  <li>• <strong>Prophets:</strong> Helper for those seeking spiritual insight</li>
                  <li>• <strong>Kings and Rulers:</strong> Patron of those in positions of authority</li>
                  <li>• <strong>Penitents:</strong> Helper for those seeking penance and conversion</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Guidance:</strong> Helper for those seeking direction</li>
                  <li>• <strong>Contemplative Life:</strong> Patron of those called to prayer</li>
                  <li>• <strong>Fasting and Abstinence:</strong> Helper for those practicing penance</li>
                  <li>• <strong>Religious Orders:</strong> Patron of new religious foundations</li>
                  <li>• <strong>Healing:</strong> Helper for those seeking physical or spiritual healing</li>
                  <li>• <strong>Humility:</strong> Patron of those seeking to grow in humility</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Francis of Paola</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Francis of Paola, hermit and founder of the Minim Friars, who dedicated your life 
                    to prayer, penance, and humility, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to seek God in silence and to live lives of radical simplicity and charity. 
                    Grant us the grace to practice penance and to grow in humility as you did.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with spiritual insight and the 
                    courage to follow God's will in all things. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Spiritual Guidance</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Francis of Paola, who had the gift of insight into men's hearts and the ability 
                    to guide souls to God, intercede for all those who seek spiritual direction and guidance.
                  </p>
                  <p>
                    Help us to discern God's will in our lives and to follow the path He has chosen for us. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Humility</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Francis of Paola, who lived a life of great humility and penance, help us to 
                    overcome our pride and to grow in the virtue of humility.
                  </p>
                  <p>
                    Teach us to see ourselves as we truly are before God and to serve others with love 
                    and compassion. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, lover of nature and poverty, inspiration for the Minims.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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