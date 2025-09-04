import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Amandina of Schakkebroek - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Amandina of Schakkebroek, Belgian Franciscan missionary and martyr of the Boxer Rebellion.',
  keywords: [
    'st amandina schakkebroek',
    'saint amandina schakkebroek',
    'st amandina schakkebroek biography',
    'st amandina schakkebroek feast day',
    'st amandina schakkebroek patron saint',
    'catholic saints',
    'july 9 feast day',
    'boxer rebellion martyrs',
    'franciscan missionary',
    'belgian saints'
  ],
  openGraph: {
    title: 'St. Amandina of Schakkebroek - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Amandina of Schakkebroek, Belgian Franciscan missionary and martyr of the Boxer Rebellion.',
    url: 'https://catholicbibleonline.com/saints/st-amandina-schakkebroek',
  },
  twitter: {
    title: 'St. Amandina of Schakkebroek - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Amandina of Schakkebroek, Belgian Franciscan missionary and martyr of the Boxer Rebellion.',
  }
}

export default function StAmandinaSchakkebroekPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Amandina of Schakkebroek
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Belgian Franciscan Missionary, Martyr of the Boxer Rebellion, Witness of Faith
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Amandina of Schakkebroek</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">July 9</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Martyr</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Amandina of Schakkebroek</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Amandina of Schakkebroek, born under the name of Pauline Jeuris on December 28, 1872, 
                was a Belgian Franciscan missionary sister who dedicated her life to serving God and the 
                people of China. Her journey from a small Belgian village to becoming a martyr for the 
                faith demonstrates the extraordinary courage and devotion that characterized her short but 
                impactful life.
              </p>
              
              <p className="mb-6">
                Born in Schakkebroek, Belgium, Pauline grew up in a devout Catholic family during a time 
                when the Church was actively sending missionaries to distant lands. From an early age, 
                she showed a deep love for God and a desire to serve others. Her family's faith and the 
                example of other missionaries inspired her to consider religious life and missionary work.
              </p>
              
              <p className="mb-6">
                As a young woman, Pauline felt called to join the Franciscan Missionaries of Mary, a 
                religious order dedicated to serving the poor and spreading the Gospel in mission lands. 
                She entered the convent and took the religious name Amandina, dedicating herself to a 
                life of prayer, service, and missionary work. Her formation prepared her for the 
                challenges she would face in China.
              </p>
              
              <p className="mb-6">
                In 1899, Sister Amandina was sent to China as part of a missionary group. She arrived 
                during a tumultuous period in Chinese history, when the Boxer Rebellion was beginning 
                to gain momentum. The Boxers, a nationalist movement, were hostile to foreign influence, 
                including Christian missionaries and their converts. Despite the growing danger, Sister 
                Amandina remained committed to her mission of serving the Chinese people and sharing 
                the Gospel.
              </p>
              
              <p>
                On July 9, 1900, at the age of 27, Sister Amandina was martyred along with other 
                missionaries during the Boxer Rebellion. She died as a witness to her faith, refusing 
                to renounce Christianity even in the face of death. Her martyrdom, along with that of 
                her companions, became a powerful testimony to the strength of faith and the willingness 
                to sacrifice everything for Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Amandina of Schakkebroek: Witness of Faith</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Martyr of the Boxer Rebellion</h3>
              <p className="mb-6">
                St. Amandina's most enduring legacy is her martyrdom during the Boxer Rebellion. Her 
                death, along with other missionaries, became a powerful symbol of faith and courage in 
                the face of persecution. She demonstrated that the love of Christ is stronger than fear 
                and that the Gospel message is worth dying for. Her martyrdom inspired countless others 
                to remain faithful to their beliefs even in the most difficult circumstances.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Missionary Zeal</h3>
              <p className="mb-6">
                Amandina's willingness to leave her homeland and travel to a distant, dangerous land 
                exemplifies the missionary spirit that has characterized the Catholic Church throughout 
                history. She showed that true missionary work requires not only physical courage but 
                also deep faith and trust in God's providence. Her example continues to inspire modern 
                missionaries who face similar challenges in their work.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Cultural Exchange</h3>
              <p className="mb-6">
                As a Belgian missionary in China, Amandina represented the Church's commitment to 
                cultural exchange and understanding. She learned to serve the Chinese people in their 
                own context, demonstrating that the Gospel transcends cultural boundaries. Her work 
                helped to build bridges between different cultures and showed that Christianity can 
                flourish in any cultural setting.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Inspiration for Young Women</h3>
              <p>
                St. Amandina's life serves as an inspiration for young women who feel called to 
                religious life and missionary work. Her story shows that age and background are no 
                obstacles to serving God and making a difference in the world. She proved that even 
                a short life, when lived in service to God and others, can have an eternal impact 
                and inspire generations to come.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">July 9</div>
              <p className="text-gray-600">Feast of St. Amandina of Schakkebroek</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Amandina of Schakkebroek is celebrated on July 9th, the anniversary 
                of her martyrdom. This date commemorates her ultimate sacrifice for the faith and 
                serves as a reminder of the cost of discipleship and the power of witness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Beatification and Canonization</h3>
              <p className="mb-6">
                St. Amandina was beatified and canonized together with other martyrs of the Boxer 
                Rebellion. This group canonization recognized not only individual acts of courage but 
                also the collective witness of the Church in times of persecution. Her canonization 
                affirms the Church's belief that martyrdom is the highest form of witness to the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. Amandina's feast day serves as a reminder of the ongoing 
                persecution of Christians in many parts of the world. It's a day to pray for those 
                who face persecution for their faith, to remember the importance of religious freedom, 
                and to be inspired by the courage of those who are willing to die for their beliefs.
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
                  <li>• <strong>Belgium:</strong> Patron of Belgian missionaries</li>
                  <li>• <strong>Young Missionaries:</strong> Patron of young women in missionary work</li>
                  <li>• <strong>Franciscan Missionaries:</strong> Patron of Franciscan missionary sisters</li>
                  <li>• <strong>Persecuted Christians:</strong> Protector of those facing religious persecution</li>
                  <li>• <strong>Cultural Exchange:</strong> Patron of intercultural missionary work</li>
                  <li>• <strong>China Missions:</strong> Patron of missionary work in China</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Religious Freedom:</strong> Protection for persecuted Christians</li>
                  <li>• <strong>Missionary Courage:</strong> Strength for missionaries in dangerous areas</li>
                  <li>• <strong>Young Religious:</strong> Guidance for young women considering religious life</li>
                  <li>• <strong>Cultural Understanding:</strong> Help in bridging cultural differences</li>
                  <li>• <strong>Faith Under Pressure:</strong> Courage to remain faithful in difficult times</li>
                  <li>• <strong>Martyrdom:</strong> Grace to witness to faith even unto death</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Amandina of Schakkebroek</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Amandina of Schakkebroek, young martyr and missionary, you who 
                    left your homeland to serve God in distant China, intercede for us that we may 
                    have the courage to follow Christ wherever He calls us.
                  </p>
                  <p className="mb-4">
                    Help us to be witnesses of faith in our daily lives, to stand firm in our beliefs 
                    even when faced with opposition, and to serve others with the same love and 
                    dedication that you showed to the Chinese people.
                  </p>
                  <p>
                    May we, like you, be willing to sacrifice everything for the sake of the Gospel 
                    and to trust in God's providence even in the most difficult circumstances. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Persecuted Christians</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Amandina, martyr of the Boxer Rebellion, intercede for all Christians who 
                    face persecution for their faith in today's world.
                  </p>
                  <p>
                    Help them to remain strong in their beliefs, to find courage in their suffering, 
                    and to know that their witness is not in vain. May their faith inspire others 
                    and bring glory to God. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Amandina of Schakkebroek, young martyr and missionary, pray for us!"
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
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, whose spirituality and ideals Amandina followed as a Franciscan missionary.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-teresa-benedicta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Martyr Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa Benedicta of the Cross
                </h3>
                <p className="text-gray-700 text-sm">
                  Another European saint who died as a martyr, showing courage and faith in the face of persecution.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-junipero-serra" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Junípero Serra
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan missionary who also left Europe to serve in distant lands, showing the same missionary zeal.
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