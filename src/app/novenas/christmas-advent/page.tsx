import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christmas Novena (Advent Novena) - Complete 9-Day Prayer Guide',
  description: 'Complete Christmas Novena with daily prayers, reflections, and guidance. Prepare your heart for the birth of Jesus Christ during Advent.',
  keywords: [
    'christmas novena',
    'advent novena',
    'christmas prayer',
    'advent prayer',
    'birth of jesus',
    'christmas preparation',
    'advent preparation',
    'christmas novena prayer',
    'advent novena prayer',
    'christmas nine day prayer',
    'advent nine day prayer',
    'christmas devotion',
    'advent devotion',
    'st andrew christmas novena'
  ],
  openGraph: {
    title: 'Christmas Novena (Advent Novena) - Complete 9-Day Prayer Guide',
    description: 'Complete Christmas Novena with daily prayers, reflections, and guidance for spiritual preparation.',
    url: 'https://catholicbibleonline.com/novenas/christmas-advent',
  },
  twitter: {
    title: 'Christmas Novena (Advent Novena) - Complete 9-Day Prayer Guide',
    description: 'Complete Christmas Novena with daily prayers, reflections, and guidance for spiritual preparation.',
  }
}

const novenaDays = [
  {
    day: 1,
    theme: 'Joy',
    description: 'Pray for joy as we prepare for the birth of our Savior, the greatest cause for joy the world has ever known.',
    slug: 'day-1'
  },
  {
    day: 2,
    theme: 'Hope',
    description: 'Pray for hope in God\'s promises and His plan for salvation through the birth of Jesus.',
    slug: 'day-2'
  },
  {
    day: 3,
    theme: 'Love',
    description: 'Pray for love to grow in our hearts and to love God and neighbor more perfectly.',
    slug: 'day-3'
  },
  {
    day: 4,
    theme: 'Humility',
    description: 'Pray for humility, following the example of the humble birth of Jesus in Bethlehem.',
    slug: 'day-4'
  },
  {
    day: 5,
    theme: 'Purity',
    description: 'Pray for purity of heart and mind, like the pure Virgin Mary, Mother of God.',
    slug: 'day-5'
  },
  {
    day: 6,
    theme: 'Obedience',
    description: 'Pray for obedience to God\'s will, as Jesus was obedient to the Father.',
    slug: 'day-6'
  },
  {
    day: 7,
    theme: 'Poverty',
    description: 'Pray for detachment from material things, following Jesus\' example of poverty.',
    slug: 'day-7'
  },
  {
    day: 8,
    theme: 'Peace',
    description: 'Pray for peace in your heart and in the world, as the angels proclaimed at Jesus\' birth.',
    slug: 'day-8'
  },
  {
    day: 9,
    theme: 'Gratitude',
    description: 'Pray with gratitude for the gift of Jesus Christ and the joy of Christmas.',
    slug: 'day-9'
  }
]

export default function ChristmasAdventNovenaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Christmas Novena (Advent Novena)
          </h1>
          <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
            A beautiful nine-day prayer to prepare your heart for the birth of Jesus Christ. 
            This traditional novena helps us reflect on the mystery of the Incarnation and grow in spiritual virtues.
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">9</div>
              <div className="text-sm text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">🎄</div>
              <div className="text-sm text-gray-600">Christmas</div>
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
            About the Christmas Novena
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Christmas Novena, also known as the St. Andrew Christmas Novena, is a traditional nine-day prayer that helps us 
              prepare spiritually for the birth of Jesus Christ. This novena is typically prayed from December 16th to December 24th, 
              leading up to Christmas Day.
            </p>
            
            <p className="mb-4">
              This novena focuses on the theological virtues (faith, hope, and love) and other important virtues 
              that help us prepare our hearts to receive the newborn King. Each day we pray for different aspects 
              of our spiritual preparation: joy, hope, love, humility, purity, obedience, poverty, peace, and gratitude.
            </p>
            
            <p>
              Whether you're praying this novena during the traditional Advent season or at any other time of year, 
              it's a powerful way to deepen your understanding of the mystery of the Incarnation and grow in holiness.
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
                href={`/novenas/christmas-advent/${day.slug}`}
                className="block bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">Day {day.day}</div>
                  <h3 className="text-lg font-semibold text-black mb-2">{day.theme}</h3>
                  <p className="text-sm text-gray-600">{day.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            How to Make an Excellent Novena
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Joy</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with joy in your heart. Remember that you are preparing for the birth of your Savior, 
                which is the greatest cause for joy.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">State Your Intentions</h3>
              <p className="text-gray-700 text-sm">
                Take time to state your specific intentions during the prayer. 
                Bring your needs, hopes, and desires to the infant Jesus.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray in Union with Mary</h3>
              <p className="text-gray-700 text-sm">
                Remember that you are praying in union with Mary, the mother of Jesus. 
                Ask for her intercession and guidance during this novena.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Reflect on the Incarnation</h3>
              <p className="text-gray-700 text-sm">
                Take time to reflect on the mystery of the incarnation - God becoming man. 
                This should fill your heart with awe and wonder.
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
                Believe in the mystery of the Incarnation and trust in God's plan for salvation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">💙</div>
              <h3 className="text-lg font-semibold text-black mb-2">Hope</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's promises and His plan for our eternal salvation through Jesus Christ.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-lg font-semibold text-black mb-2">Love</h3>
              <p className="text-gray-700 text-sm">
                Love God with all our hearts and love our neighbor as ourselves, following Jesus' example.
              </p>
            </div>
          </div>
        </section>

        {/* What is the Devotion */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">
            What is the Christmas Novena?
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            The Christmas Novena is a spiritual preparation for the celebration of the birth of Jesus Christ. 
            It helps us to reflect on the mystery of the Incarnation and prepare our hearts to receive the newborn King.
          </p>

          {/* Devotion Elements */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-black mb-4 text-center">Elements of Christmas Preparation</h3>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>🎄</span>
                <span>Advent</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>👶</span>
                <span>Incarnation</span>
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
                <span>🌟</span>
                <span>Hope</span>
              </span>
              <span className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-gray-200">
                <span>✝️</span>
                <span>Faith</span>
              </span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-700 mb-4">
              This novena helps us to:
            </p>
            <ul className="text-gray-700 space-y-2 text-left max-w-2xl mx-auto">
              <li>• Prepare our hearts spiritually for Christmas</li>
              <li>• Reflect on the mystery of the Incarnation</li>
              <li>• Grow in the theological virtues</li>
              <li>• Deepen our relationship with Jesus Christ</li>
              <li>• Experience the true joy of Christmas</li>
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