import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of the Holy Spirit - Day 3: Sweet Manna',
  description: "Pray the Novena of the Holy Spirit - Day 3 focusing on Sweet Manna. Join in praying the traditional novena to seek the Holy Spirit's intercession.",
  keywords: [
    'novena of the holy spirit day 3',
    'holy spirit novena day 3',
    'spirit novena day 3',
    'holy spirit prayer day 3',
    'day 3 holy spirit novena',
    'sweet manna prayer',
    'holy spirit novena sweet manna',
    'spirit novena sweet manna'
  ],
  openGraph: {
    title: 'Novena of the Holy Spirit - Day 3: Sweet Manna',
    description: 'Pray the Novena of the Holy Spirit - Day 3 focusing on Sweet Manna. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit/day-3',
  },
  twitter: {
    title: 'Novena of the Holy Spirit - Day 3: Sweet Manna',
    description: 'Pray the Novena of the Holy Spirit - Day 3 focusing on Sweet Manna. Join in praying the traditional novena.',
  }
}

export default function HolySpiritNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of the Holy Spirit – Day 3: Sweet Manna
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Sweet Manna</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on the Holy Spirit as the sweet manna that from the Son's heart overflows into our hearts. He is the food of angels and the blessed, nourishing us with divine grace.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              
              <p className="mb-6">
                <strong>Are you the ray</strong><br/>
                That flashes down from the eternal Judge's throne<br/>
                And breaks into the night of the soul<br/>
                That had never known itself?
              </p>

              <p className="mb-6">
                <strong>Mercifully relentlessly</strong><br/>
                It penetrates hidden folds.<br/>
                Alarmed at seeing itself,<br/>
                The self makes space for holy fear,<br/>
                The beginning of that wisdom<br/>
                That comes from on high<br/>
                And anchors us firmly in the heights,<br/>
                Your action,<br/>
                That creates us anew:<br/>
                <strong>Holy Spirit ray that penetrates everything!</strong>
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
              The Holy Spirit as sweet manna reminds us that He is our spiritual nourishment. Just as manna fed the Israelites in the desert, the Holy Spirit feeds our souls with the grace that flows from Christ's heart.
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
            O Holy Spirit, sweet manna from the Son's heart, help me to be nourished by Your grace. May Your spiritual food strengthen me and help me to grow in holiness. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena of the Holy Spirit - Day 3: Sweet Manna"
          text="Join me in praying the Novena of the Holy Spirit - Day 3 focusing on Sweet Manna."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/holy-spirit/day-2"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 2: Eternal Love
          </Link>
          
          
          <Link
            href="/novenas/holy-spirit/day-4"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 4: Eternal Life →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
