import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Easter Novena - Day 9: Alleluia',
  description: 'Pray the Easter Novena - Day 9 focusing on alleluia. Join in praying the traditional novena.',
  keywords: [
    'easter novena day 9',
    'easter prayer day 9',
    'day 9 easter novena',
    'alleluia easter novena'
  ],
  openGraph: {
    title: 'Easter Novena - Day 9: Alleluia',
    description: 'Pray the Easter Novena - Day 9 focusing on alleluia.',
    url: 'https://catholicbible-online.com/novenas/easter/day-9',
  },
  twitter: {
    title: 'Easter Novena - Day 9: Alleluia',
    description: 'Pray the Easter Novena - Day 9 focusing on alleluia.',
  }
}

export default function EasterNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Easter Novena – Day 9: Alleluia
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Easter Novena to celebrate the Resurrection of Jesus Christ.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/easter" className="hover:text-gray-700">Easter Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Alleluia</h2>
          <p className="text-gray-700 leading-relaxed">
            Celebrating the victory of Christ with joy and praise
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
                Alleluia! Christ is risen! He is truly risen! Alleluia!

O Risen Lord Jesus Christ, we praise You and we glorify You. You have conquered death and opened the gates of heaven for us. You have given us the promise of eternal life and the hope of resurrection.

Lord Jesus, as we complete this Easter Novena, we thank You for Your great love that led You to die on the cross for our sins. We rejoice in Your glorious Resurrection that gives us hope and joy.

We ask You to bless us abundantly and to guide us in our daily lives. Help us to be witnesses of Your Resurrection to others, sharing the Good News of Your love and salvation.

O Risen Christ, we place all our hopes and dreams in Your hands. We trust in Your promise that You will be with us always, even to the end of the age.

Alleluia! Christ is risen! He is truly risen! Alleluia!

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
                Today we complete our Easter Novena with the great cry of joy: "Alleluia!" This word means "Praise the Lord" and it is the perfect expression of our joy in Christ's Resurrection.
              </p>

              <p className="mb-4">
                As we finish this novena, let us remember that the Resurrection is not just a past event, but a present reality that continues to transform our lives. Christ is risen and He is with us always, offering us His love, His peace, and His grace.
              </p>

              <p>
                Let us ask the risen Christ to help us live as people who have been raised with Him, sharing His love and His hope with everyone we meet. May our lives be a constant "Alleluia" of praise to God.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Praise God</h3>
              <p className="text-gray-700 text-sm">
                Praise God for the gift of His Son and for the hope of eternal life that the Resurrection brings.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His love and mercy, and for the graces received during this novena.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Share the Joy</h3>
              <p className="text-gray-700 text-sm">
                Share the joy of Easter with others. Let your life be a witness to the hope and new life that Christ offers.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Continue in Faith</h3>
              <p className="text-gray-700 text-sm">
                Continue to live in faith and trust in the risen Christ, knowing that He is always with you.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May the risen Christ bless you abundantly and fill your heart with the joy of His Resurrection. 
            May you always remember His great love and the hope of eternal life that He offers to all who believe in Him. 
            May you continue to grow in faith and be a witness of His love in the world.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Easter Novena! As you continue your spiritual journey, 
            may your heart be filled with the joy and hope of Christ's Resurrection. 
            May the risen Christ continue to guide you and bless you in all your needs.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Easter Novena - Day 9: Alleluia"
          text="Join me in praying the Easter Novena - Day 9 focusing on alleluia."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/easter/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Divine Mercy
          </Link>
          
          <Link 
            href="/novenas/easter"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>
    </div>
  )
}