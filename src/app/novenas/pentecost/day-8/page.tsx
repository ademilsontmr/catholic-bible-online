import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pentecost Novena - Day 8: Fruits of the Spirit',
  description: 'Pray the Pentecost Novena - Day 8 focusing on fruits of the spirit. Join in praying the traditional novena.',
  keywords: [
    'pentecost novena day 8',
    'pentecost prayer day 8',
    'day 8 pentecost novena',
    'fruits of the spirit pentecost novena'
  ],
  openGraph: {
    title: 'Pentecost Novena - Day 8: Fruits of the Spirit',
    description: 'Pray the Pentecost Novena - Day 8 focusing on fruits of the spirit.',
    url: 'https://catholicbible-online.com/novenas/pentecost/day-8',
  },
  twitter: {
    title: 'Pentecost Novena - Day 8: Fruits of the Spirit',
    description: 'Pray the Pentecost Novena - Day 8 focusing on fruits of the spirit.',
  }
}

export default function PentecostNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Pentecost Novena – Day 8: Fruits of the Spirit
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Pentecost Novena.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/pentecost" className="hover:text-gray-700">Pentecost Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Fruits of the Spirit</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on fruits of the spirit in our prayer today.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                Lord, as we pray today focusing on fruits of the spirit, help us to grow in our faith and draw closer to You. 
                May this day of prayer bring us the graces we need and strengthen our relationship with You.
              </p>

              <p className="mb-6">
                We ask for Your guidance and blessing as we continue this novena. 
                Help us to be open to Your will and to trust in Your love and mercy.
              </p>

              <p className="mb-6">
                Amen.
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
                Today we focus on fruits of the spirit. This aspect of our faith helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>

              <p className="mb-4">
                As we continue our Pentecost Novena, let us remember that each day brings us closer to God 
                and helps us to deepen our relationship with Him.
              </p>

              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love in the world.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Approach each day with faith and trust in God's love and mercy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith in God's promises.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God in prayer.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His blessings and for hearing your prayers.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection. Help us to carry Your love and grace into our daily lives. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Pentecost Novena - Day 8: Fruits of the Spirit"
          text="Join me in praying the Pentecost Novena - Day 8 focusing on fruits of the spirit."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pentecost/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Fear of the Lord
          </Link>
          
          <Link 
            href="/novenas/pentecost/day-9"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 9: Transformation →
          </Link>
        </div>
      </div>
    </div>
  )
}