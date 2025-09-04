import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for the Sick - Day 7: Family Support',
  description: 'Pray the Novena for the Sick - Day 7 focusing on family support. Join in praying for miraculous healing for the sick.',
  keywords: [
    'novena for the sick day 7',
    'sick prayer day 7',
    'day 7 sick novena',
    'family support sick prayer'
  ],
  openGraph: {
    title: 'Novena for the Sick - Day 7: Family Support',
    description: 'Pray the Novena for the Sick - Day 7 focusing on family support.',
    url: 'https://catholic-bible-online.com/novenas/sick/day-7',
  },
  twitter: {
    title: 'Novena for the Sick - Day 7: Family Support',
    description: 'Pray the Novena for the Sick - Day 7 focusing on family support.',
  }
}

export default function NovenaForTheSickDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for the Sick – Day 7: Family Support
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for the Sick to seek God\'s miraculous healing touch for those who are suffering from illness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/sick" className="hover:text-gray-700">Novena for the Sick</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-green-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Support</h2>
          <p className="text-gray-700 leading-relaxed">
            Praying for strength and support for family members and caregivers
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

                            <div className="space-y-4">
                <p className="mb-4">Loving Father, we pray today for strength and support for family members and caregivers who are caring for the sick person. We ask that You would pour out Your strength upon them, giving them the patience, love, and endurance they need to provide care and support. Lord, You know the challenges and burdens that caregivers face, and we pray that You would lighten their load and strengthen their hearts.</p>

<p className="mb-4">Help us to trust in Your ability to provide the strength and support that family members and caregivers need. Give us the faith to believe that You can work through us to bring comfort and care to the sick person. May Your love flow through us, making us channels of Your care and support.</p>

<p className="mb-4">Lord, we also pray that You would help us to be grateful for the family members and caregivers who are providing care and support. Give us the wisdom to appreciate their love and dedication, and the gratitude to thank You for their service. May our gratitude inspire us to support them and to pray for them as they care for the sick person.</p>

<p className="mb-4">We ask that You would help us to work together as a family and as caregivers, supporting one another and sharing the burden of care. Give us the wisdom to know how to help, the patience to work together, and the love to care for one another as we care for the sick person. May our unity and cooperation be a witness to Your love and Your care.</p>

<p className="mb-4">We ask this through Jesus Christ, our Lord. Amen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Family support and caregiving require strength and love. Today we ask God to strengthen family members and caregivers, giving them the patience and endurance they need to provide loving care. His love flows through us to others.
              </p>

              <p className="mb-4">
                As we continue our Novena for the Sick, let us remember that God is the ultimate healer of body and soul. 
                Each day brings us closer to His healing touch and strengthens our faith in His power to heal the sick.
              </p>

              <p>
                Let us ask God to help us trust completely in His healing power and to be open to receiving His grace for the sick.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God\'s power to heal the sick completely. Believe that nothing is impossible for God.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific healing needs to God. Be clear about who is sick and what healing you're asking for.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves the sick person and will answer your prayers for healing according to His perfect will and timing.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the healing that is coming and for the care and support that the sick person has already received.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-green-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for the sick. Help us to carry Your healing love 
            into our daily lives and to trust completely in Your power to restore health to those who are suffering. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Novena for the Sick - Day 7: Family Support" 
            url="/novenas/sick/day-7"
            excerpt="Join me in praying the Novena for the Sick - Day 7 focusing on family support." 
          />
        </div>


        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/sick/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Medical Wisdom
          </Link>
          
          <Link 
            href="/novenas/sick/day-8"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Day 8: Gratitude for Care →
          </Link>
        </div>
      </div>
    </div>
  )
}