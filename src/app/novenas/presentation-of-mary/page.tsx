import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Presentation of Mary Novena - Complete 9-Day Prayer Guide',
  description: 'Complete The Presentation of Mary Novena with daily prayers, reflections, and guidance. Pray for dedication to God, service to priests, and saying yes to God\'s will.',
  keywords: [
    'presentation of mary novena',
    'presentation mary novena',
    'mary presented temple novena',
    'st anne st joachim novena',
    'temple dedication novena',
    'mary service god novena',
    'priests support novena',
    'bible study novena',
    'resisting temptation novena',
    'catholic mary novena'
  ],
  openGraph: {
    title: 'The Presentation of Mary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Presentation of Mary Novena with daily prayers, reflections, and guidance for dedication to God and service to priests.',
    url: 'https://catholicbibleonline.com/novenas/presentation-of-mary',
  },
  twitter: {
    title: 'The Presentation of Mary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete The Presentation of Mary Novena with daily prayers, reflections, and guidance for dedication to God and service to priests.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Dedication to God',
    description: 'Pray for the desire to serve God and say yes to His will.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Children of the World',
    description: 'Pray for all children and their dedication to God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Infertility Suffering',
    description: 'Pray for those suffering from infertility.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Support for Priests',
    description: 'Pray for the protection and support of priests.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Bible Study',
    description: 'Pray for understanding and dedication to God\'s word.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Relationship with Mary',
    description: 'Pray for a closer relationship with the Blessed Mother.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Resisting Temptation',
    description: 'Pray for strength to resist sin and temptation.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Dying and Death',
    description: 'Pray for peaceful death and comfort for the ill.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Saying Yes to God',
    description: 'Pray for trust in God\'s will and overcoming fears.',
    slug: 'day-9'
  }
]

export default function PresentationOfMaryNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Presentation of Mary Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor the Presentation of the Blessed Virgin Mary in the Temple.
            This traditional novena helps you grow in dedication to God and service to His priests.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🏛️</div>
              <div className="text-sm text-gray-600">Temple</div>
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
            About The Presentation of Mary Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Presentation of Mary Novena is a profound spiritual practice designed to honor the moment when the Blessed Virgin Mary 
              was presented in the Temple by her parents, Saints Joachim and Anne. This novena recognizes that Mary\'s presentation 
              marked the beginning of her dedicated service to God and His priests.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Mary for her powerful intercession in helping you say 
              yes to God\'s will, even when it\'s challenging. This novena helps you to understand that Mary, as a young girl dedicated 
              to the Temple, serves as a model for all who seek to serve God with their whole heart.
            </p>
            
            <p>
              Whether you are seeking to grow in dedication to God, support priests, study the Bible, or simply want to honor the 
              Presentation of Mary, this novena will help you to find the grace and guidance you need through Mary\'s loving example 
              and powerful intercession.
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
                href={`/novenas/presentation-of-mary/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Dedicated</h3>
              <p className="text-gray-700 text-sm">
                Dedicate yourself to God as Mary was dedicated in the Temple.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God\'s will even when it seems challenging or scary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Supportive</h3>
              <p className="text-gray-700 text-sm">
                Support and pray for priests who serve God and His people.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Studious</h3>
              <p className="text-gray-700 text-sm">
                Study God\'s word and allow it to change your heart and mind.
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
                Believe in God\'s plan and trust in His guidance for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God\'s promises and His ability to work through you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and serve Him with dedication.
              </p>
            </div>
          </div>
        </section>

        {/* What is The Presentation of Mary? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is The Presentation of Mary?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Presentation of Mary celebrates the moment when the Blessed Virgin Mary was presented in the Temple by her parents, 
              Saints Joachim and Anne. According to tradition, Mary\'s parents had promised to dedicate their child to God if He 
              would grant them the gift of parenthood after years of infertility.
            </p>
            <p className="mb-4">
              When Mary was about three years old, she was taken to the Temple in Jerusalem to be dedicated to God\'s service. 
              There, she would live among the holy men and women who served in the Temple, learning about God\'s word and growing 
              in holiness. This presentation marked the beginning of Mary\'s dedicated service to God and prepared her for her 
              future role as the Mother of God.
            </p>
            <p>
              Through this novena, we honor Mary\'s presentation and seek her powerful intercession to help us say yes to God\'s will, 
              support His priests, study His word, and grow in dedication to His service, just as Mary did from her earliest years.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey of Dedication</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor the Presentation of Mary and grow in dedication to God through her intercession, 
            start with Day 1 of this novena. Remember that Mary\'s presentation in the Temple marked the beginning of her 
            dedicated service to God, and she can help you do the same.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/presentation-of-mary/day-1"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
            >
              Start Day 1: Dedication to God →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 