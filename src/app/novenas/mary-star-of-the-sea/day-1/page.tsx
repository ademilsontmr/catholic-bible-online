import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena to Mary Star of the Sea - Day 1: Protection of Travelers',
  description: 'Pray Novena to Mary Star of the Sea - Day 1 focusing on protection of travelers. Join in praying for protection, guidance, and safe navigation through life\'s journey.',
  keywords: [
    'mary star of the sea novena day 1',
    'star of the sea novena day 1',
    'day 1 mary star of the sea novena',
    'protection of travelers mary star of the sea'
  ],
  openGraph: {
    title: 'Novena to Mary Star of the Sea - Day 1: Protection of Travelers',
    description: 'Pray Novena to Mary Star of the Sea - Day 1 focusing on Protection of Travelers.',
    url: 'https://catholicbibleonline.com/novenas/mary-star-of-the-sea/day-1',
  },
  twitter: {
    title: 'Novena to Mary Star of the Sea - Day 1: Protection of Travelers',
    description: 'Pray Novena to Mary Star of the Sea - Day 1 focusing on Protection of Travelers.',
  }
}

export default function MaryStarOfTheSeaNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Mary Star of the Sea – Day 1: Protection of Travelers
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying Novena to Mary Star of the Sea to honor our guiding star and seek protection on life's journey.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mary-star-of-the-sea" className="hover:text-gray-700">Novena to Mary Star of the Sea</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Protection of Travelers</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of Novena to Mary Star of the Sea, we pray for protection of all travelers on physical and spiritual journeys.
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

              <p className="mb-4">Dear Mary, Star of the Sea, we humbly ask for your intercession for the protection of all travelers, both on physical journeys and on the journey of life. We recognize the perils and uncertainties that surround us as we venture ahead, and we ask for your guidance and watchful care.</p>

              <p className="mb-4">Like the North Star, you shine brightly in the heavens, offering us your unwavering light. Please, loving Mother, guide our steps, watch over us in our travels, and safeguard us from all harm and danger.</p>

              <p className="mb-4">In your maternal embrace, we place our trust and our hopes, confident that you will lead us safely to the shores of God's eternal love.</p>

              <p className="mb-6">
                <strong>Mary, Star of the Sea, please pray for us and for our intentions.</strong>
              </p>

              <p className="mb-6">
                <strong>(Mention your intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we focus on protection of travelers. This aspect of honoring Mary, Star of the Sea, helps us to navigate 
                life's journey with confidence, knowing that Mary's light never fails to guide us safely through the storms.
              </p>
              <p className="mb-4">
                As we continue our Novena to Mary Star of the Sea, let us remember that Mary serves as our guiding star, 
                leading us through the turbulent waters of life to the safe harbor of God's love.
              </p>
              <p>
                Let us ask Mary, Star of the Sea, to help us be instruments of her light and grace in guiding others 
                through their own journeys, imitating her perfect example of maternal care and protection.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in Mary's guidance and protection like sailors trust the North Star.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for Mary's constant intercession and maternal care.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Surrendered</h3>
              <p className="text-gray-700 text-sm">
                Surrender your journey to Mary's loving guidance and protection.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in Mary's ability to guide you safely through life's storms.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary, Star of the Sea, our guiding light and protector, we thank You for this day of prayer and reflection. 
            Help us to carry Your light and grace into our journey through life and to trust completely in Your maternal care. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to Mary Star of the Sea - Day 1: Protection of Travelers"
          text="Join me in praying Novena to Mary Star of the Sea - Day 1 focusing on protection of travelers."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/mary-star-of-the-sea"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/mary-star-of-the-sea/day-2"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 2: Consolation in Sorrow →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}