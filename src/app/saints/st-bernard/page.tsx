import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bernard of Clairvaux - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Cistercian monk and Doctor of the Church.',
  keywords: [
    'st bernard of clairvaux',
    'saint bernard',
    'cistercian monk',
    'august 20 feast day',
    'catholic saints',
    'doctor saints',
    'doctor of the church'
  ],
  openGraph: {
    title: 'St. Bernard of Clairvaux - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Cistercian monk and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-bernard',
  },
  twitter: {
    title: 'St. Bernard of Clairvaux - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bernard of Clairvaux, Cistercian monk and Doctor of the Church.',
  }
}

export default function StBernardPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bernard of Clairvaux
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Cistercian Monk and Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bernard of Clairvaux</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 20</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bernard of Clairvaux</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Bernard of Clairvaux was born in 1090 at the castle of Fontaines, near 
                Dijon, France, to a noble family. He was the third son of Tescelin, a knight, 
                and Aleth, a deeply religious woman who had a profound influence on his spiritual 
                development. From an early age, Bernard showed exceptional intelligence and 
                a strong inclination toward the religious life. His mother, Aleth, who was 
                known for her piety and charity, instilled in him a deep love for God and 
                a desire to serve others. Bernard received a classical education at the 
                school of the canons of Saint-Vorles at Châtillon-sur-Seine, where he excelled 
                in his studies and developed a love for literature and rhetoric. His education 
                would later serve him well in his preaching and writing, which would become 
                some of the most influential works in Christian spirituality.
              </p>
              
              <p className="mb-6">
                At the age of nineteen, Bernard's mother died, and this loss had a profound 
                impact on him. He began to seriously consider entering the religious life, 
                and after a period of prayer and reflection, he decided to join the Cistercian 
                Order, which was known for its strict observance and emphasis on manual labor 
                and prayer. In 1112, Bernard entered the monastery of Cîteaux, bringing with 
                him thirty of his relatives and friends, including his brothers and uncle. 
                This large group of new recruits was a significant boost to the struggling 
                Cistercian Order, which had been founded only fourteen years earlier by 
                St. Robert of Molesme. Bernard's entry into the monastery marked the beginning 
                of a period of rapid growth for the Cistercian Order, as his example and 
                leadership would attract many others to follow the monastic life.
              </p>
              
              <p className="mb-6">
                Three years after entering Cîteaux, Bernard was sent to establish a new 
                monastery at Clairvaux, in the diocese of Langres. At the age of twenty-five, 
                he became the abbot of this new foundation, a position he would hold for 
                the rest of his life. Under Bernard's leadership, Clairvaux became one 
                of the most important and influential monasteries in Europe. Bernard's 
                strict observance of the Cistercian Rule, his deep spirituality, and his 
                ability to inspire others attracted many men to join the community. The 
                monastery grew rapidly, and Bernard would go on to establish sixty-eight 
                daughter houses throughout Europe. His influence extended far beyond the 
                walls of his monastery, as he became one of the most respected and sought-after 
                spiritual advisors of his time.
              </p>
              
              <p className="mb-6">
                Bernard's reputation for holiness and wisdom grew throughout Europe, and 
                he was frequently called upon to settle disputes, counsel rulers, and preach 
                important missions. He played a crucial role in ending the papal schism 
                of 1130, when two men claimed to be pope. Bernard's support for Pope Innocent 
                II helped to resolve the crisis and restore unity to the Church. He also 
                preached the Second Crusade at the request of Pope Eugene III, one of his 
                former monks who had become pope. Although the crusade ultimately failed, 
                Bernard's preaching demonstrated his powerful oratory skills and his ability 
                to inspire large crowds. Throughout his life, Bernard was known for his 
                eloquence, his deep knowledge of Scripture, and his ability to communicate 
                complex theological ideas in a way that was accessible to ordinary people.
              </p>
              
              <p>
                St. Bernard died on August 20, 1153, at the age of sixty-three, after 
                a life of prayer, preaching, and service to the Church. He was buried 
                at Clairvaux, and his tomb became a popular pilgrimage site. Bernard's 
                death marked the end of a life that had profoundly influenced the development 
                of Western Christianity. His writings, which include sermons, treatises, 
                and letters, continue to be studied and admired for their spiritual depth 
                and theological insight. Bernard was canonized by the Church in 1174, 
                and in 1830, Pope Pius VIII declared him a Doctor of the Church, recognizing 
                his important contributions to Christian theology and spirituality. His 
                feast day is celebrated on August 20th, the anniversary of his death, 
                and he is remembered as one of the greatest spiritual writers and preachers 
                in the history of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bernard of Clairvaux: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Bernard's greatest legacy is his designation as a Doctor of the Church, 
                recognizing his profound contributions to Christian theology and spirituality. 
                Bernard's writings, which include over 300 sermons, numerous treatises, 
                and hundreds of letters, are considered among the most important works 
                in the history of Christian spirituality. His most famous work, "On Loving 
                God," explores the nature of divine love and the stages of spiritual growth. 
                Bernard's theology is characterized by its emphasis on the love of God, 
                the importance of humility, and the centrality of Christ in the spiritual 
                life. His writings on the Song of Songs, which he interpreted as an allegory 
                of the soul's relationship with God, have had a lasting influence on Christian 
                mysticism. Bernard's ability to combine deep theological insight with 
                practical spiritual guidance made his works accessible to both scholars 
                and ordinary believers, ensuring their continued relevance throughout 
                the centuries.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Reformer of the Cistercian Order</h3>
              <p className="mb-6">
                St. Bernard's leadership of the Cistercian Order had a profound impact 
                on the development of Western monasticism. Under his guidance, the Cistercian 
                Order experienced unprecedented growth, with Bernard establishing sixty-eight 
                daughter houses throughout Europe. His strict observance of the Benedictine 
                Rule and his emphasis on manual labor, prayer, and simplicity helped to 
                revitalize monastic life at a time when many monasteries had become wealthy 
                and lax in their observance. Bernard's reforms emphasized the importance 
                of poverty, humility, and manual labor, which he saw as essential elements 
                of the monastic vocation. His influence extended beyond the Cistercian 
                Order, as his example inspired reforms in other religious orders and 
                helped to renew the spiritual life of the Church as a whole. Bernard's 
                emphasis on the importance of community life and mutual support continues 
                to influence religious communities today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Marian Devotion and Theology</h3>
              <p>
                St. Bernard is also remembered for his profound devotion to the Blessed 
                Virgin Mary and his contributions to Marian theology. His sermons and 
                writings on Mary emphasize her role as the Mother of God and her importance 
                in the spiritual life of Christians. Bernard's famous prayer to Mary, 
                "Remember, O most gracious Virgin Mary," is one of the most popular Marian 
                prayers in the Church. His theology of Mary emphasizes her role as the 
                Mediatrix of Grace and her importance as a model of faith and obedience. 
                Bernard's devotion to Mary was not merely sentimental but was deeply 
                theological, as he saw her as the perfect example of how to respond to 
                God's grace and cooperate with His will. His writings on Mary have had 
                a lasting influence on Catholic devotion and theology, helping to shape 
                the Church's understanding of Mary's role in salvation history and in 
                the spiritual life of believers.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">August 20</div>
              <p className="text-gray-600">Feast of St. Bernard of Clairvaux</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bernard of Clairvaux is celebrated on August 20th, during 
                the summer season when the Church reflects on the themes of growth and 
                harvest. This feast is celebrated as a memorial in the Roman Catholic Church, 
                recognizing Bernard's importance as a Doctor of the Church and one of the 
                greatest spiritual writers in Christian history. The feast falls during 
                a time when many people are enjoying the fruits of summer, making it an 
                ideal time to remember Bernard's emphasis on the importance of spiritual 
                growth and the cultivation of virtue. The feast provides an opportunity 
                to honor Bernard's memory and to reflect on the importance of prayer, 
                study, and service in our spiritual lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Bernard of Clairvaux, many people participate 
                in special prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those associated with the Cistercian Order, hold 
                special Masses and services. Many Cistercian monasteries hold processions 
                and special celebrations to honor their most famous member. The day is 
                also marked by prayers for the Church and for the renewal of religious 
                life, asking for St. Bernard's intercession in helping to strengthen 
                the spiritual life of the Church. Many people also take time to read 
                and reflect on Bernard's writings, particularly his works on the love 
                of God and his sermons on the Song of Songs. The feast is also a time 
                to reflect on how we can incorporate Bernard's emphasis on humility, 
                prayer, and service into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of wisdom and 
                the ability to grow in our love for God. Many people make special petitions 
                for the Church and for religious communities, asking for St. Bernard's 
                intercession in helping to renew and strengthen the spiritual life of 
                the Church. The day is also a time to reflect on the importance of study 
                and prayer in our spiritual development and to pray for the grace to 
                serve others with humility and love. St. Bernard's feast day encourages 
                us to remember that we are all called to grow in our knowledge and love 
                of God and to use our gifts for the service of others. It is also a 
                time to pray for the wisdom to balance our spiritual and material concerns 
                and to seek God's will in all things.
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
                  <li>• <strong>Beekeepers:</strong> Patron of beekeepers</li>
                  <li>• <strong>Candlemakers:</strong> Patron of candlemakers</li>
                  <li>• <strong>Gibraltar:</strong> Patron of Gibraltar</li>
                  <li>• <strong>Monks:</strong> Patron of Cistercian monks</li>
                  <li>• <strong>Preachers:</strong> Patron of preachers</li>
                  <li>• <strong>Wax Refiners:</strong> Patron of wax refiners</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Study:</strong> Patron of theological study</li>
                  <li>• <strong>Humility:</strong> Helper in cultivating humility</li>
                  <li>• <strong>Love of God:</strong> Patron of divine love</li>
                  <li>• <strong>Marian Devotion:</strong> Helper in Marian devotion</li>
                  <li>• <strong>Intercession:</strong> Powerful advocate in heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bernard</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Bernard of Clairvaux, Doctor of the Church and great lover of God, 
                    help me to grow in my love for God and neighbor.
                  </p>
                  <p className="mb-4">
                    Teach me to cultivate humility, to study the things of God, and to 
                    serve others with love and compassion. Help me to develop a deep devotion 
                    to the Blessed Virgin Mary and to seek God's will in all things.
                  </p>
                  <p>
                    St. Bernard, pray for me that I may have the wisdom to grow in knowledge 
                    and love of God, the humility to serve others, and the grace to follow 
                    your example of prayer and study. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Church</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bernard, patron of the Church and religious life, intercede for 
                    the renewal of the Church and all religious communities.
                  </p>
                  <p>
                    Help us to grow in our love for God and to serve others with humility 
                    and love. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bernard of Clairvaux, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Benedict
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of Western Monasticism and inspiration for Cistercian reform.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Dominican theologian and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-francis-assisi" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan Order and patron of ecology.
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