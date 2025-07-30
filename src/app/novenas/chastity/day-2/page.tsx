import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Chastity - Day 2: Perseverance',
  description: 'Pray the Novena for Chastity - Day 2 focusing on Perseverance. Join in praying the traditional novena to seek God\'s grace for chastity.',
  keywords: [
    'novena for chastity day 2',
    'chastity novena day 2',
    'chastity prayer day 2',
    'novena for chastity prayer perseverance',
    'day 2 chastity novena',
    'perseverance chastity prayer',
    'chastity novena perseverance',
    'chastity prayer perseverance'
  ],
  openGraph: {
    title: 'Novena for Chastity - Day 2: Perseverance',
    description: 'Pray the Novena for Chastity - Day 2 focusing on Perseverance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/chastity/day-2',
  },
  twitter: {
    title: 'Novena for Chastity - Day 2: Perseverance',
    description: 'Pray the Novena for Chastity - Day 2 focusing on Perseverance. Join in praying the traditional novena.',
  }
}

export default function ChastityNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Chastity – Day 2: Perseverance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Chastity to seek God's grace and assistance to live truly chaste lives.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/chastity" className="hover:text-gray-700">Novena for Chastity</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Novena for Chastity, we pray for the perseverance needed to truly live chaste lives. 
            We ask God to help us remain steadfast in our commitment to virtue despite the challenges we face.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit.</strong><br/>
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                Dear Lord, we thank You and praise You for the many ways You assist us. We ask You today to help us live truly chaste lives.
              </p>

              <p className="mb-6">
                The practice of chastity can be very difficult for us in our fallen world. You see all of our efforts, and You are with us in all of the trials we face. You can help us to grow in the perseverance we need to truly live chaste lives.
              </p>

              <p className="mb-6">
                Please pour out Your grace and assistance on our efforts to grow in chastity, and we particularly ask today that You help us grow in the perseverance we need to practice chastity.
              </p>

              <p className="mb-6">
                Help us to grow in love of You each day of our lives. Give us the grace to serve You faithfully in every circumstance we face.
              </p>

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
              <p className="mb-4">
                Today we pray for the perseverance needed to truly live chaste lives. Perseverance is the virtue that helps us 
                to remain steadfast in our commitment to virtue, even when faced with difficulties and temptations.
              </p>

              <p className="mb-4">
                In our fallen world, the practice of chastity can be very challenging. We face constant temptations and pressures 
                that can make it difficult to remain faithful to God's plan for human sexuality.
              </p>

              <p className="mb-4">
                Perseverance is not about never falling, but about always getting back up when we do fall. It's about continuing 
                to strive for virtue even when we experience setbacks and failures.
              </p>

              <p className="mb-4">
                God sees all of our efforts, even the small ones, and He is with us in all of our trials. He wants to help us 
                grow in perseverance and to remain steadfast in our commitment to chastity.
              </p>

              <p>
                Let us ask God today to give us the grace of perseverance. Let us ask Him to help us remain faithful to our 
                commitment to chastity, even when it is difficult, knowing that He is always there to help us.
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
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Dear Lord, we thank You for hearing our prayers today. Help us to grow in the virtue of perseverance 
            and to remain steadfast in our commitment to chastity. Give us the grace to continue striving for virtue 
            even when faced with difficulties and temptations. May we always trust in Your help and remain faithful to You. Amen.
          </p>
        </section>

        {/* Share Section */}
        <ShareButton 
          title="Novena for Chastity - Day 2: Perseverance"
          text="Join me in praying the Novena for Chastity - Day 2 focusing on Perseverance."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/chastity/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Temperance
          </Link>
          
          <Link 
            href="/novenas/chastity/day-3"
            className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
          >
            Day 3: Patience →
          </Link>
        </div>
      </div>
    </div>
  )
} 