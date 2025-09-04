import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis of Assisi - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Francis of Assisi, founder of the Franciscan order and lover of nature and poverty.',
  keywords: [
    'st francis of assisi',
    'saint francis',
    'st francis biography',
    'st francis feast day',
    'st francis patron saint',
    'october 4 feast day',
    'mendicant saints',
    'franciscan order'
  ],
  openGraph: {
    title: 'St. Francis of Assisi - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis of Assisi, founder of the Franciscan order.',
    url: 'https://catholicbibleonline.com/saints/st-francis',
  },
  twitter: {
    title: 'St. Francis of Assisi - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis of Assisi, founder of the Franciscan order.',
  }
}

export default function StFrancisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis of Assisi
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Franciscan Order, Patron of Ecology
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Francis of Assisi</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Peace</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Francis of Assisi</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Francis of Assisi was born Giovanni di Pietro di Bernardone in 1181 or 1182 in Assisi, 
                Italy. He was the son of a wealthy cloth merchant and lived a life of luxury and pleasure 
                in his youth. However, his life changed dramatically when he experienced a profound 
                conversion after being imprisoned during a war between Assisi and Perugia.
              </p>
              
              <p className="mb-6">
                After his release from prison, Francis began to spend time in prayer and solitude. One day, 
                while praying in the ruined church of San Damiano, he heard the voice of Christ saying, 
                "Francis, rebuild my church." Taking this literally, Francis began to repair the church 
                building, but he soon realized that God was calling him to rebuild the Church spiritually.
              </p>
              
              <p className="mb-6">
                Francis renounced his wealth and inheritance, choosing to live in poverty and simplicity. 
                He began to preach the Gospel and attracted followers who shared his vision of living 
                according to the teachings of Jesus. In 1209, Pope Innocent III approved the Franciscan 
                order, which Francis called the "Order of Friars Minor" (Little Brothers).
              </p>
              
              <p className="mb-6">
                Francis had a deep love for all of God's creation, especially animals and nature. He is 
                said to have preached to the birds and tamed a fierce wolf that was terrorizing the town 
                of Gubbio. His love for creation led him to compose the "Canticle of the Sun," a beautiful 
                hymn praising God for all His creatures.
              </p>
              
              <p>
                In 1224, while praying on Mount La Verna, Francis received the stigmata - the wounds of 
                Christ on his hands, feet, and side. He died on October 3, 1226, at the age of 44. He was 
                canonized just two years later by Pope Gregory IX. Today, St. Francis is one of the most 
                beloved saints in the Catholic Church and is the patron saint of ecology and animals.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Francis: Patron of Ecology</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Franciscan Order</h3>
              <p className="mb-6">
                St. Francis's most enduring legacy is the Franciscan order, which continues to serve the 
                Church and the world today. The Franciscans, with their commitment to poverty, simplicity, 
                and service to the poor, have inspired countless men and women to follow Christ more closely. 
                The order includes the Friars Minor, the Poor Clares, and the Secular Franciscans.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Ecology</h3>
              <p className="mb-6">
                St. Francis's deep love for creation has made him the patron saint of ecology and the 
                environment. His example teaches us to respect and care for all of God's creatures and 
                to see the beauty and goodness in all of creation. His "Canticle of the Sun" continues 
                to inspire environmental awareness and care for the earth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Poverty and Simplicity</h3>
              <p className="mb-6">
                Francis's radical embrace of poverty and simplicity challenges us to examine our own 
                relationship with material possessions. He showed that true happiness comes not from 
                wealth or possessions, but from a deep relationship with God and service to others. 
                His example continues to inspire people to live more simply and generously.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Peacemaker</h3>
              <p>
                St. Francis was a great peacemaker who worked to reconcile enemies and bring peace to 
                warring factions. His famous prayer, "Lord, make me an instrument of your peace," 
                continues to inspire people around the world to work for peace and reconciliation. 
                He showed that peace begins with inner transformation and love for all people.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 4</div>
              <p className="text-gray-600">Feast of St. Francis of Assisi</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Francis is celebrated on October 4th, the day after his death. This date 
                is particularly significant because it marks the end of the "Season of Creation" in many 
                churches, making it a fitting time to honor this great saint who had such a deep love 
                for all of God's creatures.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Francis's feast day, many churches hold the "Blessing of the Animals" ceremony, 
                where people bring their pets to be blessed. This tradition reflects Francis's love for 
                all creatures. Many people also visit Franciscan churches and shrines, and some participate 
                in environmental activities to honor his commitment to caring for creation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer of St. Francis, the Novena to St. Francis, 
                or to read his writings. Many people also make a special effort to care for animals and 
                the environment on this day, following his example of love for all creation.
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
                  <li>• <strong>Animals and Pets:</strong> Patron of all creatures</li>
                  <li>• <strong>Ecology and Environment:</strong> Protector of creation</li>
                  <li>• <strong>Peace and Peacemakers:</strong> Patron of peace</li>
                  <li>• <strong>Italy:</strong> Patron saint of Italy</li>
                  <li>• <strong>Merchants and Business:</strong> Patron of commerce</li>
                  <li>• <strong>Stowaways:</strong> Protector of travelers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Environmental Protection:</strong> Helper in caring for creation</li>
                  <li>• <strong>Peace and Reconciliation:</strong> Patron of harmony</li>
                  <li>• <strong>Care for Animals:</strong> Protector of creatures</li>
                  <li>• <strong>Living in Poverty:</strong> Patron of the poor</li>
                  <li>• <strong>Franciscan Spirituality:</strong> Guide to simple living</li>
                  <li>• <strong>Creation Care:</strong> Patron of environmental stewardship</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer of St. Francis</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Lord, make me an instrument of your peace. Where there is hatred, let me sow love; 
                    where there is injury, pardon; where there is doubt, faith; where there is despair, 
                    hope; where there is darkness, light; where there is sadness, joy.
                  </p>
                  <p className="mb-4">
                    O Divine Master, grant that I may not so much seek to be consoled as to console; 
                    to be understood as to understand; to be loved as to love.
                  </p>
                  <p>
                    For it is in giving that we receive; it is in pardoning that we are pardoned; 
                    and it is in dying that we are born to eternal life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Francis of Assisi, pray for us!"
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

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
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