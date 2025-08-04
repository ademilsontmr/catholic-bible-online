import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Helena - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Helena, mother of Emperor Constantine and discoverer of the True Cross.',
  keywords: [
    'st helena',
    'saint helena',
    'st helena biography',
    'st helena feast day',
    'st helena patron saint',
    'true cross',
    'constantine mother',
    'august 18 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Helena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Helena, mother of Emperor Constantine and discoverer of the True Cross.',
    url: 'https://catholicbibleonline.com/saints/st-helena',
  },
  twitter: {
    title: 'St. Helena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Helena, mother of Emperor Constantine and discoverer of the True Cross.',
  }
}

export default function StHelenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏛️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Helena
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother of Emperor Constantine, Discoverer of the True Cross
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Helena</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏛️</div>
              <div className="text-sm text-gray-600">Discovery</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Helena</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Helena was the mother of Emperor Constantine the Great and an Empress of the Roman Empire. Very little is known about Helena's early life, but it is believed she is from Drepanum (later known as Helenopolis) in Asia Minor and born into a poor family and lower class in the Roman culture of the day. St. Ambrose described Helena as a "good stable-maid."
              </p>
              
              <p className="mb-6">
                Despite her background, Helena married Constantius Chlorus. With him she birthed her only son, Constantine, around the year 274. Nearly two decades later in 292, Constantius, now co-Regent of the West, got swept up in his rising stature and divorced Helena for Theodora, the step-daughter of Emperor Maximinianus Herculius. It is believed he did this to advance his own reputation and advance his standing in the Roman society.
              </p>
              
              <p className="mb-6">
                Constantine was forever loyal to his dear mother, whom he loved very much. As he grew and became a member of the inner circle, he never left Helena's side. Following the death of Constantius in 308, Constantine became Emperor and summoned his mother back into inner circle and the imperial court. Helena received the title of Augusta.
              </p>
              
              <p className="mb-6">
                Constantine ordered all to honor his mother. He even had coins minted, bearing her image. Through her son's influence, Helena began to embrace Christianity. With her title of Augusta Imperatrix, Helena was given free reign over the imperial treasury. She was tasked with locating relics of Christian tradition.
              </p>
              
              <p>
                Between the years 326-328, Helena took a trip to the Holy Places in the Middle East. During her journey, Helena had many churches constructed, including the one at the site of Jesus Christ's birth – the Church of the Nativity, Bethlehem and another at the site of his ascension - Church of Eleona on the Mount of Olives.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Helena: Discoverer of the True Cross</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Discovery of the True Cross</h3>
              <p className="mb-6">
                During this time Jerusalem was still being rebuilt after Titus' destruction. Around the year 130, Emperor Hadrian had a temple built over the site of Jesus' death. This temple was believed to be dedicated to Venus. Helena had this temple destroyed and chose a site in this location to be excavated. This led to the discovery of three crosses.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Identification</h3>
              <p className="mb-6">
                Tradition says Helena brought a woman near death to the crosses. There she had the woman place a hand on all three crosses. Nothing happened when she touched the first two crosses, but when she placed her hand on the third cross she suddenly recovered. Helena declared the third cross to be the True Cross. At this site, Constantine ordered the Church of the Holy Sepulchre to be built.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Relics and Churches</h3>
              <p className="mb-6">
                Theodoret of Cyrus, an influential theologian, wrote that during her search, Helena also discovered the nails of the crucifixion. She had one of the nails placed in Constantine's helmet and one in the bridle of his horse to aid him with their miraculous powers. Churches were built at these sites, as well.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Charitable Works</h3>
              <p>
                St. Helena was renowned for helping not only individuals, but entire communities through her works of charity. She often sought out to help the poor and destitute. She would visit churches and leave them with rich donations. St. Helena was a very devout servant of God, so much so that one would easily believe her to have been a follower of Jesus Christ from birth. Through her influence and work, Christianity continued to spread throughout the known world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 18</div>
              <p className="text-gray-600">Feast of St. Helena, Empress and Discoverer of the True Cross</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Helena is celebrated on August 18th. This date commemorates her death around the year 330, when she died with her dearly devoted son Constantine by her side. She was then buried in the Mausoleum of Helena outside of Rome. Her sarcophagus can be seen in the Pio-Clementine Vatican Museum.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Helena's remarkable contributions to Christianity, particularly her discovery of the True Cross and her role in building churches throughout the Holy Land. Her feast day serves as a reminder of the importance of preserving and venerating the sacred relics of our faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Helena for her intercession in discovering truth, preserving sacred traditions, and for the grace to be charitable to others. Many people also visit churches dedicated to the Holy Cross on this day.
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
                  <li>• <strong>New Discoveries:</strong> Patron of archaeological discoveries</li>
                  <li>• <strong>Archaeologists:</strong> Patron of those who excavate ancient sites</li>
                  <li>• <strong>Converts:</strong> Patron of those who convert to Christianity</li>
                  <li>• <strong>Empresses and Queens:</strong> Patron of female rulers</li>
                  <li>• <strong>Mothers:</strong> Patron of mothers and motherhood</li>
                  <li>• <strong>Pilgrims:</strong> Patron of those who journey to holy places</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Finding Lost Items:</strong> Helper in discovering what is lost</li>
                  <li>• <strong>Church Building:</strong> Patron of church construction</li>
                  <li>• <strong>Relic Preservation:</strong> Protector of sacred artifacts</li>
                  <li>• <strong>Charitable Works:</strong> Patron of acts of charity</li>
                  <li>• <strong>Family Reconciliation:</strong> Helper in family matters</li>
                  <li>• <strong>Truth Discovery:</strong> Patron of finding truth</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Helena</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Helena, who by your faith and devotion discovered the True Cross of our Lord Jesus Christ, 
                    help us to always seek and find the truth in our lives. Through your intercession, may we have the courage 
                    to follow Christ even when the path is difficult. Help us to be faithful witnesses of the Gospel and to 
                    preserve the sacred traditions of our faith. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Helena, pray for us!"
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
            <Link href="/saints/st-constantine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Constantine
                </h3>
                <p className="text-gray-700 text-sm">
                  Her son, the first Christian Emperor who legalized Christianity in the Roman Empire.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cyril" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cyril of Jerusalem
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Jerusalem who benefited from St. Helena's church building in the Holy Land.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-macarius" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Macarius of Jerusalem
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop who assisted St. Helena in the discovery of the True Cross and holy relics.
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