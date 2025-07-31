import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Evangelization - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Evangelization with daily prayers, reflections, and guidance. Pray for those working to spread the Gospel and bring souls to Christ.',
  keywords: [
    'novena for evangelization',
    'evangelization novena',
    'gospel prayer',
    'missionary prayer',
    'spread gospel novena',
    'evangelism prayer',
    'evangelization nine day prayer',
    'mission work novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Evangelization - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Evangelization with daily prayers, reflections, and guidance for those spreading the Gospel.',
    url: 'https://catholicbibleonline.com/novenas/evangelization',
  },
  twitter: {
    title: 'Novena for Evangelization - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Evangelization with daily prayers, reflections, and guidance for those spreading the Gospel.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Discerning the Call',
    description: 'Pray for those who are discerning the call to devote their whole life to evangelization.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Priests',
    description: 'Pray for priests in their work of bringing souls to Christ.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Religious Orders',
    description: 'Pray for religious who work in evangelization.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Lay Missionaries',
    description: 'Pray for lay missionaries who work in evangelization.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Overcoming Difficulties',
    description: 'Pray for those who are having difficulty spreading the Gospel to those around them.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Openness to God\'s Will',
    description: 'Pray for us to grow in openness to God\'s will in evangelization.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Creativity',
    description: 'Pray for us to grow in creativity in the work of evangelization.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humility',
    description: 'Pray for us to grow in the humility necessary to effectively preach the Gospel.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Charity',
    description: 'Pray for us to grow in the charity necessary to effectively preach the Gospel.',
    slug: 'day-9'
  }
]

export default function NovenaForEvangelizationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Evangelization
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's help for those working to spread the Gospel and bring souls to Christ.
            This traditional novena helps us pray for evangelization efforts and grow in zeal for God's glory.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📖</div>
              <div className="text-sm text-gray-600">Gospel</div>
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
            About the Novena for Evangelization
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Evangelization is a traditional nine-day prayer designed to help those who are working 
              to spread the Gospel and bring souls to Christ. This novena acknowledges the challenges and joys 
              of evangelization while helping us grow in zeal for God's glory.
            </p>
            
            <p className="mb-4">
              The title "Evangelization" reminds us of the Great Commission given by Jesus to "go and make disciples 
              of all nations." Whether we are priests, religious, lay missionaries, or simply faithful Catholics, 
              we are all called to share the Good News with others. This novena helps us to turn to God for strength, 
              wisdom, and courage in this mission.
            </p>
            
            <p>
              This novena helps us to pray for various aspects of evangelization - from discerning the call 
              to overcoming difficulties, while always maintaining hope in God's guidance and support.
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
                href={`/novenas/evangelization/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Zealous</h3>
              <p className="text-gray-700 text-sm">
                Approach evangelization with zeal and enthusiasm for God's glory. 
                Let your love for Christ shine through in all you do.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's strength and be courageous in sharing the Gospel. 
                Do not fear rejection or difficulty.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach evangelization with humility, recognizing that it is God 
                who converts hearts, not our own efforts.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Loving</h3>
              <p className="text-gray-700 text-sm">
                Let charity and love be the foundation of all your evangelization efforts. 
                Love others as Christ loves them.
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
                Believe in God's power to work through your evangelization efforts. 
                Trust that He will guide you and convert hearts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to be with you always. 
                Look forward to the fruits that your evangelization will bear.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and love your neighbor as yourself. 
                Let this love motivate all your evangelization efforts.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Evangelization Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Evangelization devotion is a way of praying for and supporting those working to spread the Gospel, 
            seeking God's guidance and strength for successful missionary work and evangelization efforts.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Evangelization Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📖</span>
                <span>Gospel</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔥</span>
                <span>Zeal</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Mission</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for those working to spread the Gospel</li>
              <li>• Seek God's guidance in evangelization efforts</li>
              <li>• Overcome difficulties in missionary work</li>
              <li>• Support priests, religious, and lay missionaries</li>
              <li>• Grow in zeal and love for God's glory</li>
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