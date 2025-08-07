import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Constantine - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Constantine, the first Christian Roman Emperor and "Thirteenth Apostle" in the East.',
  keywords: [
    'st constantine',
    'saint constantine',
    'st constantine biography',
    'st constantine feast day',
    'st constantine patron saint',
    'catholic saints',
    'may 21 feast day',
    'constantine the great',
    'first christian emperor',
    'roman emperor saints'
  ],
  openGraph: {
    title: 'St. Constantine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Constantine, the first Christian Roman Emperor and "Thirteenth Apostle" in the East.',
    url: 'https://catholicbibleonline.com/saints/st-constantine',
  },
  twitter: {
    title: 'St. Constantine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Constantine, the first Christian Roman Emperor and "Thirteenth Apostle" in the East.',
  }
}

export default function StConstantinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Constantine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Christian Roman Emperor, "Thirteenth Apostle" in the East, Defender of the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Constantine</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Emperor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Constantine</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Constantine, known as Constantine the Great, was the first Christian Roman Emperor 
                and is revered as the "Thirteenth Apostle" in the Eastern Church. His reign marked a 
                pivotal moment in Christian history, transforming the Roman Empire from a persecutor 
                of Christians to a defender of the faith.
              </p>
              
              <p className="mb-6">
                Born around 272 AD, Constantine was the son of Constantius I Chlorus, a junior emperor, 
                and St. Helena. He was raised at the court of co-Emperor Diocletian, where he received 
                a comprehensive education in military strategy, politics, and administration. This 
                upbringing prepared him for the complex challenges he would face as ruler of the 
                Roman Empire.
              </p>
              
              <p className="mb-6">
                When his father died in 306, Constantine was declared junior emperor of York, England, 
                by the local legions. This marked the beginning of his rise to power. His most 
                significant military victory came at the Battle of the Milvian Bridge in 312, where 
                he defeated his main rivals and secured his position as ruler of the Empire.
              </p>
              
              <p className="mb-6">
                According to legend, before the Battle of the Milvian Bridge, Constantine had a 
                vision of the Chi-Rho symbol (the first two letters of Christ's name in Greek) and 
                the words "In this sign conquer." He adopted this Christian insignia and placed it 
                upon his labarum - the military standards that his armies carried into battle. This 
                marked a dramatic shift in his relationship with Christianity.
              </p>
              
              <p>
                Constantine's reign was characterized by his efforts to Christianize the Roman Empire. 
                He shared rule with Licinius Licinianus and used his considerable influence to secure 
                the declaration of Christianity as a free religion. He presided over the Council of 
                Nicaea in 325, which established important Christian doctrines, and founded the 
                Christian city of Constantinople as his new capital. While he was baptized only on 
                his deathbed, Constantine's impact on Christian history was profound and lasting.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Constantine: Defender of the Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Christian Emperor</h3>
              <p className="mb-6">
                Constantine's most enduring legacy is his role as the first Christian Roman Emperor. 
                His conversion and subsequent policies transformed the Roman Empire from a persecutor 
                of Christians to a defender of the faith. This dramatic shift allowed Christianity 
                to flourish and spread throughout the empire, fundamentally changing the course of 
                world history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Council of Nicaea</h3>
              <p className="mb-6">
                Constantine's leadership at the Council of Nicaea in 325 was crucial for the 
                development of Christian doctrine. He presided over this ecumenical council, which 
                established the Nicene Creed and addressed the Arian controversy. His involvement 
                demonstrated the emperor's commitment to maintaining unity within the Christian 
                Church and establishing orthodox doctrine.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundation of Constantinople</h3>
              <p className="mb-6">
                Constantine's founding of Constantinople (modern-day Istanbul) as the new capital 
                of the Roman Empire was a strategic and symbolic act. The city was designed as a 
                Christian capital, with churches and Christian symbols prominently displayed. This 
                new capital would become the center of the Byzantine Empire and a major center of 
                Christian culture and learning for centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Christianization of the Empire</h3>
              <p>
                Constantine undertook a comprehensive program of Christianization throughout the 
                Roman Empire. He gave extensive grants of land and property to the Church, built 
                numerous churches, and promoted Christian values in government and society. His 
                policies created the foundation for the Christian civilization that would develop 
                in Europe and the Mediterranean world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 21</div>
              <p className="text-gray-600">Feast of St. Constantine</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Constantine is celebrated on May 21st. This date commemorates his 
                life and work as the first Christian emperor and his contributions to the spread 
                and establishment of Christianity in the Roman Empire.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Eastern Church Recognition</h3>
              <p className="mb-6">
                Constantine is particularly revered in the Eastern Orthodox Church, where he is 
                known as the "Thirteenth Apostle" and "Equal to the Apostles." This recognition 
                reflects the profound impact he had on the development of Christianity and his 
                role in establishing the Church as a major institution in the Roman Empire.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Constantine's feast day serves as a reminder of the importance 
                of religious freedom and the role of leaders in protecting and promoting faith. 
                It's a day to reflect on the relationship between Church and state, and to pray 
                for leaders who will defend religious liberty and promote Christian values in society.
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
                  <li>• <strong>Roman Empire:</strong> Patron of the Roman Empire and its legacy</li>
                  <li>• <strong>Christian Leaders:</strong> Patron of Christian rulers and leaders</li>
                  <li>• <strong>Religious Freedom:</strong> Protector of religious liberty</li>
                  <li>• <strong>Constantinople:</strong> Patron of the city he founded</li>
                  <li>• <strong>Church Unity:</strong> Patron of ecumenical councils</li>
                  <li>• <strong>Christian Civilization:</strong> Patron of Christian culture</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Freedom:</strong> Protection for religious liberty</li>
                  <li>• <strong>Christian Leadership:</strong> Guidance for Christian rulers</li>
                  <li>• <strong>Church Unity:</strong> Help in maintaining doctrinal unity</li>
                  <li>• <strong>Christian Culture:</strong> Promotion of Christian values</li>
                  <li>• <strong>Conversion:</strong> Grace for those seeking faith</li>
                  <li>• <strong>Peace:</strong> Help in establishing peace and order</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Constantine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Constantine, first Christian emperor and defender of the faith, 
                    you who received the vision of the Chi-Rho and conquered in the sign of Christ, 
                    intercede for us that we may have the courage to stand for our faith in all 
                    circumstances.
                  </p>
                  <p className="mb-4">
                    Help us to be witnesses of Christ in our daily lives, to promote religious 
                    freedom, and to work for the unity of the Church. Teach us to use our positions 
                    and influence to serve God and others, just as you used your imperial power 
                    to advance the cause of Christianity.
                  </p>
                  <p>
                    May we, like you, be willing to make bold decisions for the sake of the Gospel 
                    and to trust in God's providence even when facing great challenges. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Christian Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Constantine, patron of Christian leaders, intercede for all those in 
                    positions of authority who seek to serve God and promote Christian values.
                  </p>
                  <p>
                    Help them to make wise decisions, to protect religious freedom, and to work 
                    for the common good. May they be inspired by your example of leadership and 
                    dedication to the faith. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Constantine, first Christian emperor, pray for us!"
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
            <Link href="/saints/st-helena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Helena
                </h3>
                <p className="text-gray-700 text-sm">
                  Constantine's mother, who discovered the True Cross and was a great patron of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-nicholas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Nicholas
                </h3>
                <p className="text-gray-700 text-sm">
                  Fourth-century bishop who lived during Constantine's reign, known for his generosity and miracles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope and Prince of the Apostles, whose successors Constantine supported and protected.
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