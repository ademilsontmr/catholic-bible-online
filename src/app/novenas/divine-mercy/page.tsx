import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Divine Mercy Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Divine Mercy Novena with daily prayers, reflections, and guidance. Pray the traditional novena revealed to St. Faustina Kowalska.',
  keywords: [
    'divine mercy novena',
    'divine mercy prayer',
    'st faustina novena',
    'divine mercy nine day prayer',
    'divine mercy devotion',
    'divine mercy sunday',
    'st faustina prayer',
    'divine mercy chaplet',
    'divine mercy novena prayer',
    'catholic divine mercy'
  ],
  openGraph: {
    title: 'Divine Mercy Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Divine Mercy Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/divine-mercy',
  },
  twitter: {
    title: 'Divine Mercy Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Divine Mercy Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'All Mankind',
    description: 'Pray for all mankind, especially poor sinners, bringing them before the throne of God\'s mercy.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Priests and Religious',
    description: 'Pray for priests and religious, that they may be faithful to their vocations and lead others to God.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Devout and Faithful Souls',
    description: 'Pray for devout and faithful souls, that they may grow in holiness and bring others to God.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Those Who Do Not Believe in God',
    description: 'Pray for those who do not believe in God, that they may come to know His love and mercy.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Those Who Have Separated from the Church',
    description: 'Pray for those who have separated from the Church, that they may return to the fold.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Meek and Humble Souls',
    description: 'Pray for meek and humble souls, that they may be strengthened in their virtue.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Souls Who Especially Venerate Mary',
    description: 'Pray for souls who especially venerate Mary, that they may grow in devotion to her.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Souls in Purgatory',
    description: 'Pray for souls in purgatory, that they may be purified and enter into the joy of heaven.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Lukewarm Souls',
    description: 'Pray for lukewarm souls, that they may be set aflame with love for God.',
    slug: 'day-9'
  }
]

export default function DivineMercyNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Divine Mercy Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer revealed to St. Faustina Kowalska by Jesus Himself. 
            This traditional novena helps us bring souls to the fountain of God's mercy.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">❤️</div>
              <div className="text-sm text-gray-600">Mercy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Groups</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Divine Mercy Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Divine Mercy Novena was revealed to St. Faustina Kowalska by Jesus Himself. He asked her to pray this novena 
              for nine days before the Feast of Divine Mercy (the Sunday after Easter), bringing different groups of souls 
              to the fountain of His mercy each day.
            </p>
            
            <p className="mb-4">
              Jesus told St. Faustina: "I desire that during these nine days you bring souls to the fountain of My mercy, 
              that they may draw therefrom strength and refreshment and whatever grace they need in the hardships of life, 
              and especially at the hour of death."
            </p>
            
            <p>
              This novena is a powerful way to participate in God's mercy and to intercede for the salvation of souls. 
              Each day focuses on a different group of people, helping us to pray for all humanity.
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
                href={`/novenas/divine-mercy/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Jesus</h3>
              <p className="text-gray-700 text-sm">
                Begin each prayer with complete trust in Jesus' mercy. Remember that His very nature 
                is to have compassion on us and to forgive us.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray for Others</h3>
              <p className="text-gray-700 text-sm">
                This novena is not just for your own intentions, but for the salvation of all souls. 
                Pray with a heart open to the needs of others.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Mercy</h3>
              <p className="text-gray-700 text-sm">
                Meditate on the infinite mercy of Jesus. Remember that He does not look upon our sins 
                but upon our trust in His goodness.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Say "Jesus, I Trust in You"</h3>
              <p className="text-gray-700 text-sm">
                End each day's prayer with the words "Jesus, I trust in You." This simple prayer 
                is the foundation of the Divine Mercy devotion.
              </p>
            </div>
          </div>
        </section>

        {/* The Nine Groups of Souls */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Nine Groups of Souls
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold text-black mb-2">All Mankind</h3>
              <p className="text-gray-700 text-sm">
                We pray for all humanity, especially poor sinners, bringing them before the throne of God's mercy.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="text-lg font-semibold text-black mb-2">Priests & Religious</h3>
              <p className="text-gray-700 text-sm">
                We pray for those consecrated to God, that they may be faithful to their vocations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2">Faithful Souls</h3>
              <p className="text-gray-700 text-sm">
                We pray for devout and faithful souls, that they may grow in holiness.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Divine Mercy Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Divine Mercy devotion is based on the revelations given to St. Faustina Kowalska by Jesus Christ. 
            It emphasizes God's infinite mercy and His desire to pour out His grace upon all souls.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Divine Mercy</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Mercy</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Trust</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⏰</span>
                <span>3:00 PM</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📿</span>
                <span>Chaplet</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🖼️</span>
                <span>Image</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Feast</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust completely in Jesus' infinite mercy</li>
              <li>• Bring souls to the fountain of God's mercy</li>
              <li>• Intercede for the salvation of all humanity</li>
              <li>• Grow in our relationship with Jesus Christ</li>
              <li>• Experience God's mercy in our own lives</li>
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