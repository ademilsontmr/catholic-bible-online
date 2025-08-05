import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Henry - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Henry, Holy Roman Emperor and patron of the childless and handicapped.',
  keywords: [
    'st henry',
    'saint henry',
    'st henry emperor',
    'henry biography',
    'henry feast day',
    'henry patron saint',
    'holy roman emperor',
    'july 13 feast day',
    'childless patron',
    'handicapped patron'
  ],
  openGraph: {
    title: 'St. Henry - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Henry, Holy Roman Emperor and patron of the childless and handicapped.',
    url: 'https://catholicbibleonline.com/saints/st-henry',
  },
  twitter: {
    title: 'St. Henry - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Henry, Holy Roman Emperor and patron of the childless and handicapped.',
  }
}

export default function StHenryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Henry
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Holy Roman Emperor, Patron of the Childless and Handicapped
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Henry</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Royal</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Henry</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Henry, son of Henry, Duke of Bavaria, and of Gisella, daughter of Conrad, King of Burgundy, was born in 972. He received an excellent education under the care of St. Wolfgang, Bishop of Ratisbon. In 995, St. Henry succeeded his father as Duke of Bavaria, and in 1002, upon the death of his cousin, Otho III, he was elected emperor.
              </p>
              
              <p className="mb-6">
                Firmly anchored upon the great eternal truths, which the practice of meditation kept alive in his heart, he was not elated by this dignity and sought in all things, the greater glory of God. He was most watchful over the welfare of the Church and exerted his zeal for the maintenance of ecclesiastical discipline through the instrumentality of the Bishops.
              </p>
              
              <p className="mb-6">
                He gained several victories over his enemies, both at home and abroad, but he used these with great moderation and clemency. In 1014, he went to Rome and received the imperial crown at the hands of Pope Benedict VIII. On that occasion he confirmed the donation, made by his predecessors to the Pope, of the sovereignty of Rome and the exarchate of Ravenna.
              </p>
              
              <p className="mb-6">
                Circumstances several times drove the holy Emperor into war, from which he always came forth victorious. He led an army to the south of Italy against the Saracens and their allies, the Greeks, and drove them from the country. The humility and spirit of justice of the Saint were equal to his zeal for religion.
              </p>
              
              <p className="mb-6">
                He cast himself at the feet of Herebert, Bishop of Cologne, and begged his pardon for having treated him with coldness, on account of a misunderstanding. He wished to abdicate and retire into a monastery, but yielded to the advice of the Abbot of Verdun, and retained his dignity.
              </p>
              
              <p className="mb-6">
                Both he and his wife, St. Cunegundes, lived in perpetual chastity, to which they had bound themselves by vow. The Saint made numerous pious foundations, gave liberally to pious institutions and built the Cathedral of Bamberg.
              </p>
              
              <p>
                His holy death occurred at the castle of Grone, near Halberstad, in 1024. His feast day is July 13th. He is the patron saint of the childless, of Dukes, of the handicapped and those rejected by Religious Order.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Henry: Holy Roman Emperor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Leadership</h3>
              <p className="mb-6">
                St. Henry demonstrated that true leadership is rooted in humility and service to God. Despite his imperial power, he remained grounded in his faith and used his authority to promote the welfare of the Church and his subjects. His example shows that even the highest earthly authority should be exercised with justice, mercy, and devotion to God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Champion of the Church</h3>
              <p className="mb-6">
                As Holy Roman Emperor, St. Henry was a staunch defender of the Church and ecclesiastical discipline. He worked closely with bishops to maintain the integrity of the Church and supported numerous religious foundations. His coronation by Pope Benedict VIII symbolized the ideal relationship between Church and State.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Humility and Justice</h3>
              <p className="mb-6">
                St. Henry's humility was remarkable for a man of his rank. His public apology to Bishop Herebert of Cologne demonstrates his willingness to admit mistakes and seek reconciliation. His desire to abdicate and enter monastic life shows his detachment from worldly power and his longing for spiritual perfection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Marginalized</h3>
              <p>
                St. Henry's patronage of the childless, handicapped, and those rejected by religious orders reflects his compassion for those who face particular challenges in life. His own childless marriage with St. Cunegundes, lived in perfect chastity, makes him a powerful intercessor for couples struggling with infertility.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 13</div>
              <p className="text-gray-600">Feast of St. Henry, Holy Roman Emperor</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Henry is celebrated on July 13th, commemorating his life of Christian leadership and his dedication to serving God and the Church. This date honors his humility, justice, and his role as a model of Christian governance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Significance</h3>
              <p className="mb-6">
                St. Henry's feast day falls during the summer, a time when the Church reflects on the themes of leadership and service. His example of combining temporal power with spiritual devotion continues to inspire leaders in all walks of life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for leaders in government and the Church, for couples struggling with infertility, and for those with disabilities. Many people also pray for the grace to exercise authority with humility and justice, following St. Henry's example.
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
                  <li>• <strong>Childless Couples:</strong> Those struggling with infertility</li>
                  <li>• <strong>Dukes:</strong> Noble rulers and leaders</li>
                  <li>• <strong>Handicapped:</strong> People with disabilities</li>
                  <li>• <strong>Rejected by Religious Orders:</strong> Those turned away from religious life</li>
                  <li>• <strong>Benedictine Oblates:</strong> Lay members of Benedictine communities</li>
                  <li>• <strong>Germany:</strong> His homeland</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Christian Leadership:</strong> Those in positions of authority</li>
                  <li>• <strong>Church-State Relations:</strong> Harmony between temporal and spiritual power</li>
                  <li>• <strong>Humility in Power:</strong> Exercising authority with modesty</li>
                  <li>• <strong>Justice and Mercy:</strong> Fair and compassionate governance</li>
                  <li>• <strong>Monastic Vocations:</strong> Those discerning religious life</li>
                  <li>• <strong>Reconciliation:</strong> Healing of divisions and conflicts</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Henry</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Henry, Holy Roman Emperor, who combined temporal power with deep spiritual devotion, help us to exercise whatever authority we have with humility and justice.
                  </p>
                  <p className="mb-4">
                    Teach us to seek the greater glory of God in all our actions and to serve others with the same compassion and wisdom that characterized your reign. May we, like you, remain anchored in eternal truths and use our gifts for the benefit of others.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Childless Couples</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Henry, who with your wife St. Cunegundes lived in perfect chastity and accepted childlessness as God's will, intercede for couples struggling with infertility.
                  </p>
                  <p>
                    Help them to find peace and meaning in their situation, and to trust in God's plan for their lives. May they find joy in serving others and building up the Kingdom of God in other ways. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Henry, patron of Christian leadership, pray for all those in positions of authority in government, business, and the Church.
                  </p>
                  <p>
                    Help them to exercise their power with humility, justice, and mercy, always seeking the greater glory of God and the welfare of those they serve. May they be guided by eternal truths and the practice of prayer. Amen."
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
            <Link href="/saints/st-cunegundes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Royal Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cunegundes
                </h3>
                <p className="text-gray-700 text-sm">
                  Wife of St. Henry, who lived in perpetual chastity with him.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-wolfgang" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Bishop Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Wolfgang
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop of Ratisbon who educated St. Henry in his youth.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Monastic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism, whose rule St. Henry admired.
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