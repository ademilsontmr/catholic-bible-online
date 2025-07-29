import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Healing and Strength - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Healing and Strength with daily prayers, reflections, and guidance. Pray for God\'s healing grace and inner strength.',
  keywords: [
    'novena for healing and strength',
    'healing and strength novena',
    'inner strength prayer',
    'healing strength novena',
    'spiritual strength prayer',
    'healing prayer novena',
    'overcoming weakness novena',
    'strength recovery prayer',
    'healing strength novena',
    'divine strength prayer',
    'catholic healing strength'
  ],
  openGraph: {
    title: 'Novena for Healing and Strength - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing and Strength with daily prayers, reflections, and guidance for healing and inner strength.',
    url: 'https://catholicbibleonline.com/novenas/healing-strength',
  },
  twitter: {
    title: 'Novena for Healing and Strength - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Healing and Strength with daily prayers, reflections, and guidance for healing and inner strength.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Opening Our Hearts to God\'s Healing Power',
    description: 'Pray for the grace to open our hearts completely to God\'s healing power and divine strength.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Finding Strength in God\'s Love',
    description: 'Pray to find inner strength and courage through God\'s infinite love and care.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Trusting in God\'s Perfect Plan',
    description: 'Pray for the grace to trust in God\'s perfect plan and His timing for our healing.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Embracing God\'s Restorative Grace',
    description: 'Pray to embrace God\'s restorative grace and allow Him to renew our strength.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Finding Hope in God\'s Promises',
    description: 'Pray to find hope and encouragement in God\'s promises of healing and strength.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Letting Go of Weakness and Doubt',
    description: 'Pray for the grace to let go of weakness and doubt, embracing God\'s strength.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Finding Purpose in Our Struggles',
    description: 'Pray to find meaning and purpose in our struggles and challenges.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Opening Our Hearts to New Life',
    description: 'Pray for the grace to open our hearts to new life and renewed strength.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Living in Complete Healing and Strength',
    description: 'Pray for the grace to live in complete healing and strength through God\'s power.',
    slug: 'day-9'
  }
]

export default function NovenaForHealingStrengthPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Healing and Strength
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's healing grace and inner strength for all aspects of life.
            This traditional novena helps us find healing, renewal, and the strength to overcome any challenge.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💪</div>
              <div className="text-sm text-gray-600">Strength</div>
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
            About the Novena for Healing and Strength
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Healing and Strength is a transformative spiritual practice designed to help you find 
              healing and inner strength for all aspects of your life. Whether you're facing physical illness, 
              emotional challenges, spiritual struggles, or any other difficulties, this novena invites you to 
              bring all your needs to God, who is the source of all healing and strength.
            </p>
            
            <p className="mb-4">
              This novena recognizes that true healing and strength come not from our own power, but from God's 
              grace and love. Through nine days of focused prayer, you will learn to open your heart to God's 
              healing power, find strength in His love, trust in His perfect plan, and embrace the restorative 
              grace that only He can provide.
            </p>
            
            <p>
              Whether you're recovering from illness, dealing with emotional pain, facing spiritual challenges, 
              or simply need strength to face daily life, this novena will guide you on a journey toward complete 
              healing and renewed strength through God's power.
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
                href={`/novenas/healing-strength/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-indigo-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be completely open to God's healing power and strength. Allow Him to work in your heart and life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's power to heal and strengthen you. Believe that He can do what seems impossible.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to heal and strengthen those who trust in Him.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Healing and strength often take time. Be patient with yourself and trust in God's timing.
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
                Believe in God's power to heal and strengthen you. Trust that He is working for your good and your healing.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope that healing and strength are possible through God's grace. Look forward to the renewal that awaits you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you. Allow God's love to heal and strengthen you.
              </p>
            </div>
          </div>
        </section>

        {/* What is Healing and Strength? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Healing and Strength?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Healing and strength are gifts that God wants to give to all His children. Healing involves the restoration 
              of wholeness - physical, emotional, spiritual, and mental - while strength refers to the inner power and 
              resilience that comes from God's grace and love.
            </p>
            <p className="mb-4">
              The Catholic understanding of healing and strength recognizes that we are created in God's image and that 
              He desires us to be whole and strong. Through prayer, the sacraments, and God's grace, we can experience 
              healing from all types of wounds and find the strength to face any challenge.
            </p>
            <p>
              This novena helps you to bring all your needs for healing and strength to God, who is the Divine Physician 
              and the source of all power. He knows your struggles intimately and wants to heal you completely and give 
              you the strength you need to live a full and abundant life.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-indigo-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Healing and Strength</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward healing and strength, start with Day 1 of this novena. 
            Remember that God loves you unconditionally and wants to heal and strengthen you. Trust in His power 
            and allow His grace to work in your life.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/healing-strength/day-1"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Start Day 1: Opening Our Hearts to God's Healing Power →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 