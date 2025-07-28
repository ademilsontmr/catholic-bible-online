import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Catherine Laboure Novena with daily prayers, reflections, and guidance. Pray for her intercession and learn about the Miraculous Medal.',
  keywords: [
    'st catherine laboure novena',
    'catherine laboure novena',
    'saint novena',
    'miraculous medal novena',
    'catherine laboure prayer',
    'saint prayer',
    'miraculous medal prayer',
    'catherine laboure nine day prayer',
    'saint nine day prayer',
    'catherine laboure devotion',
    'saint devotion',
    'catholic novena',
    'miraculous medal',
    'daughters of charity'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Catherine Laboure Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Catherine Laboure Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Early Life',
    description: 'Reflect on Catherine\'s early life and how she turned her sorrow into faith by choosing Mary as her mother.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Marian Devotion',
    description: 'Honor Catherine\'s profound devotion to the Blessed Virgin Mary and her love for the Immaculate Heart.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Religious Life',
    description: 'Reflect on Catherine\'s call to religious life and her entrance into the Daughters of Charity.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Hidden Service',
    description: 'Meditate on Catherine\'s hidden life of service and her care for the elderly and infirm.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Miraculous Medal',
    description: 'Contemplate Mary\'s appearance to Catherine and the mission of the Miraculous Medal.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Faith Amid Trials',
    description: 'Reflect on Catherine\'s trust in God\'s help and her fidelity amidst opposition and trials.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Holy Obedience',
    description: 'Meditate on Catherine\'s practice of holy obedience and submission to God\'s will.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Hidden Life',
    description: 'Contemplate Catherine\'s forty years of hidden service and her embrace of humility.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Final Perseverance',
    description: 'Reflect on Catherine\'s death and legacy, praying for the grace of final perseverance.',
    slug: 'day-9'
  }
]

export default function StCatherineLaboureNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of St. Catherine Laboure.
            This traditional novena helps us learn about the Miraculous Medal and grow in devotion to Mary.
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
            About the St. Catherine Laboure Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Catherine Laboure Novena is a traditional nine-day prayer that honors the life and mission of St. Catherine Laboure, 
              the visionary of the Miraculous Medal. This devotion commemorates her deep faith, humility, and her role in spreading 
              devotion to the Blessed Virgin Mary through the Miraculous Medal.
            </p>
            
            <p className="mb-4">
              St. Catherine Laboure was a Daughter of Charity who received apparitions from the Blessed Virgin Mary in 1830, 
              during which Mary entrusted her with the mission of creating and spreading the Miraculous Medal. Through her obedience 
              and humility, this powerful sacramental has brought countless graces to the world.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking St. Catherine's intercession 
              for our needs and intentions, especially for devotion to Mary and trust in God's providence.
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
                href={`/novenas/st-catherine-laboure/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in St. Catherine</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Catherine's intercession and her ability to help you.
                Turn to her with confidence in every need, especially for devotion to Mary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Catherine will not fail to help those who turn to her with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Catherine.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Catherine for her help and intercession.
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
                Believe in St. Catherine's powerful intercession and her connection to Mary.
                Trust that she will bring our prayers to the Blessed Mother.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in St. Catherine's promise to help us through the Miraculous Medal.
                She is always ready to guide us to Mary's maternal care.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love St. Catherine as our sister in Christ and show our love through devotion.
                Imitate her love for Mary and Jesus in our daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the St. Catherine Laboure Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The St. Catherine Laboure devotion is a way of honoring and seeking the intercession of this holy saint 
            who was chosen by Mary to spread the Miraculous Medal throughout the world.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of St. Catherine Laboure Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Miraculous Medal</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕯️</span>
                <span>Humility</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Service</span>
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
              <li>• Grow in devotion to the Blessed Virgin Mary</li>
              <li>• Learn about the Miraculous Medal and its graces</li>
              <li>• Grow in faith, hope, and love</li>
              <li>• Practice humility and obedience to God's will</li>
              <li>• Serve others with love and charity</li>
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