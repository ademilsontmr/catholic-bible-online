import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Sorrows Novena with daily prayers, reflections, and guidance. Pray for Mary\'s intercession and find comfort in her maternal care.',
  keywords: [
    'our lady of sorrows novena',
    'sorrows novena',
    'mary novena',
    'our lady novena',
    'sorrows prayer',
    'mary prayer',
    'our lady prayer',
    'sorrows nine day prayer',
    'mary nine day prayer',
    'sorrows devotion',
    'mary devotion',
    'catholic novena',
    'seven sorrows',
    'mater dolorosa'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Sorrows Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Sorrows Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Mothers',
    description: 'Pray for God to bless and protect all mothers in the world with strength, patience, and grace.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Families',
    description: 'Pray for all families to be united in love, strengthened in faith, and protected from every harm.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Suffering',
    description: 'Pray for parents who witness the suffering of their children and to offer trials to God with patience.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Grief',
    description: 'Pray for all those grieving the loss of a loved one to find consolation and strength.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Emotional Pain',
    description: 'Pray for all who suffer from emotional pain, anxiety, and heartbreak to find comfort and peace.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Trust',
    description: 'Pray to grow in unshakable trust in God\'s plan and to surrender our lives fully to His will.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Devotion',
    description: 'Pray for an increase in devotion to Our Lady of Sorrows among all Christians.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Courage',
    description: 'Pray to unite our sufferings with those of Christ and to see trials as opportunities for holiness.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Church',
    description: 'Pray for the Church\'s holiness, unity, and mission in the world.',
    slug: 'day-9'
  }
]

export default function OurLadyOfSorrowsNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of Sorrows.
            This traditional novena helps us find comfort in Mary's maternal care and learn to unite our sufferings with those of Christ.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💔</div>
              <div className="text-sm text-gray-600">Sorrows</div>
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
            About the Our Lady of Sorrows Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Sorrows Novena is a traditional nine-day prayer that honors the Blessed Virgin Mary 
              under her title of Our Lady of Sorrows. This devotion commemorates the seven great sorrows that Mary endured 
              throughout her life, especially during the Passion and Death of her Son, Jesus Christ.
            </p>
            
            <p className="mb-4">
              The title "Our Lady of Sorrows" (Mater Dolorosa) reminds us of Mary's deep suffering and her perfect union 
              with the sufferings of her Son. Through this novena, we seek Mary's intercession for our needs and learn 
              to unite our own sufferings with those of Jesus, finding comfort and strength in her maternal care.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking Mary's powerful intercession 
              for our needs and intentions, especially in times of suffering and difficulty.
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
                href={`/novenas/our-lady-of-sorrows/${day.slug}`}
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
                Turn to her with confidence in every need, especially in times of suffering.
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
                Believe in Mary's powerful intercession and her maternal care.
                Trust that she will bring our prayers to Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise to help us through our sufferings.
                She is always ready to comfort us in our trials.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love Mary as our mother and show our love through devotion.
                Imitate her love for Jesus in our daily lives.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Our Lady of Sorrows Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of Sorrows devotion is a way of honoring and seeking the intercession of Mary 
            through her seven great sorrows, finding comfort and strength in her maternal care.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Sorrows Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>💔</span>
                <span>Seven Sorrows</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✝️</span>
                <span>Passion</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Intercession</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Comfort</span>
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
              <li>• Find comfort in Mary's maternal care during suffering</li>
              <li>• Unite our sufferings with those of Jesus</li>
              <li>• Grow in faith, hope, and love</li>
              <li>• Learn to trust in God's plan even in difficult times</li>
              <li>• Commemorate the seven sorrows of Mary</li>
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