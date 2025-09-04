import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Daniel - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Daniel, Egyptian martyr who comforted persecuted Christians during Maximus persecution.',
  keywords: [
    'st daniel',
    'saint daniel',
    'st daniel martyr',
    'st daniel feast day',
    'st daniel patron saint',
    'catholic saints',
    'february 16 feast day',
    'egyptian martyrs'
  ],
  openGraph: {
    title: 'St. Daniel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Daniel, Egyptian martyr who comforted persecuted Christians.',
    url: 'https://catholicbibleonline.com/saints/st-daniel',
  },
  twitter: {
    title: 'St. Daniel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Daniel, Egyptian martyr who comforted persecuted Christians.',
  }
}

export default function StDanielPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Daniel
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Egyptian Martyr, Comforter of Persecuted Christians
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Daniel</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 16</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Daniel</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Daniel was an Egyptian Christian who lived during the persecution of Emperor Maximus in the early 4th century. 
                Along with his four companions - Elias, Isaias, Jeremy, and Samuel - he demonstrated extraordinary courage and 
                compassion in the face of brutal persecution.
              </p>
              
              <p className="mb-6">
                During the reign of Maximus, many Christians were condemned to work in the mines of Cilicia, enduring harsh 
                conditions and brutal treatment. St. Daniel and his companions, moved by Christian charity, traveled to comfort 
                and support these persecuted believers, bringing them spiritual and material assistance.
              </p>
              
              <p className="mb-6">
                Their mission of mercy was discovered when they were apprehended at the gates of Caesarea in Palestine. 
                Brought before the governor Firmilian, they were accused of being Christians and ordered to renounce their faith. 
                When they refused, they were subjected to brutal torture and ultimately beheaded for their steadfast belief in Christ.
              </p>
              
              <p className="mb-6">
                The martyrdom of St. Daniel and his companions inspired others to remain faithful. Porphyry, a servant of 
                St. Pamphilus, demanded that their bodies be given proper burial. When it was discovered that he too was a Christian, 
                he was tortured and burned to death. Seleucus, who witnessed Porphyry's death and applauded his constancy, 
                was also arrested and beheaded on the governor's orders.
              </p>
              
              <p>
                St. Daniel's legacy lives on as a powerful example of Christian courage, compassion, and unwavering faith 
                in the face of persecution. His feast day is celebrated on February 16th.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Daniel: Patron of Courage and Compassion</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Daniel's legacy is one of extraordinary courage, selfless compassion, and unwavering faith. He exemplifies 
                the Christian virtue of reaching out to those who are suffering, even at great personal risk.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Christian Charity</h3>
              <p className="mb-6">
                As a comforter of persecuted Christians, St. Daniel provides a perfect model of Christian charity. He shows us that 
                true Christian love involves action - visiting the imprisoned, comforting the afflicted, and standing in solidarity 
                with those who suffer for their faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in Persecution</h3>
              <p className="mb-6">
                St. Daniel's courage in the face of torture and death demonstrates the strength that comes from faith in Christ. 
                He teaches us that true courage is not the absence of fear, but the willingness to stand firm in our beliefs 
                even when facing the most terrible consequences.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Faith</h3>
              <p>
                St. Daniel's martyrdom, along with his companions, continues to inspire Christians throughout the ages. 
                His example reminds us that our faith may require sacrifice and that our witness to Christ can inspire 
                others to remain faithful even in the darkest times.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 16</div>
              <p className="text-gray-600">Feast of St. Daniel and Companions, Martyrs</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Daniel is celebrated on February 16th, commemorating his martyrdom and the witness 
                of his companions. This day serves as a reminder of the courage and compassion that characterized 
                the early Christian martyrs.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this feast day, Catholics are encouraged to pray for persecuted Christians around the world, 
                reflect on the importance of standing firm in our faith, and practice acts of charity and compassion 
                toward those in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast of St. Daniel reminds us that true Christian discipleship often requires courage, 
                sacrifice, and unwavering commitment to the Gospel message of love and truth. It's an excellent 
                time to pray for the intercession of the martyrs and to renew our commitment to living our faith boldly.
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
                  <li>• <strong>Martyrs:</strong> Patron of all who die for their faith</li>
                  <li>• <strong>Persecuted Christians:</strong> Protector of those suffering for Christ</li>
                  <li>• <strong>Courage:</strong> Patron of those needing strength in adversity</li>
                  <li>• <strong>Compassion:</strong> Patron of those who serve the suffering</li>
                  <li>• <strong>Prisoners:</strong> Patron of those unjustly imprisoned</li>
                  <li>• <strong>Egyptian Christians:</strong> Patron of the Coptic Church</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Standing Firm in Faith:</strong> Helper in times of persecution</li>
                  <li>• <strong>Christian Charity:</strong> Patron of charitable works</li>
                  <li>• <strong>Witness to the Gospel:</strong> Helper in evangelization</li>
                  <li>• <strong>Overcoming Fear:</strong> Patron of those facing threats</li>
                  <li>• <strong>Supporting the Suffering:</strong> Patron of caregivers</li>
                  <li>• <strong>Faithful Witness:</strong> Guardian of Christian testimony</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Daniel</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Glorious St. Daniel, you who showed such courage and compassion in comforting persecuted Christians, 
                    intercede for us that we may have the strength to stand firm in our faith and the charity to serve 
                    those who are suffering.
                  </p>
                  <p className="mb-4">
                    Help us to be witnesses of Christ's love in our daily lives, showing courage in the face of adversity 
                    and compassion toward those in need. May your example inspire us to live our faith with boldness and love.
                  </p>
                  <p>
                    St. Daniel, pray for us, that we may be worthy of the promises of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Daniel, pray for us!"
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
            <Link href="/saints/st-sebastian" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Sebastian
                </h3>
                <p className="text-gray-700 text-sm">
                  Roman soldier and martyr, patron of athletes and soldiers, known for his courage in persecution.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-george" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. George
                </h3>
                <p className="text-gray-700 text-sm">
                  Dragon slayer and martyr, patron of soldiers and England, symbol of courage and faith.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-valentine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Valentine
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of love, marriage, and young people, celebrated worldwide for his witness to faith.
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