import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Good Friday - Complete 9-Day Prayer Guide',
  description: 'Complete Novena for Good Friday with daily prayers, reflections, and guidance. Reze pela Sexta-feira Santa, sacrifício e redenção.',
  keywords: [
    'novena for good friday',
    'good friday novena',
    'catholic good friday prayer',
    'good friday devotion',
    'passion of christ novena',
    'good friday sacrifice prayer',
    'good friday redemption',
    'good friday cross prayer',
    'good friday conversion',
    'good friday penance'
  ],
  openGraph: {
    title: 'Novena for Good Friday - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Good Friday with daily prayers, reflections, and guidance for sacrifice and redemption.',
    url: 'https://catholicbibleonline.com/novenas/good-friday',
  },
  twitter: {
    title: 'Novena for Good Friday - Complete 9-Day Prayer Guide',
    description: 'Complete Novena for Good Friday with daily prayers, reflections, and guidance for sacrifice and redemption.',
  }
}

const novenaDays = [
  { day: 1, theme: 'Gratitude', description: "Thank God for His loving sacrifice on the cross.", slug: 'day-1' },
  { day: 2, theme: 'Priests', description: 'Pray for priests and their sacrificial love.', slug: 'day-2' },
  { day: 3, theme: 'Conversion', description: 'Pray for conversion of those indifferent to Christ.', slug: 'day-3' },
  { day: 4, theme: 'Hostility', description: 'Pray for conversion of those hostile toward Christ.', slug: 'day-4' },
  { day: 5, theme: 'Piety', description: 'Pray for growth in piety and sacrifice.', slug: 'day-5' },
  { day: 6, theme: 'Friendship', description: 'Pray for deeper friendship with Christ.', slug: 'day-6' },
  { day: 7, theme: 'Penance', description: 'Pray for growth in holy penance.', slug: 'day-7' },
  { day: 8, theme: 'Charity', description: 'Pray for growth in charity and love.', slug: 'day-8' },
  { day: 9, theme: 'Suffering', description: 'Pray for the ability to offer sufferings to Christ.', slug: 'day-9' },
]

export default function NovenaForGoodFridayPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Good Friday
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A powerful nine-day prayer to commemorate Christ's sacrifice on the cross. This novena helps us unite our sufferings with His and grow in gratitude for His redemptive love.
          </p>
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">✝️</div>
              <div className="text-sm text-gray-600">Cross</div>
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
            About the Novena for Good Friday
          </h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Novena for Good Friday is a traditional nine-day prayer to commemorate Christ's sacrifice on the cross. Through this novena, we unite our sufferings with His and grow in gratitude for His redemptive love.
            </p>
            <p className="mb-4">
              Each day focuses on a specific aspect of Christ's Passion and death, helping us to understand the depth of His love and to respond with greater devotion and penance.
            </p>
            <p>
              Through this novena, we ask God to help us grow in piety, charity, and the ability to offer our sufferings in union with Christ's sacrifice.
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
                href={`/novenas/good-friday/${day.slug}`}
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Christ's redemptive love. Turn to Him with confidence in every need.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to God. He wants to help you with the particular difficulties you face.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His sacrifice and redemption. Gratitude opens our hearts to receive more graces.
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
                Believe in Christ's power to redeem us through His sacrifice on the cross.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in Christ's promise of eternal life through His death and resurrection.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Charity</h3>
              <p className="text-gray-700 text-sm">
                Love God and others with the same sacrificial love Christ showed on the cross.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Novena for Good Friday Devotion?
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Novena for Good Friday devotion is a way of commemorating Christ's sacrifice on the cross, uniting our sufferings with His, and growing in gratitude for His redemptive love.
          </p>
          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Good Friday Novena Devotion</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✝️</span>
                <span>Cross</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🩸</span>
                <span>Sacrifice</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🙏</span>
                <span>Prayer</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>❤️</span>
                <span>Love</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🕊️</span>
                <span>Redemption</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🌟</span>
                <span>Grace</span>
              </span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This devotion helps you to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Commemorate Christ's sacrifice on the cross</li>
              <li>• Unite your sufferings with His Passion</li>
              <li>• Grow in gratitude for His redemptive love</li>
              <li>• Practice penance and self-denial</li>
              <li>• Deepen your friendship with Christ</li>
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