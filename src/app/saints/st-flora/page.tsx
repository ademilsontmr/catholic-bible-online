import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Flora - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Flora, virgin and mystic known for her mystical experiences and patronage of the abandoned and converts.',
  keywords: [
    'st flora',
    'saint flora',
    'st flora biography',
    'st flora feast day',
    'st flora patron saint',
    'virgin saint',
    'mystic saint',
    'french saint',
    'hospitaller nun',
    'abandoned patron',
    'converts patron',
    'catholic saints',
    'october 5 feast day'
  ],
  openGraph: {
    title: 'St. Flora - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Flora, virgin and mystic known for her mystical experiences and patronage of the abandoned and converts.',
    url: 'https://catholicbibleonline.com/saints/st-flora',
  },
  twitter: {
    title: 'St. Flora - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Flora, virgin and mystic known for her mystical experiences and patronage of the abandoned and converts.',
  }
}

export default function StFloraPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Flora
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin, Mystic, Patron of the Abandoned and Converts
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Flora</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Flora</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Flora was born in France around the year 1309, during a time when the Church was 
                experiencing both great spiritual renewal and significant challenges. From an early age, 
                she demonstrated exceptional devotion to God, showing a deep love for prayer and spiritual 
                matters that would characterize her entire life.
              </p>
              
              <p className="mb-6">
                As a devout child, Flora resisted all attempts on the part of her parents to find a husband 
                for her, feeling called to a life of consecrated virginity. Her determination to remain 
                single for the sake of the Kingdom of God showed her strong will and deep spiritual 
                conviction, even in the face of family pressure and societal expectations.
              </p>
              
              <p className="mb-6">
                In 1324, at the age of fifteen, Flora entered the Priory of Beaulieu of the Hospitaller 
                nuns of St. John of Jerusalem. This religious community was dedicated to serving the poor 
                and sick, following the example of St. John the Baptist and the early Christian tradition 
                of hospitality and care for those in need.
              </p>
              
              <p className="mb-6">
                However, her religious life was not without challenges. Flora was beset with many and 
                diverse trials, fell into a depressed state, and was made sport of by some of her religious 
                sisters. Despite these difficulties, she never ceased to find favor with God and was granted 
                many unusual and mystical favors that would mark her as a special instrument of divine grace.
              </p>
              
              <p className="mb-6">
                One year on the feast of All Saints, Flora fell into an ecstasy and took no nourishment 
                until three weeks later on the feast of St. Cecilia. This extraordinary mystical experience 
                demonstrated her deep union with God and her ability to transcend ordinary human needs 
                through divine grace.
              </p>
              
              <p className="mb-6">
                On another occasion, while meditating on the Holy Spirit, she was raised four feet from 
                the ground and hung in the air in full view of many onlookers. This miraculous levitation 
                was a visible sign of her spiritual elevation and the power of God working through her.
              </p>
              
              <p className="mb-6">
                St. Flora also seemed to be pierced with the arms of Our Lord's cross, causing blood to 
                flow freely at times from her side and at others, from her mouth. These mystical wounds, 
                similar to the stigmata experienced by other saints, showed her deep participation in the 
                sufferings of Christ and her complete identification with His Passion.
              </p>
              
              <p>
                Other instances of God's favoring of his servant were also reported, concerning prophetic 
                knowledge of matters of which she could not naturally know. Through it all, St. Flora 
                remained humble and in complete communion with her Divine Master, rendering wise counsel 
                to all who flocked to her because of her holiness and spiritual discernment. In 1347, she 
                was called to her eternal reward, and many miracles were worked at her tomb, confirming 
                her sanctity and the power of her intercession.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Flora: Mystic and Patron of the Marginalized</h2>
          
          <div className="bg-pink-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Mystical Union</h3>
              <p className="mb-6">
                St. Flora's legacy is marked by her extraordinary mystical experiences and her deep union 
                with God. Her ecstasies, levitations, and mystical wounds demonstrate the reality of divine 
                grace and the possibility of intimate communion with God. Her example shows that holiness 
                is not limited to external actions but can manifest in extraordinary mystical phenomena 
                that bear witness to the power of divine love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Abandoned</h3>
              <p className="mb-6">
                As the patron of the abandoned, St. Flora understands the pain of rejection and isolation. 
                Her experience of being mocked by her religious sisters and falling into depression shows 
                her solidarity with those who feel abandoned or rejected. Her intercession is particularly 
                powerful for those who feel alone, misunderstood, or cast aside by society or even by 
                their own communities.
              </p>
              
                             <h3 className="text-xl font-semibold text-black mb-4">Helper of Converts</h3>
               <p className="mb-6">
                 St. Flora's patronage of converts reflects her own conversion from worldly expectations 
                 to a life of complete dedication to God. Her resistance to marriage and her choice of 
                 religious life show the courage needed to follow God's call, even when it goes against 
                 family and societal expectations. She is a powerful intercessor for those making the 
                 difficult journey of conversion and spiritual transformation.
               </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Perseverance</h3>
              <p>
                Despite her extraordinary mystical experiences, St. Flora remained humble and continued 
                to serve others with wisdom and compassion. Her ability to provide spiritual counsel 
                while experiencing profound mystical states shows that true holiness combines deep prayer 
                with practical service to others. Her example teaches us that spiritual gifts are given 
                not for personal glory but for the service of God and neighbor.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-pink-600 mb-2">October 5</div>
              <p className="text-gray-600">Feast of St. Flora</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Flora is celebrated on October 5th. This feast day honors her life of mystical union 
                with God, her patronage of the abandoned and converts, and her example of humility and 
                perseverance in the face of trials.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those who feel abandoned or rejected, for converts 
                to the faith, for single women discerning their vocation, and for victims of betrayal. 
                It's also a day to reflect on the power of mystical prayer and the reality of divine grace.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the abandoned and rejected, for those 
                undergoing conversion, for single women seeking their vocation, and to ask for St. Flora's 
                intercession in experiencing deeper union with God.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Abandoned:</strong> Patron of those who feel rejected or alone</li>
                  <li>• <strong>Converts:</strong> Patron of those converting to the faith</li>
                  <li>• <strong>Single Laywomen:</strong> Patron of unmarried women</li>
                  <li>• <strong>Victims of Betrayal:</strong> Patron of those betrayed by others</li>
                  <li>• <strong>Mystics:</strong> Patron of those seeking mystical union with God</li>
                  <li>• <strong>Religious Sisters:</strong> Patron of nuns and religious women</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Depression:</strong> Helper for those suffering from depression</li>
                  <li>• <strong>Spiritual Trials:</strong> Patron of those experiencing spiritual difficulties</li>
                  <li>• <strong>Mystical Prayer:</strong> Helper for those seeking deeper prayer</li>
                  <li>• <strong>Family Pressure:</strong> Patron of those resisting family expectations</li>
                  <li>• <strong>Religious Persecution:</strong> Helper for those mocked for their faith</li>
                  <li>• <strong>Divine Favor:</strong> Patron of those seeking God's special graces</li>
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
              <div className="bg-pink-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Flora</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Flora, you who experienced the depths of mystical union with God and the pain 
                    of being misunderstood, help me to find strength in times of trial and rejection.
                  </p>
                  <p>
                    You who resisted family pressure to follow God's call, teach me to be courageous in 
                    following my vocation. Help me to remain humble and faithful even when others mock 
                    or misunderstand my spiritual journey. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Abandoned</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Flora, patron of the abandoned, pray for all those who feel rejected, alone, 
                    or misunderstood.
                  </p>
                  <p>
                    Help them to find comfort in God's love and to know that they are never truly alone. 
                    May your intercession bring them hope and the strength to persevere. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Flora, pray for us!"
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
            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Therese of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Little Flower, Carmelite nun, Doctor of the Church, patron of missionaries.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita-of-cascia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Widow Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Widow and nun, patron of impossible causes and difficult marriages.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-of-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mystic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Stigmatist, founder of Franciscans, patron of animals and ecology.
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