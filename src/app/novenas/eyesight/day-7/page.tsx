import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 7: Gratitude',
  description: 'Day 7 of the Novena for Eyesight focusing on gratitude. Pray for us to grow in gratitude for the gift of our eyesight.',
  keywords: [
    'novena for eyesight day 7',
    'eyesight gratitude prayer',
    'eyesight prayer day 7',
    'vision problems novena day 7',
    'eyesight gratitude blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 7: Gratitude',
    description: 'Day 7 of the Novena for Eyesight focusing on gratitude for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-7',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 7: Gratitude',
    description: 'Day 7 of the Novena for Eyesight focusing on gratitude for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 7: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for us to grow in gratitude for the gift of our eyesight.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for us to grow in gratitude for the gift of our eyesight. We ask God to help us to grow in gratitude for the gift of our eyesight.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the many gifts You have given us, especially the gift of our sight. Please help all who are in danger of losing the precious gift of sight.
              </p>
              <p className="mb-6">
                <strong>Prayer for Gratitude:</strong><br/>
                You have blessed us with the ability to see the beauty and wonders You have created in this world. We often lose sight of the great blessing of eyesight, but we should be full of gratitude to You for this great gift.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for us to grow in gratitude for the gift of our eyesight. We ask God to help us to grow in gratitude for the gift of our eyesight.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Give thanks to the Lord, for he is good. His love endures forever." (Psalm 136:1)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help us to grow in gratitude for the gift of our eyesight! Help us to always be grateful to You for all the blessings You have given us. Help us to grow in every virtue necessary for holiness. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for us to grow in gratitude for the gift of our eyesight. We often take our vision for granted until we face the possibility of losing it. Psalm 136:1 calls us to give thanks to the Lord, for He is good and His love endures forever. This reminder encourages us to be grateful for all of God\'s gifts, including our eyesight. When we practice gratitude for our vision, we become more aware of the beauty around us - the colors of a sunset, the smile of a loved one, the words in a book, the faces of our children. Gratitude also helps us to be more compassionate toward those who are losing or have lost their vision. Let us pray that we will grow in gratitude for our eyesight and that this gratitude will lead us to use our vision to serve God and others.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God daily for the gift of your eyesight. Gratitude opens our hearts 
                to receive more blessings and healing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God\'s healing power and His plan for your vision. 
                Trust that He can work miracles in your life.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God\'s timing for healing. Vision problems often require 
                time and medical treatment to improve.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God\'s will, whether that means physical healing, 
                acceptance of vision loss, or finding new ways to see.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for the gift of sight and for Your presence in our vision difficulties. 
            Help us to pray faithfully for those facing vision loss and to support them with love and compassion. 
            May this novena help us grow in understanding and empathy for those facing eyesight problems. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Eyesight - Day 7: Gratitude"
          text="Join me in praying the Novena for Eyesight - Day 7 focusing on gratitude for God\'s blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Medical Professionals
          </Link>
          
          <Link
            href="/novenas/eyesight/day-8"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 8: Submission to God\'s Will →
          </Link>
        </div>
      </div>
      
    </div>
  )
}