import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rose Philippine Duchesne - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Rose Philippine Duchesne, missionary to Native Americans and foundress of Sacred Heart schools.',
  keywords: [
    'st rose philippine duchesne',
    'saint rose duchesne',
    'sacred heart society',
    'st rose philippine duchesne biography',
    'st rose philippine duchesne feast day',
    'st rose philippine duchesne patron saint',
    'native american missionary',
    'missouri missionary',
    'catholic saints',
    'november 18 feast day'
  ],
  openGraph: {
    title: 'St. Rose Philippine Duchesne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rose Philippine Duchesne, missionary to Native Americans and foundress of Sacred Heart schools.',
    url: 'https://catholicbibleonline.com/saints/st-rose-philippine-duchesne',
  },
  twitter: {
    title: 'St. Rose Philippine Duchesne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rose Philippine Duchesne, missionary to Native Americans and foundress of Sacred Heart schools.',
  }
}

export default function StRosePhilippineDuchesnePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rose Philippine Duchesne
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Missionary to Native Americans, Foundress of Sacred Heart Schools in America
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Rose Philippine Duchesne</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Missionary</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Rose Philippine Duchesne</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born in Grenoble, France, in 1769, Rose Philippine Duchesne grew up during a time of great social and religious upheaval. 
                From an early age, she felt called to religious life and missionary work, particularly to serve the Native American people.
              </p>
              
              <p className="mb-6">
                Rose joined the Society of the Sacred Heart, a religious order dedicated to education and the service of God. 
                Her dream was to become a missionary to the Native Americans, a calling that would require great courage and perseverance.
              </p>
              
              <p className="mb-6">
                In 1818, when she was forty-nine years old, Rose was finally sent to the United States. This was a significant age 
                to begin such a challenging mission, but her determination and faith were unwavering. She arrived in the frontier 
                territory of Missouri, where she would spend the rest of her life serving God and the people.
              </p>
              
              <p className="mb-6">
                Rose founded a boarding school for daughters of pioneers near St. Louis, providing education and formation for 
                young women in the frontier. She also opened the first free school west of the Missouri River, making education 
                accessible to those who could not afford it.
              </p>
              
              <p className="mb-6">
                At the age of seventy-one, Rose finally realized her lifelong dream when she began a school for Native Americans. 
                The Native Americans soon came to call her "the woman who is always praying" because of her deep prayer life 
                and constant communion with God.
              </p>
              
              <p>
                Her biographers have stressed her courage in frontier conditions, her singlemindedness in pursuing her dream 
                of serving Native Americans, and her self-acceptance. This holy servant of God was beatified by Pope Pius XII 
                in 1940 and canonized by Pope John Paul II in 1988.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Rose Philippine Duchesne: Pioneer Missionary and Educator</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Pioneer of Catholic Education in America</h3>
              <p className="mb-6">
                St. Rose Philippine Duchesne's legacy as an educator is profound. She established the first Sacred Heart school 
                in America and opened the first free school west of the Missouri River. Her commitment to education, especially 
                for those who could not afford it, set a standard for Catholic education in the United States.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Missionary to Native Americans</h3>
              <p className="mb-6">
                Rose's lifelong dream was to serve the Native American people. At the age of 71, she finally began a school 
                for Native Americans, earning the nickname "the woman who is always praying" from the people she served. 
                Her dedication to this mission, even in her advanced years, shows her unwavering commitment to God's call.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Perseverance</h3>
              <p className="mb-6">
                Rose's courage in frontier conditions was remarkable. She faced the challenges of the American frontier with 
                determination and faith, never giving up on her mission despite the difficulties. Her singlemindedness in 
                pursuing her dream of serving Native Americans is an inspiration to all who face obstacles in their calling.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Prayer and Self-Acceptance</h3>
              <p>
                Rose's deep prayer life was evident to all who knew her. The Native Americans recognized her as "the woman 
                who is always praying," a testament to her constant communion with God. Her biographers also emphasize her 
                self-acceptance, showing that holiness comes from accepting ourselves as God's beloved children.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 18</div>
              <p className="text-gray-600">Feast of St. Rose Philippine Duchesne</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Rose Philippine Duchesne is celebrated on November 18th. This feast day honors her as a pioneer missionary 
                and educator who brought Catholic education to the American frontier and served the Native American people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for missionaries, for Native American communities, for Catholic educators, 
                and for those who feel called to serve in challenging circumstances. It's also a day to reflect on the power 
                of prayer and perseverance in following God's call.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for missionaries around the world, for Native American communities, 
                for Catholic education, and to ask for St. Rose's intercession in following God's call with courage and perseverance.
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
                  <li>• <strong>Missionaries:</strong> Patron of those serving in foreign lands</li>
                  <li>• <strong>Native Americans:</strong> Patron of Native American communities</li>
                  <li>• <strong>Catholic Educators:</strong> Patron of Catholic teachers and schools</li>
                  <li>• <strong>Frontier Life:</strong> Patron of those living in challenging conditions</li>
                  <li>• <strong>Sacred Heart Society:</strong> Patron of Sacred Heart religious</li>
                  <li>• <strong>Perseverance:</strong> Patron of those pursuing difficult callings</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Late Vocations:</strong> Helper for those called later in life</li>
                  <li>• <strong>Frontier Ministry:</strong> Patron of ministry in difficult places</li>
                  <li>• <strong>Prayer Life:</strong> Helper for deepening prayer</li>
                  <li>• <strong>Self-Acceptance:</strong> Patron of accepting God's plan</li>
                  <li>• <strong>Free Education:</strong> Helper for educational ministries</li>
                  <li>• <strong>Cultural Ministry:</strong> Patron of cross-cultural service</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Rose Philippine Duchesne</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Rose Philippine Duchesne, you who were called 'the woman who is always praying,' help me to deepen 
                    my prayer life and to remain in constant communion with God.
                  </p>
                  <p>
                    You who served the Native American people with such love and dedication, help me to serve others with 
                    the same courage and perseverance. Intercede for me that I may follow God's call with unwavering faith, 
                    even when it seems difficult or comes later in life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Rose Philippine Duchesne, patron of missionaries, pray for all those who serve God in foreign lands 
                    and challenging circumstances.
                  </p>
                  <p>
                    Help them to have the same courage and perseverance you showed in the American frontier. 
                    May they always remember that they are 'the ones who are always praying' and may their service 
                    bring many souls closer to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Rose Philippine Duchesne, pray for us!"
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
            <Link href="/saints/st-margaret-mary-alacoque" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Visionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret Mary Alacoque
                </h3>
                <p className="text-gray-700 text-sm">
                  Sacred Heart visionary, inspired the Society of the Sacred Heart that St. Rose joined.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-kateri-tekakwitha" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Native Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Kateri Tekakwitha
                </h3>
                <p className="text-gray-700 text-sm">
                  First Native American saint, model of purity and devotion to the Sacred Heart.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Great missionary to Asia, patron of missionaries and foreign missions.
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