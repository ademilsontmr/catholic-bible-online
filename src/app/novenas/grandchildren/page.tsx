import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance. Pray for God\'s grace to help all grandchildren grow in faith, hope, and love.',
  keywords: [
    'novena for grandchildren',
    'grandchildren novena',
    'grandchildren prayer',
    'novena for grandchildren prayer',
    'grandchildren nine day prayer',
    'grandchildren devotion',
    'grandchildren catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/grandchildren',
  },
  twitter: {
    title: 'Novena for Grandchildren - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Grandchildren with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Healing and Strength',
    description: 'Pray for strength and healing for grandchildren who are sick or suffering in any way.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Submission to God\'s Will',
    description: 'Pray for grandchildren to grow in true submission to God\'s will.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Growth in Faith',
    description: 'Pray for grandchildren to grow in the virtue of faith.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Growth in Hope',
    description: 'Pray for grandchildren to grow in the virtue of hope.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Growth in Charity',
    description: 'Pray for grandchildren to grow in the virtue of charity.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'True Piety',
    description: 'Pray for grandchildren to grow in true piety.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'True Humility',
    description: 'Pray for grandchildren to grow in the virtue of humility.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Intimacy with God',
    description: 'Pray for grandchildren to grow in true intimacy with God.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Response to Vocation',
    description: 'Pray for grandchildren to respond generously to God\'s call.',
    slug: 'day-9'
  }
]

export default function GrandchildrenNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grandchildren
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to help all grandchildren grow in faith, hope, and love.
            This traditional novena helps us seek God's grace for the spiritual growth of our beloved grandchildren.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Grandchildren</div>
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
            About the Novena for Grandchildren
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Grandchildren is a traditional nine-day prayer that helps us seek God's grace 
              for all our beloved grandchildren. This novena recognizes the special bond between grandparents 
              and grandchildren and the important role we play in their spiritual formation.
            </p>
            
            <p className="mb-4">
              Grandchildren are a precious gift from God, bringing joy, love, and new life to our families. 
              As grandparents, we have a unique opportunity to share our faith, wisdom, and love with them. 
              This novena helps us to pray for their spiritual growth and to ask God's blessing upon their lives.
            </p>
            
            <p>
              This novena helps us to trust in God's grace and to seek His assistance for all our grandchildren, 
              knowing that He wants to help them grow in virtue, faith, and holiness. Through our prayers, 
              we can be instruments of God's love in their lives.
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
                href={`/novenas/grandchildren/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-rose-50 rounded-lg p-8 mb-12">
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
                Believe in God's power to help grandchildren grow in faith.
                Trust that He will guide them in their spiritual journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to help them grow in virtue.
                He is always ready to assist them in their spiritual growth.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for grandchildren.
                Show your love through prayer and example.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-rose-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Grandchildren Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Grandchildren devotion is a way of seeking God's grace and assistance for all our beloved grandchildren 
            as they grow in faith, hope, and love.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Grandchildren Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👶</span>
                <span>Grandchildren</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💝</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Faith</span>
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
              <li>• Trust in God's grace to help grandchildren grow spiritually</li>
              <li>• Pray for their growth in faith, hope, and charity</li>
              <li>• Support them in developing virtues and holiness</li>
              <li>• Ask for God's guidance in their spiritual journey</li>
              <li>• Grow in gratitude for the gift of grandchildren</li>
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