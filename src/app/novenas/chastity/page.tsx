import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Chastity with daily prayers, reflections, and guidance. Pray for God\'s grace to help us live truly chaste lives.',
  keywords: [
    'novena for chastity',
    'chastity novena',
    'chastity prayer',
    'novena for chastity prayer',
    'chastity nine day prayer',
    'chastity devotion',
    'chastity catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Chastity - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Chastity with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/chastity',
  },
  twitter: {
    title: 'Novena for Chastity - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Chastity with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Temperance',
    description: 'Pray for growth in chastity through the practice of temperance in all areas of life.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Perseverance',
    description: 'Pray for the perseverance needed to truly live chaste lives.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Patience',
    description: 'Pray for patience in growing in the virtue of chastity.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Charity',
    description: 'Pray to grow in charity and direct all efforts in chastity to love of God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Love for God\'s Laws',
    description: 'Pray to grow in sincere love for God\'s moral laws and commandments.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Friendship with God',
    description: 'Pray to grow in deeper friendship with God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Overcoming Despair',
    description: 'Pray for all who despair of living chaste lives.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Conversion',
    description: 'Pray for the conversion of all who disdain chastity.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Society',
    description: 'Pray for our society to practice and respect chastity.',
    slug: 'day-9'
  }
]

export default function ChastityNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to help us live truly chaste lives and grow in the virtue of chastity.
            This traditional novena helps us seek God's grace to overcome temptations and live in accordance with His will.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💎</div>
              <div className="text-sm text-gray-600">Purity</div>
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
            About the Novena for Chastity
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Chastity is a traditional nine-day prayer that helps us seek God's grace to live truly chaste lives. 
              In our fallen world, the practice of chastity can be very difficult, but with God's help, we can grow in this essential virtue.
            </p>
            
            <p className="mb-4">
              Chastity is not just about avoiding sin, but about living in accordance with God's plan for human sexuality 
              and growing in purity of heart and mind. This novena helps us to turn to God for the strength and grace 
              we need to overcome temptations and live virtuously.
            </p>
            
            <p>
              This novena helps us to trust in God's providence and to seek His grace for all who struggle with chastity, 
              knowing that He wants to help us grow in holiness and virtue.
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
                href={`/novenas/chastity/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
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
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to help you grow in chastity.
                Trust that He will give you the grace you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to help you overcome temptations.
                He is always ready to assist you in your struggles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for you.
                Show your love through obedience to His laws.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Chastity Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Chastity devotion is a way of seeking God's grace and assistance to live truly chaste lives 
            and grow in the virtue of chastity.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Chastity Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💎</span>
                <span>Purity</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>Perseverance</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>9 Days</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's grace to help us live chaste lives</li>
              <li>• Grow in purity of heart and mind</li>
              <li>• Overcome temptations and grow in virtue</li>
              <li>• Live in accordance with God's plan for human sexuality</li>
              <li>• Grow closer to God through obedience to His laws</li>
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