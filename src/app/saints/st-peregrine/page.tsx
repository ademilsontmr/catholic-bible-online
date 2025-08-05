import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Peregrine - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Peregrine, patron saint of cancer patients and model of conversion.',
  keywords: [
    'st peregrine',
    'saint peregrine',
    'peregrine laziosi',
    'peregrine biography',
    'peregrine feast day',
    'peregrine patron saint',
    'cancer patients patron saint',
    'servite saint',
    'conversion saint',
    'may 1 feast day'
  ],
  openGraph: {
    title: 'St. Peregrine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peregrine, patron saint of cancer patients and model of conversion.',
    url: 'https://catholicbibleonline.com/saints/st-peregrine',
  },
  twitter: {
    title: 'St. Peregrine - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Peregrine, patron saint of cancer patients and model of conversion.',
  }
}

export default function StPeregrinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🩹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Peregrine
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Cancer Patients, Model of Conversion
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Peregrine</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🩹</div>
              <div className="text-sm text-gray-600">Healing Saint</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Peregrine</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Peregrine Laziosi was born of a wealthy family at Forli, Italy, in 1260. As a youth he was active in politics as a member of the anti-papal party. During one uprising, which the Pope sent St. Philip Benizi to mediate, Philip was struck in the face by Peregrine. When Philip offered the other cheek, Peregrine was so overcome that he repented and converted to Catholicism.
              </p>
              
              <p className="mb-6">
                Following the instructions of the Virgin Mary received in a vision, Peregrine went to Siena and joined the Servites. It is believed that he never allowed himself to sit down for thirty years, while as far as possible, observing silence and solitude. Sometime later, Peregrine was sent to Forli to found a new house of the Servite Order.
              </p>
              
              <p className="mb-6">
                An ideal priest, he had a reputation for fervent preaching and being a good confessor. When he was afflicted with cancer of the foot and amputation had been decided upon, he spent the night before the operation, in prayer. The following morning he was completely cured. This miracle caused his reputation to become widespread.
              </p>
              
              <p className="mb-6">
                He died in 1345 at the age of eighty-five, and he was canonized by Pope Benedict XIII in 1726. St. Peregrine, like St. Paul, was in open defiance of the Church as a youth. Once given the grace of conversion he became one of the great saints of his time. His great fervor and qualities as a confessor brought many back to the true Faith.
              </p>
              
              <p>
                Afflicted with cancer, Peregrine turned to God and was richly rewarded for his Faith, enabling him over many years to lead others to the truth. He is the patron of cancer patients.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Peregrine: From Persecutor to Patron of Healing</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Dramatic Conversion</h3>
              <p className="mb-6">
                St. Peregrine's legacy demonstrates the power of God's grace to transform even the most hardened hearts. His conversion from an anti-papal political activist to a holy priest shows that no one is beyond God's mercy and love. Like St. Paul, his dramatic conversion became a powerful witness to the transformative power of grace.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Cancer Patients</h3>
              <p className="mb-6">
                As the patron saint of cancer patients, St. Peregrine continues to bring hope and comfort to millions of people suffering from this devastating disease. His miraculous healing from cancer of the foot serves as a powerful reminder that God can work miracles even in the most desperate situations. His intercession is sought by cancer patients and their families worldwide.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Servite Order Founder</h3>
              <p className="mb-6">
                St. Peregrine's role in founding a new house of the Servite Order in Forli demonstrates his commitment to spreading the Gospel and serving the Church. His reputation as a fervent preacher and good confessor shows how God can use even former persecutors to bring others to faith. His ministry brought many back to the true Faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Penance and Prayer</h3>
              <p>
                St. Peregrine's extraordinary penance of never sitting down for thirty years, combined with his practice of silence and solitude, shows his deep commitment to atoning for his past sins and growing in holiness. His example teaches us the importance of penance, prayer, and making reparation for our past mistakes.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 1</div>
              <p className="text-gray-600">Feast of St. Peregrine, Patron of Cancer Patients</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Peregrine is celebrated on May 1st, commemorating his death and his lifelong dedication to serving God and the sick. This date falls during the Easter season, a fitting time to remember his miraculous healing and the hope he brings to those suffering from illness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Healthcare Celebrations</h3>
              <p className="mb-6">
                In hospitals and cancer treatment centers around the world, especially those with Catholic affiliations, St. Peregrine's feast day is celebrated with special prayers and services. Cancer patients and healthcare workers often pray for his intercession in their battle against this disease.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for cancer patients, for medical researchers, and to ask for St. Peregrine's intercession in helping us to trust in God's healing power. Many people also pray for the grace of conversion and the strength to make reparation for past sins.
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
                  <li>• <strong>Cancer Patients:</strong> Those suffering from cancer</li>
                  <li>• <strong>Cancer Survivors:</strong> Those who have overcome cancer</li>
                  <li>• <strong>Foot Problems:</strong> Those with foot ailments</li>
                  <li>• <strong>Amputees:</strong> Those who have lost limbs</li>
                  <li>• <strong>Forli:</strong> His hometown in Italy</li>
                  <li>• <strong>Servite Order:</strong> The religious order he joined</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Turning away from sin</li>
                  <li>• <strong>Healing:</strong> Physical and spiritual healing</li>
                  <li>• <strong>Penance:</strong> Making reparation for sins</li>
                  <li>• <strong>Confession:</strong> Sacrament of reconciliation</li>
                  <li>• <strong>Preaching:</strong> Proclaiming the Gospel</li>
                  <li>• <strong>Miracles:</strong> Divine intervention in illness</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Peregrine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Peregrine, patron of cancer patients, who was miraculously healed of cancer yourself, intercede for all those who suffer from this disease.
                  </p>
                  <p className="mb-4">
                    Help them to trust in God's healing power and to find strength in their suffering. May they, like you, turn to God in prayer and be rewarded for their faith.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Conversion</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Peregrine, who experienced such a dramatic conversion from persecutor to saint, help us to be open to God's grace in our lives.
                  </p>
                  <p>
                    Teach us to recognize our sins and to make reparation for them through prayer and penance. May we, like you, become powerful witnesses to God's mercy and love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Healing</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Peregrine, who was completely cured of cancer through prayer, intercede for all those who are sick and suffering.
                  </p>
                  <p>
                    Help them to place their trust in God and to find comfort in their faith. May they experience God's healing love and be restored to health. Amen."
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
            <Link href="/saints/st-philip-benizi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Servite Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip Benizi
                </h3>
                <p className="text-gray-700 text-sm">
                  The saint whose example of forgiveness led to Peregrine's conversion.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Conversion Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who converted from persecutor to apostle.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-raphael" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Raphael
                </h3>
                <p className="text-gray-700 text-sm">
                  Archangel known for healing and guiding travelers.
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