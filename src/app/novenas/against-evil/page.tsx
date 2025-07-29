import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena Against Evil - Complete 9-Day Prayer Guide',
  description: 'Complete Novena Against Evil with daily prayers, reflections, and guidance. Pray for protection, spiritual warfare, and triumph over evil.',
  keywords: [
    'novena against evil',
    'evil prayer novena',
    'spiritual warfare novena',
    'protection from evil novena',
    'evil defeat novena',
    'evil protection novena',
    'evil triumph novena',
    'evil exorcism novena',
    'evil humility novena',
    'catholic evil prayer'
  ],
  openGraph: {
    title: 'Novena Against Evil - Complete 9-Day Prayer Guide',
    description: 'Complete Novena Against Evil with daily prayers, reflections, and guidance for protection and triumph over evil.',
    url: 'https://catholicbibleonline.com/novenas/against-evil',
  },
  twitter: {
    title: 'Novena Against Evil - Complete 9-Day Prayer Guide',
    description: 'Complete Novena Against Evil with daily prayers, reflections, and guidance for protection and triumph over evil.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Defeat of Evil',
    description: 'Pray for the ultimate defeat of evil in the world.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Grace of Repentance',
    description: 'Pray for grace of repentance for those in evil acts.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Protection from Devil',
    description: 'Pray for protection from direct attacks of the devil.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Blessing Exorcists',
    description: 'Pray for blessing and assistance for all exorcists.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Spiritual Warfare',
    description: 'Pray for those devoted to spiritual warfare.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Virtue of Humility',
    description: 'Pray for growth in the virtue of humility.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Virtue of Hope',
    description: 'Pray for growth in the virtue of hope.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Virtue of Perseverance',
    description: 'Pray for growth in the virtue of perseverance.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Trust in God',
    description: 'Pray for growth in trust in God\'s plan.',
    slug: 'day-9'
  }
]

export default function NovenaAgainstEvilPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena Against Evil
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's protection and triumph over evil in the world.
            This traditional novena helps you engage in spiritual warfare and find strength in God's infinite power.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Protection</div>
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
            About the Novena Against Evil
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena Against Evil is a powerful spiritual practice designed to help you engage in spiritual 
              warfare and seek God's protection against the forces of evil. This novena recognizes that while 
              evil may seem strong in our fallen world, God is infinitely more powerful than the devil and can 
              help us overcome even the most difficult temptations.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to God for protection, strength, 
              and victory over evil. This novena helps you to understand that God has equipped His Church 
              with powerful weapons against evil, including exorcists and the authority to cast out demons.
            </p>
            
            <p>
              Whether you are facing direct attacks from the devil, struggling with temptations, or simply 
              want to pray for the defeat of evil in the world, this novena will help you to find the 
              strength and protection you need through God's infinite power.
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
                href={`/novenas/against-evil/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's infinite power to defeat evil and protect you from all harm.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Remember that the devil particularly loathes humble souls.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Persevere in prayer even when the forces of evil seem strong.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's plan and His ultimate victory over evil.
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
                Believe in God's infinite power to defeat evil and protect you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's ultimate victory over evil and final triumph of goodness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His care for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is Evil? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Evil?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Evil is the absence of good and the work of the devil, who seeks to separate us from God 
              and lead us into sin. In our fallen world, evil can manifest in many ways - through temptations, 
              direct attacks from the devil, and the influence of sin in our lives and society.
            </p>
            <p className="mb-4">
              The Catholic understanding of evil recognizes that while the devil is powerful, God is infinitely 
              more powerful and has given His Church the authority and tools to combat evil. Through prayer, 
              the sacraments, exorcism, and spiritual warfare, we can find protection and victory over evil.
            </p>
            <p>
              This novena helps you to engage in spiritual warfare and seek God's protection against evil, 
              knowing that with His help, you can overcome any temptation or attack from the forces of darkness.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Spiritual Warfare</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward spiritual protection and victory over evil, start with Day 1 
            of this novena. Remember that God is infinitely more powerful than the devil and can help you overcome 
            any evil or temptation you may face.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/against-evil/day-1"
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Start Day 1: Defeat of Evil →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 