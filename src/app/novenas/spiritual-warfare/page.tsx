import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Spiritual Warfare Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Spiritual Warfare Novena with daily prayers, reflections, and guidance. Pray for protection against evil and spiritual strength.',
  keywords: [
    'spiritual warfare novena',
    'warfare novena',
    'spiritual battle novena',
    'protection novena',
    'spiritual warfare prayer',
    'battle prayer',
    'protection prayer',
    'spiritual warfare nine day prayer',
    'battle nine day prayer',
    'spiritual warfare devotion',
    'battle devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Spiritual Warfare Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Spiritual Warfare Novena with daily prayers, reflections, and guidance for spiritual protection.',
    url: 'https://catholicbibleonline.com/novenas/spiritual-warfare',
  },
  twitter: {
    title: 'Spiritual Warfare Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Spiritual Warfare Novena with daily prayers, reflections, and guidance for spiritual protection.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Temptation',
    description: 'Pray for strength against temptation and sin in our daily lives.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Support',
    description: 'Pray for holy friends and support in our spiritual battles.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Trust',
    description: 'Pray for trust in God during extraordinary demonic activity.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Repentance',
    description: 'Pray for repentance from occult activities and past sins.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Deliverance',
    description: 'Pray for deliverance from demonic possession and oppression.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Exorcism',
    description: 'Pray for exorcists and their holy work against evil.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Marian Devotion',
    description: 'Pray for devotion to Mary and her powerful help against evil.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humility',
    description: 'Pray for humility as a weapon against the devil.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Submission',
    description: 'Pray for submission to God\'s will in all circumstances.',
    slug: 'day-9'
  }
]

export default function SpiritualWarfareNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Spiritual Warfare Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for spiritual warfare and protection against evil.
            This traditional novena helps us grow stronger in our battle against the devil and his temptations.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Warfare</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛡️</div>
              <div className="text-sm text-gray-600">Protection</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Spiritual Warfare Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Spiritual Warfare Novena is a powerful nine-day prayer that helps us grow stronger in our battle against evil 
              and the temptations of the devil. In our daily lives, we face constant spiritual battles that require God's grace and protection.
            </p>
            
            <p className="mb-4">
              This novena addresses various aspects of spiritual warfare, from ordinary temptations to extraordinary demonic activity. 
              It teaches us to rely on God's power and the intercession of the saints, especially the Blessed Virgin Mary.
            </p>
            
            <p>
              Through this novena, we learn to recognize the devil's tactics, strengthen our spiritual armor, and trust in God's 
              protection and deliverance in all our spiritual battles.
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
                href={`/novenas/spiritual-warfare/${day.slug}`}
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
                Trust completely in God's power and protection against evil.
                Remember that God is stronger than any demonic force.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Spiritual warfare requires constant vigilance and prayer.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific spiritual battles and needs to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His protection and the spiritual weapons He provides.
                Gratitude strengthens our spiritual armor.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Spiritual Weapons */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Spiritual Weapons
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Prayer</h3>
              <p className="text-gray-700 text-sm">
                Regular prayer strengthens our relationship with God and weakens the devil's influence.
                Trust that God will protect us in all our battles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⚔️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Sacraments</h3>
              <p className="text-gray-700 text-sm">
                Frequent reception of the Eucharist and Confession provide grace and protection.
                They are our strongest weapons against evil.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2">Marian Devotion</h3>
              <p className="text-gray-700 text-sm">
                The Blessed Virgin Mary is the most powerful intercessor against the devil.
                Her help is essential in spiritual warfare.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Spiritual Warfare Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Spiritual Warfare devotion is a way of recognizing and combating the spiritual battles we face daily, 
            relying on God's power and the intercession of the saints.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Spiritual Warfare Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚔️</span>
                <span>Battle</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Angels</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📿</span>
                <span>Rosary</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Recognize the devil's tactics and resist his temptations</li>
              <li>• Strengthen our spiritual armor through prayer and sacraments</li>
              <li>• Trust in God's power and protection in all our battles</li>
              <li>• Seek the intercession of Mary and the saints</li>
              <li>• Grow in virtue and holiness through spiritual warfare</li>
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