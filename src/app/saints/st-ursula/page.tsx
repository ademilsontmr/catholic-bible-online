import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ursula - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ursula, virgin martyr and leader of the Eleven Thousand Virgins, who died for their faith in Cologne.',
  keywords: [
    'st ursula',
    'saint ursula',
    'st ursula biography',
    'st ursula feast day',
    'st ursula patron saint',
    'catholic saints',
    'october 21 feast day',
    'virgin martyrs',
    'eleven thousand virgins'
  ],
  openGraph: {
    title: 'St. Ursula - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ursula, virgin martyr and leader of the Eleven Thousand Virgins.',
    url: 'https://catholicbibleonline.com/saints/st-ursula',
  },
  twitter: {
    title: 'St. Ursula - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ursula, virgin martyr and leader of the Eleven Thousand Virgins.',
  }
}

export default function StUrsulaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ursula
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, Leader of the Eleven Thousand Virgins, Patroness of Young Women
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ursula</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 21</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ursula</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                According to a legend that appeared in the tenth century, St. Ursula was the daughter of a Christian 
                king in Britain. She was a young woman of great beauty and virtue who was granted a three-year 
                postponement of a marriage she did not wish to a pagan prince.
              </p>
              
              <p className="mb-6">
                With ten ladies in waiting, each attended by a thousand maidens, Ursula embarked on a remarkable 
                voyage across the North Sea. This extraordinary pilgrimage took them through the waters of northern 
                Europe, demonstrating their courage and determination to remain faithful to their Christian beliefs.
              </p>
              
              <p className="mb-6">
                The company sailed up the Rhine River to Basle, Switzerland, and then continued their journey to 
                Rome. This pilgrimage was not merely a physical journey but a spiritual one, as they sought to 
                strengthen their faith and devotion to Christ through prayer and penance.
              </p>
              
              <p className="mb-6">
                On their way back from Rome, tragedy struck when they encountered pagan Huns at Cologne around 
                the year 451. The Huns, led by their chieftain, demanded that Ursula marry him. When she steadfastly 
                refused to abandon her Christian faith and virginity, the entire company was massacred.
              </p>
              
              <p className="mb-6">
                According to another legend, Amorica was settled by British colonizers and soldiers after Emperor 
                Magnus Clemens Maximus conquered Britain and Gaul in 383. The ruler of the settlers, Cynan Meiriadog, 
                called on King Dionotus of Cornwall for wives for the settlers, whereupon Dionotus sent his daughter 
                Ursula, who was to marry Cynan, with eleven thousand maidens and sixty thousand common women.
              </p>
              
              <p className="mb-6">
                Their fleet was shipwrecked, and all the women were either enslaved or murdered. This tragic event 
                became the foundation for the legend of the Eleven Thousand Virgins, a story that has inspired 
                countless generations of Christians.
              </p>
              
              <p>
                While these legends are considered pious fictions, what is historically true is that one Clematius, 
                a senator, rebuilt a basilica in Cologne that had originally been built, probably at the beginning 
                of the fourth century, to honor a group of virgins who had been martyred at Cologne. They were 
                evidently venerated enough to have had a church built in their honor, but who they were and how 
                many of them there were remains unknown.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ursula: Virgin Martyr and Leader</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virginity and Courage</h3>
              <p className="mb-6">
                St. Ursula's steadfast refusal to marry the pagan chieftain, even at the cost of her life, 
                demonstrates the power of faith and the value of virginity as a gift to God. Her courage in 
                the face of certain death serves as an inspiration for all who face pressure to compromise 
                their Christian values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Leader of the Eleven Thousand Virgins</h3>
              <p className="mb-6">
                Whether the number is literal or symbolic, the legend of the Eleven Thousand Virgins represents 
                the countless young women who have chosen to remain faithful to Christ and to preserve their 
                virginity for His sake. Ursula's leadership of this company shows her ability to inspire others 
                to follow the path of holiness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pilgrim and Martyr</h3>
              <p className="mb-6">
                Ursula's pilgrimage to Rome demonstrates her deep faith and her desire to strengthen her 
                relationship with God. Her willingness to undertake such a dangerous journey shows her 
                commitment to her spiritual life and her trust in God's protection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Young Women</h3>
              <p>
                St. Ursula has become a powerful patroness for young women, especially those who face pressure 
                to compromise their values or who are called to live lives of consecrated virginity. Her 
                example encourages them to remain strong in their faith and to trust in God's plan for their lives.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 21</div>
              <p className="text-gray-600">Memorial of St. Ursula and Companions, Virgin Martyrs</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ursula is celebrated on October 21st. This memorial honors not only Ursula 
                but also her companions, the Eleven Thousand Virgins, who died with her for their faith in Cologne.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                The legend of St. Ursula and the Eleven Thousand Virgins has been a source of inspiration 
                for centuries, particularly for young women seeking to live lives of virtue and faith. The 
                story has been depicted in countless works of art and literature throughout the Middle Ages 
                and beyond.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for young women, for those 
                seeking to preserve their virginity, for pilgrims and travelers, and for the courage to remain 
                faithful to Christ in the face of persecution or pressure.
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
                  <li>• <strong>Young Women:</strong> Patroness of girls and young women</li>
                  <li>• <strong>Virgin Martyrs:</strong> Model for those preserving virginity</li>
                  <li>• <strong>Pilgrims:</strong> Protector of those on spiritual journeys</li>
                  <li>• <strong>Cologne:</strong> One of the patron saints of Cologne, Germany</li>
                  <li>• <strong>Students:</strong> Patroness of young students</li>
                  <li>• <strong>Travelers:</strong> Protector of those on journeys</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Purity and Chastity:</strong> Helper for those seeking to remain pure</li>
                  <li>• <strong>Courage in Faith:</strong> Patroness of those facing persecution</li>
                  <li>• <strong>Spiritual Pilgrimage:</strong> Helper for those on faith journeys</li>
                  <li>• <strong>Protection from Evil:</strong> Guardian against moral dangers</li>
                  <li>• <strong>Consecrated Virginity:</strong> Patroness of religious vocations</li>
                  <li>• <strong>Safe Travel:</strong> Protector of those on dangerous journeys</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ursula</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ursula, virgin martyr and leader of the Eleven Thousand Virgins, who courageously 
                    refused to abandon your faith and virginity even in the face of death, pray for us who 
                    call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to remain steadfast in our Christian values and to have the courage to stand 
                    firm in our faith when faced with pressure or persecution. Guide young women in their 
                    journey of faith and purity.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the strength to remain faithful 
                    to Christ in all circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Young Women</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ursula, patroness of young women, intercede for all girls and young women who 
                    seek to live lives of virtue and faith in today's world. Help them to remain strong 
                    in their commitment to Christ and to preserve their purity and dignity.
                  </p>
                  <p>
                    Give them the courage to resist pressure to compromise their values and the wisdom 
                    to make choices that honor God. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Pilgrims</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ursula, who led your companions on a pilgrimage to Rome, protect all those 
                    who travel for spiritual purposes. Guide them safely on their journeys and help them 
                    to grow in faith through their experiences.
                  </p>
                  <p>
                    May their pilgrimages bring them closer to God and strengthen their commitment to His service. 
                    Through Christ our Lord. Amen."
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
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who refused marriage to remain faithful to Christ, patroness of young girls.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr and one of the Fourteen Holy Helpers, patroness of childbirth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
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