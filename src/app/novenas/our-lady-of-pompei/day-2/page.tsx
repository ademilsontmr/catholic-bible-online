import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Pompei Novena - Day 2: Family Protection',
  description: "Pray the Our Lady of Pompei Novena - Day 2 focusing on Family Protection. Join in praying the traditional novena to Our Lady of the Rosary of Pompei.",
  keywords: [
    'our lady of pompei novena day 2',
    'lady of pompei novena day 2',
    'pompei novena day 2',
    'rosary of pompei novena day 2',
    'day 2 our lady of pompei novena',
    'family protection prayer',
    'pompei novena family protection',
    'gospel of life novena family protection'
  ],
  openGraph: {
    title: 'Our Lady of Pompei Novena - Day 2: Family Protection',
    description: 'Pray the Our Lady of Pompei Novena - Day 2 focusing on Family Protection. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-pompei/day-2',
  },
  twitter: {
    title: 'Our Lady of Pompei Novena - Day 2: Family Protection',
    description: 'Pray the Our Lady of Pompei Novena - Day 2 focusing on Family Protection. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfPompeiNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Pompei Novena – Day 2: Family Protection
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Pompei Novena with devotion and trust.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-pompei" className="hover:text-gray-700">Our Lady of Pompei Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-pink-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Family Protection</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the protection and sanctification of our families. We entrust our families to Our Lady of Pompei, asking her to protect them from harm and to help them grow in holiness.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <h3 className="text-xl font-semibold mb-4">Intention</h3>
              <p className="mb-4">
                That our choices reflect the Gospel of Life. For our families. For peace in our country and in the world.
              </p>

              <h3 className="text-xl font-semibold mb-4">Prayer to Our Lady of Pompei</h3>
              <p className="mb-4">
                'O Blessed Rosary of Mary, sweet chain which unites us to God, bond of love which unites us to the angels, 
                tower of salvation against the assaults of Hell, safe port in our universal shipwreck, we will never abandon you. 
                You will be our comfort in the hour of death: yours our final kiss as life ebbs away. And the last word from our lips 
                will be your sweet name, O Queen of the Rosary of Pompei, O dearest Mother, O Refuge of Sinners, O Sovereign Consoler 
                of the Afflicted. May you be everywhere blessed, today and always, on earth and in heaven'.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The family is the domestic church and the foundation of society. Our Lady of Pompei, as a mother, understands the importance of family and will protect and sanctify our families when we entrust them to her care.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of our devotion to Our Lady of Pompei, let us ask ourselves how we can 
              better honor her as Queen of the Rosary and seek her powerful intercession for our needs.
            </p>
            <p>
              May Our Lady of Pompei continue to bless us with her maternal care and lead us closer to her Son, 
              Jesus Christ, through the power of the Holy Rosary.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Pray with Devotion</h3>
              <p className="text-gray-700 text-sm">
                Approach Our Lady of Pompei with deep devotion and love. 
                Trust in her maternal intercession and her power as Queen of the Rosary.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Consistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with consistency and faith. Our Lady of Pompei will not fail 
                to help those who turn to her with trust and devotion.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Focus on Intentions</h3>
              <p className="text-gray-700 text-sm">
                Keep in mind the specific intentions: the Gospel of Life, families, and peace. 
                Trust that Our Lady will present these to her Son.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Our Lady of Pompei for her love and for the graces you receive. 
                Gratitude opens our hearts to receive more spiritual blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-pink-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Blessed Rosary of Mary, protect and sanctify our families. May they be places of love, faith, and holiness where the Gospel is lived daily. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Our Lady of Pompei Novena - Day 2: Family Protection"
          text="Join me in praying the Our Lady of Pompei Novena - Day 2 focusing on Family Protection."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/our-lady-of-pompei/day-1"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 1: Gospel of Life
          </Link>
          
          
          <Link
            href="/novenas/our-lady-of-pompei/day-3"
            className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 3: Peace in Our Country →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
