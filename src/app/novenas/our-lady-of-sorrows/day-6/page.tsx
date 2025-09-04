import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 6: Trust',
  description: 'Pray the Our Lady of Sorrows Novena - Day 6 focusing on Trust. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 6',
    'sorrows novena day 6',
    'mary novena day 6',
    'our lady novena day 6',
    'sorrows prayer trust',
    'day 6 sorrows novena',
    'trust mary prayer',
    'sorrows novena trust',
    'mary novena trust'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 6: Trust',
    description: 'Pray the Our Lady of Sorrows Novena - Day 6 focusing on Trust. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-6',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 6: Trust',
    description: 'Pray the Our Lady of Sorrows Novena - Day 6 focusing on Trust. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 6: Trust
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Sorrows Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-sorrows" className="hover:text-gray-700">Our Lady of Sorrows Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Our Lady of Sorrows Novena, we pray to grow in unshakable trust in God's plan 
            and to surrender our lives fully to His will, confident that His love will sustain us in every trial.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, we thank You for the unwavering faith of Our Lady of Sorrows.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady,</strong> you trusted God completely, even when you faced the unspeakable sorrow of seeing your Son crucified. Your trust did not falter, even in the darkest hour.
              </p>

              <p className="mb-6">
                <strong>Today, we ask you to help us grow in unshakable trust in God's plan.</strong> Teach us to surrender our lives fully to His will, confident that His love will sustain us in every trial.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may cultivate the virtues necessary for holiness and persevere in faith until the end.</strong>
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows, pray for us!</strong>
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
                Today we pray to grow in unshakable trust in God's plan and to surrender our lives fully to His will, 
                confident that His love will sustain us in every trial.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows trusted God completely, even when she faced the unspeakable sorrow of seeing her Son crucified. 
                Her trust did not falter, even in the darkest hour. She shows us what it means to have unwavering faith in God.
              </p>

              <p className="mb-4">
                Mary's example teaches us that trust in God is not about understanding everything that happens, 
                but about believing that God is in control and that He loves us. She shows us that even when we cannot see 
                the purpose of our sufferings, we can trust that God has a plan.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us grow in unshakable trust in God's plan. Let us ask her to teach us 
                to surrender our lives fully to His will, confident that His love will sustain us in every trial.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may cultivate the virtues necessary for holiness and persevere 
                in faith until the end. Mary's example shows us that trust in God is the foundation of a holy life 
                and the key to persevering through all trials.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need, especially in times of suffering.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Lady of Sorrows, help us to grow in unshakable trust in God's plan. Teach us to surrender our lives 
            fully to His will, confident that His love will sustain us in every trial. Pray for us, that we may cultivate 
            the virtues necessary for holiness and persevere in faith until the end. May we always trust in God's love and plan for us. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Sorrows Novena - Day 6: Comfort" 
            url="/novenas/our-lady-of-sorrows/day-6"
            excerpt="Join me in praying the Our Lady of Sorrows Novena - Day 6 focusing on Comfort." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Emotional Pain
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Devotion →
          </Link>
        </div>
      </div>
    </div>
  )
} 