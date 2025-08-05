import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Christina - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Christina, child martyr who bravely faced torture for her faith.',
  keywords: [
    'st christina',
    'saint christina',
    'christina biography',
    'christina feast day',
    'christina patron saint',
    'child martyr',
    'early christian martyr',
    'pagan conversion',
    'idol destruction',
    'july 24 feast day'
  ],
  openGraph: {
    title: 'St. Christina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Christina, child martyr who bravely faced torture for her faith.',
    url: 'https://catholicbibleonline.com/saints/st-christina',
  },
  twitter: {
    title: 'St. Christina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Christina, child martyr who bravely faced torture for her faith.',
  }
}

export default function StChristinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Christina
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Child Martyr, Brave Witness to Christ
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Christina</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Child Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Christina</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Few details are known of St. Christina but she lived during the third century and was the daughter of a rich and powerful magistrate believed to have been named Urbain. He was deep in the practices of heathenism and had a number of golden idols, which he distributed among the poor.
              </p>
              
              <p className="mb-6">
                Though his lovely daughter had drawn the eye of several suitors by the time she reached the age of 11-years-old, Urbain wanted her to be a pagan priestess. He locked his daughter in a room filled with gold and silver idols, then ordered her to burn incense before them.
              </p>
              
              <p className="mb-6">
                Saint Christina often peered at the world outside her window and decided there must have been a great creator of the world. Turning to the idols, she came to believe they could only be false as they were forged by man. She began to pray to the creator of the world and asked him to reveal himself to her. That was when she felt an intense love blaze from deep within her heart. She began to fast and continued to pray.
              </p>
              
              <p className="mb-6">
                An angel came to St. Christina and taught her the Gospel of Christ. It then called her a bride of Christ but warned she would suffer for her faith. Knowing the Truth, St. Christina smashed the false idols and threw them through the window. When her father came to visit and discovered the missing idols, he questioned St. Christina but she refused to speak to him.
              </p>
              
              <p className="mb-6">
                After sending the servants in to speak to her, Urbain learned of her new faith. Enraged, he began to slap his daughter's face until she began to speak - but her words were to proclaim her new faith and to share the Truth. She also admitted to destroying the idols. Urbain executed the servants who tended St. Christina and beat her before throwing her in prison. St. Christina's mother came to the prison and pleaded for her daughter to renounce her faith but St. Christina refused.
              </p>
              
              <p className="mb-6">
                The next day, Urbain took St. Christina to trial and ordered her to worship the pagan gods and beg for forgiveness. Rather than following her father's orders, St. Christina held fast to her Christian faith and was ordered to be tortured. She was tied to an iron wheel above an extreme fire. As she was raked through the flames, her body was burned but she did not die. She was thrown into a prison cell and that night an angel appeared. Her wounds were healed and she was fed food the angel brought with it.
              </p>
              
              <p className="mb-6">
                The next day, when her father found her unharmed, he ordered a stone to be tied around her neck and she was thrown into a lake. As she sank, an angel sustained then untied her. When she reappeared above the water, Urbain attributed her survival to sorcery. He decided to execute her the following morning but that night he died suddenly.
              </p>
              
              <p className="mb-6">
                The region's governor was sent to execute St. Christina's punishment in her father's stead but she survived every torture. When fellow believers discovered the miracles, they began to gather at her cell. During her time in captivity, she converted nearly 300 people until a new governor arrived and resumed her torture. When she survived five days in a red-hot furnace, she was finally executed with a sword.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Christina: Child Martyr's Courageous Witness</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Child Martyr's Courage</h3>
              <p className="mb-6">
                St. Christina's legacy demonstrates that age is no barrier to faith and courage. At just eleven years old, she showed remarkable spiritual maturity and bravery in the face of extreme persecution. Her story teaches us that God can work through anyone, regardless of age, and that children can be powerful witnesses to the truth of the Gospel.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Conversion Through Divine Revelation</h3>
              <p className="mb-6">
                St. Christina's conversion story is unique in that she came to faith through her own spiritual seeking and divine revelation, rather than through human preaching. Her recognition of a creator God through observing the natural world, followed by angelic instruction, shows how God can reach hearts directly when they are open to truth.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Protection</h3>
              <p className="mb-6">
                The numerous miracles that protected St. Christina during her tortures - surviving fire, drowning, and the furnace - demonstrate God's power to protect His faithful servants. These miracles not only preserved her life but also served as powerful witnesses that converted nearly 300 people to Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Rejection of False Gods</h3>
              <p>
                St. Christina's dramatic destruction of her father's idols symbolizes the Christian call to reject all false gods and worldly attachments. Her act of throwing the idols through the window represents the complete renunciation of paganism and total commitment to Christ, even at the cost of family relationships and personal safety.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 24</div>
              <p className="text-gray-600">Feast of St. Christina, Child Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Christina is celebrated on July 24th, commemorating her martyrdom and her courageous witness to Christ. This date falls during the summer months, a fitting time to remember her youthful faith and the light she brought to the early Church through her suffering and death.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In regions where St. Christina is particularly venerated, her feast day is celebrated with special prayers for children and young people. Many parents pray for her intercession in raising their children to be strong in faith, and young people seek her example of courage and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for children and young people, for those facing persecution for their faith, and to ask for St. Christina's intercession in helping us to be courageous witnesses to Christ. Many people also pray for the grace to reject false idols in their own lives.
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
                  <li>• <strong>Children:</strong> Young people and minors</li>
                  <li>• <strong>Child Martyrs:</strong> Young witnesses to faith</li>
                  <li>• <strong>Converts:</strong> Those who convert to Christianity</li>
                  <li>• <strong>Persecuted Christians:</strong> Those suffering for faith</li>
                  <li>• <strong>Young Girls:</strong> Adolescent females</li>
                  <li>• <strong>Martyrs:</strong> All who die for their faith</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> Standing firm in faith</li>
                  <li>• <strong>Family Conversion:</strong> Converting family members</li>
                  <li>• <strong>Rejection of Idols:</strong> Turning away from false gods</li>
                  <li>• <strong>Divine Protection:</strong> God's care in persecution</li>
                  <li>• <strong>Youth Ministry:</strong> Working with young people</li>
                  <li>• <strong>Miraculous Healing:</strong> Physical and spiritual healing</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Traditional Prayer to St. Christina</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Venerable Christina, You appeared as a shining dove, With a pair of golden wings Alighting in the Highest Heavens.
                  </p>
                  <p className="mb-4">
                    Therefore we celebrate your glorious feast And bow before the place that holds your relics. Pray that we may receive grace and healing for body and soul."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Children</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Christina, child martyr who showed such courage at a young age, intercede for all children and young people.
                  </p>
                  <p>
                    Help them to grow strong in faith and to be courageous witnesses to Christ in their daily lives. May they learn from your example of love and devotion to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Christina, who faced torture and death with such bravery, help us to be courageous in our witness to Christ.
                  </p>
                  <p>
                    Teach us to reject all false idols and to stand firm in our faith, even when it means going against family or friends. May we, like you, be willing to suffer for the truth. Amen."
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
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Child Martyrs
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Another young martyr who died for her faith and virginity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-alexandria" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Alexandria
                </h3>
                <p className="text-gray-700 text-sm">
                  Young martyr who also faced torture and death for her faith.
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
                  Another young virgin martyr who suffered for her faith.
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