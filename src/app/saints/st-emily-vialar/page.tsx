import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Emily de Vialar - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Emily de Vialar, foundress of the Sisters of St. Joseph of the Apparition.',
  keywords: [
    'st emily de vialar',
    'saint emily de vialar',
    'emily de vialar biography',
    'st emily de vialar feast day',
    'st emily de vialar patron saint',
    'sisters of st joseph of the apparition',
    'french saint',
    'religious foundress',
    'catholic saints',
    'june 17 feast day'
  ],
  openGraph: {
    title: 'St. Emily de Vialar - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Emily de Vialar, foundress of the Sisters of St. Joseph of the Apparition.',
    url: 'https://catholicbibleonline.com/saints/st-emily-vialar',
  },
  twitter: {
    title: 'St. Emily de Vialar - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Emily de Vialar, foundress of the Sisters of St. Joseph of the Apparition.',
  }
}

export default function StEmilyVialarPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">⛪</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Emily de Vialar
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Virgin, Foundress of the Sisters of St. Joseph "of the Apparition"
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Emily de Vialar</span>
          </nav>

          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">June 17</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Virgin</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Emily de Vialar</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Anne Marguerite Adelaide Emily de Vialar was the eldest child and only daughter of Baron James Augustine de Vialar 
                and his wife Antoinette, daughter of that Baron de Portal who was physician-in-ordinary to Louis XVIII and Charles X of France. 
                She was born at Gaillac in Languedoc in 1797.
              </p>
              
              <p className="mb-6">
                At the age of fifteen she was removed from school in Paris to be companion to her father, now a widower, at Gaillac; 
                but unhappily, differences arose between them because of Emily's refusal to consider a suitable marriage.
              </p>
              
              <p className="mb-6">
                For fifteen years, Emily was the good angel of Gaillac, devoting herself to the care of children neglected by their parents 
                and to the help of the poor generally. In 1832, her maternal grandfather died, leaving her a share of his estate 
                which was a quite considerable fortune.
              </p>
              
              <p className="mb-6">
                She bought a large house at Gaillac and took possession of it with three companions. Others joined them and three months later, 
                the archbishop authorized the Abbe to clothe twelve postulants with the religious habit. They called themselves 
                the Congregation of Sisters of St. Joseph of the Apparition.
              </p>
              
              <p>
                Their work was to be the care of the needy, especially the sick, and the education of children. In 1835, she made her profession 
                with seventeen other sisters, and received formal approval for the rule of the Congregation.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Emily de Vialar: Foundress and Servant of the Poor</h2>
          
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Emily de Vialar represents the power of a single woman's determination to serve God and the poor. Her life demonstrates 
                that even in the face of family opposition and personal suffering, one can achieve great things for the Kingdom of God 
                through faith, perseverance, and love.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Foundress of a Religious Congregation</h3>
              <p className="mb-6">
                The foundress, in the course of twenty-two years, saw her Congregation grow from one to some forty houses, 
                many of which she had founded in person. Her vision of serving the needy, especially the sick, and educating children 
                continues to inspire the Sisters of St. Joseph of the Apparition today.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Model of Charity and Service</h3>
              <p className="mb-6">
                For fifteen years before founding her congregation, Emily was known as "the good angel of Gaillac," caring for neglected children 
                and helping the poor. Her commitment to charity, even at the cost of her own health, shows her deep love for Christ 
                in the least of His brothers and sisters.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Witness to Perseverance</h3>
              <p>
                The physical energy and achievements of St. Emily de Vialar are the more remarkable in that from her youth she was troubled by hernia, 
                contracted characteristically in doing a deed of charity. Despite her suffering, she continued her mission until her death, 
                leaving her daughters with the simple but profound testament: "Love one another."
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">June 17</div>
              <p className="text-gray-600">Feast of St. Emily de Vialar, Virgin</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                St. Emily de Vialar is celebrated on June 17th, commemorating her life of service and dedication to God. 
                This feast day is particularly significant for the Sisters of St. Joseph of the Apparition and for all who work 
                in healthcare and education.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p className="mb-6">
                On this day, many Catholics pray for those working in healthcare, for educators, and for those serving the poor. 
                It's also a day to celebrate the contributions of women religious and to give thanks for their service to the Church.
              </p>
              
              <h3 className="text-xl font-semibold text-black mb-4">Prayer and Devotion</h3>
              <p>
                The feast day is an excellent time to pray for the sick, for those in need, and to ask for St. Emily's intercession 
                in serving others with love and dedication.
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
                  <li>• <strong>Healthcare Workers:</strong> Patron of those caring for the sick</li>
                  <li>• <strong>Educators:</strong> Patron of teachers and educational workers</li>
                  <li>• <strong>Religious Foundresses:</strong> Patron of women founding religious orders</li>
                  <li>• <strong>Charitable Works:</strong> Patron of those serving the poor</li>
                  <li>• <strong>Neglected Children:</strong> Patron of children in need</li>
                  <li>• <strong>Women Religious:</strong> Patron of sisters and nuns</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Family Reconciliation:</strong> Helper for healing family conflicts</li>
                  <li>• <strong>Perseverance in Suffering:</strong> Patron of those enduring illness</li>
                  <li>• <strong>Religious Vocations:</strong> Helper for those discerning religious life</li>
                  <li>• <strong>Charitable Organizations:</strong> Patron of groups serving the needy</li>
                  <li>• <strong>Overcoming Opposition:</strong> Helper for those facing resistance</li>
                  <li>• <strong>Love and Unity:</strong> Patron of communities seeking harmony</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Emily de Vialar</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Emily de Vialar, you who devoted your life to serving the poor and educating children, help us to see Christ 
                    in all those in need. Intercede for healthcare workers, educators, and all those who serve the least among us.
                  </p>
                  <p>
                    As you overcame family opposition and physical suffering to follow God's call, help us to persevere in our own 
                    challenges and to remain faithful to our vocations. Teach us to love one another as you instructed your daughters, 
                    and to serve others with the same dedication and love that you showed. Amen."
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Emily de Vialar, pray for us!"
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
                  Patron of the congregation she founded, the Sisters of St. Joseph of the Apparition.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-vincent-de-paul" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Vincent de Paul
                </h3>
                <p className="text-gray-700 text-sm">
                  French saint known for serving the poor, founder of charitable organizations.
                </p>
              </div>
            </Link>

            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  American foundress of religious order, dedicated to education and charity.
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