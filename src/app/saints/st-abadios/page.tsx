import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Abadios - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Abadios, early Christian martyr and witness to the faith in the early Church.',
  keywords: [
    'st abadios',
    'saint abadios',
    'early christian martyr',
    'catholic saints',
    'martyr saints',
    'early church saints'
  ],
  openGraph: {
    title: 'St. Abadios - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Abadios, early Christian martyr and witness to the faith in the early Church.',
    url: 'https://catholicbibleonline.com/saints/st-abadios',
  },
  twitter: {
    title: 'St. Abadios - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Abadios, early Christian martyr and witness to the faith in the early Church.',
  }
}

export default function StAbadiosPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Abadios
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyr, Witness to the Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Abadios</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 17</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Abadios</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Abadios was an early Christian martyr who lived during the period of Roman 
                persecution of the Church. Little is known about his early life, but he is 
                remembered for his courageous witness to the Christian faith in the face of 
                persecution. His name appears in various early Christian martyrologies and 
                liturgical calendars, indicating his importance in the early Church tradition.
              </p>
              
              <p className="mb-6">
                During a time when Christians faced severe persecution for their faith, St. Abadios 
                remained steadfast in his commitment to Christ. He refused to renounce his faith 
                despite threats and torture, becoming a powerful example of Christian courage and 
                fidelity. His martyrdom served as a witness to the truth of the Gospel and inspired 
                other Christians to remain faithful even in the face of death.
              </p>
              
              <p className="mb-6">
                The exact circumstances of his martyrdom are not fully documented, but he is 
                believed to have suffered for his faith during one of the Roman persecutions. 
                His willingness to die rather than deny Christ made him a model of Christian 
                witness and a source of strength for the early Christian community.
              </p>
              
              <p>
                St. Abadios' feast day is celebrated on March 17th, and he is honored as one of 
                the many early Christian martyrs who gave their lives for the faith. His example 
                continues to inspire Christians today to remain faithful to their beliefs even 
                when faced with opposition or persecution. His legacy reminds us of the cost of 
                discipleship and the power of witness through suffering.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Abadios: Witness to the Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Courage</h3>
              <p className="mb-6">
                St. Abadios' greatest legacy is his example of unwavering courage in the face of 
                persecution. His willingness to die rather than deny his faith demonstrates the 
                depth of his commitment to Christ and serves as a powerful reminder of what it 
                means to be a true disciple. His martyrdom shows that the Christian faith is 
                worth dying for and that God's grace is sufficient even in the most difficult 
                circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Early Church</h3>
              <p className="mb-6">
                As an early Christian martyr, St. Abadios played a crucial role in the growth and 
                strengthening of the early Church. His death, along with the deaths of other 
                martyrs, served as a powerful witness to the truth of the Gospel and often led 
                to the conversion of others. The blood of the martyrs truly became the seed of 
                the Church, as Tertullian famously said.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Modern Christians</h3>
              <p>
                St. Abadios' example continues to inspire Christians today who face persecution 
                or opposition for their faith. His story reminds us that faithfulness to Christ 
                may require sacrifice and that God's strength is made perfect in our weakness. 
                He teaches us that true discipleship means being willing to stand firm in our 
                beliefs, even when it costs us everything.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 17</div>
              <p className="text-gray-600">Feast of St. Abadios</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Abadios is celebrated on March 17th, during the season of Lent. 
                This timing is particularly appropriate as it falls during a period of penance 
                and reflection, reminding us of the sacrifices made by the early martyrs for 
                the faith. The feast is celebrated as a memorial in various Christian traditions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Abadios' feast day, many Christians reflect on the cost of discipleship 
                and pray for the courage to remain faithful to their beliefs. Some churches hold 
                special prayer services for persecuted Christians around the world, and many 
                people pray for his intercession for strength in times of trial and persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Abadios or to make 
                a special petition for courage and faithfulness in the face of opposition. Many 
                people also pray for persecuted Christians worldwide and for the grace to be 
                bold witnesses to the Gospel in their own lives.
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
                  <li>• <strong>Persecuted Christians:</strong> Patron of those suffering for faith</li>
                  <li>• <strong>Martyrs:</strong> Patron of all Christian martyrs</li>
                  <li>• <strong>Courage:</strong> Patron of those needing strength</li>
                  <li>• <strong>Faithfulness:</strong> Patron of steadfast believers</li>
                  <li>• <strong>Witness:</strong> Patron of Christian witnesses</li>
                  <li>• <strong>Perseverance:</strong> Patron of those enduring trials</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Strength in Trials:</strong> Helper for those facing difficulties</li>
                  <li>• <strong>Bold Witness:</strong> Patron of evangelization</li>
                  <li>• <strong>Faith Under Pressure:</strong> Guide for persecuted believers</li>
                  <li>• <strong>Christian Unity:</strong> Patron of Church unity</li>
                  <li>• <strong>Spiritual Courage:</strong> Helper for moral strength</li>
                  <li>• <strong>Endurance:</strong> Patron of long-suffering Christians</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Abadios</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Abadios, you who gave your life as a witness to Christ, help me to 
                    have the courage to stand firm in my faith even when faced with opposition 
                    or persecution. Teach me to be bold in proclaiming the Gospel and to trust 
                    in God's strength when I am weak.
                  </p>
                  <p className="mb-4">
                    Help me to remember that faithfulness to Christ may require sacrifice and 
                    that true discipleship means being willing to suffer for the truth. May your 
                    example inspire me to be a courageous witness to the faith in my daily life.
                  </p>
                  <p>
                    St. Abadios, pray for me that I may have the strength to remain faithful 
                    to Christ in all circumstances and to be a bold witness to His love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Abadios, you who know the cost of discipleship, intercede for all 
                    Christians who are persecuted for their faith around the world. Help them 
                    to remain strong and faithful in the face of suffering.
                  </p>
                  <p>
                    May your example give them courage and hope, and may their witness lead 
                    others to Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Abadios, pray for us!"
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
            <Link href="/saints/st-sebastian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, patron of athletes and soldiers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-lawrence" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lawrence
                </h3>
                <p className="text-gray-700 text-sm">
                  Deacon and martyr, patron of cooks and the poor.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-antioch" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius of Antioch
                </h3>
                <p className="text-gray-700 text-sm">
                  Bishop and martyr, early Church Father and writer.
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