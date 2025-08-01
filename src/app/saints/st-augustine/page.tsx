import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Augustine of Hippo - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Bishop and Doctor of the Church, author of Confessions.',
  keywords: [
    'st augustine of hippo',
    'saint augustine',
    'st augustine biography',
    'st augustine feast day',
    'st augustine patron saint',
    'august 28 feast day',
    'doctor saints',
    'confessions augustine'
  ],
  openGraph: {
    title: 'St. Augustine of Hippo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Bishop and Doctor of the Church.',
    url: 'https://catholicbibleonline.com/saints/st-augustine',
  },
  twitter: {
    title: 'St. Augustine of Hippo - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Augustine of Hippo, Bishop and Doctor of the Church.',
  }
}

export default function StAugustinePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">📖</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Augustine of Hippo
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Bishop and Doctor of the Church, Theologian
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Augustine of Hippo</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">August 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📖</div>
              <div className="text-sm text-gray-600">Scholar</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Augustine of Hippo</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Augustine of Hippo was born Aurelius Augustinus on November 13, 354, in Thagaste, 
                North Africa (present-day Algeria). His mother, St. Monica, was a devout Christian, 
                while his father, Patricius, was a pagan who converted to Christianity on his deathbed. 
                Augustine received an excellent education in rhetoric and philosophy.
              </p>
              
              <p className="mb-6">
                As a young man, Augustine lived a life of pleasure and intellectual exploration. He 
                became a follower of Manichaeism, a dualistic religion, and later embraced skepticism. 
                He had a son, Adeodatus, with a woman he never married, and lived with her for many years.
              </p>
              
              <p className="mb-6">
                Augustine's conversion to Christianity came after years of spiritual searching and the 
                persistent prayers of his mother, St. Monica. In 386, while in Milan, he heard the 
                preaching of St. Ambrose and experienced a profound conversion. He famously heard a 
                child's voice saying, "Take and read," and opening the Bible at random, he read Romans 13:13-14.
              </p>
              
              <p className="mb-6">
                After his conversion, Augustine was baptized by St. Ambrose in 387. He returned to 
                Africa and was ordained a priest in 391. In 395, he became the Bishop of Hippo, a 
                position he held until his death. As bishop, he was a tireless preacher, writer, and 
                defender of the faith against various heresies.
              </p>
              
              <p>
                Augustine wrote extensively on theology, philosophy, and spirituality. His most famous 
                works include "Confessions," his spiritual autobiography, and "The City of God," a 
                monumental work on Christian philosophy. He died on August 28, 430, during the siege 
                of Hippo by the Vandals. He was canonized and declared a Doctor of the Church for his 
                profound contributions to Christian theology.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Augustine: Doctor of the Church</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Doctor of the Church</h3>
              <p className="mb-6">
                St. Augustine's most enduring legacy is his profound influence on Christian theology 
                and philosophy. As a Doctor of the Church, his writings have shaped Catholic thought 
                for over 1,500 years. His insights into grace, free will, original sin, and the nature 
                of God continue to be studied and debated by theologians and philosophers today.
              </p>
              
                             <h3 className="text-xl font-semibold text-black mb-4">Author of Confessions</h3>
               <p className="mb-6">
                 Augustine's "Confessions" is one of the most important spiritual autobiographies ever 
                 written. In this work, he honestly recounts his sinful youth, his intellectual journey, 
                 and his conversion to Christianity. The book's themes of sin, grace, and redemption 
                 have resonated with readers for centuries and continue to inspire people on their own 
                 spiritual journeys.
               </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Defender of the Faith</h3>
              <p className="mb-6">
                As Bishop of Hippo, Augustine was a tireless defender of Catholic orthodoxy against 
                various heresies, including Manichaeism, Donatism, and Pelagianism. His theological 
                writings helped establish the Church's understanding of grace, the sacraments, and 
                the nature of the Church itself. His work "The City of God" provided a Christian 
                response to the fall of Rome and established a framework for understanding history 
                from a Christian perspective.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion</h3>
              <p>
                Augustine's dramatic conversion from a life of sin and intellectual pride to a life 
                of holiness and service to God serves as a powerful example for all Christians. His 
                story shows that no one is beyond God's mercy and that even the most wayward souls 
                can be transformed by God's grace. His famous prayer, "Our hearts are restless until 
                they rest in You," continues to speak to the human longing for God.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">August 28</div>
              <p className="text-gray-600">Feast of St. Augustine of Hippo</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Augustine is celebrated on August 28th, the anniversary of his death. 
                This date falls during the summer months, a time when many people have more leisure to 
                read and reflect on his profound writings. The feast is celebrated as a memorial 
                throughout the Church, with special celebrations in places where he is particularly venerated.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On St. Augustine's feast day, many people read passages from his "Confessions" or other 
                works. Some churches hold special lectures or study sessions on his theology. Many 
                people also pray for the conversion of loved ones, as Augustine's mother, St. Monica, 
                prayed for his conversion for many years.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray the Prayer to St. Augustine, the Novena to 
                St. Augustine, or to read his writings. Many people also visit churches dedicated to 
                St. Augustine or make pilgrimages to places associated with his life and ministry.
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
                  <li>• <strong>Theologians and Scholars:</strong> Patron of intellectual pursuits</li>
                  <li>• <strong>Printers and Publishers:</strong> Patron of the printing industry</li>
                  <li>• <strong>Brewers and Beer Makers:</strong> Patron of brewers</li>
                  <li>• <strong>Bridge Builders:</strong> Patron of construction workers</li>
                  <li>• <strong>Sore Eyes:</strong> Patron of eye problems</li>
                  <li>• <strong>Theologians:</strong> Patron of theological studies</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion of Loved Ones:</strong> Helper in family conversions</li>
                  <li>• <strong>Intellectual Growth:</strong> Patron of learning and wisdom</li>
                  <li>• <strong>Theological Studies:</strong> Helper in understanding faith</li>
                  <li>• <strong>Overcoming Sin:</strong> Patron of repentance</li>
                  <li>• <strong>Finding Truth:</strong> Helper in seeking truth</li>
                  <li>• <strong>Restless Hearts:</strong> Patron of those seeking God</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Augustine</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O great St. Augustine, you were a great sinner who became a great saint. You know 
                    the weakness of human nature and the power of God's grace. Help me to understand 
                    that my heart is restless until it rests in God.
                  </p>
                  <p>
                    Pray for me that I may have the courage to turn away from sin and embrace the love of God. 
                    Help me to grow in wisdom and understanding, and to use my gifts for the glory of God 
                    and the service of others. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Famous Quote</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "Our hearts are restless until they rest in You."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Augustine of Hippo, pray for us!"
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