import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John of the Cross - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and mystic poet.',
  keywords: [
    'st john of the cross',
    'saint john of the cross',
    'st john of the cross biography',
    'st john of the cross feast day',
    'st john of the cross patron saint',
    'doctor of the church',
    'december 14 feast day',
    'catholic saints',
    'discalced carmelites',
    'mystic poet'
  ],
  openGraph: {
    title: 'St. John of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and mystic poet.',
    url: 'https://catholicbibleonline.com/saints/st-john-of-the-cross',
  },
  twitter: {
    title: 'St. John of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and mystic poet.',
  }
}

export default function StJohnOfTheCrossPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">✝️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John of the Cross
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Doctor of the Church, Mystic Poet, Co-founder of the Discalced Carmelites
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John of the Cross</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">December 14</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Mystic</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John of the Cross</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint John of the Cross was born Juan de Yepes y Alvarez, in Fontiveros, Avila, Spain in 1542. His father was employed by wealthy family members as an accountant, but they disowned him when he married a poor woman from the lower class. As a result of his family's poverty, John's family suffered greatly. His father died when he was three, and his older brother, Luis died two years after that, likely because of malnutrition. John's mother eventually found work weaving which helped her to feed her family.
              </p>
              
              <p className="mb-6">
                As a child, John was sent to a boarding school for poor and orphaned children. He was given a religious education from a young age and chose to follow a religious path, even as a child. He served as an acolyte at an Augustinian monastery. As he grew older, he went to work in a hospital while attending a Jesuit school. In 1563, he was able to join the Carmelite Order and took the name, "John of St. Matthias." He made vows the following year, and was sent to the university in Salamanca to study theology and philosophy.
              </p>
              
              <p className="mb-6">
                He became an expert in the Bible and dared to translate the Song of Songs into Spanish, an act which was controversial since the Church forbade the translation of the Bible from Latin –a measure to protect the original meanings in the scripture. John became a priest in 1567 and considered joining the Carthusian Order where monks lived cloistered in individual cells. He was attracted by the simple and quiet life. However, he encountered Theresa of Avila, a charismatic Carmelite nun. Theresa asked John to follow her.
              </p>
              
              <p className="mb-6">
                John was attracted by the strict routine followed by Theresa, a routine she hoped to reintroduce to her order, as well as her devotion to prayer and simplicity. Her followers went barefoot, and were therefore known as the discalced Carmelites. On Nov. 28, 1568, Theresa founded a new monastery. The same day, John changed his name again to John of the Cross. Within a couple years, John and his fellow friars, relocated to a larger site for their monastery. He remained at this location until 1572.
              </p>
              
              <p>
                In 1572, John traveled to Avila at the invitation of Theresa to become her confessor and spiritual guide. He remained in Avila until 1577. While there, he had a vision of Christ and made a drawing that remains to this day called, "Christ from Above." The little drawing shows Christ on the cross, looking down on him from above. The image has been preserved for centuries.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John of the Cross: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Reform and Controversy in the Carmelite Order</h3>
              <p className="mb-6">
                Around 1575, a rift within the Carmelite order began to grow and create controversy between various monastic houses. There was disagreement between the Discalced Carmelites and the ordinary Carmelites, over reform. The Discalced Carmelites sought to restore the original, strict routine and regimen that the order had when it was founded. In 1432, the strict rules of the order were "mitigated" relieving the Carmelites of some of their most strict rules. Some Carmelites, such as Theresa of Avila, felt this liberalization of their rule had interfered with their order and practice. Theresa, along with John, sought to restore the original rule.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Imprisonment and Suffering</h3>
              <p className="mb-6">
                The Carmelites had been undergoing reform since 1566, under the direction of two Canonical Visitors from the Dominican Order, sent by the Vatican. The intervention of the Holy See as well as the political machinations of King Phillip II and his court, led to dramatic, even violent disagreement between the Carmelites. In late 1577, John was ordered to leave the monastery in Avila and to return to his original house. However, John's work to reform the order had already been approved by the Papal Nuncio, who was a higher authority. Based on that, John chose to ignore the lower order and stay. On December 2, 1577, a group of Carmelites broke into John's residence and kidnapped him. He was taken by force to the order's main house in Toledo. He was brought before a court and placed on trial for disobedience. He was punished by imprisonment.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Poetry and Mystical Writings</h3>
              <p className="mb-6">
                A cell was made for him in the monastery that was so small he could barely lie on the floor. He was fed only bread and water, and occasional scraps of salt fish. Each week he was taken into public and lashed, then returned to his cell. His only luxuries were a prayer book and an oil lamp to read it by. To pass the time he wrote poems on paper that was smuggled to him by the friar charged with guarding his cell. John became known as a remarkable and influential poet, especially following his death. He has been cited as an influence to many poets, mystics, and artists, even Salvador Dali.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Escape and Final Years</h3>
              <p className="mb-6">
                After nine months, John managed to pry his cell door from its hinges and escape. He joined Teresa's nuns in Toledo, and spent six weeks in the hospital to recover. In 1579, he was sent to the town of Baeza to be rector of a new college and to support the Discalced Carmelites in Andalusia. In 1580, Pope Gregory formally authorized the split between the Discalced Carmelites and the rest of the order. This ended the rift within the order. At that time, there were about 500 members in the order living in 22 houses. During the last few years of his life, John traveled and established new houses across Spain.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Death and Canonization</h3>
              <p>
                In 1591, John became ill with a skin condition that resulted in an infection. He died on December 14, 1591. Shortly following his burial, there was a dispute over where he should be buried. The dispute was resolved by removing his legs and arms. Over the years, parts of his body were placed on display or buried across several places. Saint John of the Cross was beatified by Pope Clement X in 1675, and Canonized by Pope Benedict XIII in 1726. He was later declared a Doctor of the Church by Pope Pius XI in 1926, recognizing his profound contributions to mystical theology.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">December 14</div>
              <p className="text-gray-600">Feast of St. John of the Cross, Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John of the Cross is celebrated on December 14th, commemorating the day of his death in 1591. St. John of the Cross was beatified by Pope Clement X in 1675, canonized by Pope Benedict XIII in 1726, and declared a Doctor of the Church by Pope Pius XI in 1926. His feast day serves as a reminder of the importance of mystical theology, the power of contemplative prayer, and the beauty of spiritual poetry. His life demonstrates the transformative power of suffering and the importance of reform in religious life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. John of the Cross's remarkable contributions to mystical theology and spiritual poetry. His feast day serves as a reminder of the importance of contemplative prayer, the value of spiritual purification, and the power of mystical experience. Many monasteries and contemplative communities celebrate this day with special Masses and readings from his mystical writings. The day also emphasizes the importance of spiritual direction, the value of reform in religious life, and the beauty of mystical poetry. Many people also reflect on their own spiritual journey and consider reading his works such as "The Dark Night of the Soul" and "The Ascent of Mount Carmel."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. John of the Cross for his intercession in matters of spiritual growth, contemplative prayer, and mystical experience. Many people also pray for poets, mystics, and those seeking deeper spiritual understanding. His example encourages us to embrace the dark nights of the soul as opportunities for spiritual growth, to value contemplative prayer, and to seek union with God through purification and love. St. John of the Cross's legacy reminds us that suffering can be a path to spiritual transformation and that mystical experience is accessible to all who seek God with pure hearts.
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
                  <li>• <strong>Contemplatives:</strong> Patron of contemplative prayer</li>
                  <li>• <strong>Mystics:</strong> Patron of mystical experience</li>
                  <li>• <strong>Spanish Poets:</strong> Patron of Spanish poetry</li>
                  <li>• <strong>Poets:</strong> Patron of all poets</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual guidance</li>
                  <li>• <strong>Reformers:</strong> Patron of religious reform</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Dark Night:</strong> Helper in spiritual purification</li>
                  <li>• <strong>Mystical Union:</strong> Patron of divine union</li>
                  <li>• <strong>Poetry:</strong> Helper for creative expression</li>
                  <li>• <strong>Contemplation:</strong> Patron of deep prayer</li>
                  <li>• <strong>Spiritual Growth:</strong> Helper for personal holiness</li>
                  <li>• <strong>Religious Reform:</strong> Patron of renewal</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John of the Cross</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. John of the Cross, Doctor of the Church and mystic poet, who with courage and 
                    wisdom endured imprisonment and suffering for the reform of the Carmelite Order, help us to 
                    embrace the dark nights of our soul as opportunities for spiritual growth. Through your 
                    intercession, may we have the strength to endure purification, the wisdom to seek mystical 
                    union with God, and the grace to express our love for Him through prayer and poetry. Help us 
                    to be faithful contemplatives and to seek God with pure hearts. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John of the Cross, pray for us!"
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
            <Link href="/saints/st-teresa-of-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of the Discalced Carmelites and fellow mystic.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese-lisieux" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Carmelite saint and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ignatius-loyola" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ignatius Loyola
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Spanish saint and spiritual reformer.
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