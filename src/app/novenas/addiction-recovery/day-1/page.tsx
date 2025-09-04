import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Novena for Addiction Recovery - Day 1: Admitting the Problem',
  description: 'Pray the Novena for Addiction Recovery - Day 1 focusing on admitting the problem. Join in praying for strength and healing from addiction.',
  keywords: [
    'novena for addiction recovery day 1',
    'addiction recovery prayer day 1',
    'day 1 addiction novena',
    'admitting the problem addiction recovery'
  ],
  openGraph: {
    title: 'Novena for Addiction Recovery - Day 1: Admitting the Problem',
    description: 'Pray the Novena for Addiction Recovery - Day 1 focusing on Admitting the Problem.',
    url: 'https://catholicbibleonline.com/novenas/addiction-recovery/day-1',
  },
  twitter: {
    title: 'Novena for Addiction Recovery - Day 1: Admitting the Problem',
    description: 'Pray the Novena for Addiction Recovery - Day 1 focusing on Admitting the Problem.',
  }
}

export default function NovenaForAddictionRecoveryDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Addiction Recovery – Day 1: Admitting the Problem
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Addiction Recovery to seek God's mercy and strength for recovery from addiction.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/addiction-recovery" className="hover:text-gray-700">Novena for Addiction Recovery</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Admitting the Problem</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena for Addiction Recovery, we pray for those who are having trouble admitting their addiction problem.
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

              <p className="mb-4">Dear Lord, we thank You and praise You for Your never-ending mercy and love. We come before You to implore Your assistance in recovery from addiction.</p>

              <p className="mb-4">You know intimately the many struggles and sufferings that people face each day in our fallen world. We know that You are always ready to help us in these struggles and sufferings whenever we ask. We ask You now to be with us and with all who are suffering because of an addiction.</p>

              <p className="mb-4">Please graciously pour Your grace upon all those who are struggling with addiction, especially those who are having trouble admitting their problem!</p>

              <p className="mb-4">Help us to remember that You always long to help us in all things. Help us to turn to You for help in every circumstance of need or suffering we face in our lives.</p>

              <p className="mb-6">
                <strong>I especially ask in this novena (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, have mercy on us, now and always!</strong>
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
                Today we focus on admitting the problem. This aspect of addiction recovery helps us to grow in faith 
                and to become more like Christ in our daily lives as we seek freedom from addiction.
              </p>
              <p className="mb-4">
                As we continue our Novena for Addiction Recovery, let us remember that God's mercy is infinite 
                and that He desires to help us overcome any addiction and find true freedom and peace in our lives.
              </p>
              <p>
                Let us ask God to help us be instruments of His mercy and love for all who are struggling with addiction.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's infinite mercy and His power to help you overcome any addiction.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Be patient with yourself and trust in God's timing for your recovery journey.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Humble</h3>
              <p className="text-gray-700 text-sm">
                Humbly admit your struggles and seek God's help with complete trust.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in God's love and mercy for you and your recovery.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for addiction recovery. Help us to carry 
            Your mercy and love for those struggling with addiction into our daily lives and to trust completely 
            in Your assistance. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Addiction Recovery - Day 1: Admitting the Problem" 
            url="/novenas/addiction-recovery/day-1"
            excerpt="Join me in praying the Novena for Addiction Recovery - Day 1 focusing on admitting the problem." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/addiction-recovery"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/addiction-recovery/day-2"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
          >
            Day 2: Substance Addiction →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}