import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Matthias - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas Iscariot.',
  keywords: [
    'st matthias',
    'saint matthias',
    'apostle matthias',
    'st matthias biography',
    'st matthias feast day',
    'st matthias patron saint',
    'replacement apostle',
    'twelve apostles',
    'catholic saints',
    'may 14 feast day'
  ],
  openGraph: {
    title: 'St. Matthias - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas Iscariot.',
    url: 'https://catholicbibleonline.com/saints/st-matthias',
  },
  twitter: {
    title: 'St. Matthias - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Matthias, the apostle chosen to replace Judas Iscariot.',
  }
}

export default function StMatthiasPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Matthias
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Apostle Chosen to Replace Judas Iscariot
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Matthias</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Matthias</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Matthias was the apostle chosen to replace Judas Iscariot after 
                his betrayal and death. According to the Acts of the Apostles, Matthias 
                had been a follower of Jesus from the time of John's baptism until 
                the Ascension, making him a witness to the entire public ministry 
                of Christ.
              </p>
              
              <p className="mb-6">
                After the Ascension of Jesus, the remaining eleven apostles gathered 
                in Jerusalem and decided to choose a replacement for Judas Iscariot. 
                Peter, acting as the leader of the apostles, explained that it was 
                necessary to choose someone who had been with them from the beginning 
                of Jesus' ministry and who had witnessed the Resurrection. This was 
                to maintain the symbolic number of twelve apostles, representing 
                the twelve tribes of Israel.
              </p>
              
              <p className="mb-6">
                Two candidates were proposed: Joseph called Barsabbas (also known 
                as Justus) and Matthias. The apostles prayed and then cast lots to 
                determine God's choice, and the lot fell to Matthias. This method 
                of selection, while unusual to modern sensibilities, was a traditional 
                Jewish way of discerning God's will, and it demonstrated the apostles' 
                trust in divine providence.
              </p>
              
              <p className="mb-6">
                St. Matthias was thus chosen to complete the number of the twelve 
                apostles, taking the place that Judas had abandoned. His selection 
                was significant because it maintained the apostolic college as a 
                complete body, ensuring the continuity of the apostolic witness and 
                authority in the early Church.
              </p>
              
              <p className="mb-6">
                After his selection, St. Matthias received the Holy Spirit along 
                with the other apostles at Pentecost. He then went out to preach 
                the Gospel, carrying on the mission that Jesus had entrusted to 
                His apostles. According to tradition, he preached in various regions, 
                including Judea, Cappadocia, and the shores of the Caspian Sea.
              </p>
              
              <p>
                According to tradition, St. Matthias suffered martyrdom in southern 
                Asia, where he was killed with a lance or spear. This instrument 
                of his death has become his distinctive symbol. His martyrdom demonstrates 
                his complete commitment to Christ and his willingness to give his 
                life for the faith he had preached so faithfully.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Matthias: The Chosen Apostle</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Chosen Replacement</h3>
              <p className="mb-6">
                St. Matthias's most distinctive legacy is his role as the apostle 
                chosen to replace Judas Iscariot. His selection demonstrates God's 
                ability to bring good out of evil and to maintain the integrity 
                of His Church even when one of its members fails. Matthias's story 
                teaches us that God can use anyone who is faithful and willing to 
                serve, even those who may have been overlooked or in the background.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Faithful Witness</h3>
              <p className="mb-6">
                St. Matthias had been a faithful follower of Jesus from the beginning 
                of His ministry, witnessing all the important events of Jesus' life, 
                death, and resurrection. His selection as an apostle was based on 
                his consistent faithfulness and his qualification as a witness to 
                the entire Gospel story. His example teaches us the importance of 
                being faithful in our discipleship and of being ready when God calls 
                us to greater service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Providence</h3>
              <p className="mb-6">
                St. Matthias's selection through the casting of lots demonstrates 
                the apostles' trust in divine providence and their belief that God 
                would guide their decision. This method of selection shows that 
                the early Church relied on God's guidance in making important decisions 
                and that they trusted in His wisdom rather than human reasoning alone.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Apostolic Continuity</h3>
              <p>
                St. Matthias's role in maintaining the number of twelve apostles 
                was crucial for the early Church's understanding of its apostolic 
                foundation. His selection ensured that the apostolic college remained 
                complete, symbolizing the continuity between the twelve tribes of 
                Israel and the twelve apostles of the New Covenant. His legacy teaches 
                us the importance of maintaining the integrity and continuity of 
                the Church's apostolic foundation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">May 14</div>
              <p className="text-gray-600">Feast of St. Matthias</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Matthias is celebrated on May 14th, commemorating 
                the day of his martyrdom. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing his importance as one of 
                the twelve apostles and his role in maintaining the apostolic college.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Matthias, many people pray for the gift 
                of faithfulness and the willingness to serve when called. Churches 
                may hold special services focusing on the importance of apostolic 
                witness and the continuity of the Church's foundation. Many also 
                pray for those who feel overlooked or in the background, asking 
                for St. Matthias's intercession.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of faithfulness, 
                for the willingness to serve when called, and for the grace to trust 
                in divine providence. Many also pray for those who feel overlooked 
                or in the background, asking for St. Matthias's intercession in 
                helping them to be ready when God calls them to greater service.
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
                  <li>• <strong>Tailors:</strong> Patron of tailors</li>
                  <li>• <strong>Carpenters:</strong> Patron of carpenters</li>
                  <li>• <strong>Alcoholics:</strong> Patron of alcoholics</li>
                  <li>• <strong>Smallpox:</strong> Patron against smallpox</li>
                  <li>• <strong>Hope:</strong> Patron of hope</li>
                  <li>• <strong>Perseverance:</strong> Patron of perseverance</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faithfulness:</strong> Help in remaining faithful</li>
                  <li>• <strong>Service:</strong> Grace for willingness to serve</li>
                  <li>• <strong>Providence:</strong> Trust in divine guidance</li>
                  <li>• <strong>Overlooked:</strong> Help for those feeling unnoticed</li>
                  <li>• <strong>Replacement:</strong> Grace for new opportunities</li>
                  <li>• <strong>Witness:</strong> Strength to be a faithful witness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Matthias</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Matthias, faithful apostle of Christ who was chosen to 
                    replace Judas Iscariot and who had been a witness to the entire 
                    ministry of Jesus, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were selected through divine providence to complete the 
                    number of the twelve apostles, help us to trust in God's guidance 
                    and to be ready when He calls us to greater service. Teach us 
                    to be faithful witnesses to Christ in all circumstances.
                  </p>
                  <p className="mb-4">
                    You who had been a faithful follower from the beginning and who 
                    was chosen for your consistent faithfulness, help us to remain 
                    faithful in our discipleship and to be prepared for whatever 
                    God asks of us.
                  </p>
                  <p>
                    St. Matthias, pray for us that we may be faithful witnesses to 
                    Christ and that we may trust in divine providence in all our 
                    decisions. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Faithfulness</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Matthias, patron of faithfulness and service, intercede 
                    for all those who feel overlooked or in the background.
                  </p>
                  <p>
                    Help them to remain faithful in their discipleship and to be 
                    ready when God calls them to greater service. Give them the 
                    grace to trust in divine providence and to be faithful witnesses 
                    to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Matthias, pray for us!"
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
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles who led the selection of St. Matthias.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved disciple and fellow apostle with St. Matthias.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-james-the-greater" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Greater
                </h3>
                <p className="text-gray-700 text-sm">
                  First martyr among the apostles and fellow witness.
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