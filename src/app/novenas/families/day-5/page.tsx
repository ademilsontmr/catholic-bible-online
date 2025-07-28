import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Novena for Families - Day 5: Family Faith',
  description: 'Pray the Novena for Families - Day 5 focusing on family faith.',
  keywords: ['family novena day 5', 'family prayer day 5'],
  openGraph: {
    title: 'Novena for Families - Day 5: Family Faith',
    description: 'Pray the Novena for Families - Day 5 focusing on family faith.',
    url: 'https://catholic-bible-online.com/novenas/families/day-5',
  },
  twitter: {
    title: 'Novena for Families - Day 5: Family Faith',
    description: 'Pray the Novena for Families - Day 5 focusing on family faith.',
  }
}

export default function NovenaForFamiliesDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Novena for Families – Day 5: Family Faith
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Novena for Families to strengthen family bonds.
          </p>
          
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/families" className="hover:text-gray-700">Novena for Families</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            Focusing on family faith in our family prayer today.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
              <p className="mb-4">
                Lord, as we pray today focusing on family faith, help us to grow in our faith and draw closer to You. 
                May this day of prayer bring us the graces we need and strengthen our family bonds.
              </p>
              <p className="mb-4">
                We ask for Your guidance and blessing as we continue this novena. 
                Help us to be open to Your will and to trust in Your love and mercy.
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
                Today we focus on family faith. This aspect of family life helps us to grow spiritually 
                and to become more like Christ in our daily lives.
              </p>
              <p className="mb-4">
                As we continue our Novena for Families, let us remember that each day brings us closer to God 
                and helps us to deepen our family relationships.
              </p>
              <p>
                Let us ask God to help us live according to His will and to be witnesses of His love in our family.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray Together</h3>
              <p className="text-gray-700 text-sm">
                Gather your family to pray this novena together. Family prayer strengthens bonds.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific family needs and intentions to God.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in God</h3>
              <p className="text-gray-700 text-sm">
                Trust that God hears your prayers and will answer them according to His will.
              </p>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank God for your family and for the blessings you already have.
              </p>
            </div>
          </div>
        </section>

        
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Lord, we thank You for this day of prayer and reflection. Help us to carry Your love and grace 
            into our family life. Amen.
          </p>
        </section>
        

        <ShareButton 
          title="Novena for Families - Day 5: Family Faith"
          text="Join me in praying the Novena for Families - Day 5 focusing on family faith."
        />

        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/families/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Family Communication
          </Link>
          
          <Link 
            href="/novenas/families/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Family Healing →
          </Link>
          
        </div>
      </div>
    </div>
  )
}