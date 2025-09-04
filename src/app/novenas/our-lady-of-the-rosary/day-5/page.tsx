import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 5: Courage',
  description: 'Pray the Our Lady of the Rosary Novena - Day 5 focusing on Courage. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 5',
    'rosary novena day 5',
    'mary novena day 5',
    'our lady novena day 5',
    'rosary prayer courage',
    'day 5 rosary novena',
    'courage mary prayer',
    'rosary novena courage',
    'mary novena courage'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 5: Courage',
    description: 'Pray the Our Lady of the Rosary Novena - Day 5 focusing on Courage. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-5',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 5: Courage',
    description: 'Pray the Our Lady of the Rosary Novena - Day 5 focusing on Courage. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay5Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 5: Courage
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
            <span className="text-gray-800">Day 5</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Courage</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fifth day of the Our Lady of the Rosary Novena, we pray for all persecuted Christians and to practice our faith courageously. 
            We remember how Mary's intercession preserved the faith against those hostile to it.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 5</h2>

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
                <strong>Our Lady of the Rosary,</strong> Pope Pius V called upon your powerful intercession during a time of great need for Christianity. A Christian defeat at the Battle of Lepanto would have greatly hindered the faith across the world. Your intercession preserved the faith against those hostile to it.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray for all persecuted Christians.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may always practice our faith courageously.</strong> Pray that we may love God with greater devotion each day.
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
                Today we pray for all persecuted Christians and to practice our faith courageously. 
                We remember how Mary's intercession preserved the faith against those hostile to it.
              </p>

              <p className="mb-4">
                Pope Pius V called upon Mary's powerful intercession during a time of great need for Christianity. 
                A Christian defeat at the Battle of Lepanto would have greatly hindered the faith across the world. 
                Mary's intercession preserved the faith against those hostile to it.
              </p>

              <p className="mb-4">
                This teaches us the importance of courage in practicing our faith. Throughout history, 
                Christians have faced persecution and hostility for their beliefs. However, we must always 
                practice our faith courageously, trusting in God's protection and Mary's intercession.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray for all persecuted Christians around the world. 
                Let us ask her to help us practice our faith courageously and to love God with greater devotion each day.
              </p>

              <p>
                Remember that our faith is a precious gift that we must cherish and defend. When we practice our faith courageously, 
                we are giving witness to the truth of the Gospel and to the love of God. 
                Let us always be ready to stand up for our faith, trusting in God's strength and Mary's intercession.
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
            Our Lady of the Rosary, pray for all persecuted Christians around the world. Help us to practice our faith courageously 
            and to love God with greater devotion each day. Thank you for preserving the faith against those hostile to it 
            through your powerful intercession at the Battle of Lepanto. May we always be ready to stand up for our faith, 
            trusting in God's strength and your maternal care. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 5: Devotion" 
            url="/novenas/our-lady-of-the-rosary/day-5"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 5 focusing on Devotion." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-4"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 4: Prayer
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-6"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 6: Freedom →
          </Link>
        </div>
      </div>
    </div>
  )
} 