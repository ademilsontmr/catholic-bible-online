import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Anne - Day 7: Advocate and Helper',
  description: "Pray the Novena to St. Anne - Day 7 focusing on Advocate and Helper. Join in praying the traditional novena to seek St. Anne's intercession.",
  keywords: [
    'novena to st anne day 7',
    'st anne novena day 7',
    'anne novena day 7',
    'st anne prayer day 7',
    'day 7 st anne novena',
    'advocate and helper prayer',
    'st anne novena advocate and helper',
    'anne novena advocate and helper'
  ],
  openGraph: {
    title: 'Novena to St. Anne - Day 7: Advocate and Helper',
    description: 'Pray the Novena to St. Anne - Day 7 focusing on Advocate and Helper. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-anne/day-7',
  },
  twitter: {
    title: 'Novena to St. Anne - Day 7: Advocate and Helper',
    description: 'Pray the Novena to St. Anne - Day 7 focusing on Advocate and Helper. Join in praying the traditional novena.',
  }
}

export default function StAnneNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Anne – Day 7: Advocate and Helper
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Anne to seek her intercession and motherly care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-anne" className="hover:text-gray-700">Novena to St. Anne</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Advocate and Helper</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on St. Anne as our advocate and helper. She extends her helping hand in all our wants and listens to our prayers, placing our petitions before the throne of God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>O glorious St. Ann, you are filled with compassion for those who invoke you and with love for those who suffer!</strong> Heavily burdened with the weight of my troubles, I cast myself at your feet and humbly beg of you to take the present intention which I recommend to you in your special care.
              </p>

              <p className="mb-6">
                <strong>Please recommend it to your daughter, the Blessed Virgin Mary, and place it before the throne of Jesus,</strong> so that He may bring it to a happy issue. Continue to intercede for me until my request is granted. But, above all, obtain for me the grace one day to see my God face to face, and with you and Mary and all the saints to praise and bless Him for all eternity.
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Father,... Hail Mary...</strong>
              </p>

              <p className="mb-6">
                <strong>O Jesus, Holy Mary, St. Ann, help me now and at the hour of my death.</strong>
              </p>

              <p className="mb-6">
                <strong>Good St. Ann, intercede for me.</strong>
              </p>

              
              <p className="mb-6">
                <strong>Once again, Good St. Ann, I choose you for my advocate before the throne of God.</strong> By the power and grace that God has placed in you, extend to me your helping hand. Renew my mind and my heart.
              </p>

              <p className="mb-6">
                <strong>Dear St. Ann, I have unbounded confidence in your prayers.</strong> To your blessed hands I entrust my soul, my body and all my hopes for this world and the next. Direct my actions according to your goodness and wisdom. I place myself under your motherly care.
              </p>

              <p className="mb-6">
                <strong>Receive me, good mother. Cover me with the mantle of your love.</strong> Look kindly on me. By your powerful intercession, may I obtain from God grace and mercy. Obtain for me remission for sin and release from the punishment my offenses have deserved. Pray that I may receive grace to lead a devout life on earth and that I may obtain the everlasting reward of heaven.
              </p>
              
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Anne's role as advocate and helper shows us the power of saintly intercession. Her example teaches us to trust in her heavenly assistance in all our needs.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Anne's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Anne's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Anne</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Anne's motherly care and her ability to help you.
                Turn to her with confidence in every need, especially family matters.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Anne will not fail to help 
                those who turn to her with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Anne. She wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Anne for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Anne, advocate and helper, help me to trust in your heavenly assistance. May your role as intercessor inspire me to rely on your help in all my difficulties. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to St. Anne - Day 7: Advocate and Helper" 
            url="/novenas/st-anne/day-7"
            excerpt="Join me in praying the Novena to St. Anne - Day 7 focusing on Advocate and Helper." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-anne/day-6"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 6: Purity and Simplicity
          </Link>
          
          
          <Link
            href="/novenas/st-anne/day-8"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 8: Exalted Glory →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
