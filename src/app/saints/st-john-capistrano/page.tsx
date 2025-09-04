import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John of Capistrano - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John of Capistrano, Franciscan preacher and defender of Christendom against the Turks.',
  keywords: [
    'st john capistrano',
    'saint john capistrano',
    'st john capistrano biography',
    'st john capistrano feast day',
    'st john capistrano patron saint',
    'catholic saints',
    'october 23 feast day',
    'franciscan saints',
    'crusade saints',
    'preacher saints'
  ],
  openGraph: {
    title: 'St. John of Capistrano - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of Capistrano, Franciscan preacher and defender of Christendom against the Turks.',
    url: 'https://catholicbibleonline.com/saints/st-john-capistrano',
  },
  twitter: {
    title: 'St. John of Capistrano - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John of Capistrano, Franciscan preacher and defender of Christendom against the Turks.',
  }
}

export default function StJohnCapistranoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⚔️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John of Capistrano
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Franciscan Preacher, Defender of Christendom, Patron of Jurists
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John of Capistrano</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 23</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Preacher</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John of Capistrano</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint John of Capistrano was born in 1385 at Capistrano, Italy, the son of a 
                former German knight who had settled in that city. His early life was marked 
                by academic excellence and a promising career in law, but God had other plans 
                for this remarkable man. John's journey from successful lawyer to Franciscan 
                preacher and defender of Christendom would become one of the most extraordinary 
                stories of conversion and service in the history of the Church.
              </p>
              
              <p className="mb-6">
                John studied law at the prestigious University of Perugia and quickly established 
                himself as a successful lawyer, practicing in the courts of Naples. His legal 
                skills and administrative abilities were so impressive that King Ladislas of 
                Naples appointed him governor of Perugia, a position of great responsibility 
                and honor. However, during a war with a neighboring town, John was betrayed 
                and imprisoned, an experience that would prove to be a turning point in his life.
              </p>
              
              <p className="mb-6">
                Upon his release from prison, John experienced a profound conversion. In 1416, 
                at the age of thirty-one, he entered the Franciscan community at Perugia, 
                leaving behind his successful career and worldly ambitions. This dramatic 
                change of life demonstrates the power of God's grace to transform even the 
                most accomplished individuals and redirect their talents for the service of 
                the Kingdom.
              </p>
              
              <p className="mb-6">
                John and St. James of the March were fellow students under the guidance of 
                St. Bernardine of Siena, one of the most important Franciscan reformers of 
                the time. Under Bernardine's influence, John was inspired to institute the 
                devotion to the Holy Name of Jesus and His Mother, a devotion that would 
                become central to Franciscan spirituality and spread throughout Europe.
              </p>
              
              <p>
                John began his brilliant preaching apostolate as a deacon in 1420, and after 
                his ordination, he traveled extensively throughout Italy, Germany, Bohemia, 
                Austria, Hungary, Poland, and Russia. His preaching focused on penance and 
                moral reform, and he established numerous communities of Franciscan renewal. 
                His ability to communicate effectively across different cultures and languages 
                made him one of the most successful preachers of his time.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John of Capistrano: Defender of Christendom</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Defender Against the Turks</h3>
              <p className="mb-6">
                St. John's most dramatic legacy is his role in defending Christendom against 
                the Ottoman Turks. When Mohammed II was threatening Vienna and Rome in 1456, 
                Pope Callistus III commissioned the seventy-year-old John to preach and lead 
                a crusade against the invading Turks. Marching at the head of seventy thousand 
                Christians, John achieved a remarkable victory in the great battle of Belgrade, 
                a victory that helped to preserve Christian Europe from Turkish conquest.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Conversion and Service</h3>
              <p className="mb-6">
                John's life serves as a powerful example of how God can use our natural talents 
                and abilities for His purposes. His legal training and administrative experience 
                proved invaluable in his later work as a preacher and organizer. His dramatic 
                conversion from successful lawyer to Franciscan friar demonstrates that it's 
                never too late to respond to God's call and that our past experiences can be 
                transformed into tools for evangelization.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">International Preacher</h3>
              <p className="mb-6">
                John's extensive travels throughout Europe as a preacher demonstrate his 
                commitment to spreading the Gospel and reforming the Church. His ability to 
                communicate effectively across different cultures and languages made him a 
                truly international figure in the Church. His preaching focused on penance 
                and moral reform, addressing the spiritual needs of the people in a time 
                of great social and religious upheaval.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Franciscan Reformer</h3>
              <p>
                As a student of St. Bernardine of Siena, John was deeply involved in the 
                Franciscan reform movement. He helped to establish numerous communities of 
                Franciscan renewal and promoted the devotion to the Holy Name of Jesus, 
                a devotion that would become central to Franciscan spirituality. His work 
                helped to revitalize the Franciscan Order and strengthen its commitment 
                to poverty, preaching, and service to the poor.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 23</div>
              <p className="text-gray-600">Feast of St. John of Capistrano</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John of Capistrano is celebrated on October 23rd, 
                commemorating his life of preaching, reform, and defense of the faith. 
                This date serves as a reminder of the importance of courageous witness 
                to Christ and the defense of Christian values in the face of opposition.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Historical Context</h3>
              <p className="mb-6">
                John's feast day is particularly significant in the context of the 
                fifteenth century, a time when the Church was facing both internal 
                challenges and external threats from the Ottoman Empire. His victory 
                at Belgrade in 1456 was a crucial moment in European history, helping 
                to preserve Christian civilization from Turkish conquest. His feast 
                day reminds us of the importance of defending our faith and values 
                when they are under attack.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Modern Relevance</h3>
              <p>
                In today's world, St. John's feast day serves as a reminder of the 
                importance of courageous witness to Christ and the defense of Christian 
                values. It's a day to reflect on how we can use our talents and abilities 
                in the service of the Gospel, and to remember that it's never too late 
                to respond to God's call. His example encourages us to be bold in our 
                faith and to stand up for what is right, even when it requires personal 
                sacrifice.
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
                  <li>• <strong>Jurists:</strong> Patron of lawyers and legal professionals</li>
                  <li>• <strong>Military Chaplains:</strong> Patron of those serving in the military</li>
                  <li>• <strong>Preachers:</strong> Patron of those who proclaim the Gospel</li>
                  <li>• <strong>Italy:</strong> Patron of his homeland</li>
                  <li>• <strong>Hungary:</strong> Patron of the country where he died</li>
                  <li>• <strong>Belgrade:</strong> Patron of the city he defended</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Conversion:</strong> Help in responding to God's call</li>
                  <li>• <strong>Courage:</strong> Strength to defend the faith</li>
                  <li>• <strong>Preaching:</strong> Success in proclaiming the Gospel</li>
                  <li>• <strong>Legal Justice:</strong> Help for those working in law</li>
                  <li>• <strong>Military Service:</strong> Protection for those serving in armed forces</li>
                  <li>• <strong>Late Vocations:</strong> Guidance for those called later in life</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John of Capistrano</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O glorious St. John of Capistrano, defender of Christendom and patron 
                    of jurists, you who left behind a successful career to serve God as a 
                    Franciscan preacher, intercede for us that we may have the courage to 
                    respond to God's call in our lives.
                  </p>
                  <p className="mb-4">
                    Help us to use our talents and abilities in the service of the Gospel, 
                    and teach us to be bold witnesses to Christ even when it requires 
                    personal sacrifice. May we, like you, be willing to defend our faith 
                    and values when they are under attack.
                  </p>
                  <p>
                    Guide all those who work in the legal profession to seek justice and 
                    truth, and help us to be courageous in standing up for what is right. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Prayer for Jurists</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John of Capistrano, patron of jurists, intercede for all those 
                    who work in the legal profession.
                  </p>
                  <p>
                    Help them to seek justice and truth, to defend the rights of the 
                    vulnerable, and to use their legal skills in service of the common 
                    good. May they be guided by Christian principles in their work. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John of Capistrano, defender of Christendom, pray for us!"
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
            <Link href="/saints/st-francis" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan Order, whose spirituality John followed and promoted.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-bernardine" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Medieval Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Bernardine of Siena
                </h3>
                <p className="text-gray-700 text-sm">
                  John's mentor and teacher, who inspired the devotion to the Holy Name of Jesus.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-joan-arc" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Warrior Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Joan of Arc
                </h3>
                <p className="text-gray-700 text-sm">
                  Another saint who defended Christendom, leading French armies to victory.
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