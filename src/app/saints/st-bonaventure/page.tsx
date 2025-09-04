import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bonaventure - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bonaventure, the Seraphic Doctor and Bishop of Albano.',
  keywords: [
    'st bonaventure',
    'saint bonaventure',
    'seraphic doctor',
    'st bonaventure biography',
    'st bonaventure feast day',
    'st bonaventure patron saint',
    'doctor of the church',
    'catholic saints',
    'july 15 feast day'
  ],
  openGraph: {
    title: 'St. Bonaventure - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bonaventure, the Seraphic Doctor and Bishop of Albano.',
    url: 'https://catholicbibleonline.com/saints/st-bonaventure',
  },
  twitter: {
    title: 'St. Bonaventure - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bonaventure, the Seraphic Doctor and Bishop of Albano.',
  }
}

export default function StBonaventurePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bonaventure
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Seraphic Doctor, Bishop and Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bonaventure</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 15</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bonaventure</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bonaventure, known as "the seraphic doctor," was born at Bagnoregio, 
                in the Lazio region of central Italy, in 1221. His birth name was John, 
                but he received the name of Bonaventure in consequence of an exclamation 
                of St. Francis of Assisi, when, in response to the pleading of the child's 
                mother, the saint prayed for John's recovery from a dangerous illness, 
                and, foreseeing the future greatness of the little John, cried out "O 
                Buona ventura" - O good fortune!
              </p>
              
              <p className="mb-6">
                At the age of twenty-two St. Bonaventure entered the Franciscan Order. 
                Having made his vows, he was sent to Paris to complete his studies under 
                the celebrated doctor Alexander of Hales, an Englishman and a Franciscan. 
                After the latter's death he continued his course under his successor, 
                John of Rochelle. In Paris he became the intimate friend of the great 
                St. Thomas Aquinas.
              </p>
              
              <p className="mb-6">
                He received the degree of Doctor, together with St. Thomas Aquinas, 
                ceding to his friend against the latter's inclination, the honor of 
                having it first conferred upon him. Like St. Thomas Aquinas, he enjoyed 
                the friendship of the holy King, St. Louis.
              </p>
              
              <p className="mb-6">
                At the age of thirty-five he was chosen General of his Order and restored 
                a perfect calm where peace had been disturbed by internal dissensions. 
                He did much for his Order and composed The Life of St. Francis. He also 
                assisted at the translation of the relics of St. Anthony of Padua.
              </p>
              
              <p className="mb-6">
                He was nominated Archbishop of York by Pope Clement IV, but he begged 
                not to be forced to accept that dignity. Gregory X obliged him to take 
                upon himself a greater one, that of Cardinal and Bishop of Albano, one 
                of the six suffragan Sees of Rome. Before his death he abdicated his 
                office of General of the Franciscan Order.
              </p>
              
              <p>
                He died while he was assisting at the Second Council of Lyons, on July 
                15, 1274. His death marked the end of a life dedicated to scholarship, 
                leadership, and the service of the Church, leaving behind a legacy of 
                theological writings and spiritual guidance that would influence generations 
                to come.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bonaventure: The Seraphic Doctor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Seraphic Doctor</h3>
              <p className="mb-6">
                St. Bonaventure's title "Seraphic Doctor" reflects his deep mystical 
                theology and his ability to combine intellectual rigor with spiritual 
                insight. His writings demonstrate a unique synthesis of scholastic 
                philosophy and Franciscan spirituality, making him one of the most 
                important theologians of the Middle Ages alongside his friend St. Thomas Aquinas.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Franciscan Leadership</h3>
              <p className="mb-6">
                As General of the Franciscan Order, St. Bonaventure played a crucial 
                role in preserving the unity and spirit of the order during a period 
                of internal dissension. His leadership helped to maintain the balance 
                between the strict observance of poverty and the practical needs of 
                the growing order, ensuring that the Franciscan charism would continue 
                to flourish for centuries to come.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Theological Contributions</h3>
              <p className="mb-6">
                St. Bonaventure's theological works, including his commentary on the 
                Sentences of Peter Lombard and his mystical writings like "The Journey 
                of the Mind to God," have had a profound influence on Christian spirituality. 
                His approach to theology emphasized the importance of both reason and 
                faith, and his mystical writings continue to inspire those seeking to 
                deepen their relationship with God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Church Leadership</h3>
              <p>
                St. Bonaventure's service as Cardinal and Bishop of Albano, as well 
                as his participation in the Second Council of Lyons, demonstrates his 
                commitment to the broader Church beyond the Franciscan Order. His humility 
                in initially refusing the archbishopric of York and his willingness 
                to serve in whatever capacity the Church needed him show his deep sense 
                of obedience and service to the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 15</div>
              <p className="text-gray-600">Feast of St. Bonaventure</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bonaventure is celebrated on July 15th, commemorating 
                the day of his death in 1274. This feast is celebrated as a memorial 
                in the Roman Catholic Church, recognizing his importance as a Doctor 
                of the Church and his contributions to theology and spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Bonaventure, many people pray for the gift 
                of wisdom and the ability to integrate faith and reason in their lives. 
                Churches, particularly Franciscan communities, may hold special services 
                focusing on his theological contributions and his example of combining 
                scholarship with spirituality.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom, 
                for success in studies, and for the grace to see God in all things. 
                Many also pray for the Franciscan Order and for all those engaged 
                in theological study and teaching, asking for St. Bonaventure's intercession 
                in their work.
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
                  <li>• <strong>Theologians:</strong> Patron of theological studies</li>
                  <li>• <strong>Students:</strong> Patron of students and scholars</li>
                  <li>• <strong>Franciscans:</strong> Patron of the Franciscan Order</li>
                  <li>• <strong>Bishops:</strong> Patron of bishops and church leaders</li>
                  <li>• <strong>Mystics:</strong> Patron of mystical theology</li>
                  <li>• <strong>Intellectuals:</strong> Patron of Christian intellectuals</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Wisdom:</strong> Gift of wisdom and understanding</li>
                  <li>• <strong>Academic Success:</strong> Help in studies and learning</li>
                  <li>• <strong>Faith and Reason:</strong> Integration of faith and science</li>
                  <li>• <strong>Spiritual Growth:</strong> Deepening of spiritual life</li>
                  <li>• <strong>Church Unity:</strong> Unity within religious orders</li>
                  <li>• <strong>Mystical Experience:</strong> Growth in mystical prayer</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bonaventure</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Bonaventure, Seraphic Doctor and Bishop, who combined the 
                    wisdom of the schools with the simplicity of the Gospel, intercede 
                    for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    You who were a master of both theology and spirituality, help us 
                    to integrate our faith with our reason and to see God in all things. 
                    Guide us in our studies and help us to grow in wisdom and understanding.
                  </p>
                  <p className="mb-4">
                    You who led the Franciscan Order with such wisdom and humility, 
                    help us to serve the Church with the same spirit of obedience and 
                    love. Teach us to balance our intellectual pursuits with our spiritual 
                    growth.
                  </p>
                  <p>
                    St. Bonaventure, pray for us that we may have the wisdom to see 
                    God in all creation and the humility to serve Him in all things. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Students</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bonaventure, patron of students and scholars, intercede for 
                    all those who are engaged in study and learning.
                  </p>
                  <p>
                    Help them to grow in wisdom and to use their knowledge for the 
                    glory of God and the good of others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bonaventure, pray for us!"
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
            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Angelic Doctor and friend of St. Bonaventure.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan Order and patron of ecology.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony-padua" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan preacher and Doctor of the Church.
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