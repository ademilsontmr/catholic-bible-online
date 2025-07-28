import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corpus Christi Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Corpus Christi Novena with daily prayers, reflections, and guidance. Pray for the Body and Blood of Christ and deepen your Eucharistic devotion.',
  keywords: [
    'corpus christi novena',
    'body and blood of christ novena',
    'eucharist novena',
    'holy eucharist novena',
    'corpus christi prayer',
    'eucharistic devotion novena',
    'body of christ novena',
    'blood of christ novena',
    'catholic novena',
    'novena to corpus christi'
  ],
  openGraph: {
    title: 'Corpus Christi Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Corpus Christi Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/corpus-christi',
  },
  twitter: {
    title: 'Corpus Christi Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Corpus Christi Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Institution',
    description: 'Pray in thanksgiving for the institution of the Holy Eucharist.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hidden Majesty',
    description: 'Pray for courage to approach the throne of Divine Mercy.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Food',
    description: 'Pray for union with Jesus through the Eucharist.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Greatest Gift',
    description: 'Pray in thanksgiving for the greatest gift of the Eucharist.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Continual Sacrifice',
    description: 'Pray for the grace to offer ourselves with Christ.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Divine Priest',
    description: 'Pray for the renewal of the Sacrifice of the Cross.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Priceless Victim',
    description: 'Pray for confidence in Christ\'s merits.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Thanksgiving',
    description: 'Pray in thanksgiving for all God\'s benefits.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Salvation',
    description: 'Pray for perseverance and eternal life.',
    slug: 'day-9'
  }
]

export default function CorpusChristiNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Corpus Christi Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor the Body and Blood of Christ and deepen your 
            devotion to the Most Holy Eucharist.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🍷</div>
              <div className="text-sm text-gray-600">Eucharist</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Sacrifice</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Corpus Christi Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Corpus Christi Novena is a beautiful nine-day prayer that honors the Body and Blood of Christ 
              in the Most Holy Eucharist. This novena helps us deepen our devotion to the Eucharist and 
              express our gratitude for this greatest gift of God's love.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray in thanksgiving for the institution of the Eucharist, for courage 
              to approach Divine Mercy, for union with Christ, for the grace to offer ourselves with Him, 
              for the renewal of His sacrifice, for confidence in His merits, and for eternal salvation.
            </p>
            
            <p>
              This novena reminds us that the Eucharist is the source and summit of our Christian life, 
              where we receive the Body and Blood of Christ for our spiritual nourishment and salvation.
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
                href={`/novenas/corpus-christi/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in the Eucharist</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the power of the Eucharist and in Jesus' presence in the Blessed Sacrament.
                Turn to Him with confidence for all your spiritual needs and Eucharistic grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus in the Eucharist will not fail to help 
                those who turn to Him with trust and confidence for Eucharistic grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Jesus in the Eucharist, especially those related to your 
                spiritual growth and Eucharistic devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for the gift of the Eucharist and for the graces you receive. 
                Gratitude opens our hearts to receive more Eucharistic blessings.
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
                Believe in the Real Presence of Jesus in the Eucharist and in His power to transform us. 
                Trust that the Eucharist is truly the Body and Blood of Christ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Eucharist as the source of eternal life. 
                Maintain confidence that Jesus in the Eucharist will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for Jesus in the Eucharist. Include in your intentions the needs of 
                all souls who are seeking Eucharistic grace and salvation.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Corpus Christi? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Corpus Christi?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Corpus Christi</strong> (Body of Christ) is the feast that celebrates the Real Presence of Jesus Christ 
              in the Eucharist. This devotion honors the Body and Blood of Christ under the appearances of bread and wine, 
              which become truly the Body and Blood of Christ through the power of the Holy Spirit.
            </p>
            
            <p className="mb-4">
              <strong>Source and Summit</strong> - The Eucharist is the source and summit of the Christian life. It is the 
              memorial of Christ's Passion, Death, and Resurrection, and the pledge of future glory. Through the Eucharist, 
              we are united with Christ and with one another in the Church.
            </p>
            
            <p className="mb-4">
              <strong>Sacrifice and Sacrament</strong> - The Eucharist is both a sacrifice and a sacrament. As sacrifice, 
              it renews the sacrifice of the Cross; as sacrament, it nourishes our souls with the Body and Blood of Christ. 
              It is the greatest gift that Jesus left to His Church.
            </p>
            
            <p className="mb-4">
              <strong>Real Presence</strong> - Jesus is truly present in the Eucharist - Body, Blood, Soul, and Divinity. 
              This presence is not symbolic but real and substantial, hidden under the appearances of bread and wine 
              for our benefit and salvation.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of Corpus Christi is celebrated on the Thursday after Trinity Sunday, 
              and this novena is especially popular among those seeking to deepen their Eucharistic devotion and 
              to express gratitude for this greatest gift of God's love.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 