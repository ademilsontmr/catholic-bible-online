import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sts. Joachim and Anne - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Sts. Joachim and Anne, the parents of the Blessed Virgin Mary and grandparents of Jesus.',
  keywords: [
    'sts joachim and anne',
    'saints joachim anne',
    'st joachim st anne',
    'joachim anne biography',
    'joachim anne feast day',
    'joachim anne patron saints',
    'parents of mary',
    'grandparents of jesus',
    'july 26 feast day',
    'gospel of james'
  ],
  openGraph: {
    title: 'Sts. Joachim and Anne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Joachim and Anne, the parents of the Blessed Virgin Mary and grandparents of Jesus.',
    url: 'https://catholicbibleonline.com/saints/sts-joachim-anne',
  },
  twitter: {
    title: 'Sts. Joachim and Anne - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Sts. Joachim and Anne, the parents of the Blessed Virgin Mary and grandparents of Jesus.',
  }
}

export default function StsJoachimAnnePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👨‍👩‍👧</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Sts. Joachim and Anne
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Parents of the Blessed Virgin Mary, Grandparents of Jesus
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Sts. Joachim and Anne</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧</div>
              <div className="text-sm text-gray-600">Family</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of Sts. Joachim and Anne</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saints Joachim (sometimes spelled "Joaquin," pronounced "wal-keem") and Anne are the parents of the Virgin Mary. There are no mentions of them in the Bible or Gospels; what we know comes from Catholic legend and the Gospel of James, which is an unsanctioned, apocryphal writing from the second century AD.
              </p>
              
              <p className="mb-6">
                We do know from scholarship that the Gospel of James was not written by James, the Brother of Jesus, despite its claim to be so authored. Even the early Church fathers expressed skepticism about the Gospel of James in their writings. There are about 150 copies of the ancient manuscript which often have different titles, but tell the same story, that Mary was promised to Joachim and Anne by an angel, was consecrated to God, and she remained a virgin all her life.
              </p>
              
              <p className="mb-6">
                Naturally, there is plenty of room for scholarly debate about these saints. We have no true primary sources that prove they even existed, but certainly we can agree that Mary had parents. Likewise, we can agree that Mary had good, faithful parents who raised her with a love and devotion to God like none other except Jesus Christ Himself.
              </p>
              
              <p>
                Joachim and Anne serve as role models for parents and both deserve to be honored and emulated for their devotion to God and Our Lady Mary, the Mother of God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Sts. Joachim and Anne: Parents of the Mother of God</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model Parents</h3>
              <p className="mb-6">
                Sts. Joachim and Anne serve as the ultimate model for Christian parents. They raised the Blessed Virgin Mary, the most perfect human being ever created, preparing her for her unique role as the Mother of God. Their parenting must have been extraordinary to produce such a holy and virtuous daughter.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Faith and Devotion</h3>
              <p className="mb-6">
                Despite the lack of historical documentation, the Church honors Joachim and Anne for their faith and devotion to God. They are believed to have been righteous and God-fearing people who lived according to the Jewish law and traditions, preparing the way for the coming of the Messiah through their daughter Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Grandparents of Jesus</h3>
              <p className="mb-6">
                As the grandparents of Jesus Christ, Joachim and Anne hold a unique place in salvation history. They are part of the Holy Family tree and share in the mystery of the Incarnation. Their role in preparing Mary for her divine motherhood makes them instrumental in God's plan of salvation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patrons of Family Life</h3>
              <p>
                Joachim and Anne are particularly venerated as patrons of married couples, parents, and grandparents. Their example of faithful marriage and holy parenting continues to inspire Christian families today, showing that ordinary family life can be a path to holiness and sanctity.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 26</div>
              <p className="text-gray-600">Feast of Sts. Joachim and Anne, Parents of the Blessed Virgin Mary</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of Sts. Joachim and Anne is celebrated on July 26th, commemorating their role as parents of the Blessed Virgin Mary and their contribution to salvation history. This date honors their faith and devotion as model Christian parents.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In many countries, especially those with strong Marian devotion, the feast of Joachim and Anne is celebrated with special family gatherings and prayers. Churches dedicated to them often hold special Masses for families and married couples.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for family unity, for parents and grandparents, and to ask for Joachim and Anne's intercession in strengthening family bonds and Christian values in the home.
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
                  <li>• <strong>Parents:</strong> All mothers and fathers</li>
                  <li>• <strong>Grandparents:</strong> Those who are grandparents</li>
                  <li>• <strong>Married Couples:</strong> Those in holy matrimony</li>
                  <li>• <strong>Families:</strong> Christian family life</li>
                  <li>• <strong>Childless Couples:</strong> Those struggling with infertility</li>
                  <li>• <strong>Expectant Mothers:</strong> Women who are pregnant</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Family Unity:</strong> Strengthening family bonds</li>
                  <li>• <strong>Christian Parenting:</strong> Raising children in the faith</li>
                  <li>• <strong>Marriage:</strong> Building strong marriages</li>
                  <li>• <strong>Fertility:</strong> Couples hoping to conceive</li>
                  <li>• <strong>Family Prayer:</strong> Developing family prayer life</li>
                  <li>• <strong>Intergenerational Love:</strong> Relationships between generations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Sts. Joachim and Anne</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who chose Sts. Joachim and Anne to be the parents of the Blessed Virgin Mary, grant us the grace to follow their example of faith and devotion in our own family life.
                  </p>
                  <p className="mb-4">
                    Help us to raise our children with love for you and to create homes where faith can flourish. May we, like Joachim and Anne, be instruments of your grace in preparing the next generation to serve you.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Parents</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Sts. Joachim and Anne, who raised the most perfect of all children, intercede for all parents today. Help us to be patient, loving, and wise in raising our children.
                  </p>
                  <p>
                    Give us the strength to teach them about God and to lead them by our example. May our families be places where love and faith grow together. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Grandparents</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Sts. Joachim and Anne, grandparents of Jesus, pray for all grandparents that they may be sources of wisdom, love, and faith for their grandchildren.
                  </p>
                  <p>
                    Help us to share our faith and experience with the younger generation and to be living examples of God's love. May we support our children in their role as parents. Amen."
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
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Foster father of Jesus and husband of Mary, patron of fathers and families.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anne
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of the Blessed Virgin Mary and grandmother of Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-monica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Family Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Monica
                </h3>
                <p className="text-gray-700 text-sm">
                  Mother of St. Augustine, known for her persistent prayers for her son's conversion.
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