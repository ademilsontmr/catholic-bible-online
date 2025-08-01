import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Cecilia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Cecilia, virgin martyr and patron saint of musicians.',
  keywords: [
    'st cecilia',
    'saint cecilia',
    'patron saint of musicians',
    'november 22 feast day',
    'catholic saints',
    'virgin martyr',
    'music'
  ],
  openGraph: {
    title: 'St. Cecilia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Cecilia, virgin martyr and patron saint of musicians.',
    url: 'https://catholicbibleonline.com/saints/st-cecilia',
  },
  twitter: {
    title: 'St. Cecilia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Cecilia, virgin martyr and patron saint of musicians.',
  }
}

export default function StCeciliaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎵</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Cecilia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr and Patron Saint of Musicians
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Cecilia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎵</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Cecilia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Cecilia was a Roman noblewoman who lived during the early third century, 
                during the reign of the Emperor Alexander Severus. She was born into a wealthy 
                Christian family and was raised in the faith from an early age. Cecilia was 
                known for her exceptional beauty, intelligence, and musical talent. She was 
                particularly skilled in playing the organ and singing, and she used her musical 
                gifts to praise God and inspire others in their faith. Even as a young woman, 
                she had made a vow of virginity, dedicating her life entirely to Christ.
              </p>
              
              <p className="mb-6">
                Despite her vow of virginity, Cecilia's parents arranged for her to marry 
                a young pagan nobleman named Valerian. On the day of her wedding, as the 
                musicians played and the guests celebrated, Cecilia sat apart, singing in 
                her heart to God and praying for His guidance. She told Valerian that she 
                had an angel of God watching over her, and that if he touched her, the angel 
                would be angry. She also told him that if he would believe in Christ and 
                be baptized, he would be able to see the angel. Valerian was intrigued by 
                her words and agreed to be baptized.
              </p>
              
              <p className="mb-6">
                After his baptism, Valerian returned to Cecilia and saw an angel standing 
                beside her, holding two crowns of roses and lilies. The angel placed one 
                crown on Cecilia's head and the other on Valerian's, telling them that 
                these crowns would never fade and that they should keep their virginity 
                pure. Valerian was so moved by this vision that he converted his brother 
                Tiburtius to Christianity as well. Together, the three of them worked to 
                help the poor and bury the bodies of Christian martyrs, which was illegal 
                at the time.
              </p>
              
              <p className="mb-6">
                Their charitable works eventually came to the attention of the Roman authorities, 
                and both Valerian and Tiburtius were arrested and executed for their faith. 
                Cecilia was then brought before the Roman prefect, who tried to persuade 
                her to renounce her Christianity and worship the Roman gods. When she refused, 
                he ordered her to be suffocated in her own bathroom by the steam from hot 
                baths. However, Cecilia remained unharmed, singing praises to God throughout 
                the ordeal. The prefect then ordered her to be beheaded, but the executioner 
                struck her neck three times without being able to sever her head completely.
              </p>
              
              <p>
                Cecilia lived for three more days, during which time she continued to preach 
                the Gospel and convert many people to Christianity. She distributed all her 
                wealth to the poor and arranged for her house to be converted into a church. 
                According to tradition, Cecilia died on November 22, around the year 230 A.D. 
                She was buried in the Catacombs of St. Callistus, and her tomb became a 
                place of pilgrimage for early Christians. Her relics were later moved to 
                the church of St. Cecilia in Trastevere, Rome, which was built over her 
                house. The church still contains her remains and is a popular site for 
                pilgrims and musicians.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Cecilia: Patron of Music and the Arts</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Musicians and the Arts</h3>
              <p className="mb-6">
                St. Cecilia's greatest legacy is her role as the patron saint of musicians, 
                singers, and all those involved in the musical arts. Her association with 
                music comes from the tradition that she sang to God in her heart during 
                her wedding celebration, and that she continued to sing praises to God 
                even during her martyrdom. This connection has made her a powerful symbol 
                of the spiritual power of music and its ability to lift the soul to God. 
                Musicians throughout the centuries have sought her intercession for inspiration, 
                skill, and the ability to use their talents to glorify God and touch the 
                hearts of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Faith and Courage</h3>
              <p className="mb-6">
                St. Cecilia's courage in the face of persecution and her unwavering commitment 
                to her faith serve as an inspiration to Christians of all ages. Her willingness 
                to sacrifice everything for her faith, including her life, demonstrates the 
                depth of her love for Christ. The miracles associated with her martyrdom - 
                her survival of the steam bath and the executioner's inability to behead 
                her completely - show that God protects those who remain faithful to Him. 
                Her story teaches us that true strength comes from faith and that God gives 
                us the courage to face any challenge when we trust in Him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Purity and Devotion</h3>
              <p>
                St. Cecilia's vow of virginity and her commitment to remain pure for Christ 
                have made her a powerful symbol of chastity and spiritual devotion. Her 
                story of the angel appearing to her and Valerian, placing crowns of roses 
                and lilies on their heads, symbolizes the spiritual rewards that come from 
                living a life of purity and devotion to God. St. Cecilia's legacy encourages 
                us to use our talents and gifts to serve God and others, to remain faithful 
                to our commitments, and to trust in God's protection and guidance in all 
                circumstances. She shows us that music and the arts can be powerful tools 
                for evangelization and spiritual growth.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">November 22</div>
              <p className="text-gray-600">Feast of St. Cecilia</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Cecilia is celebrated on November 22nd, during the autumn 
                season when the Church reflects on the themes of thanksgiving and the harvest 
                of souls. This feast is celebrated as a memorial in the Roman Catholic Church, 
                and it provides an opportunity to honor the memory of this courageous martyr 
                and to reflect on the importance of using our talents to glorify God. The 
                feast falls during a time when many people are preparing for the Advent 
                season, making it an ideal time to reflect on how we can use our gifts 
                to prepare our hearts for the coming of Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Cecilia, many people participate in special prayers 
                and devotions to honor her memory and seek her intercession. Churches 
                may hold special Masses or prayer services focused on the themes of music, 
                the arts, and courage in faith. Many musical organizations, choirs, and 
                orchestras hold special concerts or performances in her honor. The day 
                is also marked by prayers for musicians, artists, and all those who use 
                their creative talents to serve God and others. Many people also reflect 
                on how they can use their own gifts and talents to glorify God and help 
                others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of using our talents 
                to serve God and for the courage to stand firm in our faith. Many people 
                make special petitions for musicians and artists, asking for St. Cecilia's 
                intercession in helping them to use their gifts to glorify God and touch 
                the hearts of others. The day is also a time to reflect on the importance 
                of music and the arts in our spiritual lives and to pray for the strength 
                to be courageous witnesses to Christ in all that we do. St. Cecilia's 
                feast day encourages us to remember that we are all called to use our 
                gifts to serve God and others.
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
                  <li>• <strong>Musicians:</strong> Patron of all musicians</li>
                  <li>• <strong>Singers:</strong> Patron of vocalists</li>
                  <li>• <strong>Poets:</strong> Patron of poetry and literature</li>
                  <li>• <strong>Church Music:</strong> Patron of liturgical music</li>
                  <li>• <strong>Organists:</strong> Patron of organ players</li>
                  <li>• <strong>Composers:</strong> Patron of music composition</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Inspiration:</strong> Helper for creative inspiration</li>
                  <li>• <strong>Protection:</strong> Guardian of artists and musicians</li>
                  <li>• <strong>Courage:</strong> Patron of bravery in faith</li>
                  <li>• <strong>Purity:</strong> Helper in maintaining chastity</li>
                  <li>• <strong>Faith:</strong> Patron of unwavering devotion</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Cecilia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Cecilia, you who sang to God in your heart and used your musical 
                    talents to glorify Him, help me to use my gifts and talents to serve 
                    God and others.
                  </p>
                  <p className="mb-4">
                    Teach me to be courageous in my faith and to stand firm in my beliefs 
                    even when faced with opposition. Help me to remain pure of heart and 
                    to dedicate my life to Christ.
                  </p>
                  <p>
                    St. Cecilia, pray for me that I may have the inspiration to use my 
                    talents for God's glory and the courage to be a witness to Christ 
                    in all that I do. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Musicians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Cecilia, patron saint of musicians and the arts, intercede for 
                    all those who use their musical talents to serve God and others.
                  </p>
                  <p>
                    Help them to be inspired in their work, to use their gifts to glorify 
                    God, and to touch the hearts of others through their music. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Cecilia, pray for us!"
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of the blind.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-david" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. David
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of Wales and musicians.
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