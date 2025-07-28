import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Fatima Novena with daily prayers, reflections, and guidance. Pray for peace, conversion, and the triumph of her Immaculate Heart.',
  keywords: [
    'our lady of fatima novena',
    'fatima novena',
    'mary novena',
    'our lady novena',
    'fatima prayer',
    'mary prayer',
    'our lady prayer',
    'fatima nine day prayer',
    'mary nine day prayer',
    'fatima devotion',
    'mary devotion',
    'catholic novena',
    'immaculate heart novena',
    'fatima apparitions'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Fatima Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Fatima Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Faith',
    description: 'Pray for faith in Mary\'s apparitions at Fatima and her message of prayer and penance.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in the triumph of Mary\'s Immaculate Heart and the conversion of sinners.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for Mary\'s Immaculate Heart and to imitate her love for Jesus.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Reparation',
    description: 'Pray for the grace to make reparation for sins and to console Mary\'s Immaculate Heart.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Conversion',
    description: 'Pray for the conversion of sinners and for all who have turned away from God.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Peace',
    description: 'Pray for peace in the world and for an end to war and violence.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Prayer',
    description: 'Pray for the grace to pray the Rosary daily and to grow in devotion to Mary.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Penance',
    description: 'Pray for the grace to offer sacrifices and penances for the conversion of sinners.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for Mary\'s apparitions at Fatima and her maternal care.',
    slug: 'day-9'
  }
]

export default function OurLadyOfFatimaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of Fatima.
            This traditional novena helps us grow closer to Mary and experience her maternal care through the message of Fatima.
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
            About the Our Lady of Fatima Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Fatima Novena is a traditional nine-day prayer that honors the miraculous apparitions 
              of the Blessed Virgin Mary to three shepherd children - Lucia, Francisco, and Jacinta - in 1917 at Fatima, Portugal. 
              During these apparitions, Mary revealed her Immaculate Heart and gave the world a message of prayer, penance, and conversion.
            </p>
            
            <p className="mb-4">
              The title "Our Lady of Fatima" reminds us of Mary's urgent message for our times: to pray the Rosary daily, 
              to make sacrifices for the conversion of sinners, and to trust in the triumph of her Immaculate Heart.
            </p>
            
            <p>
              This novena helps us to respond to Mary's call at Fatima and to grow in devotion to her Immaculate Heart, 
              while seeking her powerful intercession for peace in the world and the conversion of sinners.
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
                href={`/novenas/our-lady-of-fatima/${day.slug}`}
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
                Believe in Mary's apparitions at Fatima and her message of prayer and penance.
                Trust that she will bring our prayers to Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the triumph of Mary's Immaculate Heart and the conversion of sinners.
                She is always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our mother and imitate her love for Jesus.
                Show our love through devotion and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Our Lady of Fatima Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of Fatima devotion is a way of honoring and seeking the intercession of Mary, 
            who appeared at Fatima to bring her urgent message of prayer, penance, and conversion.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Fatima Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Rosary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Immaculate Heart</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Conversion</span>
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
              <li>• Respond to Mary's urgent message at Fatima</li>
              <li>• Pray the Rosary daily for peace and conversion</li>
              <li>• Make sacrifices and penances for sinners</li>
              <li>• Trust in the triumph of Mary's Immaculate Heart</li>
              <li>• Grow in devotion to Mary and her Son, Jesus</li>
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