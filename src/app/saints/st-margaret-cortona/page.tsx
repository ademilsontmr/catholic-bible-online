import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Margaret of Cortona - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Margaret of Cortona, Italian penitent and Franciscan tertiary who overcame a sinful past to become a model of repentance and charity.',
  keywords: [
    'st margaret of cortona',
    'saint margaret of cortona',
    'st margaret cortona',
    'st margaret feast day',
    'st margaret patron saint',
    'catholic saints',
    'february 22 feast day',
    'italian saints',
    'penitent saints'
  ],
  openGraph: {
    title: 'St. Margaret of Cortona - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret of Cortona, Italian penitent and Franciscan tertiary.',
    url: 'https://catholicbibleonline.com/saints/st-margaret-cortona',
  },
  twitter: {
    title: 'St. Margaret of Cortona - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Margaret of Cortona, Italian penitent and Franciscan tertiary.',
  }
}

export default function StMargaretCortonaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Margaret of Cortona
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Italian Penitent, Franciscan Tertiary, Model of Repentance and Charity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Margaret of Cortona</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Penitent</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Margaret of Cortona</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Margaret of Cortona was born in Loviana, Tuscany, in 1247, the daughter of a small farmer. 
                Her mother died when she was only seven years old, and her stepmother showed little care for her 
                high-spirited daughter. Rejected at home, Margaret's life took a tragic turn when she eloped with 
                a youth from Montepulciano and bore him a son out of wedlock.
              </p>
              
              <p className="mb-6">
                For nine years, Margaret lived with her lover in a relationship that was not blessed by the Church. 
                However, her life changed dramatically when her lover was murdered without warning. This tragic event 
                became the catalyst for her conversion. Margaret left Montepulciano and returned as a penitent to 
                her father's house, seeking forgiveness and a new beginning.
              </p>
              
              <p className="mb-6">
                When her father refused to accept her and her son, Margaret found refuge with the Friars Minor at Cortona. 
                Despite finding asylum, Margaret struggled with overcoming the temptations of the flesh. Her journey of 
                repentance was not easy, and she faced many internal battles. One Sunday, she returned to Loviana with 
                a cord around her neck, publicly asking pardon for her past scandal during Mass.
              </p>
              
              <p className="mb-6">
                In her deep remorse, Margaret even attempted to mutilate her face, but was restrained by Friar Giunta, 
                who became her spiritual director. Under his guidance, Margaret began to earn a living by nursing sick 
                ladies, and later gave this up to serve the sick poor without recompense, subsisting only on alms.
              </p>
              
              <p>
                Eventually, Margaret joined the Third Order of St. Francis, and her son also joined the Franciscans 
                a few years later. She advanced rapidly in prayer and was said to be in direct contact with Jesus, 
                experiencing frequent ecstasies. Friar Giunta recorded many of the messages she received from God, 
                which were not all related to herself, and she courageously presented these messages to others.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Margaret of Cortona: Patron of Penitents and Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Margaret's legacy is one of extraordinary conversion, deep repentance, and selfless charity. She exemplifies 
                the power of God's mercy and the possibility of transformation through genuine contrition and penance.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Repentance</h3>
              <p className="mb-6">
                As a penitent who overcame a sinful past, St. Margaret provides a perfect model of true repentance. She shows us that 
                no matter how far we have fallen, God's mercy is always available to those who sincerely seek forgiveness and are 
                willing to make amends for their past actions.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Charity and Service</h3>
              <p className="mb-6">
                St. Margaret's dedication to serving the sick poor without recompense demonstrates the Christian virtue of charity 
                in its purest form. She founded hospitals, established the Confraternity of Our Lady of Mercy, and created the 
                congregation known as "The Poverelle" (The Poor Ones), showing that true conversion leads to acts of love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mystical Union with Christ</h3>
              <p>
                St. Margaret's frequent ecstasies and direct communication with Jesus demonstrate the depth of her spiritual life. 
                Her mystical experiences, recorded by Friar Giunta, show that God can work through even the most broken vessels 
                when they surrender themselves completely to His will.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 22</div>
              <p className="text-gray-600">Feast of St. Margaret of Cortona, Penitent</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Margaret of Cortona is celebrated on February 22nd, commemorating her death in 1297. 
                This day serves as a reminder of the power of repentance and the mercy of God, who can transform 
                even the most broken lives into instruments of His love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, Catholics are encouraged to reflect on the sacrament of reconciliation, practice 
                acts of penance, and reach out to those who may feel unworthy of God's mercy. It's also a time to 
                pray for single mothers and those struggling with past sins.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast of St. Margaret reminds us that God's mercy is boundless and that no one is beyond redemption. 
                It's an excellent time to pray for the intercession of this great penitent saint and to renew our 
                commitment to living a life of repentance and charity.
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
                  <li>• <strong>Penitents:</strong> Patron of those seeking forgiveness and conversion</li>
                  <li>• <strong>Single Mothers:</strong> Protector of unmarried mothers and their children</li>
                  <li>• <strong>Against Temptation:</strong> Helper in overcoming sinful inclinations</li>
                  <li>• <strong>Nurses and Caregivers:</strong> Patron of those who care for the sick</li>
                  <li>• <strong>Franciscan Tertiaries:</strong> Patron of lay Franciscans</li>
                  <li>• <strong>Cortona, Italy:</strong> Patron saint of her adopted city</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion of Sinners:</strong> Helper in turning away from sin</li>
                  <li>• <strong>Healing from Past Sins:</strong> Patron of emotional and spiritual healing</li>
                  <li>• <strong>Charitable Works:</strong> Patron of those serving the poor</li>
                  <li>• <strong>Mystical Prayer:</strong> Helper in deepening spiritual life</li>
                  <li>• <strong>Family Reconciliation:</strong> Patron of healing broken relationships</li>
                  <li>• <strong>Hospital Ministry:</strong> Guardian of healthcare workers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Margaret of Cortona</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Margaret of Cortona, you who experienced the depths of sin and the heights of God's mercy, 
                    intercede for us that we may never despair of God's forgiveness, no matter how great our sins may be.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of true repentance and to serve others with the same charity 
                    that you showed to the sick and poor. May your life remind us that God can transform any heart 
                    that sincerely seeks His mercy.
                  </p>
                  <p>
                    St. Margaret of Cortona, pray for us, that we may be worthy of the promises of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Margaret of Cortona, pray for us!"
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
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, whose Third Order St. Margaret joined, patron of animals and ecology.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-mary-magdalene" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Biblical Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Mary Magdalene
                </h3>
                <p className="text-gray-700 text-sm">
                  First witness to the Resurrection and model of God's mercy, like St. Margaret a penitent saint.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-rita" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Rita of Cascia
                </h3>
                <p className="text-gray-700 text-sm">
                  Augustinian nun known for her patience and miraculous intercession, patron of impossible cases.
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