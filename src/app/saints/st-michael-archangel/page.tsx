import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Michael the Archangel - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Michael the Archangel, the great archangel who defeated Satan and leads the heavenly armies.',
  keywords: [
    'st michael archangel',
    'saint michael',
    'st michael biography',
    'st michael feast day',
    'st michael patron saint',
    'archangel michael',
    'september 29 feast day',
    'warrior saints'
  ],
  openGraph: {
    title: 'St. Michael the Archangel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Michael the Archangel, the great archangel who defeated Satan.',
    url: 'https://catholicbibleonline.com/saints/st-michael-archangel',
  },
  twitter: {
    title: 'St. Michael the Archangel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Michael the Archangel, the great archangel who defeated Satan.',
  }
}

export default function StMichaelArchangelPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Michael the Archangel
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Great Archangel, Defender of Heaven, Patron of Warriors
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Michael the Archangel</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 29</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Warrior</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Michael the Archangel</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Michael the Archangel is one of the most powerful and revered figures in Catholic tradition. 
                His name means "Who is like God?" - a rhetorical question that emphasizes God's incomparable power 
                and Michael's role as His faithful servant.
              </p>
              
              <p className="mb-6">
                According to Scripture and tradition, St. Michael is the leader of the heavenly armies and the 
                great defender of God's people. He is mentioned by name in the Book of Daniel, where he is called 
                "the great prince who stands up for the children of your people" (Daniel 12:1).
              </p>
              
              <p className="mb-6">
                In the Book of Revelation, St. Michael leads the angels in the great battle against Satan and 
                his fallen angels: "And there was war in heaven: Michael and his angels fought against the dragon; 
                and the dragon fought and his angels, and prevailed not" (Revelation 12:7-8).
              </p>
              
              <p className="mb-6">
                St. Michael is also believed to have appeared to St. Joan of Arc, giving her courage and guidance 
                in her mission to save France. Throughout history, he has been invoked for protection against evil 
                and for strength in spiritual battles.
              </p>
              
              <p>
                As an archangel, St. Michael holds a special place in the hierarchy of angels, serving as God's 
                chief warrior and protector of the Church and all faithful Christians.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Michael: Defender of Heaven</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Warrior</h3>
              <p className="mb-6">
                St. Michael's legacy is one of unwavering courage, loyalty to God, and protection of His people. 
                He exemplifies the perfect warrior - strong, faithful, and always fighting for what is right. 
                His example teaches us to stand firm in our faith and to defend truth and justice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Faith</h3>
              <p className="mb-6">
                As the defender of the Church, St. Michael continues to protect all who call upon him. He is 
                especially invoked against the powers of darkness and for protection in times of spiritual warfare. 
                His intercession is powerful for those facing temptation, spiritual attacks, or difficult decisions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Obedience</h3>
              <p className="mb-6">
                St. Michael's complete obedience to God's will serves as a model for all Christians. He shows us 
                that true strength comes from submission to God's authority and that the greatest victories are 
                won through faithfulness to His commands.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector and Guide</h3>
              <p>
                Throughout history, St. Michael has been a source of comfort and protection for countless believers. 
                He continues to watch over the Church, protect the faithful, and guide souls toward God. His 
                presence reminds us that we are never alone in our spiritual battles.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 29</div>
              <p className="text-gray-600">Feast of St. Michael, St. Gabriel, and St. Raphael, Archangels</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Michael is celebrated on September 29th, along with the other archangels 
                Gabriel and Raphael. This date was chosen because it falls near the autumn equinox, a time 
                when the forces of light and darkness are in balance, symbolizing the spiritual battle.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, many Catholics pray the Prayer to St. Michael the Archangel, which was 
                composed by Pope Leo XIII after he had a vision of Satan's attack on the Church. It's also 
                traditional to wear blue clothing and to make special offerings for protection.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Litany of St. Michael, the Prayer to St. Michael, 
                or to make a novena to St. Michael. Many people also consecrate themselves to St. Michael on this day 
                for protection and guidance.
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
                  <li>• <strong>Police Officers and Law Enforcement:</strong> Protector of those who serve and protect</li>
                  <li>• <strong>Soldiers and Military Personnel:</strong> Patron of warriors and defenders</li>
                  <li>• <strong>Paramedics and Emergency Workers:</strong> Guardian of first responders</li>
                  <li>• <strong>Grocers and Food Merchants:</strong> Patron of food providers</li>
                  <li>• <strong>Mariners and Sailors:</strong> Protector of those at sea</li>
                  <li>• <strong>Radiologists and X-ray Technicians:</strong> Patron of medical imaging</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection from Evil:</strong> Defender against demonic forces</li>
                  <li>• <strong>Spiritual Warfare:</strong> Leader in battles against evil</li>
                  <li>• <strong>Deliverance from Demons:</strong> Liberator from demonic oppression</li>
                  <li>• <strong>Courage and Strength:</strong> Source of spiritual fortitude</li>
                  <li>• <strong>Protection in Travel:</strong> Guardian of travelers</li>
                  <li>• <strong>Defense of the Faith:</strong> Protector of the Church</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Michael the Archangel</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Michael the Archangel, defend us in battle. Be our protection against the wickedness 
                    and snares of the devil. May God rebuke him, we humbly pray, and do thou, O Prince of the 
                    heavenly hosts, by the power of God, cast into hell Satan and all the evil spirits who 
                    prowl about the world seeking the ruin of souls. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Michael the Archangel, pray for us!"
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
            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Marian Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  The foster father of Jesus and husband of Mary, patron of fathers and workers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
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