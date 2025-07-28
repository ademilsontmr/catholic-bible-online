import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Anne - Day 9: Eternal Praise',
  description: "Pray the Novena to St. Anne - Day 9 focusing on Eternal Praise. Join in praying the traditional novena to seek St. Anne's intercession.",
  keywords: [
    'novena to st anne day 9',
    'st anne novena day 9',
    'anne novena day 9',
    'st anne prayer day 9',
    'day 9 st anne novena',
    'eternal praise prayer',
    'st anne novena eternal praise',
    'anne novena eternal praise'
  ],
  openGraph: {
    title: 'Novena to St. Anne - Day 9: Eternal Praise',
    description: 'Pray the Novena to St. Anne - Day 9 focusing on Eternal Praise. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-anne/day-9',
  },
  twitter: {
    title: 'Novena to St. Anne - Day 9: Eternal Praise',
    description: 'Pray the Novena to St. Anne - Day 9 focusing on Eternal Praise. Join in praying the traditional novena.',
  }
}

export default function StAnneNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Anne – Day 9: Eternal Praise
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Praise</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on eternal praise. We pray for the grace to praise and thank the adorable Trinity, Christ Jesus, Mary, and St. Anne through endless ages.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

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
                <strong>Good St. Ann, I have reached the end of this novena in your honor.</strong> I have asked and ask again. Good mother, let not your kind ear grow weary of my prayers, though I repeat them so often.
              </p>

              <p className="mb-6">
                <strong>Bounteous Lady, implore for me from divine Providence all the help I need through life.</strong> May your generous hand bestow on me the material means to satisfy my own needs and to alleviate the plight of the poor.
              </p>

              <p className="mb-6">
                <strong>Good St. Ann, fortify me by the sacraments of the Church at the hour of my death.</strong> Admit me into the company of the blessed in the kingdom of heaven, where I may praise and thank the adorable Trinity, your grandson Christ Jesus, your glorious daughter Mary, and yourself, dear St. Ann, through endless ages.
              </p>
              
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Anne's example of eternal praise teaches us that our ultimate goal is to glorify God. Through her intercession, we learn to praise God in all circumstances.
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
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of St. Anne. 
            May you always remember her motherly protection and her miraculous help in all your needs. 
            May you continue to grow in holiness and virtue through her intercession.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena to St. Anne! As you continue your spiritual journey, 
            may your heart be filled with motherly care, compassion and love, Mary's motherhood, 
            temple presentation faith, all-powerful intercession, purity and simplicity, 
            advocacy and help, exalted glory, and eternal praise. May St. Anne continue to watch over you and work miracles in your life.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Anne - Day 9: Eternal Praise"
          text="Join me in praying the Novena to St. Anne - Day 9 focusing on Eternal Praise."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link
            href="/novenas/st-anne/day-8"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 8: Exalted Glory
          </Link>
          
          
          <Link 
            href="/novenas/st-anne"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
