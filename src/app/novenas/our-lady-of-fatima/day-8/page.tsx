import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 8: Penance',
  description: 'Pray the Our Lady of Fatima Novena - Day 8 focusing on Penance. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 8',
    'fatima novena day 8',
    'mary novena day 8',
    'our lady novena day 8',
    'fatima prayer penance',
    'day 8 fatima novena',
    'penance mary prayer',
    'fatima novena penance',
    'mary novena penance'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 8: Penance',
    description: 'Pray the Our Lady of Fatima Novena - Day 8 focusing on Penance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-8',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 8: Penance',
    description: 'Pray the Our Lady of Fatima Novena - Day 8 focusing on Penance. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 8: Penance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Fatima Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-fatima" className="hover:text-gray-700">Our Lady of Fatima Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Penance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the Our Lady of Fatima Novena, we pray for the grace to offer sacrifices and penances
            for the conversion of sinners. We ask Mary to help us embrace the cross and offer our sufferings for the salvation of souls.
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
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima and asked the children 
                to make sacrifices and penances for the conversion of sinners. You showed them that through their small sacrifices, 
                they could help save souls.
              </p>

              <p className="mb-6">
                <strong>On this eighth day of our novena, we pray for the grace of penance.</strong> Help us to offer sacrifices 
                and penances for the conversion of sinners. Teach us to embrace the cross and to unite our sufferings 
                with yours and with Jesus' for the salvation of souls.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of penance,</strong> for you stood at the foot of the cross 
                and shared in Jesus' suffering for the salvation of souls. Help us to understand the value of suffering 
                and to offer our crosses with love for the conversion of sinners.
              </p>

              <p className="mb-6">
                <strong>Glory be to the Father and to the Son and to the Holy Spirit, as it was in the beginning is now and ever shall be, world without end.</strong>
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>We also pray for these intentions…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>

              <p className="mb-6">
                <strong>O Mary, conceived without sin, pray for us who have recourse to thee!</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we pray for the grace to offer sacrifices and penances for the conversion of sinners.
                Penance is an act of love that helps us grow closer to God and helps save souls.
              </p>

              <p className="mb-4">
                At Fatima, Mary asked the children to make sacrifices and penances for the conversion of sinners. 
                She told them that many souls go to hell because there is no one to pray and make sacrifices for them. 
                This shows us the importance of penance in the spiritual life.
              </p>

              <p className="mb-4">
                Mary's message at Fatima is a call to penance. She wants us to offer our sufferings and sacrifices 
                for the conversion of sinners and the salvation of souls. She wants us to understand that our small sacrifices 
                can have great power when offered with love.
              </p>

              <p className="mb-4">
                The three children at Fatima responded to Mary's call to penance with great generosity. They offered many sacrifices 
                and penances for the conversion of sinners. They understood that their small sufferings could help save souls.
              </p>

              <p>
                As we pray today, let us ask Mary to help us embrace the cross and offer our sufferings for the conversion of sinners. 
                Let us ask her to help us understand the value of penance and to offer our sacrifices with love for the salvation of souls.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Most Holy Virgin Mary, Queen of the Rosary, help us to offer sacrifices and penances for the conversion of sinners. 
            Help us to embrace the cross and to unite our sufferings with yours and with Jesus' for the salvation of souls. 
            May our penances help to save many souls and bring them back to God. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Fatima Novena - Day 8: Reparation"
          text="Join me in praying the Our Lady of Fatima Novena - Day 8 focusing on Reparation."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Prayer
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Gratitude →
          </Link>
        </div>
      </div>
    </div>
  )
} 