import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'
import RelatedNovenas from '@/components/RelatedNovenas'

export const metadata: Metadata = {
  title: 'Our Lady of Perpetual Help Novena - Day 9: Gratitude',
  description: 'Pray the Our Lady of Perpetual Help Novena - Day 9 focusing on Gratitude. Includes complete prayer text, reflection, and thanksgiving for Mary\'s perpetual help.',
  keywords: [
    'our lady of perpetual help novena day 9',
    'perpetual help novena day 9',
    'mary novena day 9',
    'our lady novena day 9',
    'perpetual help prayer gratitude',
    'day 9 perpetual help novena',
    'gratitude mary prayer',
    'perpetual help novena gratitude',
    'mary novena gratitude'
  ],
  openGraph: {
    title: 'Our Lady of Perpetual Help Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 9 focusing on Gratitude. Complete prayer text and reflection.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-perpetual-help/day-9',
  },
  twitter: {
    title: 'Our Lady of Perpetual Help Novena - Day 9: Gratitude',
    description: 'Pray the Our Lady of Perpetual Help Novena - Day 9 focusing on Gratitude. Complete prayer text and reflection.',
  }
}

export default function OurLadyOfPerpetualHelpNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Perpetual Help Novena – Day 9: Gratitude
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray with gratitude for Mary's perpetual help and her motherly care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-perpetual-help" className="hover:text-gray-700">Our Lady of Perpetual Help Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Our Lady of Perpetual Help Novena, we pray with gratitude for Mary's perpetual help 
            and her motherly care. We thank her for her intercession and for always being ready to help us in our needs.
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
                <strong>Opening Prayer:</strong><br/>
                O Mother of Perpetual Help, as we complete this novena in your honor, we come to you with hearts full of gratitude. 
                Thank you for your constant intercession and your perpetual help in all our needs. 
                Thank you for being our loving mother and for always being ready to help us.
              </p>
              
              <p className="mb-6">
                <strong>Prayer of Gratitude:</strong><br/>
                Most loving Mother of Perpetual Help, we thank you for your endless love and care for us. 
                Thank you for listening to our prayers and for bringing them to your Son, Jesus. 
                Thank you for your maternal protection and for always being our refuge in times of need.
              </p>
              
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray with gratitude for Mary's perpetual help and her motherly care. We thank her for her intercession 
                and for always being ready to help us in our needs. We ask her to continue to watch over us and to help us grow in holiness.
              </p>
              
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "My soul magnifies the Lord, and my spirit rejoices in God my Savior, for he has looked with favor on the lowliness of his servant. Surely, from now on all generations will call me blessed." (Luke 1:46-48)
              </p>
              
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                O Mother of Perpetual Help, we thank you for your love and care. Help us to always be grateful for your intercession 
                and to turn to you with confidence in every need. May we always remember your perpetual help and your motherly care. Amen.
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
                Today we pray with gratitude for Mary's perpetual help and her motherly care. 
                Gratitude is a virtue that opens our hearts to receive more graces from God.
              </p>
              
              <p className="mb-4">
                Mary's Magnificat (Luke 1:46-55) is a beautiful example of gratitude. She thanks God for all the great things 
                He has done for her and for His people. Her gratitude flows from her deep love for God and her recognition of His goodness.
              </p>
              
              <p className="mb-4">
                As we complete this novena, let us thank Mary for her intercession and her perpetual help. 
                Let us thank her for being our mother and for always being ready to help us in our needs.
              </p>
              
              <p className="mb-4">
                Gratitude helps us to recognize the many blessings we receive and to appreciate the love and care 
                that others show us. When we are grateful, we become more aware of God's presence in our lives 
                and more open to receiving His graces.
              </p>
              
              <p>
                Remember that gratitude is not just about saying "thank you" but about living with a grateful heart. 
                Let us ask Mary to help us cultivate this virtue and to always be thankful for her perpetual help.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Cultivate an attitude of gratitude. Thank Mary for her help and intercession. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Trust</h3>
              <p className="text-gray-700 text-sm">
                Continue to trust in Mary's perpetual help. She will always be there for you 
                and will never fail to help those who turn to her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share Your Gratitude</h3>
              <p className="text-gray-700 text-sm">
                Share your gratitude with others. Let them know about Mary's help 
                and encourage them to turn to her in their needs.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Keep Praying</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to Mary regularly. Develop a daily devotion to her 
                and let her be your perpetual help in all things.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the intercession of Our Lady of Perpetual Help. 
            May you always remember her motherly care and her perpetual help in all your needs. 
            May you continue to grow in love for her and through her, for Jesus Christ.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of Perpetual Help Novena! As you continue your spiritual journey, 
            may your heart be filled with trust, hope, love, humility, purity, obedience, patience, peace, and gratitude. 
            May Our Lady of Perpetual Help continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Perpetual Help Novena - Day 9: Grace"
          text="Join me in praying the Our Lady of Perpetual Help Novena - Day 9 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link 
            href="/novenas/our-lady-of-perpetual-help/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Guidance
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-perpetual-help"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of Perpetual Help" />
    </div>
  )
} 