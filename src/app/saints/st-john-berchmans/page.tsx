import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Berchmans - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Berchmans, Jesuit novice known for his holiness and perfection in little things, patron of altar boys.',
  keywords: [
    'st john berchmans',
    'saint john berchmans',
    'john berchmans',
    'st john berchmans biography',
    'st john berchmans feast day',
    'st john berchmans patron saint',
    'catholic saints',
    'november 26 feast day',
    'modern saints',
    'jesuit novice',
    'altar boys',
    'perfection in little things'
  ],
  openGraph: {
    title: 'St. John Berchmans - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Berchmans, Jesuit novice known for his holiness.',
    url: 'https://catholicbibleonline.com/saints/st-john-berchmans',
  },
  twitter: {
    title: 'St. John Berchmans - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Berchmans, Jesuit novice known for his holiness.',
  }
}

export default function StJohnBerchmansPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💙</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Berchmans
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Jesuit Novice, Model of Perfection, Patron of Altar Boys
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Berchmans</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Modern</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Berchmans</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Eldest son of a shoemaker, John was born at Diest, Brabant, into a humble 
                family that valued faith and hard work. From an early age, he demonstrated 
                a deep desire to serve God and a remarkable piety that would characterize 
                his entire life. His simple upbringing in a family of craftsmen would later 
                influence his approach to spirituality, emphasizing the importance of doing 
                ordinary things with extraordinary love.
              </p>
              
              <p className="mb-6">
                John early wanted to be a priest, and when thirteen became a servant in the 
                household of one of the Cathedral canons at Malines, John Froymont. This 
                position allowed him to be close to the Church and to learn about the 
                religious life while serving in a practical way. His time in the canon's 
                household was formative, as it gave him insight into the life of the clergy 
                and strengthened his desire to pursue a religious vocation.
              </p>
              
              <p className="mb-6">
                In 1615, he entered the newly founded Jesuit College at Malines, marking 
                the beginning of his formal education and his journey toward the priesthood. 
                The Jesuit College provided him with a rigorous academic foundation and 
                introduced him to the spirituality and discipline of the Society of Jesus. 
                His time at the college was marked by academic excellence and spiritual growth.
              </p>
              
              <p className="mb-6">
                The following year, John became a Jesuit novice, taking the first step 
                toward full membership in the Society of Jesus. As a novice, he embraced 
                the Jesuit way of life with enthusiasm and dedication, showing particular 
                attention to the spiritual exercises and the daily practices of the order. 
                His novitiate was a time of intense spiritual formation and discernment.
              </p>
              
              <p className="mb-6">
                He was sent to Rome in 1618 to continue his studies, a significant step 
                in his formation as a Jesuit. Rome was the center of the Catholic Church 
                and the headquarters of the Society of Jesus, providing him with the best 
                possible education and spiritual formation. His time in Rome would be the 
                culmination of his religious formation and the setting for his final days.
              </p>
              
              <p className="mb-6">
                In Rome, John was known for his diligence and piety, impressing all with 
                his holiness and stress on perfection in little things. This emphasis on 
                perfection in small matters became his hallmark and the foundation of his 
                spirituality. He believed that holiness was achieved not through grand 
                gestures, but through faithful attention to daily duties and ordinary 
                responsibilities. His approach to spirituality emphasized that every action, 
                no matter how small, could be an opportunity to grow closer to God.
              </p>
              
              <p>
                He died there on August 13, at a young age, but his brief life had already 
                made a profound impact on those around him. His death was marked by the 
                same peace and serenity that had characterized his life. Many miracles were 
                attributed to him after his death, testifying to his holiness and the power 
                of his intercession. He was canonized in 1888, recognizing his sanctity and 
                his importance as a model for young people, particularly altar boys.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Berchmans: Saint of Little Things</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perfection in Little Things</h3>
              <p className="mb-6">
                St. John Berchmans's greatest legacy is his emphasis on achieving holiness 
                through attention to small, everyday matters. His famous saying, "My penance 
                is to live the common life," reflects his belief that sanctity is found in 
                the ordinary rather than the extraordinary. This approach to spirituality 
                has made him a beloved model for people of all ages, especially young people 
                who are learning to serve God in their daily lives. His example teaches us 
                that every action, no matter how small, can be an opportunity to grow in holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Altar Boys</h3>
              <p className="mb-6">
                John Berchmans is the patron saint of altar boys, a fitting role given his 
                own early service in the Church and his dedication to liturgical service. 
                His example inspires young people who serve at the altar to approach their 
                duties with reverence, attention to detail, and a spirit of prayer. His 
                patronage reminds us that serving at Mass is not just a practical task, 
                but a sacred ministry that can help young people grow in their faith and 
                develop a deeper relationship with God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example for Young People</h3>
              <p className="mb-6">
                John's life serves as a powerful example for young people, showing that 
                holiness is achievable at any age and that youth is not an obstacle to 
                spiritual greatness. His dedication to his studies, his faithfulness to 
                prayer, and his commitment to his religious vocation demonstrate that young 
                people can make significant contributions to the Church and can achieve 
                great sanctity. His example encourages young people to take their faith 
                seriously and to pursue holiness with enthusiasm and determination.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Jesuit Spirituality</h3>
              <p className="mb-6">
                As a Jesuit novice, John Berchmans embodied the best qualities of Jesuit 
                spirituality: intellectual rigor, spiritual discipline, and a commitment 
                to serving God in all things. His approach to the spiritual life reflects 
                the Jesuit emphasis on finding God in all things and serving Him through 
                excellence in one's daily duties. His legacy continues to inspire members 
                of the Society of Jesus and all who are drawn to Jesuit spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Humble Origins</h3>
              <p>
                John's story demonstrates that holiness is not limited to those from 
                privileged backgrounds. As the son of a shoemaker, he came from humble 
                origins, yet his simple background became a source of strength rather 
                than an obstacle. His example shows that God calls people from all walks 
                of life to holiness and that one's background does not determine one's 
                spiritual potential. This aspect of his legacy offers hope and encouragement 
                to people from all social and economic backgrounds.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 26</div>
              <p className="text-gray-600">Feast of St. John Berchmans, Jesuit Novice and Patron of Altar Boys</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Berchmans is celebrated on November 26th, commemorating 
                his life as a young Jesuit who achieved holiness through attention to small 
                matters and faithful service. This feast honors his dedication to perfection 
                in little things, his service as an altar boy, and his example for young 
                people seeking to grow in holiness. It is a day to remember that sanctity 
                is achievable through faithful attention to daily duties and ordinary responsibilities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. John Berchmans lived during the early 17th century, a time of great 
                religious fervor and reform in the Catholic Church. The Society of Jesus 
                was at the height of its influence, and the Church was responding to the 
                challenges of the Protestant Reformation. In this context, John's emphasis 
                on personal holiness and attention to detail was particularly important, 
                as it demonstrated that the Catholic faith could be lived with great 
                devotion and precision. His canonization in 1888 recognized his importance 
                as a model for young people and his contribution to the Church's spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On his feast day, Catholics pray for his intercession, especially for altar 
                boys and young people serving in the Church, for those seeking to grow in 
                holiness through attention to small matters, for students and young people 
                discerning their vocation, for the Society of Jesus and its members, for 
                those from humble backgrounds seeking to serve God, and for the grace to 
                find God in all things. His example inspires us to approach our daily duties 
                with love and attention to detail.
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
                  <li>• <strong>Altar Boys:</strong> Patron saint of altar servers and acolytes</li>
                  <li>• <strong>Young People:</strong> Patron of youth and students</li>
                  <li>• <strong>Jesuit Novices:</strong> Patron of those in Jesuit formation</li>
                  <li>• <strong>Perfection:</strong> Patron of those seeking holiness in small things</li>
                  <li>• <strong>Students:</strong> Patron of students and scholars</li>
                  <li>• <strong>Humble Origins:</strong> Patron of those from simple backgrounds</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Liturgical Service:</strong> Helper for those serving at Mass</li>
                  <li>• <strong>Academic Excellence:</strong> Patron of students seeking to excel</li>
                  <li>• <strong>Daily Duties:</strong> Helper for those seeking to sanctify ordinary tasks</li>
                  <li>• <strong>Vocational Discernment:</strong> Patron of young people discerning their calling</li>
                  <li>• <strong>Spiritual Growth:</strong> Helper for those growing in holiness</li>
                  <li>• <strong>Attention to Detail:</strong> Patron of those seeking perfection in little things</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Berchmans</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Berchmans, model of perfection in little things and patron 
                    of altar boys, intercede for us who seek to serve God in our daily duties.
                  </p>
                  <p className="mb-4">
                    You who found holiness in the ordinary tasks of life, help us to approach 
                    our daily responsibilities with love and attention to detail.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    find God in all things and to serve Him with excellence in everything we do. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Altar Boys</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John Berchmans, patron of altar boys, intercede for all who serve 
                    at the altar of the Lord.
                  </p>
                  <p>
                    Help them to approach their duties with reverence and love, to grow in 
                    their faith through their service, and to find holiness in their daily 
                    tasks. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Young People</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John Berchmans, who achieved holiness at a young age, intercede 
                    for all young people seeking to grow in their faith.
                  </p>
                  <p>
                    Help them to take their studies seriously, to serve God with enthusiasm, 
                    and to find holiness in the ordinary moments of their lives. Through 
                    Christ our Lord. Amen."
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
            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Society of Jesus and author of the Spiritual Exercises.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-aloysius" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Aloysius Gonzaga
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit novice who also died young and is patron of youth.
                </p>
              </div>
            </Link>

                         <Link href="/saints/st-francis-xavier" className="group block">
               <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                 <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                   Modern Saints
                 </div>
                 <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                   St. Francis Xavier
                 </h3>
                 <p className="text-gray-700 text-sm">
                   Jesuit missionary who brought Christianity to Asia.
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