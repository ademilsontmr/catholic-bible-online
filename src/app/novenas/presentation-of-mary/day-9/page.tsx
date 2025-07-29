import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'The Presentation of Mary Novena - Day 9: Saying Yes to God',
  description: 'Pray The Presentation of Mary Novena - Day 9 focusing on saying yes to god. Join in praying for dedication to God and service to priests.',
  keywords: [
    'presentation of mary novena day 9',
    'presentation mary novena day 9',
    'day 9 presentation of mary novena',
    'saying yes to god mary presentation'
  ],
  openGraph: {
    title: 'The Presentation of Mary Novena - Day 9: Saying Yes to God',
    description: 'Pray The Presentation of Mary Novena - Day 9 focusing on Saying Yes to God.',
    url: 'https://catholicbibleonline.com/novenas/presentation-of-mary/day-9',
  },
  twitter: {
    title: 'The Presentation of Mary Novena - Day 9: Saying Yes to God',
    description: 'Pray The Presentation of Mary Novena - Day 9 focusing on Saying Yes to God.',
  }
}

export default function PresentationOfMaryNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Presentation of Mary Novena – Day 9: Saying Yes to God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for trust in God's will and overcoming fears and doubts.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/presentation-of-mary" className="hover:text-gray-700">The Presentation of Mary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Saying Yes to God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day, we pray for trust in God's will and overcoming fears and doubts.
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

              <p className="mb-4">Mary, we do not know if you were physically presented and dedicated in the Temple. However, your devotion to God was certainly very strong throughout your life.</p>

              <p className="mb-4">Your greatest "yes" of course was saying yes to being the mother of the Messiah at the Annunciation. But you continued to say "yes" to God's crazy plans throughout the rest of your life. You gave birth in a stable. You had to run away to Egypt. You lost Jesus in the Temple. You watched Jesus perform miracles and be mocked. You even had to say "yes" to watching Him die on the cross.</p>

              <p className="mb-4">You are the model of saying "yes" to God's crazy will, even when you don't fully understand it.</p>

              <p className="mb-4">Can you help me to do the same? I want to speak that unrelenting "yes." I want to believe and trust that God knows what's best, even when I can't see it. I want to be able to effect change as you did.</p>

              <p className="mb-4">When you were presented to God in the Temple as a girl, you had no idea what lay ahead through that commitment. I don't either. But I want to make that dedication anyway.</p>

              <p className="mb-4">Please help me, Mary. Help me to trust God, help me to overcome my fears and doubts.</p>

              <p className="mb-6">
                <strong>Please also ask that you keep in mind my intentions:</strong>
              </p>

              <p className="mb-6">
                <strong>(State your intentions here)</strong>
              </p>

              
              <p className="mb-6">
                <strong>O God, I want to come to know and love You better. Thank You for all of the blessings in my life. Help me to continue to say yes to Your will!</strong>
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
                Today we focus on saying yes to god. This aspect of honoring The Presentation of Mary helps us to grow in dedication to God 
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May God bless you abundantly with dedication to His service and help you say yes to His will. May you always remember 
            Mary's presentation in the Temple and find strength in her powerful intercession throughout your spiritual journey.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed The Presentation of Mary Novena! As you continue to honor Mary's presentation and grow in dedication to God, 
            may your heart be filled with grace and divine guidance. May God continue to 
            bless you and provide all the strength you need to serve Him and His priests faithfully.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="The Presentation of Mary Novena - Day 9: Saying Yes to God"
          text="Join me in praying The Presentation of Mary Novena - Day 9 focusing on saying yes to god."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          
          <Link 
            href="/novenas/presentation-of-mary/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Dying and Death
          </Link>
          
          
          
          <Link 
            href="/novenas/presentation-of-mary"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
          
        </div>
      </div>

      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="The Presentation of Mary Novena" />
      
    </div>
  )
}