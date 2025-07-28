import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Good Remedy Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Good Remedy Novena with daily prayers, reflections, and guidance. Pray for special intentions through the intercession of Our Lady of Good Remedy.',
  keywords: [
    'our lady of good remedy novena',
    'good remedy novena',
    'our lady of good remedy prayer',
    'good remedy novena prayer',
    'our lady of good remedy devotion',
    'good remedy novena intercession',
    'catholic novena',
    'novena to our lady of good remedy',
    'blessed virgin mary novena',
    'good remedy devotion'
  ],
  openGraph: {
    title: 'Our Lady of Good Remedy Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Good Remedy Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-good-remedy',
  },
  twitter: {
    title: 'Our Lady of Good Remedy Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Good Remedy Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Queen of Heaven and Earth',
    description: 'Venerate Our Lady as the Queen of Heaven and Earth.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Daughter of the Most High',
    description: 'Honor Our Lady as the beloved Daughter of the Most High God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Mother of the Incarnate Word',
    description: 'Pray to Our Lady as the chosen Mother of the Incarnate Word.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Immaculate Spouse of the Holy Spirit',
    description: 'Honor Our Lady as the Immaculate Spouse of the Holy Spirit.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Sacred Vessel of the Most Holy Trinity',
    description: 'Pray to Our Lady as the Sacred Vessel of the Most Holy Trinity.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Source of Unfailing Help',
    description: 'Seek Our Lady as the source of unfailing help.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Compassionate Heart',
    description: 'Pray to Our Lady\'s compassionate heart for remedies.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Christian Lifestyle',
    description: 'Pledge to a more intensely Christian lifestyle.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Health and Peace',
    description: 'Pray for health of body and peace of mind.',
    slug: 'day-9'
  }
]

export default function OurLadyOfGoodRemedyNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Good Remedy Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to Our Lady of Good Remedy, seeking her intercession 
            for special intentions and remedies for all our needs and afflictions.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💊</div>
              <div className="text-sm text-gray-600">Remedy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💝</div>
              <div className="text-sm text-gray-600">Help</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About Our Lady of Good Remedy Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Good Remedy Novena is a beautiful nine-day prayer to the Blessed Virgin Mary 
              under her special title of Our Lady of Good Remedy. This novena helps us seek her powerful 
              intercession for remedies to all our problems and needs.
            </p>
            
            <p className="mb-4">
              Through this novena, we venerate Our Lady as the Queen of Heaven and Earth, the beloved 
              Daughter of the Most High God, the chosen Mother of the Incarnate Word, the Immaculate 
              Spouse of the Holy Spirit, and the Sacred Vessel of the Most Holy Trinity.
            </p>
            
            <p>
              This novena reminds us that Our Lady of Good Remedy comes to the aid of all who call upon her. 
              She is the source of unfailing help, and her compassionate heart knows a remedy for every 
              affliction and misery we encounter in life.
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
                href={`/novenas/our-lady-of-good-remedy/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Good Remedy with deep devotion and trust. 
                Venerate her as the Queen of Heaven and Earth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek Remedies</h3>
              <p className="text-gray-700 text-sm">
                Ask Our Lady for remedies for your specific problems and needs. 
                Trust in her as the source of unfailing help.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Her Help</h3>
              <p className="text-gray-700 text-sm">
                Put all your confidence in Our Lady of Good Remedy. Her compassionate 
                heart knows a remedy for every affliction.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Live Christian Life</h3>
              <p className="text-gray-700 text-sm">
                Pledge to live a more intensely Christian lifestyle and be more 
                conscientious in fulfilling your obligations.
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
                Believe in Our Lady of Good Remedy's power and love. Trust in her intercession
                and her role as the source of unfailing help.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Our Lady's promise to help all who call upon her. Maintain confidence
                that her compassionate heart knows a remedy for every affliction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love Our Lady of Good Remedy with filial devotion and pray with love for others. 
                Include in your intentions the needs of all who are suffering.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to Our Lady of Good Remedy? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to Our Lady of Good Remedy?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>Our Lady of Good Remedy</strong> is a special title given to the Blessed Virgin Mary 
              that emphasizes her role as the source of unfailing help and remedies for all our needs. 
              This devotion has been practiced for centuries and is known for its effectiveness.
            </p>
            
            <p className="mb-4">
              <strong>Queen of Heaven and Earth</strong> - Under this title, we venerate Our Lady as the 
              Queen of Heaven and Earth, recognizing her exalted position and her power to intercede 
              for us before her Divine Son.
            </p>
            
            <p className="mb-4">
              <strong>Source of Unfailing Help</strong> - Our Lady of Good Remedy is known as the source 
              of unfailing help. She comes to the aid of all who call upon her, providing remedies 
              for every affliction and misery we encounter in life.
            </p>
            
            <p className="mb-4">
              <strong>Compassionate Heart</strong> - Her compassionate heart knows a remedy for every 
              problem and need. She helps sinners seek reconciliation, brings comfort to the afflicted, 
              and aids the poor, hopeless, sick, and suffering.
            </p>
            
            <p>
              <strong>Historical Significance</strong> - This devotion has been practiced for centuries 
              and is particularly associated with finding remedies for difficult situations, healing 
              of body and spirit, and obtaining special graces through Our Lady's powerful intercession.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 