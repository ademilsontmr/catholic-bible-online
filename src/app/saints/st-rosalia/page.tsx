import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rosalia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Rosalia, patron saint of Palermo and Sicily, known for her life of solitude and prayer.',
  keywords: [
    'st rosalia',
    'saint rosalia',
    'st rosalia biography',
    'st rosalia feast day',
    'st rosalia patron saint',
    'catholic saints',
    'september 4 feast day'
  ],
  openGraph: {
    title: 'St. Rosalia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rosalia, patron saint of Palermo and Sicily.',
    url: 'https://catholicbibleonline.com/saints/st-rosalia',
  },
  twitter: {
    title: 'St. Rosalia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rosalia, patron saint of Palermo and Sicily.',
  }
}

export default function StRosaliaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rosalia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Palermo and Sicily, Hermit and Model of Solitude
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Rosalia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Solitude</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Rosalia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Rosalia, daughter of Sinibald, Lord of Roses and Quisquina, was a descendant of the great Charlemagne. 
                She was born at Palermo in Sicily. In her youth, her heart turned from earthly vanities to God.
              </p>
              
              <p className="mb-6">
                She left her home and took up her abode in a cave, on the walls of which she wrote these words: 
                "I, Rosalia, daughter of Sinibald, Lord of Roses and Quisquina, have taken the resolution to live in this cave 
                for the love of my Lord, Jesus Christ." She remained there entirely hidden from the world.
              </p>
              
              <p className="mb-6">
                She practiced great mortifications and lived in constant communion with God. Afterward she transferred her abode 
                to Mount Pellegrino, about three miles from Palermo, in order to triumph entirely over the instincts of flesh 
                and blood, in sight of her paternal home.
              </p>
              
              <p className="mb-6">
                She is said to have appeared after death and to have revealed that she spent several years in a little 
                excavation near the grotto. She died alone, in 1160, ending her strange and wonderful life unknown to the world.
              </p>
              
              <p>
                Her body was discovered several centuries later, in 1625, during the pontificate of Pope Urban VIII, 
                leading to her widespread veneration throughout Sicily and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Rosalia: Patron of Palermo and Sicily</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Rosalia's legacy is one of complete dedication to God through solitude and prayer. She exemplifies 
                the virtues of humility, mortification, and unwavering faith in God's call, even when it means leaving 
                behind worldly comforts and recognition.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Solitude</h3>
              <p className="mb-6">
                As a hermit, St. Rosalia provides a perfect model of contemplative life. She shows us that true holiness 
                can be found in the most hidden and humble of lives. Her example teaches us the value of silence, prayer, 
                and complete surrender to God's will.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector and Intercessor</h3>
              <p className="mb-6">
                As patron saint of Palermo and Sicily, St. Rosalia continues to watch over and protect the people of 
                these regions. She is particularly invoked against plague and other diseases, demonstrating her ongoing 
                care for the physical and spiritual well-being of those who turn to her.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Heritage</h3>
              <p>
                St. Rosalia's influence extends beyond the spiritual realm into the cultural life of Sicily. The annual 
                "Festino di Santa Rosalia" festival in Palermo is one of the most important religious and cultural events 
                in Sicily, drawing thousands of pilgrims and visitors to honor her memory.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 4</div>
              <p className="text-gray-600">Feast of St. Rosalia, Virgin and Hermit</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Rosalia is celebrated on September 4th, commemorating her life of solitude, prayer, 
                and complete dedication to God. This date is particularly significant in Palermo and throughout Sicily, 
                where she is deeply venerated as the patron saint.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Sicily, especially in Palermo, St. Rosalia's feast day is celebrated with the famous "Festino di Santa Rosalia" 
                festival. This includes special Masses, processions, fireworks, and cultural events that honor her memory 
                and seek her intercession for the protection of the city and its people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for St. Rosalia's intercession, especially for protection 
                against diseases and for the people of Sicily. Many people also make pilgrimages to her shrine on Mount Pellegrino.
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
                  <li>• <strong>Palermo:</strong> Patron saint of the capital of Sicily</li>
                  <li>• <strong>Sicily:</strong> Protector of the entire island</li>
                  <li>• <strong>Hermits and Solitaries:</strong> Model for contemplative life</li>
                  <li>• <strong>Against Plague:</strong> Protector from epidemics</li>
                  <li>• <strong>Disease Prevention:</strong> Intercessor for health</li>
                  <li>• <strong>Contemplatives:</strong> Patron of those seeking solitude</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection from Illness:</strong> Helper in times of sickness</li>
                  <li>• <strong>Finding Solitude:</strong> Patron of those seeking quiet</li>
                  <li>• <strong>Spiritual Growth:</strong> Guide for contemplative prayer</li>
                  <li>• <strong>Family Protection:</strong> Guardian of Sicilian families</li>
                  <li>• <strong>Travel Safety:</strong> Protector of travelers to Sicily</li>
                  <li>• <strong>Cultural Heritage:</strong> Patron of Sicilian traditions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Rosalia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Rosalia, who left the world and its vanities to live in solitude and prayer, 
                    intercede for us that we may have the courage to follow Christ with complete dedication.
                  </p>
                  <p className="mb-4">
                    Help us to find strength in prayer and to seek God's will in all things. Protect us from the trials 
                    of this world and guide us on the path to eternal life.
                  </p>
                  <p>
                    St. Rosalia, patron of Palermo and Sicily, pray for us and for all who seek your intercession. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Rosalia, pray for us!"
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
            <Link href="/saints/st-albertus-magnus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Albertus Magnus
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and teacher of St. Thomas Aquinas, patron of scientists and philosophers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism and founder of the Benedictine Order, patron of Europe.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and mystic who influenced popes, patron of Italy and nurses.
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