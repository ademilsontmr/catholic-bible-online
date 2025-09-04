import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Patrick - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Patrick of Ireland, patron saint of Ireland and missionary who converted the Irish people.',
  keywords: [
    'st patrick',
    'saint patrick',
    'patron saint of ireland',
    'march 17 feast day',
    'catholic saints',
    'irish saints',
    'missionary saints'
  ],
  openGraph: {
    title: 'St. Patrick - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Patrick of Ireland, patron saint of Ireland and missionary who converted the Irish people.',
    url: 'https://catholicbibleonline.com/saints/st-patrick',
  },
  twitter: {
    title: 'St. Patrick - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Patrick of Ireland, patron saint of Ireland and missionary who converted the Irish people.',
  }
}

export default function StPatrickPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">☘️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Patrick
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Ireland and Apostle of the Irish
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Patrick</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 17</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">☘️</div>
              <div className="text-sm text-gray-600">Missionary Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Patrick</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Patrick of Ireland is one of the world's most popular saints. He 
                was born in Roman Britain and when he was fourteen or so, he was captured 
                by Irish pirates during a raiding party and taken to Ireland as a slave 
                to herd and tend sheep. At the time, Ireland was a land of Druids and 
                pagans but Patrick turned to God and wrote his memoir, The Confession. 
                In The Confession, he wrote: "The love of God and his fear grew in me 
                more and more, as did the faith, and my soul was rosed, so that, in a 
                single day, I have said as many as a hundred prayers and in the night, 
                nearly the same. I prayed in the woods and on the mountain, even before 
                dawn. I felt no hurt from the snow or ice or rain."
              </p>
              
              <p className="mb-6">
                Patrick's captivity lasted until he was twenty, when he escaped after 
                having a dream from God in which he was told to leave Ireland by going 
                to the coast. There he found some sailors who took him back to Britain 
                and was reunited with his family. A few years after returning home, 
                Patrick saw a vision he described in his memoir: "I saw a man coming, 
                as it were from Ireland. His name was Victoricus, and he carried many 
                letters, and he gave me one of them. I read the heading: 'The Voice of 
                the Irish.' As I began the letter, I imagined in that moment that I 
                heard the voice of those very people who were near the wood of Foclut, 
                which is beside the western sea-and they cried out, as with one voice: 
                'We appeal to you, holy servant boy, to come and walk among us.'"
              </p>
              
              <p className="mb-6">
                The vision prompted his studies for the priesthood. He was ordained by 
                St. Germanus, the Bishop of Auxerre, whom he had studied under for years, 
                and was later ordained a bishop and sent to take the Gospel to Ireland. 
                Patrick arrived in Slane, Ireland on March 25, 433. There are several 
                legends about what happened next, with the most prominent claiming he 
                met the chieftain of one of the druid tribes, who tried to kill him. 
                After an intervention from God, Patrick was able to convert the chieftain 
                and preach the Gospel throughout Ireland.
              </p>
              
              <p>
                There, he converted many people - eventually thousands - and he began 
                building churches across the country. He often used shamrocks to explain 
                the Holy Trinity and entire kingdoms were eventually converted to 
                Christianity after hearing Patrick's message. Patrick preached and 
                converted all of Ireland for 40 years. He worked many miracles and 
                wrote of his love for God in Confessions. After years of living in 
                poverty, traveling and enduring much suffering he died March 17, 461. 
                He died at Saul, where he had built the first Irish church. He is 
                believed to be buried in Down Cathedral, Downpatrick. His grave was 
                marked in 1990 with a granite stone.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Patrick: Apostle of Ireland</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Apostle of Ireland</h3>
              <p className="mb-6">
                St. Patrick's greatest legacy is his role as the Apostle of Ireland, 
                the missionary who brought Christianity to the entire island. Through 
                his 40 years of preaching, teaching, and building churches, Patrick 
                succeeded in converting thousands of Irish people from paganism to 
                Christianity. His missionary work was so successful that Ireland became 
                known as the "Island of Saints and Scholars," producing countless 
                missionaries who would later spread Christianity throughout Europe 
                during the Dark Ages.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Shamrock and the Trinity</h3>
              <p className="mb-6">
                One of St. Patrick's most enduring contributions to Christian teaching 
                is his use of the shamrock to explain the Holy Trinity. By using the 
                three-leafed clover to illustrate how three distinct parts (Father, 
                Son, and Holy Spirit) could be one God, Patrick made complex theological 
                concepts accessible to the Irish people. This teaching method has become 
                a symbol of both Irish Christianity and St. Patrick's innovative approach 
                to evangelization, combining local culture with Christian truth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Perseverance and Faith</h3>
              <p>
                St. Patrick's life story demonstrates extraordinary perseverance and 
                faith. From his early captivity in Ireland to his return as a missionary, 
                Patrick's journey shows how God can use even the most difficult 
                circumstances for His glory. His writings, particularly his Confession, 
                reveal a man of deep prayer and unwavering trust in God. Patrick's 
                example continues to inspire Christians worldwide to trust in God's 
                plan and to persevere in spreading the Gospel, even in the face of 
                adversity and suffering.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">March 17</div>
              <p className="text-gray-600">Feast of St. Patrick</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Patrick is celebrated on March 17th, the traditional 
                date of his death in 461 AD. This date falls during the Lenten season, 
                though in Ireland and many other places, the feast is celebrated with 
                great joy and festivity. The feast is a solemnity in Ireland, meaning 
                it takes precedence over the regular Lenten observances. St. Patrick's 
                Day has become one of the most widely celebrated saint's feasts in the 
                world, transcending religious boundaries to become a global celebration 
                of Irish culture and heritage.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                St. Patrick's Day is marked by numerous traditions, including wearing 
                green clothing, displaying shamrocks, and participating in parades. 
                Many people attend Mass to honor the saint and pray for his intercession. 
                The day is also associated with traditional Irish music, dance, and 
                cuisine. In Ireland, the feast is a national holiday, and many people 
                make pilgrimages to St. Patrick's holy sites, including Croagh Patrick 
                mountain and his burial place in Downpatrick. The celebration has become 
                a powerful expression of Irish identity and pride worldwide.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Ireland, for missionaries, 
                and for the spread of the Gospel. Many people pray the Prayer to St. 
                Patrick or make special petitions for the conversion of hearts and the 
                strengthening of faith. The day is also a time to reflect on how we can 
                follow St. Patrick's example of courage, perseverance, and love for God 
                in our own lives. St. Patrick's Day reminds us of the power of one 
                person's faith to transform an entire nation and culture.
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
                  <li>• <strong>Ireland:</strong> Patron saint of Ireland</li>
                  <li>• <strong>Missionaries:</strong> Patron of evangelization</li>
                  <li>• <strong>Engineers:</strong> Patron of engineering profession</li>
                  <li>• <strong>Nigeria:</strong> Patron of Nigeria</li>
                  <li>• <strong>Archdiocese of New York:</strong> Patron of New York</li>
                  <li>• <strong>Boston:</strong> Patron of Boston</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Patron of those seeking faith</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult times</li>
                  <li>• <strong>Protection:</strong> Guardian against snakes/evil</li>
                  <li>• <strong>Irish People:</strong> Patron of Irish heritage</li>
                  <li>• <strong>Teaching:</strong> Patron of religious education</li>
                  <li>• <strong>Forgiveness:</strong> Model of mercy and grace</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Patrick</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Patrick, Apostle of Ireland, you who were captured as a 
                    slave and yet returned to bring the Gospel to your captors, help 
                    me to have the courage to face my difficulties with faith and trust in God.
                  </p>
                  <p className="mb-4">
                    Teach me to persevere in prayer and to trust in God's plan for my 
                    life. Help me to be a witness to Christ in my daily life, using 
                    whatever means available to me to share God's love with others. 
                    May your example of forgiveness and missionary zeal inspire me to 
                    be bold in my faith.
                  </p>
                  <p>
                    St. Patrick, pray for me that I may have the strength to carry 
                    the cross, the wisdom to teach others about God, and the love to 
                    forgive those who have wronged me. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Ireland</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Patrick, patron saint of Ireland, intercede for the Irish 
                    people and all those of Irish heritage. Help us to remain faithful 
                    to the Gospel you brought to our ancestors.
                  </p>
                  <p>
                    May your example of courage and perseverance inspire us to be 
                    faithful witnesses to Christ in our own time. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Patrick, pray for us!"
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
            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism and patron of Europe.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of ecology and founder of the Franciscans.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine of Hippo
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and author of Confessions.
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