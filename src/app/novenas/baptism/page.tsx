import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Baptism with daily prayers, reflections, and guidance. Pray for God\'s grace to help all who are preparing for this beautiful sacrament.',
  keywords: [
    'novena for baptism',
    'baptism novena',
    'baptism prayer',
    'novena for baptism prayer',
    'baptism nine day prayer',
    'baptism devotion',
    'baptism catholic prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Baptism - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Baptism with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/baptism',
  },
  twitter: {
    title: 'Novena for Baptism - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Baptism with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Commitment to Christian Life',
    description: 'Pray for a deep commitment to living a faithful Christian life.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Love for the Church',
    description: 'Pray for a deep love of the Church.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Submission to God\'s Laws',
    description: 'Pray to grow in true submission to God\'s laws.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Personal Relationship with God',
    description: 'Pray to grow to an intimate personal relationship with God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Gratitude for Sacramental Grace',
    description: 'Pray to grow in gratitude for the gift of sacramental grace.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'True Piety',
    description: 'Pray to grow in true piety.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Effective Preparation',
    description: 'Pray for all who work to prepare others for baptism to be effective in their work.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Understanding Baptism',
    description: 'Pray for understanding for all who do not understand the significance of this sacrament.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Response to Grace',
    description: 'Pray for all who are considering being baptized.',
    slug: 'day-9'
  }
]

export default function BaptismNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to help all who are preparing for the beautiful sacrament of baptism.
            This traditional novena helps us seek God's grace for those entering the Church and growing in their faith.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💧</div>
              <div className="text-sm text-gray-600">Baptism</div>
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
            About the Novena for Baptism
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Baptism is a traditional nine-day prayer that helps us seek God's grace for all who are preparing 
              for the beautiful sacrament of baptism. Through baptism, we become children of God and members of His Church.
            </p>
            
            <p className="mb-4">
              Baptism is the first sacrament and the gateway to all other sacraments. It washes away original sin, 
              makes us children of God, and gives us sanctifying grace. This novena helps us to pray for those preparing 
              for this important step in their spiritual journey.
            </p>
            
            <p>
              This novena helps us to trust in God's grace and to seek His assistance for all who are preparing for baptism, 
              knowing that He wants to help them grow in faith and become faithful members of His Church.
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
                href={`/novenas/baptism/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
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
                Believe in God's power to help those preparing for baptism.
                Trust that He will guide them in their spiritual journey.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's grace and His ability to help them grow in faith.
                He is always ready to assist them in their preparation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and trust in His love for those preparing for baptism.
                Show your love through prayer and support.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Baptism Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Baptism devotion is a way of seeking God's grace and assistance for all who are preparing 
            for the beautiful sacrament of baptism and growing in their faith.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Baptism Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💧</span>
                <span>Baptism</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>Preparation</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
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
              <li>• Trust in God's grace to help those preparing for baptism</li>
              <li>• Pray for their growth in faith and commitment to the Church</li>
              <li>• Support them in their spiritual journey</li>
              <li>• Ask for God's guidance in their preparation</li>
              <li>• Grow in gratitude for the gift of baptism</li>
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