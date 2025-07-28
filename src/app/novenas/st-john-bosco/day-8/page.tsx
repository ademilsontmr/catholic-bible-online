import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of St. John Bosco - Day 8: Divine Will',
  description: "Pray the Novena in Honor of St. John Bosco - Day 8 focusing on Divine Will. Join in praying the traditional novena to seek St. John Bosco's intercession.",
  keywords: [
    'novena in honor of st john bosco day 8',
    'st john bosco novena day 8',
    'john bosco novena day 8',
    'don bosco novena day 8',
    'st john bosco prayer day 8',
    'day 8 st john bosco novena',
    'divine will prayer',
    'st john bosco novena divine will',
    'john bosco novena divine will'
  ],
  openGraph: {
    title: 'Novena in Honor of St. John Bosco - Day 8: Divine Will',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 8 focusing on Divine Will. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-bosco/day-8',
  },
  twitter: {
    title: 'Novena in Honor of St. John Bosco - Day 8: Divine Will',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 8 focusing on Divine Will. Join in praying the traditional novena.',
  }
}

export default function StJohnBoscoNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of St. John Bosco – Day 8: Divine Will
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Divine Will</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day, we focus on resignation to God's will. We ask St. John Bosco to help us accept God's will in all circumstances, even when it is difficult to understand.
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
              St. John Bosco always sought to do God's will and accepted whatever God sent him, whether it was success or failure, joy or suffering. His trust in God's providence never wavered.
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
            O glorious St. John Bosco, help me to accept God's will in all circumstances like you did. May your trust in God's providence inspire me to resign myself to God's will, even when it is difficult to understand. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena in Honor of St. John Bosco - Day 8: Divine Will"
          text="Join me in praying the Novena in Honor of St. John Bosco - Day 8 focusing on Divine Will."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-john-bosco/day-7"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: Youth Ministry
          </Link>
          
          
          <Link
            href="/novenas/st-john-bosco/day-9"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Gratitude and Thanksgiving →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
