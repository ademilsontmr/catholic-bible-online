import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Carlo Acutis - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Carlo Acutis with daily prayers, reflections, and guidance. Pray for Carlo Acutis\'s intercession and youthful holiness.',
  keywords: [
    'novena to carlo acutis',
    'carlo acutis novena',
    'acutis novena',
    'carlo acutis prayer',
    'youth saint novena',
    'carlo acutis intercession',
    'angel of youth',
    'carlo acutis patron',
    'catholic novena',
    'saint carlo acutis'
  ],
  openGraph: {
    title: 'Novena to Carlo Acutis - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Carlo Acutis with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/carlo-acutis',
  },
  twitter: {
    title: 'Novena to Carlo Acutis - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Carlo Acutis with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Not I, but God',
    description: 'Pray for Carlo Acutis\'s spirit of renunciation and self-emptying.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'To Always Be with Jesus',
    description: 'Pray for Carlo Acutis\'s life plan of being always with Jesus.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Life Plan of Love',
    description: 'Pray for Carlo Acutis\'s plan of love in everything we do.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Guardian Angel Friendship',
    description: 'Pray for Carlo Acutis\'s companionship with the holy angels.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Frequent Confession',
    description: 'Pray for Carlo Acutis\'s devotion to the sacrament of reconciliation.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Desire for Holiness',
    description: 'Pray for Carlo Acutis\'s profound desire for Heaven.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Love for Mary',
    description: 'Pray for Carlo Acutis\'s devotion to the Virgin Mary.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Eucharistic Highway',
    description: 'Pray for Carlo Acutis\'s deep Eucharistic ardor.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Holy Death',
    description: 'Pray for Carlo Acutis\'s grace of final perseverance.',
    slug: 'day-9'
  }
]

export default function CarloAcutisNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Carlo Acutis
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of Carlo Acutis, the Angel of Youth and patron of young people.
            This traditional novena helps us grow closer to God and experience Carlo Acutis's youthful holiness and wisdom.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🙏</div>
              <div className="text-sm text-gray-600">Saints</div>
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
            About the Novena to Carlo Acutis
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Carlo Acutis is a powerful nine-day prayer that helps us grow closer to God and experience 
              Carlo Acutis's miraculous intercession. Carlo Acutis was a young Italian who lived only 15 years but achieved 
              extraordinary holiness, becoming known as the "Angel of Youth."
            </p>
            
            <p className="mb-4">
              Carlo Acutis's life was marked by his deep love for the Eucharist, his devotion to Mary, his technological 
              skills used for evangelization, and his simple yet profound wisdom. He is particularly invoked by young people 
              and those seeking to live a holy life in the modern world.
            </p>
            
            <p>
              This novena helps us to trust in Carlo Acutis's powerful intercession and to turn to him with confidence 
              in every need, knowing that he will never refuse to help those who have recourse to him.
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
                href={`/novenas/carlo-acutis/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in Carlo Acutis</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Carlo Acutis's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for young people and holiness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Carlo Acutis will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Carlo Acutis. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Carlo Acutis for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
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
                Believe in Carlo Acutis's powerful intercession and in God's ability to work through his saints. 
                Trust that God hears and answers our prayers through his servants.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in Carlo Acutis's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of Carlo Acutis's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Carlo Acutis? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Carlo Acutis?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Carlo Acutis</strong> was a young Italian who lived from 1991 to 2006, achieving extraordinary holiness 
              in just 15 years of life. He is known as the "Angel of Youth" and is a patron of young people and technology.
            </p>
            
            <p className="mb-4">
              <strong>Eucharistic Devotion</strong> - Carlo Acutis had a deep love for the Eucharist, calling it his "highway to Heaven." 
              He attended Mass daily and spent hours in adoration, showing young people how to find God in the modern world.
            </p>
            
            <p className="mb-4">
              <strong>Technological Evangelization</strong> - Carlo used his computer skills to create websites documenting 
              Eucharistic miracles and Marian apparitions, showing how technology can be used for evangelization.
            </p>
            
            <p className="mb-4">
              <strong>Youthful Wisdom</strong> - Despite his young age, Carlo Acutis left behind profound spiritual insights 
              and teachings that continue to inspire people of all ages to live holy lives.
            </p>
            
            <p>
              <strong>Feast Day</strong> - Carlo Acutis's feast day is celebrated on October 12th, and he is 
              particularly venerated by young people seeking to live holy lives in the modern world.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 