import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'March for Life Novena - Day 3: Hope',
  description: 'Pray the March for Life Novena - Day 3 focusing on Hope. Join in praying the traditional novena to seek God\'s protection for life.',
  keywords: [
    'march for life novena day 3',
    'pro life novena day 3',
    'abortion novena day 3',
    'life protection novena day 3',
    'pro life prayer hope',
    'day 3 march for life novena',
    'hope life prayer',
    'march for life novena hope',
    'pro life novena hope'
  ],
  openGraph: {
    title: 'March for Life Novena - Day 3: Hope',
    description: 'Pray the March for Life Novena - Day 3 focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/march-for-life/day-3',
  },
  twitter: {
    title: 'March for Life Novena - Day 3: Hope',
    description: 'Pray the March for Life Novena - Day 3 focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function MarchForLifeNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            March for Life Novena – Day 3: Hope
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the March for Life Novena, we pray for hope and healing for those affected by abortion.
            We ask God to bring His divine hope to those who are suffering and to help them find healing and restoration.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father,</strong> we thank You for the precious gift of life that You have given to each of us.
                We praise You for creating every human being in Your image and likeness, from the moment of conception.
                We pray for those who are suffering from the effects of abortion and ask for Your healing grace.
              </p>

              <p className="mb-6">
                <strong>Your Hope moves us, Lord.</strong> Grant that we may bring Your hope to those suffering from abortion.
                The tragedy of abortion can only be overcome by divine hope. Help us to be instruments of Your hope
                and healing for those who are broken and hurting.
              </p>

              <p className="mb-6">
                <strong>We pray for the March for Life</strong> and all those who will attend this powerful witness for life.
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
                Today we pray for hope and healing for those affected by abortion.
                Hope is the foundation of our relationship with God and the key to understanding His plan for healing.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to heal us.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to healing from abortion.
              </p>

              <p className="mb-4">
                The focus on hope for healing reminds us that no sin is too great for God's mercy.
                God calls us to hope in His healing power and to trust in His promise of restoration.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our hope in Him.
                Let us ask Him to help us turn to Him with confidence in every need,
                knowing that He will always heal and restore those who turn to Him.
              </p>

              <p>
                Remember that God's hope is not limited by time or circumstance.
                He is perpetually ready to heal us, and we can trust completely in His divine mercy and love.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Hope in God</h3>
              <p className="text-gray-700 text-sm">
                Hope in God's healing power and His ability to restore those affected by abortion. Trust in His mercy.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with hope.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for healing to God. Pray for particular people and situations.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of hope and His healing power. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through His divine mercy and love. 
            May you always remember His loving care for all life and His gift of hope in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children, especially the unborn.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="March for Life Novena - Day 3: Hope" 
            url="/novenas/march-for-life/day-3"
            excerpt="Join me in praying the March for Life Novena - Day 3 focusing on Hope." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/march-for-life/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Love
          </Link>
          
          <Link 
            href="/novenas/march-for-life/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Joy →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="March for Life" />
      
    </div>
  )
} 