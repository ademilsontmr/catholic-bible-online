import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Carmen - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Carmen, whose name derives from Our Lady of Mount Carmel and the Carmelite tradition.',
  keywords: [
    'st carmen',
    'saint carmen',
    'st carmen biography',
    'st carmen feast day',
    'st carmen patron saint',
    'carmelite saint',
    'our lady of mount carmel',
    'carmelite scapular',
    'st simon stock',
    'catholic saints',
    'july 16 feast day'
  ],
  openGraph: {
    title: 'St. Carmen - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Carmen, whose name derives from Our Lady of Mount Carmel and the Carmelite tradition.',
    url: 'https://catholicbibleonline.com/saints/st-carmen',
  },
  twitter: {
    title: 'St. Carmen - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Carmen, whose name derives from Our Lady of Mount Carmel and the Carmelite tradition.',
  }
}

export default function StCarmenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Carmen
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Carmelite Saint, Devotee of Our Lady of Mount Carmel
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Carmen</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 16</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Carmen</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The name Carmen is a beautiful derivation of Carmel, which is one of the most significant 
                titles given to Our Blessed Mother, namely, Our Lady of Mount Carmel. This connection 
                to the Blessed Virgin Mary through the sacred mountain of Carmel gives the name Carmen 
                a deep spiritual significance that is rooted in the rich tradition of the Carmelite Order.
              </p>
              
              <p className="mb-6">
                Mount Carmel holds a special place in Christian history as the first place dedicated to 
                the Blessed Virgin Mary, where a chapel was erected in her honor before her glorious 
                Assumption into Heaven. This sacred mountain, located in the Holy Land, became the 
                spiritual home of the Carmelite Order, which takes its name from this holy place and 
                has been dedicated to the service of Our Lady since its foundation.
              </p>
              
              <p className="mb-6">
                The Carmelite Order, with its deep devotion to the Blessed Virgin Mary, has produced 
                many saints throughout the centuries who have embodied the virtues of prayer, 
                contemplation, and service to God. St. Carmen, whose name is intrinsically linked to 
                this spiritual tradition, represents the call to live a life of holiness and devotion 
                to Our Lady of Mount Carmel.
              </p>
              
              <p className="mb-6">
                July 16th is not only the feast day of St. Carmen but also the feast of Our Lady of 
                Mount Carmel and the "Scapular of Mount Carmel." This date commemorates a significant 
                event in Carmelite history that occurred in 1251, when pious tradition tells us that 
                the Blessed Virgin appeared to St. Simon Stock, General of the Carmelites at Cambridge, 
                England.
              </p>
              
              <p className="mb-6">
                During this apparition, Our Lady showed St. Simon Stock the scapular and promised 
                supernatural favors and her special protection to his Order and to all persons who 
                would wear the scapular with devotion. This promise has been a source of great comfort 
                and spiritual strength for countless faithful throughout the centuries.
              </p>
              
              <p>
                To obtain the indulgences and other benefits promised to those who wear the Carmelite 
                scapular, a person must be invested by a priest who has the requisite faculties and 
                must lead a consistent Christian life. This requirement emphasizes the importance of 
                both proper spiritual formation and ongoing commitment to living the Gospel values in 
                daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Carmen: Devotion to Our Lady of Mount Carmel</h2>
          
          <div className="bg-green-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Marian Devotion</h3>
              <p className="mb-6">
                St. Carmen's legacy is marked by her deep connection to Our Lady of Mount Carmel and 
                the spiritual tradition of the Carmelite Order. Her name, derived from Carmel, serves 
                as a constant reminder of the special relationship between the Blessed Virgin Mary and 
                all those who seek to follow Christ through her intercession. This connection 
                emphasizes the importance of Marian devotion in the Christian spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Carmelite Spirituality</h3>
              <p className="mb-6">
                As a saint whose name is intrinsically linked to the Carmelite tradition, St. Carmen 
                serves as an inspiration for all those who are drawn to the contemplative and 
                prayerful way of life that characterizes the Carmelite Order. Her example encourages 
                the faithful to embrace a life of prayer, meditation, and service to God, following 
                the spiritual path established by the great Carmelite saints throughout history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Scapular Devotion</h3>
              <p className="mb-6">
                St. Carmen's feast day, which coincides with the feast of Our Lady of Mount Carmel 
                and the Scapular, highlights the importance of this powerful sacramental in Catholic 
                devotion. The scapular, as a sign of Our Lady's special protection and a commitment 
                to live a Christian life, serves as a visible reminder of the call to holiness and 
                the promise of Mary's intercession for those who wear it with faith and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Christian Living</h3>
              <p>
                St. Carmen's connection to Mount Carmel and the Carmelite tradition reminds us that 
                every Christian is called to be a "mountain of prayer" in the world, offering 
                intercession and witness to the love of God. Her example encourages the faithful to 
                embrace a life of prayer, contemplation, and service, following the path of the great 
                Carmelite saints who have shown us how to live in intimate union with God through 
                devotion to Our Lady.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 16</div>
              <p className="text-gray-600">Feast of St. Carmen and Our Lady of Mount Carmel</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Carmen is celebrated on July 16th, which is also the feast of Our Lady of Mount 
                Carmel and the Scapular of Mount Carmel. This triple celebration honors the deep 
                connection between St. Carmen, the Blessed Virgin Mary, and the Carmelite spiritual 
                tradition.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for the Carmelite Order, for those who wear the 
                scapular, and for all who seek to deepen their devotion to Our Lady of Mount Carmel. 
                It's also a day to reflect on the importance of Marian devotion and the call to live 
                a life of prayer and contemplation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the Carmelite Order, for those seeking 
                to deepen their Marian devotion, for the renewal of contemplative life, and to ask 
                for St. Carmen's intercession in growing closer to Our Lady of Mount Carmel.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Carmelite Order:</strong> Patron of the Carmelite family</li>
                  <li>• <strong>Marian Devotion:</strong> Patron of devotion to Our Lady</li>
                  <li>• <strong>Scapular Wearers:</strong> Patron of those who wear the scapular</li>
                  <li>• <strong>Contemplative Life:</strong> Patron of prayer and meditation</li>
                  <li>• <strong>Mount Carmel:</strong> Patron of the holy mountain</li>
                  <li>• <strong>Carmelite Spirituality:</strong> Patron of Carmelite way of life</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer Life:</strong> Helper for deepening prayer</li>
                  <li>• <strong>Marian Consecration:</strong> Patron of consecration to Mary</li>
                  <li>• <strong>Contemplative Orders:</strong> Helper for religious communities</li>
                  <li>• <strong>Spiritual Growth:</strong> Patron of spiritual development</li>
                  <li>• <strong>Holy Land:</strong> Helper for pilgrims to Mount Carmel</li>
                  <li>• <strong>Christian Unity:</strong> Patron of unity in the Church</li>
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
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Carmen</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Carmen, you whose name is derived from the holy mountain of Carmel and who 
                    are so closely united to Our Lady of Mount Carmel, help me to deepen my devotion 
                    to the Blessed Virgin Mary.
                  </p>
                  <p>
                    You who are connected to the rich spiritual tradition of the Carmelite Order, teach 
                    me to embrace a life of prayer and contemplation. Help me to wear the scapular with 
                    devotion and to live a consistent Christian life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Carmelite Spirituality</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Carmen, patron of the Carmelite Order and all who are devoted to Our Lady of 
                    Mount Carmel, pray for the renewal of contemplative life in the Church.
                  </p>
                  <p>
                    Help all those who wear the scapular to live lives of prayer and service, and may 
                    your intercession bring many souls closer to the heart of Our Blessed Mother. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Carmen, pray for us!"
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
            <Link href="/saints/st-simon-stock" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Carmelite Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Simon Stock
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite General who received the scapular from Our Lady of Mount Carmel.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Carmelite Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Therese of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Little Flower, Carmelite nun, Doctor of the Church, patron of missionaries.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-of-the-cross" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Carmelite Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John of the Cross
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite mystic, Doctor of the Church, reformer of the Carmelite Order.
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