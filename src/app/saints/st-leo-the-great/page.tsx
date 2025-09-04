import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Leo the Great - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Leo the Great, Pope and Doctor of the Church.',
  keywords: [
    'st leo the great',
    'saint leo the great',
    'st leo the great biography',
    'st leo the great feast day',
    'st leo the great patron saint',
    'pope leo i',
    'doctor of the church',
    'november 10 feast day',
    'catholic saints'
  ],
  openGraph: {
    title: 'St. Leo the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Leo the Great, Pope and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-leo-the-great',
  },
  twitter: {
    title: 'St. Leo the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Leo the Great, Pope and Doctor of the Church.',
  }
}

export default function StLeoTheGreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Leo the Great
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope, Doctor of the Church, Defender of Orthodoxy
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Leo the Great</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 10</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Pope</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Leo the Great</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Leo the Great, also known as Pope Saint Leo I, was born into a Roman aristocratic family. His response to the call of the Lord transformed him into one of the greatest popes of Christian history. In fact, he was the first pope to be given the title "the Great." Details pertaining to Leo's place of birth are not known, but it is believed his ancestors come from Tuscany.
              </p>
              
              <p className="mb-6">
                St. Leo the Great became a very well-known deacon of the Church by 431, serving the church under the pontificate of Pope Celestine I. Leo was widely respected for his love for the Lord, intelligence and persuasive nature. He was also gifted in bringing reconciliation between disputing groups of Christians. That is why he was often sent out to settle disputes, both secular and theological.
              </p>
              
              <p className="mb-6">
                Following the pontificate of Pope Celestine, the next Pope was Pope Sixtus III. Pope Sixtus III passed away while Leo was visiting Gaul at the request of Emperor Valentinian III. His task was to bring peace between one of Gaul's chief military commanders and the chief magistrate. Leo was then unanimously elected as the next pope to succeed Pope Sixtus III in 440. His swift election reflected the respect he had garnered among the people from his service to the Lord and the affection the faithful had for this pastoral and wise servant of the Lord.
              </p>
              
              <p className="mb-6">
                Pope Leo was deeply dedicated to his service as pope. He saw himself as privileged to sit in the Chair of St Peter, as the servant of the servants of God. He worked diligently as "Peter's successor." Over time, Leo became known as one of the best administrative popes of the ancient Church. But, he was so much more.
              </p>
              
              <p>
                During his reign, he tirelessly fought to preserve the unity of the Church and its faith; and to ensure the safety of his people against invasions from armies which sought to destroy the Church and the Christian influence on culture which she brought to bear.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Leo the Great: Defender of Orthodoxy</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Fighting Heresies</h3>
              <p className="mb-6">
                Pope Leo I focused his pontificate on four main areas. He continuously worked to oppose and root out numerous heresies which were threatening the Western Church. Among them were Pelagianism, which involved denying Original Sin and failing to understand the necessity of God's grace for salvation. At the foundation of the Pelagian error was the mistaken notion that we can perfect ourselves without God's grace and assistance. The other major heresy threatening the Church was Manichaeism, which denied the goodness of the human body, creation, and even matter itself.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Defense</h3>
              <p className="mb-6">
                During this same period, some Eastern Christians began questioning the teaching of the Church concerning the relationship between Jesus' humanity and his divinity, and how to articulate this mystery of the Christian faith. In response, Leo resolved the doctrinal controversy with a letter setting down the Church's official teaching on Jesus Christ as One Person with a human and a divine nature which could not be separated. This profound and theologically astute letter reconciled the disputing parties and preserved the core teaching concerning Jesus Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courageous Leadership</h3>
              <p className="mb-6">
                Along with his dynamic faith and outstanding theological wisdom, Pope Leo I was also courageous. He led Rome's defense against Attila the Hun's barbarian invasion on Italy in 452, by taking on the role of peacemaker. Pope St Leo focused heavily on the pastoral care of his people. He inspired and helped to foster charitable work in areas of Rome affected heavily by famine, refugees and poverty.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Preaching</h3>
              <p>
                Pope Leo I was renowned for his profoundly spiritual sermons. With his words, Leo could reach the everyday needs and interests of his people. It was his reputation as an "instrument of the call to holiness, well-versed in Scripture and ecclesiastical awareness" that helped him become one of the greatest popes in the history of the Church. Nearly 100 sermons and 150 letters of Leo I have been preserved; one of them is still, to this day, used in the Office of Readings on Christmas.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 10</div>
              <p className="text-gray-600">Feast of St. Leo the Great, Pope and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Leo the Great is celebrated on November 10th, the anniversary of his death in 461. Leo died on November 10, 461. He wished to be buried as close as possible to St. Peter's tomb. His body was first laid in the entrance of St. Peter's basilica but was later moved inside the basilica in 688. In 1754, Pope Benedict XIV proclaimed Leo I a Doctor of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Leo the Great's remarkable contributions to the Church as pope, theologian, and defender of orthodoxy. His feast day serves as a reminder of the importance of strong leadership in the Church and the need to defend the faith against heresy. Many people pray for the pope and for the unity of the Church on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Leo the Great for his intercession in matters of Church leadership, theological clarity, and the defense of orthodoxy. Many people also pray for the current pope and for the grace to be faithful witnesses of the Gospel in their daily lives.
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
                  <li>• <strong>Popes:</strong> Patron of the papacy and Church leadership</li>
                  <li>• <strong>Theologians:</strong> Patron of those who study and teach theology</li>
                  <li>• <strong>Preachers:</strong> Patron of those who proclaim the Gospel</li>
                  <li>• <strong>Rome:</strong> Patron of the city of Rome</li>
                  <li>• <strong>Church Unity:</strong> Patron of efforts to maintain Church unity</li>
                  <li>• <strong>Orthodoxy:</strong> Defender of true Catholic doctrine</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Defense of Faith:</strong> Helper in defending against heresy</li>
                  <li>• <strong>Church Leadership:</strong> Patron of bishops and Church leaders</li>
                  <li>• <strong>Theological Clarity:</strong> Helper in understanding doctrine</li>
                  <li>• <strong>Peacemaking:</strong> Patron of reconciliation efforts</li>
                  <li>• <strong>Pastoral Care:</strong> Helper in caring for the faithful</li>
                  <li>• <strong>Charitable Works:</strong> Patron of works of mercy</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Leo the Great</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Leo the Great, who as Pope and Doctor of the Church defended the faith with courage 
                    and wisdom, help us to remain steadfast in our Catholic faith. Through your intercession, may we 
                    have the strength to defend orthodoxy and the grace to be faithful witnesses of Christ in our world. 
                    Help us to serve the Church with the same dedication and love that you showed as Peter's successor. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Leo the Great, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/saints/st-peter" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peter
                </h3>
                <p className="text-gray-700 text-sm">
                  First Pope whose chair St. Leo the Great occupied as his successor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church who defended orthodoxy against heresy.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-gregory-the-great" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Another pope who was given the title "the Great" for his leadership.
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