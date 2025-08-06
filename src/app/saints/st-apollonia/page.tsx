import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Apollonia - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Apollonia, martyr and patron saint of dental diseases and toothaches.',
  keywords: [
    'st apollonia',
    'saint apollonia',
    'st apollonia biography',
    'st apollonia feast day',
    'st apollonia patron saint',
    'martyr saint',
    'dental patron saint',
    'toothache saint',
    'emperor philip persecution',
    'roman martyr',
    'catholic saints',
    'february 9 feast day'
  ],
  openGraph: {
    title: 'St. Apollonia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Apollonia, martyr and patron saint of dental diseases and toothaches.',
    url: 'https://catholicbibleonline.com/saints/st-apollonia',
  },
  twitter: {
    title: 'St. Apollonia - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Apollonia, martyr and patron saint of dental diseases and toothaches.',
  }
}

export default function StApolloniaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🦷</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Apollonia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Martyr, Patron of Dental Diseases and Toothaches
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Apollonia</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🦷</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Apollonia</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Apollonia lived during a time of intense persecution of Christians in the Roman 
                Empire, specifically during the reign of Emperor Philip in the year 249. Her story 
                is one of extraordinary courage and unwavering faith in the face of brutal torture 
                and death. The account of her life and martyrdom was written by St. Dionysius to 
                Fabian, Bishop of Antioch, providing us with a detailed record of her heroic witness 
                to Christ.
              </p>
              
              <p className="mb-6">
                During the persecution under Emperor Philip, Christians were being systematically 
                targeted and tortured for their faith. St. Apollonia, a devout Christian woman, 
                found herself in the hands of persecutors who were determined to force her to 
                renounce her faith in Christ. The methods they used were particularly brutal and 
                designed to cause maximum pain and suffering.
              </p>
              
              <p className="mb-6">
                The persecutors began their torture by striking St. Apollonia in the face, causing 
                severe injuries. But their cruelty did not stop there. In a particularly savage act, 
                they knocked out all of her teeth, causing unimaginable pain and suffering. This 
                brutal treatment was meant to break her spirit and force her to deny her Christian 
                faith. However, St. Apollonia remained steadfast in her commitment to Christ.
              </p>
              
              <p className="mb-6">
                After enduring this horrific torture, St. Apollonia was threatened with being thrown 
                into a fire unless she renounced her faith. Faced with this ultimatum, she made a 
                decision that would forever mark her as a model of Christian courage and devotion. 
                Rather than deny her Lord, St. Apollonia chose to jump into the flames voluntarily, 
                embracing martyrdom as a witness to her faith in Jesus Christ.
              </p>
              
              <p className="mb-6">
                Her voluntary sacrifice and the manner of her death made St. Apollonia a powerful 
                symbol of Christian martyrdom and unwavering faith. Her story spread throughout the 
                Christian community, inspiring others to remain faithful even in the face of 
                persecution and death. The Church quickly recognized her as a saint and martyr, 
                and her intercession was sought by those suffering from dental problems.
              </p>
              
              <p>
                In ancient Christian art, St. Apollonia is often depicted with a golden tooth at 
                the end of her necklace, symbolizing the teeth that were knocked out during her 
                torture. She is also frequently shown with pincers holding a tooth, representing 
                the brutal treatment she endured. These artistic representations serve as powerful 
                reminders of her suffering and her ultimate victory through faith in Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Apollonia: Martyr and Patron of Dental Health</h2>
          
          <div className="bg-red-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Courageous Martyrdom</h3>
              <p className="mb-6">
                St. Apollonia's legacy is marked by her extraordinary courage and unwavering faith 
                in the face of brutal torture and death. Her willingness to endure the most painful 
                forms of torture rather than renounce her faith in Christ demonstrates the depth of 
                her love for God and her commitment to the Gospel. Her voluntary leap into the flames 
                shows her complete trust in God and her desire to witness to the truth of Christianity 
                even at the cost of her own life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Dental Health</h3>
              <p className="mb-6">
                As the patron saint of dental diseases and toothaches, St. Apollonia has become a 
                source of comfort and hope for countless people suffering from dental problems. Her 
                own experience of having all her teeth knocked out during torture has made her a 
                natural intercessor for those experiencing dental pain and suffering. Many people 
                throughout the centuries have turned to her in prayer when facing dental issues, 
                seeking her intercession for relief and healing.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Voluntary Sacrifice</h3>
              <p className="mb-6">
                St. Apollonia's decision to jump into the flames voluntarily rather than deny her 
                faith is a powerful example of how Christians are called to make sacrifices for 
                their beliefs. Her action demonstrates that true faith is not just about avoiding 
                suffering, but about being willing to endure it for the sake of Christ. Her example 
                continues to inspire Christians to remain faithful even when faced with difficult 
                choices and painful circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Christian Art and Devotion</h3>
              <p>
                The artistic representations of St. Apollonia with a golden tooth and pincers 
                holding a tooth have become powerful symbols in Christian art and devotion. These 
                images serve as reminders not only of her suffering but also of her victory through 
                faith. They help the faithful to remember that even in the midst of pain and 
                suffering, God's grace can bring about redemption and victory. Her story continues 
                to be told and celebrated as an example of Christian courage and devotion.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-red-600 mb-2">February 9</div>
              <p className="text-gray-600">Feast of St. Apollonia</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Apollonia is celebrated on February 9th. This feast day honors her courageous 
                martyrdom, her unwavering faith in Christ, and her special patronage of those 
                suffering from dental diseases and toothaches.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those suffering from dental problems, for 
                dentists and dental professionals, and for the courage to remain faithful in times 
                of trial. It's also a day to reflect on the importance of standing firm in one's 
                faith even when faced with suffering and persecution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for dental health, for those in pain, 
                for medical professionals, and to ask for St. Apollonia's intercession in finding 
                courage to remain faithful during difficult times.
              </p>
            </div>
          </div>
        </section>

        {/* Patronage Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🛡️ Patronage</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Primary Patronages</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Dental Diseases:</strong> Patron of all dental ailments</li>
                  <li>• <strong>Toothaches:</strong> Patron of those suffering from tooth pain</li>
                  <li>• <strong>Dentists:</strong> Patron of dental professionals</li>
                  <li>• <strong>Dental Health:</strong> Patron of overall oral health</li>
                  <li>• <strong>Pain Relief:</strong> Patron of those seeking relief from pain</li>
                  <li>• <strong>Medical Suffering:</strong> Patron of those enduring medical pain</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Courage in Suffering:</strong> Helper for those enduring pain</li>
                  <li>• <strong>Faith Under Persecution:</strong> Patron of persecuted Christians</li>
                  <li>• <strong>Medical Professionals:</strong> Helper for healthcare workers</li>
                  <li>• <strong>Voluntary Sacrifice:</strong> Patron of those making sacrifices for faith</li>
                  <li>• <strong>Dental Procedures:</strong> Helper for those undergoing dental work</li>
                  <li>• <strong>Endurance:</strong> Patron of those needing strength to persevere</li>
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
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Apollonia</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Apollonia, you who endured the most painful torture rather than deny your 
                    faith in Christ, help me to remain steadfast in my beliefs even when faced with 
                    suffering and difficulty.
                  </p>
                  <p>
                    You who are the patron of dental diseases and toothaches, intercede for me in my 
                    time of pain and suffering. Help me to find relief and healing, and give me the 
                    courage to endure whatever trials come my way. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Dental Health</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Apollonia, patron of dental health and toothaches, pray for all those who 
                    are suffering from dental problems and pain.
                  </p>
                  <p>
                    Help them to find relief and healing, and guide the hands of dentists and medical 
                    professionals who care for them. May your intercession bring comfort and strength 
                    to all who are in pain. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Apollonia, pray for us!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Saints Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">Related Saints</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Virgin Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin and martyr, patron of young girls, purity, and chastity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cosmas-and-damian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Cosmas and Damian
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin brothers, physicians and martyrs, patrons of doctors and medical professionals.
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