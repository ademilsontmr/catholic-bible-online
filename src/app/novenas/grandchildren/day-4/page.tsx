import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grandchildren - Day 4: Growth in Hope',
  description: 'Pray the Novena for Grandchildren - Day 4 focusing on Growth in Hope. Join in praying the traditional novena to seek God\'s grace for grandchildren.',
  keywords: [
    'novena for grandchildren day 4',
    'grandchildren novena day 4',
    'grandchildren prayer day 4',
    'novena for grandchildren prayer growth in hope',
    'day 4 grandchildren novena',
    'growth in hope grandchildren prayer',
    'grandchildren novena growth in hope',
    'grandchildren prayer growth in hope'
  ],
  openGraph: {
    title: 'Novena for Grandchildren - Day 4: Growth in Hope',
    description: 'Pray the Novena for Grandchildren - Day 4 focusing on Growth in Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/grandchildren/day-4',
  },
  twitter: {
    title: 'Novena for Grandchildren - Day 4: Growth in Hope',
    description: 'Pray the Novena for Grandchildren - Day 4 focusing on Growth in Hope. Join in praying the traditional novena.',
  }
}

export default function GrandchildrenNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grandchildren – Day 4: Growth in Hope
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Grandchildren to seek God's grace and assistance for all our beloved grandchildren.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/grandchildren" className="hover:text-gray-700">Novena for Grandchildren</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-rose-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Growth in Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for grandchildren to grow in the virtue of hope.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">Dear Lord, we thank You and praise You for giving us the gift of grandchildren. We ask You to pour out Your grace upon them.</p>
              <p className="mb-6">You call each of us to have hope for an eternity of joy with You in heaven one day. Practicing hope in our daily lives is not always easy in the midst of the sufferings of this world. You can help our grandchildren to grow in this important virtue. </p>
              <p className="mb-6">Please bless and assist our grandchildren in every circumstance, and we particularly ask today that You help our grandchildren to grow in the virtue of hope.</p>
              <p className="mb-6">Help us to also grow in the virtue of hope. Give us the grace to help our grandchildren grow in hope at every opportunity You give us.</p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray for all grandchildren to grow in the virtue of hope. This day reminds us that hope is essential for navigating the challenges of life and maintaining joy in difficult times.</p>
              <p className="mb-4">Hope is the virtue that helps us look beyond our current circumstances and trust in God's promises. It gives us the strength to persevere through difficulties and the confidence to face the future with optimism. In our world today, many young people struggle with anxiety and despair, making the virtue of hope more important than ever.</p>
              <p className="mb-4">As grandparents, we can help our grandchildren develop hope by sharing stories of how God has worked in our lives, by encouraging them to trust in His promises, and by helping them see the good in every situation. We can also model hope by maintaining a positive attitude even in difficult times.</p>
              <p className="mb-4">When our grandchildren see us hopeful and trusting in God's plan, they learn that hope is not just wishful thinking, but a confident expectation based on God's faithfulness. This hope can sustain them through life's challenges and help them grow in resilience and joy.</p>
              <p className="mb-4">Let us ask God to fill our grandchildren with hope and to help us be instruments of that hope in their lives. May they always know that God has a beautiful plan for their future.</p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-rose-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all grandchildren to grow in growth in hope 
            and to continue striving for spiritual growth and holiness. Give us the grace to be instruments of Your love 
            in their lives and to help them grow closer to You each day. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Grandchildren - Day 4: Growth in Hope"
          text="Join me in praying the Novena for Grandchildren - Day 4 focusing on Growth in Hope."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/grandchildren/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Growth in Faith
          </Link>
          
          <Link 
            href="/novenas/grandchildren/day-5"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
          >
            Day 5: Growth in Charity →
          </Link>
          
        </div>
      </div>
    </div>
  )
}