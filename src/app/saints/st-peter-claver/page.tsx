import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Peter Claver - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Peter Claver, Jesuit missionary and patron of African missions, known for his service to African slaves.',
  keywords: [
    'st peter claver',
    'saint peter claver',
    'st peter claver biography',
    'st peter claver feast day',
    'st peter claver patron saint',
    'african missions patron',
    'slave ministry saint',
    'catholic saints',
    'september 9 feast day'
  ],
  openGraph: {
    title: 'St. Peter Claver - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peter Claver, Jesuit missionary and patron of African missions.',
    url: 'https://catholicbibleonline.com/saints/st-peter-claver',
  },
  twitter: {
    title: 'St. Peter Claver - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peter Claver, Jesuit missionary and patron of African missions.',
  }
}

export default function StPeterClaverPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Peter Claver
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Jesuit Missionary, Patron of African Missions, Apostle of the Slaves
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Peter Claver</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Missionary</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Peter Claver</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Peter Claver was born at Verdu, Catalonia, Spain, in 1580, of impoverished parents 
                descended from ancient and distinguished families. Despite their financial difficulties, 
                his family maintained their noble heritage and Christian values, which would shape 
                Peter's future mission.
              </p>
              
              <p className="mb-6">
                He studied at the Jesuit college of Barcelona, where he received a solid education 
                and spiritual formation. In 1602, he entered the Jesuit novitiate at Tarragona and 
                took his final vows on August 8th, 1604, dedicating his life to the service of God 
                and the Church.
              </p>
              
              <p className="mb-6">
                While studying philosophy at Majorca, the young religious was profoundly influenced 
                by St. Alphonsus Rodriguez, who inspired him to go to the Indies and save "millions 
                of perishing souls." This encounter would change the course of his life and lead him 
                to his extraordinary mission.
              </p>
              
              <p className="mb-6">
                In 1610, he landed at Cartagena (modern Colombia), the principal slave market of the 
                New World, where a thousand slaves were landed every month. This was the beginning 
                of his life's work - a mission that would last for thirty-three years and transform 
                the lives of countless African slaves.
              </p>
              
              <p className="mb-6">
                After his ordination in 1616, he dedicated himself by special vow to the service of 
                the Negro slaves - a work that was to last for thirty-three years. He labored 
                unceasingly for the salvation of the African slaves and the abolition of the Negro 
                slave trade, and the love he lavished on them was something that transcended the 
                natural order.
              </p>
              
              <p className="mb-6">
                Boarding the slave ships as they entered the harbor, he would hurry to the revolting 
                inferno of the hold, and offer whatever poor refreshments he could afford. He would 
                care for the sick and dying, and instruct the slaves through Negro catechists before 
                administering the Sacraments. Through his efforts, three hundred thousand souls 
                entered the Church.
              </p>
              
              <p className="mb-6">
                Furthermore, he did not lose sight of his converts when they left the ships, but 
                followed them to the plantations to which they were sent, encouraged them to live 
                as Christians, and prevailed on their masters to treat them humanely. He died in 1654, 
                having spent his entire life in service to the most marginalized and suffering.
              </p>
              
              <p>
                St. Peter Claver's life demonstrates the power of one person's commitment to justice, 
                mercy, and the Gospel, showing that true holiness is found in serving the least among us.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Peter Claver: Apostle of the Slaves</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Peter Claver's legacy is one of radical compassion and service to the most 
                marginalized. His life demonstrates that true holiness is found not in seeking 
                personal comfort, but in serving those who suffer most, treating every person 
                as a child of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Missionary Zeal</h3>
              <p className="mb-6">
                As a Jesuit missionary, St. Peter exemplified the courage and dedication needed 
                to serve in the most challenging circumstances. His willingness to enter the 
                "revolting inferno" of slave ships shows the depth of his love for Christ and 
                his neighbor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of Human Dignity</h3>
              <p className="mb-6">
                St. Peter Claver's work with African slaves established him as a powerful advocate 
                for human dignity and rights. He showed that every person, regardless of their 
                circumstances, deserves to be treated with respect and love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Evangelization and Conversion</h3>
              <p>
                Through his tireless efforts, St. Peter Claver brought three hundred thousand 
                souls to Christ, demonstrating that evangelization is not just about preaching, 
                but about showing God's love through concrete acts of service and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 9</div>
              <p className="text-gray-600">Feast of St. Peter Claver</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Peter Claver is celebrated on September 9th, commemorating his 
                death and honoring his heroic virtues. This date is especially significant for 
                those working in African missions and for all who serve the marginalized and oppressed.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                In Colombia and throughout Latin America, this feast day is celebrated with special 
                prayers for African missions and for the end of all forms of slavery and oppression. 
                Many people pray novenas to St. Peter Claver for help in serving the poor and marginalized.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for African missions, for the end of 
                human trafficking and modern slavery, and for the grace to serve the poor and 
                marginalized with the same love and dedication as St. Peter Claver.
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
                  <li>• <strong>African Missions:</strong> Patron of missions to Africa</li>
                  <li>• <strong>Slave Ministry:</strong> Patron of those who serve slaves</li>
                  <li>• <strong>Colombia:</strong> Patron saint of Colombia</li>
                  <li>• <strong>Interracial Justice:</strong> Patron of racial reconciliation</li>
                  <li>• <strong>Seaport Missions:</strong> Patron of port chaplains</li>
                  <li>• <strong>Jesuit Missions:</strong> Patron of Jesuit missionaries</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>End of Slavery:</strong> Prayer for abolition of all slavery</li>
                  <li>• <strong>Human Trafficking:</strong> Help for victims of trafficking</li>
                  <li>• <strong>Racial Justice:</strong> Intercession for racial reconciliation</li>
                  <li>• <strong>Missionary Work:</strong> Success in evangelization</li>
                  <li>• <strong>Service to Poor:</strong> Guidance in serving marginalized</li>
                  <li>• <strong>Social Justice:</strong> Help in working for justice</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Peter Claver</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Peter Claver, apostle of the slaves and patron of African missions, 
                    who dedicated your life to serving the most marginalized and oppressed, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who entered the revolting holds of slave ships to bring comfort and 
                    the Gospel to suffering souls, help us to have the courage to serve those 
                    who are most in need, regardless of the cost to ourselves.
                  </p>
                  <p className="mb-4">
                    You who brought three hundred thousand souls to Christ through your love 
                    and service, help us to be instruments of God's mercy and love in our daily lives. 
                    Teach us to see Christ in every person, especially the poor and suffering.
                  </p>
                  <p>
                    St. Peter Claver, pray for us! Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Peter Claver, pray for us!"
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
            <Link href="/saints/st-alphonsus-rodriguez" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Alphonsus Rodriguez
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit lay brother who inspired St. Peter Claver to go to the Indies.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Great Jesuit missionary who spread the Gospel in Asia.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-martin-de-porres" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martin de Porres
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican lay brother known for his charity to the poor and marginalized.
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