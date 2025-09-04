import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Louis IX - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Louis IX, King of France known for his piety, justice, and leadership of crusades.',
  keywords: [
    'st louis ix',
    'saint louis',
    'king of france',
    'st louis ix biography',
    'st louis ix feast day',
    'st louis ix patron saint',
    'french king saint',
    'crusader king',
    'catholic saints',
    'august 25 feast day'
  ],
  openGraph: {
    title: 'St. Louis IX - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Louis IX, King of France known for his piety, justice, and leadership of crusades.',
    url: 'https://catholicbibleonline.com/saints/st-king-louis-ix',
  },
  twitter: {
    title: 'St. Louis IX - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Louis IX, King of France known for his piety, justice, and leadership of crusades.',
  }
}

export default function StKingLouisIXPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Louis IX
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            King of France, Crusader, Model of Christian Kingship
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Louis IX</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 25</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">King</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Louis IX</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Louis IX was born in Poissy, France in 1214 to Louis VIII and Blanche of Castille. From an early age, 
                he was raised in a deeply religious environment, with his mother Blanche playing a crucial role in his 
                spiritual formation and education.
              </p>
              
              <p className="mb-6">
                Louis succeeded to the throne at the age of twelve under the regency of his mother, who continued to 
                guide him in both matters of state and faith. On his twenty-first birthday, he assumed full kingship, 
                beginning a reign that would be marked by his deep commitment to justice, piety, and the protection of the Church.
              </p>
              
              <p className="mb-6">
                As king, Louis was well known for protecting the French clergy from secular leaders and for strictly 
                enforcing laws against blasphemy. His commitment to the Church and religious values was evident in all 
                aspects of his rule, earning him the respect and admiration of both his subjects and the clergy.
              </p>
              
              <p className="mb-6">
                Louis generally remained neutral in international disputes, preferring peace and diplomacy. However, 
                because of a dispute between the Count of Le Marche and the Count of Poitiers, in which Henry III of 
                England supported the Count of Le Marche, he was forced to go to war with England. In 1242, Louis 
                defeated Henry III at Tailebourg, demonstrating his military leadership and strategic skill.
              </p>
              
              <p className="mb-6">
                After the war, Louis made restitution to the innocent people whose property had been destroyed, 
                showing his commitment to justice and his concern for the welfare of his subjects. He established 
                the Sorbonne (1252) and the monasteries of Rayaumont, Vavert, and Maubuisson, contributing significantly 
                to the intellectual and spiritual life of France.
              </p>
              
              <p>
                Louis led two crusades, the Sixth and the Seventh Crusades. He was captured and imprisoned during 
                the Sixth Crusade (1244-1249), but his faith remained unshaken. At the onset of the Seventh Crusade 
                in 1270, Louis died of dysentery, having given his life in service to the Church and the defense 
                of the Holy Land. Pope Boniface VIII canonized him in 1297, recognizing his extraordinary holiness 
                and his example of Christian kingship.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Louis IX: Model of Christian Kingship</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Exemplar of Christian Leadership</h3>
              <p className="mb-6">
                St. Louis IX's legacy is marked by his extraordinary example of how to be both a powerful ruler and 
                a devout Christian. His reign demonstrated that it is possible to govern with strength and authority 
                while maintaining deep piety and commitment to the Church. He showed that true leadership comes from 
                serving God first and then serving one's people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Protector of the Church</h3>
              <p className="mb-6">
                Louis's commitment to protecting the French clergy from secular leaders and his strict enforcement 
                of laws against blasphemy showed his deep understanding of the Church's role in society. His support 
                for religious institutions, including the foundation of the Sorbonne and several monasteries, 
                contributed to the spiritual and intellectual flourishing of France.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Crusader and Martyr</h3>
              <p className="mb-6">
                Louis's leadership of two crusades and his death during the Seventh Crusade demonstrate his commitment 
                to defending the faith and the Holy Land. His imprisonment during the Sixth Crusade and his willingness 
                to risk his life for the Church show the depth of his faith and his dedication to Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of France</h3>
              <p>
                As the patron saint of France, Louis IX continues to inspire the French people and serves as a model 
                for Christian leadership throughout the world. His canonization in 1297, just 27 years after his death, 
                reflects the immediate recognition of his holiness and the impact of his example on the Church and society.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 25</div>
              <p className="text-gray-600">Feast of St. Louis IX</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Louis IX is celebrated on August 25th. This feast day honors his life of Christian kingship, 
                his leadership of crusades, and his example of how to govern with piety and justice.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for political leaders, for France and its people, for those in 
                positions of authority, and for the Church. It's also a day to reflect on the balance between 
                worldly power and spiritual devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for political leaders, for France and its monarchy, 
                for those in positions of authority, and to ask for St. Louis's intercession in governing with 
                justice and piety.
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
                  <li>• <strong>France:</strong> Patron of France and its people</li>
                  <li>• <strong>Kings and Rulers:</strong> Patron of political leaders</li>
                  <li>• <strong>Crusaders:</strong> Patron of those defending the faith</li>
                  <li>• <strong>Christian Leadership:</strong> Patron of Christian rulers</li>
                  <li>• <strong>Justice:</strong> Patron of those seeking justice</li>
                  <li>• <strong>Church Protection:</strong> Patron of defending the Church</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Political Leaders:</strong> Helper for those in government</li>
                  <li>• <strong>French Monarchy:</strong> Patron of French royalty</li>
                  <li>• <strong>Academic Institutions:</strong> Helper for universities</li>
                  <li>• <strong>Monastic Life:</strong> Patron of religious communities</li>
                  <li>• <strong>Peace and Diplomacy:</strong> Helper for peaceful resolution</li>
                  <li>• <strong>Holy Land:</strong> Patron of the Holy Land</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Louis IX</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Louis IX, you who ruled France with justice and piety, help me to lead my life with 
                    wisdom and faith, whether in positions of authority or in daily responsibilities.
                  </p>
                  <p>
                    You who protected the Church and defended the faith, teach me to stand up for what is right 
                    and to serve God in all that I do. Help me to be a model of Christian leadership and service. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for France</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Louis IX, patron of France, pray for the people of France and their leaders.
                  </p>
                  <p>
                    Help them to remember their Christian heritage and to govern with justice and mercy. 
                    May your intercession bring blessing to the land you once ruled and protect the Church in France. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Louis IX, pray for us!"
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
            <Link href="/saints/st-isabella-of-france" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  King Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Isabella of France
                </h3>
                <p className="text-gray-700 text-sm">
                  Sister of St. Louis IX, French princess who founded Franciscan monastery.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-charlemagne" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Emperor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charlemagne
                </h3>
                <p className="text-gray-700 text-sm">
                  Holy Roman Emperor, patron of education and Christian Europe.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-king-edward-the-confessor" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  King Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Edward the Confessor
                </h3>
                <p className="text-gray-700 text-sm">
                  King of England, founder of Westminster Abbey, model of piety.
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