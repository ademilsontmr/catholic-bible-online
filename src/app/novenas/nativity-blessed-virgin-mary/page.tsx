import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nativity of the Blessed Virgin Mary Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Nativity of the Blessed Virgin Mary Novena with daily prayers, reflections, and guidance. Pray for family holiness, stronger marriages, and devotion to the Holy Family.',
  keywords: [
    'nativity blessed virgin mary novena',
    'nativity mary novena',
    'birth of mary novena',
    'blessed virgin mary birth novena',
    'mary nativity prayer novena',
    'holy family novena',
    'family holiness novena',
    'stronger marriages novena',
    'st joachim st anne novena',
    'catholic mary novena'
  ],
  openGraph: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Nativity of the Blessed Virgin Mary Novena with daily prayers, reflections, and guidance for family holiness and stronger marriages.',
    url: 'https://catholicbibleonline.com/novenas/nativity-blessed-virgin-mary',
  },
  twitter: {
    title: 'Nativity of the Blessed Virgin Mary Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Nativity of the Blessed Virgin Mary Novena with daily prayers, reflections, and guidance for family holiness and stronger marriages.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Family Holiness',
    description: 'Pray for hope, love, and mercy in your family.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Daughter of Adam',
    description: 'Pray for new life through Mary\'s Son.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Daughter of Saints',
    description: 'Pray for devotion to the Precious Blood.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Daughter of Israel',
    description: 'Pray for love and devotion to parents.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Preserved by Holy Spirit',
    description: 'Pray for faithfulness to Mary\'s Son.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Charity to Parents',
    description: 'Pray for greater charity to parents and grandparents.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Joy to Angels',
    description: 'Pray for graces to rain down on married couples.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Joy to the World',
    description: 'Pray for patience with family and loved ones.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Devotion to Holy Family',
    description: 'Pray for increased devotion to the Holy Family.',
    slug: 'day-9'
  }
]

export default function NativityBlessedVirginMaryNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Nativity of the Blessed Virgin Mary Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor the birth of the Blessed Virgin Mary.
            This traditional novena helps you grow in family holiness and devotion to the Holy Family.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👶</div>
              <div className="text-sm text-gray-600">Birth</div>
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
            About the Nativity of the Blessed Virgin Mary Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Nativity of the Blessed Virgin Mary Novena is a beautiful spiritual practice designed to honor the birth 
              of the Blessed Virgin Mary, who was born to Saints Joachim and Anne. This novena recognizes that Mary\'s birth 
              was a moment of great joy for the angels and the world, as it signaled the coming of Jesus Christ, our Savior.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Mary for her powerful intercession in bringing 
              hope, love, and mercy into your family. This novena helps you to understand that Mary, as the most holy daughter 
              of Saints Joachim and Anne, is a model for all Christian families and a source of great joy for the world.
            </p>
            
            <p>
              Whether you are seeking to strengthen your family bonds, grow in holiness, or simply want to honor the birth 
              of the Blessed Virgin Mary, this novena will help you to find the grace and guidance you need through 
              Mary\'s loving care and example.
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
                href={`/novenas/nativity-blessed-virgin-mary/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Jesus and Mary\'s powerful intercession for your family.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devoted</h3>
              <p className="text-gray-700 text-sm">
                Show devotion to the Holy Family and honor Mary\'s birth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Charitable</h3>
              <p className="text-gray-700 text-sm">
                Show greater charity to your parents and grandparents.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be exceedingly patient with your family and loved ones.
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
                Believe in Mary\'s birth and her role in salvation history.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary\'s intercession for stronger and holier marriages.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love your family and show greater charity to parents.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Nativity of the Blessed Virgin Mary? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is the Nativity of the Blessed Virgin Mary?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Nativity of the Blessed Virgin Mary celebrates the birth of the Blessed Virgin Mary to Saints Joachim 
              and Anne. This feast, celebrated on September 8th, honors the birth of the woman who would become the Mother 
              of God. Mary\'s birth was a moment of great joy for the angels and the world, as it signaled the coming of 
              Jesus Christ, who would save the whole world by His life, death, and resurrection.
            </p>
            <p className="mb-4">
              Mary was born into a family of saints - her parents, Joachim and Anne, were holy and devout people who 
              raised their daughter in the ways of the Lord. The Holy Spirit preserved Mary from sin so that our Lord 
              would have a fitting vessel to enter the world. As the most holy daughter of Israel, Mary is a model for 
              all Christian families and a source of great joy for the world.
            </p>
            <p>
              Through this novena, we honor Mary\'s birth and seek her powerful intercession to help us bring hope, love, 
              and mercy into our families, to strengthen our marriages, and to grow in devotion to the Holy Family.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey to Family Holiness</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor the birth of the Blessed Virgin Mary and grow in family holiness through her intercession, 
            start with Day 1 of this novena. Remember that Mary\'s birth brought great joy to the world and signaled the 
            coming of our Savior, Jesus Christ.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/nativity-blessed-virgin-mary/day-1"
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
            >
              Start Day 1: Family Holiness →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 