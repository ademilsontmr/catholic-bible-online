import { Metadata } from 'next'
import Link from 'next/link'
import ShareButton from '@/components/ShareButton'

export const metadata: Metadata = {
  title: 'St. Pope John Paul II - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Pope John Paul II, the beloved pontiff who served the Church for 27 years and was canonized in 2014.',
  keywords: [
    'st pope john paul ii',
    'saint pope john paul ii',
    'st john paul ii biography',
    'st john paul ii feast day',
    'st john paul ii patron saint',
    'catholic saints',
    'october 22 feast day',
    'pope john paul ii'
  ],
  openGraph: {
    title: 'St. Pope John Paul II - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pope John Paul II, the beloved pontiff who served the Church for 27 years.',
    url: 'https://catholicbibleonline.com/saints/st-pope-john-paul-ii',
    type: 'website',
    siteName: 'Catholic Bible Online',
  },
  twitter: {
    title: 'St. Pope John Paul II - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Pope John Paul II, the beloved pontiff who served the Church for 27 years.',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://catholicbibleonline.com/saints/st-pope-john-paul-ii',
  },
}

export default function StPopeJohnPaulIIPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👑</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Pope John Paul II
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Beloved Pontiff, Defender of Human Dignity
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Pope John Paul II</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">October 22</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Papacy</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Pope John Paul II</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Pope John Paul II (1920–2005) was the 264th Pope of the Catholic Church, serving from 1978 to 2005. Born Karol Józef Wojtyła in Poland, he became one of the most influential pontiffs in modern history, known for his defense of human rights, inter-religious dialogue, and worldwide evangelization.
              </p>
              <p className="mb-6">
                During his 27-year pontificate, St. John Paul II traveled to 129 countries, beatified 1,340 people, and canonized 483 saints. His encyclical "Evangelium Vitae" defended the dignity of human life from conception to natural death, and his role was fundamental in the fall of communism in Eastern Europe.
              </p>
              <p>
                Beatified in 2011 and canonized in 2014, St. Pope John Paul II is remembered for his charisma, courage, love for youth, and tireless dedication to the Gospel, being called the "Pope of the Family" and "Pope of the Youth."
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Pope John Paul II: Defender of Human Dignity</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Pope John Paul II left a legacy of deep faith, moral courage, and love for humanity. His life was marked by the defense of human dignity, family, and world peace, always guided by the truth of the Gospel.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Evangelization</h3>
              <p className="mb-6">
                As the "Pilgrim Pope," he brought the Gospel to the four corners of the world, meeting with millions of people and promoting dialogue between religions and cultures. His example inspires everyone to be courageous witnesses of Christ.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Defender of Life and Family</h3>
              <p>
                St. John Paul II was a tireless defender of human life, family, and Christian values. His theology of the body and teachings on human love continue to guide families and couples around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">October 22</div>
              <p className="text-gray-600">Feast of St. Pope John Paul II</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Pope John Paul II is celebrated on October 22, the date of his election as Pope. It is a time to pray for the Church, world peace, and evangelization, and to be inspired by his example of Christian leadership.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Parishes and communities promote special celebrations, prayers for peace, and acts of charity in his memory, highlighting the importance of evangelization and the defense of human dignity.
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
                  <li>• <strong>Youth:</strong> Patron of young people and World Youth Day</li>
                  <li>• <strong>Families:</strong> Patron of families and family life</li>
                  <li>• <strong>Human Rights:</strong> Patron of human dignity and rights</li>
                  <li>• <strong>Peace:</strong> Patron of world peace and reconciliation</li>
                  <li>• <strong>Evangelization:</strong> Patron of missionary work</li>
                  <li>• <strong>Poland:</strong> Patron of his homeland</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Pro-Life Causes:</strong> Patron of the unborn and life issues</li>
                  <li>• <strong>Interreligious Dialogue:</strong> Patron of religious unity</li>
                  <li>• <strong>Social Justice:</strong> Patron of workers and the poor</li>
                  <li>• <strong>Cultural Renewal:</strong> Patron of Christian culture</li>
                  <li>• <strong>Priestly Vocations:</strong> Patron of seminarians and priests</li>
                  <li>• <strong>Marian Devotion:</strong> Patron of devotion to Our Lady</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Pope John Paul II</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Pope John Paul II, you showed us the way to Christ through your witness of faith, hope, and love. Inspire us to be courageous witnesses of the Gospel and defenders of human dignity."
                  </p>
                  <p>
                    St. Pope John Paul II, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Pope John Paul II, patron of youth and families, pray for us!"
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
            <Link href="/saints/st-teresa-of-calcutta" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Teresa of Calcutta
                </h3>
                <p className="text-gray-700 text-sm">
                  Albanian-Indian nun who founded the Missionaries of Charity, known for her work with the poorest of the poor.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-maximilian-kolbe" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Polish Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Maximilian Kolbe
                </h3>
                <p className="text-gray-700 text-sm">
                  Polish Franciscan friar who sacrificed his life for another prisoner at Auschwitz, patron of families and prisoners.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-faustina-kowalska" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Polish Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Faustina Kowalska
                </h3>
                <p className="text-gray-700 text-sm">
                  Polish nun who received revelations about Divine Mercy, leading to the Divine Mercy devotion and feast day.
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