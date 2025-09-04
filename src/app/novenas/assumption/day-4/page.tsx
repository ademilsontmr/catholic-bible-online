import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Assumption Novena - Day 4: Freedom from Sin',
  description: "Pray The Assumption Novena - Day 4 focusing on Freedom from Sin. Join in praying the traditional novena to honor Mary's Assumption into heaven.",
  keywords: [
    'the assumption novena day 4',
    'assumption novena day 4',
    'mary assumption novena day 4',
    'assumption prayer day 4',
    'day 4 assumption novena',
    'freedom from sin prayer',
    'assumption novena freedom from sin',
    'mary assumption novena freedom from sin'
  ],
  openGraph: {
    title: 'The Assumption Novena - Day 4: Freedom from Sin',
    description: 'Pray The Assumption Novena - Day 4 focusing on Freedom from Sin. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/assumption/day-4',
  },
  twitter: {
    title: 'The Assumption Novena - Day 4: Freedom from Sin',
    description: 'Pray The Assumption Novena - Day 4 focusing on Freedom from Sin. Join in praying the traditional novena.',
  }
}

export default function AssumptionNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Assumption Novena – Day 4: Freedom from Sin
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying The Assumption Novena to honor Mary's Assumption into heaven.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/assumption" className="hover:text-gray-700">The Assumption Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Freedom from Sin</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for freedom from sin and impurity. We ask Mary to lift our hearts with her in the glory of her Assumption above the dreadful touch of sin.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Mary, Queen Assumed into Heaven, I rejoice that after years of heroic martyrdom on earth, you have at last been taken to the throne prepared for you in heaven by the Holy Trinity.
              </p>

              <p className="mb-4">
                Lift my heart with you in the glory of your Assumption above the dreadful touch of sin and impurity. Teach me how small earth becomes when viewed from heaven. Make me realize that death is the triumphant gate through which I shall pass to your Son, and that someday my body shall rejoin my soul in the unending bliss of heaven.
              </p>

              <p className="mb-4">
                From this earth, over which I tread as a pilgrim, I look to you for help. I ask for this favor: <em>(Mention your request).</em>
              </p>

              <p>
                When my hour of death has come, lead me safely to the presence of Jesus to enjoy the vision of my God for all eternity together with you.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Mary's Assumption shows us that sin has no power over those who remain faithful to God. Her pure and sinless life led to her glorious Assumption, teaching us that holiness is the path to heaven.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of Mary's Assumption and its meaning for our lives, let us ask ourselves how we can 
              apply these lessons to our own spiritual journey and preparation for heaven.
            </p>
            <p>
              May Mary, Queen Assumed into Heaven, continue to be our model and intercessor, helping us to prepare for our own 
              eternal destiny and to live lives worthy of the glory that awaits us in heaven.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary's Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's powerful intercession as Queen of Heaven.
                Turn to her with confidence for all your spiritual needs and heavenly preparation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Mary will not fail to help 
                those who turn to her with trust and confidence for heavenly grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Mary, especially those related to your 
                spiritual growth and preparation for heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more heavenly blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-purple-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Mary, Queen Assumed into Heaven, lift my heart with you in the glory of your Assumption above sin and impurity. Help me to live a pure and holy life. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="The Assumption Novena - Day 4: Freedom from Sin" 
            url="/novenas/assumption/day-4"
            excerpt="Join me in praying The Assumption Novena - Day 4 focusing on Freedom from Sin." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/assumption/day-3"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 3: Throne in Heaven
          </Link>
          
          
          <Link
            href="/novenas/assumption/day-5"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 5: Heavenly Perspective →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
