import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'St. Joan of Arc Novena - Day 4: Strength and Endurance',
  description: 'Pray St. Joan of Arc Novena - Day 4 focusing on strength and endurance. Join in praying for courage, strength, and faithfulness to God\'s will.',
  keywords: [
    'st joan of arc novena day 4',
    'st joan of arc prayer novena day 4',
    'day 4 st joan of arc novena',
    'strength and endurance st joan of arc'
  ],
  openGraph: {
    title: 'St. Joan of Arc Novena - Day 4: Strength and Endurance',
    description: 'Pray St. Joan of Arc Novena - Day 4 focusing on Strength and Endurance.',
    url: 'https://catholicbibleonline.com/novenas/st-joan-of-arc/day-4',
  },
  twitter: {
    title: 'St. Joan of Arc Novena - Day 4: Strength and Endurance',
    description: 'Pray St. Joan of Arc Novena - Day 4 focusing on Strength and Endurance.',
  }
}

export default function StJoanOfArcNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Joan of Arc Novena – Day 4: Strength and Endurance
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying St. Joan of Arc Novena to honor the Maid of Orléans and seek her powerful intercession for courage and faithfulness.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-joan-of-arc" className="hover:text-gray-700">St. Joan of Arc Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-orange-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Strength and Endurance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day, we pray for the strength and endurance needed for constant spiritual warfare.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-4">Eternal Father, you gave us Saint Joan of Arc through your infinite love and mercy for us. We humbly ask that you send down your Holy Spirit upon us, as Your Spirit is the intermediary by which the Word goes forth from your lips and reaches the ears of the faithful. Allow me to be a witness to your Son Jesus Christ just as St. Joan of Arc was. Oh, Jesus, grant me the courage to do your will, that I may be in one accord with our Father in Heaven. I thank you for the gift of your love, which I hope to one day fully understand.</p>

              <p className="mb-4">St. Joan of Arc, by your powerful intercession, hear and answer me.</p>

              <p className="mb-4">Saint Joan of Arc, patron of France, my patron saint, I ask you now to fight this battle with me by prayer, just as you led your troops to victory in battle. You, who were filled with the Holy Spirit and chosen by God, help me this day with the favor I ask.</p>

              <p className="mb-6">
                <strong>(here say your intention)</strong>
              </p>

              <p className="mb-4">Grant me by your divine and powerful intercession, the courage and strength I need to endure this constant fight. Oh St. Joan, help me to be victorious in the tasks God presents to me.</p>

              <p className="mb-4">I thank you and ask you for your continuing protection of God\'s people.</p>

              <p className="mb-4">Sweet Saint Joan, plead for me before the throne of almighty God that I may be deemed worthy to be granted the request I have asked. Help me, Saint Joan, to be more like you in the attempt to love the Lord with all my heart, soul, and mind. Through your guidance and prayer help me to be a truly devout and loving Christian, that I may both know and see the will of God. Help me now St. Joan, in my time of need. I ask that you may always be near me guiding me closer each day to Jesus. Thank you Saint Joan for having heard my prayer.</p>

              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Reflection for Today</h2>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                Today we focus on strength and endurance. This aspect of honoring St. Joan of Arc helps you to understand 
                and imitate her extraordinary example of courage, strength, and faithfulness to God\'s will.
              </p>
              <p className="mb-4">
                As we continue our St. Joan of Arc Novena, let us remember that her life shows us how to be victorious 
                in spiritual battles and remain faithful to God\'s divine mission, just as she led her troops to victory.
              </p>
              <p>
                Let us ask St. Joan to help us grow in courage, strength, and faithfulness to God\'s will, just as she 
                did throughout her extraordinary life as the Maid of Orléans.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Courageous</h3>
              <p className="text-gray-700 text-sm">
                Show courage like St. Joan in facing spiritual battles and challenges.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Remain faithful to God\'s will and His divine mission for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Strong</h3>
              <p className="text-gray-700 text-sm">
                Draw strength from St. Joan\'s example of endurance and perseverance.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Devout</h3>
              <p className="text-gray-700 text-sm">
                Live a truly devout and loving Christian life like St. Joan.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-orange-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            St. Joan of Arc, Maid of Orléans and patron saint of France, I thank you for this day of prayer and reflection. 
            Help me to imitate your courage, strength, and faithfulness to God\'s will. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Joan of Arc Novena - Day 4: Strength and Endurance" 
            url="/novenas/st-joan-of-arc/day-4"
            excerpt="Join me in praying St. Joan of Arc Novena - Day 4 focusing on strength and endurance." 
          />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/st-joan-of-arc/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Victory in Battle
          </Link>
          
          
          
          <Link 
            href="/novenas/st-joan-of-arc/day-5"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
          >
            Day 5: Divine Guidance →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}