import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Thérèse of Lisieux - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Thérèse of Lisieux, The Little Flower, known for her "Little Way" of spiritual childhood.',
  keywords: [
    'st therese of lisieux',
    'saint therese',
    'st therese biography',
    'st therese feast day',
    'st therese patron saint',
    'october 1 feast day',
    'modern saints',
    'little flower'
  ],
  openGraph: {
    title: 'St. Thérèse of Lisieux - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thérèse of Lisieux, The Little Flower, known for her "Little Way".',
    url: 'https://catholicbibleonline.com/saints/st-therese',
  },
  twitter: {
    title: 'St. Thérèse of Lisieux - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Thérèse of Lisieux, The Little Flower, known for her "Little Way".',
  }
}

export default function StTheresePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Thérèse of Lisieux
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            The Little Flower, Doctor of the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Thérèse of Lisieux</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 1</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Flower</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Thérèse of Lisieux</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Thérèse of Lisieux was born Marie-Françoise-Thérèse Martin on January 2, 1873, in Alençon, 
                France. She was the youngest of nine children born to Louis and Zélie Martin, both of whom 
                are now canonized saints. From an early age, Thérèse showed a deep love for God and a desire 
                to become a saint.
              </p>
              
              <p className="mb-6">
                Thérèse's mother died when she was only four years old, and the family moved to Lisieux. 
                At the age of 15, she entered the Carmelite convent in Lisieux, taking the religious name 
                Thérèse of the Child Jesus and the Holy Face. Despite her young age, she was determined 
                to give herself completely to God.
              </p>
              
              <p className="mb-6">
                In the convent, Thérèse lived a life of great simplicity and humility. She developed what 
                she called her "Little Way" - a path to holiness through small, everyday acts of love and 
                sacrifice. She believed that even the smallest actions, when done with love for God, could 
                lead to great holiness.
              </p>
              
              <p className="mb-6">
                Thérèse suffered from tuberculosis and died on September 30, 1897, at the age of 24. Before 
                her death, she promised to spend her heaven doing good on earth and to let fall a shower 
                of roses. She was canonized in 1925 by Pope Pius XI, and in 1997, Pope John Paul II declared 
                her a Doctor of the Church, making her the youngest person and only the third woman to receive 
                this honor.
              </p>
              
              <p>
                St. Thérèse's autobiography, "Story of a Soul," has become one of the most beloved spiritual 
                books in the Catholic Church. Her "Little Way" continues to inspire millions of people around 
                the world to find holiness in the ordinary moments of daily life.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Thérèse: The Little Flower</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Little Way</h3>
              <p className="mb-6">
                St. Thérèse's most enduring legacy is her "Little Way" - a simple path to holiness that 
                anyone can follow. She taught that we don't need to do great things to become saints; 
                instead, we should do small things with great love. This approach to spirituality has 
                made holiness accessible to ordinary people everywhere.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                As a Doctor of the Church, St. Thérèse's teachings have been recognized as having universal 
                value for the Church. Her insights into the spiritual life, particularly her understanding 
                of God's mercy and love, continue to guide theologians and spiritual writers today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Spiritual Childhood</h3>
              <p className="mb-6">
                St. Thérèse showed us how to approach God with the trust and simplicity of a child. She 
                believed that God is a loving Father who wants to give us everything we need. Her example 
                teaches us to trust in God's love and to rely on His mercy rather than our own strength.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Shower of Roses</h3>
              <p>
                St. Thérèse's promise to spend her heaven doing good on earth and to let fall a shower 
                of roses has made her one of the most popular saints for intercession. Countless people 
                have experienced her help and have received roses as a sign of her intercession. She 
                continues to be a powerful advocate for all who turn to her in prayer.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 1</div>
              <p className="text-gray-600">Feast of St. Thérèse of Lisieux</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Thérèse is celebrated on October 1st, the day after her death. This date 
                marks the beginning of the month of the Holy Rosary, making it a fitting time to honor 
                this great saint who had such a deep devotion to Mary. The feast is celebrated as a 
                memorial throughout the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Thérèse's feast day, many people participate in the "Rose Novena" - nine days of 
                prayer asking for her intercession. Some churches hold special Masses and prayer services, 
                and many people visit shrines dedicated to St. Thérèse. It's also traditional to give 
                roses to others as a sign of love and to practice small acts of kindness.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Thérèse, the Prayer to St. Thérèse, 
                or to read her autobiography "Story of a Soul." Many people also make a special effort to 
                practice her "Little Way" by doing small acts of love and sacrifice throughout the day.
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
                  <li>• <strong>Missionaries and Mission Work:</strong> Patron of evangelization</li>
                  <li>• <strong>Florists and Flower Growers:</strong> Patron of flower industry</li>
                  <li>• <strong>Aviators and Pilots:</strong> Protector of those who fly</li>
                  <li>• <strong>France:</strong> Patron saint of France</li>
                  <li>• <strong>Russia:</strong> Patron saint of Russia</li>
                  <li>• <strong>AIDS Patients:</strong> Patron of those with serious illness</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Growth:</strong> Helper in spiritual development</li>
                  <li>• <strong>Trust in God:</strong> Patron of childlike faith</li>
                  <li>• <strong>Small Acts of Love:</strong> Patron of the "Little Way"</li>
                  <li>• <strong>Missionary Work:</strong> Helper in spreading the Gospel</li>
                  <li>• <strong>Healing from Illness:</strong> Intercessor for health</li>
                  <li>• <strong>Finding Roses:</strong> Patron of receiving signs from heaven</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Thérèse</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O little St. Thérèse of the Child Jesus, please pick for me a rose from the heavenly 
                    gardens and send it to me as a message of love. O little flower of Jesus, ask God today 
                    to grant the favors I now place with confidence in your hands. (Mention your request)
                  </p>
                  <p>
                    St. Thérèse, help me to always believe as you did in God's great love for me, so that 
                    I might imitate your 'Little Way' each day. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Thérèse of Lisieux, pray for us!"
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

            <Link href="/saints/st-michael-archangel" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Michael the Archangel
                </h3>
                <p className="text-gray-700 text-sm">
                  The great archangel who defeated Satan and leads the heavenly armies, protector of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-anthony" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Anthony of Padua
                </h3>
                <p className="text-gray-700 text-sm">
                  Franciscan friar known for his powerful preaching and miracles, patron of lost items.
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