import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Adelaide - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Adelaide, Holy Roman Empress and patroness of abuse victims.',
  keywords: [
    'st adelaide',
    'saint adelaide',
    'adelaide biography',
    'adelaide feast day',
    'adelaide patron saint',
    'holy roman empress',
    'abuse victims patron saint',
    'queens patron saint',
    'widows patron saint',
    'december 16 feast day'
  ],
  openGraph: {
    title: 'St. Adelaide - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adelaide, Holy Roman Empress and patroness of abuse victims.',
    url: 'https://catholicbibleonline.com/saints/st-adelaide',
  },
  twitter: {
    title: 'St. Adelaide - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adelaide, Holy Roman Empress and patroness of abuse victims.',
  }
}

export default function StAdelaidePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Adelaide
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Holy Roman Empress, Patroness of Abuse Victims
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Adelaide</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Empress</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Adelaide</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Born c. 931 in Burgundy, St. Adelaide married, at 15 or 16, Lothair of Italy to whom her father had engaged her when she was two. When Lothair died three years later, his successor and usurper Berengar of Ivrea imprisoned Adelaide and attempted to force her to marry his son.
              </p>
              
              <p className="mb-6">
                Legends tell of Adelaide's escape to Canossa, where she appealed to Otto of Germany for help. He conquered Italy and married her in 951. John XII crowned the pair rulers of the Holy Roman Empire the following year. After Otto's death in 973, Adelaide quarrelled with Otto II, possibly at the instigation of her daughter-in-law, Theophano, and lived with her brother in Burgundy.
              </p>
              
              <p className="mb-6">
                She established many monasteries and churches; she also became interested in evangelism. She and her son reconciled before his death in 983, and she became regent for her grandson, Otto III. Adelaide died in 999 at the convent at Seltz, which she had founded. Cluny became the center of her cult. She was canonized in 1097.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Adelaide: Empress of Faith and Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Royal Sanctity</h3>
              <p className="mb-6">
                St. Adelaide's legacy demonstrates that holiness can be achieved even in the highest positions of worldly power. As Holy Roman Empress, she used her influence and wealth not for personal gain, but for the service of God and the Church. Her example shows that those in positions of authority have a special responsibility to use their power for the good of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Abuse Victims</h3>
              <p className="mb-6">
                St. Adelaide's experience of being imprisoned and forced into marriage makes her a powerful patroness for victims of abuse and forced marriages. Her escape and subsequent rise to power shows that God can bring good out of even the most difficult circumstances. She serves as an inspiration for those who have suffered at the hands of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Church Builder and Evangelist</h3>
              <p className="mb-6">
                St. Adelaide's establishment of many monasteries and churches, along with her interest in evangelism, shows her commitment to spreading the Gospel and strengthening the Church. Her patronage of religious institutions helped to preserve and spread the faith throughout Europe during a crucial period in Church history.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Reconciliation and Family Unity</h3>
              <p>
                St. Adelaide's reconciliation with her son Otto II before his death demonstrates the importance of family unity and forgiveness. Despite their quarrels, she was able to overcome differences and provide stability as regent for her grandson. Her example teaches us the value of reconciliation and the importance of maintaining family bonds.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 16</div>
              <p className="text-gray-600">Feast of St. Adelaide, Holy Roman Empress</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Adelaide is celebrated on December 16th, commemorating her death and her lifelong dedication to serving God and the Church. This date falls during the Advent season, a fitting time to remember her role in preparing the way for Christ through her charitable works and evangelization.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In regions where St. Adelaide is particularly venerated, especially in Germany and Italy, her feast day is celebrated with special prayers for those in positions of authority and for victims of abuse. Many people pray for her intercession in matters of family reconciliation and charitable giving.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for those in positions of authority, for victims of abuse, and to ask for St. Adelaide's intercession in helping us to use our resources and influence for the good of others. Many people also pray for the grace of reconciliation in family relationships.
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
                  <li>• <strong>Abuse Victims:</strong> Those who have suffered abuse</li>
                  <li>• <strong>Widows:</strong> Women who have lost their spouses</li>
                  <li>• <strong>Queens:</strong> Female rulers and monarchs</li>
                  <li>• <strong>Empresses:</strong> Female imperial rulers</li>
                  <li>• <strong>Burgundy:</strong> Her birthplace in France</li>
                  <li>• <strong>Second Marriages:</strong> Those who remarry</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Family Reconciliation:</strong> Healing family relationships</li>
                  <li>• <strong>Charitable Giving:</strong> Using wealth for good</li>
                  <li>• <strong>Church Building:</strong> Supporting religious institutions</li>
                  <li>• <strong>Evangelization:</strong> Spreading the Gospel</li>
                  <li>• <strong>Royal Authority:</strong> Using power responsibly</li>
                  <li>• <strong>Forced Marriages:</strong> Those trapped in unwanted unions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Adelaide</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adelaide, Holy Roman Empress who used your power and wealth for the service of God and the Church, help us to use our resources and influence for the good of others.
                  </p>
                  <p className="mb-4">
                    Teach us to be generous in our charitable giving and to support the work of the Church. May we, like you, find ways to spread the Gospel and build up the Kingdom of God.
                  </p>
                  <p>
                    Help us to seek reconciliation in our family relationships and to overcome difficulties with love and patience. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Abuse Victims</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adelaide, who suffered imprisonment and forced marriage, intercede for all victims of abuse and those trapped in unwanted situations.
                  </p>
                  <p>
                    Help them to find strength and courage to seek freedom and healing. May they know that God can bring good out of even the most difficult circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Reconciliation</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adelaide, who reconciled with your son before his death, help us to overcome family quarrels and seek unity in our relationships.
                  </p>
                  <p>
                    Teach us to forgive and to work toward reconciliation, even when it seems impossible. May we find the strength to heal broken family bonds. Amen."
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
            <Link href="/saints/st-helena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Royal Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Helena
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman empress and mother of Constantine, known for finding the True Cross.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-margaret" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Queen Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Margaret
                </h3>
                <p className="text-gray-700 text-sm">
                  Queen of Scotland known for her piety and charitable works.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-elizabeth-hungary" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth of Hungary
                </h3>
                <p className="text-gray-700 text-sm">
                  Queen known for her extraordinary charity to the poor and sick.
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