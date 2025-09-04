import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dedication of St. Mary Major Basilica Novena - Day 1: Pilgrims and Devotion',
  description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 1 focusing on Pilgrims and Devotion. Join in praying the traditional novena to honor Mary and pray for pilgrims.',
  keywords: [
    'dedication st mary major basilica novena day 1',
    'pilgrims and devotion prayer',
    'st mary major basilica day 1',
    'basilica dedication prayer day 1',
    'mary major novena day 1',
    'day 1 basilica dedication novena',
    'pilgrims devotion prayer',
    'basilica dedication novena day 1',
    'catholic novena'
  ],
  openGraph: {
    title: 'Dedication of St. Mary Major Basilica Novena - Day 1: Pilgrims and Devotion',
    description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 1 focusing on Pilgrims and Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/dedication-st-mary-major-basilica/day-1',
  },
  twitter: {
    title: 'Dedication of St. Mary Major Basilica Novena - Day 1: Pilgrims and Devotion',
    description: 'Pray the Dedication of St. Mary Major Basilica Novena - Day 1 focusing on Pilgrims and Devotion. Join in praying the traditional novena.',
  }
}

export default function DedicationStMaryMajorBasilicaNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Dedication of St. Mary Major Basilica Novena – Day 9: The Church
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Dedication of St. Mary Major Basilica Novena to honor Mary and seek her intercession.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/dedication-st-mary-major-basilica" className="hover:text-gray-700">Dedication of St. Mary Major Basilica Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: The Church</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the Dedication of St. Mary Major Basilica Novena, we pray for Mary's Son's Church and all its members.
            We ask Mary to help us serve God and His Church with dedication and love.
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
                <strong>Lord God, we thank You for the many devotional practices You give us as we journey toward heaven with You.</strong> 
                Guide us in making use of all the help You give us!
              </p>

              <p className="mb-6">
                <strong>Dearest Mother, your Son has given you to us to be our mother in a special way.</strong> 
                You watch over your Son's Church with motherly care, and you do all you can to help each member of the Church to grow in holiness.
              </p>

              <p className="mb-6">
                <strong>Please bring all of our petitions before the throne of your Son.</strong> And we particularly ask today that you pray for your Son's Church!
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may do all we can to serve God and His Church.</strong> 
                Pray that we may be eager to put ourselves at the service of God, no matter what He might ask of us.
              </p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for…</strong> (State your intentions here)
              </p>

              <p className="mb-6">
                <strong>Blessed Mother Mary, pray for us!</strong>
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
                Today we pray for Mary's Son's Church and all its members. Mary has been given to us to be our mother in a special way, 
                and she watches over her Son's Church with motherly care.
              </p>

              <p className="mb-4">
                This shows us the beautiful relationship between Mary and the Church, and how we should do all we can to serve God and His Church.
              </p>

              <p className="mb-4">
                The title "Dedication of St. Mary Major Basilica Novena" reminds us that Mary is our mother and intercessor.
                She is always ready to help us grow in holiness and bring our prayers to Jesus, just as the basilica was dedicated to her honor.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us ask Mary to help us do all we can to serve God and His Church.
                Let us ask her to pray for her Son's Church and that we may be eager to put ourselves at the service of God.
              </p>

              <p>
                Remember that serving God and His Church is not just about external acts, but about growing in love for God and through service to Him, 
                growing closer to Jesus. Mary wants to help us on our journey to heaven.
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
                Trust completely in Mary's ability to help you grow closer to Jesus.
                Turn to her with confidence in every situation that requires her intercession.
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
              <h3 className="font-semibold text-black mb-4">Be Patient</h3>
              <p className="text-gray-700 text-sm">
                Spiritual growth is a process that takes time.
                Be patient with yourself and trust in Mary's timing.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Blessed Mother Mary, help us to do all we can to serve God and His Church. 
            Pray for your Son's Church and all its members. 
            Help us to be eager to put ourselves at the service of God, no matter what He might ask of us. Amen.
          </p>
        </section>

        {/* Congratulations */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            You have completed the Dedication of St. Mary Major Basilica Novena! 
            Through these nine days of prayer, you have honored Mary and grown closer to her Son.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            May the graces received through this novena continue to bless you and help you grow in holiness. 
            Remember that Mary is always ready to intercede for you and bring your prayers to Jesus.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Continue to turn to Mary in your daily life, and may her motherly care guide you always closer to her Son, Jesus Christ.
          </p>
        </section>

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Dedication of St. Mary Major Basilica Novena - Day 9: The Church" 
            url="/novenas/dedication-st-mary-major-basilica/day-9"
            excerpt="Join me in praying the Dedication of St. Mary Major Basilica Novena - Day 9 focusing on The Church." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/dedication-st-mary-major-basilica/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Dedication
          </Link>
          
          <Link 
            href="/novenas/dedication-st-mary-major-basilica"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Dedication St. Mary Major Basilica Novena" />
    </div>
  )
}