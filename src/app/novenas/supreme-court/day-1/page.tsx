import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Supreme Court - Day 1: Justice',
  description: 'Pray the Novena for the Supreme Court - Day 1 focusing on Justice. Join in praying the traditional novena to seek God\'s guidance for Supreme Court justices.',
  keywords: [
    'supreme court novena day 1',
    'prayer for supreme court day 1',
    'supreme court justices prayer justice',
    'novena for justice day 1',
    'supreme court ruling prayer justice',
    'abortion law prayer supreme court',
    'day 1 supreme court novena',
    'justice prayer supreme court',
    'supreme court novena justice'
  ],
  openGraph: {
    title: 'Novena for the Supreme Court - Day 1: Justice',
    description: 'Pray the Novena for the Supreme Court - Day 1 focusing on Justice. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/supreme-court/day-1',
  },
  twitter: {
    title: 'Novena for the Supreme Court - Day 1: Justice',
    description: 'Pray the Novena for the Supreme Court - Day 1 focusing on Justice. Join in praying the traditional novena.',
  }
}

export default function SupremeCourtNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Supreme Court – Day 1: Justice
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Justice</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for the Supreme Court, we pray for just and moral rulings in abortion-related cases.
            We ask God to guide the justices in making decisions that protect the sanctity of life and align with His divine law.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

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
                <strong>Abortion is a great sin,</strong> and we know that You are greatly displeased by the legalization of this terrible practice. 
                Many erring and misled people seek to expand the legalization of abortion. 
                The Supreme Court is able to influence how widely accepted and practiced abortion is through its rulings.
              </p>

              <p className="mb-6">
                <strong>Please bless and assist all members of the Supreme Court,</strong> and we particularly ask You today to help the Supreme Court 
                to rule justly and morally in all cases related to abortion! Grant them the wisdom to recognize the sanctity of every human life 
                and the courage to make decisions that protect the most vulnerable among us.
              </p>

              <p className="mb-6">
                <strong>Help us to submit ourselves more fully to Your laws</strong> at every opportunity. 
                Help us to grow to a deeper friendship with You in every circumstance.
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
                Today we pray for justice in Supreme Court rulings, particularly regarding abortion. 
                Justice is the foundation of our relationship with God and the key to understanding His plan for society.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to guide us in justice.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to protecting life.
              </p>

              <p className="mb-4">
                The focus on justice for life reminds us that every human being has an inherent right to life.
                God calls us to pray for the justices to recognize this fundamental truth and to make decisions accordingly.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our understanding of justice.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always guide us toward what is just and right.
              </p>

              <p>
                Remember that God's justice is not limited by time or circumstance.
                He is perpetually ready to guide us in justice, and we can trust completely in His divine wisdom and love.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray for Justice</h3>
              <p className="text-gray-700 text-sm">
                Pray for the justices to receive the grace of wisdom and courage to make just decisions that protect life.
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
            May you always remember His loving care for all life and His gift of justice in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children, especially the unborn.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for the Supreme Court - Day 1: Justice" 
            url="/novenas/supreme-court/day-1"
            excerpt="Join me in praying the Novena for the Supreme Court - Day 1 focusing on Justice." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/supreme-court"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Novena Overview
          </Link>
          
          <Link 
            href="/novenas/supreme-court/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Marriage →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Supreme Court" />
      
    </div>
  )
} 