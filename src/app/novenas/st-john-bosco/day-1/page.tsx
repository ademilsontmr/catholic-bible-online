import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of St. John Bosco - Day 1: Trust and Confidence',
  description: "Pray the Novena in Honor of St. John Bosco - Day 1 focusing on Trust and Confidence. Join in praying the traditional novena to seek St. John Bosco's intercession.",
  keywords: [
    'novena in honor of st john bosco day 1',
    'st john bosco novena day 1',
    'john bosco novena day 1',
    'don bosco novena day 1',
    'st john bosco prayer day 1',
    'day 1 st john bosco novena',
    'trust and confidence prayer',
    'st john bosco novena trust and confidence',
    'john bosco novena trust and confidence'
  ],
  openGraph: {
    title: 'Novena in Honor of St. John Bosco - Day 1: Trust and Confidence',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 1 focusing on Trust and Confidence. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-bosco/day-1',
  },
  twitter: {
    title: 'Novena in Honor of St. John Bosco - Day 1: Trust and Confidence',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 1 focusing on Trust and Confidence. Join in praying the traditional novena.',
  }
}

export default function StJohnBoscoNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of St. John Bosco – Day 1: Trust and Confidence
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena in Honor of St. John Bosco to seek his intercession and powerful protection.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-john-bosco" className="hover:text-gray-700">Novena in Honor of St. John Bosco</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Trust and Confidence</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena in Honor of St. John Bosco, we focus on trust and confidence. We appeal with confidence to St. John Bosco, knowing that he has great power with God and will not fail to help those who turn to him with trust.
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
                <strong>Father and Teacher of the Young</strong>
              </p>

              <p className="mb-6">
                <strong>In need of special help, I appeal with confidence to you, Saint John Bosco,</strong> for I require not
                only spiritual graces, but also temporal ones, and particularly...
              </p>

              <p className="mb-6">
                <strong>(add your personal intentions here)</strong>
              </p>

              <p className="mb-6">
                <strong>May you, who on earth had such great devotion to Jesus in the Blessed Sacrament and to
                Mary Help of Christians,</strong> and who always had compassion for those who were suffering,
                obtain from Jesus and His Heavenly Mother the grace I now request, and also a sincere
                resignation to the Will of God.
              </p>

              <p className="mb-6">
                <strong>(Recite the Our Father, Hail Mary, and Glory Be)</strong>
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
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. John Bosco was a man of great trust and confidence in God. Despite many difficulties and obstacles, he never lost faith in God's providence and continued to work tirelessly for the salvation of souls, especially young people.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. John Bosco's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. John Bosco's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. John Bosco</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. John Bosco's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, both spiritual and temporal.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. John Bosco will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. John Bosco. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. John Bosco for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O glorious St. John Bosco, help me to trust in your powerful intercession with confidence. May your example of complete trust in God inspire me to turn to you with confidence in every need. Guide me through these nine days of prayer, that I may grow closer to God and experience His grace in my life. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena in Honor of St. John Bosco - Day 1: Trust and Confidence" 
            url="/novenas/st-john-bosco/day-1"
            excerpt="Join me in praying the Novena in Honor of St. John Bosco - Day 1 focusing on Trust and Confidence." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/st-john-bosco/day-2"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Spiritual Graces →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
