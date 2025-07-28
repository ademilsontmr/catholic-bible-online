import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena to St. Anne - Day 3: Mother of Mary',
  description: "Pray the Novena to St. Anne - Day 3 focusing on Mother of Mary. Join in praying the traditional novena to seek St. Anne's intercession.",
  keywords: [
    'novena to st anne day 3',
    'st anne novena day 3',
    'anne novena day 3',
    'st anne prayer day 3',
    'day 3 st anne novena',
    'mother of mary prayer',
    'st anne novena mother of mary',
    'anne novena mother of mary'
  ],
  openGraph: {
    title: 'Novena to St. Anne - Day 3: Mother of Mary',
    description: 'Pray the Novena to St. Anne - Day 3 focusing on Mother of Mary. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-anne/day-3',
  },
  twitter: {
    title: 'Novena to St. Anne - Day 3: Mother of Mary',
    description: 'Pray the Novena to St. Anne - Day 3 focusing on Mother of Mary. Join in praying the traditional novena.',
  }
}

export default function StAnneNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena to St. Anne – Day 3: Mother of Mary
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena to St. Anne to seek her intercession and motherly care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-anne" className="hover:text-gray-700">Novena to St. Anne</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Mother of Mary</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on St. Anne as the mother of Mary. She first responded to the needs of Mary, Mother of our Savior and Queen of Angels. She watched over Mary's infancy and presented her to the Lord in the temple.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>O glorious St. Ann, you are filled with compassion for those who invoke you and with love for those who suffer!</strong> Heavily burdened with the weight of my troubles, I cast myself at your feet and humbly beg of you to take the present intention which I recommend to you in your special care.
              </p>

              <p className="mb-6">
                <strong>Please recommend it to your daughter, the Blessed Virgin Mary, and place it before the throne of Jesus,</strong> so that He may bring it to a happy issue. Continue to intercede for me until my request is granted. But, above all, obtain for me the grace one day to see my God face to face, and with you and Mary and all the saints to praise and bless Him for all eternity.
              </p>

              <p className="mb-6">
                <strong>Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Father,... Hail Mary...</strong>
              </p>

              <p className="mb-6">
                <strong>O Jesus, Holy Mary, St. Ann, help me now and at the hour of my death.</strong>
              </p>

              <p className="mb-6">
                <strong>Good St. Ann, intercede for me.</strong>
              </p>

              
              <p className="mb-6">
                <strong>Hail, good St. Ann, who first responded to the needs of Mary, Mother of our Savior and Queen of Angels.</strong> Hail to you and to your husband St. Joachim, who watched over her infancy, presented her to the Lord in the temple and, according to your promise, consecrated her to the service of God.
              </p>

              <p className="mb-6">
                <strong>Hail St. Ann, good mother! I rejoice in the marvels you continually perform,</strong> because they encourage all to seek your intercession.
              </p>

              <p className="mb-6">
                <strong>Good St. Ann, by the great power that God has given you, show yourself my mother, my consoler, my advocate.</strong> Reconcile me to the God I have so deeply offended. Console me in my trials; strengthen me in my struggles. Deliver me from danger in my time of need. Help me at the hour of death and open to me the gates of paradise.
              </p>
              
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              St. Anne's role as mother of Mary shows us the importance of nurturing faith in our children. Her example teaches us to raise our children in love and devotion to God.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of St. Anne's life and teaching, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May St. Anne's intercession help us to overcome our weaknesses and to grow stronger in our faith 
              and love for God and neighbor.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Anne</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Anne's motherly care and her ability to help you.
                Turn to her with confidence in every need, especially family matters.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. St. Anne will not fail to help 
                those who turn to her with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Anne. She wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Anne for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and miracles.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O St. Anne, mother of Mary, help me to understand the importance of nurturing faith. May your example of raising Mary inspire me to guide others toward God with love and devotion. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Novena to St. Anne - Day 3: Mother of Mary"
          text="Join me in praying the Novena to St. Anne - Day 3 focusing on Mother of Mary."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/st-anne/day-2"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 2: Compassion and Love
          </Link>
          
          
          <Link
            href="/novenas/st-anne/day-4"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 4: Temple Presentation →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
