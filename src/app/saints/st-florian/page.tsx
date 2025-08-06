import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Florian - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Florian, Roman army officer and martyr who is patron of Poland, firefighters, and protection from fire and water.',
  keywords: [
    'st florian',
    'saint florian',
    'st florian biography',
    'st florian feast day',
    'st florian patron saint',
    'firefighter saint',
    'poland patron saint',
    'roman martyr',
    'diocletian persecution',
    'fire protection saint',
    'water protection saint',
    'catholic saints',
    'may 4 feast day'
  ],
  openGraph: {
    title: 'St. Florian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Florian, Roman army officer and martyr who is patron of Poland, firefighters, and protection from fire and water.',
    url: 'https://catholicbibleonline.com/saints/st-florian',
  },
  twitter: {
    title: 'St. Florian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Florian, Roman army officer and martyr who is patron of Poland, firefighters, and protection from fire and water.',
  }
}

export default function StFlorianPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🚒</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Florian
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Roman Army Officer, Martyr, Patron of Firefighters and Poland
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Florian</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🚒</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Florian</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                The St. Florian commemorated in the Roman Martyrology on May 4th was an officer of 
                the Roman army who occupied a high administrative post in Noricum, now part of Austria. 
                His position of authority in the Roman military administration gave him a prominent 
                role in the region, but it was his faith that would ultimately define his legacy.
              </p>
              
              <p className="mb-6">
                During the brutal persecution of Christians under Emperor Diocletian, St. Florian 
                suffered death for the Faith. His legendary "Acts" state that he gave himself up at 
                Lorch to the soldiers of Aquilinus, the governor, when they were rounding up the 
                Christians. This act of courage and self-sacrifice demonstrates his commitment to 
                his fellow Christians and his willingness to stand with them in their time of trial.
              </p>
              
              <p className="mb-6">
                After making a bold confession of his Christian faith, St. Florian endured horrific 
                tortures. He was twice scourged, half-flayed alive, and set on fire. Despite these 
                brutal punishments, his faith remained unshaken. Finally, he was thrown into the 
                river Enns with a stone around his neck, completing his martyrdom through drowning.
              </p>
              
              <p className="mb-6">
                His body was recovered and buried by a pious woman, showing that even in death, 
                his witness inspired others to acts of charity and devotion. The body was eventually 
                removed to the Augustinian Abbey of St. Florian, near Linz, where it became a center 
                of devotion and pilgrimage for centuries.
              </p>
              
              <p className="mb-6">
                It is said to have been at a later date translated to Rome, and Pope Lucius III, 
                in 1138, gave some of the saint's relics to King Casimir of Poland and to the Bishop 
                of Cracow. This distribution of relics helped spread devotion to St. Florian 
                throughout Central Europe and established his connection to Poland.
              </p>
              
              <p>
                Since that time, St. Florian has been regarded as a patron of Poland as well as of 
                Linz, Upper Austria, and of firemen. There has been popular devotion to St. Florian 
                in many parts of central Europe, and the tradition as to his martyrdom, not far from 
                the spot where the Enns flows into the Danube, is ancient and reliable. Many miracles 
                of healing are attributed to his intercession, and he is invoked as a powerful 
                protector in danger from fire or water.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Florian: Protector Against Fire and Water</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Military Courage</h3>
              <p className="mb-6">
                St. Florian's legacy is marked by his unique position as a Roman military officer 
                who chose to stand with persecuted Christians rather than use his authority to 
                protect himself. His decision to give himself up to the authorities when they were 
                rounding up Christians shows his solidarity with the suffering Church and his 
                willingness to sacrifice his privileged position for the sake of his faith. This 
                example of military courage in the service of Christ continues to inspire soldiers 
                and public servants today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness of Enduring Faith</h3>
              <p className="mb-6">
                The brutal nature of St. Florian's martyrdom - being scourged, flayed, burned, and 
                finally drowned - demonstrates the depth of his faith and his complete commitment 
                to Christ. His ability to endure such extreme suffering while maintaining his 
                Christian witness serves as a powerful example of the strength that comes from 
                faith in God. His martyrdom shows that true courage is not the absence of fear, 
                but the willingness to remain faithful even in the face of overwhelming pain and 
                death.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-6">Patron of Protection</h3>
              <p className="mb-6">
                St. Florian's association with protection from fire and water, despite dying by 
                these very elements, speaks to the Christian belief in God's power to transform 
                suffering into protection. His martyrdom by fire and water has made him a powerful 
                intercessor for those facing dangers from these elements. This patronage extends 
                particularly to firefighters, who risk their lives to protect others from fire, 
                and to all who work with or near these dangerous elements.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge Between Nations</h3>
              <p>
                St. Florian's relics and devotion spread from Austria to Poland and throughout 
                Central Europe, making him a unifying figure across national boundaries. His 
                patronage of Poland, established through the gift of his relics to King Casimir, 
                shows how saints can become symbols of national identity while remaining universal 
                figures of faith. His widespread devotion in Central Europe demonstrates the power 
                of holy men and women to unite people across cultural and political divides.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 4</div>
              <p className="text-gray-600">Feast of St. Florian</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Florian is celebrated on May 4th. This feast day honors his courageous 
                martyrdom, his military service, and his powerful intercession for protection 
                against fire and water.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for firefighters, for protection from fire and 
                water, for the nation of Poland, and for courage in the face of persecution. It's 
                also a day to reflect on the importance of standing with the persecuted and the 
                power of faith to overcome even the most brutal suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for firefighters and emergency workers, 
                for protection from natural disasters, for the Church in Central Europe, and to 
                ask for St. Florian's intercession in finding courage to stand with the persecuted.
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
                  <li>• <strong>Firefighters:</strong> Patron of fire protection and emergency workers</li>
                  <li>• <strong>Poland:</strong> Patron saint of the nation of Poland</li>
                  <li>• <strong>Linz:</strong> Patron of the city of Linz, Austria</li>
                  <li>• <strong>Upper Austria:</strong> Patron of the region of Upper Austria</li>
                  <li>• <strong>Fire Protection:</strong> Patron of protection from fire</li>
                  <li>• <strong>Water Protection:</strong> Patron of protection from water dangers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Emergency Workers:</strong> Helper for firefighters and rescue workers</li>
                  <li>• <strong>Natural Disasters:</strong> Patron of protection from fire and flood</li>
                  <li>• <strong>Military Personnel:</strong> Patron of soldiers and public servants</li>
                  <li>• <strong>Persecuted Christians:</strong> Helper for those facing religious persecution</li>
                  <li>• <strong>Central Europe:</strong> Patron of the region and its people</li>
                  <li>• <strong>Courage in Suffering:</strong> Helper for those enduring trials</li>
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
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Florian</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Florian, you who were a Roman officer and gave your life for Christ, 
                    help me to have the courage to stand with the persecuted and to remain faithful 
                    even in the face of suffering.
                  </p>
                  <p>
                    You who endured torture by fire and water, protect me and my loved ones from 
                    these dangers. Intercede for all firefighters and emergency workers who risk 
                    their lives to protect others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Firefighters</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Florian, patron of firefighters, watch over all those who risk their 
                    lives to protect others from fire and danger.
                  </p>
                  <p>
                    Keep them safe in their noble work, and help them to serve with courage and 
                    compassion. May your intercession bring them home safely to their families. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Florian, pray for us!"
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
                  Roman soldier and martyr, patron of soldiers and athletes.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Soldier and martyr, patron of soldiers and England.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Archangel Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  Prince of the heavenly host, protector against evil.
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