import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena to Mary Star of the Sea - Day 4: Healing of the Sick',
  description: 'Pray Novena to Mary Star of the Sea - Day 4 focusing on healing of the sick. Join in praying for protection, guidance, and safe navigation through life\'s journey.',
  keywords: [
    'mary star of the sea novena day 4',
    'star of the sea novena day 4',
    'day 4 mary star of the sea novena',
    'healing of the sick mary star of the sea'
  ],
  openGraph: {
    title: 'Novena to Mary Star of the Sea - Day 4: Healing of the Sick',
    description: 'Pray Novena to Mary Star of the Sea - Day 4 focusing on Healing of the Sick.',
    url: 'https://catholicbibleonline.com/novenas/mary-star-of-the-sea/day-4',
  },
  twitter: {
    title: 'Novena to Mary Star of the Sea - Day 4: Healing of the Sick',
    description: 'Pray Novena to Mary Star of the Sea - Day 4 focusing on Healing of the Sick.',
  }
}

export default function MaryStarOfTheSeaNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Mary Star of the Sea – Day 4: Healing of the Sick
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying Novena to Mary Star of the Sea to honor our guiding star and seek protection on life's journey.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mary-star-of-the-sea" className="hover:text-gray-700">Novena to Mary Star of the Sea</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Healing of the Sick</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day, we pray for healing and comfort for those who are suffering.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Mary, Star of the Sea, we humbly place before you the suffering and afflicted. We recognize that illness and infirmity can weigh heavily on the bodies and spirits of your children. Just as you held the Divine Physician, Jesus, in your arms, we ask you to intercede for the healing of those who are sick.</p>

              <p className="mb-4">May your maternal touch bring comfort and relief to those in pain, and may your prayers open the door to physical and spiritual recovery.</p>

              <p className="mb-4">We entrust to you, O Mary, those who are suffering, praying that your maternal care may lead them toward wholeness and well-being.</p>

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
                Today we focus on healing of the sick. This aspect of honoring Mary, Star of the Sea, helps us to navigate 
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
          title="Novena to Mary Star of the Sea - Day 4: Healing of the Sick"
          text="Join me in praying Novena to Mary Star of the Sea - Day 4 focusing on healing of the sick."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/mary-star-of-the-sea/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Guidance and Wisdom
          </Link>
          
          
          
          <Link 
            href="/novenas/mary-star-of-the-sea/day-5"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 5: Protection of Families →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}