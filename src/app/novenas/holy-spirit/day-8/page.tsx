import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena of the Holy Spirit - Day 8: Creator of All',
  description: "Pray the Novena of the Holy Spirit - Day 8 focusing on Creator of All. Join in praying the traditional novena to seek the Holy Spirit's intercession.",
  keywords: [
    'novena of the holy spirit day 8',
    'holy spirit novena day 8',
    'spirit novena day 8',
    'holy spirit prayer day 8',
    'day 8 holy spirit novena',
    'creator of all prayer',
    'holy spirit novena creator of all',
    'spirit novena creator of all'
  ],
  openGraph: {
    title: 'Novena of the Holy Spirit - Day 8: Creator of All',
    description: 'Pray the Novena of the Holy Spirit - Day 8 focusing on Creator of All. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-spirit/day-8',
  },
  twitter: {
    title: 'Novena of the Holy Spirit - Day 8: Creator of All',
    description: 'Pray the Novena of the Holy Spirit - Day 8 focusing on Creator of All. Join in praying the traditional novena.',
  }
}

export default function HolySpiritNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena of the Holy Spirit – Day 8: Creator of All
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Creator of All</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day, we focus on the Holy Spirit as the one who created the unclouded mirror next to the Almighty's throne. He bends over the fairest work of His creation, and radiantly His own gaze is illumined in return.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

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
                Of nothingness, from which you raised it to the light.<br/>
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
              The Holy Spirit as Creator of all reminds us that He is the source of all beauty and goodness in creation. He looks upon His works with love, especially upon the pure beauty of the Virgin Mary.
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
            O Holy Spirit, Creator of all, help me to reflect Your beauty and goodness. May Your creative power work in me to make me a mirror of Your divine love. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena of the Holy Spirit - Day 8: Creator of All"
          text="Join me in praying the Novena of the Holy Spirit - Day 8 focusing on Creator of All."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/holy-spirit/day-7"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: God's Molding Hand
          </Link>
          
          
          <Link
            href="/novenas/holy-spirit/day-9"
            className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Eternal Jubilation →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
