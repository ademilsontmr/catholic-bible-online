import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Holy Cross Novena - Day 4: Suffering and Comfort',
  description: "Pray the Holy Cross Novena - Day 4 focusing on Suffering and Comfort. Join in praying the traditional novena to seek God's mercy through the intercession of the Holy Cross.",
  keywords: [
    'holy cross novena day 4',
    'cross novena day 4',
    'jesus crucified novena day 4',
    'holy cross prayer day 4',
    'day 4 holy cross novena',
    'suffering and comfort prayer',
    'holy cross novena suffering and comfort',
    'cross novena suffering and comfort'
  ],
  openGraph: {
    title: 'Holy Cross Novena - Day 4: Suffering and Comfort',
    description: 'Pray the Holy Cross Novena - Day 4 focusing on Suffering and Comfort. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/holy-cross/day-4',
  },
  twitter: {
    title: 'Holy Cross Novena - Day 4: Suffering and Comfort',
    description: 'Pray the Holy Cross Novena - Day 4 focusing on Suffering and Comfort. Join in praying the traditional novena.',
  }
}

export default function HolyCrossNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Holy Cross Novena – Day 4: Suffering and Comfort
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-red-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Suffering and Comfort</h2>
          <p className="text-gray-700 leading-relaxed">
            Today we focus on praying for God to lighten the burden of our sufferings. We unite our sufferings with those of Jesus on the Cross, asking for His comfort and strength.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

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
              Jesus understands our sufferings because He experienced them on the Cross. Through His sacrifice, He gives meaning to our pain and offers us comfort and strength to bear our crosses.
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
            O Jesus, through the Holy Cross, lighten the burden of my sufferings. May I unite my pain with Yours and find comfort in Your sacrifice. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Holy Cross Novena - Day 4: Suffering and Comfort"
          text="Join me in praying the Holy Cross Novena - Day 4 focusing on Suffering and Comfort."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center ">
          
          <Link
            href="/novenas/holy-cross/day-3"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            ← Day 3: Daily Bread
          </Link>
          
          
          <Link
            href="/novenas/holy-cross/day-5"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Day 5: Family Blessings →
          </Link>
          
        </div>
      </div>
    </div>
  )
}
