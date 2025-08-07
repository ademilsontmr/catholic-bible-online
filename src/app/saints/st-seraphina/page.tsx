import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Seraphina - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Seraphina, Italian saint known for her patience and devotion during illness and suffering.',
  keywords: [
    'st seraphina',
    'saint seraphina',
    'st seraphina biography',
    'st seraphina feast day',
    'st seraphina patron saint',
    'catholic saints',
    'march 12 feast day',
    'italian saints',
    'suffering saints',
    'patience saints'
  ],
  openGraph: {
    title: 'St. Seraphina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Seraphina, Italian saint known for her patience and devotion during illness and suffering.',
    url: 'https://catholicbibleonline.com/saints/st-seraphina',
  },
  twitter: {
    title: 'St. Seraphina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Seraphina, Italian saint known for her patience and devotion during illness and suffering.',
  }
}

export default function StSeraphinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Seraphina
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin, Model of Patience, Devotee of St. Gregory the Great
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Seraphina</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 12</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Seraphina</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Seraphina was born in San Gimignano, Italy, to a poor family. From an early age, 
                she was known for her self-denial and acts of penance, demonstrating a deep spiritual 
                maturity that was remarkable for someone so young. Her life would become a testament 
                to patience, faith, and acceptance of God's will in the face of great suffering.
              </p>
              
              <p className="mb-6">
                As a young girl, Seraphina was described as beautiful, but a mysterious illness would 
                dramatically change her appearance and physical condition. Her eyes, feet, and hands 
                became deformed, and eventually she was completely paralyzed. Despite these devastating 
                physical changes, Seraphina maintained her inner beauty and spiritual strength, becoming 
                a model of patience and acceptance of God's will.
              </p>
              
              <p className="mb-6">
                Tragedy struck her family when both her mother and father died while she was still young, 
                leaving her orphaned. Despite these losses and her physical limitations, Seraphina 
                remained devoted to her faith and found solace in her relationship with God. She 
                developed a special devotion to St. Gregory the Great, finding inspiration in his 
                teachings and example.
              </p>
              
              <p className="mb-6">
                Before her illness, Seraphina had been a very helpful child around the family home. 
                She did many of the chores and helped her mother spin and sew, showing her industrious 
                nature and willingness to serve others. These qualities of service and helpfulness 
                would continue to define her character even after she became physically disabled.
              </p>
              
              <p>
                In a remarkable example of divine providence, Seraphina died on the feast of St. Gregory 
                the Great, exactly as she had been warned by Gregory in a dream. This mystical 
                connection to her patron saint serves as a testament to the deep spiritual relationship 
                she had developed with him and the special grace she received through his intercession.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Seraphina: Model of Patience and Acceptance</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Example of Patient Suffering</h3>
              <p className="mb-6">
                St. Seraphina's most enduring legacy is her example of patient suffering and acceptance 
                of God's will. Despite being struck with a mysterious illness that left her deformed 
                and paralyzed, she never lost her faith or her inner peace. Her ability to accept her 
                physical limitations with grace and patience serves as an inspiration for all who face 
                suffering or disability in their lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Inner Beauty</h3>
              <p className="mb-6">
                Seraphina's story teaches us that true beauty lies not in physical appearance but in 
                the soul. Though her physical beauty was taken from her through illness, her inner 
                beauty and spiritual radiance only grew stronger. She demonstrates that the most 
                important qualities - love, patience, faith, and acceptance - are not dependent on 
                physical health or appearance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to St. Gregory the Great</h3>
              <p className="mb-6">
                Seraphina's special devotion to St. Gregory the Great and her death on his feast day 
                highlight the power of spiritual friendship and intercession. Her mystical connection 
                to this great Doctor of the Church shows how the communion of saints works across time 
                and space, and how the prayers and example of holy men and women can guide and comfort 
                us in our own spiritual journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to God's Providence</h3>
              <p>
                The timing of Seraphina's death on the feast of St. Gregory the Great, as foretold in 
                her dream, serves as a powerful witness to God's providence and the reality of the 
                supernatural. This miraculous detail of her life reminds us that God is intimately 
                involved in our lives and that He often works in mysterious ways that we may not 
                fully understand.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 12</div>
              <p className="text-gray-600">Feast of St. Seraphina</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Seraphina is celebrated on March 12th. This date commemorates her 
                life of patience and devotion, and serves as a reminder of the importance of accepting 
                God's will in all circumstances, especially during times of suffering and difficulty.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Connection to St. Gregory the Great</h3>
              <p className="mb-6">
                Seraphina's feast day is particularly significant because of her special devotion to 
                St. Gregory the Great and her death on his feast day. This connection serves as a 
                reminder of the power of spiritual friendship and the communion of saints. It also 
                highlights how the example and intercession of holy men and women can guide us in 
                our own spiritual journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Seraphina's feast day serves as a reminder of the importance 
                of patience, acceptance, and inner beauty. It's a day to reflect on how we respond 
                to suffering and difficulty in our own lives, and to remember that true beauty and 
                worth come from our relationship with God, not from our physical appearance or 
                circumstances.
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
                  <li>• <strong>Disabled People:</strong> Patron of those with physical disabilities</li>
                  <li>• <strong>Patients:</strong> Patron of those suffering from chronic illness</li>
                  <li>• <strong>Orphans:</strong> Patron of children who have lost their parents</li>
                  <li>• <strong>San Gimignano:</strong> Patron of her hometown in Italy</li>
                  <li>• <strong>Spinners and Seamstresses:</strong> Patron of textile workers</li>
                  <li>• <strong>Inner Beauty:</strong> Patron of those seeking spiritual beauty</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Patience:</strong> Help in accepting God's will</li>
                  <li>• <strong>Suffering:</strong> Strength during illness and disability</li>
                  <li>• <strong>Inner Peace:</strong> Finding peace in difficult circumstances</li>
                  <li>• <strong>Spiritual Growth:</strong> Deepening relationship with God</li>
                  <li>• <strong>Acceptance:</strong> Learning to accept physical limitations</li>
                  <li>• <strong>Devotion:</strong> Growing in devotion to the saints</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Seraphina</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Seraphina, model of patience and acceptance, you who endured 
                    great physical suffering with grace and faith, intercede for us that we may 
                    learn to accept God's will in all circumstances.
                  </p>
                  <p className="mb-4">
                    Help us to see that true beauty lies not in physical appearance but in the 
                    soul, and teach us to find peace and joy even in the midst of suffering and 
                    difficulty. May we, like you, develop a deep devotion to the saints and find 
                    comfort in their intercession.
                  </p>
                  <p>
                    Help us to be patient with our own limitations and those of others, and to 
                    trust in God's providence even when we cannot understand His ways. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Disabled</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Seraphina, patron of the disabled and suffering, intercede for all those 
                    who face physical limitations or chronic illness.
                  </p>
                  <p>
                    Help them to find strength in their weakness, beauty in their brokenness, and 
                    hope in their suffering. May they know that they are loved and valued by God 
                    regardless of their physical condition. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Seraphina, model of patience, pray for us!"
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
            <Link href="/saints/st-gregory" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Doctor of the Church and Seraphina's special patron, whose feast day she died on.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint known for patience and acceptance of suffering in difficult circumstances.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another Italian saint and Doctor of the Church who exemplified patience and wisdom.
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