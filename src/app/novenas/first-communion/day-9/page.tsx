import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for First Communion - Day 9: Church Building',
  description: 'Day 9 of the Novena for First Communion focusing on church building. Pray for strengthening the Church through worthy reception of the Eucharist.',
  keywords: [
    'novena for first communion day 9',
    'first communion church building',
    'first communion prayer day 9',
    'holy eucharist novena day 9',
    'first communion church building prayer'
  ],
  openGraph: {
    title: 'Novena for First Communion - Day 9: Church Building',
    description: 'Day 9 of the Novena for First Communion focusing on church building for receiving the Holy Eucharist.',
    url: 'https://catholicbibleonline.com/novenas/first-communion/day-9',
  },
  twitter: {
    title: 'Novena for First Communion - Day 9: Church Building',
    description: 'Day 9 of the Novena for First Communion focusing on church building for receiving the Holy Eucharist.',
  }
}

export default function NovenaForFirstCommunionDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for First Communion – Day 9: Church Building
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Today we pray for strengthening the Church through worthy reception of the Eucharist.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/first-communion" className="hover:text-gray-700">First Communion</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Church Building</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Novena for First Communion, we pray for strengthening the Church through worthy reception of the Eucharist.
            We ask God to help us and all who are preparing for their First Holy Communion to work to strengthen His Church.
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
                Dear Lord, we thank You and praise You for the most precious gift of the Holy Eucharist. We ask You to bless all those who are preparing to receive Your Body and Blood for the first time.
              </p>
              <p className="mb-6">
                <strong>Prayer of Church Building:</strong><br/>
                Your Church is in need of renewal and strengthening. Each member of Your Church can help build up the Church through every good work that is offered to You. You can help each of us to do all we can to strengthen the Church, especially by offering each worthy reception of the Eucharist to You.
              </p>
              <p className="mb-6">
                <strong>Daily Intention:</strong><br/>
                Today we pray for strengthening the Church through worthy reception of the Eucharist. We ask God to help us and all who are preparing for their First Holy Communion to work to strengthen His Church.
              </p>
              <p className="mb-6">
                <strong>Scripture Reading:</strong><br/>
                "Now you are the body of Christ and individually members of it." (1 Corinthians 12:27)
              </p>
              <p className="mb-6">
                <strong>Our Father, Hail Mary, Glory Be</strong>
              </p>
              <p className="mb-6">
                <strong>Closing Prayer:</strong><br/>
                Please assist all who are preparing to make their First Holy Communion, and we particularly ask today that You help us and all who are preparing for their First Holy Communion to work to strengthen Your Church! Help us to grow in love for You and Your Church each day. Help us to unite ourselves more fully to You at every opportunity. And I especially ask in this novena (mention your intentions here). Lord, hear our prayers!
              </p>
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
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
                Today we pray for strengthening the Church through worthy reception of the Eucharist. St. Paul tells us in 1 Corinthians 12:27 that we are the body of Christ and individually members of it.
              </p>
              <p className="mb-4">
                When we receive the Eucharist worthily, we become more united to Christ and to each other, strengthening the entire Church. Each worthy reception of the Eucharist is an opportunity to grow in holiness and to contribute to the building up of the Church.
              </p>
              <p className="mb-4">
                The Eucharist is not just a personal gift - it is also a communal reality that strengthens the entire body of Christ. When we receive the Eucharist, we should offer our reception for the good of the Church and for the conversion of sinners.
              </p>
              <p className="mb-4">
                Let us pray that all who are preparing for their First Communion will understand their role in building up the Church and will always receive the Eucharist with this intention.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Prepared</h3>
              <p className="text-gray-700 text-sm">
                Prepare your heart and mind for receiving the Holy Eucharist. 
                Reflect on the great gift of Jesus' Body and Blood.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Reverent</h3>
              <p className="text-gray-700 text-sm">
                Approach the Eucharist with deep reverence and love. 
                Remember that you are receiving the Body and Blood of Christ.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. 
                God will not fail to bless those who prepare for His sacraments.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the gift of the Holy Eucharist. 
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Lord bless you abundantly through the gift of His Body and Blood in the Eucharist.
            May you always approach this most precious sacrament with reverence, love, and gratitude.
            May you continue to grow in holiness and help build up the Church through your worthy reception of the Eucharist.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-100 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Novena for First Communion! As you continue your spiritual journey,
            may your heart be filled with preparation, adult preparation, love for Eucharist, religious education, vocations, intimacy with God, reverence, worthy reception, and church building.
            May God continue to pour out His grace upon you and help you grow in love for the Holy Eucharist.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for First Communion - Day 9: Church Building" 
            url="/novenas/first-communion/day-9"
            excerpt="Join me in praying the Novena for First Communion - Day 9 focusing on Church Building." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/novenas/first-communion/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Worthy Reception
          </Link>
          <Link
            href="/novenas/first-communion"
            className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
      
      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="First Communion" />
    </div>
  )
}