import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Rita of Cascia Novena - Complete 9-Day Prayer Guide',
  description: 'Complete St. Rita of Cascia Novena with daily prayers, reflections, and guidance. Pray for impossible causes and spiritual growth.',
  keywords: [
    'st rita of cascia novena',
    'st rita novena',
    'saint rita prayer',
    'st rita nine day prayer',
    'st rita devotion',
    'saint rita of cascia',
    'st rita novena prayer',
    'catholic st rita',
    'impossible causes prayer',
    'saint rita intercession'
  ],
  openGraph: {
    title: 'St. Rita of Cascia Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Rita of Cascia Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/st-rita-cascia',
  },
  twitter: {
    title: 'St. Rita of Cascia Novena - Complete 9-Day Prayer Guide',
    description: 'Complete St. Rita of Cascia Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Patience',
    description: 'Pray for patience in suffering and difficulties, following St. Rita\'s example of enduring trials.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Forgiveness',
    description: 'Pray for the grace to forgive others, as St. Rita forgave those who harmed her family.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Perseverance',
    description: 'Pray for perseverance in prayer and in seeking God\'s will, like St. Rita\'s determination.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Conversion',
    description: 'Pray for the conversion of sinners and those who have strayed from God.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Peace',
    description: 'Pray for peace in families and reconciliation between enemies.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Impossible Causes',
    description: 'Pray for impossible causes and situations that seem beyond hope.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Suffering',
    description: 'Pray for the grace to bear suffering with love and offer it for the salvation of souls.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Miracles',
    description: 'Pray for miracles and extraordinary graces through St. Rita\'s intercession.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Complete Trust',
    description: 'Complete your trust in St. Rita\'s intercession and receive her final blessing.',
    slug: 'day-9'
  }
]

export default function StRitaCasciaNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Rita of Cascia Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to seek the intercession of St. Rita of Cascia, 
            the patron saint of impossible causes, difficult marriages, and desperate situations.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">St. Rita</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Themes</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the St. Rita of Cascia Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The St. Rita of Cascia Novena is a traditional nine-day prayer that helps us seek the intercession 
              of St. Rita, known as the "Saint of the Impossible." St. Rita lived a life of extraordinary patience, 
              forgiveness, and trust in God, even in the most difficult circumstances.
            </p>
            
            <p className="mb-4">
              St. Rita is particularly known for her ability to help with impossible causes, difficult marriages, 
              family problems, and desperate situations. She is also the patron saint of abused women and victims of violence.
            </p>
            
            <p>
              This novena helps us to grow in the virtues that St. Rita exemplified: patience, forgiveness, 
              perseverance, and complete trust in God's providence, even when facing seemingly impossible situations.
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
                href={`/novenas/st-rita-cascia/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Confidence</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with confidence in St. Rita's intercession. 
                Remember that she is the patron saint of impossible causes.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and impossible causes to St. Rita. 
                She wants to help you with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Imitate Her Virtues</h3>
              <p className="text-gray-700 text-sm">
                Ask St. Rita to help you grow in patience, forgiveness, and trust in God. 
                Try to imitate her virtues in your daily life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God's Will</h3>
              <p className="text-gray-700 text-sm">
                Trust that God knows what is best for you, even if the answer is not what you expect. 
                St. Rita teaches us to accept God's will with love.
              </p>
            </div>
          </div>
        </section>

        {/* St. Rita's Life and Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            St. Rita's Life and Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🌹</div>
              <h3 className="text-lg font-semibold text-black mb-2">Patience</h3>
              <p className="text-gray-700 text-sm">
                St. Rita endured many trials with extraordinary patience, 
                including a difficult marriage and the loss of her family.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-black mb-2">Forgiveness</h3>
              <p className="text-gray-700 text-sm">
                She forgave those who harmed her family and prayed for their conversion, 
                showing us the power of forgiveness.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">🙏</div>
              <h3 className="text-lg font-semibold text-black mb-2">Trust</h3>
              <p className="text-gray-700 text-sm">
                St. Rita trusted completely in God's providence, even when facing 
                seemingly impossible situations.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the St. Rita of Cascia Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The St. Rita of Cascia devotion focuses on seeking the intercession of this powerful saint 
            for impossible causes and difficult situations.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of St. Rita Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌹</span>
                <span>Roses</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Impossible Causes</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💒</span>
                <span>Difficult Marriages</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍👩‍👧‍👦</span>
                <span>Family Problems</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📅</span>
                <span>Feast Day</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🆘</span>
                <span>Desperate Situations</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Seek help for impossible causes and desperate situations</li>
              <li>• Grow in patience, forgiveness, and trust in God</li>
              <li>• Find peace in difficult family situations</li>
              <li>• Experience God's mercy and providence</li>
              <li>• Learn to accept God's will with love</li>
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