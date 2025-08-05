import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bernard - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Abbot and Doctor of the Church, known for his profound spirituality and influence.',
  keywords: [
    'st bernard',
    'saint bernard',
    'st bernard of clairvaux',
    'bernard biography',
    'bernard feast day',
    'bernard patron saint',
    'cistercian order',
    'abbey of clairvaux',
    'doctor of the church',
    'august 20 feast day'
  ],
  openGraph: {
    title: 'St. Bernard - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Abbot and Doctor of the Church, known for his profound spirituality and influence.',
    url: 'https://catholicbibleonline.com/saints/st-bernard',
  },
  twitter: {
    title: 'St. Bernard - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Abbot and Doctor of the Church, known for his profound spirituality and influence.',
  }
}

export default function StBernardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bernard of Clairvaux
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Abbot and Doctor of the Church, Mellifluous Doctor
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bernard</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Monastic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bernard</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bernard was born of noble parentage in Burgundy, France, in the castle of Fontaines near Dijon. Under the care of his pious parents he was sent at an early age to a college at Chatillon, where he was conspicuous for his remarkable piety and spirit of recollection. At the same place he entered upon the studies of theology and Holy Scripture.
              </p>
              
              <p className="mb-6">
                After the death of his mother, fearing the snares and temptations of the world, he resolved to embrace the newly established and very austere institute of the Cistercian Order, of which he was destined to become the greatest ornament. He also persuaded his brothers and several of his friends to follow his example.
              </p>
              
              <p className="mb-6">
                In 1113, St. Bernard, with thirty young noblemen, presented himself to the holy Abbot, St. Stephen, at Citeaux. After a novitiate spent in great fervor, he made his profession in the following year. His superior soon after, seeing the great progress he had made in the spiritual life, sent him with twelve monks to found a new monastery, which afterward became known as the celebrated Abbey of Clairvaux.
              </p>
              
              <p className="mb-6">
                St. Bernard was at once appointed Abbot and began that active life which has rendered him the most conspicuous figure in the history of the 12th century. He founded numerous other monasteries, composed a number of works and undertook many journeys for the honor of God. Several Bishoprics were offered him, but he refused them all.
              </p>
              
              <p className="mb-6">
                The reputation of St. Bernard spread far and wide; even the Popes were governed by his advice. He was commissioned by Pope Eugene III to preach the second Crusade. In obedience to the Sovereign Pontiff he traveled through France and Germany, and aroused the greatest enthusiasm for the holy war among the masses of the population. The failure of the expedition raised a great storm against the saint, but he attributed it to the sins of the Crusaders.
              </p>
              
              <p>
                St. Bernard was eminently endowed with the gift of miracles. He died on August 20, 1153. His feast day is August 20.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bernard: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Mellifluous Doctor</h3>
              <p className="mb-6">
                St. Bernard earned the title "Mellifluous Doctor" for his honey-sweet eloquence in preaching and writing. His sermons and treatises on the love of God, the Virgin Mary, and the spiritual life continue to inspire Christians today. His writings are considered among the most beautiful and profound in Christian literature.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Reformer of the Cistercian Order</h3>
              <p className="mb-6">
                As the most prominent figure of the Cistercian Order, St. Bernard helped establish and spread the reform movement that emphasized poverty, manual labor, and strict adherence to the Rule of St. Benedict. Under his leadership, the Abbey of Clairvaux became a center of spiritual renewal and learning.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Influential Church Leader</h3>
              <p className="mb-6">
                St. Bernard's influence extended far beyond the monastery walls. He was a trusted advisor to popes and kings, played a crucial role in resolving church disputes, and was instrumental in the election of Pope Innocent II. His counsel was sought by the highest authorities of his time.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Virgin Mary</h3>
              <p>
                St. Bernard was one of the greatest champions of devotion to the Blessed Virgin Mary. His sermons and writings on Mary helped establish the foundation for much of the Church's Marian theology and devotion. He is particularly known for his beautiful prayers and hymns to Our Lady.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 20</div>
              <p className="text-gray-600">Feast of St. Bernard of Clairvaux, Abbot and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bernard is celebrated on August 20th, commemorating his death and his contributions to the Church as a Doctor of the Church. This date honors his profound spirituality, his role in reforming monastic life, and his extensive writings on theology and spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Monastic Traditions</h3>
              <p className="mb-6">
                In Cistercian monasteries and other religious communities, St. Bernard's feast day is celebrated with special Masses and readings from his works. His writings on the love of God and the spiritual life are often the focus of meditation and study on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the Church, for religious vocations, and to ask for St. Bernard's intercession in deepening our love for God and devotion to the Blessed Virgin Mary. Many people also pray for the grace to live a more contemplative and prayerful life.
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
                  <li>• <strong>Beekeepers:</strong> Due to his "mellifluous" preaching</li>
                  <li>• <strong>Cistercian Order:</strong> The monastic order he helped reform</li>
                  <li>• <strong>Gibraltar:</strong> Patron of the British territory</li>
                  <li>• <strong>Preachers:</strong> Those who proclaim the Word of God</li>
                  <li>• <strong>Wax Makers:</strong> Associated with his honey-sweet words</li>
                  <li>• <strong>France:</strong> His homeland</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Writing:</strong> Those who write about faith</li>
                  <li>• <strong>Monastic Life:</strong> Religious communities</li>
                  <li>• <strong>Church Unity:</strong> Resolving divisions</li>
                  <li>• <strong>Marian Devotion:</strong> Love for the Blessed Virgin</li>
                  <li>• <strong>Contemplative Prayer:</strong> Deep spiritual life</li>
                  <li>• <strong>Religious Vocations:</strong> Those discerning religious life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bernard</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who made St. Bernard a burning and shining light in your Church, grant that through his intercession we may be on fire with the same spirit of discipline and love, and walk always as children of light in the way of Christ.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">St. Bernard's Prayer to the Virgin Mary</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Remember, O most gracious Virgin Mary, that never was it known that anyone who fled to thy protection, implored thy help, or sought thine intercession was left unaided.
                  </p>
                  <p className="mb-4">
                    Inspired by this confidence, I fly unto thee, O Virgin of virgins, my mother; to thee do I come, before thee I stand, sinful and sorrowful. O Mother of the Word Incarnate, despise not my petitions, but in thy mercy hear and answer me. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Spiritual Growth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bernard, mellifluous doctor of the Church, help us to grow in our love for God and neighbor. Teach us to seek God with the same fervor and devotion that characterized your life.
                  </p>
                  <p>
                    May we, like you, find our strength in prayer and contemplation, and may our words and actions always reflect the love of Christ. Amen."
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
            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Monastic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism and author of the Rule that St. Bernard followed.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church, known for his theological writings.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great medieval saint who reformed religious life and preached the Gospel.
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