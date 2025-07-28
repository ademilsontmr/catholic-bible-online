import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Children - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Children with daily prayers, reflections, and guidance. Pray for children\'s protection, growth, and God\'s blessings.',
  keywords: [
    'children novena',
    'novena for children',
    'children prayer',
    'child protection prayer',
    'children blessing prayer',
    'children devotion',
    'catholic children novena',
    'children nine day prayer',
    'child protection novena',
    'children love prayer',
    'children faith prayer'
  ],
  openGraph: {
    title: 'Novena for Children - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Children with daily prayers, reflections, and guidance for children\'s protection and blessings.',
    url: 'https://catholic-bible-online.com/novenas/children',
  },
  twitter: {
    title: 'Novena for Children - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Children with daily prayers, reflections, and guidance for children\'s protection and blessings.',
  },
}

const novenaDays = [
  {
    day: 1,
    theme: 'Child Protection',
    description: 'Pray for God\'s divine protection over children, guarding them from all physical and spiritual harm.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Child Innocence',
    description: 'Pray for the preservation of children\'s innocence and purity of heart in a challenging world.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Child Wisdom',
    description: 'Pray for children to grow in wisdom and understanding, making good choices in life.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Child Faith',
    description: 'Pray for children to develop a strong faith in God and grow spiritually from an early age.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Child Health',
    description: 'Pray for children\'s physical and mental health, strength, and overall well-being.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Child Education',
    description: 'Pray for children\'s education, learning abilities, and academic success with God\'s guidance.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Child Friendship',
    description: 'Pray for children to form good friendships and positive relationships with others.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Child Future',
    description: 'Pray for children\'s future, their vocation, and God\'s plan for their lives.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Child Blessings',
    description: 'Pray for God\'s abundant blessings upon children and gratitude for the gift of children.',
    slug: 'day-9'
  }
]

export default function NovenaForChildrenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Children
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer for children, seeking God's protection, guidance, and blessings for the little ones. 
            Pray for children's innocence, wisdom, faith, and future.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Children</div>
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
            About the Novena for Children
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Children is a powerful nine-day prayer that focuses on seeking God's protection, 
              guidance, and blessings for children. This novena addresses the most important aspects of a child's life: 
              protection, innocence, wisdom, faith, health, education, friendship, future, and blessings.
            </p>
            
            <p className="mb-4">
              Each day of this novena focuses on a specific aspect of children's well-being, helping parents, 
              grandparents, and all who love children to pray intentionally for their needs. Whether you're praying 
              for protection, wisdom, or God's plan for their future, this novena will guide you through meaningful prayers.
            </p>
            
            <p>
              Children are a precious gift from God, and through this novena, we can entrust them to His loving care 
              and ask for His guidance in raising them according to His will.
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
                href={`/novenas/children/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with deep love for children and concern for their well-being. 
                Let your love for them fuel your prayers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific children and their particular needs to God. Whether it's protection, 
                wisdom, or health, be clear about what you're asking for.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves children even more than we do and will answer our prayers 
                according to His perfect will for their lives.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of children and for the blessings they bring to our lives. 
                Gratitude opens our hearts to receive more graces.
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
                Believe in God's love for children and His power to protect and guide them. 
                Trust that He has a special plan for each child.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🕊️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises for children and His ability to work all things for their good. 
                Trust in His perfect timing and plan.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love children with God's love, showing patience, understanding, and unconditional care. 
                Let love be the foundation of all our prayers for them.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Children Prayer Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Children prayer is a powerful devotion that recognizes children as precious gifts from God, 
            deserving of our prayers, protection, and guidance.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Children Prayer Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Innocence</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🧠</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Health</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📚</span>
                <span>Education</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Entrust children to God's loving care and protection</li>
              <li>• Pray for their spiritual, physical, and emotional well-being</li>
              <li>• Seek God's guidance in raising children according to His will</li>
              <li>• Ask for wisdom and patience in our role as caregivers</li>
              <li>• Thank God for the precious gift of children in our lives</li>
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