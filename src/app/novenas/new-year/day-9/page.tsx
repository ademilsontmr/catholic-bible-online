import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'New Year Novena - Day 9: Commitment to Holiness',
  description: 'Pray the New Year Novena - Day 9 focusing on commitment to holiness. Join in praying for blessings and a holy new year.',
  keywords: [
    'new year novena day 9',
    'new year prayer day 9',
    'day 9 new year novena',
    'commitment to holiness new year blessing'
  ],
  openGraph: {
    title: 'New Year Novena - Day 9: Commitment to Holiness',
    description: 'Pray the New Year Novena - Day 9 focusing on Commitment to Holiness.',
    url: 'https://catholicbibleonline.com/novenas/new-year/day-9',
  },
  twitter: {
    title: 'New Year Novena - Day 9: Commitment to Holiness',
    description: 'Pray the New Year Novena - Day 9 focusing on Commitment to Holiness.',
  }
}

export default function NewYearNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            New Year Novena – Day 9: Commitment to Holiness
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for renewal of commitment to living saintly lives in the new year.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/new-year" className="hover:text-gray-700">New Year Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Commitment to Holiness</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for renewal of commitment to living saintly lives in the new year.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Dear Jesus, we thank You and praise You for the many ways You have blessed our lives. We come before You today to ask for a blessed new year.</p>

              <p className="mb-4">You want each one of us to serve You faithfully and to commit ourselves to living holy lives. Despite our good intentions, we sometimes waver in our commitment to holiness and to serving You faithfully. You can help us to strengthen our commitment to holiness this year.</p>

              <p className="mb-4">Please pour out Your grace on our lives during this new year, and we particularly ask today that You help us and all people to renew our commitment to living saintly lives during this new year.</p>

              <p className="mb-4">Help us to grow in all the virtues we need for holiness. Give us the grace to love You above all else in our lives.</p>

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
                Today we focus on commitment to holiness. This aspect of beginning a new year helps us to grow in faith 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with grace and help you live a holy and blessed new year. May you always remember 
            His loving providence and find strength in His care throughout your journey in the new year.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the New Year Novena! As you begin your new year with God's blessings, 
            may your heart be filled with grace and divine guidance. May God continue to 
            bless you and provide all the strength you need to live a holy and blessed life throughout the year ahead.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="New Year Novena - Day 9: Commitment to Holiness"
          text="Join me in praying the New Year Novena - Day 9 focusing on commitment to holiness."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/new-year/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Deeper Friendship
          </Link>
          
          
          
          <Link 
            href="/novenas/new-year"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="New Year Novena" />
      
    </div>
  )
}