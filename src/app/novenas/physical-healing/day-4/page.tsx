import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Physical Healing - Day 4: Strength and Energy',
  description: 'Pray the Novena for Physical Healing - Day 4 focusing on strength and energy.',
  keywords: ['physical healing novena day 4', 'physical healing prayer day 4'],
  openGraph: {
    title: 'Novena for Physical Healing - Day 4: Strength and Energy',
    description: 'Pray the Novena for Physical Healing - Day 4 focusing on strength and energy.',
    url: 'https://catholic-bible-online.com/novenas/physical-healing/day-4',
  },
  twitter: {
    title: 'Novena for Physical Healing - Day 4: Strength and Energy',
    description: 'Pray the Novena for Physical Healing - Day 4 focusing on strength and energy.',
  }
}

export default function NovenaForPhysicalHealingDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Physical Healing – Day 4: Strength and Energy
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Physical Healing to seek God's miraculous touch for physical restoration.
          </p>
          
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/physical-healing" className="hover:text-gray-700">Novena for Physical Healing</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Strength and Energy</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on strength and energy in our physical healing prayer today.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-4">
                Lord, as we pray today focusing on strength and energy, help us to grow in our faith and draw closer to You. 
                May this day of prayer bring us the graces we need and strengthen our trust in Your healing power.
              </p>
              <p className="mb-4">
                We ask for Your guidance and blessing as we continue this novena. 
                Help us to be open to Your will and to trust in Your love and mercy for our physical healing.
              </p>
              <p className="mb-6">Amen.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on strength and energy. This aspect of physical healing helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>
              <p className="mb-4">
                As we continue our Novena for Physical Healing, let us remember that each day brings us closer to God 
                and helps us to deepen our trust in His healing power.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love for physical healing.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Faith</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with unwavering faith in God's power to heal the body completely.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present specific physical healing needs to God.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God loves you and will answer your prayers for physical healing.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for the physical healing that is coming and for the strength you have already received.
              </p>
            </div>
          </div>
        </section>

        
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection for physical healing. Help us to carry Your healing love 
            into our daily lives and to trust completely in Your power to restore our bodies. Amen.
          </p>
        </section>
        

        <ShareButton 
          title="Novena for Physical Healing - Day 4: Strength and Energy"
          text="Join me in praying the Novena for Physical Healing - Day 4 focusing on strength and energy."
        />

        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/physical-healing/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Divine Touch
          </Link>
          
          <Link 
            href="/novenas/physical-healing/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Pain Relief →
          </Link>
          
        </div>
      </div>
    </div>
  )
}