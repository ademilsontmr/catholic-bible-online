import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Aaron of Aleth - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Aaron of Aleth, hermit and abbot who was the spiritual mentor of St. Malo in 6th century Brittany.',
  keywords: [
    'st aaron of aleth',
    'saint aaron',
    'hermit abbot',
    'brittany saints',
    'catholic saints',
    'june 21 feast day',
    'st malo mentor'
  ],
  openGraph: {
    title: 'St. Aaron of Aleth - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aaron of Aleth, hermit and abbot who was the spiritual mentor of St. Malo in 6th century Brittany.',
    url: 'https://catholicbibleonline.com/saints/st-aaron-aleth',
  },
  twitter: {
    title: 'St. Aaron of Aleth - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Aaron of Aleth, hermit and abbot who was the spiritual mentor of St. Malo in 6th century Brittany.',
  }
}

export default function StAaronAlethPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Aaron of Aleth
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Hermit and Abbot, Spiritual Mentor of St. Malo
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Aaron of Aleth</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 21</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Aaron of Aleth</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Aaron of Aleth, also known as Saint Aihran or Eran in Breton, was a hermit, monk, 
                and abbot who lived during the 6th century in Brittany, France. He was likely born in 
                Celtic Britain and later migrated to Armorican Domnonia (modern Brittany) to dedicate 
                his life to solitude and prayer. His early life was marked by a deep desire for 
                spiritual communion with God and a calling to the monastic life.
              </p>
              
              <p className="mb-6">
                Aaron first lived as a hermit near Lamballe and Pleumeur-Gautier, seeking solitude 
                and prayer in the rugged Breton landscape. His reputation for holiness and wisdom 
                began to spread, attracting many visitors and disciples who sought his spiritual 
                guidance. Eventually, he settled on Cézembre Island, off the coast of Aleth 
                (present-day Saint-Malo), where he established a more permanent hermitage.
              </p>
              
              <p className="mb-6">
                Around 544 AD, Aaron's most famous disciple, Saint Malo of Wales, came to study 
                under him. Aaron became the abbot of the growing community, guiding his disciples 
                with humility and faith. He taught them the importance of prayer, solitude, and 
                service to God, establishing the foundations of monastic life in the region.
              </p>
              
              <p>
                St. Aaron died shortly after 552 AD, and Saint Malo succeeded him as spiritual 
                leader, later becoming the first Bishop of Aleth. Aaron's influence extended far 
                beyond his lifetime through his disciples, particularly St. Malo, who carried on 
                his mission and became a central figure in Breton Christianity. The village of 
                Saint-Aaron in Lamballe, France, bears his name as a testament to his lasting legacy.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Aaron of Aleth: Spiritual Mentor of Brittany</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Monastic Life</h3>
              <p className="mb-6">
                St. Aaron's greatest legacy is his role as the founder of monastic life on Cézembre 
                Island and his establishment of the first Christian community in the region. His 
                hermitage became a center of spiritual learning and prayer, attracting seekers from 
                across Brittany and beyond. He showed that even in the most remote places, God's 
                presence could be found and shared with others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mentor of Saint Malo</h3>
              <p className="mb-6">
                Aaron's most significant contribution was his mentorship of Saint Malo, who would 
                become one of the most important figures in Breton Christianity. Through his 
                guidance, Aaron shaped the spiritual formation of a future bishop and missionary. 
                This demonstrates the profound impact that a single holy life can have on the 
                Church and the spread of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Solitude</h3>
              <p>
                St. Aaron's life serves as a model of spiritual leadership and humility. He chose 
                to live in solitude not for selfish reasons, but to better serve God and others. 
                His willingness to share his wisdom with disciples while maintaining his commitment 
                to prayer shows the balance between contemplation and action that is essential for 
                Christian leadership.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 21</div>
              <p className="text-gray-600">Feast of St. Aaron of Aleth</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Aaron of Aleth is celebrated on June 21st in Saint-Malo and June 22nd 
                elsewhere in the Catholic tradition. This date falls during the early summer season, 
                a time of growth and abundance, which is fitting for a saint whose life was dedicated 
                to nurturing spiritual growth in others. The feast is celebrated as a memorial in 
                the dioceses of Brittany.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Aaron's feast day, many people in Brittany visit the village of Saint-Aaron 
                in Lamballe, which bears his name. Some churches hold special Masses and prayer 
                services, particularly those dedicated to monastic life and spiritual mentorship. 
                Many people pray for his intercession for those seeking solitude, spiritual guidance, 
                and monastic vocations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Aaron of Aleth or to 
                make a special petition for spiritual guidance and monastic vocations. Many people 
                also visit churches dedicated to St. Aaron or make pilgrimages to the sites associated 
                with his life in Brittany.
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
                  <li>• <strong>Hermits:</strong> Patron of those seeking solitude</li>
                  <li>• <strong>Monastic Communities:</strong> Patron of Breton monasteries</li>
                  <li>• <strong>Spiritual Mentors:</strong> Patron of spiritual directors</li>
                  <li>• <strong>Brittany:</strong> Patron saint of the region</li>
                  <li>• <strong>Island Hermits:</strong> Patron of coastal solitude</li>
                  <li>• <strong>Abbots:</strong> Patron of monastic leaders</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Guidance:</strong> Helper for those seeking direction</li>
                  <li>• <strong>Monastic Vocations:</strong> Patron of religious life</li>
                  <li>• <strong>Contemplative Prayer:</strong> Guide for meditation</li>
                  <li>• <strong>Christian Leadership:</strong> Patron of humble leaders</li>
                  <li>• <strong>Breton Culture:</strong> Helper for Celtic Christianity</li>
                  <li>• <strong>Solitude Seekers:</strong> Patron of those in isolation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Aaron of Aleth</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who called Saint Aaron to a life of solitude and prayer, grant us the 
                    grace to seek Your presence in humility and simplicity. Through his intercession, 
                    strengthen our faith and guide us on the path of holiness.
                  </p>
                  <p className="mb-4">
                    Help us to find moments of quiet reflection in our busy lives and to be open 
                    to the guidance of spiritual mentors. May Saint Aaron's example of humble 
                    leadership inspire us to serve others with love and wisdom.
                  </p>
                  <p>
                    St. Aaron of Aleth, pray for us that we may grow in our relationship with God 
                    and be willing to share our spiritual gifts with others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Spiritual Guidance</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Aaron of Aleth, you who guided Saint Malo and many others in their 
                    spiritual journey, intercede for all those who seek spiritual direction and 
                    guidance in their lives.
                  </p>
                  <p>
                    Help us to find wise mentors and to be open to the Holy Spirit's guidance 
                    in our daily decisions. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Aaron of Aleth, pray for us!"
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Malo
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and disciple of St. Aaron, first Bishop of Aleth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-samson-dol" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Samson of Dol
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Breton missionary and contemporary of St. Aaron.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gildas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gildas
                </h3>
                <p className="text-gray-700 text-sm">
                  Renowned British monk and writer, contemporary of St. Aaron.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 