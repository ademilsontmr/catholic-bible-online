import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Eyesight - Day 2: Injury',
  description: 'Day 2 of the Novena for Eyesight focusing on injury. Pray for those in danger of losing their eyesight from injury and accidents.',
  keywords: [
    'novena for eyesight day 2',
    'eyesight injury prayer',
    'eyesight prayer day 2',
    'vision problems novena day 2',
    'eyesight injury blessing prayer'
  ],
  openGraph: {
    title: 'Novena for Eyesight - Day 2: Injury',
    description: "Day 2 of the Novena for Eyesight focusing on injury for God's blessing.",
    url: 'https://catholicbibleonline.com/novenas/eyesight/day-2',
  },
  twitter: {
    title: 'Novena for Eyesight - Day 2: Injury',
    description: "Day 2 of the Novena for Eyesight focusing on injury for God's blessing.",
  }
}

export default function NovenaForEyesightDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Eyesight – Day 2: Injury
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Pray for those in danger of losing their eyesight from injury and accidents.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/eyesight" className="hover:text-gray-700">Eyesight</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Injury</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we pray for those in danger of losing their eyesight from injury and accidents. We ask God to help all who are in danger of losing their eyesight from injury.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>
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
                <strong>Prayer for Injury:</strong><br/>
                The possibility of losing our eyesight can be very difficult and even devastating. Loss of eyesight from an injury can have the added difficulty of giving us no opportunity to prepare. You know the depths of suffering faced by those with eyesight-threatening injuries.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for those in danger of losing their eyesight from injury and accidents. We ask God to help all who are in danger of losing their eyesight from injury.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "The righteous person may have many troubles, but the Lord delivers him from them all." (Psalm 34:19)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                We ask You to bless, strengthen and heal all who are in danger of losing their eyesight, and we particularly ask You today to help all who are in danger of losing their eyesight from injury! Help us to offer all of our sufferings in union with You. Help us to rely on You for strength when we are most in need. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
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
              <p className="mb-4">Today we pray for those in danger of losing their eyesight from injury. Eye injuries can happen suddenly and without warning - from accidents, sports injuries, workplace incidents, or other traumatic events. These injuries can be particularly devastating because they often occur without any preparation or warning. Psalm 34:19 reminds us that the righteous may have many troubles, but the Lord delivers them from all. This promise offers hope to those facing vision loss from injury that God will help them through their suffering. Eye injuries can affect people of all ages and can have long-lasting consequences for their quality of life, independence, and emotional well-being. Let us pray that those facing vision loss from injury will find strength in God and that they will trust in His plan for their healing and recovery.</p>
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
            Help us to pray faithfully for those facing vision loss and to support them with love and compassion. 
            May this novena help us grow in understanding and empathy for those facing eyesight problems. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton
          title="Novena for Eyesight - Day 2: Injury"
          text="Join me in praying the Novena for Eyesight - Day 2 focusing on injury for God's blessing."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/eyesight/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Disease
          </Link>
          
          <Link
            href="/novenas/eyesight/day-3"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 3: Old Age →
          </Link>
        </div>
      </div>
      
    </div>
  )
}