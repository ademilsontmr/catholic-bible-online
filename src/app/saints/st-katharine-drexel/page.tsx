import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Katharine Drexel - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Katharine Drexel, educator, philanthropist, and patron of racial justice.',
  keywords: [
    'st katharine drexel',
    'saint katharine drexel',
    'st katharine drexel biography',
    'st katharine drexel feast day',
    'st katharine drexel patron saint',
    'catholic saints',
    'march 3 feast day',
    'racial justice saint',
    'american saint'
  ],
  openGraph: {
    title: 'St. Katharine Drexel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Katharine Drexel, educator, philanthropist, and patron of racial justice.',
    url: 'https://catholicbibleonline.com/saints/st-katharine-drexel',
  },
  twitter: {
    title: 'St. Katharine Drexel - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Katharine Drexel, educator, philanthropist, and patron of racial justice.',
  }
}

export default function StKatharineDrexelPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👩‍🏫</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Katharine Drexel
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Educator, Philanthropist, Patron of Racial Justice
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Katharine Drexel</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">March 3</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👩‍🏫</div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Katharine Drexel</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Katharine Drexel (1858–1955) was an American heiress who became a religious sister and a brilliant educator. Born in Philadelphia, she dedicated her life and fortune to promoting racial justice, education, and charity, especially for African-Americans and Native Americans.
              </p>
              <p className="mb-6">
                Inspired by her family's example of faith and charity, Katharine founded the Sisters of the Blessed Sacrament congregation and established dozens of schools and missions, including Xavier University in New Orleans, the first Catholic university for African-Americans in the United States.
              </p>
              <p>
                Beatified in 1988 and canonized in 2000, St. Katharine Drexel is remembered for her love of the Eucharist, courage in the face of social inequalities, and dedication to education and dignity for all peoples.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Katharine Drexel: Patron of Racial Justice</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Katharine Drexel left a legacy of faith, service, and social transformation. Her life was marked by total dedication to God and neighbor, promoting equality, education, and human dignity.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Charity and Education</h3>
              <p className="mb-6">
                As an educator and philanthropist, she founded schools, missions, and universities, always focusing on the most needy. Her example inspires everyone to use their gifts and resources for the common good.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Courage and Justice</h3>
              <p>
                St. Katharine faced prejudices and challenges with courage, defending racial justice and inclusion. Her work continues to live on in the institutions and communities she founded.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">March 3</div>
              <p className="text-gray-600">Feast of St. Katharine Drexel</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Katharine Drexel is celebrated on March 3, the date of her death. It is a time to pray for racial justice, education, and charity, and to be inspired by her example of service.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Catholic schools and institutions promote celebrations, prayers, and acts of charity in her memory, highlighting the importance of equality and education for all.
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
                  <li>• <strong>Racial Justice:</strong> Patron of racial equality and justice</li>
                  <li>• <strong>Philanthropists:</strong> Patron of charitable giving</li>
                  <li>• <strong>Educators:</strong> Patron of teachers and education</li>
                  <li>• <strong>Native Americans:</strong> Patron of indigenous peoples</li>
                  <li>• <strong>African-Americans:</strong> Patron of black communities</li>
                  <li>• <strong>Missionaries:</strong> Patron of missionary work</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Educational Equality:</strong> Patron of equal access to education</li>
                  <li>• <strong>Charitable Giving:</strong> Helper in matters of philanthropy</li>
                  <li>• <strong>Racial Reconciliation:</strong> Patron of healing racial divisions</li>
                  <li>• <strong>Mission Work:</strong> Patron of missionary activities</li>
                  <li>• <strong>Social Justice:</strong> Patron of social reform</li>
                  <li>• <strong>Wealth Management:</strong> Helper in using wealth for good</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Katharine Drexel</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Katharine Drexel, you gave your life and resources to serve God and His people. Inspire us to use our gifts to promote justice, education, and charity."
                  </p>
                  <p>
                    St. Katharine Drexel, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Katharine Drexel, patron of racial justice and education, pray for us!"
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
                  American Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  The first American-born saint, founder of the Sisters of Charity and Catholic education in America.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-francis-cabrini" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Missionary Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Frances Xavier Cabrini
                </h3>
                <p className="text-gray-700 text-sm">
                  Italian-American saint who founded the Missionary Sisters of the Sacred Heart, patron of immigrants.
                </p>
              </div>
            </Link>
            <Link href="/saints/st-martin-de-porres" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Racial Justice Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Martin de Porres
                </h3>
                <p className="text-gray-700 text-sm">
                  Peruvian saint of mixed race who served the poor and sick, patron of racial harmony and social justice.
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