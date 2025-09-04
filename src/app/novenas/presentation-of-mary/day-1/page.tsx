import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'The Presentation of Mary Novena - Day 1: Dedication to God',
  description: 'Pray The Presentation of Mary Novena - Day 1 focusing on dedication to god. Join in praying for dedication to God and service to priests.',
  keywords: [
    'presentation of mary novena day 1',
    'presentation mary novena day 1',
    'day 1 presentation of mary novena',
    'dedication to god mary presentation'
  ],
  openGraph: {
    title: 'The Presentation of Mary Novena - Day 1: Dedication to God',
    description: 'Pray The Presentation of Mary Novena - Day 1 focusing on Dedication to God.',
    url: 'https://catholicbibleonline.com/novenas/presentation-of-mary/day-1',
  },
  twitter: {
    title: 'The Presentation of Mary Novena - Day 1: Dedication to God',
    description: 'Pray The Presentation of Mary Novena - Day 1 focusing on Dedication to God.',
  }
}

export default function PresentationOfMaryNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Presentation of Mary Novena – Day 1: Dedication to God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying The Presentation of Mary Novena to honor Mary's dedication to God and grow in service to Him.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/presentation-of-mary" className="hover:text-gray-700">The Presentation of Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Dedication to God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of The Presentation of Mary Novena, we pray for the desire to serve God and say yes to His will.
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

              <p className="mb-4">Mary, when you were presented in the temple, your parents chose to have your life dedicated to God. You would live in the temple and serve God and the priests as you grew up.</p>

              <p className="mb-4">What they couldn't control was your heart. But that had been dedicated to God long before your birth!</p>

              <p className="mb-4">Blessed Mother, teach me how to say yes to God as you did. Your "yes" at the Annunciation changed the course of salvation history. The world would not have been saved without your willingness. You knew it would be a challenging mission. You accepted it anyway.</p>

              <p className="mb-4">I humbly ask that you help me grow in desire to serve God. Help me to say yes to His will even when it's scary!</p>

              <p className="mb-6">
                <strong>Please also ask that you keep in mind my intentions:</strong>
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              
              <p className="mb-6">
                <strong>Thank You, God, for Mary's yes throughout her life. Help me to emulate it!</strong>
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
                Today we focus on dedication to god. This aspect of honoring The Presentation of Mary helps us to grow in dedication to God 
                and to become more like Christ in our daily lives as we seek to serve Him and His priests.
              </p>
              <p className="mb-4">
                As we continue our Presentation of Mary Novena, let us remember that Mary's presentation in the Temple marked the beginning 
                of her dedicated service to God, and she can help us do the same.
              </p>
              <p>
                Let us ask Mary to help us be instruments of her love and grace in serving God, imitating her perfect example of dedication 
                and willingness to say yes to God's will.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Dedicated</h3>
              <p className="text-gray-700 text-sm">
                Dedicate yourself to God as Mary was dedicated in the Temple.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's will even when it seems challenging or scary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Supportive</h3>
              <p className="text-gray-700 text-sm">
                Support and pray for priests who serve God and His people.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Studious</h3>
              <p className="text-gray-700 text-sm">
                Study God's word and allow it to change your heart and mind.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Mary, most holy daughter of Saints Joachim and Anne, we thank You for this day of prayer and reflection. Help us to carry 
            Your grace and love into our service to God and to trust completely in Your powerful intercession. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="The Presentation of Mary Novena - Day 1: Dedication to God" 
            url="/novenas/presentation-of-mary/day-1"
            excerpt="Join me in praying The Presentation of Mary Novena - Day 1 focusing on dedication to god." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/presentation-of-mary"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          
          
          <Link 
            href="/novenas/presentation-of-mary/day-2"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Day 2: Children of the World →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}