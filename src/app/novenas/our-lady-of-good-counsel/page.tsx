import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Counsel Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Good Counsel Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession and seek her wise counsel.',
  keywords: [
    'our lady of good counsel novena',
    'good counsel novena',
    'mary novena',
    'our lady novena',
    'good counsel prayer',
    'mary prayer',
    'our lady prayer',
    'good counsel nine day prayer',
    'mary nine day prayer',
    'good counsel devotion',
    'mary devotion',
    'catholic novena',
    'wise counsel',
    'maternal guidance'
  ],
  openGraph: {
    title: 'Our Lady of Good Counsel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Good Counsel Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-counsel',
  },
  twitter: {
    title: 'Our Lady of Good Counsel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Good Counsel Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'World Leaders',
    description: 'Pray for guidance for world leaders and counsel for those who suffer persecution and grave injustice.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Country Leaders',
    description: 'Pray for guidance for our country\'s leaders and counsel for those exiled from their homelands.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'City Leaders',
    description: 'Pray for guidance for our city\'s leaders and counsel for those who are homeless and abandoned.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Parish',
    description: 'Pray for guidance for our home parish and counsel for those who have abandoned prayer.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Friends',
    description: 'Pray for guidance for our friends and counsel for those who are lonely and forgotten.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Families',
    description: 'Pray for guidance for our extended families and counsel for estranged families to be reconciled.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Families',
    description: 'Pray for guidance for our families and counsel for divided households.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Ourselves',
    description: 'Pray for guidance for ourselves and counsel to love those who are difficult to love.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'All Who Prayed',
    description: 'Pray for guidance for all who prayed this novena and counsel to seek Jesus daily.',
    slug: 'day-9'
  }
]

export default function OurLadyOfGoodCounselNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Counsel Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of Good Counsel.
            This traditional novena helps us find wise guidance and maternal counsel in all our decisions and needs.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💡</div>
              <div className="text-sm text-gray-600">Counsel</div>
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
            About the Our Lady of Good Counsel Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Good Counsel Novena is a traditional nine-day prayer that honors the Blessed Virgin Mary 
              under her title of Our Lady of Good Counsel. This devotion commemorates Mary's role as the wise counselor 
              and guide for all who seek her intercession in making important decisions.
            </p>
            
            <p className="mb-4">
              The title "Our Lady of Good Counsel" reminds us of Mary's wisdom and her ability to guide us to make 
              the right choices in life. Through this novena, we seek Mary's intercession for guidance in our decisions 
              and her maternal counsel in all our needs, especially when we are uncertain or afraid.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking Mary's powerful intercession 
              for our needs and intentions, especially for guidance and wisdom in our daily lives.
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
                href={`/novenas/our-lady-of-good-counsel/${day.slug}`}
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
                Trust completely in Mary's maternal care and her ability to guide you.
                Turn to her with confidence in every need, especially when seeking counsel.
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
                Believe in Mary's powerful intercession and her wise counsel.
                Trust that she will guide you to make the right decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise to guide us with her counsel.
                She is always ready to help us find the right path.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our mother and show our love through devotion.
                Imitate her love for Jesus in our daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Our Lady of Good Counsel Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of Good Counsel devotion is a way of honoring and seeking the intercession of Mary 
            for wise guidance and maternal counsel in all our decisions and needs.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Good Counsel Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💡</span>
                <span>Wise Counsel</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🧭</span>
                <span>Guidance</span>
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
              <li>• Find wise guidance in our decisions</li>
              <li>• Seek Mary's maternal counsel in all needs</li>
              <li>• Grow in faith, hope, and love</li>
              <li>• Trust in God's plan for our lives</li>
              <li>• Follow Mary's example of obedience to God</li>
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