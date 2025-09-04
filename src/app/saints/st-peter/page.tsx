import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Peter - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Peter, first Pope and Prince of the Apostles.',
  keywords: [
    'st peter',
    'saint peter',
    'pope peter',
    'june 29 feast day',
    'catholic saints',
    'apostle saints',
    'patron of fishermen'
  ],
  openGraph: {
    title: 'St. Peter - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peter, first Pope and Prince of the Apostles.',
    url: 'https://catholicbibleonline.com/saints/st-peter',
  },
  twitter: {
    title: 'St. Peter - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peter, first Pope and Prince of the Apostles.',
  }
}

export default function StPeterPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🗝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Peter
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Pope and Prince of the Apostles
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Peter</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🗝️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Peter</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Peter, who was also known as Simon Peter of Cephas, is considered the 
                first Pope. Despite his papacy, Peter had humble beginnings and became 
                one of the Twelve Apostles of Jesus. He was ordained by Jesus in the 
                "Rock of My Church" written in Matthew 16:17-18, which says, "Jesus 
                replied, 'Simon son of Jonah, you are a blessed man! Because it was 
                no human agency that revealed this to you but my Father in heaven. 
                So I now say to you: You are Peter and on this rock I will build my 
                community. And the gates of the underworld can never overpower it.'" 
                Peter was a native of Bethsaida, near Lake Tiberias and was the son 
                of Jonah. He and his brother Andrew were fishermen on Lake Genesareth. 
                The Bible chronicles when the brothers met Jesus in Luke chapter 5, 
                where Jesus performed the miraculous catch of fish and called them 
                to follow Him, saying "from now on it is people you will be catching."
              </p>
              
              <p className="mb-6">
                Just like that, Peter followed Jesus and his life was changed forever. 
                Though he was one of the first disciples called to follow Jesus and 
                eventually became the spokesman for the group, Peter is known for his 
                "little faith." In Matthew 14, during the miracle of walking on water, 
                Peter began to walk toward Jesus on the surface of the water, but when 
                he noticed the wind, he began to fear and cried "Lord, save me!" Jesus 
                touched him and said, "You have so little faith, why did you doubt?" 
                This is one of many stories involving Peter and Jesus. Another famous 
                story is Peter's attempt to save Jesus from the soldiers who came to 
                take Him to his doom. As described in John 18:10-12, "Simon Peter, 
                who had a sword, drew it and struck the high priest's servant, cutting 
                off his right ear. The servant's name was Malchus. Jesus said to Peter, 
                'Put your sword back in its scabbard; am I not to drink the cup that 
                the Father has given me?'"
              </p>
              
              <p className="mb-6">
                Following the failed attempt to save Jesus, Peter was recorded denying 
                Jesus three times, which The Savior foretold during the Last Supper. 
                His denials were recorded in Mark 14:66-72, where Peter denied knowing 
                Jesus three times before the cock crowed twice, just as Jesus had predicted. 
                Following Christ's crucifixion and resurrection, it was Peter who first 
                entered the empty tomb. It was described in Luke 24:12 that when Peter 
                heard Mary of Magdala, Joanna, and Mary, the mother of James, claim 
                Jesus' tomb was empty, he "went off to the tomb, running. He bent down 
                and looked in and saw the linen cloths but nothing else; he then went 
                back home, amazed at what had happened." 1 Corinthians 15:3-7 describes 
                how Jesus resurrected and appeared before Peter first, showing the 
                special relationship between Christ and His chosen leader.
              </p>
              
              <p className="mb-6">
                Following his resurrection, Christ came before his disciples several 
                times. John 21:12-23 describes an instance when Peter is given three 
                chances to admit his love for Jesus, and each time he says he does. 
                Jesus asked Peter three times "Do you love me?" and each time Peter 
                affirmed his love, Jesus responded with "Feed my lambs," "Look after 
                my sheep," and "Feed my sheep." This threefold affirmation balanced 
                Peter's three previous denials and restored him to his role as leader 
                of the Apostles. Jesus also foretold Peter's martyrdom, saying "when 
                you grow old you will stretch out your hands, and somebody else will 
                put a belt round you and take you where you would rather not go."
              </p>
              
              <p>
                In the time following Christ's Ascension, Peter stood as the unquestionable 
                head of the Apostles, which the book of Acts clearly describes. He went 
                on to appoint the replacement of Judas Iscariot, spoke first to the 
                crowds that had assembled after the descent of the Holy Spirit at Pentecost, 
                he was the first Apostle to perform miracles in the name of the Lord, 
                and he rendered judgment upon the deceitful Ananias and Sapphira. Peter 
                was instrumental in bringing the Gospel to the Gentiles. He baptized 
                the Roman pagan Cornelius, and at the Council of Jerusalem gave his 
                support to preach to Gentiles, thereby permitting the new Church to 
                become universal. According to rich tradition, Peter was crucified 
                on the Vatican Hill upside down because he declared himself unworthy 
                to die in the same manner as the Lord. He was then buried in Rome near 
                the Vatican on Vatican Hill, where St. Peter's Basilica now stands.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Peter: Rock of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">First Pope and Foundation of the Church</h3>
              <p className="mb-6">
                St. Peter's most enduring legacy is his role as the first Pope and 
                the foundation upon which Christ built His Church. Jesus' words to 
                Peter, "You are Peter and on this rock I will build my community," 
                establish the papacy and the hierarchical structure of the Catholic 
                Church. Peter's leadership of the Apostles and his role as the first 
                Bishop of Rome created the foundation for the papal succession that 
                continues to this day. His authority to "bind and loose" on earth 
                and in heaven, given by Christ, established the Church's teaching authority 
                and the power of the keys. Peter's legacy reminds us that the Church 
                is built on the solid foundation of apostolic succession and that 
                the Pope, as the successor of St. Peter, continues to guide the Church 
                with the same authority and love that Peter showed. His example teaches 
                us that leadership in the Church requires humility, courage, and complete 
                trust in God's guidance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Repentance and Restoration</h3>
              <p className="mb-6">
                St. Peter's story of denial and restoration demonstrates God's infinite 
                mercy and the power of repentance. Despite his threefold denial of 
                Christ, Peter was not abandoned by Jesus. Instead, the risen Lord gave 
                Peter three opportunities to affirm his love, mirroring his three denials. 
                This beautiful story of restoration shows that no sin is too great 
                for God's forgiveness and that failure can become the foundation for 
                greater strength and holiness. Peter's tears of repentance after his 
                denial and his subsequent courage in leading the Church demonstrate 
                that true repentance leads to transformation and renewed commitment 
                to God's will. His legacy encourages us to trust in God's mercy, to 
                acknowledge our weaknesses, and to allow God to transform our failures 
                into opportunities for growth and service. Peter's example reminds 
                us that we are all called to be saints, despite our human weaknesses 
                and failures.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Power of Faith</h3>
              <p>
                St. Peter's life demonstrates the transformative power of faith and 
                the importance of trusting in God even when we feel inadequate or afraid. 
                From a simple fisherman to the leader of Christ's Church, Peter's journey 
                shows how God can use ordinary people to accomplish extraordinary things. 
                His willingness to step out of the boat and walk on water, despite 
                his fear, demonstrates the power of faith in action. Even when his 
                faith wavered and he began to sink, Jesus was there to catch him and 
                strengthen him. Peter's example teaches us that faith is not the absence 
                of fear or doubt, but the willingness to trust God despite our fears 
                and doubts. His legacy encourages us to step out in faith, to trust 
                in God's promises, and to allow Him to work through our weaknesses 
                to accomplish His will. Peter's life reminds us that we are all called 
                to be witnesses to Christ's love and that God provides the strength 
                we need to fulfill our mission.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">June 29</div>
              <p className="text-gray-600">Feast of St. Peter and St. Paul</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Peter is celebrated on June 29th, along with St. Paul, 
                during the summer season when the Church reflects on the themes of 
                growth and harvest. This feast is celebrated as a solemnity in the 
                Roman Catholic Church, recognizing the importance of both apostles 
                as the foundation of the Church. The feast falls during a time when 
                many people are enjoying the fruits of their labor and the beauty 
                of creation, making it an ideal time to remember Peter's role in building 
                the Church and spreading the Gospel. The feast provides an opportunity 
                to honor Peter's memory and to reflect on the importance of apostolic 
                succession and the unity of the Church. It is also a time to pray 
                for the Pope and the Church's leadership, asking for St. Peter's intercession 
                in guiding the Church through the challenges of the modern world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Peter, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those dedicated to St. Peter or with connections 
                to the papacy, hold special Masses and services. Many people gather 
                to pray for the Pope and the Church's leadership, asking for St. Peter's 
                intercession in guiding the Church through difficult times. The day 
                is also marked by prayers for unity in the Church and for the spread 
                of the Gospel throughout the world. Many people also take time to 
                reflect on their own role in the Church and to pray for the grace 
                to be faithful witnesses to Christ's love. The feast is also a time 
                to reflect on how we can incorporate Peter's virtues of faith, courage, 
                and repentance into our daily lives. Some people also make pilgrimages 
                to St. Peter's Basilica in Rome or to other churches dedicated to 
                St. Peter.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of faith and 
                the courage to follow Christ even when it is difficult. Many people 
                make special petitions for the Pope and the Church's leadership, asking 
                for St. Peter's intercession in helping them to guide the Church with 
                wisdom and love. The day is also a time to reflect on the importance 
                of unity in the Church and to pray for the grace to work for reconciliation 
                and peace. St. Peter's feast day encourages us to remember that we 
                are all called to be witnesses to Christ's love and that we have a 
                responsibility to build up the Church in our own communities. It is 
                also a time to pray for the grace to acknowledge our weaknesses and 
                to trust in God's mercy and forgiveness. The feast reminds us that 
                we are all part of the one, holy, catholic, and apostolic Church and 
                that we should work together to spread the Gospel and serve those 
                in need.
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
                  <li>• <strong>Fishermen:</strong> Patron of fishermen</li>
                  <li>• <strong>Popes:</strong> Patron of popes</li>
                  <li>• <strong>Rome:</strong> Patron of Rome</li>
                  <li>• <strong>Universal Church:</strong> Patron of the universal Church</li>
                  <li>• <strong>Bakers:</strong> Patron of bakers</li>
                  <li>• <strong>Bridge Builders:</strong> Patron of bridge builders</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Faith:</strong> Patron of faith</li>
                  <li>• <strong>Repentance:</strong> Helper in repentance</li>
                  <li>• <strong>Unity:</strong> Patron of Church unity</li>
                  <li>• <strong>Leadership:</strong> Helper in leadership</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Peter</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Peter, first Pope and Prince of the Apostles, help me to 
                    have the faith and courage to follow Christ in all circumstances.
                  </p>
                  <p className="mb-4">
                    Teach me to trust in God's mercy and forgiveness, and to acknowledge 
                    my weaknesses with humility. Help me to be a faithful witness to 
                    Christ's love and to work for the unity of the Church.
                  </p>
                  <p>
                    St. Peter, pray for me that I may have the strength to carry my 
                    cross, the faith to walk on water, and the love to feed Christ's 
                    sheep. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Church</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Peter, patron of the universal Church and first Pope, intercede 
                    for the Church and all its members.
                  </p>
                  <p>
                    Help us to remain united in faith and love, and guide our leaders 
                    in serving God's people with wisdom and compassion. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Peter, pray for us!"
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
            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle to the Gentiles and co-founder of the Church.
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
                  Peter's brother and first-called apostle.
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
                  Beloved disciple and evangelist.
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