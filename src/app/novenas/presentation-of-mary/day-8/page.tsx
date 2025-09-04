import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'The Presentation of Mary Novena - Day 8: Dying and Death',
  description: 'Pray The Presentation of Mary Novena - Day 8 focusing on dying and death. Join in praying for dedication to God and service to priests.',
  keywords: [
    'presentation of mary novena day 8',
    'presentation mary novena day 8',
    'day 8 presentation of mary novena',
    'dying and death mary presentation'
  ],
  openGraph: {
    title: 'The Presentation of Mary Novena - Day 8: Dying and Death',
    description: 'Pray The Presentation of Mary Novena - Day 8 focusing on Dying and Death.',
    url: 'https://catholicbibleonline.com/novenas/presentation-of-mary/day-8',
  },
  twitter: {
    title: 'The Presentation of Mary Novena - Day 8: Dying and Death',
    description: 'Pray The Presentation of Mary Novena - Day 8 focusing on Dying and Death.',
  }
}

export default function PresentationOfMaryNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Presentation of Mary Novena – Day 8: Dying and Death
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying The Presentation of Mary Novena to honor Mary's dedication to God and grow in service to Him.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/presentation-of-mary" className="hover:text-gray-700">The Presentation of Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Dying and Death</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day, we pray for peaceful death and comfort for the ill.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Mary, one of your promises is to be with those who are dying.</p>

              <p className="mb-4">Many of the times that you have appeared to the saints, you have offered this promise of protection of the soul at the time of death. After watching your own Son die, you know what it is like.</p>

              <p className="mb-4">Please be with all who are ill and suffering. Offer them comfort. Present them with numerous opportunities to get to know your Son.</p>

              <p className="mb-4">Please also be with all who will die soon, especially for those who will die today. Grant them a peaceful death. Usher them into Heaven to be with you and Jesus.</p>

              <p className="mb-6">
                <strong>Please also ask that you keep in mind my intentions:</strong>
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              
              <p className="mb-6">
                <strong>O God, I know that death is not something to be feared! Please prepare me to meet with a happy death so that I may be joined with You forever.</strong>
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
                Today we focus on dying and death. This aspect of honoring The Presentation of Mary helps us to grow in dedication to God 
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
            title="The Presentation of Mary Novena - Day 8: Dying and Death" 
            url="/novenas/presentation-of-mary/day-8"
            excerpt="Join me in praying The Presentation of Mary Novena - Day 8 focusing on dying and death." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/presentation-of-mary/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Resisting Temptation
          </Link>
          
          
          
          <Link 
            href="/novenas/presentation-of-mary/day-9"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Day 9: Saying Yes to God →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}