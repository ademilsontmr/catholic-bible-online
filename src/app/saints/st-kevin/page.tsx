import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Kevin - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Kevin (Coemgen), Irish hermit and founder of Glendalough monastery.',
  keywords: [
    'st kevin',
    'saint kevin',
    'st kevin biography',
    'st kevin feast day',
    'st kevin patron saint',
    'catholic saints',
    'june 3 feast day',
    'irish saints',
    'glendalough',
    'hermit saints'
  ],
  openGraph: {
    title: 'St. Kevin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Kevin (Coemgen), Irish hermit and founder of Glendalough monastery.',
    url: 'https://catholicbibleonline.com/saints/st-kevin',
  },
  twitter: {
    title: 'St. Kevin - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Kevin (Coemgen), Irish hermit and founder of Glendalough monastery.',
  }
}

export default function StKevinPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☘️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Kevin
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Irish Hermit, Founder of Glendalough, Patron of Ireland
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Kevin</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">☘️</div>
              <div className="text-sm text-gray-600">Irish</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Kevin</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Kevin, also known as Coemgen in Irish, was born at the Fort of the White 
                Fountain in Leinster, Ireland, of royal descent. His life would become a 
                remarkable journey from noble birth to hermitic solitude, ultimately leading 
                to the foundation of one of Ireland's most important monastic centers. Kevin's 
                story is deeply intertwined with the early Christian history of Ireland and 
                the development of Irish monasticism.
              </p>
              
              <p className="mb-6">
                Kevin's early formation was guided by two important saints of the Irish Church. 
                He was baptized by St. Cronan, who would have been responsible for his 
                introduction to the Christian faith. Later, he was educated by St. Petroc, 
                a Welsh saint who had come to Ireland and was known for his learning and 
                holiness. This spiritual formation under such holy men undoubtedly shaped 
                Kevin's deep faith and his desire for a life dedicated to God.
              </p>
              
              <p className="mb-6">
                After completing his education and being ordained a priest, Kevin felt called 
                to a life of solitude and prayer. He became a hermit at the Valley of the Two 
                Lakes in Glendalough, a beautiful and remote location in the Wicklow Mountains. 
                This choice of location reflects Kevin's desire for isolation and his 
                appreciation for the natural beauty of God's creation. For seven years, he 
                lived in this solitary state, dedicating himself to prayer, penance, and 
                contemplation.
              </p>
              
              <p className="mb-6">
                However, Kevin's holiness and wisdom did not remain hidden. After seven years 
                of hermitic life, he was persuaded to give up his solitary existence to share 
                his spiritual gifts with others. He went to Disert-Coemgen, where he founded 
                a monastery for the disciples who were attracted to his way of life. This 
                marked the beginning of his role as a spiritual father and teacher, guiding 
                others in their journey of faith.
              </p>
              
              <p>
                Later, Kevin moved to Glendalough, where he established his permanent foundation. 
                To strengthen this foundation, he made a pilgrimage to Rome, bringing back many 
                relics for his monastery. This journey to the heart of Christendom demonstrates 
                Kevin's commitment to maintaining strong connections with the universal Church 
                while building up the local Christian community in Ireland. He was also a 
                friend of St. Kieran of Clonmacnois, another important Irish saint, and was 
                entrusted with the raising of the son of King Colman of Ui Faelain, showing 
                the trust that secular rulers placed in him.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Kevin: Founder of Glendalough</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Glendalough</h3>
              <p className="mb-6">
                St. Kevin's most enduring legacy is the foundation of Glendalough, one of 
                Ireland's most important monastic centers. The monastery he established in 
                the beautiful Valley of the Two Lakes became a center of learning, prayer, 
                and Christian culture. Glendalough would grow to include a round tower, 
                several churches, and a monastic settlement that would serve as a model 
                for other Irish monasteries. The site remains a place of pilgrimage and 
                spiritual significance to this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Irish Monasticism</h3>
              <p className="mb-6">
                Kevin's life exemplifies the unique character of early Irish monasticism, 
                which combined elements of Eastern desert monasticism with the Celtic 
                love for nature and learning. His journey from hermit to abbot demonstrates 
                the flexibility and adaptability of Irish monastic life, where individuals 
                could move between solitary and communal forms of religious life according 
                to their spiritual needs and the needs of the community.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Solitude and Community</h3>
              <p className="mb-6">
                Kevin's transition from hermit to community leader shows his understanding 
                that spiritual gifts are meant to be shared. His seven years of solitude 
                provided the foundation for his later ministry as a teacher and spiritual 
                guide. This balance between contemplation and action, between personal 
                prayer and service to others, continues to inspire those who seek to live 
                a balanced spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Connection to Universal Church</h3>
              <p>
                Kevin's pilgrimage to Rome demonstrates his commitment to maintaining 
                strong connections with the universal Church while building up the local 
                Christian community. By bringing back relics and maintaining ties with 
                the See of Peter, Kevin ensured that Irish Christianity remained in 
                communion with the wider Church. This commitment to unity and orthodoxy 
                helped to preserve the faith in Ireland during a time when the Church 
                was still establishing itself in the region.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 3</div>
              <p className="text-gray-600">Feast of St. Kevin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Kevin is celebrated on June 3rd, commemorating his life 
                of holiness and his founding of Glendalough. This date serves as a reminder 
                of the importance of Irish saints in the history of the Church and the 
                unique contribution of Irish monasticism to Christian spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Irish Heritage</h3>
              <p className="mb-6">
                St. Kevin's feast day is particularly significant in Ireland, where he 
                is remembered as one of the great saints of the early Irish Church. His 
                connection to Glendalough, one of Ireland's most beautiful and spiritually 
                significant sites, makes his feast day a time for Irish Catholics to 
                celebrate their rich spiritual heritage and the contributions of Irish 
                saints to the universal Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Kevin's feast day serves as a reminder of the 
                importance of finding balance between solitude and community, between 
                personal prayer and service to others. It's a day to reflect on how 
                we can create spaces for prayer and contemplation in our busy lives, 
                and to remember that our spiritual gifts are meant to be shared with 
                others for the building up of the Church and the world.
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
                  <li>• <strong>Ireland:</strong> Patron of his homeland</li>
                  <li>• <strong>Glendalough:</strong> Patron of the monastery he founded</li>
                  <li>• <strong>Hermits:</strong> Patron of those living eremitical life</li>
                  <li>• <strong>Dublin:</strong> Patron of the archdiocese</li>
                  <li>• <strong>Wicklow:</strong> Patron of the county where Glendalough is located</li>
                  <li>• <strong>Irish Monasticism:</strong> Patron of Irish monastic traditions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Solitude:</strong> Help in finding time for prayer and reflection</li>
                  <li>• <strong>Irish Heritage:</strong> Protection for Irish Catholic traditions</li>
                  <li>• <strong>Monastic Life:</strong> Guidance for those considering religious life</li>
                  <li>• <strong>Nature:</strong> Appreciation for God's creation</li>
                  <li>• <strong>Pilgrimage:</strong> Success for spiritual journeys</li>
                  <li>• <strong>Community Building:</strong> Help in building Christian communities</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Kevin</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Kevin, founder of Glendalough and patron of Ireland, 
                    you who found God in the beauty of nature and the silence of solitude, 
                    intercede for us that we may find time for prayer and contemplation 
                    in our busy lives.
                  </p>
                  <p className="mb-4">
                    Help us to appreciate the beauty of God's creation and to find Him 
                    in the natural world around us. Teach us to balance our need for 
                    solitude with our call to serve others, and guide us in building 
                    communities of faith and love.
                  </p>
                  <p>
                    May we, like you, be willing to share our spiritual gifts with others 
                    and to maintain strong connections with the universal Church while 
                    serving our local communities. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Ireland</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Kevin, patron of Ireland, intercede for the people of your homeland.
                  </p>
                  <p>
                    Help them to remain faithful to their rich Catholic heritage and to 
                    pass on the faith to future generations. May Ireland continue to be 
                    a land of saints and scholars, bringing the light of Christ to the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Kevin of Glendalough, pray for us!"
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
            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland and patron saint, who brought Christianity to the island.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-brigid" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Brigid
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Irish saint and founder of Kildare, patroness of Ireland.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-flora" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Flora
                </h3>
                <p className="text-gray-700 text-sm">
                  Irish virgin and disciple of St. Fintan Munnu Kiara, another Irish saint.
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