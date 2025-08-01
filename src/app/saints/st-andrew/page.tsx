import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Andrew - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Andrew, Apostle and patron of Scotland.',
  keywords: [
    'st andrew',
    'saint andrew',
    'andrew the apostle',
    'november 30 feast day',
    'catholic saints',
    'apostle saints',
    'patron of scotland'
  ],
  openGraph: {
    title: 'St. Andrew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Andrew, Apostle and patron of Scotland.',
    url: 'https://catholicbibleonline.com/saints/st-andrew',
  },
  twitter: {
    title: 'St. Andrew - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Andrew, Apostle and patron of Scotland.',
  }
}

export default function StAndrewPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎣</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Andrew
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle and First-Called Disciple
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Andrew</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 30</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎣</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Andrew</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Andrew, also known as Andrew the Apostle, was a Christian Apostle 
                and the older brother to St. Peter. According to the New Testament, 
                Andrew was born in the village of Bethsaida on the Sea of Galilee 
                during the early first century. Much like his younger brother, Simon 
                Peter, Andrew was also a fisherman. Andrew's very name means strong 
                and he was known for having good social skills. In the Gospel of Matthew, 
                it is said Jesus was walking along the shore of the Sea of Galilee 
                and saw Andrew and Simon Peter fishing. It is then he asked the two 
                to become disciples and "fishers of men."
              </p>
              
              <p className="mb-6">
                In the Gospel of Luke, Andrew is not initially named. It describes 
                Jesus using a boat, believed to be solely Simon's, to preach to 
                the multitudes and catch a large amount of fish on a night that 
                originally was dry. Later, in Luke 5:7, it mentions Simon was not 
                the only fisherman on the boat, but it is not until Luke 6:14 that 
                there is talk of Andrew being Simon Peter's brother. However, the 
                Gospel of John tells a separate story, stating Andrew was a disciple 
                of John the Baptist. When Jesus walked by one day, John the Baptist 
                stated, "Behold, the Lamb of God!" It is then that Andrew and another 
                made the decision to follow Jesus.
              </p>
              
              <p className="mb-6">
                Little else is said about Andrew in the Gospels, but it is believed 
                Andrew was one of the closer disciples to Jesus. It was he who told 
                Jesus about the boy with the loaves and fishes, according to John 
                6:8. When Philip wanted to speak to Jesus about Greeks seeking him, 
                he spoke to Andrew first. Andrew was also present at the last supper. 
                Per Christian tradition, Andrew went on to preach the Good News around 
                the shores of the Black Sea and throughout what is now Greece and 
                Turkey. Andrew was martyred by crucifixion in Patras. He was bound, 
                rather than nailed, to a cross, as is described in the Acts of Andrew. 
                He was crucified on a cross form known as "crux decussata," which 
                is an X-shaped cross or a "saltire." Today this is commonly referred 
                to as "St. Andrew's Cross." It is believed Andrew requested to be 
                crucified this way, because he deemed himself "unworthy to be crucified 
                on the same type of cross as Jesus."
              </p>
              
              <p>
                Andrew's remains were originally preserved at Patras. However, some 
                believe St. Regulus, who was a monk at Patras, received a vision 
                telling him to hide some of Andrew's bones. Shortly after Regulus' 
                dream, many of Andrew's relics were transferred to Constantinople 
                by order of Roman emperor Constantius II around 357. Regulus later 
                received orders in a second dream telling him to take the bones 
                "to the ends of the earth." He was to build a shrine for them wherever 
                he shipwrecked. He landed on the coat of Fife, Scotland. In September 
                1964, Pope Paul VI had all of St. Andrew's relics that ended up 
                in Vatican City sent back to Patras. Now, many of Andrew's relics 
                and the cross on which he was martyred are kept in the Church of 
                St. Andrew in Patras. St. Andrew is venerated in Georgia as the 
                first preacher of Christianity in that territory and in Cyprus 
                for having struck the rocks creating a gush of healing waters upon 
                landing on the shore. His saltire cross is featured on the flag 
                of Scotland and is represented in much of his iconography. He is 
                commonly portrayed as an old man with long white hair and a beard, 
                often holding the Gospel book or a scroll.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Andrew: First-Called Apostle</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First-Called Disciple</h3>
              <p className="mb-6">
                St. Andrew's most enduring legacy is his role as the "First-Called" 
                disciple, the first to be called by Jesus and the first to bring 
                others to Christ. According to the Gospel of John, Andrew was originally 
                a disciple of John the Baptist, and when he heard John proclaim 
                Jesus as the "Lamb of God," he immediately followed Jesus and then 
                brought his brother Simon Peter to meet the Lord. This makes Andrew 
                not only the first disciple but also the first evangelist, as he 
                was the first to bring another person to Christ. Andrew's legacy 
                reminds us that we are all called to be witnesses to Christ and 
                to bring others to Him. His example teaches us that evangelization 
                often begins with personal encounter and that we should be ready 
                to share our faith with those closest to us. Andrew's story challenges 
                us to ask ourselves whether we are actively bringing others to Christ 
                and whether we are responding immediately when God calls us to follow 
                Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Service</h3>
              <p className="mb-6">
                St. Andrew's humility and willingness to serve others make him 
                a powerful example of Christian discipleship. Despite being one 
                of the first disciples and the brother of Peter, who would become 
                the leader of the Apostles, Andrew never sought prominence or recognition. 
                Instead, he served quietly and faithfully, often acting as a bridge 
                between others and Jesus. When Philip wanted to speak to Jesus 
                about the Greeks, he went to Andrew first, knowing that Andrew 
                would help facilitate the meeting. Andrew's legacy teaches us that 
                true greatness in the Kingdom of God comes not from seeking recognition 
                or power, but from serving others and helping them to encounter 
                Christ. His example challenges us to examine our own motives and 
                to ask ourselves whether we are serving for God's glory or for 
                our own recognition. Andrew's story also reminds us that every 
                role in the Church is important and that we should be content 
                to serve wherever God has placed us.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Nations</h3>
              <p>
                St. Andrew's widespread veneration as the patron saint of multiple 
                nations and regions demonstrates his universal appeal and the far-reaching 
                impact of his missionary work. As the patron of Scotland, Russia, 
                Ukraine, Romania, and other nations, Andrew serves as a reminder 
                that the Gospel transcends national and cultural boundaries. His 
                missionary journeys around the Black Sea and throughout Greece 
                and Turkey show his commitment to spreading the Good News to all 
                people. Andrew's legacy teaches us that Christianity is not limited 
                to any particular culture or region, but is meant for all people 
                of all nations. His example encourages us to be open to sharing 
                our faith with people from different backgrounds and cultures, 
                and to recognize that the Gospel has the power to transform any 
                society or culture. Andrew's widespread patronage also reminds 
                us that the Church is truly catholic, embracing all people and 
                all nations in the love of Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 30</div>
              <p className="text-gray-600">Feast of St. Andrew</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Andrew is celebrated on November 30th, during 
                the autumn season when the Church reflects on the themes of harvest 
                and thanksgiving. This feast is celebrated as a solemnity in the 
                Roman Catholic Church, recognizing Andrew's importance as one of 
                the Twelve Apostles and the first-called disciple. The feast falls 
                during a time when many people are preparing for the Advent season, 
                making it an ideal time to remember Andrew's role in preparing 
                the way for Christ and bringing others to Him. The feast provides 
                an opportunity to honor Andrew's memory and to reflect on how we 
                can be better witnesses to Christ in our own lives. It is also 
                a time to pray for the nations that claim Andrew as their patron 
                saint, particularly Scotland, Russia, Ukraine, and Romania, asking 
                for his intercession in helping them to remain faithful to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Andrew, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those with connections to Scotland or other 
                nations that claim Andrew as their patron, hold special Masses 
                and services. Many people gather to pray for the nations under 
                Andrew's patronage, asking for his intercession in helping them 
                to remain faithful to Christ and to spread the Gospel. The day 
                is also marked by prayers for fishermen and all those who work 
                on the sea, asking for Andrew's protection and guidance. Many people 
                also take time to reflect on their own role as witnesses to Christ 
                and to pray for the grace to bring others to Him, following Andrew's 
                example of evangelization. The feast is also a time to reflect 
                on how we can be more humble and service-oriented in our own lives, 
                following Andrew's example of quiet faithfulness and service to others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of evangelization 
                and the ability to bring others to Christ. Many people make special 
                petitions for the nations under Andrew's patronage, asking for 
                his intercession in helping them to remain faithful to Christ 
                and to spread the Gospel. The day is also a time to reflect on 
                the importance of being witnesses to Christ and to pray for the 
                grace to share our faith with others. St. Andrew's feast day encourages 
                us to remember that we are all called to be "fishers of men" and 
                to bring others to Christ through our words and actions. It is 
                also a time to pray for the grace to be humble and service-oriented, 
                following Andrew's example of quiet faithfulness and dedication 
                to serving others. The feast reminds us that true discipleship 
                involves not just following Christ ourselves, but helping others 
                to encounter Him as well.
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
                  <li>• <strong>Scotland:</strong> Patron of Scotland</li>
                  <li>• <strong>Fishermen:</strong> Patron of fishermen</li>
                  <li>• <strong>Singers:</strong> Patron of singers</li>
                  <li>• <strong>Russia:</strong> Patron of Russia</li>
                  <li>• <strong>Ukraine:</strong> Patron of Ukraine</li>
                  <li>• <strong>Romania:</strong> Patron of Romania</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Evangelization:</strong> Helper in spreading the Gospel</li>
                  <li>• <strong>Humility:</strong> Patron of humility</li>
                  <li>• <strong>Service:</strong> Helper in serving others</li>
                  <li>• <strong>Protection:</strong> Patron of protection</li>
                  <li>• <strong>Unity:</strong> Helper in Christian unity</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Andrew</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Andrew, first-called Apostle and patron of Scotland, 
                    help me to be a faithful witness to Christ in my daily life.
                  </p>
                  <p className="mb-4">
                    Teach me to be humble and service-oriented, and guide me in 
                    bringing others to Christ through my words and actions. Help 
                    me to respond immediately when God calls me to follow Him.
                  </p>
                  <p>
                    St. Andrew, pray for me that I may have the courage to be 
                    a fisher of men, the humility to serve others, and the faith 
                    to trust in God's call. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Evangelization</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Andrew, first-called disciple and evangelist, intercede 
                    for all those who work to spread the Gospel.
                  </p>
                  <p>
                    Help us to be faithful witnesses to Christ and to bring others 
                    to Him through our love and service. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Andrew, pray for us!"
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
                  Brother of St. Andrew and first Pope of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-baptist" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John the Baptist
                </h3>
                <p className="text-gray-700 text-sm">
                  First teacher of St. Andrew and forerunner of Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philip" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip
                </h3>
                <p className="text-gray-700 text-sm">
                  Fellow Apostle who worked closely with St. Andrew.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/saints"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 