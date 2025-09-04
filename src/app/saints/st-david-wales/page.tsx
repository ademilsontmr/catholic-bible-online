import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. David of Wales - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. David of Wales, patron saint of Wales and founder of monasteries.',
  keywords: [
    'st david of wales',
    'saint david of wales',
    'st david of wales biography',
    'st david of wales feast day',
    'st david of wales patron saint',
    'catholic saints',
    'wales patron saint'
  ],
  openGraph: {
    title: 'St. David of Wales - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. David of Wales, patron saint of Wales.',
    url: 'https://catholicbibleonline.com/saints/st-david-wales',
  },
  twitter: {
    title: 'St. David of Wales - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. David of Wales, patron saint of Wales.',
  }
}

export default function StDavidWalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. David of Wales
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Wales and Founder of Monastic Communities
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. David of Wales</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌿</div>
              <div className="text-sm text-gray-600">Monk</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. David of Wales</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                According to tradition, St. David was the son of King Sant of South Wales and St. Non. 
                Born into a royal family, he was destined for greatness, but not of the worldly kind. 
                From an early age, David showed a deep inclination toward the spiritual life, choosing 
                the path of holiness over the privileges of his noble birth.
              </p>
              
              <p className="mb-6">
                David was ordained a priest and later studied under St. Paulinus, a renowned spiritual 
                master of the time. Under Paulinus's guidance, David developed a profound understanding 
                of the Christian faith and monastic spirituality. This education would form the foundation 
                for his future work as a missionary and monastic founder.
              </p>
              
              <p className="mb-6">
                Following his studies, St. David became deeply involved in missionary work throughout 
                Wales. His preaching and example of holiness attracted many followers, and he founded 
                a number of monasteries across the region. These monastic communities became centers 
                of learning, prayer, and evangelization, spreading the Christian faith throughout Wales.
              </p>
              
              <p className="mb-6">
                The most famous of these foundations was the monastery at Menevia in Southwestern Wales. 
                This monastery was noted for its extreme asceticism and strict discipline. David and his 
                monks lived a life of remarkable austerity - they drank neither wine nor beer, only water, 
                while putting in a full day of heavy manual labor and intense study. This rigorous lifestyle 
                was not meant to be a form of self-punishment, but rather a means of spiritual purification 
                and a witness to the power of God's grace.
              </p>
              
              <p className="mb-6">
                Around the year 550, St. David attended a synod at Brevi in Cardiganshire. His contributions 
                at this important ecclesiastical gathering were so profound and insightful that they became 
                the major cause for his election as primate of the Cambrian Church. This position made him 
                the spiritual leader of the Church in Wales, a responsibility he carried with great humility 
                and dedication.
              </p>
              
              <p className="mb-6">
                Tradition holds that St. David was consecrated archbishop by the patriarch of Jerusalem 
                while on a visit to the Holy Land. This consecration, whether historical or symbolic, 
                underscores the importance of his role in the early Welsh Church and his connection to 
                the universal Church. He is also said to have invoked a council that ended the last 
                vestiges of Pelagianism, a heresy that denied the necessity of divine grace for salvation.
              </p>
              
              <p>
                St. David died at his monastery in Menevia around the year 589, having spent his life 
                in service to God and the Church. His cult was officially approved in 1120 by Pope 
                Callistus II, and he is revered as the patron saint of Wales. His legacy continues to 
                inspire Christians throughout the world, particularly in Wales, where his feast day is 
                celebrated with great devotion.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. David of Wales: Father of Welsh Christianity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Wales</h3>
              <p className="mb-6">
                St. David's most enduring legacy is his role as the patron saint of Wales. His life and 
                ministry were so influential that he became the spiritual father of the Welsh nation. 
                His feast day, March 1st, is celebrated throughout Wales with parades, church services, 
                and cultural events. The daffodil and leek, symbols associated with St. David, are worn 
                with pride by the Welsh people on his feast day, demonstrating the deep connection 
                between the saint and Welsh national identity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Monastic Foundation and Leadership</h3>
              <p className="mb-6">
                St. David's establishment of monastic communities throughout Wales had a profound impact 
                on the spiritual and cultural development of the region. These monasteries became centers 
                of learning, preserving both Christian and Celtic traditions. The extreme asceticism 
                practiced at Menevia, where monks drank only water and engaged in heavy manual labor, 
                set a standard for monastic discipline that influenced religious life throughout the 
                British Isles. Many monasteries flourished as a result of his leadership and good example.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Leadership and Orthodoxy</h3>
              <p className="mb-6">
                As primate of the Cambrian Church, St. David provided essential leadership during a 
                crucial period in Welsh Christian history. His role in ending the last vestiges of 
                Pelagianism demonstrates his commitment to orthodox Christian teaching and his ability 
                to guide the Church through theological challenges. His staunch adherence to monastic 
                piety and his emphasis on prayer and study provided a model for spiritual formation 
                that remains relevant for modern Christians seeking order and form in their prayer life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Asceticism and Discipline</h3>
              <p>
                St. David's life of extreme asceticism, particularly his practice of drinking only water 
                and engaging in rigorous manual labor, serves as a powerful example of self-discipline 
                and spiritual purification. His approach to monastic life emphasized the importance of 
                physical work, mental discipline, and spiritual growth working together in harmony. This 
                holistic approach to Christian living continues to inspire those seeking to integrate 
                their faith into all aspects of their daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 1</div>
              <p className="text-gray-600">Feast of St. David of Wales, Bishop and Confessor</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. David's feast day is celebrated on March 1st, commemorating his death and his 
                contributions to the Church in Wales. This feast is particularly important in Wales, 
                where it is celebrated as a national holiday. Churches throughout Wales hold special 
                services, and many people attend Mass or other religious observances to honor their 
                patron saint.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. David's Day, the Welsh people celebrate their national identity and cultural 
                heritage. Traditional customs include wearing daffodils and leeks, symbols associated 
                with the saint. Parades and festivals are held throughout Wales, featuring traditional 
                music, dance, and poetry. Many schools and organizations hold special events to celebrate 
                Welsh culture and the legacy of St. David. The day is also marked by the singing of 
                traditional Welsh hymns and the recitation of poetry in the Welsh language.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                Devotees pray to St. David for guidance in spiritual discipline, for the preservation 
                of Welsh culture and language, for strength in maintaining orthodox Christian teaching, 
                and for the grace to live lives of simplicity and prayer. His intercession is particularly 
                sought by those involved in monastic life, by the Welsh people, and by all who seek to 
                integrate their faith with their cultural heritage.
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
                  <li>• <strong>Wales:</strong> As the patron saint of the Welsh nation</li>
                  <li>• <strong>Poets:</strong> For his eloquence and wisdom</li>
                  <li>• <strong>Monks:</strong> As a model of monastic life</li>
                  <li>• <strong>Welsh People:</strong> For his protection and intercession</li>
                  <li>• <strong>Monasteries:</strong> As a founder of monastic communities</li>
                  <li>• <strong>Bishops:</strong> As primate of the Cambrian Church</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Discipline:</strong> For strength in ascetic practices</li>
                  <li>• <strong>Welsh Culture:</strong> For preservation of heritage</li>
                  <li>• <strong>Orthodoxy:</strong> For defense of true teaching</li>
                  <li>• <strong>Monastic Life:</strong> For guidance in religious vocation</li>
                  <li>• <strong>Manual Labor:</strong> For sanctification of work</li>
                  <li>• <strong>Study:</strong> For wisdom and learning</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. David of Wales</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed St. David of Wales, patron saint of the Welsh nation and model of 
                    monastic discipline, intercede for us before the throne of God.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of spiritual discipline and asceticism, showing 
                    us that true holiness comes through prayer, work, and study. Grant us the grace 
                    to live lives of simplicity and devotion, putting God first in all things.
                  </p>
                  <p className="mb-4">
                    Inspire us with your commitment to orthodox teaching and your defense of the 
                    faith. Help us to be steadfast in our beliefs and courageous in proclaiming 
                    the truth of the Gospel.
                  </p>
                  <p>
                    Through your intercession, may we grow in wisdom and holiness, and may the 
                    Welsh people continue to be blessed by your protection and guidance. St. David 
                    of Wales, pray for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. David of Wales, patron saint and spiritual father, pray for us!"
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
            <Link href="/saints/st-non" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Non
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of St. David and a saint in her own right.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paulinus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paulinus
                </h3>
                <p className="text-gray-700 text-sm">
                  Spiritual master under whom St. David studied.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-patrick" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Patrick
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle of Ireland, contemporary missionary in the British Isles.
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