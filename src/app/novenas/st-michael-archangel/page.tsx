import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Michael the Archangel Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Michael the Archangel Novena with daily prayers, reflections, and guidance. Pray for protection, humility, courage, and strength through the intercession of the Prince of Angels.',
  keywords: [
    'st michael archangel novena',
    'st michael prayer novena',
    'archangel michael novena',
    'st michael protection novena',
    'st michael humility novena',
    'st michael courage novena',
    'st michael strength novena',
    'st michael guardian novena',
    'st michael defender novena',
    'catholic st michael novena'
  ],
  openGraph: {
    title: 'St. Michael the Archangel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Michael the Archangel Novena with daily prayers, reflections, and guidance for protection and humility.',
    url: 'https://catholicbibleonline.com/novenas/st-michael-archangel',
  },
  twitter: {
    title: 'St. Michael the Archangel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Michael the Archangel Novena with daily prayers, reflections, and guidance for protection and humility.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Humility and Zeal',
    description: 'Pray for humility and zeal to live according to Christ\'s teachings.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Seeing God in Others',
    description: 'Pray for grace to see the image of God in the least of our brothers and sisters.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Protection from Evil',
    description: 'Pray for protection from the snares of the devil and occasions of sin.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Service to God\'s Will',
    description: 'Pray for overwhelming desire to humble ourselves before God in service.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Perfect Humility',
    description: 'Pray for the grace of perfect humility like St. Michael.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Trust in God',
    description: 'Pray for faith to truly entrust our lives to our Heavenly Father.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Glory of God',
    description: 'Pray for grace to joyfully dedicate everything to the greater glory of God.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Faithful Obedience',
    description: 'Pray for the will to faithfully obey God in all of His commandments.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Life',
    description: 'Pray for the grace to share eternity with our Heavenly Father.',
    slug: 'day-9'
  }
]

export default function StMichaelArchangelNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Michael the Archangel Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor St. Michael the Archangel, Prince of Angels and defender of the Church.
            This traditional novena helps you grow in humility, courage, and strength through his powerful intercession.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Protector</div>
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
            About St. Michael the Archangel Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Michael the Archangel Novena is a profound spiritual practice designed to honor the Prince of Angels, 
              who serves as our powerful protector and defender against the forces of evil. This novena recognizes St. Michael\'s 
              extraordinary humility, courage, and strength in serving God and protecting His Church.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to St. Michael for his powerful intercession 
              in growing in humility, rejecting sin, and perfecting your love for our Heavenly Father. This novena 
              helps you to understand that St. Michael\'s example shows us how to remain steadfast in humility and 
              courage, just as he did when he proclaimed "Who is like God?" against the pride of Satan.
            </p>
            
            <p>
              Whether you are seeking protection from evil, strength to overcome sin, guidance in humility, or simply 
              want to honor this mighty defender of the Church, this novena will help you to grow in virtue and 
              receive St. Michael\'s powerful intercession in your spiritual journey.
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
                href={`/novenas/st-michael-archangel/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Follow St. Michael\'s example of perfect humility before God.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Show courage in rejecting sin and standing for God\'s truth.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Strong</h3>
              <p className="text-gray-700 text-sm">
                Draw strength from St. Michael\'s protection and intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Remain faithful to God\'s commandments and His holy will.
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
                Believe in St. Michael\'s power to protect and defend you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God\'s promise to protect you through St. Michael\'s intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God with all your heart and trust in His divine protection.
              </p>
            </div>
          </div>
        </section>

        {/* What is St. Michael the Archangel? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who is St. Michael the Archangel?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Michael the Archangel is the Prince of Angels and one of the most powerful defenders of God\'s Church. 
              His name means "Who is like God?" and he is known for his perfect humility, courage, and strength in serving 
              the Almighty. St. Michael is the leader of the heavenly armies and the protector of God\'s people.
            </p>
            <p className="mb-4">
              In the Bible, St. Michael is described as the great prince who stands up for the children of God\'s people. 
              He is the archangel who fought against Satan and his fallen angels, casting them out of heaven. St. Michael 
              is also the angel who will lead the souls of the faithful to heaven at the end of time.
            </p>
            <p>
              Through this novena, we honor St. Michael\'s extraordinary virtues and seek his powerful intercession 
              for protection from evil, growth in humility, and strength to overcome sin. We ask him to defend us 
              in battle and to help us remain faithful to God\'s holy will throughout our lives.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with St. Michael</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor St. Michael the Archangel and seek his powerful intercession for protection and humility, 
            start with Day 1 of this novena. Remember that St. Michael\'s example shows us how to remain steadfast in 
            humility and courage, always proclaiming "Who is like God?"
          </p>
          <div className="text-center">
            <Link
              href="/novenas/st-michael-archangel/day-1"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Start Day 1: Humility and Zeal →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 