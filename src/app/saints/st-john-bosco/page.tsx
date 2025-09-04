import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. John Bosco - Life, Legacy & Feast Day | Catholic Bible Online',
  description: 'Discover the life, legacy, and feast day of St. John Bosco, patron of youth, educators, and founder of the Salesians.',
  keywords: [
    'st john bosco',
    'saint john bosco',
    'don bosco',
    'st john bosco biography',
    'st john bosco feast day',
    'patron of youth',
    'patron of educators',
    'salesians founder',
    'catholic saints',
    'january 31 feast day'
  ],
  openGraph: {
    title: 'St. John Bosco - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Bosco, patron of youth, educators, and founder of the Salesians.',
    url: 'https://catholicbibleonline.com/saints/st-john-bosco',
  },
  twitter: {
    title: 'St. John Bosco - Life, Legacy & Feast Day',
    description: 'Discover the life, legacy, and feast day of St. John Bosco, patron of youth, educators, and founder of the Salesians.',
  }
}

export default function StJohnBoscoPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">👨‍🏫</div>
          <h1 className="text-4xl font-bold text-black mb-4">
            St. John Bosco
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Father and Teacher of Youth, Founder of the Salesians
          </p>
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/saints" className="hover:text-gray-700">Saints</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">St. John Bosco</span>
          </nav>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">January 31</div>
              <div className="text-sm text-gray-600">Feast Day</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍🏫</div>
              <div className="text-sm text-gray-600">Education</div>
            </div>
          </div>
        </div>

        {/* Life Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📖 Life of St. John Bosco</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                St. John Bosco (1815–1888), also known as Don Bosco, was an Italian priest dedicated to the education and formation of youth. Born in Becchi, Italy, into a poor family, from an early age he demonstrated a vocation for the priesthood and love for young people.
              </p>
              <p className="mb-6">
                At the age of nine, he had a prophetic dream that marked his life: he saw a crowd of boys fighting and blaspheming, and a majestic figure told him that with meekness and charity he would "win these friends of his." This dream guided his entire mission.
              </p>
              <p className="mb-6">
                Ordained a priest in 1841, he dedicated himself to the poor youth of Turin, creating oratories where he offered education, Christian formation, and recreation. He used magic tricks and acrobatics to attract the attention of young people, then taught them the Gospel.
              </p>
              <p>
                In 1859, he founded the Society of St. Francis de Sales (Salesians), which today is one of the largest religious congregations in the world. He died on January 31, 1888, and was canonized in 1934, being proclaimed "Father and Teacher of Youth."
              </p>
            </div>
          </div>
        </section>

        {/* Legacy Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">🌟 Legacy of St. John Bosco: Father and Teacher of Youth</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Spiritual Legacy</h3>
              <p className="mb-6">
                St. John Bosco left a legacy of unconditional love for youth and a revolutionary educational method based on "reason, religion, and love." His preventive pedagogy continues to be a model for Catholic educators.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Educational Innovation</h3>
              <p className="mb-6">
                Don Bosco revolutionized education by creating a system that combined academic, professional, and spiritual formation. His oratories offered integral education, healthy recreation, and Christian formation.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Salesian Family</h3>
              <p>
                He founded the Salesians, who today are more than 30,000 members in 134 countries, serving millions of young people through schools, youth centers, parishes, and social works.
              </p>
            </div>
          </div>
        </section>

        {/* Feast Day Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black mb-6 text-center">📅 Feast Day</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">January 31</div>
              <p className="text-gray-600">Feast of St. John Bosco</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold text-black mb-4">Liturgical Celebration</h3>
              <p className="mb-6">
                The feast of St. John Bosco is celebrated on January 31, the date of his death. It is a special day to pray for youth, educators, and Salesian vocations.
              </p>
              <h3 className="text-xl font-semibold text-black mb-4">Traditions and Customs</h3>
              <p>
                Salesian schools promote special celebrations, masses, and youth activities in his memory, highlighting his dedication to education and youth formation.
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
                  <li>• <strong>Youth:</strong> Patron of young people and youth ministry</li>
                  <li>• <strong>Educators:</strong> Patron of teachers and educators</li>
                  <li>• <strong>Apprentices:</strong> Patron of apprentices and vocational training</li>
                  <li>• <strong>Magicians:</strong> Patron of stage magicians and performers</li>
                  <li>• <strong>Publishers:</strong> Patron of editors and publishers</li>
                  <li>• <strong>Schoolchildren:</strong> Patron of students and schoolchildren</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Special Intentions</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Juvenile Delinquents:</strong> Intercessor for troubled youth</li>
                  <li>• <strong>Vocational Training:</strong> Patron of skill development</li>
                  <li>• <strong>Youth Ministry:</strong> Model for youth workers</li>
                  <li>• <strong>Salesian Vocations:</strong> Patron of Salesian family</li>
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
                <h3 className="text-xl font-semibold text-black mb-4">Prayer to St. John Bosco</h3>
                <div className="text-gray-700 italic">
                  <p className="mb-4">
                    "St. John Bosco, father and teacher of youth, intercede for all young people, educators, and families. Help us to follow your example of love and dedication to youth."
                  </p>
                  <p>
                    St. John Bosco, pray for us!
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-black mb-4">Short Prayer</h3>
                <div className="text-gray-700 italic">
                  <p>
                    "St. John Bosco, patron of youth and educators, pray for us!"
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
                  Mendicant Saints
                </div>
                <h3 className="text-lg font-semibold text-black mb-2 group-hover:text-blue-600 transition-colors">
                  St. Francis of Assisi
                </h3>
                <p className="text-gray-700 text-sm">
                  Founder of the Franciscan order, lover of nature and poverty.
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
                  Franciscan friar known for his powerful preaching and miracles.
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