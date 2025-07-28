import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Easter Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Easter Novena with daily prayers, reflections, and guidance. Celebrate the Resurrection of Jesus Christ with this traditional nine-day prayer.',
  keywords: [
    'easter novena',
    'resurrection novena',
    'jesus christ resurrection',
    'easter prayer',
    'catholic easter',
    'resurrection prayer',
    'easter season',
    'christ risen',
    'easter nine day prayer',
    'resurrection devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Easter Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Easter Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/easter',
  },
  twitter: {
    title: 'Easter Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Easter Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'The Resurrection',
    description: 'Celebrating the triumph of life over death and the victory of Jesus Christ.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'New Life',
    description: 'Embracing the new life that Christ offers us through His Resurrection.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Hope Renewed',
    description: 'Finding hope in the risen Christ and His promises of eternal life.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Joy in Christ',
    description: 'Experiencing the joy of the Resurrection and Christ\'s victory.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Victory Over Sin',
    description: 'Celebrating Christ\'s victory over sin and death through His Resurrection.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Eternal Life',
    description: 'Contemplating the promise of eternal life that the Resurrection brings.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Peace of Christ',
    description: 'Receiving the peace that Christ brings through His Resurrection.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Mercy',
    description: 'Reflecting on God\'s mercy through the Resurrection of Jesus Christ.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Alleluia',
    description: 'Praising God with joyful alleluias for the gift of the Resurrection.',
    slug: 'day-9'
  }
]

export default function EasterNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Easter Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to celebrate the Resurrection of Jesus Christ.
            This traditional novena helps us reflect on the profound meaning of Easter and enter more deeply into the joy and hope that the Resurrection brings.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌅</div>
              <div className="text-sm text-gray-600">Resurrection</div>
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
            About the Easter Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Easter Novena is a traditional nine-day prayer that celebrates the most important event in Christian history: 
              the Resurrection of Jesus Christ from the dead. This novena helps us to reflect on the profound meaning of Easter 
              and to enter more deeply into the joy and hope that the Resurrection brings.
            </p>
            
            <p className="mb-4">
              During these nine days, we meditate on the various aspects of the Resurrection: the triumph over death, 
              the promise of new life, the hope that sustains us, the joy that fills our hearts, and the peace that Christ 
              offers to all who believe in Him.
            </p>
            
            <p>
              This novena is particularly meaningful during the Easter season, but can be prayed at any time to renew 
              our faith in the risen Christ and to draw closer to Him who is our hope and our salvation.
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
                href={`/novenas/easter/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Approach each day with faith in the risen Christ. Believe that He hears your prayers 
                and will answer them according to His will.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Reflect on the Resurrection</h3>
              <p className="text-gray-700 text-sm">
                Take time to meditate on the meaning of Christ's Resurrection and how it applies 
                to your life and your current situation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Express Gratitude</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of His Son and for the hope of eternal life that the Resurrection 
                brings to all believers.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share the Joy</h3>
              <p className="text-gray-700 text-sm">
                Share the joy of Easter with others. Let your life be a witness to the hope and 
                new life that Christ offers to everyone.
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
                Believe in the Resurrection of Jesus Christ and trust in His promises. 
                Have faith that He is truly risen and alive.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the promise of eternal life that the Resurrection brings. 
                Trust that death is not the end, but the beginning of new life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart for the gift of His Son, and love your neighbor 
                as yourself, sharing the joy of Easter with others.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Easter Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Easter devotion is a way of celebrating and honoring the Resurrection of Jesus Christ, 
            the central mystery of our Christian faith and the foundation of our hope.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Easter Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌅</span>
                <span>Resurrection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎉</span>
                <span>Joy</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✨</span>
                <span>New Life</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏆</span>
                <span>Victory</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Easter Season</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Celebrate the victory of life over death</li>
              <li>• Embrace the new life that Christ offers us</li>
              <li>• Find hope in the risen Christ</li>
              <li>• Experience the joy and peace of the Resurrection</li>
              <li>• Share the Good News of Christ's victory</li>
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