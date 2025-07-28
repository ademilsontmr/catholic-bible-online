import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of Saint John Marie Vianney - Day 6: Eucharistic Devotion',
  description: "Pray the Novena in Honor of Saint John Marie Vianney - Day 6 focusing on Eucharistic Devotion. Join in praying the traditional novena to seek St. John Vianney's intercession.",
  keywords: [
    'novena in honor of saint john marie vianney day 6',
    'st john vianney novena day 6',
    'john vianney novena day 6',
    'st john vianney prayer day 6',
    'day 6 st john vianney novena',
    'eucharistic devotion prayer',
    'st john vianney novena eucharistic devotion',
    'john vianney novena eucharistic devotion'
  ],
  openGraph: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 6: Eucharistic Devotion',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 6 focusing on Eucharistic Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-vianney/day-6',
  },
  twitter: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 6: Eucharistic Devotion',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 6 focusing on Eucharistic Devotion. Join in praying the traditional novena.',
  }
}

export default function StJohnVianneyNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of Saint John Marie Vianney – Day 6: Eucharistic Devotion
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eucharistic Devotion</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on St. John Vianney's great joy in distributing the Eucharist to pilgrims. His only comfort in this world was the real presence of Jesus in the tabernacle, and he received Holy Communion with great love each day.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                O Holy Priest of Ars, whose only comfort in this world was the real presence of Jesus in the tabernacle, was it not your great joy to distribute the Eucharist to the pilgrims who visited you? You refused Communion to the souls who refused to reform but to souls of goodwill you opened wide the doors of the Eucharistic Feast. You, who each day at Holy Mass received Holy Communion with great loves, give me some of your fervor. With freedom from mortal sin, obtain for me a sincere desire to profit from receiving Holy Communion. Holy Priest of Ars, I have confidence in your intercession. Pray for me during this novena especially for... (mention silently your special intentions). Our Father, Hail Mary, Glory Be.
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
              St. John Vianney's Eucharistic devotion reminds us that the Eucharist should be our greatest consolation. His fervor in receiving Holy Communion inspires us to approach this sacrament with sincere desire and freedom from mortal sin.
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
            O Saint John Marie Vianney, help me to develop fervor in receiving Holy Communion. May your Eucharistic devotion inspire me to approach this sacrament with sincere desire and love. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena in Honor of Saint John Marie Vianney - Day 6: Eucharistic Devotion"
          text="Join me in praying the Novena in Honor of Saint John Marie Vianney - Day 6 focusing on Eucharistic Devotion."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-john-vianney/day-5"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 5: Frequent Confession
          </Link>
          
          
          <Link
            href="/novenas/st-john-vianney/day-7"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 7: Victory Over Temptation →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
