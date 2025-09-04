import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Simon Stock - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Simon Stock, Carmelite friar who received the Brown Scapular from Our Lady of Mount Carmel.',
  keywords: [
    'st simon stock',
    'saint simon stock',
    'st simon stock biography',
    'st simon stock feast day',
    'st simon stock patron saint',
    'catholic saints',
    'may 16 feast day',
    'brown scapular',
    'our lady of mount carmel',
    'carmelite order'
  ],
  openGraph: {
    title: 'St. Simon Stock - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Simon Stock, Carmelite friar who received the Brown Scapular from Our Lady of Mount Carmel.',
    url: 'https://catholicbibleonline.com/saints/st-simon-stock',
  },
  twitter: {
    title: 'St. Simon Stock - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Simon Stock, Carmelite friar who received the Brown Scapular from Our Lady of Mount Carmel.',
  }
}

export default function StSimonStockPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Simon Stock
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Carmelite Friar, Receiver of the Brown Scapular from Our Lady of Mount Carmel
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Simon Stock</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌿</div>
              <div className="text-sm text-gray-600">Carmelite</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Simon Stock</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Although little is known about St. Simon Stock's early life, legend has it that the name 
                "Stock," meaning "tree trunk," derives from the fact that, beginning at age twelve, he 
                lived as a hermit in a hollow tree trunk of an oak tree. This early life of solitude and 
                prayer prepared him for his later vocation as a Carmelite friar.
              </p>
              
              <p className="mb-6">
                As a young man, Simon went on a pilgrimage to the Holy Land where he encountered a group 
                of Carmelites. Deeply moved by their way of life and spirituality, he joined their order 
                and later returned to Europe with them. This journey marked the beginning of his lifelong 
                commitment to the Carmelite Order and its mission.
              </p>
              
              <p className="mb-6">
                Simon Stock played a crucial role in the transformation of the Carmelite Order from a 
                hermit order to one of mendicant friars. He founded many Carmelite communities, especially 
                in university towns such as Cambridge, Oxford, Paris, and Bologna, helping to establish 
                the order's presence in centers of learning and intellectual life.
              </p>
              
              <p className="mb-6">
                In 1254, Simon was elected Superior-General of the Carmelite Order in London, a position 
                that allowed him to guide the order through a period of significant change and growth. 
                His leadership was marked by wisdom, humility, and deep devotion to Our Lady.
              </p>
              
              <p>
                Simon Stock's lasting fame came from a miraculous apparition he experienced in Cambridge, 
                England, on July 16, 1251, at a time when the Carmelite Order was being oppressed. In this 
                vision, the Virgin Mary appeared to him holding the brown scapular in one hand, giving him 
                a powerful sign of her protection and favor for the Carmelite Order.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Simon Stock: Guardian of the Brown Scapular</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Brown Scapular Devotion</h3>
              <p className="mb-6">
                St. Simon Stock's most enduring legacy is the Brown Scapular devotion, which he received 
                directly from Our Lady of Mount Carmel. The scapular consists of two pieces of cloth, 
                one worn on the chest and the other on the back, connected by straps passing over the 
                shoulders. This devotion has become one of the most popular and beloved Marian devotions 
                in the Catholic Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Our Lady's Promise</h3>
              <p className="mb-6">
                During the apparition, Our Lady gave Simon Stock these words: "Receive, my beloved son, 
                this scapular of thy Order; it is the special sign of my favor, which I have obtained 
                for thee and for thy children of Mount Carmel. He who dies clothed with this habit shall 
                be preserved from eternal fire. It is the badge of salvation, a shield in time of danger, 
                and a pledge of special peace and protection."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Transformation of the Carmelite Order</h3>
              <p className="mb-6">
                Simon Stock's leadership was instrumental in transforming the Carmelite Order from a 
                hermit order to a mendicant order of friars. His work in establishing communities in 
                university towns helped the order adapt to the changing needs of the Church and society, 
                while maintaining its deep spiritual roots and Marian devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Universal Devotion</h3>
              <p>
                The Brown Scapular devotion that Simon Stock received has spread far beyond the Carmelite 
                Order. Today, millions of Catholics worldwide wear the scapular as a sign of their 
                devotion to Our Lady and their trust in her protection. The Church has approved eighteen 
                different kinds of scapulars, with the Brown Scapular of Mount Carmel being the most 
                well-known and widely used.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 16</div>
              <p className="text-gray-600">Feast of St. Simon Stock</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Simon Stock is celebrated on May 16th. This date commemorates his 
                death and his entrance into eternal life, where he continues to intercede for all who 
                wear the Brown Scapular and seek Our Lady's protection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Scapular Investiture</h3>
              <p className="mb-6">
                On this feast day, many Catholics choose to be invested with the Brown Scapular, 
                receiving it for the first time from a priest. This is a special day to renew one's 
                devotion to Our Lady of Mount Carmel and to remember the promises associated with 
                wearing the scapular.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Simon Stock's feast day serves as a reminder of Our Lady's 
                constant protection and the power of Marian devotion. It's a day to pray for all 
                who wear the scapular and to remember the importance of living a life of prayer 
                and devotion to Mary.
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
                  <li>• <strong>Brown Scapular Devotion:</strong> Patron of scapular wearers</li>
                  <li>• <strong>Carmelite Order:</strong> Patron of Carmelite friars and nuns</li>
                  <li>• <strong>University Students:</strong> Patron of those in higher education</li>
                  <li>• <strong>Hermits:</strong> Patron of those living in solitude</li>
                  <li>• <strong>Pilgrims:</strong> Patron of those on spiritual journeys</li>
                  <li>• <strong>England:</strong> Patron of the English Carmelites</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Scapular Protection:</strong> Intercession for scapular wearers</li>
                  <li>• <strong>Marian Devotion:</strong> Help in growing closer to Our Lady</li>
                  <li>• <strong>Academic Success:</strong> Help for students and scholars</li>
                  <li>• <strong>Religious Life:</strong> Guidance for those discerning vocations</li>
                  <li>• <strong>Spiritual Growth:</strong> Help in deepening prayer life</li>
                  <li>• <strong>Order Protection:</strong> Protection for religious orders</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Simon Stock</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Simon Stock, who received the Brown Scapular from Our Lady of Mount 
                    Carmel, intercede for us that we may always wear this sign of her protection with 
                    devotion and love.
                  </p>
                  <p className="mb-4">
                    Help us to understand the great privilege of being clothed with this scapular and 
                    to live our lives in a manner worthy of Our Lady's promises. May we, like you, 
                    be faithful servants of Mary and devoted children of Mount Carmel.
                  </p>
                  <p>
                    Through your intercession, may we be preserved from eternal fire and receive the 
                    special peace and protection that Our Lady promised to all who wear her scapular. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Scapular Wearers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Simon Stock, patron of the Brown Scapular, pray for all who wear this sign 
                    of Our Lady's protection.
                  </p>
                  <p>
                    Help us to be faithful to the promises we made when we received the scapular and 
                    to live as true children of Mary. May the scapular be for us a shield in danger 
                    and a pledge of eternal salvation. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Simon Stock, pray for all who wear the Brown Scapular!"
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
            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite reformer and Doctor of the Church, known for her mystical writings and reform of the Carmelite Order.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-cross" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John of the Cross
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite mystic and Doctor of the Church, co-founder of the Discalced Carmelites with St. Teresa.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite nun known as the "Little Flower," Doctor of the Church, and patron of missions.
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