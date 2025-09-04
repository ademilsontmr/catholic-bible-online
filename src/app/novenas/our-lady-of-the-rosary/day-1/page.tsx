import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 1: Devotion',
  description: 'Pray the Our Lady of the Rosary Novena - Day 1 focusing on Devotion. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 1',
    'rosary novena day 1',
    'mary novena day 1',
    'our lady novena day 1',
    'rosary prayer devotion',
    'day 1 rosary novena',
    'devotion mary prayer',
    'rosary novena devotion',
    'mary novena devotion'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 1: Devotion',
    description: 'Pray the Our Lady of the Rosary Novena - Day 1 focusing on Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-1',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 1: Devotion',
    description: 'Pray the Our Lady of the Rosary Novena - Day 1 focusing on Devotion. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay1Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 1: Devotion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of the Rosary Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-the-rosary" className="hover:text-gray-700">Our Lady of the Rosary Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 1</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Devotion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this first day of the Our Lady of the Rosary Novena, we pray for true devotion to Our Lady of the Rosary 
            and growth in holiness and virtue. We ask Mary to care for us with her tender, motherly love 
            and to bring all our needs before the throne of her Divine Son.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 1</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>In the name of the Father, and of the Son, and of the Holy Spirit. Amen.</strong>
              </p>

              <p className="mb-6">
                <strong>Dear Lord, we thank You for giving us Your Mother as Our Lady of the Rosary.</strong> 
                Help us to turn to her as our mother in all our needs!
              </p>

              <p className="mb-6">
                <strong>Our Lady of the Rosary,</strong> you care for each of us with tender, motherly love. 
                You desire that we turn to you so you can care for us as a mother.
              </p>

              <p className="mb-6">
                <strong>Please bring all of our needs before the throne of your Divine Son.</strong> Today, we especially ask that you pray for us and for all people, that we may grow in true devotion to you.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may make use of every help for salvation that God gives us.</strong> Pray that we may grow in holiness and virtue each day of our lives.
              </p>

              <p className="mb-6">
                <strong>We also ask in this novena for:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of the Rosary, pray for us!</strong>
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
                Today we pray for true devotion to Our Lady of the Rosary and growth in holiness and virtue. 
                Mary cares for each of us with tender, motherly love, and she desires that we turn to her 
                so she can care for us as a mother.
              </p>

              <p className="mb-4">
                The Rosary is one of the most powerful prayers in the Catholic tradition. It combines vocal prayer 
                with mental prayer, allowing us to meditate on the life of Jesus and Mary while praying. 
                Through the Rosary, we can grow closer to both Jesus and Mary.
              </p>

              <p className="mb-4">
                Mary wants us to make use of every help for salvation that God gives us. This includes the Rosary, 
                which is a powerful tool for spiritual growth. When we pray the Rosary with devotion, 
                we are opening ourselves to Mary's intercession and to the graces that God wants to give us.
              </p>

              <p className="mb-4">
                As we begin this novena, let us ask Mary to help us grow in true devotion to her and to the Rosary. 
                Let us ask her to pray for us and for all people, that we may grow in holiness and virtue each day of our lives.
              </p>

              <p>
                Remember that Mary is our mother and she wants to help us. She cares for each of us with tender, 
                motherly love, and she desires that we turn to her in all our needs. Through the Rosary, 
                we can experience her love and intercession in a powerful way.
              </p>
            </div>
          </div>
        </section>

        {/* How to Make an Excellent Novena */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">How to Make an Excellent Novena</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Trust in Mary</h3>
              <p className="text-gray-700 text-sm">
                Trust completely in Mary's maternal care and her ability to help you.
                Turn to her with confidence in every need.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Persistent</h3>
              <p className="text-gray-700 text-sm">
                Pray this novena with persistence and faith.
                Mary will not fail to help those who turn to her with trust.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Specific</h3>
              <p className="text-gray-700 text-sm">
                Present your specific needs and intentions to Mary.
                She wants to help you with the particular difficulties you face.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-black mb-4">Be Grateful</h3>
              <p className="text-gray-700 text-sm">
                Thank Mary for her help and intercession.
                Gratitude opens our hearts to receive more graces.
              </p>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">Closing Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            Our Lady of the Rosary, help us to grow in true devotion to you and to the Rosary. 
            Pray for us and for all people, that we may grow in holiness and virtue each day of our lives. 
            Help us to make use of every help for salvation that God gives us, especially the powerful prayer of the Rosary. 
            May we always turn to you as our mother in all our needs. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 1: Faith" 
            url="/novenas/our-lady-of-the-rosary/day-1"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 1 focusing on Faith." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Back to Novena Overview
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-2"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 2: Faith →
          </Link>
        </div>
      </div>
    </div>
  )
} 