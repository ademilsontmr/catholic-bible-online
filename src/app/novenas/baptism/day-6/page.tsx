import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Baptism - Day 6: True Piety',
  description: 'Pray the Novena for Baptism - Day 6 focusing on True Piety. Join in praying the traditional novena to seek God\'s grace for baptism preparation.',
  keywords: [
    'novena for baptism day 6',
    'baptism novena day 6',
    'baptism prayer day 6',
    'novena for baptism prayer true piety',
    'day 6 baptism novena',
    'true piety baptism prayer',
    'baptism novena true piety',
    'baptism prayer true piety'
  ],
  openGraph: {
    title: 'Novena for Baptism - Day 6: True Piety',
    description: 'Pray the Novena for Baptism - Day 6 focusing on True Piety. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/baptism/day-6',
  },
  twitter: {
    title: 'Novena for Baptism - Day 6: True Piety',
    description: 'Pray the Novena for Baptism - Day 6 focusing on True Piety. Join in praying the traditional novena.',
  }
}

export default function BaptismNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Baptism – Day 6: True Piety
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Baptism to seek God's grace and assistance for all who are preparing for this beautiful sacrament.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/baptism" className="hover:text-gray-700">Novena for Baptism</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-sky-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: True Piety</h2>
          <p className="text-gray-700 leading-relaxed">
            Pray to grow in true piety.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">Dear Lord, we thank You and praise You for allowing us the opportunity to become Your children through baptism. We ask You to help all who are preparing for this sacrament.</p>
              <p className="mb-6">Through the sacrament of baptism, You bestow many great blessings on us. In baptism, You welcome us into Your Church. Through Your Church, You give us many devotions and practices that we can carry out piously to grow to a deeper union with You.</p>
              <p className="mb-6">Please pour out Your grace and assistance on all who are preparing to be baptized, and we especially ask today that You help all preparing for baptism to grow in true piety.</p>
              <p className="mb-6">Help us to make growth in virtue and holiness our top priority in life. Give us the grace to do all we can to truly become saints each day.</p>

              <p className="mb-6">
                <strong>And we especially ask in this novena for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Lord, hear our prayers!</strong>
              </p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">Today we pray to grow in true piety. This day reminds us that through baptism, we are welcomed into the Church and given access to many devotions and practices that help us grow closer to God.</p>
              <p className="mb-4">True piety is not about being overly religious or following empty rituals, but about having a genuine love for God and a desire to grow closer to Him. It involves developing a deep reverence for God and a love for the things of God, such as prayer, the sacraments, and the teachings of the Church.</p>
              <p className="mb-4">Through the Church, God gives us many devotions and practices that we can carry out piously to grow in our relationship with Him. These include praying the rosary, attending Mass, reading Scripture, participating in novenas, and many other spiritual practices. These are not obligations, but opportunities to grow closer to God.</p>
              <p className="mb-4">As we pray for those preparing for baptism, let us ask God to help them develop true piety. Let us pray that they will come to love the things of God and will find joy in the spiritual practices that help us grow closer to Him.</p>
              <p className="mb-4">Remember that true piety is a gift from God that we should cultivate and nurture. It helps us to grow in our love for God and to become more like Him. With God's grace, we can all develop this virtue and find the peace and joy that comes from being truly pious.</p>
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
                Trust completely in God's providence and His ability to help you.
                Turn to Him with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                God will not fail to help those who turn to Him with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to God.
                He wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for His help and grace.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-sky-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help all who are preparing for baptism to grow in the virtue of true piety and to continue striving for holiness in their preparation. Give us the grace to trust in Your help and to remain faithful to You. May we grow in holiness and virtue through Your grace. Amen.
          </p>
        </section>

        

        {/* Share Section */}
        <ShareButton 
          title="Novena for Baptism - Day 6: True Piety"
          text="Join me in praying the Novena for Baptism - Day 6 focusing on True Piety."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/baptism/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Gratitude for Sacramental Grace
          </Link>
          
          
          <Link 
            href="/novenas/baptism/day-7"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition-colors"
          >
            Day 7: Effective Preparation →
          </Link>
          
        </div>
      </div>
    </div>
  )
}