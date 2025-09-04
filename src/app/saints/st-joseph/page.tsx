import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joseph - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Joseph, the foster father of Jesus and patron saint of fathers, workers, and the Universal Church.',
  keywords: [
    'st joseph',
    'saint joseph',
    'st joseph biography',
    'st joseph feast day',
    'st joseph patron saint',
    'catholic saints',
    'march 19 feast day'
  ],
  openGraph: {
    title: 'St. Joseph - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joseph, the foster father of Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-joseph',
  },
  twitter: {
    title: 'St. Joseph - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Joseph, the foster father of Jesus.',
  }
}

export default function StJosephPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👨‍👩‍👧‍👦</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joseph
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Foster Father of Jesus, Husband of Mary, Patron of the Universal Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Joseph</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 19</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧‍👦</div>
              <div className="text-sm text-gray-600">Family</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Joseph</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Joseph was a carpenter from Nazareth, a descendant of King David, and the husband of the Blessed Virgin Mary. 
                Though not mentioned extensively in the Gospels, his role in salvation history is profound and essential.
              </p>
              
              <p className="mb-6">
                According to the Gospel of Matthew, Joseph was a righteous man who, when he discovered Mary was pregnant, 
                planned to divorce her quietly to avoid exposing her to shame. However, an angel appeared to him in a dream, 
                revealing that the child was conceived by the Holy Spirit and instructing him to take Mary as his wife.
              </p>
              
              <p className="mb-6">
                Joseph obediently accepted his role as the foster father of Jesus, protecting and providing for the Holy Family. 
                He led them to Bethlehem for the census, where Jesus was born, and later fled with them to Egypt to escape 
                Herod's persecution of the infants.
              </p>
              
              <p className="mb-6">
                After returning to Nazareth, Joseph worked as a carpenter, teaching Jesus his trade. The last mention of Joseph 
                in the Gospels is when Jesus was twelve years old and was found in the Temple discussing with the teachers. 
                It is believed that Joseph died before Jesus began his public ministry.
              </p>
              
              <p>
                St. Joseph is often called the "Silent Saint" because no words of his are recorded in Scripture, 
                yet his actions speak volumes about his faith, obedience, and love for God and his family.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Joseph: Patron of the Universal Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Joseph's legacy is one of quiet strength, unwavering faith, and selfless service. He exemplifies 
                the virtues of humility, obedience, and trust in God's plan, even when it seems impossible or difficult.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Fatherhood</h3>
              <p className="mb-6">
                As the foster father of Jesus, St. Joseph provides a perfect model of fatherhood. He shows us that 
                true fatherhood involves protection, provision, guidance, and love. His example teaches fathers to 
                lead their families with gentleness, strength, and faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Worker and Provider</h3>
              <p className="mb-6">
                As a carpenter, St. Joseph sanctified ordinary work and showed that all honest labor can be a means 
                of serving God and providing for one's family. He teaches us the dignity of work and the importance 
                of doing our best in whatever we do.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Guardian and Protector</h3>
              <p>
                St. Joseph's role as protector of the Holy Family extends to the entire Church. He continues to 
                watch over and protect all who turn to him in prayer, especially families, workers, and those 
                facing difficult decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 19</div>
              <p className="text-gray-600">Solemnity of St. Joseph, Husband of the Blessed Virgin Mary</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Joseph is celebrated on March 19th as a Solemnity, the highest rank of feast days 
                in the Catholic Church. This date was chosen because it falls during Lent, providing a joyful 
                interlude in the penitential season.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In many countries, especially Italy and Spain, St. Joseph's Day is celebrated with special foods, 
                processions, and family gatherings. It's also traditional to wear red clothing and eat special 
                pastries called "zeppole" in some regions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Litany of St. Joseph, the Prayer to St. Joseph, 
                or to make a novena to St. Joseph. Many people also consecrate themselves to St. Joseph on this day.
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
                  <li>• <strong>Universal Church:</strong> Protector of the entire Catholic Church</li>
                  <li>• <strong>Fathers and Families:</strong> Patron of fathers and family life</li>
                  <li>• <strong>Workers and Laborers:</strong> Patron of all who work</li>
                  <li>• <strong>Carpenters and Craftsmen:</strong> Patron of skilled workers</li>
                  <li>• <strong>Pregnant Women:</strong> Protector of expectant mothers</li>
                  <li>• <strong>Travelers and Pilgrims:</strong> Guardian of those on journeys</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Happy Death:</strong> Patron of a peaceful passing</li>
                  <li>• <strong>Finding Employment:</strong> Helper in job searches</li>
                  <li>• <strong>Selling a House:</strong> Patron of real estate matters</li>
                  <li>• <strong>Financial Difficulties:</strong> Helper in money problems</li>
                  <li>• <strong>Family Problems:</strong> Patron of family reconciliation</li>
                  <li>• <strong>Protection from Demons:</strong> Guardian against evil</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Joseph</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Joseph, whose protection is so great, so strong, so prompt before the throne of God, 
                    I place in you all my interests and desires. O St. Joseph, do assist me by your powerful intercession, 
                    and obtain for me from your Divine Son all spiritual blessings, through Jesus Christ, our Lord.
                  </p>
                  <p className="mb-4">
                    So that, having engaged here below your heavenly power, I may offer my thanksgiving and homage 
                    to the most loving of Fathers. O St. Joseph, I never weary contemplating you, and Jesus asleep 
                    in your arms; I dare not approach while He reposes near your heart.
                  </p>
                  <p>
                    Press Him in my name and kiss His fine head for me and ask him to return the Kiss when I draw my dying breath. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Joseph, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share Section */}
        <section className="mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this saint</h2>
            <ShareButton 
              title="St. Joseph" 
              url="/saints/st-joseph"
              excerpt="Learn about the inspiring life and legacy of St. Joseph, a holy example of faith and devotion." 
            />
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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