import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sacred Heart Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Sacred Heart Novena with daily prayers, reflections, and guidance. Pray the traditional novena to grow closer to the Heart of Jesus.',
  keywords: [
    'sacred heart novena',
    'sacred heart prayer',
    'jesus sacred heart',
    'sacred heart nine day prayer',
    'sacred heart devotion',
    'sacred heart of jesus',
    'sacred heart novena prayer',
    'catholic sacred heart',
    'jesus heart prayer'
  ],
  openGraph: {
    title: 'Sacred Heart Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Sacred Heart Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/sacred-heart',
  },
  twitter: {
    title: 'Sacred Heart Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Sacred Heart Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Love',
    description: 'Meditate on the infinite love of Jesus Christ and His Sacred Heart burning with love for us.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Mercy',
    description: 'Pray for the mercy of the Sacred Heart and His infinite compassion for sinners.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Reparation',
    description: 'Make reparation for the sins that have wounded the Sacred Heart of Jesus.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Consecration',
    description: 'Consecrate yourself to the Sacred Heart of Jesus and offer Him your entire being.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Trust',
    description: 'Place all your trust in the Sacred Heart of Jesus and His infinite goodness.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Gratitude',
    description: 'Express gratitude for the love and mercy of the Sacred Heart of Jesus.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Intercession',
    description: 'Ask the Sacred Heart to intercede for your needs and the needs of others.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Transformation',
    description: 'Ask the Sacred Heart to transform your heart to be more like His.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Consecration',
    description: 'Complete your consecration to the Sacred Heart and receive His final blessing.',
    slug: 'day-9'
  }
]

export default function SacredHeartNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Sacred Heart Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to grow closer to the Sacred Heart of Jesus. 
            This traditional novena helps us understand and respond to the infinite love of Christ.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Sacred Heart</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Themes</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Sacred Heart Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Sacred Heart Novena is a traditional nine-day prayer that helps us grow closer to the Heart of Jesus. 
              The Sacred Heart of Jesus is a symbol of His divine love for humanity - a love that is infinite, 
              unconditional, and everlasting.
            </p>
            
            <p className="mb-4">
              Jesus' Heart was pierced on the cross, and from it flowed blood and water - symbols of the sacraments 
              of Baptism and the Eucharist, through which He continues to pour out His love upon us.
            </p>
            
            <p>
              This novena helps us to understand the depth of Jesus' love for us and to respond to that love 
              with our own love and devotion. It teaches us to trust in His mercy and to make reparation for our sins.
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
                href={`/novenas/sacred-heart/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with love in your heart. Remember that you are praying to the Heart of Jesus, 
                which is burning with love for you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Meditate on His Heart</h3>
              <p className="text-gray-700 text-sm">
                Take time to meditate on the Sacred Heart of Jesus. Imagine His Heart burning with love for you 
                and for all humanity.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Heart</h3>
              <p className="text-gray-700 text-sm">
                Offer your own heart to Jesus, asking Him to make it more like His. 
                Ask Him to help you love Him and others more perfectly.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Mercy</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the mercy of the Sacred Heart. Remember that His Heart is always open 
                to receive you and to forgive you.
              </p>
            </div>
          </div>
        </section>

        {/* The Sacred Heart Devotion */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Sacred Heart Devotion
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Infinite Love</h3>
              <p className="text-gray-700 text-sm">
                The Sacred Heart represents Jesus' infinite love for all humanity, 
                a love that led Him to suffer and die for our salvation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🩸</div>
              <h3 className="text-lg font-semibold text-black mb-2">Pierced Heart</h3>
              <p className="text-gray-700 text-sm">
                Jesus' Heart was pierced on the cross, from which flowed blood and water, 
                symbols of the sacraments of Baptism and Eucharist.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="text-lg font-semibold text-black mb-2">Burning Love</h3>
              <p className="text-gray-700 text-sm">
                The Sacred Heart burns with love for us, always ready to receive us 
                and pour out His mercy upon us.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Sacred Heart Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Sacred Heart devotion is a way of honoring and loving the Heart of Jesus, 
            which represents His infinite love and mercy for all humanity.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Sacred Heart Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Consecration</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🩸</span>
                <span>Reparation</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔥</span>
                <span>Devotion</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>First Fridays</span>
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
              <li>• Understand the depth of Jesus' love for us</li>
              <li>• Respond to His love with our own love and devotion</li>
              <li>• Make reparation for our sins and the sins of others</li>
              <li>• Consecrate ourselves completely to Jesus</li>
              <li>• Trust in His infinite mercy and love</li>
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