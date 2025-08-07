import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Philip - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Philip, one of the twelve apostles who brought Nathanael to Christ and preached in Greece.',
  keywords: [
    'st philip',
    'saint philip',
    'st philip biography',
    'st philip feast day',
    'st philip patron saint',
    'catholic saints',
    'may 3 feast day',
    'apostle saints',
    'twelve apostles',
    'greece',
    'hierapolis'
  ],
  openGraph: {
    title: 'St. Philip - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip, one of the twelve apostles who brought Nathanael to Christ.',
    url: 'https://catholicbibleonline.com/saints/st-philip',
  },
  twitter: {
    title: 'St. Philip - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip, one of the twelve apostles who brought Nathanael to Christ.',
  }
}

export default function StPhilipPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Philip
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Jesus Christ, Evangelist, Martyr of Hierapolis
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Philip</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Philip</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Philip was born in Bethsaida, Galilee, a town that was also the birthplace of 
                St. Peter and St. Andrew. He may have been a disciple of John the Baptist before 
                being called by Jesus, which would explain his readiness to follow the Lord when 
                called. Philip is mentioned as one of the Apostles in the lists of Matthew, Mark, 
                Luke, and in the Acts of the Apostles, establishing his place among the Twelve.
              </p>
              
              <p className="mb-6">
                Philip was called by Jesus Himself, and his response to this call demonstrates 
                his immediate and wholehearted commitment to following the Lord. After being called, 
                Philip's first act as an apostle was to bring Nathanael (also known as Bartholomew) 
                to Christ, showing his evangelistic zeal and his desire to share the good news 
                with others. When Nathanael expressed skepticism about Jesus coming from Nazareth, 
                Philip simply said, "Come and see," demonstrating his practical approach to evangelization.
              </p>
              
              <p className="mb-6">
                Philip was present at the miracle of the loaves and fishes, where he engaged in 
                a brief but significant dialogue with the Lord. When Jesus asked Philip where they 
                could buy bread to feed the crowd, Philip responded with practical concern about 
                the cost, saying that even two hundred denarii would not be enough to give each 
                person a little bread. This exchange shows Philip's practical nature and his 
                initial difficulty in understanding the full scope of Jesus' power.
              </p>
              
              <p className="mb-6">
                Philip was also the Apostle approached by the Hellenistic Jews from Bethsaida 
                who wanted to see Jesus. These Greeks came to Philip and said, "Sir, we wish to 
                see Jesus." Philip then went to Andrew, and together they told Jesus about the 
                request. This incident shows Philip's role as a bridge between different cultures 
                and his willingness to help others come to Christ.
              </p>
              
              <p className="mb-6">
                Just before the Passion, during the Last Supper, Philip asked Jesus to show him 
                the Father, saying, "Lord, show us the Father, and we shall be satisfied." Jesus 
                responded with one of His most profound teachings, explaining that to see Him was 
                to see the Father, for He and the Father are one. This exchange reveals Philip's 
                deep desire to understand the nature of God and his role in helping to clarify 
                this important theological truth.
              </p>
              
              <p>
                After the Resurrection and Ascension, Philip was among the Apostles awaiting the 
                Holy Spirit in the Upper Room. According to tradition, he later preached the Gospel 
                in Greece and was crucified upside down at Hierapolis under Emperor Domitian, 
                following the example of St. Peter. His martyrdom demonstrates his complete 
                commitment to Christ and his willingness to give his life for the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Philip: Apostle and Evangelist</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Evangelistic Zeal</h3>
              <p className="mb-6">
                St. Philip's greatest legacy is his example of evangelistic zeal and his practical 
                approach to bringing others to Christ. His immediate response to bring Nathanael 
                to Jesus after being called himself shows his understanding that the Gospel is 
                meant to be shared. His simple invitation, "Come and see," remains a powerful 
                model for evangelization - not arguing or debating, but simply inviting others 
                to encounter Christ for themselves.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Cultures</h3>
              <p className="mb-6">
                Philip's role in bringing the Hellenistic Jews to Jesus demonstrates his ability 
                to serve as a bridge between different cultures and communities. His willingness 
                to help these Greeks meet Jesus shows his understanding that the Gospel is for 
                all people, regardless of their background or culture. This aspect of his ministry 
                continues to inspire those called to cross-cultural evangelization and ministry.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Practical Faith</h3>
              <p className="mb-6">
                Philip's practical nature and his honest questions to Jesus reveal a man who 
                was not afraid to ask for clarification and who thought in practical terms. 
                His question about the cost of feeding the crowd and his request to see the 
                Father show his desire to understand and his willingness to learn. His example 
                encourages us to bring our questions and concerns to Jesus and to seek understanding 
                in our faith journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyrdom and Witness</h3>
              <p>
                Philip's martyrdom in Greece, where he was crucified upside down, demonstrates 
                his complete commitment to Christ and his willingness to give his life for the 
                Gospel. His preaching in Greece helped to establish the Church in that region, 
                and his martyrdom serves as a powerful witness to the truth of the Gospel. His 
                example continues to inspire those who face persecution for their faith and 
                those called to witness to Christ in difficult circumstances.
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
              <p className="text-gray-600">Feast of St. Philip, Apostle</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Philip is celebrated on May 3rd. This feast honors his life 
                as one of the twelve apostles, his evangelistic ministry, and his martyrdom 
                for the faith. It is a day to remember his example of bringing others to Christ 
                and his willingness to give his life for the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Philip lived during the time of Jesus and the early Church, a period of 
                great transformation and growth for the Christian faith. His ministry took 
                place during the establishment of the Church and the spread of the Gospel 
                beyond the Jewish community to the Gentile world. His work in Greece represents 
                the early Church's mission to bring the Gospel to all nations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for those 
                called to evangelization, for those seeking to bring others to Christ, for 
                missionaries and those working in cross-cultural ministry, and for the grace 
                to be practical and honest in our faith journey. His example inspires us to 
                be bold in sharing the Gospel and to invite others to "come and see" Jesus.
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
                  <li>• <strong>Greece:</strong> Patron saint of Greece</li>
                  <li>• <strong>Hatters:</strong> Patron of hatters and hat makers</li>
                  <li>• <strong>Pastry Chefs:</strong> Patron of pastry chefs and bakers</li>
                  <li>• <strong>Merchants:</strong> Patron of merchants and traders</li>
                  <li>• <strong>Luxembourg:</strong> One of the patron saints of Luxembourg</li>
                  <li>• <strong>Uruguay:</strong> Patron saint of Uruguay</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Helper for those sharing the Gospel</li>
                  <li>• <strong>Cross-Cultural Ministry:</strong> Patron of missionaries</li>
                  <li>• <strong>Practical Faith:</strong> Helper for those seeking understanding</li>
                  <li>• <strong>Invitation:</strong> Patron of those inviting others to Christ</li>
                  <li>• <strong>Questions:</strong> Helper for those with faith questions</li>
                  <li>• <strong>Witness:</strong> Patron of those witnessing to their faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Philip</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Philip, apostle of Jesus Christ who brought Nathanael to the Lord 
                    with the simple invitation 'Come and see,' pray for us who call upon your 
                    intercession.
                  </p>
                  <p className="mb-4">
                    Help us to have the same evangelistic zeal that you showed in bringing 
                    others to Christ. Teach us to be practical in our faith and honest in 
                    our questions, always seeking to understand more deeply the mysteries 
                    of God.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    share the Gospel with others and to invite them to encounter Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Evangelization</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Philip, who brought the Hellenistic Jews to Jesus and preached 
                    the Gospel in Greece, intercede for all those called to evangelization 
                    and cross-cultural ministry.
                  </p>
                  <p>
                    Help them to be bridges between different cultures and communities, 
                    and to share the Gospel with the same practical wisdom and zeal that 
                    characterized your ministry. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Understanding</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Philip, who asked Jesus to show you the Father and who sought 
                    to understand the cost of feeding the multitude, intercede for all 
                    those who have questions about their faith.
                  </p>
                  <p>
                    Help us to bring our questions and concerns to Jesus with the same 
                    honesty and trust that you showed, and to find understanding and 
                    peace in His presence. Through Christ our Lord. Amen."
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
                  Prince of the Apostles and first Pope, also from Bethsaida.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-andrew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Andrew
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. Peter and fellow apostle from Bethsaida.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bartholomew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bartholomew
                </h3>
                <p className="text-gray-700 text-sm">
                  Nathanael, whom Philip brought to Jesus, fellow apostle.
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