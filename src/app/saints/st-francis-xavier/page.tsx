import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis Xavier - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Francis Xavier, the "Apostle of the Indies" and patron saint of Catholic missions.',
  keywords: [
    'st francis xavier',
    'saint francis xavier',
    'st francis xavier biography',
    'st francis xavier feast day',
    'st francis xavier patron saint',
    'jesuit missionary',
    'apostle of the indies',
    'december 3 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Francis Xavier - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis Xavier, the "Apostle of the Indies" and patron saint of Catholic missions.',
    url: 'https://catholicbibleonline.com/saints/st-francis-xavier',
  },
  twitter: {
    title: 'St. Francis Xavier - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis Xavier, the "Apostle of the Indies" and patron saint of Catholic missions.',
  }
}

export default function StFrancisXavierPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis Xavier
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of the Indies, Jesuit Missionary, Patron of Catholic Missions
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Francis Xavier</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Missions</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Francis Xavier</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Francis Xavier was a Navarrese-Basque Roman Catholic missionary born in the Kingdom of Navarre on April 7, 1506. His father was a privy counselor and finance minister to King John III of Navarre. He was the youngest in his family and resided in a castle which still partially stands today and is in the possession of the Jesuit order.
              </p>
              
              <p className="mb-6">
                As the young Francis grew, he was surrounded by war. Navarre was the target of a campaign by King Ferdinand of Aragon and Castile, and the kingdom was eventually conquered. When the war stopped and Francis came of age, he was sent to study at the University of Paris. While there he roomed with his friend, Peter Favre. The pair met and were heavily influenced by Ignatius of Loyola, who encouraged Francis to become a priest.
              </p>
              
              <p className="mb-6">
                In 1530, Francis Xavier earned his master's degree, and went on to teach philosophy at the University of Paris. On August 15, 1534, Francis Xavier along with Peter Favre, and several other friends, made vows of poverty, chastity, and obedience. The men planned to travel to the Holy Land to convert non-believers. Francis Xavier started his study of theology that same year and was ordained on June 24, 1537.
              </p>
              
              <p className="mb-6">
                Pope Paul III approved the formation of their order in 1540, which became The Society of Jesus. The order is more popularly became known as the Jesuits. While Francis Xavier was becoming a priest, Portugal was colonizing India. The Portuguese settlers in India and elsewhere were losing their faith and Christian values. To restore these values, the King of Portugal asked the Pope to send missionaries to the region.
              </p>
              
              <p>
                Pope Paul III asked the new order to take the mission, particularly since they could not undertake their preferred mission to the Holy Land due to warfare there. Ignatius ultimately decided to send Francis. Francis Xavier left for India in 1541, on his thirty-fifth birthday. As he departed he was informed that the pope appointed him to be the Papal Nuncio in the East.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Francis Xavier: Apostle of the Indies</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Work in India</h3>
              <p className="mb-6">
                Francis Xavier arrived in the region and colony of Goa, India on May 6, 1542. Although Goa had churches and even a bishop in the Portuguese colony, there were few people to preach and minister to the Portuguese, especially outside the walls of the city. Xavier ministered first to the sick and the children. Then he learned about the native people of the Pearl Fishery Coast, which had been baptized a decade earlier, but were never taught their faith. Xavier began ministering to them and built 40 churches for the people of the Pearl Fishery Coast.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Evangelization in Asia</h3>
              <p className="mb-6">
                Xavier eventually decided to travel to Malacca and the Maluku Islands to evangelize the people there. He spent about two years in the region, and while in Malacca, a Japanese man named Anjiro caught up with him. Anjiro was accused of murder in Japan but had managed to flee. Learning about Xavier, he decided to find Xavier and tell him about Japan, which he did. Xavier converted Anjiro to Christianity, making him the first Japanese convert to Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mission to Japan</h3>
              <p className="mb-6">
                In 1549, Xavier finally departed for Japan, arriving in July of that year. The local daimyo warmly received Xavier, but forbade his subjects from converting to Christianity. Xavier was surprised to find that his poverty was a barrier to his communication. Poverty was not respected in feudal Japan as it was in Europe, so Xavier was compelled to change his strategy. Despite his efforts, the Japanese were not easily converted, and Christianity eventually became the subject of great persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Final Mission to China</h3>
              <p>
                Xavier finished his work in Japan and decided to return to India with a stop in Goa. During his voyage, he was petitioned to meet with the Chinese emperor and argue for the release of several Portuguese prisoners. Xavier decided to make the trip to China, but while waiting for his boat to arrive became ill with a fever. Xavier died on December 3, 1552, and was buried on the island until February 1553 when his body was removed and taken to Malacca, then eventually to Goa where he remains buried in a silver casket enclosed in a glass case.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 3</div>
              <p className="text-gray-600">Feast of St. Francis Xavier, Apostle of the Indies</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Francis Xavier is celebrated on December 3rd, the anniversary of his death in 1552. This date commemorates his passing on the island off the Chinese coast while waiting to begin his mission to China. Xavier was beatified by Pope Paul V on Oct. 25, 1619, and canonized by Gregory XV on March 12, 1622 at the same ceremony as Ignatius of Loyola.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Francis Xavier's remarkable missionary work and his role in spreading Christianity throughout Asia. His feast day serves as a reminder of the importance of missionary work and the call to evangelize. Many Jesuit institutions and missionary organizations hold special celebrations on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Francis Xavier for his intercession in missionary work, for the conversion of souls, and for the grace to be bold witnesses of the Gospel. Many people also pray for missionaries around the world and for the success of Catholic missions.
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
                  <li>• <strong>Catholic Missions:</strong> Patron of all missionary work</li>
                  <li>• <strong>Missionaries:</strong> Patron of those who spread the Gospel</li>
                  <li>• <strong>Foreign Missions:</strong> Patron of overseas missionary work</li>
                  <li>• <strong>Navigators:</strong> Patron of sailors and travelers</li>
                  <li>• <strong>Jesuits:</strong> Patron of the Society of Jesus</li>
                  <li>• <strong>Asia:</strong> Patron of the Church in Asia</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion of Souls:</strong> Helper in bringing people to Christ</li>
                  <li>• <strong>Missionary Vocations:</strong> Patron of those called to mission work</li>
                  <li>• <strong>Cultural Adaptation:</strong> Helper in adapting to new cultures</li>
                  <li>• <strong>Language Learning:</strong> Patron of learning new languages</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult missionary situations</li>
                  <li>• <strong>Evangelization:</strong> Patron of spreading the Gospel</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Francis Xavier</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Francis Xavier, who by your zeal and devotion brought countless souls to Christ, 
                    help us to be bold witnesses of the Gospel in our daily lives. Through your intercession, may we 
                    have the courage to share our faith with others and to be missionaries in our own communities. 
                    Help us to persevere in our efforts to spread the love of Christ to all we meet. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Francis Xavier, pray for us!"
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
            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius of Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus and spiritual mentor to St. Francis Xavier.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter-favre" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter Favre
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit priest and close friend of St. Francis Xavier, one of the first Jesuits.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  The great missionary apostle who spread Christianity throughout the Roman Empire.
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