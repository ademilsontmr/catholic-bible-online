import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Lawrence - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Lawrence, deacon and martyr who showed the true treasure of the Church.',
  keywords: [
    'st lawrence',
    'saint lawrence',
    'st lawrence deacon',
    'lawrence biography',
    'lawrence feast day',
    'lawrence patron saint',
    'deacon martyr',
    'august 10 feast day',
    'church treasure',
    'griddle martyr'
  ],
  openGraph: {
    title: 'St. Lawrence - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lawrence, deacon and martyr who showed the true treasure of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-lawrence',
  },
  twitter: {
    title: 'St. Lawrence - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Lawrence, deacon and martyr who showed the true treasure of the Church.',
  }
}

export default function StLawrencePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Lawrence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Deacon and Martyr, Patron of the Poor and Deacons
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Lawrence</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 10</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Lawrence</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The year was 258 A.D. It was a difficult beginning for what would become the First Christian Millennium. Hostility against the early followers of Jesus Christ was growing. The barbarism and severity of pagan Rome had begun to reach a fever pitch. It would soon lead to a blood lust. The newborn Christian Church, faithful to the One who had given Himself for the life of the world, continued the work of His redemption.
              </p>
              
              <p className="mb-6">
                Roman authorities charged Christians of that era with "odium humani generis" [hatred of the human race]. The Romans claimed to be citizens of a great empire, yet they practiced primitive forms of abortion as well as "exposure", the killing of unwanted newborns. First and Second century Rome was a challenging mission field for these early Christians. Rome proclaimed itself the shining example to the world of its age while it violated the Natural Moral Law and embraced debauchery.
              </p>
              
              <p className="mb-6">
                The day that Deacon Lawrence experienced his birth from death to life was an ominous and frightful day in ancient Rome. Four days earlier, the great Bishop of Rome, Sixtus, was arrested by soldiers of the emperor Valerian, along with his beloved deacons, and beheaded. Valerian had issued an edict to the Roman Senate that all the Christian clergy-bishops, priests and deacons-were to be arrested and executed.
              </p>
              
              <p className="mb-6">
                Sentenced to death in the Emperor Valerian's sweeping condemnation of all Christian clergy, Lawrence offended the Emperor - and endeared himself to all Christians since then - by assembling before Valerian the real gold and silver of the Church, the poor. According to the Christian tradition, Deacon Lawrence, knowing that the fervor of Valerians' hatred was extending to all Christians who owned property, began to give it all away. He distributed the money and treasures of the Church to the city's poor-believing the clear admonition of the Savior that they were blessed and especially loved by Him.
              </p>
              
              <p className="mb-6">
                Valerian heard the news and wanted the treasure to satisfy his unbridled lust for worldly power. So, he offered Deacon Lawrence a way out of sure death. If he would show him where the Church's great gold and silver were located, he would issue an order of clemency, sparing his life so that he could continue his work. Valerian was delighted when the deacon asked for three days to gather all the gold and silver of the Church together in one central place! His pride and greed filled blinded him from seeing the truth.
              </p>
              
              <p className="mb-6">
                For three days, Deacon Lawrence went throughout the city and invited all the beloved poor, handicapped, and misfortunate to come together. They were being supported by a thriving early Christian community who understood the Gospel imperative to recognize Jesus in the poor. When Valerian arrived, Deacon Lawrence presented him with the true gold and silver of the Church, the poor! The emperor was filled with rage! Beheading was not enough for this Christian Deacon. He ordered Deacon Lawrence to be burned alive, in public, on a griddle. Witnesses recorded the public martyrdom. The deacon cheerfully offered himself to the Lord Jesus and even joked with his executioners!
              </p>
              
              <p>
                The tradition records massive conversions to the Christian faith as a result of the holy life and death of one Deacon who understood the true heart of his vocation. He was poured out, like his Master, Jesus Christ the Servant, in redemptive love, on behalf of others. It is still said to this day that all of Rome became Christian as a result of the faithful life, and the death, of this one humble deacon. He was buried in a cemetery on the Via Tiburtina. On that spot, Constantine would later build a Basilica.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Lawrence: Model of Service and Martyrdom</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The True Treasure of the Church</h3>
              <p className="mb-6">
                St. Lawrence's most famous act - presenting the poor as the Church's true treasure - has become a timeless lesson for all Christians. His response to Emperor Valerian's demand for the Church's wealth demonstrates that the real riches of the Church are not material possessions but the people we serve, especially the poor and marginalized. This act has inspired countless Christians to prioritize service to others over material wealth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Diaconal Service</h3>
              <p className="mb-6">
                As a deacon, St. Lawrence exemplified the true meaning of diaconal ministry - service to God and neighbor. His life shows that deacons are called to be bridges between the Church and the world, particularly in serving the poor and vulnerable. His example continues to inspire deacons and all Christians to see their vocation as one of service rather than power or prestige.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Joyful Martyrdom</h3>
              <p className="mb-6">
                St. Lawrence's cheerful demeanor during his martyrdom, even joking with his executioners, demonstrates the joy that comes from complete trust in God. His witness shows that true Christian joy is not dependent on circumstances but flows from a deep relationship with Christ. His example has inspired countless martyrs and confessors throughout the centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Conversion of Rome</h3>
              <p>
                The tradition that all of Rome became Christian as a result of St. Lawrence's martyrdom speaks to the power of authentic witness. His life and death demonstrated the truth of the Gospel in such a compelling way that it moved an entire city to conversion. This legacy reminds us that our faithfulness, even in small ways, can have far-reaching effects for the Kingdom of God.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 10</div>
              <p className="text-gray-600">Feast of St. Lawrence, Deacon and Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Lawrence is celebrated on August 10th, commemorating his martyrdom and his exemplary service as a deacon. This date falls during the summer, a time when the Church reflects on the themes of service and sacrifice. The feast is celebrated as a solemnity in Rome, where he is particularly venerated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Traditions</h3>
              <p className="mb-6">
                In many places, especially in Rome and areas with strong Italian heritage, St. Lawrence's feast day is celebrated with special processions and devotions. The day is often marked by acts of charity and service to the poor, following his example. Many churches hold special collections for the poor on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for deacons and all those in service ministries, for the poor and marginalized, and to ask for St. Lawrence's intercession in helping us to serve others with joy and generosity. Many people also pray for the grace to recognize the true treasures in their lives.
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
                  <li>• <strong>Deacons:</strong> Those ordained to diaconal ministry</li>
                  <li>• <strong>Poor:</strong> Those in material need</li>
                  <li>• <strong>Rome:</strong> The city where he was martyred</li>
                  <li>• <strong>Cooks:</strong> Due to his griddle martyrdom</li>
                  <li>• <strong>Librarians:</strong> Protectors of knowledge</li>
                  <li>• <strong>Students:</strong> Those pursuing education</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Service Ministries:</strong> Those serving others</li>
                  <li>• <strong>Charitable Works:</strong> Acts of mercy and charity</li>
                  <li>• <strong>Joy in Suffering:</strong> Finding joy in trials</li>
                  <li>• <strong>Church Treasure:</strong> Recognizing true wealth</li>
                  <li>• <strong>Diaconal Vocation:</strong> Those discerning diaconal ministry</li>
                  <li>• <strong>Martyrdom:</strong> Dying for the faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Lawrence</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Lawrence, deacon and martyr, who showed the world the true treasure of the Church in the poor and suffering, help us to serve others with the same joy and generosity that characterized your life.
                  </p>
                  <p className="mb-4">
                    Teach us to recognize Christ in the poor and to give of ourselves completely in service to others. May we, like you, find joy in serving God and neighbor, even when it requires great sacrifice.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Deacons</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Lawrence, patron of deacons, intercede for all those called to diaconal ministry.
                  </p>
                  <p>
                    Help them to serve with humility and joy, to recognize the poor as the Church's treasure, and to be faithful witnesses to Christ in their service. May they follow your example of selfless love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Poor</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Lawrence, who saw the poor as the Church's true treasure, help us to recognize and serve Christ in all those who are in need.
                  </p>
                  <p>
                    Give us the grace to be generous with our time, talents, and resources, and to treat every person with the dignity they deserve as children of God. Amen."
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
            <Link href="/saints/st-sixtus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sixtus
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope and martyr who was beheaded four days before St. Lawrence.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-stephen" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Stephen
                </h3>
                <p className="text-gray-700 text-sm">
                  First deacon and first martyr, protomartyr of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Priest who dedicated his life to serving the poor and marginalized.
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