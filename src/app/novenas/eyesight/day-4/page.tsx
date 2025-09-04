import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 4: Young People',
  description: 'Day 4 of the Novena for Eyesight focusing on young people. Pray for young people who are in danger of losing their eyesight unexpectedly.',
  keywords: [
    'novena for eyesight day 4',
    'eyesight young people prayer',
    'eyesight prayer day 4',
    'vision problems novena day 4',
    'eyesight young people blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 4: Young People',
    description: 'Day 4 of the Novena for Eyesight focusing on young people for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-4',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 4: Young People',
    description: 'Day 4 of the Novena for Eyesight focusing on young people for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 4: Young People
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for young people who are in danger of losing their eyesight unexpectedly.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Young People</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for young people who are in danger of losing their eyesight unexpectedly. We ask God to help all young people who are in danger of losing their eyesight.
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
              <p className="mb-6">
                <strong>Opening Prayer:</strong><br/>
                Dear Lord, we thank You and praise You for the many gifts You have given us, especially the gift of our sight. Please help all who are in danger of losing the precious gift of sight.
              </p>
              <p className="mb-6">
                <strong>Prayer for Young People:</strong><br/>
                The loss of eyesight or the possibility of losing eyesight can be painful and even devastating for us to bear. These sufferings can be even more acute for a young person who was expecting strong health for many years to come.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for young people who are in danger of losing their eyesight unexpectedly. We ask God to help all young people who are in danger of losing their eyesight.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."" (Jeremiah 29:11)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help all young people who are in danger of losing their eyesight! Help us to always turn to You in all of our needs. Help us to rely on You for grace throughout every trial that we face. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for young people who are in danger of losing their eyesight. When vision problems affect young people, it can be particularly devastating because they had expected to have many years of good vision ahead of them. Jeremiah 29:11 reminds us that God has plans to prosper us and give us hope and a future. This promise offers hope to young people facing vision loss that God has a plan for their lives, even if it's different from what they had expected. Young people with vision problems may face unique challenges - they may be in school, starting careers, or building relationships, and vision loss can affect all of these areas. Let us pray that young people facing vision loss will find hope in God\'s plan for their lives and that they will trust in His love and guidance.</p>
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
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Eyesight - Day 4: Young People" 
            url="/novenas/eyesight/day-4"
            excerpt="Join me in praying the Novena for Eyesight - Day 4 focusing on young people for God\'s blessing." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Old Age
          </Link>
          
          <Link
            href="/novenas/eyesight/day-5"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 5: Lack of Medical Care →
          </Link>
        </div>
      </div>
      
    </div>
  )
}