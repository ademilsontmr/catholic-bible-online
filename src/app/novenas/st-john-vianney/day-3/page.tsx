import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of Saint John Marie Vianney - Day 3: Charity Towards Neighbor',
  description: "Pray the Novena in Honor of Saint John Marie Vianney - Day 3 focusing on Charity Towards Neighbor. Join in praying the traditional novena to seek St. John Vianney's intercession.",
  keywords: [
    'novena in honor of saint john marie vianney day 3',
    'st john vianney novena day 3',
    'john vianney novena day 3',
    'st john vianney prayer day 3',
    'day 3 st john vianney novena',
    'charity towards neighbor prayer',
    'st john vianney novena charity towards neighbor',
    'john vianney novena charity towards neighbor'
  ],
  openGraph: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 3: Charity Towards Neighbor',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 3 focusing on Charity Towards Neighbor. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-vianney/day-3',
  },
  twitter: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 3: Charity Towards Neighbor',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 3 focusing on Charity Towards Neighbor. Join in praying the traditional novena.',
  }
}

export default function StJohnVianneyNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of Saint John Marie Vianney – Day 3: Charity Towards Neighbor
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena in Honor of Saint John Marie Vianney to seek his intercession for priests and spiritual growth.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-john-vianney" className="hover:text-gray-700">Novena in Honor of Saint John Marie Vianney</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Charity Towards Neighbor</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day, we focus on St. John Vianney's great charity towards his neighbor. He could not preach on the Love of God without burning tears of love, and he sacrificed himself to his neighbor by consoling, absolving and sanctifying them.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Saint John Marie Baptist Vianney because of your love of God you showed great charity towards your neighbor. You could not preach on the Love of God without burning tears of love. During your last years, it seemed as though you could not talk about any thing else or live for anything else. Thus you sacrificed yourself to your neighbor by consoling, absolving and sanctifying them to the limits of your strength. Your charity inspires me to greater love of God, a love which is shown more by acts then by words. Help me to love my neighbor generously as Christ loves them. Holy Priest of Ars, I have confidence in your intercession. Pray for me during this novena especially for ... (mention silently your special intentions). Our Father, Hail Mary, Glory Be.
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
              St. John Vianney's charity inspires us to greater love of God, a love which is shown more by acts than by words. His example teaches us to love our neighbor generously as Christ loves them.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. John Vianney's life and virtues, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. John Vianney's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. John Vianney</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. John Vianney's powerful intercession and his ability to help you.
                Turn to him with confidence in every need, especially for spiritual growth and priestly vocations.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. John Vianney will not fail to help 
                those who turn to him with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. John Vianney. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. John Vianney for his intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Saint John Marie Vianney, help me to practice charity towards my neighbor as you did. May your love for God and neighbor inspire me to show love more by acts than by words. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena in Honor of Saint John Marie Vianney - Day 3: Charity Towards Neighbor" 
            url="/novenas/st-john-vianney/day-3"
            excerpt="Join me in praying the Novena in Honor of Saint John Marie Vianney - Day 3 focusing on Charity Towards Neighbor." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-john-vianney/day-2"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 2: Confidence in Prayer
          </Link>
          
          
          <Link
            href="/novenas/st-john-vianney/day-4"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 4: Horror of Sin →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
