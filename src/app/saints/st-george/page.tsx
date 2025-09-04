import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. George - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. George, dragon slayer and martyr, patron of soldiers and England.',
  keywords: [
    'st george',
    'saint george',
    'dragon slayer',
    'catholic saints',
    'martyr saints',
    'patron of england',
    'april 23 feast day'
  ],
  openGraph: {
    title: 'St. George - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. George, dragon slayer and martyr, patron of soldiers and England.',
    url: 'https://catholicbibleonline.com/saints/st-george',
  },
  twitter: {
    title: 'St. George - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. George, dragon slayer and martyr, patron of soldiers and England.',
  }
}

export default function StGeorgePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🐉</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. George
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Dragon Slayer and Martyr, Patron of England
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. George</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🐉</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. George</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. George was born in the late 3rd century in Cappadocia (modern Turkey) 
                to a noble Christian family. His father was a Roman army officer, and 
                George followed in his footsteps, joining the Roman military and rising 
                to the rank of tribune in the imperial guard. He served under Emperor 
                Diocletian, who was known for his persecution of Christians.
              </p>
              
              <p className="mb-6">
                Despite his high position in the Roman army, George was a devout Christian 
                who refused to participate in the persecution of his fellow believers. 
                When Diocletian issued an edict requiring all soldiers to offer sacrifices 
                to the Roman gods, George publicly declared his Christian faith and refused 
                to comply. This act of courage led to his arrest and imprisonment.
              </p>
              
              <p className="mb-6">
                During his imprisonment, George endured various forms of torture, including 
                being stretched on a wheel of swords and being thrown into a pit of quicklime. 
                Despite these sufferings, he remained steadfast in his faith. According to 
                tradition, he was miraculously healed from his wounds, which led to the 
                conversion of many witnesses, including the emperor's wife, Empress Alexandra.
              </p>
              
              <p>
                St. George was eventually beheaded for his faith around 303 AD in Lydda 
                (modern Lod, Israel). His martyrdom became a powerful witness to the 
                Christian faith, and he was quickly venerated as a saint. The most famous 
                legend associated with him - the slaying of the dragon - emerged later 
                and symbolizes his victory over evil and his protection of the innocent. 
                His feast day is celebrated on April 23rd.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. George: Patron of England and Soldiers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of England</h3>
              <p className="mb-6">
                St. George's greatest legacy is his role as the patron saint of England. 
                His popularity in England began during the Crusades, when English soldiers 
                adopted him as their patron. King Edward III founded the Order of the 
                Garter under St. George's patronage in 1348, and his feast day became 
                a major celebration in England. The St. George's Cross (a red cross on 
                a white background) became the flag of England and is still used today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Courage and Chivalry</h3>
              <p className="mb-6">
                The legend of St. George slaying the dragon has made him a universal 
                symbol of courage, chivalry, and the triumph of good over evil. This 
                story, while not historical, represents his spiritual victory over 
                persecution and his willingness to defend the innocent. The dragon 
                symbolizes evil, sin, and persecution, while George represents the 
                Christian knight who fights for truth and justice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Witness</h3>
              <p>
                St. George's martyrdom serves as a powerful example of Christian witness 
                and faithfulness in the face of persecution. His willingness to die 
                rather than renounce his faith inspired countless Christians throughout 
                history. He shows that true courage comes from faith in God and that 
                standing up for what is right may require great sacrifice.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 23</div>
              <p className="text-gray-600">Feast of St. George</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. George is celebrated on April 23rd, during the spring 
                season. This date falls during the Easter season, a time of renewal and 
                victory, which is fitting for a saint whose life symbolizes the triumph 
                of faith over persecution. The feast is celebrated as a solemnity in 
                England and as a memorial throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. George's feast day, England celebrates with parades, pageants, 
                and the flying of the St. George's Cross. Many churches hold special 
                services, and some people wear red roses (England's national flower) 
                in his honor. Military units and organizations dedicated to St. George 
                hold special ceremonies and celebrations.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. George, 
                the Prayer for Soldiers, or to make a special petition for courage 
                and protection. Many people also visit churches dedicated to St. George 
                or make pilgrimages to his shrine in Lydda, Israel.
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
                  <li>• <strong>England:</strong> Patron saint of England</li>
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Cavalry:</strong> Patron of mounted troops</li>
                  <li>• <strong>Scouts:</strong> Patron of scouting organizations</li>
                  <li>• <strong>Farmers:</strong> Patron of agriculture</li>
                  <li>• <strong>Syria:</strong> Patron saint of Syria</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage:</strong> Helper for bravery in difficult times</li>
                  <li>• <strong>Protection:</strong> Patron of safety and security</li>
                  <li>• <strong>Chivalry:</strong> Guide for honorable behavior</li>
                  <li>• <strong>Victory:</strong> Patron of overcoming obstacles</li>
                  <li>• <strong>Defense:</strong> Helper for protecting the innocent</li>
                  <li>• <strong>Knighthood:</strong> Patron of noble virtues</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. George</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. George, you who faced the dragon of persecution with courage 
                    and faith, help me to be brave in the face of the challenges and 
                    difficulties in my life. Teach me to stand up for what is right 
                    and to defend the innocent and vulnerable.
                  </p>
                  <p className="mb-4">
                    Help me to have the courage to fight against evil in all its forms 
                    and to be a witness to the truth of the Gospel. May your example 
                    of chivalry and honor inspire me to live a life of virtue and service.
                  </p>
                  <p>
                    St. George, pray for me that I may have the strength to overcome 
                    the dragons in my life and to serve God with courage and fidelity. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Soldiers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. George, patron of soldiers and protector of the innocent, 
                    intercede for all those who serve in the military and who put 
                    their lives at risk to protect others.
                  </p>
                  <p>
                    Help them to be courageous and honorable in their service, and 
                    protect them from harm. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. George, pray for us!"
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

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads heavenly armies.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  The Maid of Orléans, who led French armies to victory.
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