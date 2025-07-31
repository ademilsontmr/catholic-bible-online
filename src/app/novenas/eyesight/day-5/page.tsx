import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 5: Lack of Medical Care',
  description: 'Day 5 of the Novena for Eyesight focusing on lack of medical care. Pray for those unable to obtain the medical help they need to save their vision.',
  keywords: [
    'novena for eyesight day 5',
    'eyesight lack of medical care prayer',
    'eyesight prayer day 5',
    'vision problems novena day 5',
    'eyesight lack of medical care blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 5: Lack of Medical Care',
    description: 'Day 5 of the Novena for Eyesight focusing on lack of medical care for God\'s blessing.',
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-5',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 5: Lack of Medical Care',
    description: 'Day 5 of the Novena for Eyesight focusing on lack of medical care for God\'s blessing.',
  }
}

export default function NovenaForEyesightDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 5: Lack of Medical Care
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for those unable to obtain the medical help they need to save their vision.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Lack of Medical Care</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for those unable to obtain the medical help they need to save their vision. We ask God to help all people who are unable to obtain the medical help they need to save their vision.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>
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
                <strong>Prayer for Lack of Medical Care:</strong><br/>
                You have blessed us with many gifted medical professionals who are able to do a lot of good for people losing their eyesight. But not everyone in danger of losing their eyesight is able to obtain the medical help they need to save their vision.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those unable to obtain the medical help they need to save their vision. We ask God to help all people who are unable to obtain the medical help they need to save their vision.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "The King will reply, 'Truly I tell you, whatever you did for one of the least of these brothers and sisters of mine, you did for me.'" (Matthew 25:40)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help all people who are unable to obtain the medical help they need to save their vision! Help us to rely on You for help in even our most difficult sufferings. Help us to offer all of our suffingers in union with You. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for those unable to obtain the medical help they need to save their vision. Many people around the world lack access to quality eye care due to financial constraints, geographic barriers, or lack of medical infrastructure. Matthew 25:40 reminds us that when we help those in need, we are helping Christ Himself. This teaching calls us to be aware of and respond to the needs of those who cannot access medical care for their vision problems. People without access to eye care may suffer unnecessarily from conditions that could be treated or prevented with proper medical attention. Let us pray that those without access to medical care will find the help they need and that we will be moved to support efforts to provide eye care to those in need.</p>
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
          title="Novena for Eyesight - Day 5: Lack of Medical Care"
          text="Join me in praying the Novena for Eyesight - Day 5 focusing on lack of medical care for God\'s blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Young People
          </Link>
          
          <Link
            href="/novenas/eyesight/day-6"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 6: Medical Professionals →
          </Link>
        </div>
      </div>
      
    </div>
  )
}