import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 5: Miraculous Medal',
  description: 'Pray the St. Catherine Laboure Novena - Day 5 focusing on Miraculous Medal. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 5',
    'catherine laboure novena day 5',
    'saint novena day 5',
    'miraculous medal novena day 5',
    'catherine laboure prayer miraculous medal',
    'day 5 catherine laboure novena',
    'miraculous medal saint prayer',
    'catherine laboure novena miraculous medal',
    'saint novena miraculous medal'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 5: Miraculous Medal',
    description: 'Pray the St. Catherine Laboure Novena - Day 5 focusing on Miraculous Medal. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-5',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 5: Miraculous Medal',
    description: 'Pray the St. Catherine Laboure Novena - Day 5 focusing on Miraculous Medal. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 5: Miraculous Medal
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Miraculous Medal</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the St. Catherine Laboure Novena, we contemplate Mary's appearance to Catherine 
            and the mission of the Miraculous Medal. We learn about obedience to God's voice without hesitation.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                When Mary appeared to Catherine and entrusted her with the mission of the Miraculous Medal, Catherine responded with faith and obedience. She foresaw trials but trusted that God's grace would prevail.
              </p>

              <p className="mb-6">
                The Medal became a powerful sacramental, a source of countless conversions, healings, and graces—a triumph of God's mercy through Mary's intercession.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                St. Catherine, teach me to obey God's voice without hesitation. When He asks something difficult of me, help me to say "yes" generously, as you did.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may always choose God's will over my own desires.<br/>
                Pray that I may trust Mary's guidance in all things.
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
                Today we contemplate Mary's appearance to Catherine and the mission of the Miraculous Medal. 
                We learn about obedience to God's voice without hesitation.
              </p>

              <p className="mb-4">
                When Mary appeared to Catherine and entrusted her with the mission of the Miraculous Medal, 
                Catherine responded with faith and obedience. She foresaw trials but trusted that God's grace would prevail.
              </p>

              <p className="mb-4">
                The Medal became a powerful sacramental, a source of countless conversions, healings, and graces—a triumph of God's mercy through Mary's intercession. 
                Catherine's obedience to this mission has brought untold blessings to the world.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us always choose God's will over our own desires. 
                Let us also ask her to help us trust Mary's guidance in all things.
              </p>

              <p>
                St. Catherine's example teaches us to obey God's voice without hesitation. When He asks something difficult of us, 
                we should say "yes" generously, just as she did. Through her intercession, may we learn to trust in God's grace in all circumstances.
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
            St. Catherine Laboure, help us to always choose God's will over our own desires and to trust Mary's guidance in all things. 
            Teach us to obey God's voice without hesitation. When He asks something difficult of us, help us to say "yes" generously, just as you did. 
            Through your intercession, may we learn to trust in God's grace in all circumstances. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Catherine Laboure Novena - Day 5: Humility" 
            url="/novenas/st-catherine-laboure/day-5"
            excerpt="Join me in praying the St. Catherine Laboure Novena - Day 5 focusing on Humility." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Hidden Service
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Faith Amid Trials →
          </Link>
        </div>
      </div>
    </div>
  )
} 