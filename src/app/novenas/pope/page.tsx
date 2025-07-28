import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Pope - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for the Pope with daily prayers, reflections, and guidance. Pray for the Holy Father, his ministry, and the Church.',
  keywords: [
    'novena for the pope',
    'pope novena',
    'holy father novena',
    'pope prayer',
    'vicar of christ novena',
    'pope francis novena',
    'pope intercession',
    'church unity novena',
    'catholic novena',
    'novena for the holy father'
  ],
  openGraph: {
    title: 'Novena for the Pope - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Pope with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/pope',
  },
  twitter: {
    title: 'Novena for the Pope - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Pope with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Spirit of Courage',
    description: 'Pray for the Holy Father to receive a spirit of courage.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Right Judgment',
    description: 'Pray for the Pope to have right judgment in all decisions.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Spirit of Knowledge',
    description: 'Pray for the Holy Father to be filled with divine knowledge.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Spirit of Love',
    description: 'Pray for the Pope to be guided by the spirit of love.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Fidelity in Governance',
    description: 'Pray for the Pope to govern with fidelity those entrusted to his care.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Successor of Peter',
    description: 'Pray for the Pope as successor to the Apostle Peter.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Vicar of Christ',
    description: 'Pray for the Holy Father as Vicar of Christ on earth.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Sacrament of Unity',
    description: 'Pray for the Pope to build the Church into a sacrament of unity.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Love and Peace',
    description: 'Pray for the Pope to bring love and peace to all the world.',
    slug: 'day-9'
  }
]

export default function PopeNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Pope
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to support the Holy Father in his ministry 
            as Vicar of Christ and successor to the Apostle Peter.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Crown</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⛪</div>
              <div className="text-sm text-gray-600">Church</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for the Pope
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for the Pope is a beautiful nine-day prayer that supports the Holy Father 
              in his sacred ministry as the Vicar of Christ and successor to the Apostle Peter. 
              This novena helps us unite our prayers with the universal Church for the Pope's intentions.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for the Pope to receive a spirit of courage and right judgment, 
              a spirit of knowledge and love. We ask that he may govern with fidelity those entrusted to his care, 
              and as successor to Peter and Vicar of Christ, build the Church into a sacrament of unity, love, and peace.
            </p>
            
            <p>
              This novena reminds us of the Pope's crucial role in the Church and our duty to pray for him 
              and support his ministry through our prayers and fidelity to the Church's teachings.
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
                href={`/novenas/pope/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Fidelity</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with fidelity to the Church and love for the Holy Father.
                Offer your prayers for his intentions and the good of the universal Church.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Lord will hear our prayers 
                for the Pope and bless his ministry for the good of all souls.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Include Specific Intentions</h3>
              <p className="text-gray-700 text-sm">
                Present specific intentions for the Pope's ministry, the Church's unity, 
                and the spread of the Gospel throughout the world.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the papacy and for the Holy Father's service to the Church. 
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
                Believe in the Pope as the Vicar of Christ and successor to Peter. 
                Trust in his authority and guidance for the Church.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Pope's ability to lead the Church with wisdom and love. 
                Maintain confidence that God will guide and protect him.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for the Pope and for the Church. Include in your intentions the needs of 
                all the faithful and the conversion of souls.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Pope? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Pope?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Pope</strong> is the Bishop of Rome and the visible head of the Catholic Church on earth. 
              This devotion honors him as the Vicar of Christ and successor to the Apostle Peter, 
              to whom Jesus entrusted the keys of the Kingdom of Heaven.
            </p>
            
            <p className="mb-4">
              <strong>Vicar of Christ</strong> - The Pope is called the Vicar of Christ, meaning he acts in the person 
              of Christ as the visible head of the Church. He has the authority to teach, govern, and sanctify 
              the faithful, and his teachings on faith and morals are infallible when proclaimed ex cathedra.
            </p>
            
            <p className="mb-4">
              <strong>Successor of Peter</strong> - The Pope is the direct successor to Saint Peter, the first Pope, 
              to whom Jesus said: "You are Peter, and upon this rock I will build my Church" (Matthew 16:18). 
              This apostolic succession ensures the continuity of Christ's Church throughout the ages.
            </p>
            
            <p className="mb-4">
              <strong>Servant of the Servants of God</strong> - The Pope serves the Church with humility and love, 
              following the example of Christ who came not to be served but to serve. He is the shepherd 
              who guides the flock of Christ with care and compassion.
            </p>
            
            <p>
              <strong>Feast Days</strong> - The Feast of Saints Peter and Paul (June 29) celebrates the two great 
              apostles, and this novena is especially popular among those seeking to support the Pope's ministry, 
              pray for Church unity, and grow in fidelity to the Church's teachings.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 