import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of the Holy Spirit - Complete 9-Day Prayer Guide',
  description: 'Complete Novena of the Holy Spirit with daily prayers, reflections, and guidance. Pray for the Holy Spirit\'s gifts and fruits.',
  keywords: [
    'novena of the holy spirit',
    'holy spirit novena',
    'spirit novena',
    'holy spirit prayer',
    'pentecost novena',
    'holy spirit intercession',
    'gifts of the holy spirit',
    'fruits of the holy spirit',
    'catholic novena',
    'divine spirit novena'
  ],
  openGraph: {
    title: 'Novena of the Holy Spirit - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of the Holy Spirit with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit',
  },
  twitter: {
    title: 'Novena of the Holy Spirit - Complete 9-Day Prayer Guide',
    description: 'Complete Novena of the Holy Spirit with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Sweet Light',
    description: 'Pray for the Holy Spirit\'s illuminating light in our hearts.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Eternal Love',
    description: 'Pray for the Holy Spirit\'s eternal love and presence.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Sweet Manna',
    description: 'Pray for the Holy Spirit\'s nourishment from the Son\'s heart.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Eternal Life',
    description: 'Pray for the Holy Spirit\'s gift of new life.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Penetrating Ray',
    description: 'Pray for the Holy Spirit\'s penetrating light of wisdom.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Victorious Power',
    description: 'Pray for the Holy Spirit\'s power and strength.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'God\'s Molding Hand',
    description: 'Pray for the Holy Spirit\'s work of building and creating.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Creator of All',
    description: 'Pray for the Holy Spirit\'s creative power and beauty.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Jubilation',
    description: 'Pray for the Holy Spirit\'s song of love and joy.',
    slug: 'day-9'
  }
]

export default function HolySpiritNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of the Holy Spirit
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the gifts and fruits of the Holy Spirit.
            This traditional novena helps us grow closer to God and experience the Holy Spirit's transforming power in our lives.
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
            About the Novena of the Holy Spirit
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena of the Holy Spirit is a powerful nine-day prayer that helps us grow closer to God and experience 
              the Holy Spirit's miraculous presence and power. The Holy Spirit is the third Person of the Blessed Trinity, 
              sent by the Father and the Son to guide, comfort, and sanctify us.
            </p>
            
            <p className="mb-4">
              The Holy Spirit's life is marked by His role as our Advocate, Comforter, and Sanctifier. He bestows upon us 
              the seven gifts (wisdom, understanding, counsel, fortitude, knowledge, piety, and fear of the Lord) and the 
              twelve fruits (charity, joy, peace, patience, kindness, goodness, generosity, gentleness, faithfulness, modesty, 
              self-control, and chastity).
            </p>
            
            <p>
              This novena helps us to trust in the Holy Spirit's powerful intercession and to turn to Him with confidence 
              in every need, knowing that He will never refuse to help those who have recourse to Him.
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
                href={`/novenas/holy-spirit/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Spirit</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the Holy Spirit's powerful intercession and His ability to help you.
                Turn to Him with confidence in every need, especially for spiritual gifts and guidance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Holy Spirit will not fail to help 
                those who turn to Him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to the Holy Spirit. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Holy Spirit for His intercession and for the graces you receive. 
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
                Believe in the Holy Spirit's powerful intercession and in God's ability to work through His Spirit. 
                Trust that God hears and answers our prayers through His divine presence.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's mercy and in the Holy Spirit's ability to obtain miracles for us. 
                Maintain confidence that God will provide what is best for our salvation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">Charity</h3>
              <p className="text-gray-700 text-sm">
                Pray with love for God and for others. Include in your intentions the needs of 
                all those who are suffering or in need of the Holy Spirit's help.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to the Holy Spirit? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to the Holy Spirit?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              <strong>The Holy Spirit</strong> is the third Person of the Blessed Trinity, equal to the Father and the Son. 
              He is the Love that proceeds from the Father and the Son, sent to guide, comfort, and sanctify the Church.
            </p>
            
            <p className="mb-4">
              <strong>Seven Gifts</strong> - The Holy Spirit bestows upon us seven gifts: wisdom, understanding, counsel, 
              fortitude, knowledge, piety, and fear of the Lord. These gifts help us to live virtuous lives and grow in holiness.
            </p>
            
            <p className="mb-4">
              <strong>Twelve Fruits</strong> - The Holy Spirit also produces in us twelve fruits: charity, joy, peace, patience, 
              kindness, goodness, generosity, gentleness, faithfulness, modesty, self-control, and chastity.
            </p>
            
            <p className="mb-4">
              <strong>Our Advocate</strong> - The Holy Spirit is our Advocate and Comforter, who intercedes for us with 
              inexpressible groanings and helps us in our weakness. He guides us into all truth and reminds us of everything Jesus taught.
            </p>
            
            <p>
              <strong>Feast Day</strong> - The Holy Spirit is celebrated especially on Pentecost Sunday, when He descended 
              upon the Apostles and the Blessed Virgin Mary, and is invoked daily in the Church's prayers and sacraments.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
} 