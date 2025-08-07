import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Bruno - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Bruno, founder of the Carthusian Order and model of contemplative life.',
  keywords: [
    'st bruno',
    'saint bruno',
    'st bruno biography',
    'st bruno feast day',
    'st bruno patron saint',
    'catholic saints',
    'october 6 feast day',
    'carthusian order',
    'hermit saints',
    'contemplative saints'
  ],
  openGraph: {
    title: 'St. Bruno - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bruno, founder of the Carthusian Order and model of contemplative life.',
    url: 'https://catholicbibleonline.com/saints/st-bruno',
  },
  twitter: {
    title: 'St. Bruno - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Bruno, founder of the Carthusian Order and model of contemplative life.',
  }
}

export default function StBrunoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Bruno
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Carthusian Order, Hermit, Contemplative
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Bruno</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 6</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏔️</div>
              <div className="text-sm text-gray-600">Hermit</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Bruno</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Bruno was born in Cologne, Germany, into the prominent Hartenfaust family. 
                His early education took place at the Cathedral school in Rheims, where he would 
                later return to become one of the most distinguished theologians of his time. 
                Bruno's life would become a remarkable journey from academic excellence to 
                contemplative solitude, ultimately leading to the foundation of one of the most 
                austere and respected religious orders in the Church.
              </p>
              
              <p className="mb-6">
                After completing his studies, Bruno returned to Cologne around 1055, where he 
                was ordained a priest and became a Canon at St. Cunibert's. His intellectual 
                gifts and spiritual depth were soon recognized, and in 1056, he returned to 
                Rheims as a professor of theology. The following year, he was appointed head 
                of the school, a position he held with distinction until 1074, when he was 
                named chancellor of Rheims by Archbishop Manasses.
              </p>
              
              <p className="mb-6">
                However, Bruno's commitment to truth and justice would soon lead him into 
                conflict with the archbishop. In 1076, Bruno and several other priests 
                denounced Manasses as unfit for the office of Papal Legate. This courageous 
                stand forced Bruno to flee Rheims, but he later returned to Cologne. When 
                Manasses was finally deposed in 1080, Bruno returned to Rheims, where the 
                people wanted to make him archbishop. However, Bruno had already decided to 
                pursue a different path - that of an eremitical life dedicated to prayer and contemplation.
              </p>
              
              <p className="mb-6">
                Bruno became a hermit under the guidance of Abbot St. Robert of Molesmes 
                (who would later found the Cistercian Order). However, seeking even greater 
                solitude, Bruno moved to Grenoble in 1084 with six companions. There, Bishop 
                St. Hugh of Grenoble assigned them a place for their hermitages in a desolate, 
                mountainous, alpine area called La Grande Chartreuse. This remote location 
                would become the cradle of the Carthusian Order.
              </p>
              
              <p>
                At La Grande Chartreuse, Bruno and his companions built an oratory and 
                individual cells, roughly following the rule of St. Benedict. They embraced 
                a life of poverty, manual work, prayer, and transcribing manuscripts, 
                though they had no written rule at this time. The fame of the group and 
                their founder spread, and in 1090, Bruno was brought to Rome against his 
                wishes by Pope Urban II (whom he had taught at Rheims) to serve as Papal 
                Adviser in the reformation of the clergy. Bruno persuaded Urban to allow 
                him to resume his eremitical life, and he founded St. Mary's at La Torre 
                in Calabria, where he remained until his death on October 6, 1101.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Bruno: Founder of the Carthusian Order</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Carthusian Order</h3>
              <p className="mb-6">
                St. Bruno's most enduring legacy is the foundation of the Carthusian Order, 
                one of the most austere and respected religious orders in the Catholic Church. 
                The Carthusians are known for their strict observance of silence, their 
                commitment to solitude, and their dedication to contemplative prayer. The 
                order has maintained its original spirit and discipline for over nine 
                centuries, making it one of the most stable and unchanged religious orders 
                in the history of the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Contemplative Life</h3>
              <p className="mb-6">
                Bruno's life serves as a powerful example of the contemplative vocation. 
                Despite his academic achievements and the high positions he could have held, 
                he chose to pursue a life of solitude and prayer. His decision to leave 
                behind the honors and responsibilities of the world in favor of the 
                simplicity of the hermitage demonstrates the value he placed on direct 
                communion with God. This choice continues to inspire those who seek a 
                deeper spiritual life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in Standing for Truth</h3>
              <p className="mb-6">
                Bruno's willingness to denounce Archbishop Manasses, even at the cost of 
                his own safety and position, demonstrates his commitment to truth and 
                justice. This courage in standing up for what is right, even when it 
                means personal sacrifice, serves as an example for all Christians. His 
                actions show that faithfulness to God sometimes requires us to speak out 
                against corruption and injustice, regardless of the consequences.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Scholar and Spiritual Guide</h3>
              <p>
                Bruno was not only a contemplative but also a scholar and teacher. He 
                wrote several commentaries on the psalms and on St. Paul's epistles, 
                showing his deep understanding of Scripture and theology. His role as 
                a teacher at Rheims and his influence on Pope Urban II demonstrate that 
                he was able to combine intellectual excellence with spiritual depth. 
                This integration of learning and holiness continues to inspire those 
                who seek to serve God through both study and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 6</div>
              <p className="text-gray-600">Feast of St. Bruno</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Bruno is celebrated on October 6th, the anniversary of 
                his death. This date commemorates his life of contemplation and his 
                founding of the Carthusian Order. It serves as a reminder of the 
                importance of prayer, solitude, and the contemplative dimension of 
                Christian life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Recognition and Canonization</h3>
              <p className="mb-6">
                Bruno was never formally canonized because of the Carthusians' aversion 
                to public honors. However, Pope Leo X granted the Carthusians permission 
                to celebrate his feast in 1514, and his name was placed on the Roman 
                calendar in 1623. This recognition, despite the order's preference for 
                humility and simplicity, speaks to the universal appeal and importance 
                of Bruno's example.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's busy and noisy world, St. Bruno's feast day serves as a 
                reminder of the importance of silence, solitude, and contemplation. 
                It's a day to reflect on how we can find moments of quiet prayer in 
                our own lives and to remember that true wisdom often comes from 
                listening to God in silence. His example encourages us to seek 
                balance between activity and contemplation, between service to others 
                and personal prayer.
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
                  <li>• <strong>Carthusian Order:</strong> Patron of the order he founded</li>
                  <li>• <strong>Hermits:</strong> Patron of those living eremitical life</li>
                  <li>• <strong>Contemplatives:</strong> Patron of those seeking contemplative prayer</li>
                  <li>• <strong>Theologians:</strong> Patron of theological scholars</li>
                  <li>• <strong>Germany:</strong> Patron of his homeland</li>
                  <li>• <strong>Calabria:</strong> Patron of the region where he died</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Contemplation:</strong> Help in finding time for prayer</li>
                  <li>• <strong>Silence:</strong> Strength to embrace silence and solitude</li>
                  <li>• <strong>Academic Excellence:</strong> Success in theological studies</li>
                  <li>• <strong>Courage:</strong> Strength to stand for truth and justice</li>
                  <li>• <strong>Simplicity:</strong> Help in choosing simplicity over honors</li>
                  <li>• <strong>Spiritual Direction:</strong> Guidance for spiritual seekers</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Bruno</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Bruno, founder of the Carthusian Order and model of 
                    contemplative life, you who left behind the honors of the world to 
                    seek God in silence and solitude, intercede for us that we may find 
                    time for prayer and contemplation in our busy lives.
                  </p>
                  <p className="mb-4">
                    Help us to have the courage to stand for truth and justice, even when 
                    it means personal sacrifice. Teach us to value our relationship with 
                    God above all worldly honors and to seek wisdom through both study 
                    and prayer.
                  </p>
                  <p>
                    May we, like you, find the balance between service to others and 
                    personal prayer, and may our lives be a witness to the importance 
                    of silence and contemplation in the spiritual life. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Contemplatives</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Bruno, patron of contemplatives and hermits, intercede for all 
                    those who seek a life of prayer and solitude.
                  </p>
                  <p>
                    Help them to find the strength to embrace silence and to persevere 
                    in their contemplative vocation. May they find joy and peace in 
                    their communion with God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Bruno, founder of the Carthusians, pray for us!"
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
                  Father of Western monasticism, whose rule influenced Bruno's Carthusian Order.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony-desert" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of the Desert
                </h3>
                <p className="text-gray-700 text-sm">
                  Father of monasticism and another great model of eremitical life.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-thomas-aquinas" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thomas Aquinas
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great theologian who combined intellectual excellence with holiness.
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