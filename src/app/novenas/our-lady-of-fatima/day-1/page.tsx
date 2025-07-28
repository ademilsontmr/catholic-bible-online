import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 1: Faith',
  description: 'Pray the Our Lady of Fatima Novena - Day 1 focusing on Faith. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 1',
    'fatima novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'fatima prayer faith',
    'day 1 fatima novena',
    'faith mary prayer',
    'fatima novena faith',
    'mary novena faith'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 1: Faith',
    description: 'Pray the Our Lady of Fatima Novena - Day 1 focusing on Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-1',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 1: Faith',
    description: 'Pray the Our Lady of Fatima Novena - Day 1 focusing on Faith. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 1: Faith
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
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of Fatima Novena, we pray for faith in Mary's apparitions at Fatima
            and her message of prayer and penance. We ask Mary to help us trust in her maternal care and her ability
            to bring our prayers to Jesus.
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
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared to the three shepherd children at Fatima 
                and revealed yourself as the Lady of the Rosary. You asked them to pray the Rosary daily for peace in the world 
                and for the conversion of sinners.
              </p>

              <p className="mb-6">
                <strong>On this first day of our novena, we pray for the gift of faith.</strong> Help us to believe with all our hearts 
                in your apparitions at Fatima and in your urgent message for the world. Strengthen our faith in your promise 
                that your Immaculate Heart will triumph.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of faith,</strong> for you believed the angel's message and became the Mother of God. 
                You trusted completely in God's plan and accepted His will with perfect faith. Help us to have the same faith that you had, 
                trusting completely in God's promises and His plan for our lives.
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
                Today we pray for faith in Mary's apparitions at Fatima and her message of prayer and penance.
                Faith is the foundation of our relationship with Mary and with God.
              </p>

              <p className="mb-4">
                The three shepherd children - Lucia, Francisco, and Jacinta - showed remarkable faith when Mary 
                appeared to them at Fatima. They believed in her apparitions even when others doubted, and they 
                faithfully carried out her requests for prayer and penance.
              </p>

              <p className="mb-4">
                Mary's first words to the children were: "Do not be afraid. I will not harm you." These words 
                remind us that Mary comes to us as a loving mother, not to frighten us, but to help us and to 
                guide us closer to her Son, Jesus Christ.
              </p>

              <p className="mb-4">
                Mary's message at Fatima is urgent and relevant for our times. She asks us to pray the Rosary 
                daily for peace in the world and for the conversion of sinners. She promises that her Immaculate 
                Heart will triumph, bringing peace and salvation to the world.
              </p>

              <p>
                As we begin this novena, let us ask Mary to increase our faith. Let us ask her to help us believe 
                in her apparitions at Fatima and in her power to intercede for us. Let us trust that she 
                will bring our prayers to her Son, Jesus Christ, and that her Immaculate Heart will triumph.
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
            O Most Holy Virgin Mary, Queen of the Rosary, increase our faith in your apparitions at Fatima 
            and in your urgent message for the world. Help us to trust completely in your maternal care 
            and to believe that your Immaculate Heart will triumph. May our faith in you lead us closer 
            to your Son, Jesus Christ. Amen.
          </p>
        </section>

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Fatima Novena - Day 1: Faith"
          text="Join me in praying the Our Lady of Fatima Novena - Day 1 focusing on Faith."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Hope →
          </Link>
        </div>
      </div>
    </div>
  )
} 