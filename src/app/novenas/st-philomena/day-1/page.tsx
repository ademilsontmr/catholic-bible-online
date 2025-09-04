import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Philomena - Day 1: Virgin and Martyr',
  description: "Pray the Novena to St. Philomena - Day 1 focusing on Virgin and Martyr. Join in praying the traditional novena to seek St. Philomena's intercession.",
  keywords: [
    'novena to st philomena day 1',
    'st philomena novena day 1',
    'philomena novena day 1',
    'st philomena prayer day 1',
    'day 1 st philomena novena',
    'virgin and martyr prayer',
    'st philomena novena virgin and martyr',
    'philomena novena virgin and martyr'
  ],
  openGraph: {
    title: 'Novena to St. Philomena - Day 1: Virgin and Martyr',
    description: 'Pray the Novena to St. Philomena - Day 1 focusing on Virgin and Martyr. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-philomena/day-1',
  },
  twitter: {
    title: 'Novena to St. Philomena - Day 1: Virgin and Martyr',
    description: 'Pray the Novena to St. Philomena - Day 1 focusing on Virgin and Martyr. Join in praying the traditional novena.',
  }
}

export default function StPhilomenaNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Philomena – Day 1: Virgin and Martyr
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Philomena to seek her intercession and miraculous help.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-philomena" className="hover:text-gray-700">Novena to St. Philomena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Virgin and Martyr</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Novena to St. Philomena, we focus on her as a virgin and martyr. St. Philomena was always pleasing in God's sight by her eminent chastity and the profession of every virtue. Her life was marked by unwavering faith and courage.
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
                <strong>We beseech Thee, O Lord, to grant us the pardon of our sins by the intercession of Saint Philomena, virgin and martyr, who was always pleasing in Thy sight by her eminent chastity and by the profession of every virtue. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Illustrious virgin and martyr, Saint Philomena,</strong> behold me prostrate before the throne whereupon it has pleased the Most Holy Trinity to place thee. Full of confidence in thy protection, I entreat thee to intercede for me with God, from the heights of Heaven deign to cast a glance upon thy humble client! Spouse of Christ, sustain me in suffering, fortify me in temptation, protect me in the dangers surrounding me, obtain for me the graces necessary to me, and in particular
              </p>

              <p className="mb-6">
                <strong>(Here specify your petition).</strong>
              </p>

              <p className="mb-6">
                <strong>Above all, assist me at the hour of my death. Saint Philomena, powerful with God, pray for us. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O God, Most Holy Trinity, we thank Thee for the graces Thou didst bestow upon the Blessed Virgin Mary, and upon Thy handmaid Philomena, through whose intercession we implore Thy Mercy. Amen.</strong>
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
              St. Philomena's virginity and martyrdom are a testament to her complete dedication to Christ. She chose to remain pure and faithful even unto death, showing us the value of chastity and courage.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Philomena's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Philomena's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Philomena</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Philomena's miraculous powers and her ability to help you.
                Turn to her with confidence in every need, especially for protection and purity.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Philomena will not fail to help 
                those who turn to her with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Philomena. She wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Philomena for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Philomena, virgin and martyr, help me to imitate your eminent chastity and profession of every virtue. May your example of purity and courage inspire me to remain faithful to Christ in all circumstances. Guide me through these nine days of prayer, that I may grow closer to God and experience His grace in my life. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena to St. Philomena - Day 1: Virgin and Martyr" 
            url="/novenas/st-philomena/day-1"
            excerpt="Join me in praying the Novena to St. Philomena - Day 1 focusing on Virgin and Martyr." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/st-philomena/day-2"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Eminent Chastity →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
