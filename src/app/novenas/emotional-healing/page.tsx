import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Emotional Healing - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Emotional Healing with daily prayers, reflections, and guidance. Pray for God\'s healing grace for emotional wounds and inner peace.',
  keywords: [
    'novena for emotional healing',
    'emotional healing novena',
    'emotional healing prayer',
    'inner peace novena',
    'emotional recovery prayer',
    'healing emotional wounds',
    'spiritual healing novena',
    'emotional restoration prayer',
    'peace of mind novena',
    'emotional wellness prayer',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Emotional Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Emotional Healing with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/emotional-healing',
  },
  twitter: {
    title: 'Novena for Emotional Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Emotional Healing with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust in God\'s Healing Power',
    description: 'Pray for trust in God\'s infinite power to heal all emotional wounds and restore inner peace.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Surrendering Pain to Jesus',
    description: 'Pray for the grace to surrender all emotional pain and suffering to Jesus, who carries our burdens.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Forgiveness and Inner Peace',
    description: 'Pray for the grace to forgive others and yourself, opening the path to true inner peace.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Healing from Past Trauma',
    description: 'Pray for God\'s healing touch for deep emotional wounds and traumatic experiences.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Restoring Hope and Joy',
    description: 'Pray for God to restore your hope and fill your heart with joy from His presence.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Breaking Free from Anxiety',
    description: 'Pray for freedom from anxiety, worry, and fear, trusting in God\'s perfect plan.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Embracing God\'s Love',
    description: 'Pray to open your heart to receive God\'s unconditional love and healing.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Finding Purpose in Suffering',
    description: 'Pray to understand how God can use your emotional pain for greater good.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Emotional Restoration',
    description: 'Pray for complete emotional restoration and grace to live in peace and harmony.',
    slug: 'day-9'
  }
]

export default function NovenaForEmotionalHealingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Emotional Healing
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's healing grace for emotional wounds and inner peace.
            This traditional novena helps us grow closer to God and experience His healing love and mercy.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Healing</div>
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
            About the Novena for Emotional Healing
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Emotional Healing is a traditional nine-day prayer that helps us find healing for emotional wounds, 
              inner peace, and spiritual restoration. In our modern world, many people carry deep emotional pain from past experiences, 
              relationships, trauma, or life circumstances that can affect their mental and spiritual well-being.
            </p>
            
            <p className="mb-4">
              This novena invites you to bring all your emotional burdens to God, who is the Divine Healer. Through nine days of 
              focused prayer, you will learn to trust in God's healing power, surrender your pain to Jesus, practice forgiveness, 
              and open your heart to receive God's unconditional love and peace.
            </p>
            
            <p>
              Whether you're struggling with anxiety, depression, past trauma, relationship wounds, or any form of emotional distress, 
              this novena will guide you on a journey toward emotional healing and spiritual renewal.
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
                href={`/novenas/emotional-healing/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God's Healing</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's power to heal emotional wounds. Believe that He loves you and wants to restore your inner peace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific emotional healing needs and intentions to God. He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His healing grace and the progress you make each day. Gratitude opens our hearts to receive more graces.
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
                Believe in God's power to heal emotional wounds and restore inner peace. Trust that He is working for your good.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's healing grace and His ability to restore your emotional well-being. He is always ready to help you find peace.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and love others as yourself. Allow God's love to heal your emotional wounds.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Emotional Healing Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Emotional Healing devotion is a way of seeking God's healing grace for emotional wounds, 
            inner peace, and spiritual restoration through prayer and trust in His love.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Emotional Healing Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Healing</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Grace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Restoration</span>
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
              <li>• Trust in God's power to heal emotional wounds</li>
              <li>• Surrender our pain and suffering to Jesus</li>
              <li>• Practice forgiveness and find inner peace</li>
              <li>• Experience God's unconditional love and mercy</li>
              <li>• Grow in faith, hope, and love through healing</li>
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