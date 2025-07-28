import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of the Rosary Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession and the power of the Rosary.',
  keywords: [
    'our lady of the rosary novena',
    'rosary novena',
    'mary novena',
    'our lady novena',
    'rosary prayer',
    'mary prayer',
    'our lady prayer',
    'rosary nine day prayer',
    'mary nine day prayer',
    'rosary devotion',
    'mary devotion',
    'catholic novena',
    'battle of lepanto',
    'pope pius v'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Rosary Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Rosary Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Devotion',
    description: 'Pray for true devotion to Our Lady of the Rosary and growth in holiness and virtue.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Faith',
    description: 'Pray for growth in faith and to never be discouraged, even in times of difficulty.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Perseverance',
    description: 'Pray for the virtue of faith and to hold fast to it even in great difficulties.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Prayer',
    description: 'Pray for perseverance in prayer and to never be discouraged when seeking assistance.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Courage',
    description: 'Pray for persecuted Christians and to practice our faith courageously.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Freedom',
    description: 'Pray for Christians to freely practice their faith and never allow difficulties to prevent serving God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Peace',
    description: 'Pray for peace in our modern world and to carry out God\'s will.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Conversion',
    description: 'Pray for the conversion of those hostile to Christianity and to share the faith with others.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Church',
    description: 'Pray for the Church and to always carry out God\'s will in our lives.',
    slug: 'day-9'
  }
]

export default function OurLadyOfTheRosaryNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of the Rosary.
            This traditional novena commemorates the victory at the Battle of Lepanto and helps us grow closer to Mary through the power of the Rosary.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👼</div>
              <div className="text-sm text-gray-600">Mary</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Our Lady of the Rosary Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of the Rosary Novena is a traditional nine-day prayer that honors the Blessed Virgin Mary 
              under her title of Our Lady of the Rosary. This devotion commemorates the miraculous victory at the Battle of Lepanto 
              in 1571, when Pope Pius V urged all Christians to pray the Rosary for divine help against the Ottoman Empire.
            </p>
            
            <p className="mb-4">
              The title "Our Lady of the Rosary" reminds us of Mary's powerful intercession through the Rosary prayer. 
              The Rosary is a beautiful meditation on the life of Jesus and Mary, combining vocal prayer with mental prayer. 
              Through this novena, we seek Mary's intercession for our needs and grow in devotion to this powerful prayer.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking Mary's powerful intercession 
              for our needs and intentions, especially through the devotion to the Holy Rosary.
            </p>
          </div>
        </section>

        {/* Daily Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            Daily Prayers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {novenaDays.map((day) => (
              <Link
                key={day.day}
                href={`/novenas/our-lady-of-the-rosary/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in Mary's powerful intercession through the Rosary.
                Trust that she will bring our prayers to Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise to help us through the Rosary.
                She is always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our mother and show our love through the Rosary.
                Imitate her love for Jesus in our daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Our Lady of the Rosary Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of the Rosary devotion is a way of honoring and seeking the intercession of Mary 
            through the powerful prayer of the Rosary, commemorating her victory at the Battle of Lepanto.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Rosary Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📿</span>
                <span>Rosary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚔️</span>
                <span>Lepanto</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Feast Day</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Experience Mary's powerful intercession through the Rosary</li>
              <li>• Meditate on the life of Jesus and Mary</li>
              <li>• Grow in faith, hope, and love</li>
              <li>• Find peace and protection in times of difficulty</li>
              <li>• Commemorate the victory at the Battle of Lepanto</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 