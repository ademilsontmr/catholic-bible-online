import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Business Success - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Business Success with daily prayers, reflections, and guidance. Pray for God\'s grace to help us find success in business endeavors.',
  keywords: [
    'novena for business success',
    'business success novena',
    'business success prayer',
    'novena for business success prayer',
    'business success nine day prayer',
    'business success devotion',
    'business success catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Business Success - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Business Success with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/business-success',
  },
  twitter: {
    title: 'Novena for Business Success - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Business Success with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Wisdom',
    description: 'Pray for the wisdom needed for success in business.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Perseverance',
    description: 'Pray for the perseverance needed for success in business.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Virtuous Business Practices',
    description: 'Pray to find success while growing in commitment to virtuous business practices.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Submission to God\'s Will',
    description: 'Pray to grow in submission to God\'s will as we work for success in business.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Courage',
    description: 'Pray for the courage needed for success in business.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Holiness',
    description: 'Pray to grow in holiness as we seek success in business.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Leading Souls to God',
    description: 'Pray for success to all businesses that lead souls to God.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Relief to Suffering',
    description: 'Pray for success to all businesses that bring relief to suffering in our world.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Dedication to God',
    description: 'Pray to orient all of our work to God as we strive for success in business.',
    slug: 'day-9'
  }
]

export default function BusinessSuccessNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Business Success
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to help us find success in business endeavors while growing in virtue and holiness.
            This traditional novena helps us seek God's grace to achieve both worldly and spiritual success.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💼</div>
              <div className="text-sm text-gray-600">Success</div>
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
            About the Novena for Business Success
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Business Success is a traditional nine-day prayer that helps us seek God's grace to find success 
              in our business endeavors while maintaining our commitment to virtue and holiness.
            </p>
            
            <p className="mb-4">
              Business success is not just about financial gain, but about using our talents and resources to serve God 
              and others. This novena helps us to align our business goals with God's will and to pursue success 
              in a way that glorifies Him.
            </p>
            
            <p>
              This novena helps us to trust in God's providence and to seek His guidance in all our business decisions, 
              knowing that He wants to help us succeed while growing in holiness.
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
                href={`/novenas/business-success/${day.slug}`}
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
                Believe in God's power to help you succeed in business.
                Trust that He will guide you in your decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to bring success.
                He is always ready to assist you in your endeavors.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for you.
                Show your love through dedication to His will.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Business Success Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Business Success devotion is a way of seeking God's grace and assistance to find success 
            in business endeavors while maintaining our commitment to virtue and holiness.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Business Success Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💼</span>
                <span>Success</span>
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
                <span>💡</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Courage</span>
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
              <li>• Trust in God's grace to help us succeed in business</li>
              <li>• Maintain virtue and holiness in our business practices</li>
              <li>• Align our business goals with God's will</li>
              <li>• Use our success to serve God and others</li>
              <li>• Grow in wisdom and courage in our endeavors</li>
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