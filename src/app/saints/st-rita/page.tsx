import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Rita of Cascia, Augustinian nun known for her patience and miraculous intercession.',
  keywords: [
    'st rita of cascia',
    'saint rita',
    'st rita biography',
    'st rita feast day',
    'st rita patron saint',
    'may 22 feast day',
    'healing saints',
    'augustinian saints'
  ],
  openGraph: {
    title: 'St. Rita of Cascia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rita of Cascia, Augustinian nun known for her patience and miraculous intercession.',
    url: 'https://catholicbibleonline.com/saints/st-rita',
  },
  twitter: {
    title: 'St. Rita of Cascia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Rita of Cascia, Augustinian nun known for her patience and miraculous intercession.',
  }
}

export default function StRitaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Augustinian Nun, Patron of Impossible Cases
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Rita of Cascia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Rita of Cascia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Rita of Cascia was born Margherita Lotti in 1381 in Roccaporena, a small village near 
                Cascia, Italy. From an early age, she showed a deep desire to become a nun, but her parents 
                arranged for her to marry Paolo Mancini, a man known for his violent temper and involvement 
                in local feuds.
              </p>
              
              <p className="mb-6">
                Despite the difficult circumstances of her marriage, Rita remained patient and prayerful. 
                She endured her husband's abuse with great patience and love, eventually converting him 
                through her example of Christian virtue. Together they had two sons, but tragedy struck 
                when Paolo was murdered in a feud, and her sons vowed to avenge their father's death.
              </p>
              
              <p className="mb-6">
                Rita prayed fervently that her sons would not commit murder, and her prayers were answered 
                when both sons died of natural causes before they could carry out their revenge. Now a widow 
                and childless, Rita finally pursued her childhood dream of becoming a nun.
              </p>
              
              <p className="mb-6">
                Initially, the Augustinian nuns of Cascia refused to accept her because she was a widow, 
                but through her persistence and the intercession of her patron saints, she was finally 
                admitted to the convent. There, she lived a life of prayer, penance, and charity, becoming 
                known for her holiness and miraculous intercession.
              </p>
              
              <p>
                In 1442, Rita received a mystical wound on her forehead, resembling a thorn from Christ's 
                crown. This stigmata caused her great pain and marked her as a special friend of Christ. 
                She died on May 22, 1457, and was canonized in 1900 by Pope Leo XIII. Today, St. Rita is 
                one of the most popular saints for impossible cases and desperate situations.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Rita: Patron of Impossible Cases</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Impossible Cases</h3>
              <p className="mb-6">
                St. Rita's most enduring legacy is her role as the patron saint of impossible cases and 
                desperate situations. Her own life was filled with seemingly impossible circumstances - 
                an abusive marriage, the murder of her husband, the threat of her sons becoming murderers, 
                and the rejection by the convent. Yet through prayer and trust in God, she overcame all 
                these challenges.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Patience and Forgiveness</h3>
              <p className="mb-6">
                St. Rita's extraordinary patience in the face of suffering and her ability to forgive 
                those who wronged her serve as a powerful example for all Christians. She showed that 
                true strength comes not from revenge or violence, but from love, patience, and trust 
                in God's plan.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Advocate for Abused Women</h3>
              <p className="mb-6">
                As a woman who endured domestic abuse and overcame it through faith and prayer, St. Rita 
                has become a powerful advocate for abused women and victims of domestic violence. Her 
                example shows that there is hope and healing even in the most difficult circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mystical Union with Christ</h3>
              <p>
                St. Rita's stigmata - the wound on her forehead - marked her as one specially chosen by 
                Christ to share in His sufferings. This mystical union with Christ's passion makes her 
                a powerful intercessor for all who are suffering, especially those who feel abandoned 
                or hopeless.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 22</div>
              <p className="text-gray-600">Feast of St. Rita of Cascia</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Rita is celebrated on May 22nd, the anniversary of her death. This date 
                falls during the spring season, a time of renewal and hope, which is fitting for a saint 
                who brought hope to so many in desperate situations. The feast is celebrated as a memorial 
                throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Rita's feast day, many people participate in special novenas and prayers for 
                impossible cases. Some churches hold special Masses and prayer services, and many people 
                visit shrines dedicated to St. Rita. It's also traditional to pray for abused women and 
                victims of domestic violence on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Rita, the Prayer to St. Rita, 
                or to make a special petition for an impossible situation. Many people also visit churches 
                dedicated to St. Rita or make pilgrimages to her shrine in Cascia, Italy.
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
                  <li>• <strong>Impossible Cases and Desperate Situations:</strong> Patron of hopeless causes</li>
                  <li>• <strong>Abused Women and Domestic Violence Victims:</strong> Protector of the abused</li>
                  <li>• <strong>Widows and Widowers:</strong> Patron of those who have lost spouses</li>
                  <li>• <strong>Mothers in Difficult Circumstances:</strong> Helper of struggling mothers</li>
                  <li>• <strong>Marital Problems:</strong> Patron of marriage difficulties</li>
                  <li>• <strong>Cascia, Italy:</strong> Patron saint of Cascia</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Impossible Cases:</strong> Helper when all else fails</li>
                  <li>• <strong>Healing from Abuse:</strong> Patron of abuse survivors</li>
                  <li>• <strong>Marital Reconciliation:</strong> Helper in marriage problems</li>
                  <li>• <strong>Patience in Suffering:</strong> Patron of endurance</li>
                  <li>• <strong>Forgiveness:</strong> Helper in forgiving others</li>
                  <li>• <strong>Hope in Despair:</strong> Patron of hope in darkness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Rita</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Holy Patroness of those in need, St. Rita, whose pleadings before thy Divine Lord 
                    are almost irresistible, who for thy lavishness in granting favors hast been called 
                    the Advocate of the Hopeless and even of the Impossible; St. Rita, so humble, so pure, 
                    so mortified, so patient and of such compassionate love for thy Crucified Jesus that 
                    thou couldst obtain from Him whatsoever thou askest.
                  </p>
                  <p className="mb-4">
                    On account of which all confidently have recourse to thee, expecting, if not always relief, 
                    at least comfort; be propitious to our petition, showing thy power with God on behalf 
                    of thy suppliant; be lavish to us, as thou hast been in so many wonderful cases, 
                    for the greater glory of God, for the spreading of thine own devotion, and for the 
                    consolation of those who trust in thee.
                  </p>
                  <p>
                    We promise, if our petition is granted, to glorify thee by making known thy favor, 
                    to bless and sing thy praises forever. Relying then upon thy merits and power before 
                    the Sacred Heart of Jesus, we pray thee grant us (mention your request). Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Rita of Cascia, pray for us!"
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

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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