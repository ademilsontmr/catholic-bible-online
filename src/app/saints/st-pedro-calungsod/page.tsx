import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Pedro Calungsod - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Pedro Calungsod, Filipino martyr and missionary who died for the faith in Guam.',
  keywords: [
    'st pedro calungsod',
    'saint pedro calungsod',
    'pedro calungsod biography',
    'st pedro calungsod feast day',
    'st pedro calungsod patron saint',
    'filipino saint',
    'guam martyr',
    'missionary saint',
    'catholic saints',
    'april 2 feast day'
  ],
  openGraph: {
    title: 'St. Pedro Calungsod - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pedro Calungsod, Filipino martyr and missionary who died for the faith in Guam.',
    url: 'https://catholicbibleonline.com/saints/st-pedro-calungsod',
  },
  twitter: {
    title: 'St. Pedro Calungsod - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pedro Calungsod, Filipino martyr and missionary who died for the faith in Guam.',
  }
}

export default function StPedroCalungsodPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Pedro Calungsod
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Filipino Martyr, Missionary, and Second Filipino Saint
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Pedro Calungsod</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 2</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Pedro Calungsod</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Pedro Calungsod (c. 1654 – April 2, 1672) is a Filipino Roman Catholic martyr who was killed while doing 
                missionary work in Guam in 1672. He was beatified on March 5, 2000, by Pope John Paul II.
              </p>
              
              <p className="mb-6">
                As a skilled sacristan and teacher of catechism, he was a companion of Blessed Diego Luis de San Vitores to the Marianas Islands. 
                Through their efforts, many received the sacraments, especially that of baptism.
              </p>
              
              <p className="mb-6">
                A plot to kill Pedro and San Vitores started when a certain Choco, a Chinese who gained influence over the Macanas of Marianas Island, 
                circulated false accusations that the missionaries were spreading poison through the ritual of the pouring of water (i.e. baptism), 
                and through the ritual of Catholic Masses.
              </p>
              
              <p>
                Calungsod and Diego San Vitores were both murdered after baptizing an infant and mother who converted to the Roman Catholic faith. 
                Calungsod is the second Filipino saint after San Lorenzo Ruiz, approved by the Pope and the Holy See.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Pedro Calungsod: Filipino Missionary Martyr</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Pedro Calungsod represents the courage and dedication of Filipino Catholics in spreading the Gospel. 
                His martyrdom at the young age of 18 demonstrates that holiness and missionary zeal are not limited by age 
                or nationality, but by one's willingness to serve God and His Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Youthful Missionary Zeal</h3>
              <p className="mb-6">
                As a young catechist and sacristan, Pedro Calungsod shows us that young people can make significant contributions 
                to the Church's mission. His dedication to teaching the faith and serving as a missionary companion 
                inspires young Catholics to actively participate in evangelization.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Filipino Catholic Identity</h3>
              <p className="mb-6">
                As the second Filipino saint, St. Pedro Calungsod strengthens the Catholic identity of the Filipino people 
                and serves as a powerful example of Filipino devotion to the faith. His canonization brings pride and inspiration 
                to Filipino Catholics worldwide.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to the Truth</h3>
              <p>
                Pedro Calungsod's martyrdom occurred because of false accusations about the sacraments. His willingness to die 
                for the truth of the Catholic faith, even when it was misunderstood and misrepresented, teaches us the importance 
                of standing firm in our beliefs and defending the truth of the Gospel.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 2</div>
              <p className="text-gray-600">Feast of St. Pedro Calungsod, Martyr</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Pedro Calungsod is celebrated on April 2nd, the date of his martyrdom in Guam. This feast day is particularly 
                significant in the Philippines and among Filipino communities worldwide, celebrating their second native saint.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Filipino Catholics pray for missionary vocations, for the courage to defend the faith, 
                and for the strength to overcome persecution. It's also a day to celebrate Filipino Catholic identity 
                and to give thanks for the gift of Filipino saints.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for missionary zeal, for the courage to stand up for the truth, 
                and to ask for St. Pedro Calungsod's intercession in defending the Catholic faith against false accusations.
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
                  <li>• <strong>Filipino Catholics:</strong> Patron of Filipino Catholic identity</li>
                  <li>• <strong>Young Missionaries:</strong> Patron of youthful evangelization</li>
                  <li>• <strong>Catechists:</strong> Patron of religious education</li>
                  <li>• <strong>Sacristans:</strong> Patron of liturgical service</li>
                  <li>• <strong>Missionary Work:</strong> Patron of spreading the Gospel</li>
                  <li>• <strong>Guam:</strong> Patron of the island where he was martyred</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Defending the Faith:</strong> Helper against false accusations</li>
                  <li>• <strong>Missionary Vocations:</strong> Patron of those called to evangelize</li>
                  <li>• <strong>Youth Ministry:</strong> Helper for young people's faith formation</li>
                  <li>• <strong>Filipino Communities:</strong> Patron of Filipino Catholic communities</li>
                  <li>• <strong>Courage in Persecution:</strong> Helper for those facing religious persecution</li>
                  <li>• <strong>Baptism Ministry:</strong> Patron of sacramental preparation</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Pedro Calungsod</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Pedro Calungsod, you who gave your life for the faith at such a young age, help us to have the courage 
                    to stand up for the truth of the Gospel even when it is misunderstood or misrepresented. Intercede for all 
                    Filipino Catholics and inspire young people to actively participate in the Church's mission.
                  </p>
                  <p>
                    As a catechist and missionary, help us to be faithful teachers of the faith and to spread the Good News 
                    with the same zeal and dedication that you showed. Protect us from false accusations and give us the strength 
                    to defend the Catholic faith with love and courage. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Pedro Calungsod, pray for us!"
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
            <Link href="/saints/st-lorenzo-ruiz" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Lorenzo Ruiz
                </h3>
                <p className="text-gray-700 text-sm">
                  The first Filipino saint, also martyred for the faith, patron of Filipino Catholics.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Great missionary to Asia, patron of missionaries and the spread of the Gospel.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-john-paul-ii" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. John Paul II
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope who beatified St. Pedro Calungsod, known for his missionary zeal and love for youth.
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