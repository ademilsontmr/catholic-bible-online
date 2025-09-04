import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Philip Neri - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Philip Neri, founder of the Oratorians and known as the "Apostle of Rome."',
  keywords: [
    'st philip neri',
    'saint philip neri',
    'st philip neri biography',
    'st philip neri feast day',
    'st philip neri patron saint',
    'oratorians',
    'may 26 feast day',
    'catholic saints',
    'apostle of rome'
  ],
  openGraph: {
    title: 'St. Philip Neri - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip Neri, founder of the Oratorians and known as the "Apostle of Rome."',
    url: 'https://catholicbibleonline.com/saints/st-philip-neri',
  },
  twitter: {
    title: 'St. Philip Neri - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Philip Neri, founder of the Oratorians and known as the "Apostle of Rome."',
  }
}

export default function StPhilipNeriPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">😊</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Philip Neri
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Apostle of Rome, Founder of the Oratorians, Saint of Joy
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Philip Neri</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">May 26</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">😊</div>
              <div className="text-sm text-gray-600">Joy</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Philip Neri</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Philip Neri was a Christian missionary and founder of the Congregation of the Oratory, a community of Catholic priests and lay brothers. He was born in Florence on July 21, 1515 as one of four children to Francesco Neri.
              </p>
              
              <p className="mb-6">
                From a very young age, Philip was known for being cheerful and obedient. He was affectionately referred to as "good little Phil." He received his early teachings from friars at the Dominican monastery in Florence, San Marco.
              </p>
              
              <p className="mb-6">
                At 18-years-old, Philip went off to live with a wealthy family member in San Germano. He was sent there to assist in - and possibly inherit - the family business. However, soon after his arrival, Philip experienced a mystical vision, which he eventually spoke of as his Christian conversion. This event was an encounter with the Lord and it dramatically changed his life.
              </p>
              
              <p className="mb-6">
                He soon lost interest in owning property or participating in business. He felt a call from the Holy Spirit to radically live for and serve the Lord Jesus Christ and His Church. So, Philip set out for Rome.
              </p>
              
              <p className="mb-6">
                Once in Rome, Philip was the live-in tutor for a fellow Florentine's sons. Under Philip's guidance, the two boys improved in all aspects of life and faith, proving Philip's special talent with human relationships and in bringing out the best in people.
              </p>
              
              <p>
                During his first two years in Rome, Philip spent his time in a solitary life. He also dedicated a lot of time to prayer. He ate very small meals of bread, water and a few vegetables, practicing an ascetical life.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Philip Neri: Apostle of Rome</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">The Evangelist of Rome</h3>
              <p className="mb-6">
                In 1535, Philip began studying theology and philosophy at the Sapienza and at St. Augustine's monastery. Although he was considered a "promising scholar," after three years of studies, Philip gave up any thought of ordination. He set out to help the poor people of Rome and to re-evangelize the city. Sadly, Rome had lost its first love and its inhabitants were no longer really living as Christians. He began talking to people on street corners and in public squares; he made acquaintances in places where people commonly gathered.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Joyful Missionary</h3>
              <p className="mb-6">
                Philip, compared to Socrates, had a knack for starting up conversations and leading his listeners to consider a new and better way of life, the Christian Way. He easily caught others' attention with his warm personality and incredible sense of humor. He encouraged groups of people to gather for discussions, studies, prayer and the enjoyment of music. His customary question was always, "Well, brothers, when shall we begin to do good?" Losing no time in converting good conversation to good actions, Philip would lead his followers to hospitals to wait on the sick or to the Church, to pray to and encounter Jesus Christ.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Mystical Experience</h3>
              <p className="mb-6">
                In 1544, on the eve of Pentecost, Philip saw what appeared to be a globe of fire. It is said the fire entered his mouth, causing Philip to feel his heart dilate. Philip was filled with such paroxysms of divine love that caused him to scream out, "Enough, enough, Lord, I can bear no more." Philip then discovered a swelling over his heart, though it caused him no pain. In 1548, with the help of his confessor, Father Persiano Rossa, Philip founded a confraternity for poor laymen to meet for spiritual exercises and service of the poor, the Confraternity of the Most Holy Trinity.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of the Oratorians</h3>
              <p className="mb-6">
                At 34-years-old, Philip had already accomplished so much, but his confessor was determined that his work would be more effective as a priest. Finally convinced, Philip was ordained to the diaconate and then to the priesthood on May 23, 1551. From there, Philip went to live with Father Rossa and other priests at San Girolamo and carried on his mission, but mostly through the confessional. Before sun up, until sun down, Philip spent hours sitting and listening to people of all ages. Sometimes Philip broke out informal discussions for those who desired to live a better life. He spoke to them about Jesus, the saints and the martyrs.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Oratory Movement</h3>
              <p>
                A large room was built above the church of San Girolamo to tend to Philip's growing number of pilgrims and other priests were called on to assist him. Philip and the priests were soon called the "Oratorians," because they would ring a bell to call the faithful in their "oratory." The foundation of the Congregation of the Priests of the Oratory would be laid a few years later with members who encouraged others to deepen their faith. Philip's rule for them was simple - share a common table and to perform spiritual exercises. Philip didn't want his followers to bind themselves to the life with a vow and he did not want them to denounce their property. The Congregation was officially approved by Pope Gregory XIII in 1575.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">May 26</div>
              <p className="text-gray-600">Feast of St. Philip Neri, Apostle of Rome</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Philip Neri is celebrated on May 26th, commemorating the day of his death in 1595. St. Philip Neri was beatified by Pope Paul V on May 11, 1615 and canonized by Pope Gregory XV on March 12, 1622. His canonization recognized his remarkable contribution to the renewal of the Church during the Counter-Reformation and his unique approach to evangelization through joy and friendship.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Philip Neri's remarkable joy and his role as the "Apostle of Rome." His feast day serves as a reminder of the importance of spreading the Gospel with joy, humor, and genuine friendship. Many Oratorian communities around the world celebrate this day with special Masses, musical performances, and gatherings that reflect Philip's love for music and community. The day emphasizes the importance of joy in the Christian life and the power of personal relationships in evangelization.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Philip Neri for his intercession in matters of joy, evangelization, and spiritual renewal. Many people also pray for the Oratorian communities, for those working in evangelization, and for the grace to spread the Gospel with joy and humor. His example encourages us to be joyful witnesses of Christ's love and to use our natural gifts and personality to bring others closer to God.
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
                  <li>• <strong>Rome:</strong> Patron of the Eternal City</li>
                  <li>• <strong>US Special Forces:</strong> Patron of military personnel</li>
                  <li>• <strong>Humor and Joy:</strong> Patron of those who spread joy</li>
                  <li>• <strong>Evangelization:</strong> Patron of missionaries</li>
                  <li>• <strong>Confessors:</strong> Patron of spiritual directors</li>
                  <li>• <strong>Oratorians:</strong> Patron of his religious order</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Spiritual Renewal:</strong> Helper in Church reform</li>
                  <li>• <strong>Friendship:</strong> Patron of building relationships</li>
                  <li>• <strong>Music Ministry:</strong> Helper for musicians</li>
                  <li>• <strong>Youth Ministry:</strong> Patron of young people</li>
                  <li>• <strong>Conversion:</strong> Helper for those seeking faith</li>
                  <li>• <strong>Joyful Service:</strong> Patron of cheerful ministry</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Philip Neri</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Philip Neri, Apostle of Rome and patron of joy, who with your cheerful 
                    spirit and warm personality brought so many souls to Christ, help us to spread the Gospel 
                    with joy and genuine friendship. Through your intercession, may we have the courage to 
                    reach out to others with love and humor, and may we always remember to ask, 'When shall 
                    we begin to do good?' Help us to be joyful witnesses of Christ's love in our daily lives. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Philip Neri, pray for us!"
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
            <Link href="/saints/st-francis-xavier" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis Xavier
                </h3>
                <p className="text-gray-700 text-sm">
                  Jesuit missionary who inspired Philip's missionary zeal.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-charles-borromeo" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Charles Borromeo
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
                  Founder of the Jesuits and friend of Philip Neri.
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