import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Margaret Mary Alacoque - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Margaret Mary Alacoque, mystic and apostle of the Sacred Heart of Jesus.',
  keywords: [
    'st margaret mary alacoque',
    'saint margaret mary alacoque',
    'st margaret mary alacoque biography',
    'st margaret mary alacoque feast day',
    'st margaret mary alacoque patron saint',
    'sacred heart of jesus',
    'october 16 feast day',
    'catholic saints',
    'visitation nun',
    'mystic'
  ],
  openGraph: {
    title: 'St. Margaret Mary Alacoque - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret Mary Alacoque, mystic and apostle of the Sacred Heart of Jesus.',
    url: 'https://catholicbibleonline.com/saints/st-margaret-mary-alacoque',
  },
  twitter: {
    title: 'St. Margaret Mary Alacoque - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret Mary Alacoque, mystic and apostle of the Sacred Heart of Jesus.',
  }
}

export default function StMargaretMaryAlacoquePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">❤️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Margaret Mary Alacoque
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of the Sacred Heart, French Visitation Nun, Mystic and Visionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Margaret Mary Alacoque</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Mystic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Margaret Mary Alacoque</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Margaret Mary Alacoque, a French Roman Catholic Visitation nun and mystic, is greatly recognized for her devotion to the Sacred Heart of Jesus. She was born in 1647 in France as the only daughter of Claude and Philiberte Lamyn Alacoque. Margaret has always shown an intense love for the Blessed Sacrament and preferred silence over typical childhood play. She began practicing severe corporal mortification after her first communion at 9-years-old.
              </p>
              
              <p className="mb-6">
                She continued this until rheumatic fever confined her to her bed for four years. After making a vow to the Blessed Virgin Mary to consecrate herself to religious life, Margaret instantly returned to perfect health. In recognition of this favor, Margaret added the name Mary to her baptismal name. St. Margaret Mary Alacoque experienced visions of Jesus Christ for most of her life, but thought they were a normal part of life and continued to practice austerity.
              </p>
              
              <p className="mb-6">
                After the death of her father, Margaret and her family were forced into poverty when a relative refused to hand over the family's assets. Margaret's only comfort in life was her frequent visits to pray before the Blessed Sacrament at a local church. At 17-years-old, Margaret's family was able to regain control of their assets. Margaret's mother started encouraging her to become more social, in hopes she would find a suitable husband.
              </p>
              
              <p className="mb-6">
                One night, after attending a ball in an evening dress, Margaret had a vision of Christ, scourged and bloody. He accused Margaret of forgetting about him. He showed her that His heart was full of love for her because of the promise she made to His Blessed Mother as a child. After this vision, Margaret was determined to fulfill the vow she made years ago. She entered the Visitation Convent at Paray-le-Monial in May 1671 to become a nun.
              </p>
              
              <p>
                St. Margaret Mary was admitted to wearing the religious habit in August 1671 but was not officially admitted to profession until November 1672. Although she was described as humble, simple, kind and patient, Margaret had to prove the authenticity of her vocation. During her time in this monastery, Margaret received several private revelations of the Sacred Heart of Jesus.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Margaret Mary Alacoque: Apostle of the Sacred Heart</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Revelations of the Sacred Heart</h3>
              <p className="mb-6">
                These visions showed her the "form of the devotion, the chief features being reception of Holy Communion on the first Friday of each month, Eucharistic adoration during a 'Holy hour' on Thursdays, and the celebration of the Feast of the Sacred Heart." The Lord Jesus requested His love be made evident through her. In her vision, she was instructed to spend an hour every Thursday night meditating on Jesus' Agony in the Garden of Gethsemane, a practice, known as "The Holy Hour," that later became widespread.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Divine Intimacy and Mission</h3>
              <p className="mb-6">
                In December 1673, Jesus appeared to Margaret Mary again, and allowed her to rest her head on His heart. His human heart was to be the symbol of His divine-human love. He revealed to her the wonders of His love. He explained to her that he wished to make these wonders known to all the world, and that He chose her for His work. Margaret Mary convinced her superior, Mother de Saumaise, her visions were authentic. However, she struggled with convincing others of the validity of her apparitions, even those in her own community.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Opposition and Support</h3>
              <p className="mb-6">
                A group of theologians declared her visions delusions and suggested she eat better. Even parents of children she instructed began calling her an imposter. Margaret eventually gained the support from the community's confessor, St. Claude de la Colombiere, who declared her visions were genuine. Finally, all opposition from the community, regarding Margaret's visions, ended in 1683, when Margaret Mary became the assistant to the Superior.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Leadership and Legacy</h3>
              <p className="mb-6">
                St. Margaret Mary, who later became known as Novice Mistress, led the monastery in observing the Feast of the Sacred Heart privately, and inspired the construction of a chapel built to honor the Sacred Heart. Margaret Mary died a couple of years later, at the age of 43, on October 17, 1690, while being anointed. She spoke the words, "I need nothing but God, and to lose myself in the heart of Jesus." After her death, the devotion to the Sacred Heart was adopted by the Jesuits but remained controversial within the Church. The practice did not become officially recognized until 75 years later.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization and Recognition</h3>
              <p>
                St. Margaret Mary Alacoque was the topic of discussion long after her death. People talked about her mission and qualities, her revelations and spiritual maxims and her teachings on the Sacred Heart. On September 18, 1864, Margaret Mary was beatified by Pope Pius IX. When her tomb was opened a few years later, two immediate cures took place and her body laid incorrupt. St. Margaret Mary Alacoque was officially canonized on May 13, 1920 by Pope Benedict XV and, in 1928, Pope Pius XI upheld the Church's position regarding the credibility behind her visions of Jesus Christ. He stated Jesus "manifested Himself" to Margaret and the chief features of devotion to the Sacred Heart are "reception of Holy Communion on the first Friday of each month, Eucharistic adoration during a 'Holy hour' on Thursdays, and the celebration of the Feast of the Sacred Heart."
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 16</div>
              <p className="text-gray-600">Feast of St. Margaret Mary Alacoque, Apostle of the Sacred Heart</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Margaret Mary Alacoque is celebrated on October 16th, commemorating the day before her death on October 17, 1690. St. Margaret Mary Alacoque was beatified by Pope Pius IX on September 18, 1864, and canonized by Pope Benedict XV on May 13, 1920. Her feast day serves as a reminder of the importance of devotion to the Sacred Heart of Jesus, the power of mystical experience, and the value of Eucharistic adoration. Her life demonstrates the transformative power of divine love and the importance of spreading devotion to the Sacred Heart throughout the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Margaret Mary Alacoque's remarkable contributions to the devotion to the Sacred Heart of Jesus. Her feast day serves as a reminder of the importance of the First Friday devotion, the Holy Hour on Thursdays, and the celebration of the Feast of the Sacred Heart. Many parishes and communities celebrate this day with special Masses and encourage the practice of the Sacred Heart devotions. The day also emphasizes the importance of Eucharistic adoration, the value of mystical experience, and the power of divine love. Many people also reflect on their own devotion to the Sacred Heart and consider making the First Friday devotion or participating in the Holy Hour.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Margaret Mary Alacoque for her intercession in matters of devotion to the Sacred Heart, mystical experience, and spiritual growth. Many people also pray for those suffering from illness, particularly polio, and for those who have lost their parents. Her example encourages us to be devoted to the Sacred Heart of Jesus, to practice Eucharistic adoration, and to spread the message of divine love. St. Margaret Mary Alacoque's legacy reminds us that God's love is infinite and that He desires to share His heart with all humanity through devotion and prayer.
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
                  <li>• <strong>Devotees of the Sacred Heart:</strong> Patron of Sacred Heart devotion</li>
                  <li>• <strong>Polio Sufferers:</strong> Patron of those with polio</li>
                  <li>• <strong>Loss of Parents:</strong> Patron of orphaned children</li>
                  <li>• <strong>Mystics:</strong> Patron of mystical experience</li>
                  <li>• <strong>Visitation Nuns:</strong> Patron of her religious order</li>
                  <li>• <strong>Eucharistic Adoration:</strong> Patron of adoration</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Sacred Heart Devotion:</strong> Helper in devotion</li>
                  <li>• <strong>First Friday Devotion:</strong> Patron of monthly communion</li>
                  <li>• <strong>Holy Hour:</strong> Helper for Thursday adoration</li>
                  <li>• <strong>Divine Love:</strong> Patron of spiritual love</li>
                  <li>• <strong>Mystical Experience:</strong> Helper for visions</li>
                  <li>• <strong>Religious Vocation:</strong> Patron of consecrated life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Margaret Mary Alacoque</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Margaret Mary Alacoque, apostle of the Sacred Heart of Jesus and mystic visionary, 
                    who with courage and love spread devotion to the Sacred Heart throughout the world, help us to 
                    grow in our love for the Sacred Heart of Jesus and to practice the devotions you received from 
                    Him. Through your intercession, may we have the grace to receive Holy Communion on First Fridays, 
                    to practice the Holy Hour on Thursdays, and to celebrate the Feast of the Sacred Heart with 
                    devotion. Help us to be faithful to the Sacred Heart and to spread His love to others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Margaret Mary Alacoque, pray for us!"
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
            <Link href="/saints/st-claude-de-la-colombiere" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Claude de la Colombiere
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit priest who supported Margaret Mary's visions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Visitation Order where Margaret Mary served.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-jane-frances-de-chantal" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jane Frances de Chantal
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of the Visitation Order with St. Francis de Sales.
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