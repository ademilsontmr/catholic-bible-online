import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Jude Thaddeus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, patron saint of desperate cases and one of the Twelve Apostles.',
  keywords: [
    'st jude thaddeus',
    'saint jude',
    'patron saint of desperate cases',
    'october 28 feast day',
    'catholic saints',
    'apostle jude',
    'hopeless cases'
  ],
  openGraph: {
    title: 'St. Jude Thaddeus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, patron saint of desperate cases and one of the Twelve Apostles.',
    url: 'https://catholicbibleonline.com/saints/st-jude-thaddeus',
  },
  twitter: {
    title: 'St. Jude Thaddeus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Jude Thaddeus, patron saint of desperate cases and one of the Twelve Apostles.',
  }
}

export default function StJudeThaddeusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Jude Thaddeus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Desperate Cases and One of the Twelve Apostles
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Jude Thaddeus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Apostle Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Jude Thaddeus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Jude, known as Thaddeus, was a brother of St. James the Less, and 
                a relative of Our Saviour. He was one of the 12 Apostles of Jesus and 
                his attribute is a club. Images of St. Jude often include a flame around 
                his head, which represent his presence at Pentecost, when he accepted 
                the Holy Spirit alongside the other apostles. Another attribute is St. 
                Jude holding an image of Christ, in the Image of Edessa. Sometimes he 
                can also be seen holding a carpenter's ruler or is depicted with a scroll 
                or book, the Epistle of Jude.
              </p>
              
              <p className="mb-6">
                Biblical scholars agree St. Jude was a son of Clopas and his mother 
                Mary was the Virgin Mary's cousin. Ancient writers tell us that he 
                preached the Gospel in Judea, Samaria, Idumaea, Syria, Mesopotamia, 
                and Libya. According to Eusebius, he returned to Jerusalem in the year 
                62, and assisted at the election of his brother, St. Simeon, as Bishop 
                of Jerusalem. Saint Jude is not the same person as Judas Iscariot, who 
                betrayed Our Lord and despaired because of his great sin and lack of 
                trust in God's mercy.
              </p>
              
              <p className="mb-6">
                Jude was the one who asked Jesus at the Last Supper why He would not 
                manifest Himself to the whole world after His resurrection. Little else 
                is known of his life. Legend claims that he visited Beirut and Edessa 
                and could have been martyred with St. Simon in Persia. He is an author 
                of an epistle (letter) to the Churches of the East, particularly the 
                Jewish converts, directed against the heresies of the Simonians, 
                Nicolaites, and Gnostics.
              </p>
              
              <p>
                Though Saint Gregory the Illuminator has been credited as the "Apostle 
                to the Armenians," the Apostles Jude and Bartholomew are believed to 
                have brought Christianity to Armenia, where Jude was rumored to have 
                later been martyred. There is some debate about where Jude died, though 
                most Biblical scholars agree he was martyred. He is believed to have 
                been martyred either in Armenia or Beirut. Following his death, St. 
                Jude's body was brought to Rome and left in a crypt in St. Peter's 
                Basilica. Today his bones can be found in the left transept of St. 
                Peter's Basilica under the main altar of St. Joseph in a tomb he shares 
                with the remains of the apostle Simon the Zealot.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Jude Thaddeus: Patron of Desperate Cases</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Desperate Cases</h3>
              <p className="mb-6">
                St. Jude's greatest legacy is his role as the patron saint of desperate 
                cases and hopeless situations. Pilgrims came to St. Jude's grave to pray 
                and many reported a powerful intercession, leading to the title, "The 
                Saint for the Hopeless and the Despaired." Two Saints, St. Bridget of 
                Sweden and St. Bernard, had visions from God asking them to accept St. 
                Jude as "The Patron Saint of the Impossible." Roman Catholics invoke 
                St. Jude when in desperate situations because his New Testament letter 
                stresses that the faithful should persevere in the environment of harsh, 
                difficult circumstances - just as their forefathers had done before them.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Apostolic Missionary</h3>
              <p className="mb-6">
                St. Jude's missionary work extended across multiple regions, including 
                Judea, Samaria, Idumaea, Syria, Mesopotamia, and Libya. He is credited 
                with bringing Christianity to Armenia alongside St. Bartholomew, 
                establishing the foundation for one of the world's oldest Christian 
                communities. His epistle to the Churches of the East demonstrates his 
                theological depth and his commitment to defending the faith against 
                heresies such as the Simonians, Nicolaites, and Gnostics. This letter 
                continues to be a source of guidance for Christians facing difficult 
                circumstances and false teachings.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Universal Patronage</h3>
              <p>
                St. Jude's patronage extends to numerous organizations and causes. The 
                Chicago Police Department and Clube de Regatas do Flamengo - the Rio 
                de Janeiro soccer team - have made Saint Jude their patron saint. There 
                are several hospitals who have also accepted him as their patron saint, 
                including the well-known children's hospital St. Jude Children's Research 
                Hospital in Memphis, Tennessee. The National Shrine of Saint Jude was 
                founded in 1955 and can be found in England. His intercession is sought 
                by millions of people worldwide who face seemingly impossible situations, 
                making him one of the most beloved and invoked saints in the Catholic Church.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">October 28</div>
              <p className="text-gray-600">Feast of St. Jude Thaddeus</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Jude Thaddeus is celebrated on October 28th, the 
                traditional date commemorating his martyrdom. This feast is celebrated 
                as a feast day in the Roman Catholic Church, and it is a particularly 
                important day for those who seek his intercession for desperate cases 
                and impossible situations. The feast falls during the autumn season, 
                a time when many people reflect on the challenges and difficulties of 
                life, making it especially meaningful for those who turn to St. Jude 
                for help.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Jude's feast day, many people participate in special devotions 
                and novenas to seek his intercession. Churches often hold special 
                Masses and prayer services for those facing desperate situations. Many 
                people light candles, offer prayers, and make pilgrimages to shrines 
                dedicated to St. Jude. The day is marked by prayers for hope, healing, 
                and miracles, particularly for those who feel they have nowhere else 
                to turn. St. Jude's feast day serves as a reminder that no situation 
                is truly hopeless when we place our trust in God and the intercession 
                of the saints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Jude or 
                to begin a novena to him for desperate cases. Many people make special 
                petitions for healing, financial difficulties, family problems, or 
                other seemingly impossible situations. The day is also a time to reflect 
                on St. Jude's example of perseverance in difficult circumstances and 
                to remember that God's power is made perfect in our weakness. St. Jude's 
                feast day encourages us to never give up hope and to trust in God's 
                mercy and the intercession of the saints.
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
                  <li>• <strong>Desperate Cases:</strong> Patron of hopeless situations</li>
                  <li>• <strong>Impossible Cases:</strong> Patron of impossible causes</li>
                  <li>• <strong>Hospitals:</strong> Patron of medical institutions</li>
                  <li>• <strong>Police Officers:</strong> Patron of law enforcement</li>
                  <li>• <strong>Armenia:</strong> Patron of Armenian Christians</li>
                  <li>• <strong>Lost Causes:</strong> Patron of those without hope</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healing:</strong> Patron of miraculous healing</li>
                  <li>• <strong>Perseverance:</strong> Helper in difficult times</li>
                  <li>• <strong>Hope:</strong> Patron of those who have lost hope</li>
                  <li>• <strong>Miracles:</strong> Patron of impossible miracles</li>
                  <li>• <strong>Protection:</strong> Guardian against despair</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Jude</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O most holy apostle, Saint Jude, faithful servant and friend of 
                    Jesus, the Church honoureth and invoketh thee universally, as the 
                    patron of hopeless cases, and of things almost despaired of. Pray 
                    for me, who am so miserable.
                  </p>
                  <p className="mb-4">
                    Make use, I implore thee, of that particular privilege accorded to 
                    thee, to bring visible and speedy help where help was almost despaired 
                    of. Come to mine assistance in this great need, that I may receive 
                    the consolation and succor of Heaven in all my necessities, tribulations, 
                    and sufferings, particularly (here make your request) and that I may 
                    praise God with thee and all the elect throughout eternity.
                  </p>
                  <p>
                    I promise thee, O blessed Jude, to be ever mindful of this great 
                    favour, to always honour thee as my special and powerful patron, 
                    and to gratefully encourage devotion to thee. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Novena to St. Jude</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Apostle and Martyr, great in virtue and rich in miracles, near 
                    kinsman of Jesus Christ, faithful intercessor for all who invoke 
                    thee, special patron in time of need; to thee I have recourse from 
                    the depth of my heart, and humbly beg thee, to whom God hath given 
                    such great power, to come to my assistance; help me now in my urgent 
                    need and grant my earnest petition.
                  </p>
                  <p>
                    I will never forget thy graces and the favors thou dost obtain for 
                    me and I will do my utmost to spread devotion to thee. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Jude, pray for us!"
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
            <Link href="/saints/st-james" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. James the Less
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. Jude and one of the Twelve Apostles.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-simon" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Simon the Zealot
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who was martyred with St. Jude in Persia.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bartholomew" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bartholomew
                </h3>
                <p className="text-gray-700 text-sm">
                  Apostle who brought Christianity to Armenia with St. Jude.
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