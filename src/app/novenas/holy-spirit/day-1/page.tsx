import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of the Holy Spirit - Day 1: Sweet Light',
  description: "Pray the Novena of the Holy Spirit - Day 1 focusing on Sweet Light. Join in praying the traditional novena to seek the Holy Spirit's intercession.",
  keywords: [
    'novena of the holy spirit day 1',
    'holy spirit novena day 1',
    'spirit novena day 1',
    'holy spirit prayer day 1',
    'day 1 holy spirit novena',
    'sweet light prayer',
    'holy spirit novena sweet light',
    'spirit novena sweet light'
  ],
  openGraph: {
    title: 'Novena of the Holy Spirit - Day 1: Sweet Light',
    description: 'Pray the Novena of the Holy Spirit - Day 1 focusing on Sweet Light. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit/day-1',
  },
  twitter: {
    title: 'Novena of the Holy Spirit - Day 1: Sweet Light',
    description: 'Pray the Novena of the Holy Spirit - Day 1 focusing on Sweet Light. Join in praying the traditional novena.',
  }
}

export default function HolySpiritNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of the Holy Spirit – Day 1: Sweet Light
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena of the Holy Spirit to seek His gifts and fruits.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/holy-spirit" className="hover:text-gray-700">Novena of the Holy Spirit</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Sweet Light</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena of the Holy Spirit, we focus on His sweet light that fills us and illumines the darkness of our hearts. The Holy Spirit leads us like a mother's hand, and without Him, we would not know how to take another step.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              
              <p className="mb-6">
                <strong>Who are you, sweet light, that fills me</strong><br/>
                And illumines the darkness of my heart?<br/>
                You lead me like a mother's hand,<br/>
                And should you let go of me,<br/>
                I would not know how to take another step.
              </p>

              <p className="mb-6">
                <strong>You are the space</strong><br/>
                That embraces my being and buries it in yourself.<br/>
                Away from you it sinks into the abyss<br/>
                Of nothingness, from which you raised it to the light.
              </p>

              <p className="mb-6">
                <strong>You, nearer to me than I to myself</strong><br/>
                And more interior than my most interior<br/>
                And still impalpable and intangible<br/>
                And beyond any name:<br/>
                <strong>Holy Spirit eternal love!</strong>
              </p>
              

              <p className="mb-6">
                <strong>Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Hail Mary, full of grace, the Lord is with thee; blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Come, Holy Spirit, fill the hearts of Your faithful and kindle in them the fire of Your love. Send forth Your Spirit and they shall be created. And You shall renew the face of the earth.</strong>
              </p>

              <p className="mb-6">
                <strong>O God, who did instruct the hearts of the faithful by the light of the Holy Spirit, grant us in the same Spirit to be truly wise and ever to rejoice in His consolation, through Jesus Christ Our Lord. Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Holy Spirit's sweet light reminds us that He is the space that embraces our being and buries it in Himself. Away from Him, we sink into the abyss of nothingness, from which He raises us to the light.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of the Holy Spirit's nature and work, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May the Holy Spirit's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Spirit</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the Holy Spirit's powerful intercession and His ability to help you.
                Turn to Him with confidence in every need, especially for spiritual gifts and guidance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. The Holy Spirit will not fail to help 
                those who turn to Him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to the Holy Spirit. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank the Holy Spirit for His intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Holy Spirit, sweet light that illumines our hearts, help me to trust in Your powerful intercession. May Your illuminating presence guide me like a mother's hand and keep me from sinking into the abyss of nothingness. Guide me through these nine days of prayer, that I may experience Your miraculous help and grow closer to God. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena of the Holy Spirit - Day 1: Sweet Light" 
            url="/novenas/holy-spirit/day-1"
            excerpt="Join me in praying the Novena of the Holy Spirit - Day 1 focusing on Sweet Light." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/holy-spirit/day-2"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Eternal Love →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
