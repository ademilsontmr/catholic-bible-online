import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Ascension Novena - Day 1: Heavenly Glory',
  description: "Pray The Ascension Novena - Day 1 focusing on Heavenly Glory. Join in praying the traditional novena to honor Jesus' Ascension into heaven.",
  keywords: [
    'the ascension novena day 1',
    'ascension novena day 1',
    'jesus ascension novena day 1',
    'ascension prayer day 1',
    'day 1 ascension novena',
    'heavenly glory prayer',
    'ascension novena heavenly glory',
    'jesus ascension novena heavenly glory'
  ],
  openGraph: {
    title: 'The Ascension Novena - Day 1: Heavenly Glory',
    description: 'Pray The Ascension Novena - Day 1 focusing on Heavenly Glory. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/ascension/day-1',
  },
  twitter: {
    title: 'The Ascension Novena - Day 1: Heavenly Glory',
    description: 'Pray The Ascension Novena - Day 1 focusing on Heavenly Glory. Join in praying the traditional novena.',
  }
}

export default function AscensionNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            The Ascension Novena – Day 1: Heavenly Glory
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying The Ascension Novena to honor Jesus' Ascension into heaven.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/ascension" className="hover:text-gray-700">The Ascension Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Heavenly Glory</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of The Ascension Novena, we focus on rejoicing in Jesus' glorious Ascension into heaven. We honor Him on the feast of His Ascension and rejoice with all our heart at the glory into which He entered.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Jesus, I honor You on the feast of Your Ascension into heaven. I rejoice with all my heart at the glory into which You entered to reign as King of heaven and earth. When the struggle of this life is over, give me the grace to share Your joy and triumph in heaven for all eternity.
              </p>

              <p className="mb-4">
                I believe that You entered into Your glorious Kingdom to prepare a place for me, for You promised to come again to take me to Yourself. Grant that I may seek only the joys of Your friendship and love, so that I may deserve to be united with You in heaven.
              </p>

              <p className="mb-4">
                In the hour of my own homecoming, when I appear before Your Father to give an account of my life on earth, have mercy on me.
              </p>

              <p className="mb-4">
                Jesus, in Your love for me You have brought me from evil to good and from misery to happiness. Give me the grace to rise above my human weakness. May Your Humanity give me courage in my weakness and free me from my sins.
              </p>

              <p className="mb-4">
                Through Your grace, give me the courage of perseverance for You have called and justified me by faith. May I hold fast to the life You have given me and come to the eternal gifts You promised.
              </p>

              <p className="mb-4">
                You love me, dear Jesus. Help me to love You in return. I ask You to grant this special favor: <em>(Mention your request).</em>
              </p>

              <p>
                By Your unceasing care, guide my steps toward the life of glory You have prepared for those who love You. Make me grow in holiness and thank You by a life of faithful service.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              Jesus' Ascension into heaven is a cause for great joy and celebration. It marks His triumph over death and His return to the Father, where He reigns as King of heaven and earth. This glorious event gives us hope for our own eternal destiny.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of Jesus' Ascension and its meaning for our lives, let us ask ourselves how we can 
              apply these lessons to our own spiritual journey and preparation for heaven.
            </p>
            <p>
              May Jesus, our ascended King, continue to be our model and intercessor, helping us to prepare for our own 
              eternal destiny and to live lives worthy of the glory that awaits us in heaven.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Jesus' Intercession</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Jesus' powerful intercession as King of Heaven.
                Turn to Him with confidence for all your spiritual needs and heavenly preparation.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to help 
                those who turn to Him with trust and confidence for heavenly grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific intentions to Jesus, especially those related to your 
                spiritual growth and preparation for heaven.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for His intercession and for the graces you receive. 
                Gratitude opens our hearts to receive more heavenly blessings.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Jesus, help me to rejoice in Your glorious Ascension into heaven. May I always honor You as King of heaven and earth and find my joy in Your eternal glory. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="The Ascension Novena - Day 1: Heavenly Glory"
          text="Join me in praying The Ascension Novena - Day 1 focusing on Heavenly Glory."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          <div></div>
          
          <Link
            href="/novenas/ascension/day-2"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 2: Kingship of Heaven →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
