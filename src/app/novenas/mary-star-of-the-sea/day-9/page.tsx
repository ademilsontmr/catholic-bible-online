import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Novena to Mary Star of the Sea - Day 9: Gratitude and Surrender',
  description: 'Pray Novena to Mary Star of the Sea - Day 9 focusing on gratitude and surrender. Join in praying for protection, guidance, and safe navigation through life\'s journey.',
  keywords: [
    'mary star of the sea novena day 9',
    'star of the sea novena day 9',
    'day 9 mary star of the sea novena',
    'gratitude and surrender mary star of the sea'
  ],
  openGraph: {
    title: 'Novena to Mary Star of the Sea - Day 9: Gratitude and Surrender',
    description: 'Pray Novena to Mary Star of the Sea - Day 9 focusing on Gratitude and Surrender.',
    url: 'https://catholicbibleonline.com/novenas/mary-star-of-the-sea/day-9',
  },
  twitter: {
    title: 'Novena to Mary Star of the Sea - Day 9: Gratitude and Surrender',
    description: 'Pray Novena to Mary Star of the Sea - Day 9 focusing on Gratitude and Surrender.',
  }
}

export default function MaryStarOfTheSeaNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Mary Star of the Sea – Day 9: Gratitude and Surrender
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray with gratitude and surrender to Mary's loving care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/mary-star-of-the-sea" className="hover:text-gray-700">Novena to Mary Star of the Sea</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude and Surrender</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray with gratitude and surrender to Mary's loving care.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Mary, Star of the Sea, we gather with hearts full of gratitude. Throughout these nine days, your guiding presence has been our constant source of comfort and strength. We thank you for your unwavering love and ceaseless intercession.</p>

              <p className="mb-4">We surrender ourselves to your loving care, just as you surrendered your life to God's divine plan. We humbly place our intentions before you, trusting in your guidance and protection.</p>

              <p className="mb-4">Help us to have faith, to follow where you lead, and to find courage in the face of life's challenges.</p>

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
                Today we focus on gratitude and surrender. This aspect of honoring Mary, Star of the Sea, helps us to navigate 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with Mary's guidance and protection throughout your life's journey. May you always remember 
            Mary, Star of the Sea, and find strength in her unwavering light and maternal care.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed Novena to Mary Star of the Sea! As you continue to honor Mary as your guiding star and navigate 
            life's journey with her protection, may your heart be filled with grace and divine guidance. May God continue to 
            bless you and provide all the strength you need to follow Mary's light safely to the shores of His eternal love.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to Mary Star of the Sea - Day 9: Gratitude and Surrender"
          text="Join me in praying Novena to Mary Star of the Sea - Day 9 focusing on gratitude and surrender."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/mary-star-of-the-sea/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Conversion of Hearts
          </Link>
          
          
          
          <Link 
            href="/novenas/mary-star-of-the-sea"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to Mary Star of the Sea" />
      
    </div>
  )
}