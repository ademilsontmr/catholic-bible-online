import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Elizabeth Rose - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Elizabeth Rose, Benedictine abbess and foundress of the convent of Sainte-Marie-du-Rozoy in France.',
  keywords: [
    'st elizabeth rose',
    'saint elizabeth rose',
    'st elizabeth rose biography',
    'st elizabeth rose feast day',
    'st elizabeth rose patron saint',
    'catholic saints',
    'december 13 feast day',
    'medieval saints',
    'benedictine abbess',
    'sainte-marie-du-rozoy',
    'france'
  ],
  openGraph: {
    title: 'St. Elizabeth Rose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth Rose, Benedictine abbess and foundress of the convent of Sainte-Marie-du-Rozoy.',
    url: 'https://catholicbibleonline.com/saints/st-elizabeth-rose',
  },
  twitter: {
    title: 'St. Elizabeth Rose - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Elizabeth Rose, Benedictine abbess and foundress of the convent of Sainte-Marie-du-Rozoy.',
  }
}

export default function StElizabethRosePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Elizabeth Rose
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Benedictine Abbess, Foundress of Sainte-Marie-du-Rozoy, Model of Religious Leadership
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Elizabeth Rose</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔬</div>
              <div className="text-sm text-gray-600">Medieval</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Elizabeth Rose</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Elizabeth Rose was a remarkable Benedictine abbess who lived during the medieval 
                period in France. Her life was dedicated to serving God through religious leadership 
                and establishing a center of spiritual life and learning in the region of Courtenay, 
                Loiret, France.
              </p>
              
              <p className="mb-6">
                Elizabeth Rose felt called to religious life from an early age, drawn to the 
                Benedictine tradition with its emphasis on prayer, work, and community life. 
                Her deep spirituality and natural leadership qualities made her an ideal candidate 
                for religious leadership, and she embraced the monastic life with great devotion 
                and commitment.
              </p>
              
              <p className="mb-6">
                Following the Benedictine rule and inspired by the example of St. Benedict and 
                other great monastic leaders, Elizabeth Rose dedicated herself to creating a 
                religious community that would serve as a beacon of faith and learning in medieval 
                France. Her vision was to establish a convent that would not only provide a place 
                for women to live out their religious vocations, but also serve the local community 
                through prayer, education, and charitable works.
              </p>
              
              <p className="mb-6">
                With great determination and faith, Elizabeth Rose founded the convent of 
                Sainte-Marie-du-Rozoy near Courtenay, in the Loiret region of France. This 
                religious community would become her life's work and a lasting testament to 
                her dedication to God and the Church. The convent was established as a center 
                of Benedictine spirituality, following the ancient rule of St. Benedict with 
                its emphasis on ora et labora - prayer and work.
              </p>
              
              <p className="mb-6">
                As the foundress and abbess of Sainte-Marie-du-Rozoy, Elizabeth Rose provided 
                spiritual leadership and guidance to the nuns under her care. She was responsible 
                for the spiritual and material well-being of the community, as well as for the 
                administration of the convent and its properties. Her leadership was marked by 
                wisdom, compassion, and a deep commitment to the Benedictine values.
              </p>
              
              <p>
                Under her guidance, the convent of Sainte-Marie-du-Rozoy flourished as a center 
                of religious life and learning. The community became known for its devotion to 
                prayer, its commitment to the Benedictine rule, and its service to the local 
                community. Elizabeth Rose's legacy continues to inspire those called to religious 
                leadership and those seeking to live according to the principles of St. Benedict.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Elizabeth Rose: Benedictine Foundress and Religious Leader</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Religious Foundation</h3>
              <p className="mb-6">
                St. Elizabeth Rose's greatest legacy is the foundation of the convent of 
                Sainte-Marie-du-Rozoy, which continues to serve as a center of Benedictine 
                spirituality and religious life. Her vision and determination in establishing 
                this religious community demonstrate the power of faith and the importance of 
                creating spaces where people can grow in their relationship with God. The 
                convent stands as a lasting testament to her commitment to religious life and 
                her service to the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Benedictine Leadership</h3>
              <p className="mb-6">
                As abbess of Sainte-Marie-du-Rozoy, Elizabeth Rose provided exemplary leadership 
                in the Benedictine tradition. Her ability to combine spiritual depth with 
                practical wisdom made her an effective and respected leader. She embodied the 
                Benedictine values of prayer, work, and community life, serving as a model for 
                all those called to positions of leadership in religious communities. Her 
                example continues to inspire those who seek to lead with humility and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Community Service</h3>
              <p className="mb-6">
                The convent founded by Elizabeth Rose served not only as a place of religious 
                life, but also as a center of service to the local community. Through prayer, 
                education, and charitable works, the nuns under her leadership contributed to 
                the spiritual and material well-being of the people of Courtenay and the 
                surrounding region. This commitment to community service reflects the Benedictine 
                tradition of hospitality and care for others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Heritage</h3>
              <p>
                Elizabeth Rose's life and work contribute to the rich spiritual heritage of 
                medieval France and the Benedictine tradition. Her dedication to religious 
                life, her leadership in establishing a religious community, and her commitment 
                to the Benedictine rule make her a model for all those who seek to live lives 
                of holiness and service to God. Her story reminds us of the importance of 
                faith, community, and service in the Christian life.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 13</div>
              <p className="text-gray-600">Memorial of St. Elizabeth Rose, Abbess</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Elizabeth Rose is celebrated on December 13th. This memorial 
                honors her life as a Benedictine abbess, her foundation of the convent of 
                Sainte-Marie-du-Rozoy, and her service to the Church through religious leadership.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Elizabeth Rose lived during the medieval period, a time when religious 
                communities played a vital role in the spiritual and social life of Europe. 
                Her work in establishing the convent of Sainte-Marie-du-Rozoy reflects the 
                important role that women played in the religious life of the Church during 
                this period, and the significant contributions they made to education, 
                healthcare, and spiritual formation.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                called to religious leadership, for those discerning religious vocations, 
                for the success of religious communities, and for the grace to serve God 
                with humility and devotion. Her example inspires us to put God first in 
                our lives and to serve others with love and compassion.
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
                  <li>• <strong>Religious Founders:</strong> Patroness of those establishing religious communities</li>
                  <li>• <strong>Benedictine Abbesses:</strong> Patroness of Benedictine women leaders</li>
                  <li>• <strong>Religious Leadership:</strong> Helper for those in positions of authority</li>
                  <li>• <strong>France:</strong> One of the patron saints of France</li>
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning religious life</li>
                  <li>• <strong>Community Service:</strong> Patroness of those serving their communities</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Communities:</strong> Helper for the success of religious houses</li>
                  <li>• <strong>Benedictine Spirituality:</strong> Patroness of those following Benedictine rule</li>
                  <li>• <strong>Monastic Life:</strong> Helper for those living in religious communities</li>
                  <li>• <strong>Spiritual Leadership:</strong> Patroness of those leading others in faith</li>
                  <li>• <strong>Community Building:</strong> Helper for those building faith communities</li>
                  <li>• <strong>Religious Education:</strong> Patroness of those teaching the faith</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Elizabeth Rose</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Elizabeth Rose, Benedictine abbess and foundress of Sainte-Marie-du-Rozoy, 
                    who dedicated your life to serving God through religious leadership and community 
                    building, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of faith, leadership, and service. Teach us to 
                    put God first in our lives and to serve others with humility and devotion. 
                    Guide us in building communities of faith and love.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to live 
                    lives of holiness and service to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Elizabeth Rose, who served as abbess of Sainte-Marie-du-Rozoy, intercede 
                    for all those called to positions of leadership in religious communities. 
                    Help them to lead with wisdom, compassion, and humility.
                  </p>
                  <p>
                    May they, like you, combine spiritual depth with practical wisdom to serve 
                    God and their communities effectively. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Communities</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Elizabeth Rose, who founded the convent of Sainte-Marie-du-Rozoy, 
                    intercede for all religious communities throughout the world. Help them to 
                    flourish in their mission of prayer, work, and service.
                  </p>
                  <p>
                    May they, like your community, be centers of spiritual life and learning, 
                    serving God and neighbor with love and devotion. Through Christ our Lord. Amen."
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
            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism and founder of the Benedictine Order.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-scholastica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Scholastica
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin sister of St. Benedict and founder of Benedictine nuns.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-adelina" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Adelina
                </h3>
                <p className="text-gray-700 text-sm">
                  Benedictine abbess and granddaughter of William the Conqueror.
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