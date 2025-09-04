import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Children - Day 7: Child Friendship',
  description: 'Pray the Novena for Children - Day 7 focusing on child friendship.',
  keywords: ['children novena day 7', 'children prayer day 7'],
  openGraph: {
    title: 'Novena for Children - Day 7: Child Friendship',
    description: 'Pray the Novena for Children - Day 7 focusing on child friendship.',
    url: 'https://catholic-bible-online.com/novenas/children/day-7',
  },
  twitter: {
    title: 'Novena for Children - Day 7: Child Friendship',
    description: 'Pray the Novena for Children - Day 7 focusing on child friendship.',
  }
}

export default function NovenaForChildrenDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Children – Day 7: Child Friendship
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Children to seek God's protection and blessings for children.
          </p>
          
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/children" className="hover:text-gray-700">Novena for Children</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Child Friendship</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on child friendship in our children prayer today.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-4">
                Lord, as we pray today focusing on child friendship, help us to grow in our faith and draw closer to You. 
                May this day of prayer bring us the graces we need and strengthen our commitment to children.
              </p>
              <p className="mb-4">
                We ask for Your guidance and blessing as we continue this novena. 
                Help us to be open to Your will and to trust in Your love and mercy for all children.
              </p>
              <p className="mb-6">Amen.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on child friendship. This aspect of children's well-being helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>
              <p className="mb-4">
                As we continue our Novena for Children, let us remember that each day brings us closer to God 
                and helps us to deepen our commitment to children.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love for children.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with deep love for children and concern for their well-being.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific children and their particular needs to God.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves children even more than we do and will answer our prayers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of children and for the blessings they bring to our lives.
              </p>
            </div>
          </div>
        </section>

        
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for children. Help us to carry Your love and care 
            for children into our daily lives. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Children - Day 7: Child Friendship" 
            url="/novenas/children/day-7"
            excerpt="Join me in praying the Novena for Children - Day 7 focusing on child friendship." 
          />
        </div>

        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/children/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Child Education
          </Link>
          
          <Link 
            href="/novenas/children/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Child Future →
          </Link>
          
        </div>
      </div>
    </div>
  )
}