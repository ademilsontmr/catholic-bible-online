import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of the Rosary Novena - Day 2: Faith',
  description: 'Pray the Our Lady of the Rosary Novena - Day 2 focusing on Faith. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of the rosary novena day 2',
    'rosary novena day 2',
    'mary novena day 2',
    'our lady novena day 2',
    'rosary prayer faith',
    'day 2 rosary novena',
    'faith mary prayer',
    'rosary novena faith',
    'mary novena faith'
  ],
  openGraph: {
    title: 'Our Lady of the Rosary Novena - Day 2: Faith',
    description: 'Pray the Our Lady of the Rosary Novena - Day 2 focusing on Faith. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-the-rosary/day-2',
  },
  twitter: {
    title: 'Our Lady of the Rosary Novena - Day 2: Faith',
    description: 'Pray the Our Lady of the Rosary Novena - Day 2 focusing on Faith. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfTheRosaryNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of the Rosary Novena – Day 2: Faith
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Faith</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of the Rosary Novena, we pray for growth in faith and to never be discouraged, 
            even in times of difficulty. We remember how Christians turned to Mary's powerful intercession during the Battle of Lepanto.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

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
                <strong>Our Lady of the Rosary,</strong> Christians turned to your powerful intercession when they were in need during the great battle against the Ottoman Empire. Pope Pius V urged all Christians to pray the Rosary for divine help in the Battle of Lepanto.
              </p>

              <p className="mb-6">
                <strong>Please bring all our needs before your Divine Son's throne.</strong> Today, we especially ask you to pray that we and all people may grow in true devotion to the Rosary.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may always ask in faith for all that we need.</strong> Pray that we may never be discouraged in our faith, even in times of difficulty.
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
                Today we pray for growth in faith and to never be discouraged, even in times of difficulty. 
                We remember the powerful example of the Battle of Lepanto, when Christians turned to Mary's intercession.
              </p>

              <p className="mb-4">
                In 1571, the Christian forces were facing a great threat from the Ottoman Empire. Pope Pius V knew 
                that the situation was dire and urged all Christians to pray the Rosary for divine help. 
                The Christians placed their faith in God and turned to Mary's intercession with confidence.
              </p>

              <p className="mb-4">
                Despite the odds being against them, the Christian forces were victorious at the Battle of Lepanto. 
                This victory was attributed to Mary's intercession through the Rosary. It shows us that when we turn 
                to Mary with faith, she will help us in our times of need.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us grow in faith and to never be discouraged, 
                even in times of difficulty. Let us ask her to pray that we may always ask in faith for all that we need, 
                just as the Christians did during the Battle of Lepanto.
              </p>

              <p>
                Remember that Mary's intercession is powerful, and she wants to help us. When we pray the Rosary with faith, 
                we are opening ourselves to her help and to the graces that God wants to give us. 
                Let us never be discouraged in our faith, even when times are difficult.
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
            Our Lady of the Rosary, help us to grow in faith and to never be discouraged, even in times of difficulty. 
            Pray for us that we may always ask in faith for all that we need, just as the Christians did during the Battle of Lepanto. 
            Help us to grow in true devotion to the Rosary and to trust in your powerful intercession. 
            May we always remember that you are our mother and you want to help us. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of the Rosary Novena - Day 2: Hope"
          text="Join me in praying the Our Lady of the Rosary Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Devotion
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-the-rosary/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Perseverance →
          </Link>
        </div>
      </div>
    </div>
  )
} 