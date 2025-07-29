import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guardian Angel Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Guardian Angel Novena with daily prayers, reflections, and guidance. Pray for protection, guidance, and divine assistance from your personal guardian angel.',
  keywords: [
    'guardian angel novena',
    'angel novena',
    'guardian angel prayer novena',
    'angel protection novena',
    'angel guidance novena',
    'angel counselor novena',
    'angel defender novena',
    'angel intercessor novena',
    'angel light novena',
    'catholic angel novena'
  ],
  openGraph: {
    title: 'Guardian Angel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Guardian Angel Novena with daily prayers, reflections, and guidance for protection and divine assistance.',
    url: 'https://catholicbibleonline.com/novenas/guardian-angel',
  },
  twitter: {
    title: 'Guardian Angel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Guardian Angel Novena with daily prayers, reflections, and guidance for protection and divine assistance.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Divine Counselor',
    description: 'Pray for inspiration and guidance from your guardian angel as your daily counselor.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Divine Defender',
    description: 'Pray for protection from sin and bodily harm through your guardian angel.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Divine Consoler',
    description: 'Pray for strength and fortification during life\'s difficult moments.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Divine Teacher',
    description: 'Pray for instruction and wisdom to become the person God calls you to be.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Witness',
    description: 'Pray for purification and cleansing from sinful habits and temptations.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Divine Helper',
    description: 'Pray for support and assistance in your spiritual journey.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Divine Intercessor',
    description: 'Pray for your guardian angel to speak on your behalf to the Lord.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Guide',
    description: 'Pray for direction and guidance on your path of life and faith.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Divine Light',
    description: 'Pray for enlightenment to see God\'s loving face and become a light for others.',
    slug: 'day-9'
  }
]

export default function GuardianAngelNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Guardian Angel Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor and seek guidance from your personal guardian angel.
            This traditional novena helps you develop a deeper relationship with your heavenly protector.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👼</div>
              <div className="text-sm text-gray-600">Angel</div>
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
            About Guardian Angel Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Guardian Angel Novena is a profound spiritual practice designed to honor and seek guidance from your personal 
              guardian angel, whom God has assigned to protect your body and soul. This novena recognizes that each of us has 
              a heavenly companion who is with us every moment of our lives.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to your guardian angel for counsel, protection, 
              consolation, and guidance. This novena helps you to understand that your angel is not only your protector but 
              also your counselor, defender, teacher, and intercessor before God.
            </p>
            
            <p>
              Whether you are seeking protection from harm, guidance in difficult decisions, consolation in sorrow, or simply 
              want to develop a deeper relationship with your guardian angel, this novena will help you to recognize and 
              appreciate the constant presence and care of your heavenly companion.
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
                href={`/novenas/guardian-angel/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Aware</h3>
              <p className="text-gray-700 text-sm">
                Be aware of your guardian angel\'s constant presence and protection.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for your guardian angel\'s tireless care and intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in your guardian angel\'s guidance and protection in all circumstances.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to receiving your guardian angel\'s counsel and inspiration.
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
                Believe in your guardian angel\'s power to guide and protect you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in your guardian angel\'s promise to lead you to Heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love your guardian angel and trust in their divine care for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is a Guardian Angel? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is a Guardian Angel?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              A Guardian Angel is a personal angel assigned by God to each individual from the moment of birth until death. 
              This heavenly companion is given to protect our body and soul, guide us in the ways of holiness, and intercede 
              for us before God.
            </p>
            <p className="mb-4">
              Your guardian angel is with you every moment of your life, serving as your counselor, defender, consoler, 
              teacher, witness, helper, intercessor, guide, and light. They know your intentions, your struggles, and your 
              deepest desires, and they work tirelessly to help you become the person God is calling you to be.
            </p>
            <p>
              Through this novena, we honor our guardian angels and seek to develop a deeper awareness of their constant 
              presence and care. We ask for their guidance, protection, and intercession as we strive to live holy lives 
              and grow closer to God.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with Your Guardian Angel</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor your guardian angel and seek their guidance and protection, 
            start with Day 1 of this novena. Remember that your guardian angel is with you always, 
            ready to counsel, defend, and guide you on your journey to Heaven.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/guardian-angel/day-1"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              Start Day 1: Divine Counselor →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 