import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Families - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Families with daily prayers, reflections, and guidance. Pray for family unity, love, and God\'s blessings.',
  keywords: [
    'family novena',
    'novena for families',
    'family prayer',
    'family unity prayer',
    'family blessing prayer',
    'family devotion',
    'catholic family novena',
    'family nine day prayer',
    'family unity novena',
    'family love prayer',
    'family protection prayer'
  ],
  openGraph: {
    title: 'Novena for Families - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Families with daily prayers, reflections, and guidance for family unity and blessings.',
    url: 'https://catholic-bible-online.com/novenas/families',
  },
  twitter: {
    title: 'Novena for Families - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Families with daily prayers, reflections, and guidance for family unity and blessings.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Family Unity',
    description: 'Pray for unity and harmony in the family, removing divisions and conflicts.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Family Love',
    description: 'Pray for an increase of love in the family, showing affection and encouragement.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Family Protection',
    description: 'Pray for God\'s protection over all family members from physical and spiritual harm.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Family Communication',
    description: 'Pray for better communication, speaking with love and listening with patience.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Family Faith',
    description: 'Pray for an increase of faith in the family and spiritual growth together.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Family Healing',
    description: 'Pray for healing of wounds and restoration of broken relationships.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Family Blessings',
    description: 'Pray for God\'s abundant blessings upon the family and gratitude for His gifts.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Family Peace',
    description: 'Pray for peace in the family, filling the home with tranquility and harmony.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Family Gratitude',
    description: 'Pray with gratitude for the family and express thanks for God\'s goodness.',
    slug: 'day-9'
  }
]

export default function NovenaForFamiliesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Families
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer for families, seeking God's blessing, protection, and unity for your family. 
            Strengthen family bonds through prayer and devotion.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧‍👦</div>
              <div className="text-sm text-gray-600">Family</div>
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
            About the Novena for Families
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Families is a powerful nine-day prayer that focuses on strengthening family bonds, 
              seeking God's protection, and asking for His blessings upon your family. This novena addresses 
              the most important aspects of family life: unity, love, communication, faith, and peace.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of family life, helping you to pray 
              intentionally for your family's needs. Whether you're praying for unity, healing relationships, 
              or seeking God's protection, this novena will guide you through meaningful prayers for your family.
            </p>
            
            <p>
              The family is the domestic church, and through this novena, you can strengthen your family's 
              spiritual foundation and draw closer to God together.
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
                href={`/novenas/families/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray Together</h3>
              <p className="text-gray-700 text-sm">
                Gather your family to pray this novena together. Family prayer strengthens bonds and creates 
                a powerful spiritual atmosphere in your home.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific family needs and intentions to God. Whether it's unity, healing, 
                or protection, be clear about what you're asking for.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God hears your prayers and will answer them according to His will. 
                Have faith that He wants what's best for your family.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for your family and for the blessings you already have. 
                Gratitude opens your heart to receive more graces.
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
                Believe in God's love for your family and His power to transform relationships.
                Trust that He will guide and protect your family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's promises and His plan for your family's future and well-being.
                Hope in His ability to heal and strengthen your family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love your family members with God's love, showing patience, forgiveness, and kindness.
                Let love be the foundation of all your family relationships.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Family Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Family prayer is a powerful devotion that recognizes the family as the domestic church, 
            where God's presence is felt and His grace flows abundantly.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Family Prayer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Unity</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🗣️</span>
                <span>Communication</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps families to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Strengthen family bonds through shared spiritual experiences</li>
              <li>• Create a foundation of faith that children can build upon</li>
              <li>• Seek God's protection and guidance for all family members</li>
              <li>• Heal wounds and restore broken relationships</li>
              <li>• Develop a culture of prayer and gratitude in the home</li>
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