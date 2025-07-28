import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Physical Healing - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Physical Healing with daily prayers, reflections, and guidance. Pray for miraculous physical healing with faith and hope.',
  keywords: [
    'physical healing novena',
    'novena for physical healing',
    'physical healing prayer',
    'miraculous healing prayer',
    'body healing prayer',
    'physical restoration prayer',
    'healing devotion',
    'catholic physical healing novena',
    'physical healing nine day prayer',
    'miracle physical healing',
    'physical healing faith prayer',
    'physical healing hope prayer'
  ],
  openGraph: {
    title: 'Novena for Physical Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Physical Healing with daily prayers, reflections, and guidance for miraculous physical restoration.',
    url: 'https://catholic-bible-online.com/novenas/physical-healing',
  },
  twitter: {
    title: 'Novena for Physical Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Physical Healing with daily prayers, reflections, and guidance for miraculous physical restoration.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Faith in Physical Healing',
    description: 'Pray for unwavering faith in God\'s power to heal the body completely.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope for Physical Recovery',
    description: 'Pray for hope and confidence in God\'s plan for physical restoration.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Touch',
    description: 'Pray for God\'s miraculous touch to restore health and vitality.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Strength and Energy',
    description: 'Pray for renewed strength and energy to overcome physical weakness.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Pain Relief',
    description: 'Pray for relief from pain and suffering in the body.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Organ Healing',
    description: 'Pray for healing of specific organs and bodily systems.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Complete Restoration',
    description: 'Pray for complete physical restoration and wholeness.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Gratitude for Healing',
    description: 'Pray with gratitude for the physical healing that is coming.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Miraculous Healing',
    description: 'Pray for miraculous physical healing that glorifies God.',
    slug: 'day-9'
  }
]

export default function NovenaForPhysicalHealingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Physical Healing
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for physical healing, seeking God's miraculous touch to restore health, 
            strength, and vitality to the body. Pray with faith and hope for complete physical restoration.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💪</div>
              <div className="text-sm text-gray-600">Strength</div>
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
            About the Novena for Physical Healing
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Physical Healing is a powerful nine-day prayer that focuses specifically on seeking God's 
              miraculous healing touch for the body. This novena addresses all aspects of physical healing: strength, 
              energy, pain relief, organ healing, and complete restoration.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of physical healing, helping those who are suffering 
              from illness, injury, or physical weakness to place their complete trust in God's healing power. Whether 
              you're praying for yourself or for others, this novena will guide you through prayers of faith, hope, and 
              trust in God's ability to work miracles in the body.
            </p>
            
            <p>
              God is the ultimate healer of body and soul, and through this novena, we can entrust our physical health 
              to His loving care, confident that He hears our prayers and desires our complete physical restoration.
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
                href={`/novenas/physical-healing/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God's power to heal the body completely. Believe that nothing is impossible for God.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific physical healing needs to God. Be clear about what part of the body needs healing and what you're asking for.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves you and will answer your prayers for physical healing according to His perfect will and timing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the physical healing that is coming and for the strength and health you have already received.
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
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to heal the body completely. Trust that He can work miracles in your physical health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises for physical healing and His ability to restore strength and vitality to your body.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. Let His love be your source of strength and healing.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Physical Healing Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Physical healing prayer is a powerful devotion that recognizes God as the ultimate healer of the body and places our complete trust in His miraculous power to restore physical health and vitality.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Physical Healing Prayer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Hope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Miracles</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏥</span>
                <span>Healing</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Place our complete trust in God's power to heal the body</li>
              <li>• Pray with faith and hope for miraculous physical restoration</li>
              <li>• Seek God's mercy and compassion for physical suffering</li>
              <li>• Believe in miracles and God's ability to work wonders in the body</li>
              <li>• Thank God for the physical healing that is coming and the strength received</li>
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