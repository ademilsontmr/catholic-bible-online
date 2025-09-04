import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 6: Freedom',
  description: 'Pray the Our Lady of the Rosary Novena - Day 6 focusing on Freedom. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 6',
    'rosary novena day 6',
    'mary novena day 6',
    'our lady novena day 6',
    'rosary prayer freedom',
    'day 6 rosary novena',
    'freedom mary prayer',
    'rosary novena freedom',
    'mary novena freedom'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 6: Freedom',
    description: 'Pray the Our Lady of the Rosary Novena - Day 6 focusing on Freedom. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-6',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 6: Freedom',
    description: 'Pray the Our Lady of the Rosary Novena - Day 6 focusing on Freedom. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay6Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 6: Freedom
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
            <span className="text-gray-800">Day 6</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Freedom</h2>
          <p className="text-gray-700 leading-relaxed">
            On this sixth day of the Our Lady of the Rosary Novena, we pray that all Christians may freely practice their faith 
            and never allow any difficulty to prevent us from serving God. We remember how Mary's intercession helped achieve victory.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 6</h2>

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
                <strong>Our Lady of the Rosary,</strong> the Ottoman Empire's aggression was a grave threat to Christianity. Pope Pius V turned to your intercession, and through your help, the Christian forces miraculously defeated the stronger naval forces.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray that all Christians may freely practice their faith.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may grow in virtue and holiness each day of our lives.</strong> Pray that we may never allow any difficulty to prevent us from serving God.
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
                Today we pray that all Christians may freely practice their faith and never allow any difficulty 
                to prevent us from serving God. We remember how Mary's intercession helped achieve victory.
              </p>

              <p className="mb-4">
                The Ottoman Empire's aggression was a grave threat to Christianity. Their naval forces were much stronger 
                than the Christian forces, and they posed a serious danger to the freedom of Christians to practice their faith. 
                Pope Pius V turned to Mary's intercession, and through her help, the Christian forces miraculously defeated the stronger naval forces.
              </p>

              <p className="mb-4">
                This victory at the Battle of Lepanto secured the freedom for Christians to practice their faith without fear. 
                It shows us that Mary's intercession is powerful and that she wants to help us maintain our freedom to serve God.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray that all Christians may freely practice their faith. 
                Let us ask her to help us grow in virtue and holiness each day of our lives, 
                and to never allow any difficulty to prevent us from serving God.
              </p>

              <p>
                Remember that our freedom to practice our faith is a precious gift that we must cherish and defend. 
                When we serve God faithfully, we are living out our true purpose and bringing glory to Him. 
                Let us never allow any difficulty or obstacle to prevent us from serving God with love and devotion.
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
            Our Lady of the Rosary, pray that all Christians may freely practice their faith. Help us to grow in virtue 
            and holiness each day of our lives, and to never allow any difficulty to prevent us from serving God. 
            Thank you for your powerful intercession at the Battle of Lepanto, which secured freedom for Christians to practice their faith. 
            May we always cherish and defend our freedom to serve God with love and devotion. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 6: Protection" 
            url="/novenas/our-lady-of-the-rosary/day-6"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 6 focusing on Protection." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-5"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 5: Courage
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-7"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 7: Peace →
          </Link>
        </div>
      </div>
    </div>
  )
} 