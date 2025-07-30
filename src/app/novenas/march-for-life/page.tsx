import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'March for Life Novena - Complete 9-Day Prayer Guide',
  description: 'Complete March for Life Novena with daily prayers, reflections, and guidance. Pray for the protection of life and the end of abortion.',
  keywords: [
    'march for life novena',
    'pro life novena',
    'abortion novena',
    'life protection novena',
    'pro life prayer',
    'abortion prayer',
    'life protection prayer',
    'march for life nine day prayer',
    'pro life nine day prayer',
    'life protection devotion',
    'pro life devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'March for Life Novena - Complete 9-Day Prayer Guide',
    description: 'Complete March for Life Novena with daily prayers, reflections, and guidance for the protection of life.',
    url: 'https://catholicbibleonline.com/novenas/march-for-life',
  },
  twitter: {
    title: 'March for Life Novena - Complete 9-Day Prayer Guide',
    description: 'Complete March for Life Novena with daily prayers, reflections, and guidance for the protection of life.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Trust',
    description: 'Pray for trust in God\'s protection of life and His plan for every human being.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Love',
    description: 'Pray for love for all human life, from conception to natural death.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Hope',
    description: 'Pray for hope and healing for those affected by abortion.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Joy',
    description: 'Pray for joy in celebrating the gift of life and new beginnings.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Courage',
    description: 'Pray for courage to stand up for life and defend the unborn.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Perseverance',
    description: 'Pray for perseverance in the fight for life and against abortion.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Intercession',
    description: 'Pray for the intercession of saints and angels for the unborn.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Conversion',
    description: 'Pray for the conversion of hearts and minds to respect all life.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for the gift of life and God\'s protection.',
    slug: 'day-9'
  }
]

export default function MarchForLifeNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            March for Life Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek God's protection for all human life and to end abortion.
            This traditional novena helps us grow in our commitment to defend life and pray for the conversion of hearts.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Life</div>
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
            About the March for Life Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The March for Life Novena is a traditional nine-day prayer that helps us grow in our commitment to defend human life 
              and pray for the end of abortion. Every human life is precious and sacred, created in the image and likeness of God 
              from the moment of conception.
            </p>
            
            <p className="mb-4">
              This novena is particularly powerful when prayed in preparation for or during the annual March for Life, 
              but can be prayed at any time to seek God's protection for the unborn and conversion of hearts.
            </p>
            
            <p>
              Through this novena, we ask God to strengthen our resolve to defend life, to heal those affected by abortion, 
              and to convert the hearts of those who promote or support abortion.
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
                href={`/novenas/march-for-life/${day.slug}`}
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
                Trust completely in God's plan for life and His ability to protect the unborn.
                Believe that He is working for the good of all human life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust for the protection of life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the protection of life to God.
                Pray for particular situations, people, and laws that affect the unborn.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of life and His protection.
                Gratitude opens our hearts to receive more graces for the defense of life.
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
                Believe in God's plan for every human life and His power to protect the unborn.
                Trust that He will answer our prayers for the end of abortion.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promise to protect life and His ability to convert hearts.
                Believe that abortion will end and all life will be respected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love all human life as God loves it, from conception to natural death.
                Show our love through prayer, action, and witness for life.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the March for Life Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The March for Life devotion is a way of honoring and protecting human life, 
            particularly the most vulnerable among us - the unborn children in the womb.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of March for Life Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👶</span>
                <span>Life</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏛️</span>
                <span>March</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🔄</span>
                <span>Conversion</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's protection of all human life</li>
              <li>• Grow in our commitment to defend the unborn</li>
              <li>• Experience God's love for every human being</li>
              <li>• Pray for the conversion of hearts and minds</li>
              <li>• Witness to the sanctity of life in our society</li>
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