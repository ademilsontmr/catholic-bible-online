import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Junípero Serra - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Junípero Serra, the Apostle of California and founder of the California missions.',
  keywords: [
    'st junipero serra',
    'saint junipero serra',
    'st junipero serra biography',
    'st junipero serra feast day',
    'st junipero serra patron saint',
    'catholic saints',
    'july 1 feast day',
    'apostle of california',
    'california missions',
    'franciscan missionary'
  ],
  openGraph: {
    title: 'St. Junípero Serra - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Junípero Serra, the Apostle of California and founder of the California missions.',
    url: 'https://catholicbibleonline.com/saints/st-junipero-serra',
  },
  twitter: {
    title: 'St. Junípero Serra - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Junípero Serra, the Apostle of California and founder of the California missions.',
  }
}

export default function StJuniperoSerraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Junípero Serra
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of California, Founder of the California Missions, Franciscan Missionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Junípero Serra</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Missionary</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Junípero Serra</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Junípero Serra, originally named Miguel José, was born on November 24, 1713, in Petra, 
                Majorca, Spain. His parents, Antonio Nadal Serra and Margarita Rosa Ferrer, were farmers. 
                Baptized at St. Peter's Church in Petra on the same day, Junípero would go on to become a 
                renowned figure in the history of California and one of the most important missionaries 
                in the New World.
              </p>
              
              <p className="mb-6">
                In his early years, Serra attended the primary school run by the Franciscans in Petra. 
                At the age of 15, his parents entrusted him to a cathedral canon in Palma, where he began 
                attending philosophy classes at the Franciscan monastery of San Francisco. This early 
                exposure to Franciscan spirituality would shape his entire life and mission.
              </p>
              
              <p className="mb-6">
                Serra took his first step toward religious life when he became a novice at the Convento 
                de Jesús near Palma on September 14, 1730. A year later, on September 15, he made his 
                profession and chose the name Junípero in honor of St. Francis' companion. Serra pursued 
                his studies in philosophy and theology at the Convento de San Francisco, and in 1742, 
                he earned his doctorate in theology from the Lullian University in Palma.
              </p>
              
              <p className="mb-6">
                Shortly after earning his doctorate, Serra was appointed the primary professor of theology 
                at the university and was called to serve as an Indian missionary in America. Accompanied 
                by Francisco Palóu, Serra set sail for America on April 13, 1749, arriving in Vera Cruz, 
                Mexico, on December 7, 1749. Instead of using the provided horses, Serra chose to walk 
                the 250 miles from Vera Cruz to Mexico City, demonstrating his commitment to poverty and 
                penance.
              </p>
              
              <p className="mb-6">
                Within six months of arriving in Mexico, Serra responded to an urgent call for volunteers 
                for the Sierra Gorda missions. He spent the next eight years (1750-1758) overseeing the 
                construction of a church, promoting religious and economic development, and learning the 
                Otomí language to effectively teach the Pame Indians. Serra's leadership led to the 
                building of mission churches in the other four towns as well.
              </p>
              
              <p>
                Serra's enthusiasm and dedication to spreading the faith led him to volunteer for 
                expeditions to Upper California in 1768. He embarked on the journey and reached Loreto 
                on April 1, where he oversaw the establishment of 15 missions, from San José del Cabo 
                to Santa María. Serra's efforts continued as he founded nine missions in Upper California, 
                including San Diego, San Carlos, San Antonio, San Gabriel, San Luis Obispo, San Francisco, 
                San Juan Capistrano, Santa Clara, and San Buenaventura. He passed away on August 28, 1784, 
                at Mission San Carlos, where he was buried in the church he had constructed.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Junípero Serra: Apostle of California</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the California Missions</h3>
              <p className="mb-6">
                St. Junípero Serra's most enduring legacy is his role as the founder of the California 
                mission system. He established nine missions in Upper California, creating a network of 
                religious, educational, and agricultural centers that would become the foundation of 
                California's development. These missions served as centers of evangelization, education, 
                and cultural exchange between European settlers and Native American communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Franciscan Spirituality</h3>
              <p className="mb-6">
                Serra embodied the Franciscan ideals of poverty, humility, and service. His choice to 
                walk 250 miles from Vera Cruz to Mexico City instead of riding horses demonstrated his 
                commitment to the Franciscan vow of poverty. Throughout his missionary work, he faced 
                health challenges, including leg and foot issues, but continued his work with unwavering 
                dedication, often being carried on a stretcher during his journeys.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Bridge and Educator</h3>
              <p className="mb-6">
                Serra was not only a missionary but also a cultural bridge between European and Native 
                American communities. He learned the Otomí language to effectively communicate with the 
                Pame Indians and promoted both religious and economic development. His missions provided 
                education, healthcare, and agricultural training to Native American communities, helping 
                them adapt to the changing world while preserving their dignity and culture.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Indigenous Rights</h3>
              <p>
                Serra was known for his zeal, optimism, and devotion to his converts. He fought for the 
                freedom of the Church against royal interference and worked tirelessly to protect the 
                rights and dignity of the Native American people he served. By the end of 1784, the 
                number of baptized Indians at the first nine missions had reached 6,736, with 4,646 
                Christianized Indians residing in them, demonstrating the success of his missionary work.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 1</div>
              <p className="text-gray-600">Feast of St. Junípero Serra</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Junípero Serra is celebrated on July 1st. This date commemorates his 
                life and work as a missionary and serves as a reminder of the importance of evangelization 
                and cultural exchange in the Church's mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization</h3>
              <p className="mb-6">
                Serra's beatification process began in 1934 and concluded in 1949. He was beatified by 
                Pope John Paul II on September 25, 1988, and later canonized by Pope Francis on September 
                23, 2015, during the Pope's visit to the United States. His canonization recognized not 
                only his missionary work but also his role in the evangelization of the Americas.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Junípero Serra's feast day serves as a reminder of the importance 
                of missionary work and cultural exchange. It's a day to pray for missionaries, for the 
                evangelization of the Americas, and to remember the importance of respecting and preserving 
                indigenous cultures while sharing the Gospel message.
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
                  <li>• <strong>California:</strong> Patron of the state of California</li>
                  <li>• <strong>Hispanic Americans:</strong> Patron of Hispanic communities in the US</li>
                  <li>• <strong>Missionaries:</strong> Patron of all missionary work</li>
                  <li>• <strong>Franciscan Missions:</strong> Patron of Franciscan missionary work</li>
                  <li>• <strong>Cultural Exchange:</strong> Patron of intercultural dialogue</li>
                  <li>• <strong>Indigenous Peoples:</strong> Protector of native communities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Missionary Work:</strong> Success for evangelization efforts</li>
                  <li>• <strong>Cultural Understanding:</strong> Help in bridging cultural differences</li>
                  <li>• <strong>Indigenous Rights:</strong> Protection and respect for native peoples</li>
                  <li>• <strong>Education:</strong> Success for educational missions</li>
                  <li>• <strong>Church Unity:</strong> Help in building bridges between cultures</li>
                  <li>• <strong>Perseverance:</strong> Strength for those facing physical challenges</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Junípero Serra</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Junípero Serra, Apostle of California and founder of the missions, 
                    you who dedicated your life to spreading the Gospel and serving the indigenous peoples 
                    of the Americas, intercede for us that we may follow your example of zeal and devotion.
                  </p>
                  <p className="mb-4">
                    Help us to be bridges of understanding between different cultures, to respect the 
                    dignity of all peoples, and to work tirelessly for the evangelization of the world. 
                    Teach us to embrace the Franciscan spirit of poverty, humility, and service.
                  </p>
                  <p>
                    May we, like you, be willing to walk the difficult paths of missionary work and 
                    to persevere in our faith despite physical challenges and obstacles. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Junípero Serra, patron of missionaries, intercede for all those who work to 
                    spread the Gospel in distant lands and among different cultures.
                  </p>
                  <p>
                    Help them to be respectful of the cultures they encounter, to serve with humility 
                    and love, and to persevere in their mission despite challenges and difficulties. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Junípero Serra, Apostle of California, pray for us!"
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
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, whose spirituality and ideals Serra followed throughout his missionary work.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary known as the "Apostle of the Indies," another great missionary to the New World.
                </p>
              </div>
            </Link>

            <Link href="/saints/our-lady-of-guadalupe" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  Our Lady of Guadalupe
                </h3>
                <p className="text-gray-700 text-sm">
                  Patroness of the Americas, whose shrine Serra visited on his journey to Mexico City.
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