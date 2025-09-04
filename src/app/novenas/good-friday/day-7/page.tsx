import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Good Friday - Day 7: Penance',
  description: "Pray the Novena for Good Friday - Day 7 focusing on Penance. Join in praying to commemorate Christ's sacrifice on the cross.",
  keywords: [
    'novena for good friday day 7',
    'good friday prayer day 7',
    'penance good friday prayer',
    'good friday novena day 7',
    'catholic good friday prayer day 7',
    'good friday penance novena day 7',
    'prayer for good friday day 7',
    'good friday novena prayer day 7',
    'catholic novena good friday day 7',
    'good friday penance prayer day 7'
  ],
  openGraph: {
    title: 'Novena for Good Friday - Day 7: Penance',
    description: "Pray the Novena for Good Friday - Day 7 focusing on Penance. Join in praying to commemorate Christ's sacrifice on the cross.",
    url: 'https://catholicbibleonline.com/novenas/good-friday/day-7',
  },
  twitter: {
    title: 'Novena for Good Friday - Day 7: Penance',
    description: "Pray the Novena for Good Friday - Day 7 focusing on Penance. Join in praying to commemorate Christ's sacrifice on the cross.",
  }
}

export default function NovenaForGoodFridayDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Good Friday – Day 7: Penance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Good Friday to commemorate Christ's sacrifice on the cross and unite your sufferings with His.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/good-friday" className="hover:text-gray-700">Novena for Good Friday</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Penance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Novena for Good Friday, we focus on penance. We ask God to help us grow in this virtue as we commemorate Christ's sacrifice on the cross.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong></p>
              <p className="mb-6"><strong>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we humbly thank You for choosing to die for us on Good Friday. Help us to always be grateful for Your loving sacrifice.</p>
              <p className="mb-6">Through Your Church, You have given us guidelines to help us properly commemorate the holy occasion of Your death on Good Friday. We fast and abstain out of love for You. Through our prayer and self-denial, You call us to deeper unity with You and give us the ability to join You in Your suffering.</p>
              <p className="mb-6">Please help us to faithfully commemorate Your death on Good Friday, and we particularly ask today that You help us and all people to grow to a deeper spirit of holy penance.</p>
              <p className="mb-6">Help us to make true unity with You our top priority in life. Give us the grace to love You more and more each day of our lives.</p>
              <p className="mb-6"><strong>And we especially ask in this novena for (mention your intentions here).</strong></p>
              <p className="mb-6"><strong>Lord, hear our prayers!</strong></p>
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong></p>
              <p className="mb-6"><strong>Amen.</strong></p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on penance as we commemorate Christ's sacrifice on the cross. Good Friday reminds us of the depth of Christ's love for us and His willingness to suffer and die for our salvation.
              </p>

              <p className="mb-4">
                The Bible tells us that "Greater love has no one than this, that someone lay down his life for his friends" (John 15:13). Christ showed us the greatest love by dying on the cross for our sins.
              </p>

              <p className="mb-4">
                As we pray this novena, we are called to unite our sufferings with Christ's Passion and to grow in gratitude for His redemptive love. Each day helps us to understand a different aspect of His sacrifice and our response to it.
              </p>

              <p className="mb-4">
                Through this novena, we ask God to help us grow in piety, charity, and the ability to offer our sufferings in union with Christ's sacrifice on the cross.
              </p>

              <p>
                Remember that Christ's death on the cross opened the gates of heaven for us, and through our prayers and penance, we can help others to come to know and love Him.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Christ's redemptive love. Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to God. He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His sacrifice and redemption. Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for Your sacrifice on the cross. Help us to always be grateful for Your redemptive love and to unite our sufferings with Yours. May You help us grow in penance and all the virtues we need for holiness, and may we always seek to serve You faithfully. Amen.
          </p>
        </section>

        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Good Friday - Day 7: Penance" 
            url="/novenas/good-friday/day-7"
            excerpt="Join me in praying the Novena for Good Friday - Day 7 focusing on Penance." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/good-friday/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Friendship
          </Link>
          
          
          <Link 
            href="/novenas/good-friday/day-8"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 8: Charity →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}