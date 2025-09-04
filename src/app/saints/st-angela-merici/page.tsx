import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Angela Merici - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Angela Merici, founder of the Ursulines and first teaching order of women in the Catholic Church.',
  keywords: [
    'st angela merici',
    'saint angela merici',
    'st angela merici biography',
    'st angela merici feast day',
    'st angela merici patron saint',
    'ursulines',
    'january 27 feast day',
    'catholic saints',
    'teaching order'
  ],
  openGraph: {
    title: 'St. Angela Merici - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Angela Merici, founder of the Ursulines and first teaching order of women in the Catholic Church.',
    url: 'https://catholicbibleonline.com/saints/st-angela-merici',
  },
  twitter: {
    title: 'St. Angela Merici - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Angela Merici, founder of the Ursulines and first teaching order of women in the Catholic Church.',
  }
}

export default function StAngelaMericiPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👩‍🏫</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Angela Merici
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Founder of the Ursulines, Pioneer of Women's Education in the Church
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Angela Merici</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 27</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👩‍🏫</div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Angela Merici</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Angela Merici was an Italian religious educator and founder of the Ursulines whose deep prayer life and relationship with the Lord bore the fruit of mystical encounters with God. She was born on March 21, 1474 in Desenzano, a small town on the shore of Lake Garda in Lombardy.
              </p>
              
              <p className="mb-6">
                At just 10-years-old, Angela and her older sister became orphans and went to live with their uncle in Salo. There they led a quiet and devout Catholic Christian life. After the untimely death of her sister, Angela was saddened by the fact the that she had not had the opportunity to receive her last Sacraments and was concerned for her sister's eternal salvation.
              </p>
              
              <p className="mb-6">
                Angela was inspired by the Holy Spirit to dedicate herself to the Lord and to give her life in service to the Church to help everyone grow closer to the Lord. Still filled with grief, she prayed for God to reveal the condition of her deceased sister's soul. In a vision, she learned her sister was in Heaven with the company of saints. She became increasingly more devout and joined the Third Order of St. Francis where she also pledged to remain a consecrated virgin, forsaking marriage to one man to be married to the Lord and His Church.
              </p>
              
              <p className="mb-6">
                When Angela was 20-years-old, her uncle died and she returned to Desenzano. She found that around her hometown there were many young girls who had no education and no hope. Her heart was moved. She also became distressed by their ignorance and upset at the parents who had not educated them.
              </p>
              
              <p>
                Inspired by the Holy Spirit, Angela became convinced there was great need for a better way of teaching these young girls. So, she opened her own home to them and began to teach them herself. She devotedly taught them the Catholic Christian faith. By her example and instruction, she taught them to how to pray and participate in the sacramental life of the Church. She evangelized and catechized these young girls, opening them up to the life of grace.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Angela Merici: Pioneer of Women's Education</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Foundation of the Ursulines</h3>
              <p className="mb-6">
                Another vision from the Lord revealed to Angela that she was to found an institution with other consecrated virgins to further devote their lives toward the religious training of young girls. These women had little money and no power, but were bound together by their dedication to education and commitment to Jesus Christ and service to His Church. Living in their own homes, the girls met for prayer and classes where Angela reminded them, "Reflect that in reality you have a greater need to serve [the poor] than they have of your service."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Miraculous Journey to the Holy Land</h3>
              <p className="mb-6">
                In 1524, she eagerly took on the opportunity to travel to the Holy Land. During the journey, she was suddenly struck with blindness while on the island of Crete. This didn't stop her though; she continued the journey with as much enthusiasm as she would have if she had her vision. She made the entire pilgrimage and visited the sacred shrines. On the journey back home, her sight was miraculously restored while she was praying before a crucifix in the same place where she had become blind. The Lord showed Angela through this experience that she must never shut her eyes to the needs she saw around her – to not shut her heart to God's call.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Formal Establishment of the Order</h3>
              <p className="mb-6">
                On November 25, 1535, Angela gathered together 12 young virgins and laid down the foundation for the Order of the Ursulines at a small house near the Church of St. Afra in Brescia with Angela's Company of Saint Ursula, under the patronage of St. Ursula. Angela's goal was to elevate family life through Christian education for women – the future wives and mothers. The community she founded was different than many of the religious orders of women which existed in her day. She believed it was important to teach the girls in their own homes with their own families. One of her favorite sayings was, "Disorder in society is the result of disorder in the family."
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Revolutionary Approach to Religious Life</h3>
              <p>
                Though the women in the community wore no special religious habit and took no formal vows, Angela wrote a Rule of Life for those who lived and served in the community of women. They did pledge to live a life of consecrated celibacy, poverty and obedience. They lived this Rule of Life within their own homes. This was the first group of consecrated women to work outside of a formal cloister or convent in her day and became the first teaching order of women in the Catholic Church. The community existed as what is called a "secular institute" until years after Angela's death.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 27</div>
              <p className="text-gray-600">Feast of St. Angela Merici, Founder of the Ursulines</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Angela Merici is celebrated on January 27th, commemorating the day of her death in 1540. St. Angela Merici was beatified on April 30, 1768 by Pope Clement XIII and canonized May 24, 1807 by Pope Pius VII. Her canonization recognized her revolutionary contribution to women's education and religious life in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Angela Merici's remarkable vision and her role as a pioneer in women's education. Her feast day serves as a reminder of the importance of education, especially for young women, and the value of serving others through teaching and formation. Many educational institutions, particularly those run by the Ursulines, celebrate this day with special prayers and activities focused on education and service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Angela Merici for her intercession in matters of education, service to others, and courage to follow God's call. Many people also pray for teachers, students, and those working in education, as well as for the grace to be open to the needs of others and to serve them with love and dedication. Her example encourages us to be attentive to the needs around us and to respond with faith and action.
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
                  <li>• <strong>Sickness:</strong> Patron of those who are ill</li>
                  <li>• <strong>Disabled People:</strong> Helper for those with physical challenges</li>
                  <li>• <strong>Those Grieving Loss of Parents:</strong> Patron of orphans</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Students:</strong> Patron of those learning</li>
                  <li>• <strong>Women's Education:</strong> Pioneer of female learning</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Educational Ministry:</strong> Helper for teaching vocations</li>
                  <li>• <strong>Service to Others:</strong> Patron of charitable work</li>
                  <li>• <strong>Courage:</strong> Helper in facing challenges</li>
                  <li>• <strong>Vision:</strong> Patron of seeing needs around us</li>
                  <li>• <strong>Religious Life:</strong> Helper for those discerning vocations</li>
                  <li>• <strong>Family Life:</strong> Patron of strengthening families</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Angela Merici</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint Angela, you were not afraid of change. You did not let stereotypes keep you from serving. 
                    Help us to overcome our fear of change in order to follow God's call and allow others to follow theirs. 
                    Teach us to open our eyes to the needs around us and to respond with courage and love. 
                    Help us to be instruments of God's grace in the world. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Angela Merici, pray for us!"
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
            <Link href="/saints/st-francis-de-sales" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis de Sales
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint known for his gentle approach to spirituality and teaching.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-catherine-of-siena" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Catherine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  Another strong woman who served the Church through teaching and counsel.
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
                  Another saint who emphasized the importance of serving others with love.
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