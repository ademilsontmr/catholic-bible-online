import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John, the beloved disciple and author of the Fourth Gospel.',
  keywords: [
    'st john',
    'saint john',
    'beloved disciple',
    'st john biography',
    'st john feast day',
    'st john patron saint',
    'twelve apostles',
    'catholic saints',
    'december 27 feast day'
  ],
  openGraph: {
    title: 'St. John - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John, the beloved disciple and author of the Fourth Gospel.',
    url: 'https://catholicbibleonline.com/saints/st-john',
  },
  twitter: {
    title: 'St. John - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John, the beloved disciple and author of the Fourth Gospel.',
  }
}

export default function StJohnPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🍷</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Beloved Disciple and Apostle of Love
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 27</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🍷</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John, the beloved disciple, was one of the twelve apostles chosen 
                by Jesus Christ and holds a unique place among them. Jesus particularly 
                loved St. John, probably because of his great innocence and purity. 
                This special relationship with Christ is evident throughout the Gospels, 
                where John is often referred to as "the disciple whom Jesus loved."
              </p>
              
              <p className="mb-6">
                St. John was the son of Zebedee and Salome, and the brother of St. 
                James the Greater. Together with his brother and St. Peter, John 
                formed the inner circle of Jesus' disciples, being present at the 
                most important moments of Jesus' ministry, including the Transfiguration 
                and the Agony in the Garden.
              </p>
              
              <p className="mb-6">
                One of the most significant moments in St. John's life occurred at 
                the foot of the Cross, where Jesus entrusted His blessed Mother to 
                John's care, saying, "Woman, behold your son," and to John, "Behold 
                your mother." From that hour, John took Mary into his home, fulfilling 
                this sacred trust and becoming the spiritual son of the Mother of God.
              </p>
              
              <p className="mb-6">
                St. John is the author of the Fourth Gospel, three Epistles, and 
                the Book of Revelation. His Gospel is unique among the four Gospels 
                for its theological depth and emphasis on the divinity of Christ. 
                It begins with the profound prologue, "In the beginning was the Word, 
                and the Word was with God, and the Word was God," establishing the 
                eternal nature of Christ.
              </p>
              
              <p className="mb-6">
                After the Resurrection and Ascension of Jesus, St. John remained 
                in Jerusalem for some time, caring for the Blessed Virgin Mary. 
                Later, he went to Ephesus, where he established a Christian community 
                and served as its bishop. According to tradition, he was the only 
                apostle who did not die a martyr's death, though he did suffer persecution 
                and exile to the island of Patmos.
              </p>
              
              <p>
                St. John lived to an advanced age, dying peacefully in Ephesus around 
                the year 100 AD. His long life allowed him to witness the growth 
                of the early Church and to provide guidance to the Christian communities 
                through his writings and teachings. His emphasis on love as the central 
                message of Christianity earned him the title "Apostle of Love."
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John: The Beloved Disciple</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Beloved Disciple</h3>
              <p className="mb-6">
                St. John's most distinctive legacy is his unique relationship with 
                Jesus as "the disciple whom Jesus loved." This special bond demonstrates 
                the personal nature of Christ's love for each of His followers and 
                shows that God's love is not generic but deeply personal and individual. 
                John's example teaches us that we are all beloved by Christ and that 
                our relationship with Him should be characterized by intimacy and trust.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Guardian of the Blessed Virgin</h3>
              <p className="mb-6">
                St. John's role as the guardian of the Blessed Virgin Mary represents 
                one of the most sacred trusts given to any human being. By accepting 
                this responsibility, John became the spiritual son of the Mother 
                of God and established a model for devotion to Mary that would inspire 
                countless Christians throughout history. His care for Mary demonstrates 
                the importance of honoring and protecting the sacred in our lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Apostle of Love</h3>
              <p className="mb-6">
                St. John's writings emphasize love as the central message of Christianity. 
                His famous statement, "God is love," and his repeated exhortations 
                to love one another have made him known as the Apostle of Love. His 
                legacy teaches us that love is not just a feeling but the very essence 
                of Christian life and the foundation of all authentic relationships.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Vision</h3>
              <p>
                St. John's Gospel and other writings provide the most profound theological 
                insights into the nature of Christ and the Christian life. His emphasis 
                on the divinity of Christ, the importance of the Eucharist, and the 
                role of the Holy Spirit has shaped Christian theology for two millennia. 
                His Book of Revelation provides a vision of the ultimate triumph of 
                good over evil and the fulfillment of God's plan for creation.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">December 27</div>
              <p className="text-gray-600">Feast of St. John</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John is celebrated on December 27th, during the 
                Octave of Christmas, recognizing his special relationship with the 
                Incarnate Word. This feast is celebrated as a solemnity in the Roman 
                Catholic Church, honoring his importance as one of the twelve apostles 
                and the beloved disciple of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. John, many people pray for the gift of love 
                and the ability to recognize God's personal love for them. Churches 
                may hold special services focusing on the importance of love in Christian 
                life and the call to be witnesses of Christ's love in the world. Many 
                also pray for theologians and writers, asking for St. John's intercession 
                in their work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of love, 
                for the ability to recognize God's personal care, and for the grace 
                to be faithful witnesses of Christ's love. Many also pray for theologians, 
                writers, and all those who seek to understand and communicate the 
                truths of the faith, asking for St. John's intercession in their work.
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
                  <li>• <strong>Theologians:</strong> Patron of theologians and scholars</li>
                  <li>• <strong>Writers:</strong> Patron of writers and authors</li>
                  <li>• <strong>Publishers:</strong> Patron of publishers</li>
                  <li>• <strong>Booksellers:</strong> Patron of booksellers</li>
                  <li>• <strong>Artists:</strong> Patron of artists</li>
                  <li>• <strong>Friendship:</strong> Patron of friendship</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Love:</strong> Help in understanding and practicing love</li>
                  <li>• <strong>Friendship:</strong> Grace for true friendship</li>
                  <li>• <strong>Theological Study:</strong> Success in understanding the faith</li>
                  <li>• <strong>Writing:</strong> Help in communicating truth</li>
                  <li>• <strong>Devotion to Mary:</strong> Growth in Marian devotion</li>
                  <li>• <strong>Intimacy with Christ:</strong> Deeper relationship with Jesus</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John, beloved disciple of Christ and guardian of the Blessed 
                    Virgin Mary, who was privileged to rest on the breast of Jesus 
                    and to receive His Mother as your own, intercede for us before 
                    the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were called the Apostle of Love and who taught us that 
                    God is love, help us to understand the depth of Christ's love 
                    for us and to respond to that love with our whole hearts. Teach 
                    us to love one another as Christ has loved us.
                  </p>
                  <p className="mb-4">
                    You who wrote the most profound Gospel and who received the vision 
                    of the Apocalypse, help us to understand the mysteries of our 
                    faith and to remain faithful to Christ even in times of trial. 
                    Guide us in our study of Scripture and in our efforts to communicate 
                    the truth of Christ to others.
                  </p>
                  <p>
                    St. John, pray for us that we may grow in love for Christ and 
                    for one another, and that we may be faithful witnesses of His 
                    love in the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Love</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John, Apostle of Love, intercede for all those who seek 
                    to understand and practice true love.
                  </p>
                  <p>
                    Help them to recognize God's personal love for them and to respond 
                    to that love by loving others. Give them the grace to be faithful 
                    friends and to build relationships based on Christ's love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John, pray for us!"
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
            <Link href="/saints/st-james-the-greater" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Greater
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. John and fellow apostle.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles and close companion of St. John.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Blessed Mother entrusted to St. John's care.
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