import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Novena to St. Thérèse of Lisieux - The Little Flower | Catholic Bible Online',
  description: 'A beautiful nine-day prayer to St. Thérèse of Lisieux, the Little Flower, seeking her intercession for spiritual growth, trust in God, and the grace to follow her "Little Way" of love and simplicity.',
  keywords: 'St. Thérèse of Lisieux, Little Flower, novena, Catholic prayer, spiritual growth, little way, trust in God, Carmelite saint',
  openGraph: {
    title: 'Novena to St. Thérèse of Lisieux - The Little Flower',
    description: 'A beautiful nine-day prayer to St. Thérèse of Lisieux, seeking her intercession for spiritual growth and trust in God.',
    type: 'website',
    url: 'https://catholic-bible-online.com/novenas/st-therese-lisieux',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novena to St. Thérèse of Lisieux - The Little Flower',
    description: 'A beautiful nine-day prayer to St. Thérèse of Lisieux, seeking her intercession for spiritual growth and trust in God.',
  },
}

const novenaDays = [
  {
    day: 1,
    slug: 'day-1',
    theme: 'Trust in God',
    description: 'Learning to trust completely in God\'s love and mercy'
  },
  {
    day: 2,
    slug: 'day-2',
    theme: 'The Little Way',
    description: 'Embracing simplicity and doing small things with great love'
  },
  {
    day: 3,
    slug: 'day-3',
    theme: 'Childlike Confidence',
    description: 'Approaching God with the trust of a child'
  },
  {
    day: 4,
    slug: 'day-4',
    theme: 'Spiritual Childhood',
    description: 'Growing in spiritual simplicity and dependence on God'
  },
  {
    day: 5,
    slug: 'day-5',
    theme: 'Love and Sacrifice',
    description: 'Offering our daily sacrifices with love'
  },
  {
    day: 6,
    slug: 'day-6',
    theme: 'Hidden Life',
    description: 'Finding holiness in ordinary, hidden acts of love'
  },
  {
    day: 7,
    slug: 'day-7',
    theme: 'Confidence in Prayer',
    description: 'Trusting that our prayers are heard and answered'
  },
  {
    day: 8,
    slug: 'day-8',
    theme: 'Rose Petals',
    description: 'Believing in the shower of roses from heaven'
  },
  {
    day: 9,
    slug: 'day-9',
    theme: 'Eternal Love',
    description: 'Completing our novena with gratitude and hope'
  }
]

export default function StThereseLisieuxNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Thérèse of Lisieux
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to St. Thérèse of Lisieux, the Little Flower, 
            seeking her intercession for spiritual growth, trust in God, and the grace 
            to follow her "Little Way" of love and simplicity.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🌹</div>
              <div className="text-sm text-gray-600">Little Flower</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">💝</div>
              <div className="text-sm text-gray-600">Little Way</div>
            </div>
          </div>
        </div>

        {/* What is this Novena Section */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            About the Novena to St. Thérèse of Lisieux
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Thérèse of Lisieux, known as "The Little Flower," was a French Carmelite nun 
              who lived from 1873 to 1897. She is one of the most beloved saints in the Catholic Church, 
              known for her "Little Way" - a path to holiness through simple, everyday acts of love and trust in God.
            </p>
            
            <p className="mb-4">
              This novena honors St. Thérèse's spiritual approach of doing small things with great love 
              and trusting completely in God's mercy. She promised to spend her heaven doing good on earth, 
              sending down a "shower of roses" to those who ask for her intercession.
            </p>
            
            <p className="mb-4">
              St. Thérèse teaches us that holiness is not about doing great things, but about doing 
              ordinary things with extraordinary love. Her message of spiritual childhood - approaching 
              God with the trust and simplicity of a child - continues to inspire millions around the world.
            </p>
            
            <p>
              Through this novena, we seek to grow in trust, love, and the grace to follow her Little Way 
              in our daily lives, finding holiness in the ordinary moments and trusting in God's infinite love.
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
                href={`/novenas/st-therese-lisieux/${day.slug}`}
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
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              To make this novena most effectively, follow these guidelines:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Pray with confidence:</strong> St. Thérèse teaches us to trust completely in God's love</li>
              <li><strong>Embrace simplicity:</strong> Focus on doing small acts of love each day</li>
              <li><strong>Be consistent:</strong> Pray the novena at the same time each day</li>
              <li><strong>Offer your intentions:</strong> Bring your specific needs and desires to God through St. Thérèse</li>
              <li><strong>Practice the Little Way:</strong> Look for opportunities to do ordinary things with extraordinary love</li>
              <li><strong>Trust in the shower of roses:</strong> Believe that St. Thérèse will intercede for you</li>
            </ul>
            
            <p>
              Remember that St. Thérèse promised to spend her heaven doing good on earth. 
              Trust in her intercession and in God's infinite mercy and love.
            </p>
          </div>
        </section>

        {/* The Three Theological Virtues */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            The Three Theological Virtues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">❤️</div>
              <h3 className="font-semibold text-black mb-2">Faith</h3>
              <p className="text-gray-600 text-sm">
                Trust completely in God's love and mercy, as St. Thérèse did
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">💚</div>
              <h3 className="font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-600 text-sm">
                Believe in the shower of roses and God's promises
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-3xl mb-3">💖</div>
              <h3 className="font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-600 text-sm">
                Do everything with love, following the Little Way
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion to St. Thérèse? */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Devotion to St. Thérèse of Lisieux?
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The devotion to St. Thérèse of Lisieux centers on her "Little Way" - a spiritual path 
              that emphasizes doing ordinary things with extraordinary love. Unlike other spiritual 
              approaches that focus on great penances or extraordinary experiences, St. Thérèse's way 
              is accessible to everyone.
            </p>
            
            <p className="mb-4">
              Key aspects of devotion to St. Thérèse include:
            </p>
            
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li><strong>Spiritual Childhood:</strong> Approaching God with the trust and simplicity of a child</li>
              <li><strong>The Little Way:</strong> Finding holiness in small, everyday acts of love</li>
              <li><strong>Confidence in God:</strong> Trusting completely in God's mercy and love</li>
              <li><strong>Hidden Sacrifices:</strong> Offering small sacrifices and inconveniences with love</li>
              <li><strong>Shower of Roses:</strong> Believing in her promise to send spiritual graces from heaven</li>
            </ul>
            
            <p className="mb-4">
              St. Thérèse's autobiography, "Story of a Soul," reveals her spiritual journey and has 
              inspired millions. She was declared a Doctor of the Church in 1997, making her one of 
              only four women to receive this honor.
            </p>
            
            <p>
              Her message is particularly relevant today: we don't need to do great things to be holy. 
              We simply need to do everything with love, trusting in God's mercy and following the 
              path of spiritual childhood that leads to heaven.
            </p>
          </div>
        </section>

        {/* Back to Novenas */}
        <div className="text-center">
          <Link 
            href="/novenas"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            ← Back to Novenas
          </Link>
        </div>
      </div>
    </div>
  )
} 