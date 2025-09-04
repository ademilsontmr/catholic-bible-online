import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anthony of Padua - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Anthony of Padua, Franciscan friar known for his powerful preaching and miracles.',
  keywords: [
    'st anthony of padua',
    'saint anthony',
    'st anthony biography',
    'st anthony feast day',
    'st anthony patron saint',
    'june 13 feast day',
    'doctor saints',
    'franciscan saints'
  ],
  openGraph: {
    title: 'St. Anthony of Padua - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anthony of Padua, Franciscan friar known for his powerful preaching.',
    url: 'https://catholicbibleonline.com/saints/st-anthony',
  },
  twitter: {
    title: 'St. Anthony of Padua - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Anthony of Padua, Franciscan friar known for his powerful preaching.',
  }
}

export default function StAnthonyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📚</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anthony of Padua
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Franciscan Friar, Doctor of the Church, Wonder Worker
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Anthony of Padua</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 13</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Scholar</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Anthony of Padua</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Anthony of Padua was born Fernando Martins de Bulhões in Lisbon, Portugal, in 1195. 
                He came from a wealthy family and received an excellent education, joining the Augustinian 
                Canons at the age of 15. His life took a dramatic turn when he encountered the Franciscan 
                friars who were martyred in Morocco.
              </p>
              
              <p className="mb-6">
                Inspired by their courage and faith, Fernando joined the Franciscan order and took the name 
                Anthony. He hoped to preach to the Muslims in Morocco, but illness forced him to return to 
                Europe. On his journey back, his ship was blown off course and landed in Sicily.
              </p>
              
              <p className="mb-6">
                Anthony's true calling was revealed at an ordination ceremony in Forlì, Italy. When no one 
                was prepared to give the sermon, Anthony was asked to speak. His eloquence and knowledge of 
                Scripture amazed everyone present. From that moment, he became known as a powerful preacher 
                and teacher.
              </p>
              
              <p className="mb-6">
                Anthony traveled throughout Italy and France, preaching to large crowds and performing many 
                miracles. He was known for his ability to explain complex theological concepts in simple terms 
                that ordinary people could understand. His sermons were so powerful that even fish were said 
                to gather to listen when he preached by the sea.
              </p>
              
              <p>
                St. Anthony died in Padua, Italy, on June 13, 1231, at the age of 36. He was canonized less 
                than a year after his death by Pope Gregory IX, who called him the "Ark of the Testament" 
                and the "Repository of Holy Scripture." In 1946, Pope Pius XII declared him a Doctor of the Church.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Anthony: Wonder Worker</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Anthony's legacy as a Doctor of the Church is marked by his profound knowledge of Scripture 
                and his ability to communicate God's truth with clarity and power. His writings and sermons 
                continue to inspire theologians and preachers today, showing how to make complex spiritual 
                truths accessible to all people.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Wonder Worker</h3>
              <p className="mb-6">
                Throughout his life, St. Anthony performed numerous miracles, earning him the title "Wonder Worker." 
                These miracles included healing the sick, raising the dead, and even making a mule kneel before 
                the Blessed Sacrament. His miraculous intercession continues to be sought by millions of people 
                around the world.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Franciscan Spirituality</h3>
              <p className="mb-6">
                As a Franciscan friar, St. Anthony embodied the ideals of poverty, humility, and service to others. 
                He showed how to combine deep learning with simple living, and how to use one's gifts and talents 
                for the glory of God and the service of others.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Patron of the Lost</h3>
              <p>
                St. Anthony's most popular legacy is his role as the patron saint of lost items. This devotion 
                began when a novice stole his psalter, and Anthony prayed for its return. The thief was so 
                frightened by a vision that he returned the book. Today, people around the world pray "Tony, 
                Tony, look around, something's lost and must be found" when they lose something.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 13</div>
              <p className="text-gray-600">Feast of St. Anthony of Padua</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Anthony is celebrated on June 13th, the anniversary of his death. This date 
                falls during the summer months, making it a popular time for outdoor celebrations and processions 
                in many countries, especially Italy and Portugal.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Anthony's feast day, many people participate in the "Blessing of the Lilies" ceremony, 
                where lilies are blessed and distributed to the faithful. In some places, there are special 
                processions with his statue, and people often give bread to the poor in his honor, as he was 
                known for his care for the needy.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Novena to St. Anthony, the Prayer to St. Anthony, 
                or to make the traditional "Thirteen Tuesdays" devotion. Many people also visit churches 
                dedicated to St. Anthony or make pilgrimages to his tomb in Padua.
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
                  <li>• <strong>Lost Items and Missing Objects:</strong> Patron of finding what is lost</li>
                  <li>• <strong>Travelers and Pilgrims:</strong> Guardian of those on journeys</li>
                  <li>• <strong>Poor and Needy:</strong> Protector of the impoverished</li>
                  <li>• <strong>Fishermen and Mariners:</strong> Patron of those who work at sea</li>
                  <li>• <strong>Pregnant Women:</strong> Protector of expectant mothers</li>
                  <li>• <strong>Horses and Donkeys:</strong> Patron of animals</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Finding Lost Items:</strong> Helper in recovering lost things</li>
                  <li>• <strong>Safe Travel:</strong> Protector during journeys</li>
                  <li>• <strong>Financial Help:</strong> Patron of financial assistance</li>
                  <li>• <strong>Academic Success:</strong> Helper in studies and learning</li>
                  <li>• <strong>Preaching and Teaching:</strong> Patron of evangelization</li>
                  <li>• <strong>Conversion of Sinners:</strong> Patron of repentance</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Anthony</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. Anthony, gentle and powerful in your help, your love for God and charity 
                    for His creatures made you worthy, when on earth, to possess miraculous powers. Miracles 
                    waited on your word, which you were ever ready to speak for those in trouble or anxiety.
                  </p>
                  <p className="mb-4">
                    Encouraged by this thought, I implore you to obtain for me the favor I seek in this novena. 
                    The answer to my prayer may require a miracle. Even so, you are the saint of miracles.
                  </p>
                  <p>
                    O gentle and loving St. Anthony, whose heart was ever full of human sympathy, whisper my 
                    petition into the ears of the sweet Infant Jesus, who loved to be folded in your arms, 
                    and the gratitude of my heart will ever be yours. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Traditional Prayer for Lost Items</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Tony, Tony, look around, something's lost and must be found!"
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Anthony of Padua, pray for us!"
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