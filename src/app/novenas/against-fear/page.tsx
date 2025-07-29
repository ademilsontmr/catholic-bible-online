import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena Against Fear - Complete 9-Day Prayer Guide',
  description: 'Complete Novena Against Fear with daily prayers, reflections, and guidance. Pray for courage, trust, and freedom from fear.',
  keywords: [
    'novena against fear',
    'fear prayer novena',
    'courage novena prayer',
    'overcome fear novena',
    'fear strength novena',
    'fear trust novena',
    'fear freedom novena',
    'fear wisdom novena',
    'fear perseverance novena',
    'catholic fear prayer'
  ],
  openGraph: {
    title: 'Novena Against Fear - Complete 9-Day Prayer Guide',
    description: 'Complete Novena Against Fear with daily prayers, reflections, and guidance for courage and freedom from fear.',
    url: 'https://catholicbibleonline.com/novenas/against-fear',
  },
  twitter: {
    title: 'Novena Against Fear - Complete 9-Day Prayer Guide',
    description: 'Complete Novena Against Fear with daily prayers, reflections, and guidance for courage and freedom from fear.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'True Courage',
    description: 'Pray for help to grow in true courage in the face of fear.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'True Wisdom',
    description: 'Pray for wisdom to triumph over harmful fears.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Trust in God',
    description: 'Pray for growth in trust in God to overcome fear.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Perseverance',
    description: 'Pray for perseverance in the battle against fear.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Daily Duties',
    description: 'Pray for help when fear prevents carrying out daily duties.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Relationships',
    description: 'Pray for help when fear interferes in relationships.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Prayer Life',
    description: 'Pray for help when fear interferes in relationship with God.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Virtue of Courage',
    description: 'Pray for help to practice the virtue of courage.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Rightly Ordered Fears',
    description: 'Pray for help to order fears rightly and prioritize spiritual over physical.',
    slug: 'day-9'
  }
]

export default function NovenaAgainstFearPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena Against Fear
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's help in overcoming fear and finding true courage.
            This traditional novena helps you develop trust, wisdom, and perseverance in the face of fear.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛡️</div>
              <div className="text-sm text-gray-600">Courage</div>
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
            About the Novena Against Fear
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena Against Fear is a powerful spiritual practice designed to help you overcome the fears 
              that can interfere with your daily life and relationship with God. This novena recognizes that 
              fear is a powerful emotion that can prevent us from carrying out our duties, maintaining healthy 
              relationships, and growing in our spiritual life.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to God for the courage, wisdom, 
              and trust needed to overcome fear. This novena helps you to understand that God is all good 
              and cares for each of your needs, and that with His help, you can develop true courage in 
              the face of any fear.
            </p>
            
            <p>
              Whether you are struggling with irrational fears, fear of physical harm, or fear that interferes 
              with your relationships and prayer life, this novena will help you to find the strength and 
              trust you need to overcome fear and live a life of courage and faith.
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
                href={`/novenas/against-fear/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's power to help you overcome any fear and find true courage.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for overcoming fear.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's care and provision for all your needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Practice courage daily and rely on God's strength in every situation.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to help you overcome fear and find courage.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to provide all you need to overcome fear.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His care for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is Fear? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Fear?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Fear is a powerful emotion that can serve as a protective mechanism, but when it becomes excessive 
              or irrational, it can interfere with our daily lives, relationships, and spiritual growth. Fear 
              can prevent us from carrying out our duties, maintaining healthy relationships, and growing in 
              our relationship with God.
            </p>
            <p className="mb-4">
              The Catholic understanding of fear recognizes that while some fear is natural and protective, 
              excessive fear can be harmful and prevent us from living the life God calls us to. God wants 
              us to have courage and trust in Him, knowing that He cares for each of our needs and provides 
              all that we need to overcome our fears.
            </p>
            <p>
              This novena helps you to bring all your fears to God, who understands your struggles and wants 
              to provide you with the courage, wisdom, and trust you need to overcome fear and live a life 
              of freedom and faith.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Courage</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward overcoming fear and finding true courage, start with Day 1 
            of this novena. Remember that God is all good and cares for each of your needs. Trust in His power 
            to help you overcome any fear and find the courage you need to live a life of freedom and faith.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/against-fear/day-1"
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
            >
              Start Day 1: True Courage →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 