import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Miraculous Medal Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of the Miraculous Medal Novena with daily prayers, reflections, and guidance. Pray for her intercession and experience the power of the Miraculous Medal.',
  keywords: [
    'our lady of the miraculous medal novena',
    'miraculous medal novena',
    'mary novena',
    'miraculous medal prayer',
    'our lady prayer',
    'miraculous medal nine day prayer',
    'mary nine day prayer',
    'miraculous medal devotion',
    'our lady devotion',
    'catholic novena',
    'miraculous medal',
    'st catherine laboure',
    'immaculate conception'
  ],
  openGraph: {
    title: 'Our Lady of the Miraculous Medal Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Miraculous Medal Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-miraculous-medal',
  },
  twitter: {
    title: 'Our Lady of the Miraculous Medal Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Miraculous Medal Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Faith and Trust',
    description: 'Begin the novena with faith and trust in Mary\'s powerful intercession through the Miraculous Medal.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Immaculate Conception',
    description: 'Meditate on Mary\'s Immaculate Conception and her role as the Mother of God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Protection',
    description: 'Seek Mary\'s divine protection and ask for her maternal care in all our needs.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Purity of Heart',
    description: 'Pray for purity of heart and a deep hatred of sin to attach us to God alone.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Spirit of Prayer',
    description: 'Ask for a spirit of prayer and self-denial to recover what we have lost by sin.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Consecration',
    description: 'Consecrate ourselves to Mary under the title of Our Lady of the Miraculous Medal.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Loving Protection',
    description: 'Seek Mary\'s loving protection and preservation in the grace of her Son.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Happy Death',
    description: 'Pray for the grace of a happy death and eternal union with Mary in heaven.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Bliss',
    description: 'Conclude the novena praying for eternal bliss in heaven with Mary as our Queen.',
    slug: 'day-9'
  }
]

export default function OurLadyOfTheMiraculousMedalNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Miraculous Medal Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of the Miraculous Medal.
            This traditional novena helps us experience the power of the Miraculous Medal and grow in devotion to Mary.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Miraculous Medal</div>
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
            About the Our Lady of the Miraculous Medal Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of the Miraculous Medal Novena is a traditional nine-day prayer that honors the Blessed Virgin Mary 
              under her title of Our Lady of the Miraculous Medal. This devotion commemorates the apparitions of Mary to St. Catherine Laboure 
              in 1830, during which she revealed the design of the Miraculous Medal.
            </p>
            
            <p className="mb-4">
              The Miraculous Medal, also known as the Medal of the Immaculate Conception, is a powerful sacramental that has brought 
              countless graces, conversions, and miracles to those who wear it with faith and devotion. Through this novena, 
              we seek Mary's intercession and experience her maternal care.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking Mary's intercession 
              for our needs and intentions, especially for protection, purity, and spiritual growth.
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
                href={`/novenas/our-lady-of-the-miraculous-medal/${day.slug}`}
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
                Turn to her with confidence in every need, especially through the Miraculous Medal.
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
                Believe in Mary's powerful intercession through the Miraculous Medal.
                Trust that she will bring our prayers to her Son, Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise to help us through the Miraculous Medal.
                She is always ready to provide her maternal care and protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our Mother and show our love through devotion.
                Imitate her love for Jesus and her purity of heart.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Our Lady of the Miraculous Medal Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of the Miraculous Medal devotion is a way of honoring and seeking the intercession of the Blessed Virgin Mary 
            under her title of Our Lady of the Miraculous Medal, revealed to St. Catherine Laboure.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Our Lady of the Miraculous Medal Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Miraculous Medal</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Immaculate Conception</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💎</span>
                <span>Purity</span>
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
              <li>• Experience Mary's powerful intercession through the Miraculous Medal</li>
              <li>• Grow in devotion to the Immaculate Conception</li>
              <li>• Seek Mary's protection and maternal care</li>
              <li>• Develop purity of heart and hatred of sin</li>
              <li>• Consecrate ourselves to Mary's loving care</li>
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