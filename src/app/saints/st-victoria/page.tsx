import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Victoria - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Victoria, virgin martyr who refused pagan sacrifices.',
  keywords: [
    'st victoria',
    'saint victoria',
    'victoria biography',
    'victoria feast day',
    'victoria patron saint',
    'virgin martyr',
    'anatolia sister',
    'pagan sacrifice refusal',
    'december 23 feast day',
    'early christian martyr'
  ],
  openGraph: {
    title: 'St. Victoria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Victoria, virgin martyr who refused pagan sacrifices.',
    url: 'https://catholicbibleonline.com/saints/st-victoria',
  },
  twitter: {
    title: 'St. Victoria - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Victoria, virgin martyr who refused pagan sacrifices.',
  }
}

export default function StVictoriaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Victoria
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin Martyr, Sister of St. Anatolia
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Victoria</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Virgin Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Victoria</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                There is very little known about St. Victoria. With her sister Anatolia, she refused importunate suitors. Both were imprisoned and starved by their suitors but persisted in refusing marriage. Anatolia was converted to Christianity and converted many in Picenum before being denounced for her faith, for which she was tortured and executed at Thora on Lake Velino in Italy.
              </p>
              
              <p className="mb-6">
                When Victoria refused to sacrifice to pagan gods, she too was executed, perhaps at Tribulano. The guard was converted by their example and was also martyred. Their whole story is probably a pious myth, though they did actually live. Feast day is December 23rd.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Victoria: Witness to Virginity and Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virginity and Purity</h3>
              <p className="mb-6">
                St. Victoria's legacy demonstrates the value of consecrated virginity and the strength to resist societal pressures. Her refusal of marriage proposals, even under threat of imprisonment and starvation, shows her commitment to a higher calling. She serves as an example for young women who choose to remain single for the sake of the Kingdom of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Sisterly Bond in Faith</h3>
              <p className="mb-6">
                St. Victoria's relationship with her sister St. Anatolia shows the power of family bonds strengthened by faith. Together, they supported each other in their commitment to virginity and their refusal to compromise their beliefs. Their shared martyrdom demonstrates how family relationships can be sanctified through mutual commitment to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-6">Refusal of Pagan Sacrifices</h3>
              <p className="mb-6">
                St. Victoria's refusal to sacrifice to pagan gods, even at the cost of her life, shows her unwavering commitment to the true God. Her martyrdom for this refusal demonstrates the importance of remaining faithful to God's commandments, even when faced with death. She serves as a model of courage in the face of religious persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Conversion Through Witness</h3>
              <p>
                The conversion of the guard who witnessed their martyrdom shows the power of Christian witness, even in death. St. Victoria's example, along with her sister's, was so compelling that it converted their executioner, who then also became a martyr. This demonstrates how the witness of the saints continues to convert hearts even today.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 23</div>
              <p className="text-gray-600">Feast of St. Victoria, Virgin Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Victoria is celebrated on December 23rd, commemorating her martyrdom and her witness to virginity and faith. This date falls during the Advent season, a fitting time to remember her preparation for the coming of Christ through her life of purity and sacrifice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In regions where St. Victoria is particularly venerated, her feast day is celebrated with special prayers for young women and for those who choose consecrated virginity. Many people pray for her intercession in matters of purity and fidelity to God's call.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for young women, for those discerning consecrated virginity, and to ask for St. Victoria's intercession in helping us to remain faithful to God's commandments. Many people also pray for the grace to resist societal pressures and to stand firm in their faith.
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
                  <li>• <strong>Young Women:</strong> Adolescent and young adult females</li>
                  <li>• <strong>Consecrated Virgins:</strong> Those who choose virginity for God</li>
                  <li>• <strong>Sisters:</strong> Sibling relationships</li>
                  <li>• <strong>Picenum:</strong> Region in Italy where her sister ministered</li>
                  <li>• <strong>Thora:</strong> Her sister's place of martyrdom</li>
                  <li>• <strong>Tribulano:</strong> Her possible place of martyrdom</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Virginity:</strong> Choosing purity for God</li>
                  <li>• <strong>Family Unity:</strong> Strengthening family bonds in faith</li>
                  <li>• <strong>Resistance to Pressure:</strong> Standing firm against societal pressure</li>
                  <li>• <strong>Pagan Refusal:</strong> Rejecting false gods and practices</li>
                  <li>• <strong>Witness:</strong> Bearing witness to Christ</li>
                  <li>• <strong>Conversion:</strong> Leading others to faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Victoria</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Victoria, who refused to compromise your faith and virginity even under threat of death, help us to remain faithful to God's commandments.
                  </p>
                  <p className="mb-4">
                    Teach us to resist societal pressures and to stand firm in our beliefs, even when faced with persecution. May we, like you, be willing to sacrifice everything for the love of Christ.
                  </p>
                  <p>
                    Help us to be witnesses to the truth and to lead others to faith through our example. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Young Women</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Victoria, who chose virginity and purity for God, intercede for all young women who are discerning their vocation.
                  </p>
                  <p>
                    Help them to hear God's call clearly and to have the courage to follow it, even when it means going against societal expectations. May they find strength in their faith and purity. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Family Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Victoria, who shared your faith journey with your sister St. Anatolia, help us to strengthen family bonds through our shared commitment to Christ.
                  </p>
                  <p>
                    Teach us to support one another in our faith and to encourage each other to remain faithful to God's call. May our families be united in love and service to God. Amen."
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
            <Link href="/saints/st-anatolia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Sister Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anatolia
                </h3>
                <p className="text-gray-700 text-sm">
                  Her sister who was also martyred for refusing marriage and pagan sacrifices.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Martyrs
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Another young virgin martyr who refused marriage for the sake of Christ.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lucy" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Martyrs
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lucy
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who also refused marriage and was martyred for her faith.
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