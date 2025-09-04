import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Isabella of France - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Isabella of France, sister of St. Louis and founder of Franciscan monastery.',
  keywords: [
    'st isabella of france',
    'saint isabella',
    'french princess',
    'st isabella of france biography',
    'st isabella of france feast day',
    'st isabella of france patron saint',
    'longchamps monastery',
    'franciscan monastery',
    'catholic saints',
    'february 23 feast day'
  ],
  openGraph: {
    title: 'St. Isabella of France - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isabella of France, sister of St. Louis and founder of Franciscan monastery.',
    url: 'https://catholicbibleonline.com/saints/st-isabella-of-france',
  },
  twitter: {
    title: 'St. Isabella of France - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Isabella of France, sister of St. Louis and founder of Franciscan monastery.',
  }
}

export default function StIsabellaOfFrancePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Isabella of France
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            French Princess, Sister of St. Louis, Founder of Franciscan Monastery
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Isabella of France</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">February 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👸</div>
              <div className="text-sm text-gray-600">Princess</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Isabella of France</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Isabella of France was the sister of St. Louis IX and the daughter of King Louis VIII of France and Blanche of Castile. 
                Born into the royal family, she was raised in the lap of luxury and privilege, with access to the finest education 
                and opportunities that royal life could offer.
              </p>
              
              <p className="mb-6">
                Despite her royal status and the many advantages it brought, Isabella felt called to a different kind of life. 
                She refused offers of marriage from several noble suitors, choosing instead to dedicate herself to a life of 
                virginity consecrated to God. This decision was remarkable for a princess of her time, when royal marriages 
                were typically arranged for political and dynastic purposes.
              </p>
              
              <p className="mb-6">
                Isabella devoted herself to ministering to the sick and the poor, following the example of her brother St. Louis 
                and their mother Blanche of Castile, who was known for her piety and charitable works. She used her royal position 
                and resources to help those in need, demonstrating that true nobility lies in service to others.
              </p>
              
              <p className="mb-6">
                After the death of her mother, Isabella felt called to establish a more permanent foundation for her charitable work. 
                She founded the Franciscan Monastery of the Humility of the Blessed Virgin Mary at Longchamps in Paris, 
                creating a place where she could live a life of prayer and service while continuing her ministry to the poor.
              </p>
              
              <p className="mb-6">
                At the monastery, Isabella lived a life of great austerity, following the Franciscan spirit of poverty and simplicity. 
                Despite being the founder and having royal blood, she never became a nun and refused to become abbess, 
                preferring to live as a simple member of the community.
              </p>
              
              <p>
                Isabella died at the monastery on February 23rd, having lived a life of remarkable holiness and service. 
                Her cult was approved by the Church in 1521, recognizing her sanctity and the example she set for royal women 
                seeking to live lives of Christian virtue.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Isabella of France: Royal Service and Humility</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Royal Humility</h3>
              <p className="mb-6">
                St. Isabella's legacy is marked by her extraordinary humility and her willingness to set aside royal privileges 
                for a life of service to God and others. Her refusal to become abbess despite being the founder of the monastery 
                demonstrates her deep understanding that true leadership comes from service, not from position or status.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Franciscan Monastery</h3>
              <p className="mb-6">
                Isabella's foundation of the Franciscan Monastery of the Humility of the Blessed Virgin Mary at Longchamps 
                created a lasting institution for prayer and service. The monastery became a center of spiritual life in Paris, 
                continuing her work of serving the poor and providing a place for women to live lives of prayer and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Example for Royal Women</h3>
              <p className="mb-6">
                Isabella's life serves as an example for women of high social status who feel called to religious life. 
                She shows that it is possible to use one's position and resources for the service of God and others, 
                while maintaining humility and avoiding the trappings of power and privilege.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Consecrated Virginity</h3>
              <p>
                Isabella's choice of consecrated virginity over royal marriage was remarkable for her time and continues 
                to inspire women today. Her life demonstrates that the highest calling is not to earthly power or status, 
                but to complete dedication to God and service to others.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">February 23</div>
              <p className="text-gray-600">Feast of St. Isabella of France</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Isabella of France is celebrated on February 23rd. This feast day honors her life of royal service, 
                her foundation of the Franciscan monastery, and her example of humility and consecrated virginity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for women discerning religious life, for those in positions of privilege 
                who seek to serve others, for France and its people, and for the Franciscan order. It's also a day to reflect 
                on the balance between worldly status and spiritual calling.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for women discerning vocations, for those in positions of influence 
                who want to serve God, for France and its monarchy, and to ask for St. Isabella's intercession in living 
                a life of humility and service.
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
                  <li>• <strong>Royal Women:</strong> Patron of princesses and noblewomen</li>
                  <li>• <strong>Consecrated Virgins:</strong> Patron of those choosing virginity</li>
                  <li>• <strong>Franciscan Monasteries:</strong> Patron of Franciscan communities</li>
                  <li>• <strong>France:</strong> Patron of France and its people</li>
                  <li>• <strong>Women Discerning Vocations:</strong> Patron of vocational discernment</li>
                  <li>• <strong>Humility:</strong> Patron of those seeking humility</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Service to the Poor:</strong> Helper for those serving the needy</li>
                  <li>• <strong>Royal Families:</strong> Patron of royal households</li>
                  <li>• <strong>Monastic Life:</strong> Helper for religious communities</li>
                  <li>• <strong>Charitable Works:</strong> Patron of charitable organizations</li>
                  <li>• <strong>Paris:</strong> Helper for the city of Paris</li>
                  <li>• <strong>Women in Power:</strong> Patron of women in positions of influence</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Isabella of France</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Isabella of France, you who chose consecrated virginity over royal marriage, help me to discern 
                    God's will for my life and to have the courage to follow it.
                  </p>
                  <p>
                    You who used your royal position to serve the poor and found a monastery, teach me to use whatever 
                    gifts and opportunities I have to serve God and others. Help me to live with humility and generosity. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Women Discerning Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Isabella of France, patron of women discerning vocations, pray for all women who are seeking 
                    to know God's will for their lives.
                  </p>
                  <p>
                    Help them to hear God's call clearly, whether to marriage, religious life, or consecrated virginity. 
                    Give them the courage to follow their vocation with joy and faithfulness. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Isabella of France, pray for us!"
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
            <Link href="/saints/st-king-louis-ix" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  King Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Louis IX
                </h3>
                <p className="text-gray-700 text-sm">
                  Brother of St. Isabella, King of France known for his piety and justice.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-clare" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Clare of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Foundress of the Poor Clares, model of Franciscan spirituality.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr, patron of consecrated virgins and young girls.
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