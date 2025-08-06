import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Vitus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Vitus, patron saint of epileptics, dancers, actors, and protector against storms.',
  keywords: [
    'st vitus',
    'saint vitus',
    'st vitus dance',
    'st vitus biography',
    'st vitus feast day',
    'st vitus patron saint',
    'epilepsy saint',
    'dancers saint',
    'actors saint',
    'catholic saints',
    'june 15 feast day'
  ],
  openGraph: {
    title: 'St. Vitus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vitus, patron saint of epileptics, dancers, actors, and protector against storms.',
    url: 'https://catholicbibleonline.com/saints/st-vitus',
  },
  twitter: {
    title: 'St. Vitus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vitus, patron saint of epileptics, dancers, actors, and protector against storms.',
  }
}

export default function StVitusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Vitus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Epileptics, Dancers, Actors, and Protector Against Storms
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Vitus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Vitus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Unreliable legend has Vitus, the only son of a senator in Sicily, become a Christian when he was twelve. 
                When his conversions and miracles became widely known to the administrator of Sicily, Valerian, 
                he had Vitus brought before him, to shake his faith.
              </p>
              
              <p className="mb-6">
                He was unsuccessful, but Vitus with his tutor, Modestus, and servant, Crescentia, fled to Lucania and then to Rome, 
                where he freed Emperor Diocletian's son of an evil spirit. When Vitus would not sacrifice to the gods, 
                his cure was attributed to sorcery.
              </p>
              
              <p className="mb-6">
                He, Modestus, and Crescentia were subjected to various tortures from which they emerged unscathed, 
                and were freed when during a storm, temples were destroyed and an angel guided them back to Lucania, 
                where they eventually died.
              </p>
              
              <p>
                So much for the legend. What is fact is that their cult goes back centuries and that they were Christians 
                who were martyred in Lucania. A great devotion to Vitus developed in Germany when his relics were translated to Saxony in 836.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Vitus: One of the Fourteen Holy Helpers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Vitus is one of the Fourteen Holy Helpers, a group of saints venerated together in the Catholic Church 
                for their powerful intercession. His cult developed significantly in Germany when his relics were translated to Saxony in 836, 
                spreading his devotion throughout Europe.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Youthful Faith</h3>
              <p className="mb-6">
                St. Vitus represents the power of youthful faith and the courage to stand firm in one's beliefs even in the face of persecution. 
                His conversion at the age of twelve and his subsequent miracles demonstrate that age is no barrier to holiness 
                and that God can work through anyone, regardless of their youth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector and Healer</h3>
              <p className="mb-6">
                As patron of epileptics and those afflicted with St. Vitus' Dance (named after him), St. Vitus continues to be invoked 
                for healing and protection. His association with dancers and actors also makes him a patron of the performing arts, 
                reminding us that all forms of human expression can be sanctified.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Guardian Against Storms</h3>
              <p>
                St. Vitus is also known as a protector against storms, a patronage that likely stems from the legend of the storm 
                that destroyed pagan temples and led to his liberation. This aspect of his patronage reminds us of God's power 
                over nature and His protection of the faithful.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 15</div>
              <p className="text-gray-600">Feast of St. Vitus, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Vitus is celebrated on June 15th, a date that falls during the summer season. This feast day is particularly 
                significant in Germany and other European countries where devotion to the Fourteen Holy Helpers remains strong.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those suffering from epilepsy and neurological disorders, as well as for 
                dancers, actors, and those in the performing arts. It's also a day to pray for protection against storms 
                and natural disasters.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for healing, for the sanctification of the arts, and to ask 
                for St. Vitus's intercession in times of physical or spiritual storms.
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
                  <li>• <strong>Epileptics:</strong> Patron of those suffering from epilepsy</li>
                  <li>• <strong>St. Vitus' Dance:</strong> Patron of those with chorea</li>
                  <li>• <strong>Dancers:</strong> Patron of dance and dancers</li>
                  <li>• <strong>Actors:</strong> Patron of acting and performers</li>
                  <li>• <strong>Performing Arts:</strong> Patron of all forms of artistic expression</li>
                  <li>• <strong>Youth:</strong> Patron of young people and their faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection Against Storms:</strong> Guardian against natural disasters</li>
                  <li>• <strong>Neurological Disorders:</strong> Helper for brain and nervous system health</li>
                  <li>• <strong>Artistic Inspiration:</strong> Patron of creative endeavors</li>
                  <li>• <strong>Youth Ministry:</strong> Helper for young people's faith formation</li>
                  <li>• <strong>Healing Miracles:</strong> Patron of miraculous cures</li>
                  <li>• <strong>Fourteen Holy Helpers:</strong> Member of this powerful group of intercessors</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Vitus</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Vitus, you who were converted to Christ at a young age and who showed such courage in the face of persecution, 
                    help us to remain faithful to our beliefs even when they are challenged. Intercede for those suffering from epilepsy 
                    and neurological disorders, and bring them healing and comfort.
                  </p>
                  <p>
                    As patron of dancers and actors, help us to use our talents for God's glory and to sanctify all forms of human expression. 
                    Protect us from storms both physical and spiritual, and guide us always in the path of righteousness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Vitus, pray for us!"
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
            <Link href="/saints/st-catherine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Another of the Fourteen Holy Helpers, patron of students and philosophers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-barbara" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Barbara
                </h3>
                <p className="text-gray-700 text-sm">
                  One of the Fourteen Holy Helpers, patron of architects and protection against lightning.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cyprian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cyprian
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and bishop, known for his writings and defense of the faith.
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