import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 7: Devotion',
  description: 'Pray the Our Lady of Sorrows Novena - Day 7 focusing on Devotion. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 7',
    'sorrows novena day 7',
    'mary novena day 7',
    'our lady novena day 7',
    'sorrows prayer devotion',
    'day 7 sorrows novena',
    'devotion mary prayer',
    'sorrows novena devotion',
    'mary novena devotion'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 7: Devotion',
    description: 'Pray the Our Lady of Sorrows Novena - Day 7 focusing on Devotion. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-7',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 7: Devotion',
    description: 'Pray the Our Lady of Sorrows Novena - Day 7 focusing on Devotion. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay7Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 7: Devotion
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Join in praying the Our Lady of Sorrows Novena to seek Mary's intercession and experience her maternal care.
          </p>
          
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <Link href="/novenas" className="hover:text-gray-700">Novenas</Link>
            <span className="mx-2">→</span>
            <Link href="/novenas/our-lady-of-sorrows" className="hover:text-gray-700">Our Lady of Sorrows Novena</Link>
            <span className="mx-2">→</span>
            <span className="text-gray-800">Day 7</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Devotion</h2>
          <p className="text-gray-700 leading-relaxed">
            On this seventh day of the Our Lady of Sorrows Novena, we pray for an increase in devotion to Our Lady of Sorrows 
            among all Christians and to love her as our spiritual mother.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 7</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, thank You for the gift of Our Lady of Sorrows, our loving mother.</strong>
              </p>

              <p className="mb-6">
                <strong>Our Lady,</strong> you embraced your mission as Mother of God and our mother. At the Cross, Jesus entrusted us to you, and you have never ceased to intercede for your children.
              </p>

              <p className="mb-6">
                <strong>Today, we pray for an increase in devotion to you among all Christians.</strong> Help us to love you as our spiritual mother and to imitate your virtues in daily life.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may make use of every grace God offers for our salvation.</strong> Pray that we may grow in holiness and virtue every day.
              </p>

              <p className="mb-6">
                <strong>Special Intentions:</strong> (Mention your intentions here)
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows, pray for us!</strong>
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
                Today we pray for an increase in devotion to Our Lady of Sorrows among all Christians 
                and to love her as our spiritual mother.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows embraced her mission as Mother of God and our mother. At the Cross, 
                Jesus entrusted us to her, and she has never ceased to intercede for her children. 
                She is truly our spiritual mother, always ready to help us.
              </p>

              <p className="mb-4">
                Mary's devotion to God and her love for us is an example for all Christians. She shows us 
                how to love God with all our heart and how to serve others with selfless love. 
                Her virtues are a model for our daily lives.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to help us increase our devotion to her among all Christians. 
                Let us ask her to help us love her as our spiritual mother and to imitate her virtues in daily life.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may make use of every grace God offers for our salvation 
                and that we may grow in holiness and virtue every day. Mary's example shows us that devotion to her 
                leads us closer to her Son, Jesus Christ.
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
                Turn to her with confidence in every need, especially in times of suffering.
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
            Our Lady of Sorrows, help us to increase our devotion to you among all Christians. Help us to love you 
            as our spiritual mother and to imitate your virtues in daily life. Pray for us, that we may make use 
            of every grace God offers for our salvation and that we may grow in holiness and virtue every day. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Sorrows Novena - Day 7: Intercession"
          text="Join me in praying the Our Lady of Sorrows Novena - Day 7 focusing on Intercession."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-6"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 6: Trust
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-8"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 8: Courage →
          </Link>
        </div>
      </div>
    </div>
  )
} 