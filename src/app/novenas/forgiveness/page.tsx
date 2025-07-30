import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Forgiveness Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Forgiveness Novena with daily prayers, reflections, and guidance. Pray for the grace to forgive others and yourself.',
  keywords: [
    'forgiveness novena',
    'forgiveness prayer',
    '9 day forgiveness novena',
    'catholic forgiveness prayer',
    'forgive others prayer',
    'healing forgiveness novena',
    'peace forgiveness prayer',
    'forgiveness novena guide',
    'daily forgiveness prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Forgiveness Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Forgiveness Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/forgiveness',
  },
  twitter: {
    title: 'Forgiveness Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Forgiveness Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Family Forgiveness',
    description: 'Pray for the grace to forgive family members and heal family relationships.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Friend Forgiveness',
    description: 'Pray for the strength to forgive friends and restore broken friendships.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Stranger Forgiveness',
    description: 'Pray for the ability to forgive those you don\'t know and show mercy to all.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Self-Forgiveness',
    description: 'Pray for the grace to forgive yourself and accept God\'s mercy.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Humility',
    description: 'Pray for humility to recognize your own faults and need for forgiveness.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Trust in God',
    description: 'Pray for trust in God\'s mercy and His power to heal all wounds.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Healing Wounds',
    description: 'Pray for the healing of deep emotional wounds through forgiveness.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Peace and Reconciliation',
    description: 'Pray for peace in your heart and the grace to seek reconciliation.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Forgiveness',
    description: 'Pray for complete forgiveness and the freedom that comes with it.',
    slug: 'day-9'
  }
]

export default function ForgivenessNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Forgiveness Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the grace of forgiveness and healing.
            This traditional novena helps us grow in the virtue of forgiveness and experience God's mercy.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Peace</div>
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
            About the Forgiveness Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Forgiveness Novena is a traditional nine-day prayer that helps us grow in the virtue of forgiveness 
              and experience God's infinite mercy. Jesus taught us to forgive "seventy times seven" (Matthew 18:22), 
              showing us that forgiveness is at the heart of Christian life.
            </p>
            
            <p className="mb-4">
              This novena helps us to forgive others as God has forgiven us, to seek forgiveness for our own sins, 
              and to experience the peace and freedom that comes from letting go of resentment and anger.
            </p>
            
            <p>
              Through this novena, we learn to trust in God's mercy and to imitate His forgiveness in our daily lives, 
              bringing healing to our relationships and peace to our hearts.
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
                href={`/novenas/forgiveness/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God's Mercy</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's infinite mercy and His desire to help you forgive.
                Turn to Him with confidence in every need for forgiveness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who seek forgiveness with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific forgiveness needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His mercy and the grace of forgiveness.
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
                Believe in God's mercy and His power to help you forgive.
                Trust that He will give you the grace you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's forgiveness and His ability to heal all wounds.
                He is always ready to help you find peace through forgiveness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God and others with the same mercy God shows to you.
                Show your love through forgiveness and compassion.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Forgiveness Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Forgiveness devotion is a way of honoring God's mercy and seeking the grace to forgive others 
            as God has forgiven us, following the example of Jesus Christ.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Forgiveness Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Mercy</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🤝</span>
                <span>Reconciliation</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Daily Practice</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's infinite mercy and forgiveness</li>
              <li>• Grow in the virtue of forgiveness and compassion</li>
              <li>• Experience the peace that comes from forgiving others</li>
              <li>• Heal broken relationships and restore harmony</li>
              <li>• Imitate Christ's forgiveness and love for all people</li>
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