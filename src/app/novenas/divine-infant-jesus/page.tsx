import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of Trust to the Divine Infant Jesus - Complete 9-Day Prayer Guide',
  description: 'Complete Novena of Trust to the Divine Infant Jesus with daily prayers, reflections, and guidance. Pray with childlike trust to the Divine Infant for His grace and blessings.',
  keywords: [
    'novena of trust to the divine infant jesus',
    'divine infant jesus novena',
    'infant jesus novena',
    'divine infant jesus prayer',
    'child jesus novena',
    'infant jesus of prague novena',
    'divine infant jesus intercession',
    'trust novena',
    'catholic novena',
    'novena to the divine infant'
  ],
  openGraph: {
    title: 'Novena of Trust to the Divine Infant Jesus - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of Trust to the Divine Infant Jesus with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/divine-infant-jesus',
  },
  twitter: {
    title: 'Novena of Trust to the Divine Infant Jesus - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of Trust to the Divine Infant Jesus with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Childlike Trust',
    description: 'Pray with childlike trust to the Divine Infant Jesus.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Consolation for Christians',
    description: 'Pray for the consolation that the Divine Infant brings to Christians.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Grace in Blessed Hands',
    description: 'Pray to leave your needs in the blessed hands of the Divine Infant.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Trust in Burdens',
    description: 'Pray to trust all your burdens to the Divine Infant Jesus.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Peace for the Troubled',
    description: 'Pray for peace for the troubled and relief for your heart.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Undeserved Love',
    description: 'Pray recognizing the undeserved love of the Divine Infant.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Son of God',
    description: 'Pray to the Divine Infant as the Son of God and help for Christians.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Never Disappointed',
    description: 'Pray with confidence that no one who implores the Divine Infant is disappointed.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Faith and Trust',
    description: 'Pray with faith, trust, humility, repentance, love, and hope.',
    slug: 'day-9'
  }
]

export default function DivineInfantJesusNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of Trust to the Divine Infant Jesus
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer of trust to the Divine Infant Jesus, 
            placing all our needs in His blessed hands with childlike confidence.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Infant</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🤝</div>
              <div className="text-sm text-gray-600">Trust</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena of Trust to the Divine Infant Jesus
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena of Trust to the Divine Infant Jesus is a beautiful nine-day prayer that teaches us 
              to approach God with the simplicity and trust of a child. This novena helps us place all our 
              needs, burdens, and concerns in the blessed hands of the Divine Infant Jesus.
            </p>
            
            <p className="mb-4">
              Through this novena, we learn to trust completely in the Divine Infant's love and power. 
              We pray for consolation, peace, relief from burdens, and the grace we need, always remembering 
              that no one who has implored the Divine Infant Jesus has ever been disappointed.
            </p>
            
            <p>
              This novena reminds us that the Divine Infant Jesus is the Son of God who came to earth 
              as a helpless child, showing us the way of humility, trust, and complete dependence on God.
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
                href={`/novenas/divine-infant-jesus/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Childlike Trust</h3>
              <p className="text-gray-700 text-sm">
                Approach the Divine Infant Jesus with the simple, trusting heart of a child. 
                Believe that He will hear and answer your prayers with love and compassion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Divine Infant Jesus will not fail 
                to help those who turn to Him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to the Divine Infant Jesus. 
                Trust that He knows your burdens and will provide the grace you need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Divine Infant Jesus for His love and for the graces you receive. 
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
                Believe in the Divine Infant Jesus as the Son of God who came to save us. 
                Trust in His power and love to help us in all our needs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Divine Infant's promise that no one who implores Him will be disappointed. 
                Maintain confidence that He will provide the grace you need.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for the Divine Infant Jesus and for others. Include in your intentions the needs of 
                all who are troubled and in need of consolation.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Divine Infant Jesus? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Divine Infant Jesus?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Divine Infant Jesus</strong> is Jesus Christ as a child, the Son of God who came to earth 
              as a helpless infant to show us the way of humility, trust, and complete dependence on God. 
              This devotion honors Him in His childhood and teaches us to approach God with childlike trust.
            </p>
            
            <p className="mb-4">
              <strong>Childlike Trust</strong> - The Divine Infant Jesus teaches us to trust in God with the simplicity 
              and confidence of a child. Just as a child trusts completely in their parents, we are called to trust 
              completely in God's love and care for us.
            </p>
            
            <p className="mb-4">
              <strong>Consolation and Peace</strong> - The Divine Infant Jesus is a source of consolation for all Christians. 
              He brings peace to the troubled heart and relief from burdens. His love is unconditional and His help 
              is always available to those who trust in Him.
            </p>
            
            <p className="mb-4">
              <strong>Never Disappointed</strong> - The tradition of this devotion assures us that no one who has implored 
              the Divine Infant Jesus has ever been disappointed. He is faithful to His promise to help all who turn to Him 
              with trust and confidence.
            </p>
            
            <p>
              <strong>Feast Days</strong> - The Feast of the Nativity of the Lord (Christmas) celebrates the birth of the Divine Infant, 
              and this novena is especially popular among those seeking to grow in trust, find consolation in difficulties, 
              and experience the love of the Divine Infant Jesus.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 