import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Cancer - Day 9: Gratitude',
  description: 'Pray the Novena for Cancer - Day 9 focusing on Gratitude. Join in praying the traditional novena to seek God\'s healing and strength.',
  keywords: [
    'novena for cancer day 9',
    'cancer novena day 9',
    'gratitude prayer cancer',
    'catholic prayer for gratitude',
    'novena for cancer prayer',
    'day 9 cancer novena',
    'gratitude god cancer',
    'catholic novena prayer'
  ],
  openGraph: {
    title: 'Novena for Cancer - Day 9: Gratitude',
    description: 'Pray the Novena for Cancer - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/cancer/day-9',
  },
  twitter: {
    title: 'Novena for Cancer - Day 9: Gratitude',
    description: 'Pray the Novena for Cancer - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
  }
}

export default function NovenaForCancerDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Cancer – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Cancer to seek God\'s healing and divine strength for cancer patients and their families.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/cancer" className="hover:text-gray-700">Novena for Cancer</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this ninth day of the Novena for Cancer, we pray for gratitude in God\'s plan and His ability
            to grant us healing and strength. We focus particularly on gratitude for medical care and healing and ask God to help us grow in gratitude and to trust in His divine wisdom
            and His promise to always provide us with the strength we need.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.  Amen.</p>
              <p className="mb-6">Dear Lord, we praise and thank You for the many ways You have assisted us through struggles in our lives. We ask You to pour out Your assistance on all people who have cancer.</p>
              <p className="mb-6">Cancer patients need a lot of help from skilled and caring medical professionals, while battling their cancer. Doctors and nurses help ease the sufferings of cancer patients and administer life-saving treatment to them. Medical professionals treating cancer patients are in need of skill and love to do their job well and provide the best care possible.</p>
              <p className="mb-6">Please bless and assist all people with cancer, and we especially ask You today to help all medical professionals who treat cancer patients to do their jobs well!</p>
              <p className="mb-6">Help us to take every opportunity to grow in holiness in our lives. Help us to love You more and more each day.</p>
              <p className="mb-6">And I especially ask in this novena (mention your intentions here).</p>
              <p className="mb-6">Lord, hear our prayers!</p>
              <p className="mb-6">In the name of the Father, and of the Son, and of the Holy Spirit.  Amen.</p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for gratitude in God\'s plan and His ability to grant us healing and strength in all situations.
                Gratitude is the foundation of our relationship with God and the key to finding strength in challenging health circumstances.
              </p>

              <p className="mb-4">
                God is our Father, who loves us with a perfect love and is always ready to help us.
                As our Father, He knows exactly what we need and when we need it, especially when it comes to healing and strength.
              </p>

              <p className="mb-4">
                The focus on gratitude for medical care and healing reminds us that healing is not just about physical recovery, but about 
                spiritual and emotional strength. God calls us to be strong in many different ways throughout our health journey.
              </p>

              <p className="mb-4">
                As we continue this novena, let us ask God to increase our gratitude in Him.
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
              <p className="text-gray-700 text-sm">Trust completely in God\'s plan for your life and His ability to grant you healing. Believe that He is working for your good, even in illness.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust, especially in times of illness.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">Present your specific health concerns and challenges to God. He wants to help you with the particular difficulties you face in your cancer journey.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">Thank God for His healing power and the gift of medical care. Gratitude opens our hearts to receive more graces and healing.</p>
            </div>
          </div>
        </section>

        {/* Closing Prayer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Closing Prayer</h2>

          <div className="bg-blue-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Heavenly Father, we thank You for this day of prayer and for the opportunity to grow closer to You through our suffering.
              </p>

              <p className="mb-4">
                Help us to remember that You are always with us, especially in our times of greatest need.
                Give us the strength to face each day with courage and faith.
              </p>

              <p className="mb-4">
                We ask for Your continued blessing and protection for all cancer patients and their families.
                May they find comfort in Your love and strength in Your presence.
              </p>

              <p className="mb-4">
                In Jesus' name, we pray. Amen.
              </p>
            </div>
          </div>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for Cancer! As you continue your spiritual journey, 
            may your heart be filled with trust, hope, love, humility, purity, obedience, perseverance, intercession, and gratitude. 
            May God continue to watch over you and grant you healing, strength, and comfort in your battle against cancer.
          </p>
        </section>

        {/* Share Section */}
        <section className="mb-12">
          <ShareButton title="Novena for Cancer - Day 9: Gratitude" text="Join me in praying the Novena for Cancer - Day 9 focusing on Gratitude. Pray for God's healing and strength for cancer patients and their families." />
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/cancer/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8
          </Link>
          
          <Link
            href="/novenas/cancer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
        {/* Related Novenas Section */}
        <RelatedNovenas currentNovena="Novena for Cancer" />
      </div>
    </div>
  )
}