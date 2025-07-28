import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Anthony Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Anthony Novena with daily prayers, reflections, and guidance. Pray for special intentions through the intercession of St. Anthony of Padua.',
  keywords: [
    'st anthony novena',
    'saint anthony novena',
    'st anthony prayer',
    'saint anthony prayer',
    'st anthony devotion',
    'saint anthony devotion',
    'st anthony intercession',
    'catholic novena',
    'novena to st anthony',
    'st anthony of padua novena'
  ],
  openGraph: {
    title: 'St. Anthony Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Anthony Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-anthony',
  },
  twitter: {
    title: 'St. Anthony Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Anthony Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Power of Miracles',
    description: 'Pray for the power and abundance of St. Anthony\'s miracles.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Child Jesus',
    description: 'Pray to the Child Jesus through St. Anthony\'s intercession.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Mercy and Compassion',
    description: 'Seek St. Anthony\'s mercy and compassion for sinners.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Cooperation with Grace',
    description: 'Pray for cooperation with God\'s grace like St. Anthony.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Giving Everything to Christ',
    description: 'Ask St. Anthony to help you give everything to Christ.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Example of Holiness',
    description: 'Follow St. Anthony\'s example of holiness.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Praising God in Heaven',
    description: 'Pray with St. Anthony who praises God in heaven.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Closeness to the King of Kings',
    description: 'Seek St. Anthony\'s closeness to the King of Kings.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Rest',
    description: 'Pray for eternal rest with St. Anthony in heaven.',
    slug: 'day-9'
  }
]

export default function StAnthonyNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Anthony Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to St. Anthony of Padua, seeking his intercession 
            for special intentions and miracles through his powerful prayers.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🔍</div>
              <div className="text-sm text-gray-600">Finder</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✨</div>
              <div className="text-sm text-gray-600">Miracles</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About St. Anthony Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Anthony Novena is a beautiful nine-day prayer to St. Anthony of Padua, 
              one of the most beloved saints in the Catholic Church. This novena helps us seek 
              his powerful intercession for special intentions and miracles.
            </p>
            
            <p className="mb-4">
              Through this novena, we honor St. Anthony who is known for the power and abundance 
              of his miracles. Jesus came into his arms as a humble little child, and St. Anthony 
              cooperated with the grace of God in a radical way with his life.
            </p>
            
            <p>
              This novena reminds us that St. Anthony gave everything to Christ and to his neighbor. 
              He is an example of holiness that we should try to follow, and he is in heaven praising 
              God with a particular closeness to the King of Kings.
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
                href={`/novenas/st-anthony/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach St. Anthony with confidence, knowing he is known for the power 
                and abundance of his miracles.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in His Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust that St. Anthony will pray for you to the Child Jesus for your 
                needs and desires.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Follow His Example</h3>
              <p className="text-gray-700 text-sm">
                Try to follow St. Anthony\'s example of holiness and cooperation 
                with God\'s grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Give Everything to Christ</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Anthony to help you give everything to Christ and to your neighbor, 
                just as he did.
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
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in St. Anthony\'s power and love. Trust in his intercession
                and his ability to work miracles through God\'s grace.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in St. Anthony\'s promise to pray for you. Maintain confidence
                that he will bring your requests to the Child Jesus.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love St. Anthony with filial devotion and pray with love for others. 
                Include in your intentions the needs of all who are suffering.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Anthony? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Anthony?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>St. Anthony of Padua</strong> is one of the most beloved saints in the Catholic Church, 
              known for his powerful intercession and the abundance of miracles attributed to him. 
              He was a Franciscan friar who lived in the 13th century and is now a Doctor of the Church.
            </p>
            
            <p className="mb-4">
              <strong>Power of Miracles</strong> - St. Anthony is known for the power and abundance of his miracles. 
              He has helped countless people find lost items, heal from illnesses, and receive special graces 
              through his powerful intercession.
            </p>
            
            <p className="mb-4">
              <strong>Child Jesus</strong> - Jesus came into St. Anthony\'s arms as a humble little child, 
              showing the special relationship he had with the Divine. This is why many pray to St. Anthony 
              to intercede with the Child Jesus for their needs.
            </p>
            
            <p className="mb-4">
              <strong>Example of Holiness</strong> - St. Anthony cooperated with the grace of God in a radical way 
              with his life. He gave everything to Christ and to his neighbor, making him an example of holiness 
              that we should try to follow.
            </p>
            
            <p>
              <strong>Heavenly Intercessor</strong> - St. Anthony is in heaven praising God with a particular 
              closeness to the King of Kings. With his seat of honor, he continues to beg God to answer our 
              requests and bring us to eternal rest with him.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 