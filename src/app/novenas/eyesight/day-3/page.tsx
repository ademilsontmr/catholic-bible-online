import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 3: Old Age',
  description: 'Day 3 of the Novena for Eyesight focusing on old age. Pray for those in danger of losing their eyesight due to aging and age-related conditions.',
  keywords: [
    'novena for eyesight day 3',
    'eyesight old age prayer',
    'eyesight prayer day 3',
    'vision problems novena day 3',
    'eyesight old age blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 3: Old Age',
    description: 'Day 3 of the Novena for Eyesight focusing on old age for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-3',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 3: Old Age',
    description: 'Day 3 of the Novena for Eyesight focusing on old age for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 3: Old Age
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for those in danger of losing their eyesight due to aging and age-related conditions.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Old Age</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for those in danger of losing their eyesight due to aging and age-related conditions. We ask God to help all who are in danger of losing their eyesight from old age.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>
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
                <strong>Prayer for Old Age:</strong><br/>
                The ability to see is essential for many things that we must do and that we enjoy in our lives each day. The prospect of slowly losing eyesight with age must be difficult and burdensome.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those in danger of losing their eyesight due to aging and age-related conditions. We ask God to help all who are in danger of losing their eyesight from old age.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." (Isaiah 46:4)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help all who are in danger of losing their eyesight from old age! Help us to grow in holiness even in the midst of suffering and trials. Help us to grow in intimacy with You each day of our lives. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for those in danger of losing their eyesight due to aging. Age-related vision problems like cataracts, glaucoma, and macular degeneration can develop slowly over time, gradually affecting a person's ability to see clearly. Isaiah 46:4 reminds us that God will sustain us even in our old age and gray hairs. This promise offers comfort to those facing vision loss as they age that God will carry them and sustain them through their difficulties. Age-related vision loss can be particularly challenging because it often affects people who are already dealing with other health issues and may be less able to adapt to vision changes. Let us pray that those facing age-related vision loss will find comfort in God\'s promise to sustain them and that they will trust in His plan for their golden years.</p>
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
          title="Novena for Eyesight - Day 3: Old Age"
          text="Join me in praying the Novena for Eyesight - Day 3 focusing on old age for God\'s blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Injury
          </Link>
          
          <Link
            href="/novenas/eyesight/day-4"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 4: Young People →
          </Link>
        </div>
      </div>
      
    </div>
  )
}