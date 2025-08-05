import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. James the Less - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. James the Less, author of the Epistle of James and first Bishop of Jerusalem.',
  keywords: [
    'st james the less',
    'saint james the less',
    'james the less biography',
    'james the less feast day',
    'james the less patron saint',
    'epistle of james author',
    'bishop of jerusalem',
    'apostle james',
    'james the just',
    'may 3 feast day'
  ],
  openGraph: {
    title: 'St. James the Less - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. James the Less, author of the Epistle of James and first Bishop of Jerusalem.',
    url: 'https://catholicbibleonline.com/saints/st-james-the-less',
  },
  twitter: {
    title: 'St. James the Less - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. James the Less, author of the Epistle of James and first Bishop of Jerusalem.',
  }
}

export default function StJamesTheLessPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📜</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. James the Less
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Author of the Epistle of James, First Bishop of Jerusalem
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. James the Less</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📜</div>
              <div className="text-sm text-gray-600">Apostle & Bishop</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. James the Less</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. James the Less, the author of the first Catholic Epistle, was the son of Alphaeus of Cleophas. His mother Mary was either a sister or a close relative of the Blessed Virgin, and for that reason, according to Jewish custom, he was sometimes called the brother of the Lord. The Apostle held a distinguished position in the early Christian community of Jerusalem.
              </p>
              
              <p className="mb-6">
                St. Paul tells us he was a witness of the Resurrection of Christ; he is also a "pillar" of the Church, whom St. Paul consulted about the Gospel. According to tradition, he was the first Bishop of Jerusalem, and was at the Council of Jerusalem about the year 50. The historians Eusebius and Hegesippus relayed that St. James was martyred for the Faith by the Jews in the Spring of the year 62, although they greatly esteemed his person and had given him the surname of "James the Just."
              </p>
              
              <p className="mb-6">
                Tradition has always recognized him as the author of the Epistle that bears his name. Internal evidence based on the language, style, and teaching of the Epistle reveals its author as a Jew familiar with the Old Testament, and a Christian thoroughly grounded in the teachings of the Gospel. External evidence from the early Fathers and Councils of the Church confirmed its authenticity and canonicity.
              </p>
              
              <p className="mb-6">
                The date of its writing cannot be determined exactly. According to some scholars it was written about the year 49 A.D. Others, however, claim it was written after St. Paul's Epistle to the Romans (composed during the winter of 57-58 A.D.). It was probably written between the years 60 and 62 A.D.
              </p>
              
              <p>
                St. James addresses himself to the "twelve tribes that are in the Dispersion," that is, to Christians outside Palestine; but nothing in the Epistle indicates that he is thinking only of Jewish Christians. St. James realizes full well the temptations and difficulties they encounter in the midst of paganism, and as a spiritual father, he endeavors to guide and direct them in the faith. Therefore, the burden of his discourse is an exhortation to practical Christian living.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. James the Less: Pillar of the Early Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Author of Sacred Scripture</h3>
              <p className="mb-6">
                St. James the Less's legacy as the author of the Epistle of James gives him a unique place in salvation history. His letter, which emphasizes the importance of works accompanying faith, has been a cornerstone of Christian teaching for nearly two thousand years. His famous statement that "faith without works is dead" continues to guide Christians in understanding the relationship between belief and action.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">First Bishop of Jerusalem</h3>
              <p className="mb-6">
                As the first Bishop of Jerusalem, St. James the Less played a crucial role in establishing the Church's hierarchical structure. His leadership in the early Christian community, especially during the Council of Jerusalem, demonstrates his importance in resolving theological disputes and guiding the Church through its formative years. His position as a "pillar" of the Church shows his foundational role in Christian history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Resurrection</h3>
              <p className="mb-6">
                St. James the Less's role as a witness to Christ's Resurrection places him among the most important figures in early Christianity. His testimony, along with that of the other apostles, forms the foundation of the Christian faith. His martyrdom for this witness demonstrates his complete commitment to the truth of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Judaism and Christianity</h3>
              <p>
                St. James the Less's Jewish background and his position in the early Church made him a crucial bridge between Judaism and Christianity. His understanding of both the Old Testament and the Gospel teachings allowed him to guide Jewish Christians and help establish the Church's relationship with its Jewish roots. His martyrdom by the Jews shows the challenges faced by early Christians in maintaining their identity while respecting their heritage.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 3</div>
              <p className="text-gray-600">Feast of St. James the Less, Apostle and Bishop</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. James the Less is celebrated on May 3rd, commemorating his martyrdom and his foundational role in the early Church. This date falls during the Easter season, a fitting time to remember his witness to the Resurrection and his role as a pillar of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Biblical Celebrations</h3>
              <p className="mb-6">
                In churches and study groups around the world, St. James the Less's feast day is celebrated with special readings from his Epistle and prayers for wisdom in practical Christian living. Many people reflect on his teachings about faith and works, and pray for the grace to live out their faith authentically.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for bishops and Church leaders, for those studying Scripture, and to ask for St. James the Less's intercession in helping us to put our faith into action. Many people also pray for the grace to be witnesses to the Resurrection in their daily lives.
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
                  <li>• <strong>Bishops:</strong> Church leaders and pastors</li>
                  <li>• <strong>Jerusalem:</strong> The Holy City he served</li>
                  <li>• <strong>Scripture Scholars:</strong> Those who study the Bible</li>
                  <li>• <strong>Writers:</strong> Authors and communicators</li>
                  <li>• <strong>Jewish Christians:</strong> Christians of Jewish heritage</li>
                  <li>• <strong>Practical Christians:</strong> Those who live out their faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Faith and Works:</strong> Balancing belief and action</li>
                  <li>• <strong>Church Unity:</strong> Maintaining unity in the Church</li>
                  <li>• <strong>Witness:</strong> Bearing witness to the Resurrection</li>
                  <li>• <strong>Wisdom:</strong> Seeking divine wisdom</li>
                  <li>• <strong>Martyrdom:</strong> Courage in facing persecution</li>
                  <li>• <strong>Pastoral Care:</strong> Caring for the faithful</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. James the Less</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. James the Less, pillar of the Church and author of sacred Scripture, help us to live out our faith with works of charity and love.
                  </p>
                  <p className="mb-4">
                    Teach us to be witnesses to the Resurrection of Christ in our daily lives and to guide others in the path of practical Christian living. May we, like you, be willing to give everything for the truth of the Gospel.
                  </p>
                  <p>
                    Help us to be bridges of unity in the Church and to serve as faithful pastors to those entrusted to our care. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Bishops</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. James the Less, first Bishop of Jerusalem, intercede for all bishops and Church leaders today.
                  </p>
                  <p>
                    Help them to be pillars of the Church, guiding the faithful with wisdom and courage. May they follow your example of pastoral care and witness to the truth. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Faith and Works</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. James the Less, who taught us that faith without works is dead, help us to put our faith into action.
                  </p>
                  <p>
                    Teach us to be doers of the word and not hearers only. May our lives bear witness to the love of Christ through our works of charity and service. Amen."
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the Apostles and leader of the early Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles who consulted with St. James.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John
                </h3>
                <p className="text-gray-700 text-sm">
                  Beloved disciple and author of the Fourth Gospel.
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