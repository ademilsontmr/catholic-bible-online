import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Business Success - Day 1: Wisdom',
  description: 'Pray the Novena for Business Success - Day 1 focusing on Wisdom. Join in praying the traditional novena to seek God\'s grace for business success.',
  keywords: [
    'novena for business success day 1',
    'business success novena day 1',
    'business success prayer day 1',
    'novena for business success prayer wisdom',
    'day 1 business success novena',
    'wisdom business success prayer',
    'business success novena wisdom',
    'business success prayer wisdom'
  ],
  openGraph: {
    title: 'Novena for Business Success - Day 1: Wisdom',
    description: 'Pray the Novena for Business Success - Day 1 focusing on Wisdom. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/business-success/day-1',
  },
  twitter: {
    title: 'Novena for Business Success - Day 1: Wisdom',
    description: 'Pray the Novena for Business Success - Day 1 focusing on Wisdom. Join in praying the traditional novena.',
  }
}

export default function BusinessSuccessNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Business Success – Day 1: Wisdom
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Business Success to seek God's grace and assistance to find success in business endeavors.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/business-success" className="hover:text-gray-700">Novena for Business Success</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Wisdom</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Business Success, we pray for the wisdom needed for success in business. 
            We ask God to grant us the insight and understanding to make wise decisions in our business endeavors.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for the many ways You help us in our lives. We ask You today to bring success to all our efforts in business.
              </p>

              <p className="mb-6">
                Working on business endeavors can be very rewarding in many ways. But our business endeavors can also be difficult at times. In order for us to be successful in running a business or in changing an aspect of our business, we need wisdom from You.
              </p>

              <p className="mb-6">
                Please help us to find success in business, and we particularly ask today that You grant us the wisdom we need for success in business.
              </p>

              <p className="mb-6">
                Help us to always rely on You for all that we need in our lives. Give us the grace to do all things out of love for You each day.
              </p>

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
              <p className="mb-4">
                Today we pray for the wisdom needed for success in business. Wisdom is the virtue that helps us to make 
                good decisions and to understand what is truly important in our business endeavors.
              </p>

              <p className="mb-4">
                Business endeavors can be both rewarding and challenging. They can bring us financial security, 
                personal fulfillment, and the opportunity to serve others. However, they can also be difficult 
                and require us to make complex decisions that affect not only ourselves but also our employees, 
                customers, and families.
              </p>

              <p className="mb-4">
                True wisdom in business goes beyond mere knowledge or experience. It involves understanding 
                what is truly valuable and making decisions that align with God's will. It means recognizing 
                that success is not just about financial gain, but about using our talents and resources 
                to serve God and others.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to grant us the wisdom we need to make good decisions 
                in our business endeavors. Let us ask Him to help us understand what is truly important 
                and to guide us in using our business success to glorify Him.
              </p>

              <p>
                Remember that wisdom is a gift from God, and He wants to help us develop this virtue. 
                With His guidance, we can make wise decisions that lead to both worldly and spiritual success.
              </p>
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
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of wisdom 
            and to make wise decisions in our business endeavors. Give us the grace to understand what is truly important 
            and to use our business success to glorify You. May we always seek Your guidance in all our decisions. Amen.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Business Success - Day 1: Wisdom" 
            url="/novenas/business-success/day-1"
            excerpt="Join me in praying the Novena for Business Success - Day 1 focusing on Wisdom." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/business-success"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/business-success/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
} 