import Link from 'next/link'
import ShareButton from '@/components/ShareButton'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Lady of Sorrows Novena - Day 2: Families',
  description: 'Pray the Our Lady of Sorrows Novena - Day 2 focusing on Families. Join in praying the traditional novena to seek Mary\'s intercession.',
  keywords: [
    'our lady of sorrows novena day 2',
    'sorrows novena day 2',
    'mary novena day 2',
    'our lady novena day 2',
    'sorrows prayer families',
    'day 2 sorrows novena',
    'families mary prayer',
    'sorrows novena families',
    'mary novena families'
  ],
  openGraph: {
    title: 'Our Lady of Sorrows Novena - Day 2: Families',
    description: 'Pray the Our Lady of Sorrows Novena - Day 2 focusing on Families. Join in praying the traditional novena.',
    url: 'https://catholicbibleonline.com/novenas/our-lady-of-sorrows/day-2',
  },
  twitter: {
    title: 'Our Lady of Sorrows Novena - Day 2: Families',
    description: 'Pray the Our Lady of Sorrows Novena - Day 2 focusing on Families. Join in praying the traditional novena.',
  }
}

export default function OurLadyOfSorrowsNovenaDay2Page() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">
            Our Lady of Sorrows Novena – Day 2: Families
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
            <span className="text-gray-800">Day 2</span>
          </nav>
        </div>

        {/* Introduction */}
        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Today's Focus: Families</h2>
          <p className="text-gray-700 leading-relaxed">
            On this second day of the Our Lady of Sorrows Novena, we pray for all families to be united in love, 
            strengthened in faith, and protected from every harm. We ask Mary to intercede for all families.
          </p>
        </section>

        {/* Prayer Text */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-6">Prayer for Day 2</h2>

          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                <strong>Dear Lord, we thank You for giving us Our Lady of Sorrows to be our loving mother.</strong> 
                Hear the petitions she brings before Your throne on our behalf.
              </p>

              <p className="mb-6">
                <strong>Our Lady of Sorrows,</strong> you willingly accepted the mission of being the Mother of the Savior. Though you did not know every detail of your future suffering, you embraced God's plan with unconditional love. In the home of Nazareth, you nurtured the Holy Family with faith, humility, and perseverance.
              </p>

              <p className="mb-6">
                <strong>Today we ask that you intercede for all families.</strong> Pray that they may be united in love, strengthened in faith, and protected from every harm. May the example of the Holy Family inspire homes to be domestic churches of holiness and peace.
              </p>

              <p className="mb-6">
                <strong>Pray for us, that we may always fulfill the duties of our vocation faithfully and joyfully.</strong> Pray that we may grow in holiness and virtue each day.
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
                Today we pray for all families to be united in love, strengthened in faith, and protected from every harm. 
                We ask Mary to intercede for all families.
              </p>

              <p className="mb-4">
                Our Lady of Sorrows willingly accepted the mission of being the Mother of the Savior. Though she did not know 
                every detail of her future suffering, she embraced God's plan with unconditional love. 
                In the home of Nazareth, she nurtured the Holy Family with faith, humility, and perseverance.
              </p>

              <p className="mb-4">
                The Holy Family is the perfect model for all families. Mary, Joseph, and Jesus lived in perfect harmony, 
                united in love and strengthened in faith. Their home was truly a domestic church, a place of holiness and peace.
              </p>

              <p className="mb-4">
                As we pray today, let us ask Mary to intercede for all families. Let us pray that they may be united in love, 
                strengthened in faith, and protected from every harm. May the example of the Holy Family inspire homes 
                to be domestic churches of holiness and peace.
              </p>

              <p>
                Let us also ask Mary to pray for us, that we may always fulfill the duties of our vocation faithfully and joyfully, 
                and that we may grow in holiness and virtue each day. Mary's example shows us how to embrace God's plan 
                with unconditional love, even when we don't know what the future holds.
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
            Our Lady of Sorrows, intercede for all families that they may be united in love, strengthened in faith, 
            and protected from every harm. Help us to always fulfill the duties of our vocation faithfully and joyfully, 
            and to grow in holiness and virtue each day. May the example of the Holy Family inspire our homes 
            to be domestic churches of holiness and peace. Amen.
          </p>
        </section>

        

                {/* Share Section */}
        <ShareButton 
          title="Our Lady of Sorrows Novena - Day 2: Hope"
          text="Join me in praying the Our Lady of Sorrows Novena - Day 2 focusing on Hope."
        />

{/* Navigation */}
        <div className="flex justify-between items-center">
          <Link 
            href="/novenas/our-lady-of-sorrows/day-1"
            className="inline-flex items-center px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            ← Day 1: Mothers
          </Link>
          
          <Link 
            href="/novenas/our-lady-of-sorrows/day-3"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Day 3: Suffering →
          </Link>
        </div>
      </div>
    </div>
  )
} 