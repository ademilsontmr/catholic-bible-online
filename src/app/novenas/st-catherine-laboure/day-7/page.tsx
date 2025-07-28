import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 7: Holy Obedience',
  description: 'Pray the St. Catherine Laboure Novena - Day 7 focusing on Holy Obedience. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 7',
    'catherine laboure novena day 7',
    'saint novena day 7',
    'miraculous medal novena day 7',
    'catherine laboure prayer holy obedience',
    'day 7 catherine laboure novena',
    'holy obedience saint prayer',
    'catherine laboure novena holy obedience',
    'saint novena holy obedience'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 7: Holy Obedience',
    description: 'Pray the St. Catherine Laboure Novena - Day 7 focusing on Holy Obedience. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-7',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 7: Holy Obedience',
    description: 'Pray the St. Catherine Laboure Novena - Day 7 focusing on Holy Obedience. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 7: Holy Obedience
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the St. Catherine Laboure Novena to seek her intercession and learn about the Miraculous Medal.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/st-catherine-laboure" className="hover:text-gray-700">St. Catherine Laboure Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Holy Obedience</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the St. Catherine Laboure Novena, we meditate on Catherine's practice of holy obedience 
            and submission to God's will. We learn about accepting God's will in all circumstances.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                Catherine's life teaches the beauty of holy obedience. She submitted to her confessor, even when it cost her dearly. Through her humility, the Miraculous Medal spread throughout the world.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                St. Catherine, help me to practice obedience with love and faith. May I accept God's will in all circumstances and obey His commandments joyfully.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may grow in humility and obedience.<br/>
                Pray that I may seek God's will above all.
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong><br/>
                (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>St. Catherine Laboure, pray for us!</strong>
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
                Today we meditate on Catherine's practice of holy obedience and submission to God's will. 
                We learn about accepting God's will in all circumstances.
              </p>

              <p className="mb-4">
                Catherine's life teaches the beauty of holy obedience. She submitted to her confessor, even when it cost her dearly. 
                Through her humility, the Miraculous Medal spread throughout the world.
              </p>

              <p className="mb-4">
                Catherine shows us that true obedience is not about blind submission but about trusting in God's plan 
                and accepting His will with love and faith. She teaches us to obey God's commandments joyfully.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us grow in humility and obedience. 
                Let us also ask her to help us seek God's will above all.
              </p>

              <p>
                St. Catherine's example reminds us that through obedience to God's will, great things can be accomplished. 
                Through her intercession, may we learn to practice obedience with love and faith, accepting God's will in all circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in St. Catherine</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in St. Catherine's intercession and her ability to help you.
                Turn to her with confidence in every need, especially for devotion to Mary.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                St. Catherine will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to St. Catherine.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank St. Catherine for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            St. Catherine Laboure, help us to grow in humility and obedience and to seek God's will above all. 
            Teach us to practice obedience with love and faith. May we accept God's will in all circumstances 
            and obey His commandments joyfully. Through your intercession, may we learn that through obedience to God's will, 
            great things can be accomplished. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Catherine Laboure Novena - Day 7: Intercession"
          text="Join me in praying the St. Catherine Laboure Novena - Day 7 focusing on Intercession."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Faith Amid Trials
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Hidden Life →
          </Link>
        </div>
      </div>
    </div>
  )
} 