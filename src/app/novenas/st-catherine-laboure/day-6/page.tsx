import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'St. Catherine Laboure Novena - Day 6: Faith Amid Trials',
  description: 'Pray the St. Catherine Laboure Novena - Day 6 focusing on Faith Amid Trials. Join in praying the traditional novena to seek her intercession.',
  keywords: [
    'st catherine laboure novena day 6',
    'catherine laboure novena day 6',
    'saint novena day 6',
    'miraculous medal novena day 6',
    'catherine laboure prayer faith amid trials',
    'day 6 catherine laboure novena',
    'faith amid trials saint prayer',
    'catherine laboure novena faith amid trials',
    'saint novena faith amid trials'
  ],
  openGraph: {
    title: 'St. Catherine Laboure Novena - Day 6: Faith Amid Trials',
    description: 'Pray the St. Catherine Laboure Novena - Day 6 focusing on Faith Amid Trials. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/st-catherine-laboure/day-6',
  },
  twitter: {
    title: 'St. Catherine Laboure Novena - Day 6: Faith Amid Trials',
    description: 'Pray the St. Catherine Laboure Novena - Day 6 focusing on Faith Amid Trials. Join in praying the traditional novena.',
  }
}

export default function StCatherineLaboureNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            St. Catherine Laboure Novena – Day 6: Faith Amid Trials
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith Amid Trials</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the St. Catherine Laboure Novena, we reflect on Catherine's trust in God's help 
            and her fidelity amidst opposition and trials. We learn that true holiness is measured by fidelity amidst difficulties.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Meditation</strong><br/>
                Mary told Catherine that she would face opposition but assured her of God's help. Catherine believed and trusted, never wavering in faith.
              </p>

              <p className="mb-6">
                True holiness is measured not by the absence of trials but by fidelity amidst them.
              </p>

              <p className="mb-6">
                <strong>Prayer</strong><br/>
                Lord, when I encounter difficulties, grant me courage. Help me to trust You fully, as St. Catherine did, knowing that Your grace is sufficient for every challenge.
              </p>

              <p className="mb-6">
                <strong>Petition</strong><br/>
                Pray that I may endure trials patiently and confidently.<br/>
                Pray that I may never lose hope in God's providence.
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
                Today we reflect on Catherine's trust in God's help and her fidelity amidst opposition and trials. 
                We learn that true holiness is measured by fidelity amidst difficulties.
              </p>

              <p className="mb-4">
                Mary told Catherine that she would face opposition but assured her of God's help. Catherine believed and trusted, 
                never wavering in faith. True holiness is measured not by the absence of trials but by fidelity amidst them.
              </p>

              <p className="mb-4">
                Catherine's example shows us that when we encounter difficulties, we should trust in God fully, 
                knowing that His grace is sufficient for every challenge. She teaches us to endure trials patiently and confidently.
              </p>

              <p className="mb-4">
                As we pray today, let us ask St. Catherine to help us endure trials patiently and confidently. 
                Let us also ask her to help us never lose hope in God's providence.
              </p>

              <p>
                St. Catherine's faith reminds us that we should never lose hope in God's providence. Through her intercession, 
                may we learn to trust in God's help in all circumstances and remain faithful even when facing opposition.
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
            St. Catherine Laboure, help us to endure trials patiently and confidently and to never lose hope in God's providence. 
            When we encounter difficulties, grant us courage to trust in God fully, just as you did. 
            Help us to know that God's grace is sufficient for every challenge. Through your intercession, 
            may we remain faithful even when facing opposition. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="St. Catherine Laboure Novena - Day 6: Service" 
            url="/novenas/st-catherine-laboure/day-6"
            excerpt="Join me in praying the St. Catherine Laboure Novena - Day 6 focusing on Service." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/st-catherine-laboure/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Miraculous Medal
          </Link>
          
          <Link 
            href="/novenas/st-catherine-laboure/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Holy Obedience →
          </Link>
        </div>
      </div>
    </div>
  )
} 