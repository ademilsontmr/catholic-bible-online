import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Supreme Court - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for the Supreme Court with daily prayers, reflections, and guidance. Pray for just rulings, moral decisions, and divine guidance for Supreme Court justices.',
  keywords: [
    'supreme court novena',
    'prayer for supreme court',
    'supreme court justices prayer',
    'novena for justice',
    'supreme court ruling prayer',
    'abortion law prayer',
    'religious freedom prayer',
    'marriage sanctity prayer',
    'supreme court novena guide',
    'prayer for judges',
    'supreme court justices novena',
    'legal system prayer',
    'moral rulings prayer',
    'supreme court conversion prayer'
  ],
  openGraph: {
    title: 'Novena for the Supreme Court - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Supreme Court with daily prayers, reflections, and guidance. Pray for just rulings and moral decisions.',
    url: 'https://catholicbibleonline.com/novenas/supreme-court',
    images: [
      {
        url: 'https://catholicbibleonline.com/og-supreme-court-novena.jpg',
        width: 1200,
        height: 630,
        alt: 'Novena for the Supreme Court',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novena for the Supreme Court - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for the Supreme Court with daily prayers, reflections, and guidance.',
    images: ['https://catholicbibleonline.com/og-supreme-court-novena.jpg'],
  },
}

const novenaDays = [
  { day: 1, theme: 'Justice', description: 'Pray for just and moral rulings in abortion-related cases.', slug: 'day-1' },
  { day: 2, theme: 'Marriage', description: 'Pray for the protection of marriage and family sanctity.', slug: 'day-2' },
  { day: 3, theme: 'Religious Freedom', description: 'Pray for the freedom to practice our Catholic Faith.', slug: 'day-3' },
  { day: 4, theme: 'Conversion', description: 'Pray for the conversion of unreligious Supreme Court justices.', slug: 'day-4' },
  { day: 5, theme: 'Dedication', description: 'Pray for Catholic and Christian justices to grow in dedication to God.', slug: 'day-5' },
  { day: 6, theme: 'Moral Renewal', description: 'Pray for moral renewal in our country and society.', slug: 'day-6' },
  { day: 7, theme: 'Fortitude', description: 'Pray for courage and strength for Supreme Court justices.', slug: 'day-7' },
  { day: 8, theme: 'Humility', description: 'Pray for humility and responsibility in Supreme Court justices.', slug: 'day-8' },
  { day: 9, theme: 'Charity', description: 'Pray for charity and love in Supreme Court justices.', slug: 'day-9' }
]

export default function SupremeCourtNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Supreme Court
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer for just rulings, moral decisions, and divine guidance for Supreme Court justices.
            This traditional novena helps us intercede for the justices and pray for wisdom in their important decisions.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">⚖️</div>
              <div className="text-sm text-gray-600">Supreme Court</div>
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
            About the Novena for the Supreme Court
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for the Supreme Court is a traditional nine-day prayer that helps us intercede for the justices 
              and pray for wisdom in their important decisions. The Supreme Court holds tremendous power to influence 
              our society through its rulings on critical moral and legal issues.
            </p>
            
            <p className="mb-4">
              The title "Supreme Court" reminds us that these justices have the final authority in interpreting our laws. 
              They are always making decisions that affect millions of lives, and they need our prayers for divine guidance.
            </p>
            
            <p>
              This novena helps us to trust in God's guidance for the justices and to turn to Him with confidence in every need, 
              knowing that He will always guide them to make just and moral decisions.
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
                href={`/novenas/supreme-court/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's power to guide the Supreme Court justices.
                Turn to Him with confidence in every need.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the Supreme Court to God.
                Pray for particular cases or justices that concern you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of prayer and His guidance.
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
                Believe in God's power to guide the Supreme Court justices.
                Trust that He will help them make just decisions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope for just and moral rulings that align with God's law.
                Trust that good can prevail even in difficult cases.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love for the justices and pray for their spiritual well-being.
                Desire their growth in virtue for the good of all.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for the Supreme Court Devotion?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for the Supreme Court devotion is a way of praying for the justices and seeking God's guidance 
            for their important decisions that affect our nation.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Supreme Court Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>⚖️</span>
                <span>Justice</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👨‍⚖️</span>
                <span>Justices</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🏛️</span>
                <span>Court</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>📜</span>
                <span>Law</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Guidance</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Trust in God's guidance for the Supreme Court justices</li>
              <li>• Pray for wisdom in important legal decisions</li>
              <li>• Intercede for the justices and their spiritual well-being</li>
              <li>• Seek divine guidance for moral and legal issues</li>
              <li>• Participate in the governance of our nation through prayer</li>
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