import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rafqa - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Rafqa, Lebanese Maronite nun who offered her suffering to Christ and became blind and paralyzed.',
  keywords: [
    'st rafqa',
    'saint rafqa',
    'st rafqa biography',
    'st rafqa feast day',
    'st rafqa patron saint',
    'catholic saints',
    'lebanon saint'
  ],
  openGraph: {
    title: 'St. Rafqa - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rafqa, Lebanese Maronite nun who offered her suffering to Christ and became blind and paralyzed.',
    url: 'https://catholicbibleonline.com/saints/st-rafqa',
  },
  twitter: {
    title: 'St. Rafqa - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rafqa, Lebanese Maronite nun who offered her suffering to Christ and became blind and paralyzed.',
  }
}

export default function StRafqaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🙏</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rafqa
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Lebanese Maronite Nun and Model of Suffering
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Rafqa</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Nun & Sufferer</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Rafqa</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Rafqa's life is a profound testament to the power of faith, the beauty of suffering 
                offered to Christ, and the extraordinary grace that can flow from complete surrender to 
                God's will. Her journey from a simple Lebanese village to sainthood demonstrates how 
                ordinary people can achieve extraordinary holiness through prayer, sacrifice, and 
                unwavering trust in God's providence. Her story is particularly inspiring for those 
                who face physical suffering, as she shows us how to transform pain into prayer and 
                how to find joy even in the midst of great trials.
              </p>
              
              <p className="mb-6">
                Born on June 29, 1832, in the small village of Hemlaya, Lebanon, Rafqa (also known as 
                Rebecca) was the only child of Saber El-Choboq El-Rayess and Rafqa Gemayel. She was 
                baptized on July 7, 1832, and given the name Boutroussieh. Her parents were devout 
                Christians who instilled in her a deep love for prayer and the Catholic faith from 
                an early age. By all accounts, her childhood was happy and simple, filled with the 
                love of her parents and the peace of rural Lebanese life. However, this peaceful 
                existence was shattered when Rafqa was just seven years old and her mother died, 
                leaving her and her father to face the challenges of life alone.
              </p>
              
              <p className="mb-6">
                The death of her mother marked the beginning of a period of great tribulation for 
                Rafqa and her father. They soon experienced severe financial difficulties, and 
                Rafqa was sent to work as a domestic servant in Damascus for four years to help 
                support the family. This separation from her father at such a young age must have 
                been extremely difficult, but it also began to shape her character and deepen her 
                reliance on God. During this time away from home, she learned the value of hard 
                work, humility, and trust in God's providence.
              </p>
              
              <p className="mb-6">
                In 1847, Rafqa returned home to find that her father had remarried, and his new 
                wife desired that Rafqa marry her brother. At the same time, an aunt wanted to 
                arrange a marriage between Rafqa and her cousin. This situation placed Rafqa in 
                a difficult position, caught between two potential suitors and under pressure 
                from family members to make different choices. Rather than being overwhelmed by 
                these conflicting demands, Rafqa turned to prayer and asked God to guide her. 
                Her answer surprised everyone: she would marry neither man, but instead would 
                devote her life entirely to Jesus and become a nun.
              </p>
              
              <p className="mb-6">
                Following this divine call, Rafqa traveled to the convent of Our Lady of Deliverance 
                in Bikfaya, where she joined the Mariamettes, a congregation founded by Fr. Joseph 
                Gemayel. According to legend, when she entered the convent and gazed upon the icon 
                of Our Lady of Deliverance, she heard the voice of God telling her, "You will become 
                a nun." The Mother Superior of the convent accepted her immediately, recognizing 
                the authenticity of her vocation. Shortly thereafter, her father and his new wife 
                arrived to try to dissuade Rafqa from her God-chosen path, but she remained steadfast 
                in her commitment to religious life.
              </p>
              
              <p className="mb-6">
                Rafqa's early years in religious life were marked by service and teaching. She was 
                sent to Deir El Qamar to teach catechism, where she demonstrated great courage 
                during a period of civil unrest. On one occasion, she reportedly saved a child 
                from murder by hiding him under her robes, showing her willingness to risk her 
                own safety for the protection of others. After serving in Deir El Qamar for a 
                year, she returned to her congregation and became a novice, taking her temporary 
                vows on March 19, 1862.
              </p>
              
              <p className="mb-6">
                During this period, Rafqa was assigned to kitchen service in a seminary, but she 
                used her free time to learn Arabic, writing, and arithmetic. She also helped 
                convince other girls to join the congregation, showing her gift for inspiring 
                others in their faith. In 1863, she continued working as a teacher, first at a 
                school belonging to her congregation in Byblos, then in Maad village where she 
                and a fellow sister established a new school for girls. Her dedication to education 
                and her ability to establish new schools demonstrated her organizational skills 
                and her commitment to spreading the faith through education.
              </p>
              
              <p className="mb-6">
                Following this early period of active ministry, Rafqa began to receive messages 
                from heaven. When her order faced a crisis, God told her, "You will remain a nun." 
                She also heard the voices of saints directing her to enter the Lebanese Maronite 
                Order. Obedient to these divine communications, Sister Rafqa took her solemn vows 
                in the new order on August 25, 1872. During her time in the Maronite Order, she 
                was known for being quiet and contemplative, devoted to prayer and speaking little. 
                She commonly made sacrifices and lived in great austerity, demonstrating her 
                commitment to a life of penance and prayer.
              </p>
              
              <p className="mb-6">
                In October 1885, Sister Rafqa made an unusual and profound request of Jesus, asking 
                to share in his suffering. This request was immediately answered, as she began to 
                experience pain in her head, which then moved to her eyes. Her superior was concerned 
                about Rafqa's pain and ordered that she be examined by doctors and sent to Beirut 
                for treatment. As she passed through the nearby church in Byblos, the congregation 
                mentioned that an American doctor was in the area. They located the doctor, who 
                recommended immediate surgery for Sister Rafqa.
              </p>
              
              <p className="mb-6">
                During the surgery, Rafqa refused anesthesia, choosing to experience the full pain 
                as a way of sharing in Christ's suffering. Tragically, the doctor made a mistake 
                which caused her eye to emerge from its socket and fall to the floor. Instead of 
                panicking or becoming angry, Sister Rafqa blessed the doctor, saying, "For Christ's 
                passion, God bless your hands and may God repay you." This extraordinary response 
                demonstrated her complete trust in God's will and her understanding that all 
                suffering can be offered to Christ.
              </p>
              
              <p className="mb-6">
                The surgery did not succeed, and shortly thereafter, pain entered her left eye as 
                well. For the next twelve years, she experienced constant pain in her remaining 
                eye and severe headaches. At no point did she reverse her wish to share in Christ's 
                suffering. Instead, she remained joyful in prayer and patient in her suffering. 
                She became quiet for long periods, speaking infrequently, but always joyously when 
                she did speak. Her ability to maintain joy in the midst of such intense suffering 
                was a powerful witness to the grace that comes from offering one's pain to Christ.
              </p>
              
              <p className="mb-6">
                In 1887, Sister Rafqa was sent with five other sisters to found a new monastery 
                in Jrabta, Batroun in Lebanon. Despite her suffering, she worked patiently and 
                diligently as she was able, contributing to the establishment of the new community. 
                In 1899, she became completely blind and paralysis set in, eventually confining 
                her to bed, mostly paralyzed and only able to lie on her right side. Her body 
                withered, but her hands remained capable, and she used them to knit socks, 
                continuing to serve others even in her severely limited condition.
              </p>
              
              <p>
                A wound developed in her left shoulder, which she referred to as "the wound in 
                the shoulder of Jesus," showing her deep identification with Christ's passion. 
                This continued for seven years, during which time she offered all her suffering 
                as a prayer for the salvation of souls. On March 23, 1914, she received her last 
                communion and called upon Jesus and the Holy Family, then went to her reward in 
                Heaven. After she was buried in the monastery cemetery, a light appeared on her 
                grave for three consecutive nights and was witnessed by many, a sign of her 
                sanctity and the power of her intercession. Her cause for beatification was 
                opened in 1925, and she was declared venerable by Pope John Paul II on February 
                11, 1982, beatified on November 17, 1985, and finally canonized on July 10, 2001.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Rafqa: Model of Redemptive Suffering</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Redemptive Suffering</h3>
              <p className="mb-6">
                St. Rafqa's most profound legacy is her example of how to transform suffering 
                into a powerful prayer and offering to God. Her conscious choice to ask Jesus 
                to share in his suffering demonstrates a deep understanding of the redemptive 
                value of pain when it is offered to Christ. Her ability to remain joyful and 
                patient during twelve years of intense physical suffering shows that it is 
                possible to find peace and even joy in the midst of great trials when we 
                understand that our suffering can be united to Christ's passion for the 
                salvation of souls. This aspect of her legacy is particularly relevant in 
                our own time, when many people face chronic illness, disability, or other 
                forms of suffering. St. Rafqa teaches us that suffering is not meaningless 
                but can become a powerful means of spiritual growth and intercession for others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Faith</h3>
              <p className="mb-6">
                St. Rafqa's life demonstrates extraordinary courage in following God's call, 
                even when it meant going against family expectations and social norms. Her 
                decision to become a nun instead of marrying, despite pressure from her 
                family, shows her willingness to follow God's will regardless of the cost. 
                Her courage was also evident in her willingness to risk her own safety to 
                protect a child during civil unrest, and in her refusal to use anesthesia 
                during surgery, choosing instead to offer her pain to Christ. This aspect 
                of her legacy reminds us that true faith often requires courage and that 
                following God's call may mean making difficult choices that others do not 
                understand. Her example encourages all Christians to be bold in their faith 
                and to trust in God's guidance even when the path ahead is uncertain.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Contemplative Prayer</h3>
              <p className="mb-6">
                St. Rafqa's life as a contemplative nun, characterized by silence, prayer, 
                and austerity, serves as a powerful example of the importance of interior 
                prayer and spiritual discipline. Her ability to maintain a deep prayer life 
                even in the midst of intense suffering demonstrates that prayer is not 
                dependent on external circumstances but is a choice we make to remain 
                connected to God. Her quiet, contemplative nature and her devotion to 
                prayer even when she could barely move show that the most important 
                work we can do is often invisible to others - the work of prayer and 
                intercession. This aspect of her legacy reminds us of the value of 
                contemplative prayer and the importance of maintaining a rich interior 
                life, even in our busy, noisy world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Service in Weakness</h3>
              <p>
                Even when she was completely blind, paralyzed, and confined to bed, St. 
                Rafqa continued to serve others by knitting socks with her remaining 
                functional hands. This aspect of her legacy demonstrates that there is 
                always a way to serve God and others, regardless of our limitations. 
                Her ability to find ways to be useful even in her severely disabled 
                condition shows that true service is not about what we can do, but 
                about our willingness to offer whatever we have to God. This aspect 
                of her legacy is particularly inspiring for those who feel that their 
                physical limitations prevent them from serving God or others. St. Rafqa 
                teaches us that even the smallest acts of service, offered with love, 
                have great value in God's eyes and can be powerful means of grace for 
                others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 23</div>
              <p className="text-gray-600">Feast of St. Rafqa, Lebanese Maronite Nun</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Rafqa's feast day is celebrated on March 23rd, commemorating the day 
                of her death and entrance into eternal life. This feast is particularly 
                significant in Lebanon and among Maronite Catholics, where she is honored 
                as a national saint and a powerful intercessor. Churches throughout Lebanon 
                may hold special Masses and prayer services on this day, and many devotees 
                may visit her relics or the monastery in Jrabta where she spent her final 
                years. The feast serves as a reminder of the power of redemptive suffering 
                and the importance of offering our trials to Christ for the salvation of souls.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Rafqa's feast day, many communities, especially in Lebanon and among 
                Maronite Catholics, may choose to reflect on the themes of redemptive suffering, 
                contemplative prayer, and courageous faith. Some may hold special prayer 
                services for those who are suffering from illness or disability, asking for 
                St. Rafqa's intercession for healing and strength. The day also serves as 
                an opportunity to pray for the people of Lebanon and for peace in the Middle 
                East, remembering St. Rafqa's love for her homeland and her prayers for its 
                people. Many may also pray for those who are blind or disabled, asking for 
                St. Rafqa's intercession and inspiration to find ways to serve God despite 
                their limitations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Rafqa for strength in suffering, for healing of eye 
                problems and other physical ailments, for courage in following God's call, 
                for growth in contemplative prayer, and for the grace to offer their trials 
                to Christ. Her intercession is particularly sought by those who are blind 
                or visually impaired, by those who suffer from chronic pain or disability, 
                by those who are discerning religious vocations, by those who need courage 
                to make difficult life decisions, and by all who need strength to endure 
                suffering with faith and joy. Her example reminds us that suffering can be 
                transformed into prayer and that even the most difficult trials can become 
                means of grace when offered to Christ.
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
                  <li>• <strong>Lebanon:</strong> As a national saint and patroness</li>
                  <li>• <strong>Blind People:</strong> For her own blindness and compassion</li>
                  <li>• <strong>Suffering:</strong> For her example of redemptive suffering</li>
                  <li>• <strong>Teachers:</strong> For her years of teaching catechism</li>
                  <li>• <strong>Maronite Order:</strong> For her membership and devotion</li>
                  <li>• <strong>Eye Problems:</strong> For her own eye afflictions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Chronic Pain:</strong> For those suffering from long-term illness</li>
                  <li>• <strong>Religious Vocations:</strong> For those discerning consecrated life</li>
                  <li>• <strong>Contemplative Prayer:</strong> For growth in interior life</li>
                  <li>• <strong>Family Opposition:</strong> For those facing resistance to their faith</li>
                  <li>• <strong>Peace in Lebanon:</strong> For her homeland and the Middle East</li>
                  <li>• <strong>Redemptive Suffering:</strong> For grace to offer trials to Christ</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Rafqa</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Rafqa, courageous nun and model of redemptive suffering, 
                    you who offered your pain to Christ and remained joyful in prayer, 
                    intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of courageous faith and complete surrender 
                    to God's will. Grant us the strength to offer our sufferings to Christ, 
                    the courage to follow God's call even when it requires difficult choices, 
                    and the grace to maintain joy and peace even in the midst of trials.
                  </p>
                  <p className="mb-4">
                    Inspire us with your example of contemplative prayer, showing us that 
                    the most important work we can do is often invisible to others - the 
                    work of prayer and intercession. Help us to understand that even our 
                    limitations can become means of serving God and others.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage to offer 
                    our sufferings to Christ, the strength to endure trials with faith 
                    and joy, and the grace to serve God even in our weakness. St. Rafqa, 
                    pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Rafqa, model of redemptive suffering and courageous faith, pray for us!"
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
            <Link href="/saints/st-gemma-galgani" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gemma Galgani
                </h3>
                <p className="text-gray-700 text-sm">
                  The Flower of Lucca, mystic and bearer of the stigmata who offered her suffering to Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-padre-pio" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Padre Pio
                </h3>
                <p className="text-gray-700 text-sm">
                  Stigmatist and miracle worker who bore the wounds of Christ and offered his suffering for souls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and patron saint of the blind, known for her courage and faith.
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