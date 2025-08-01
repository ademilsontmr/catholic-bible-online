import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Felix of Spoleto - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Felix of Spoleto, early Christian martyr and patron saint.',
  keywords: [
    'st felix of spoleto',
    'saint felix spoleto',
    'early christian martyr',
    'may 18 feast day',
    'catholic saints',
    'italian saints',
    'martyr saints'
  ],
  openGraph: {
    title: 'St. Felix of Spoleto - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Felix of Spoleto, early Christian martyr and patron saint.',
    url: 'https://catholicbibleonline.com/saints/st-felix-spoleto',
  },
  twitter: {
    title: 'St. Felix of Spoleto - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Felix of Spoleto, early Christian martyr and patron saint.',
  }
}

export default function StFelixSpoletoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕊️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Felix of Spoleto
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyr and Patron Saint
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Felix of Spoleto</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Felix of Spoleto</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Felix of Spoleto was an early Christian martyr who lived during the 
                time of the Roman Empire. Little is known about his early life, but he 
                is believed to have been born in the region of Spoleto, Italy, during 
                the early centuries of Christianity. His life and martyrdom exemplify 
                the courage and faith of the early Christians who faced persecution for 
                their beliefs.
              </p>
              
              <p className="mb-6">
                During the period of Christian persecution under the Roman Empire, St. 
                Felix was known for his unwavering faith and commitment to Christ. He 
                refused to renounce his Christian beliefs despite the threats and 
                pressures from Roman authorities. His steadfastness in the face of 
                persecution made him a powerful witness to the Christian faith and an 
                inspiration to other believers.
              </p>
              
              <p className="mb-6">
                St. Felix's martyrdom is believed to have occurred during one of the 
                waves of persecution against Christians in the Roman Empire. He was 
                arrested for his Christian faith and brought before Roman authorities 
                who demanded that he sacrifice to the pagan gods. When he refused, 
                he was subjected to various forms of torture and ultimately put to 
                death for his faith.
              </p>
              
              <p>
                After his death, St. Felix was venerated as a martyr by the early 
                Christian community. His relics were preserved and became the focus 
                of devotion in the region of Spoleto and beyond. Churches and shrines 
                were built in his honor, and he became a powerful intercessor for 
                the faithful. His feast day is celebrated on May 18th, and he continues 
                to be remembered as a model of courage and faithfulness in the face 
                of persecution.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Felix of Spoleto: Early Christian Martyr</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Courage</h3>
              <p className="mb-6">
                St. Felix's greatest legacy is his example of unwavering courage and 
                faithfulness in the face of persecution. His refusal to renounce his 
                Christian faith, even under threat of death, serves as a powerful 
                reminder of the cost of discipleship and the strength that comes from 
                faith in Christ. His martyrdom demonstrates that true faith is not 
                merely a matter of convenience but a commitment that may require the 
                ultimate sacrifice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Early Christianity</h3>
              <p className="mb-6">
                St. Felix's life and death provide a window into the early Christian 
                experience during the period of Roman persecution. His story helps 
                modern Christians understand the challenges faced by the early Church 
                and the courage required to maintain faith in hostile circumstances. 
                His example continues to inspire Christians today who face various 
                forms of persecution or opposition for their beliefs.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron and Intercessor</h3>
              <p>
                Throughout the centuries, St. Felix has been venerated as a powerful 
                intercessor and patron saint. His relics have been the focus of 
                devotion and pilgrimage, and many miracles have been attributed to 
                his intercession. He serves as a reminder that the saints in heaven 
                continue to pray for and support the faithful on earth. His feast 
                day on May 18th provides an opportunity for the faithful to honor 
                his memory and seek his intercession for courage, faithfulness, and 
                protection in times of difficulty.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">May 18</div>
              <p className="text-gray-600">Feast of St. Felix of Spoleto</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Felix of Spoleto is celebrated on May 18th, during 
                the spring season when nature is in full bloom. This feast is celebrated 
                as a memorial in the Roman Catholic Church, and it provides an opportunity 
                to honor the memory of this early Christian martyr. The feast falls during 
                a time of renewal and growth, which is fitting for a saint whose life 
                and death contributed to the growth and strengthening of the early Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Felix's feast day, many people participate in special prayers 
                and devotions to honor his memory and seek his intercession. Churches 
                may hold special Masses or prayer services focused on the theme of 
                Christian courage and faithfulness. The day is marked by prayers for 
                the strength to remain faithful to Christ in the face of difficulties 
                and opposition. Many people also reflect on the example of the early 
                martyrs and their willingness to sacrifice everything for their faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for courage, faithfulness, 
                and the strength to witness to Christ in difficult circumstances. Many 
                people make special petitions for help in remaining faithful to their 
                beliefs despite opposition or persecution. The day is also a time to 
                reflect on the cost of discipleship and to ask for the grace to follow 
                Christ wholeheartedly. St. Felix's feast day encourages us to remember 
                that our faith may require sacrifice and that we should be prepared to 
                stand firm in our beliefs.
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
                  <li>• <strong>Spoleto:</strong> Patron saint of Spoleto, Italy</li>
                  <li>• <strong>Martyrs:</strong> Patron of Christian martyrs</li>
                  <li>• <strong>Courage:</strong> Patron of those seeking courage</li>
                  <li>• <strong>Faithfulness:</strong> Patron of steadfast faith</li>
                  <li>• <strong>Persecution:</strong> Patron of persecuted Christians</li>
                  <li>• <strong>Witness:</strong> Patron of Christian witness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Strength:</strong> Helper in times of weakness</li>
                  <li>• <strong>Protection:</strong> Guardian against persecution</li>
                  <li>• <strong>Perseverance:</strong> Patron of endurance</li>
                  <li>• <strong>Conversion:</strong> Helper for those seeking faith</li>
                  <li>• <strong>Peace:</strong> Patron of inner peace</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Felix of Spoleto</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Felix of Spoleto, early Christian martyr and witness to the 
                    faith, you who remained steadfast in your love for Christ even in 
                    the face of persecution and death, help me to have the courage to 
                    stand firm in my faith.
                  </p>
                  <p className="mb-4">
                    Teach me to be a faithful witness to Christ in my daily life, even 
                    when it is difficult or unpopular. Help me to remember that true 
                    faith may require sacrifice and that I should be prepared to follow 
                    Christ wholeheartedly, no matter the cost.
                  </p>
                  <p>
                    St. Felix, pray for me that I may have the strength to remain faithful 
                    to God, the courage to witness to Christ, and the perseverance to 
                    endure whatever difficulties may come my way. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Courage</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Felix of Spoleto, you who faced persecution with unwavering 
                    courage, intercede for me in my times of difficulty and fear.
                  </p>
                  <p>
                    Help me to find the strength to remain faithful to Christ and to 
                    be a witness to His love in all circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Felix of Spoleto, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, patron of athletes.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Dragon slayer and martyr, patron of soldiers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-aaron-aleth" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Aaron of Aleth
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian hermit and spiritual guide.
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