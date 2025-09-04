import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Benedict - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Benedict, Father of Western monasticism and patron of Europe.',
  keywords: [
    'st benedict',
    'saint benedict',
    'father of western monasticism',
    'july 11 feast day',
    'catholic saints',
    'doctor saints',
    'patron of europe'
  ],
  openGraph: {
    title: 'St. Benedict - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Benedict, Father of Western monasticism and patron of Europe.',
    url: 'https://catholicbibleonline.com/saints/st-benedict',
  },
  twitter: {
    title: 'St. Benedict - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Benedict, Father of Western monasticism and patron of Europe.',
  }
}

export default function StBenedictPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Benedict
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Father of Western Monasticism and Patron of Europe
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Benedict</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 11</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Benedict</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Benedict was born around 480 A.D. in Nursia, a small town in central Italy, 
                to a noble Roman family. He was the twin brother of St. Scholastica, who would 
                later become the founder of Benedictine nuns. Benedict received a classical 
                education in Rome, where he studied rhetoric and philosophy. However, he was 
                deeply troubled by the moral decay and corruption he witnessed in the city, 
                particularly among his fellow students. At the age of about twenty, Benedict 
                decided to abandon his studies and the worldly life of Rome to seek God in 
                solitude and prayer. He left the city with his nurse, who had accompanied 
                him to Rome, and settled in the small town of Enfide, about thirty miles from 
                Rome.
              </p>
              
              <p className="mb-6">
                Benedict's desire for solitude and prayer led him to leave Enfide and seek 
                a more remote location. He found a cave in the mountains near Subiaco, where 
                he lived as a hermit for three years. During this time, Benedict devoted himself 
                to prayer, fasting, and spiritual reading. His reputation for holiness and 
                wisdom began to spread, and local shepherds and others began to visit him 
                for spiritual guidance. Benedict's time as a hermit was marked by intense 
                spiritual struggles and temptations, which he overcame through prayer and 
                trust in God. His experience in the cave would later influence his Rule, 
                particularly his emphasis on the importance of prayer and spiritual warfare.
              </p>
              
              <p className="mb-6">
                After three years as a hermit, Benedict was asked by a group of monks from 
                a nearby monastery to become their abbot. Benedict reluctantly agreed, but 
                his strict observance of the monastic life and his attempts to reform the 
                community were met with resistance. The monks, who were used to a more relaxed 
                way of life, found Benedict's discipline too demanding and even attempted 
                to poison him. Benedict miraculously survived their attempts on his life 
                and returned to his cave. However, his reputation for holiness continued 
                to grow, and he began to attract followers who were drawn to his way of 
                life. Benedict established twelve small monasteries in the Subiaco area, 
                each with twelve monks and an abbot, following the model of the twelve apostles.
              </p>
              
              <p className="mb-6">
                In 529, Benedict left Subiaco and moved to Monte Cassino, a mountain about 
                eighty miles southeast of Rome. There, he established what would become 
                the most famous monastery in the Western world. Benedict and his monks built 
                the monastery on the site of an ancient pagan temple, symbolizing the triumph 
                of Christianity over paganism. It was at Monte Cassino that Benedict wrote 
                his famous Rule, which would become the foundation of Western monasticism. 
                The Rule of St. Benedict is a practical guide for monastic life that emphasizes 
                prayer, work, and community living. It is characterized by its moderation, 
                wisdom, and balance, avoiding the extremes of both laxity and excessive 
                asceticism. Benedict's Rule became the standard for monastic life throughout 
                Europe and continues to influence religious communities today.
              </p>
              
              <p>
                St. Benedict died on March 21, 547, at Monte Cassino, after a life of prayer, 
                teaching, and service to God and his fellow monks. According to tradition, 
                he died standing in prayer in the chapel of his monastery, supported by his 
                monks. Benedict was buried in the same grave as his sister, St. Scholastica, 
                at Monte Cassino. His death marked the end of a life that had profoundly 
                influenced the development of Western Christianity and European civilization. 
                Benedict was canonized by the Church, and in 1964, Pope Paul VI declared 
                him the patron saint of Europe, recognizing his role in the Christianization 
                and civilization of the continent. His feast day is celebrated on July 11th, 
                the traditional date of the translation of his relics to the Abbey of Fleury 
                in France.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Benedict: Father of Western Monasticism</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Author of the Rule of St. Benedict</h3>
              <p className="mb-6">
                St. Benedict's greatest legacy is his Rule, which has served as the foundation 
                of Western monasticism for over fifteen centuries. The Rule of St. Benedict 
                is a practical and spiritual guide for monastic life that emphasizes the 
                importance of prayer, work, and community living. Benedict's Rule is characterized 
                by its moderation, wisdom, and balance, avoiding the extremes of both laxity 
                and excessive asceticism. The Rule provides detailed instructions for the 
                daily life of monks, including the schedule of prayer (the Divine Office), 
                the organization of work, the treatment of guests, and the governance of 
                the community. Benedict's emphasis on "ora et labora" (pray and work) has 
                become the motto of Benedictine monasticism and continues to inspire religious 
                communities and lay people today. The Rule's practical wisdom and spiritual 
                depth have made it one of the most influential documents in the history of 
                Western Christianity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Europe</h3>
              <p className="mb-6">
                St. Benedict's declaration as the patron saint of Europe recognizes his 
                profound influence on the development of European civilization. Benedictine 
                monasteries became centers of learning, culture, and civilization throughout 
                Europe during the Middle Ages. The monks preserved and copied ancient texts, 
                developed new forms of agriculture and technology, and provided education 
                and medical care to the surrounding communities. Benedictine monasteries 
                also played a crucial role in the Christianization of Europe, serving as 
                centers of evangelization and spiritual formation. The Benedictine way of 
                life, with its emphasis on prayer, work, and community, helped to shape 
                the values and institutions of European society. Benedict's influence extended 
                beyond the religious sphere to include education, art, music, architecture, 
                and social organization. His legacy continues to inspire efforts to build 
                a more just and peaceful Europe based on Christian values.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Spiritual Leadership</h3>
              <p>
                St. Benedict's life serves as a powerful example of spiritual leadership 
                and the importance of balancing prayer and action. His ability to combine 
                deep contemplative prayer with practical wisdom and effective leadership 
                demonstrates the harmony between the spiritual and material aspects of life. 
                Benedict's emphasis on community living and mutual support shows the importance 
                of relationships and cooperation in the spiritual life. His Rule's emphasis 
                on humility, obedience, and service provides a model for leadership that 
                is based on service rather than power. Benedict's example encourages all 
                Christians to seek God in prayer while also working for the good of others 
                and the building up of community. His legacy reminds us that true holiness 
                involves both personal spiritual growth and active service to God and neighbor.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">July 11</div>
              <p className="text-gray-600">Feast of St. Benedict</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Benedict is celebrated on July 11th, during the summer 
                season when the Church reflects on the themes of growth and harvest. This 
                feast is celebrated as a memorial in the Roman Catholic Church, recognizing 
                Benedict's importance as the Father of Western Monasticism and the patron 
                saint of Europe. The feast falls during a time when many people are on 
                vacation and may be more open to spiritual reflection, making it an ideal 
                time to remember Benedict's call to seek God in prayer and work. The feast 
                provides an opportunity to honor Benedict's memory and to reflect on the 
                importance of prayer, work, and community in our spiritual lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. Benedict, many people participate in special prayers 
                and devotions to honor his memory and seek his intercession. Churches, particularly 
                those associated with the Benedictine Order, hold special Masses and services. 
                Many Benedictine monasteries hold processions and special celebrations to 
                honor their founder. The day is also marked by prayers for Europe and for 
                peace and unity among nations, asking for St. Benedict's intercession in 
                helping to build a more just and peaceful world. Many people also take time 
                to read and reflect on the Rule of St. Benedict, particularly its emphasis 
                on prayer, work, and community living. The feast is also a time to reflect 
                on how we can incorporate Benedictine values into our daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of balance in our 
                lives and the ability to integrate prayer and work. Many people make special 
                petitions for Europe and for peace and unity among nations, asking for St. 
                Benedict's intercession in helping to build a more just and peaceful world. 
                The day is also a time to reflect on the importance of community and mutual 
                support in our spiritual lives and to pray for the strength to serve others 
                with humility and love. St. Benedict's feast day encourages us to remember 
                that we are all called to seek God in prayer while also working for the 
                good of others and the building up of community. It is also a time to pray 
                for the wisdom to balance the spiritual and material aspects of our lives.
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
                  <li>• <strong>Europe:</strong> Patron saint of Europe</li>
                  <li>• <strong>Monks:</strong> Patron of Benedictine monks</li>
                  <li>• <strong>Students:</strong> Patron of students</li>
                  <li>• <strong>Farmers:</strong> Patron of farmers</li>
                  <li>• <strong>Architects:</strong> Patron of architects</li>
                  <li>• <strong>Spelunkers:</strong> Patron of cave explorers</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Peace:</strong> Helper in seeking peace</li>
                  <li>• <strong>Unity:</strong> Patron of Christian unity</li>
                  <li>• <strong>Prayer:</strong> Helper in prayer life</li>
                  <li>• <strong>Work:</strong> Patron of honest labor</li>
                  <li>• <strong>Community:</strong> Helper in building community</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Benedict</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Benedict, Father of Western Monasticism and patron of Europe, 
                    help me to seek God in prayer and work.
                  </p>
                  <p className="mb-4">
                    Teach me to balance the spiritual and material aspects of my life and 
                    to serve others with humility and love. Help me to build community and 
                    to work for peace and unity.
                  </p>
                  <p>
                    St. Benedict, pray for me that I may have the wisdom to integrate prayer 
                    and work, the humility to serve others, and the love to build community 
                    in the spirit of your Rule. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Europe</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Benedict, patron saint of Europe, intercede for the continent 
                    and all its peoples.
                  </p>
                  <p>
                    Help us to build a Europe based on Christian values of peace, unity, 
                    and mutual respect. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Benedict, pray for us!"
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
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
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

            <Link href="/saints/st-gregory-great" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Gregory the Great
                </h3>
                <p className="text-gray-700 text-sm">
                  Pope and biographer of St. Benedict.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernard" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernard of Clairvaux
                </h3>
                <p className="text-gray-700 text-sm">
                  Cistercian monk and Doctor of the Church.
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