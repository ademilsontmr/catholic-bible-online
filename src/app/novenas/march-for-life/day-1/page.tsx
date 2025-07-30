import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'March for Life Novena - Day 1: Trust',
  description: 'Pray the March for Life Novena - Day 1 focusing on Trust. Join in praying the traditional novena to seek God\'s protection for life.',
  keywords: [
    'march for life novena day 1',
    'pro life novena day 1',
    'abortion novena day 1',
    'life protection novena day 1',
    'pro life prayer trust',
    'day 1 march for life novena',
    'trust life prayer',
    'march for life novena trust',
    'pro life novena trust'
  ],
  openGraph: {
    title: 'March for Life Novena - Day 1: Trust',
    description: 'Pray the March for Life Novena - Day 1 focusing on Trust. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/march-for-life/day-1',
  },
  twitter: {
    title: 'March for Life Novena - Day 1: Trust',
    description: 'Pray the March for Life Novena - Day 1 focusing on Trust. Join in praying the traditional novena.',
  }
}

export default function MarchForLifeNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            March for Life Novena – Day 1: Trust
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the March for Life Novena, we pray for trust in God's protection of life
            and His plan for every human being. We ask God to help us trust in His divine wisdom
            and His promise to always protect the most vulnerable among us.
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
                <strong>Heavenly Father,</strong> we thank You for the precious gift of life that You have given to each of us.
                We praise You for creating every human being in Your image and likeness, from the moment of conception.
                We trust in Your divine plan for every life and Your promise to protect the most vulnerable among us.
              </p>

              <p className="mb-6">
                <strong>You are Love itself,</strong> and we ask You to grant that we may be Your love in the world.
                Help us to offer Your love to all life, no matter the circumstances or challenges we face.
                Give us the grace to see every human being as Your beloved child, worthy of protection and respect.
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
                Today we pray for trust in God's protection of life and His plan for every human being.
                Trust is the foundation of our relationship with God and the key to understanding His plan for life.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to protect us.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to protecting life.
              </p>

              <p className="mb-4">
                The focus on trusting in God's protection reminds us that every human life is precious and sacred.
                God calls us to trust in His plan for each person, from the moment of conception to natural death.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask God to increase our trust in Him.
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
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's plan for life and His ability to protect the unborn. Believe that He is working for the good of all human life.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust for the protection of life.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions for the protection of life to God. Pray for particular situations, people, and laws that affect the unborn.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of life and His protection. Gratitude opens our hearts to receive more graces for the defense of life.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through His divine mercy and love. 
            May you always remember His loving care for all life and His gift of trust in all your needs. 
            May you continue to grow in faith, hope, and love for Him and for all His children, especially the unborn.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="March for Life Novena - Day 1: Trust"
          text="Join me in praying the March for Life Novena - Day 1 focusing on Trust."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <div></div>
          
          <Link 
            href="/novenas/march-for-life/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Love →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="March for Life" />
      
    </div>
  )
} 