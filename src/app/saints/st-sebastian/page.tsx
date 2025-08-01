import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Sebastian - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Sebastian, Roman soldier and martyr, patron of athletes and soldiers.',
  keywords: [
    'st sebastian',
    'saint sebastian',
    'roman soldier martyr',
    'catholic saints',
    'martyr saints',
    'patron of athletes',
    'january 20 feast day'
  ],
  openGraph: {
    title: 'St. Sebastian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Sebastian, Roman soldier and martyr, patron of athletes and soldiers.',
    url: 'https://catholicbibleonline.com/saints/st-sebastian',
  },
  twitter: {
    title: 'St. Sebastian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Sebastian, Roman soldier and martyr, patron of athletes and soldiers.',
  }
}

export default function StSebastianPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Sebastian
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Roman Soldier and Martyr, Patron of Athletes
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Sebastian</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏹</div>
              <div className="text-sm text-gray-600">Martyr Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Sebastian</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Sebastian was born in the 3rd century in Narbonne, Gaul (modern France), 
                into a noble family. He was raised in Milan, Italy, and from an early age 
                showed great promise as a soldier. He joined the Roman army and quickly rose 
                through the ranks, eventually becoming a captain of the Praetorian Guard under 
                Emperor Diocletian. Despite his high position in the Roman military, Sebastian 
                was a secret Christian who used his influence to help persecuted Christians.
              </p>
              
              <p className="mb-6">
                As a member of the Praetorian Guard, Sebastian had access to the imperial 
                palace and used his position to minister to Christians who were imprisoned 
                for their faith. He provided them with food, comfort, and encouragement, 
                often visiting them in secret. His Christian faith remained hidden from his 
                fellow soldiers and superiors, allowing him to continue his ministry of mercy 
                while serving in the Roman army.
              </p>
              
              <p className="mb-6">
                Sebastian's secret was eventually discovered, and he was brought before 
                Emperor Diocletian. The emperor, who was known for his persecution of 
                Christians, was furious that one of his trusted guards was a Christian. 
                Diocletian ordered Sebastian to be tied to a tree and shot with arrows. 
                The soldiers left him for dead, but miraculously, Sebastian survived his 
                wounds and was nursed back to health by a Christian widow named Irene.
              </p>
              
              <p>
                After his recovery, Sebastian boldly confronted Emperor Diocletian, 
                publicly professing his faith and rebuking the emperor for his persecution 
                of Christians. This act of courage sealed his fate. Diocletian ordered 
                Sebastian to be beaten to death with clubs. He was martyred around 288 AD 
                and his body was thrown into the Cloaca Maxima (the main sewer of Rome). 
                His feast day is celebrated on January 20th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Sebastian: Patron of Athletes and Soldiers</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Athletes and Soldiers</h3>
              <p className="mb-6">
                St. Sebastian's greatest legacy is his role as the patron saint of athletes 
                and soldiers. His background as a Roman soldier and his physical endurance 
                during his martyrdom made him a natural patron for those who engage in 
                physical training and military service. Athletes pray to him for strength, 
                endurance, and protection from injury, while soldiers seek his intercession 
                for courage and safety in battle.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Courage and Endurance</h3>
              <p className="mb-6">
                Sebastian's story of surviving the arrow wounds and then boldly confronting 
                the emperor demonstrates extraordinary courage and physical endurance. His 
                ability to withstand suffering and his willingness to face death for his 
                faith makes him a powerful example of Christian fortitude. He shows that 
                true strength comes not from physical might alone, but from faith in God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Divine Protection</h3>
              <p>
                The miraculous survival of Sebastian's arrow wounds has made him a symbol 
                of divine protection. Many people pray to him for protection from disease, 
                particularly plague and epidemics, as he is also considered a patron against 
                these afflictions. His story reminds us that God can protect us even in the 
                most dangerous circumstances and that faith can give us strength beyond our 
                natural abilities.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 20</div>
              <p className="text-gray-600">Feast of St. Sebastian</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Sebastian is celebrated on January 20th, during the early 
                winter season. This date falls during the period after Christmas, a time 
                when we reflect on the cost of discipleship and the witness of the martyrs. 
                The feast is celebrated as a memorial throughout the Church, with special 
                devotion in Italy and among athletes and soldiers.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Sebastian's feast day, many athletes and sports teams hold special 
                prayers and Masses, asking for his intercession for strength and protection. 
                Military personnel also honor him with special services. In some places, 
                particularly in Italy, there are processions and celebrations that include 
                archery competitions, recalling his martyrdom by arrows.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Sebastian, 
                the Prayer for Athletes, or to make a special petition for physical strength 
                and protection. Many people also visit churches dedicated to St. Sebastian 
                or make pilgrimages to his relics, which are venerated in various locations.
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
                  <li>• <strong>Athletes:</strong> Patron of sports and physical training</li>
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Archers:</strong> Patron of archery and bowmen</li>
                  <li>• <strong>Police Officers:</strong> Patron of law enforcement</li>
                  <li>• <strong>Plague Victims:</strong> Patron against epidemics</li>
                  <li>• <strong>Gardeners:</strong> Patron of horticulture</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Physical Strength:</strong> Helper for endurance and fitness</li>
                  <li>• <strong>Protection:</strong> Patron of safety and security</li>
                  <li>• <strong>Courage:</strong> Guide for bravery in difficult situations</li>
                  <li>• <strong>Healing:</strong> Patron of recovery from illness</li>
                  <li>• <strong>Military Service:</strong> Helper for armed forces</li>
                  <li>• <strong>Sports:</strong> Patron of athletic competitions</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Sebastian</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Sebastian, you who endured the arrows of persecution and survived 
                    to witness to Christ, help me to have the courage and strength to face 
                    the challenges in my life. Teach me to be bold in my faith and to trust 
                    in God's protection even in difficult times.
                  </p>
                  <p className="mb-4">
                    Help me to use my physical and spiritual gifts for the glory of God and 
                    to be a witness to His love in all that I do. May your example of endurance 
                    and courage inspire me to persevere in my own struggles.
                  </p>
                  <p>
                    St. Sebastian, pray for me that I may have the strength to overcome 
                    obstacles and to serve God with all my heart, mind, and body. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Athletes</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Sebastian, patron of athletes, intercede for all those who engage 
                    in sports and physical training. Help them to use their gifts for the 
                    glory of God and to maintain good sportsmanship and integrity.
                  </p>
                  <p>
                    Protect them from injury and give them the strength and endurance they 
                    need to perform at their best. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Sebastian, pray for us!"
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
            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Dragon slayer and martyr, patron of soldiers and England.
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

            <Link href="/saints/st-abadios" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Abadios
                </h3>
                <p className="text-gray-700 text-sm">
                  Early Christian martyr and witness to the faith.
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