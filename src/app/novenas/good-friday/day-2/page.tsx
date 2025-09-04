import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Good Friday - Day 2: Priests',
  description: "Pray the Novena for Good Friday - Day 2 focusing on Priests. Join in praying to commemorate Christ's sacrifice on the cross.",
  keywords: [
    'novena for good friday day 2',
    'good friday prayer day 2',
    'priests good friday prayer',
    'good friday novena day 2',
    'catholic good friday prayer day 2',
    'good friday priests novena day 2',
    'prayer for good friday day 2',
    'good friday novena prayer day 2',
    'catholic novena good friday day 2',
    'good friday priests prayer day 2'
  ],
  openGraph: {
    title: 'Novena for Good Friday - Day 2: Priests',
    description: "Pray the Novena for Good Friday - Day 2 focusing on Priests. Join in praying to commemorate Christ's sacrifice on the cross.",
    url: 'https://catholicbibleonline.com/novenas/good-friday/day-2',
  },
  twitter: {
    title: 'Novena for Good Friday - Day 2: Priests',
    description: "Pray the Novena for Good Friday - Day 2 focusing on Priests. Join in praying to commemorate Christ's sacrifice on the cross.",
  }
}

export default function NovenaForGoodFridayDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Good Friday – Day 2: Priests
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Priests</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Good Friday, we focus on priests. We ask God to help us grow in this virtue as we commemorate Christ's sacrifice on the cross.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6"><strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong></p>
              <p className="mb-6"><strong>Amen.</strong></p>
              <p className="mb-6">Dear Lord, we humbly thank You for choosing to die for us on Good Friday. Help us to always be grateful for Your loving sacrifice.</p>
              <p className="mb-6">You showed the depths of Your love by willingly laying down Your life for us on the cross. You call each of us to imitate Your sacrificial love. You have given us priests in Your Church to guide us on the way to heaven, and You call Your priests to lay down their lives for Your flock in a particular way.</p>
              <p className="mb-6">Please help us to faithfully commemorate Your death on Good Friday, and we particularly ask today that You pour out grace upon Your priests on this holy day.</p>
              <p className="mb-6">Help us to do all we can to practice sacrificial love in imitation of You. Give us the grace to grow in holiness each day.</p>
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
                Today we focus on priests as we commemorate Christ's sacrifice on the cross. Good Friday reminds us of the depth of Christ's love for us and His willingness to suffer and die for our salvation.
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
            Dear Lord, we thank You for Your sacrifice on the cross. Help us to always be grateful for Your redemptive love and to unite our sufferings with Yours. May You help us grow in priests and all the virtues we need for holiness, and may we always seek to serve You faithfully. Amen.
          </p>
        </section>

        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for Good Friday - Day 2: Priests" 
            url="/novenas/good-friday/day-2"
            excerpt="Join me in praying the Novena for Good Friday - Day 2 focusing on Priests." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/good-friday/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Gratitude
          </Link>
          
          
          <Link 
            href="/novenas/good-friday/day-3"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Day 3: Conversion →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}