import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 3: Perseverance',
  description: 'Pray the Our Lady of the Rosary Novena - Day 3 focusing on Perseverance. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 3',
    'rosary novena day 3',
    'mary novena day 3',
    'our lady novena day 3',
    'rosary prayer perseverance',
    'day 3 rosary novena',
    'perseverance mary prayer',
    'rosary novena perseverance',
    'mary novena perseverance'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 3: Perseverance',
    description: 'Pray the Our Lady of the Rosary Novena - Day 3 focusing on Perseverance. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-3',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 3: Perseverance',
    description: 'Pray the Our Lady of the Rosary Novena - Day 3 focusing on Perseverance. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay3Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 3: Perseverance
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
            <span className="text-gray-800">Day 3</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Perseverance</h2>
          <p className="text-gray-700 leading-relaxed">
            On this third day of the Our Lady of the Rosary Novena, we pray for the virtue of faith and to hold fast to it 
            even in great difficulties. We remember how Christians were at a great material disadvantage but placed their faith in God.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 3</h2>

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
                <strong>Our Lady of the Rosary,</strong> the Christian forces were at a great material disadvantage when they fought against the Ottoman Empire. Despite these discouraging circumstances, Christians placed their faith in God and turned to your intercession with confidence.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray that we and all people may grow in the virtue of faith.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may grow in all virtues necessary for holiness.</strong> Pray that we may always hold fast to our faith, even in times of great difficulty.
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
                Today we pray for the virtue of faith and to hold fast to it even in great difficulties. 
                We remember how the Christian forces were at a great material disadvantage during the Battle of Lepanto.
              </p>

              <p className="mb-4">
                The Ottoman Empire had a much larger and more powerful navy than the Christian forces. 
                From a human perspective, the Christians had little chance of victory. However, they did not rely on human strength alone. 
                They placed their faith in God and turned to Mary's intercession with confidence.
              </p>

              <p className="mb-4">
                This teaches us an important lesson about perseverance in faith. Even when circumstances seem hopeless, 
                we must hold fast to our faith in God. We must trust that God can work miracles and that Mary's intercession is powerful.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us grow in all virtues necessary for holiness, 
                especially the virtue of faith. Let us ask her to pray that we may always hold fast to our faith, 
                even in times of great difficulty.
              </p>

              <p>
                Remember that God often works through our weaknesses and difficulties. When we persevere in faith 
                despite discouraging circumstances, we give God the opportunity to show His power and love. 
                Let us always hold fast to our faith, trusting in God's providence and Mary's intercession.
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
            Our Lady of the Rosary, help us to grow in all virtues necessary for holiness, especially the virtue of faith. 
            Pray for us that we may always hold fast to our faith, even in times of great difficulty. 
            Help us to persevere in faith like the Christians at the Battle of Lepanto, trusting in God's power and your intercession. 
            May we never be discouraged by difficult circumstances, but always place our trust in God. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        {/* Share Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent mb-6">Share this novena</h2>
          <ShareButton 
            title="Our Lady of the Rosary Novena - Day 3: Love" 
            url="/novenas/our-lady-of-the-rosary/day-3"
            excerpt="Join me in praying the Our Lady of the Rosary Novena - Day 3 focusing on Love." 
          />
        </div>

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-2"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 2: Faith
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-4"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 4: Prayer →
          </Link>
        </div>
      </div>
    </div>
  )
} 