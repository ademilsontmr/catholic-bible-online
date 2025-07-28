import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Holy Ghost - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to the Holy Ghost with daily prayers, reflections, and guidance. Pray for the gifts of the Holy Spirit and spiritual transformation.',
  keywords: [
    'novena to the holy ghost',
    'holy ghost novena',
    'holy spirit novena',
    'paraclete novena',
    'holy ghost prayer',
    'spirit of god novena',
    'holy ghost intercession',
    'gifts of the holy spirit novena',
    'catholic novena',
    'novena to the holy spirit'
  ],
  openGraph: {
    title: 'Novena to the Holy Ghost - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to the Holy Ghost with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/holy-ghost',
  },
  twitter: {
    title: 'Novena to the Holy Ghost - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to the Holy Ghost with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Adoration',
    description: 'Pray in adoration and acknowledgment of the Holy Ghost.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Paraclete\'s Promise',
    description: 'Pray for the fulfillment of the Paraclete\'s promise.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Pentecostal Gifts',
    description: 'Pray to participate in the gifts of Pentecost.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Worthy Dwelling',
    description: 'Pray for the Holy Ghost to make your heart a worthy dwelling.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Illumination',
    description: 'Pray for illumination of mind and understanding.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Pure Love',
    description: 'Pray for pure love and cleansing from attachments.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Divine Will',
    description: 'Pray for strength to conform to the divine will.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Virtues',
    description: 'Pray for grace to practice divine lessons and virtues.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Heavenly Peace',
    description: 'Pray for sanctification and heavenly peace.',
    slug: 'day-9'
  }
]

export default function HolyGhostNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Holy Ghost
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor the Holy Ghost and seek His divine gifts 
            for spiritual transformation and sanctification.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Dove</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔥</div>
              <div className="text-sm text-gray-600">Fire</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena to the Holy Ghost
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to the Holy Ghost is a beautiful nine-day prayer that honors the Third Person of the Holy Trinity 
              and seeks His divine gifts and graces. This novena helps us prepare for spiritual transformation and 
              sanctification through the power of the Holy Spirit.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for divine adoration, the fulfillment of the Paraclete's promise, participation 
              in Pentecostal gifts, a worthy dwelling for the Spirit, divine illumination, pure love, conformity to God's will, 
              practice of divine virtues, and heavenly peace.
            </p>
            
            <p>
              This novena reminds us that the Holy Ghost is our Comforter, Guide, and Sanctifier, who transforms our hearts 
              and minds to be more like Christ and leads us to eternal life.
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
                href={`/novenas/holy-ghost/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Ghost</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the power of the Holy Ghost and in His ability to transform your soul.
                Turn to Him with confidence for all your spiritual needs and divine grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Holy Ghost will not fail to help 
                those who turn to Him with trust and confidence for spiritual transformation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to the Holy Ghost, especially those related to your 
                spiritual growth and sanctification.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Holy Ghost for His gifts and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
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
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in the Holy Ghost as the Third Person of the Trinity and in His power to transform us. 
                Trust that He is truly our Comforter and Guide.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Holy Ghost's ability to sanctify us and lead us to eternal life. 
                Maintain confidence that He will provide the grace we need for salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for the Holy Ghost. Include in your intentions the needs of 
                all souls who are seeking spiritual transformation and sanctification.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Holy Ghost? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Holy Ghost?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Holy Ghost</strong> is the Third Person of the Holy Trinity, the Spirit of God who proceeds 
              from the Father and the Son. This devotion honors Him as our Comforter, Guide, and Sanctifier, 
              who transforms our hearts and minds to be more like Christ.
            </p>
            
            <p className="mb-4">
              <strong>Paraclete and Comforter</strong> - The Holy Ghost is called the Paraclete, meaning "Comforter" or "Advocate." 
              He is the One whom Jesus promised to send to His disciples, to be with them always and to guide them 
              into all truth. He comforts us in our sorrows and strengthens us in our weaknesses.
            </p>
            
            <p className="mb-4">
              <strong>Giver of Gifts</strong> - The Holy Ghost bestows upon us the seven gifts: wisdom, understanding, counsel, 
              fortitude, knowledge, piety, and fear of the Lord. He also gives us the fruits of the Spirit: love, joy, 
              peace, patience, kindness, goodness, faithfulness, gentleness, and self-control.
            </p>
            
            <p className="mb-4">
              <strong>Sanctifier</strong> - The Holy Ghost is the Sanctifier who makes us holy. He purifies our hearts, 
              enlightens our minds, and strengthens our wills to live according to God's commandments. 
              He transforms us into the image of Christ.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of Pentecost celebrates the descent of the Holy Ghost upon the Apostles, 
              and this novena is especially popular among those seeking spiritual transformation, the gifts of the Holy Spirit, 
              and deeper sanctification.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 