import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'March for Life Novena - Day 9: Gratitude',
  description: 'Pray the March for Life Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena to seek God\'s protection for life.',
  keywords: [
    'march for life novena day 9',
    'pro life novena day 9',
    'abortion novena day 9',
    'life protection novena day 9',
    'pro life prayer gratitude',
    'day 9 march for life novena',
    'gratitude life prayer',
    'march for life novena gratitude',
    'pro life novena gratitude'
  ],
  openGraph: {
    title: 'March for Life Novena - Day 9: Gratitude',
    description: 'Pray the March for Life Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/march-for-life/day-9',
  },
  twitter: {
    title: 'March for Life Novena - Day 9: Gratitude',
    description: 'Pray the March for Life Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
  }
}

export default function MarchForLifeNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            March for Life Novena – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the March for Life Novena to seek God's protection for all human life and to end abortion.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/march-for-life" className="hover:text-gray-700">March for Life Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this ninth day of the March for Life Novena, we pray with gratitude for the gift of life
            and God's protection. We focus particularly on thanking God for His divine wisdom
            and His promise to always protect the most vulnerable among us.
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

              <p className="mb-6">
                <strong>Heavenly Father,</strong> we thank You and praise You for the precious gift of life that You have given to each of us.
                We are grateful for creating every human being in Your image and likeness, from the moment of conception.
                We thank You for Your divine plan for every life and Your promise to protect the most vulnerable among us.
              </p>

              <p className="mb-6">
                <strong>Your Hope moves us, Lord.</strong> We thank You for the hope You give to those suffering from abortion.
                Grant that we may bring Your hope to those who need healing. The tragedy of abortion can only be overcome by divine hope,
                and we are grateful for Your promise of healing and restoration.
              </p>

              <p className="mb-6">
                <strong>We pray for the March for Life</strong> and all those who will attend this powerful witness for life.
                We thank You for the opportunity to stand up for life and to witness to the sanctity of every human being.
                We ask that our government and all leaders will bend to Your will and protect the most vulnerable among us,
                especially the child in the womb. May this event be an inspiration to those who march, to those who see it,
                and to our entire country to respect and protect all human life.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
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
                Today we pray with gratitude for the gift of life and God's protection of all human beings.
                Gratitude is the foundation of our relationship with God and the key to understanding His plan for life.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to protect us.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to protecting life.
              </p>

              <p className="mb-4">
                The focus on gratitude for God's protection reminds us that every human life is precious and sacred.
                God calls us to be thankful for His plan for each person, from the moment of conception to natural death.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us ask God to increase our gratitude in Him.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always protect life and guide us in defending the unborn.
              </p>

              <p>
                Remember that God's protection is not limited by time or circumstance.
                He is perpetually ready to help us, and we can trust completely in His divine care for all life.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Cultivate an attitude of gratitude. Thank God for the gift of life and His protection. 
                Gratitude opens our hearts to receive more graces for the defense of life.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in God's protection of life. He will always be there for you 
                and will never fail to help those who turn to Him for the protection of the unborn.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Gratitude</h3>
              <p className="text-gray-700 text-sm">
                Share your gratitude with others. Let them know about God's protection of life 
                and encourage them to stand up for the unborn.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray for the protection of life regularly. Develop a daily devotion to life 
                and let God be your guide in defending the unborn.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through His divine mercy and love. 
            May you always remember His loving care for all life and His gift of gratitude in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children, especially the unborn.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the March for Life Novena! As you continue your spiritual journey, 
            may your heart be filled with trust, love, hope, joy, courage, perseverance, intercession, conversion, and gratitude. 
            May God continue to watch over you and grant you strength to defend life and protect the unborn.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="March for Life Novena - Day 9: Gratitude" 
            url="/novenas/march-for-life/day-9"
            excerpt="Join me in praying the March for Life Novena - Day 9 focusing on Gratitude." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/march-for-life/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Conversion
          </Link>
          
          <Link 
            href="/novenas/march-for-life"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="March for Life" />
      
    </div>
  )
} 