import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novenas For Marriage - Day 2: Marriage Love',
  description: 'Pray the Novenas For Marriage - Day 2 focusing on marriage love.',
  keywords: ['marriage novena day 2', 'marriage prayer day 2'],
  openGraph: {
    title: 'Novenas For Marriage - Day 2: Marriage Love',
    description: 'Pray the Novenas For Marriage - Day 2 focusing on marriage love.',
    url: 'https://catholic-bible-online.com/novenas/marriage/day-2',
  },
  twitter: {
    title: 'Novenas For Marriage - Day 2: Marriage Love',
    description: 'Pray the Novenas For Marriage - Day 2 focusing on marriage love.',
  }
}

export default function NovenasForMarriageDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novenas For Marriage – Day 2: Marriage Love
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novenas For Marriage to seek God's blessings and unity for couples.
          </p>
          
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/marriage" className="hover:text-gray-700">Novenas For Marriage</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Marriage Love</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on marriage love in our marriage prayer today.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-4">
                Lord, as we pray today focusing on marriage love, help us to grow in our faith and draw closer to You. 
                May this day of prayer bring us the graces we need and strengthen our commitment to marriage.
              </p>
              <p className="mb-4">
                We ask for Your guidance and blessing as we continue this novena. 
                Help us to be open to Your will and to trust in Your love and mercy for all marriages.
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
                Today we focus on marriage love. This aspect of marriage helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>
              <p className="mb-4">
                As we continue our Novenas For Marriage, let us remember that each day brings us closer to God 
                and helps us to deepen our commitment to marriage.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love for marriage.
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
                Pray this novena with deep love for marriage and concern for the sacred bond between spouses.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific marriages and their particular needs to God.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves marriage even more than we do and will answer our prayers.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of marriage and for the blessings it brings to our lives.
              </p>
            </div>
          </div>
        </section>

        
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for marriage. Help us to carry Your love and care 
            for marriage into our daily lives. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novenas For Marriage - Day 2: Marriage Love" 
            url="/novenas/marriage/day-2"
            excerpt="Join me in praying the Novenas For Marriage - Day 2 focusing on marriage love." 
          />
        </div>

        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/marriage/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Marriage Unity
          </Link>
          
          <Link 
            href="/novenas/marriage/day-3"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 3: Marriage Communication →
          </Link>
          
        </div>
      </div>
    </div>
  )
}