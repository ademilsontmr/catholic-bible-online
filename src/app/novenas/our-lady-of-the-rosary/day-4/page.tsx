import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 4: Prayer',
  description: 'Pray the Our Lady of the Rosary Novena - Day 4 focusing on Prayer. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 4',
    'rosary novena day 4',
    'mary novena day 4',
    'our lady novena day 4',
    'rosary prayer prayer',
    'day 4 rosary novena',
    'prayer mary prayer',
    'rosary novena prayer',
    'mary novena prayer'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 4: Prayer',
    description: 'Pray the Our Lady of the Rosary Novena - Day 4 focusing on Prayer. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-4',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 4: Prayer',
    description: 'Pray the Our Lady of the Rosary Novena - Day 4 focusing on Prayer. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay4Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 4: Prayer
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
            <span className="text-gray-800">Day 4</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Prayer</h2>
          <p className="text-gray-700 leading-relaxed">
            On this fourth day of the Our Lady of the Rosary Novena, we pray for perseverance in prayer and to never be discouraged 
            when seeking assistance. We remember how Pope Pius V urged all Christians to pray fervently until victory was achieved.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 4</h2>

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
                <strong>Our Lady of the Rosary,</strong> Pope Pius V knew that the Christian forces were at a great disadvantage at the Battle of Lepanto. He urged all Christians to pray fervently until the victory was achieved.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask that you pray for us and all people to grow in perseverance in prayer.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may never be discouraged as we pray for assistance.</strong> Pray that we may grow in holiness and virtue each day of our lives.
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
                Today we pray for perseverance in prayer and to never be discouraged when seeking assistance. 
                We remember how Pope Pius V urged all Christians to pray fervently until victory was achieved.
              </p>

              <p className="mb-4">
                Pope Pius V knew that the Christian forces were at a great disadvantage at the Battle of Lepanto. 
                He understood that human strength alone would not be enough to achieve victory. 
                Therefore, he urged all Christians to pray fervently until the victory was achieved.
              </p>

              <p className="mb-4">
                This teaches us the importance of perseverance in prayer. Sometimes our prayers are not answered immediately, 
                and we may be tempted to give up. However, we must continue to pray with faith and trust, 
                knowing that God hears our prayers and will answer them in His own time and way.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us grow in perseverance in prayer. 
                Let us ask her to pray that we may never be discouraged as we pray for assistance, 
                and that we may grow in holiness and virtue each day of our lives.
              </p>

              <p>
                Remember that prayer is a powerful weapon that God has given us. When we pray with perseverance and faith, 
                we are opening ourselves to God's grace and to Mary's intercession. 
                Let us never be discouraged in our prayer life, but always trust in God's love and mercy.
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
            Our Lady of the Rosary, help us to grow in perseverance in prayer and to never be discouraged when seeking assistance. 
            Pray for us and all people to grow in perseverance in prayer, just as Pope Pius V urged all Christians to pray fervently. 
            Help us to grow in holiness and virtue each day of our lives, and may we always trust in the power of prayer. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 4: Prayer" 
            url="/novenas/our-lady-of-the-rosary/day-4"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 4 focusing on Prayer." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-3"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 3: Perseverance
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-5"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 5: Courage →
          </Link>
        </div>
      </div>
    </div>
  )
} 