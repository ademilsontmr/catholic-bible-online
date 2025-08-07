import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Adelina - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Adelina, Benedictine abbess and granddaughter of William the Conqueror who served at La Blanche convent.',
  keywords: [
    'st adelina',
    'saint adelina',
    'st adelina biography',
    'st adelina feast day',
    'st adelina patron saint',
    'catholic saints',
    'october 20 feast day',
    'medieval saints',
    'benedictine abbess',
    'normandy'
  ],
  openGraph: {
    title: 'St. Adelina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adelina, Benedictine abbess and granddaughter of William the Conqueror.',
    url: 'https://catholicbibleonline.com/saints/st-adelina',
  },
  twitter: {
    title: 'St. Adelina - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Adelina, Benedictine abbess and granddaughter of William the Conqueror.',
  }
}

export default function StAdelinaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Adelina
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Benedictine Abbess, Granddaughter of William the Conqueror, Model of Religious Leadership
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Adelina</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 20</div>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Adelina</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Adelina was a noblewoman of Normandy, born into one of the most powerful 
                families of medieval Europe. She was the granddaughter of William the Conqueror, 
                the famous Norman duke who became King of England in 1066, and a member of that 
                distinguished Norman family that shaped the course of European history.
              </p>
              
              <p className="mb-6">
                Despite being born into such high nobility and having access to all the privileges 
                and comforts that came with her royal lineage, Adelina felt called to a different 
                kind of life. Rather than pursuing the worldly ambitions that might have been 
                expected of someone in her position, she chose to dedicate herself to God through 
                religious life.
              </p>
              
              <p className="mb-6">
                Adelina's spiritual journey was deeply influenced by her brother, St. Vitalis, 
                who was also a saint and who founded the Benedictine Convent of La Blanche in 
                Normandy. This religious community would become the center of Adelina's life 
                and ministry.
              </p>
              
              <p className="mb-6">
                Following her brother's example and guidance, Adelina entered the Benedictine 
                Convent of La Blanche, where she embraced the monastic life with great devotion. 
                Her noble background and natural leadership qualities, combined with her deep 
                spirituality and commitment to the Benedictine rule, made her an ideal candidate 
                for leadership within the community.
              </p>
              
              <p className="mb-6">
                Adelina eventually became the abbess of the Benedictine Convent of La Blanche, 
                a position of great responsibility and honor. As abbess, she was responsible 
                for the spiritual and material well-being of the nuns under her care, as well 
                as for the administration of the convent and its properties.
              </p>
              
              <p>
                Her leadership as abbess was marked by wisdom, compassion, and a deep commitment 
                to the Benedictine values of prayer, work, and community life. She served as a 
                model of religious leadership and helped to establish the convent as a center 
                of spiritual life and learning in medieval Normandy.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Adelina: Noble Abbess and Religious Leader</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Noble Discipleship</h3>
              <p className="mb-6">
                St. Adelina's decision to leave behind the privileges and comforts of her noble 
                birth to embrace religious life serves as a powerful example of what it means 
                to put God first above all worldly considerations. Her story demonstrates that 
                true nobility lies not in birth or social status, but in the willingness to 
                serve God and others with humility and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Religious Leadership</h3>
              <p className="mb-6">
                As abbess of the Benedictine Convent of La Blanche, Adelina provided spiritual 
                leadership and guidance to the nuns under her care. Her ability to combine her 
                noble background with the humility required of religious life made her an 
                effective and respected leader. Her example continues to inspire those called 
                to positions of leadership in religious communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Family Sanctity</h3>
              <p className="mb-6">
                St. Adelina's relationship with her brother, St. Vitalis, demonstrates how 
                holiness can run in families and how siblings can support each other in their 
                spiritual journeys. Their shared commitment to religious life and their 
                collaboration in establishing the convent at La Blanche shows the power of 
                family bonds in the service of God.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Benedictine Spirituality</h3>
              <p>
                Adelina's life as a Benedictine nun and abbess embodies the core values of 
                Benedictine spirituality: prayer, work, and community life. Her commitment 
                to the Benedictine rule and her leadership in fostering these values in her 
                community make her a model for all those who seek to live according to the 
                principles of St. Benedict.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 20</div>
              <p className="text-gray-600">Memorial of St. Adelina, Abbess</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Adelina is celebrated on October 20th. This memorial honors 
                her life as a Benedictine abbess, her noble discipleship, and her service to 
                the Church through religious leadership.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Adelina's life took place during the medieval period, a time when the 
                Church played a central role in society and when religious communities were 
                important centers of learning, prayer, and service. Her story reflects the 
                rich spiritual heritage of medieval Christianity and the important role that 
                women played in the religious life of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                called to religious leadership, for those discerning religious vocations, 
                for families seeking to grow in holiness together, and for the grace to 
                put God first above all worldly considerations.
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
                  <li>• <strong>Religious Leaders:</strong> Patroness of abbesses and prioresses</li>
                  <li>• <strong>Noble Discipleship:</strong> Helper for those leaving privilege for God</li>
                  <li>• <strong>Benedictine Nuns:</strong> Patroness of Benedictine communities</li>
                  <li>• <strong>Normandy:</strong> One of the patron saints of Normandy</li>
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning religious life</li>
                  <li>• <strong>Family Sanctity:</strong> Patroness of holy families</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Leadership:</strong> Helper for those in positions of authority</li>
                  <li>• <strong>Humility in Service:</strong> Patroness of those serving with humility</li>
                  <li>• <strong>Monastic Life:</strong> Helper for those living in religious communities</li>
                  <li>• <strong>Family Holiness:</strong> Patroness of families seeking sanctity</li>
                  <li>• <strong>Benedictine Spirituality:</strong> Helper for those following Benedictine rule</li>
                  <li>• <strong>Noble Hearts:</strong> Patroness of those with generous spirits</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Adelina</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Adelina, noble abbess and granddaughter of William the Conqueror, 
                    who left behind the privileges of your birth to serve God in religious life, 
                    pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to put God first above all worldly considerations and to serve Him 
                    with humility and devotion. Teach us to use our gifts and talents in service 
                    to others, following your example of noble discipleship.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    live lives of holiness and service to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Adelina, who served as abbess of the Benedictine Convent of La Blanche, 
                    intercede for all those called to positions of leadership in religious 
                    communities. Help them to lead with wisdom, compassion, and humility.
                  </p>
                  <p>
                    May they, like you, combine their natural gifts with deep spirituality 
                    to serve God and their communities effectively. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Vocations</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Adelina, who discerned a call to religious life despite your noble 
                    background, intercede for all those who are considering religious vocations. 
                    Help them to hear God's call clearly and to respond with courage and faith.
                  </p>
                  <p>
                    May they, like you, find joy and fulfillment in serving God through religious 
                    life. Through Christ our Lord. Amen."
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