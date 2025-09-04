import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Roch - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Roch, the patron saint of plague victims and invalids, known for his miraculous healing powers.',
  keywords: [
    'st roch',
    'saint roch',
    'st roch biography',
    'st roch feast day',
    'st roch patron saint',
    'patron of plague',
    'patron of invalids',
    'rocco italy',
    'roque spain',
    'august 16 feast day'
  ],
  openGraph: {
    title: 'St. Roch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Roch, the patron saint of plague victims and invalids, known for his miraculous healing powers.',
    url: 'https://catholicbibleonline.com/saints/st-roch',
  },
  twitter: {
    title: 'St. Roch - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Roch, the patron saint of plague victims and invalids, known for his miraculous healing powers.',
  }
}

export default function StRochPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Roch
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Plague Victims, Invalids, and Healing
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Roch</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 16</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Roch</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Untrustworthy sources say he was probably born at <strong>Montpellier, France</strong>, son of the governor there. He was orphaned when he was twenty. He went on pilgrimage to Rome and devoted himself to caring for the victims of a plague that was ravaging Italy. He became a victim himself at Piacenza but recovered and was reputed to have performed many miracles of healing.
              </p>
              
              <p className="mb-6">
                On his return to Montpellier, he was imprisoned for five years as a spy in pilgrim's disguise when his uncle, who was governor, ordered him imprisoned. His uncle failed to recognize him, and Roch failed to identify himself. Roch died in prison and was only then identified as the former governor's son by a birthmark in the form of a cross on his chest.
              </p>
              
              <p className="mb-6">
                Another biographer says that he was arrested as a spy at Angers, Lombardi, and died in prison there. When miracles were reported at his intercession after his death, a popular cult developed and he is invoked against pestilence and plague. He is also the patron of invalids.
              </p>
              
              <p>
                He is known as <strong>Rocco</strong> in Italy and <strong>Roque</strong> in Spain. His feast day is August 16th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Roch: Patron of Plague Victims</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Healing</h3>
              <p className="mb-6">
                St. Roch's legacy is primarily associated with miraculous healing, particularly during times of plague and pestilence. His own recovery from the plague at Piacenza, followed by his reputation for performing many miracles of healing, established him as a powerful intercessor for those suffering from illness and disease.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Selfless Service</h3>
              <p className="mb-6">
                Despite being a nobleman's son, Roch chose to devote himself to caring for plague victims in Italy, putting his own life at risk. His selfless service to the sick and suffering, even after becoming a victim himself, demonstrates the Christian virtue of charity and compassion for those in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Mysterious Death and Identification</h3>
              <p className="mb-6">
                The circumstances of his death and subsequent identification through the cross-shaped birthmark on his chest add a mystical element to his story. This miraculous identification after death helped establish his cult and led to his widespread veneration as a saint.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">International Patronage</h3>
              <p>
                St. Roch's popularity spread across Europe, with different names in different countries: Rocco in Italy and Roque in Spain. His universal appeal as a patron of plague victims and invalids made him one of the most invoked saints during times of epidemic and illness throughout history.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 16</div>
              <p className="text-gray-600">Feast of St. Roch, Patron of Plague Victims</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Roch is celebrated on August 16th, commemorating his life of service to plague victims and his miraculous healing powers. This date honors his dedication to caring for the sick and his own miraculous recovery from the plague.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Cultural Celebrations</h3>
              <p className="mb-6">
                In many parts of Europe, especially in Italy and Spain, St. Roch's feast day is celebrated with special processions and prayers for protection against disease. Churches dedicated to him often hold special services for the sick and those seeking healing.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for those suffering from illness, especially during times of epidemic or widespread disease. It's also a time to ask for St. Roch's intercession for healing and to give thanks for the gift of health.
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
                  <li>• <strong>Plague Victims:</strong> Those suffering from epidemic diseases</li>
                  <li>• <strong>Invalids:</strong> People with chronic illness or disability</li>
                  <li>• <strong>The Sick:</strong> All those suffering from illness</li>
                  <li>• <strong>Healing:</strong> Those seeking physical recovery</li>
                  <li>• <strong>Pilgrims:</strong> Those on spiritual journeys</li>
                  <li>• <strong>Disease Prevention:</strong> Protection against illness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Epidemic Protection:</strong> During times of widespread disease</li>
                  <li>• <strong>Medical Workers:</strong> Those caring for the sick</li>
                  <li>• <strong>Recovery from Illness:</strong> Those healing from sickness</li>
                  <li>• <strong>Family Health:</strong> Protection for family members</li>
                  <li>• <strong>Hospital Patients:</strong> Those in medical facilities</li>
                  <li>• <strong>Public Health:</strong> Community health and safety</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Roch</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O God, who gave Saint Roch the grace to care for plague victims and to perform many miracles of healing, grant us the grace to follow his example of selfless service to the sick and suffering.
                  </p>
                  <p className="mb-4">
                    Through his intercession, protect us from illness and disease, and help us to care for those who are sick with the same compassion and love that he showed. May we find healing in body and soul through his powerful intercession.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Sick</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Roch, patron of the sick and invalids, intercede for all those who are suffering from illness today. Help them to find strength in their suffering and to trust in God's healing power.
                  </p>
                  <p>
                    May they experience the same miraculous healing that you were known for, and may their faith be strengthened through their trials. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Protection from Disease</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Roch, who was protected from the plague and who protected others, pray for us that we may be shielded from all forms of illness and disease.
                  </p>
                  <p>
                    Help us to maintain good health and to be grateful for the gift of our bodies. May we use our health to serve others and to glorify God. Amen."
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
            <Link href="/saints/st-camillus" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Camillus de Lellis
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Camillians, patron of the sick and healthcare workers.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-cosmas-damian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  Sts. Cosmas & Damian
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin brothers and physicians, patrons of doctors and medical professionals.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-peregrine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Healing Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Peregrine
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron of cancer patients and those suffering from serious illness.
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