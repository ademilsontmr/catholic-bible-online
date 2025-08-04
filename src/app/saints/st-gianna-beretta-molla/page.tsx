import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Gianna Beretta Molla - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. Gianna Beretta Molla, patron of mothers, physicians, and unborn children.',
  keywords: [
    'st gianna beretta molla',
    'saint gianna',
    'st gianna biography',
    'st gianna feast day',
    'patron of mothers',
    'patron of physicians',
    'patron of unborn children',
    'catholic saints',
    'april 28 feast day'
  ],
  openGraph: {
    title: 'St. Gianna Beretta Molla - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gianna Beretta Molla, patron of mothers, physicians, and unborn children.',
    url: 'https://catholicbibleonline.com/saints/st-gianna-beretta-molla',
  },
  twitter: {
    title: 'St. Gianna Beretta Molla - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. Gianna Beretta Molla, patron of mothers, physicians, and unborn children.',
  }
}

export default function StGiannaBerettaMollaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👩‍⚕️</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Gianna Beretta Molla
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Mother, Physician, Patron of Unborn Children
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. Gianna Beretta Molla</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">April 28</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👩‍⚕️</div>
              <div className="text-sm text-gray-600">Medicine</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. Gianna Beretta Molla</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. Gianna Beretta Molla (1922–1962) was an Italian pediatrician, wife, and mother, known for her heroic witness of faith, love, and respect for life. Born in Magenta, Italy, she was the tenth of thirteen children and from an early age cultivated a deep spirituality and dedication to prayer.
              </p>
              <p className="mb-6">
                She graduated in medicine and surgery in 1949, specializing in pediatrics. Gianna saw medicine as a mission and served with generosity, especially to the poor, elderly, and children. She actively participated in Catholic Action and the Society of St. Vincent de Paul.
              </p>
              <p className="mb-6">
                She married Pietro Molla in 1955 and together they formed an exemplary Christian family. Gianna was a dedicated mother of four children, harmonizing her vocation as a doctor and wife with motherhood.
              </p>
              <p>
                During her last pregnancy, she faced a serious health problem and, to save her daughter's life, chose a procedure that put her own life at risk. Gianna gave herself totally to maternal love, saying: "If it is necessary to decide between me and the child, do not hesitate: choose the child. Save her!". She died on April 28, 1962, one week after giving birth.
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. Gianna: Witness to the Gospel of Life</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. Gianna is an example of sacrificial love, courage, and defense of human dignity from conception. Her canonization in 2004 was witnessed by her husband and children, a milestone in Church history.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Model of Motherhood and Medicine</h3>
              <p className="mb-6">
                As a doctor, Gianna saw her profession as a mission from God. As a mother, she lived motherhood with joy, faith, and total dedication. Her witness inspires healthcare professionals, mothers, and all who defend life.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Miracles and Intercession</h3>
              <p>
                Several miracles are attributed to her intercession, including the miraculous birth of children in impossible medical situations. St. Gianna is an inspiration for pro-life centers and Catholic hospitals around the world.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">April 28</div>
              <p className="text-gray-600">Feast of St. Gianna Beretta Molla</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. Gianna is celebrated on April 28, the date of her death. It is a day to pray for mothers, healthcare professionals, and the defense of life.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Masses, novenas, and pro-life actions are promoted in her memory, especially in hospitals and maternity support centers.
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
                  <li>• <strong>Mothers:</strong> Patron of mothers and motherhood</li>
                  <li>• <strong>Physicians:</strong> Patron of doctors and healthcare professionals</li>
                  <li>• <strong>Unborn Children:</strong> Patron of unborn and pro-life causes</li>
                  <li>• <strong>Families:</strong> Patron of Christian families</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Pregnancy:</strong> Intercessor for pregnant women and mothers in labor</li>
                  <li>• <strong>High-risk Births:</strong> Intercessor in high-risk deliveries</li>
                  <li>• <strong>Pro-Life:</strong> Defender of the dignity of life</li>
                  <li>• <strong>Medical Ethics:</strong> Example of Christian ethics in medicine</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. Gianna</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. Gianna, example of maternal love and courage, intercede for all mothers, doctors, and unborn children. Help us to defend life and to live the faith with generosity."
                  </p>
                  <p>
                    St. Gianna Beretta Molla, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. Gianna, patron of mothers and unborn, pray for us!"
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
            <Link href="/saints/st-elizabeth-ann-seton" className="group block">
              <div className="bg-white border border-gray-200 rounded-lg p-6 hover:border-gray-300 hover:shadow-md transition-all">
                <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  Modern Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Elizabeth Ann Seton
                </h3>
                <p className="text-gray-700 text-sm">
                  First native-born American saint and patron of Catholic schools.
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