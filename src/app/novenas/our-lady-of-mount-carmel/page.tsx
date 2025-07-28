import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Mount Carmel Novena - Complete 9-Day Prayer Guide',
  description: 'Complete Our Lady of Mount Carmel Novena with daily prayers, reflections, and guidance. Pray for protection, grace, and the promise of the Scapular.',
  keywords: [
    'our lady of mount carmel novena',
    'mount carmel novena',
    'mary novena',
    'our lady novena',
    'mount carmel prayer',
    'mary prayer',
    'our lady prayer',
    'mount carmel nine day prayer',
    'mary nine day prayer',
    'mount carmel devotion',
    'mary devotion',
    'catholic novena',
    'scapular novena',
    'st simon stock'
  ],
  openGraph: {
    title: 'Our Lady of Mount Carmel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Mount Carmel Novena with daily prayers, reflections, and guidance for spiritual growth.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-mount-carmel',
  },
  twitter: {
    title: 'Our Lady of Mount Carmel Novena - Complete 9-Day Prayer Guide',
    description: 'Complete Our Lady of Mount Carmel Novena with daily prayers, reflections, and guidance for spiritual growth.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Protection',
    description: 'Pray for the gift of the Scapular and Mary\'s promise of protection and grace.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Vocations',
    description: 'Pray for religious vocations and the Carmelite Order\'s spirit of contemplation.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Charity',
    description: 'Pray for the poor and marginalized, asking Mary\'s intercession for their needs.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Guidance',
    description: 'Pray for Mary\'s guidance to lead us closer to Christ and understand her role.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Comfort',
    description: 'Pray for the dying and their families, seeking Mary\'s comfort and peace.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Purgatory',
    description: 'Pray for souls in purgatory and Mary\'s promise to free scapular wearers.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Healing',
    description: 'Pray for the sick and suffering, asking Mary\'s intercession for healing and peace.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Surrender',
    description: 'Pray for the grace to surrender to God\'s will like Mary did.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Devotion',
    description: 'Pray for deeper devotion to Christ through the Scapular and Mary\'s intercession.',
    slug: 'day-9'
  }
]

export default function OurLadyOfMountCarmelNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Mount Carmel Novena
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to seek the intercession of Our Lady of Mount Carmel.
            This traditional novena helps us grow closer to Mary and experience her protection through the Scapular.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">👼</div>
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
            About the Our Lady of Mount Carmel Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Our Lady of Mount Carmel Novena is a traditional nine-day prayer that honors the Blessed Virgin Mary 
              under her title of Our Lady of Mount Carmel. This devotion is deeply connected to the Carmelite Order 
              and the Brown Scapular, which Mary gave to St. Simon Stock in the 13th century.
            </p>
            
            <p className="mb-4">
              The title "Our Lady of Mount Carmel" reminds us of Mary's promise to those who wear the Scapular faithfully: 
              protection in life, comfort at death, and freedom from purgatory. Through this novena, we seek Mary's intercession 
              for grace, protection, and deeper devotion to her Son, Jesus Christ.
            </p>
            
            <p>
              This novena helps us to grow in faith, hope, and love while seeking Mary's powerful intercession 
              for our needs and intentions, especially through the protection of the Scapular.
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
                href={`/novenas/our-lady-of-mount-carmel/${day.slug}`}
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
                Believe in Mary's promise of protection through the Scapular.
                Trust that she will bring our prayers to Jesus.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Mary's promise of comfort at death and freedom from purgatory.
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
            What is the Our Lady of Mount Carmel Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Our Lady of Mount Carmel devotion is a way of honoring and seeking the intercession of Mary, 
            who gave the Brown Scapular to St. Simon Stock with promises of protection and grace.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Mount Carmel Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👼</span>
                <span>Mary</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🛡️</span>
                <span>Scapular</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⛰️</span>
                <span>Mount Carmel</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Protection</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Peace</span>
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
              <li>• Receive Mary's protection and grace through the Scapular</li>
              <li>• Find comfort and peace at the hour of death</li>
              <li>• Be freed from purgatory through Mary's intercession</li>
              <li>• Grow in devotion to Mary and her Son, Jesus</li>
              <li>• Experience the spiritual benefits of the Carmelite tradition</li>
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