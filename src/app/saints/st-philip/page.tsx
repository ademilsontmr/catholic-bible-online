import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Philip - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Philip, the apostle who brought Nathanael to Christ.',
  keywords: [
    'st philip',
    'saint philip',
    'apostle philip',
    'st philip biography',
    'st philip feast day',
    'st philip patron saint',
    'twelve apostles',
    'catholic saints',
    'may 3 feast day'
  ],
  openGraph: {
    title: 'St. Philip - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip, the apostle who brought Nathanael to Christ.',
    url: 'https://catholicbibleonline.com/saints/st-philip',
  },
  twitter: {
    title: 'St. Philip - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip, the apostle who brought Nathanael to Christ.',
  }
}

export default function StPhilipPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Philip
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle Who Brought Nathanael to Christ
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
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Philip</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Philip was a Galilean who became one of the twelve apostles chosen 
                by Jesus Christ. He is remembered for his important role in bringing 
                Nathanael (also known as Bartholomew) to Christ, demonstrating his 
                missionary zeal and his desire to share the Good News with others.
              </p>
              
              <p className="mb-6">
                According to the Gospel of John, Philip was from Bethsaida, the same 
                town as Andrew and Peter. When Jesus found Philip, He said to him, 
                "Follow me." Philip immediately responded to this call and became 
                a disciple of Christ. His immediate response to Jesus' invitation 
                shows his openness to God's call and his willingness to leave everything 
                behind to follow the Lord.
              </p>
              
              <p className="mb-6">
                One of the most significant moments in St. Philip's life occurred 
                when he found Nathanael and told him, "We have found the one about 
                whom Moses wrote in the law, and also the prophets, Jesus son of 
                Joseph, from Nazareth." When Nathanael expressed doubt, saying, "Can 
                anything good come from Nazareth?" Philip simply replied, "Come and 
                see." This simple invitation led Nathanael to encounter Christ and 
                become one of the apostles.
              </p>
              
              <p className="mb-6">
                St. Philip appears in several important moments in the Gospels. During 
                the miracle of the multiplication of the loaves and fishes, Jesus 
                tested Philip by asking him where they could buy bread to feed the 
                crowd. Philip responded with practical concern about the cost, showing 
                his human nature and the challenges of faith.
              </p>
              
              <p className="mb-6">
                At the Last Supper, Philip asked Jesus to show the Father to the 
                disciples, saying, "Master, show us the Father, and that will be 
                enough for us." Jesus responded with the profound teaching, "Whoever 
                has seen me has seen the Father." This exchange reveals Philip's 
                desire for deeper understanding and Jesus' revelation of His divine 
                nature.
              </p>
              
              <p>
                After the Resurrection and Ascension of Jesus, St. Philip preached 
                the Gospel in Phrygia, a region in Asia Minor. According to tradition, 
                he suffered martyrdom there, giving his life for the faith. His preaching 
                focused on the cross of Christ, which became the central theme of 
                his missionary work and the symbol associated with him.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Philip: Apostle of Evangelization</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Evangelization</h3>
              <p className="mb-6">
                St. Philip's most enduring legacy is his role as a model of evangelization. 
                His simple invitation to Nathanael, "Come and see," demonstrates the 
                most effective approach to sharing the faith. Rather than engaging 
                in complex arguments or trying to convince Nathanael with words, 
                Philip invited him to a personal encounter with Christ. This approach 
                teaches us that evangelization is not about winning arguments but 
                about introducing others to Jesus.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Immediate Response to God's Call</h3>
              <p className="mb-6">
                St. Philip's immediate response to Jesus' invitation, "Follow me," 
                shows his openness to God's call and his willingness to leave everything 
                behind. His example teaches us the importance of being ready to respond 
                to God's call and the willingness to make the necessary sacrifices 
                to follow Christ. Philip's response reminds us that discipleship 
                requires both hearing and acting on God's word.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Seeker of Understanding</h3>
              <p className="mb-6">
                St. Philip's question at the Last Supper, "Show us the Father," reveals 
                his desire for deeper understanding and his honest seeking of truth. 
                His willingness to ask questions and his desire for clarity demonstrate 
                that faith and reason are not opposed but complementary. Philip's 
                example encourages us to ask questions about our faith and to seek 
                deeper understanding of God's mysteries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Preacher of the Cross</h3>
              <p>
                St. Philip's missionary work in Phrygia focused on the cross of Christ, 
                which became the central theme of his preaching. His emphasis on 
                the cross demonstrates his understanding that the crucifixion is 
                the central mystery of our faith and the source of our salvation. 
                Philip's legacy teaches us that all Christian preaching must be centered 
                on Christ crucified and that the cross is the ultimate sign of God's 
                love for humanity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">May 3</div>
              <p className="text-gray-600">Feast of St. Philip</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Philip is celebrated on May 3rd, commemorating 
                the day of his martyrdom. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing his importance as one of 
                the twelve apostles and his role in bringing others to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Philip, many people pray for the gift of 
                evangelization and the courage to invite others to encounter Christ. 
                Churches may hold special services focusing on the importance of 
                sharing the faith and the power of personal witness. Many also pray 
                for missionaries and for the spread of the Gospel throughout the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of evangelization, 
                for the courage to invite others to "come and see" Christ, and for 
                the grace to be effective witnesses of the Gospel. Many also pray 
                for missionaries and for all those engaged in spreading the Good 
                News, asking for St. Philip's intercession in their work.
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
                  <li>• <strong>Hatters:</strong> Patron of hatmakers</li>
                  <li>• <strong>Pastry Chefs:</strong> Patron of pastry chefs</li>
                  <li>• <strong>Merchants:</strong> Patron of merchants</li>
                  <li>• <strong>Luxembourg:</strong> Patron of Luxembourg</li>
                  <li>• <strong>Uruguay:</strong> Patron of Uruguay</li>
                  <li>• <strong>Evangelization:</strong> Patron of evangelization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Help in sharing the faith</li>
                  <li>• <strong>Invitation:</strong> Courage to invite others to Christ</li>
                  <li>• <strong>Understanding:</strong> Grace to seek deeper knowledge</li>
                  <li>• <strong>Missionary Work:</strong> Success in spreading the Gospel</li>
                  <li>• <strong>Personal Witness:</strong> Strength to be a good example</li>
                  <li>• <strong>Cross-centered Life:</strong> Focus on Christ crucified</li>
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
                    "O St. Philip, apostle of Christ who immediately responded to 
                    Jesus' call and who brought Nathanael to Him with the simple 
                    invitation 'Come and see,' intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were a model of evangelization and who showed us that 
                    sharing the faith begins with a personal invitation, help us 
                    to have the courage to invite others to encounter Christ. Teach 
                    us to say 'Come and see' to those who are seeking truth and meaning.
                  </p>
                  <p className="mb-4">
                    You who preached the cross of Christ in Phrygia and who gave 
                    your life as a martyr for the faith, help us to keep the cross 
                    at the center of our lives and to be willing to make sacrifices 
                    for our faith.
                  </p>
                  <p>
                    St. Philip, pray for us that we may be effective witnesses of 
                    Christ and that we may have the courage to invite others to 
                    'come and see' the Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Evangelization</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Philip, patron of evangelization, intercede for all those 
                    who are called to share the Gospel with others.
                  </p>
                  <p>
                    Help them to have the same simple and effective approach that 
                    you showed when you invited Nathanael to 'come and see' Christ. 
                    Give them the courage to invite others to encounter Jesus and 
                    the wisdom to know how to share their faith effectively. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Philip, pray for us!"
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
            <Link href="/saints/st-bartholomew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bartholomew
                </h3>
                <p className="text-gray-700 text-sm">
                  Nathanael, brought to Christ by St. Philip.
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
                  Prince of the Apostles and fellow Galilean.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-andrew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Andrew
                </h3>
                <p className="text-gray-700 text-sm">
                  First-called apostle and fellow evangelizer.
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