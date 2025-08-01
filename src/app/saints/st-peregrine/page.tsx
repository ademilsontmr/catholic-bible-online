import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Peregrine Laziosi - Catholic Bible Online',
  description: 'Life, Legacy & Feast Day of St. Peregrine Laziosi, patron saint of cancer patients and those suffering from serious illnesses.',
  keywords: [
    'st peregrine laziosi',
    'cancer patients patron saint',
    'healing saints',
    'servite friar',
    'catholic saints',
    'saint peregrine prayers',
    'cancer healing prayers'
  ],
  openGraph: {
    title: 'St. Peregrine Laziosi - Catholic Bible Online',
    description: 'Life, Legacy & Feast Day of St. Peregrine Laziosi, patron saint of cancer patients.',
    url: 'https://catholicbibleonline.com/saints/st-peregrine',
  },
  twitter: {
    title: 'St. Peregrine Laziosi - Catholic Bible Online',
    description: 'Life, Legacy & Feast Day of St. Peregrine Laziosi, patron saint of cancer patients.',
  }
}

export default function StPeregrinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏥</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Peregrine Laziosi
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Cancer Patients, Servite Friar
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Peregrine Laziosi</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 1</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Peregrine Laziosi</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Peregrine Laziosi was born in 1260 in Forlì, Italy, into a wealthy family. As a young man, 
                he was involved in politics and was a member of the anti-papal faction. During a riot against 
                the Pope's representatives, Peregrine struck St. Philip Benizi, the Prior General of the Servite Order, 
                in the face. However, instead of retaliating, St. Philip turned the other cheek, which deeply 
                moved Peregrine and led to his conversion.
              </p>
              
              <p className="mb-6">
                After his conversion, Peregrine joined the Servite Order and became a model of penance and prayer. 
                He lived a life of strict austerity, sleeping on the floor and fasting frequently. He was known 
                for his deep devotion to the Blessed Virgin Mary and his compassion for the poor and sick.
              </p>
              
              <p className="mb-6">
                The most famous aspect of St. Peregrine's life is the miraculous healing of his leg. He developed 
                a severe infection in his leg that was diagnosed as cancer. The doctors recommended amputation, 
                but the night before the surgery, Peregrine prayed before a crucifix and had a vision of Jesus 
                descending from the cross to touch his leg. The next morning, his leg was completely healed, 
                with no trace of the cancer.
              </p>
              
              <p>
                St. Peregrine died on May 1, 1345, at the age of 85. He was canonized by Pope Benedict XIII 
                in 1726. His feast day is celebrated on May 1st, and he is particularly venerated by those 
                suffering from cancer and other serious illnesses.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Peregrine: Patron of Cancer Patients</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Cancer Patients</h3>
              <p className="mb-6">
                St. Peregrine is universally recognized as the patron saint of cancer patients, those suffering 
                from serious illnesses, and those facing amputation. His miraculous healing serves as a powerful 
                reminder of God's mercy and the power of prayer in times of suffering.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Penance and Prayer</h3>
              <p className="mb-6">
                St. Peregrine's life of strict penance and deep prayer continues to inspire Christians today. 
                His example shows how conversion can lead to a life of holiness and service to others. His 
                devotion to the Blessed Virgin Mary and his compassion for the poor remain powerful examples 
                of Christian charity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Servite Spirituality</h3>
              <p>
                As a member of the Servite Order, St. Peregrine embodied the order's charism of service to 
                Mary and dedication to the suffering. His life continues to inspire the Servite Order and 
                all who seek to serve God through prayer and penance.
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
              <p className="text-gray-600">Feast of St. Peregrine Laziosi</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Peregrine is celebrated on May 1st, the anniversary of his death. This date 
                falls during the spring season, a time of renewal and hope, which is fitting for a saint who 
                brought hope to so many suffering from serious illnesses. The feast is celebrated as a memorial 
                throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Peregrine's feast day, many people participate in special novenas and prayers for 
                cancer patients and those suffering from serious illnesses. Some churches hold special Masses 
                and prayer services, and many people visit shrines dedicated to St. Peregrine. It's also 
                traditional to pray for medical professionals and caregivers on this day.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Peregrine, the Prayer to St. Peregrine, 
                or to make a special petition for someone suffering from cancer or serious illness. Many people 
                also visit churches dedicated to St. Peregrine or make pilgrimages to his shrine in Forlì, Italy.
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
                  <li>• <strong>Cancer Patients:</strong> Patron of those with cancer</li>
                  <li>• <strong>Serious Illnesses:</strong> Protector of the gravely ill</li>
                  <li>• <strong>Amputation Patients:</strong> Patron of those facing surgery</li>
                  <li>• <strong>Medical Professionals:</strong> Patron of healthcare workers</li>
                  <li>• <strong>Caregivers:</strong> Helper of those who care for the sick</li>
                  <li>• <strong>Forlì, Italy:</strong> Patron saint of his hometown</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Cancer Healing:</strong> Intercessor for cancer recovery</li>
                  <li>• <strong>Medical Miracles:</strong> Patron of miraculous healings</li>
                  <li>• <strong>Strength in Suffering:</strong> Helper during illness</li>
                  <li>• <strong>Medical Decisions:</strong> Guide for healthcare choices</li>
                  <li>• <strong>Family Support:</strong> Patron of families of the sick</li>
                  <li>• <strong>Hope in Despair:</strong> Patron of hope during illness</li>
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
                    "O great St. Peregrine, you have been called 'The Mighty,' 'The Wonder-Worker,' because 
                    of the numerous miracles which you have obtained from God for those who have had recourse to you.
                  </p>
                  <p className="mb-4">
                    For so many years you bore in your own flesh this cancerous disease that destroys the very fiber of our being, 
                    and who had recourse to the source of all grace when the power of man could do no more.
                  </p>
                  <p>
                    You were favored with the vision of Jesus coming down from His Cross to heal your affliction. 
                    Ask of God and Our Lady, the cure of the sick whom we entrust to you. (Mention your request) 
                    Aided in this way by your powerful intercession, we shall sing to God, now and for all eternity, 
                    a song of gratitude for His great goodness and mercy. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Cancer Patients</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Peregrine, you who experienced the pain of cancer and the fear of amputation, 
                    intercede for all those who are suffering from this terrible disease.
                  </p>
                  <p>
                    Help them to find strength in their faith, hope in their prayers, and comfort in the 
                    knowledge that God loves them and will never abandon them. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Peregrine Laziosi, pray for us!"
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
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            ← Back to Saints
          </Link>
        </div>
      </div>
    </div>
  )
} 