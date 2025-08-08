import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Fatima Novena - Day 9: Gratitude',
  description: 'Pray the Our Lady of Fatima Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of fatima novena day 9',
    'fatima novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'fatima prayer gratitude',
    'day 9 fatima novena',
    'gratitude mary prayer',
    'fatima novena gratitude',
    'mary novena gratitude'
  ],
  openGraph: {
    title: 'Our Lady of Fatima Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Fatima Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-fatima/day-9',
  },
  twitter: {
    title: 'Our Lady of Fatima Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Fatima Novena - Day 9 focusing on Gratitude. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfFatimaNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Fatima Novena – Day 9: Gratitude
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Fatima Novena, we pray with gratitude for Mary's apparitions at Fatima
            and her maternal care. We thank her for her intercession and for the graces we have received during this novena.
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
                <strong>O Most Holy Virgin Mary, Queen of the Rosary,</strong> you appeared at Fatima and gave us your urgent message 
                of prayer, penance, and conversion. You showed us your Immaculate Heart and promised that it would triumph. 
                We thank you for your apparitions and for your maternal care.
              </p>

              <p className="mb-6">
                <strong>On this final day of our novena, we pray with gratitude.</strong> We thank you for all the graces 
                we have received during these nine days of prayer. We thank you for your intercession and for your promise 
                that your Immaculate Heart will triumph.
              </p>

              <p className="mb-6">
                <strong>O Mary, you are the perfect example of gratitude,</strong> for you always gave thanks to God 
                for all His gifts and blessings. Help us to be grateful for all the graces we have received 
                and to thank God and you for your maternal care and intercession.
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
                Today we pray with gratitude for Mary's apparitions at Fatima and her maternal care.
                Gratitude is the key that opens our hearts to receive more graces from God and from Mary.
              </p>

              <p className="mb-4">
                At Fatima, Mary gave us a precious gift - her apparitions and her urgent message for our times. 
                She showed us her Immaculate Heart and promised that it would triumph. She asked us to pray the Rosary daily, 
                to make sacrifices for the conversion of sinners, and to trust in her intercession.
              </p>

              <p className="mb-4">
                Mary's message at Fatima is a gift of love. She wants us to grow closer to her and to her Son, Jesus Christ. 
                She wants us to help save souls and bring peace to the world. She wants us to trust in her promise 
                that her Immaculate Heart will triumph.
              </p>

              <p className="mb-4">
                The three children at Fatima responded to Mary's gift with gratitude and love. They were grateful 
                for her apparitions and for her message. They showed their gratitude by faithfully carrying out 
                her requests and by spreading devotion to her Immaculate Heart.
              </p>

              <p>
                As we conclude this novena, let us thank Mary for all the graces we have received. Let us thank her 
                for her apparitions at Fatima and for her maternal care. Let us promise to continue to pray the Rosary daily, 
                to make sacrifices for the conversion of sinners, and to trust in her promise that her Immaculate Heart will triumph.
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
            O Most Holy Virgin Mary, Queen of the Rosary, we thank you for your apparitions at Fatima and for your maternal care. 
            We thank you for all the graces we have received during this novena. Help us to continue to pray the Rosary daily, 
            to make sacrifices for the conversion of sinners, and to trust in your promise that your Immaculate Heart will triumph. 
            May we always be grateful for your intercession and your love. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Fatima Novena! As you continue your spiritual journey, 
            may your heart be filled with faith, hope, love, reparation, conversion, peace, prayer, penance, and gratitude. 
            May Our Lady of Fatima continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Fatima Novena - Day 9: Triumph"
          text="Join me in praying the Our Lady of Fatima Novena - Day 9 focusing on Triumph."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-fatima/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Penance
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-fatima"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Fatima Novena" />
    </div>
  )
} 