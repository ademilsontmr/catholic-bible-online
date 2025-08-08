import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Financial Help Novena - Day 9: Surrender',
  description: 'Pray the Financial Help Novena - Day 9 focusing on Surrender. Join in praying the traditional novena to seek God\'s financial assistance.',
  keywords: [
    'financial help novena day 9',
    'financial novena day 9',
    'money prayer novena day 9',
    'financial assistance prayer day 9',
    'surrender financial prayer',
    'day 9 financial help novena',
    'financial prayer surrender',
    'financial novena surrender',
    'money prayer surrender'
  ],
  openGraph: {
    title: 'Financial Help Novena - Day 9: Surrender',
    description: 'Pray the Financial Help Novena - Day 9 focusing on Surrender. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/financial-help/day-9',
  },
  twitter: {
    title: 'Financial Help Novena - Day 9: Surrender',
    description: 'Pray the Financial Help Novena - Day 9 focusing on Surrender. Join in praying the traditional novena.',
  }
}

export default function FinancialHelpNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Financial Help Novena – Day 9: Surrender
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Financial Help Novena to seek God's assistance and guidance in financial matters.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/financial-help" className="hover:text-gray-700">Financial Help Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Surrender</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Financial Help Novena, we pray for complete surrender of our financial worries and concerns to God.
            We ask God to help us surrender everything to Him and trust completely in His divine plan for our lives.
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
                <strong>Heavenly Father,</strong> you are the source of all peace and the giver of perfect rest.
                You have promised to give rest to those who come to you with their burdens.
                We come to you today surrendering all our financial concerns to you.
              </p>

              <p className="mb-6">
                <strong>Your plan for us is perfect and your love is endless.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, help us to surrender!</strong> Help us to surrender all our financial worries,
                concerns, and plans to you. Teach us to trust completely in your divine plan
                and to find peace in your loving care.
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your financial intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>Heavenly Father, we surrender everything to you!</strong>
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
                Today we pray for complete surrender of our financial worries and concerns to God.
                Surrender is the ultimate act of trust and faith in God's plan for our lives.
              </p>

              <p className="mb-4">
                Jesus tells us in Matthew 11:28-30, "Come to me, all you who are weary and burdened,
                and I will give you rest. Take my yoke upon you and learn from me, for I am gentle
                and humble in heart, and you will find rest for your souls."
              </p>

              <p className="mb-4">
                The title "Financial Help" reminds us that God is our ultimate helper and provider
                in all financial matters. He is always ready to guide us, provide for us, and help us
                make wise financial decisions when we surrender everything to Him.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us ask God to help us surrender completely to Him.
                Let us ask Him to help us trust in His divine plan and find peace in His loving care.
              </p>

              <p>
                Remember that surrender is not giving up, but giving over to God's perfect plan.
                It is the path to true peace and freedom from worry.
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
                Trust completely in God's ability to provide for your needs.
                Turn to Him with confidence in every financial situation.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific financial needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His provision and financial blessings.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Heavenly Father, help us to surrender completely to you. Help us to surrender all our financial worries,
            concerns, and plans to you, knowing that you will provide for all our needs according to your perfect plan.
            May we always find peace in your loving care and trust in your divine providence. Amen.
          </p>
        </section>

        {/* Congratulations */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Financial Help Novena! As you continue your financial journey, 
            may your heart be filled with trust, faith, hope, generosity, patience, humility, 
            wisdom, gratitude, and surrender. May God continue to watch over you and provide for all 
            your financial needs according to His perfect will and timing.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Financial Help Novena - Day 9: Surrender"
          text="Join me in praying the Financial Help Novena - Day 9 focusing on Surrender."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/financial-help/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Trust
          </Link>
          
          <Link 
            href="/novenas/financial-help"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena for Financial Help" />
    </div>
  )
} 