import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to the Holy Family - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to the Holy Family with daily prayers, reflections, and guidance. Pray for family blessings through the intercession of Jesus, Mary, and Joseph.',
  keywords: [
    'novena to the holy family',
    'holy family novena',
    'jesus mary joseph novena',
    'holy family prayer',
    'family novena',
    'jesus mary joseph prayer',
    'family blessing novena',
    'holy family intercession',
    'catholic novena',
    'novena to jesus mary joseph'
  ],
  openGraph: {
    title: 'Novena to the Holy Family - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to the Holy Family with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/holy-family',
  },
  twitter: {
    title: 'Novena to the Holy Family - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to the Holy Family with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Love for Holy Church',
    description: 'Pray for the grace to love Holy Church above every earthly thing.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Profession of Faith',
    description: 'Pray for courage to openly profess the faith received in Baptism.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Defense of Faith',
    description: 'Pray for the grace to defend and propagate the Faith when duty calls.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Family Charity',
    description: 'Pray for love of family and others in mutual charity.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Harmony and Unity',
    description: 'Pray for perfect harmony of thought, will, and action in families.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience to Commandments',
    description: 'Pray for grace to conform life to God\'s law and Church commandments.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Living in Charity',
    description: 'Pray to live always in the charity that God\'s commandments set forth.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Family Dedication',
    description: 'Pray for the dedication of one\'s family to the Holy Family.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Companionship',
    description: 'Pray to enjoy the everlasting companionship of the Holy Family.',
    slug: 'day-9'
  }
]

export default function HolyFamilyNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to the Holy Family
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of Jesus, Mary, and Joseph 
            for family blessings, harmony, and spiritual growth.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👨‍👩‍👧‍👦</div>
              <div className="text-sm text-gray-600">Family</div>
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
            About the Novena to the Holy Family
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to the Holy Family is a powerful nine-day prayer that helps us seek the intercession 
              of Jesus, Mary, and Joseph for our families and spiritual growth. This novena focuses on the 
              virtues of the Holy Family and asks for their blessings upon our own families.
            </p>
            
            <p className="mb-4">
              Through this novena, we pray for love of Holy Church, courage to profess our faith, 
              defense of the Faith, family charity, harmony and unity, obedience to God's commandments, 
              living in charity, family dedication, and eternal companionship with the Holy Family.
            </p>
            
            <p>
              This novena helps us to model our families after the Holy Family of Nazareth, 
              seeking their intercession for peace, harmony, and holiness in our homes.
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
                href={`/novenas/holy-family/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Family</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the intercession of Jesus, Mary, and Joseph.
                Turn to the Holy Family with confidence for all family needs and spiritual growth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Holy Family will not fail to help 
                those who turn to them with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific family needs and intentions to the Holy Family. They want to help you 
                with the particular difficulties your family faces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Holy Family for their intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and family harmony.
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
                Believe in the power of the Holy Family's intercession and in their ability to help our families. 
                Trust that God hears and answers our prayers through Jesus, Mary, and Joseph.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in the Holy Family's ability to bring peace and harmony to our families. 
                Maintain confidence that they will provide what is best for our family's salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for your family. Include in your intentions the needs of 
                all families who are suffering and in need of the Holy Family's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Holy Family? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Holy Family?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Holy Family</strong> consists of Jesus, Mary, and Joseph, who lived together in Nazareth 
              as a model of perfect family life. Their home was characterized by love, obedience, humility, 
              poverty, modesty, charity, patience, and gentleness.
            </p>
            
            <p className="mb-4">
              <strong>Model for All Families</strong> - The Holy Family is the perfect model for all Christian families. 
              Their life together shows us how to live in harmony, love, and obedience to God's will. 
              They teach us the virtues that make family life holy and pleasing to God.
            </p>
            
            <p className="mb-4">
              <strong>Source of Blessings</strong> - The Holy Family is a powerful source of blessings for our families. 
              Through their intercession, we can obtain peace, harmony, and the grace to live according to God's plan 
              for family life.
            </p>
            
            <p className="mb-4">
              <strong>Patron of Families</strong> - The Holy Family is the patron of all families and is especially 
              invoked for family unity, peace, and holiness. Their example guides us in building strong, 
              faith-filled families.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Feast of the Holy Family is celebrated on the Sunday within the Octave 
              of Christmas, and their novena is especially popular among families seeking blessings, 
              harmony, and spiritual growth.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 