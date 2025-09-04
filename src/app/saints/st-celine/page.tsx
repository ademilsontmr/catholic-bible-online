import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Celine - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Celine, mother of St. Remigius and holy woman who lived in prayer and good works.',
  keywords: [
    'st celine',
    'saint celine',
    'st celine biography',
    'st celine feast day',
    'st celine patron saint',
    'catholic saints',
    'early saints',
    'mother of st remigius',
    'gaul',
    'france'
  ],
  openGraph: {
    title: 'St. Celine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Celine, mother of St. Remigius and holy woman who lived in prayer and good works.',
    url: 'https://catholicbibleonline.com/saints/st-celine',
  },
  twitter: {
    title: 'St. Celine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Celine, mother of St. Remigius and holy woman who lived in prayer and good works.',
  }
}

export default function StCelinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Celine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother of St. Remigius, Holy Woman of Prayer, Model of Virtue
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Celine</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">Unknown</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Early</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Celine</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Celine is best known as the mother of St. Remigius, the great Bishop of Rheims 
                who played a crucial role in the conversion of the people of Gaul under King Clovis. 
                Though we have very few details about her life, what we do know reveals a woman of 
                extraordinary faith and holiness who lived during a pivotal period in the history 
                of Christianity in France.
              </p>
              
              <p className="mb-6">
                St. Celine's life was marked by a miraculous event that would change the course 
                of history. When she was already at an advanced age, she miraculously gave birth 
                to St. Remigius around the year 438. This miraculous birth was not only a sign 
                of God's special favor but also a fulfillment of prophecies that had been made 
                about the future bishop who would convert the Frankish people to Christianity.
              </p>
              
              <p className="mb-6">
                Immediately after giving birth to St. Remigius, St. Celine performed another 
                miraculous act. She gave sight to the hermit Montanus, who had three times 
                foretold the birth of the saintly bishop. This miracle demonstrated not only 
                her own holiness but also confirmed the divine nature of her son's mission 
                and the prophetic gifts of the hermit Montanus.
              </p>
              
              <p className="mb-6">
                Throughout her life, St. Celine was known for her holiness and her commitment 
                to prayer and good works. She lived in a time when Christianity was still 
                establishing itself in Gaul, and her example of faith and virtue would have 
                been a powerful witness to those around her. Her life of prayer and devotion 
                provided a strong spiritual foundation for her son, who would go on to become 
                one of the most important figures in the Christianization of France.
              </p>
              
              <p className="mb-6">
                St. Celine lived near Lyons, probably at Cerny, where she spent her days in 
                prayer and charitable works. Her life was characterized by humility, devotion, 
                and a deep love for God and neighbor. She was known for her assiduous prayer 
                life, spending long hours in communion with God, and for her good works, 
                which included caring for the poor and needy in her community.
              </p>
              
              <p>
                After a holy life filled with good works and assiduous prayer, St. Celine 
                attained the rewards of heaven around the year 458. She was buried near Lyons, 
                probably at Cerny where she had lived. Unfortunately, her relics were destroyed 
                during the French Revolution, but her memory and example continue to inspire 
                Christians to this day.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Celine: Mother of a Saint and Model of Holiness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Mother of a Great Saint</h3>
              <p className="mb-6">
                St. Celine's greatest legacy is her son, St. Remigius, who would become the 
                Bishop of Rheims and play a crucial role in the conversion of King Clovis and 
                the Frankish people to Christianity. Her miraculous pregnancy and the prophecies 
                surrounding her son's birth demonstrate the divine plan at work in her life. 
                As the mother of such an important figure in Church history, St. Celine's 
                influence extends far beyond her own lifetime, touching the lives of countless 
                people through her son's ministry.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Prayer and Devotion</h3>
              <p className="mb-6">
                St. Celine's life of assiduous prayer serves as a powerful example for all 
                Christians. Her commitment to spending time in communion with God, even in 
                the midst of her daily responsibilities, demonstrates the importance of 
                maintaining a strong spiritual life. Her example reminds us that holiness 
                is not reserved for those in religious orders or positions of authority, 
                but is accessible to all who seek God with sincerity and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Miracles</h3>
              <p className="mb-6">
                The miraculous events associated with St. Celine - her miraculous pregnancy 
                at an advanced age and her restoration of sight to the hermit Montanus - 
                demonstrate God's special favor and the power of faith. These miracles not 
                only confirmed the divine nature of her son's mission but also served as 
                signs of God's presence and power in the early Church. Her life reminds us 
                that God continues to work miracles in the lives of those who trust in Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Christian Motherhood</h3>
              <p>
                St. Celine's role as a mother provides a powerful example of Christian 
                motherhood. Her holiness and devotion to prayer undoubtedly influenced 
                her son's spiritual development and prepared him for his future ministry. 
                Her example reminds all mothers of the importance of their spiritual 
                influence on their children and the power of prayer in raising children 
                who will serve God and others.
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
              <p className="text-gray-600">Memorial of St. Celine, Holy Woman</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The exact feast day of St. Celine is not known, but her memory is honored 
                as a holy woman who lived in prayer and good works. Her life serves as a 
                reminder of the importance of holiness in everyday life and the power of 
                prayer and good works in building up the Kingdom of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Celine lived during a crucial period in the history of Christianity 
                in France, when the faith was still establishing itself in Gaul. Her life 
                took place against the backdrop of the decline of the Roman Empire and the 
                rise of the Frankish kingdoms. Her son's role in converting King Clovis 
                would have a profound impact on the Christianization of Europe, making 
                her life and example all the more significant in the broader context of 
                Church history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                While there may not be specific devotional practices associated with St. Celine, 
                her example inspires us to cultivate a life of prayer and good works. Catholics 
                can pray for her intercession, especially for mothers, for those seeking to 
                grow in holiness through prayer, and for those who wish to serve God through 
                their daily lives. Her example reminds us that holiness is possible in every 
                state of life.
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
                  <li>• <strong>Mothers:</strong> Patroness of mothers and Christian motherhood</li>
                  <li>• <strong>Prayer:</strong> Helper for those seeking a deeper prayer life</li>
                  <li>• <strong>Miraculous Births:</strong> Patroness of those hoping for children</li>
                  <li>• <strong>France:</strong> One of the patron saints of France</li>
                  <li>• <strong>Holy Women:</strong> Patroness of women seeking holiness</li>
                  <li>• <strong>Good Works:</strong> Helper for those serving others</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Mothers:</strong> Helper for those who mother spiritually</li>
                  <li>• <strong>Devotion:</strong> Patroness of those seeking deeper devotion</li>
                  <li>• <strong>Miracles:</strong> Helper for those praying for miracles</li>
                  <li>• <strong>Christian Families:</strong> Patroness of holy families</li>
                  <li>• <strong>Prayer Warriors:</strong> Helper for those who pray for others</li>
                  <li>• <strong>Virtuous Living:</strong> Patroness of those seeking virtue</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Celine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Celine, holy mother of St. Remigius and model of prayer and virtue, 
                    who lived a life of assiduous prayer and good works, pray for us who call 
                    upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of devotion to God and service to others. 
                    Teach us to cultivate a deep prayer life and to perform good works with 
                    love and humility. Guide us in our journey toward holiness.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    live lives of prayer and service to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Mothers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Celine, holy mother who miraculously gave birth to St. Remigius, 
                    intercede for all mothers, especially those who are struggling or hoping 
                    for children.
                  </p>
                  <p>
                    Help them to trust in God's plan for their families and to raise their 
                    children in the faith. May they, like you, be examples of holiness and 
                    devotion to their children. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Prayer Life</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Celine, who was known for your assiduous prayer, intercede for 
                    all those who seek to deepen their relationship with God through prayer.
                  </p>
                  <p>
                    Help us to make prayer a priority in our lives and to find time for 
                    communion with God in the midst of our busy schedules. May we, like you, 
                    grow in holiness through our prayer and good works. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of St. Augustine and patron saint of mothers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of the Blessed Virgin Mary and patroness of mothers.
                </p>
              </div>
            </Link>

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