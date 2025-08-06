import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Genesius - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Genesius, actor and martyr who converted during a play mocking Christianity.',
  keywords: [
    'st genesius',
    'saint genesius',
    'st genesius biography',
    'st genesius feast day',
    'st genesius patron saint',
    'actor saint',
    'martyr saint',
    'roman martyr',
    'diocletian persecution',
    'theatre saint',
    'catholic saints',
    'august 25 feast day'
  ],
  openGraph: {
    title: 'St. Genesius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Genesius, actor and martyr who converted during a play mocking Christianity.',
    url: 'https://catholicbibleonline.com/saints/st-genesius',
  },
  twitter: {
    title: 'St. Genesius - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Genesius, actor and martyr who converted during a play mocking Christianity.',
  }
}

export default function StGenesiusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎭</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Genesius
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Actor, Martyr, Patron of Artists and Theatre
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Genesius</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎭</div>
              <div className="text-sm text-gray-600">Actor</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Genesius</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Genesius lived during the brutal persecution of Christians under the evil emperor 
                Diocletian in the third and fourth centuries. He was a pagan actor who initially sought 
                to advance his career by mocking the Christian faith that Diocletian was determined to 
                destroy. His story is one of the most dramatic conversions in Christian history, 
                demonstrating how God can transform even the most unlikely circumstances into moments 
                of divine grace.
              </p>
              
              <p className="mb-6">
                In the year 303, when Diocletian traveled to Rome to celebrate twenty years as emperor, 
                Genesius saw an opportunity to curry favor with the emperor by writing and performing 
                in a play that would mock the Christian faith. He knew of Diocletian's hatred of 
                Christianity and thought he could enhance his standing in the empire through this 
                blasphemous performance.
              </p>
              
              <p className="mb-6">
                Christian tradition tells us that Genesius decided the best way to learn about 
                Christianity in order to write such a satirical play was to deceive members of the 
                Christian community into believing that he wanted to enter the catechumenate and 
                prepare for Baptism. He was successful in his deception, and the Christians accepted 
                him into their instruction program.
              </p>
              
              <p className="mb-6">
                During the months of instruction in preparation for Baptism, Genesius learned about 
                the Christian claims that Baptism washed away sin and brought the baptized into a new 
                life in Jesus Christ. He planned to make these claims the subject of his mocking play, 
                which he would perform in front of Diocletian himself. However, during this period of 
                instruction in the Christian Way, he found himself increasingly drawn to the Savior 
                whom the Christians proclaimed and became conflicted about his original intentions.
              </p>
              
              <p className="mb-6">
                Despite his growing internal conflict, Genesius finally left the catechumenate and 
                rejected the claims of Christianity. He then decided to proceed with his blasphemous 
                plan to write a play that was a parody of Christianity and perform it in front of the 
                Emperor, hoping to gain favor with this evil ruler.
              </p>
              
              <p className="mb-6">
                When the time came for the performance of the play before the emperor, Genesius appeared 
                on stage, playing a bedridden sick man who cried out to be Baptized. An actor playing a 
                Christian priest came to baptize the sick man. The entire play was supposed to mock the 
                Savior Jesus Christ and the Christian way of life. But the Lord had other plans.
              </p>
              
              <p className="mb-6">
                As the actor playing the Christian priest poured water over the head of Genesius, the 
                grace of God fell upon him. He encountered the Risen Jesus Christ and saw the truth of 
                the Christian faith. According to the Acts of the Martyrs, Genesius began to give 
                testimony to Jesus Christ in front of all who were watching and affirmed the Christian 
                faith. He boldly called on Diocletian to give his life to Jesus Christ.
              </p>
              
              <p>
                Diocletian became enraged at this unexpected turn of events. He had this holy, newly 
                baptized Christian tortured and beheaded when Genesius refused to renounce his faith in 
                Jesus Christ the Lord. St. Genesius is now recognized as the Patron Saint of Actors and 
                all those involved in the performing arts, a testament to how God can use even the 
                theatre to manifest His beauty and truth.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Genesius: The Actor Who Became a Saint</h2>
          
          <div className="bg-purple-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Divine Conversion</h3>
              <p className="mb-6">
                St. Genesius's legacy is marked by his extraordinary conversion from a pagan actor 
                mocking Christianity to a Christian martyr proclaiming the truth of Christ. His story 
                demonstrates that God can work through any circumstance, even those intended for evil, 
                to bring about good. His conversion during the very act of performing a blasphemous 
                play shows the power of divine grace to transform hearts in the most unexpected moments.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Christian Artists</h3>
              <p className="mb-6">
                As the Patron Saint of Actors, St. Genesius serves as an inspiration for all Christian 
                artists to use their talents for the glory of God. His story reminds us that the arts 
                can be a powerful medium for evangelization and that Christian artists are called to 
                create "epiphanies of beauty" that lead others to encounter the living God. His witness 
                encourages contemporary artists to use their gifts to manifest the presence of God in 
                the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courageous Witness</h3>
              <p className="mb-6">
                St. Genesius's bold proclamation of faith before the emperor Diocletian, despite the 
                certain consequences, shows the courage that comes from encountering the truth of Christ. 
                His willingness to face torture and death rather than renounce his newfound faith 
                demonstrates the transformative power of divine grace and the strength that comes from 
                knowing the truth of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Cultural Renewal</h3>
              <p>
                In our current age, when the arts and culture are often moving away from God, St. 
                Genesius's story is particularly relevant. He reminds us that Christians are called to 
                participate in culture and transform it from within, using the arts to communicate the 
                message of Christ in ways that are both beautiful and attractive. His example inspires 
                contemporary Christian artists to create works that manifest the beauty of God and lead 
                others to encounter the divine.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">August 25</div>
              <p className="text-gray-600">Feast of St. Genesius</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Genesius is celebrated on August 25th. This feast day honors his dramatic conversion, 
                his courageous witness to Christ, and his patronage of actors and artists who seek to 
                use their talents for the glory of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for actors, artists, and all those involved in the 
                performing arts, asking for St. Genesius's intercession in using their talents for the 
                glory of God. It's also a day to reflect on how God can work through any circumstance 
                to bring about conversion and renewal.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Christian artists, for the renewal of 
                culture through the arts, for those seeking conversion, and to ask for St. Genesius's 
                intercession in using our talents to manifest God's beauty in the world.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Actors:</strong> Patron of all those who perform on stage</li>
                  <li>• <strong>Artists:</strong> Patron of Christian artists and creators</li>
                  <li>• <strong>Theatre:</strong> Patron of the performing arts</li>
                  <li>• <strong>Playwrights:</strong> Patron of those who write plays</li>
                  <li>• <strong>Cultural Renewal:</strong> Patron of renewing culture through art</li>
                  <li>• <strong>Conversion:</strong> Patron of those seeking conversion</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Christian Artists:</strong> Helper for artists using their gifts for God</li>
                  <li>• <strong>Cultural Evangelization:</strong> Patron of evangelizing through art</li>
                  <li>• <strong>Unexpected Conversions:</strong> Helper for miraculous conversions</li>
                  <li>• <strong>Beauty in Art:</strong> Patron of creating beautiful Christian art</li>
                  <li>• <strong>Courageous Witness:</strong> Helper for bold proclamation of faith</li>
                  <li>• <strong>Divine Grace:</strong> Patron of experiencing God's transforming grace</li>
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
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Genesius</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Genesius, you who experienced the transforming grace of God during a play 
                    intended to mock Christianity, help me to be open to God's grace in unexpected moments.
                  </p>
                  <p>
                    You who used your talents as an actor to proclaim the truth of Christ, teach me to 
                    use my own gifts and talents to manifest God's beauty in the world. Help me to be 
                    courageous in witnessing to my faith, even when it may cost me dearly. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Christian Artists</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Genesius, patron of actors and artists, pray for all those who work in the 
                    performing arts and creative fields.
                  </p>
                  <p>
                    Help them to use their talents to create 'epiphanies of beauty' that lead others 
                    to encounter the living God. May their work renew culture and manifest the presence 
                    of Christ in the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Genesius, pray for us!"
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
            <Link href="/saints/st-sebastian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, patron of athletes and soldiers, killed under Diocletian.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-of-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin and martyr, patron of students and philosophers, killed under Diocletian.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-of-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of Franciscans, patron of ecology and animals, model of Christian joy.
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