import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gregory the Great - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gregory the Great, Pope and Doctor of the Church.',
  keywords: [
    'st gregory the great',
    'saint gregory the great',
    'st gregory the great biography',
    'st gregory the great feast day',
    'st gregory the great patron saint',
    'doctor of the church',
    'september 3 feast day',
    'catholic saints',
    'gregorian chant'
  ],
  openGraph: {
    title: 'St. Gregory the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gregory the Great, Pope and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-gregory-the-great',
  },
  twitter: {
    title: 'St. Gregory the Great - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gregory the Great, Pope and Doctor of the Church.',
  }
}

export default function StGregoryTheGreatPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🎵</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gregory the Great
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pope, Doctor of the Church, Father of Gregorian Chant
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gregory the Great</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">September 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎵</div>
              <div className="text-sm text-gray-600">Music</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gregory the Great</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Pope Saint Gregory I, also known as the Great, was the Pope of the Catholic Church between 590 and 604 AD. Gregory was born around 540 in Rome. The exact date of his birth is unknown. Although the Western Roman Empire had collapsed long before his birth, many ancient Roman families still commanded great wealth and influence in the city. Gregory was born into one such family. His great-great-grandfather was Pope Felix III who reigned from 483 to 492.
              </p>
              
              <p className="mb-6">
                His father was named Gordianus, and he was a senator and a Prefect of Rome. Gordianus also held a position in the Church with the title of Regionarius, but there are no records from the time which describe the post. Gregory's mother was Silvia, also from a noble family. Silvia's sister (Gregory's aunt), Pateria are both recognized as saints in the Catholic and Orthodox churches. Gregory had a brother, but nothing is recorded, neither his name or his fate.
              </p>
              
              <p className="mb-6">
                When Gregory was just two years old in 542, the Plague of Justinian swept through the region. This plague was caused by a now-extinct strain of Yersinia Pestis, more commonly known as the Black Death. The plague was the most severe outbreak of deadly disease the world had ever known and remained the worst such incident until the Black Death in the 14th century. About a third of the population in Italy was wiped out by the disease.
              </p>
              
              <p className="mb-6">
                In addition to disease, the barbarian Ostrogoths sacked Rome in 546. The Franks attempted an invasion in 554. Both of these incursions were short lived. It is unclear how these massive events impacted Gregory's development as a child, but it is thought his family retreated to Sicily during part of that time. Peace followed in Italy after these upheavals.
              </p>
              
              <p>
                Gregory was well educated and excelled in all his studies. He also became an expert in law. He excelled so much he became the Prefect of Rome, just as his father had been. Gregory was only 33 years old. After Gregory's father had died, Gregory had the family villa in Rome converted into a monastery. Today the monastery still stands as the San Gregorio Magno al Celio. This famous monastery fell into ruin in the following centuries but was restored during the 17th and 18th centuries.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gregory the Great: First Medieval Pope</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Missionary Work and Evangelization</h3>
              <p className="mb-6">
                Pope Gregory was famous for the emphasis he put on missionary work. He sent many people out to bring many to Jesus and into the Church. Anglo-Saxon Britain was, at that time, still on the frontier of Christendom. It was Pope Gregory who dispatched St. Augustine (of Canterbury) to Kent in 597 (not to be confused with St. Augustine of Hippo). This missionary effort would eventually lead to the Christianization of England and establish the Church's presence in the British Isles.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Reforms and Gregorian Chant</h3>
              <p className="mb-6">
                Pope Gregory made many changes to the Mass, some of which remain today. The position of the Our Father in the Mass remains where Pope Gregory placed it. Pope Gregory may have also established "cantus planus," known in English as plainchant. Most today know this style of singing as Gregorian Chant. The melodious, monophonic music is known throughout the Church and closely associated with medieval monasteries. Gregorian chant gives us the oldest music we still have in the original form, some dating to the centuries just after the death of Gregory.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Service to the Poor and Charity</h3>
              <p className="mb-6">
                Pope Gregory was well known for his alms to the poor, and he gave quite generously of the riches donated to the Church by the wealthy people of Rome. Everything from money to land was given to the poor in some fashion. He made clear to his subordinates that their duty was to relieve the distress faced by the poor. He ordered his clergy to go out into the streets to find and care for the poor in person. Any clergy who were unwilling to go into the streets and help the poor were replaced.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">The Great Famine and Church Leadership</h3>
              <p className="mb-6">
                When a famine struck Rome in the 590s, Pope Gregory ordered the Church to use its assets to feed the poor. At that time, the Church controlled nearly two thousand square miles of land, overseen by the clergy and used to generate income. Now, instead of selling the produce of the land, Pope Gregory ordered it shipped to Rome and given away for free. In this way, he saved thousands of people from certain death. Pope Gregory himself refused to eat until his monks returned from their work of handing out food. He also made certain to dine with a dozen poor people at each meal.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Establishment of Church Authority</h3>
              <p>
                Because of his great respect for the poor, it was Pope Gregory and the Church that became the most respected and obeyed force in Rome and across Italy. From the time of Gregory onwards, the people looked to the Church for government rather than the distant and indifferent emperors in Constantinople. Gregory is widely considered to be the first medieval pope, and he was a prolific writer. He emphasized the aspect of service to the poor for deacons and made clear he preferred the monastic life, referring to himself as a servant of God.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">September 3</div>
              <p className="text-gray-600">Feast of St. Gregory the Great, Pope and Doctor of the Church</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gregory the Great is celebrated on September 3rd, commemorating his death in 604 AD. Originally celebrated on March 12th, the Second Vatican Council moved his feast day to September 3rd so it would not fall during Lent, when there are no obligatory memorials. St. Gregory was immediately proclaimed a saint by popular acclaim upon his death, recognizing his extraordinary contributions to the Church and his exemplary life of service.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, the Church honors St. Gregory's remarkable contributions to liturgy, missionary work, and pastoral care. His feast day serves as a reminder of the importance of service to the poor, the value of liturgical music, and the Church's mission to evangelize. Many parishes, especially those with strong musical traditions, celebrate this day with special Masses featuring Gregorian chant. The day also emphasizes the importance of the papacy and the Church's role in providing both spiritual and material care to the faithful.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray to St. Gregory for his intercession in matters of liturgical music, missionary work, and service to the poor. Many people also pray for the pope, for musicians and singers, and for those involved in education and teaching. His example encourages us to be generous in our charity, to appreciate the beauty of liturgical music, and to serve others with humility and dedication. St. Gregory's legacy reminds us that the Church must always be a servant to the poor and a beacon of hope in times of crisis.
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
                  <li>• <strong>Musicians:</strong> Patron of those who create music</li>
                  <li>• <strong>Singers:</strong> Patron of vocal performers</li>
                  <li>• <strong>Students:</strong> Patron of those in education</li>
                  <li>• <strong>Teachers:</strong> Patron of educators</li>
                  <li>• <strong>Popes:</strong> Patron of papal ministry</li>
                  <li>• <strong>Missionaries:</strong> Patron of evangelization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Liturgical Music:</strong> Helper for sacred music</li>
                  <li>• <strong>Charity:</strong> Patron of service to the poor</li>
                  <li>• <strong>Monastic Life:</strong> Helper for religious communities</li>
                  <li>• <strong>Church Leadership:</strong> Patron of ecclesiastical authority</li>
                  <li>• <strong>Famine Relief:</strong> Helper in times of hunger</li>
                  <li>• <strong>Gregorian Chant:</strong> Patron of plainchant</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gregory the Great</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Gregory the Great, Pope and Doctor of the Church, who through your 
                    wisdom and charity established the Church as a beacon of hope and service to the poor, 
                    help us to follow your example of humility and dedication to God's people. Through your 
                    intercession, may we have the courage to serve others with generosity, the wisdom to 
                    appreciate the beauty of liturgical music, and the zeal to spread the Gospel to all nations. 
                    Help us to be faithful servants of God and to always put the needs of the poor first. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Gregory the Great, pray for us!"
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
            <Link href="/saints/st-augustine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Augustine
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church and contemporary of Gregory.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-ambrose" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Ambrose
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great bishop and Doctor of the Church from Milan.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-jerome" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Doctor Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jerome
                </h3>
                <p className="text-gray-700 text-sm">
                  Another great Doctor of the Church and biblical scholar.
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