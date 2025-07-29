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
    'catholic emotional healing'
  ],
  openGraph: {
    title: 'Novena for Emotional Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Emotional Healing with daily prayers, reflections, and guidance for emotional recovery.',
    url: 'https://catholicbibleonline.com/novenas/emotional-healing',
  },
  twitter: {
    title: 'Novena for Emotional Healing - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Emotional Healing with daily prayers, reflections, and guidance for emotional recovery.',
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
            A powerful nine-day prayer to seek God's healing grace for emotional wounds, inner peace, and spiritual restoration.
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
              The Novena for Emotional Healing is a powerful spiritual practice designed to help you find healing for emotional wounds, 
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's power to heal emotional wounds. Believe that He loves you and wants to restore your inner peace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Honest</h3>
              <p className="text-gray-700 text-sm">
                Open your heart completely to God. Share your deepest emotional pain, fears, and struggles with Him in prayer.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice Forgiveness</h3>
              <p className="text-gray-700 text-sm">
                Ask God for the grace to forgive those who have hurt you and to forgive yourself for past mistakes.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Emotional healing takes time. Be patient with yourself and trust in God's timing for your restoration.
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
                Believe in God's power to heal emotional wounds and restore inner peace. Trust that He is working for your good.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that emotional healing is possible through God's grace. Look forward to the peace and joy that await you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and love others as yourself. Allow God's love to heal your emotional wounds.
              </p>
            </div>
          </div>
        </section>

        {/* What is Emotional Healing? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Emotional Healing?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Emotional healing is the process of recovering from emotional wounds, trauma, and psychological distress through 
              spiritual and psychological means. It involves acknowledging and processing painful emotions, forgiving those who 
              have hurt us, and learning to trust in God's love and care for us.
            </p>
            <p className="mb-4">
              The Catholic understanding of emotional healing recognizes that we are both body and soul, and that emotional 
              wounds can affect our spiritual well-being. Through prayer, sacraments, and God's grace, we can find healing 
              for even the deepest emotional pain.
            </p>
            <p>
              This novena helps you to bring your emotional struggles to God, who is the Divine Physician. He knows your pain 
              intimately and wants to heal you completely, restoring your inner peace and helping you to live in the freedom 
              of His love.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Healing Journey</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward emotional healing, start with Day 1 of this novena. 
            Remember that God loves you unconditionally and wants to heal all your wounds. Trust in His power 
            and allow His grace to work in your heart.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/emotional-healing/day-1"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Start Day 1: Trust in God's Healing Power →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}