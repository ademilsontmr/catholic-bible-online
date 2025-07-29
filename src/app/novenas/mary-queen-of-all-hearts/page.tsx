import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mary Queen of All Hearts Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Mary Queen of All Hearts Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession as Queen of All Hearts.',
  keywords: [
    'mary queen of all hearts novena',
    'queen of all hearts novena',
    'mary novena',
    'queen of all hearts prayer',
    'mary prayer',
    'queen of all hearts nine day prayer',
    'mary nine day prayer',
    'queen of all hearts devotion',
    'mary devotion',
    'catholic novena'
  ],
  openGraph: {
    title: 'Mary Queen of All Hearts Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Mary Queen of All Hearts Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/mary-queen-of-all-hearts',
  },
  twitter: {
    title: 'Mary Queen of All Hearts Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Mary Queen of All Hearts Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Devotion',
    description: 'Pray for growth in true devotion to Mary Queen of All Hearts.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Love',
    description: 'Pray for increased love for Jesus through Mary.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Conversion',
    description: 'Pray for the conversion of hearts hardened toward Mary.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Respect',
    description: 'Pray that all people may love and respect Mary as Jesus wishes.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Religious Life',
    description: 'Pray for all religious orders dedicated to Mary Queen of All Hearts.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Virtues',
    description: 'Pray to imitate all of Mary\'s virtues in our lives.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Intimacy',
    description: 'Pray for growth in intimacy with Our Lord through Mary.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Gratitude',
    description: 'Pray for growth in gratitude for all that God has given us.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Evangelization',
    description: 'Pray for the propagation of all Church teachings in the world.',
    slug: 'day-9'
  }
]

export default function MaryQueenOfAllHeartsNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Mary Queen of All Hearts Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Mary Queen of All Hearts.
            This traditional novena helps us grow closer to Mary and experience her maternal care as Queen of All Hearts.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👑</div>
              <div className="text-sm text-gray-600">Mary</div>
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
            About the Mary Queen of All Hearts Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Mary Queen of All Hearts Novena is a traditional nine-day prayer that helps us grow closer to Mary 
              and experience her maternal care as Queen of All Hearts. Mary is our mother, given to us by Jesus from the cross 
              when He said to John, "Behold your mother" (John 19:27).
            </p>
            
            <p className="mb-4">
              The title "Queen of All Hearts" reminds us that Mary reigns over all hearts with her motherly love. She is always available 
              to us, always ready to intercede for us, and always ready to bring our prayers to Jesus.
            </p>
            
            <p>
              This novena helps us to trust in Mary's intercession and to turn to her with confidence in every need, 
              knowing that she will always help us and bring our prayers to her Son.
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
                href={`/novenas/mary-queen-of-all-hearts/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
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
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-700 text-sm">
                Believe in Mary's intercession and her ability to help us.
                Trust that she will bring our prayers to Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's queenship and her maternal care.
                She is always ready to assist us in our needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our mother and imitate her love for Jesus.
                Show our love through devotion and prayer.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Mary Queen of All Hearts Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Mary Queen of All Hearts devotion is a way of honoring and seeking the intercession of Mary, 
            who is our Queen of All Hearts and advocate before God.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Queen of All Hearts Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👑</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>All Hearts</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👑</span>
                <span>Queen</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🖼️</span>
                <span>Icon</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Feast Day</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in Mary's queenship and intercession</li>
              <li>• Grow closer to Mary as our spiritual mother</li>
              <li>• Experience Mary's maternal care and protection</li>
              <li>• Bring our prayers and needs to Jesus through Mary</li>
              <li>• Imitate Mary's virtues and love for God</li>
            </ul>
          </div>
        </section>

        {/* Navigation */}
        <div className="text-center">
          <Link
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to All Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 