import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 1: Disease',
  description: 'Day 1 of the Novena for Eyesight focusing on disease. Pray for those in danger of losing their eyesight from disease and medical conditions.',
  keywords: [
    'novena for eyesight day 1',
    'eyesight disease prayer',
    'eyesight prayer day 1',
    'vision problems novena day 1',
    'eyesight disease blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 1: Disease',
    description: 'Day 1 of the Novena for Eyesight focusing on disease for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-1',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 1: Disease',
    description: 'Day 1 of the Novena for Eyesight focusing on disease for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 1: Disease
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for those in danger of losing their eyesight from disease and medical conditions.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Disease</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Eyesight, we pray for those in danger of losing their eyesight from disease. 
            We ask God to help all who are in danger of losing their eyesight from disease.
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
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the many gifts You have given us, especially the gift of our sight. 
                Please help all who are in danger of losing the precious gift of sight.
              </p>
              <p className="mb-6">
                <strong>Prayer for Disease:</strong><br/>
                We depend on our sight for many things, and the prospect of losing our sight can be a very difficult one. 
                There are many causes of sight loss and sight deterioration, and disease can rob many people of their ability to see.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those in danger of losing their eyesight from disease and medical conditions. 
                We ask God to help all who are in danger of losing their eyesight from disease.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "The Lord gives sight to the blind, the Lord lifts up those who are bowed down, the Lord loves the righteous." (Psalm 146:8)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help all who are in danger of losing their eyesight from disease! 
                Help us to turn to You in all of our needs each day. Help us to grow in love for You even in the midst of sufferings. 
                And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
                Today we pray for those in danger of losing their eyesight from disease. Diseases that affect vision 
                can be particularly frightening because they often progress slowly, giving people time to fear what 
                might happen while still hoping for a cure.
              </p>
              <p className="mb-4">
                Psalm 146:8 reminds us that the Lord gives sight to the blind. This promise offers hope to those 
                facing vision loss from disease. God has the power to heal, and He often works through medical 
                professionals and treatments to restore or preserve vision.
              </p>
              <p className="mb-4">
                Diseases like glaucoma, macular degeneration, diabetic retinopathy, and cataracts can rob people 
                of their sight gradually or suddenly. The fear of losing vision can be overwhelming, affecting 
                not just the person with the disease but their entire family.
              </p>
              <p className="mb-4">
                As we begin this novena, let us remember that God sees the suffering of those facing vision loss 
                and wants to help them. Our prayers can help these individuals find strength, hope, and peace 
                in the midst of their medical challenges.
              </p>
              <p>
                Let us pray that those facing vision loss from disease will find comfort in God's love and that 
                they will trust in His healing power and His plan for their vision.
              </p>
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
                Maintain hope in God's healing power and His plan for your vision. 
                Trust that He can work miracles in your life.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing for healing. Vision problems often require 
                time and medical treatment to improve.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's will, whether that means physical healing, 
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
            Help us to pray faithfully for those facing vision loss from disease and to support them with love and compassion. 
            May this novena help us grow in understanding and empathy for those facing eyesight problems. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Eyesight - Day 1: Disease"
          text="Join me in praying the Novena for Eyesight - Day 1 focusing on disease for God's blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          <Link
            href="/novenas/eyesight/day-2"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 2: Injury →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Eyesight" />
    </div>
  )
} 