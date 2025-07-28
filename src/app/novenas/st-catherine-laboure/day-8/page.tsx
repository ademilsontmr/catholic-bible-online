import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 8: Hidden Life',
  description: 'Pray the St. Catherine Laboure Novena - Day 8 focusing on Hidden Life. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 8',
    'catherine laboure novena day 8',
    'saint novena day 8',
    'miraculous medal novena day 8',
    'catherine laboure prayer hidden life',
    'day 8 catherine laboure novena',
    'hidden life saint prayer',
    'catherine laboure novena hidden life',
    'saint novena hidden life'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 8: Hidden Life',
    description: 'Pray the St. Catherine Laboure Novena - Day 8 focusing on Hidden Life. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-8',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 8: Hidden Life',
    description: 'Pray the St. Catherine Laboure Novena - Day 8 focusing on Hidden Life. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay8Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 8: Hidden Life
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
            <span className="text-gray-800">Day 8</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Hidden Life</h2>
          <p className="text-gray-700 leading-relaxed">
            On this eighth day of the St. Catherine Laboure Novena, we contemplate Catherine's forty years of hidden service 
            and her embrace of humility. We learn about finding joy in simple acts of love.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 8</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                For forty years after her mission, Catherine lived in silence, serving the elderly. She embraced the hidden life, proving that sanctity flourishes in humble service.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                Lord, help me to find joy in simple acts of love. May I see each day as an opportunity to serve You in others.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may persevere in faith until the end of my life.<br/>
                Pray that I may embrace a spirit of humility and charity.
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
                Today we contemplate Catherine's forty years of hidden service and her embrace of humility. 
                We learn about finding joy in simple acts of love.
              </p>

              <p className="mb-4">
                For forty years after her mission, Catherine lived in silence, serving the elderly. She embraced the hidden life, 
                proving that sanctity flourishes in humble service. Her example shows us that true holiness is found in the ordinary.
              </p>

              <p className="mb-4">
                Catherine teaches us to find joy in simple acts of love and to see each day as an opportunity to serve God in others. 
                She shows us that perseverance in faith and a spirit of humility and charity are the paths to sanctity.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us persevere in faith until the end of our life. 
                Let us also ask her to help us embrace a spirit of humility and charity.
              </p>

              <p>
                St. Catherine's hidden life reminds us that sanctity is not about recognition or fame but about serving God 
                with love in the ordinary circumstances of daily life. Through her intercession, may we learn to find joy in simple acts of love.
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
            St. Catherine Laboure, help us to persevere in faith until the end of our life and to embrace a spirit of humility and charity. 
            Teach us to find joy in simple acts of love and to see each day as an opportunity to serve God in others. 
            Through your intercession, may we learn that sanctity flourishes in humble service and that true holiness is found in the ordinary. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="St. Catherine Laboure Novena - Day 8: Grace"
          text="Join me in praying the St. Catherine Laboure Novena - Day 8 focusing on Grace."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-7"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 7: Holy Obedience
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-9"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 9: Final Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
} 