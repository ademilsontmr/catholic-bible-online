import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Alena - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Alena, martyr who converted from paganism and was martyred during a secret Eucharist.',
  keywords: [
    'st alena',
    'saint alena',
    'st alena biography',
    'st alena feast day',
    'st alena patron saint',
    'catholic saints',
    'brussels martyr saint'
  ],
  openGraph: {
    title: 'St. Alena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alena, martyr who converted from paganism and was martyred during a secret Eucharist.',
    url: 'https://catholicbibleonline.com/saints/st-alena',
  },
  twitter: {
    title: 'St. Alena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Alena, martyr who converted from paganism and was martyred during a secret Eucharist.',
  }
}

export default function StAlenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Alena
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Martyr and Convert from Paganism
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Alena</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Alena</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Alena was a martyr born near Brussels, Belgium, whose life exemplifies the 
                courage and faith required to embrace Christianity in a hostile environment. Her 
                story is one of conversion, secret devotion, and ultimate sacrifice for the faith, 
                demonstrating the power of God's grace to transform hearts even in the most 
                challenging circumstances.
              </p>
              
              <p className="mb-6">
                Born into a pagan family, St. Alena grew up in a world where the worship of 
                multiple gods was the norm, and Christianity was often viewed with suspicion 
                or outright hostility. Despite this environment, something in her heart was 
                drawn to the truth of the Gospel. Whether through encounters with Christian 
                neighbors, witnessing acts of Christian charity, or through some other divine 
                intervention, St. Alena came to recognize the one true God and the saving 
                message of Jesus Christ.
              </p>
              
              <p className="mb-6">
                Her conversion to Christianity had to be kept secret from her family and 
                community, as the consequences of such a conversion could be severe. This 
                secrecy was not born out of fear for her own safety, but rather out of 
                necessity in a time when Christianity was still being established in the 
                region and faced significant opposition from both civil authorities and 
                traditional religious practices.
              </p>
              
              <p className="mb-6">
                Despite the need for secrecy, St. Alena's faith was not a private matter 
                that she could keep entirely to herself. She sought out the Christian 
                community, likely finding ways to attend Mass and receive the sacraments 
                in secret. Her devotion to the Eucharist, the source and summit of the 
                Christian life, became central to her spiritual journey and would ultimately 
                be the occasion of her martyrdom.
              </p>
              
              <p className="mb-6">
                During a secret ceremony of the Holy Eucharist, St. Alena was discovered 
                and arrested. This discovery could have happened in several ways - perhaps 
                she was followed by someone suspicious of her activities, or maybe the 
                secret gathering was betrayed by someone who knew of the Christians' 
                whereabouts. Whatever the circumstances, her participation in the sacred 
                liturgy became the evidence used against her.
              </p>
              
              <p>
                St. Alena's arrest and subsequent martyrdom demonstrate the profound 
                commitment she had to her faith. She could have denied her Christianity 
                to save her life, but she chose instead to remain faithful to Christ, 
                even unto death. Her martyrdom serves as a powerful witness to the truth 
                of the Gospel and the reality of Christ's presence in the Eucharist. 
                Through her death, she joined the ranks of the martyrs who have given 
                their lives for the faith throughout the history of the Church, becoming 
                a model of courage and fidelity for all Christians.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Alena: Model of Courageous Conversion</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Conversion</h3>
              <p className="mb-6">
                St. Alena's most profound legacy is her example of courageous conversion 
                from paganism to Christianity. Her story demonstrates that God's grace 
                can reach into any heart, regardless of background or circumstances. 
                Born into a pagan family, she represents all those who have had to 
                overcome family traditions, cultural expectations, and social pressures 
                to embrace the truth of the Gospel. Her conversion reminds us that 
                faith is a gift that can be received at any time in life, and that 
                the call to follow Christ can come even in the most unexpected places 
                and circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Secret Faith and Devotion</h3>
              <p className="mb-6">
                St. Alena's life of secret faith serves as a model for Christians 
                who must practice their faith in difficult or dangerous circumstances. 
                Her ability to maintain her devotion to Christ while living in a 
                hostile environment demonstrates the importance of interior prayer 
                and spiritual strength. She shows us that true faith is not dependent 
                on external circumstances or public recognition, but rather on the 
                interior relationship with God. Her example is particularly relevant 
                for Christians living in countries where the faith is persecuted or 
                where they must practice their religion in secret.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Eucharistic Devotion</h3>
              <p className="mb-6">
                The fact that St. Alena was martyred during a secret celebration of 
                the Eucharist highlights the central importance of the Mass in the 
                Christian life. Her willingness to risk her life to participate in 
                the sacred liturgy demonstrates her understanding that the Eucharist 
                is truly the source and summit of the Christian life. Her martyrdom 
                at the Eucharist connects her to the long tradition of Christians 
                who have been willing to die rather than give up their participation 
                in the Mass. This aspect of her legacy reminds all Christians of the 
                precious gift of the Eucharist and the importance of regular participation 
                in the sacramental life of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Truth</h3>
              <p>
                St. Alena's martyrdom serves as a powerful witness to the truth of 
                the Christian faith. Her willingness to die rather than renounce 
                her belief in Christ demonstrates the reality of the Gospel and 
                the transformative power of God's grace. Her death, like that of 
                all martyrs, is a testimony to the fact that the Christian faith 
                is worth dying for because it is true. Her example encourages all 
                Christians to be willing to stand up for their faith, even when 
                it requires sacrifice or puts them at risk. She reminds us that 
                the blood of the martyrs is the seed of the Church, and that 
                through their witness, others may come to know and love Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 18</div>
              <p className="text-gray-600">Feast of St. Alena, Martyr and Convert</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Alena's feast day is celebrated on June 18th, commemorating her 
                martyrdom and her witness to the Christian faith. This feast is 
                particularly meaningful for converts to the faith, for those who 
                must practice their religion in secret or difficult circumstances, 
                and for all who seek the courage to stand up for their beliefs. 
                Churches in Belgium, particularly in the Brussels area, may hold 
                special services on this day to honor their local saint and to 
                remember the sacrifices made by early Christians in the region.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Alena's feast day, many communities may choose to reflect 
                on the themes of conversion, courage, and Eucharistic devotion that 
                are central to her story. Some may hold special prayer services 
                for converts to the faith, asking for St. Alena's intercession for 
                those who are considering becoming Christian or who are facing 
                difficulties in their faith journey. The day also serves as an 
                opportunity to pray for Christians who are currently being persecuted 
                for their faith around the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. Alena for courage in standing up for their faith, 
                for strength for converts who are facing family or social opposition, 
                for protection for Christians who must practice their faith in secret, 
                and for a deeper appreciation of the Eucharist. Her intercession is 
                particularly sought by those who are considering conversion to Christianity, 
                by those who are facing persecution for their faith, by families dealing 
                with religious differences, and by all who need courage to live their 
                faith authentically in difficult circumstances. Her example reminds us 
                that faith is worth any sacrifice and that God's grace is sufficient 
                for all our needs.
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
                  <li>• <strong>Converts:</strong> For her conversion from paganism to Christianity</li>
                  <li>• <strong>Secret Christians:</strong> For practicing faith in hostile environments</li>
                  <li>• <strong>Brussels:</strong> For her connection to the region near Brussels</li>
                  <li>• <strong>Belgium:</strong> As a native of the region</li>
                  <li>• <strong>Martyrs:</strong> For her ultimate sacrifice for the faith</li>
                  <li>• <strong>Eucharistic Devotion:</strong> For her martyrdom during Mass</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Family Opposition:</strong> For converts facing family resistance</li>
                  <li>• <strong>Religious Persecution:</strong> For Christians in hostile environments</li>
                  <li>• <strong>Courage:</strong> For strength to stand up for faith</li>
                  <li>• <strong>Interior Prayer:</strong> For maintaining faith in difficult circumstances</li>
                  <li>• <strong>Sacramental Life:</strong> For devotion to the Eucharist</li>
                  <li>• <strong>Witness:</strong> For bearing witness to Christ in daily life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Alena</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. Alena, courageous convert and martyr, you who 
                    left behind the darkness of paganism to embrace the light of 
                    Christ, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of courageous conversion and 
                    unwavering faith. Grant us the strength to stand up for our 
                    beliefs even when it requires sacrifice, and the wisdom to 
                    practice our faith with devotion and love.
                  </p>
                  <p className="mb-4">
                    Inspire us with your secret devotion to the Eucharist, showing 
                    us that true faith is not dependent on external circumstances 
                    but on our interior relationship with God. Help us to value 
                    the sacraments as you did, even when they come at a cost.
                  </p>
                  <p>
                    Through your powerful intercession, may we find the courage 
                    to live our faith authentically, to bear witness to Christ 
                    in our daily lives, and to remain faithful to Him even in 
                    the face of opposition or persecution. St. Alena, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Alena, courageous convert and martyr, pray for us!"
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
                  Virgin martyr who courageously faced death for her faith at a young age.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cecilia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cecilia
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who converted her husband and brother-in-law to Christianity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-sebastian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr who secretly helped persecuted Christians.
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