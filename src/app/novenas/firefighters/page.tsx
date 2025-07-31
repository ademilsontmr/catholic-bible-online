import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Firefighters - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Firefighters with daily prayers, reflections, and guidance. Pray for the protection, strength, and grace of firefighters.',
  keywords: [
    'novena for firefighters',
    'firefighters novena',
    'firefighter prayer',
    'firefighter protection prayer',
    'firefighter safety novena',
    'firefighter blessing prayer',
    'firefighter nine day prayer',
    'firefighter devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Firefighters - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Firefighters with daily prayers, reflections, and guidance for spiritual protection.',
    url: 'https://catholicbibleonline.com/novenas/firefighters',
  },
  twitter: {
    title: 'Novena for Firefighters - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Firefighters with daily prayers, reflections, and guidance for spiritual protection.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'New Firefighters',
    description: 'Pray for new firefighters who are beginning their demanding work and need God\'s grace and assistance.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Exhaustion',
    description: 'Pray for firefighters who are struggling with exhaustion from long hours of physical labor and emotional toll.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Forest Fires',
    description: 'Pray for firefighters who work to fight forest fires and face the great destruction these fires can bring.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Protection',
    description: 'Pray for the protection of firefighters who face grave danger as they work to save people from fires.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Grief',
    description: 'Pray for firefighters who are struggling with grief after encountering victims who perished in fires.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Perseverance',
    description: 'Pray for firefighters to grow in the virtue of perseverance amidst the many difficulties they face.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Trust',
    description: 'Pray for firefighters to grow in trust in God as they risk their lives in their work.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Holy Suffering',
    description: 'Pray for firefighters to grow in the ability to make holy use of their sufferings and grow in union with God.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Work',
    description: 'Pray for firefighters to grow in the ability to offer all their work to God for holiness and reparation.',
    slug: 'day-9'
  }
]

export default function NovenaForFirefightersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Firefighters
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's protection, strength, and grace for firefighters.
            This traditional novena helps us pray for those who risk their lives to protect others from fires.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🚒</div>
              <div className="text-sm text-gray-600">Firefighters</div>
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
            About the Novena for Firefighters
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Firefighters is a traditional nine-day prayer designed to seek God's protection, 
              strength, and grace for firefighters who risk their lives to protect others from fires. 
              Firefighters face many dangers and difficulties in their work, and this novena helps us pray for their safety and well-being.
            </p>
            
            <p className="mb-4">
              The title "Firefighters" reminds us of the heroic men and women who dedicate their lives to protecting 
              others from the destructive power of fire. They face physical exhaustion, emotional trauma, and even 
              the risk of death in their daily work.
            </p>
            
            <p>
              This novena helps us to pray for firefighters in their various needs - from new recruits learning 
              their demanding work to experienced firefighters dealing with grief and trauma from their experiences.
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
                href={`/novenas/firefighters/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the service of firefighters and their dedication to protecting others. 
                Express gratitude for their courage and sacrifice.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Pray for specific needs of firefighters - protection, strength, healing from trauma, 
                and grace to continue their difficult work.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who pray for others with love.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Compassionate</h3>
              <p className="text-gray-700 text-sm">
                Show compassion for the difficulties firefighters face. 
                Pray with empathy for their physical and emotional challenges.
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
                Believe in God's protection and care for firefighters. 
                Trust that He will provide the strength they need for their work.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to protect and strengthen firefighters. 
                Look forward to their safety and well-being.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love firefighters as our brothers and sisters in Christ. 
                Show love through prayer and support for their difficult work.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Firefighters Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Firefighters devotion is a way of praying for and supporting those who risk their lives 
            to protect others from fires, seeking God's protection and grace for them.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Firefighters Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🚒</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Safety</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Courage</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Grace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for the protection and safety of firefighters</li>
              <li>• Support firefighters in their difficult and dangerous work</li>
              <li>• Show gratitude for their service and sacrifice</li>
              <li>• Ask for God's grace and strength for firefighters</li>
              <li>• Grow in compassion and prayer for others</li>
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