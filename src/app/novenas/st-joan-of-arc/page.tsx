import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Joan of Arc Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Joan of Arc Novena with daily prayers, reflections, and guidance. Pray for courage, strength, and faithfulness to God\'s will through the intercession of the Maid of Orléans.',
  keywords: [
    'st joan of arc novena',
    'st joan of arc prayer novena',
    'joan of arc novena',
    'st joan of arc courage novena',
    'st joan of arc strength novena',
    'st joan of arc faithfulness novena',
    'st joan of arc battle novena',
    'st joan of arc victory novena',
    'st joan of arc patron novena',
    'catholic st joan of arc novena'
  ],
  openGraph: {
    title: 'St. Joan of Arc Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Joan of Arc Novena with daily prayers, reflections, and guidance for courage and faithfulness.',
    url: 'https://catholicbibleonline.com/novenas/st-joan-of-arc',
  },
  twitter: {
    title: 'St. Joan of Arc Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Joan of Arc Novena with daily prayers, reflections, and guidance for courage and faithfulness.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Courage and Witness',
    description: 'Pray for courage to be a witness to Jesus Christ and do God\'s will.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Divine Intercession',
    description: 'Pray for St. Joan\'s powerful intercession in our spiritual battles.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Victory in Battle',
    description: 'Pray for victory in the spiritual battles God presents to us.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Strength and Endurance',
    description: 'Pray for the strength and endurance needed for constant spiritual warfare.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Divine Guidance',
    description: 'Pray for guidance to know and see the will of God clearly.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Devout Christian Life',
    description: 'Pray to become a truly devout and loving Christian like St. Joan.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Love for the Lord',
    description: 'Pray to love the Lord with all heart, soul, and mind.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Divine Protection',
    description: 'Pray for St. Joan\'s continuing protection of God\'s people.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Eternal Guidance',
    description: 'Pray for St. Joan to always be near, guiding us closer to Jesus.',
    slug: 'day-9'
  }
]

export default function StJoanOfArcNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joan of Arc Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor St. Joan of Arc, the Maid of Orléans and patron saint of France.
            This traditional novena helps you grow in courage, strength, and faithfulness to God\'s will.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚔️</div>
              <div className="text-sm text-gray-600">Maid</div>
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
            About St. Joan of Arc Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Joan of Arc Novena is a profound spiritual practice designed to honor the Maid of Orléans, 
              who was chosen by God to lead France to victory and remain faithful to her divine mission. This novena 
              recognizes St. Joan\'s extraordinary courage, strength, and unwavering faithfulness to God\'s will.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to St. Joan for her powerful intercession 
              in growing in courage, strength, and faithfulness to God\'s will. This novena helps you to understand 
              that St. Joan\'s example shows us how to be victorious in the spiritual battles God presents to us, 
              just as she led her troops to victory in battle.
            </p>
            
            <p>
              Whether you are seeking courage to face challenges, strength to endure difficulties, guidance to know 
              God\'s will, or simply want to honor this remarkable saint, this novena will help you to grow in virtue 
              and receive St. Joan\'s powerful intercession in your spiritual journey.
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
                href={`/novenas/st-joan-of-arc/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Show courage like St. Joan in facing spiritual battles and challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Remain faithful to God\'s will and His divine mission for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Strong</h3>
              <p className="text-gray-700 text-sm">
                Draw strength from St. Joan\'s example of endurance and perseverance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devout</h3>
              <p className="text-gray-700 text-sm">
                Live a truly devout and loving Christian life like St. Joan.
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
                Believe in God\'s power to guide and protect you like He did St. Joan.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God\'s promise to give you victory in spiritual battles.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love the Lord with all your heart, soul, and mind like St. Joan.
              </p>
            </div>
          </div>
        </section>

        {/* What is St. Joan of Arc? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Who is St. Joan of Arc?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Joan of Arc (1412-1431) was a young French peasant girl who was chosen by God to lead France 
              to victory during the Hundred Years\' War. Known as the Maid of Orléans, she received divine visions 
              and messages from St. Michael the Archangel, St. Catherine of Alexandria, and St. Margaret of Antioch.
            </p>
            <p className="mb-4">
              At the age of 17, St. Joan led the French army to several victories, including the liberation of 
              Orléans. She was captured by the English, tried for heresy, and burned at the stake at the age of 19. 
              She was canonized in 1920 and is the patron saint of France, soldiers, and those who are ridiculed 
              for their piety.
            </p>
            <p>
              Through this novena, we honor St. Joan\'s extraordinary courage, faithfulness to God\'s will, and 
              her willingness to sacrifice everything for her divine mission. We seek her intercession to help us 
              be victorious in our own spiritual battles and remain faithful to God\'s call in our lives.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-orange-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with St. Joan</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor St. Joan of Arc and seek her powerful intercession for courage and faithfulness, 
            start with Day 1 of this novena. Remember that St. Joan\'s example shows us how to be victorious in 
            spiritual battles and remain faithful to God\'s will.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/st-joan-of-arc/day-1"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
            >
              Start Day 1: Courage and Witness →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 