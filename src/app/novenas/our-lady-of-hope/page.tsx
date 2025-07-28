import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Hope - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Our Lady of Hope with daily prayers, reflections, and guidance. Pray for hope, grace, and spiritual strength through the intercession of Our Lady of Hope.',
  keywords: [
    'novena to our lady of hope',
    'our lady of hope novena',
    'lady of hope novena',
    'hope novena',
    'our lady of hope prayer',
    'mother of hope novena',
    'hope prayer novena',
    'our lady of hope intercession',
    'catholic novena',
    'novena to our lady of hope'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Hope - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Our Lady of Hope with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-hope',
  },
  twitter: {
    title: 'Novena to Our Lady of Hope - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Our Lady of Hope with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Mother of Fair Love',
    description: 'Pray to Our Lady as Mother of fair love and grace.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Mother of Fear',
    description: 'Pray to Our Lady as Mother of holy fear of the Lord.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Mother of Knowledge',
    description: 'Pray to Our Lady as Mother of divine knowledge.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Mother of Holy Hope',
    description: 'Pray to Our Lady as Mother of holy hope.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Grace of the Way',
    description: 'Pray for the grace of the way through Our Lady.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Grace of the Truth',
    description: 'Pray for the grace of the truth through Our Lady.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Hope of Life',
    description: 'Pray for the hope of life through Our Lady.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Hope of Virtue',
    description: 'Pray for the hope of virtue through Our Lady.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Fruits of Hope',
    description: 'Pray to be filled with the fruits of Our Lady\'s hope.',
    slug: 'day-9'
  }
]

export default function OurLadyOfHopeNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of Hope, seeking her intercession 
            for hope, grace, and spiritual strength in times of darkness and despair.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌟</div>
              <div className="text-sm text-gray-600">Hope</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💙</div>
              <div className="text-sm text-gray-600">Grace</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena to Our Lady of Hope
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Our Lady of Hope is a beautiful nine-day prayer to the Blessed Virgin Mary, 
              who is venerated as the "Mother of Grace, Hope of the world." This novena helps us seek 
              her powerful intercession for hope, grace, and spiritual strength in times of difficulty.
            </p>
            
            <p className="mb-4">
              Through this novena, we recognize Our Lady as the mother of fair love, fear, knowledge, 
              and holy hope. We ask her to fill us with her fruits and to be our advocate before the 
              throne of her Divine Son, especially when we are burdened by sin, weakness, and despair.
            </p>
            
            <p>
              This novena reminds us that Our Lady is the "Refuge of Sinners and Hope of the Hopeless." 
              She can refuse no request of her Immaculate Heart and will help us obtain the grace of 
              true sorrow for our sins, perfect resignation to God's will, and the courage to follow Jesus.
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
                href={`/novenas/our-lady-of-hope/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Hope</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Hope with confidence and trust. 
                Believe that she will intercede for you and bring you hope in times of darkness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Our Lady of Hope will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind your specific intentions and needs. Trust that Our Lady will 
                present them to her Son and obtain the graces you need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Hope for her love and for the graces you receive. 
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
                Believe in Our Lady of Hope's power and love. Trust in her intercession 
                and her role as Mother of Grace and Hope of the world.
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
                Pray with love for Our Lady of Hope and for others. Include in your intentions the needs of 
                all who are suffering and in need of hope.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of Hope? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of Hope?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of Hope</strong> is a title given to the Blessed Virgin Mary in honor of her 
              role as the source of hope for all humanity. She is venerated as the "Mother of Grace, Hope of the world" 
              and is known for her powerful intercession in times of despair and darkness.
            </p>
            
            <p className="mb-4">
              <strong>Mother of Fair Love</strong> - Our Lady of Hope is the mother of fair love, fear, knowledge, 
              and holy hope. In her is all grace of the way and of the truth; in her is all hope of life and of virtue. 
              She invites all who desire her to come and be filled with her fruits.
            </p>
            
            <p className="mb-4">
              <strong>Refuge of Sinners</strong> - Our Lady of Hope is known as the "Refuge of Sinners and Hope of the Hopeless." 
              She welcomes all who are burdened by sin, weakness, and despair, offering them hope and interceding 
              for them with her Divine Son.
            </p>
            
            <p className="mb-4">
              <strong>All-Powerful Intercessor</strong> - Our Lady of Hope is all-powerful with her Divine Son. 
              He can refuse no request of her Immaculate Heart. She shows herself a true Mother by being our advocate 
              before His throne.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The devotion to Our Lady of Hope is celebrated throughout the year, 
              and this novena is especially popular among those seeking hope in times of difficulty, despair, 
              and spiritual darkness.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 