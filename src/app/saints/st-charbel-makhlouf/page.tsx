import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Charbel Makhlouf - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Charbel Makhlouf, Maronite monk and hermit whose holiness and miracles continue to inspire worldwide.',
  keywords: [
    'st charbel makhlouf',
    'saint charbel makhlouf',
    'st charbel makhlouf biography',
    'st charbel makhlouf feast day',
    'st charbel makhlouf patron saint',
    'maronite saint',
    'lebanese saint',
    'hermit saint',
    'monk saint',
    'miraculous saint',
    'incorrupt saint',
    'catholic saints',
    'july 24 feast day'
  ],
  openGraph: {
    title: 'St. Charbel Makhlouf - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Charbel Makhlouf, Maronite monk and hermit whose holiness and miracles continue to inspire worldwide.',
    url: 'https://catholicbibleonline.com/saints/st-charbel-makhlouf',
  },
  twitter: {
    title: 'St. Charbel Makhlouf - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Charbel Makhlouf, Maronite monk and hermit whose holiness and miracles continue to inspire worldwide.',
  }
}

export default function StCharbelMakhloufPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🧘</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Charbel Makhlouf
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Maronite Monk, Hermit, Miracle Worker, Patron of Lebanon
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Charbel Makhlouf</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🧘</div>
              <div className="text-sm text-gray-600">Monk</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Charbel Makhlouf</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Charbel Makhlouf, born Youssef Antoun Makhlouf on May 8, 1828, in the 
                small village of Bekaa Kafra, Lebanon, is one of the most beloved saints of 
                the Maronite Catholic Church and a powerful witness to the mystery of divine 
                grace through silence, sacrifice, and prayer. His humble origins in a small 
                Lebanese village would become the foundation for a life of extraordinary 
                holiness that would touch people around the world.
              </p>
              
              <p className="mb-6">
                From an early age, Charbel was drawn to the spiritual life. He was profoundly 
                influenced by his uncle and the hermits of Saint Anthony of Qozhaya Monastery. 
                This early exposure to the monastic life and the example of holy men would 
                shape his spiritual journey and lead him to embrace a life of prayer and 
                contemplation. The influence of these spiritual mentors would remain with him 
                throughout his life.
              </p>
              
              <p className="mb-6">
                In 1851, he entered the Monastery of Our Lady of Mayfouq and later transferred 
                to the Monastery of Saint Maron in Annaya, where he took the religious name 
                Charbel, after a second-century Christian martyr. He was ordained a priest in 
                1859. This period of formation and ordination marked the beginning of his 
                formal religious life and his commitment to serving God as a Maronite monk.
              </p>
              
              <p className="mb-6">
                For the next sixteen years, Charbel lived in his monastery with deep humility 
                and obedience. He spent hours daily in the Divine Liturgy, Eucharistic Adoration, 
                and prayer, fully embracing the monastic vows of poverty, chastity, and obedience. 
                His life in the monastery was marked by a profound commitment to prayer and a 
                deep love for the Eucharist, which would become central to his spiritual life.
              </p>
              
              <p className="mb-6">
                In 1875, he was granted permission to live as a hermit in the nearby Hermitage 
                of Saints Peter and Paul, where he would spend the final 23 years of his life 
                in near-complete seclusion. This transition to the eremitical life represented 
                a deepening of his commitment to solitude and prayer, following the ancient 
                tradition of the desert fathers.
              </p>
              
              <p className="mb-6">
                Charbel lived an ascetic life of intense prayer, manual labor, and strict 
                fasting. His life mirrored the desert fathers—completely surrendered to God. 
                Though hidden from the world, his holiness radiated far beyond his hermitage. 
                He was known for his deep devotion to the Holy Eucharist and the Blessed Virgin 
                Mary, which formed the center of his spiritual life.
              </p>
              
              <p>
                He died on December 24, 1898, after suffering a stroke while celebrating the 
                Divine Liturgy. Following his death, reports of miracles began immediately. 
                His tomb emitted a bright light, and his incorrupt body exuded a miraculous 
                liquid, attracting pilgrims from all faiths. To this day, countless healings—spiritual 
                and physical—are attributed to his intercession.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Charbel Makhlouf: Hermit of Divine Grace</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Contemplative Holiness</h3>
              <p className="mb-6">
                St. Charbel's legacy is most profoundly marked by his witness to the power of 
                contemplative prayer and the monastic life. In an age of noise and distraction, 
                his life reminds us of the importance of silence, solitude, and deep communion 
                with God. His commitment to the eremitical life demonstrates that holiness can 
                be achieved through prayer, sacrifice, and complete surrender to God's will. 
                His example continues to inspire those who seek a deeper spiritual life and 
                reminds us that the path to sanctity often requires withdrawal from the world's 
                distractions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness of Eucharistic Devotion</h3>
              <p className="mb-6">
                St. Charbel's deep devotion to the Holy Eucharist was central to his spiritual 
                life and remains a powerful aspect of his legacy. His death while celebrating 
                the Divine Liturgy is seen as a sign of his complete dedication to the Eucharist. 
                His example teaches us that the Eucharist should be the center of our spiritual 
                life and that true holiness flows from our relationship with Christ in the 
                Blessed Sacrament. This aspect of his legacy continues to inspire Catholics 
                to deepen their devotion to the Eucharist and to see it as the source and 
                summit of their spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between East and West</h3>
              <p className="mb-6">
                As a Maronite saint, St. Charbel represents the rich spiritual tradition of 
                the Eastern Catholic Churches and serves as a bridge between the Eastern and 
                Western Christian traditions. His canonization by Pope Paul VI in 1977 
                recognized the holiness that can be found in all branches of the Catholic 
                Church and helped to bring greater awareness of the Maronite tradition to 
                the wider Church. His legacy continues to promote unity among Christians 
                and to highlight the diversity and richness of Catholic spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Powerful Intercessor</h3>
              <p>
                St. Charbel's reputation as a miracle worker and his incorrupt body have made 
                him one of the most popular saints in the modern era. The countless healings 
                and conversions attributed to his intercession demonstrate his powerful 
                presence in heaven and his continued care for those who seek his help. His 
                miracles, which began immediately after his death and continue to this day, 
                show that God works through his saints to bring healing and grace to the 
                world. This aspect of his legacy gives hope to those who are suffering and 
                reminds us of the power of prayer and the communion of saints.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 24</div>
              <p className="text-gray-600">Feast of St. Charbel Makhlouf</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Charbel Makhlouf is celebrated on July 24th. This feast day honors his 
                contemplative holiness, his Eucharistic devotion, and his powerful intercession 
                for those who seek his help.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for Lebanon, for those seeking spiritual 
                healing, for contemplative vocations, and for a deeper devotion to the 
                Eucharist. It's also a day to reflect on the importance of silence and 
                prayer in our spiritual life and the power of God's grace working through 
                his saints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Lebanon and the Middle East, 
                for those seeking healing and conversion, for contemplative religious orders, 
                and to ask for St. Charbel's intercession in finding silence and prayer in 
                our busy lives.
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
                  <li>• <strong>Lebanon:</strong> Patron saint of Lebanon and the Lebanese people</li>
                  <li>• <strong>Maronite Church:</strong> Patron of the Maronite Catholic Church</li>
                  <li>• <strong>Hermits:</strong> Patron of those living the eremitical life</li>
                  <li>• <strong>Contemplatives:</strong> Patron of contemplative religious orders</li>
                  <li>• <strong>Spiritual Healing:</strong> Patron of those seeking spiritual healing</li>
                  <li>• <strong>Eucharistic Devotion:</strong> Patron of devotion to the Eucharist</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Physical Healing:</strong> Helper for those seeking physical healing</li>
                  <li>• <strong>Silence and Prayer:</strong> Patron of those seeking contemplative life</li>
                  <li>• <strong>Middle East:</strong> Helper for peace in the Middle East</li>
                  <li>• <strong>Monastic Life:</strong> Patron of monastic and religious vocations</li>
                  <li>• <strong>Miracles:</strong> Helper for those seeking miraculous intervention</li>
                  <li>• <strong>Eastern Catholics:</strong> Patron of Eastern Catholic traditions</li>
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
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Charbel</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Charbel Makhlouf, you who lived a life of deep prayer and contemplation, 
                    help me to find silence and solitude in my busy life.
                  </p>
                  <p>
                    You who were so devoted to the Eucharist, teach me to love the Blessed 
                    Sacrament as you did. Intercede for me in my needs and help me to grow 
                    in holiness through prayer and sacrifice. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Lebanon</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Charbel, patron of Lebanon, pray for your homeland and for all 
                    the people of the Middle East.
                  </p>
                  <p>
                    Help us to work for peace and unity among all peoples. May your 
                    intercession bring healing and hope to this troubled region. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Charbel Makhlouf, pray for us!"
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
            <Link href="/saints/st-anthony-abbot" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony Abbot
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of monasticism, hermit and miracle worker.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter-damian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter Damian
                </h3>
                <p className="text-gray-700 text-sm">
                  Benedictine monk and reformer, Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Founder Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of Western monasticism, patron of Europe.
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