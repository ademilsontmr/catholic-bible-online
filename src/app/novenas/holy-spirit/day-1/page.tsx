import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Holy Spirit Novena - Day 1: Wisdom',
  description: 'Pray the Holy Spirit Novena - Day 1 focusing on Wisdom. Join in praying the traditional Holy Spirit Novena to prepare for Pentecost.',
  keywords: [
    'holy spirit novena day 1',
    'holy spirit prayer',
    'day 1 holy spirit',
    'holy spirit novena wisdom',
    'holy spirit prayer wisdom',
    'holy spirit novena prayer',
    'holy spirit nine day prayer',
    'pentecost novena'
  ],
  openGraph: {
    title: 'Holy Spirit Novena - Day 1: Wisdom',
    description: 'Pray the Holy Spirit Novena - Day 1 focusing on Wisdom. Join in praying the traditional Holy Spirit Novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit/day-1',
  },
  twitter: {
    title: 'Holy Spirit Novena - Day 1: Wisdom',
    description: 'Pray the Holy Spirit Novena - Day 1 focusing on Wisdom. Join in praying the traditional Holy Spirit Novena.',
  }
}

export default function HolySpiritNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Holy Spirit Novena – Day 1: Wisdom
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Holy Spirit Novena to prepare for Pentecost.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/holy-spirit" className="hover:text-gray-700">Holy Spirit Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Wisdom</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Holy Spirit Novena, we pray for the gift of Wisdom. This is the first and highest 
            of the seven gifts of the Holy Spirit, which helps us to see things from God's perspective.
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
                <strong>O Holy Spirit, Divine Spirit of light and love, I consecrate to You my understanding, heart and will, 
                my whole being for time and for eternity. May my understanding be always submissive to Your heavenly inspirations 
                and to the teaching of the Catholic Church, of which You are the infallible Guide.</strong>
              </p>
              
              <p className="mb-6">
                <strong>May my heart be ever inflamed with love of God and of my neighbor. May my will be ever conformed to the divine will. 
                May my whole life be a faithful imitation of the life and virtues of our Lord and Savior Jesus Christ, 
                to Whom with the Father and You be honor and glory forever. Amen.</strong>
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for the gift of Wisdom. We ask the Holy Spirit to help us see things from God's perspective 
                and to understand the deeper meaning of life and our relationship with God.
              </p>
              
              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love!</strong>
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
                Today we begin the Holy Spirit Novena by praying for the gift of Wisdom. This novena is traditionally prayed 
                during the nine days between the Ascension of Jesus and Pentecost, just as the Apostles and Mary prayed 
                in the Upper Room for the coming of the Holy Spirit.
              </p>
              
              <p className="mb-4">
                Wisdom is the first and highest of the seven gifts of the Holy Spirit. It helps us to see things from God's perspective 
                and to understand the deeper meaning of life. With wisdom, we can discern what is truly important and what is not, 
                and we can make decisions that align with God's will.
              </p>
              
              <p className="mb-4">
                The gift of wisdom is not the same as human knowledge or intelligence. It is a supernatural gift that comes from God 
                and helps us to understand divine things. It enables us to see the world through God's eyes and to understand 
                His plan for our lives.
              </p>
              
              <p>
                As we pray today, let us ask the Holy Spirit to grant us the gift of wisdom. Let us ask Him to help us see things 
                from God's perspective and to understand the deeper meaning of our lives and our relationship with Him.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Openness</h3>
              <p className="text-gray-700 text-sm">
                Approach this novena with an open heart and mind. Be ready to receive the gifts 
                that the Holy Spirit wants to give you.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Consecrate Yourself</h3>
              <p className="text-gray-700 text-sm">
                Each day, consecrate your understanding, heart, and will to the Holy Spirit. 
                Ask Him to guide you in all things.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek God's Perspective</h3>
              <p className="text-gray-700 text-sm">
                Ask the Holy Spirit to help you see things from God's perspective. 
                Pray for wisdom to understand His will for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Imitate Christ</h3>
              <p className="text-gray-700 text-sm">
                Ask the Holy Spirit to help you imitate the life and virtues of Jesus Christ. 
                Let Him transform you more and more into the image of Christ.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Holy Spirit, Divine Spirit of light and love, we consecrate to You our understanding, heart, and will. 
            Grant us the gift of wisdom so that we may see things from Your perspective and understand the deeper meaning of life. 
            Help us to be faithful imitators of Jesus Christ. Come, Holy Spirit, fill our hearts and kindle in us the fire of Your love! Amen.
          </p>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/holy-spirit"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/holy-spirit/day-2"
            className="inline-flex items-center px-6 py-3 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
          >
            Day 2: Understanding →
          </Link>
        </div>
      </div>
    </div>
  )
} 