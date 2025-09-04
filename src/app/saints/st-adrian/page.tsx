import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Adrian - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Adrian, Roman officer who converted to Christianity and died as a martyr.',
  keywords: [
    'st adrian',
    'saint adrian',
    'roman martyr',
    'st adrian biography',
    'st adrian feast day',
    'st adrian patron saint',
    'nicomedia martyr',
    'soldier saint',
    'catholic saints',
    'september 8 feast day'
  ],
  openGraph: {
    title: 'St. Adrian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adrian, Roman officer who converted to Christianity and died as a martyr.',
    url: 'https://catholicbibleonline.com/saints/st-adrian',
  },
  twitter: {
    title: 'St. Adrian - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adrian, Roman officer who converted to Christianity and died as a martyr.',
  }
}

export default function StAdrianPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Adrian
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Roman Officer Turned Martyr, Patron of Soldiers and Butchers
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Adrian</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 8</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Adrian</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                According to legend, Adrian was a pagan officer at the imperial court of Nicomedia, serving in a position 
                of authority during the Roman Empire. As a military officer, he was accustomed to witnessing various forms 
                of punishment and execution, but nothing could have prepared him for what he was about to witness.
              </p>
              
              <p className="mb-6">
                One day, Adrian was present when a group of Christians were being tortured for their faith. Instead of 
                being repulsed by their suffering, he was deeply impressed by their extraordinary courage and unwavering 
                faith in the face of such brutal treatment. Their steadfastness and peace in the midst of agony moved him profoundly.
              </p>
              
              <p className="mb-6">
                Moved by the Christians' courage and conviction, Adrian made a dramatic decision. He publicly declared 
                himself a Christian, knowing full well that this would mean imprisonment and likely death. His conversion 
                was immediate and complete, demonstrating the power of witnessing authentic Christian witness.
              </p>
              
              <p className="mb-6">
                Adrian was immediately imprisoned with the Christians he had admired. He endured excruciating tortures 
                alongside them, sharing in their suffering and their faith. His young wife, Natalia, remained faithful 
                to him throughout his ordeal, providing comfort and support during his imprisonment and torture.
              </p>
              
              <p className="mb-6">
                During his final moments of agony, Natalia was present at his death, offering him comfort and strength. 
                After his martyrdom, she recovered one of his severed hands as a precious relic of his sacrifice and faith.
              </p>
              
              <p>
                Following Adrian's death, Natalia fled to Argyropolis near Constantinople to escape the unwanted advances 
                of an imperial official from Nicomedia who wanted to marry her. She lived there peacefully until her death 
                on December 1st, remaining faithful to her husband's memory and the Christian faith they had shared.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Adrian: Witness to Conversion and Courage</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Dramatic Conversion</h3>
              <p className="mb-6">
                St. Adrian's legacy is marked by his dramatic conversion from pagan officer to Christian martyr. His story 
                demonstrates the power of witnessing authentic Christian courage and faith. His immediate and complete 
                conversion shows how God can work through the witness of others to bring about profound change in hearts.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Death</h3>
              <p className="mb-6">
                Adrian's willingness to declare himself a Christian, knowing it would lead to imprisonment and death, 
                shows extraordinary courage and conviction. His decision to share in the suffering of the Christians he 
                had witnessed demonstrates the depth of his conversion and his commitment to the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Marital Fidelity</h3>
              <p className="mb-6">
                The story of Adrian and his wife Natalia also highlights the power of marital fidelity and support. 
                Natalia's presence during his torture and death, her recovery of his hand as a relic, and her flight 
                to preserve her fidelity to his memory all demonstrate the strength of their Christian marriage.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Soldiers and Butchers</h3>
              <p>
                St. Adrian's background as a military officer and his association with the tools of execution led to 
                his patronage of soldiers and butchers. His story reminds us that God can call anyone, regardless of 
                their profession or background, to witness to the faith.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 8</div>
              <p className="text-gray-600">Feast of St. Adrian</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Adrian is celebrated on September 8th. This feast day honors his dramatic conversion, his courageous 
                witness to the faith, and his martyrdom alongside the Christians who had inspired him.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for conversions, for soldiers and military personnel, for those in 
                dangerous professions, and for married couples. It's also a day to reflect on the power of Christian 
                witness and the courage to stand up for one's faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for conversions, for those in the military, for married couples, 
                and to ask for St. Adrian's intercession in having the courage to witness to our faith in difficult circumstances.
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
                  <li>• <strong>Soldiers:</strong> Patron of military personnel</li>
                  <li>• <strong>Butchers:</strong> Patron of those in the meat trade</li>
                  <li>• <strong>Converts:</strong> Patron of those who convert to Christianity</li>
                  <li>• <strong>Military Officers:</strong> Patron of military leaders</li>
                  <li>• <strong>Roman Martyrs:</strong> Patron of early Christian martyrs</li>
                  <li>• <strong>Courageous Witness:</strong> Patron of bold faith witness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversions:</strong> Helper for those seeking to convert</li>
                  <li>• <strong>Married Couples:</strong> Patron of Christian marriage</li>
                  <li>• <strong>Dangerous Professions:</strong> Helper for those in risky jobs</li>
                  <li>• <strong>Faith Under Pressure:</strong> Patron of those facing opposition</li>
                  <li>• <strong>Witness to Faith:</strong> Helper for bold Christian witness</li>
                  <li>• <strong>Relic Veneration:</strong> Patron of devotion to relics</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Adrian</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adrian, you who were moved to conversion by witnessing the courage of Christian martyrs, 
                    help me to be a witness to Christ that others might be inspired to follow Him.
                  </p>
                  <p>
                    You who had the courage to declare your faith even when it meant death, give me the strength 
                    to stand up for my beliefs in difficult circumstances. Help me to be bold in my Christian witness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Soldiers</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adrian, patron of soldiers, pray for all those who serve in the military.
                  </p>
                  <p>
                    Help them to find strength in their faith, to act with courage and honor, and to be witnesses 
                    to Christ in their service. Protect them in their duties and bring them safely home. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Adrian, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, patron of soldiers and England.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-sebastian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, shot with arrows for his faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-natalia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Natalia
                </h3>
                <p className="text-gray-700 text-sm">
                  Wife of St. Adrian, faithful companion during his martyrdom.
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