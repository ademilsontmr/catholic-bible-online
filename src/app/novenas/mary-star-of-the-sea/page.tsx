import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Mary Star of the Sea - Complete 9-Day Prayer Guide',
  description: 'Complete Novena to Mary Star of the Sea with daily prayers, reflections, and guidance. Pray for protection, guidance, and safe navigation through life\'s journey.',
  keywords: [
    'mary star of the sea novena',
    'star of the sea novena',
    'stella maris novena',
    'mary navigation novena',
    'mary guidance novena',
    'mary protection novena',
    'mary peace novena',
    'mary faith novena',
    'mary conversion novena',
    'catholic mary novena'
  ],
  openGraph: {
    title: 'Novena to Mary Star of the Sea - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Mary Star of the Sea with daily prayers, reflections, and guidance for protection and guidance.',
    url: 'https://catholicbibleonline.com/novenas/mary-star-of-the-sea',
  },
  twitter: {
    title: 'Novena to Mary Star of the Sea - Complete 9-Day Prayer Guide',
    description: 'Complete Novena to Mary Star of the Sea with daily prayers, reflections, and guidance for protection and guidance.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Protection of Travelers',
    description: 'Pray for protection of all travelers on physical and spiritual journeys.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Consolation in Sorrow',
    description: 'Pray for comfort and solace in times of grief and loss.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Guidance and Wisdom',
    description: 'Pray for guidance and wisdom in life\'s complex decisions.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Healing of the Sick',
    description: 'Pray for healing and comfort for those who are suffering.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Protection of Families',
    description: 'Pray for protection and strengthening of family bonds.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Peace in the World',
    description: 'Pray for peace, reconciliation, and justice in our troubled world.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Deepening of Faith',
    description: 'Pray for strengthening and nurturing of faith in Jesus Christ.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Conversion of Hearts',
    description: 'Pray for the conversion of hearts back to Christ\'s love.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude and Surrender',
    description: 'Pray with gratitude and surrender to Mary\'s loving care.',
    slug: 'day-9'
  }
]

export default function MaryStarOfTheSeaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Mary Star of the Sea
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to honor Mary, Star of the Sea, our guiding light and protector.
            This traditional novena helps you navigate life\'s journey with Mary\'s guidance and protection.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⭐</div>
              <div className="text-sm text-gray-600">Star</div>
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
            About Novena to Mary Star of the Sea
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena to Mary Star of the Sea is a profound spiritual practice designed to honor Mary under her beautiful title 
              "Star of the Sea" (Stella Maris). This novena recognizes that Mary serves as our guiding star, leading us safely 
              through the turbulent waters of life to the safe harbor of God\'s love.
            </p>
            
            <p className="mb-4">
              Through nine days of focused prayer, you will learn to turn to Mary, Star of the Sea, for her powerful intercession 
              in protecting travelers, consoling the sorrowful, guiding the lost, and bringing peace to our troubled world. This 
              novena helps you to understand that Mary\'s light never fails to guide us home to her Son, Jesus Christ.
            </p>
            
            <p>
              Whether you are seeking protection on a journey, guidance in difficult decisions, consolation in sorrow, or simply 
              want to honor Mary as our guiding star, this novena will help you to find the grace and guidance you need through 
              Mary\'s unwavering light and maternal care.
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
                href={`/novenas/mary-star-of-the-sea/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Mary\'s guidance and protection like sailors trust the North Star.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for Mary\'s constant intercession and maternal care.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Surrendered</h3>
              <p className="text-gray-700 text-sm">
                Surrender your journey to Mary\'s loving guidance and protection.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in Mary\'s ability to guide you safely through life\'s storms.
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
                Believe in Mary\'s power to guide and protect you on your journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary\'s promise to lead you safely to her Son, Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as your guiding star and trust in her maternal care.
              </p>
            </div>
          </div>
        </section>

        {/* What is Mary Star of the Sea? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">What is Mary Star of the Sea?</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Mary, Star of the Sea (Stella Maris), is one of the most beautiful and ancient titles given to the Blessed Virgin Mary. 
              This title comes from the Latin "Stella Maris" and has been used by sailors and travelers for centuries as they looked 
              to the stars for guidance across the vast and dangerous seas.
            </p>
            <p className="mb-4">
              Just as the North Star guides sailors safely to their destination, Mary serves as our guiding star, leading us through 
              the turbulent waters of life to the safe harbor of God\'s love. She never fails to guide us home to her Son, Jesus Christ, 
              and her light remains constant even in the darkest storms of life.
            </p>
            <p>
              Through this novena, we honor Mary as our Star of the Sea and seek her powerful intercession to guide us through life\'s 
              journey, protect us from harm, console us in sorrow, and lead us safely to the eternal shores of God\'s kingdom.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-sky-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Begin Your Journey with Mary</h2>
          <p className="text-gray-700 leading-relaxed mb-6 text-center">
            If you\'re ready to honor Mary, Star of the Sea, and seek her guidance through life\'s journey, 
            start with Day 1 of this novena. Remember that Mary\'s light never fails to guide us safely 
            through the storms of life to the safe harbor of God\'s love.
          </p>
          <div className="text-center">
            <Link
              href="/novenas/mary-star-of-the-sea/day-1"
              className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
            >
              Start Day 1: Protection of Travelers →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
} 