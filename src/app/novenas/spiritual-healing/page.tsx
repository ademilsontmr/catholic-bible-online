import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Spiritual Healing - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Spiritual Healing with daily prayers, reflections, and guidance. Pray for God\'s healing grace for spiritual wounds and renewal.',
  keywords: [
    'novena for spiritual healing',
    'spiritual healing novena',
    'spiritual healing prayer',
    'spiritual renewal novena',
    'spiritual restoration prayer',
    'healing spiritual wounds',
    'spiritual wellness novena',
    'spiritual growth prayer',
    'soul healing novena',
    'spiritual transformation prayer',
    'catholic spiritual healing'
  ],
  openGraph: {
    title: 'Novena for Spiritual Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Spiritual Healing with daily prayers, reflections, and guidance for spiritual renewal.',
    url: 'https://catholicbibleonline.com/novenas/spiritual-healing',
  },
  twitter: {
    title: 'Novena for Spiritual Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Spiritual Healing with daily prayers, reflections, and guidance for spiritual renewal.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Opening Our Hearts to God\'s Grace',
    description: 'Pray for the grace to open our hearts completely to God\'s healing love and divine mercy.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Healing from Spiritual Dryness',
    description: 'Pray for relief from spiritual dryness and the restoration of our fervor for God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Breaking Free from Spiritual Bondage',
    description: 'Pray for freedom from spiritual bondage and the chains that keep us from God.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Restoring Our Relationship with God',
    description: 'Pray for the restoration of our intimate relationship with God and His presence.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Healing from Spiritual Wounds',
    description: 'Pray for healing from deep spiritual wounds and the scars of past spiritual struggles.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Renewing Our Faith and Trust',
    description: 'Pray for the renewal of our faith and complete trust in God\'s providence.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Embracing God\'s Divine Mercy',
    description: 'Pray to fully embrace God\'s infinite mercy and forgiveness for all our sins.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Finding Purpose in Our Spiritual Journey',
    description: 'Pray to discover God\'s purpose for our spiritual life and our unique mission.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Spiritual Transformation',
    description: 'Pray for complete spiritual transformation and the grace to live as new creations in Christ.',
    slug: 'day-9'
  }
]

export default function NovenaForSpiritualHealingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Spiritual Healing
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A profound nine-day prayer to seek God's healing grace for spiritual wounds, renewal, and transformation.
            This traditional novena helps us grow closer to God and experience His divine healing and mercy.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Spirit</div>
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
            About the Novena for Spiritual Healing
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Spiritual Healing is a profound spiritual practice designed to help you find healing for spiritual wounds, 
              renewal of your relationship with God, and transformation of your soul. In our spiritual journey, we often encounter 
              periods of dryness, doubt, spiritual wounds, and distance from God that can affect our spiritual well-being and growth.
            </p>
            
            <p className="mb-4">
              This novena invites you to bring all your spiritual burdens to God, who is the Divine Healer of souls. Through nine days of 
              focused prayer, you will learn to open your heart to God's grace, break free from spiritual bondage, restore your relationship 
              with Him, and embrace His infinite mercy and love.
            </p>
            
            <p>
              Whether you're experiencing spiritual dryness, struggling with faith, carrying spiritual wounds, or seeking deeper intimacy 
              with God, this novena will guide you on a journey toward spiritual healing and renewal.
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
                href={`/novenas/spiritual-healing/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Open Your Heart</h3>
              <p className="text-gray-700 text-sm">
                Open your heart completely to God's healing grace. Be honest about your spiritual struggles and needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to heal those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific spiritual needs and struggles to God. He wants to help you with your particular difficulties.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Spiritual healing takes time. Be patient with yourself and trust in God's timing for your spiritual renewal.
              </p>
            </div>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in God's power to heal spiritual wounds and restore your relationship with Him. Trust that He is working for your spiritual good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that spiritual healing is possible through God's grace. Look forward to the renewal and transformation that await you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart, soul, mind, and strength. Allow God's love to heal your spiritual wounds and transform your life.
              </p>
            </div>
          </div>
        </section>

        {/* What is Spiritual Healing? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Spiritual Healing?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Spiritual healing is the process of recovering from spiritual wounds, dryness, and distance from God through prayer, 
              sacraments, and divine grace. It involves acknowledging our spiritual struggles, opening our hearts to God's mercy, 
              and allowing Him to restore our relationship with Him and transform our souls.
            </p>
            <p className="mb-4">
              The Catholic understanding of spiritual healing recognizes that we are spiritual beings created for communion with God. 
              Through prayer, the sacraments, and God's grace, we can find healing for even the deepest spiritual wounds and experience 
              the renewal and transformation that God desires for us.
            </p>
            <p>
              This novena helps you to bring your spiritual struggles to God, who is the Divine Physician of souls. He knows your spiritual 
              pain intimately and wants to heal you completely, restoring your relationship with Him and helping you to live in the freedom 
              and joy of His love.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Spiritual Healing Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward spiritual healing, start with Day 1 of this novena. 
            Remember that God loves you unconditionally and wants to heal all your spiritual wounds. Trust in His power 
            and allow His grace to work in your soul.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/spiritual-healing/day-1"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              Start Day 1: Opening Our Hearts to God's Grace →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 