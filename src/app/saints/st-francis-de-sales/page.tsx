import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Francis de Sales - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Francis de Sales, patron saint of writers, journalists, and spiritual direction.',
  keywords: [
    'st francis de sales',
    'saint francis de sales',
    'francis de sales patron saint',
    'writers patron saint',
    'journalists patron saint',
    'spiritual direction',
    'devout life',
    'catholic writers',
    'gentle saint',
    'january 24 feast day',
    'catholic saints',
    'doctor of the church'
  ],
  openGraph: {
    title: 'St. Francis de Sales - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis de Sales, patron saint of writers, journalists, and spiritual direction.',
    url: 'https://catholicbibleonline.com/saints/st-francis-de-sales',
  },
  twitter: {
    title: 'St. Francis de Sales - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Francis de Sales, patron saint of writers, journalists, and spiritual direction.',
  }
}

export default function StFrancisDeSalesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span className="mx-2">→</span>
          <Link href="/saints" className="hover:text-blue-600">Saints</Link>
          <span className="mx-2">→</span>
          <span className="text-gray-800">St. Francis de Sales</span>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Francis de Sales
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Patron Saint of Writers, Journalists, and Spiritual Direction
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 24</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✍️</div>
              <div className="text-sm text-gray-600">Writers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Gentleness</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Francis de Sales</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Francis de Sales was born to a noble family at Chateau de Sales in the Kingdom of Savoy near Geneva, Switzerland on August 21, 1567. He was a Bishop and Doctor of the Church, known for his gentle approach to spirituality and his famous book "Introduction to the Devout Life."
              </p>
              <p className="mb-6">
                Francis was both intelligent and gentle. From a very early age, he desired to serve God. He knew for years he had a vocation to the priesthood, but kept it from his family. His father wanted him to enter a career in law and politics. In 1580, Francis attended the University of Paris, and at 24-years-old, he received his doctorate in law at the University of Padua.
              </p>
              <p>
                God made his will clear to Francis one day while he was riding. Francis fell from his horse three times that day. Every time he fell, the sword came out of the scabbard, and every time it came out, the sword and scabbard came to rest on the ground in the shape of the Christian cross. After much discussion and disagreement from his father, Francis was ordained to the priesthood and elected provost of the Diocese of Geneva in 1593.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Francis de Sales: The Gentle Saint</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Francis de Sales left a legacy of gentleness, patience, and the universal call to holiness. His most famous book, "Introduction to the Devout Life," was written for ordinary lay people in 1608, not just the clergy and religious. It became an instant success all over Europe.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Gentleness</h3>
              <p className="mb-6">
                During the Protestant reformation, Francis lived close to Calvinist territory. He decided to lead an expedition to bring the 60,000 Calvinists back to the Catholic Church. For three years, he trudged through the countryside, had doors slammed in his face and rocks thrown at him. His unusual patience kept him working, and he found a way to get under the door by writing little pamphlets to explain true Catholic doctrine.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Universal Call to Holiness</h3>
              <p>
                Francis insisted that every Christian was called to holiness and sanctity, lived within their own state in life. He laid the groundwork for the teaching of the Second Vatican Council on what is now called the universal call to holiness. He gave spiritual direction to lay people who were living real lives in the real world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 24</div>
              <p className="text-gray-600">Feast of St. Francis de Sales</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Francis de Sales is celebrated on January 24, the date of his death in 1622. It is a time to pray for writers, journalists, spiritual directors, and to be inspired by his example of gentleness and patience.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Catholic writers, journalists, and spiritual directors celebrate this day with special prayers and readings from his works. Many people read from "Introduction to the Devout Life" and reflect on his teachings about holiness in daily life.
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
                  <li>• <strong>Writers:</strong> Patron of Catholic writers and authors</li>
                  <li>• <strong>Journalists:</strong> Patron of journalists and the press</li>
                  <li>• <strong>Deaf:</strong> Patron of the deaf and hearing impaired</li>
                  <li>• <strong>Spiritual Directors:</strong> Patron of spiritual direction</li>
                  <li>• <strong>Adult Education:</strong> Patron of adult learning</li>
                  <li>• <strong>Catholic Press:</strong> Patron of Catholic media</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Gentleness:</strong> Patron of gentle communication</li>
                  <li>• <strong>Patience:</strong> Helper in difficult situations</li>
                  <li>• <strong>Holiness in Daily Life:</strong> Patron of lay spirituality</li>
                  <li>• <strong>Writing Projects:</strong> Patron of Christian writing</li>
                  <li>• <strong>Spiritual Growth:</strong> Helper in spiritual development</li>
                  <li>• <strong>Family Life:</strong> Patron of holy families</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Francis de Sales</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "O gentle St. Francis de Sales, patron of writers and journalists, intercede for all who work with words and ideas. Help us to communicate with gentleness and truth, following your example of patience and love."
                  </p>
                  <p>
                    St. Francis de Sales, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Francis de Sales, patron of writers and spiritual direction, pray for us!"
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
            <Link href="/saints/st-jane-de-chantal" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Jane de Chantal
                </h3>
                <p className="text-gray-700 text-sm">
                  Co-founder of the Visitation Order with St. Francis de Sales.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-therese" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Thérèse of Lisieux
                </h3>
                <p className="text-gray-700 text-sm">
                  The Little Flower, known for her "Little Way" of spiritual childhood.
                </p>
              </div>
            </Link>
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