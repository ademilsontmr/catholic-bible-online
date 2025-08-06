import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Aaron - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Aaron, British hermit and abbot who founded a monastic community in Brittany.',
  keywords: [
    'st aaron',
    'saint aaron',
    'british saint',
    'st aaron biography',
    'st aaron feast day',
    'st aaron patron saint',
    'brittany hermit',
    'st malo island',
    'catholic saints',
    'early british saints'
  ],
  openGraph: {
    title: 'St. Aaron - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aaron, British hermit and abbot who founded a monastic community in Brittany.',
    url: 'https://catholicbibleonline.com/saints/st-aaron',
  },
  twitter: {
    title: 'St. Aaron - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aaron, British hermit and abbot who founded a monastic community in Brittany.',
  }
}

export default function StAaronPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Aaron
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            British Hermit and Abbot, Founder of Monastic Community in Brittany
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Aaron</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏝️</div>
              <div className="text-sm text-gray-600">Hermit</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Aaron</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Aaron was a native of Britain, born during the early Christian period when the faith was taking root 
                in the British Isles. From an early age, he felt called to a life of prayer and solitude, seeking to draw 
                closer to God through contemplative living.
              </p>
              
              <p className="mb-6">
                Following his calling, Aaron left his homeland and journeyed to Brittany, a region in northwestern France 
                that was closely connected to the Celtic Christian tradition. There, he found the perfect place for his 
                hermitic vocation on the island of Cesabre, which would later become known as St. Malo island.
              </p>
              
              <p className="mb-6">
                On this isolated island, Aaron embraced the life of a hermit, dedicating himself to prayer, fasting, 
                and contemplation. His deep spirituality and holy way of life soon attracted the attention of other 
                seekers who were drawn to his example of Christian living.
              </p>
              
              <p className="mb-6">
                Among those who came to learn from Aaron was St. Malo of Wales, who would later become one of the most 
                important saints of Brittany. Aaron's wisdom and spiritual guidance helped form St. Malo into the great 
                missionary and bishop he would become.
              </p>
              
              <p>
                As more disciples gathered around him, Aaron was called to take on the role of Abbot, leading the growing 
                monastic community that had formed around his hermitage. He guided his spiritual sons with wisdom and 
                humility, teaching them the ways of prayer and monastic discipline.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Aaron: Pioneer of Celtic Monasticism</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Monastic Community</h3>
              <p className="mb-6">
                St. Aaron's legacy as a founder of monastic life in Brittany is profound. What began as a solitary hermitage 
                on the island of Cesabre grew into a thriving monastic community under his guidance. His ability to balance 
                the contemplative life with the demands of leadership set a pattern for Celtic monasticism.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Father to St. Malo</h3>
              <p className="mb-6">
                Perhaps Aaron's most significant contribution was his role as spiritual mentor to St. Malo of Wales. 
                The formation and guidance he provided to this future saint and bishop helped ensure that the Christian 
                faith would spread throughout Brittany and beyond. St. Malo's later missionary work and episcopal ministry 
                can be traced back to Aaron's influence.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Hermit-Abbot</h3>
              <p className="mb-6">
                Aaron exemplifies the transition from hermit to abbot, showing how God can call those who seek solitude 
                to also serve as leaders of communities. His ability to maintain his contemplative spirit while guiding 
                others demonstrates the balance between prayer and service that is central to monastic life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Celtic Christian Tradition</h3>
              <p>
                St. Aaron represents the early Celtic Christian tradition that flourished in Britain and Brittany. 
                His life of prayer, his connection to the natural world through his island hermitage, and his role 
                in forming other saints all reflect the distinctive characteristics of Celtic spirituality.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 22</div>
              <p className="text-gray-600">Feast of St. Aaron</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Aaron is celebrated on June 22nd. This feast day honors his role as a hermit, abbot, and spiritual 
                father who helped establish monastic life in Brittany and formed one of its greatest saints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those discerning religious life, for monastic communities, 
                for spiritual directors and mentors, and for the Celtic Christian tradition. It's also a day to reflect 
                on the balance between solitude and community in the spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for those seeking God in solitude, for monastic vocations, 
                for spiritual mentors, and to ask for St. Aaron's intercession in finding the right balance between 
                prayer and service in our lives.
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
                  <li>• <strong>Hermits:</strong> Patron of those living in solitude</li>
                  <li>• <strong>Abbots:</strong> Patron of monastic leaders</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual mentors</li>
                  <li>• <strong>Celtic Christians:</strong> Patron of Celtic Christian tradition</li>
                  <li>• <strong>British Saints:</strong> Patron of saints from Britain</li>
                  <li>• <strong>Island Hermits:</strong> Patron of those seeking God on islands</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning monastic life</li>
                  <li>• <strong>Contemplative Prayer:</strong> Patron of deep prayer life</li>
                  <li>• <strong>Monastic Communities:</strong> Helper for religious communities</li>
                  <li>• <strong>Spiritual Formation:</strong> Patron of spiritual growth</li>
                  <li>• <strong>Brittany:</strong> Helper for the Church in Brittany</li>
                  <li>• <strong>Balance in Life:</strong> Patron of balancing solitude and service</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Aaron</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Aaron, you who found God in the solitude of your island hermitage, help me to find moments 
                    of quiet prayer in my busy life.
                  </p>
                  <p>
                    You who guided St. Malo and other disciples, help me to be open to spiritual guidance and to guide 
                    others when called. Teach me to balance the need for prayer with the call to serve others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Aaron, patron of hermits and abbots, pray for all those discerning religious life.
                  </p>
                  <p>
                    Help them to hear God's call clearly, whether to the contemplative life of a hermit or to the 
                    leadership role of an abbot. Guide them in finding the right balance between solitude and community. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Aaron, pray for us!"
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
            <Link href="/saints/st-malo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Bishop Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Malo
                </h3>
                <p className="text-gray-700 text-sm">
                  Disciple of St. Aaron, became bishop and missionary in Brittany.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-columba" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Celtic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Columba
                </h3>
                <p className="text-gray-700 text-sm">
                  Irish monk who founded monastery on Iona, patron of Celtic Christianity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Abbot Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism, wrote the Rule for monks.
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