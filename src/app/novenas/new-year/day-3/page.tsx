import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'New Year Novena - Day 3: Blessing of Happiness',
  description: 'Pray the New Year Novena - Day 3 focusing on blessing of happiness. Join in praying for blessings and a holy new year.',
  keywords: [
    'new year novena day 3',
    'new year prayer day 3',
    'day 3 new year novena',
    'blessing of happiness new year blessing'
  ],
  openGraph: {
    title: 'New Year Novena - Day 3: Blessing of Happiness',
    description: 'Pray the New Year Novena - Day 3 focusing on Blessing of Happiness.',
    url: 'https://catholicbibleonline.com/novenas/new-year/day-3',
  },
  twitter: {
    title: 'New Year Novena - Day 3: Blessing of Happiness',
    description: 'Pray the New Year Novena - Day 3 focusing on Blessing of Happiness.',
  }
}

export default function NewYearNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            New Year Novena – Day 3: Blessing of Happiness
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying the New Year Novena to seek blessings and grace for a holy new year.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/new-year" className="hover:text-gray-700">New Year Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Blessing of Happiness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we pray for the blessing of happiness in the new year.
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

              <p className="mb-4">Dear Jesus, we thank You and praise You for the many ways You have blessed our lives. We come before You today to ask for a blessed new year.</p>

              <p className="mb-4">Throughout our lives in this fallen world, we face many struggles and difficulties at times. We know that You only allow such suffering for the good of our souls and the souls of others. And we know that You can bring happiness to our lives on earth if it is Your will.</p>

              <p className="mb-4">Please pour out Your grace on our lives during this new year, and we particularly ask today that You give us and all people the blessing of happiness in our lives during the new year.</p>

              <p className="mb-4">Help us to always make our relationship with You our top priority in life. Give us the grace to grow closer to You each day of our lives.</p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
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
                Today we focus on blessing of happiness. This aspect of beginning a new year helps us to grow in faith 
                and to become more like Christ in our daily lives as we seek God's blessings and grace.
              </p>
              <p className="mb-4">
                As we continue our New Year Novena, let us remember that we depend on God for all things in our lives, 
                and His loving providence keeps our lives in existence. He knows what is best for us even better than we do ourselves.
              </p>
              <p>
                Let us ask Jesus to help us be instruments of His love and grace in our daily lives throughout the new year.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's loving providence and His power to bless your new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's knowledge of what is best for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to God's will and His plan for your new year.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Committed</h3>
              <p className="text-gray-700 text-sm">
                Commit to growing in holiness and serving God faithfully.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Jesus, we thank You for this day of prayer and reflection for a blessed new year. Help us to carry 
            Your grace and love into our daily lives and to trust completely in Your loving providence. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="New Year Novena - Day 3: Blessing of Happiness" 
            url="/novenas/new-year/day-3"
            excerpt="Join me in praying the New Year Novena - Day 3 focusing on blessing of happiness." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/new-year/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Material Assistance
          </Link>
          
          
          
          <Link 
            href="/novenas/new-year/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Unknown Assistance →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}