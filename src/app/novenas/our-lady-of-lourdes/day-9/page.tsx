import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to Our Lady of Lourdes - Day 9: Gratitude',
  description: 'Pray Day 9 of the Novena to Our Lady of Lourdes focusing on Gratitude. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'novena to our lady of lourdes day 9',
    'lourdes novena day 9',
    'our lady of lourdes day 9',
    'gratitude lourdes novena',
    'mary novena day 9',
    'lourdes prayer gratitude',
    'day 9 lourdes novena',
    'gratitude mary prayer',
    'lourdes novena gratitude',
    'mary novena gratitude'
  ],
  openGraph: {
    title: 'Novena to Our Lady of Lourdes - Day 9: Gratitude',
    description: 'Pray Day 9 of the Novena to Our Lady of Lourdes focusing on Gratitude. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-lourdes/day-9',
  },
  twitter: {
    title: 'Novena to Our Lady of Lourdes - Day 9: Gratitude',
    description: 'Pray Day 9 of the Novena to Our Lady of Lourdes focusing on Gratitude. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfLourdesNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to Our Lady of Lourdes – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to Our Lady of Lourdes to seek Mary's miraculous intercession and healing grace.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-lourdes" className="hover:text-gray-700">Our Lady of Lourdes Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Novena to Our Lady of Lourdes, we pray with gratitude - gratitude for Mary's 
            intercession, gratitude for the graces we have received, and gratitude for God's love and mercy. 
            We thank Mary for her maternal care and for always being ready to help us.
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
                <strong>O Most Gracious Virgin Mary, Mother of God and our Mother,</strong> 
                we thank you with all our hearts for your love and intercession during this novena. 
                You have been our guide and our comfort, and we are grateful for your maternal care.
              </p>

              <p className="mb-6">
                <strong>On this final day of our novena, we pray with gratitude.</strong> 
                Thank you for listening to our prayers and for bringing them to your Son, Jesus Christ. 
                Thank you for the graces we have received and for the miracles you have worked in our lives.
              </p>

              <p className="mb-6">
                <strong>O Mary, we are grateful for your apparitions at Lourdes,</strong> for the miraculous 
                spring that continues to flow, and for the countless miracles you have worked for those 
                who turn to you with trust and confidence. Thank you for being our Mother and our advocate.
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
                Today we conclude our novena to Our Lady of Lourdes with gratitude. Gratitude is a virtue 
                that opens our hearts to receive more graces and helps us to recognize the many blessings 
                we have received from God and from Mary.
              </p>
              
              <p className="mb-4">
                Throughout this novena, we have focused on different aspects of our relationship with Mary: 
                faith, hope, love, humility, purity, obedience, perseverance, and intercession. Now we 
                thank her for all the graces we have received and for her constant maternal care.
              </p>
              
              <p className="mb-4">
                Mary's apparitions at Lourdes are a great gift to the Church and to all humanity. Through 
                these apparitions, she has shown us her love and concern for us, and she has given us 
                a powerful means of seeking her intercession and receiving God's graces.
              </p>
              
              <p className="mb-4">
                The miraculous spring at Lourdes continues to flow and to bring healing to millions of people. 
                This is a constant reminder of Mary's love and of God's mercy. We should be grateful for 
                this great gift and for all the miracles that have been worked through Mary's intercession.
              </p>
              
              <p>
                As we conclude this novena, let us thank Mary for her love and intercession. Let us promise 
                to continue to turn to her in our needs and to trust in her maternal care. Let us also 
                thank God for giving us such a wonderful Mother and for all the graces He has given us 
                through her intercession.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Begin with Faith</h3>
              <p className="text-gray-700 text-sm">
                Start each day with complete trust in Mary's intercession. Believe that she will help you 
                and bring your prayers to her Son, Jesus Christ.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray the novena for nine consecutive days without interruption. Consistency shows your 
                commitment and trust in Mary's help.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Offer Your Intentions</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary. Be honest about your struggles 
                and trust that she understands your situation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Practice Penance</h3>
              <p className="text-gray-700 text-sm">
                As Mary requested at Lourdes, offer small sacrifices and penances during the novena. 
                This can include fasting, acts of charity, or giving up something you enjoy.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Most Gracious Virgin Mary, Mother of God and our Mother, we thank you with all our hearts 
            for your love and intercession during this novena. Thank you for listening to our prayers 
            and for bringing them to your Son, Jesus Christ. May we always be grateful for your maternal 
            care and continue to turn to you in all our needs. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena to Our Lady of Lourdes! As you continue your spiritual journey, 
            may your heart be filled with faith, hope, love, humility, purity, obedience, perseverance, intercession, and gratitude. 
            May Our Lady of Lourdes continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Lourdes Novena - Day 9: Grace"
          text="Join me in praying the Our Lady of Lourdes Novena - Day 9 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/our-lady-of-lourdes/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Intercession
          </Link>
          
          <Link
            href="/novenas/our-lady-of-lourdes"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>

        {/* Related Novenas Section */}
        <RelatedNovenas currentNovena="Our Lady of Lourdes" />
      </div>
    </div>
  )
} 