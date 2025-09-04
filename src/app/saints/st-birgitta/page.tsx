import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Birgitta - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Birgitta of Sweden, founder of the Brigittine Order and patroness of Sweden.',
  keywords: [
    'st birgitta',
    'saint birgitta',
    'st birgitta biography',
    'st birgitta feast day',
    'st birgitta patron saint',
    'birgitta of sweden',
    'brigittine order',
    'patroness of sweden',
    'july 23 feast day',
    'ordo sanctissimi salvatoris'
  ],
  openGraph: {
    title: 'St. Birgitta - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Birgitta of Sweden, founder of the Brigittine Order and patroness of Sweden.',
    url: 'https://catholicbibleonline.com/saints/st-birgitta',
  },
  twitter: {
    title: 'St. Birgitta - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Birgitta of Sweden, founder of the Brigittine Order and patroness of Sweden.',
  }
}

export default function StBirgittaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Birgitta
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Birgitta of Sweden, Founder of the Brigittine Order, Patroness of Sweden
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Birgitta</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Founder</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Birgitta</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Birgitta was the daughter of Uppland's Lagman, <strong>Birger Petersson</strong> and his wife, Ingeborg, who was a member of the same clan as the reigning family. Birgitta's family was pious; her father went to confession every Friday and made long and arduous pilgrimages as far away as the Holy Land.
              </p>
              
              <p className="mb-6">
                Birgitta's mother died, leaving Birgitta, ten years old, Katharine, nine and a newborn baby boy, Israel. The children were sent to their maternal aunt for further education and care. It seems that as a young child, Birgitta had a dream-vision of The Man of Sorrows. This dream was very vivid. Birgitta asked Him who had done that to Him. His answer: 'All those who despise my love.' The memory of this dream never left Birgitta and may have even left an indelible mark on her sub-conscious.
              </p>
              
              <p className="mb-6">
                As was usual during the Middle Ages, Birgitta was married when she was 13 years old to a young man, <strong>Ulf Gudmarsson</strong> with whom she had eight children, four daughters and four sons, all of them survived infancy, and that was very rare at that time.
              </p>
              
              <p className="mb-6">
                When the King of Sweden, Magnus Eriksson married Blanche of Namur, he asked his kinswoman, Birgitta to come and be Lady-in Waiting and to teach the young queen the language and customs of her new country. After her years of service at Court, Birgitta and Ulf made the long pilgrimage to Santiago di Compostela.
              </p>
              
              <p className="mb-6">
                On the return journey Ulf became dangerously ill in Arras. Birgitta feared for his death and sat all night by his bed praying, and then a bishop appeared to her, promised that Ulf would recover and 'God had great things for her to do.' He told her that he was Denis, Patron of France. Ulf recovered and was able to continue his work as Lagman in the province of Närke until early in the year 1344, when he was very ill so Birgitta took him to the monks at Alvastra where he died and was buried.
              </p>
              
              <p className="mb-6">
                Birgitta remained in a little house near the abbey and she spent long hours in prayer by Ulf's grave. She said that she 'loved him like my own body.' She arranged her affairs among her children and various charities and prayed for guidance. She was 41 years old and in the abbey at Alvastra God called her 'be My Bride and My canal'. He gave her the task of founding new religious order, mainly for women.
              </p>
              
              <p className="mb-6">
                He said that the other orders had fallen into decay and this new order would be a vineyard whose wine would revivify the Church. He showed her how her abbey church was to be built, gave directions concerning the clothing and prayers of the nuns, 60 in all, who needed priests as chaplains, 13 priests, 4 deacons and 8 lay brothers. These two communities were to be ruled by an abbess, who was to represent the Blessed Virgin Mary together with the Apostles in the Upper Room in Jerusalem.
              </p>
              
              <p className="mb-6">
                King Magnus Eriksson donated a little palace and much land to the new monastery, but almost as soon she had begun altering the palace and organising the work, Christ appeared to her and asked her to go to Rome and wait there until she got the pope to return from France to Rome. She was to be there during the Holy Year 1350. Birgitta left Sweden at the end of 1349 never to return.
              </p>
              
              <p className="mb-6">
                For the rest of her life she saw visions concerning the reform of the Church, messages to kings and popes and many other persons in high places, directing them to work for the Church. It may be noted that Birgitta never wrote in the first person. She always said that she carried a message from a very High Lord.
              </p>
              
              <p>
                Although she had longed to become a nun, she never even saw the monastery in Vadstena. In fact, nothing she set out to do was ever realised. She never had the pope return to Rome permanently, she never managed to make peace between France and England, she never saw any nun in the habit that Christ had shown her, and she never returned to Sweden but died, worn out old lady far from home in July 1373. She can be called the Patroness of Failures. In this she was like her Lord. He was also classed as failure as He hung on the Cross. Birgitta was a successful failure as she was canonized in 1391.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Birgitta: Founder of the Brigittine Order</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founding of the Brigittine Order</h3>
              <p className="mb-6">
                St. Birgitta was the only woman ever to found a religious Order, <strong>Ordo Sanctissimi Salvatoris</strong> (Order of the Most Holy Savior). It was never a double order but an order primarily for women with permanent chaplains, ruled by an abbess. The brothers had as their head, not a prior but a Confessor General who was responsible for the spiritual business of both convents.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">International Expansion</h3>
              <p className="mb-6">
                The order spread swiftly throughout Europe with monasteries from Scandinavia right through Europe down to Italy. In modern times it has expanded into five different, juridically independent branches: Spain 1629, Rome 1911, U.S.A. 1970, Mexico at the change of the century. None of these foundations have brothers (except U.S.A. which has one male convent).
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mystical Visions and Prophecies</h3>
              <p className="mb-6">
                Birgitta's mystical experiences began in childhood with her vision of the Man of Sorrows and continued throughout her life. She received numerous visions concerning Church reform, messages to kings and popes, and guidance for the spiritual renewal of the Church. Her writings, always in the third person as messages from God, became influential in medieval spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Sweden</h3>
              <p>
                St. Birgitta is the patroness of Sweden, her homeland. Despite spending the last 24 years of her life in Rome and never seeing her monastery completed, her influence on Swedish spirituality and culture has been profound. Her canonization in 1391, just 18 years after her death, attests to the immediate recognition of her sanctity and the impact of her life and work.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 23</div>
              <p className="text-gray-600">Feast of St. Birgitta of Sweden, Virgin and Foundress</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Birgitta is celebrated on July 23rd, commemorating her life of mystical prayer, her founding of the Brigittine Order, and her dedication to Church reform. This date honors her as one of the most important female saints of the Middle Ages.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In Sweden, St. Birgitta's feast day is celebrated with special services and processions, particularly at the Brigittine monasteries. Her influence on Swedish culture and spirituality is commemorated with readings from her mystical writings and prayers for Church unity and reform.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Church reform and unity, to ask for St. Birgitta's intercession for those called to religious life, and to reflect on the importance of mystical prayer and prophetic witness in the Church.
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
                  <li>• <strong>Sweden:</strong> Patroness of her homeland</li>
                  <li>• <strong>Religious Orders:</strong> Founders of religious communities</li>
                  <li>• <strong>Widows:</strong> Those who have lost their spouses</li>
                  <li>• <strong>Mystics:</strong> Those seeking mystical union with God</li>
                  <li>• <strong>Church Reform:</strong> Those working for Church renewal</li>
                  <li>• <strong>Prophets:</strong> Those called to prophetic witness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> Those discerning religious life</li>
                  <li>• <strong>Mystical Prayer:</strong> Deepening one's prayer life</li>
                  <li>• <strong>Church Unity:</strong> Working for Christian unity</li>
                  <li>• <strong>Swedish Heritage:</strong> Those of Swedish descent</li>
                  <li>• <strong>Failed Endeavors:</strong> Those who feel their efforts have failed</li>
                  <li>• <strong>Pilgrimages:</strong> Those on spiritual journeys</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Birgitta</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who called Saint Birgitta to found a new religious order and to be a voice for Church reform, grant us the grace to follow her example of mystical prayer and prophetic witness.
                  </p>
                  <p className="mb-4">
                    Help us to be open to your divine messages and to work for the renewal of the Church. May we, like St. Birgitta, be willing to leave our comfort zones to serve you and to carry your messages to the world.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Church Reform</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Birgitta, who received visions for the reform of the Church, intercede for us that we may work for the renewal and unity of the Church.
                  </p>
                  <p>
                    Help us to be open to the Holy Spirit's guidance and to be willing to speak truth to power, even when it is difficult. May we contribute to making the Church a vineyard whose wine revivifies the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Birgitta, founder of the Brigittine Order, pray for all those discerning religious life and for those called to found new religious communities.
                  </p>
                  <p>
                    Help them to be open to God's call and to have the courage to follow it, even when it seems impossible. May they find strength in prayer and trust in God's plan for their lives. Amen."
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
            <Link href="/saints/st-catherine-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mystic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican mystic and Doctor of the Church, known for her influence on popes and Church reform.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite reformer and Doctor of the Church, founder of the Discalced Carmelites.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-clare-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Foundress Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Clare of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Poor Clares and companion of St. Francis of Assisi.
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