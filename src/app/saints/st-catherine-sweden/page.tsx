import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine of Sweden - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine of Sweden, virgin and daughter of St. Bridget, who dedicated her life to prayer, pilgrimage, and serving the poor.',
  keywords: [
    'st catherine of sweden',
    'saint catherine of sweden',
    'st catherine of sweden biography',
    'st catherine of sweden feast day',
    'st catherine of sweden patron saint',
    'catholic saints',
    'march 24 feast day',
    'virgin saints',
    'swedish saints'
  ],
  openGraph: {
    title: 'St. Catherine of Sweden - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Sweden, virgin and daughter of St. Bridget.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-sweden',
  },
  twitter: {
    title: 'St. Catherine of Sweden - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine of Sweden, virgin and daughter of St. Bridget.',
  }
}

export default function StCatherineSwedenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine of Sweden
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin, Daughter of St. Bridget, Model of Purity and Charity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine of Sweden</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌸</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine of Sweden</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Catherine of Sweden, born around 1330, was the daughter of the famous St. Bridget (Birgitta) of Sweden. 
                From an early age, Catherine was raised in a household of deep faith and devotion, learning from her 
                saintly mother the importance of prayer, charity, and spiritual discipline.
              </p>
              
              <p className="mb-6">
                Catherine was a married woman who, together with her husband, took a vow of continence, dedicating 
                their lives to God while remaining in the married state. This unusual arrangement demonstrated their 
                mutual commitment to spiritual growth and their desire to serve God with undivided hearts.
              </p>
              
              <p className="mb-6">
                In 1348, Catherine went to Rome where her mother had gone after the death of Catherine's father. 
                Shortly after her arrival in Rome, Catherine's husband died, leaving her free to devote herself 
                entirely to a life of prayer and service alongside her mother.
              </p>
              
              <p className="mb-6">
                For the next twenty-five years, the two women used Rome as their base for pilgrimages to various 
                holy places, including Jerusalem. These pilgrimages were not merely religious tourism but profound 
                spiritual journeys that deepened their faith and allowed them to experience the sacred sites of 
                Christianity firsthand.
              </p>
              
              <p className="mb-6">
                When not on pilgrimage, Catherine and her mother spent their days in prayer and meditation, and 
                in working with the poor and instructing them in religion. This seemingly quiet life was not 
                without perils and adventures. Dissolute young lords repeatedly sought to seduce the Swedish 
                princess, but God's providence unfailingly thwarted their efforts, protecting her purity and virtue.
              </p>
              
              <p className="mb-6">
                After their trip to Jerusalem, St. Bridget died, and Catherine took her mother's body back to 
                Sweden, burying it at Vadstena in the convent of the Order of the Holy Savior, which Bridget 
                had founded. This act of filial piety demonstrated Catherine's deep love and respect for her 
                mother's spiritual legacy.
              </p>
              
              <p>
                Catherine became the superior of the order her mother had founded, leading the community with 
                wisdom and charity. She died on March 24, 1381, mourned like her mother by the whole of Sweden, 
                leaving behind a legacy of purity, charity, and devotion to God.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine of Sweden: Virgin and Model of Charity</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Model of Virginity and Purity</h3>
              <p className="mb-6">
                St. Catherine's life demonstrates that virginity is not merely a physical state but a spiritual 
                disposition of the heart. Her vow of continence with her husband and her later life as a widow 
                show how one can live a life of complete dedication to God while maintaining the highest standards 
                of purity and virtue.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Daughter of a Saint</h3>
              <p className="mb-6">
                Catherine's relationship with her mother, St. Bridget, provides a beautiful example of how faith 
                can be passed down through generations. She learned from her mother not only the practices of 
                prayer and charity but also the courage to live a life of radical discipleship in the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Pilgrim and Missionary</h3>
              <p className="mb-6">
                Catherine's pilgrimages to Jerusalem and other holy places demonstrate her deep desire to connect 
                with the sacred history of Christianity. These journeys were not only personal spiritual experiences 
                but also opportunities to witness to the faith in foreign lands and to bring back spiritual insights 
                to her homeland.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Servant of the Poor</h3>
              <p>
                Catherine's dedication to working with the poor and instructing them in religion shows her commitment 
                to the corporal and spiritual works of mercy. Her life reminds us that true holiness is always 
                expressed in love for others, especially those most in need.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 24</div>
              <p className="text-gray-600">Memorial of St. Catherine of Sweden, Virgin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine of Sweden is celebrated on March 24th, the date of her death in 1381. 
                This memorial honors her virginity, her charity, and her dedication to God's service throughout 
                her life.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Swedish Devotion</h3>
              <p className="mb-6">
                St. Catherine is particularly venerated in Sweden, where she and her mother, St. Bridget, are 
                among the most beloved saints. Their legacy continues to inspire Swedish Catholics and Christians 
                around the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Practices</h3>
              <p>
                On her feast day, Catholics pray for her intercession, especially for purity of heart, for 
                those on pilgrimage, for the poor and needy, and for the strengthening of family bonds in faith.
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
                  <li>• <strong>Purity and Virginity:</strong> Patroness of those seeking to live pure lives</li>
                  <li>• <strong>Pilgrims:</strong> Protector of those on spiritual journeys</li>
                  <li>• <strong>The Poor:</strong> Patroness of charitable works</li>
                  <li>• <strong>Sweden:</strong> One of the patron saints of Sweden</li>
                  <li>• <strong>Widows:</strong> Helper for those who have lost their spouses</li>
                  <li>• <strong>Religious Orders:</strong> Patroness of the Order of the Holy Savior</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Protection from Temptation:</strong> Helper against moral dangers</li>
                  <li>• <strong>Family Devotion:</strong> Patroness of families living in faith</li>
                  <li>• <strong>Spiritual Growth:</strong> Helper in deepening one's relationship with God</li>
                  <li>• <strong>Charitable Works:</strong> Patroness of those serving the poor</li>
                  <li>• <strong>Religious Formation:</strong> Helper for those teaching the faith</li>
                  <li>• <strong>Safe Travel:</strong> Protector of those on journeys</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine of Sweden</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine of Sweden, virgin and daughter of St. Bridget, who dedicated your life 
                    to prayer, pilgrimage, and serving the poor, pray for us who call upon your intercession.
                  </p>
                  <p className="mb-4">
                    Help us to maintain purity of heart and to live lives of charity and devotion to God. 
                    Teach us to serve the poor and needy with love and compassion, as you did throughout your life.
                  </p>
                  <p>
                    Through your powerful intercession, may we grow in holiness and become true disciples of Christ. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Purity</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine of Sweden, who maintained your purity and virtue even when faced with 
                    temptation and danger, intercede for all those who struggle to live pure and holy lives.
                  </p>
                  <p>
                    Help us to remain faithful to God's commandments and to seek His will in all things. 
                    Through Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Pilgrims</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine, who made pilgrimages to Jerusalem and other holy places, protect all 
                    those who travel for spiritual purposes. Guide them safely on their journeys and help 
                    them to grow in faith through their experiences.
                  </p>
                  <p>
                    May their pilgrimages bring them closer to God and strengthen their commitment to His service. 
                    Through Christ our Lord. Amen."
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
            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower, known for her "Little Way" of spiritual childhood and simplicity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-agnes" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Early Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Agnes
                </h3>
                <p className="text-gray-700 text-sm">
                  Virgin martyr who refused marriage to remain faithful to Christ, patroness of young girls.
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