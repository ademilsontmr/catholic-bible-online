import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ava - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ava, Benedictine nun and abbess who was cured of blindness by St. Rainfredis.',
  keywords: [
    'st ava',
    'saint ava',
    'st ava benedictine',
    'ava biography',
    'ava feast day',
    'ava patron saint',
    'benedictine nun',
    'dinart hainault',
    'april 29 feast day',
    'blindness cure'
  ],
  openGraph: {
    title: 'St. Ava - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ava, Benedictine nun and abbess who was cured of blindness by St. Rainfredis.',
    url: 'https://catholicbibleonline.com/saints/st-ava',
  },
  twitter: {
    title: 'St. Ava - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ava, Benedictine nun and abbess who was cured of blindness by St. Rainfredis.',
  }
}

export default function StAvaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👁️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ava
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Benedictine Nun and Abbess, Cured of Blindness
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ava</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👁️</div>
              <div className="text-sm text-gray-600">Monastic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ava</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Ava was the daughter of King Pepin, a noble and royal lineage that placed her in a position of privilege and responsibility. Born into a Christian family during the early medieval period, Ava was raised with a deep faith and devotion to God, despite the challenges that would come to test her faith.
              </p>
              
              <p className="mb-6">
                In her early years, St. Ava was afflicted with blindness, a condition that would have been particularly challenging in the medieval period. This physical limitation, however, became the catalyst for a remarkable spiritual journey that would lead her to a life of holiness and service to God.
              </p>
              
              <p className="mb-6">
                Through the intercession and miraculous intervention of St. Rainfredis, Ava was cured of her blindness. This miraculous healing was not only a physical restoration but also a spiritual awakening that deepened her commitment to serving God. The miracle of her sight restoration became a powerful testament to God's mercy and the intercessory power of the saints.
              </p>
              
              <p className="mb-6">
                Following her miraculous cure, St. Ava felt called to dedicate her life completely to God. She entered the Benedictine monastery at Dinart in Hainault, embracing the monastic life with great fervor and devotion. The Benedictine rule, with its emphasis on prayer, work, and community life, provided the perfect framework for her spiritual growth.
              </p>
              
              <p className="mb-6">
                St. Ava's holiness, wisdom, and leadership qualities did not go unnoticed by her fellow sisters. Her deep prayer life, combined with her royal background and education, made her an ideal candidate for leadership within the monastic community. She was eventually elected as Abbess of the monastery, a position she held with great humility and effectiveness.
              </p>
              
              <p>
                As Abbess, St. Ava guided her community with wisdom and compassion, ensuring that the Benedictine rule was faithfully observed while fostering an environment of spiritual growth and mutual support. Her leadership was characterized by the same humility and devotion that had marked her personal spiritual journey. Her feast day is celebrated on April 29th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ava: Model of Faith and Leadership</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Healing Power</h3>
              <p className="mb-6">
                St. Ava's miraculous cure from blindness serves as a powerful reminder of God's ability to transform suffering into grace. Her story demonstrates that physical limitations can become opportunities for spiritual growth and that God's mercy is available to all who seek it with faith. Her healing through St. Rainfredis' intercession also highlights the communion of saints and the power of prayer.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Monastic Leadership</h3>
              <p className="mb-6">
                As Abbess of the Benedictine monastery at Dinart, St. Ava exemplified the qualities of good religious leadership: humility, wisdom, and a deep commitment to the spiritual welfare of her community. Her royal background, combined with her monastic vocation, shows that true leadership comes from service and devotion to God rather than worldly status.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example of Conversion and Dedication</h3>
              <p className="mb-6">
                St. Ava's journey from royal privilege to monastic life demonstrates the power of grace to transform lives and call people to unexpected vocations. Her willingness to leave behind worldly comforts for a life of prayer and service inspires others to respond generously to God's call, whatever form it may take.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Visually Impaired</h3>
              <p>
                St. Ava's experience with blindness and her miraculous cure make her a natural patron for those suffering from visual impairments and other disabilities. Her story offers hope and encouragement to those facing physical challenges, reminding them that God can bring good out of suffering and that the saints are powerful intercessors.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 29</div>
              <p className="text-gray-600">Feast of St. Ava, Benedictine Nun and Abbess</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Ava is celebrated on April 29th, commemorating her life of faith, her miraculous cure, and her service as a Benedictine abbess. This date falls during the Easter season, a fitting time to remember her story of healing and new life in Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Monastic Traditions</h3>
              <p className="mb-6">
                In Benedictine communities, especially those with historical connections to the region of Hainault, St. Ava's feast day is celebrated with special prayers and readings. Her story is often shared as an example of how God can use physical suffering to bring about spiritual transformation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for those suffering from visual impairments or other disabilities, asking for St. Ava's intercession. Many people also pray for the grace to respond generously to God's call, whatever challenges or changes it may bring to their lives.
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
                  <li>• <strong>Visually Impaired:</strong> Those with blindness or vision problems</li>
                  <li>• <strong>Benedictine Nuns:</strong> Women in Benedictine religious life</li>
                  <li>• <strong>Abbesses:</strong> Women religious superiors</li>
                  <li>• <strong>Hainault:</strong> The region where she served</li>
                  <li>• <strong>Belgium:</strong> Her homeland</li>
                  <li>• <strong>Royal Converts:</strong> Those leaving privilege for religious life</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Physical Healing:</strong> Those seeking miraculous cures</li>
                  <li>• <strong>Religious Vocations:</strong> Those discerning monastic life</li>
                  <li>• <strong>Monastic Leadership:</strong> Religious superiors</li>
                  <li>• <strong>Conversion of Heart:</strong> Spiritual transformation</li>
                  <li>• <strong>Acceptance of Suffering:</strong> Finding meaning in trials</li>
                  <li>• <strong>Intercessory Prayer:</strong> Seeking saintly help</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ava</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Ava, who experienced the darkness of blindness and the light of God's healing grace, help us to trust in God's plan for our lives even when we face physical or spiritual challenges.
                  </p>
                  <p className="mb-4">
                    Teach us to see with the eyes of faith and to recognize God's presence in all circumstances. May we, like you, respond generously to God's call and serve others with humility and love.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Visually Impaired</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ava, who knew the challenges of blindness and the joy of restored sight, intercede for all those who suffer from visual impairments.
                  </p>
                  <p>
                    Help them to find strength and hope in their situation, and to trust in God's love and care. May they experience God's healing grace, whether physical or spiritual. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ava, who left royal privilege to serve God in monastic life, pray for all those discerning religious vocations.
                  </p>
                  <p>
                    Help them to hear God's call clearly and to respond with courage and generosity. May they find joy and fulfillment in serving God and others through religious life. Amen."
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
            <Link href="/saints/st-rainfredis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rainfredis
                </h3>
                <p className="text-gray-700 text-sm">
                  The saint who miraculously cured St. Ava of her blindness.
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
                  Father of Western monasticism, whose rule St. Ava followed.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-scholastica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Monastic Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Scholastica
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin sister of St. Benedict and founder of Benedictine nuns.
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