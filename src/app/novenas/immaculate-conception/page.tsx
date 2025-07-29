import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Immaculate Conception Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Immaculate Conception Novena with daily prayers, reflections, and guidance. Pray for holiness, submission to God\'s will, and increase in faith, hope, and love.',
  keywords: [
    'immaculate conception novena',
    'immaculate conception prayer novena',
    'mary immaculate novena',
    'immaculate mary novena',
    'conception without sin novena',
    'mary full of grace novena',
    'queen of angels novena',
    'mother of god novena',
    'holy mother novena',
    'catholic mary novena'
  ],
  openGraph: {
    title: 'Immaculate Conception Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Immaculate Conception Novena with daily prayers, reflections, and guidance for holiness and submission to God\'s will.',
    url: 'https://catholicbibleonline.com/novenas/immaculate-conception',
  },
  twitter: {
    title: 'Immaculate Conception Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Immaculate Conception Novena with daily prayers, reflections, and guidance for holiness and submission to God\'s will.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Immaculate Conception',
    description: 'Pray for holiness and submission to Jesus and the Divine Will.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Queen of Heaven',
    description: 'Pray for Mary\'s intercession and God\'s grace with humility.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Increase in Faith',
    description: 'Pray for increase in faith in our risen Lord.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Increase in Hope',
    description: 'Pray for increase in hope in our risen Lord.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Increase in Love',
    description: 'Pray for increase in love for the risen Jesus.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience to God\'s Will',
    description: 'Pray for obedience to God\'s perfect will.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Divine Grace',
    description: 'Pray for God\'s grace and submission to His will.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Holiness and Salvation',
    description: 'Pray for holiness and salvation through Mary\'s prayers.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Perfect Submission',
    description: 'Pray for perfect submission to Jesus and the Divine Will.',
    slug: 'day-9'
  }
]

export default function ImmaculateConceptionNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Immaculate Conception Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor the Immaculate Conception of the Blessed Virgin Mary.
            This traditional novena helps you grow in holiness and submission to God's will through Mary's intercession.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Queen</div>
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
            About the Immaculate Conception Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Immaculate Conception Novena is a profound spiritual practice designed to honor the Blessed Virgin Mary, 
              who was conceived without sin from the very first instant. This novena recognizes that Mary, the most pure 
              Virgin, was entirely immaculate and full of grace, chosen by God to be the mother of our Savior, Jesus Christ.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Mary for her powerful intercession and to 
              imitate her holiness and submission to Jesus and the Divine Will. This novena helps you to understand that 
              Mary, as Queen of Angels and of men, has been given singular grace and honor by the Prince of Peace and 
              Lord of Lords.
            </p>
            
            <p>
              Whether you are seeking to grow in faith, hope, and love, or simply want to honor the Immaculate Conception 
              of the Blessed Virgin Mary, this novena will help you to find the holiness and grace you need through 
              Mary's powerful prayers and example.
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
                href={`/novenas/immaculate-conception/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Approach Mary with humility, recognizing her as the chosen mother of our Savior.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Obedient</h3>
              <p className="text-gray-700 text-sm">
                Follow Mary\'s example of obedience to God\'s will in all things.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Mary\'s powerful intercession and her love for all her children.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to Mary and seek to imitate her holiness and submission.
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
                Believe in Mary\'s Immaculate Conception and her powerful intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary\'s prayers for your holiness and salvation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as your mother and trust in her care for you.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Immaculate Conception? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is the Immaculate Conception?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Immaculate Conception is the Catholic dogma that the Blessed Virgin Mary was conceived without original 
              sin from the very first instant of her existence. This means that Mary, from the moment of her conception 
              in her mother\'s womb, was preserved from the stain of original sin by a special grace from God.
            </p>
            <p className="mb-4">
              This singular privilege was given to Mary because she was chosen by God to be the mother of Jesus Christ, 
              our Savior. The Prince of Peace and Lord of Lords chose her for the singular grace and honor of being His 
              beloved mother, and by the power of His Cross, He preserved her from all sin.
            </p>
            <p>
              As Queen of Angels and of men, Mary serves as our model of perfect holiness and submission to God\'s will. 
              Through this novena, we honor her Immaculate Conception and seek her powerful intercession to help us grow 
              in faith, hope, and love, and to imitate her perfect obedience to the Divine Will.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Holiness</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor the Immaculate Conception and grow in holiness through Mary\'s intercession, 
            start with Day 1 of this novena. Remember that Mary, as the most pure Virgin conceived without sin, 
            has been given singular grace and honor by God to be our mother and advocate.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/immaculate-conception/day-1"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
            >
              Start Day 1: Immaculate Conception →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 