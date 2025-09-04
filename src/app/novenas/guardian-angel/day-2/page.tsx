import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Guardian Angel Novena - Day 2: Divine Defender',
  description: 'Pray Guardian Angel Novena - Day 2 focusing on divine defender. Join in praying for protection, guidance, and divine assistance from your personal guardian angel.',
  keywords: [
    'guardian angel novena day 2',
    'angel novena day 2',
    'day 2 guardian angel novena',
    'divine defender guardian angel'
  ],
  openGraph: {
    title: 'Guardian Angel Novena - Day 2: Divine Defender',
    description: 'Pray Guardian Angel Novena - Day 2 focusing on Divine Defender.',
    url: 'https://catholicbibleonline.com/novenas/guardian-angel/day-2',
  },
  twitter: {
    title: 'Guardian Angel Novena - Day 2: Divine Defender',
    description: 'Pray Guardian Angel Novena - Day 2 focusing on Divine Defender.',
  }
}

export default function GuardianAngelNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Guardian Angel Novena – Day 2: Divine Defender
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying Guardian Angel Novena to honor your personal guardian angel and seek divine guidance.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/guardian-angel" className="hover:text-gray-700">Guardian Angel Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-amber-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Defender</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day, we pray for protection from sin and bodily harm through your guardian angel.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Loving God, you are so good that you gave me a Guardian Angel to protect my body and my soul. Help me to know and follow my angel so that, with their guidance, I will be worthy of being in Heaven with You!</p>

              <p className="mb-4">My sweet Guardian Angel, you are my defender every day of my life. Protect me from sin and bodily harm. Help me to learn to defend and protect myself so that I can be the person that God is calling me to be.</p>

              <p className="mb-4">You are with me all the time so you already know these my intentions that I ask you to deliver to the Lord.</p>

              <p className="mb-6">
                <strong>(Mention your intentions here…)</strong>
              </p>

              <p className="mb-6">
                <strong>My guardian angel, my defender, protect me!</strong>
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
                Today we focus on divine defender. This aspect of honoring your guardian angel helps you to recognize 
                and appreciate the constant presence and care of your heavenly companion in this specific role.
              </p>
              <p className="mb-4">
                As we continue our Guardian Angel Novena, let us remember that your guardian angel is with you every moment 
                of your life, serving as your counselor, defender, consoler, teacher, witness, helper, intercessor, guide, and light.
              </p>
              <p>
                Let us ask our guardian angels to help us become more aware of their presence and to be open to receiving 
                their guidance, protection, and intercession as we strive to live holy lives and grow closer to God.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Aware</h3>
              <p className="text-gray-700 text-sm">
                Be aware of your guardian angel's constant presence and protection.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for your guardian angel's tireless care and intercession.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in your guardian angel's guidance and protection in all circumstances.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open</h3>
              <p className="text-gray-700 text-sm">
                Be open to receiving your guardian angel's counsel and inspiration.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-amber-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Guardian Angel, my heavenly companion and protector, I thank you for this day of prayer and reflection. 
            Help me to be more aware of your constant presence and to trust completely in your guidance and protection. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Guardian Angel Novena - Day 2: Divine Defender" 
            url="/novenas/guardian-angel/day-2"
            excerpt="Join me in praying Guardian Angel Novena - Day 2 focusing on divine defender." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/guardian-angel/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Divine Counselor
          </Link>
          
          
          
          <Link 
            href="/novenas/guardian-angel/day-3"
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors"
          >
            Day 3: Divine Consoler →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}