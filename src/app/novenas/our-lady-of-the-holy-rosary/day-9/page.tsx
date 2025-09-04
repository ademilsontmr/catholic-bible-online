import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Holy Rosary Novena - Day 9: Sweet Heart of Mary',
  description: "Pray the Our Lady of the Holy Rosary Novena - Day 9 focusing on Sweet Heart of Mary. Join in praying the traditional novena with daily Rosary.",
  keywords: [
    'our lady of the holy rosary novena day 9',
    'holy rosary novena day 9',
    'rosary novena day 9',
    'our lady of the rosary novena day 9',
    'day 9 our lady of the holy rosary novena',
    'sweet heart of mary prayer',
    'holy rosary novena sweet heart of mary',
    'rosary prayer novena sweet heart of mary'
  ],
  openGraph: {
    title: 'Our Lady of the Holy Rosary Novena - Day 9: Sweet Heart of Mary',
    description: 'Pray the Our Lady of the Holy Rosary Novena - Day 9 focusing on Sweet Heart of Mary. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-holy-rosary/day-9',
  },
  twitter: {
    title: 'Our Lady of the Holy Rosary Novena - Day 9: Sweet Heart of Mary',
    description: 'Pray the Our Lady of the Holy Rosary Novena - Day 9 focusing on Sweet Heart of Mary. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheHolyRosaryNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Holy Rosary Novena – Day 9: Sweet Heart of Mary
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of the Holy Rosary Novena with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-the-holy-rosary" className="hover:text-gray-700">Our Lady of the Holy Rosary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Sweet Heart of Mary</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of our novena, we focus on praying to the Sweet Heart of Mary for salvation. We ask her to be our salvation and guide us to heaven.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Novena Prayer</h3>
              <p className="mb-4">
                My dearest Mother Mary, behold me, your child, in prayer at your feet. Accept this Holy Rosary, which I offer you in accordance with your requests at Fatima, as a proof of my tender love for you, for the intentions of the Sacred Heart of Jesus, in atonement for the offenses committed against your Immaculate Heart, and for this special favor which I earnestly request in my Rosary Novena: <em>(Mention your request).</em>
              </p>

              <p className="mb-4">
                I beg you to present my petition to your Divine Son. If you will pray for me, I cannot be refused. I know, dearest Mother, that you want me to seek God's holy Will concerning my request. If what I ask for should not be granted, pray that I may receive that which will be of greater benefit to my soul.
              </p>

              <p className="mb-4">
                I offer you this spiritual Bouquet of Roses because I love you. I put all my confidence in you, since your prayers before God are most powerful. For the greater glory of God and for the sake of Jesus, your loving Son, hear and grant my prayer. Sweet Heart of Mary, be my salvation.
              </p>

              <h3 className="text-xl font-semibold mb-4">Important Note</h3>
              <p className="mb-4">
                <strong>This novena is to be said along with a daily Rosary.</strong>
              </p>

              <h3 className="text-xl font-semibold mb-4">Scripture Reading</h3>
              <p className="mb-4 italic">
                Listen, my faithful children; open up your petals, like roses planted near running waters; send up the sweet odor of incense, break forth in blossoms like the lily. Send up the sweet odor of your hymn of praise; bless the Lord for all he has done. (Sir 39: 13-14)
              </p>

              <h3 className="text-xl font-semibold mb-4">Daily Rosary</h3>
              <p className="mb-4">
                Pray the complete Rosary (all 20 decades) or at least one set of mysteries (5 decades) as part of this novena.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Sweet Heart of Mary is our refuge and our hope. She leads us to her Son and helps us on our journey to eternal salvation.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of our devotion to Our Lady of the Holy Rosary, let us ask ourselves how we can 
              better honor her through the Rosary and seek her powerful intercession.
            </p>
            <p>
              May Our Lady of the Holy Rosary continue to bless us with her maternal care and lead us closer to her Son, 
              Jesus Christ, through the devotion of the Holy Rosary.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Love</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of the Holy Rosary with tender love and devotion. 
                Offer your prayers as a proof of your love for her.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Say the Daily Rosary</h3>
              <p className="text-gray-700 text-sm">
                This novena is to be said along with a daily Rosary. Make sure to pray 
                the Rosary each day of the novena.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Put all your confidence in Our Lady. Her prayers before God are most 
                powerful and cannot be refused.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Seek God's Will</h3>
              <p className="text-gray-700 text-sm">
                Ask Our Lady to help you seek God's holy Will concerning your request. 
                Trust that she will obtain what is best for your soul.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Blessing</h2>
          <p className="text-gray-700 leading-relaxed">
            May Our Lady of the Holy Rosary bless you abundantly through your prayers. 
            May you always remember to turn to her through the devotion of the Holy Rosary. 
            May your heart be filled with her maternal love and the gift of the Rosary.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the Our Lady of the Holy Rosary Novena! As you continue your spiritual journey, 
            may your heart be filled with devotion to Our Lady of the Holy Rosary and trust in her powerful intercession. 
            Remember to continue praying the Rosary daily as she requested at Fatima. 
            May Our Lady of the Holy Rosary continue to bless you and guide you to her Son through the devotion of the Rosary.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Holy Rosary Novena - Day 9: Sweet Heart of Mary" 
            url="/novenas/our-lady-of-the-holy-rosary/day-9"
            excerpt="Join me in praying the Our Lady of the Holy Rosary Novena - Day 9 focusing on Sweet Heart of Mary." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-holy-rosary/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Peace
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-holy-rosary"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Our Lady of the Holy Rosary Novena" />
    </div>
  )
}


