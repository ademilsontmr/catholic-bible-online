import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Camilla - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Camilla, recluse and disciple of St. Germanus of Auxerre who became a hermitess in France.',
  keywords: [
    'st camilla',
    'saint camilla',
    'st camilla biography',
    'st camilla feast day',
    'st camilla patron saint',
    'catholic saints',
    'hermit saints'
  ],
  openGraph: {
    title: 'St. Camilla - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Camilla, recluse and disciple of St. Germanus of Auxerre.',
    url: 'https://catholicbibleonline.com/saints/st-camilla',
  },
  twitter: {
    title: 'St. Camilla - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Camilla, recluse and disciple of St. Germanus of Auxerre.',
  }
}

export default function StCamillaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Camilla
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Recluse and Disciple of St. Germanus of Auxerre
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Camilla</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Unknown</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Hermit</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Camilla</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Camilla was born in Civitavecchia, Italy, and became a devoted disciple of St. Germanus of Auxerre, 
                one of the most important bishops and missionaries of the early Church. Her life exemplifies the deep 
                commitment to spiritual growth and the contemplative life that characterized many early Christian women.
              </p>
              
              <p className="mb-6">
                As a disciple of St. Germanus, Camilla accompanied him on his missionary journeys to Auxerre, France, 
                where she witnessed firsthand his pastoral care, teaching, and miraculous works. This experience deeply 
                influenced her spiritual development and strengthened her faith.
              </p>
              
              <p className="mb-6">
                Following the example of her spiritual mentor and responding to a call to deeper prayer and solitude, 
                Camilla chose to become a hermitess. She embraced the eremitical life, dedicating herself to prayer, 
                penance, and contemplation in the wilderness of France.
              </p>
              
              <p className="mb-6">
                As a recluse, St. Camilla lived a life of extreme simplicity and devotion, following the ancient 
                tradition of desert spirituality that had been established by the early Christian hermits and anchoresses. 
                Her solitary life was marked by constant prayer, fasting, and spiritual warfare against the temptations 
                of the world.
              </p>
              
              <p>
                Though little is known about the specific details of her later life, St. Camilla's example continues 
                to inspire those who seek a deeper relationship with God through solitude, prayer, and self-denial. 
                Her life demonstrates that true discipleship often leads to a call to deeper intimacy with Christ 
                through the contemplative life.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Camilla: Model of Contemplative Life</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Camilla's legacy is one of deep spiritual commitment and the courage to follow God's call to 
                solitude. Her life demonstrates that true discipleship involves not only learning from a spiritual 
                master but also responding to the personal call to deeper prayer and contemplation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Discipleship</h3>
              <p className="mb-6">
                As a disciple of St. Germanus, Camilla shows us the importance of spiritual mentorship and the 
                willingness to accompany holy men and women in their mission. Her example teaches us that true 
                discipleship involves both learning and eventually finding our own unique path to holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Contemplative Witness</h3>
              <p className="mb-6">
                St. Camilla's choice to become a hermitess demonstrates the value of the contemplative life in 
                the Church. Her solitary witness reminds us that prayer and contemplation are essential elements 
                of the Christian life, even in our busy modern world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage to Follow</h3>
              <p>
                St. Camilla's journey from disciple to hermitess shows the courage required to follow God's call, 
                even when it leads to a life of solitude and sacrifice. Her example inspires us to listen for 
                God's voice and respond with faith and trust, regardless of where that call may lead.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">Unknown</div>
              <p className="text-gray-600">Feast of St. Camilla, Hermitess</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                While the exact date of St. Camilla's feast day is not recorded in the universal calendar, 
                her memory is honored by those who follow the contemplative life and by communities that 
                celebrate the lives of early Christian hermits and anchoresses.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In regions where her memory is preserved, St. Camilla's feast may be celebrated with special 
                prayers for contemplatives, hermits, and those seeking spiritual guidance. Her example is 
                particularly meaningful for those considering or living the eremitical life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Camilla for the grace to discern God's will in their lives, for courage 
                to follow difficult spiritual paths, and for the gift of contemplative prayer. Her intercession 
                is sought by those seeking spiritual direction and guidance.
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
                  <li>• <strong>Hermits and Recluses:</strong> For her life of solitude and prayer</li>
                  <li>• <strong>Contemplatives:</strong> For her dedication to the contemplative life</li>
                  <li>• <strong>Spiritual Disciples:</strong> For her faithful following of St. Germanus</li>
                  <li>• <strong>Women Religious:</strong> For her example of female holiness</li>
                  <li>• <strong>Solitary Souls:</strong> For her courage to live alone for God</li>
                  <li>• <strong>Prayer Warriors:</strong> For her life of constant prayer</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Direction:</strong> For guidance in spiritual matters</li>
                  <li>• <strong>Discernment:</strong> For clarity in following God's will</li>
                  <li>• <strong>Contemplative Prayer:</strong> For the gift of deep prayer</li>
                  <li>• <strong>Solitude:</strong> For those called to live alone</li>
                  <li>• <strong>Missionary Discipleship:</strong> For those accompanying holy teachers</li>
                  <li>• <strong>Inner Peace:</strong> For tranquility in difficult decisions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Camilla</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Camilla, faithful disciple of St. Germanus and courageous hermitess, 
                    you who left all to follow Christ in solitude and prayer, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to discern God's will in our lives and give us the courage to follow His call, 
                    even when it leads to difficult paths. Grant us the grace of contemplative prayer and 
                    the strength to embrace solitude when God calls us to it.
                  </p>
                  <p>
                    May we learn from your example of faithful discipleship and your commitment to the 
                    contemplative life. Through your intercession, may we grow in prayer, discernment, 
                    and the courage to follow God's will. St. Camilla, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Camilla, pray for us!"
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
            <Link href="/saints/st-germanus-auxerre" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Germanus of Auxerre
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and missionary who was St. Camilla's spiritual mentor and guide.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of monasticism and model for all hermits and contemplatives.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary-egypt" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary of Egypt
                </h3>
                <p className="text-gray-700 text-sm">
                  Penitent hermitess who lived in the desert, model of conversion and solitude.
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