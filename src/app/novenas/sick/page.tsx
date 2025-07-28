import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Sick - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for the Sick with daily prayers, reflections, and guidance. Pray for miraculous healing and comfort for the sick with faith and hope.',
  keywords: [
    'novena for the sick',
    'prayer for the sick',
    'healing prayer for sick',
    'catholic prayer for sick',
    'sick person prayer',
    'illness prayer',
    'sick family member prayer',
    'healing devotion for sick',
    'catholic novena for sick',
    'sick person nine day prayer',
    'miracle healing for sick',
    'sick prayer faith hope'
  ],
  openGraph: {
    title: 'Novena for the Sick - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Sick with daily prayers, reflections, and guidance for miraculous healing and comfort.',
    url: 'https://catholic-bible-online.com/novenas/sick',
  },
  twitter: {
    title: 'Novena for the Sick - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Sick with daily prayers, reflections, and guidance for miraculous healing and comfort.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Faith in God\'s Healing Power',
    description: 'Pray for unwavering faith in God\'s power to heal the sick completely.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope for Recovery',
    description: 'Pray for hope and confidence in God\'s plan for healing and restoration.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Comfort',
    description: 'Pray for God\'s comfort and peace to surround the sick person.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Strength and Courage',
    description: 'Pray for strength and courage to face illness with dignity.',
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
    theme: 'Medical Wisdom',
    description: 'Pray for wisdom for doctors and medical professionals.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Family Support',
    description: 'Pray for strength and support for family members and caregivers.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Gratitude for Care',
    description: 'Pray with gratitude for the care and love received.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Healing',
    description: 'Pray for complete healing and restoration of health.',
    slug: 'day-9'
  }
]

export default function NovenaForTheSickPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Sick
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for the sick, seeking God's miraculous healing touch and divine comfort 
            for those who are suffering from illness. Pray with faith and hope for complete restoration of health.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏥</div>
              <div className="text-sm text-gray-600">Healing</div>
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
            About the Novena for the Sick
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for the Sick is a powerful nine-day prayer that focuses specifically on seeking God's 
              miraculous healing touch for those who are suffering from illness, disease, or physical weakness. 
              This novena addresses all aspects of healing: physical, emotional, and spiritual.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of healing for the sick, helping both the 
              sick person and their loved ones to place their complete trust in God's healing power. Whether 
              you're praying for yourself or for others who are ill, this novena will guide you through prayers 
              of faith, hope, and trust in God's ability to work miracles in the lives of the sick.
            </p>
            
            <p>
              God is the ultimate healer of body and soul, and through this novena, we can entrust the health 
              of the sick to His loving care, confident that He hears our prayers and desires complete healing 
              and restoration for all who suffer.
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
                href={`/novenas/sick/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God's power to heal the sick completely. Believe that nothing is impossible for God.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific healing needs to God. Be clear about who is sick and what healing you're asking for.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves the sick person and will answer your prayers for healing according to His perfect will and timing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the healing that is coming and for the care and support that the sick person has already received.
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
                Believe in God's power to heal the sick completely. Trust that He can work miracles in their health.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises for healing and His ability to restore health and vitality to the sick.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for the sick person. Let His love be their source of strength.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Sick Person Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Sick person prayer is a powerful devotion that recognizes God as the ultimate healer and places our complete trust in His miraculous power to restore health and comfort to those who are suffering from illness.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Sick Person Prayer Devotion</h3>
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
                <span>🏥</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Miracles</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💚</span>
                <span>Comfort</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Place our complete trust in God's power to heal the sick</li>
              <li>• Pray with faith and hope for miraculous healing and restoration</li>
              <li>• Seek God's mercy and compassion for those who are suffering</li>
              <li>• Believe in miracles and God's ability to work wonders in the lives of the sick</li>
              <li>• Thank God for the healing that is coming and the care already received</li>
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