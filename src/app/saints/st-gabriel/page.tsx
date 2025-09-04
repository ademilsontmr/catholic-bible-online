import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gabriel - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gabriel, Archangel of communication.',
  keywords: [
    'st gabriel',
    'saint gabriel',
    'archangel gabriel',
    'september 29 feast day',
    'catholic saints',
    'archangel saints',
    'patron of communications'
  ],
  openGraph: {
    title: 'St. Gabriel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gabriel, Archangel of communication.',
    url: 'https://catholicbibleonline.com/saints/st-gabriel',
  },
  twitter: {
    title: 'St. Gabriel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gabriel, Archangel of communication.',
  }
}

export default function StGabrielPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📢</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gabriel
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Archangel of Communication and Messenger of God
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gabriel</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📢</div>
              <div className="text-sm text-gray-600">Archangel Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gabriel</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Gabriel is one of the seven Archangels who stand before the throne 
                of the Lord, and one of the three archangels mentioned by name in the 
                Bible. His name means "God is my strength" or "God has shown himself 
                mighty." Gabriel appears in both the Old and New Testaments, serving 
                as God's messenger for some of the most important announcements in 
                salvation history. In the Old Testament, Gabriel appears to the prophet 
                Daniel to explain visions and prophecies, helping him understand the 
                divine plan for Israel and the coming of the Messiah. Gabriel's role 
                as a messenger and interpreter of God's will is established in these 
                early appearances, where he helps Daniel understand complex prophetic 
                messages about the future of God's people.
              </p>
              
              <p className="mb-6">
                Gabriel's most famous appearances occur in the New Testament, where 
                he serves as the messenger of the Annunciation. In the Gospel of Luke, 
                Gabriel appears to the priest Zechariah in the Temple to announce that 
                his wife Elizabeth, who was barren and advanced in years, would conceive 
                and bear a son who would be called John. Gabriel tells Zechariah that 
                this child would be great before the Lord and would go before the Lord 
                in the spirit and power of Elijah. When Zechariah questions how this 
                could happen, Gabriel identifies himself as "Gabriel, who stand in the 
                presence of God" and strikes Zechariah mute for his lack of faith. 
                Six months later, Gabriel appears to the Virgin Mary in Nazareth to 
                announce that she would conceive and bear a son who would be called 
                Jesus, the Son of the Most High.
              </p>
              
              <p>
                Gabriel's message to Mary, known as the Annunciation, is one of the 
                most important moments in salvation history. He greets Mary with the 
                words "Hail, full of grace, the Lord is with you" and explains that 
                she will conceive by the power of the Holy Spirit. When Mary asks how 
                this can be, Gabriel responds with the famous words "For nothing will 
                be impossible with God." Gabriel's role in these pivotal moments of 
                salvation history demonstrates his importance as God's messenger and 
                his special relationship with the Blessed Virgin Mary. St. Gabriel 
                is the patron saint of communications, messengers, postal workers, 
                and all those who work in the field of communication. His feast day 
                is celebrated on September 29, along with St. Michael and St. Raphael, 
                the other archangels mentioned by name in Scripture.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gabriel: Messenger of God</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Archangel of Communication</h3>
              <p className="mb-6">
                St. Gabriel's most enduring legacy is his role as the Archangel of 
                Communication and God's primary messenger for the most important announcements 
                in salvation history. His appearances to Daniel, Zechariah, and Mary 
                demonstrate his unique role in bringing God's messages to humanity. 
                Gabriel's ability to communicate God's will clearly and effectively 
                has made him the patron saint of all forms of communication, from 
                traditional messengers to modern telecommunications workers. His example 
                teaches us the importance of clear, honest communication and the power 
                of words to bring about God's will. Gabriel's legacy reminds us that 
                communication is a sacred gift that should be used to bring truth, 
                hope, and God's love to others. His role in the Annunciation shows 
                us that even the most ordinary conversations can be transformed by 
                God's grace into moments of divine revelation and salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Blessed Virgin Mary</h3>
              <p className="mb-6">
                St. Gabriel's special relationship with the Blessed Virgin Mary through 
                the Annunciation has made him a beloved figure in Marian devotion. 
                His respectful and reverent approach to Mary, addressing her as "full 
                of grace," demonstrates the proper way to honor and venerate the Mother 
                of God. Gabriel's role in the Incarnation makes him a powerful intercessor 
                for those who seek to deepen their relationship with Mary and to understand 
                the mysteries of the Incarnation. His example encourages us to approach 
                Mary with the same reverence and love that he showed, recognizing her 
                unique role in salvation history. Gabriel's legacy reminds us that 
                Mary is the perfect model of faith and obedience to God's will, and 
                that through her intercession, we can grow closer to her Son, Jesus Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faithful Service</h3>
              <p>
                St. Gabriel's faithful service as God's messenger demonstrates the 
                importance of obedience and trust in God's plan. His willingness to 
                carry out God's commands, even when they involve delivering difficult 
                or surprising messages, shows his complete trust in God's wisdom and 
                love. Gabriel's example teaches us that true service to God requires 
                humility, obedience, and a willingness to be used as instruments of 
                His will. His role in the great events of salvation history reminds 
                us that God often works through His angels and saints to accomplish 
                His purposes. Gabriel's legacy encourages us to be open to God's call 
                in our own lives and to trust that He will provide us with the strength 
                and guidance we need to fulfill His will. His faithful service reminds 
                us that every act of obedience to God, no matter how small, has eternal 
                value and contributes to the building of God's kingdom.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">September 29</div>
              <p className="text-gray-600">Feast of St. Gabriel</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gabriel is celebrated on September 29th, along with 
                St. Michael and St. Raphael, during the autumn season when the Church 
                reflects on the themes of harvest and thanksgiving. This feast is celebrated 
                as a memorial in the Roman Catholic Church, recognizing Gabriel's importance 
                as an archangel and his crucial role in the events of salvation history. 
                The feast falls during a time when many people are beginning new projects 
                or communications, making it an ideal time to remember Gabriel's role 
                as a messenger and to seek his intercession for clear communication 
                and understanding. The feast provides an opportunity to honor Gabriel's 
                memory and to reflect on the importance of communication in our spiritual 
                lives and relationships.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Gabriel, many people participate in special 
                prayers and devotions to honor his memory and seek his intercession. 
                Churches hold special Masses and services, particularly those with 
                connections to communication ministries or Marian devotion. Many people 
                gather to pray for clear communication and understanding, asking for 
                St. Gabriel's intercession in helping them to communicate effectively 
                and truthfully. The day is also marked by prayers for those who work 
                in communication fields, asking for St. Gabriel's protection and guidance. 
                Many people also take time to reflect on their own communication skills 
                and to pray for the grace to speak truthfully and lovingly. The feast 
                is also a time to reflect on how we can incorporate Gabriel's virtues 
                of faithful service and clear communication into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of clear communication 
                and the ability to understand and convey God's will in our lives. Many 
                people make special petitions for those who work in communication fields, 
                asking for St. Gabriel's intercession in helping them to communicate 
                effectively and truthfully. The day is also a time to reflect on the 
                importance of listening to God's voice and to pray for the grace to 
                be open to His messages. St. Gabriel's feast day encourages us to remember 
                that we are all called to be messengers of God's love and truth and 
                that clear communication is essential for building relationships and 
                spreading the Gospel. It is also a time to pray for the grace to be 
                faithful servants of God and to trust in His plan for our lives. The 
                feast reminds us that every word we speak can be an instrument of God's 
                love and that we should use our gift of communication to bring hope 
                and truth to others.
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
                  <li>• <strong>Communications:</strong> Patron of communications</li>
                  <li>• <strong>Messengers:</strong> Patron of messengers</li>
                  <li>• <strong>Postal Workers:</strong> Patron of postal workers</li>
                  <li>• <strong>Telecommunications:</strong> Patron of telecommunications</li>
                  <li>• <strong>Broadcasting:</strong> Patron of broadcasting</li>
                  <li>• <strong>Journalists:</strong> Patron of journalists</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Understanding:</strong> Patron of understanding</li>
                  <li>• <strong>Truth:</strong> Helper in speaking truth</li>
                  <li>• <strong>Revelation:</strong> Patron of divine revelation</li>
                  <li>• <strong>Annunciation:</strong> Helper with important announcements</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gabriel</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Gabriel, Archangel of communication, help me to speak 
                    truthfully and lovingly in all my interactions with others.
                  </p>
                  <p className="mb-4">
                    Teach me to listen carefully to God's voice and to be open to 
                    His messages in my life. Help me to communicate God's love and 
                    truth to those around me.
                  </p>
                  <p>
                    St. Gabriel, pray for me that I may have the clarity to understand 
                    God's will, the courage to speak the truth, and the grace to be 
                    a faithful messenger of God's love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Communication</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Gabriel, patron of communications and messengers, intercede 
                    for all those who work in communication fields.
                  </p>
                  <p>
                    Help them to communicate truthfully and effectively, and guide 
                    them in using their gifts for the glory of God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Gabriel, pray for us!"
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
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Archangel Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the heavenly host and defender of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-raphael" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Archangel Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Raphael
                </h3>
                <p className="text-gray-700 text-sm">
                  Archangel of healing and patron of travelers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary-virgin" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary the Virgin
                </h3>
                <p className="text-gray-700 text-sm">
                  Blessed Virgin Mary, to whom Gabriel announced the Incarnation.
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