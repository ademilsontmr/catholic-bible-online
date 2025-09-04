import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Barbara - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Barbara, early Christian martyr and patron saint of armourers, artillerymen, architects, and miners.',
  keywords: [
    'st barbara',
    'saint barbara',
    'st barbara biography',
    'st barbara feast day',
    'st barbara patron saint',
    'barbara martyr',
    'december 4 feast day',
    'fourteen holy helpers'
  ],
  openGraph: {
    title: 'St. Barbara - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Barbara, early Christian martyr and patron saint.',
    url: 'https://catholicbibleonline.com/saints/st-barbara',
  },
  twitter: {
    title: 'St. Barbara - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Barbara, early Christian martyr and patron saint.',
  }
}

export default function StBarbaraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏰</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Barbara
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyr, Patron of Artillerymen and Architects, One of the Fourteen Holy Helpers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Barbara</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏰</div>
              <div className="text-sm text-gray-600">Tower & Faith</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Barbara</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Barbara, also known as the Great Martyr Barbara, was an early Christian Greek martyr born mid-third 
                century in Heliopolis, Phoenicia. She was the daughter of a rich pagan named Dioscorus, who dedicated his 
                life to his only daughter after the death of Barbara's mother.
              </p>
              
              <p className="mb-6">
                Barbara was known for being extremely beautiful. As a way of "protecting" her, Dioscorus shielded her from 
                the world by locking her high up within a tower. He allowed only her pagan teachers to see her, keeping her 
                isolated from the outside world.
              </p>
              
              <p className="mb-6">
                Barbara spent her days gazing upon the hills and admiring all of God's creations. She often pondered about 
                the "First Cause and Creator of so harmonious and splendid a world." She soon realized the idols her father 
                and teachers worshiped were not of God's creation.
              </p>
              
              <p className="mb-6">
                Barbara secretly became a Christian and dedicated her life to knowing the true God and making Him known to 
                others. She offered herself completely to the Lord, choosing a life of consecrated virginity. As Barbara grew 
                older, her father began presenting men to her for marriage, but she refused them all and warned her father 
                that his persistence could forever damage their relationship.
              </p>
              
              <p>
                Dioscorus allowed Barbara to leave her tower, hoping some freedom would change her attitude. Barbara used 
                this opportunity to meet other Christians, who taught her about the Lord Jesus, the Holy Trinity and the Church. 
                A priest from Alexandria, disguised as a merchant, baptized Barbara into Christ and His Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Barbara: Martyr for Christ</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Miraculous Tower</h3>
              <p className="mb-6">
                While Barbara was out exploring the world, her father had a private bath-house built for her. The original 
                architectural plans were for two windows, but while her father was away, Barbara advised the workers to make 
                a third window, creating a Trinity of light. Barbara's bathhouse became a place full of healing power and 
                many miracles occurred there.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Great Persecution</h3>
              <p className="mb-6">
                After Dioscorus returned, Barbara informed him she had become a Christian and would no longer worship his idols. 
                Full of rage, her father grabbed his sword and went to strike her. Before he could do so, Barbara ran off. 
                Her father chased after her, but was abruptly stopped when a hill blocked his way. The hill opened and hid 
                Barbara within a crevice, protecting her from her father's wrath.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyrdom and Divine Justice</h3>
              <p className="mb-6">
                Barbara, along with another virtuous Christian woman named Juliana, were tortured and led naked throughout 
                the city. After Barbara prayed, an angel came and covered the pair with a robe, and torches used to burn 
                Barbara went out when they came near her. Finally, Barbara was condemned to death by beheading by her father 
                on December 4th. As a punishment for their actions, Dioscorus and Martianus were both killed after being 
                struck by lightning.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Veneration and Relics</h3>
              <p>
                In the 6th century, relics of St. Barbara were taken to Constantinople. Six hundred years later, they were 
                taken to Kiev by the daughter of the Byzantine Emperor Alexius Comnenos. Today, they rest at the St. Vladimir 
                cathedral in Kiev. St. Barbara is one of the Fourteen Holy Helpers, venerated because their intercession is 
                believed to be particularly effective against diseases.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 4</div>
              <p className="text-gray-600">Feast of St. Barbara</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Barbara is celebrated on December 4th, commemorating her martyrdom for the Christian faith. 
                This date falls during the Advent season, providing an opportunity to reflect on the courage and steadfastness 
                required to remain faithful to Christ, even in the face of persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Military Honors</h3>
              <p className="mb-6">
                The United States Army Field Artillery Association and the United States Army Air Defense Artillery Association 
                hold the Order of Saint Barbara as an honorary society within the military. This recognition honors her as the 
                patron saint of artillerymen and those who work with explosives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Devotions</h3>
              <p>
                On her feast day, many people pray for the intercession of St. Barbara, especially for protection against 
                lightning, fire, and explosions. She is often invoked by those who work in dangerous professions, and her 
                intercession is sought for safety and protection.
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
                  <li>• <strong>Armourers:</strong> Patron of those who make weapons and armor</li>
                  <li>• <strong>Artillerymen:</strong> Patron of military artillery personnel</li>
                  <li>• <strong>Architects:</strong> Patron of architects and builders</li>
                  <li>• <strong>Mathematicians:</strong> Patron of mathematicians and scientists</li>
                  <li>• <strong>Miners:</strong> Patron of miners and those who work underground</li>
                  <li>• <strong>Italian Navy:</strong> Patron of the Italian naval forces</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection from Lightning:</strong> Patron against lightning strikes</li>
                  <li>• <strong>Protection from Fire:</strong> Patron against fires and explosions</li>
                  <li>• <strong>Dangerous Work:</strong> Patron of those in hazardous professions</li>
                  <li>• <strong>Sudden Death:</strong> Patron against sudden and violent death</li>
                  <li>• <strong>Military Safety:</strong> Patron of military personnel</li>
                  <li>• <strong>Construction Safety:</strong> Patron of construction workers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Barbara</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Barbara, patron of artillerymen and all who work with explosives, you who remained faithful to 
                    Christ even in the face of persecution and death, help us to follow your example of courage and steadfast faith.
                  </p>
                  <p className="mb-4">
                    Protect all those who work in dangerous professions, especially those who work with fire, explosives, 
                    and in hazardous conditions. Intercede for us that we may be protected from lightning, fire, and sudden death.
                  </p>
                  <p>
                    St. Barbara, pray for us that we may have the courage to remain faithful to Christ in all circumstances, 
                    and that we may be protected from all harm and danger. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Barbara, protect us from lightning and fire. Pray for us!"
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
            <Link href="/saints/st-catherine-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and one of the Fourteen Holy Helpers, patron of students and philosophers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and one of the Fourteen Holy Helpers, patron of pregnant women and childbirth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-christopher" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Christopher
                </h3>
                <p className="text-gray-700 text-sm">
                  Martyr and one of the Fourteen Holy Helpers, patron of travelers and motorists.
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