import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Christmas Novena - Day 1: Joy',
  description: 'Pray the Christmas Novena - Day 1 focusing on Joy. Join in praying the traditional Christmas Novena to prepare for the birth of Jesus Christ.',
  keywords: [
    'christmas novena day 1',
    'advent novena day 1',
    'christmas prayer joy',
    'day 1 christmas novena',
    'joy advent prayer',
    'christmas novena joy',
    'advent novena joy',
    'infant jesus prayer'
  ],
  openGraph: {
    title: 'Christmas Novena - Day 1: Joy',
    description: 'Pray the Christmas Novena - Day 1 focusing on Joy. Join in praying the traditional Christmas Novena.',
    url: 'https://catholicbibleonline.com/novenas/christmas-advent/day-1',
  },
  twitter: {
    title: 'Christmas Novena - Day 1: Joy',
    description: 'Pray the Christmas Novena - Day 1 focusing on Joy. Join in praying the traditional Christmas Novena.',
  }
}

export default function ChristmasAdventNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Christmas Novena – Day 1: Joy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Christmas Novena to prepare for the birth of our Savior.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/christmas-advent" className="hover:text-gray-700">Christmas Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Joy</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Christmas Novena, we pray for joy as we prepare for the birth of our Savior. 
            The birth of any child is a cause for joy, but how much more is the birth of Jesus, our Savior! 
            We pray in union with Mary, His mother, for a greater joy this Christmas.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Hail and blessed be the hour and moment in which the Son of God was born of the most pure Virgin Mary, at midnight, in Bethlehem, in piercing cold. In that hour, vouchsafe, O my God! to hear my prayer and grant my desires, through the merits of Our Savior Jesus Christ, and of His Blessed Mother. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Our Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Hail Mary...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Glory be to the Father...</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for the gift of joy. May the birth of Jesus fill our hearts with the true joy that comes from knowing our Savior. 
                We pray in union with Mary, His mother, for a greater joy this Christmas.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>O Divine Infant Jesus, grant us the gift of joy!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we begin our Christmas Novena by praying for joy. The birth of Jesus Christ is the greatest cause for joy 
                that the world has ever known. When the angels appeared to the shepherds, they proclaimed, 
                "I bring you good news of great joy that will be for all the people" (Luke 2:10).
              </p>
              
              <p className="mb-4">
                The incarnation of Jesus Christ - God becoming man - is the most extraordinary event in human history. 
                The Word of God, whose glory is complete, chose to come to us in perfect humility as a child in the womb. 
                This act of love and humility is unsurpassed and should bring us to our knees in prayer and worship.
              </p>
              
              <p className="mb-4">
                As we pray today, let us reflect on the joy that the birth of Jesus brings to our lives. 
                Let us pray in union with Mary, His mother, who experienced this joy firsthand. 
                Let us ask God to fill our hearts with the true joy of Christmas - the joy that comes from knowing 
                that our Savior has come into the world.
              </p>
              
              <p>
                Remember that this joy is not just for Christmas, but for every day of our lives. 
                The incarnation of Jesus Christ forever changed the world, and it should forever change our hearts as well.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
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

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Divine Infant Jesus, grant us the gift of joy as we prepare for Your birth. Help us to experience the true joy 
            that comes from knowing and loving You. May our hearts be filled with the joy that only You can give. 
            We pray in union with Your Blessed Mother, Mary. Amen.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/christmas-advent"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/christmas-advent/day-2"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 2: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 