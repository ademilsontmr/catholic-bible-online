import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 6: Peace',
  description: 'Pray the Our Lady of Fatima Novena - Day 6 focusing on Peace. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 6',
    'fatima novena day 6',
    'mary novena day 6',
    'our lady novena day 6',
    'fatima prayer peace',
    'day 6 fatima novena',
    'peace mary prayer',
    'fatima novena peace',
    'mary novena peace'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 6: Peace',
    description: 'Pray the Our Lady of Fatima Novena - Day 6 focusing on Peace. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-6',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 6: Peace',
    description: 'Pray the Our Lady of Fatima Novena - Day 6 focusing on Peace. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 6: Peace
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Peace</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Our Lady of Fatima Novena, we pray for peace in the world
            and for an end to war and violence. We ask Mary to help us work for peace in our hearts and in the world.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima and asked the children 
                to pray the Rosary daily for peace in the world. You promised that through prayer and penance, 
                peace would come to our troubled world.
              </p>

              <p className="mb-6">
                <strong>On this sixth day of our novena, we pray for peace.</strong> Help us to pray fervently 
                for peace in the world and for an end to war and violence. Teach us to be instruments of peace 
                in our families, our communities, and our world.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the Queen of Peace,</strong> for you bring the Prince of Peace, Jesus Christ, 
                into the world. Help us to find true peace in your Son and to share that peace with others. 
                Help us to work for peace in our own hearts and in the world around us.
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
                Today we pray for peace in the world and for an end to war and violence.
                Peace is a gift from God that begins in our hearts and spreads to the world around us.
              </p>

              <p className="mb-4">
                At Fatima, Mary asked the children to pray the Rosary daily for peace in the world. 
                She promised that through prayer and penance, peace would come to our troubled world. 
                This shows us that peace is not just the absence of war, but the presence of God's love.
              </p>

              <p className="mb-4">
                Mary's message at Fatima is a message of peace. She wants us to find true peace in her Son, Jesus Christ, 
                and to share that peace with others. She wants us to be instruments of peace in the world.
              </p>

              <p className="mb-4">
                The three children at Fatima understood the importance of praying for peace. They prayed the Rosary daily 
                for peace in the world and offered many sacrifices for this intention. They knew that their prayers 
                could help bring peace to a world torn by war and violence.
              </p>

              <p>
                As we pray today, let us ask Mary to help us work for peace. Let us ask her to help us find true peace 
                in Jesus Christ and to share that peace with others. Let us pray for peace in our hearts, our families, 
                our communities, and our world.
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
            O Most Holy Virgin Mary, Queen of the Rosary and Queen of Peace, help us to pray fervently for peace in the world. 
            Help us to find true peace in your Son, Jesus Christ, and to be instruments of peace in our families and communities. 
            May our prayers help to bring peace to our troubled world. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of Fatima Novena - Day 6: Conversion" 
            url="/novenas/our-lady-of-fatima/day-6"
            excerpt="Join me in praying the Our Lady of Fatima Novena - Day 6 focusing on Conversion." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Conversion
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Prayer →
          </Link>
        </div>
      </div>
    </div>
  )
} 