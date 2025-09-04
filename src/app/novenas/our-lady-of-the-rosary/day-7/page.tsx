import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 7: Peace',
  description: 'Pray the Our Lady of the Rosary Novena - Day 7 focusing on Peace. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 7',
    'rosary novena day 7',
    'mary novena day 7',
    'our lady novena day 7',
    'rosary prayer peace',
    'day 7 rosary novena',
    'peace mary prayer',
    'rosary novena peace',
    'mary novena peace'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 7: Peace',
    description: 'Pray the Our Lady of the Rosary Novena - Day 7 focusing on Peace. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-7',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 7: Peace',
    description: 'Pray the Our Lady of the Rosary Novena - Day 7 focusing on Peace. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 7: Peace
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
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Peace</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Our Lady of the Rosary Novena, we pray for peace in our modern world and to carry out God's will. 
            We remember how Mary's intercession helped bring victory and peace during times of great conflict.
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

              <p className="mb-6">
                <strong>Dear Lord, we thank You for giving us Your Mother as Our Lady of the Rosary.</strong> 
                Help us to turn to her as our mother in all our needs!
              </p>

              <p className="mb-6">
                <strong>Our Lady of the Rosary,</strong> Pope Pius V turned to your intercession during a time of great conflict. Battles raged between Muslim and Christian forces. Your intercession helped bring victory and peace.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray for peace in our modern world.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may be eager to carry out God's will in our lives and in the world.</strong> Pray that we may do all we can to preach the Gospel to others.
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
                Today we pray for peace in our modern world and to carry out God's will. 
                We remember how Mary's intercession helped bring victory and peace during times of great conflict.
              </p>

              <p className="mb-4">
                Pope Pius V turned to Mary's intercession during a time of great conflict. Battles raged between Muslim and Christian forces, 
                and the world was in turmoil. Through Mary's powerful intercession, victory was achieved and peace was restored.
              </p>

              <p className="mb-4">
                This teaches us that Mary's intercession is not only powerful for individual needs, 
                but also for the needs of the world. She can help bring peace to our troubled world 
                and guide us in carrying out God's will in our lives.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to pray for peace in our modern world. 
                Let us ask her to help us be eager to carry out God's will in our lives and in the world, 
                and to do all we can to preach the Gospel to others.
              </p>

              <p>
                Remember that we are called to be peacemakers and to spread the Gospel of peace. 
                When we carry out God's will in our lives, we are contributing to the peace of the world. 
                Let us always be eager to do God's will and to share His love with others.
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
            Our Lady of the Rosary, pray for peace in our modern world. Help us to be eager to carry out God's will 
            in our lives and in the world, and to do all we can to preach the Gospel to others. 
            Thank you for your powerful intercession that helped bring victory and peace during times of great conflict. 
            May we always be peacemakers and spread the Gospel of peace wherever we go. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 7: Intercession" 
            url="/novenas/our-lady-of-the-rosary/day-7"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 7 focusing on Intercession." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Freedom
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Conversion →
          </Link>
        </div>
      </div>
    </div>
  )
} 