import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pentecost Novena - Day 9: Transformation',
  description: 'Pray the Pentecost Novena - Day 9 focusing on transformation. Join in praying the traditional novena.',
  keywords: [
    'pentecost novena day 9',
    'pentecost prayer day 9',
    'day 9 pentecost novena',
    'transformation pentecost novena'
  ],
  openGraph: {
    title: 'Pentecost Novena - Day 9: Transformation',
    description: 'Pray the Pentecost Novena - Day 9 focusing on transformation.',
    url: 'https://catholicbible-online.com/novenas/pentecost/day-9',
  },
  twitter: {
    title: 'Pentecost Novena - Day 9: Transformation',
    description: 'Pray the Pentecost Novena - Day 9 focusing on transformation.',
  }
}

export default function PentecostNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Pentecost Novena – Day 9: Transformation
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Pentecost Novena to receive the gifts of the Holy Spirit.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/pentecost" className="hover:text-gray-700">Pentecost Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Transformation</h2>
          <p className="text-gray-700 leading-relaxed">
            Allowing the Holy Spirit to transform our lives completely
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
                Come, Holy Spirit, come! Transform our hearts and minds with Your divine fire. 
                Make us new creations in Christ, filled with Your love and power.

O Holy Spirit, as we complete this Pentecost Novena, we ask You to transform us completely. 
Change our hearts of stone into hearts of flesh. Fill us with Your gifts and fruits, 
that we may be true witnesses of Christ in the world.

Help us to be transformed by Your grace, so that we may think like Christ, speak like Christ, 
and act like Christ. Make us instruments of Your peace and love in the world.

Come, Holy Spirit, come! Transform us and renew the face of the earth!

Amen.
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
                Today we complete our Pentecost Novena by focusing on transformation. The Holy Spirit has the power to completely transform our lives, making us new creations in Christ.
              </p>

              <p className="mb-4">
                As we finish this novena, let us remember that the Holy Spirit is always at work in us, 
                transforming us more and more into the image of Christ. This transformation is a lifelong process 
                that requires our cooperation and openness to His grace.
              </p>

              <p>
                Let us ask the Holy Spirit to continue His work of transformation in us, 
                so that we may be true witnesses of Christ's love and power in the world.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Open to Change</h3>
              <p className="text-gray-700 text-sm">
                Be open to the Holy Spirit's work of transformation in your life. 
                Allow Him to change you according to His will.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Cooperate with Grace</h3>
              <p className="text-gray-700 text-sm">
                Cooperate with the graces received during this novena. 
                Put into practice what the Holy Spirit has taught you.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be a Witness</h3>
              <p className="text-gray-700 text-sm">
                Be a witness of the Holy Spirit's power in your life. 
                Share His love and gifts with others.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue to Pray</h3>
              <p className="text-gray-700 text-sm">
                Continue to pray to the Holy Spirit daily. 
                Let Him guide you in all your decisions and actions.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the Holy Spirit bless you abundantly and continue His work of transformation in your life. 
            May you always be open to His guidance and filled with His gifts and fruits. 
            May you be a true witness of Christ's love and power in the world.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Pentecost Novena! As you continue your spiritual journey, 
            may the Holy Spirit continue to transform you and fill you with His gifts and fruits. 
            May you be a powerful witness of Christ's love in the world.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Pentecost Novena - Day 9: Transformation" 
            url="/novenas/pentecost/day-9"
            excerpt="Join me in praying the Pentecost Novena - Day 9 focusing on transformation." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/pentecost/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Wisdom
          </Link>
          
          <Link 
            href="/novenas/pentecost"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Pentecost Novena" />
    </div>
  )
}