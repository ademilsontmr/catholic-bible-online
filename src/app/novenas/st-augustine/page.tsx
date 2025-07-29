import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Augustine Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Augustine Novena with daily prayers, reflections, and guidance. Pray for wisdom, conversion, and finding rest in God.',
  keywords: [
    'st augustine novena',
    'saint augustine novena',
    'augustine novena prayer',
    'augustine conversion novena',
    'augustine wisdom novena',
    'augustine rest in god novena',
    'augustine intercession novena',
    'augustine miracles novena',
    'augustine prayer novena',
    'catholic augustine novena'
  ],
  openGraph: {
    title: 'St. Augustine Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Augustine Novena with daily prayers, reflections, and guidance for wisdom and finding rest in God.',
    url: 'https://catholicbibleonline.com/novenas/st-augustine',
  },
  twitter: {
    title: 'St. Augustine Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Augustine Novena with daily prayers, reflections, and guidance for wisdom and finding rest in God.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Finding God\'s Purpose',
    description: 'Pray for wisdom to determine the purpose God has planned for you.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Conversion and Grace',
    description: 'Pray for God\'s grace and guidance through conversion.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Powerful Intercession',
    description: 'Pray for St. Augustine\'s powerful intercession in your needs.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Miracles and Prophecy',
    description: 'Pray for God\'s power and miracles through St. Augustine.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Education and Evangelization',
    description: 'Pray for St. Augustine\'s mercy as educator and evangelist.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Conversion and Miracles',
    description: 'Pray for miraculous resolution through conversion.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Compassion and Grace',
    description: 'Pray for St. Augustine\'s compassion and grace.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Assistance',
    description: 'Pray for divine assistance through St. Augustine\'s intercession.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Fulfilling God\'s Will',
    description: 'Pray for strength and wisdom to fulfill God\'s will.',
    slug: 'day-9'
  }
]

export default function StAugustineNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Augustine Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek St. Augustine's intercession for wisdom, conversion, and finding rest in God.
            This traditional novena helps you discover God's purpose and find true peace in His love.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">📚</div>
              <div className="text-sm text-gray-600">Wisdom</div>
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
            About the St. Augustine Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Augustine Novena is a profound spiritual practice designed to help you seek the intercession 
              of one of the Church's greatest saints and doctors. St. Augustine, known for his famous quote 
              "Our hearts were made for you, O Lord, and they are restless until they rest in you," is a powerful 
              intercessor for those seeking wisdom, conversion, and finding their purpose in God.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to St. Augustine for guidance in 
              discovering God's plan for your life. This novena helps you to understand that true rest and 
              peace can only be found in God, and that St. Augustine's powerful intercession can help you 
              overcome any obstacle on your spiritual journey.
            </p>
            
            <p>
              Whether you are seeking conversion, wisdom, or help with a specific intention, this novena will 
              help you to find the guidance and intercession you need through St. Augustine's powerful prayers.
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
                href={`/novenas/st-augustine/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in St. Augustine's powerful intercession and God's infinite mercy.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for your conversion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Humbly seek St. Augustine's intercession with complete trust in his wisdom.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's love and St. Augustine's powerful prayers.
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
                Believe in St. Augustine's powerful intercession and God's plan for you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to give you rest and peace in His love.
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

        {/* Who is St. Augustine? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who is St. Augustine?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Augustine of Hippo (354-430 AD) is one of the most influential saints and doctors of the Church. 
              Born in North Africa, he lived a worldly life in his youth before experiencing a profound conversion 
              through the prayers of his mother, St. Monica. His famous quote "Our hearts were made for you, O Lord, 
              and they are restless until they rest in you" captures the essence of his spiritual journey.
            </p>
            <p className="mb-4">
              After his conversion, St. Augustine became a bishop, theologian, and prolific writer whose works 
              continue to influence Christian thought today. He is known for his powerful intercession, miracles, 
              and ability to help others find their purpose in God. His life demonstrates that no one is beyond 
              God's mercy and grace.
            </p>
            <p>
              This novena helps you to seek St. Augustine's intercession for wisdom, conversion, and finding 
              true rest in God's love, just as he found after his own conversion experience.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Rest in God</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you're ready to begin your journey toward finding rest in God and discovering His purpose for you, 
            start with Day 1 of this novena. Remember that St. Augustine's powerful intercession can help you 
            overcome any obstacle and find true peace in God's love.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/st-augustine/day-1"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Start Day 1: Finding God's Purpose →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 