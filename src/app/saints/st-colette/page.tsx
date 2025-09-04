import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Colette - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Colette, reformer of the Poor Clares and founder of the Collettines.',
  keywords: [
    'st colette',
    'saint colette',
    'colette biography',
    'colette feast day',
    'colette patron saint',
    'poor clares reformer',
    'collettines founder',
    'franciscan saint',
    'march 6 feast day',
    'religious reformer'
  ],
  openGraph: {
    title: 'St. Colette - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Colette, reformer of the Poor Clares and founder of the Collettines.',
    url: 'https://catholicbibleonline.com/saints/st-colette',
  },
  twitter: {
    title: 'St. Colette - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Colette, reformer of the Poor Clares and founder of the Collettines.',
  }
}

export default function StColettePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Colette
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Reformer of the Poor Clares, Founder of the Collettines
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Colette</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Religious Reformer</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Colette</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Colette was the daughter of a carpenter named DeBoilet at Corby Abbey in Picardy, France. She was born on January 13, christened Nicolette, and called Colette. Orphaned at seventeen, she distributed her inheritance to the poor. She became a Franciscan tertiary, and lived at Corby as a solitary.
              </p>
              
              <p className="mb-6">
                She soon became well known for her holiness and spiritual wisdom, but left her cell in 1406 in response to a dream directing her to reform the Poor Clares. She received the Poor Clares habit from Peter de Luna, whom the French recognized as Pope under the name of Benedict XIII, with orders to reform the Order and appointing her Superior of all convents she reformed.
              </p>
              
              <p className="mb-6">
                Despite great opposition, she persisted in her efforts. She founded seventeen convents with the reformed rule and reformed several older convents. She was renowned for her sanctity, ecstasies, and visions of the Passion, and prophesied her own death in her convent at Ghent, Belgium. A branch of the Poor Clares is still known as the Collettines. She was canonized in 1807. Her feast day is March 6th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Colette: Reformer and Visionary</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Reformer of the Poor Clares</h3>
              <p className="mb-6">
                St. Colette's legacy as a reformer of the Poor Clares demonstrates the importance of returning religious orders to their original charism and fervor. Her work in founding seventeen new convents and reforming several existing ones shows her commitment to authentic religious life. The Collettines, the branch of Poor Clares that bears her name, continue her reform to this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Obedience to Divine Will</h3>
              <p className="mb-6">
                St. Colette's response to a dream directing her to reform the Poor Clares shows her complete obedience to God's will, even when it meant leaving her comfortable solitary life. Her willingness to take on such a challenging mission demonstrates the power of divine guidance and the importance of listening to God's call in our lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mystic and Visionary</h3>
              <p className="mb-6">
                St. Colette's ecstasies and visions of the Passion show her deep mystical union with Christ. Her ability to prophesy her own death demonstrates her close relationship with God and her acceptance of divine providence. Her mystical experiences remind us that God continues to work through chosen souls to bring about His purposes.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Perseverance in the Face of Opposition</h3>
              <p>
                St. Colette's persistence despite great opposition shows her courage and determination in following God's will. Her success in reforming the Poor Clares demonstrates that with God's grace, even the most difficult missions can be accomplished. Her example teaches us to persevere in doing what is right, even when faced with resistance.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 6</div>
              <p className="text-gray-600">Feast of St. Colette, Reformer of the Poor Clares</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Colette is celebrated on March 6th, commemorating her death and her lifelong dedication to reforming religious life. This date falls during Lent, a fitting time to remember her call to penance and her vision of the Passion of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Collettine Celebrations</h3>
              <p className="mb-6">
                In Collettine convents around the world, St. Colette's feast day is celebrated with special devotion. The nuns who follow her reform pray for her intercession and seek to live according to the ideals she established. The day is marked by prayers for religious vocations and for the renewal of religious life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for religious vocations, for the renewal of religious orders, and to ask for St. Colette's intercession in helping us to be obedient to God's will. Many people also pray for the grace to persevere in difficult missions and to trust in divine guidance.
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
                  <li>• <strong>Poor Clares:</strong> The order she reformed</li>
                  <li>• <strong>Collettines:</strong> The branch she founded</li>
                  <li>• <strong>Religious Reformers:</strong> Those who renew religious life</li>
                  <li>• <strong>Franciscan Tertiaries:</strong> Lay members of the Franciscan family</li>
                  <li>• <strong>Picardy:</strong> Her birthplace in France</li>
                  <li>• <strong>Ghent:</strong> Her place of death in Belgium</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> Calling to religious life</li>
                  <li>• <strong>Divine Guidance:</strong> Following God's will</li>
                  <li>• <strong>Perseverance:</strong> Overcoming opposition</li>
                  <li>• <strong>Mystical Prayer:</strong> Deep union with God</li>
                  <li>• <strong>Reform:</strong> Renewing institutions</li>
                  <li>• <strong>Solitude:</strong> Contemplative prayer</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Colette</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Colette, who responded to God's call to reform the Poor Clares, help us to be obedient to divine guidance in our lives.
                  </p>
                  <p className="mb-4">
                    Teach us to persevere in doing God's will, even when faced with opposition and difficulties. May we, like you, be willing to leave our comfort zones to serve God's purposes.
                  </p>
                  <p>
                    Help us to seek authentic religious life and to be open to the mystical experiences that draw us closer to Christ. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Colette, who founded seventeen convents and reformed religious life, intercede for all those discerning religious vocations.
                  </p>
                  <p>
                    Help them to hear God's call clearly and to respond with courage and generosity. May they find the strength to persevere in their vocation despite challenges. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Divine Guidance</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Colette, who followed a dream to reform the Poor Clares, help us to be attentive to God's guidance in our lives.
                  </p>
                  <p>
                    Teach us to listen for God's voice and to trust in His providence. May we be willing to take bold steps when God calls us to serve Him in new ways. Amen."
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
            <Link href="/saints/st-clare" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Franciscan Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Clare
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Poor Clares, the order that St. Colette reformed.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Franciscan Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan family to which St. Colette belonged.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Reform Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Ávila
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great reformer of religious life and mystic.
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