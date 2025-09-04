import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Holy Rosary Novena - Day 8: Greater Glory of God',
  description: "Pray the Our Lady of the Holy Rosary Novena - Day 8 focusing on Greater Glory of God. Join in praying the traditional novena with daily Rosary.",
  keywords: [
    'our lady of the holy rosary novena day 8',
    'holy rosary novena day 8',
    'rosary novena day 8',
    'our lady of the rosary novena day 8',
    'day 8 our lady of the holy rosary novena',
    'greater glory of god prayer',
    'holy rosary novena greater glory of god',
    'rosary prayer novena greater glory of god'
  ],
  openGraph: {
    title: 'Our Lady of the Holy Rosary Novena - Day 8: Greater Glory of God',
    description: 'Pray the Our Lady of the Holy Rosary Novena - Day 8 focusing on Greater Glory of God. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-holy-rosary/day-8',
  },
  twitter: {
    title: 'Our Lady of the Holy Rosary Novena - Day 8: Greater Glory of God',
    description: 'Pray the Our Lady of the Holy Rosary Novena - Day 8 focusing on Greater Glory of God. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheHolyRosaryNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Holy Rosary Novena – Day 8: Greater Glory of God
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Greater Glory of God</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the greater glory of God and for the sake of Jesus. We offer our Rosary for His glory and honor.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

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
              Everything we do should be for the greater glory of God. When we pray the Rosary with this intention, we give the greatest honor to God and His Mother.
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
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Our Lady of the Holy Rosary, help us to pray always for the greater glory of God. May everything we do be for His honor and praise. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Holy Rosary Novena - Day 8: Greater Glory of God" 
            url="/novenas/our-lady-of-the-holy-rosary/day-8"
            excerpt="Join me in praying the Our Lady of the Holy Rosary Novena - Day 8 focusing on Greater Glory of God." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/our-lady-of-the-holy-rosary/day-7"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: Confidence in Mary
          </Link>
          
          
          <Link
            href="/novenas/our-lady-of-the-holy-rosary/day-9"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Sweet Heart of Mary →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
