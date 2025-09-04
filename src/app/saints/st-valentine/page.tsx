import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Valentine - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Valentine of Rome, patron saint of love, marriage, and young people.',
  keywords: [
    'st valentine',
    'saint valentine',
    'valentines day',
    'patron saint of love',
    'february 14 feast day',
    'catholic saints',
    'romantic saints'
  ],
  openGraph: {
    title: 'St. Valentine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Valentine of Rome, patron saint of love, marriage, and young people.',
    url: 'https://catholicbibleonline.com/saints/st-valentine',
  },
  twitter: {
    title: 'St. Valentine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Valentine of Rome, patron saint of love, marriage, and young people.',
  }
}

export default function StValentinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Valentine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Love, Marriage and Young People
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Valentine</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💝</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Valentine</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Valentine, officially known as Saint Valentine of Rome, is a 
                third-century Roman saint widely celebrated on February 14 and commonly 
                associated with "courtly love." Although not much of St. Valentine's 
                life is reliably known, and whether the stories involve two different 
                saints by the same name is also not officially decided, it is highly 
                agreed that St. Valentine was martyred and then buried on the Via 
                Flaminia to the north of Rome.
              </p>
              
              <p className="mb-6">
                In 1969, the Roman Catholic Church removed St. Valentine from the 
                General Roman Calendar because so little is known about him. However, 
                the church still recognizes him as a saint, listing him in the February 
                14 spot of Roman Martyrology. The legends attributed to the mysterious 
                saint are as inconsistent as the actual identification of the man.
              </p>
              
              <p className="mb-6">
                One common story about St. Valentine is that at one point in his life, 
                as the former Bishop of Terni, Narnia and Amelia, he was on house arrest 
                with Judge Asterius. While discussing religion and faith with the Judge, 
                Valentine pledged the validity of Jesus. The judge immediately put Valentine 
                and his faith to the test. St. Valentine was presented with the judge's 
                blind daughter and told to restore her sight. If he succeeded, the judge 
                vowed to do anything for Valentine. Placing his hands onto her eyes, 
                Valentine restored the child's vision.
              </p>
              
              <p className="mb-6">
                Judge Asterius was humbled and obeyed Valentine's requests. Asterius 
                broke all the idols around his house, fasted for three days and became 
                baptized, along with his family and entire 44-member household. The now 
                faithful judge then freed all of his Christian inmates. St. Valentine 
                was later arrested again for continuing to try to convert people to 
                Christianity. He was sent to Rome under the emperor Claudius Gothicus 
                (Claudius II).
              </p>
              
              <p>
                According to the popular hagiographical identity, and what is believed 
                to be the first representation of St. Valentine, the Nuremberg Chronicle, 
                St. Valentine was a Roman priest martyred during Claudius' reign. The 
                story tells that St. Valentine was imprisoned for marrying Christian 
                couples and aiding Christians being persecuted by Claudius in Rome. 
                Both acts were considered serious crimes. A relationship between the 
                saint and emperor began to grow, until Valentine attempted to convince 
                Claudius of Christianity. Claudius became enraged and sentenced Valentine 
                to death, commanding him to renounce his faith or be beaten with clubs 
                and beheaded. St. Valentine refused to renounce his faith and Christianity 
                and was executed outside the Flaminian Gate on February 14, 269.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Valentine: Patron of Love and Marriage</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Love and Romance</h3>
              <p className="mb-6">
                St. Valentine's greatest legacy is his association with love, romance, 
                and marriage. Although the exact origin of Valentine's Day is not widely 
                agreed upon, it is widely recognized as a day for love, devotion and 
                romance. The romantic nature of Valentine's Day may have derived during 
                the Middle Ages, when it was believed that birds paired couples in 
                mid-February. According to English 18th-century antiquarians Alban 
                Butler and Francis Douce, Valentine's Day was most likely created to 
                overpower the pagan holiday, Lupercalia.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Martyr for Christian Marriage</h3>
              <p className="mb-6">
                St. Valentine's legacy as a defender of Christian marriage is central 
                to his story. He is said to have secretly married Christian couples 
                so husbands wouldn't have to go to war, and he continued to perform 
                Christian marriages despite the persecution. His willingness to die 
                rather than renounce his faith demonstrates his commitment to the 
                sanctity of marriage and the Christian way of life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Universal Patronage</h3>
              <p>
                St. Valentine's patronage extends far beyond romantic love. He is the 
                patron saint of affianced couples, bee keepers, engaged couples, 
                epilepsy, fainting, greetings, happy marriages, love, lovers, plague, 
                travellers, and young people. His relics can be found all over the 
                world, from Rome to Dublin, Prague to Malta, demonstrating the universal 
                appeal and devotion to this mysterious but beloved saint.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">February 14</div>
              <p className="text-gray-600">Feast of St. Valentine</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Valentine is celebrated on February 14th, a date that 
                has become synonymous with love and romance worldwide. While the Roman 
                Catholic Church removed St. Valentine from the General Roman Calendar 
                in 1969 due to the lack of historical information, the church still 
                recognizes him as a saint, listing him in the February 14 spot of 
                Roman Martyrology. In 496 AD, Pope Gelasius marked February 14th as 
                a celebration in honor of his martyrdom.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                Valentine's Day has evolved into one of the most popular secular 
                celebrations, with traditions including exchanging cards, flowers, 
                and chocolates. Many churches hold special Masses for couples and 
                those seeking love. The day is marked by celebrations of romantic 
                love, friendship, and the bonds of marriage. St. Valentine is 
                represented in pictures with birds and roses, symbols of love and 
                springtime renewal.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for happy marriages, 
                engaged couples, and those seeking love. Many people visit churches 
                dedicated to St. Valentine or pray for his intercession in matters 
                of the heart. The day is also a time to reflect on the Christian 
                understanding of love as a gift from God and the importance of 
                marriage as a sacred institution.
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
                  <li>• <strong>Love:</strong> Patron saint of romantic love</li>
                  <li>• <strong>Marriage:</strong> Patron of happy marriages</li>
                  <li>• <strong>Engaged Couples:</strong> Patron of those preparing for marriage</li>
                  <li>• <strong>Young People:</strong> Patron of youth and young adults</li>
                  <li>• <strong>Lovers:</strong> Patron of those in love</li>
                  <li>• <strong>Affianced Couples:</strong> Patron of betrothed couples</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Bee Keepers:</strong> Patron of beekeeping</li>
                  <li>• <strong>Epilepsy:</strong> Patron against seizures</li>
                  <li>• <strong>Fainting:</strong> Patron against fainting spells</li>
                  <li>• <strong>Greetings:</strong> Patron of friendly greetings</li>
                  <li>• <strong>Plague:</strong> Patron against disease</li>
                  <li>• <strong>Travellers:</strong> Patron of safe journeys</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Valentine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Valentine, patron saint of love and marriage, you who 
                    gave your life for the sanctity of Christian marriage and the 
                    freedom to love, help me to understand the true meaning of love 
                    as a gift from God.
                  </p>
                  <p className="mb-4">
                    Teach me to love with purity, patience, and selflessness. Help 
                    me to be a source of joy and comfort to those I love, and to 
                    build relationships that honor God. May your example of courage 
                    and devotion inspire me to be faithful in love and strong in faith.
                  </p>
                  <p>
                    St. Valentine, pray for me that I may find true love, build a 
                    happy marriage, and live a life of love that reflects God's 
                    love for us. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Couples</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Valentine, you who secretly married Christian couples and 
                    defended the sanctity of marriage, intercede for all couples 
                    today. Help us to build marriages based on love, faith, and 
                    mutual respect.
                  </p>
                  <p>
                    May our relationships be a reflection of God's love and may we 
                    always remember that love is patient, kind, and never fails. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Valentine, pray for us!"
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
            <Link href="/saints/st-rita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of impossible cases and difficult marriages.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of the Universal Church and families.
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
                  Roman soldier and martyr, patron of athletes.
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