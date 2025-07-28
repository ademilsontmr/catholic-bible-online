import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Pompei Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Pompei Novena with daily prayers, reflections, and guidance. Pray for the Gospel of Life, families, and peace through the intercession of Our Lady of the Rosary of Pompei.',
  keywords: [
    'our lady of pompei novena',
    'lady of pompei novena',
    'pompei novena',
    'rosary of pompei novena',
    'our lady of the rosary of pompei',
    'pompei prayer',
    'gospel of life novena',
    'pompei intercession',
    'catholic novena',
    'novena to our lady of pompei'
  ],
  openGraph: {
    title: 'Our Lady of Pompei Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Pompei Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-pompei',
  },
  twitter: {
    title: 'Our Lady of Pompei Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Pompei Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Gospel of Life',
    description: 'Pray that our choices reflect the Gospel of Life.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Family Protection',
    description: 'Pray for the protection and sanctification of our families.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Peace in Our Country',
    description: 'Pray for peace and harmony in our country.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'World Peace',
    description: 'Pray for peace throughout the world.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Sweet Chain of Unity',
    description: 'Pray for unity with God through the Rosary.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Bond of Love',
    description: 'Pray for the bond of love that unites us to the angels.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Tower of Salvation',
    description: 'Pray for protection against the assaults of Hell.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Safe Port',
    description: 'Pray for Our Lady as our safe port in universal shipwreck.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Final Comfort',
    description: 'Pray for Our Lady\'s comfort in the hour of death.',
    slug: 'day-9'
  }
]

export default function OurLadyOfPompeiNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Pompei Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of the Rosary of Pompei, 
            seeking her intercession for the Gospel of Life, families, and peace in the world.
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
              <div className="text-2xl font-bold text-gray-800">🕊️</div>
              <div className="text-sm text-gray-600">Peace</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Our Lady of Pompei Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Pompei Novena is a beautiful nine-day prayer to Our Lady of the Rosary of Pompei, 
              who is venerated as the "Queen of the Rosary" and "Refuge of Sinners." This novena helps us seek 
              her powerful intercession for the most important intentions of our time.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for the Gospel of Life to be reflected in our choices, for the 
              protection and sanctification of our families, and for peace in our country and throughout the world. 
              We entrust these intentions to Our Lady's maternal care.
            </p>
            
            <p>
              This novena reminds us that Our Lady of Pompei is our "sweet chain which unites us to God," 
              our "tower of salvation against the assaults of Hell," and our "safe port in our universal shipwreck." 
              She will never abandon us and will be our comfort in the hour of death.
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
                href={`/novenas/our-lady-of-pompei/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Pompei with deep devotion and love. 
                Trust in her maternal intercession and her power as Queen of the Rosary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with consistency and faith. Our Lady of Pompei will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind the specific intentions: the Gospel of Life, families, and peace. 
                Trust that Our Lady will present these to her Son.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Pompei for her love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
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
                Believe in Our Lady of Pompei's power and love. Trust in her intercession 
                and her role as Queen of the Rosary and Refuge of Sinners.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Our Lady's promise to help all who turn to her. Maintain confidence 
                that she will present our intentions to her Son, Jesus Christ.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for Our Lady of Pompei and for others. Include in your intentions the needs of 
                all families and the peace of the entire world.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of Pompei? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of Pompei?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of Pompei</strong> is a title given to the Blessed Virgin Mary in honor of her 
              apparition and miraculous intervention in Pompei, Italy. She is venerated as the "Queen of the Rosary" 
              and is known for her powerful intercession and maternal care for all her children.
            </p>
            
            <p className="mb-4">
              <strong>Queen of the Rosary</strong> - Our Lady of Pompei is especially honored as the Queen of the Rosary. 
              The Rosary is her "sweet chain which unites us to God" and the "bond of love which unites us to the angels." 
              Through the Rosary, she leads us closer to her Son, Jesus Christ.
            </p>
            
            <p className="mb-4">
              <strong>Refuge of Sinners</strong> - Our Lady of Pompei is known as the "Refuge of Sinners" and 
              "Sovereign Consoler of the Afflicted." She welcomes all who turn to her, regardless of their past, 
              and intercedes for them with her Son.
            </p>
            
            <p className="mb-4">
              <strong>Tower of Salvation</strong> - She is our "tower of salvation against the assaults of Hell" 
              and our "safe port in our universal shipwreck." In times of trouble and temptation, she provides 
              protection and guidance.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of Our Lady of the Rosary of Pompei is celebrated on 
              May 8th, and this novena is especially popular among those seeking her intercession for families, 
              peace, and the protection of life according to the Gospel.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 