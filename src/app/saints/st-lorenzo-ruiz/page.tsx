import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Lorenzo Ruiz - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Lorenzo Ruiz, the first Filipino saint and martyr who died for his faith in Japan.',
  keywords: [
    'st lorenzo ruiz',
    'saint lorenzo ruiz',
    'st lorenzo ruiz biography',
    'st lorenzo ruiz feast day',
    'st lorenzo ruiz patron saint',
    'filipino saint',
    'september 28 feast day',
    'catholic saints',
    'philippines martyr'
  ],
  openGraph: {
    title: 'St. Lorenzo Ruiz - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lorenzo Ruiz, the first Filipino saint and martyr who died for his faith in Japan.',
    url: 'https://catholicbibleonline.com/saints/st-lorenzo-ruiz',
  },
  twitter: {
    title: 'St. Lorenzo Ruiz - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lorenzo Ruiz, the first Filipino saint and martyr who died for his faith in Japan.',
  }
}

export default function StLorenzoRuizPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🇵🇭</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Lorenzo Ruiz
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Filipino Saint, Martyr for the Faith in Japan
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Lorenzo Ruiz</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🇵🇭</div>
              <div className="text-sm text-gray-600">Philippines</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Lorenzo Ruiz</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Lorenzo Ruiz was born around the year 1600 in Binondo, Manila in the Philippines. He was the son of a Chinese father and a Filipino mother. Both were Christians and took care to raise Lorenzo as a Catholic. He served happily in his parish church as an altar boy and calligrapher.
              </p>
              
              <p className="mb-6">
                As a young man, Lorenzo joined the Dominican Confraternity of the Most Holy Rosary. Later, he married a woman named Rosario. The happy couple had three children, two sons and one daughter. By all accounts, the family was ordinary and happy.
              </p>
              
              <p className="mb-6">
                In 1636, Lorenzo was accused of murder. Allegedly he killed a Spaniard. However, to protect his safety at the time, he fled home and found refuge on board a ship with three Dominican priests and a leper. There are no details of this alleged crime other than a journal entry by two Dominican priests, that he joined their group to escape possible arrest. The ship departed the Philippines on June 10, 1636, bound for Okinawa.
              </p>
              
              <p className="mb-6">
                A shock awaited the holy passengers when they arrived in Japan. At the time of their arrival, the rulers of Japan, the Tokugawa Shogunate, were persecuting Christians. Prior to this persecution, the Christian population of Japan was thought to number 50,000 souls.
              </p>
              
              <p>
                Now Lorenzo was arrested by Japanese officials for the crime of being a Christian and ordered to recant his faith. When he refused he was imprisoned for two years. On September 27, 1637, Lorenzo and his companions were taken to Nagasaki to be tortured and killed if they would not recant their faith.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Lorenzo Ruiz: Martyr for the Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Ultimate Test of Faith</h3>
              <p className="mb-6">
                Lorenzo and his companions were tortured by water, which was forced into their mouths and down their throats and out their noses and ears. Despite the painful torture, the men refused to do so. Following this, Lorenzo was hanged upside down, with a rope around his ankles. This method of torture was known as tsurushi, or "gallows and pit." The torture forces a person to be hanged upside down with a gash cut in their forehead to prevent too much blood from gathering in the head. The gash also causes the victim to bleed to death over an extended period of time.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Unwavering Courage</h3>
              <p className="mb-6">
                Those who have survived the torture have said it is unbearable. One hand is left free so the victim can offer an agreed symbol that will represent their desire to recant their faith. Those few who recant are spared and allowed to live. But few people ever recanted, choosing instead to die for their faith. Lorenzo refused to recant. According to the record of his death, his last words were, "I am a Catholic and wholeheartedly do accept death for God. Had I a thousand lives, all these to Him I shall offer. Do with me as you please."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">First Filipino Saint</h3>
              <p className="mb-6">
                Lorenzo was beatified by Pope John Paul II on February 18, 1981. The beatification ceremony was held in the Philippines making it the first beatification ceremony ever held outside the Vatican. A miracle attributed to his intercession occurred in 1983. A two-year-old girl, Alegria Policarpio, suffering from hydrocephaly, a condition she had since birth, was miraculously cured. His canonization took place at the Vatican on October 18, 1987.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Philippines</h3>
              <p>
                Saint Lorenzo Ruiz is the patron saint of Filipino youth, the Philippines, people working overseas, and altar servers. His feast day is September 28. His story serves as a powerful reminder of the strength of faith and the courage to stand firm in one's beliefs, even in the face of extreme persecution and death. He is a source of pride and inspiration for the Filipino people and all who face persecution for their faith.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 28</div>
              <p className="text-gray-600">Feast of St. Lorenzo Ruiz, First Filipino Saint</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Lorenzo Ruiz is celebrated on September 28th, commemorating the day after his martyrdom in 1637. St. Lorenzo Ruiz was beatified by Pope John Paul II on February 18, 1981, and canonized on October 18, 1987. His canonization was a historic moment for the Philippines, as he became the first Filipino saint in the Catholic Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Lorenzo Ruiz's remarkable courage and his role as the first Filipino saint. His feast day serves as a reminder of the importance of standing firm in one's faith, even in the face of persecution. Many Filipino communities around the world celebrate this day with special Masses, processions, and cultural events that highlight the rich heritage of Filipino Catholicism.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Lorenzo Ruiz for his intercession in matters of courage, faith, and perseverance. Many people also pray for the Philippines, Filipino communities around the world, and those who face persecution for their faith. His example encourages us to remain steadfast in our beliefs and to trust in God's providence, even in the most difficult circumstances.
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
                  <li>• <strong>Filipino Youth:</strong> Patron of young Filipinos</li>
                  <li>• <strong>Philippines:</strong> Patron of his native country</li>
                  <li>• <strong>Overseas Workers:</strong> Helper for those working abroad</li>
                  <li>• <strong>Altar Servers:</strong> Patron of those who serve at Mass</li>
                  <li>• <strong>Martyrs:</strong> Model of courage in persecution</li>
                  <li>• <strong>Filipino Communities:</strong> Patron of Filipino diaspora</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> Helper in facing persecution</li>
                  <li>• <strong>Faith:</strong> Patron of steadfast belief</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult times</li>
                  <li>• <strong>Cultural Identity:</strong> Patron of preserving heritage</li>
                  <li>• <strong>Family Separation:</strong> Helper for separated families</li>
                  <li>• <strong>Miracles:</strong> Patron of miraculous interventions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Lorenzo Ruiz</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Lorenzo Ruiz, first Filipino saint and martyr, who with unwavering courage 
                    chose death rather than deny your faith in Christ, help us to remain steadfast in our beliefs 
                    even in the face of persecution and difficulty. Through your intercession, may we have the 
                    strength to stand firm in our faith and to trust in God's providence. Help us to be witnesses 
                    of Christ's love in our daily lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Lorenzo Ruiz, pray for us!"
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
            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First Christian martyr, known for his powerful preaching and forgiveness.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Powerful protector and defender of the faith against evil.
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
                  The foster father of Jesus and husband of Mary, patron of fathers.
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