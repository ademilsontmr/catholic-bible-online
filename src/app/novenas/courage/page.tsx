import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Courage - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Courage with daily prayers, reflections, and guidance. Pray for strength, bravery, and divine courage to face life\'s challenges.',
  keywords: [
    'novena for courage',
    'courage novena',
    'prayer for bravery',
    'catholic prayer for courage',
    'novena for strength',
    'prayer for courage',
    'catholic novena for bravery',
    'prayer for strength in difficult times',
    'novena for divine courage',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Courage - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Courage with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/courage',
  },
  twitter: {
    title: 'Novena for Courage - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Courage with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s plan and His ability to grant you courage in all situations.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s promise to give you courage to fight against injustice.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love for God and courage to end harmful relationships when necessary.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility to accept God\'s help and courage to fight against addiction.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Purity',
    description: 'Pray for purity of heart and courage to speak out against evil.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will and courage to face persecution for your faith.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and courage to follow God\'s call in your life.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Intercession',
    description: 'Pray for the intercession of saints who understand courage and can help you.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for God\'s gift of courage and His rewards for virtuous living.',
    slug: 'day-9'
  }
]

export default function NovenaForCouragePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Courage
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's strength, bravery, and divine courage to face life's challenges.
            This traditional novena helps us grow closer to God and experience His empowering presence in difficult times.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🛡️</div>
              <div className="text-sm text-gray-600">Courage</div>
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
            About the Novena for Courage
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Courage is a traditional nine-day prayer that helps us find strength, bravery, and divine courage 
              to face the many challenges and dangers in our fallen world. This novena draws on God's infinite power and love 
              to grant us the grace of courage in all situations.
            </p>
            
            <p className="mb-4">
              Each day focuses on a different aspect of courage - from facing physical dangers to fighting injustice, 
              from ending harmful relationships to speaking out against evil. Through prayer and reflection, we seek 
              God's guidance and strength to act courageously in every circumstance.
            </p>
            
            <p>
              This novena reminds us that courage is a gift from God and that He will always provide us with the strength 
              we need to face any challenge when we turn to Him with trust and faith.
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
                href={`/novenas/courage/${day.slug}`}
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
                Trust completely in God's plan for your life and His ability to grant you courage. Believe that He is working for your good.
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
                Present your specific fears and challenges to God. He wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His strength and the gift of courage. Gratitude opens our hearts to receive more graces.
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
                Believe in God's power to grant you courage. Trust that He is always with you in every challenge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to give you strength. He is always ready to help you find courage and peace.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for you, even during the most challenging times.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Courage Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Courage devotion is a way of seeking God's strength and divine courage 
            to face the many challenges and dangers in our fallen world.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Courage Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚔️</span>
                <span>Bravery</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Faith</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Perseverance</span>
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
              <li>• Trust in God's plan during challenging times</li>
              <li>• Find courage to face physical and spiritual dangers</li>
              <li>• Stand up against injustice and evil</li>
              <li>• End harmful relationships when necessary</li>
              <li>• Speak out for what is right and just</li>
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