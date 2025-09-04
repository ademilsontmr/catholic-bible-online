import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Victor and St. Corona - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Victor and St. Corona, early Christian martyrs who died for their faith.',
  keywords: [
    'st victor and corona',
    'saint victor corona',
    'early christian martyrs',
    'may 14 feast day',
    'catholic saints',
    'roman martyrs',
    'treasure hunters patron'
  ],
  openGraph: {
    title: 'St. Victor and St. Corona - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Victor and St. Corona, early Christian martyrs who died for their faith.',
    url: 'https://catholicbibleonline.com/saints/st-victor-corona',
  },
  twitter: {
    title: 'St. Victor and St. Corona - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Victor and St. Corona, early Christian martyrs who died for their faith.',
  }
}

export default function StVictorCoronaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Victor and St. Corona
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Early Christian Martyrs and Witnesses to Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Victor and St. Corona</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Early Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Victor and St. Corona</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Little is known about the two Christian martyrs, St. Victor and St. Corona. 
                Most sources believe they were killed near each other in Roman Syria during 
                the reign of Marcus Aurelius in 170 A.D. and that a Roman judge named 
                Sebastian ordered for their deaths. Victor was believed to be a Roman 
                soldier. After his Christianity was discovered, other soldiers brought 
                Victor to face judgement before Sebastian. Sebastian was known for being 
                a tough man who despised Christians.
              </p>
              
              <p className="mb-6">
                Sebastian, wanting to make an example out of Victor, ordered to be bound 
                to a pillar and whipped until his skin fell from his body. After the 
                whipping, Sebastian ordered Victor's eyes to be gouged out. No matter 
                the amount of pain Victor endured, he never denied the Lord. News about 
                Victor's cruel treatment reached a young girl named Corona. Corona is 
                believed to have been the wife of one of the soldiers, and a Christian 
                herself, though she kept her faith a secret.
              </p>
              
              <p className="mb-6">
                Hearing about Victor, Corona decided she needed to do something to help 
                the dying man. She publicly announced her own Christianity and rushed 
                to Victor's side. She knelt next to him and prayed, letting him know 
                he was not alone. Not much time passed before Corona was brought before 
                Sebastian, too, to face her own punishment. Sebastian could not believe 
                Corona's actions. He immediately ordered her to be imprisoned and tortured.
              </p>
              
              <p>
                Corona was tied to the tops of two palm trees bent down to the ground. 
                At Sebastian's command, the ropes holding the trees down were cut and 
                the trees sprang away from each other and back to their upright position. 
                The force was so strong that Corona's body was ripped in half. As a final 
                command, Sebastian ordered Victor to be beheaded. The stories surrounding 
                St. Victor and Corona vary with some even considering the two martyrs 
                were actually husband and wife killed alongside each other for their faith. 
                Remains, believed to be of St. Victor and Corona's, have been in a basilica 
                in the city of Anzù, Italy since the 9th century.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Victor and St. Corona: Witnesses to Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Models of Courage and Compassion</h3>
              <p className="mb-6">
                St. Victor and St. Corona's greatest legacy is their example of unwavering 
                courage and compassion in the face of extreme persecution. Victor's refusal 
                to deny Christ despite unimaginable torture demonstrates the strength that 
                comes from faith. Corona's decision to publicly declare her Christianity 
                and rush to Victor's aid shows the power of compassion and solidarity 
                among believers. Together, they exemplify the Christian virtues of courage, 
                faithfulness, and love for one's neighbor.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witnesses to Early Christian Community</h3>
              <p className="mb-6">
                Their story provides a window into the early Christian experience during 
                the Roman persecutions. It shows how Christians supported one another 
                in times of trial and how the faith spread even in the face of brutal 
                opposition. Their martyrdom demonstrates that the early Church was built 
                not only on the blood of individual martyrs but on the bonds of love 
                and support that existed between believers. Their example continues to 
                inspire Christians today to stand together in faith and to support one 
                another in times of difficulty.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patrons and Intercessors</h3>
              <p>
                St. Corona is particularly venerated as the patron saint of treasure 
                hunters, a patronage that may have developed from the "treasure" of 
                faith that she and Victor discovered and for which they gave their lives. 
                Their relics have been preserved in Italy since the 9th century, serving 
                as a focus of devotion and pilgrimage. Their feast day on May 14th 
                provides an opportunity for the faithful to honor their memory and 
                seek their intercession for courage, faithfulness, and the strength 
                to support others in their faith journey.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">May 14</div>
              <p className="text-gray-600">Feast of St. Victor and St. Corona</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Victor and St. Corona is celebrated on May 14th, during 
                the spring season when nature is in full bloom. This feast is celebrated 
                as a memorial in the Roman Catholic Church, and it provides an opportunity 
                to honor the memory of these early Christian martyrs. The feast falls 
                during a time of renewal and growth, which is fitting for saints whose 
                lives and deaths contributed to the growth and strengthening of the early 
                Church through their witness to faith and love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Victor and St. Corona, many people participate 
                in special prayers and devotions to honor their memory and seek their 
                intercession. Churches may hold special Masses or prayer services focused 
                on the themes of courage, faithfulness, and Christian solidarity. The 
                day is marked by prayers for the strength to remain faithful to Christ 
                and to support others in their faith journey. Many people also reflect 
                on the example of these martyrs and their willingness to sacrifice 
                everything for their faith and for one another.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for courage, faithfulness, 
                and the strength to support others in their faith journey. Many people 
                make special petitions for help in remaining faithful to their beliefs 
                despite opposition or persecution. The day is also a time to reflect 
                on the importance of Christian community and solidarity. St. Victor 
                and St. Corona's feast day encourages us to remember that our faith 
                may require sacrifice and that we should be prepared to stand together 
                in support of one another.
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
                  <li>• <strong>Treasure Hunters:</strong> Patron of treasure seekers</li>
                  <li>• <strong>Martyrs:</strong> Patron of Christian martyrs</li>
                  <li>• <strong>Courage:</strong> Patron of those seeking courage</li>
                  <li>• <strong>Faithfulness:</strong> Patron of steadfast faith</li>
                  <li>• <strong>Compassion:</strong> Patron of acts of mercy</li>
                  <li>• <strong>Solidarity:</strong> Patron of Christian unity</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Strength:</strong> Helper in times of weakness</li>
                  <li>• <strong>Protection:</strong> Guardian against persecution</li>
                  <li>• <strong>Perseverance:</strong> Patron of endurance</li>
                  <li>• <strong>Community:</strong> Helper for Christian unity</li>
                  <li>• <strong>Support:</strong> Patron of mutual aid</li>
                  <li>• <strong>Intercession:</strong> Powerful advocates in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Victor and St. Corona</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Victor and St. Corona, early Christian martyrs and witnesses 
                    to faith, you who showed such courage and compassion in the face of 
                    persecution, help me to have the strength to remain faithful to Christ 
                    and to support others in their faith journey.
                  </p>
                  <p className="mb-4">
                    Teach me to be a witness to Christ in my daily life, even when it 
                    is difficult or unpopular. Help me to remember the importance of 
                    Christian community and solidarity, and to be willing to support 
                    others in their times of need.
                  </p>
                  <p>
                    St. Victor and St. Corona, pray for me that I may have the courage 
                    to stand firm in my faith, the compassion to help others, and the 
                    strength to endure whatever difficulties may come my way. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Christian Unity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Victor and St. Corona, you who showed such love and support 
                    for one another in the face of persecution, intercede for us that 
                    we may be united in faith and love.
                  </p>
                  <p>
                    Help us to support one another in our Christian journey and to 
                    stand together in times of difficulty. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Victor and St. Corona, pray for us!"
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

            <Link href="/saints/st-felix-spoleto" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Felix of Spoleto
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and patron of courage.
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