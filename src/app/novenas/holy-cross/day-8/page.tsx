import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Holy Cross Novena - Day 8: Eternal Glory',
  description: "Pray the Holy Cross Novena - Day 8 focusing on Eternal Glory. Join in praying the traditional novena to seek God's mercy through the intercession of the Holy Cross.",
  keywords: [
    'holy cross novena day 8',
    'cross novena day 8',
    'jesus crucified novena day 8',
    'holy cross prayer day 8',
    'day 8 holy cross novena',
    'eternal glory prayer',
    'holy cross novena eternal glory',
    'cross novena eternal glory'
  ],
  openGraph: {
    title: 'Holy Cross Novena - Day 8: Eternal Glory',
    description: 'Pray the Holy Cross Novena - Day 8 focusing on Eternal Glory. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-cross/day-8',
  },
  twitter: {
    title: 'Holy Cross Novena - Day 8: Eternal Glory',
    description: 'Pray the Holy Cross Novena - Day 8 focusing on Eternal Glory. Join in praying the traditional novena.',
  }
}

export default function HolyCrossNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Holy Cross Novena – Day 8: Eternal Glory
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Holy Cross Novena to seek God's mercy through the intercession of the Holy Cross.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/holy-cross" className="hover:text-gray-700">Holy Cross Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Eternal Glory</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for the grace to come at last to the glory of Heaven. We ask that through the Holy Cross, we may be worthy to share in the eternal glory that Jesus won for us.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Jesus, Who because of Your burning love for us willed to be crucified and to shed Your Most Precious Blood for the redemption and salvation of our souls, look down upon us and grant the petition we ask for... (mention here)

We trust completely in Your Mercy.
Cleanse us from sin by Your Grace,
sanctify our work,
give us and all those who are dear to us our daily bread, lighten the burden of our sufferings,
bless our families,
and grant to the nations, so sorely afflicted,
Your Peace, which is the only true peace, so that by obeying Your Commandments we may come at last to the glory of Heaven.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection</h2>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-4">
              The Holy Cross is our path to eternal glory. Through Jesus' sacrifice, we have the hope of reaching Heaven, where we will share in the glory of the risen Christ for all eternity.
            </p>
            <p className="mb-4">
              As we reflect on this aspect of the Holy Cross and Jesus' sacrifice, let us ask ourselves how we can 
              apply these lessons to our own lives and grow in holiness.
            </p>
            <p>
              May the Holy Cross continue to be our source of strength and grace, helping us to trust completely 
              in God's mercy and love.
            </p>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in the Holy Cross</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in the power of the Holy Cross and Jesus' burning love for us.
                Turn to the Cross with confidence in every need, especially for mercy and grace.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith. Jesus will not fail to help 
                those who turn to His Cross with trust and confidence.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Jesus through the Holy Cross. He wants to help you 
                with the particular difficulties you face.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Jesus for His sacrifice on the Cross and for the graces you receive. 
                Gratitude opens our hearts to receive more blessings and divine mercy.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            O Jesus, through the Holy Cross, grant me the grace to come at last to the glory of Heaven. May I be worthy to share in Your eternal glory. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Holy Cross Novena - Day 8: Eternal Glory"
          text="Join me in praying the Holy Cross Novena - Day 8 focusing on Eternal Glory."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/holy-cross/day-7"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 7: Obedience to Commandments
          </Link>
          
          
          <Link
            href="/novenas/holy-cross/day-9"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 9: Complete Trust →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
