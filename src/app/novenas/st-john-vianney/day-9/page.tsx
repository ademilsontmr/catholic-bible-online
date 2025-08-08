import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of Saint John Marie Vianney - Day 9: Eternal Salvation',
  description: "Pray the Novena in Honor of Saint John Marie Vianney - Day 9 focusing on Eternal Salvation. Join in praying the traditional novena to seek St. John Vianney's intercession.",
  keywords: [
    'novena in honor of saint john marie vianney day 9',
    'st john vianney novena day 9',
    'john vianney novena day 9',
    'st john vianney prayer day 9',
    'day 9 st john vianney novena',
    'eternal salvation prayer',
    'st john vianney novena eternal salvation',
    'john vianney novena eternal salvation'
  ],
  openGraph: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 9: Eternal Salvation',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 9 focusing on Eternal Salvation. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-vianney/day-9',
  },
  twitter: {
    title: 'Novena in Honor of Saint John Marie Vianney - Day 9: Eternal Salvation',
    description: 'Pray the Novena in Honor of Saint John Marie Vianney - Day 9 focusing on Eternal Salvation. Join in praying the traditional novena.',
  }
}

export default function StJohnVianneyNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of Saint John Marie Vianney – Day 9: Eternal Salvation
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Salvation</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on St. John Vianney's eternal glory and his message that we should work and fight as long as we are in the world. He teaches us to work for the salvation of our souls and to spread the good news.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                O Holy Priest of Ars, your precious remains are contained in a magnificent reliquary, the donation from the priests of France. But this earthly glory is only a very pale image of the unspeakable glory which you are enjoying with God. During the time you were on earth, you used to repeat in your dejected hours, 'one will rest in the other life." It is done, you are in eternal peace, and eternal happiness. I desire to follow you one day. Until then, I hear you saying to me: "You should work and fight as long as you are in the world." Teach me then to work for the salvation of my soul, to spread the good news and good example and to do good towards those around me in order that I will receive the happiness of the Elect with you. Holy Priest of Ars, I have confidence in your intercession. Pray for me during this novena especially for ... (mention silently your special intentions). Our Father, Hail Mary, Glory Be. O St John Vianney, Patron of Priests, pray for us and for all priests!
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
              St. John Vianney's eternal salvation reminds us that our ultimate goal is to be with God in heaven. His example teaches us to work for the salvation of our souls, spread the good news, and do good towards those around us.
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
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of Saint John Marie Vianney. 
            May you always remember his example of holiness and his miraculous help in all your needs. 
            May you continue to grow in holiness and virtue through his intercession.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena in Honor of Saint John Marie Vianney! As you continue your spiritual journey, 
            may your heart be filled with deep faith, confidence in prayer, charity towards neighbor, horror of sin, 
            frequent confession, Eucharistic devotion, victory over temptation, purity of heart, and eternal salvation. 
            May St. John Vianney continue to watch over you and work miracles in your life.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena in Honor of Saint John Marie Vianney - Day 9: Eternal Salvation"
          text="Join me in praying the Novena in Honor of Saint John Marie Vianney - Day 9 focusing on Eternal Salvation."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-john-vianney/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Holiness
          </Link>
          
          <Link 
            href="/novenas/st-john-vianney"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to St. John Vianney" />
    </div>
  )
}


