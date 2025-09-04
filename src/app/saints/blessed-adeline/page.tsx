import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blessed Adeline - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of Blessed Adeline, first Abbess of Mortain and sister of Blessed Vitale, who led the White Ladies.',
  keywords: [
    'blessed adeline',
    'bl adeline',
    'blessed adeline biography',
    'blessed adeline feast day',
    'blessed adeline patron saint',
    'catholic saints',
    'october 20 feast day',
    'medieval saints',
    'white ladies',
    'mortain',
    'savigny'
  ],
  openGraph: {
    title: 'Blessed Adeline - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Blessed Adeline, first Abbess of Mortain and sister of Blessed Vitale.',
    url: 'https://catholicbibleonline.com/saints/blessed-adeline',
  },
  twitter: {
    title: 'Blessed Adeline - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of Blessed Adeline, first Abbess of Mortain and sister of Blessed Vitale.',
  }
}

export default function BlessedAdelinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔬</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            Blessed Adeline
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            First Abbess of Mortain, Sister of Blessed Vitale, Leader of the White Ladies
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Blessed Adeline</span>
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
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of Blessed Adeline</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Blessed Adeline was the sister of Blessed Vitale, the Abbot of Savigny, and was 
                introduced to the religious life by him. Her life was marked by a deep commitment 
                to God and a desire to serve Him through religious life. Following her brother's 
                example and guidance, she embraced the monastic life with great devotion and 
                dedication.
              </p>
              
              <p className="mb-6">
                Blessed Adeline's spiritual journey led her to become the first Abbess of the 
                monastery founded at Mortain in 1105 or 1115 by Count William of Mortain. This 
                was a position of great responsibility and honor, as she was entrusted with 
                the spiritual and material well-being of the religious community. Her leadership 
                would help establish the monastery as a center of spiritual life and learning 
                in medieval France.
              </p>
              
              <p className="mb-6">
                The religious house at Mortain followed the Rule of St. Benedict together with 
                a few observances drawn from the Cistercian tradition. This combination of 
                Benedictine and Cistercian spirituality created a unique and rich spiritual 
                environment that emphasized prayer, work, and community life. Blessed Adeline's 
                leadership in implementing this rule helped to create a balanced and fruitful 
                religious community.
              </p>
              
              <p className="mb-6">
                Because of the color of their habit, the religious came to be called the 
                "White Ladies." This distinctive white habit became a symbol of their 
                commitment to purity, simplicity, and devotion to God. Blessed Adeline's 
                leadership helped to establish the reputation of the White Ladies as a 
                community of holy women dedicated to prayer and service.
              </p>
              
              <p className="mb-6">
                Throughout her life as abbess, Blessed Adeline was known for her dedication 
                to prayer, mortification, and charitable works. She led by example, showing 
                her sisters how to live a life of holiness through daily prayer, self-denial, 
                and service to others. Her commitment to these spiritual practices helped to 
                create a strong foundation for the religious community.
              </p>
              
              <p>
                After a life dedicated to prayer, mortification, and charitable works, Blessed 
                Adeline was called to her reward in 1125. Such was her reputation for sanctity 
                that shortly afterward she began to be honored as one of the Blessed, and her 
                remains were solemnly transferred (together with those of her brother and other 
                religious) to Savigny, where they continue to be venerated to this day.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of Blessed Adeline: First Abbess and Leader of the White Ladies</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Religious Leadership</h3>
              <p className="mb-6">
                Blessed Adeline's greatest legacy is her role as the first Abbess of the 
                monastery at Mortain. Her leadership helped to establish a religious community 
                that would serve as a center of spiritual life and learning for generations. 
                Her ability to combine Benedictine and Cistercian traditions created a unique 
                spiritual environment that emphasized both prayer and work, contemplation and 
                action. Her example continues to inspire those called to positions of leadership 
                in religious communities.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The White Ladies</h3>
              <p className="mb-6">
                Blessed Adeline's leadership helped to establish the reputation of the "White 
                Ladies" as a community of holy women. The distinctive white habit became a 
                symbol of their commitment to purity, simplicity, and devotion to God. Under 
                her guidance, the White Ladies became known for their dedication to prayer, 
                their simple way of life, and their service to others. This legacy continues 
                to inspire those who seek to live lives of simplicity and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Family Sanctity</h3>
              <p className="mb-6">
                Blessed Adeline's relationship with her brother, Blessed Vitale, demonstrates 
                how holiness can run in families and how siblings can support each other in 
                their spiritual journeys. Their shared commitment to religious life and their 
                collaboration in serving God shows the power of family bonds in the service 
                of the Church. Their example reminds us that holiness is not an individual 
                pursuit but can be nurtured and supported within families.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Practices</h3>
              <p>
                Blessed Adeline's commitment to prayer, mortification, and charitable works 
                serves as a model for all Christians. Her life demonstrates the importance 
                of balancing these three essential elements of the spiritual life: prayer 
                for communion with God, mortification for self-discipline and growth in 
                virtue, and charitable works for service to others. Her example continues 
                to inspire those who seek to grow in holiness through these traditional 
                spiritual practices.
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
              <p className="text-gray-600">Memorial of Blessed Adeline, Abbess</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of Blessed Adeline is celebrated on October 20th. This memorial 
                honors her life as the first Abbess of Mortain, her leadership of the White 
                Ladies, and her commitment to prayer, mortification, and charitable works.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                Blessed Adeline lived during the medieval period, a time when religious 
                communities played a vital role in the spiritual and social life of Europe. 
                Her work in establishing the monastery at Mortain reflects the important 
                role that women played in the religious life of the Church during this 
                period, and the significant contributions they made to education, healthcare, 
                and spiritual formation. Her life took place during a time of great spiritual 
                renewal in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for those 
                called to religious leadership, for those discerning religious vocations, 
                for families seeking to grow in holiness together, and for the grace to 
                balance prayer, mortification, and charitable works in our daily lives. 
                Her example inspires us to seek holiness through traditional spiritual 
                practices and to serve God with simplicity and devotion.
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
                  <li>• <strong>White Ladies:</strong> Patroness of communities of white-habited religious</li>
                  <li>• <strong>Mortain:</strong> Patroness of the region of Mortain</li>
                  <li>• <strong>Savigny:</strong> One of the patron saints of Savigny</li>
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning religious life</li>
                  <li>• <strong>Family Sanctity:</strong> Patroness of holy families</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Practices:</strong> Helper for those seeking prayer and mortification</li>
                  <li>• <strong>Simplicity:</strong> Patroness of those seeking simple living</li>
                  <li>• <strong>Charitable Works:</strong> Helper for those serving others</li>
                  <li>• <strong>Benedictine Spirituality:</strong> Patroness of those following Benedictine rule</li>
                  <li>• <strong>Cistercian Tradition:</strong> Helper for those in Cistercian communities</li>
                  <li>• <strong>Religious Communities:</strong> Patroness of new religious foundations</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to Blessed Adeline</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed Adeline, first Abbess of Mortain and leader of the White Ladies, 
                    who dedicated your life to prayer, mortification, and charitable works, 
                    pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to follow your example of simplicity, devotion, and service to God. 
                    Teach us to balance prayer, self-denial, and good works in our daily lives, 
                    and guide us in our journey toward holiness.
                  </p>
                  <p>
                    Through your powerful intercession, may we be blessed with the grace to 
                    live lives of devotion and service to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Leaders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Blessed Adeline, who served as the first Abbess of Mortain, intercede 
                    for all those called to positions of leadership in religious communities. 
                    Help them to lead with wisdom, simplicity, and devotion.
                  </p>
                  <p>
                    May they, like you, combine prayer, mortification, and charitable works 
                    to serve God and their communities effectively. Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Simplicity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O Blessed Adeline, leader of the White Ladies, intercede for all those 
                    who seek to live lives of simplicity and devotion to God.
                  </p>
                  <p>
                    Help us to embrace the white habit of purity and simplicity in our hearts, 
                    and to serve God with the same devotion and self-denial that characterized 
                    your life. Through Christ our Lord. Amen."
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