import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 2: Hope',
  description: 'Pray the Our Lady of Fatima Novena - Day 2 focusing on Hope. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 2',
    'fatima novena day 2',
    'mary novena day 2',
    'our lady novena day 2',
    'fatima prayer hope',
    'day 2 fatima novena',
    'hope mary prayer',
    'fatima novena hope',
    'mary novena hope'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 2: Hope',
    description: 'Pray the Our Lady of Fatima Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-2',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 2: Hope',
    description: 'Pray the Our Lady of Fatima Novena - Day 2 focusing on Hope. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 2: Hope
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hope</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of Fatima Novena, we pray for hope in the triumph of Mary's Immaculate Heart
            and the conversion of sinners. We ask Mary to help us hope in her promise that her Immaculate Heart will triumph.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima and promised that your Immaculate Heart would triumph. 
                You gave us hope that through prayer and penance, peace would come to the world and sinners would be converted.
              </p>

              <p className="mb-6">
                <strong>On this second day of our novena, we pray for the gift of hope.</strong> Help us to hope in your promise 
                that your Immaculate Heart will triumph. Give us hope that through your intercession, peace will come to our troubled world 
                and that sinners will be converted and return to your Son, Jesus Christ.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are our hope,</strong> for you are the Mother of God and our mother. You never abandon those who turn to you. 
                Help us to place all our hope in you and in your promise that your Immaculate Heart will triumph. 
                Give us the hope that through your intercession, all our needs will be met.
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
                Today we pray for hope in the triumph of Mary's Immaculate Heart and the conversion of sinners.
                Hope is the virtue that sustains us in difficult times and keeps us focused on God's promises.
              </p>

              <p className="mb-4">
                At Fatima, Mary gave us a message of hope. She promised that her Immaculate Heart would triumph, 
                bringing peace to the world and conversion to sinners. This promise gives us hope that no matter 
                how dark the world may seem, good will ultimately triumph over evil.
              </p>

              <p className="mb-4">
                Mary's promise at Fatima is not just for the future, but for our present needs as well. 
                She wants us to hope in her intercession for our daily struggles and difficulties. 
                She wants us to trust that she will help us in all our needs.
              </p>

              <p className="mb-4">
                The three children at Fatima showed great hope in Mary's promises. Even when they faced persecution 
                and doubt from others, they continued to hope in Mary's message and to trust in her care for them.
              </p>

              <p>
                As we pray today, let us ask Mary to increase our hope. Let us ask her to help us trust in her promise 
                that her Immaculate Heart will triumph. Let us hope that through her intercession, our world will find peace 
                and that all sinners will be converted and return to God.
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
            O Most Holy Virgin Mary, Queen of the Rosary, increase our hope in your promise that your Immaculate Heart will triumph. 
            Help us to trust completely in your maternal care and to hope that through your intercession, 
            peace will come to our world and sinners will be converted. May our hope in you lead us closer 
            to your Son, Jesus Christ. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Fatima Novena - Day 2: Hope"
          text="Join me in praying the Our Lady of Fatima Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Faith
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Love →
          </Link>
        </div>
      </div>
    </div>
  )
} 