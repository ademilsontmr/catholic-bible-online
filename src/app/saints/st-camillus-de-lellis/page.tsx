import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Camillus de Lellis - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Camillus de Lellis, founder of the Ministers of the Sick and patron saint of the sick, nurses, and nursing groups.',
  keywords: [
    'st camillus de lellis',
    'saint camillus de lellis',
    'st camillus de lellis biography',
    'st camillus de lellis feast day',
    'st camillus de lellis patron saint',
    'catholic saints',
    'july 18 feast day',
    'ministers of the sick',
    'camellians'
  ],
  openGraph: {
    title: 'St. Camillus de Lellis - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Camillus de Lellis, founder of the Ministers of the Sick.',
    url: 'https://catholicbibleonline.com/saints/st-camillus-de-lellis',
  },
  twitter: {
    title: 'St. Camillus de Lellis - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Camillus de Lellis, founder of the Ministers of the Sick.',
  }
}

export default function StCamillusDeLellisPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Camillus de Lellis
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Ministers of the Sick, Patron of the Sick and Nurses
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Camillus de Lellis</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 18</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healthcare</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Camillus de Lellis</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Camillus de Lellis was born in 1550 at Bocchianico, Italy. His early life was marked by 
                military service and personal struggles. He fought for the Venetians against the Turks and 
                developed an addiction to gambling, which left him penniless in Naples by 1574.
              </p>
              
              <p className="mb-6">
                After hitting rock bottom, Camillus experienced a profound conversion and attempted to become 
                a Capuchin novice. However, he was unable to be professed due to a diseased leg he had contracted 
                while fighting the Turks. This physical limitation would later become the foundation of his 
                ministry to the sick.
              </p>
              
              <p className="mb-6">
                Instead of giving up, Camillus devoted himself to caring for the sick and became the director 
                of St. Giacomo Hospital in Rome. His confessor, St. Philip Neri, recognized his calling and 
                gave him permission to be ordained. With two companions, Camillus founded his own congregation, 
                the Ministers of the Sick (later known as the Camellians), dedicated specifically to the care 
                of the sick.
              </p>
              
              <p className="mb-6">
                The new congregation began ministering to the sick at Holy Ghost Hospital in Rome, and their 
                work quickly expanded. They enlarged their facilities in 1585, founded a new house in Naples 
                in 1588, and courageously attended to the plague-stricken aboard ships in Rome's harbor and 
                throughout the city.
              </p>
              
              <p>
                In 1591, Pope Gregory XIV officially recognized the Congregation as an order to serve the sick. 
                In 1591 and 1605, Camillus sent members of his order to minister to wounded troops in Hungary 
                and Croatia, creating what is considered the first field medical unit. Despite being gravely 
                ill for many years, he continued his work until resigning as superior of the Order in 1607. 
                He died in Rome on July 14, 1614, the year after attending a General Chapter there.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Camillus de Lellis: Pioneer of Healthcare Ministry</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Revolutionary Healthcare Ministry</h3>
              <p className="mb-6">
                St. Camillus de Lellis revolutionized the care of the sick by establishing the first religious 
                order specifically dedicated to healthcare ministry. His approach combined medical care with 
                spiritual comfort, recognizing that the sick need both physical and spiritual healing.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion and Service</h3>
              <p className="mb-6">
                Camillus's life demonstrates the power of conversion and redemption. From a gambling-addicted 
                soldier to a saintly healthcare worker, his transformation shows that God can use anyone's 
                past experiences and even their weaknesses to bring about great good.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in Crisis</h3>
              <p className="mb-6">
                During plague outbreaks, Camillus and his companions showed extraordinary courage by caring 
                for the sick when others fled. They risked their own lives to provide both medical care and 
                spiritual comfort to those suffering from contagious diseases.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Military Field Medicine</h3>
              <p>
                Camillus's innovation in sending his order to care for wounded soldiers in Hungary and Croatia 
                established the foundation for military field medicine. This pioneering work continues to 
                influence how we care for the wounded in conflict zones.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 18</div>
              <p className="text-gray-600">Feast of St. Camillus de Lellis</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Camillus de Lellis is celebrated on July 18th. This date commemorates his 
                death and his entrance into eternal life, where he continues to intercede for all healthcare 
                workers and the sick.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Canonization</h3>
              <p className="mb-6">
                St. Camillus was canonized in 1746 by Pope Benedict XIV. His canonization recognized not only 
                his personal holiness but also the importance of his work in establishing healthcare ministry 
                as a vital part of the Church's mission.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Camillus's feast day serves as a reminder of the dignity of healthcare 
                work and the importance of combining medical care with spiritual care. It's a day to pray for 
                all healthcare workers and to remember the sick in our prayers.
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
                  <li>• <strong>The Sick:</strong> Patron of all who are ill or suffering</li>
                  <li>• <strong>Nurses and Nursing Groups:</strong> Patron of healthcare workers</li>
                  <li>• <strong>Hospitals and Healthcare Facilities:</strong> Protector of medical institutions</li>
                  <li>• <strong>Military Medical Personnel:</strong> Patron of field medics</li>
                  <li>• <strong>Those with Gambling Addictions:</strong> Helper for recovery</li>
                  <li>• <strong>Converts:</strong> Patron of those who have experienced conversion</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Healthcare Workers:</strong> Protection and strength for medical staff</li>
                  <li>• <strong>Plague and Epidemic Victims:</strong> Intercession during health crises</li>
                  <li>• <strong>Wounded Soldiers:</strong> Care for military personnel</li>
                  <li>• <strong>Hospital Patients:</strong> Comfort and healing for the sick</li>
                  <li>• <strong>Addiction Recovery:</strong> Help for those struggling with addictions</li>
                  <li>• <strong>Medical Missions:</strong> Success for healthcare outreach</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Camillus de Lellis</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Camillus, you who were chosen by God to be the patron of the sick and 
                    the special protector of those who care for them, look with compassion upon all who are 
                    suffering in body or soul.
                  </p>
                  <p className="mb-4">
                    Intercede for us that we may have the strength to bear our crosses with patience and 
                    resignation, and that we may use our sufferings as a means of purification and sanctification.
                  </p>
                  <p>
                    Help all healthcare workers to serve the sick with love, compassion, and skill, following 
                    your example of selfless service. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Camillus de Lellis, pray for the sick and for all who care for them!"
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
            <Link href="/saints/st-john-of-god" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John of God
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Brothers Hospitallers and co-patron of the sick with St. Camillus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philip-neri" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Spiritual Fathers
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip Neri
                </h3>
                <p className="text-gray-700 text-sm">
                  Camillus's confessor who guided him in his spiritual journey and ministry.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita-cascia" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Patron Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of impossible causes and those in desperate situations.
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