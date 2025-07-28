import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 5: Conversion',
  description: 'Pray the Our Lady of Fatima Novena - Day 5 focusing on Conversion. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 5',
    'fatima novena day 5',
    'mary novena day 5',
    'our lady novena day 5',
    'fatima prayer conversion',
    'day 5 fatima novena',
    'conversion mary prayer',
    'fatima novena conversion',
    'mary novena conversion'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 5: Conversion',
    description: 'Pray the Our Lady of Fatima Novena - Day 5 focusing on Conversion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-5',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 5: Conversion',
    description: 'Pray the Our Lady of Fatima Novena - Day 5 focusing on Conversion. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 5: Conversion
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Conversion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Our Lady of Fatima Novena, we pray for the conversion of sinners
            and for all who have turned away from God. We ask Mary to help us pray for the salvation of souls.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima and showed the children 
                a vision of hell, where many souls go because there is no one to pray and make sacrifices for them. 
                Your heart burns with love for sinners and you desire their conversion.
              </p>

              <p className="mb-6">
                <strong>On this fifth day of our novena, we pray for the conversion of sinners.</strong> Help us to pray 
                fervently for all who have turned away from God and for those who are in danger of losing their souls. 
                Teach us to offer our prayers and sacrifices for their conversion.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the refuge of sinners,</strong> for you never abandon those who turn to you, 
                no matter how great their sins may be. Help us to have the same love for sinners that you have, 
                and to pray for their conversion with the same fervor that you pray for them.
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
                Today we pray for the conversion of sinners and for all who have turned away from God.
                Conversion is the turning of the heart back to God and the beginning of a new life in Christ.
              </p>

              <p className="mb-4">
                At Fatima, Mary showed the children a vision of hell and told them that many souls go there 
                because there is no one to pray and make sacrifices for them. This shows us the urgency 
                of praying for the conversion of sinners and the importance of our prayers and sacrifices.
              </p>

              <p className="mb-4">
                Mary's message at Fatima is a call to conversion. She asks us to pray the Rosary daily 
                and to make sacrifices for the conversion of sinners. She wants us to be instruments 
                of God's mercy in the world.
              </p>

              <p className="mb-4">
                The three children at Fatima understood the importance of praying for sinners. They offered 
                many sacrifices and penances for the conversion of souls. They prayed with great fervor 
                for those who were far from God.
              </p>

              <p>
                As we pray today, let us ask Mary to help us pray for the conversion of sinners. Let us ask her 
                to give us the same love for souls that she has, and to help us offer our prayers and sacrifices 
                for the salvation of those who are far from God.
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
            O Most Holy Virgin Mary, Queen of the Rosary, help us to pray fervently for the conversion of sinners. 
            Help us to offer our prayers and sacrifices for the salvation of souls. May our prayers help to bring 
            many souls back to God and to your Son, Jesus Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Fatima Novena - Day 5: Penance"
          text="Join me in praying the Our Lady of Fatima Novena - Day 5 focusing on Penance."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Reparation
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Peace →
          </Link>
        </div>
      </div>
    </div>
  )
} 