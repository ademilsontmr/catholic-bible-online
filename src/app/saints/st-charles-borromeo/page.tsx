import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Charles Borromeo - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Charles Borromeo, Archbishop of Milan and great reformer of the Church.',
  keywords: [
    'st charles borromeo',
    'saint charles borromeo',
    'st charles borromeo biography',
    'st charles borromeo feast day',
    'st charles borromeo patron saint',
    'archbishop of milan',
    'november 4 feast day',
    'catholic saints',
    'counter reformation'
  ],
  openGraph: {
    title: 'St. Charles Borromeo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Charles Borromeo, Archbishop of Milan and great reformer of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-charles-borromeo',
  },
  twitter: {
    title: 'St. Charles Borromeo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Charles Borromeo, Archbishop of Milan and great reformer of the Church.',
  }
}

export default function StCharlesBorromeoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Charles Borromeo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Archbishop of Milan, Great Reformer, Patron of Bishops and Seminarians
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Charles Borromeo</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">November 4</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Reform</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Charles Borromeo</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint Charles Borromeo was born on October 2, 1538 at the castle of Arona on Lake Maggiore near Milan. His father was the Count of Arona and his mother a member of the House of Medici. He was the third of six children born to the couple. At the age of 12, the young Count Charles Borromeo dedicated himself to a life of service to the Church. His uncle gave to him the family income from the Benedictine abbey of Saints Gratinian and Felinus.
              </p>
              
              <p className="mb-6">
                Even as a youth, his integrity was obvious. He was explicit in telling his father that he could only keep the money required for his education and to prepare him for service to the Church. All other funds belonged to the poor of the Church and were to be passed along to them. The young count suffered from a speech impediment that made him appear slow to those who did not know him. Despite this challenge, he performed well and impressed his teachers. He attended the University of Pavia and learned Latin. He was praised because he was hardworking and thorough.
              </p>
              
              <p className="mb-6">
                In 1554 his father passed away and although Charles was a teenager, responsibility for his household fell to him. Charles continued in his studies and earned a doctorate in canon and civil law. His responsibility for his household resulted in financial difficulties, and Charles earned a reputation for being short of funds. Life sped up for the young count after his uncle, Cardinal Giovanni Angelo Medici became Pope Pius IV on December 25, 1559.
              </p>
              
              <p className="mb-6">
                The new pope asked his nephew to come to Rome and appointed him as a cardinal-deacon. With the rank came the job of assisting and advising his uncle full-time. A month later, Pope Pius IV made his nephew a cardinal. With the new rank came even more duties including the government of the Papal States, the supervision of the Knights of Malta, the Franciscans, and the Carmelites. He was only 23 years old.
              </p>
              
              <p>
                The young Borromeo used his leadership role in the Vatican to promote learning and he established a literary academy. He wrote of some of the lessons and lectures in the book, Noctes Vaticanae. Borromeo was appointed administrator of the Archdiocese of Milan in 1560. Since he would become the ecclesiastical administrator of Milan, he decided that the Lord was calling him to the priesthood. In 1561, he founded a college at Pavia dedicated to St. Justina of Padua.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Charles Borromeo: Great Reformer of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Ordination and Episcopal Ministry</h3>
              <p className="mb-6">
                In 1562 his brother died and his family urged him to leave the service of the church to preserve the family name. However, Borromeo refused. He became more insistent upon becoming a good bishop and in compelling others to lead exemplary lives of clerical service. Borromeo was ordained first to the order of deacon. Then, he was ordained to the holy priesthood on September 4, 1563. Then, he was ordained as a bishop on December 7, 1563. He became Archbishop of Milan in May 12, 1564.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Church Reform and Counter-Reformation</h3>
              <p className="mb-6">
                In 1566, Archbishop Borromeo's benefactor and uncle, Pope Pius IV died. Borromeo had already developed a reputation as a young, idealistic reformer in Rome, and he continued that mission in Milan. Milan was the largest diocese in the Catholic Church at the time and corruption was rampant. The driving out of corruption was a critical matter during Borromeo's time. The Protestant Reformation was spreading throughout northern Europe and constantly threatened to move south. The greatest defense against Protestant doctrinal errors and claims against the hierarchy of the Catholic Church was reform and the restoration of integrity to the Catholic Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Educational and Administrative Reforms</h3>
              <p className="mb-6">
                His strategy was to provide education to many clergy he saw as ignorant. He founded schools and seminaries and colleges for clergy. He also ended the selling of indulgences, a form of simony, and ordered monasteries to reform themselves. He made a lot of visits to various locations to inspect for himself. He ordered the simplification of church interiors, which was a major point of contention between some Catholics and Protestants. The complex and busy interiors were claimed to be a distraction from the worship of God. This danger was acknowledged during the Council of Trent which Archbishop Borromeo enforced.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Courage in the Face of Opposition</h3>
              <p className="mb-6">
                His work of cleaning up the Church also made him enemies. On one occasion a member of a small, decrepit order known as the "Humiliati" attempted to assassinate him with a pistol, but missed. Many of his subordinates and secular officials complained about the Archbishop throughout his career. However, the existence of these enemies only emboldened Borromeo and served as confirmation that his efforts to eradicate corruption were working.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Service During Plague and Final Years</h3>
              <p>
                In 1576 a famine struck Milan followed by the plague, and many of the wealthy and powerful fled the city. Archbishop Borromeo remained. He used his own fortune to feed the starving people. When that money was spent, he took loans and went deep into debt. He may have fed 70,000 people per day. Eventually, the Archbishop convinced the local governor to return to his post and care for the people. In 1583, Archbishop Borromeo traveled to Switzerland and began work suppressing heresy there. Protestant heresies, along with witchcraft and sorcery had been widely reported. He founded the Collegium Helveticum to serve and educate Swiss Catholics.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">November 4</div>
              <p className="text-gray-600">Feast of St. Charles Borromeo, Archbishop of Milan</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Charles Borromeo is celebrated on November 4th, commemorating the day after his death on November 3, 1584. St. Charles Borromeo was beatified on May 12, 1602 by Pope Paul V and subsequently canonized by Pope Paul V on November 1, 1610. His feast day serves as a reminder of the importance of Church reform and the courage needed to stand against corruption and heresy. His life demonstrates the power of education, discipline, and pastoral care in strengthening the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Charles Borromeo's remarkable contributions to Church reform and his role as a model bishop. His feast day serves as a reminder of the importance of clerical education, the need for Church reform, and the courage to stand against corruption. Many dioceses and seminaries celebrate this day with special Masses and educational programs about Church reform and pastoral care. The day also emphasizes the importance of bishops and priests leading exemplary lives and the value of education in the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Charles Borromeo for his intercession in matters of Church reform, clerical education, and pastoral leadership. Many people also pray for bishops, priests, and seminarians, asking for his guidance in their formation and ministry. His example encourages us to be courageous in standing against corruption, to value education and learning, and to serve others with generosity and compassion. St. Charles Borromeo's legacy reminds us that the Church must always be willing to reform itself and that strong leadership is essential for the Church's mission.
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
                  <li>• <strong>Bishops:</strong> Patron of episcopal ministry</li>
                  <li>• <strong>Catechists:</strong> Patron of religious education</li>
                  <li>• <strong>Lombardy:</strong> Patron of his region in Italy</li>
                  <li>• <strong>Italy:</strong> Patron of his native country</li>
                  <li>• <strong>Cardinals:</strong> Patron of cardinalate</li>
                  <li>• <strong>Seminarians:</strong> Patron of priestly formation</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Church Reform:</strong> Helper in ecclesiastical renewal</li>
                  <li>• <strong>Education:</strong> Patron of learning and formation</li>
                  <li>• <strong>Spiritual Leadership:</strong> Helper for pastoral ministry</li>
                  <li>• <strong>Against Corruption:</strong> Patron of integrity</li>
                  <li>• <strong>Plague Victims:</strong> Helper in times of epidemic</li>
                  <li>• <strong>Monterey, California:</strong> Patron of the diocese</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Charles Borromeo</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Charles Borromeo, Archbishop of Milan and great reformer of the Church, 
                    who with courage and wisdom worked tirelessly to renew the Church during the Counter-Reformation, 
                    help us to be faithful servants of God and courageous reformers in our own time. Through your 
                    intercession, may we have the strength to stand against corruption, the wisdom to value education 
                    and formation, and the generosity to serve others with compassion. Help us to be exemplary 
                    witnesses of Christ's love and to work for the renewal of the Church. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Charles Borromeo, pray for us!"
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
            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Archbishop of Milan and Doctor of the Church.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-philip-neri" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Philip Neri
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great reformer of the Counter-Reformation period.
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
                  Founder of the Jesuits and fellow reformer of the Church.
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