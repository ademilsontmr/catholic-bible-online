import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Family Difficulties - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Family Difficulties with daily prayers, reflections, and guidance. Pray for families struggling with various difficulties and seeking God\'s help.',
  keywords: [
    'novena for family difficulties',
    'family difficulties novena',
    'family problems prayer',
    'family struggles novena',
    'family healing prayer',
    'family crisis prayer',
    'family difficulties nine day prayer',
    'family problems novena',
    'catholic novena'
  ],
  openGraph: {
    title: 'Novena for Family Difficulties - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Family Difficulties with daily prayers, reflections, and guidance for families seeking help.',
    url: 'https://catholicbibleonline.com/novenas/family-difficulties',
  },
  twitter: {
    title: 'Novena for Family Difficulties - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Family Difficulties with daily prayers, reflections, and guidance for families seeking help.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Health Problems',
    description: 'Pray for families struggling with health problems and medical difficulties that affect family life.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Grief and Loss',
    description: 'Pray for families dealing with grief over the loss of a loved one and other heavy trials.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Financial Difficulties',
    description: 'Pray for families struggling with financial difficulties that bring stress and disorder to family life.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Marital Problems',
    description: 'Pray for families struggling with marital problems and troubled relationships.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Trauma Recovery',
    description: 'Pray for families struggling with recovery from trauma and its effects on family life.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Lack of Support',
    description: 'Pray for families who lack support and help from friends or other family members.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Perseverance',
    description: 'Pray for families to grow in perseverance as they seek healing and healthy family life.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Trust in God',
    description: 'Pray for families to grow in trust in God as they face trials and difficulties.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Offering Suffering',
    description: 'Pray for families to grow in the ability to offer all sufferings to God.',
    slug: 'day-9'
  }
]

export default function NovenaForFamilyDifficultiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Family Difficulties
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek God's help for families struggling with various difficulties.
            This traditional novena helps families pray for healing, strength, and guidance through challenging times.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧‍👦</div>
              <div className="text-sm text-gray-600">Family</div>
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
            About the Novena for Family Difficulties
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Family Difficulties is a traditional nine-day prayer designed to help families 
              facing various challenges and struggles. This novena acknowledges that family life, while a great blessing, 
              can also bring difficulties that require God's grace and assistance.
            </p>
            
            <p className="mb-4">
              The title "Family Difficulties" reminds us that even the most loving families can face trials 
              such as health problems, financial stress, marital issues, grief, trauma, and lack of support. 
              These difficulties can test our faith and strain our relationships, but they can also draw us closer to God.
            </p>
            
            <p>
              This novena helps families to pray for various aspects of healing and strength - from physical 
              and emotional healing to spiritual growth and trust in God's plan, while always maintaining hope in God's love.
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
                href={`/novenas/family-difficulties/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be United</h3>
              <p className="text-gray-700 text-sm">
                Pray together as a family when possible. Unity in prayer strengthens 
                family bonds and brings greater grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing for healing and resolution. 
                Family difficulties often require time and grace to overcome.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God's love and His plan for your family. 
                Every difficulty can become a path to greater holiness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of your family and for His presence in your difficulties. 
                Gratitude opens hearts to receive more blessings.
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
                Believe in God's love for your family and His plan for your healing. 
                Trust that He will provide the grace you need.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to help families in difficulty. 
                Look forward to the healing and growth He will bring.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His love for your family. 
                Show love for each other even in difficult times.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Family Difficulties Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Family Difficulties devotion is a way of praying for and supporting families facing various challenges, 
            seeking God's help and guidance for healing and strength.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Family Difficulties Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Family</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💪</span>
                <span>Strength</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>Healing</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Pray for families struggling with various difficulties</li>
              <li>• Seek God's help for healing and strength</li>
              <li>• Grow in trust in God's plan for our families</li>
              <li>• Support families in their time of need</li>
              <li>• Maintain hope and faith in God's love</li>
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