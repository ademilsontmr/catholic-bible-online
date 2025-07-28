import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Easter Novena - Day 6: Eternal Life',
  description: 'Pray the Easter Novena - Day 6 focusing on eternal life. Join in praying the traditional novena.',
  keywords: [
    'easter novena day 6',
    'easter prayer day 6',
    'day 6 easter novena',
    'eternal life easter novena'
  ],
  openGraph: {
    title: 'Easter Novena - Day 6: Eternal Life',
    description: 'Pray the Easter Novena - Day 6 focusing on eternal life.',
    url: 'https://catholicbible-online.com/novenas/easter/day-6',
  },
  twitter: {
    title: 'Easter Novena - Day 6: Eternal Life',
    description: 'Pray the Easter Novena - Day 6 focusing on eternal life.',
  }
}

export default function EasterNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Easter Novena – Day 6: Eternal Life
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Easter Novena.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/easter" className="hover:text-gray-700">Easter Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Life</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on eternal life in our prayer today.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                Lord, as we pray today focusing on eternal life, help us to grow in our faith and draw closer to You. 
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
                Today we focus on eternal life. This aspect of our faith helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>

              <p className="mb-4">
                As we continue our Easter Novena, let us remember that each day brings us closer to God 
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
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection. Help us to carry Your love and grace into our daily lives. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Easter Novena - Day 6: Eternal Life"
          text="Join me in praying the Easter Novena - Day 6 focusing on eternal life."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/easter/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Victory Over Sin
          </Link>
          
          <Link 
            href="/novenas/easter/day-7"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 7: Peace of Christ →
          </Link>
        </div>
      </div>
    </div>
  )
}