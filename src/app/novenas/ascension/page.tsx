import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ascension Novena - Complete 9-Day Prayer Guide',
  description: 'Complete The Ascension Novena with daily prayers, reflections, and guidance. Pray for Jesus\' intercession and prepare for eternal glory in heaven.',
  keywords: [
    'the ascension novena',
    'ascension novena',
    'jesus ascension novena',
    'ascension prayer',
    'jesus ascended into heaven',
    'ascension of jesus novena',
    'heavenly ascension novena',
    'jesus ascension intercession',
    'catholic novena',
    'novena to jesus ascension'
  ],
  openGraph: {
    title: 'The Ascension Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Ascension Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/ascension',
  },
  twitter: {
    title: 'The Ascension Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Ascension Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Heavenly Glory',
    description: 'Pray for the grace to rejoice in Jesus\' Ascension into heaven.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Kingship of Heaven',
    description: 'Pray for recognition of Jesus as King of heaven and earth.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Eternal Joy',
    description: 'Pray for the grace to share in Jesus\' joy and triumph in heaven.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Prepared Place',
    description: 'Pray for trust that Jesus has prepared a place for us in heaven.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Friendship',
    description: 'Pray for the grace to seek only the joys of Jesus\' friendship and love.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Divine Mercy',
    description: 'Pray for mercy when we appear before the Father to give account.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Human Weakness',
    description: 'Pray for grace to rise above human weakness through Jesus\' Humanity.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Perseverance',
    description: 'Pray for the courage of perseverance in faith and life.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Life',
    description: 'Pray for the grace to come to the eternal gifts Jesus promised.',
    slug: 'day-9'
  }
]

export default function AscensionNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Ascension Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Jesus' Ascension into heaven and seek His intercession 
            for our journey to eternal glory.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">King</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⭐</div>
              <div className="text-sm text-gray-600">Heaven</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About The Ascension Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Ascension Novena is a beautiful nine-day prayer that honors Jesus' glorious Ascension 
              into heaven. This novena helps us reflect on Jesus' triumph over death and His return to 
              the Father, where He reigns as King of heaven and earth.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for heavenly glory, recognition of Jesus' kingship, eternal joy, 
              trust in His prepared place, divine friendship, mercy, strength over weakness, perseverance, 
              and eternal life.
            </p>
            
            <p>
              This novena reminds us that Jesus has ascended to prepare a place for us and will come again 
              to take us to Himself, giving us hope for our own eternal destiny.
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
                href={`/novenas/ascension/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in Jesus' Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Jesus' powerful intercession as King of Heaven.
                Turn to Him with confidence for all your spiritual needs and heavenly preparation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to help 
                those who turn to Him with trust and confidence for heavenly grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Jesus, especially those related to your 
                spiritual growth and preparation for heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for His intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more heavenly blessings.
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
                Believe in Jesus' Ascension and in His power to intercede for us. 
                Trust that He has prepared a place for us in heaven and will come again.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Jesus' ability to help us prepare for heaven. 
                Maintain confidence that He will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for Jesus. Include in your intentions the needs of 
                all souls who are preparing for their heavenly destiny.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Ascension? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Ascension?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Ascension of Jesus</strong> is the event when Jesus, after His Resurrection, 
              ascended into heaven in the presence of His disciples. This glorious event marks Jesus' 
              return to the Father and His enthronement as King of heaven and earth.
            </p>
            
            <p className="mb-4">
              <strong>King of Heaven and Earth</strong> - Jesus ascended to reign as King over all creation. 
              He sits at the right hand of the Father, interceding for us and preparing a place for us 
              in heaven. His Ascension is a promise of our own glorification.
            </p>
            
            <p className="mb-4">
              <strong>Source of Hope</strong> - The Ascension gives us hope that we too will one day 
              be taken up to heaven. Jesus promised to come again and take us to Himself, where we 
              will share in His eternal joy and triumph.
            </p>
            
            <p className="mb-4">
              <strong>Model of Transformation</strong> - Jesus' Ascension shows us the transformation 
              that awaits us. From earthly struggle to heavenly glory, from human weakness to divine 
              strength, from temporal life to eternal life.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of the Ascension is celebrated 40 days after Easter, 
              and this novena is especially popular among those seeking Jesus' intercession for heavenly 
              grace and preparation for eternal life.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 