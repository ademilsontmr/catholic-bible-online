import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Confession - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for First Confession with daily prayers, reflections, and guidance. Pray for preparation to receive the sacrament of confession for the first time.',
  keywords: [
    'novena for first confession',
    'first confession novena',
    'confession preparation novena',
    'sacrament of confession novena',
    'first confession prayer',
    'confession preparation prayer',
    'sacrament of reconciliation novena',
    'first confession nine day prayer',
    'confession preparation nine day prayer',
    'first confession devotion',
    'confession preparation devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for First Confession - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for First Confession with daily prayers, reflections, and guidance for spiritual preparation.',
    url: 'https://catholicbibleonline.com/novenas/first-confession',
  },
  twitter: {
    title: 'Novena for First Confession - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for First Confession with daily prayers, reflections, and guidance for spiritual preparation.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Preparation',
    description: 'Pray for preparation of children and adults for their First Confession with God\'s grace and guidance.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Adult Preparation',
    description: 'Pray for adults who are preparing to make their First Confession for the first time.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Overcoming Fear',
    description: 'Pray for those struggling with fear or anxiety about their upcoming First Confession.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Frequent Confession',
    description: 'Pray for growing in the habit of frequent confession and regular reconciliation with God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Clear Recollection',
    description: 'Pray for having a clear recollection of sins and proper preparation for confession.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'True Repentance',
    description: 'Pray for developing true repentance and sorrow for sins committed against God.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Humility',
    description: 'Pray for growing in humility needed to make a good and honest confession.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Submission to God',
    description: 'Pray for submitting ourselves fully to God and the rules of His Church.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Love for God',
    description: 'Pray for growing in love for God through the sacrament of confession.',
    slug: 'day-9'
  }
]

export default function NovenaForFirstConfessionPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Confession
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to prepare for receiving the sacrament of confession for the first time.
            This traditional novena helps us prepare spiritually and emotionally for this important sacrament.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛐</div>
              <div className="text-sm text-gray-600">Sacrament</div>
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
            About the Novena for First Confession
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for First Confession is a traditional nine-day prayer designed to prepare children and adults 
              for receiving the sacrament of confession for the first time. This sacrament, also known as the 
              Sacrament of Reconciliation, is a beautiful gift from God that allows us to receive His forgiveness 
              and restore our relationship with Him.
            </p>
            
            <p className="mb-4">
              The title "First Confession" reminds us that this sacrament is a significant milestone in our spiritual 
              journey. It is the beginning of a lifelong practice of seeking God's mercy and forgiveness through 
              the sacrament of reconciliation.
            </p>
            
            <p>
              This novena helps us to prepare spiritually and emotionally for this important sacrament, 
              addressing common concerns such as fear, anxiety, and the need for proper preparation.
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
                href={`/novenas/first-confession/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Prepare your heart and mind for the sacrament of confession. 
                Reflect on your sins and ask God for the grace of true repentance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach the sacrament with humility and honesty. 
                Remember that God is merciful and ready to forgive.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who prepare for His sacraments.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the sacrament of confession. 
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
                Believe in the power of the sacrament of confession and God's mercy. 
                Trust that through this sacrament, your sins will be forgiven.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise of forgiveness and reconciliation. 
                Look forward to the peace and grace that comes from a good confession.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and seek to repair your relationship with Him. 
                Show love for others by avoiding sin and growing in virtue.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the First Confession Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The First Confession devotion is a way of preparing spiritually and emotionally for receiving 
            the sacrament of confession for the first time, seeking God's grace and guidance.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of First Confession Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛐</span>
                <span>Sacrament</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Mercy</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Reconciliation</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Grace</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Prepare spiritually for receiving the sacrament of confession</li>
              <li>• Overcome fear and anxiety about confession</li>
              <li>• Develop true repentance and sorrow for sins</li>
              <li>• Grow in humility and submission to God</li>
              <li>• Experience God's mercy and forgiveness</li>
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