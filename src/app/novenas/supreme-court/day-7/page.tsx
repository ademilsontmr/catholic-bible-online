import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Supreme Court - Day 7: Fortitude',
  description: 'Pray the Novena for the Supreme Court - Day 7 focusing on Fortitude. Join in praying the traditional novena to seek God\'s guidance for Supreme Court justices.',
  keywords: [
    'supreme court novena day 7',
    'prayer for supreme court day 7',
    'supreme court justices prayer fortitude',
    'novena for justice day 7',
    'supreme court ruling prayer fortitude',
    'day 7 supreme court novena',
    'fortitude prayer supreme court',
    'supreme court novena fortitude'
  ],
  openGraph: {
    title: 'Novena for the Supreme Court - Day 7: Fortitude',
    description: 'Pray the Novena for the Supreme Court - Day 7 focusing on Fortitude. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/supreme-court/day-7',
  },
  twitter: {
    title: 'Novena for the Supreme Court - Day 7: Fortitude',
    description: 'Pray the Novena for the Supreme Court - Day 7 focusing on Fortitude. Join in praying the traditional novena.',
  }
}

export default function SupremeCourtNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Supreme Court – Day 7: Fortitude
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Fortitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Novena for the Supreme Court, we pray for courage and strength for Supreme Court justices.
            We ask God to grant them the grace of fortitude to make difficult but just decisions.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

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
                <strong>Many of us face the temptation</strong> to waver in doing good when we experience pressure from others. 
                Some members of the Supreme Court have wavered in using their influence for good as they ought and have instead taken the easier path in the past.
              </p>

              <p className="mb-6">
                <strong>Please bless and assist all members of the Supreme Court,</strong> and we particularly ask You today to grant the grace of fortitude to all of the Supreme Court justices! 
                Help them to have the courage and strength to make difficult but just decisions.
              </p>

              <p className="mb-6">
                <strong>Help us to grow in every virtue</strong> necessary for holiness each day. 
                Help us to always strive to do good, no matter how difficult it might be.
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
                Today we pray for courage and strength for Supreme Court justices.
                Fortitude is the foundation of our relationship with God and the key to understanding His plan for society.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to give us courage.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to making difficult decisions.
              </p>

              <p className="mb-4">
                The focus on fortitude for justices reminds us that doing what is right often requires courage.
                God calls us to pray for the justices to have the strength to make difficult but just decisions.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our courage and strength.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always give us the fortitude to do what is right.
              </p>

              <p>
                Remember that God's gift of fortitude is not limited by time or circumstance.
                He is perpetually ready to give us courage, and we can trust completely in His divine strength and love.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray for Fortitude</h3>
              <p className="text-gray-700 text-sm">
                Pray for the justices to receive the grace of courage and strength to make difficult decisions.
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
            May you always remember His loving care for all life and His gift of fortitude in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for the Supreme Court - Day 7: Fortitude" 
            url="/novenas/supreme-court/day-7"
            excerpt="Join me in praying the Novena for the Supreme Court - Day 7 focusing on Fortitude." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/supreme-court/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Moral Renewal
          </Link>
          
          <Link 
            href="/novenas/supreme-court/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Humility →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Supreme Court" />
      
    </div>
  )
} 