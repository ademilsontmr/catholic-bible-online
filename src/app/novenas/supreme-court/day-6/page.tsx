import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Supreme Court - Day 6: Moral Renewal',
  description: 'Pray the Novena for the Supreme Court - Day 6 focusing on Moral Renewal. Join in praying the traditional novena to seek God\'s guidance for Supreme Court justices.',
  keywords: [
    'supreme court novena day 6',
    'prayer for supreme court day 6',
    'supreme court justices prayer moral renewal',
    'novena for justice day 6',
    'supreme court ruling prayer moral renewal',
    'day 6 supreme court novena',
    'moral renewal prayer supreme court',
    'supreme court novena moral renewal'
  ],
  openGraph: {
    title: 'Novena for the Supreme Court - Day 6: Moral Renewal',
    description: 'Pray the Novena for the Supreme Court - Day 6 focusing on Moral Renewal. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/supreme-court/day-6',
  },
  twitter: {
    title: 'Novena for the Supreme Court - Day 6: Moral Renewal',
    description: 'Pray the Novena for the Supreme Court - Day 6 focusing on Moral Renewal. Join in praying the traditional novena.',
  }
}

export default function SupremeCourtNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Supreme Court – Day 6: Moral Renewal
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for the Supreme Court to seek God's guidance for just rulings and moral decisions.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/supreme-court" className="hover:text-gray-700">Novena for the Supreme Court</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Moral Renewal</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Novena for the Supreme Court, we pray for moral renewal in our country and society.
            We ask God to bring about a renewal of virtue and morality through the Court's decisions.
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
                <strong>Dear Lord,</strong> we thank You for the many freedoms we are blessed with in America. 
                We ask You to bless our country, and particularly to bring about good for our country through the Supreme Court.
              </p>

              <p className="mb-6">
                <strong>Our modern society often seems</strong> to be very far from You and from Your laws. 
                Our country is in great need of moral renewal and conversion. 
                The rulings of the Supreme Court can help influence our society back toward Your laws and toward genuine virtue.
              </p>

              <p className="mb-6">
                <strong>Please bless and assist all members of the Supreme Court,</strong> and we particularly ask You today to bring about a moral renewal in our country! 
                Help the Court's decisions to promote virtue and morality in our society.
              </p>

              <p className="mb-6">
                <strong>Help us to continually strive for deeper conversion</strong> in our own lives each day. 
                Help us to always do all we can to grow to a deeper intimacy with You at every opportunity.
              </p>

              <p className="mb-6">
                <strong>And I especially ask in this novena…</strong> (State your intentions here)
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
                Today we pray for moral renewal in our country and society through Supreme Court rulings.
                Moral renewal is the foundation of our relationship with God and the key to understanding His plan for society.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to bring about moral renewal.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to virtue.
              </p>

              <p className="mb-4">
                The focus on moral renewal reminds us that society needs to return to God's laws.
                God calls us to pray for the justices to make decisions that promote virtue and morality.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our desire for moral renewal.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always guide us toward what promotes virtue.
              </p>

              <p>
                Remember that God's call to moral renewal is not limited by time or circumstance.
                He is perpetually ready to bring about renewal, and we can trust completely in His divine guidance and love.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray for Moral Renewal</h3>
              <p className="text-gray-700 text-sm">
                Pray for moral renewal in our country and society through the Court's decisions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the Supreme Court to God. Pray for particular cases or justices.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of prayer and His guidance. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through His divine mercy and love. 
            May you always remember His loving care for all life and His gift of moral renewal in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for the Supreme Court - Day 6: Moral Renewal" 
            url="/novenas/supreme-court/day-6"
            excerpt="Join me in praying the Novena for the Supreme Court - Day 6 focusing on Moral Renewal." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/supreme-court/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Dedication
          </Link>
          
          <Link 
            href="/novenas/supreme-court/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Fortitude →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Supreme Court" />
      
    </div>
  )
} 