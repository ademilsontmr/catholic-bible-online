import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Financial Help - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Financial Help with daily prayers, reflections, and guidance. Pray for God\'s provision and wisdom in financial matters.',
  keywords: [
    'novena for financial help',
    'financial help novena',
    'money prayer novena',
    'financial assistance novena',
    'financial blessing novena',
    'financial provision novena',
    'financial wisdom novena',
    'financial prayer novena',
    'financial help prayer',
    'catholic financial novena',
    'financial assistance prayer'
  ],
  openGraph: {
    title: 'Novena for Financial Help - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Financial Help with daily prayers, reflections, and guidance for financial wisdom and provision.',
    url: 'https://catholicbibleonline.com/novenas/financial-help',
  },
  twitter: {
    title: 'Novena for Financial Help - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Financial Help with daily prayers, reflections, and guidance for financial wisdom and provision.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust in God\'s Provision',
    description: 'Pray for trust in God\'s ability to provide for all our financial needs.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Gratitude for What We Have',
    description: 'Pray for gratitude for the financial blessings we already possess.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Wisdom in Financial Decisions',
    description: 'Pray for wisdom to make sound financial decisions and choices.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Generosity and Charity',
    description: 'Pray for the grace to be generous and charitable with our resources.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Patience in Financial Struggles',
    description: 'Pray for patience and perseverance during financial difficulties.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Humility in Asking for Help',
    description: 'Pray for humility to ask for help when we need financial assistance.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Faith in God\'s Timing',
    description: 'Pray for faith to trust in God\'s perfect timing for financial provision.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Stewardship of Resources',
    description: 'Pray for the grace to be good stewards of the financial resources God gives us.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Financial Worries to God',
    description: 'Pray for the grace to offer all our financial worries and concerns to God.',
    slug: 'day-9'
  }
]

export default function FinancialHelpNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Financial Help
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's provision and wisdom in financial matters.
            This traditional novena helps us trust in God's care and develop a healthy relationship with money and resources.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💰</div>
              <div className="text-sm text-gray-600">Provision</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-600">Virtues</div>
            </div>
          </div>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Financial Help</span>
          </nav>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena for Financial Help
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Financial Help is a powerful nine-day prayer that helps us seek God's provision and wisdom 
              in all our financial matters. This traditional novena teaches us to trust in God's care and to develop 
              a healthy, balanced relationship with money and material resources.
            </p>
            
            <p className="mb-4">
              Financial struggles can be one of the most stressful aspects of life, affecting our peace of mind, 
              relationships, and even our spiritual life. This novena helps us surrender our financial worries to God 
              and learn to trust in His divine providence.
            </p>
            
            <p>
              Each day focuses on a different aspect of financial wisdom, from trusting in God's provision to being 
              good stewards of our resources. Through prayer and reflection, we can find peace in knowing that God 
              cares for all our needs, including our financial ones.
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
                href={`/novenas/financial-help/${day.slug}`}
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
                Trust completely in God's ability to provide for your needs.
                Turn to Him with confidence in every financial situation.
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
                Present your specific financial needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His provision and financial blessings.
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
                Believe in God's ability to provide for all your needs.
                Trust that He will never abandon you in financial difficulties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to care for His children.
                He is always ready to help us in our financial needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you.
                Show your love through generosity and charity to others.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Financial Help Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Financial Help devotion is a way of seeking God's provision and wisdom in all our financial matters, 
            trusting in His divine care and developing a healthy relationship with money and resources.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Financial Help Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💰</span>
                <span>Provision</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>Nine Days</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🆘</span>
                <span>Help</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🖼️</span>
                <span>Wisdom</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's ability to provide for all our needs</li>
              <li>• Develop wisdom in financial decision-making</li>
              <li>• Practice gratitude for what we already have</li>
              <li>• Grow in generosity and charity toward others</li>
              <li>• Find peace in surrendering financial worries to God</li>
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