import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bernardine of Siena - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bernardine of Siena, the great Franciscan preacher and missionary.',
  keywords: [
    'st bernardine of siena',
    'saint bernardine of siena',
    'bernardine of siena biography',
    'bernardine of siena feast day',
    'bernardine of siena patron saint',
    'franciscan preacher',
    'holy name of jesus',
    'may 20 feast day',
    'italian saint',
    'missionary preacher'
  ],
  openGraph: {
    title: 'St. Bernardine of Siena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernardine of Siena, the great Franciscan preacher and missionary.',
    url: 'https://catholicbibleonline.com/saints/st-bernardine-of-siena',
  },
  twitter: {
    title: 'St. Bernardine of Siena - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernardine of Siena, the great Franciscan preacher and missionary.',
  }
}

export default function StBernardineOfSienaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bernardine of Siena
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Great Franciscan Preacher and Missionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bernardine of Siena</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Franciscan Saint</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bernardine of Siena</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                In the year 1400, a young man came to the door of the largest hospital in Siena. A plague was raging through the city so horrible that as many as twenty people died each day just in the hospital alone. And many of the people who died were those who were needed to tend the ill. It was a desperate situation -- more and more people were falling ill and fewer and fewer people were there to help them.
              </p>
              
              <p className="mb-6">
                The twenty-year-old man who stood there had not come because he was ill but because he wanted to help. And he brought not new patients but young men like himself willing to tend the dying. For four months Bernardine and his companions worked day and night not only to comfort the patients but to organize and clean the hospital. Only at the end of the plague did Bernardine himself fall ill -- of exhaustion.
              </p>
              
              <p className="mb-6">
                But that was Bernardine's way -- whatever he did, he put his whole self into it. Immediately after he recovered he was back caring for the sick -- but this time, he was responsible not for a whole hospital but one person -- an invalid aunt. Yet for fourteen months she got his full attention. Throughout his life, he put as much energy into caring for one person as for hundreds, as much commitment into converting one citizen as to preaching to a whole city.
              </p>
              
              <p className="mb-6">
                After his aunt died, Bernardine started to think about where his life should be going. The son of a noble family, he had been orphaned at seven and raised by an aunt. We are told as a young person that he hated indecent talk so much that he would blush when he heard it. Even his schoolmates hesitated to make him so uncomfortable but apparently one adult citizen thought it would be a great joke to needle Bernardine. In a public marketplace he stopped Bernardine and started to talk to him in a shameful way. But if he had thought to get away with his cruel trick, he was surprised when Bernardine slapped him in the face. The man slunk away, shamed in front of the very crowd he'd been trying to impress.
              </p>
              
              <p className="mb-6">
                Bernardine, who had come to Siena to study, threw himself into prayer and fasting to discover what God wanted him to do. One might have expected him to continue his work with the sick but in 1403 he joined the Franciscans and in 1404 he was ordained a priest.
              </p>
              
              <p className="mb-6">
                The Franciscans were known as missionary preachers, but Bernardine did very little preaching with because of a voice that was weak and hoarse. For twelve years he remained in the background, his energies going to prayer or to his own spiritual conversion and preparation.
              </p>
              
              <p className="mb-6">
                At the end of that time, he went to Milan on a mission. When he got up to preach his voice was strong and commanding and his words so convincing that the crowd would not let him leave unless he promised to come back.
              </p>
              
              <p className="mb-6">
                Thus began the missionary life of the one whom Pope Pius II called a second Paul. As usual, Bernardine through his whole self, body and soul, into his new career. He crisscrossed Italy on foot, preaching for hours at a time, several times a day. We are told he preached on punishment for sin as well as reward for virtue but focusing in the end on the mercy of Jesus and the love of Mary. His special devotion was to the Holy Name of Jesus.
              </p>
              
              <p className="mb-6">
                Some who were jealous denounced him to the pope by saying he preached superstition. Silenced for a short while, Bernardine was soon cleared and back to preaching.
              </p>
              
              <p className="mb-6">
                Bernardine refused several cities that wanted him as bishop but he was unable to avoid being named vicar general of his order. All his energy during that period went to renewing the original spirit of the order.
              </p>
              
              <p>
                Soon, however, Bernardine heard the call to go back to preaching which consumed his last days. As a matter of fact, even when it was clear he was dying, he preached fifty consecutive days. He died in 1444 when he was almost 64 years old.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bernardine of Siena: The Second Paul</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Great Missionary Preacher</h3>
              <p className="mb-6">
                St. Bernardine of Siena is remembered as one of the greatest preachers of the 15th century, earning the title "Second Paul" from Pope Pius II. His missionary work crisscrossed Italy, bringing the Gospel to countless people through his powerful preaching. Despite starting with a weak and hoarse voice, he became known for his commanding presence and convincing words that moved entire crowds.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Holy Name of Jesus</h3>
              <p className="mb-6">
                St. Bernardine's special devotion to the Holy Name of Jesus became one of his most lasting contributions to Catholic spirituality. He promoted reverence for the name of Jesus and helped spread this devotion throughout Italy and beyond. His preaching emphasized the mercy of Jesus and the love of Mary, balancing warnings about sin with the promise of God's mercy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Complete Dedication</h3>
              <p className="mb-6">
                St. Bernardine's life demonstrates complete dedication to whatever task God called him to perform. Whether caring for plague victims in a hospital, tending to his invalid aunt, or preaching to thousands, he put his whole self into his work. His commitment to serving others, even at the cost of his own health, serves as an example of selfless service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Franciscan Renewal</h3>
              <p>
                As vicar general of the Franciscan order, St. Bernardine worked to renew the original spirit of the Franciscans. His leadership helped restore the order's commitment to poverty, preaching, and service to the poor. His influence extended beyond his lifetime, helping to shape the Franciscan order for generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 20</div>
              <p className="text-gray-600">Feast of St. Bernardine of Siena, Great Preacher</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bernardine of Siena is celebrated on May 20th, commemorating his death and his lifelong dedication to preaching the Gospel. This date is particularly significant in Franciscan communities and in Italy, where his missionary work had such a profound impact.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Holy Name</h3>
              <p className="mb-6">
                On his feast day, many Catholics renew their devotion to the Holy Name of Jesus, a practice that St. Bernardine promoted throughout his life. Churches and communities may hold special services or prayers focusing on reverence for the name of Jesus and the mercy of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Reflection</h3>
              <p>
                The feast day is an excellent time to pray for preachers and missionaries, to ask for St. Bernardine's intercession in choosing our words carefully, and to reflect on how we can better serve others with complete dedication, as he did throughout his life.
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
                  <li>• <strong>Preachers:</strong> Those who proclaim the Gospel</li>
                  <li>• <strong>Public Speakers:</strong> Orators and communicators</li>
                  <li>• <strong>Advertisers:</strong> Those in marketing and publicity</li>
                  <li>• <strong>Gamblers:</strong> Those struggling with gambling addiction</li>
                  <li>• <strong>Respiratory Problems:</strong> Those with breathing difficulties</li>
                  <li>• <strong>Hoarseness:</strong> Voice and throat conditions</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Holy Name Devotion:</strong> Reverence for Jesus' name</li>
                  <li>• <strong>Missionary Work:</strong> Evangelization and preaching</li>
                  <li>• <strong>Complete Dedication:</strong> Whole-hearted service</li>
                  <li>• <strong>Franciscan Spirit:</strong> Poverty and simplicity</li>
                  <li>• <strong>Care for the Sick:</strong> Hospital and medical ministry</li>
                  <li>• <strong>Moral Purity:</strong> Avoiding indecent speech</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bernardine of Siena</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Bernardine of Siena, words were very important to you. You spent most of your life speaking the golden words of Jesus' mercy and his Holy Name.
                  </p>
                  <p className="mb-4">
                    And you abhorred words that were shameful. Pray for us that we may always choose to speak Jesus' name with reverence and choose words of love over words of shame.
                  </p>
                  <p>
                    Help us to put our whole selves into serving God and others, as you did throughout your life. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Preachers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bernardine of Siena, great preacher and missionary, intercede for all who proclaim the Gospel today.
                  </p>
                  <p>
                    Help them to speak with conviction and love, to balance truth with mercy, and to always point others to Jesus. May their words bring healing and conversion to all who hear them. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Holy Name</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bernardine of Siena, devoted to the Holy Name of Jesus, help us to always speak the name of Jesus with reverence and love.
                  </p>
                  <p>
                    May we avoid all indecent and harmful speech, and instead use our words to bring glory to God and comfort to others. Amen."
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
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Franciscan Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order that St. Bernardine served.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Preacher Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Franciscan preacher and miracle worker.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-bosco" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Educator Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Bosco
                </h3>
                <p className="text-gray-700 text-sm">
                  Saint who also worked with young people and promoted education.
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