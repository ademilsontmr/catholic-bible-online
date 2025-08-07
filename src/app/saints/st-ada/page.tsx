import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Ada - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Ada, 7th century abbess and patroness of religious women in France.',
  keywords: [
    'st ada',
    'saint ada',
    'st ada biography',
    'st ada feast day',
    'st ada patron saint',
    'catholic saints',
    'abbess saints',
    'french saints',
    'religious women saints',
    'medieval saints'
  ],
  openGraph: {
    title: 'St. Ada - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ada, 7th century abbess and patroness of religious women in France.',
    url: 'https://catholicbibleonline.com/saints/st-ada',
  },
  twitter: {
    title: 'St. Ada - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Ada, 7th century abbess and patroness of religious women in France.',
  }
}

export default function StAdaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Ada
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Abbess, Dedicated Virgin, Patroness of Religious Women
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Ada</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">7th Century</div>
              <div className="text-sm text-gray-600">Period</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Abbess</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Ada</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Ada was a remarkable woman of the 7th century who dedicated her life to God 
                and the service of religious women. Her life story is intertwined with the early 
                Christian history of France, particularly in the regions of Soissons and Le Mans, 
                where she would leave an enduring legacy of faith and leadership.
              </p>
              
              <p className="mb-6">
                Ada was born into a pious household, where she was raised with strong Christian 
                values and a deep devotion to God. Her family background was significant, as she 
                was the niece of St. Engebert, a bishop who would later be martyred by his own 
                cousin. This family connection to such a holy man undoubtedly influenced Ada's 
                spiritual development and her decision to dedicate her life to religious service.
              </p>
              
              <p className="mb-6">
                Growing up under the influence of her uncle, St. Engebert, Ada developed a deep 
                understanding of the Christian faith and a strong desire to serve God. The example 
                of her uncle's holiness and his ultimate martyrdom for the faith would have been 
                a powerful influence on her spiritual formation. This early exposure to such 
                profound holiness helped shape Ada's own vocation and her commitment to religious life.
              </p>
              
              <p className="mb-6">
                Following her calling to religious life, Ada joined a convent in Soissons, France. 
                This was a significant step in her spiritual journey, as Soissons was an important 
                center of Christian life and learning in early medieval France. In the convent, 
                Ada would have received her formation in religious life, learning the disciplines 
                of prayer, community living, and service to God and others.
              </p>
              
              <p>
                Ada's spiritual gifts and leadership qualities were soon recognized, and she was 
                chosen to become the abbess of St. Julien-des-Prés in Le Mans. This was a position 
                of great responsibility and honor, as abbesses in the early medieval period were 
                not only spiritual leaders but also administrators of significant religious 
                communities. As abbess, Ada would have been responsible for the spiritual and 
                temporal welfare of her community, guiding the religious women under her care 
                in their journey of faith and service to God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Ada: Patroness of Religious Women</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Leadership in Religious Life</h3>
              <p className="mb-6">
                St. Ada's most enduring legacy is her role as a leader in religious life during 
                the early medieval period. As abbess of St. Julien-des-Prés in Le Mans, she 
                demonstrated the qualities of spiritual leadership that would inspire generations 
                of religious women. Her ability to guide and nurture a community of women in 
                their spiritual journey serves as a model for religious leadership even today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patroness of Religious Women</h3>
              <p className="mb-6">
                Ada is particularly noted in France as a patroness of religious women, a recognition 
                that speaks to her special care and concern for those called to religious life. 
                Her example of dedicated virginity and commitment to God continues to inspire 
                women who are discerning or living religious vocations. Her patronage extends 
                beyond her own time, offering spiritual support to religious women throughout 
                the centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Family Holiness</h3>
              <p className="mb-6">
                Ada's connection to her uncle, St. Engebert, demonstrates the importance of 
                family in the formation of holiness. Her story shows how the witness of holy 
                family members can inspire and guide others in their spiritual journey. This 
                aspect of her legacy reminds us of the power of family witness and the 
                intergenerational transmission of faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Contribution to French Christianity</h3>
              <p>
                Ada's work in Soissons and Le Mans contributed to the development of Christian 
                life in early medieval France. These regions were important centers of Christian 
                culture and learning, and Ada's leadership helped to strengthen and expand the 
                religious communities there. Her legacy is part of the rich tapestry of French 
                Christian history and the development of monastic life in Europe.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">7th Century</div>
              <p className="text-gray-600">Period of St. Ada's Life</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                St. Ada lived during the 7th century, a period of significant development in 
                Christian monasticism and religious life in Europe. This was a time when the 
                Church was establishing itself more firmly in the regions that would become 
                modern France, and religious communities were playing a crucial role in the 
                spread and consolidation of Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Legacy of Leadership</h3>
              <p className="mb-6">
                While the exact date of Ada's feast day may not be widely celebrated, her 
                legacy as a leader in religious life continues to inspire. Her example of 
                dedicated service to God and her role as patroness of religious women make 
                her a significant figure in the history of women's religious life and 
                leadership in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Ada's example serves as a reminder of the important 
                role that women have played and continue to play in the life of the Church. 
                Her leadership as an abbess and her patronage of religious women highlight 
                the value of women's contributions to religious life and spiritual leadership. 
                Her story encourages us to recognize and support the vocations of religious 
                women in our own time.
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
                  <li>• <strong>Religious Women:</strong> Patron of women in religious life</li>
                  <li>• <strong>Abbesses:</strong> Patron of women religious leaders</li>
                  <li>• <strong>France:</strong> Patron of French religious communities</li>
                  <li>• <strong>Soissons:</strong> Patron of the region where she began her religious life</li>
                  <li>• <strong>Le Mans:</strong> Patron of the region where she served as abbess</li>
                  <li>• <strong>Religious Formation:</strong> Patron of those in religious formation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Vocations:</strong> Help in discerning religious life</li>
                  <li>• <strong>Spiritual Leadership:</strong> Guidance for religious leaders</li>
                  <li>• <strong>Community Life:</strong> Success in religious community living</li>
                  <li>• <strong>Family Witness:</strong> Strength for families in passing on faith</li>
                  <li>• <strong>Dedicated Virginity:</strong> Support for those called to consecrated virginity</li>
                  <li>• <strong>French Christianity:</strong> Protection for French religious communities</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Ada</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Ada, patroness of religious women and model of spiritual 
                    leadership, you who dedicated your life to God and the service of religious 
                    communities, intercede for us that we may have the courage to follow God's 
                    call in our lives.
                  </p>
                  <p className="mb-4">
                    Help us to recognize the importance of family witness in the formation of 
                    faith, and teach us to be examples of holiness for those around us. Guide 
                    all religious women in their vocation and help them to be strong leaders 
                    in their communities.
                  </p>
                  <p>
                    May we, like you, be willing to serve God with dedication and love, and 
                    may our lives be a witness to the power of faith and the beauty of religious 
                    life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Religious Women</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Ada, patroness of religious women, intercede for all those who are 
                    called to religious life or are discerning their vocation.
                  </p>
                  <p>
                    Help them to be strong in their commitment to God, wise in their leadership, 
                    and loving in their service to others. May they find joy and fulfillment in 
                    their religious vocation. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Ada, patroness of religious women, pray for us!"
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
            <Link href="/saints/st-scholastica" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Scholastica
                </h3>
                <p className="text-gray-700 text-sm">
                  Twin sister of St. Benedict and founder of Benedictine nuns, another early abbess.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-benedict" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western monasticism, whose rule influenced religious communities like Ada's.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernard
                </h3>
                <p className="text-gray-700 text-sm">
                  Abbot and Doctor of the Church, another great leader in religious life.
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