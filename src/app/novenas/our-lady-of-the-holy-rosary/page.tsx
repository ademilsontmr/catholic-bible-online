import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Holy Rosary Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of the Holy Rosary Novena with daily prayers, reflections, and guidance. Pray for special intentions through the intercession of Our Lady of the Holy Rosary.',
  keywords: [
    'our lady of the holy rosary novena',
    'holy rosary novena',
    'rosary novena',
    'our lady of the rosary novena',
    'holy rosary prayer',
    'rosary novena prayer',
    'our lady of the holy rosary prayer',
    'rosary novena intercession',
    'catholic novena',
    'novena to our lady of the holy rosary'
  ],
  openGraph: {
    title: 'Our Lady of the Holy Rosary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Holy Rosary Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-holy-rosary',
  },
  twitter: {
    title: 'Our Lady of the Holy Rosary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of the Holy Rosary Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Tender Love for Mary',
    description: 'Pray with tender love for Our Lady of the Holy Rosary.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Intentions of the Sacred Heart',
    description: 'Pray for the intentions of the Sacred Heart of Jesus.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Atonement for Offenses',
    description: 'Pray in atonement for offenses against the Immaculate Heart.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Special Favor Request',
    description: 'Pray for your special favor through the Rosary Novena.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Will',
    description: 'Pray to seek God\'s holy Will concerning your request.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Spiritual Bouquet',
    description: 'Offer a spiritual bouquet of roses to Our Lady.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Confidence in Mary',
    description: 'Put all your confidence in Our Lady\'s powerful prayers.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Greater Glory of God',
    description: 'Pray for the greater glory of God and the sake of Jesus.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Sweet Heart of Mary',
    description: 'Pray to the Sweet Heart of Mary for salvation.',
    slug: 'day-9'
  }
]

export default function OurLadyOfTheHolyRosaryNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Holy Rosary Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of the Holy Rosary, seeking her intercession 
            for special intentions through the devotion of the Holy Rosary.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Rosary</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💝</div>
              <div className="text-sm text-gray-600">Love</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Our Lady of the Holy Rosary Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of the Holy Rosary Novena is a beautiful nine-day prayer to the Blessed Virgin Mary, 
              who is venerated as Our Lady of the Holy Rosary. This novena is said along with a daily Rosary 
              and helps us seek her powerful intercession for our special intentions.
            </p>
            
            <p className="mb-4">
              Through this novena, we offer the Holy Rosary as a proof of our tender love for Our Lady, 
              for the intentions of the Sacred Heart of Jesus, in atonement for offenses against her 
              Immaculate Heart, and for our special requests.
            </p>
            
            <p>
              This novena reminds us that Our Lady's prayers before God are most powerful. We put all our 
              confidence in her, knowing that if she prays for us, we cannot be refused. We ask her to 
              present our petitions to her Divine Son and to help us seek God's holy Will.
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
                href={`/novenas/our-lady-of-the-holy-rosary/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of the Holy Rosary with tender love and devotion. 
                Offer your prayers as a proof of your love for her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Say the Daily Rosary</h3>
              <p className="text-gray-700 text-sm">
                This novena is to be said along with a daily Rosary. Make sure to pray 
                the Rosary each day of the novena.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Put all your confidence in Our Lady. Her prayers before God are most 
                powerful and cannot be refused.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek God's Will</h3>
              <p className="text-gray-700 text-sm">
                Ask Our Lady to help you seek God's holy Will concerning your request. 
                Trust that she will obtain what is best for your soul.
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
                Believe in Our Lady of the Holy Rosary's power and love. Trust in her intercession 
                and her role as Mother of the Church.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Our Lady's promise to help all who turn to her. Maintain confidence 
                that her prayers before God are most powerful.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for Our Lady of the Holy Rosary and for others. Include in your intentions the needs of 
                all who are suffering and in need of her intercession.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of the Holy Rosary? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of the Holy Rosary?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of the Holy Rosary</strong> is a title given to the Blessed Virgin Mary in honor of her 
              role in the devotion of the Holy Rosary. She is venerated as the one who revealed the Rosary to St. Dominic 
              and continues to encourage this powerful prayer devotion.
            </p>
            
            <p className="mb-4">
              <strong>Fatima Requests</strong> - At Fatima, Our Lady specifically requested that we pray the Rosary daily 
              for peace in the world and for the conversion of sinners. She asked us to offer the Rosary as a proof of 
              our tender love for her.
            </p>
            
            <p className="mb-4">
              <strong>Powerful Intercession</strong> - Our Lady of the Holy Rosary is known for her powerful intercession. 
              Her prayers before God are most powerful and cannot be refused. She presents our petitions to her Divine Son 
              with maternal love and care.
            </p>
            
            <p className="mb-4">
              <strong>Spiritual Bouquet</strong> - When we pray the Rosary, we offer Our Lady a spiritual bouquet of roses. 
              Each Hail Mary is like a rose offered to her, creating a beautiful spiritual gift that pleases her Immaculate Heart.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The feast of Our Lady of the Holy Rosary is celebrated on October 7th, 
              commemorating the victory of the Christian fleet over the Turks at the Battle of Lepanto in 1571, 
              which was attributed to the intercession of Our Lady through the Rosary.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 