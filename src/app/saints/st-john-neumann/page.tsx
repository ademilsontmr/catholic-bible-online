import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Neumann - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Neumann, American bishop and founder of Catholic education in the United States.',
  keywords: [
    'st john neumann',
    'saint john neumann',
    'john neumann biography',
    'st john neumann feast day',
    'st john neumann patron saint',
    'american saint',
    'catholic education saint',
    'philadelphia bishop',
    'redemptorist saint',
    'catholic saints',
    'january 5 feast day'
  ],
  openGraph: {
    title: 'St. John Neumann - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Neumann, American bishop and founder of Catholic education in the United States.',
    url: 'https://catholicbibleonline.com/saints/st-john-neumann',
  },
  twitter: {
    title: 'St. John Neumann - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Neumann, American bishop and founder of Catholic education in the United States.',
  }
}

export default function StJohnNeumannPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Neumann
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            American Bishop, Founder of Catholic Education, and Redemptorist Missionary
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Neumann</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 5</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Bishop</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Neumann</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                This American saint was born in Bohemia in 1811. He was looking forward to being ordained in 1835 when the bishop 
                decided there would be no more ordinations. It is difficult for us to imagine now, but Bohemia was overstocked with priests. 
                John wrote to bishops all over Europe but the story was the same everywhere - no one wanted any more priests.
              </p>
              
              <p className="mb-6">
                But John didn't give up. He had learned English by working in a factory with English-speaking workers so he wrote to the bishops in America. 
                Finally, the bishop in New York agreed to ordain him. In order to follow God's call to the priesthood John would have to leave his home forever 
                and travel across the ocean to a new and rugged land.
              </p>
              
              <p className="mb-6">
                In New York, John was one of 36 priests for 200,000 Catholics. John's parish in western New York stretched from Lake Ontario to Pennsylvania. 
                His church had no steeple or floor but that didn't matter because John spent most of his time traveling from village to village, 
                climbing mountains to visit the sick, staying in garrets and taverns to teach, and celebrating the Mass at kitchen tables.
              </p>
              
              <p className="mb-6">
                Because of the work and the isolation of his parish, John longed for community and so joined the Redemptorists, 
                a congregation of priests and brothers dedicated to helping the poor and most abandoned.
              </p>
              
              <p>
                John was appointed bishop of Philadelphia in 1852. As bishop, he was the first to organize a diocesan Catholic school system. 
                A founder of Catholic education in this country, he increased the number of Catholic schools in his diocese from two to 100.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Neumann: Pioneer of Catholic Education</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. John Neumann represents the immigrant experience and the determination to follow God's call despite overwhelming obstacles. 
                His journey from Bohemia to America, his perseverance in seeking ordination, and his tireless missionary work demonstrate 
                that God's plans often require great sacrifice and trust.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Founder of Catholic Education</h3>
              <p className="mb-6">
                As the first bishop to organize a diocesan Catholic school system in the United States, St. John Neumann laid the foundation 
                for Catholic education in America. His vision of increasing Catholic schools from two to 100 in his diocese shows his 
                commitment to forming young minds in the faith.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Humility and Service</h3>
              <p className="mb-6">
                John never lost his love and concern for the people, something that may have bothered the elite of Philadelphia. 
                His willingness to travel in a manure wagon, his simple lifestyle with only one pair of shoes, and his ability to 
                learn multiple languages to serve diverse communities show his true pastoral heart.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Redemptorist Missionary</h3>
              <p>
                As a Redemptorist priest, St. John Neumann embodied the congregation's charism of serving the poor and most abandoned. 
                His missionary zeal, his dedication to the sacraments, and his tireless pastoral work continue to inspire priests 
                and religious today.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 5</div>
              <p className="text-gray-600">Feast of St. John Neumann, Bishop</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. John Neumann is celebrated on January 5th, the date of his death in 1860. This feast day is particularly 
                significant in the United States, especially in Philadelphia and among Catholic educators.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for Catholic schools, for immigrant communities, and for those discerning 
                priestly vocations. It's also a day to celebrate the contributions of immigrants to the American Church 
                and to give thanks for Catholic education.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for Catholic education, for immigrant families, and to ask 
                for St. John Neumann's intercession in following God's call despite obstacles.
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
                  <li>• <strong>Catholic Education:</strong> Patron of Catholic schools and educators</li>
                  <li>• <strong>Immigrants:</strong> Patron of immigrant communities</li>
                  <li>• <strong>Priestly Vocations:</strong> Patron of those discerning priesthood</li>
                  <li>• <strong>Philadelphia:</strong> Patron of the diocese he served</li>
                  <li>• <strong>Redemptorists:</strong> Patron of the congregation he joined</li>
                  <li>• <strong>Missionary Work:</strong> Patron of missionary priests</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Overcoming Obstacles:</strong> Helper for those facing difficulties</li>
                  <li>• <strong>Language Learning:</strong> Patron of those learning new languages</li>
                  <li>• <strong>Pastoral Ministry:</strong> Helper for priests and pastoral workers</li>
                  <li>• <strong>Humility:</strong> Patron of those seeking to serve humbly</li>
                  <li>• <strong>Perseverance:</strong> Helper for those pursuing their calling</li>
                  <li>• <strong>Diocesan Organization:</strong> Patron of diocesan administration</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Neumann</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "Saint John Neumann, you helped organize Catholic education in the United States. Please watch over all Catholic schools 
                    and help them be a model of Christianity in their actions as well as their words.
                  </p>
                  <p>
                    As an immigrant who overcame great obstacles to follow your priestly calling, help all those who face difficulties 
                    in pursuing their vocations. Intercede for Catholic educators, immigrant families, and all those who serve 
                    the Church with humility and dedication. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John Neumann, pray for us!"
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
            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  First American-born saint, founder of Catholic schools and the Sisters of Charity.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-frances-cabrini" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Frances Cabrini
                </h3>
                <p className="text-gray-700 text-sm">
                  Italian immigrant saint, patron of immigrants and founder of orphanages and schools.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-alfonsus-liguori" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Alphonsus Liguori
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Redemptorists, the congregation that St. John Neumann joined.
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