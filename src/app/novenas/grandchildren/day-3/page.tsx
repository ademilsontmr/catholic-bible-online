import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Grandchildren - Day 3: Growth in Faith',
  description: 'Pray the Novena for Grandchildren - Day 3 focusing on Growth in Faith. Join in praying the traditional novena to seek God\'s grace for grandchildren.',
  keywords: [
    'novena for grandchildren day 3',
    'grandchildren novena day 3',
    'grandchildren prayer day 3',
    'novena for grandchildren prayer growth in faith',
    'day 3 grandchildren novena',
    'growth in faith grandchildren prayer',
    'grandchildren novena growth in faith',
    'grandchildren prayer growth in faith'
  ],
  openGraph: {
    title: 'Novena for Grandchildren - Day 3: Growth in Faith',
    description: 'Pray the Novena for Grandchildren - Day 3 focusing on Growth in Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/grandchildren/day-3',
  },
  twitter: {
    title: 'Novena for Grandchildren - Day 3: Growth in Faith',
    description: 'Pray the Novena for Grandchildren - Day 3 focusing on Growth in Faith. Join in praying the traditional novena.',
  }
}

export default function GrandchildrenNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Grandchildren – Day 3: Growth in Faith
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-rose-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Growth in Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray for grandchildren to grow in the virtue of faith.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">Dear Lord, we thank You and praise You for giving us the gift of grandchildren. We ask You to pour out Your grace upon them.</p>
              <p className="mb-6">You call each one of us to have faith in You and in all that You have revealed to us through Your Church. As we pray for our grandchildren and try to help them in every way that we can, we ask You to give them the grace they need to grow in virtue.</p>
              <p className="mb-6">Please bless and assist our grandchildren in every circumstance, and we particularly ask today that You help our grandchildren grow in the virtue of faith.</p>
              <p className="mb-6">Help us to also grow in the virtue of faith each day. Give us the grace to model the virtue of faith to our grandchildren at every opportunity You give us.</p>

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
              <p className="mb-4">Today we pray for all grandchildren to grow in the virtue of faith. This day reminds us of the importance of faith in our spiritual journey and our role in helping our grandchildren develop this essential virtue.</p>
              <p className="mb-4">Faith is the foundation of our relationship with God. It is through faith that we come to know and love Him, and it is through faith that we receive His grace and mercy. As grandparents, we have a special responsibility to help our grandchildren grow in this virtue.</p>
              <p className="mb-4">We can help our grandchildren grow in faith in many ways - by praying with them, sharing our own faith experiences, reading Bible stories together, and living our faith authentically in our daily lives. Our example is often more powerful than our words.</p>
              <p className="mb-4">When our grandchildren see us trusting in God, praying regularly, and living according to our faith, they learn that faith is not just something we talk about on Sundays, but a way of life that brings joy and peace.</p>
              <p className="mb-4">Let us ask God to help our grandchildren grow in faith and to give us the wisdom and grace to be good examples for them. May their faith grow stronger each day and lead them closer to God.</p>
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
            Dear Lord, we thank You for hearing our prayers today. Help all grandchildren to grow in growth in faith 
            and to continue striving for spiritual growth and holiness. Give us the grace to be instruments of Your love 
            in their lives and to help them grow closer to You each day. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Grandchildren - Day 3: Growth in Faith"
          text="Join me in praying the Novena for Grandchildren - Day 3 focusing on Growth in Faith."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/grandchildren/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Submission to God's Will
          </Link>
          
          <Link 
            href="/novenas/grandchildren/day-4"
            className="inline-flex items-center px-6 py-3 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition-colors"
          >
            Day 4: Growth in Hope →
          </Link>
          
        </div>
      </div>
    </div>
  )
}