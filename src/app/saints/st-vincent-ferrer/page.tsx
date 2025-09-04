import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Vincent Ferrer - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Vincent Ferrer, the great Dominican missionary and patron saint of builders.',
  keywords: [
    'st vincent ferrer',
    'saint vincent ferrer',
    'vincent ferrer biography',
    'vincent ferrer feast day',
    'vincent ferrer patron saint',
    'dominican missionary',
    'patron saint of builders',
    'april 5 feast day',
    'spanish saint',
    'great schism'
  ],
  openGraph: {
    title: 'St. Vincent Ferrer - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vincent Ferrer, the great Dominican missionary and patron saint of builders.',
    url: 'https://catholicbibleonline.com/saints/st-vincent-ferrer',
  },
  twitter: {
    title: 'St. Vincent Ferrer - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Vincent Ferrer, the great Dominican missionary and patron saint of builders.',
  }
}

export default function StVincentFerrerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🏗️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Vincent Ferrer
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Great Dominican Missionary and Patron Saint of Builders
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Vincent Ferrer</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏗️</div>
              <div className="text-sm text-gray-600">Patron of Builders</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Vincent Ferrer</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Vincent Ferrer is the patron saint of builders because of his fame for "building up" and strengthening the Church: through his preaching, missionary work, in his teachings, as confessor and adviser. At Valencia in Spain, this illustrious son of St. Dominic came into the world on January 23, 1357. In the year 1374, he entered the Order of St. Dominic in a monastery near his native city. Soon after his profession he was commissioned to deliver lectures on philosophy.
              </p>
              
              <p className="mb-6">
                On being sent to Barcelona, he continued his scholastic duties and at the same time devoted himself to preaching. At Lerida, the famous university city of Catalonia, he received his doctorate. After this he labored six years in Valencia, during which time he perfected himself in the Christian life. In 1390, he was obliged to accompany Cardinal Pedro de Luna to France, but he soon returned home.
              </p>
              
              <p className="mb-6">
                When, in 1394, de Luna himself had become Pope at Avignon he summoned St. Vincent and made him Master of the sacred palace. In this capacity St. Vincent made unsuccessful efforts to put an end to the great schism. He refused all ecclesiastical dignities, even the cardinal's hat, and only craved to be appointed apostolical missionary.
              </p>
              
              <p className="mb-6">
                Now began those labors that made him the famous missionary of the fourteenth century. He evangelized nearly every province of Spain, and preached in France, Italy, Germany, Flanders, England, Scotland, and Ireland. Numerous conversions followed his preaching, which God Himself assisted by the gift of miracles.
              </p>
              
              <p className="mb-6">
                Though the Church was then divided by the great schism, the saint was honorably received in the districts subject to the two claimants to the Papacy. He was even invited to Mohammedan Granada, where he preached the gospel with much success. He lived to behold the end of the great schism and the election of Pope Martin V. Finally, crowned with labors, he died April 5, 1419. His feast day is April 5.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Vincent Ferrer: The Church Builder</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Great Missionary of the Fourteenth Century</h3>
              <p className="mb-6">
                St. Vincent Ferrer is remembered as one of the most successful missionaries of the medieval period. His preaching tours covered nearly every province of Spain and extended to France, Italy, Germany, Flanders, England, Scotland, and Ireland. His missionary work was marked by numerous conversions and miracles, earning him the reputation as the most effective preacher of his time.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron Saint of Builders</h3>
              <p className="mb-6">
                St. Vincent Ferrer's title as patron saint of builders comes from his role in "building up" and strengthening the Church through his preaching, missionary work, teachings, and spiritual guidance. He literally and figuratively built up the Church by converting thousands of people and strengthening the faith of countless others. His work helped rebuild the Church during the difficult period of the Great Schism.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Bridge During the Great Schism</h3>
              <p className="mb-6">
                During the Great Schism, when the Church was divided between rival popes, St. Vincent Ferrer served as a bridge between the factions. He was honorably received in districts subject to both claimants to the papacy, demonstrating his ability to work for Church unity even in times of division. His efforts to end the schism, though initially unsuccessful, helped pave the way for its eventual resolution.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Service</h3>
              <p>
                St. Vincent Ferrer's refusal of ecclesiastical dignities, including the cardinal's hat, demonstrates his humility and single-minded focus on his missionary calling. He preferred to serve as an apostolic missionary rather than accept high office, showing that true greatness comes from service to others rather than personal advancement. His life serves as a model for all who seek to build up the Church through humble service.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 5</div>
              <p className="text-gray-600">Feast of St. Vincent Ferrer, Patron of Builders</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Vincent Ferrer is celebrated on April 5th, commemorating his death and his lifelong dedication to building up the Church through preaching and missionary work. This date is particularly significant in Dominican communities and in Spain, where his missionary work had such a profound impact.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of Builders</h3>
              <p className="mb-6">
                On his feast day, many construction workers, architects, and builders seek his intercession for their work. Churches and communities may hold special services or prayers focusing on the spiritual building up of the Church and the importance of strong foundations in both physical and spiritual construction.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Reflection</h3>
              <p>
                The feast day is an excellent time to pray for missionaries and preachers, to ask for St. Vincent Ferrer's intercession in building up our faith and the faith of others, and to reflect on how we can contribute to the building up of the Church in our own communities.
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
                  <li>• <strong>Builders:</strong> Construction workers and contractors</li>
                  <li>• <strong>Architects:</strong> Building designers and planners</li>
                  <li>• <strong>Construction Workers:</strong> Those who build and repair</li>
                  <li>• <strong>Plumbers:</strong> Those who work with pipes and water systems</li>
                  <li>• <strong>Roofers:</strong> Those who work on building roofs</li>
                  <li>• <strong>Bricklayers:</strong> Those who work with bricks and masonry</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Church Building:</strong> Construction of churches and religious buildings</li>
                  <li>• <strong>Missionary Work:</strong> Evangelization and preaching</li>
                  <li>• <strong>Church Unity:</strong> Healing divisions in the Church</li>
                  <li>• <strong>Dominican Order:</strong> Members of the Order of Preachers</li>
                  <li>• <strong>Preachers:</strong> Those who proclaim the Gospel</li>
                  <li>• <strong>Spiritual Growth:</strong> Building up faith and virtue</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Vincent Ferrer</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Vincent Ferrer, patron saint of builders, help us to build up the Church through our words and actions.
                  </p>
                  <p className="mb-4">
                    Teach us to be missionaries in our own communities, spreading the Gospel with love and conviction. Help us to work for unity in the Church and to serve others with humility.
                  </p>
                  <p>
                    May we, like you, be builders of faith and instruments of God's grace. Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Builders</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Vincent Ferrer, patron of builders, intercede for all who work in construction and building.
                  </p>
                  <p>
                    Help them to work safely and skillfully, to build structures that are strong and beautiful, and to see their work as a reflection of God's creative power. May their hands build not just buildings, but homes and communities. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Missionaries</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Vincent Ferrer, great missionary and preacher, intercede for all who proclaim the Gospel today.
                  </p>
                  <p>
                    Help them to speak with power and conviction, to bring many to Christ through their preaching, and to work for unity in the Church. May their missionary work bear abundant fruit for the Kingdom of God. Amen."
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
            <Link href="/saints/st-dominic" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Dominican Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Dominic
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Dominican order that St. Vincent served.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernardine-of-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Preacher Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernardine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great preacher and missionary of the same period.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joseph" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Worker Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joseph
                </h3>
                <p className="text-gray-700 text-sm">
                  Patron saint of workers and the universal Church.
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