import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena in Honor of St. John Bosco - Day 9: Gratitude and Thanksgiving',
  description: "Pray the Novena in Honor of St. John Bosco - Day 9 focusing on Gratitude and Thanksgiving. Join in praying the traditional novena to seek St. John Bosco's intercession.",
  keywords: [
    'novena in honor of st john bosco day 9',
    'st john bosco novena day 9',
    'john bosco novena day 9',
    'don bosco novena day 9',
    'st john bosco prayer day 9',
    'day 9 st john bosco novena',
    'gratitude and thanksgiving prayer',
    'st john bosco novena gratitude and thanksgiving',
    'john bosco novena gratitude and thanksgiving'
  ],
  openGraph: {
    title: 'Novena in Honor of St. John Bosco - Day 9: Gratitude and Thanksgiving',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 9 focusing on Gratitude and Thanksgiving. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-john-bosco/day-9',
  },
  twitter: {
    title: 'Novena in Honor of St. John Bosco - Day 9: Gratitude and Thanksgiving',
    description: 'Pray the Novena in Honor of St. John Bosco - Day 9 focusing on Gratitude and Thanksgiving. Join in praying the traditional novena.',
  }
}

export default function StJohnBoscoNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena in Honor of St. John Bosco – Day 9: Gratitude and Thanksgiving
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude and Thanksgiving</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on gratitude and thanksgiving. We thank St. John Bosco for his intercession and for all the graces we have received during these nine days of prayer.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

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
              St. John Bosco was always grateful to God for the many graces and blessings he received. His life was a constant song of thanksgiving to God for His goodness and mercy.
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
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of St. John Bosco. 
            May you always remember his powerful protection and his guidance in all your needs. 
            May you continue to grow in holiness and virtue through his intercession.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena in Honor of St. John Bosco! As you continue your spiritual journey, 
            may your heart be filled with trust, spiritual graces, temporal assistance, Eucharistic devotion, 
            Marian devotion, compassion, youth ministry guidance, divine will acceptance, and gratitude. 
            May St. John Bosco continue to watch over you and guide you in all your endeavors.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena in Honor of St. John Bosco - Day 9: Gratitude and Thanksgiving"
          text="Join me in praying the Novena in Honor of St. John Bosco - Day 9 focusing on Gratitude and Thanksgiving."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-john-bosco/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Youth
          </Link>
          
          <Link 
            href="/novenas/st-john-bosco"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to St. John Bosco" />
    </div>
  )
}


