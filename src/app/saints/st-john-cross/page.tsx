import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John of the Cross - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and co-founder of Discalced Carmelites.',
  keywords: [
    'st john of the cross',
    'saint john of the cross',
    'doctor of the church',
    'december 14 feast day',
    'catholic saints',
    'discalced carmelites',
    'mystical theology'
  ],
  openGraph: {
    title: 'St. John of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and co-founder of Discalced Carmelites.',
    url: 'https://catholicbibleonline.com/saints/st-john-cross',
  },
  twitter: {
    title: 'St. John of the Cross - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of the Cross, Doctor of the Church and co-founder of Discalced Carmelites.',
  }
}

export default function StJohnCrossPage() {
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
            Doctor of the Church and Co-founder of Discalced Carmelites
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
              <div className="text-sm text-gray-600">Doctor Saints</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John of the Cross</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John of the Cross was born Juan de Yepes y Álvarez in 1542 in Fontiveros, 
                Spain, during a time of great religious and social upheaval. He was the 
                youngest of three children born to Gonzalo de Yepes and Catalina Álvarez. 
                His father died when John was very young, leaving the family in poverty. 
                Despite these difficult circumstances, John showed an early inclination 
                toward prayer and contemplation. He was educated by the Jesuits and later 
                worked as a nurse in a hospital, where he developed a deep compassion for 
                the suffering and a desire to serve others.
              </p>
              
              <p className="mb-6">
                In 1563, at the age of 21, John entered the Carmelite Order, taking the 
                name John of St. Matthias. He was ordained a priest in 1567 and soon after 
                met St. Teresa of Avila, who was working to reform the Carmelite Order. 
                Teresa recognized John's spiritual depth and asked him to help her establish 
                the Discalced (barefoot) Carmelites, a reformed branch of the order that 
                emphasized poverty, prayer, and contemplation. John took the name John 
                of the Cross and became the first friar of the new Discalced Carmelite 
                monastery in Duruelo, which opened in 1568.
              </p>
              
              <p className="mb-6">
                John's commitment to reform and his spiritual insights made him many enemies 
                within the traditional Carmelite Order. In 1577, he was kidnapped by his 
                fellow Carmelites and imprisoned in a tiny cell in Toledo for nine months. 
                During this period of intense suffering and isolation, John experienced 
                what he later described as the "dark night of the soul" - a profound spiritual 
                crisis that led to deeper union with God. It was during this imprisonment 
                that he composed some of his most beautiful poetry, including "The Spiritual 
                Canticle" and parts of "The Dark Night of the Soul." He eventually escaped 
                from prison and continued his work of reform.
              </p>
              
              <p className="mb-6">
                After his escape, John served in various leadership positions within the 
                Discalced Carmelites, including as prior of several monasteries and as 
                a spiritual director. He was known for his wisdom, humility, and deep 
                understanding of the spiritual life. His writings, which include "The 
                Ascent of Mount Carmel," "The Dark Night of the Soul," "The Spiritual 
                Canticle," and "The Living Flame of Love," are considered masterpieces 
                of mystical theology and have influenced countless Christians throughout 
                the centuries. His poetry and prose describe the soul's journey toward 
                union with God through purification, illumination, and union.
              </p>
              
              <p>
                St. John of the Cross died on December 14, 1591, in Úbeda, Spain, after 
                suffering from a severe illness. His last words were, "Into your hands, 
                Lord, I commend my spirit." He was canonized in 1726 and declared a Doctor 
                of the Church in 1926 by Pope Pius XI. His feast day is celebrated on 
                December 14th, and he is considered one of the greatest mystical writers 
                in the history of the Church. His teachings on the spiritual life continue 
                to guide Christians today, particularly those who seek a deeper relationship 
                with God through prayer and contemplation.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John of the Cross: Doctor of Mystical Theology</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church and Mystical Writer</h3>
              <p className="mb-6">
                St. John of the Cross's greatest legacy is his contribution to mystical 
                theology and his role as a Doctor of the Church. His writings, particularly 
                "The Dark Night of the Soul" and "The Spiritual Canticle," are considered 
                masterpieces of Christian spirituality and have influenced countless believers 
                throughout the centuries. John's systematic approach to the spiritual life, 
                which he described as a journey through purification, illumination, and 
                union with God, provides a roadmap for those seeking deeper intimacy with 
                Christ. His insights into the "dark night" - those periods of spiritual 
                dryness and suffering that often precede deeper union with God - have 
                comforted and guided many Christians through difficult times in their 
                spiritual journey.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Co-founder of Discalced Carmelites</h3>
              <p className="mb-6">
                St. John of the Cross's collaboration with St. Teresa of Avila in founding 
                the Discalced Carmelites has had a lasting impact on the Church. The reform 
                movement they initiated emphasized a return to the original spirit of the 
                Carmelite Order, with a focus on poverty, prayer, and contemplation. The 
                Discalced Carmelites continue to be a vibrant presence in the Church today, 
                with monasteries and convents throughout the world. John's emphasis on 
                the importance of silence, solitude, and contemplative prayer has influenced 
                not only the Carmelite tradition but also the broader Christian understanding 
                of the spiritual life. His example of combining active ministry with deep 
                contemplative prayer serves as a model for all Christians.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Suffering and Transformation</h3>
              <p>
                St. John of the Cross's experience of imprisonment and suffering serves 
                as a powerful example of how God can use even the most difficult circumstances 
                for spiritual growth and transformation. His "dark night of the soul" 
                was not just a literary concept but a lived experience that he endured 
                with faith and trust in God. John's ability to find God in the midst 
                of suffering and to transform his pain into beautiful poetry and profound 
                spiritual insights demonstrates the power of grace to work through human 
                weakness. His legacy reminds us that the path to union with God often 
                involves periods of darkness and purification, but that these experiences 
                can lead to deeper love and understanding of God's ways.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-green-600 mb-2">December 14</div>
              <p className="text-gray-600">Feast of St. John of the Cross</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John of the Cross is celebrated on December 14th, during 
                the Advent season when the Church prepares for the coming of Christ. This 
                timing is particularly significant as it reminds us of the importance 
                of preparing our hearts for the Lord through prayer and contemplation. 
                The feast is celebrated as a memorial in the Roman Catholic Church, recognizing 
                John's importance as a Doctor of the Church and a master of the spiritual 
                life. The feast falls during a time when many people are reflecting on 
                the meaning of Christmas and the coming of the Light into the world, making 
                it an ideal time to reflect on John's teachings about finding God in 
                the darkness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On the feast day of St. John of the Cross, many people participate in 
                special prayers and devotions to honor his memory and seek his intercession. 
                Churches, particularly those associated with the Carmelite Order, hold 
                special Masses and services, often featuring readings from John's writings. 
                Many people also take time for contemplative prayer and reflection, following 
                John's example of seeking God in silence and solitude. The day is also 
                marked by prayers for those experiencing spiritual dryness or difficulties, 
                asking for St. John's intercession in helping them to find God even in 
                the midst of darkness. Many people also reflect on how they can incorporate 
                more prayer and contemplation into their daily lives.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the gift of contemplative 
                prayer and the courage to embrace the spiritual journey, even when it 
                involves periods of darkness. Many people make special petitions for 
                those who are experiencing spiritual difficulties, asking for St. John's 
                intercession in helping them to trust in God's love even when they cannot 
                feel His presence. The day is also a time to reflect on the importance 
                of silence and solitude in our spiritual lives and to pray for the strength 
                to make time for prayer and contemplation. St. John's feast day encourages 
                us to remember that the path to union with God often involves purification 
                and that God's love is present even in the darkest moments of our spiritual 
                journey.
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
                  <li>• <strong>Mystics:</strong> Patron of mystical theology</li>
                  <li>• <strong>Poets:</strong> Patron of spiritual poetry</li>
                  <li>• <strong>Contemplatives:</strong> Patron of contemplative prayer</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual guidance</li>
                  <li>• <strong>Prisoners:</strong> Patron of those in prison</li>
                  <li>• <strong>Spain:</strong> Patron of Spanish mysticism</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Dark Night:</strong> Helper in spiritual darkness</li>
                  <li>• <strong>Purification:</strong> Patron of spiritual purification</li>
                  <li>• <strong>Union:</strong> Helper in union with God</li>
                  <li>• <strong>Suffering:</strong> Patron of redemptive suffering</li>
                  <li>• <strong>Faith:</strong> Patron of unwavering trust</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John of the Cross</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. John of the Cross, Doctor of the Church and master of the 
                    spiritual life, help me to embrace the journey of purification and 
                    union with God.
                  </p>
                  <p className="mb-4">
                    Teach me to find God even in the darkness and to trust in His love 
                    when I cannot feel His presence. Help me to be patient with the 
                    process of spiritual growth and to embrace the purifying work of 
                    the Holy Spirit.
                  </p>
                  <p>
                    St. John of the Cross, pray for me that I may have the courage 
                    to enter into the dark night of the soul when God calls me, and 
                    to emerge from it with deeper love and union with Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Contemplatives</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John of the Cross, patron of contemplatives and mystics, intercede 
                    for all those who seek deeper union with God through prayer and contemplation.
                  </p>
                  <p>
                    Help them to persevere in their spiritual journey and to find God 
                    in the silence and solitude of their hearts. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
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
            <Link href="/saints/st-teresa-avila" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Avila
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of Discalced Carmelites and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-edith-stein" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Edith Stein
                </h3>
                <p className="text-gray-700 text-sm">
                  Carmelite nun and martyr, patron of Europe.
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