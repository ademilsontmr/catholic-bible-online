import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Addiction Recovery - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Addiction Recovery with daily prayers, reflections, and guidance. Pray for strength, healing, and freedom from addiction.',
  keywords: [
    'novena for addiction recovery',
    'addiction recovery novena',
    'addiction prayer novena',
    'addiction healing novena',
    'addiction freedom novena',
    'addiction strength novena',
    'addiction hope novena',
    'addiction mercy novena',
    'addiction healing prayer',
    'addiction recovery prayer',
    'catholic addiction prayer'
  ],
  openGraph: {
    title: 'Novena for Addiction Recovery - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Addiction Recovery with daily prayers, reflections, and guidance for strength and healing from addiction.',
    url: 'https://catholicbibleonline.com/novenas/addiction-recovery',
  },
  twitter: {
    title: 'Novena for Addiction Recovery - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Addiction Recovery with daily prayers, reflections, and guidance for strength and healing from addiction.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Admitting the Problem',
    description: 'Pray for those who are having trouble admitting their addiction problem.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Substance Addiction',
    description: 'Pray for those who are addicted to harmful substances.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Harmful Activities',
    description: 'Pray for those who are addicted to harmful activities and behaviors.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Recovery Support',
    description: 'Pray for support and help for all who are on the recovery journey.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Healing Relationships',
    description: 'Pray for healing of relationships hurt by addiction.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Perseverance',
    description: 'Pray for perseverance for those facing difficulties in recovery.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Self-Knowledge',
    description: 'Pray for growth in self-knowledge needed for real progress.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Humility',
    description: 'Pray for humility needed to admit problems and seek help.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Trust in God',
    description: 'Pray for deep trust in God needed for true recovery.',
    slug: 'day-9'
  }
]

export default function NovenaForAddictionRecoveryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Addiction Recovery
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's mercy, strength, and healing for recovery from addiction.
            This traditional novena helps individuals find freedom, hope, and divine assistance in their journey to recovery.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Freedom</div>
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
            About the Novena for Addiction Recovery
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Addiction Recovery is a compassionate spiritual practice designed to help individuals 
              who are struggling with various forms of addiction. This novena recognizes that addiction can take 
              many forms - from substance abuse to harmful behaviors and activities - and that God's mercy and 
              love are always available to help in the journey to recovery.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to God for strength, healing, and 
              freedom from addiction. This novena helps you to understand that God's mercy is infinite and 
              that He desires to help you overcome any addiction and find true freedom and peace in your life.
            </p>
            
            <p>
              Whether you are struggling with addiction yourself or praying for a loved one, this novena will 
              help you to find hope, strength, and the divine assistance needed for recovery and healing.
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
                href={`/novenas/addiction-recovery/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's infinite mercy and His power to help you overcome any addiction.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for your recovery journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Humbly admit your struggles and seek God's help with complete trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's love and mercy for you and your recovery.
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
                Believe in God's power to help you overcome addiction and find freedom.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to provide strength and healing for your recovery.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His merciful love for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is Addiction Recovery? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Addiction Recovery?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Addiction recovery is a journey of healing and transformation that involves recognizing the problem, 
              seeking help, and working towards freedom from harmful dependencies. This can include recovery from 
              substance abuse, behavioral addictions, or any harmful patterns that prevent us from living fully 
              in God's love and grace.
            </p>
            <p className="mb-4">
              The Catholic understanding of addiction recovery recognizes that while addiction can cause great 
              suffering, God's mercy is always available to help us overcome our struggles. Recovery requires 
              humility to admit our problems, trust in God's assistance, and perseverance in the journey to 
              freedom and healing.
            </p>
            <p>
              This novena helps you to bring all your struggles with addiction to God, who understands your 
              pain intimately and wants to provide you with the strength, mercy, and healing you need to find 
              true freedom and peace in your life.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Freedom</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward freedom and healing from addiction, start with Day 1 
            of this novena. Remember that God's mercy is infinite and He loves you unconditionally. Trust in 
            His power to help you overcome any addiction and find true freedom and peace in your life.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/addiction-recovery/day-1"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Start Day 1: Admitting the Problem →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 