import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import RelatedNovenas from '@/components/RelatedNovenas'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 9: Final Perseverance',
  description: 'Pray the St. Catherine Laboure Novena - Day 9 focusing on Final Perseverance. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 9',
    'catherine laboure novena day 9',
    'saint novena day 9',
    'miraculous medal novena day 9',
    'catherine laboure prayer final perseverance',
    'day 9 catherine laboure novena',
    'final perseverance saint prayer',
    'catherine laboure novena final perseverance',
    'saint novena final perseverance'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 9: Final Perseverance',
    description: 'Pray the St. Catherine Laboure Novena - Day 9 focusing on Final Perseverance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-9',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 9: Final Perseverance',
    description: 'Pray the St. Catherine Laboure Novena - Day 9 focusing on Final Perseverance. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay9Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 9: Final Perseverance
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
            <span className="text-gray-800">Day 9</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Final Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this final day of the St. Catherine Laboure Novena, we reflect on Catherine's death and legacy, 
            praying for the grace of final perseverance. We learn about becoming saints and rejoicing in Heaven.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 9</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                Catherine died quietly, leaving behind a legacy of grace through the Miraculous Medal. Her body remains incorrupt, a sign of God's glory in His saints.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                St. Catherine, as I conclude this novena, obtain for me the grace of final perseverance. Help me to love God faithfully and to live for His glory until my last breath.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may become a saint and rejoice with you in Heaven.<br/>
                Pray that I may spread devotion to Mary and live a life of holiness.
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
                Today we reflect on Catherine's death and legacy, praying for the grace of final perseverance. 
                We learn about becoming saints and rejoicing in Heaven.
              </p>

              <p className="mb-4">
                Catherine died quietly, leaving behind a legacy of grace through the Miraculous Medal. Her body remains incorrupt, 
                a sign of God's glory in His saints. This miraculous preservation is a testament to her holiness and God's favor.
              </p>

              <p className="mb-4">
                Catherine's life teaches us that the goal of our spiritual journey is to become saints and rejoice with her in Heaven. 
                She shows us that spreading devotion to Mary and living a life of holiness are the paths to eternal glory.
              </p>

              <p className="mb-4">
                As we conclude this novena, let us ask St. Catherine to obtain for us the grace of final perseverance. 
                Let us also ask her to help us become saints and spread devotion to Mary.
              </p>

              <p>
                St. Catherine's legacy reminds us that our lives should be lived for God's glory until our last breath. 
                Through her intercession, may we learn to love God faithfully and to live a life of holiness that leads to Heaven.
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
            St. Catherine Laboure, obtain for us the grace of final perseverance. Help us to become saints and rejoice with you in Heaven. 
            Teach us to spread devotion to Mary and live a life of holiness. May we love God faithfully and live for His glory until our last breath. 
            Through your intercession, may we learn that our lives should be lived for God's glory and that holiness leads to eternal joy. Amen.
          </p>
        </section>

        {/* Final Message */}
        <section className="bg-red-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">🎉 Congratulations!</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            You have completed the St. Catherine Laboure Novena! As you continue your spiritual journey, 
            may your heart be filled with early life faith, marian devotion, religious vocation, hidden service, 
            miraculous medal devotion, faith amid trials, holy obedience, hidden life humility, and final perseverance. 
            May St. Catherine Laboure continue to watch over you and help you in all your needs.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Catherine Laboure Novena - Day 9: Devotion" 
            url="/novenas/st-catherine-laboure/day-9"
            excerpt="Join me in praying the St. Catherine Laboure Novena - Day 9 focusing on Devotion." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-8"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 8: Trust
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Novena Overview →
          </Link>
        </div>
      </div>

      {/* Related Novenas Section */}
      <RelatedNovenas currentNovena="Novena to St. Catherine Laboure" />
    </div>
  )
} 