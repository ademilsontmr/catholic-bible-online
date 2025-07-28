import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of Saint John Marie Vianney - Day 8: Purity of Heart',
  description: "Pray the Novena in Honor of Saint John Marie Vianney - Day 8 focusing on Purity of Heart. Join in praying the traditional novena to seek St. John Vianney's intercession.",
  keywords: [
    'novena in honor of saint john marie vianney day 8',
    'st john vianney novena day 8',
    'john vianney novena day 8',
    'st john vianney prayer day 8',
    'day 8 st john vianney novena',
    'purity of heart prayer',
    'st john vianney novena purity of heart',
    'john vianney novena purity of heart'
  ],
  openGraph: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 8: Purity of Heart',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 8 focusing on Purity of Heart. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-vianney/day-8',
  },
  twitter: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 8: Purity of Heart',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 8 focusing on Purity of Heart. Join in praying the traditional novena.',
  }
}

export default function StJohnVianneyNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of Saint John Marie Vianney – Day 8: Purity of Heart
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Purity of Heart</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on St. John Vianney's modesty and exquisite purity that radiated from his body. He preached about these beautiful virtues with such charm and enthusiasm, comparing them to the perfume of a vineyard in bloom.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                O Holy Priest of Ars, a witness of your life made this magnificent praise of you: 'We would have taken him for an angel in a mortal body." You so edified others: the modesty and the exquisite purity radiated from your body. With such charm and with such enthusiasm you preached to others about these beautiful virtues which you said resembled the perfume of a vineyard in bloom. Please I beg you to join your entreaties to those of Mary Immaculate and Saint Philomena in order that I guard always, as God asks me, the purity of my heart. You, who have directed so many souls towards the heights of virtue, defend me in temptations and obtain for me the strength to conquer them. Holy Priest of Ars, I have confidence in your intercession. Pray for me during this novena especially for ... (mention silently your special intentions). Our Father, Hail Mary, Glory Be.
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
              St. John Vianney's purity of heart reminds us that we must guard this virtue as God asks us. His example teaches us to seek the intercession of Mary Immaculate and St. Philomena to maintain purity in our hearts.
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
            O Saint John Marie Vianney, help me to guard the purity of my heart as God asks. May your example of purity inspire me to seek the intercession of Mary Immaculate and St. Philomena. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena in Honor of Saint John Marie Vianney - Day 8: Purity of Heart"
          text="Join me in praying the Novena in Honor of Saint John Marie Vianney - Day 8 focusing on Purity of Heart."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-john-vianney/day-7"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: Victory Over Temptation
          </Link>
          
          
          <Link
            href="/novenas/st-john-vianney/day-9"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Eternal Salvation →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
