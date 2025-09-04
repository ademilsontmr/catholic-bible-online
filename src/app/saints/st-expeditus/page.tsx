import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Expeditus - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Expeditus, patron saint of urgent causes, procrastinators, and those seeking immediate help.',
  keywords: [
    'st expeditus',
    'saint expeditus',
    'expedite saint',
    'st expeditus biography',
    'st expeditus feast day',
    'st expeditus patron saint',
    'urgent causes saint',
    'procrastination saint',
    'catholic saints',
    'april 19 feast day'
  ],
  openGraph: {
    title: 'St. Expeditus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Expeditus, patron saint of urgent causes, procrastinators, and those seeking immediate help.',
    url: 'https://catholicbibleonline.com/saints/st-expeditus',
  },
  twitter: {
    title: 'St. Expeditus - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Expeditus, patron saint of urgent causes, procrastinators, and those seeking immediate help.',
  }
}

export default function StExpeditusPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Expeditus
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Urgent Causes, Procrastinators, and Immediate Help
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Expeditus</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 19</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Expeditus</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Expeditus, also known as Expedite, was a Roman centurion martyred for his faith during the Diocletianic Persecution around April 303. 
                Stationed in Melitene, in what is now Turkey, he is believed to have been a member of the Legio XII Fulminata.
              </p>
              
              <p className="mb-6">
                According to tradition, Expeditus converted to Christianity in Armenia and faced persecution for his newfound faith. 
                The Church honors him as the patron saint of urgent causes, procrastinators, merchants, sailors, and students during exams.
              </p>
              
              <p className="mb-6">
                Legend tells of the moment he resolved to convert when the devil, appearing as a crow, tried to delay him by croaking "Cras" (Latin for "tomorrow"). 
                Expeditus crushed the bird underfoot, declaring, "Hodie!" (Latin for "Today!"), symbolizing his immediate commitment to Christ.
              </p>
              
              <p>
                He is often depicted in Roman military attire, holding a cross inscribed with "Hodie" and standing on a crow marked "Cras," 
                representing his decisive choice to follow Christ without delay.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Expeditus: Patron of Urgent Causes</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                While there are questions about the historical authenticity of St. Expeditus, his veneration began in the Middle Ages 
                and grew significantly across Europe, Latin America, and Réunion Island. Devotees seek his intercession for urgent needs, 
                and he is honored with shrines and altars in various parts of the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Decisive Action</h3>
              <p className="mb-6">
                St. Expeditus continues to inspire Catholics to act decisively in faith and to trust in God's providence without delay. 
                His famous response "Hodie!" (Today!) rather than "Cras!" (Tomorrow!) serves as a powerful reminder to embrace 
                God's call immediately.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Hurried</h3>
              <p className="mb-6">
                Though his name was removed from the official list of martyrs by Pope Pius X in 1905, his popularity among the faithful endures. 
                He remains a beloved intercessor for those facing urgent situations, deadlines, and moments requiring immediate action.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Symbol of Courage</h3>
              <p>
                His story teaches us that true conversion requires courage and immediate action. When faced with the choice between 
                delay and decisive commitment to Christ, St. Expeditus chose the path of immediate faith and action.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 19</div>
              <p className="text-gray-600">Feast of St. Expeditus, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Expeditus is celebrated on April 19th, the traditional date of his martyrdom during the Diocletianic Persecution. 
                This feast day falls during the Easter season, reminding us of the urgency of Christ's call to discipleship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for urgent needs, make quick decisions they've been putting off, and ask for 
                St. Expeditus's intercession in matters requiring immediate attention. It's also a day to reflect on 
                procrastination and the importance of acting decisively in faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for urgent causes, to overcome procrastination, and to ask 
                for the grace to act decisively when God calls us to action.
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
                  <li>• <strong>Urgent Causes:</strong> Patron of matters requiring immediate attention</li>
                  <li>• <strong>Procrastinators:</strong> Helper for those who delay important decisions</li>
                  <li>• <strong>Merchants and Traders:</strong> Patron of business and commerce</li>
                  <li>• <strong>Sailors and Mariners:</strong> Protector of those at sea</li>
                  <li>• <strong>Students During Exams:</strong> Helper for academic success</li>
                  <li>• <strong>Quick Decisions:</strong> Patron of decisive action</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Deadlines:</strong> Helper for meeting urgent deadlines</li>
                  <li>• <strong>Emergency Situations:</strong> Patron of crisis management</li>
                  <li>• <strong>Conversion:</strong> Helper for immediate spiritual decisions</li>
                  <li>• <strong>Business Success:</strong> Patron of quick business deals</li>
                  <li>• <strong>Travel Delays:</strong> Helper for smooth and quick travel</li>
                  <li>• <strong>Overcoming Procrastination:</strong> Patron of immediate action</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Expeditus</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Expeditus, you who know the value of time and the importance of acting decisively, 
                    help me to overcome procrastination and to act immediately when God calls me. 
                    Intercede for me in my urgent needs and help me to trust in God's providence without delay.
                  </p>
                  <p>
                    Just as you crushed the crow of procrastination and declared 'Hodie!' instead of 'Cras!', 
                    help me to choose today over tomorrow in matters of faith and action. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Expeditus, pray for us!"
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
            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Archangel Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector against evil.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-jude" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Apostle Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jude
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of hopeless cases and desperate situations, known for powerful intercession.
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