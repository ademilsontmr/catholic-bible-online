import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Labouré - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Catherine Labouré, visionary of the Miraculous Medal and patron of the elderly.',
  keywords: [
    'st catherine laboure',
    'saint catherine laboure',
    'catherine laboure biography',
    'catherine laboure feast day',
    'catherine laboure patron saint',
    'miraculous medal',
    'daughters of charity',
    'november 28 feast day',
    'visionary saint',
    'elderly patron'
  ],
  openGraph: {
    title: 'St. Catherine Labouré - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine Labouré, visionary of the Miraculous Medal and patron of the elderly.',
    url: 'https://catholicbibleonline.com/saints/st-catherine-laboure',
  },
  twitter: {
    title: 'St. Catherine Labouré - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Catherine Labouré, visionary of the Miraculous Medal and patron of the elderly.',
  }
}

export default function StCatherineLabourePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🌹</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Labouré
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Visionary of the Miraculous Medal, Daughter of Charity
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Catherine Labouré</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Visionary</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Catherine Labouré</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Catherine Labouré was born in France on May 2, 1806 as the ninth of 11 children to Pierre and Madeleine Labouré. In 1815, Catherine's mother passed away, leaving her 9-year-old daughter with the responsibility of caring for the household. After her mother's funeral, Catherine returned home and picked up a statue of the Blessed Virgin. Holding it close, she said, "Now you will be my mother."
              </p>
              
              <p className="mb-6">
                Growing up, Catherine was known for being a quiet and practical child, though she was extremely devout. A couple of years after her mother's death, Catherine experienced a dream of an old priest motioning her to a room of sick people. "It is a good deed to look after the sick. God has designs on you. Do not forget it."
              </p>
              
              <p className="mb-6">
                Years later, during a visit to the Daughters of Charity hospital, Catherine saw a picture of the old priest on the wall. She discovered it was of their founder, St. Vincent de Paul. Catherine immediately knew she would become a member of St. Vincent's order.
              </p>
              
              <p className="mb-6">
                In January 1830, Catherine Labouré entered the novitiate of the Daughters of Charity. Months later, on July 19, 1830, Catherine woke from her sleep after hearing a child's voice calling her to the chapel as the Blessed Virgin Mary was waiting for her.
              </p>
              
              <p className="mb-6">
                As Catherine approached the chapel, the door swung open revealing a brilliant light. The Blessed Virgin told Catherine she would be given a mission with all the graces necessary to complete it. Our Lady said, "God wishes to charge you with a mission. You will be contradicted, but do not fear; you will have the grace to do what is necessary. Tell your spiritual director all that passes within you. Times are evil in France and in the world."
              </p>
              
              <p className="mb-6">
                In November 1830, the Blessed Mother visited Catherine a second time during evening meditations. She showed herself inside an oval frame, standing upon a globe with rays of light coming from her hands toward the globe. Around the frame were the words, "O Mary, conceived without sin, pray for us who have recourse to thee."
              </p>
              
              <p className="mb-6">
                Mary asked Catherine to take these images to her father confessor, Father Jean Marie Aladel, telling him they should be placed on medallions. "All who wear them will receive great graces." At first, the priest did not believe Catherine, but after two years, he brought her story to the Archbishop. The Archbishop ordered 2,000 medals struck.
              </p>
              
              <p className="mb-6">
                The medals were dispersed so rapidly and effectively it was said to be miraculous. Catherine Labouré spent the next 40 years of her life caring for the elderly, sick and disabled.
              </p>
              
              <p>
                On December 31, 1876, Catherine passed away at 70-years-old. Her body was encased in glass beneath the side altar in the Chapel of Our Lady of the Miraculous Medal in Paris. Her body was discovered to be incorrupt after being exhumed in 1933. She was beatified by Pope Pius XI on May 28, 1933 and canonized by Pope Pius XII on July 27, 1947.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Catherine Labouré: Visionary of the Miraculous Medal</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Miraculous Medal</h3>
              <p className="mb-6">
                St. Catherine Labouré's greatest legacy is the Miraculous Medal, which has become one of the most popular and powerful Marian devotions in the Catholic Church. The medal, with its image of Mary standing on a globe with rays of light emanating from her hands, has brought countless graces and conversions to those who wear it with faith and devotion.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Obedience</h3>
              <p className="mb-6">
                Despite receiving extraordinary visions from the Blessed Virgin Mary, Catherine remained humble and obedient throughout her life. She kept her identity as the visionary secret for 46 years, living a quiet life of service to the poor and elderly. Her example teaches us that true holiness often lies in simple, faithful service rather than public recognition.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotion to the Elderly and Sick</h3>
              <p className="mb-6">
                Catherine's 40 years of service to the elderly, sick, and disabled demonstrate her deep compassion and commitment to the most vulnerable members of society. Her work with the Daughters of Charity shows how religious life can be a powerful force for good in caring for those in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Incorrupt Body</h3>
              <p>
                The discovery of Catherine's incorrupt body in 1933, 57 years after her death, serves as a powerful sign of her holiness and the truth of her visions. This miraculous preservation of her body has inspired countless pilgrims and strengthened the faith of many who visit her shrine in Paris.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 28</div>
              <p className="text-gray-600">Feast of St. Catherine Labouré, Visionary of the Miraculous Medal</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Catherine Labouré is celebrated on November 28th, commemorating her life of service and her role in bringing the Miraculous Medal to the world. This date honors her humility, obedience, and devotion to the Blessed Virgin Mary.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Devotional Traditions</h3>
              <p className="mb-6">
                On her feast day, many people wear the Miraculous Medal and pray for her intercession. Churches dedicated to Our Lady of the Miraculous Medal often hold special Masses and devotions. The day is also marked by prayers for the elderly and sick, asking for Catherine's intercession in caring for those in need.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the grace to serve others with humility and love, to ask for Catherine's intercession in deepening our devotion to the Blessed Virgin Mary, and to pray for the elderly and sick who were so dear to her heart.
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
                  <li>• <strong>Elderly:</strong> Those in advanced age</li>
                  <li>• <strong>Infirmed People:</strong> Those who are sick or disabled</li>
                  <li>• <strong>Miraculous Medal:</strong> The devotion she helped establish</li>
                  <li>• <strong>Daughters of Charity:</strong> Her religious order</li>
                  <li>• <strong>Paris:</strong> The city where she served</li>
                  <li>• <strong>France:</strong> Her homeland</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Humility:</strong> Learning to serve in secret</li>
                  <li>• <strong>Obedience:</strong> Following God's will through authority</li>
                  <li>• <strong>Marian Devotion:</strong> Deepening love for Our Lady</li>
                  <li>• <strong>Care for the Elderly:</strong> Serving the aged with love</li>
                  <li>• <strong>Religious Vocations:</strong> Those discerning religious life</li>
                  <li>• <strong>Visionaries:</strong> Those who receive divine messages</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Catherine Labouré</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O St. Catherine Labouré, who received the privilege of beholding the Blessed Virgin Mary and of speaking with her, obtain for us the grace to love and serve Our Lady with the same humility and devotion that characterized your life.
                  </p>
                  <p className="mb-4">
                    Help us to serve the elderly and sick with the same compassion you showed during your forty years of service. May we, like you, find strength in the Miraculous Medal and trust in Mary's intercession.
                  </p>
                  <p>
                    Through Jesus Christ our Lord. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for the Elderly</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine Labouré, patron of the elderly, intercede for all those in advanced age. Help us to see the dignity and wisdom in our elderly brothers and sisters.
                  </p>
                  <p>
                    May we serve them with the same love and respect you showed, and may they find comfort and peace in their later years. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Humility</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Catherine Labouré, who kept your extraordinary visions secret for so many years, teach us the virtue of humility. Help us to serve God and others without seeking recognition or praise.
                  </p>
                  <p>
                    May we find joy in simple acts of love and service, knowing that God sees all things done in secret. Amen."
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
            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Charity Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Daughters of Charity, the order St. Catherine joined.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernadette" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Visionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernadette
                </h3>
                <p className="text-gray-700 text-sm">
                  Another visionary of Our Lady, known for the Lourdes apparitions.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-faustina" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Visionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Faustina
                </h3>
                <p className="text-gray-700 text-sm">
                  Visionary of Divine Mercy and author of the Divine Mercy Chaplet.
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