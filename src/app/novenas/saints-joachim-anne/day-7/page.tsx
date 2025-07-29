import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Saints Joachim and Anne Novena - Day 7: Gratitude to God',
  description: 'Pray Saints Joachim and Anne Novena - Day 7 focusing on gratitude to god. Join in praying for holiness in marriage and family life.',
  keywords: [
    'saints joachim and anne novena day 7',
    'st joachim st anne novena day 7',
    'day 7 saints joachim anne novena',
    'gratitude to god joachim anne'
  ],
  openGraph: {
    title: 'Saints Joachim and Anne Novena - Day 7: Gratitude to God',
    description: 'Pray Saints Joachim and Anne Novena - Day 7 focusing on Gratitude to God.',
    url: 'https://catholicbibleonline.com/novenas/saints-joachim-anne/day-7',
  },
  twitter: {
    title: 'Saints Joachim and Anne Novena - Day 7: Gratitude to God',
    description: 'Pray Saints Joachim and Anne Novena - Day 7 focusing on Gratitude to God.',
  }
}

export default function SaintsJoachimAnneNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Saints Joachim and Anne Novena – Day 7: Gratitude to God
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Continue praying Saints Joachim and Anne Novena to honor the parents of Mary and grow in holiness in marriage and family life.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/saints-joachim-anne" className="hover:text-gray-700">Saints Joachim and Anne Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Gratitude to God</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day, we pray for gratitude for God's blessings and answered prayers.
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

              <p className="mb-4">Dear Lord, we thank You for giving us Sts. Joachim and Anne as examples of holiness. Help us to imitate the virtue they showed in their gratitude to You for answering their prayer for a child.</p>

              <p className="mb-4">Sts. Joachim and Anne, you longed to be parents for many years. You remained childless until you were advanced in age, but you persevered in asking God for a child.</p>

              <p className="mb-4">When God answered your prayers and you conceived Mary, you were very grateful to God for His great blessing. You chose to dedicate Mary to God in the Temple out of gratitude.</p>

              <p className="mb-4">Pray for me, that I may always be grateful to God for His blessings in my life. Pray that I may never take for granted God's many gifts in my life.</p>

              <p className="mb-6">
                <strong>Please also pray for (mention your intentions here).</strong>
              </p>

              <p className="mb-6">
                <strong>Sts. Joachim and Anne, pray for us!</strong>
              </p>

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
                Today we focus on gratitude to god. This aspect of honoring Saints Joachim and Anne helps us to grow in holiness 
                within our marriages and families, following their example of faithfulness and trust in God.
              </p>
              <p className="mb-4">
                As we continue our Saints Joachim and Anne Novena, let us remember that they were chosen by God for the special 
                mission of raising the Mother of God, and they can help us fulfill our own missions in marriage and family life.
              </p>
              <p>
                Let us ask Saints Joachim and Anne to help us be instruments of their love and grace in serving God within our 
                families, imitating their perfect example of holiness and devotion.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Faithful</h3>
              <p className="text-gray-700 text-sm">
                Remain faithful to God even in times of suffering and difficulty.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Hopeful</h3>
              <p className="text-gray-700 text-sm">
                Maintain hope in God's plan even when it seems impossible.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Trusting</h3>
              <p className="text-gray-700 text-sm">
                Trust in God's timing and His perfect plan for your life.
              </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Show gratitude for God's blessings and answered prayers.
              </p>
            </div>
          </div>
        </section>

        
        {/* Closing */}
        <section className="bg-emerald-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Saints Joachim and Anne, holy parents of the Blessed Virgin Mary, we thank You for this day of prayer and reflection. 
            Help us to carry Your grace and love into our marriages and families and to trust completely in Your powerful intercession. Amen.
          </p>
        </section>
        

        {/* Share Section */}
        <ShareButton 
          title="Saints Joachim and Anne Novena - Day 7: Gratitude to God"
          text="Join me in praying Saints Joachim and Anne Novena - Day 7 focusing on gratitude to god."
        />

        {/* Navigation */}
        <div className="flex justify-between items-center">
          
          <Link 
            href="/novenas/saints-joachim-anne/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Holy Family Life
          </Link>
          
          
          
          <Link 
            href="/novenas/saints-joachim-anne/day-8"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
          >
            Day 8: Cultivating Holy Family →
          </Link>
          
        </div>
      </div>

      
    </div>
  )
}